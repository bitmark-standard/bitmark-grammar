// Generated from ./typescript//bitmarkParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
let bitmarkParser = /** @class */ (() => {
    class bitmarkParser extends Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator(bitmarkParser._ATN, this);
        }
        // @Override
        // @NotNull
        get vocabulary() {
            return bitmarkParser.VOCABULARY;
        }
        // tslint:enable:no-trailing-whitespace
        // @Override
        get grammarFileName() { return "bitmarkParser.g4"; }
        // @Override
        get ruleNames() { return bitmarkParser.ruleNames; }
        // @Override
        get serializedATN() { return bitmarkParser._serializedATN; }
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, bitmarkParser.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 307;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 294;
                                this.bitmark_();
                                this.state = 304;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 298;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.S) {
                                                    {
                                                        {
                                                            this.state = 295;
                                                            this.match(bitmarkParser.S);
                                                        }
                                                    }
                                                    this.state = 300;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 301;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 306;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 309;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess) | (1 << bitmarkParser.BitRating) | (1 << bitmarkParser.BitSurvey))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)) | (1 << (bitmarkParser.BitLearningPathExternalLink - 32)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.OPESC - 64)) | (1 << (bitmarkParser.OPDANGLE - 64)) | (1 << (bitmarkParser.OPQ - 64)) | (1 << (bitmarkParser.OPS - 64)) | (1 << (bitmarkParser.COLON - 64)) | (1 << (bitmarkParser.AMP - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (bitmarkParser.Greater - 97)) | (1 << (bitmarkParser.Less - 97)) | (1 << (bitmarkParser.RightAngle - 97)) | (1 << (bitmarkParser.RightArrow - 97)) | (1 << (bitmarkParser.DBLEQ - 97)) | (1 << (bitmarkParser.QUOTE_INDEX - 97)) | (1 << (bitmarkParser.NUMERIC - 97)) | (1 << (bitmarkParser.STRING - 97)) | (1 << (bitmarkParser.SENTENCE - 97)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                    this.state = 314;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 311;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 316;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 317;
                    this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 2, bitmarkParser.RULE_bitmark_);
            try {
                this.state = 321;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.BitBook:
                    case bitmarkParser.BitChapter:
                    case bitmarkParser.BitToc:
                    case bitmarkParser.BitSummary:
                    case bitmarkParser.BitIntlink:
                    case bitmarkParser.BitIntRef:
                    case bitmarkParser.BitAlias:
                    case bitmarkParser.BitGroups:
                    case bitmarkParser.BitGroupt:
                    case bitmarkParser.BitStatement:
                    case bitmarkParser.BitDetails:
                    case bitmarkParser.BitArticle:
                    case bitmarkParser.BitPage:
                    case bitmarkParser.BitEssay:
                    case bitmarkParser.BitMessage:
                    case bitmarkParser.BitCorrection:
                    case bitmarkParser.BitMark:
                    case bitmarkParser.BitDocup:
                    case bitmarkParser.BitTakepic:
                    case bitmarkParser.BitRecaud:
                    case bitmarkParser.BitPrepnote:
                    case bitmarkParser.BitAssign:
                    case bitmarkParser.BitBotint:
                    case bitmarkParser.BitSelfassess:
                    case bitmarkParser.BitRating:
                    case bitmarkParser.BitSurvey:
                    case bitmarkParser.BitSurvey1:
                    case bitmarkParser.BitSurveyanon:
                    case bitmarkParser.BitSurveyanon1:
                    case bitmarkParser.BitNote:
                    case bitmarkParser.BitInfo:
                    case bitmarkParser.BitWarning:
                    case bitmarkParser.BitRemark:
                    case bitmarkParser.BitHint:
                    case bitmarkParser.BitHelp:
                    case bitmarkParser.BitDanger:
                    case bitmarkParser.BitBug:
                    case bitmarkParser.BitSidenote:
                    case bitmarkParser.BitStickynote:
                    case bitmarkParser.BitQuote:
                    case bitmarkParser.BitFootnote:
                    case bitmarkParser.BitExample:
                    case bitmarkParser.BitButtonCopytext:
                    case bitmarkParser.BitWbtContinue:
                    case bitmarkParser.BitLearningPathDetails:
                    case bitmarkParser.BitLearningPathLti:
                    case bitmarkParser.BitLearningPathStep:
                    case bitmarkParser.BitLearningPathBook:
                    case bitmarkParser.BitLearningPathSign:
                    case bitmarkParser.BitLearningPathVideoCall:
                    case bitmarkParser.BitLearningPathLearningGoal:
                    case bitmarkParser.BitLearningPathClosing:
                    case bitmarkParser.BitLearningPathFeedback:
                    case bitmarkParser.BitLearningPathBotTraining:
                    case bitmarkParser.BitLearningPathExternalLink:
                    case bitmarkParser.BitLearningPathClassroomTraining:
                    case bitmarkParser.BitLearningPathClassroomEvent:
                    case bitmarkParser.BitBotActionSend:
                    case bitmarkParser.BitBotActionAnnounce:
                    case bitmarkParser.BitBotActionSave:
                    case bitmarkParser.BitBotActionRemind:
                    case bitmarkParser.BitVendorPadletEmbed:
                    case bitmarkParser.BitScorm:
                    case bitmarkParser.OPDANGLE:
                    case bitmarkParser.OPQ:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 319;
                            this.bit();
                        }
                        break;
                    case bitmarkParser.S:
                    case bitmarkParser.OPESC:
                    case bitmarkParser.OPS:
                    case bitmarkParser.COLON:
                    case bitmarkParser.AMP:
                    case bitmarkParser.Greater:
                    case bitmarkParser.Less:
                    case bitmarkParser.RightAngle:
                    case bitmarkParser.RightArrow:
                    case bitmarkParser.DBLEQ:
                    case bitmarkParser.QUOTE_INDEX:
                    case bitmarkParser.NUMERIC:
                    case bitmarkParser.STRING:
                    case bitmarkParser.SENTENCE:
                    case bitmarkParser.AmpAudio:
                    case bitmarkParser.AmpImage:
                    case bitmarkParser.AmpVideo:
                    case bitmarkParser.AmpArticle:
                    case bitmarkParser.AmpDocument:
                    case bitmarkParser.AmpApp:
                    case bitmarkParser.AmpWebsite:
                    case bitmarkParser.AmpStillImageFilm:
                    case bitmarkParser.AmpAudioLink:
                    case bitmarkParser.AmpImageLink:
                    case bitmarkParser.AmpVideoLink:
                    case bitmarkParser.AmpArticleLink:
                    case bitmarkParser.AmpDocumentLink:
                    case bitmarkParser.AmpAppLink:
                    case bitmarkParser.AmpWebsiteLink:
                    case bitmarkParser.AmpStillImageFilmLink:
                    case bitmarkParser.BitmarkMinus:
                    case bitmarkParser.BitmarkPlus:
                    case bitmarkParser.URL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 320;
                            this.lines();
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
        bit() {
            let _localctx = new BitContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, bitmarkParser.RULE_bit);
            try {
                this.state = 387;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.BitBook:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 323;
                            this.book();
                        }
                        break;
                    case bitmarkParser.BitChapter:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 324;
                            this.chapter();
                        }
                        break;
                    case bitmarkParser.BitSummary:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 325;
                            this.summary();
                        }
                        break;
                    case bitmarkParser.BitToc:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 326;
                            this.toc();
                        }
                        break;
                    case bitmarkParser.BitAlias:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 327;
                            this.bit_alias();
                        }
                        break;
                    case bitmarkParser.BitIntlink:
                    case bitmarkParser.BitIntRef:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 328;
                            this.internal_link();
                        }
                        break;
                    case bitmarkParser.OPDANGLE:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 329;
                            this.anchor();
                        }
                        break;
                    case bitmarkParser.BitGroups:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 330;
                            this.group_born();
                        }
                        break;
                    case bitmarkParser.BitGroupt:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 331;
                            this.group_died();
                        }
                        break;
                    case bitmarkParser.BitEssay:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 332;
                            this.essay();
                        }
                        break;
                    case bitmarkParser.BitCorrection:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 333;
                            this.correction();
                        }
                        break;
                    case bitmarkParser.BitMark:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 334;
                            this.mark_();
                        }
                        break;
                    case bitmarkParser.BitDocup:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 335;
                            this.document_upload();
                        }
                        break;
                    case bitmarkParser.BitTakepic:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 336;
                            this.take_picture();
                        }
                        break;
                    case bitmarkParser.BitRecaud:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 337;
                            this.record_audio();
                        }
                        break;
                    case bitmarkParser.BitPrepnote:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 338;
                            this.preparation_note();
                        }
                        break;
                    case bitmarkParser.BitAssign:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 339;
                            this.assignment();
                        }
                        break;
                    case bitmarkParser.BitArticle:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 340;
                            this.article();
                        }
                        break;
                    case bitmarkParser.BitStatement:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 341;
                            this.statement();
                        }
                        break;
                    case bitmarkParser.BitDetails:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 342;
                            this.details();
                        }
                        break;
                    case bitmarkParser.BitButtonCopytext:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 343;
                            this.buttoncopytext();
                        }
                        break;
                    case bitmarkParser.BitWbtContinue:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 344;
                            this.wbtcontinue();
                        }
                        break;
                    case bitmarkParser.BitLearningPathDetails:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 345;
                            this.learningpathdetails();
                        }
                        break;
                    case bitmarkParser.BitNote:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 346;
                            this.note();
                        }
                        break;
                    case bitmarkParser.BitInfo:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 347;
                            this.info();
                        }
                        break;
                    case bitmarkParser.BitWarning:
                        this.enterOuterAlt(_localctx, 26);
                        {
                            this.state = 348;
                            this.warning();
                        }
                        break;
                    case bitmarkParser.BitRemark:
                        this.enterOuterAlt(_localctx, 27);
                        {
                            this.state = 349;
                            this.remark();
                        }
                        break;
                    case bitmarkParser.BitHint:
                        this.enterOuterAlt(_localctx, 28);
                        {
                            this.state = 350;
                            this.hintbit();
                        }
                        break;
                    case bitmarkParser.BitHelp:
                        this.enterOuterAlt(_localctx, 29);
                        {
                            this.state = 351;
                            this.help();
                        }
                        break;
                    case bitmarkParser.BitDanger:
                        this.enterOuterAlt(_localctx, 30);
                        {
                            this.state = 352;
                            this.danger();
                        }
                        break;
                    case bitmarkParser.BitBug:
                        this.enterOuterAlt(_localctx, 31);
                        {
                            this.state = 353;
                            this.bug();
                        }
                        break;
                    case bitmarkParser.BitSidenote:
                        this.enterOuterAlt(_localctx, 32);
                        {
                            this.state = 354;
                            this.sidenote();
                        }
                        break;
                    case bitmarkParser.BitStickynote:
                        this.enterOuterAlt(_localctx, 33);
                        {
                            this.state = 355;
                            this.stickynote();
                        }
                        break;
                    case bitmarkParser.BitQuote:
                        this.enterOuterAlt(_localctx, 34);
                        {
                            this.state = 356;
                            this.quote();
                        }
                        break;
                    case bitmarkParser.BitFootnote:
                        this.enterOuterAlt(_localctx, 35);
                        {
                            this.state = 357;
                            this.footnote();
                        }
                        break;
                    case bitmarkParser.BitExample:
                        this.enterOuterAlt(_localctx, 36);
                        {
                            this.state = 358;
                            this.examplebit();
                        }
                        break;
                    case bitmarkParser.BitPage:
                        this.enterOuterAlt(_localctx, 37);
                        {
                            this.state = 359;
                            this.page();
                        }
                        break;
                    case bitmarkParser.BitMessage:
                        this.enterOuterAlt(_localctx, 38);
                        {
                            this.state = 360;
                            this.message();
                        }
                        break;
                    case bitmarkParser.BitBotint:
                        this.enterOuterAlt(_localctx, 39);
                        {
                            this.state = 361;
                            this.bot_interview();
                        }
                        break;
                    case bitmarkParser.BitSelfassess:
                        this.enterOuterAlt(_localctx, 40);
                        {
                            this.state = 362;
                            this.self_assessment();
                        }
                        break;
                    case bitmarkParser.BitRating:
                        this.enterOuterAlt(_localctx, 41);
                        {
                            this.state = 363;
                            this.rating();
                        }
                        break;
                    case bitmarkParser.BitSurvey:
                        this.enterOuterAlt(_localctx, 42);
                        {
                            this.state = 364;
                            this.survey();
                        }
                        break;
                    case bitmarkParser.BitSurvey1:
                        this.enterOuterAlt(_localctx, 43);
                        {
                            this.state = 365;
                            this.survey_1();
                        }
                        break;
                    case bitmarkParser.BitSurveyanon:
                        this.enterOuterAlt(_localctx, 44);
                        {
                            this.state = 366;
                            this.survey_anonymous();
                        }
                        break;
                    case bitmarkParser.BitSurveyanon1:
                        this.enterOuterAlt(_localctx, 45);
                        {
                            this.state = 367;
                            this.survey_anonymous_1();
                        }
                        break;
                    case bitmarkParser.OPQ:
                        this.enterOuterAlt(_localctx, 46);
                        {
                            this.state = 368;
                            this.hint();
                        }
                        break;
                    case bitmarkParser.BitVendorPadletEmbed:
                        this.enterOuterAlt(_localctx, 47);
                        {
                            this.state = 369;
                            this.vendor_padlet_embed();
                        }
                        break;
                    case bitmarkParser.BitScorm:
                        this.enterOuterAlt(_localctx, 48);
                        {
                            this.state = 370;
                            this.scorm();
                        }
                        break;
                    case bitmarkParser.BitLearningPathLti:
                        this.enterOuterAlt(_localctx, 49);
                        {
                            this.state = 371;
                            this.learning_path_lti();
                        }
                        break;
                    case bitmarkParser.BitLearningPathStep:
                        this.enterOuterAlt(_localctx, 50);
                        {
                            this.state = 372;
                            this.learning_path_step();
                        }
                        break;
                    case bitmarkParser.BitLearningPathBook:
                        this.enterOuterAlt(_localctx, 51);
                        {
                            this.state = 373;
                            this.learning_path_book();
                        }
                        break;
                    case bitmarkParser.BitLearningPathSign:
                        this.enterOuterAlt(_localctx, 52);
                        {
                            this.state = 374;
                            this.learning_path_sign();
                        }
                        break;
                    case bitmarkParser.BitLearningPathVideoCall:
                        this.enterOuterAlt(_localctx, 53);
                        {
                            this.state = 375;
                            this.learning_path_video_call();
                        }
                        break;
                    case bitmarkParser.BitLearningPathLearningGoal:
                        this.enterOuterAlt(_localctx, 54);
                        {
                            this.state = 376;
                            this.learning_path_learning_goal();
                        }
                        break;
                    case bitmarkParser.BitLearningPathClosing:
                        this.enterOuterAlt(_localctx, 55);
                        {
                            this.state = 377;
                            this.learning_path_closing();
                        }
                        break;
                    case bitmarkParser.BitLearningPathFeedback:
                        this.enterOuterAlt(_localctx, 56);
                        {
                            this.state = 378;
                            this.learning_path_feedback();
                        }
                        break;
                    case bitmarkParser.BitLearningPathBotTraining:
                        this.enterOuterAlt(_localctx, 57);
                        {
                            this.state = 379;
                            this.learning_path_bot_training();
                        }
                        break;
                    case bitmarkParser.BitLearningPathExternalLink:
                        this.enterOuterAlt(_localctx, 58);
                        {
                            this.state = 380;
                            this.learning_path_external_link();
                        }
                        break;
                    case bitmarkParser.BitLearningPathClassroomTraining:
                        this.enterOuterAlt(_localctx, 59);
                        {
                            this.state = 381;
                            this.learning_path_classroom_training();
                        }
                        break;
                    case bitmarkParser.BitLearningPathClassroomEvent:
                        this.enterOuterAlt(_localctx, 60);
                        {
                            this.state = 382;
                            this.learning_path_classroom_event();
                        }
                        break;
                    case bitmarkParser.BitBotActionSend:
                        this.enterOuterAlt(_localctx, 61);
                        {
                            this.state = 383;
                            this.bot_action_send();
                        }
                        break;
                    case bitmarkParser.BitBotActionAnnounce:
                        this.enterOuterAlt(_localctx, 62);
                        {
                            this.state = 384;
                            this.bot_action_announce();
                        }
                        break;
                    case bitmarkParser.BitBotActionSave:
                        this.enterOuterAlt(_localctx, 63);
                        {
                            this.state = 385;
                            this.bot_action_save();
                        }
                        break;
                    case bitmarkParser.BitBotActionRemind:
                        this.enterOuterAlt(_localctx, 64);
                        {
                            this.state = 386;
                            this.bot_action_remind();
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
            this.enterRule(_localctx, 6, bitmarkParser.RULE_book);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 389;
                    this.match(bitmarkParser.BitBook);
                    this.state = 391;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                        case 1:
                            {
                                this.state = 390;
                                this.format();
                            }
                            break;
                    }
                    this.state = 393;
                    this.match(bitmarkParser.CL);
                    this.state = 401;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 397;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.NL) {
                                            {
                                                {
                                                    this.state = 394;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                            this.state = 399;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 400;
                                        this.bitElem();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 403;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
        chapter() {
            let _localctx = new ChapterContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, bitmarkParser.RULE_chapter);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 405;
                    this.match(bitmarkParser.BitChapter);
                    this.state = 407;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                        case 1:
                            {
                                this.state = 406;
                                this.format();
                            }
                            break;
                    }
                    this.state = 409;
                    this.match(bitmarkParser.CL);
                    this.state = 413;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 410;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 415;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 419;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                        case 1:
                            {
                                this.state = 416;
                                this.anchor();
                                this.state = 417;
                                this.match(bitmarkParser.NL);
                            }
                            break;
                    }
                    this.state = 421;
                    this.resource();
                    this.state = 431;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 425;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 422;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 427;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 428;
                                    this.resource();
                                }
                            }
                        }
                        this.state = 433;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
        toc() {
            let _localctx = new TocContext(this._ctx, this.state);
            this.enterRule(_localctx, 10, bitmarkParser.RULE_toc);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 434;
                    this.match(bitmarkParser.BitToc);
                    this.state = 436;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                        {
                            this.state = 435;
                            this.s_and_w();
                        }
                    }
                    this.state = 438;
                    this.match(bitmarkParser.CL);
                    this.state = 439;
                    this.match(bitmarkParser.NL);
                    this.state = 443;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPA || _la === bitmarkParser.OpAtCopyright) {
                        {
                            this.state = 440;
                            this.atdef();
                            this.state = 441;
                            this.match(bitmarkParser.NL);
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
        summary() {
            let _localctx = new SummaryContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, bitmarkParser.RULE_summary);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 445;
                    this.match(bitmarkParser.BitSummary);
                    this.state = 446;
                    this.match(bitmarkParser.CL);
                    this.state = 450;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 447;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 452;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    }
                    this.state = 453;
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
            this.enterRule(_localctx, 14, bitmarkParser.RULE_internal_link);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 455;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.BitIntlink || _la === bitmarkParser.BitIntRef)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
                        {
                            this.state = 456;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus)) {
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
                    this.state = 459;
                    this.match(bitmarkParser.CL);
                    this.state = 469;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 463;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 460;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 465;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 466;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 471;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
            this.enterRule(_localctx, 16, bitmarkParser.RULE_bit_alias);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 472;
                    this.match(bitmarkParser.BitAlias);
                    this.state = 473;
                    this.match(bitmarkParser.CL);
                    this.state = 474;
                    this.angleref();
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
            this.enterRule(_localctx, 18, bitmarkParser.RULE_title_etc);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 490;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 477;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmarkParser.NL) {
                                        {
                                            this.state = 476;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 486;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.OPHASH:
                                            {
                                                this.state = 479;
                                                this.title();
                                            }
                                            break;
                                        case bitmarkParser.OPA:
                                        case bitmarkParser.OpAtCopyright:
                                            {
                                                this.state = 480;
                                                this.atdef();
                                            }
                                            break;
                                        case bitmarkParser.OPC:
                                            {
                                                this.state = 481;
                                                this.item();
                                            }
                                            break;
                                        case bitmarkParser.OPB:
                                            {
                                                this.state = 482;
                                                this.instruction();
                                            }
                                            break;
                                        case bitmarkParser.OPRANGLES:
                                        case bitmarkParser.OPRANGLEL:
                                            {
                                                this.state = 483;
                                                this.angleref();
                                            }
                                            break;
                                        case bitmarkParser.OPDANGLE:
                                            {
                                                this.state = 484;
                                                this.anchor();
                                            }
                                            break;
                                        case bitmarkParser.AtProgress:
                                            {
                                                this.state = 485;
                                                this.progress();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                            }
                        }
                        this.state = 492;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
            this.enterRule(_localctx, 20, bitmarkParser.RULE_group_born);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 493;
                    this.match(bitmarkParser.BitGroups);
                    this.state = 494;
                    this.match(bitmarkParser.CL);
                    this.state = 504;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 495;
                                        this.match(bitmarkParser.NL);
                                        this.state = 496;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.OPR || _la === bitmarkParser.OPHASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 499;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                this.state = 499;
                                                this._errHandler.sync(this);
                                                switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                                                    case 1:
                                                        {
                                                            this.state = 497;
                                                            this.s_and_w();
                                                        }
                                                        break;
                                                    case 2:
                                                        {
                                                            this.state = 498;
                                                            this.match(bitmarkParser.COLON);
                                                        }
                                                        break;
                                                }
                                            }
                                            this.state = 501;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                                        this.state = 503;
                                        this.match(bitmarkParser.CL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 506;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 508;
                    this.match(bitmarkParser.NL);
                    this.state = 512;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 509;
                                    this.lines();
                                }
                            }
                        }
                        this.state = 514;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
        group_died() {
            let _localctx = new Group_diedContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, bitmarkParser.RULE_group_died);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 515;
                    this.match(bitmarkParser.BitGroupt);
                    this.state = 516;
                    this.match(bitmarkParser.CL);
                    this.state = 526;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 517;
                                        this.match(bitmarkParser.NL);
                                        this.state = 518;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.OPR || _la === bitmarkParser.OPHASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 521;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                this.state = 521;
                                                this._errHandler.sync(this);
                                                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                                                    case 1:
                                                        {
                                                            this.state = 519;
                                                            this.s_and_w();
                                                        }
                                                        break;
                                                    case 2:
                                                        {
                                                            this.state = 520;
                                                            this.match(bitmarkParser.COLON);
                                                        }
                                                        break;
                                                }
                                            }
                                            this.state = 523;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                                        this.state = 525;
                                        this.match(bitmarkParser.CL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 528;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 530;
                    this.match(bitmarkParser.NL);
                    this.state = 534;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 531;
                                    this.lines();
                                }
                            }
                        }
                        this.state = 536;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
        learning_path_lti() {
            let _localctx = new Learning_path_ltiContext(this._ctx, this.state);
            this.enterRule(_localctx, 24, bitmarkParser.RULE_learning_path_lti);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 537;
                    this.match(bitmarkParser.BitLearningPathLti);
                    this.state = 538;
                    this.format();
                    this.state = 539;
                    this.match(bitmarkParser.CL);
                    this.state = 543;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 540;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 545;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 553;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 546;
                                        this.bitElem();
                                        this.state = 550;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 547;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 552;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 555;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
        learning_path_step() {
            let _localctx = new Learning_path_stepContext(this._ctx, this.state);
            this.enterRule(_localctx, 26, bitmarkParser.RULE_learning_path_step);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 557;
                    this.match(bitmarkParser.BitLearningPathStep);
                    this.state = 558;
                    this.format();
                    this.state = 559;
                    this.match(bitmarkParser.CL);
                    this.state = 563;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 560;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 565;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 573;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 566;
                                        this.bitElem();
                                        this.state = 570;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 567;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 572;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 575;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
        learning_path_book() {
            let _localctx = new Learning_path_bookContext(this._ctx, this.state);
            this.enterRule(_localctx, 28, bitmarkParser.RULE_learning_path_book);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 577;
                    this.match(bitmarkParser.BitLearningPathBook);
                    this.state = 578;
                    this.format();
                    this.state = 579;
                    this.match(bitmarkParser.CL);
                    this.state = 583;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 580;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 585;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 593;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 586;
                                        this.bitElem();
                                        this.state = 590;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 587;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 592;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 595;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
        learning_path_sign() {
            let _localctx = new Learning_path_signContext(this._ctx, this.state);
            this.enterRule(_localctx, 30, bitmarkParser.RULE_learning_path_sign);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 597;
                    this.match(bitmarkParser.BitLearningPathSign);
                    this.state = 598;
                    this.format();
                    this.state = 599;
                    this.match(bitmarkParser.CL);
                    this.state = 603;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 600;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 605;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 613;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 606;
                                        this.bitElem();
                                        this.state = 610;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 607;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 612;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 615;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
        learning_path_video_call() {
            let _localctx = new Learning_path_video_callContext(this._ctx, this.state);
            this.enterRule(_localctx, 32, bitmarkParser.RULE_learning_path_video_call);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 617;
                    this.match(bitmarkParser.BitLearningPathVideoCall);
                    this.state = 618;
                    this.format();
                    this.state = 619;
                    this.match(bitmarkParser.CL);
                    this.state = 623;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 620;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 625;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 633;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 626;
                                        this.bitElem();
                                        this.state = 630;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 627;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 632;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 635;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
        learning_path_learning_goal() {
            let _localctx = new Learning_path_learning_goalContext(this._ctx, this.state);
            this.enterRule(_localctx, 34, bitmarkParser.RULE_learning_path_learning_goal);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 637;
                    this.match(bitmarkParser.BitLearningPathLearningGoal);
                    this.state = 638;
                    this.format();
                    this.state = 639;
                    this.match(bitmarkParser.CL);
                    this.state = 643;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 640;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 645;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 653;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 646;
                                        this.bitElem();
                                        this.state = 650;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 647;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 652;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 655;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
        learning_path_closing() {
            let _localctx = new Learning_path_closingContext(this._ctx, this.state);
            this.enterRule(_localctx, 36, bitmarkParser.RULE_learning_path_closing);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 657;
                    this.match(bitmarkParser.BitLearningPathClosing);
                    this.state = 658;
                    this.format();
                    this.state = 659;
                    this.match(bitmarkParser.CL);
                    this.state = 663;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 660;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 665;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 673;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 666;
                                        this.bitElem();
                                        this.state = 670;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 667;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 672;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 675;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
        learning_path_feedback() {
            let _localctx = new Learning_path_feedbackContext(this._ctx, this.state);
            this.enterRule(_localctx, 38, bitmarkParser.RULE_learning_path_feedback);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 677;
                    this.match(bitmarkParser.BitLearningPathFeedback);
                    this.state = 678;
                    this.format();
                    this.state = 679;
                    this.match(bitmarkParser.CL);
                    this.state = 683;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 680;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 685;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 693;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 686;
                                        this.bitElem();
                                        this.state = 690;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 687;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 692;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 695;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
        learning_path_bot_training() {
            let _localctx = new Learning_path_bot_trainingContext(this._ctx, this.state);
            this.enterRule(_localctx, 40, bitmarkParser.RULE_learning_path_bot_training);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 697;
                    this.match(bitmarkParser.BitLearningPathBotTraining);
                    this.state = 698;
                    this.format();
                    this.state = 699;
                    this.match(bitmarkParser.CL);
                    this.state = 703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 700;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 705;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 713;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 706;
                                        this.bitElem();
                                        this.state = 710;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 707;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 712;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 715;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
        learning_path_external_link() {
            let _localctx = new Learning_path_external_linkContext(this._ctx, this.state);
            this.enterRule(_localctx, 42, bitmarkParser.RULE_learning_path_external_link);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 717;
                    this.match(bitmarkParser.BitLearningPathExternalLink);
                    this.state = 718;
                    this.format();
                    this.state = 719;
                    this.match(bitmarkParser.CL);
                    this.state = 723;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 720;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 725;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 733;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 726;
                                        this.bitElem();
                                        this.state = 730;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 727;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 732;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 735;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
        learning_path_classroom_training() {
            let _localctx = new Learning_path_classroom_trainingContext(this._ctx, this.state);
            this.enterRule(_localctx, 44, bitmarkParser.RULE_learning_path_classroom_training);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 737;
                    this.match(bitmarkParser.BitLearningPathClassroomTraining);
                    this.state = 738;
                    this.format();
                    this.state = 739;
                    this.match(bitmarkParser.CL);
                    this.state = 743;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 740;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 745;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 753;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 746;
                                        this.bitElem();
                                        this.state = 750;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 747;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 752;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 755;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
        learning_path_classroom_event() {
            let _localctx = new Learning_path_classroom_eventContext(this._ctx, this.state);
            this.enterRule(_localctx, 46, bitmarkParser.RULE_learning_path_classroom_event);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 757;
                    this.match(bitmarkParser.BitLearningPathClassroomEvent);
                    this.state = 758;
                    this.format();
                    this.state = 759;
                    this.match(bitmarkParser.CL);
                    this.state = 763;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 760;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 765;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 773;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 766;
                                        this.bitElem();
                                        this.state = 770;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 767;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 772;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 775;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
        bot_action_send() {
            let _localctx = new Bot_action_sendContext(this._ctx, this.state);
            this.enterRule(_localctx, 48, bitmarkParser.RULE_bot_action_send);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 777;
                    this.match(bitmarkParser.BitBotActionSend);
                    this.state = 778;
                    this.format();
                    this.state = 779;
                    this.match(bitmarkParser.CL);
                    this.state = 783;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 780;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 785;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 793;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 786;
                                        this.bitElem();
                                        this.state = 790;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 787;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 792;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 795;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
        bot_action_announce() {
            let _localctx = new Bot_action_announceContext(this._ctx, this.state);
            this.enterRule(_localctx, 50, bitmarkParser.RULE_bot_action_announce);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 797;
                    this.match(bitmarkParser.BitBotActionAnnounce);
                    this.state = 798;
                    this.format();
                    this.state = 799;
                    this.match(bitmarkParser.CL);
                    this.state = 803;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 800;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 805;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 813;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 806;
                                        this.bitElem();
                                        this.state = 810;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 807;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 812;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 815;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
        bot_action_save() {
            let _localctx = new Bot_action_saveContext(this._ctx, this.state);
            this.enterRule(_localctx, 52, bitmarkParser.RULE_bot_action_save);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 817;
                    this.match(bitmarkParser.BitBotActionSave);
                    this.state = 818;
                    this.format();
                    this.state = 819;
                    this.match(bitmarkParser.CL);
                    this.state = 823;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 820;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 825;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 833;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 826;
                                        this.bitElem();
                                        this.state = 830;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 827;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 832;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 835;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
        bot_action_remind() {
            let _localctx = new Bot_action_remindContext(this._ctx, this.state);
            this.enterRule(_localctx, 54, bitmarkParser.RULE_bot_action_remind);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 837;
                    this.match(bitmarkParser.BitBotActionRemind);
                    this.state = 838;
                    this.format();
                    this.state = 839;
                    this.match(bitmarkParser.CL);
                    this.state = 843;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 840;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 845;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 853;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 846;
                                        this.bitElem();
                                        this.state = 850;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 847;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 852;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 855;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
            this.enterRule(_localctx, 56, bitmarkParser.RULE_bitElem);
            try {
                this.state = 888;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 857;
                            this.match(bitmarkParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 858;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 859;
                            this.gap();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 860;
                            this.reference();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 861;
                            this.dateprop();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 862;
                            this.progress();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 863;
                            this.atdef();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 864;
                            this.dollarans();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 865;
                            this.partans();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 866;
                            this.item();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 867;
                            this.title();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 868;
                            this.instruction();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 869;
                            this.hint();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 870;
                            this.s_and_w();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 871;
                            this.example();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 872;
                            this.bool_label();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 873;
                            this.progress_points();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 874;
                            this.istracked();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 875;
                            this.isinfoonly();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 876;
                            this.imagebit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 877;
                            this.audiobit();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 878;
                            this.videobit();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 879;
                            this.articlebit();
                        }
                        break;
                    case 24:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 880;
                            this.documentbit();
                        }
                        break;
                    case 25:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 881;
                            this.appbit();
                        }
                        break;
                    case 26:
                        this.enterOuterAlt(_localctx, 26);
                        {
                            this.state = 882;
                            this.websitebit();
                        }
                        break;
                    case 27:
                        this.enterOuterAlt(_localctx, 27);
                        {
                            this.state = 883;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 28:
                        this.enterOuterAlt(_localctx, 28);
                        {
                            this.state = 884;
                            this.angleref();
                        }
                        break;
                    case 29:
                        this.enterOuterAlt(_localctx, 29);
                        {
                            this.state = 885;
                            this.anchor();
                        }
                        break;
                    case 30:
                        this.enterOuterAlt(_localctx, 30);
                        {
                            this.state = 886;
                            this.bracketed_text();
                        }
                        break;
                    case 31:
                        this.enterOuterAlt(_localctx, 31);
                        {
                            this.state = 887;
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
        gap() {
            let _localctx = new GapContext(this._ctx, this.state);
            this.enterRule(_localctx, 58, bitmarkParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 890;
                    this.single_gap();
                    this.state = 898;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 896;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case bitmarkParser.OPU:
                                        {
                                            this.state = 891;
                                            this.single_gap();
                                        }
                                        break;
                                    case bitmarkParser.OPB:
                                        {
                                            this.state = 892;
                                            this.instruction();
                                        }
                                        break;
                                    case bitmarkParser.OPQ:
                                        {
                                            this.state = 893;
                                            this.hint();
                                        }
                                        break;
                                    case bitmarkParser.OPC:
                                        {
                                            this.state = 894;
                                            this.item();
                                        }
                                        break;
                                    case bitmarkParser.AtExampleWithStr:
                                    case bitmarkParser.AtExamplecol:
                                    case bitmarkParser.AtExamplecl:
                                        {
                                            this.state = 895;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 900;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
            this.enterRule(_localctx, 60, bitmarkParser.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 901;
                    this.match(bitmarkParser.OPU);
                    this.state = 905;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                        case 1:
                            {
                                this.state = 902;
                                this.match(bitmarkParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 903;
                                this.match(bitmarkParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 910;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                        {
                            {
                                this.state = 907;
                                this.s_and_w();
                            }
                        }
                        this.state = 912;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 913;
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
        choice_plus() {
            let _localctx = new Choice_plusContext(this._ctx, this.state);
            this.enterRule(_localctx, 62, bitmarkParser.RULE_choice_plus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 916;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPC) {
                        {
                            this.state = 915;
                            this.item();
                        }
                    }
                    this.state = 918;
                    this.match(bitmarkParser.OPP);
                    this.state = 920;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 919;
                                this.s_and_w();
                            }
                        }
                        this.state = 922;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                    this.state = 924;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 64, bitmarkParser.RULE_choice_minus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 927;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPC) {
                        {
                            this.state = 926;
                            this.item();
                        }
                    }
                    this.state = 929;
                    this.match(bitmarkParser.OPM);
                    this.state = 931;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 930;
                                this.s_and_w();
                            }
                        }
                        this.state = 933;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                    this.state = 935;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 66, bitmarkParser.RULE_choice_star);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 938;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPC) {
                        {
                            this.state = 937;
                            this.item();
                        }
                    }
                    this.state = 940;
                    this.match(bitmarkParser.OPR);
                    this.state = 942;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 941;
                                this.s_and_w();
                            }
                        }
                        this.state = 944;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                    this.state = 946;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 68, bitmarkParser.RULE_essay);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 948;
                    this.match(bitmarkParser.BitEssay);
                    this.state = 949;
                    this.format();
                    this.state = 950;
                    this.match(bitmarkParser.CL);
                    this.state = 951;
                    this.match(bitmarkParser.NL);
                    this.state = 961;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    {
                                        this.state = 952;
                                        this.bitElem();
                                    }
                                    this.state = 956;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 953;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 958;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 963;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                    }
                    this.state = 973;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 967;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 964;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 969;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    {
                                        this.state = 970;
                                        this.ml_example();
                                    }
                                }
                            }
                        }
                        this.state = 975;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                    }
                    this.state = 979;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 976;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 981;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                    }
                    this.state = 995;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                        case 1:
                            {
                                this.state = 982;
                                this.resource();
                                this.state = 992;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 986;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 983;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 988;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 989;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 994;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                                }
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
        ml_example() {
            let _localctx = new Ml_exampleContext(this._ctx, this.state);
            this.enterRule(_localctx, 70, bitmarkParser.RULE_ml_example);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 997;
                    this.match(bitmarkParser.AtExamplecol);
                    this.state = 1005;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                        {
                            this.state = 999;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.NL) {
                                {
                                    this.state = 998;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                            this.state = 1001;
                            this.lines();
                            this.state = 1003;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.NL) {
                                {
                                    this.state = 1002;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 1007;
                    this.match(bitmarkParser.CL);
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
        partans() {
            let _localctx = new PartansContext(this._ctx, this.state);
            this.enterRule(_localctx, 72, bitmarkParser.RULE_partans);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1009;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AtPartialAnswerS || _la === bitmarkParser.AtPartialAnswer)) {
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
        resource() {
            let _localctx = new ResourceContext(this._ctx, this.state);
            this.enterRule(_localctx, 74, bitmarkParser.RULE_resource);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1011;
                    this.bitElem();
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
            this.enterRule(_localctx, 76, bitmarkParser.RULE_correction);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1013;
                    this.match(bitmarkParser.BitCorrection);
                    this.state = 1014;
                    this.format();
                    this.state = 1015;
                    this.match(bitmarkParser.CL);
                    this.state = 1016;
                    this.match(bitmarkParser.NL);
                    this.state = 1026;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1017;
                                    this.bitElem();
                                    this.state = 1021;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1018;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1023;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1028;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    }
                    this.state = 1032;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.OPP || _la === bitmarkParser.OPM) {
                        {
                            {
                                this.state = 1029;
                                this.corrs();
                            }
                        }
                        this.state = 1034;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1038;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1035;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1040;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                    }
                    this.state = 1054;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                        case 1:
                            {
                                this.state = 1041;
                                this.resource();
                                this.state = 1051;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1045;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1042;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1047;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1048;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1053;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                                }
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
        corrs() {
            let _localctx = new CorrsContext(this._ctx, this.state);
            this.enterRule(_localctx, 78, bitmarkParser.RULE_corrs);
            try {
                let _alt;
                this.state = 1074;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPM:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1056;
                            this.match(bitmarkParser.OPM);
                            this.state = 1060;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1057;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1062;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                            }
                            this.state = 1063;
                            this.match(bitmarkParser.CL);
                            this.state = 1064;
                            this.match(bitmarkParser.NL);
                        }
                        break;
                    case bitmarkParser.OPP:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1065;
                            this.match(bitmarkParser.OPP);
                            this.state = 1069;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1066;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1071;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                            }
                            this.state = 1072;
                            this.match(bitmarkParser.CL);
                            this.state = 1073;
                            this.match(bitmarkParser.NL);
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
            this.enterRule(_localctx, 80, bitmarkParser.RULE_mark_);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1076;
                    this.match(bitmarkParser.BitMark);
                    this.state = 1077;
                    this.format();
                    this.state = 1078;
                    this.match(bitmarkParser.CL);
                    this.state = 1079;
                    this.match(bitmarkParser.NL);
                    this.state = 1092;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1082;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1080;
                                                this.bitElem();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1081;
                                                this.mark_text();
                                            }
                                            break;
                                    }
                                    this.state = 1087;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1084;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1089;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1094;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                    }
                    this.state = 1098;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1095;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1100;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                    }
                    this.state = 1114;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                        case 1:
                            {
                                this.state = 1101;
                                this.resource();
                                this.state = 1111;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1105;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1102;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1107;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1108;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1113;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                                }
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
        mark_text() {
            let _localctx = new Mark_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 82, bitmarkParser.RULE_mark_text);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1116;
                    this.match(bitmarkParser.OPS);
                    this.state = 1117;
                    this.s_and_w();
                    this.state = 1118;
                    this.match(bitmarkParser.CL);
                    this.state = 1120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPAMARK) {
                        {
                            this.state = 1119;
                            this.mark_color();
                        }
                    }
                    this.state = 1127;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 1125;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case bitmarkParser.OPQ:
                                        {
                                            this.state = 1122;
                                            this.hint();
                                        }
                                        break;
                                    case bitmarkParser.OPC:
                                        {
                                            this.state = 1123;
                                            this.item();
                                        }
                                        break;
                                    case bitmarkParser.OPB:
                                        {
                                            this.state = 1124;
                                            this.instruction();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 1129;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
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
            this.enterRule(_localctx, 84, bitmarkParser.RULE_mark_color);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1130;
                    this.match(bitmarkParser.OPAMARK);
                    this.state = 1134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 1131;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 1136;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1137;
                    this.match(bitmarkParser.STRING);
                    this.state = 1141;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 1138;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 1143;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1144;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 86, bitmarkParser.RULE_document_upload);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1146;
                    this.match(bitmarkParser.BitDocup);
                    this.state = 1148;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (bitmarkParser.Image_type - 72)) | (1 << (bitmarkParser.Audio_type - 72)) | (1 << (bitmarkParser.Video_type - 72)))) !== 0)) {
                        {
                            this.state = 1147;
                            _la = this._input.LA(1);
                            if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (bitmarkParser.Image_type - 72)) | (1 << (bitmarkParser.Audio_type - 72)) | (1 << (bitmarkParser.Video_type - 72)))) !== 0))) {
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
                    this.state = 1150;
                    this.match(bitmarkParser.CL);
                    this.state = 1151;
                    this.match(bitmarkParser.NL);
                    this.state = 1161;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1152;
                                    this.bitElem();
                                    this.state = 1156;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1153;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1158;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1163;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                    }
                    this.state = 1167;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1164;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1169;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                    }
                    this.state = 1183;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                        case 1:
                            {
                                this.state = 1170;
                                this.resource();
                                this.state = 1180;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1174;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1171;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1176;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1177;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1182;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                }
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
        take_picture() {
            let _localctx = new Take_pictureContext(this._ctx, this.state);
            this.enterRule(_localctx, 88, bitmarkParser.RULE_take_picture);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1185;
                    this.match(bitmarkParser.BitTakepic);
                    this.state = 1186;
                    this.format();
                    this.state = 1187;
                    this.match(bitmarkParser.CL);
                    this.state = 1188;
                    this.match(bitmarkParser.NL);
                    this.state = 1198;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1189;
                                    this.bitElem();
                                    this.state = 1193;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1190;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1195;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1200;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                    }
                    this.state = 1204;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1201;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1206;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                    }
                    this.state = 1220;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                        case 1:
                            {
                                this.state = 1207;
                                this.resource();
                                this.state = 1217;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1211;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1208;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1213;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1214;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1219;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                                }
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
        record_audio() {
            let _localctx = new Record_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 90, bitmarkParser.RULE_record_audio);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1222;
                    this.match(bitmarkParser.BitRecaud);
                    this.state = 1223;
                    this.format();
                    this.state = 1224;
                    this.match(bitmarkParser.CL);
                    this.state = 1225;
                    this.match(bitmarkParser.NL);
                    this.state = 1235;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1226;
                                    this.bitElem();
                                    this.state = 1230;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1227;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1232;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1237;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                    }
                    this.state = 1241;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1238;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1243;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                    }
                    this.state = 1257;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                        case 1:
                            {
                                this.state = 1244;
                                this.resource();
                                this.state = 1254;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1248;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1245;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1250;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1251;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1256;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                                }
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
        preparation_note() {
            let _localctx = new Preparation_noteContext(this._ctx, this.state);
            this.enterRule(_localctx, 92, bitmarkParser.RULE_preparation_note);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1259;
                    this.match(bitmarkParser.BitPrepnote);
                    this.state = 1260;
                    this.format();
                    this.state = 1261;
                    this.match(bitmarkParser.CL);
                    this.state = 1265;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1262;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1267;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                    }
                    this.state = 1277;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1268;
                                    this.bitElem();
                                    this.state = 1272;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1269;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1274;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1279;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                    }
                    this.state = 1281;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                        case 1:
                            {
                                this.state = 1280;
                                this.lines();
                            }
                            break;
                    }
                    this.state = 1286;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1283;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1288;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                    }
                    this.state = 1302;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                        case 1:
                            {
                                this.state = 1289;
                                this.resource();
                                this.state = 1299;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1293;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1290;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1295;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1296;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1301;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                                }
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
            this.enterRule(_localctx, 94, bitmarkParser.RULE_assignment);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1304;
                    this.match(bitmarkParser.BitAssign);
                    this.state = 1305;
                    this.format();
                    this.state = 1306;
                    this.match(bitmarkParser.CL);
                    this.state = 1308;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1307;
                                        this.match(bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1310;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1321;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1312;
                                    this.bitElem();
                                    this.state = 1316;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1313;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1318;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1323;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                    }
                    this.state = 1325;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                        case 1:
                            {
                                this.state = 1324;
                                this.lines();
                            }
                            break;
                    }
                    this.state = 1330;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1327;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1332;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                    }
                    this.state = 1346;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                        case 1:
                            {
                                this.state = 1333;
                                this.resource();
                                this.state = 1343;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1337;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1334;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1339;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1340;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1345;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                                }
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
        article() {
            let _localctx = new ArticleContext(this._ctx, this.state);
            this.enterRule(_localctx, 96, bitmarkParser.RULE_article);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1348;
                    this.match(bitmarkParser.BitArticle);
                    this.state = 1349;
                    this.format();
                    this.state = 1350;
                    this.match(bitmarkParser.CL);
                    this.state = 1354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1351;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1356;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1364;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1357;
                                        this.bitElem();
                                        this.state = 1361;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1358;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1363;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1366;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
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
        statement() {
            let _localctx = new StatementContext(this._ctx, this.state);
            this.enterRule(_localctx, 98, bitmarkParser.RULE_statement);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1368;
                    this.match(bitmarkParser.BitStatement);
                    this.state = 1369;
                    this.format();
                    this.state = 1370;
                    this.match(bitmarkParser.CL);
                    this.state = 1374;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1371;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1376;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1384;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1377;
                                        this.bitElem();
                                        this.state = 1381;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1378;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1383;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1386;
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
        details() {
            let _localctx = new DetailsContext(this._ctx, this.state);
            this.enterRule(_localctx, 100, bitmarkParser.RULE_details);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1388;
                    this.match(bitmarkParser.BitDetails);
                    this.state = 1389;
                    this.format();
                    this.state = 1390;
                    this.match(bitmarkParser.CL);
                    this.state = 1394;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1391;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1396;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1404;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1397;
                                        this.bitElem();
                                        this.state = 1401;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1398;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1403;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1406;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
        buttoncopytext() {
            let _localctx = new ButtoncopytextContext(this._ctx, this.state);
            this.enterRule(_localctx, 102, bitmarkParser.RULE_buttoncopytext);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1408;
                    this.match(bitmarkParser.BitButtonCopytext);
                    this.state = 1409;
                    this.format();
                    this.state = 1410;
                    this.match(bitmarkParser.CL);
                    this.state = 1414;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1411;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1416;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1424;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1417;
                                        this.bitElem();
                                        this.state = 1421;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1418;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1423;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1426;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
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
        wbtcontinue() {
            let _localctx = new WbtcontinueContext(this._ctx, this.state);
            this.enterRule(_localctx, 104, bitmarkParser.RULE_wbtcontinue);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1428;
                    this.match(bitmarkParser.BitWbtContinue);
                    this.state = 1429;
                    this.format();
                    this.state = 1430;
                    this.match(bitmarkParser.CL);
                    this.state = 1434;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1431;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1436;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1444;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1437;
                                        this.bitElem();
                                        this.state = 1441;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1438;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1443;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1446;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
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
        learningpathdetails() {
            let _localctx = new LearningpathdetailsContext(this._ctx, this.state);
            this.enterRule(_localctx, 106, bitmarkParser.RULE_learningpathdetails);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1448;
                    this.match(bitmarkParser.BitLearningPathDetails);
                    this.state = 1449;
                    this.format();
                    this.state = 1450;
                    this.match(bitmarkParser.CL);
                    this.state = 1454;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1451;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1456;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1464;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1457;
                                        this.bitElem();
                                        this.state = 1461;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1458;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1463;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1466;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
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
        page() {
            let _localctx = new PageContext(this._ctx, this.state);
            this.enterRule(_localctx, 108, bitmarkParser.RULE_page);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1468;
                    this.match(bitmarkParser.BitPage);
                    this.state = 1469;
                    this.format();
                    this.state = 1470;
                    this.match(bitmarkParser.CL);
                    this.state = 1474;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1471;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1476;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1484;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1477;
                                        this.bitElem();
                                        this.state = 1481;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1478;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1483;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1486;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
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
        note() {
            let _localctx = new NoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 110, bitmarkParser.RULE_note);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1488;
                    this.match(bitmarkParser.BitNote);
                    this.state = 1489;
                    this.format();
                    this.state = 1490;
                    this.match(bitmarkParser.CL);
                    this.state = 1494;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1491;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1496;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1504;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1497;
                                        this.bitElem();
                                        this.state = 1501;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1498;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1503;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1506;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
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
        info() {
            let _localctx = new InfoContext(this._ctx, this.state);
            this.enterRule(_localctx, 112, bitmarkParser.RULE_info);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1508;
                    this.match(bitmarkParser.BitInfo);
                    this.state = 1509;
                    this.format();
                    this.state = 1510;
                    this.match(bitmarkParser.CL);
                    this.state = 1514;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1511;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1516;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1524;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1517;
                                        this.bitElem();
                                        this.state = 1521;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1518;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1523;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1526;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
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
        warning() {
            let _localctx = new WarningContext(this._ctx, this.state);
            this.enterRule(_localctx, 114, bitmarkParser.RULE_warning);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1528;
                    this.match(bitmarkParser.BitWarning);
                    this.state = 1529;
                    this.format();
                    this.state = 1530;
                    this.match(bitmarkParser.CL);
                    this.state = 1534;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1531;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1536;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1544;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1537;
                                        this.bitElem();
                                        this.state = 1541;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1538;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1543;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1546;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
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
        remark() {
            let _localctx = new RemarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 116, bitmarkParser.RULE_remark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1548;
                    this.match(bitmarkParser.BitRemark);
                    this.state = 1549;
                    this.format();
                    this.state = 1550;
                    this.match(bitmarkParser.CL);
                    this.state = 1554;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1551;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1556;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1564;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1557;
                                        this.bitElem();
                                        this.state = 1561;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1558;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1563;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1566;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
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
        help() {
            let _localctx = new HelpContext(this._ctx, this.state);
            this.enterRule(_localctx, 118, bitmarkParser.RULE_help);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1568;
                    this.match(bitmarkParser.BitHelp);
                    this.state = 1569;
                    this.format();
                    this.state = 1570;
                    this.match(bitmarkParser.CL);
                    this.state = 1574;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1571;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1576;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1584;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1577;
                                        this.bitElem();
                                        this.state = 1581;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1578;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1583;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1586;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
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
        danger() {
            let _localctx = new DangerContext(this._ctx, this.state);
            this.enterRule(_localctx, 120, bitmarkParser.RULE_danger);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1588;
                    this.match(bitmarkParser.BitDanger);
                    this.state = 1589;
                    this.format();
                    this.state = 1590;
                    this.match(bitmarkParser.CL);
                    this.state = 1594;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1591;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1596;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1604;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1597;
                                        this.bitElem();
                                        this.state = 1601;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1598;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1603;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1606;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
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
        bug() {
            let _localctx = new BugContext(this._ctx, this.state);
            this.enterRule(_localctx, 122, bitmarkParser.RULE_bug);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1608;
                    this.match(bitmarkParser.BitBug);
                    this.state = 1609;
                    this.format();
                    this.state = 1610;
                    this.match(bitmarkParser.CL);
                    this.state = 1614;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1611;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1616;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1624;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1617;
                                        this.bitElem();
                                        this.state = 1621;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1618;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1623;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1626;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
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
        sidenote() {
            let _localctx = new SidenoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 124, bitmarkParser.RULE_sidenote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1628;
                    this.match(bitmarkParser.BitSidenote);
                    this.state = 1629;
                    this.format();
                    this.state = 1630;
                    this.match(bitmarkParser.CL);
                    this.state = 1634;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1631;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1636;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1644;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1637;
                                        this.bitElem();
                                        this.state = 1641;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1638;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1643;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1646;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
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
        stickynote() {
            let _localctx = new StickynoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 126, bitmarkParser.RULE_stickynote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1648;
                    this.match(bitmarkParser.BitStickynote);
                    this.state = 1649;
                    this.format();
                    this.state = 1650;
                    this.match(bitmarkParser.CL);
                    this.state = 1654;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1651;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1656;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1664;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1657;
                                        this.bitElem();
                                        this.state = 1661;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1658;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1663;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1666;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
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
        quote() {
            let _localctx = new QuoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 128, bitmarkParser.RULE_quote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1668;
                    this.match(bitmarkParser.BitQuote);
                    this.state = 1669;
                    this.format();
                    this.state = 1670;
                    this.match(bitmarkParser.CL);
                    this.state = 1674;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1671;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1676;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1684;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1677;
                                        this.bitElem();
                                        this.state = 1681;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1678;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1683;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1686;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
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
        footnote() {
            let _localctx = new FootnoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 130, bitmarkParser.RULE_footnote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1688;
                    this.match(bitmarkParser.BitFootnote);
                    this.state = 1689;
                    this.format();
                    this.state = 1690;
                    this.match(bitmarkParser.CL);
                    this.state = 1694;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1691;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1696;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1704;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1697;
                                        this.bitElem();
                                        this.state = 1701;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1698;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1703;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1706;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
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
        hintbit() {
            let _localctx = new HintbitContext(this._ctx, this.state);
            this.enterRule(_localctx, 132, bitmarkParser.RULE_hintbit);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1708;
                    this.match(bitmarkParser.BitHint);
                    this.state = 1709;
                    this.format();
                    this.state = 1710;
                    this.match(bitmarkParser.CL);
                    this.state = 1714;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1711;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1716;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1724;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1717;
                                        this.bitElem();
                                        this.state = 1721;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1718;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1723;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1726;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
        examplebit() {
            let _localctx = new ExamplebitContext(this._ctx, this.state);
            this.enterRule(_localctx, 134, bitmarkParser.RULE_examplebit);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1728;
                    this.match(bitmarkParser.BitExample);
                    this.state = 1729;
                    this.format();
                    this.state = 1730;
                    this.match(bitmarkParser.CL);
                    this.state = 1734;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1731;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1736;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1744;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1737;
                                        this.bitElem();
                                        this.state = 1741;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1738;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1743;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1746;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
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
        vendor_padlet_embed() {
            let _localctx = new Vendor_padlet_embedContext(this._ctx, this.state);
            this.enterRule(_localctx, 136, bitmarkParser.RULE_vendor_padlet_embed);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1748;
                    this.match(bitmarkParser.BitVendorPadletEmbed);
                    this.state = 1749;
                    this.format();
                    this.state = 1750;
                    this.match(bitmarkParser.CL);
                    this.state = 1754;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1751;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1756;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1764;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1757;
                                        this.bitElem();
                                        this.state = 1761;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1758;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1763;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1766;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
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
        scorm() {
            let _localctx = new ScormContext(this._ctx, this.state);
            this.enterRule(_localctx, 138, bitmarkParser.RULE_scorm);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1768;
                    this.match(bitmarkParser.BitScorm);
                    this.state = 1769;
                    this.format();
                    this.state = 1770;
                    this.match(bitmarkParser.CL);
                    this.state = 1774;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1771;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1776;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1784;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1777;
                                        this.bitElem();
                                        this.state = 1781;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1778;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1783;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1786;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
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
        message() {
            let _localctx = new MessageContext(this._ctx, this.state);
            this.enterRule(_localctx, 140, bitmarkParser.RULE_message);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1788;
                    this.match(bitmarkParser.BitMessage);
                    this.state = 1789;
                    this.format();
                    this.state = 1790;
                    this.match(bitmarkParser.CL);
                    this.state = 1794;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1791;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1796;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1804;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1797;
                                        this.bitElem();
                                        this.state = 1801;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1798;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1803;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1806;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
        bot_interview() {
            let _localctx = new Bot_interviewContext(this._ctx, this.state);
            this.enterRule(_localctx, 142, bitmarkParser.RULE_bot_interview);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1808;
                    this.match(bitmarkParser.BitBotint);
                    this.state = 1809;
                    this.format();
                    this.state = 1810;
                    this.match(bitmarkParser.CL);
                    this.state = 1821;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1811;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1812;
                                        this.bot_choice();
                                        this.state = 1818;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2) {
                                            {
                                                {
                                                    this.state = 1813;
                                                    this.sspl();
                                                    this.state = 1814;
                                                    this.bot_choice();
                                                }
                                            }
                                            this.state = 1820;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1823;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1825;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1829;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1826;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1831;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
                    }
                    this.state = 1845;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 232, this._ctx)) {
                        case 1:
                            {
                                this.state = 1832;
                                this.resource();
                                this.state = 1842;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1836;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1833;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1838;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1839;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1844;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
                                }
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
        bot_choice() {
            let _localctx = new Bot_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 144, bitmarkParser.RULE_bot_choice);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1854;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1854;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 233, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1847;
                                        this.words();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1848;
                                        this.instruction();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1849;
                                        this.audiobit();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 1850;
                                        this.gap();
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 1851;
                                        this.choice_plus();
                                    }
                                    break;
                                case 6:
                                    {
                                        this.state = 1852;
                                        this.choice_minus();
                                    }
                                    break;
                                case 7:
                                    {
                                        this.state = 1853;
                                        this.choice_star();
                                    }
                                    break;
                            }
                        }
                        this.state = 1856;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (bitmarkParser.OPU - 81)) | (1 << (bitmarkParser.OPB - 81)) | (1 << (bitmarkParser.OPP - 81)) | (1 << (bitmarkParser.OPM - 81)) | (1 << (bitmarkParser.OPR - 81)) | (1 << (bitmarkParser.OPC - 81)) | (1 << (bitmarkParser.AMP - 81)) | (1 << (bitmarkParser.Greater - 81)) | (1 << (bitmarkParser.Less - 81)) | (1 << (bitmarkParser.RightAngle - 81)) | (1 << (bitmarkParser.RightArrow - 81)) | (1 << (bitmarkParser.QUOTE_INDEX - 81)))) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (bitmarkParser.SENTENCE - 113)) | (1 << (bitmarkParser.AmpAudio - 113)) | (1 << (bitmarkParser.AmpImage - 113)))) !== 0) || ((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (bitmarkParser.AmpVideo - 146)) | (1 << (bitmarkParser.AmpArticle - 146)) | (1 << (bitmarkParser.AmpDocument - 146)) | (1 << (bitmarkParser.AmpApp - 146)) | (1 << (bitmarkParser.AmpWebsite - 146)) | (1 << (bitmarkParser.AmpStillImageFilm - 146)) | (1 << (bitmarkParser.OpAmpAudio - 146)) | (1 << (bitmarkParser.AmpAudioLink - 146)) | (1 << (bitmarkParser.AmpImageLink - 146)) | (1 << (bitmarkParser.AmpVideoLink - 146)) | (1 << (bitmarkParser.AmpArticleLink - 146)) | (1 << (bitmarkParser.AmpDocumentLink - 146)) | (1 << (bitmarkParser.AmpAppLink - 146)) | (1 << (bitmarkParser.AmpWebsiteLink - 146)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 146)) | (1 << (bitmarkParser.OpAmpAudioLink - 146)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus);
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
            this.enterRule(_localctx, 146, bitmarkParser.RULE_rating);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1858;
                    this.match(bitmarkParser.BitRating);
                    this.state = 1859;
                    this.format();
                    this.state = 1860;
                    this.match(bitmarkParser.CL);
                    this.state = 1864;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1861;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1866;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1876;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPDOLL - 75)) | (1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPRANGLES - 75)) | (1 << (bitmarkParser.OPRANGLEL - 75)) | (1 << (bitmarkParser.OPDANGLE - 75)) | (1 << (bitmarkParser.OPU - 75)) | (1 << (bitmarkParser.OPB - 75)) | (1 << (bitmarkParser.OPQ - 75)) | (1 << (bitmarkParser.OPA - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.OPHASH - 75)) | (1 << (bitmarkParser.OPC - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (bitmarkParser.DCANY - 107)) | (1 << (bitmarkParser.ArticleText - 107)) | (1 << (bitmarkParser.NUMERIC - 107)) | (1 << (bitmarkParser.STRING - 107)) | (1 << (bitmarkParser.SENTENCE - 107)) | (1 << (bitmarkParser.AtProgress - 107)) | (1 << (bitmarkParser.AtReference - 107)) | (1 << (bitmarkParser.AtProgressPoints - 107)) | (1 << (bitmarkParser.AtExampleWithStr - 107)) | (1 << (bitmarkParser.AtExamplecol - 107)) | (1 << (bitmarkParser.AtExamplecl - 107)) | (1 << (bitmarkParser.AtPartialAnswerS - 107)) | (1 << (bitmarkParser.AtPartialAnswer - 107)) | (1 << (bitmarkParser.AtLabeltrue - 107)) | (1 << (bitmarkParser.AtLabelfalse - 107)) | (1 << (bitmarkParser.OpAtCopyright - 107)) | (1 << (bitmarkParser.OpAtIsTracked - 107)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (bitmarkParser.AtDate - 139)) | (1 << (bitmarkParser.AmpAudio - 139)) | (1 << (bitmarkParser.AmpImage - 139)) | (1 << (bitmarkParser.AmpVideo - 139)) | (1 << (bitmarkParser.AmpArticle - 139)) | (1 << (bitmarkParser.AmpDocument - 139)) | (1 << (bitmarkParser.AmpApp - 139)) | (1 << (bitmarkParser.AmpWebsite - 139)) | (1 << (bitmarkParser.AmpStillImageFilm - 139)) | (1 << (bitmarkParser.OpAmpAudio - 139)) | (1 << (bitmarkParser.OpAmpImage - 139)) | (1 << (bitmarkParser.OpAmpImageZoom - 139)) | (1 << (bitmarkParser.OpAmpImageWAudio - 139)) | (1 << (bitmarkParser.OpAmpVideo - 139)) | (1 << (bitmarkParser.OpAmpArticle - 139)) | (1 << (bitmarkParser.OpAmpDocument - 139)) | (1 << (bitmarkParser.OpAmpApp - 139)) | (1 << (bitmarkParser.OpAmpWebsite - 139)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 139)) | (1 << (bitmarkParser.BracEnclose - 139)) | (1 << (bitmarkParser.AmpAudioLink - 139)) | (1 << (bitmarkParser.AmpImageLink - 139)) | (1 << (bitmarkParser.AmpVideoLink - 139)) | (1 << (bitmarkParser.AmpArticleLink - 139)) | (1 << (bitmarkParser.AmpDocumentLink - 139)) | (1 << (bitmarkParser.AmpAppLink - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (bitmarkParser.AmpWebsiteLink - 171)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.OpAmpAudioLink - 171)) | (1 << (bitmarkParser.OpAmpImageLink - 171)) | (1 << (bitmarkParser.OpAmpVideoLink - 171)) | (1 << (bitmarkParser.OpAmpArticleLink - 171)) | (1 << (bitmarkParser.OpAmpDocumentLink - 171)) | (1 << (bitmarkParser.OpAmpAppLink - 171)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 171)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.BitmarkMinus - 171)) | (1 << (bitmarkParser.BitmarkPlus - 171)) | (1 << (bitmarkParser.URL - 171)) | (1 << (bitmarkParser.LIST_LINE - 171)))) !== 0)) {
                        {
                            {
                                this.state = 1867;
                                this.bitElem();
                                this.state = 1871;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 1868;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 1873;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1878;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1887;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1879;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1880;
                                        this.s_and_w();
                                        this.state = 1883;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1881;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 1882;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 1885;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1889;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1891;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1895;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1892;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1897;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
                    }
                    this.state = 1911;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 243, this._ctx)) {
                        case 1:
                            {
                                this.state = 1898;
                                this.resource();
                                this.state = 1908;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1902;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1899;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1904;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1905;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1910;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
                                }
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
        bullet_item() {
            let _localctx = new Bullet_itemContext(this._ctx, this.state);
            this.enterRule(_localctx, 148, bitmarkParser.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1913;
                    this.match(bitmarkParser.OPBUL);
                    this.state = 1914;
                    this.s_and_w();
                    this.state = 1915;
                    this.match(bitmarkParser.CL);
                    this.state = 1917;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.AtPoints) {
                        {
                            this.state = 1916;
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
            this.enterRule(_localctx, 150, bitmarkParser.RULE_survey);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1919;
                    this.match(bitmarkParser.BitSurvey);
                    this.state = 1920;
                    this.format();
                    this.state = 1921;
                    this.match(bitmarkParser.CL);
                    this.state = 1925;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1922;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1927;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1937;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPDOLL - 75)) | (1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPRANGLES - 75)) | (1 << (bitmarkParser.OPRANGLEL - 75)) | (1 << (bitmarkParser.OPDANGLE - 75)) | (1 << (bitmarkParser.OPU - 75)) | (1 << (bitmarkParser.OPB - 75)) | (1 << (bitmarkParser.OPQ - 75)) | (1 << (bitmarkParser.OPA - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.OPHASH - 75)) | (1 << (bitmarkParser.OPC - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (bitmarkParser.DCANY - 107)) | (1 << (bitmarkParser.ArticleText - 107)) | (1 << (bitmarkParser.NUMERIC - 107)) | (1 << (bitmarkParser.STRING - 107)) | (1 << (bitmarkParser.SENTENCE - 107)) | (1 << (bitmarkParser.AtProgress - 107)) | (1 << (bitmarkParser.AtReference - 107)) | (1 << (bitmarkParser.AtProgressPoints - 107)) | (1 << (bitmarkParser.AtExampleWithStr - 107)) | (1 << (bitmarkParser.AtExamplecol - 107)) | (1 << (bitmarkParser.AtExamplecl - 107)) | (1 << (bitmarkParser.AtPartialAnswerS - 107)) | (1 << (bitmarkParser.AtPartialAnswer - 107)) | (1 << (bitmarkParser.AtLabeltrue - 107)) | (1 << (bitmarkParser.AtLabelfalse - 107)) | (1 << (bitmarkParser.OpAtCopyright - 107)) | (1 << (bitmarkParser.OpAtIsTracked - 107)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (bitmarkParser.AtDate - 139)) | (1 << (bitmarkParser.AmpAudio - 139)) | (1 << (bitmarkParser.AmpImage - 139)) | (1 << (bitmarkParser.AmpVideo - 139)) | (1 << (bitmarkParser.AmpArticle - 139)) | (1 << (bitmarkParser.AmpDocument - 139)) | (1 << (bitmarkParser.AmpApp - 139)) | (1 << (bitmarkParser.AmpWebsite - 139)) | (1 << (bitmarkParser.AmpStillImageFilm - 139)) | (1 << (bitmarkParser.OpAmpAudio - 139)) | (1 << (bitmarkParser.OpAmpImage - 139)) | (1 << (bitmarkParser.OpAmpImageZoom - 139)) | (1 << (bitmarkParser.OpAmpImageWAudio - 139)) | (1 << (bitmarkParser.OpAmpVideo - 139)) | (1 << (bitmarkParser.OpAmpArticle - 139)) | (1 << (bitmarkParser.OpAmpDocument - 139)) | (1 << (bitmarkParser.OpAmpApp - 139)) | (1 << (bitmarkParser.OpAmpWebsite - 139)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 139)) | (1 << (bitmarkParser.BracEnclose - 139)) | (1 << (bitmarkParser.AmpAudioLink - 139)) | (1 << (bitmarkParser.AmpImageLink - 139)) | (1 << (bitmarkParser.AmpVideoLink - 139)) | (1 << (bitmarkParser.AmpArticleLink - 139)) | (1 << (bitmarkParser.AmpDocumentLink - 139)) | (1 << (bitmarkParser.AmpAppLink - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (bitmarkParser.AmpWebsiteLink - 171)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.OpAmpAudioLink - 171)) | (1 << (bitmarkParser.OpAmpImageLink - 171)) | (1 << (bitmarkParser.OpAmpVideoLink - 171)) | (1 << (bitmarkParser.OpAmpArticleLink - 171)) | (1 << (bitmarkParser.OpAmpDocumentLink - 171)) | (1 << (bitmarkParser.OpAmpAppLink - 171)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 171)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.BitmarkMinus - 171)) | (1 << (bitmarkParser.BitmarkPlus - 171)) | (1 << (bitmarkParser.URL - 171)) | (1 << (bitmarkParser.LIST_LINE - 171)))) !== 0)) {
                        {
                            {
                                this.state = 1928;
                                this.bitElem();
                                this.state = 1932;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 1929;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 1934;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1939;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1955;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1940;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1942;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                            {
                                                this.state = 1941;
                                                this.s_and_w();
                                            }
                                        }
                                        this.state = 1951;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1947;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === bitmarkParser.NL) {
                                                        {
                                                            {
                                                                this.state = 1944;
                                                                this.match(bitmarkParser.NL);
                                                            }
                                                        }
                                                        this.state = 1949;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 1950;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 1953;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1957;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1959;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        survey_1() {
            let _localctx = new Survey_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 152, bitmarkParser.RULE_survey_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1961;
                    this.match(bitmarkParser.BitSurvey1);
                    this.state = 1962;
                    this.format();
                    this.state = 1963;
                    this.match(bitmarkParser.CL);
                    this.state = 1967;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1964;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1969;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1979;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPDOLL - 75)) | (1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPRANGLES - 75)) | (1 << (bitmarkParser.OPRANGLEL - 75)) | (1 << (bitmarkParser.OPDANGLE - 75)) | (1 << (bitmarkParser.OPU - 75)) | (1 << (bitmarkParser.OPB - 75)) | (1 << (bitmarkParser.OPQ - 75)) | (1 << (bitmarkParser.OPA - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.OPHASH - 75)) | (1 << (bitmarkParser.OPC - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (bitmarkParser.DCANY - 107)) | (1 << (bitmarkParser.ArticleText - 107)) | (1 << (bitmarkParser.NUMERIC - 107)) | (1 << (bitmarkParser.STRING - 107)) | (1 << (bitmarkParser.SENTENCE - 107)) | (1 << (bitmarkParser.AtProgress - 107)) | (1 << (bitmarkParser.AtReference - 107)) | (1 << (bitmarkParser.AtProgressPoints - 107)) | (1 << (bitmarkParser.AtExampleWithStr - 107)) | (1 << (bitmarkParser.AtExamplecol - 107)) | (1 << (bitmarkParser.AtExamplecl - 107)) | (1 << (bitmarkParser.AtPartialAnswerS - 107)) | (1 << (bitmarkParser.AtPartialAnswer - 107)) | (1 << (bitmarkParser.AtLabeltrue - 107)) | (1 << (bitmarkParser.AtLabelfalse - 107)) | (1 << (bitmarkParser.OpAtCopyright - 107)) | (1 << (bitmarkParser.OpAtIsTracked - 107)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (bitmarkParser.AtDate - 139)) | (1 << (bitmarkParser.AmpAudio - 139)) | (1 << (bitmarkParser.AmpImage - 139)) | (1 << (bitmarkParser.AmpVideo - 139)) | (1 << (bitmarkParser.AmpArticle - 139)) | (1 << (bitmarkParser.AmpDocument - 139)) | (1 << (bitmarkParser.AmpApp - 139)) | (1 << (bitmarkParser.AmpWebsite - 139)) | (1 << (bitmarkParser.AmpStillImageFilm - 139)) | (1 << (bitmarkParser.OpAmpAudio - 139)) | (1 << (bitmarkParser.OpAmpImage - 139)) | (1 << (bitmarkParser.OpAmpImageZoom - 139)) | (1 << (bitmarkParser.OpAmpImageWAudio - 139)) | (1 << (bitmarkParser.OpAmpVideo - 139)) | (1 << (bitmarkParser.OpAmpArticle - 139)) | (1 << (bitmarkParser.OpAmpDocument - 139)) | (1 << (bitmarkParser.OpAmpApp - 139)) | (1 << (bitmarkParser.OpAmpWebsite - 139)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 139)) | (1 << (bitmarkParser.BracEnclose - 139)) | (1 << (bitmarkParser.AmpAudioLink - 139)) | (1 << (bitmarkParser.AmpImageLink - 139)) | (1 << (bitmarkParser.AmpVideoLink - 139)) | (1 << (bitmarkParser.AmpArticleLink - 139)) | (1 << (bitmarkParser.AmpDocumentLink - 139)) | (1 << (bitmarkParser.AmpAppLink - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (bitmarkParser.AmpWebsiteLink - 171)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.OpAmpAudioLink - 171)) | (1 << (bitmarkParser.OpAmpImageLink - 171)) | (1 << (bitmarkParser.OpAmpVideoLink - 171)) | (1 << (bitmarkParser.OpAmpArticleLink - 171)) | (1 << (bitmarkParser.OpAmpDocumentLink - 171)) | (1 << (bitmarkParser.OpAmpAppLink - 171)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 171)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.BitmarkMinus - 171)) | (1 << (bitmarkParser.BitmarkPlus - 171)) | (1 << (bitmarkParser.URL - 171)) | (1 << (bitmarkParser.LIST_LINE - 171)))) !== 0)) {
                        {
                            {
                                this.state = 1970;
                                this.bitElem();
                                this.state = 1974;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 1971;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 1976;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1981;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1990;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1982;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1983;
                                        this.s_and_w();
                                        this.state = 1986;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1984;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 1985;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 1988;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1992;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1994;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        survey_anonymous() {
            let _localctx = new Survey_anonymousContext(this._ctx, this.state);
            this.enterRule(_localctx, 154, bitmarkParser.RULE_survey_anonymous);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1996;
                    this.match(bitmarkParser.BitSurveyanon);
                    this.state = 1997;
                    this.format();
                    this.state = 1998;
                    this.match(bitmarkParser.CL);
                    this.state = 2002;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1999;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2004;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2014;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPDOLL - 75)) | (1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPRANGLES - 75)) | (1 << (bitmarkParser.OPRANGLEL - 75)) | (1 << (bitmarkParser.OPDANGLE - 75)) | (1 << (bitmarkParser.OPU - 75)) | (1 << (bitmarkParser.OPB - 75)) | (1 << (bitmarkParser.OPQ - 75)) | (1 << (bitmarkParser.OPA - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.OPHASH - 75)) | (1 << (bitmarkParser.OPC - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (bitmarkParser.DCANY - 107)) | (1 << (bitmarkParser.ArticleText - 107)) | (1 << (bitmarkParser.NUMERIC - 107)) | (1 << (bitmarkParser.STRING - 107)) | (1 << (bitmarkParser.SENTENCE - 107)) | (1 << (bitmarkParser.AtProgress - 107)) | (1 << (bitmarkParser.AtReference - 107)) | (1 << (bitmarkParser.AtProgressPoints - 107)) | (1 << (bitmarkParser.AtExampleWithStr - 107)) | (1 << (bitmarkParser.AtExamplecol - 107)) | (1 << (bitmarkParser.AtExamplecl - 107)) | (1 << (bitmarkParser.AtPartialAnswerS - 107)) | (1 << (bitmarkParser.AtPartialAnswer - 107)) | (1 << (bitmarkParser.AtLabeltrue - 107)) | (1 << (bitmarkParser.AtLabelfalse - 107)) | (1 << (bitmarkParser.OpAtCopyright - 107)) | (1 << (bitmarkParser.OpAtIsTracked - 107)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (bitmarkParser.AtDate - 139)) | (1 << (bitmarkParser.AmpAudio - 139)) | (1 << (bitmarkParser.AmpImage - 139)) | (1 << (bitmarkParser.AmpVideo - 139)) | (1 << (bitmarkParser.AmpArticle - 139)) | (1 << (bitmarkParser.AmpDocument - 139)) | (1 << (bitmarkParser.AmpApp - 139)) | (1 << (bitmarkParser.AmpWebsite - 139)) | (1 << (bitmarkParser.AmpStillImageFilm - 139)) | (1 << (bitmarkParser.OpAmpAudio - 139)) | (1 << (bitmarkParser.OpAmpImage - 139)) | (1 << (bitmarkParser.OpAmpImageZoom - 139)) | (1 << (bitmarkParser.OpAmpImageWAudio - 139)) | (1 << (bitmarkParser.OpAmpVideo - 139)) | (1 << (bitmarkParser.OpAmpArticle - 139)) | (1 << (bitmarkParser.OpAmpDocument - 139)) | (1 << (bitmarkParser.OpAmpApp - 139)) | (1 << (bitmarkParser.OpAmpWebsite - 139)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 139)) | (1 << (bitmarkParser.BracEnclose - 139)) | (1 << (bitmarkParser.AmpAudioLink - 139)) | (1 << (bitmarkParser.AmpImageLink - 139)) | (1 << (bitmarkParser.AmpVideoLink - 139)) | (1 << (bitmarkParser.AmpArticleLink - 139)) | (1 << (bitmarkParser.AmpDocumentLink - 139)) | (1 << (bitmarkParser.AmpAppLink - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (bitmarkParser.AmpWebsiteLink - 171)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.OpAmpAudioLink - 171)) | (1 << (bitmarkParser.OpAmpImageLink - 171)) | (1 << (bitmarkParser.OpAmpVideoLink - 171)) | (1 << (bitmarkParser.OpAmpArticleLink - 171)) | (1 << (bitmarkParser.OpAmpDocumentLink - 171)) | (1 << (bitmarkParser.OpAmpAppLink - 171)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 171)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.BitmarkMinus - 171)) | (1 << (bitmarkParser.BitmarkPlus - 171)) | (1 << (bitmarkParser.URL - 171)) | (1 << (bitmarkParser.LIST_LINE - 171)))) !== 0)) {
                        {
                            {
                                this.state = 2005;
                                this.bitElem();
                                this.state = 2009;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 2006;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 2011;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2016;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2025;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2017;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2018;
                                        this.s_and_w();
                                        this.state = 2021;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2019;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 2020;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2023;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2027;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2029;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        survey_anonymous_1() {
            let _localctx = new Survey_anonymous_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 156, bitmarkParser.RULE_survey_anonymous_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2031;
                    this.match(bitmarkParser.BitSurveyanon1);
                    this.state = 2032;
                    this.format();
                    this.state = 2033;
                    this.match(bitmarkParser.CL);
                    this.state = 2037;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 2034;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2039;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2049;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPDOLL - 75)) | (1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPRANGLES - 75)) | (1 << (bitmarkParser.OPRANGLEL - 75)) | (1 << (bitmarkParser.OPDANGLE - 75)) | (1 << (bitmarkParser.OPU - 75)) | (1 << (bitmarkParser.OPB - 75)) | (1 << (bitmarkParser.OPQ - 75)) | (1 << (bitmarkParser.OPA - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.OPHASH - 75)) | (1 << (bitmarkParser.OPC - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (bitmarkParser.DCANY - 107)) | (1 << (bitmarkParser.ArticleText - 107)) | (1 << (bitmarkParser.NUMERIC - 107)) | (1 << (bitmarkParser.STRING - 107)) | (1 << (bitmarkParser.SENTENCE - 107)) | (1 << (bitmarkParser.AtProgress - 107)) | (1 << (bitmarkParser.AtReference - 107)) | (1 << (bitmarkParser.AtProgressPoints - 107)) | (1 << (bitmarkParser.AtExampleWithStr - 107)) | (1 << (bitmarkParser.AtExamplecol - 107)) | (1 << (bitmarkParser.AtExamplecl - 107)) | (1 << (bitmarkParser.AtPartialAnswerS - 107)) | (1 << (bitmarkParser.AtPartialAnswer - 107)) | (1 << (bitmarkParser.AtLabeltrue - 107)) | (1 << (bitmarkParser.AtLabelfalse - 107)) | (1 << (bitmarkParser.OpAtCopyright - 107)) | (1 << (bitmarkParser.OpAtIsTracked - 107)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (bitmarkParser.AtDate - 139)) | (1 << (bitmarkParser.AmpAudio - 139)) | (1 << (bitmarkParser.AmpImage - 139)) | (1 << (bitmarkParser.AmpVideo - 139)) | (1 << (bitmarkParser.AmpArticle - 139)) | (1 << (bitmarkParser.AmpDocument - 139)) | (1 << (bitmarkParser.AmpApp - 139)) | (1 << (bitmarkParser.AmpWebsite - 139)) | (1 << (bitmarkParser.AmpStillImageFilm - 139)) | (1 << (bitmarkParser.OpAmpAudio - 139)) | (1 << (bitmarkParser.OpAmpImage - 139)) | (1 << (bitmarkParser.OpAmpImageZoom - 139)) | (1 << (bitmarkParser.OpAmpImageWAudio - 139)) | (1 << (bitmarkParser.OpAmpVideo - 139)) | (1 << (bitmarkParser.OpAmpArticle - 139)) | (1 << (bitmarkParser.OpAmpDocument - 139)) | (1 << (bitmarkParser.OpAmpApp - 139)) | (1 << (bitmarkParser.OpAmpWebsite - 139)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 139)) | (1 << (bitmarkParser.BracEnclose - 139)) | (1 << (bitmarkParser.AmpAudioLink - 139)) | (1 << (bitmarkParser.AmpImageLink - 139)) | (1 << (bitmarkParser.AmpVideoLink - 139)) | (1 << (bitmarkParser.AmpArticleLink - 139)) | (1 << (bitmarkParser.AmpDocumentLink - 139)) | (1 << (bitmarkParser.AmpAppLink - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (bitmarkParser.AmpWebsiteLink - 171)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.OpAmpAudioLink - 171)) | (1 << (bitmarkParser.OpAmpImageLink - 171)) | (1 << (bitmarkParser.OpAmpVideoLink - 171)) | (1 << (bitmarkParser.OpAmpArticleLink - 171)) | (1 << (bitmarkParser.OpAmpDocumentLink - 171)) | (1 << (bitmarkParser.OpAmpAppLink - 171)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 171)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.BitmarkMinus - 171)) | (1 << (bitmarkParser.BitmarkPlus - 171)) | (1 << (bitmarkParser.URL - 171)) | (1 << (bitmarkParser.LIST_LINE - 171)))) !== 0)) {
                        {
                            {
                                this.state = 2040;
                                this.bitElem();
                                this.state = 2044;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 2041;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 2046;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2051;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2060;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2052;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2053;
                                        this.s_and_w();
                                        this.state = 2056;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2054;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 2055;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2058;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2062;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2064;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        self_assessment() {
            let _localctx = new Self_assessmentContext(this._ctx, this.state);
            this.enterRule(_localctx, 158, bitmarkParser.RULE_self_assessment);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2066;
                    this.match(bitmarkParser.BitSelfassess);
                    this.state = 2067;
                    this.format();
                    this.state = 2068;
                    this.match(bitmarkParser.CL);
                    this.state = 2072;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 2069;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2074;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2084;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (bitmarkParser.OPDOLL - 75)) | (1 << (bitmarkParser.OPESC - 75)) | (1 << (bitmarkParser.OPRANGLES - 75)) | (1 << (bitmarkParser.OPRANGLEL - 75)) | (1 << (bitmarkParser.OPDANGLE - 75)) | (1 << (bitmarkParser.OPU - 75)) | (1 << (bitmarkParser.OPB - 75)) | (1 << (bitmarkParser.OPQ - 75)) | (1 << (bitmarkParser.OPA - 75)) | (1 << (bitmarkParser.OPS - 75)) | (1 << (bitmarkParser.OPHASH - 75)) | (1 << (bitmarkParser.OPC - 75)) | (1 << (bitmarkParser.COLON - 75)) | (1 << (bitmarkParser.AMP - 75)) | (1 << (bitmarkParser.Greater - 75)) | (1 << (bitmarkParser.Less - 75)) | (1 << (bitmarkParser.RightAngle - 75)) | (1 << (bitmarkParser.RightArrow - 75)) | (1 << (bitmarkParser.DBLEQ - 75)) | (1 << (bitmarkParser.QUOTE_INDEX - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (bitmarkParser.DCANY - 107)) | (1 << (bitmarkParser.ArticleText - 107)) | (1 << (bitmarkParser.NUMERIC - 107)) | (1 << (bitmarkParser.STRING - 107)) | (1 << (bitmarkParser.SENTENCE - 107)) | (1 << (bitmarkParser.AtProgress - 107)) | (1 << (bitmarkParser.AtReference - 107)) | (1 << (bitmarkParser.AtProgressPoints - 107)) | (1 << (bitmarkParser.AtExampleWithStr - 107)) | (1 << (bitmarkParser.AtExamplecol - 107)) | (1 << (bitmarkParser.AtExamplecl - 107)) | (1 << (bitmarkParser.AtPartialAnswerS - 107)) | (1 << (bitmarkParser.AtPartialAnswer - 107)) | (1 << (bitmarkParser.AtLabeltrue - 107)) | (1 << (bitmarkParser.AtLabelfalse - 107)) | (1 << (bitmarkParser.OpAtCopyright - 107)) | (1 << (bitmarkParser.OpAtIsTracked - 107)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (bitmarkParser.AtDate - 139)) | (1 << (bitmarkParser.AmpAudio - 139)) | (1 << (bitmarkParser.AmpImage - 139)) | (1 << (bitmarkParser.AmpVideo - 139)) | (1 << (bitmarkParser.AmpArticle - 139)) | (1 << (bitmarkParser.AmpDocument - 139)) | (1 << (bitmarkParser.AmpApp - 139)) | (1 << (bitmarkParser.AmpWebsite - 139)) | (1 << (bitmarkParser.AmpStillImageFilm - 139)) | (1 << (bitmarkParser.OpAmpAudio - 139)) | (1 << (bitmarkParser.OpAmpImage - 139)) | (1 << (bitmarkParser.OpAmpImageZoom - 139)) | (1 << (bitmarkParser.OpAmpImageWAudio - 139)) | (1 << (bitmarkParser.OpAmpVideo - 139)) | (1 << (bitmarkParser.OpAmpArticle - 139)) | (1 << (bitmarkParser.OpAmpDocument - 139)) | (1 << (bitmarkParser.OpAmpApp - 139)) | (1 << (bitmarkParser.OpAmpWebsite - 139)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 139)) | (1 << (bitmarkParser.BracEnclose - 139)) | (1 << (bitmarkParser.AmpAudioLink - 139)) | (1 << (bitmarkParser.AmpImageLink - 139)) | (1 << (bitmarkParser.AmpVideoLink - 139)) | (1 << (bitmarkParser.AmpArticleLink - 139)) | (1 << (bitmarkParser.AmpDocumentLink - 139)) | (1 << (bitmarkParser.AmpAppLink - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (bitmarkParser.AmpWebsiteLink - 171)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.OpAmpAudioLink - 171)) | (1 << (bitmarkParser.OpAmpImageLink - 171)) | (1 << (bitmarkParser.OpAmpVideoLink - 171)) | (1 << (bitmarkParser.OpAmpArticleLink - 171)) | (1 << (bitmarkParser.OpAmpDocumentLink - 171)) | (1 << (bitmarkParser.OpAmpAppLink - 171)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 171)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 171)) | (1 << (bitmarkParser.BitmarkMinus - 171)) | (1 << (bitmarkParser.BitmarkPlus - 171)) | (1 << (bitmarkParser.URL - 171)) | (1 << (bitmarkParser.LIST_LINE - 171)))) !== 0)) {
                        {
                            {
                                this.state = 2075;
                                this.bitElem();
                                this.state = 2079;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 2076;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 2081;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2086;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2100;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2087;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2088;
                                        this.self_assess_s_and_w();
                                        this.state = 2096;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2092;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === bitmarkParser.NL) {
                                                        {
                                                            {
                                                                this.state = 2089;
                                                                this.match(bitmarkParser.NL);
                                                            }
                                                        }
                                                        this.state = 2094;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 2095;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2098;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2102;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2104;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 2108;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2105;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 2110;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
                    }
                    this.state = 2124;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 276, this._ctx)) {
                        case 1:
                            {
                                this.state = 2111;
                                this.resource();
                                this.state = 2121;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2115;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 2112;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 2117;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 2118;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 2123;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
                                }
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
        self_assess_s_and_w() {
            let _localctx = new Self_assess_s_and_wContext(this._ctx, this.state);
            this.enterRule(_localctx, 160, bitmarkParser.RULE_self_assess_s_and_w);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2127;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2126;
                                        _la = this._input.LA(1);
                                        if (_la <= 0 || (_la === bitmarkParser.OPBUL)) {
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
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2129;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
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
        atpoint() {
            let _localctx = new AtpointContext(this._ctx, this.state);
            this.enterRule(_localctx, 162, bitmarkParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2131;
                    this.match(bitmarkParser.AtPoints);
                    this.state = 2132;
                    this.match(bitmarkParser.NUMERIC);
                    this.state = 2133;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 164, bitmarkParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2138;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2135;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 2140;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
                    }
                    this.state = 2145;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpImageZoom - 142)) | (1 << (bitmarkParser.AmpImageWAudio - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpPdf - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || _la === bitmarkParser.ColonText) {
                        {
                            this.state = 2143;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.ColonText:
                                    {
                                        this.state = 2141;
                                        this.match(bitmarkParser.ColonText);
                                    }
                                    break;
                                case bitmarkParser.AmpAudio:
                                case bitmarkParser.AmpImage:
                                case bitmarkParser.AmpImageZoom:
                                case bitmarkParser.AmpImageWAudio:
                                case bitmarkParser.AmpVideo:
                                case bitmarkParser.AmpArticle:
                                case bitmarkParser.AmpDocument:
                                case bitmarkParser.AmpApp:
                                case bitmarkParser.AmpWebsite:
                                case bitmarkParser.AmpStillImageFilm:
                                case bitmarkParser.AmpPdf:
                                case bitmarkParser.AmpAudioLink:
                                case bitmarkParser.AmpImageLink:
                                case bitmarkParser.AmpVideoLink:
                                case bitmarkParser.AmpArticleLink:
                                case bitmarkParser.AmpDocumentLink:
                                case bitmarkParser.AmpAppLink:
                                case bitmarkParser.AmpWebsiteLink:
                                case bitmarkParser.AmpStillImageFilmLink:
                                    {
                                        this.state = 2142;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 2147;
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
        resource_format() {
            let _localctx = new Resource_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 166, bitmarkParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2148;
                    _la = this._input.LA(1);
                    if (!(((((_la - 147)) & ~0x1F) === 0 && ((1 << (_la - 147)) & ((1 << (bitmarkParser.AmpArticle - 147)) | (1 << (bitmarkParser.AmpDocument - 147)) | (1 << (bitmarkParser.AmpWebsite - 147)) | (1 << (bitmarkParser.AmpStillImageFilm - 147)) | (1 << (bitmarkParser.AmpAudioLink - 147)) | (1 << (bitmarkParser.AmpImageLink - 147)) | (1 << (bitmarkParser.AmpVideoLink - 147)) | (1 << (bitmarkParser.AmpArticleLink - 147)) | (1 << (bitmarkParser.AmpDocumentLink - 147)) | (1 << (bitmarkParser.AmpAppLink - 147)) | (1 << (bitmarkParser.AmpWebsiteLink - 147)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 147)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.Prosemirror - 181)) | (1 << (bitmarkParser.Placeholder - 181)))) !== 0))) {
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
        resource_format_extra() {
            let _localctx = new Resource_format_extraContext(this._ctx, this.state);
            this.enterRule(_localctx, 168, bitmarkParser.RULE_resource_format_extra);
            try {
                this.state = 2159;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AmpImage:
                    case bitmarkParser.AmpImageZoom:
                    case bitmarkParser.AmpImageWAudio:
                    case bitmarkParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2150;
                            this.image_format();
                        }
                        break;
                    case bitmarkParser.AmpAudio:
                    case bitmarkParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2151;
                            this.audio_format();
                        }
                        break;
                    case bitmarkParser.AmpVideo:
                    case bitmarkParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2152;
                            this.video_format();
                        }
                        break;
                    case bitmarkParser.AmpArticle:
                    case bitmarkParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2153;
                            this.article_format();
                        }
                        break;
                    case bitmarkParser.AmpDocument:
                    case bitmarkParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 2154;
                            this.document_format();
                        }
                        break;
                    case bitmarkParser.AmpApp:
                    case bitmarkParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 2155;
                            this.app_format();
                        }
                        break;
                    case bitmarkParser.AmpWebsite:
                    case bitmarkParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 2156;
                            this.website_format();
                        }
                        break;
                    case bitmarkParser.AmpStillImageFilm:
                    case bitmarkParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 2157;
                            this.stillimagefilm_format();
                        }
                        break;
                    case bitmarkParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 2158;
                            this.match(bitmarkParser.AmpPdf);
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
        image_format() {
            let _localctx = new Image_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 170, bitmarkParser.RULE_image_format);
            let _la;
            try {
                this.state = 2175;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2161;
                            this.match(bitmarkParser.AmpImage);
                            this.state = 2164;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.Image_type:
                                    {
                                        {
                                            this.state = 2162;
                                            this.match(bitmarkParser.Image_type);
                                        }
                                    }
                                    break;
                                case bitmarkParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 2163;
                                            this.match(bitmarkParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case bitmarkParser.CL:
                                case bitmarkParser.AmpAudio:
                                case bitmarkParser.AmpImage:
                                case bitmarkParser.AmpImageZoom:
                                case bitmarkParser.AmpImageWAudio:
                                case bitmarkParser.AmpVideo:
                                case bitmarkParser.AmpArticle:
                                case bitmarkParser.AmpDocument:
                                case bitmarkParser.AmpApp:
                                case bitmarkParser.AmpWebsite:
                                case bitmarkParser.AmpStillImageFilm:
                                case bitmarkParser.AmpPdf:
                                case bitmarkParser.AmpAudioLink:
                                case bitmarkParser.AmpImageLink:
                                case bitmarkParser.AmpVideoLink:
                                case bitmarkParser.AmpArticleLink:
                                case bitmarkParser.AmpDocumentLink:
                                case bitmarkParser.AmpAppLink:
                                case bitmarkParser.AmpWebsiteLink:
                                case bitmarkParser.AmpStillImageFilmLink:
                                case bitmarkParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case bitmarkParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2166;
                            this.match(bitmarkParser.AmpImageLink);
                            this.state = 2168;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2167;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2170;
                            this.match(bitmarkParser.AmpImageZoom);
                            this.state = 2172;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2171;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2174;
                            this.match(bitmarkParser.AmpImageWAudio);
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
        video_format() {
            let _localctx = new Video_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 172, bitmarkParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2177;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpVideo || _la === bitmarkParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 2180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.COLON) {
                        {
                            this.state = 2178;
                            this.match(bitmarkParser.COLON);
                            this.state = 2179;
                            this.match(bitmarkParser.Video_type);
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
        article_format() {
            let _localctx = new Article_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 174, bitmarkParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2182;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpArticle || _la === bitmarkParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 176, bitmarkParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2184;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpDocument || _la === bitmarkParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 178, bitmarkParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2186;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpApp || _la === bitmarkParser.AmpAppLink)) {
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
        website_format() {
            let _localctx = new Website_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 180, bitmarkParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2188;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpWebsite || _la === bitmarkParser.AmpWebsiteLink)) {
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
        stillimagefilm_format() {
            let _localctx = new Stillimagefilm_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 182, bitmarkParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2190;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpStillImageFilm || _la === bitmarkParser.AmpStillImageFilmLink)) {
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
        op_article_format() {
            let _localctx = new Op_article_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 184, bitmarkParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2192;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpArticle || _la === bitmarkParser.OpAmpArticleLink)) {
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
        op_document_format() {
            let _localctx = new Op_document_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 186, bitmarkParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2194;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpDocument || _la === bitmarkParser.OpAmpDocumentLink)) {
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
        op_app_format() {
            let _localctx = new Op_app_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 188, bitmarkParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2196;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpApp || _la === bitmarkParser.OpAmpAppLink)) {
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
        op_website_format() {
            let _localctx = new Op_website_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 190, bitmarkParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2198;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpWebsite || _la === bitmarkParser.OpAmpWebsiteLink)) {
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
        op_video_format() {
            let _localctx = new Op_video_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 192, bitmarkParser.RULE_op_video_format);
            try {
                this.state = 2210;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2200;
                            this.match(bitmarkParser.OpAmpVideo);
                            this.state = 2203;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 287, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2201;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2202;
                                        this.match(bitmarkParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2205;
                            this.match(bitmarkParser.OpAmpVideoLink);
                            this.state = 2208;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 288, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2206;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2207;
                                        this.match(bitmarkParser.Video_type);
                                    }
                                    break;
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
        op_stillimagefilm_format() {
            let _localctx = new Op_stillimagefilm_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 194, bitmarkParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2212;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpStillImageFilm || _la === bitmarkParser.OpAmpStillImageFilmLink)) {
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
        articlebit() {
            let _localctx = new ArticlebitContext(this._ctx, this.state);
            this.enterRule(_localctx, 196, bitmarkParser.RULE_articlebit);
            try {
                this.state = 2220;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpArticle:
                    case bitmarkParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2214;
                            this.op_article_format();
                            this.state = 2215;
                            this.match(bitmarkParser.COLON);
                            this.state = 2216;
                            this.url();
                            this.state = 2217;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2219;
                            this.match(bitmarkParser.ArticleText);
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
        documentbit() {
            let _localctx = new DocumentbitContext(this._ctx, this.state);
            this.enterRule(_localctx, 198, bitmarkParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2222;
                    this.op_document_format();
                    this.state = 2223;
                    this.match(bitmarkParser.COLON);
                    this.state = 2224;
                    this.url();
                    this.state = 2225;
                    this.match(bitmarkParser.CL);
                    this.state = 2230;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPATALT) {
                        {
                            this.state = 2226;
                            this.match(bitmarkParser.OPATALT);
                            this.state = 2227;
                            this.words();
                            this.state = 2228;
                            this.match(bitmarkParser.CL);
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
        websitebit() {
            let _localctx = new WebsitebitContext(this._ctx, this.state);
            this.enterRule(_localctx, 200, bitmarkParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2232;
                    this.op_website_format();
                    this.state = 2233;
                    this.match(bitmarkParser.COLON);
                    this.state = 2234;
                    this.url();
                    this.state = 2235;
                    this.match(bitmarkParser.CL);
                    this.state = 2240;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPATALT) {
                        {
                            this.state = 2236;
                            this.match(bitmarkParser.OPATALT);
                            this.state = 2237;
                            this.words();
                            this.state = 2238;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 202, bitmarkParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2242;
                    this.op_app_format();
                    this.state = 2243;
                    this.match(bitmarkParser.COLON);
                    this.state = 2246;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case bitmarkParser.URL:
                            {
                                this.state = 2244;
                                this.url();
                            }
                            break;
                        case bitmarkParser.TEL:
                            {
                                this.state = 2245;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 2248;
                    this.match(bitmarkParser.CL);
                    this.state = 2253;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPATALT) {
                        {
                            this.state = 2249;
                            this.match(bitmarkParser.OPATALT);
                            this.state = 2250;
                            this.words();
                            this.state = 2251;
                            this.match(bitmarkParser.CL);
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
        stillimagefilmbit() {
            let _localctx = new StillimagefilmbitContext(this._ctx, this.state);
            this.enterRule(_localctx, 204, bitmarkParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2255;
                    this.stillimg_one();
                    this.state = 2259;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2256;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 2261;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
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
        stillimg_one() {
            let _localctx = new Stillimg_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 206, bitmarkParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2262;
                    this.op_stillimagefilm_format();
                    this.state = 2263;
                    this.match(bitmarkParser.COLON);
                    this.state = 2267;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 2264;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 2269;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2270;
                    this.url();
                    this.state = 2271;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 208, bitmarkParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2273;
                    this.video_one();
                    this.state = 2277;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2274;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 2279;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
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
        video_one() {
            let _localctx = new Video_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 210, bitmarkParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2280;
                    this.op_video_format();
                    this.state = 2281;
                    this.match(bitmarkParser.COLON);
                    this.state = 2282;
                    this.url();
                    this.state = 2283;
                    this.match(bitmarkParser.CL);
                    this.state = 2288;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 298, this._ctx)) {
                        case 1:
                            {
                                this.state = 2284;
                                this.match(bitmarkParser.OPATALT);
                                this.state = 2285;
                                this.words();
                                this.state = 2286;
                                this.match(bitmarkParser.CL);
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
        imagebit() {
            let _localctx = new ImagebitContext(this._ctx, this.state);
            this.enterRule(_localctx, 212, bitmarkParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2290;
                    this.image_one();
                    this.state = 2294;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 299, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2291;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 2296;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 299, this._ctx);
                    }
                    this.state = 2299;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 300, this._ctx)) {
                        case 1:
                            {
                                this.state = 2297;
                                this.match(bitmarkParser.NL);
                                this.state = 2298;
                                this.match(bitmarkParser.ShowInIndex);
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
        image_one() {
            let _localctx = new Image_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 214, bitmarkParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2301;
                    this.op_image_format();
                    this.state = 2302;
                    this.match(bitmarkParser.COLON);
                    this.state = 2306;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 2303;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 2308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2309;
                    this.url();
                    this.state = 2310;
                    this.match(bitmarkParser.CL);
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
        op_image_format() {
            let _localctx = new Op_image_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 216, bitmarkParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 2326;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2312;
                            this.match(bitmarkParser.OpAmpImage);
                            this.state = 2315;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.Image_type:
                                    {
                                        {
                                            this.state = 2313;
                                            this.match(bitmarkParser.Image_type);
                                        }
                                    }
                                    break;
                                case bitmarkParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 2314;
                                            this.match(bitmarkParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case bitmarkParser.COLON:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2317;
                            this.match(bitmarkParser.OpAmpImageLink);
                            this.state = 2319;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2318;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2321;
                            this.match(bitmarkParser.OpAmpImageZoom);
                            this.state = 2323;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2322;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2325;
                            this.match(bitmarkParser.OpAmpImageWAudio);
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
        image_chained() {
            let _localctx = new Image_chainedContext(this._ctx, this.state);
            this.enterRule(_localctx, 218, bitmarkParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 2345;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2328;
                            this.match(bitmarkParser.AtSrc);
                            this.state = 2329;
                            this.match(bitmarkParser.COLON);
                            this.state = 2330;
                            this.url();
                            this.state = 2331;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtWidth:
                    case bitmarkParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2333;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2334;
                            this.match(bitmarkParser.COLON);
                            this.state = 2335;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2336;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPATALT:
                    case bitmarkParser.OpAtCaption:
                    case bitmarkParser.OpAtLicense:
                    case bitmarkParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2337;
                            _la = this._input.LA(1);
                            if (!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.OPATALT - 131)) | (1 << (bitmarkParser.OpAtCaption - 131)) | (1 << (bitmarkParser.OpAtLicense - 131)) | (1 << (bitmarkParser.OpAtCopyright - 131)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2341;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2338;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2343;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
                            }
                            this.state = 2344;
                            this.match(bitmarkParser.CL);
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
        image_chained4match() {
            let _localctx = new Image_chained4matchContext(this._ctx, this.state);
            this.enterRule(_localctx, 220, bitmarkParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 2364;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2347;
                            this.match(bitmarkParser.AtSrc);
                            this.state = 2348;
                            this.match(bitmarkParser.COLON);
                            this.state = 2349;
                            this.url();
                            this.state = 2350;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtWidth:
                    case bitmarkParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2352;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2353;
                            this.match(bitmarkParser.COLON);
                            this.state = 2354;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2355;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPATALT:
                    case bitmarkParser.OpAtCaption:
                    case bitmarkParser.OpAtLicense:
                    case bitmarkParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2356;
                            _la = this._input.LA(1);
                            if (!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.OPATALT - 131)) | (1 << (bitmarkParser.OpAtCaption - 131)) | (1 << (bitmarkParser.OpAtLicense - 131)) | (1 << (bitmarkParser.OpAtCopyright - 131)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2360;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2357;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2362;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
                            }
                            this.state = 2363;
                            this.match(bitmarkParser.CL);
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
        audiobit() {
            let _localctx = new AudiobitContext(this._ctx, this.state);
            this.enterRule(_localctx, 222, bitmarkParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2366;
                    this.audio_one();
                    this.state = 2370;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2367;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 2372;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
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
        audio_one() {
            let _localctx = new Audio_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 224, bitmarkParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2373;
                    this.op_audio_format();
                    this.state = 2374;
                    this.match(bitmarkParser.COLON);
                    this.state = 2375;
                    this.url();
                    this.state = 2376;
                    this.match(bitmarkParser.CL);
                    this.state = 2381;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 311, this._ctx)) {
                        case 1:
                            {
                                this.state = 2377;
                                this.match(bitmarkParser.OPATALT);
                                this.state = 2378;
                                this.words();
                                this.state = 2379;
                                this.match(bitmarkParser.CL);
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
        audio_format() {
            let _localctx = new Audio_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 226, bitmarkParser.RULE_audio_format);
            let _la;
            try {
                this.state = 2393;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2383;
                            this.match(bitmarkParser.AmpAudio);
                            this.state = 2386;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.COLON) {
                                {
                                    this.state = 2384;
                                    this.match(bitmarkParser.COLON);
                                    this.state = 2385;
                                    this.match(bitmarkParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2388;
                            this.match(bitmarkParser.AmpAudioLink);
                            this.state = 2391;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.COLON) {
                                {
                                    this.state = 2389;
                                    this.match(bitmarkParser.COLON);
                                    this.state = 2390;
                                    this.match(bitmarkParser.Audio_type);
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
        op_audio_format() {
            let _localctx = new Op_audio_formatContext(this._ctx, this.state);
            this.enterRule(_localctx, 228, bitmarkParser.RULE_op_audio_format);
            try {
                this.state = 2405;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2395;
                            this.match(bitmarkParser.OpAmpAudio);
                            this.state = 2398;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 315, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2396;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2397;
                                        this.match(bitmarkParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2400;
                            this.match(bitmarkParser.OpAmpAudioLink);
                            this.state = 2403;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 316, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2401;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2402;
                                        this.match(bitmarkParser.Audio_type);
                                    }
                                    break;
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
        resource_chained() {
            let _localctx = new Resource_chainedContext(this._ctx, this.state);
            this.enterRule(_localctx, 230, bitmarkParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 2438;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPA:
                    case bitmarkParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2410;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.OPA:
                                    {
                                        this.state = 2407;
                                        this.match(bitmarkParser.OPA);
                                        this.state = 2408;
                                        this.s_and_w();
                                    }
                                    break;
                                case bitmarkParser.AtSrc:
                                    {
                                        this.state = 2409;
                                        this.match(bitmarkParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 2412;
                            this.match(bitmarkParser.COLON);
                            this.state = 2416;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2413;
                                            this.match(bitmarkParser.S);
                                        }
                                    }
                                }
                                this.state = 2418;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
                            }
                            this.state = 2421;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2421;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.S:
                                        case bitmarkParser.OPESC:
                                        case bitmarkParser.OPS:
                                        case bitmarkParser.COLON:
                                        case bitmarkParser.AMP:
                                        case bitmarkParser.Greater:
                                        case bitmarkParser.Less:
                                        case bitmarkParser.RightAngle:
                                        case bitmarkParser.RightArrow:
                                        case bitmarkParser.DBLEQ:
                                        case bitmarkParser.QUOTE_INDEX:
                                        case bitmarkParser.NUMERIC:
                                        case bitmarkParser.STRING:
                                        case bitmarkParser.SENTENCE:
                                        case bitmarkParser.AmpAudio:
                                        case bitmarkParser.AmpImage:
                                        case bitmarkParser.AmpVideo:
                                        case bitmarkParser.AmpArticle:
                                        case bitmarkParser.AmpDocument:
                                        case bitmarkParser.AmpApp:
                                        case bitmarkParser.AmpWebsite:
                                        case bitmarkParser.AmpStillImageFilm:
                                        case bitmarkParser.AmpAudioLink:
                                        case bitmarkParser.AmpImageLink:
                                        case bitmarkParser.AmpVideoLink:
                                        case bitmarkParser.AmpArticleLink:
                                        case bitmarkParser.AmpDocumentLink:
                                        case bitmarkParser.AmpAppLink:
                                        case bitmarkParser.AmpWebsiteLink:
                                        case bitmarkParser.AmpStillImageFilmLink:
                                        case bitmarkParser.BitmarkMinus:
                                        case bitmarkParser.BitmarkPlus:
                                        case bitmarkParser.URL:
                                            {
                                                this.state = 2419;
                                                this.s_and_w();
                                            }
                                            break;
                                        case bitmarkParser.NL:
                                            {
                                                this.state = 2420;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 2423;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                            this.state = 2425;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtWidth:
                    case bitmarkParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2426;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2427;
                            this.match(bitmarkParser.COLON);
                            this.state = 2428;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2429;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPATALT:
                    case bitmarkParser.OpAtCaption:
                    case bitmarkParser.OpAtLicense:
                    case bitmarkParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2430;
                            _la = this._input.LA(1);
                            if (!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (bitmarkParser.OPATALT - 131)) | (1 << (bitmarkParser.OpAtCaption - 131)) | (1 << (bitmarkParser.OpAtLicense - 131)) | (1 << (bitmarkParser.OpAtCopyright - 131)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2434;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2431;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2436;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 322, this._ctx);
                            }
                            this.state = 2437;
                            this.match(bitmarkParser.CL);
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
        telephone() {
            let _localctx = new TelephoneContext(this._ctx, this.state);
            this.enterRule(_localctx, 232, bitmarkParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2440;
                    this.match(bitmarkParser.TEL);
                    this.state = 2441;
                    this.match(bitmarkParser.PLUS);
                    this.state = 2442;
                    this.match(bitmarkParser.NUMERIC);
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
            this.enterRule(_localctx, 234, bitmarkParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2444;
                    this.match(bitmarkParser.URL);
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
            this.enterRule(_localctx, 236, bitmarkParser.RULE_item);
            let _la;
            try {
                this.state = 2476;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 330, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2446;
                            this.match(bitmarkParser.OPC);
                            this.state = 2447;
                            this.match(bitmarkParser.CL);
                            this.state = 2455;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 325, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2451;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.S) {
                                            {
                                                {
                                                    this.state = 2448;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2453;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2454;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2457;
                            this.match(bitmarkParser.OPC);
                            this.state = 2458;
                            this.s_and_w();
                            this.state = 2463;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (bitmarkParser.COLON - 92)) | (1 << (bitmarkParser.AMP - 92)) | (1 << (bitmarkParser.Greater - 92)) | (1 << (bitmarkParser.Less - 92)) | (1 << (bitmarkParser.RightAngle - 92)) | (1 << (bitmarkParser.RightArrow - 92)) | (1 << (bitmarkParser.QUOTE_INDEX - 92)) | (1 << (bitmarkParser.SENTENCE - 92)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
                                {
                                    this.state = 2461;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.COLON:
                                            {
                                                this.state = 2459;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case bitmarkParser.AMP:
                                        case bitmarkParser.Greater:
                                        case bitmarkParser.Less:
                                        case bitmarkParser.RightAngle:
                                        case bitmarkParser.RightArrow:
                                        case bitmarkParser.QUOTE_INDEX:
                                        case bitmarkParser.SENTENCE:
                                        case bitmarkParser.AmpAudio:
                                        case bitmarkParser.AmpImage:
                                        case bitmarkParser.AmpVideo:
                                        case bitmarkParser.AmpArticle:
                                        case bitmarkParser.AmpDocument:
                                        case bitmarkParser.AmpApp:
                                        case bitmarkParser.AmpWebsite:
                                        case bitmarkParser.AmpStillImageFilm:
                                        case bitmarkParser.AmpAudioLink:
                                        case bitmarkParser.AmpImageLink:
                                        case bitmarkParser.AmpVideoLink:
                                        case bitmarkParser.AmpArticleLink:
                                        case bitmarkParser.AmpDocumentLink:
                                        case bitmarkParser.AmpAppLink:
                                        case bitmarkParser.AmpWebsiteLink:
                                        case bitmarkParser.AmpStillImageFilmLink:
                                        case bitmarkParser.BitmarkMinus:
                                        case bitmarkParser.BitmarkPlus:
                                            {
                                                this.state = 2460;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 2465;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2466;
                            this.match(bitmarkParser.CL);
                            this.state = 2474;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 329, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2470;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.S) {
                                            {
                                                {
                                                    this.state = 2467;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2472;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2473;
                                        this.lead();
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
        lead() {
            let _localctx = new LeadContext(this._ctx, this.state);
            this.enterRule(_localctx, 238, bitmarkParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2478;
                    this.match(bitmarkParser.OPC);
                    this.state = 2479;
                    this.s_and_w();
                    this.state = 2484;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (bitmarkParser.COLON - 92)) | (1 << (bitmarkParser.AMP - 92)) | (1 << (bitmarkParser.Greater - 92)) | (1 << (bitmarkParser.Less - 92)) | (1 << (bitmarkParser.RightAngle - 92)) | (1 << (bitmarkParser.RightArrow - 92)) | (1 << (bitmarkParser.QUOTE_INDEX - 92)) | (1 << (bitmarkParser.SENTENCE - 92)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
                        {
                            this.state = 2482;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.COLON:
                                    {
                                        this.state = 2480;
                                        this.match(bitmarkParser.COLON);
                                    }
                                    break;
                                case bitmarkParser.AMP:
                                case bitmarkParser.Greater:
                                case bitmarkParser.Less:
                                case bitmarkParser.RightAngle:
                                case bitmarkParser.RightArrow:
                                case bitmarkParser.QUOTE_INDEX:
                                case bitmarkParser.SENTENCE:
                                case bitmarkParser.AmpAudio:
                                case bitmarkParser.AmpImage:
                                case bitmarkParser.AmpVideo:
                                case bitmarkParser.AmpArticle:
                                case bitmarkParser.AmpDocument:
                                case bitmarkParser.AmpApp:
                                case bitmarkParser.AmpWebsite:
                                case bitmarkParser.AmpStillImageFilm:
                                case bitmarkParser.AmpAudioLink:
                                case bitmarkParser.AmpImageLink:
                                case bitmarkParser.AmpVideoLink:
                                case bitmarkParser.AmpArticleLink:
                                case bitmarkParser.AmpDocumentLink:
                                case bitmarkParser.AmpAppLink:
                                case bitmarkParser.AmpWebsiteLink:
                                case bitmarkParser.AmpStillImageFilmLink:
                                case bitmarkParser.BitmarkMinus:
                                case bitmarkParser.BitmarkPlus:
                                    {
                                        this.state = 2481;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 2486;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2487;
                    this.match(bitmarkParser.CL);
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
        angleref() {
            let _localctx = new AnglerefContext(this._ctx, this.state);
            this.enterRule(_localctx, 240, bitmarkParser.RULE_angleref);
            let _la;
            try {
                this.state = 2499;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2489;
                            this.match(bitmarkParser.OPRANGLES);
                            this.state = 2491;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2490;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2493;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2494;
                            this.match(bitmarkParser.OPRANGLEL);
                            this.state = 2496;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2495;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2498;
                            this.match(bitmarkParser.CL);
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
        example() {
            let _localctx = new ExampleContext(this._ctx, this.state);
            this.enterRule(_localctx, 242, bitmarkParser.RULE_example);
            let _la;
            try {
                this.state = 2508;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2501;
                            this.match(bitmarkParser.AtExamplecl);
                        }
                        break;
                    case bitmarkParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2502;
                            this.match(bitmarkParser.AtExampleWithStr);
                        }
                        break;
                    case bitmarkParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2503;
                            this.match(bitmarkParser.AtExamplecol);
                            this.state = 2505;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.SENTENCE) {
                                {
                                    this.state = 2504;
                                    this.match(bitmarkParser.SENTENCE);
                                }
                            }
                            this.state = 2507;
                            this.match(bitmarkParser.EOF);
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
        bracketed_text() {
            let _localctx = new Bracketed_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 244, bitmarkParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 2549;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 345, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2510;
                            this.match(bitmarkParser.BracEnclose);
                            this.state = 2512;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 338, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2511;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 2535;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    {
                                        this.state = 2514;
                                        this.s_and_w();
                                        this.state = 2524;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2515;
                                                        this.match(bitmarkParser.NL);
                                                        this.state = 2519;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 339, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 2516;
                                                                        this.match(bitmarkParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 2521;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 339, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 2526;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
                                        }
                                        this.state = 2530;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.NL) {
                                            {
                                                {
                                                    this.state = 2527;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                            this.state = 2532;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 2537;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2538;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2539;
                            this.match(bitmarkParser.BracEnclose);
                            this.state = 2545;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2543;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 343, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2540;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2541;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2542;
                                                this.match(bitmarkParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2547;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2548;
                            this.match(bitmarkParser.EOF);
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
        reference() {
            let _localctx = new ReferenceContext(this._ctx, this.state);
            this.enterRule(_localctx, 246, bitmarkParser.RULE_reference);
            let _la;
            try {
                this.state = 2573;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 350, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2551;
                            this.match(bitmarkParser.AtReference);
                            this.state = 2556;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2556;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 346, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2552;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2553;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2554;
                                                this.match(bitmarkParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 2555;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2558;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                            this.state = 2560;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2561;
                            this.match(bitmarkParser.AtReference);
                            this.state = 2569;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2567;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 348, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2562;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2563;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2564;
                                                this.match(bitmarkParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 2565;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 2566;
                                                this.match(bitmarkParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2571;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2572;
                            this.match(bitmarkParser.EOF);
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
        progress() {
            let _localctx = new ProgressContext(this._ctx, this.state);
            this.enterRule(_localctx, 248, bitmarkParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2575;
                    this.match(bitmarkParser.AtProgress);
                    this.state = 2576;
                    this.s_and_w();
                    this.state = 2577;
                    this.match(bitmarkParser.CL);
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
        dateprop() {
            let _localctx = new DatepropContext(this._ctx, this.state);
            this.enterRule(_localctx, 250, bitmarkParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2579;
                    this.match(bitmarkParser.AtDate);
                    this.state = 2583;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 2583;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 351, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2580;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2581;
                                        this.match(bitmarkParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 2582;
                                        this.match(bitmarkParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 2585;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                    this.state = 2587;
                    this.match(bitmarkParser.CL);
                    this.state = 2589;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 353, this._ctx)) {
                        case 1:
                            {
                                this.state = 2588;
                                this.dateprop_chained();
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
        dateprop_chained() {
            let _localctx = new Dateprop_chainedContext(this._ctx, this.state);
            this.enterRule(_localctx, 252, bitmarkParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2591;
                    this.match(bitmarkParser.AtDate);
                    this.state = 2595;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 2595;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 354, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2592;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2593;
                                        this.match(bitmarkParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 2594;
                                        this.match(bitmarkParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 2597;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                    this.state = 2599;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 254, bitmarkParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 2635;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 362, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2601;
                            this.match(bitmarkParser.OPB);
                            this.state = 2603;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 356, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2602;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 2626;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    {
                                        this.state = 2605;
                                        this.s_and_w();
                                        this.state = 2615;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 358, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2606;
                                                        this.match(bitmarkParser.NL);
                                                        this.state = 2610;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 357, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 2607;
                                                                        this.match(bitmarkParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 2612;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 357, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 2617;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 358, this._ctx);
                                        }
                                        this.state = 2621;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.NL) {
                                            {
                                                {
                                                    this.state = 2618;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                            this.state = 2623;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 2628;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2629;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2630;
                            this.match(bitmarkParser.OPB);
                            this.state = 2632;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2631;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2634;
                            this.match(bitmarkParser.EOF);
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
        hint() {
            let _localctx = new HintContext(this._ctx, this.state);
            this.enterRule(_localctx, 256, bitmarkParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2637;
                    this.match(bitmarkParser.OPQ);
                    this.state = 2639;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 2638;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === bitmarkParser.CL)) {
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
                        this.state = 2641;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.OPDOT) | (1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitPlaceholder) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.CLOZE) | (1 << bitmarkParser.MATCH) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess) | (1 << bitmarkParser.BitRating) | (1 << bitmarkParser.BitSurvey))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitVocabulary - 32)) | (1 << (bitmarkParser.BitVocabulary1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)) | (1 << (bitmarkParser.BitLearningPathExternalLink - 32)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.COMMENT - 64)) | (1 << (bitmarkParser.Image_type - 64)) | (1 << (bitmarkParser.Audio_type - 64)) | (1 << (bitmarkParser.Video_type - 64)) | (1 << (bitmarkParser.OPDOLL - 64)) | (1 << (bitmarkParser.OPBUL - 64)) | (1 << (bitmarkParser.OPESC - 64)) | (1 << (bitmarkParser.OPRANGLES - 64)) | (1 << (bitmarkParser.OPRANGLEL - 64)) | (1 << (bitmarkParser.OPDANGLE - 64)) | (1 << (bitmarkParser.OPU - 64)) | (1 << (bitmarkParser.OPB - 64)) | (1 << (bitmarkParser.OPQ - 64)) | (1 << (bitmarkParser.OPA - 64)) | (1 << (bitmarkParser.OPP - 64)) | (1 << (bitmarkParser.OPM - 64)) | (1 << (bitmarkParser.OPS - 64)) | (1 << (bitmarkParser.OPR - 64)) | (1 << (bitmarkParser.OPHASH - 64)) | (1 << (bitmarkParser.OPC - 64)) | (1 << (bitmarkParser.COLON - 64)) | (1 << (bitmarkParser.AMP - 64)) | (1 << (bitmarkParser.DBLCOLON - 64)) | (1 << (bitmarkParser.PLUS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.DotAt - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.HSPL - 96)) | (1 << (bitmarkParser.HSPL2 - 96)) | (1 << (bitmarkParser.SSPL - 96)) | (1 << (bitmarkParser.SSPL2 - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)) | (1 << (bitmarkParser.DCANY - 96)) | (1 << (bitmarkParser.ArticleText - 96)) | (1 << (bitmarkParser.NOTCL - 96)) | (1 << (bitmarkParser.NUMERIC - 96)) | (1 << (bitmarkParser.STRING - 96)) | (1 << (bitmarkParser.NL - 96)) | (1 << (bitmarkParser.SENTENCE - 96)) | (1 << (bitmarkParser.OPAT - 96)) | (1 << (bitmarkParser.AtProgress - 96)) | (1 << (bitmarkParser.AtReference - 96)) | (1 << (bitmarkParser.AtWidth - 96)) | (1 << (bitmarkParser.AtHeight - 96)) | (1 << (bitmarkParser.AtProgressPoints - 96)) | (1 << (bitmarkParser.AtShortanswer - 96)) | (1 << (bitmarkParser.AtLonganswer - 96)) | (1 << (bitmarkParser.AtExampleWithStr - 96)) | (1 << (bitmarkParser.AtExamplecol - 96)) | (1 << (bitmarkParser.AtExamplecl - 96)) | (1 << (bitmarkParser.AtPartialAnswerS - 96)) | (1 << (bitmarkParser.AtPartialAnswer - 96)) | (1 << (bitmarkParser.AtLabeltrue - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.AtPoints - 128)) | (1 << (bitmarkParser.AtSrc - 128)) | (1 << (bitmarkParser.OPATALT - 128)) | (1 << (bitmarkParser.OPAMARK - 128)) | (1 << (bitmarkParser.ShowInIndex - 128)) | (1 << (bitmarkParser.OpAtCaption - 128)) | (1 << (bitmarkParser.OpAtLicense - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 128)) | (1 << (bitmarkParser.AtDate - 128)) | (1 << (bitmarkParser.Http - 128)) | (1 << (bitmarkParser.Https - 128)) | (1 << (bitmarkParser.AmpAudio - 128)) | (1 << (bitmarkParser.AmpImage - 128)) | (1 << (bitmarkParser.AmpImageZoom - 128)) | (1 << (bitmarkParser.AmpImageWAudio - 128)) | (1 << (bitmarkParser.AmpVideo - 128)) | (1 << (bitmarkParser.AmpArticle - 128)) | (1 << (bitmarkParser.AmpDocument - 128)) | (1 << (bitmarkParser.AmpApp - 128)) | (1 << (bitmarkParser.AmpWebsite - 128)) | (1 << (bitmarkParser.AmpStillImageFilm - 128)) | (1 << (bitmarkParser.AmpPdf - 128)) | (1 << (bitmarkParser.OpAmpAudio - 128)) | (1 << (bitmarkParser.OpAmpImage - 128)) | (1 << (bitmarkParser.OpAmpImageZoom - 128)) | (1 << (bitmarkParser.OpAmpImageWAudio - 128)) | (1 << (bitmarkParser.OpAmpVideo - 128)) | (1 << (bitmarkParser.OpAmpArticle - 128)) | (1 << (bitmarkParser.OpAmpArticleAtt - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)) | (1 << (bitmarkParser.AmpAppLink - 160)) | (1 << (bitmarkParser.AmpWebsiteLink - 160)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 160)) | (1 << (bitmarkParser.OpAmpAudioLink - 160)) | (1 << (bitmarkParser.OpAmpImageLink - 160)) | (1 << (bitmarkParser.OpAmpVideoLink - 160)) | (1 << (bitmarkParser.OpAmpArticleLink - 160)) | (1 << (bitmarkParser.OpAmpDocumentLink - 160)) | (1 << (bitmarkParser.OpAmpAppLink - 160)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 160)) | (1 << (bitmarkParser.BitmarkMinus - 160)) | (1 << (bitmarkParser.BitmarkPlus - 160)) | (1 << (bitmarkParser.ColonText - 160)) | (1 << (bitmarkParser.Prosemirror - 160)) | (1 << (bitmarkParser.Placeholder - 160)) | (1 << (bitmarkParser.BASIC - 160)) | (1 << (bitmarkParser.JPG - 160)) | (1 << (bitmarkParser.PNG - 160)) | (1 << (bitmarkParser.GIF - 160)) | (1 << (bitmarkParser.SVG - 160)) | (1 << (bitmarkParser.MP2 - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.MP3 - 192)) | (1 << (bitmarkParser.MP4 - 192)) | (1 << (bitmarkParser.FLV - 192)) | (1 << (bitmarkParser.WMV - 192)) | (1 << (bitmarkParser.MPEG - 192)) | (1 << (bitmarkParser.MPG - 192)) | (1 << (bitmarkParser.TEL - 192)) | (1 << (bitmarkParser.DotArticleAtt - 192)) | (1 << (bitmarkParser.STAR - 192)) | (1 << (bitmarkParser.URL - 192)) | (1 << (bitmarkParser.LIST_LINE - 192)))) !== 0));
                    this.state = 2643;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 258, bitmarkParser.RULE_title);
            let _la;
            try {
                this.state = 2657;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 366, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2645;
                            this.match(bitmarkParser.OPHASH);
                            this.state = 2648;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2648;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.S:
                                        case bitmarkParser.OPESC:
                                        case bitmarkParser.OPS:
                                        case bitmarkParser.COLON:
                                        case bitmarkParser.AMP:
                                        case bitmarkParser.Greater:
                                        case bitmarkParser.Less:
                                        case bitmarkParser.RightAngle:
                                        case bitmarkParser.RightArrow:
                                        case bitmarkParser.DBLEQ:
                                        case bitmarkParser.QUOTE_INDEX:
                                        case bitmarkParser.NUMERIC:
                                        case bitmarkParser.STRING:
                                        case bitmarkParser.SENTENCE:
                                        case bitmarkParser.AmpAudio:
                                        case bitmarkParser.AmpImage:
                                        case bitmarkParser.AmpVideo:
                                        case bitmarkParser.AmpArticle:
                                        case bitmarkParser.AmpDocument:
                                        case bitmarkParser.AmpApp:
                                        case bitmarkParser.AmpWebsite:
                                        case bitmarkParser.AmpStillImageFilm:
                                        case bitmarkParser.AmpAudioLink:
                                        case bitmarkParser.AmpImageLink:
                                        case bitmarkParser.AmpVideoLink:
                                        case bitmarkParser.AmpArticleLink:
                                        case bitmarkParser.AmpDocumentLink:
                                        case bitmarkParser.AmpAppLink:
                                        case bitmarkParser.AmpWebsiteLink:
                                        case bitmarkParser.AmpStillImageFilmLink:
                                        case bitmarkParser.BitmarkMinus:
                                        case bitmarkParser.BitmarkPlus:
                                        case bitmarkParser.URL:
                                            {
                                                this.state = 2646;
                                                this.s_and_w();
                                            }
                                            break;
                                        case bitmarkParser.NL:
                                            {
                                                this.state = 2647;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 2650;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                            this.state = 2652;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2653;
                            this.match(bitmarkParser.OPHASH);
                            this.state = 2654;
                            this.s_and_w();
                            this.state = 2655;
                            this.match(bitmarkParser.EOF);
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
        bool_label() {
            let _localctx = new Bool_labelContext(this._ctx, this.state);
            this.enterRule(_localctx, 260, bitmarkParser.RULE_bool_label);
            try {
                this.state = 2667;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2659;
                            this.match(bitmarkParser.AtLabeltrue);
                            this.state = 2660;
                            this.s_and_w();
                            this.state = 2661;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2663;
                            this.match(bitmarkParser.AtLabelfalse);
                            this.state = 2664;
                            this.s_and_w();
                            this.state = 2665;
                            this.match(bitmarkParser.CL);
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
        progress_points() {
            let _localctx = new Progress_pointsContext(this._ctx, this.state);
            this.enterRule(_localctx, 262, bitmarkParser.RULE_progress_points);
            try {
                this.state = 2678;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 368, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2669;
                            this.match(bitmarkParser.AtProgressPoints);
                            this.state = 2670;
                            this.match(bitmarkParser.COLON);
                            this.state = 2671;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2672;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2673;
                            this.match(bitmarkParser.AtProgressPoints);
                            this.state = 2674;
                            this.match(bitmarkParser.COLON);
                            this.state = 2675;
                            this.s_and_w();
                            this.state = 2676;
                            this.match(bitmarkParser.CL);
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
        istracked() {
            let _localctx = new IstrackedContext(this._ctx, this.state);
            this.enterRule(_localctx, 264, bitmarkParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2680;
                    this.match(bitmarkParser.OpAtIsTracked);
                    this.state = 2681;
                    this.s_and_w();
                    this.state = 2682;
                    this.match(bitmarkParser.CL);
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
        isinfoonly() {
            let _localctx = new IsinfoonlyContext(this._ctx, this.state);
            this.enterRule(_localctx, 266, bitmarkParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2684;
                    this.match(bitmarkParser.OpAtIsInfoOnly);
                    this.state = 2685;
                    this.s_and_w();
                    this.state = 2686;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 268, bitmarkParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2688;
                    this.atdef_();
                    this.state = 2698;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 370, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2692;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 2689;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 2694;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2695;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 2700;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 370, this._ctx);
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
            this.enterRule(_localctx, 270, bitmarkParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 2723;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2701;
                            this.match(bitmarkParser.OPA);
                            this.state = 2702;
                            this.s_and_w();
                            this.state = 2703;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.COLON || _la === bitmarkParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2704;
                            this.s_and_w();
                            this.state = 2710;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2708;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 371, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2705;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2706;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2707;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 2712;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2713;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2715;
                            this.match(bitmarkParser.OpAtCopyright);
                            this.state = 2719;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2716;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2721;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
                            }
                            this.state = 2722;
                            this.match(bitmarkParser.CL);
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
        dollarans() {
            let _localctx = new DollaransContext(this._ctx, this.state);
            this.enterRule(_localctx, 272, bitmarkParser.RULE_dollarans);
            let _la;
            try {
                this.state = 2744;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 379, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2725;
                            this.match(bitmarkParser.OPDOLL);
                            this.state = 2729;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2729;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 375, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2726;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2727;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2728;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2731;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0));
                            this.state = 2733;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2734;
                            this.match(bitmarkParser.OPDOLL);
                            this.state = 2740;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.NL - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                                {
                                    this.state = 2738;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 377, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2735;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2736;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2737;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2742;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2743;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 274, bitmarkParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2746;
                    this.match(bitmarkParser.OPDANGLE);
                    this.state = 2748;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (bitmarkParser.NUMERIC - 110)) | (1 << (bitmarkParser.STRING - 110)) | (1 << (bitmarkParser.SENTENCE - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (bitmarkParser.AmpAudio - 142)) | (1 << (bitmarkParser.AmpImage - 142)) | (1 << (bitmarkParser.AmpVideo - 142)) | (1 << (bitmarkParser.AmpArticle - 142)) | (1 << (bitmarkParser.AmpDocument - 142)) | (1 << (bitmarkParser.AmpApp - 142)) | (1 << (bitmarkParser.AmpWebsite - 142)) | (1 << (bitmarkParser.AmpStillImageFilm - 142)) | (1 << (bitmarkParser.AmpAudioLink - 142)) | (1 << (bitmarkParser.AmpImageLink - 142)) | (1 << (bitmarkParser.AmpVideoLink - 142)) | (1 << (bitmarkParser.AmpArticleLink - 142)) | (1 << (bitmarkParser.AmpDocumentLink - 142)) | (1 << (bitmarkParser.AmpAppLink - 142)) | (1 << (bitmarkParser.AmpWebsiteLink - 142)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 142)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (bitmarkParser.BitmarkMinus - 181)) | (1 << (bitmarkParser.BitmarkPlus - 181)) | (1 << (bitmarkParser.URL - 181)))) !== 0)) {
                        {
                            this.state = 2747;
                            this.s_and_w();
                        }
                    }
                    this.state = 2750;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 276, bitmarkParser.RULE_lines);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2756;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2752;
                                        this.s_and_w();
                                        this.state = 2754;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 381, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 2753;
                                                    this.match(bitmarkParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2758;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
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
            this.enterRule(_localctx, 278, bitmarkParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 2806;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 390, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2760;
                            this.match(bitmarkParser.STRING);
                            this.state = 2767;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 384, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2762;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2761;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2764;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S);
                                        this.state = 2766;
                                        this.match(bitmarkParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2769;
                            this.words();
                            this.state = 2776;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 386, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2771;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2770;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2773;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S);
                                        this.state = 2775;
                                        this.match(bitmarkParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2778;
                            this.match(bitmarkParser.NUMERIC);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2779;
                            this.match(bitmarkParser.OPS);
                            this.state = 2780;
                            this.s_and_w();
                            this.state = 2781;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 2786;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S) {
                                {
                                    {
                                        this.state = 2783;
                                        this.match(bitmarkParser.S);
                                    }
                                }
                                this.state = 2788;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2789;
                            this.match(bitmarkParser.COLON);
                            this.state = 2793;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 388, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2790;
                                            this.match(bitmarkParser.S);
                                        }
                                    }
                                }
                                this.state = 2795;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 388, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 2796;
                            this.match(bitmarkParser.AMP);
                            this.state = 2800;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 389, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2797;
                                            this.match(bitmarkParser.S);
                                        }
                                    }
                                }
                                this.state = 2802;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 389, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 2803;
                            this.match(bitmarkParser.DBLEQ);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 2804;
                            this.match(bitmarkParser.URL);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 2805;
                            this.bracket_escaped();
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
        dclines() {
            let _localctx = new DclinesContext(this._ctx, this.state);
            this.enterRule(_localctx, 280, bitmarkParser.RULE_dclines);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2808;
                    this.match(bitmarkParser.DCANY);
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
            this.enterRule(_localctx, 282, bitmarkParser.RULE_bracket_escaped);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2810;
                    this.match(bitmarkParser.OPESC);
                    this.state = 2812;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2811;
                                        this.s_and_w();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 2814;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 391, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 2817;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 392, this._ctx)) {
                        case 1:
                            {
                                this.state = 2816;
                                this.match(bitmarkParser.CL);
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
        clnsp() {
            let _localctx = new ClnspContext(this._ctx, this.state);
            this.enterRule(_localctx, 284, bitmarkParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2819;
                    this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 286, bitmarkParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2821;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2)) {
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
        words() {
            let _localctx = new WordsContext(this._ctx, this.state);
            this.enterRule(_localctx, 288, bitmarkParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2850;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 2850;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.SENTENCE:
                                            {
                                                this.state = 2823;
                                                this.sentence();
                                            }
                                            break;
                                        case bitmarkParser.AMP:
                                            {
                                                this.state = 2824;
                                                this.match(bitmarkParser.AMP);
                                            }
                                            break;
                                        case bitmarkParser.Greater:
                                            {
                                                this.state = 2825;
                                                this.match(bitmarkParser.Greater);
                                                this.state = 2826;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === bitmarkParser.Greater)) {
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
                                        case bitmarkParser.Less:
                                            {
                                                this.state = 2827;
                                                this.match(bitmarkParser.Less);
                                                this.state = 2828;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === bitmarkParser.Less)) {
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
                                        case bitmarkParser.RightArrow:
                                            {
                                                this.state = 2829;
                                                this.match(bitmarkParser.RightArrow);
                                            }
                                            break;
                                        case bitmarkParser.RightAngle:
                                            {
                                                this.state = 2830;
                                                this.match(bitmarkParser.RightAngle);
                                            }
                                            break;
                                        case bitmarkParser.AmpArticle:
                                            {
                                                this.state = 2831;
                                                this.match(bitmarkParser.AmpArticle);
                                            }
                                            break;
                                        case bitmarkParser.AmpArticleLink:
                                            {
                                                this.state = 2832;
                                                this.match(bitmarkParser.AmpArticleLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpDocument:
                                            {
                                                this.state = 2833;
                                                this.match(bitmarkParser.AmpDocument);
                                            }
                                            break;
                                        case bitmarkParser.AmpDocumentLink:
                                            {
                                                this.state = 2834;
                                                this.match(bitmarkParser.AmpDocumentLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpWebsite:
                                            {
                                                this.state = 2835;
                                                this.match(bitmarkParser.AmpWebsite);
                                            }
                                            break;
                                        case bitmarkParser.AmpWebsiteLink:
                                            {
                                                this.state = 2836;
                                                this.match(bitmarkParser.AmpWebsiteLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpImage:
                                            {
                                                this.state = 2837;
                                                this.match(bitmarkParser.AmpImage);
                                            }
                                            break;
                                        case bitmarkParser.AmpImageLink:
                                            {
                                                this.state = 2838;
                                                this.match(bitmarkParser.AmpImageLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpAudio:
                                            {
                                                this.state = 2839;
                                                this.match(bitmarkParser.AmpAudio);
                                            }
                                            break;
                                        case bitmarkParser.AmpAudioLink:
                                            {
                                                this.state = 2840;
                                                this.match(bitmarkParser.AmpAudioLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpVideo:
                                            {
                                                this.state = 2841;
                                                this.match(bitmarkParser.AmpVideo);
                                            }
                                            break;
                                        case bitmarkParser.AmpVideoLink:
                                            {
                                                this.state = 2842;
                                                this.match(bitmarkParser.AmpVideoLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpApp:
                                            {
                                                this.state = 2843;
                                                this.match(bitmarkParser.AmpApp);
                                            }
                                            break;
                                        case bitmarkParser.AmpAppLink:
                                            {
                                                this.state = 2844;
                                                this.match(bitmarkParser.AmpAppLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpStillImageFilm:
                                            {
                                                this.state = 2845;
                                                this.match(bitmarkParser.AmpStillImageFilm);
                                            }
                                            break;
                                        case bitmarkParser.AmpStillImageFilmLink:
                                            {
                                                this.state = 2846;
                                                this.match(bitmarkParser.AmpStillImageFilmLink);
                                            }
                                            break;
                                        case bitmarkParser.BitmarkMinus:
                                            {
                                                this.state = 2847;
                                                this.match(bitmarkParser.BitmarkMinus);
                                            }
                                            break;
                                        case bitmarkParser.BitmarkPlus:
                                            {
                                                this.state = 2848;
                                                this.match(bitmarkParser.BitmarkPlus);
                                            }
                                            break;
                                        case bitmarkParser.QUOTE_INDEX:
                                            {
                                                this.state = 2849;
                                                this.match(bitmarkParser.QUOTE_INDEX);
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
                        this.state = 2852;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 394, this._ctx);
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
            this.enterRule(_localctx, 290, bitmarkParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2854;
                    this.match(bitmarkParser.S);
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
        sentence() {
            let _localctx = new SentenceContext(this._ctx, this.state);
            this.enterRule(_localctx, 292, bitmarkParser.RULE_sentence);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2856;
                    this.match(bitmarkParser.SENTENCE);
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
            if (!bitmarkParser.__ATN) {
                bitmarkParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bitmarkParser._serializedATN));
            }
            return bitmarkParser.__ATN;
        }
    }
    bitmarkParser.OPDOT = 1;
    bitmarkParser.S = 2;
    bitmarkParser.BitBook = 3;
    bitmarkParser.BitChapter = 4;
    bitmarkParser.BitToc = 5;
    bitmarkParser.BitSummary = 6;
    bitmarkParser.BitIntlink = 7;
    bitmarkParser.BitIntRef = 8;
    bitmarkParser.BitAlias = 9;
    bitmarkParser.BitGroups = 10;
    bitmarkParser.BitGroupt = 11;
    bitmarkParser.BitPlaceholder = 12;
    bitmarkParser.BitStatement = 13;
    bitmarkParser.BitDetails = 14;
    bitmarkParser.CLOZE = 15;
    bitmarkParser.MATCH = 16;
    bitmarkParser.BitArticle = 17;
    bitmarkParser.BitPage = 18;
    bitmarkParser.BitEssay = 19;
    bitmarkParser.BitMessage = 20;
    bitmarkParser.BitCorrection = 21;
    bitmarkParser.BitMark = 22;
    bitmarkParser.BitDocup = 23;
    bitmarkParser.BitTakepic = 24;
    bitmarkParser.BitRecaud = 25;
    bitmarkParser.BitPrepnote = 26;
    bitmarkParser.BitAssign = 27;
    bitmarkParser.BitBotint = 28;
    bitmarkParser.BitSelfassess = 29;
    bitmarkParser.BitRating = 30;
    bitmarkParser.BitSurvey = 31;
    bitmarkParser.BitSurvey1 = 32;
    bitmarkParser.BitSurveyanon = 33;
    bitmarkParser.BitSurveyanon1 = 34;
    bitmarkParser.BitVocabulary = 35;
    bitmarkParser.BitVocabulary1 = 36;
    bitmarkParser.BitNote = 37;
    bitmarkParser.BitInfo = 38;
    bitmarkParser.BitWarning = 39;
    bitmarkParser.BitRemark = 40;
    bitmarkParser.BitHint = 41;
    bitmarkParser.BitHelp = 42;
    bitmarkParser.BitDanger = 43;
    bitmarkParser.BitBug = 44;
    bitmarkParser.BitSidenote = 45;
    bitmarkParser.BitStickynote = 46;
    bitmarkParser.BitQuote = 47;
    bitmarkParser.BitFootnote = 48;
    bitmarkParser.BitExample = 49;
    bitmarkParser.BitButtonCopytext = 50;
    bitmarkParser.BitWbtContinue = 51;
    bitmarkParser.BitLearningPathDetails = 52;
    bitmarkParser.BitLearningPathLti = 53;
    bitmarkParser.BitLearningPathStep = 54;
    bitmarkParser.BitLearningPathBook = 55;
    bitmarkParser.BitLearningPathSign = 56;
    bitmarkParser.BitLearningPathVideoCall = 57;
    bitmarkParser.BitLearningPathLearningGoal = 58;
    bitmarkParser.BitLearningPathClosing = 59;
    bitmarkParser.BitLearningPathFeedback = 60;
    bitmarkParser.BitLearningPathBotTraining = 61;
    bitmarkParser.BitLearningPathExternalLink = 62;
    bitmarkParser.BitLearningPathClassroomTraining = 63;
    bitmarkParser.BitLearningPathClassroomEvent = 64;
    bitmarkParser.BitBotActionSend = 65;
    bitmarkParser.BitBotActionAnnounce = 66;
    bitmarkParser.BitBotActionSave = 67;
    bitmarkParser.BitBotActionRemind = 68;
    bitmarkParser.BitVendorPadletEmbed = 69;
    bitmarkParser.BitScorm = 70;
    bitmarkParser.COMMENT = 71;
    bitmarkParser.Image_type = 72;
    bitmarkParser.Audio_type = 73;
    bitmarkParser.Video_type = 74;
    bitmarkParser.OPDOLL = 75;
    bitmarkParser.OPBUL = 76;
    bitmarkParser.OPESC = 77;
    bitmarkParser.OPRANGLES = 78;
    bitmarkParser.OPRANGLEL = 79;
    bitmarkParser.OPDANGLE = 80;
    bitmarkParser.OPU = 81;
    bitmarkParser.OPB = 82;
    bitmarkParser.OPQ = 83;
    bitmarkParser.OPA = 84;
    bitmarkParser.OPP = 85;
    bitmarkParser.OPM = 86;
    bitmarkParser.OPS = 87;
    bitmarkParser.OPR = 88;
    bitmarkParser.OPHASH = 89;
    bitmarkParser.OPC = 90;
    bitmarkParser.CL = 91;
    bitmarkParser.COLON = 92;
    bitmarkParser.AMP = 93;
    bitmarkParser.DBLCOLON = 94;
    bitmarkParser.PLUS = 95;
    bitmarkParser.DotAt = 96;
    bitmarkParser.Greater = 97;
    bitmarkParser.Less = 98;
    bitmarkParser.RightAngle = 99;
    bitmarkParser.RightArrow = 100;
    bitmarkParser.DBLEQ = 101;
    bitmarkParser.HSPL = 102;
    bitmarkParser.HSPL2 = 103;
    bitmarkParser.SSPL = 104;
    bitmarkParser.SSPL2 = 105;
    bitmarkParser.QUOTE_INDEX = 106;
    bitmarkParser.DCANY = 107;
    bitmarkParser.ArticleText = 108;
    bitmarkParser.NOTCL = 109;
    bitmarkParser.NUMERIC = 110;
    bitmarkParser.STRING = 111;
    bitmarkParser.NL = 112;
    bitmarkParser.SENTENCE = 113;
    bitmarkParser.OPAT = 114;
    bitmarkParser.AtProgress = 115;
    bitmarkParser.AtReference = 116;
    bitmarkParser.AtWidth = 117;
    bitmarkParser.AtHeight = 118;
    bitmarkParser.AtProgressPoints = 119;
    bitmarkParser.AtShortanswer = 120;
    bitmarkParser.AtLonganswer = 121;
    bitmarkParser.AtExampleWithStr = 122;
    bitmarkParser.AtExamplecol = 123;
    bitmarkParser.AtExamplecl = 124;
    bitmarkParser.AtPartialAnswerS = 125;
    bitmarkParser.AtPartialAnswer = 126;
    bitmarkParser.AtLabeltrue = 127;
    bitmarkParser.AtLabelfalse = 128;
    bitmarkParser.AtPoints = 129;
    bitmarkParser.AtSrc = 130;
    bitmarkParser.OPATALT = 131;
    bitmarkParser.OPAMARK = 132;
    bitmarkParser.ShowInIndex = 133;
    bitmarkParser.OpAtCaption = 134;
    bitmarkParser.OpAtLicense = 135;
    bitmarkParser.OpAtCopyright = 136;
    bitmarkParser.OpAtIsTracked = 137;
    bitmarkParser.OpAtIsInfoOnly = 138;
    bitmarkParser.AtDate = 139;
    bitmarkParser.Http = 140;
    bitmarkParser.Https = 141;
    bitmarkParser.AmpAudio = 142;
    bitmarkParser.AmpImage = 143;
    bitmarkParser.AmpImageZoom = 144;
    bitmarkParser.AmpImageWAudio = 145;
    bitmarkParser.AmpVideo = 146;
    bitmarkParser.AmpArticle = 147;
    bitmarkParser.AmpDocument = 148;
    bitmarkParser.AmpApp = 149;
    bitmarkParser.AmpWebsite = 150;
    bitmarkParser.AmpStillImageFilm = 151;
    bitmarkParser.AmpPdf = 152;
    bitmarkParser.OpAmpAudio = 153;
    bitmarkParser.OpAmpImage = 154;
    bitmarkParser.OpAmpImageZoom = 155;
    bitmarkParser.OpAmpImageWAudio = 156;
    bitmarkParser.OpAmpVideo = 157;
    bitmarkParser.OpAmpArticle = 158;
    bitmarkParser.OpAmpArticleAtt = 159;
    bitmarkParser.OpAmpDocument = 160;
    bitmarkParser.OpAmpApp = 161;
    bitmarkParser.OpAmpWebsite = 162;
    bitmarkParser.OpAmpStillImageFilm = 163;
    bitmarkParser.BracEnclose = 164;
    bitmarkParser.AmpAudioLink = 165;
    bitmarkParser.AmpImageLink = 166;
    bitmarkParser.AmpVideoLink = 167;
    bitmarkParser.AmpArticleLink = 168;
    bitmarkParser.AmpDocumentLink = 169;
    bitmarkParser.AmpAppLink = 170;
    bitmarkParser.AmpWebsiteLink = 171;
    bitmarkParser.AmpStillImageFilmLink = 172;
    bitmarkParser.OpAmpAudioLink = 173;
    bitmarkParser.OpAmpImageLink = 174;
    bitmarkParser.OpAmpVideoLink = 175;
    bitmarkParser.OpAmpArticleLink = 176;
    bitmarkParser.OpAmpDocumentLink = 177;
    bitmarkParser.OpAmpAppLink = 178;
    bitmarkParser.OpAmpWebsiteLink = 179;
    bitmarkParser.OpAmpStillImageFilmLink = 180;
    bitmarkParser.BitmarkMinus = 181;
    bitmarkParser.BitmarkPlus = 182;
    bitmarkParser.ColonText = 183;
    bitmarkParser.Prosemirror = 184;
    bitmarkParser.Placeholder = 185;
    bitmarkParser.BASIC = 186;
    bitmarkParser.JPG = 187;
    bitmarkParser.PNG = 188;
    bitmarkParser.GIF = 189;
    bitmarkParser.SVG = 190;
    bitmarkParser.MP2 = 191;
    bitmarkParser.MP3 = 192;
    bitmarkParser.MP4 = 193;
    bitmarkParser.FLV = 194;
    bitmarkParser.WMV = 195;
    bitmarkParser.MPEG = 196;
    bitmarkParser.MPG = 197;
    bitmarkParser.TEL = 198;
    bitmarkParser.DotArticleAtt = 199;
    bitmarkParser.STAR = 200;
    bitmarkParser.URL = 201;
    bitmarkParser.LIST_LINE = 202;
    bitmarkParser.RULE_bitmark = 0;
    bitmarkParser.RULE_bitmark_ = 1;
    bitmarkParser.RULE_bit = 2;
    bitmarkParser.RULE_book = 3;
    bitmarkParser.RULE_chapter = 4;
    bitmarkParser.RULE_toc = 5;
    bitmarkParser.RULE_summary = 6;
    bitmarkParser.RULE_internal_link = 7;
    bitmarkParser.RULE_bit_alias = 8;
    bitmarkParser.RULE_title_etc = 9;
    bitmarkParser.RULE_group_born = 10;
    bitmarkParser.RULE_group_died = 11;
    bitmarkParser.RULE_learning_path_lti = 12;
    bitmarkParser.RULE_learning_path_step = 13;
    bitmarkParser.RULE_learning_path_book = 14;
    bitmarkParser.RULE_learning_path_sign = 15;
    bitmarkParser.RULE_learning_path_video_call = 16;
    bitmarkParser.RULE_learning_path_learning_goal = 17;
    bitmarkParser.RULE_learning_path_closing = 18;
    bitmarkParser.RULE_learning_path_feedback = 19;
    bitmarkParser.RULE_learning_path_bot_training = 20;
    bitmarkParser.RULE_learning_path_external_link = 21;
    bitmarkParser.RULE_learning_path_classroom_training = 22;
    bitmarkParser.RULE_learning_path_classroom_event = 23;
    bitmarkParser.RULE_bot_action_send = 24;
    bitmarkParser.RULE_bot_action_announce = 25;
    bitmarkParser.RULE_bot_action_save = 26;
    bitmarkParser.RULE_bot_action_remind = 27;
    bitmarkParser.RULE_bitElem = 28;
    bitmarkParser.RULE_gap = 29;
    bitmarkParser.RULE_single_gap = 30;
    bitmarkParser.RULE_choice_plus = 31;
    bitmarkParser.RULE_choice_minus = 32;
    bitmarkParser.RULE_choice_star = 33;
    bitmarkParser.RULE_essay = 34;
    bitmarkParser.RULE_ml_example = 35;
    bitmarkParser.RULE_partans = 36;
    bitmarkParser.RULE_resource = 37;
    bitmarkParser.RULE_correction = 38;
    bitmarkParser.RULE_corrs = 39;
    bitmarkParser.RULE_mark_ = 40;
    bitmarkParser.RULE_mark_text = 41;
    bitmarkParser.RULE_mark_color = 42;
    bitmarkParser.RULE_document_upload = 43;
    bitmarkParser.RULE_take_picture = 44;
    bitmarkParser.RULE_record_audio = 45;
    bitmarkParser.RULE_preparation_note = 46;
    bitmarkParser.RULE_assignment = 47;
    bitmarkParser.RULE_article = 48;
    bitmarkParser.RULE_statement = 49;
    bitmarkParser.RULE_details = 50;
    bitmarkParser.RULE_buttoncopytext = 51;
    bitmarkParser.RULE_wbtcontinue = 52;
    bitmarkParser.RULE_learningpathdetails = 53;
    bitmarkParser.RULE_page = 54;
    bitmarkParser.RULE_note = 55;
    bitmarkParser.RULE_info = 56;
    bitmarkParser.RULE_warning = 57;
    bitmarkParser.RULE_remark = 58;
    bitmarkParser.RULE_help = 59;
    bitmarkParser.RULE_danger = 60;
    bitmarkParser.RULE_bug = 61;
    bitmarkParser.RULE_sidenote = 62;
    bitmarkParser.RULE_stickynote = 63;
    bitmarkParser.RULE_quote = 64;
    bitmarkParser.RULE_footnote = 65;
    bitmarkParser.RULE_hintbit = 66;
    bitmarkParser.RULE_examplebit = 67;
    bitmarkParser.RULE_vendor_padlet_embed = 68;
    bitmarkParser.RULE_scorm = 69;
    bitmarkParser.RULE_message = 70;
    bitmarkParser.RULE_bot_interview = 71;
    bitmarkParser.RULE_bot_choice = 72;
    bitmarkParser.RULE_rating = 73;
    bitmarkParser.RULE_bullet_item = 74;
    bitmarkParser.RULE_survey = 75;
    bitmarkParser.RULE_survey_1 = 76;
    bitmarkParser.RULE_survey_anonymous = 77;
    bitmarkParser.RULE_survey_anonymous_1 = 78;
    bitmarkParser.RULE_self_assessment = 79;
    bitmarkParser.RULE_self_assess_s_and_w = 80;
    bitmarkParser.RULE_atpoint = 81;
    bitmarkParser.RULE_format = 82;
    bitmarkParser.RULE_resource_format = 83;
    bitmarkParser.RULE_resource_format_extra = 84;
    bitmarkParser.RULE_image_format = 85;
    bitmarkParser.RULE_video_format = 86;
    bitmarkParser.RULE_article_format = 87;
    bitmarkParser.RULE_document_format = 88;
    bitmarkParser.RULE_app_format = 89;
    bitmarkParser.RULE_website_format = 90;
    bitmarkParser.RULE_stillimagefilm_format = 91;
    bitmarkParser.RULE_op_article_format = 92;
    bitmarkParser.RULE_op_document_format = 93;
    bitmarkParser.RULE_op_app_format = 94;
    bitmarkParser.RULE_op_website_format = 95;
    bitmarkParser.RULE_op_video_format = 96;
    bitmarkParser.RULE_op_stillimagefilm_format = 97;
    bitmarkParser.RULE_articlebit = 98;
    bitmarkParser.RULE_documentbit = 99;
    bitmarkParser.RULE_websitebit = 100;
    bitmarkParser.RULE_appbit = 101;
    bitmarkParser.RULE_stillimagefilmbit = 102;
    bitmarkParser.RULE_stillimg_one = 103;
    bitmarkParser.RULE_videobit = 104;
    bitmarkParser.RULE_video_one = 105;
    bitmarkParser.RULE_imagebit = 106;
    bitmarkParser.RULE_image_one = 107;
    bitmarkParser.RULE_op_image_format = 108;
    bitmarkParser.RULE_image_chained = 109;
    bitmarkParser.RULE_image_chained4match = 110;
    bitmarkParser.RULE_audiobit = 111;
    bitmarkParser.RULE_audio_one = 112;
    bitmarkParser.RULE_audio_format = 113;
    bitmarkParser.RULE_op_audio_format = 114;
    bitmarkParser.RULE_resource_chained = 115;
    bitmarkParser.RULE_telephone = 116;
    bitmarkParser.RULE_url = 117;
    bitmarkParser.RULE_item = 118;
    bitmarkParser.RULE_lead = 119;
    bitmarkParser.RULE_angleref = 120;
    bitmarkParser.RULE_example = 121;
    bitmarkParser.RULE_bracketed_text = 122;
    bitmarkParser.RULE_reference = 123;
    bitmarkParser.RULE_progress = 124;
    bitmarkParser.RULE_dateprop = 125;
    bitmarkParser.RULE_dateprop_chained = 126;
    bitmarkParser.RULE_instruction = 127;
    bitmarkParser.RULE_hint = 128;
    bitmarkParser.RULE_title = 129;
    bitmarkParser.RULE_bool_label = 130;
    bitmarkParser.RULE_progress_points = 131;
    bitmarkParser.RULE_istracked = 132;
    bitmarkParser.RULE_isinfoonly = 133;
    bitmarkParser.RULE_atdef = 134;
    bitmarkParser.RULE_atdef_ = 135;
    bitmarkParser.RULE_dollarans = 136;
    bitmarkParser.RULE_anchor = 137;
    bitmarkParser.RULE_lines = 138;
    bitmarkParser.RULE_s_and_w = 139;
    bitmarkParser.RULE_dclines = 140;
    bitmarkParser.RULE_bracket_escaped = 141;
    bitmarkParser.RULE_clnsp = 142;
    bitmarkParser.RULE_sspl = 143;
    bitmarkParser.RULE_words = 144;
    bitmarkParser.RULE_sp = 145;
    bitmarkParser.RULE_sentence = 146;
    // tslint:disable:no-trailing-whitespace
    bitmarkParser.ruleNames = [
        "bitmark", "bitmark_", "bit", "book", "chapter", "toc", "summary", "internal_link",
        "bit_alias", "title_etc", "group_born", "group_died", "learning_path_lti",
        "learning_path_step", "learning_path_book", "learning_path_sign", "learning_path_video_call",
        "learning_path_learning_goal", "learning_path_closing", "learning_path_feedback",
        "learning_path_bot_training", "learning_path_external_link", "learning_path_classroom_training",
        "learning_path_classroom_event", "bot_action_send", "bot_action_announce",
        "bot_action_save", "bot_action_remind", "bitElem", "gap", "single_gap",
        "choice_plus", "choice_minus", "choice_star", "essay", "ml_example", "partans",
        "resource", "correction", "corrs", "mark_", "mark_text", "mark_color",
        "document_upload", "take_picture", "record_audio", "preparation_note",
        "assignment", "article", "statement", "details", "buttoncopytext", "wbtcontinue",
        "learningpathdetails", "page", "note", "info", "warning", "remark", "help",
        "danger", "bug", "sidenote", "stickynote", "quote", "footnote", "hintbit",
        "examplebit", "vendor_padlet_embed", "scorm", "message", "bot_interview",
        "bot_choice", "rating", "bullet_item", "survey", "survey_1", "survey_anonymous",
        "survey_anonymous_1", "self_assessment", "self_assess_s_and_w", "atpoint",
        "format", "resource_format", "resource_format_extra", "image_format",
        "video_format", "article_format", "document_format", "app_format", "website_format",
        "stillimagefilm_format", "op_article_format", "op_document_format", "op_app_format",
        "op_website_format", "op_video_format", "op_stillimagefilm_format", "articlebit",
        "documentbit", "websitebit", "appbit", "stillimagefilmbit", "stillimg_one",
        "videobit", "video_one", "imagebit", "image_one", "op_image_format", "image_chained",
        "image_chained4match", "audiobit", "audio_one", "audio_format", "op_audio_format",
        "resource_chained", "telephone", "url", "item", "lead", "angleref", "example",
        "bracketed_text", "reference", "progress", "dateprop", "dateprop_chained",
        "instruction", "hint", "title", "bool_label", "progress_points", "istracked",
        "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "lines", "s_and_w",
        "dclines", "bracket_escaped", "clnsp", "sspl", "words", "sp", "sentence",
    ];
    bitmarkParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'CLOZE'", "'MATCH'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'",
        "'\u2192'", "'=='", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "'[@'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'http://'", "'https://'",
        "'&audio'", "'&image'", "'&image-zoom'", "'&imageWithAudio'", "'&video'",
        "'&article'", "'&document'", "'&app'", "'&website'", "'&stillImageFilm'",
        "'&pdf'", undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "'&audioLink'",
        "'&imageLink'", "'&videoLink'", "'&articleLink'", "'&documentLink'", "'&appLink'",
        "'&websiteLink'", "'&stillImageFilmLink'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "':bitmark--'",
        "':bitmark++'", "':text'", "':prosemirror'", "':placeholder'", "':basic'",
        "':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'",
        "':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'",
        "'*'",
    ];
    bitmarkParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitBook", "BitChapter", "BitToc", "BitSummary",
        "BitIntlink", "BitIntRef", "BitAlias", "BitGroups", "BitGroupt", "BitPlaceholder",
        "BitStatement", "BitDetails", "CLOZE", "MATCH", "BitArticle", "BitPage",
        "BitEssay", "BitMessage", "BitCorrection", "BitMark", "BitDocup", "BitTakepic",
        "BitRecaud", "BitPrepnote", "BitAssign", "BitBotint", "BitSelfassess",
        "BitRating", "BitSurvey", "BitSurvey1", "BitSurveyanon", "BitSurveyanon1",
        "BitVocabulary", "BitVocabulary1", "BitNote", "BitInfo", "BitWarning",
        "BitRemark", "BitHint", "BitHelp", "BitDanger", "BitBug", "BitSidenote",
        "BitStickynote", "BitQuote", "BitFootnote", "BitExample", "BitButtonCopytext",
        "BitWbtContinue", "BitLearningPathDetails", "BitLearningPathLti", "BitLearningPathStep",
        "BitLearningPathBook", "BitLearningPathSign", "BitLearningPathVideoCall",
        "BitLearningPathLearningGoal", "BitLearningPathClosing", "BitLearningPathFeedback",
        "BitLearningPathBotTraining", "BitLearningPathExternalLink", "BitLearningPathClassroomTraining",
        "BitLearningPathClassroomEvent", "BitBotActionSend", "BitBotActionAnnounce",
        "BitBotActionSave", "BitBotActionRemind", "BitVendorPadletEmbed", "BitScorm",
        "COMMENT", "Image_type", "Audio_type", "Video_type", "OPDOLL", "OPBUL",
        "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA",
        "OPP", "OPM", "OPS", "OPR", "OPHASH", "OPC", "CL", "COLON", "AMP", "DBLCOLON",
        "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow", "DBLEQ",
        "HSPL", "HSPL2", "SSPL", "SSPL2", "QUOTE_INDEX", "DCANY", "ArticleText",
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
        "Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2",
        "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR",
        "URL", "LIST_LINE",
    ];
    bitmarkParser.VOCABULARY = new VocabularyImpl(bitmarkParser._LITERAL_NAMES, bitmarkParser._SYMBOLIC_NAMES, []);
    bitmarkParser._serializedATNSegments = 6;
    bitmarkParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xCC\u0B2D\x04" +
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
        "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x03\x02\x03\x02" +
        "\x07\x02\u012B\n\x02\f\x02\x0E\x02\u012E\v\x02\x03\x02\x07\x02\u0131\n" +
        "\x02\f\x02\x0E\x02\u0134\v\x02\x06\x02\u0136\n\x02\r\x02\x0E\x02\u0137" +
        "\x03\x02\x07\x02\u013B\n\x02\f\x02\x0E\x02\u013E\v\x02\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x05\x03\u0144\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0186\n\x04\x03\x05" +
        "\x03\x05\x05\x05\u018A\n\x05\x03\x05\x03\x05\x07\x05\u018E\n\x05\f\x05" +
        "\x0E\x05\u0191\v\x05\x03\x05\x06\x05\u0194\n\x05\r\x05\x0E\x05\u0195\x03" +
        "\x06\x03\x06\x05\x06\u019A\n\x06\x03\x06\x03\x06\x07\x06\u019E\n\x06\f" +
        "\x06\x0E\x06\u01A1\v\x06\x03\x06\x03\x06\x03\x06\x05\x06\u01A6\n\x06\x03" +
        "\x06\x03\x06\x07\x06\u01AA\n\x06\f\x06\x0E\x06\u01AD\v\x06\x03\x06\x07" +
        "\x06\u01B0\n\x06\f\x06\x0E\x06\u01B3\v\x06\x03\x07\x03\x07\x05\x07\u01B7" +
        "\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01BE\n\x07\x03" +
        "\b\x03\b\x03\b\x07\b\u01C3\n\b\f\b\x0E\b\u01C6\v\b\x03\b\x03\b\x03\t\x03" +
        "\t\x05\t\u01CC\n\t\x03\t\x03\t\x07\t\u01D0\n\t\f\t\x0E\t\u01D3\v\t\x03" +
        "\t\x07\t\u01D6\n\t\f\t\x0E\t\u01D9\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x05" +
        "\v\u01E0\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u01E9\n\v" +
        "\x07\v\u01EB\n\v\f\v\x0E\v\u01EE\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x06\f\u01F6\n\f\r\f\x0E\f\u01F7\x03\f\x06\f\u01FB\n\f\r\f\x0E\f\u01FC" +
        "\x03\f\x03\f\x07\f\u0201\n\f\f\f\x0E\f\u0204\v\f\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x06\r\u020C\n\r\r\r\x0E\r\u020D\x03\r\x06\r\u0211\n\r\r" +
        "\r\x0E\r\u0212\x03\r\x03\r\x07\r\u0217\n\r\f\r\x0E\r\u021A\v\r\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0220\n\x0E\f\x0E\x0E\x0E\u0223\v\x0E" +
        "\x03\x0E\x03\x0E\x07\x0E\u0227\n\x0E\f\x0E\x0E\x0E\u022A\v\x0E\x06\x0E" +
        "\u022C\n\x0E\r\x0E\x0E\x0E\u022D\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
        "\u0234\n\x0F\f\x0F\x0E\x0F\u0237\v\x0F\x03\x0F\x03\x0F\x07\x0F\u023B\n" +
        "\x0F\f\x0F\x0E\x0F\u023E\v\x0F\x06\x0F\u0240\n\x0F\r\x0F\x0E\x0F\u0241" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0248\n\x10\f\x10\x0E\x10\u024B" +
        "\v\x10\x03\x10\x03\x10\x07\x10\u024F\n\x10\f\x10\x0E\x10\u0252\v\x10\x06" +
        "\x10\u0254\n\x10\r\x10\x0E\x10\u0255\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
        "\x11\u025C\n\x11\f\x11\x0E\x11\u025F\v\x11\x03\x11\x03\x11\x07\x11\u0263" +
        "\n\x11\f\x11\x0E\x11\u0266\v\x11\x06\x11\u0268\n\x11\r\x11\x0E\x11\u0269" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u0270\n\x12\f\x12\x0E\x12\u0273" +
        "\v\x12\x03\x12\x03\x12\x07\x12\u0277\n\x12\f\x12\x0E\x12\u027A\v\x12\x06" +
        "\x12\u027C\n\x12\r\x12\x0E\x12\u027D\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
        "\x13\u0284\n\x13\f\x13\x0E\x13\u0287\v\x13\x03\x13\x03\x13\x07\x13\u028B" +
        "\n\x13\f\x13\x0E\x13\u028E\v\x13\x06\x13\u0290\n\x13\r\x13\x0E\x13\u0291" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0298\n\x14\f\x14\x0E\x14\u029B" +
        "\v\x14\x03\x14\x03\x14\x07\x14\u029F\n\x14\f\x14\x0E\x14\u02A2\v\x14\x06" +
        "\x14\u02A4\n\x14\r\x14\x0E\x14\u02A5\x03\x15\x03\x15\x03\x15\x03\x15\x07" +
        "\x15\u02AC\n\x15\f\x15\x0E\x15\u02AF\v\x15\x03\x15\x03\x15\x07\x15\u02B3" +
        "\n\x15\f\x15\x0E\x15\u02B6\v\x15\x06\x15\u02B8\n\x15\r\x15\x0E\x15\u02B9" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u02C0\n\x16\f\x16\x0E\x16\u02C3" +
        "\v\x16\x03\x16\x03\x16\x07\x16\u02C7\n\x16\f\x16\x0E\x16\u02CA\v\x16\x06" +
        "\x16\u02CC\n\x16\r\x16\x0E\x16\u02CD\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
        "\x17\u02D4\n\x17\f\x17\x0E\x17\u02D7\v\x17\x03\x17\x03\x17\x07\x17\u02DB" +
        "\n\x17\f\x17\x0E\x17\u02DE\v\x17\x06\x17\u02E0\n\x17\r\x17\x0E\x17\u02E1" +
        "\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u02E8\n\x18\f\x18\x0E\x18\u02EB" +
        "\v\x18\x03\x18\x03\x18\x07\x18\u02EF\n\x18\f\x18\x0E\x18\u02F2\v\x18\x06" +
        "\x18\u02F4\n\x18\r\x18\x0E\x18\u02F5\x03\x19\x03\x19\x03\x19\x03\x19\x07" +
        "\x19\u02FC\n\x19\f\x19\x0E\x19\u02FF\v\x19\x03\x19\x03\x19\x07\x19\u0303" +
        "\n\x19\f\x19\x0E\x19\u0306\v\x19\x06\x19\u0308\n\x19\r\x19\x0E\x19\u0309" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0310\n\x1A\f\x1A\x0E\x1A\u0313" +
        "\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0317\n\x1A\f\x1A\x0E\x1A\u031A\v\x1A\x06" +
        "\x1A\u031C\n\x1A\r\x1A\x0E\x1A\u031D\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07" +
        "\x1B\u0324\n\x1B\f\x1B\x0E\x1B\u0327\v\x1B\x03\x1B\x03\x1B\x07\x1B\u032B" +
        "\n\x1B\f\x1B\x0E\x1B\u032E\v\x1B\x06\x1B\u0330\n\x1B\r\x1B\x0E\x1B\u0331" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0338\n\x1C\f\x1C\x0E\x1C\u033B" +
        "\v\x1C\x03\x1C\x03\x1C\x07\x1C\u033F\n\x1C\f\x1C\x0E\x1C\u0342\v\x1C\x06" +
        "\x1C\u0344\n\x1C\r\x1C\x0E\x1C\u0345\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07" +
        "\x1D\u034C\n\x1D\f\x1D\x0E\x1D\u034F\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0353" +
        "\n\x1D\f\x1D\x0E\x1D\u0356\v\x1D\x06\x1D\u0358\n\x1D\r\x1D\x0E\x1D\u0359" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u037B\n\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0383\n\x1F\f\x1F\x0E\x1F\u0386\v" +
        "\x1F\x03 \x03 \x03 \x03 \x05 \u038C\n \x03 \x07 \u038F\n \f \x0E \u0392" +
        "\v \x03 \x03 \x03!\x05!\u0397\n!\x03!\x03!\x06!\u039B\n!\r!\x0E!\u039C" +
        "\x03!\x03!\x03\"\x05\"\u03A2\n\"\x03\"\x03\"\x06\"\u03A6\n\"\r\"\x0E\"" +
        "\u03A7\x03\"\x03\"\x03#\x05#\u03AD\n#\x03#\x03#\x06#\u03B1\n#\r#\x0E#" +
        "\u03B2\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u03BD\n$\f$\x0E$\u03C0" +
        "\v$\x07$\u03C2\n$\f$\x0E$\u03C5\v$\x03$\x07$\u03C8\n$\f$\x0E$\u03CB\v" +
        "$\x03$\x07$\u03CE\n$\f$\x0E$\u03D1\v$\x03$\x07$\u03D4\n$\f$\x0E$\u03D7" +
        "\v$\x03$\x03$\x07$\u03DB\n$\f$\x0E$\u03DE\v$\x03$\x07$\u03E1\n$\f$\x0E" +
        "$\u03E4\v$\x05$\u03E6\n$\x03%\x03%\x05%\u03EA\n%\x03%\x03%\x05%\u03EE" +
        "\n%\x05%\u03F0\n%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(" +
        "\x03(\x03(\x07(\u03FE\n(\f(\x0E(\u0401\v(\x07(\u0403\n(\f(\x0E(\u0406" +
        "\v(\x03(\x07(\u0409\n(\f(\x0E(\u040C\v(\x03(\x07(\u040F\n(\f(\x0E(\u0412" +
        "\v(\x03(\x03(\x07(\u0416\n(\f(\x0E(\u0419\v(\x03(\x07(\u041C\n(\f(\x0E" +
        "(\u041F\v(\x05(\u0421\n(\x03)\x03)\x07)\u0425\n)\f)\x0E)\u0428\v)\x03" +
        ")\x03)\x03)\x03)\x07)\u042E\n)\f)\x0E)\u0431\v)\x03)\x03)\x05)\u0435\n" +
        ")\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u043D\n*\x03*\x07*\u0440\n*\f*\x0E" +
        "*\u0443\v*\x07*\u0445\n*\f*\x0E*\u0448\v*\x03*\x07*\u044B\n*\f*\x0E*\u044E" +
        "\v*\x03*\x03*\x07*\u0452\n*\f*\x0E*\u0455\v*\x03*\x07*\u0458\n*\f*\x0E" +
        "*\u045B\v*\x05*\u045D\n*\x03+\x03+\x03+\x03+\x05+\u0463\n+\x03+\x03+\x03" +
        "+\x07+\u0468\n+\f+\x0E+\u046B\v+\x03,\x03,\x07,\u046F\n,\f,\x0E,\u0472" +
        "\v,\x03,\x03,\x07,\u0476\n,\f,\x0E,\u0479\v,\x03,\x03,\x03-\x03-\x05-" +
        "\u047F\n-\x03-\x03-\x03-\x03-\x07-\u0485\n-\f-\x0E-\u0488\v-\x07-\u048A" +
        "\n-\f-\x0E-\u048D\v-\x03-\x07-\u0490\n-\f-\x0E-\u0493\v-\x03-\x03-\x07" +
        "-\u0497\n-\f-\x0E-\u049A\v-\x03-\x07-\u049D\n-\f-\x0E-\u04A0\v-\x05-\u04A2" +
        "\n-\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u04AA\n.\f.\x0E.\u04AD\v.\x07." +
        "\u04AF\n.\f.\x0E.\u04B2\v.\x03.\x07.\u04B5\n.\f.\x0E.\u04B8\v.\x03.\x03" +
        ".\x07.\u04BC\n.\f.\x0E.\u04BF\v.\x03.\x07.\u04C2\n.\f.\x0E.\u04C5\v.\x05" +
        ".\u04C7\n.\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u04CF\n/\f/\x0E/\u04D2\v" +
        "/\x07/\u04D4\n/\f/\x0E/\u04D7\v/\x03/\x07/\u04DA\n/\f/\x0E/\u04DD\v/\x03" +
        "/\x03/\x07/\u04E1\n/\f/\x0E/\u04E4\v/\x03/\x07/\u04E7\n/\f/\x0E/\u04EA" +
        "\v/\x05/\u04EC\n/\x030\x030\x030\x030\x070\u04F2\n0\f0\x0E0\u04F5\v0\x03" +
        "0\x030\x070\u04F9\n0\f0\x0E0\u04FC\v0\x070\u04FE\n0\f0\x0E0\u0501\v0\x03" +
        "0\x050\u0504\n0\x030\x070\u0507\n0\f0\x0E0\u050A\v0\x030\x030\x070\u050E" +
        "\n0\f0\x0E0\u0511\v0\x030\x070\u0514\n0\f0\x0E0\u0517\v0\x050\u0519\n" +
        "0\x031\x031\x031\x031\x061\u051F\n1\r1\x0E1\u0520\x031\x031\x071\u0525" +
        "\n1\f1\x0E1\u0528\v1\x071\u052A\n1\f1\x0E1\u052D\v1\x031\x051\u0530\n" +
        "1\x031\x071\u0533\n1\f1\x0E1\u0536\v1\x031\x031\x071\u053A\n1\f1\x0E1" +
        "\u053D\v1\x031\x071\u0540\n1\f1\x0E1\u0543\v1\x051\u0545\n1\x032\x032" +
        "\x032\x032\x072\u054B\n2\f2\x0E2\u054E\v2\x032\x032\x072\u0552\n2\f2\x0E" +
        "2\u0555\v2\x062\u0557\n2\r2\x0E2\u0558\x033\x033\x033\x033\x073\u055F" +
        "\n3\f3\x0E3\u0562\v3\x033\x033\x073\u0566\n3\f3\x0E3\u0569\v3\x063\u056B" +
        "\n3\r3\x0E3\u056C\x034\x034\x034\x034\x074\u0573\n4\f4\x0E4\u0576\v4\x03" +
        "4\x034\x074\u057A\n4\f4\x0E4\u057D\v4\x064\u057F\n4\r4\x0E4\u0580\x03" +
        "5\x035\x035\x035\x075\u0587\n5\f5\x0E5\u058A\v5\x035\x035\x075\u058E\n" +
        "5\f5\x0E5\u0591\v5\x065\u0593\n5\r5\x0E5\u0594\x036\x036\x036\x036\x07" +
        "6\u059B\n6\f6\x0E6\u059E\v6\x036\x036\x076\u05A2\n6\f6\x0E6\u05A5\v6\x06" +
        "6\u05A7\n6\r6\x0E6\u05A8\x037\x037\x037\x037\x077\u05AF\n7\f7\x0E7\u05B2" +
        "\v7\x037\x037\x077\u05B6\n7\f7\x0E7\u05B9\v7\x067\u05BB\n7\r7\x0E7\u05BC" +
        "\x038\x038\x038\x038\x078\u05C3\n8\f8\x0E8\u05C6\v8\x038\x038\x078\u05CA" +
        "\n8\f8\x0E8\u05CD\v8\x068\u05CF\n8\r8\x0E8\u05D0\x039\x039\x039\x039\x07" +
        "9\u05D7\n9\f9\x0E9\u05DA\v9\x039\x039\x079\u05DE\n9\f9\x0E9\u05E1\v9\x06" +
        "9\u05E3\n9\r9\x0E9\u05E4\x03:\x03:\x03:\x03:\x07:\u05EB\n:\f:\x0E:\u05EE" +
        "\v:\x03:\x03:\x07:\u05F2\n:\f:\x0E:\u05F5\v:\x06:\u05F7\n:\r:\x0E:\u05F8" +
        "\x03;\x03;\x03;\x03;\x07;\u05FF\n;\f;\x0E;\u0602\v;\x03;\x03;\x07;\u0606" +
        "\n;\f;\x0E;\u0609\v;\x06;\u060B\n;\r;\x0E;\u060C\x03<\x03<\x03<\x03<\x07" +
        "<\u0613\n<\f<\x0E<\u0616\v<\x03<\x03<\x07<\u061A\n<\f<\x0E<\u061D\v<\x06" +
        "<\u061F\n<\r<\x0E<\u0620\x03=\x03=\x03=\x03=\x07=\u0627\n=\f=\x0E=\u062A" +
        "\v=\x03=\x03=\x07=\u062E\n=\f=\x0E=\u0631\v=\x06=\u0633\n=\r=\x0E=\u0634" +
        "\x03>\x03>\x03>\x03>\x07>\u063B\n>\f>\x0E>\u063E\v>\x03>\x03>\x07>\u0642" +
        "\n>\f>\x0E>\u0645\v>\x06>\u0647\n>\r>\x0E>\u0648\x03?\x03?\x03?\x03?\x07" +
        "?\u064F\n?\f?\x0E?\u0652\v?\x03?\x03?\x07?\u0656\n?\f?\x0E?\u0659\v?\x06" +
        "?\u065B\n?\r?\x0E?\u065C\x03@\x03@\x03@\x03@\x07@\u0663\n@\f@\x0E@\u0666" +
        "\v@\x03@\x03@\x07@\u066A\n@\f@\x0E@\u066D\v@\x06@\u066F\n@\r@\x0E@\u0670" +
        "\x03A\x03A\x03A\x03A\x07A\u0677\nA\fA\x0EA\u067A\vA\x03A\x03A\x07A\u067E" +
        "\nA\fA\x0EA\u0681\vA\x06A\u0683\nA\rA\x0EA\u0684\x03B\x03B\x03B\x03B\x07" +
        "B\u068B\nB\fB\x0EB\u068E\vB\x03B\x03B\x07B\u0692\nB\fB\x0EB\u0695\vB\x06" +
        "B\u0697\nB\rB\x0EB\u0698\x03C\x03C\x03C\x03C\x07C\u069F\nC\fC\x0EC\u06A2" +
        "\vC\x03C\x03C\x07C\u06A6\nC\fC\x0EC\u06A9\vC\x06C\u06AB\nC\rC\x0EC\u06AC" +
        "\x03D\x03D\x03D\x03D\x07D\u06B3\nD\fD\x0ED\u06B6\vD\x03D\x03D\x07D\u06BA" +
        "\nD\fD\x0ED\u06BD\vD\x06D\u06BF\nD\rD\x0ED\u06C0\x03E\x03E\x03E\x03E\x07" +
        "E\u06C7\nE\fE\x0EE\u06CA\vE\x03E\x03E\x07E\u06CE\nE\fE\x0EE\u06D1\vE\x06" +
        "E\u06D3\nE\rE\x0EE\u06D4\x03F\x03F\x03F\x03F\x07F\u06DB\nF\fF\x0EF\u06DE" +
        "\vF\x03F\x03F\x07F\u06E2\nF\fF\x0EF\u06E5\vF\x06F\u06E7\nF\rF\x0EF\u06E8" +
        "\x03G\x03G\x03G\x03G\x07G\u06EF\nG\fG\x0EG\u06F2\vG\x03G\x03G\x07G\u06F6" +
        "\nG\fG\x0EG\u06F9\vG\x06G\u06FB\nG\rG\x0EG\u06FC\x03H\x03H\x03H\x03H\x07" +
        "H\u0703\nH\fH\x0EH\u0706\vH\x03H\x03H\x07H\u070A\nH\fH\x0EH\u070D\vH\x06" +
        "H\u070F\nH\rH\x0EH\u0710\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x07I" +
        "\u071B\nI\fI\x0EI\u071E\vI\x06I\u0720\nI\rI\x0EI\u0721\x03I\x03I\x07I" +
        "\u0726\nI\fI\x0EI\u0729\vI\x03I\x03I\x07I\u072D\nI\fI\x0EI\u0730\vI\x03" +
        "I\x07I\u0733\nI\fI\x0EI\u0736\vI\x05I\u0738\nI\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x06J\u0741\nJ\rJ\x0EJ\u0742\x03K\x03K\x03K\x03K\x07K\u0749" +
        "\nK\fK\x0EK\u074C\vK\x03K\x03K\x07K\u0750\nK\fK\x0EK\u0753\vK\x07K\u0755" +
        "\nK\fK\x0EK\u0758\vK\x03K\x03K\x03K\x03K\x06K\u075E\nK\rK\x0EK\u075F\x06" +
        "K\u0762\nK\rK\x0EK\u0763\x03K\x03K\x07K\u0768\nK\fK\x0EK\u076B\vK\x03" +
        "K\x03K\x07K\u076F\nK\fK\x0EK\u0772\vK\x03K\x07K\u0775\nK\fK\x0EK\u0778" +
        "\vK\x05K\u077A\nK\x03L\x03L\x03L\x03L\x05L\u0780\nL\x03M\x03M\x03M\x03" +
        "M\x07M\u0786\nM\fM\x0EM\u0789\vM\x03M\x03M\x07M\u078D\nM\fM\x0EM\u0790" +
        "\vM\x07M\u0792\nM\fM\x0EM\u0795\vM\x03M\x03M\x05M\u0799\nM\x03M\x07M\u079C" +
        "\nM\fM\x0EM\u079F\vM\x03M\x06M\u07A2\nM\rM\x0EM\u07A3\x06M\u07A6\nM\r" +
        "M\x0EM\u07A7\x03M\x03M\x03N\x03N\x03N\x03N\x07N\u07B0\nN\fN\x0EN\u07B3" +
        "\vN\x03N\x03N\x07N\u07B7\nN\fN\x0EN\u07BA\vN\x07N\u07BC\nN\fN\x0EN\u07BF" +
        "\vN\x03N\x03N\x03N\x03N\x06N\u07C5\nN\rN\x0EN\u07C6\x06N\u07C9\nN\rN\x0E" +
        "N\u07CA\x03N\x03N\x03O\x03O\x03O\x03O\x07O\u07D3\nO\fO\x0EO\u07D6\vO\x03" +
        "O\x03O\x07O\u07DA\nO\fO\x0EO\u07DD\vO\x07O\u07DF\nO\fO\x0EO\u07E2\vO\x03" +
        "O\x03O\x03O\x03O\x06O\u07E8\nO\rO\x0EO\u07E9\x06O\u07EC\nO\rO\x0EO\u07ED" +
        "\x03O\x03O\x03P\x03P\x03P\x03P\x07P\u07F6\nP\fP\x0EP\u07F9\vP\x03P\x03" +
        "P\x07P\u07FD\nP\fP\x0EP\u0800\vP\x07P\u0802\nP\fP\x0EP\u0805\vP\x03P\x03" +
        "P\x03P\x03P\x06P\u080B\nP\rP\x0EP\u080C\x06P\u080F\nP\rP\x0EP\u0810\x03" +
        "P\x03P\x03Q\x03Q\x03Q\x03Q\x07Q\u0819\nQ\fQ\x0EQ\u081C\vQ\x03Q\x03Q\x07" +
        "Q\u0820\nQ\fQ\x0EQ\u0823\vQ\x07Q\u0825\nQ\fQ\x0EQ\u0828\vQ\x03Q\x03Q\x03" +
        "Q\x07Q\u082D\nQ\fQ\x0EQ\u0830\vQ\x03Q\x06Q\u0833\nQ\rQ\x0EQ\u0834\x06" +
        "Q\u0837\nQ\rQ\x0EQ\u0838\x03Q\x03Q\x07Q\u083D\nQ\fQ\x0EQ\u0840\vQ\x03" +
        "Q\x03Q\x07Q\u0844\nQ\fQ\x0EQ\u0847\vQ\x03Q\x07Q\u084A\nQ\fQ\x0EQ\u084D" +
        "\vQ\x05Q\u084F\nQ\x03R\x06R\u0852\nR\rR\x0ER\u0853\x03S\x03S\x03S\x03" +
        "S\x03T\x07T\u085B\nT\fT\x0ET\u085E\vT\x03T\x03T\x07T\u0862\nT\fT\x0ET" +
        "\u0865\vT\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V" +
        "\u0872\nV\x03W\x03W\x03W\x05W\u0877\nW\x03W\x03W\x05W\u087B\nW\x03W\x03" +
        "W\x05W\u087F\nW\x03W\x05W\u0882\nW\x03X\x03X\x03X\x05X\u0887\nX\x03Y\x03" +
        "Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03" +
        "`\x03a\x03a\x03b\x03b\x03b\x05b\u089E\nb\x03b\x03b\x03b\x05b\u08A3\nb" +
        "\x05b\u08A5\nb\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u08AF\nd\x03" +
        "e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u08B9\ne";
    bitmarkParser._serializedATNSegment1 = "\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u08C3\nf\x03g\x03g\x03g" +
        "\x03g\x05g\u08C9\ng\x03g\x03g\x03g\x03g\x03g\x05g\u08D0\ng\x03h\x03h\x07" +
        "h\u08D4\nh\fh\x0Eh\u08D7\vh\x03i\x03i\x03i\x07i\u08DC\ni\fi\x0Ei\u08DF" +
        "\vi\x03i\x03i\x03i\x03j\x03j\x07j\u08E6\nj\fj\x0Ej\u08E9\vj\x03k\x03k" +
        "\x03k\x03k\x03k\x03k\x03k\x03k\x05k\u08F3\nk\x03l\x03l\x07l\u08F7\nl\f" +
        "l\x0El\u08FA\vl\x03l\x03l\x05l\u08FE\nl\x03m\x03m\x03m\x07m\u0903\nm\f" +
        "m\x0Em\u0906\vm\x03m\x03m\x03m\x03n\x03n\x03n\x05n\u090E\nn\x03n\x03n" +
        "\x05n\u0912\nn\x03n\x03n\x05n\u0916\nn\x03n\x05n\u0919\nn\x03o\x03o\x03" +
        "o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x07o\u0926\no\fo\x0Eo\u0929" +
        "\vo\x03o\x05o\u092C\no\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
        "p\x03p\x07p\u0939\np\fp\x0Ep\u093C\vp\x03p\x05p\u093F\np\x03q\x03q\x07" +
        "q\u0943\nq\fq\x0Eq\u0946\vq\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x05" +
        "r\u0950\nr\x03s\x03s\x03s\x05s\u0955\ns\x03s\x03s\x03s\x05s\u095A\ns\x05" +
        "s\u095C\ns\x03t\x03t\x03t\x05t\u0961\nt\x03t\x03t\x03t\x05t\u0966\nt\x05" +
        "t\u0968\nt\x03u\x03u\x03u\x05u\u096D\nu\x03u\x03u\x07u\u0971\nu\fu\x0E" +
        "u\u0974\vu\x03u\x03u\x06u\u0978\nu\ru\x0Eu\u0979\x03u\x03u\x03u\x03u\x03" +
        "u\x03u\x03u\x07u\u0983\nu\fu\x0Eu\u0986\vu\x03u\x05u\u0989\nu\x03v\x03" +
        "v\x03v\x03v\x03w\x03w\x03x\x03x\x03x\x07x\u0994\nx\fx\x0Ex\u0997\vx\x03" +
        "x\x05x\u099A\nx\x03x\x03x\x03x\x03x\x07x\u09A0\nx\fx\x0Ex\u09A3\vx\x03" +
        "x\x03x\x07x\u09A7\nx\fx\x0Ex\u09AA\vx\x03x\x05x\u09AD\nx\x05x\u09AF\n" +
        "x\x03y\x03y\x03y\x03y\x07y\u09B5\ny\fy\x0Ey\u09B8\vy\x03y\x03y\x03z\x03" +
        "z\x05z\u09BE\nz\x03z\x03z\x03z\x05z\u09C3\nz\x03z\x05z\u09C6\nz\x03{\x03" +
        "{\x03{\x03{\x05{\u09CC\n{\x03{\x05{\u09CF\n{\x03|\x03|\x05|\u09D3\n|\x03" +
        "|\x03|\x03|\x07|\u09D8\n|\f|\x0E|\u09DB\v|\x07|\u09DD\n|\f|\x0E|\u09E0" +
        "\v|\x03|\x07|\u09E3\n|\f|\x0E|\u09E6\v|\x07|\u09E8\n|\f|\x0E|\u09EB\v" +
        "|\x03|\x03|\x03|\x03|\x03|\x07|\u09F2\n|\f|\x0E|\u09F5\v|\x03|\x05|\u09F8" +
        "\n|\x03}\x03}\x03}\x03}\x03}\x06}\u09FF\n}\r}\x0E}\u0A00\x03}\x03}\x03" +
        "}\x03}\x03}\x03}\x03}\x07}\u0A0A\n}\f}\x0E}\u0A0D\v}\x03}\x05}\u0A10\n" +
        "}\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x06\x7F\u0A1A\n" +
        "\x7F\r\x7F\x0E\x7F\u0A1B\x03\x7F\x03\x7F\x05\x7F\u0A20\n\x7F\x03\x80\x03" +
        "\x80\x03\x80\x03\x80\x06\x80\u0A26\n\x80\r\x80\x0E\x80\u0A27\x03\x80\x03" +
        "\x80\x03\x81\x03\x81\x05\x81\u0A2E\n\x81\x03\x81\x03\x81\x03\x81\x07\x81" +
        "\u0A33\n\x81\f\x81\x0E\x81\u0A36\v\x81\x07\x81\u0A38\n\x81\f\x81\x0E\x81" +
        "\u0A3B\v\x81\x03\x81\x07\x81\u0A3E\n\x81\f\x81\x0E\x81\u0A41\v\x81\x07" +
        "\x81\u0A43\n\x81\f\x81\x0E\x81\u0A46\v\x81\x03\x81\x03\x81\x03\x81\x05" +
        "\x81\u0A4B\n\x81\x03\x81\x05\x81\u0A4E\n\x81\x03\x82\x03\x82\x06\x82\u0A52" +
        "\n\x82\r\x82\x0E\x82\u0A53\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x06" +
        "\x83\u0A5B\n\x83\r\x83\x0E\x83\u0A5C\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
        "\x83\x05\x83\u0A64\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
        "\x03\x84\x03\x84\x05\x84\u0A6E\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
        "\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u0A79\n\x85\x03\x86\x03\x86" +
        "\x03\x86\x03\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x88\x03\x88\x07\x88" +
        "\u0A85\n\x88\f\x88\x0E\x88\u0A88\v\x88\x03\x88\x07\x88\u0A8B\n\x88\f\x88" +
        "\x0E\x88\u0A8E\v\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
        "\x89\x07\x89\u0A97\n\x89\f\x89\x0E\x89\u0A9A\v\x89\x03\x89\x03\x89\x03" +
        "\x89\x03\x89\x07\x89\u0AA0\n\x89\f\x89\x0E\x89\u0AA3\v\x89\x03\x89\x05" +
        "\x89\u0AA6\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x06\x8A\u0AAC\n\x8A\r" +
        "\x8A\x0E\x8A\u0AAD\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x07\x8A\u0AB5" +
        "\n\x8A\f\x8A\x0E\x8A\u0AB8\v\x8A\x03\x8A\x05\x8A\u0ABB\n\x8A\x03\x8B\x03" +
        "\x8B\x05\x8B\u0ABF\n\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x05\x8C\u0AC5" +
        "\n\x8C\x06\x8C\u0AC7\n\x8C\r\x8C\x0E\x8C\u0AC8\x03\x8D\x03\x8D\x06\x8D" +
        "\u0ACD\n\x8D\r\x8D\x0E\x8D\u0ACE\x03\x8D\x05\x8D\u0AD2\n\x8D\x03\x8D\x03" +
        "\x8D\x06\x8D\u0AD6\n\x8D\r\x8D\x0E\x8D\u0AD7\x03\x8D\x05\x8D\u0ADB\n\x8D" +
        "\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u0AE3\n\x8D\f" +
        "\x8D\x0E\x8D\u0AE6\v\x8D\x03\x8D\x03\x8D\x07\x8D\u0AEA\n\x8D\f\x8D\x0E" +
        "\x8D\u0AED\v\x8D\x03\x8D\x03\x8D\x07\x8D\u0AF1\n\x8D\f\x8D\x0E\x8D\u0AF4" +
        "\v\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u0AF9\n\x8D\x03\x8E\x03\x8E\x03" +
        "\x8F\x03\x8F\x06\x8F\u0AFF\n\x8F\r\x8F\x0E\x8F\u0B00\x03\x8F\x05\x8F\u0B04" +
        "\n\x8F\x03\x90\x03\x90\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x92" +
        "\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92" +
        "\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92" +
        "\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x06\x92\u0B25\n\x92\r\x92\x0E" +
        "\x92\u0B26\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\b\u0426\u042F\u0927" +
        "\u093A\u0984\u0AA1\x02\x02\x95\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
        "\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
        "\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
        "\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
        "\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
        "\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
        "\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
        "\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
        "\u0122\x02\u0124\x02\u0126\x02\x02\x1C\x03\x02\t\n\x03\x02\xB7\xB8\x03" +
        "\x02Z[\x03\x02\x7F\x80\x03\x02JL\x03\x02hi\x03\x02NN\x07\x02\x95\x96\x98" +
        "\x99\xA7\xAE\xB7\xB8\xBA\xBB\x04\x02\x94\x94\xA9\xA9\x04\x02\x95\x95\xAA" +
        "\xAA\x04\x02\x96\x96\xAB\xAB\x04\x02\x97\x97\xAC\xAC\x04\x02\x98\x98\xAD" +
        "\xAD\x04\x02\x99\x99\xAE\xAE\x04\x02\xA0\xA0\xB2\xB2\x04\x02\xA2\xA2\xB3" +
        "\xB3\x04\x02\xA3\xA3\xB4\xB4\x04\x02\xA4\xA4\xB5\xB5\x04\x02\xA5\xA5\xB6" +
        "\xB6\x03\x02wx\x04\x02\x85\x85\x88\x8A\x03\x02]]\x04\x02^^``\x03\x02j" +
        "k\x03\x02cc\x03\x02dd\x02\u0CC8\x02\u0135\x03\x02\x02\x02\x04\u0143\x03" +
        "\x02\x02\x02\x06\u0185\x03\x02\x02\x02\b\u0187\x03\x02\x02\x02\n\u0197" +
        "\x03\x02\x02\x02\f\u01B4\x03\x02\x02\x02\x0E\u01BF\x03\x02\x02\x02\x10" +
        "\u01C9\x03\x02\x02\x02\x12\u01DA\x03\x02\x02\x02\x14\u01EC\x03\x02\x02" +
        "\x02\x16\u01EF\x03\x02\x02\x02\x18\u0205\x03\x02\x02\x02\x1A\u021B\x03" +
        "\x02\x02\x02\x1C\u022F\x03\x02\x02\x02\x1E\u0243\x03\x02\x02\x02 \u0257" +
        "\x03\x02\x02\x02\"\u026B\x03\x02\x02\x02$\u027F\x03\x02\x02\x02&\u0293" +
        "\x03\x02\x02\x02(\u02A7\x03\x02\x02\x02*\u02BB\x03\x02\x02\x02,\u02CF" +
        "\x03\x02\x02\x02.\u02E3\x03\x02\x02\x020\u02F7\x03\x02\x02\x022\u030B" +
        "\x03\x02\x02\x024\u031F\x03\x02\x02\x026\u0333\x03\x02\x02\x028\u0347" +
        "\x03\x02\x02\x02:\u037A\x03\x02\x02\x02<\u037C\x03\x02\x02\x02>\u0387" +
        "\x03\x02\x02\x02@\u0396\x03\x02\x02\x02B\u03A1\x03\x02\x02\x02D\u03AC" +
        "\x03\x02\x02\x02F\u03B6\x03\x02\x02\x02H\u03E7\x03\x02\x02\x02J\u03F3" +
        "\x03\x02\x02\x02L\u03F5\x03\x02\x02\x02N\u03F7\x03\x02\x02\x02P\u0434" +
        "\x03\x02\x02\x02R\u0436\x03\x02\x02\x02T\u045E\x03\x02\x02\x02V\u046C" +
        "\x03\x02\x02\x02X\u047C\x03\x02\x02\x02Z\u04A3\x03\x02\x02\x02\\\u04C8" +
        "\x03\x02\x02\x02^\u04ED\x03\x02\x02\x02`\u051A\x03\x02\x02\x02b\u0546" +
        "\x03\x02\x02\x02d\u055A\x03\x02\x02\x02f\u056E\x03\x02\x02\x02h\u0582" +
        "\x03\x02\x02\x02j\u0596\x03\x02\x02\x02l\u05AA\x03\x02\x02\x02n\u05BE" +
        "\x03\x02\x02\x02p\u05D2\x03\x02\x02\x02r\u05E6\x03\x02\x02\x02t\u05FA" +
        "\x03\x02\x02\x02v\u060E\x03\x02\x02\x02x\u0622\x03\x02\x02\x02z\u0636" +
        "\x03\x02\x02\x02|\u064A\x03\x02\x02\x02~\u065E\x03\x02\x02\x02\x80\u0672" +
        "\x03\x02\x02\x02\x82\u0686\x03\x02\x02\x02\x84\u069A\x03\x02\x02\x02\x86" +
        "\u06AE\x03\x02\x02\x02\x88\u06C2\x03\x02\x02\x02\x8A\u06D6\x03\x02\x02" +
        "\x02\x8C\u06EA\x03\x02\x02\x02\x8E\u06FE\x03\x02\x02\x02\x90\u0712\x03" +
        "\x02\x02\x02\x92\u0740\x03\x02\x02\x02\x94\u0744\x03\x02\x02\x02\x96\u077B" +
        "\x03\x02\x02\x02\x98\u0781\x03\x02\x02\x02\x9A\u07AB\x03\x02\x02\x02\x9C" +
        "\u07CE\x03\x02\x02\x02\x9E\u07F1\x03\x02\x02\x02\xA0\u0814\x03\x02\x02" +
        "\x02\xA2\u0851\x03\x02\x02\x02\xA4\u0855\x03\x02\x02\x02\xA6\u085C\x03" +
        "\x02\x02\x02\xA8\u0866\x03\x02\x02\x02\xAA\u0871\x03\x02\x02\x02\xAC\u0881" +
        "\x03\x02\x02\x02\xAE\u0883\x03\x02\x02\x02\xB0\u0888\x03\x02\x02\x02\xB2" +
        "\u088A\x03\x02\x02\x02\xB4\u088C\x03\x02\x02\x02\xB6\u088E\x03\x02\x02" +
        "\x02\xB8\u0890\x03\x02\x02\x02\xBA\u0892\x03\x02\x02\x02\xBC\u0894\x03" +
        "\x02\x02\x02\xBE\u0896\x03\x02\x02\x02\xC0\u0898\x03\x02\x02\x02\xC2\u08A4" +
        "\x03\x02\x02\x02\xC4\u08A6\x03\x02\x02\x02\xC6\u08AE\x03\x02\x02\x02\xC8" +
        "\u08B0\x03\x02\x02\x02\xCA\u08BA\x03\x02\x02\x02\xCC\u08C4\x03\x02\x02" +
        "\x02\xCE\u08D1\x03\x02\x02\x02\xD0\u08D8\x03\x02\x02\x02\xD2\u08E3\x03" +
        "\x02\x02\x02\xD4\u08EA\x03\x02\x02\x02\xD6\u08F4\x03\x02\x02\x02\xD8\u08FF" +
        "\x03\x02\x02\x02\xDA\u0918\x03\x02\x02\x02\xDC\u092B\x03\x02\x02\x02\xDE" +
        "\u093E\x03\x02\x02\x02\xE0\u0940\x03\x02\x02\x02\xE2\u0947\x03\x02\x02" +
        "\x02\xE4\u095B\x03\x02\x02\x02\xE6\u0967\x03\x02\x02\x02\xE8\u0988\x03" +
        "\x02\x02\x02\xEA\u098A\x03\x02\x02\x02\xEC\u098E\x03\x02\x02\x02\xEE\u09AE" +
        "\x03\x02\x02\x02\xF0\u09B0\x03\x02\x02\x02\xF2\u09C5\x03\x02\x02\x02\xF4" +
        "\u09CE\x03\x02\x02\x02\xF6\u09F7\x03\x02\x02\x02\xF8\u0A0F\x03\x02\x02" +
        "\x02\xFA\u0A11\x03\x02\x02\x02\xFC\u0A15\x03\x02\x02\x02\xFE\u0A21\x03" +
        "\x02\x02\x02\u0100\u0A4D\x03\x02\x02\x02\u0102\u0A4F\x03\x02\x02\x02\u0104" +
        "\u0A63\x03\x02\x02\x02\u0106\u0A6D\x03\x02\x02\x02\u0108\u0A78\x03\x02" +
        "\x02\x02\u010A\u0A7A\x03\x02\x02\x02\u010C\u0A7E\x03\x02\x02\x02\u010E" +
        "\u0A82\x03\x02\x02\x02\u0110\u0AA5\x03\x02\x02\x02\u0112\u0ABA\x03\x02" +
        "\x02\x02\u0114\u0ABC\x03\x02\x02\x02\u0116\u0AC6\x03\x02\x02\x02\u0118" +
        "\u0AF8\x03\x02\x02\x02\u011A\u0AFA\x03\x02\x02\x02\u011C\u0AFC\x03\x02" +
        "\x02\x02\u011E\u0B05\x03\x02\x02\x02\u0120\u0B07\x03\x02\x02\x02\u0122" +
        "\u0B24\x03\x02\x02\x02\u0124\u0B28\x03\x02\x02\x02\u0126\u0B2A\x03\x02" +
        "\x02\x02\u0128\u0132\x05\x04\x03\x02\u0129\u012B\x07\x04\x02\x02\u012A" +
        "\u0129\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02" +
        "\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E" +
        "\u012C\x03\x02\x02\x02\u012F\u0131\x07r\x02\x02\u0130\u012C\x03\x02\x02" +
        "\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133" +
        "\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02" +
        "\u0135\u0128\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0135\x03" +
        "\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013C\x03\x02\x02\x02\u0139" +
        "\u013B\x07r\x02\x02\u013A\u0139\x03\x02\x02\x02\u013B\u013E\x03\x02\x02" +
        "\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F" +
        "\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0140\x07\x02\x02\x03" +
        "\u0140\x03\x03\x02\x02\x02\u0141\u0144\x05\x06\x04\x02\u0142\u0144\x05" +
        "\u0116\x8C\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02" +
        "\u0144\x05\x03\x02\x02\x02\u0145\u0186\x05\b\x05\x02\u0146\u0186\x05\n" +
        "\x06\x02\u0147\u0186\x05\x0E\b\x02\u0148\u0186\x05\f\x07\x02\u0149\u0186" +
        "\x05\x12\n\x02\u014A\u0186\x05\x10\t\x02\u014B\u0186\x05\u0114\x8B\x02" +
        "\u014C\u0186\x05\x16\f\x02\u014D\u0186\x05\x18\r\x02\u014E\u0186\x05F" +
        "$\x02\u014F\u0186\x05N(\x02\u0150\u0186\x05R*\x02\u0151\u0186\x05X-\x02" +
        "\u0152\u0186\x05Z.\x02\u0153\u0186\x05\\/\x02\u0154\u0186\x05^0\x02\u0155" +
        "\u0186\x05`1\x02\u0156\u0186\x05b2\x02\u0157\u0186\x05d3\x02\u0158\u0186" +
        "\x05f4\x02\u0159\u0186\x05h5\x02\u015A\u0186\x05j6\x02\u015B\u0186\x05" +
        "l7\x02\u015C\u0186\x05p9\x02\u015D\u0186\x05r:\x02\u015E\u0186\x05t;\x02" +
        "\u015F\u0186\x05v<\x02\u0160\u0186\x05\x86D\x02\u0161\u0186\x05x=\x02" +
        "\u0162\u0186\x05z>\x02\u0163\u0186\x05|?\x02\u0164\u0186\x05~@\x02\u0165" +
        "\u0186\x05\x80A\x02\u0166\u0186\x05\x82B\x02\u0167\u0186\x05\x84C\x02" +
        "\u0168\u0186\x05\x88E\x02\u0169\u0186\x05n8\x02\u016A\u0186\x05\x8EH\x02" +
        "\u016B\u0186\x05\x90I\x02\u016C\u0186\x05\xA0Q\x02\u016D\u0186\x05\x94" +
        "K\x02\u016E\u0186\x05\x98M\x02\u016F\u0186\x05\x9AN\x02\u0170\u0186\x05" +
        "\x9CO\x02\u0171\u0186\x05\x9EP\x02\u0172\u0186\x05\u0102\x82\x02\u0173" +
        "\u0186\x05\x8AF\x02\u0174\u0186\x05\x8CG\x02\u0175\u0186\x05\x1A\x0E\x02" +
        "\u0176\u0186\x05\x1C\x0F\x02\u0177\u0186\x05\x1E\x10\x02\u0178\u0186\x05" +
        " \x11\x02\u0179\u0186\x05\"\x12\x02\u017A\u0186\x05$\x13\x02\u017B\u0186" +
        "\x05&\x14\x02\u017C\u0186\x05(\x15\x02\u017D\u0186\x05*\x16\x02\u017E" +
        "\u0186\x05,\x17\x02\u017F\u0186\x05.\x18\x02\u0180\u0186\x050\x19\x02" +
        "\u0181\u0186\x052\x1A\x02\u0182\u0186\x054\x1B\x02\u0183\u0186\x056\x1C" +
        "\x02\u0184\u0186\x058\x1D\x02\u0185\u0145\x03\x02\x02\x02\u0185\u0146" +
        "\x03\x02\x02\x02\u0185\u0147\x03\x02\x02\x02\u0185\u0148\x03\x02\x02\x02" +
        "\u0185\u0149\x03\x02\x02\x02\u0185\u014A\x03\x02\x02\x02\u0185\u014B\x03" +
        "\x02\x02\x02\u0185\u014C\x03\x02\x02\x02\u0185\u014D\x03\x02\x02\x02\u0185" +
        "\u014E\x03\x02\x02\x02\u0185\u014F\x03\x02\x02\x02\u0185\u0150\x03\x02" +
        "\x02\x02\u0185\u0151\x03\x02\x02\x02\u0185\u0152\x03\x02\x02\x02\u0185" +
        "\u0153\x03\x02\x02\x02\u0185\u0154\x03\x02\x02\x02\u0185\u0155\x03\x02" +
        "\x02\x02\u0185\u0156\x03\x02\x02\x02\u0185\u0157\x03\x02\x02\x02\u0185" +
        "\u0158\x03\x02\x02\x02\u0185\u0159\x03\x02\x02\x02\u0185\u015A\x03\x02" +
        "\x02\x02\u0185\u015B\x03\x02\x02\x02\u0185\u015C\x03\x02\x02\x02\u0185" +
        "\u015D\x03\x02\x02\x02\u0185\u015E\x03\x02\x02\x02\u0185\u015F\x03\x02" +
        "\x02\x02\u0185\u0160\x03\x02\x02\x02\u0185\u0161\x03\x02\x02\x02\u0185" +
        "\u0162\x03\x02\x02\x02\u0185\u0163\x03\x02\x02\x02\u0185\u0164\x03\x02" +
        "\x02\x02\u0185\u0165\x03\x02\x02\x02\u0185\u0166\x03\x02\x02\x02\u0185" +
        "\u0167\x03\x02\x02\x02\u0185\u0168\x03\x02\x02\x02\u0185\u0169\x03\x02" +
        "\x02\x02\u0185\u016A\x03\x02\x02\x02\u0185\u016B\x03\x02\x02\x02\u0185" +
        "\u016C\x03\x02\x02\x02\u0185\u016D\x03\x02\x02\x02\u0185\u016E\x03\x02" +
        "\x02\x02\u0185\u016F\x03\x02\x02\x02\u0185\u0170\x03\x02\x02\x02\u0185" +
        "\u0171\x03\x02\x02\x02\u0185\u0172\x03\x02\x02\x02\u0185\u0173\x03\x02" +
        "\x02\x02\u0185\u0174\x03\x02\x02\x02\u0185\u0175\x03\x02\x02\x02\u0185" +
        "\u0176\x03\x02\x02\x02\u0185\u0177\x03\x02\x02\x02\u0185\u0178\x03\x02" +
        "\x02\x02\u0185\u0179\x03\x02\x02\x02\u0185\u017A\x03\x02\x02\x02\u0185" +
        "\u017B\x03\x02\x02\x02\u0185\u017C\x03\x02\x02\x02\u0185\u017D\x03\x02" +
        "\x02\x02\u0185\u017E\x03\x02\x02\x02\u0185\u017F\x03\x02\x02\x02\u0185" +
        "\u0180\x03\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0185\u0182\x03\x02" +
        "\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0184\x03\x02\x02\x02\u0186" +
        "\x07\x03\x02\x02\x02\u0187\u0189\x07\x05\x02\x02\u0188\u018A\x05\xA6T" +
        "\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B" +
        "\x03\x02\x02\x02\u018B\u0193\x07]\x02\x02\u018C\u018E\x07r\x02\x02\u018D" +
        "\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02" +
        "\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191" +
        "\u018F\x03\x02\x02\x02\u0192\u0194\x05:\x1E\x02\u0193\u018F\x03\x02\x02" +
        "\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196" +
        "\x03\x02\x02\x02\u0196\t\x03\x02\x02\x02\u0197\u0199\x07\x06\x02\x02\u0198" +
        "\u019A\x05\xA6T\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02" +
        "\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019F\x07]\x02\x02\u019C\u019E" +
        "\x07r\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02" +
        "\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A5\x03" +
        "\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x05\u0114\x8B\x02" +
        "\u01A3\u01A4\x07r\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A2\x03" +
        "\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
        "\u01B1\x05L\'\x02\u01A8\u01AA\x07r\x02\x02\u01A9\u01A8\x03\x02\x02\x02" +
        "\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03" +
        "\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE" +
        "\u01B0\x05L\'\x02\u01AF\u01AB\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02" +
        "\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\v\x03" +
        "\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B6\x07\x07\x02\x02\u01B5" +
        "\u01B7\x05\u0118\x8D\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02" +
        "\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x07]\x02\x02\u01B9\u01BD" +
        "\x07r\x02\x02\u01BA\u01BB\x05\u010E\x88\x02\u01BB\u01BC\x07r\x02\x02\u01BC" +
        "\u01BE\x03\x02\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
        "\x02\x02\u01BE\r\x03\x02\x02\x02\u01BF\u01C0\x07\b\x02\x02\u01C0\u01C4" +
        "\x07]\x02\x02\u01C1\u01C3\x07r\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3" +
        "\u01C6\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02" +
        "\x02\x02\u01C5\u01C7\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7" +
        "\u01C8\x05\x14\v\x02\u01C8\x0F\x03\x02\x02\x02\u01C9\u01CB\t\x02\x02\x02" +
        "\u01CA\u01CC\t\x03\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03" +
        "\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01D7\x07]\x02\x02\u01CE" +
        "\u01D0\x07r\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02" +
        "\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D4" +
        "\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D6\x05:\x1E\x02" +
        "\u01D5\u01D1\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03" +
        "\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\x11\x03\x02\x02\x02\u01D9" +
        "\u01D7\x03\x02\x02\x02\u01DA\u01DB\x07\v\x02\x02\u01DB\u01DC\x07]\x02" +
        "\x02\u01DC\u01DD\x05\xF2z\x02\u01DD\x13\x03\x02\x02\x02\u01DE\u01E0\x07" +
        "r\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0" +
        "\u01E8\x03\x02\x02\x02\u01E1\u01E9\x05\u0104\x83\x02\u01E2\u01E9\x05\u010E" +
        "\x88\x02\u01E3\u01E9\x05\xEEx\x02\u01E4\u01E9\x05\u0100\x81\x02\u01E5" +
        "\u01E9\x05\xF2z\x02\u01E6\u01E9\x05\u0114\x8B\x02\u01E7\u01E9\x05\xFA" +
        "~\x02\u01E8\u01E1\x03\x02\x02\x02\u01E8\u01E2\x03\x02\x02\x02\u01E8\u01E3" +
        "\x03\x02\x02\x02\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02" +
        "\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EB\x03" +
        "\x02\x02\x02\u01EA\u01DF\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC" +
        "\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\x15\x03\x02\x02" +
        "\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F0\x07\f\x02\x02\u01F0\u01FA" +
        "\x07]\x02\x02\u01F1\u01F2\x07r\x02\x02\u01F2\u01F5\t\x04\x02\x02\u01F3" +
        "\u01F6\x05\u0118\x8D\x02\u01F4\u01F6\x07^\x02\x02\u01F5\u01F3\x03\x02" +
        "\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
        "\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\x03\x02" +
        "\x02\x02\u01F9\u01FB\x07]\x02\x02\u01FA\u01F1\x03\x02\x02\x02\u01FB\u01FC" +
        "\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
        "\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0202\x07r\x02\x02\u01FF\u0201\x05" +
        "\u0116\x8C\x02\u0200\u01FF\x03\x02\x02\x02\u0201\u0204\x03\x02\x02\x02" +
        "\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\x17\x03" +
        "\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u0206\x07\r\x02\x02\u0206" +
        "\u0210\x07]\x02\x02\u0207\u0208\x07r\x02\x02\u0208\u020B\t\x04\x02\x02" +
        "\u0209\u020C\x05\u0118\x8D\x02\u020A\u020C\x07^\x02\x02\u020B\u0209\x03" +
        "\x02\x02\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
        "\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02" +
        "\x02\x02\u020F\u0211\x07]\x02\x02\u0210\u0207\x03\x02\x02\x02\u0211\u0212" +
        "\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
        "\u0213\u0214\x03\x02\x02\x02\u0214\u0218\x07r\x02\x02\u0215\u0217\x05" +
        "\u0116\x8C\x02\u0216\u0215\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02" +
        "\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\x19\x03" +
        "\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021C\x077\x02\x02\u021C" +
        "\u021D\x05\xA6T\x02\u021D\u0221\x07]\x02\x02\u021E\u0220\x07r\x02\x02" +
        "\u021F\u021E\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03" +
        "\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u022B\x03\x02\x02\x02\u0223" +
        "\u0221\x03\x02\x02\x02\u0224\u0228\x05:\x1E\x02\u0225\u0227\x07r\x02\x02" +
        "\u0226\u0225\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03" +
        "\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A" +
        "\u0228\x03\x02\x02\x02\u022B\u0224\x03\x02\x02\x02\u022C\u022D\x03\x02" +
        "\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
        "\x1B\x03\x02\x02\x02\u022F\u0230\x078\x02\x02\u0230\u0231\x05\xA6T\x02" +
        "\u0231\u0235\x07]\x02\x02\u0232\u0234\x07r\x02\x02\u0233\u0232\x03\x02" +
        "\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235" +
        "\u0236\x03\x02\x02\x02\u0236\u023F\x03\x02\x02\x02\u0237\u0235\x03\x02" +
        "\x02\x02\u0238\u023C\x05:\x1E\x02\u0239\u023B\x07r\x02\x02\u023A\u0239" +
        "\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02" +
        "\u023C\u023D\x03\x02\x02\x02\u023D\u0240\x03\x02";
    bitmarkParser._serializedATNSegment2 = "\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0238\x03\x02\x02\x02\u0240" +
        "\u0241\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02" +
        "\x02\x02\u0242\x1D\x03\x02\x02\x02\u0243\u0244\x079\x02\x02\u0244\u0245" +
        "\x05\xA6T\x02\u0245\u0249\x07]\x02\x02\u0246\u0248\x07r\x02\x02\u0247" +
        "\u0246\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02" +
        "\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u0253\x03\x02\x02\x02\u024B" +
        "\u0249\x03\x02\x02\x02\u024C\u0250\x05:\x1E\x02\u024D\u024F\x07r\x02\x02" +
        "\u024E\u024D\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03" +
        "\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0254\x03\x02\x02\x02\u0252" +
        "\u0250\x03\x02\x02\x02\u0253\u024C\x03\x02\x02\x02\u0254\u0255\x03\x02" +
        "\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256" +
        "\x1F\x03\x02\x02\x02\u0257\u0258\x07:\x02\x02\u0258\u0259\x05\xA6T\x02" +
        "\u0259\u025D\x07]\x02\x02\u025A\u025C\x07r\x02\x02\u025B\u025A\x03\x02" +
        "\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D" +
        "\u025E\x03\x02\x02\x02\u025E\u0267\x03\x02\x02\x02\u025F\u025D\x03\x02" +
        "\x02\x02\u0260\u0264\x05:\x1E\x02\u0261\u0263\x07r\x02\x02\u0262\u0261" +
        "\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02" +
        "\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03" +
        "\x02\x02\x02\u0267\u0260\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269" +
        "\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A!\x03\x02\x02" +
        "\x02\u026B\u026C\x07;\x02\x02\u026C\u026D\x05\xA6T\x02\u026D\u0271\x07" +
        "]\x02\x02\u026E\u0270\x07r\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273" +
        "\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02" +
        "\u0272\u027B\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0278\x05" +
        ":\x1E\x02\u0275\u0277\x07r\x02\x02\u0276\u0275\x03\x02\x02\x02\u0277\u027A" +
        "\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02" +
        "\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027B\u0274\x03" +
        "\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027D" +
        "\u027E\x03\x02\x02\x02\u027E#\x03\x02\x02\x02\u027F\u0280\x07<\x02\x02" +
        "\u0280\u0281\x05\xA6T\x02\u0281\u0285\x07]\x02\x02\u0282\u0284\x07r\x02" +
        "\x02\u0283\u0282\x03\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0283" +
        "\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u028F\x03\x02\x02\x02" +
        "\u0287\u0285\x03\x02\x02\x02\u0288\u028C\x05:\x1E\x02\u0289\u028B\x07" +
        "r\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C" +
        "\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u0290\x03\x02" +
        "\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0288\x03\x02\x02\x02\u0290" +
        "\u0291\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02" +
        "\x02\x02\u0292%\x03\x02\x02\x02\u0293\u0294\x07=\x02\x02\u0294\u0295\x05" +
        "\xA6T\x02\u0295\u0299\x07]\x02\x02\u0296\u0298\x07r\x02\x02\u0297\u0296" +
        "\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02" +
        "\u0299\u029A\x03\x02\x02\x02\u029A\u02A3\x03\x02\x02\x02\u029B\u0299\x03" +
        "\x02\x02\x02\u029C\u02A0\x05:\x1E\x02\u029D\u029F\x07r\x02\x02\u029E\u029D" +
        "\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
        "\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03" +
        "\x02\x02\x02\u02A3\u029C\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
        "\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\'\x03\x02\x02" +
        "\x02\u02A7\u02A8\x07>\x02\x02\u02A8\u02A9\x05\xA6T\x02\u02A9\u02AD\x07" +
        "]\x02\x02\u02AA\u02AC\x07r\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AC\u02AF" +
        "\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
        "\u02AE\u02B7\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0\u02B4\x05" +
        ":\x1E\x02\u02B1\u02B3\x07r\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B6" +
        "\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02" +
        "\u02B5\u02B8\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B0\x03" +
        "\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9" +
        "\u02BA\x03\x02\x02\x02\u02BA)\x03\x02\x02\x02\u02BB\u02BC\x07?\x02\x02" +
        "\u02BC\u02BD\x05\xA6T\x02\u02BD\u02C1\x07]\x02\x02\u02BE\u02C0\x07r\x02" +
        "\x02\u02BF\u02BE\x03\x02\x02\x02\u02C0\u02C3\x03\x02\x02\x02\u02C1\u02BF" +
        "\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02CB\x03\x02\x02\x02" +
        "\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C8\x05:\x1E\x02\u02C5\u02C7\x07" +
        "r\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02\u02C8" +
        "\u02C6\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CC\x03\x02" +
        "\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB\u02C4\x03\x02\x02\x02\u02CC" +
        "\u02CD\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02" +
        "\x02\x02\u02CE+\x03\x02\x02\x02\u02CF\u02D0\x07@\x02\x02\u02D0\u02D1\x05" +
        "\xA6T\x02\u02D1\u02D5\x07]\x02\x02\u02D2\u02D4\x07r\x02\x02\u02D3\u02D2" +
        "\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02" +
        "\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02DF\x03\x02\x02\x02\u02D7\u02D5\x03" +
        "\x02\x02\x02\u02D8\u02DC\x05:\x1E\x02\u02D9\u02DB\x07r\x02\x02\u02DA\u02D9" +
        "\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02" +
        "\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC\x03" +
        "\x02\x02\x02\u02DF\u02D8\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1" +
        "\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2-\x03\x02\x02" +
        "\x02\u02E3\u02E4\x07A\x02\x02\u02E4\u02E5\x05\xA6T\x02\u02E5\u02E9\x07" +
        "]\x02\x02\u02E6\u02E8\x07r\x02\x02\u02E7\u02E6\x03\x02\x02\x02\u02E8\u02EB" +
        "\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02" +
        "\u02EA\u02F3\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02F0\x05" +
        ":\x1E\x02\u02ED\u02EF\x07r\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EF\u02F2" +
        "\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02" +
        "\u02F1\u02F4\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3\u02EC\x03" +
        "\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5" +
        "\u02F6\x03\x02\x02\x02\u02F6/\x03\x02\x02\x02\u02F7\u02F8\x07B\x02\x02" +
        "\u02F8\u02F9\x05\xA6T\x02\u02F9\u02FD\x07]\x02\x02\u02FA\u02FC\x07r\x02" +
        "\x02\u02FB\u02FA\x03\x02\x02\x02\u02FC\u02FF\x03\x02\x02\x02\u02FD\u02FB" +
        "\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u0307\x03\x02\x02\x02" +
        "\u02FF\u02FD\x03\x02\x02\x02\u0300\u0304\x05:\x1E\x02\u0301\u0303\x07" +
        "r\x02\x02\u0302\u0301\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02\u0304" +
        "\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0308\x03\x02" +
        "\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0300\x03\x02\x02\x02\u0308" +
        "\u0309\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02" +
        "\x02\x02\u030A1\x03\x02\x02\x02\u030B\u030C\x07C\x02\x02\u030C\u030D\x05" +
        "\xA6T\x02\u030D\u0311\x07]\x02\x02\u030E\u0310\x07r\x02\x02\u030F\u030E" +
        "\x03\x02\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02" +
        "\u0311\u0312\x03\x02\x02\x02\u0312\u031B\x03\x02\x02\x02\u0313\u0311\x03" +
        "\x02\x02\x02\u0314\u0318\x05:\x1E\x02\u0315\u0317\x07r\x02\x02\u0316\u0315" +
        "\x03\x02\x02\x02\u0317\u031A\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02" +
        "\u0318\u0319\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03" +
        "\x02\x02\x02\u031B\u0314\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D" +
        "\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E3\x03\x02\x02" +
        "\x02\u031F\u0320\x07D\x02\x02\u0320\u0321\x05\xA6T\x02\u0321\u0325\x07" +
        "]\x02\x02\u0322\u0324\x07r\x02\x02\u0323\u0322\x03\x02\x02\x02\u0324\u0327" +
        "\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02" +
        "\u0326\u032F\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0328\u032C\x05" +
        ":\x1E\x02\u0329\u032B\x07r\x02\x02\u032A\u0329\x03\x02\x02\x02\u032B\u032E" +
        "\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02" +
        "\u032D\u0330\x03\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032F\u0328\x03" +
        "\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331" +
        "\u0332\x03\x02\x02\x02\u03325\x03\x02\x02\x02\u0333\u0334\x07E\x02\x02" +
        "\u0334\u0335\x05\xA6T\x02\u0335\u0339\x07]\x02\x02\u0336\u0338\x07r\x02" +
        "\x02\u0337\u0336\x03\x02\x02\x02\u0338\u033B\x03\x02\x02\x02\u0339\u0337" +
        "\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u0343\x03\x02\x02\x02" +
        "\u033B\u0339\x03\x02\x02\x02\u033C\u0340\x05:\x1E\x02\u033D\u033F\x07" +
        "r\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340" +
        "\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0344\x03\x02" +
        "\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343\u033C\x03\x02\x02\x02\u0344" +
        "\u0345\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02" +
        "\x02\x02\u03467\x03\x02\x02\x02\u0347\u0348\x07F\x02\x02\u0348\u0349\x05" +
        "\xA6T\x02\u0349\u034D\x07]\x02\x02\u034A\u034C\x07r\x02\x02\u034B\u034A" +
        "\x03\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02" +
        "\u034D\u034E\x03\x02\x02\x02\u034E\u0357\x03\x02\x02\x02\u034F\u034D\x03" +
        "\x02\x02\x02\u0350\u0354\x05:\x1E\x02\u0351\u0353\x07r\x02\x02\u0352\u0351" +
        "\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02" +
        "\u0354\u0355\x03\x02\x02\x02\u0355\u0358\x03\x02\x02\x02\u0356\u0354\x03" +
        "\x02\x02\x02\u0357\u0350\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359" +
        "\u0357\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A9\x03\x02\x02" +
        "\x02\u035B\u037B\x07\xCC\x02\x02\u035C\u037B\x05\u011A\x8E\x02\u035D\u037B" +
        "\x05<\x1F\x02\u035E\u037B\x05\xF8}\x02\u035F\u037B\x05\xFC\x7F\x02\u0360" +
        "\u037B\x05\xFA~\x02\u0361\u037B\x05\u010E\x88\x02\u0362\u037B\x05\u0112" +
        "\x8A\x02\u0363\u037B\x05J&\x02\u0364\u037B\x05\xEEx\x02\u0365\u037B\x05" +
        "\u0104\x83\x02\u0366\u037B\x05\u0100\x81\x02\u0367\u037B\x05\u0102\x82" +
        "\x02\u0368\u037B\x05\u0118\x8D\x02\u0369\u037B\x05\xF4{\x02\u036A\u037B" +
        "\x05\u0106\x84\x02\u036B\u037B\x05\u0108\x85\x02\u036C\u037B\x05\u010A" +
        "\x86\x02\u036D\u037B\x05\u010C\x87\x02\u036E\u037B\x05\xD6l\x02\u036F" +
        "\u037B\x05\xE0q\x02\u0370\u037B\x05\xD2j\x02\u0371\u037B\x05\xC6d\x02" +
        "\u0372\u037B\x05\xC8e\x02\u0373\u037B\x05\xCCg\x02\u0374\u037B\x05\xCA" +
        "f\x02\u0375\u037B\x05\xCEh\x02\u0376\u037B\x05\xF2z\x02\u0377\u037B\x05" +
        "\u0114\x8B\x02\u0378\u037B\x05\xF6|\x02\u0379\u037B\x05\u0124\x93\x02" +
        "\u037A\u035B\x03\x02\x02\x02\u037A\u035C\x03\x02\x02\x02\u037A\u035D\x03" +
        "\x02\x02\x02\u037A\u035E\x03\x02\x02\x02\u037A\u035F\x03\x02\x02\x02\u037A" +
        "\u0360\x03\x02\x02\x02\u037A\u0361\x03\x02\x02\x02\u037A\u0362\x03\x02" +
        "\x02\x02\u037A\u0363\x03\x02\x02\x02\u037A\u0364\x03\x02\x02\x02\u037A" +
        "\u0365\x03\x02\x02\x02\u037A\u0366\x03\x02\x02\x02\u037A\u0367\x03\x02" +
        "\x02\x02\u037A\u0368\x03\x02\x02\x02\u037A\u0369\x03\x02\x02\x02\u037A" +
        "\u036A\x03\x02\x02\x02\u037A\u036B\x03\x02\x02\x02\u037A\u036C\x03\x02" +
        "\x02\x02\u037A\u036D\x03\x02\x02\x02\u037A\u036E\x03\x02\x02\x02\u037A" +
        "\u036F\x03\x02\x02\x02\u037A\u0370\x03\x02\x02\x02\u037A\u0371\x03\x02" +
        "\x02\x02\u037A\u0372\x03\x02\x02\x02\u037A\u0373\x03\x02\x02\x02\u037A" +
        "\u0374\x03\x02\x02\x02\u037A\u0375\x03\x02\x02\x02\u037A\u0376\x03\x02" +
        "\x02\x02\u037A\u0377\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A" +
        "\u0379\x03\x02\x02\x02\u037B;\x03\x02\x02\x02\u037C\u0384\x05> \x02\u037D" +
        "\u0383\x05> \x02\u037E\u0383\x05\u0100\x81\x02\u037F\u0383\x05\u0102\x82" +
        "\x02\u0380\u0383\x05\xEEx\x02\u0381\u0383\x05\xF4{\x02\u0382\u037D\x03" +
        "\x02\x02\x02\u0382\u037E\x03\x02\x02\x02\u0382\u037F\x03\x02\x02\x02\u0382" +
        "\u0380\x03\x02\x02\x02\u0382\u0381\x03\x02\x02\x02\u0383\u0386\x03\x02" +
        "\x02\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385" +
        "=\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0387\u038B\x07S\x02\x02" +
        "\u0388\u038C\x07p\x02\x02\u0389\u038C\x07q\x02\x02\u038A\u038C\x03\x02" +
        "\x02\x02\u038B\u0388\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038B" +
        "\u038A\x03\x02\x02\x02\u038C\u0390\x03\x02\x02\x02\u038D\u038F\x05\u0118" +
        "\x8D\x02\u038E\u038D\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390" +
        "\u038E\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0393\x03\x02" +
        "\x02\x02\u0392\u0390\x03\x02\x02\x02\u0393\u0394\x05\u011E\x90\x02\u0394" +
        "?\x03\x02\x02\x02\u0395\u0397\x05\xEEx\x02\u0396\u0395\x03\x02\x02\x02" +
        "\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039A\x07" +
        "W\x02\x02\u0399\u039B\x05\u0118\x8D\x02\u039A\u0399\x03\x02\x02\x02\u039B" +
        "\u039C\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039D\x03\x02" +
        "\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039F\x07]\x02\x02\u039FA\x03" +
        "\x02\x02\x02\u03A0\u03A2\x05\xEEx\x02\u03A1\u03A0\x03\x02\x02\x02\u03A1" +
        "\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A5\x07X\x02" +
        "\x02\u03A4\u03A6\x05\u0118\x8D\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A7" +
        "\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02" +
        "\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x07]\x02\x02\u03AAC\x03\x02\x02" +
        "\x02\u03AB\u03AD\x05\xEEx\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD" +
        "\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x07Z\x02\x02" +
        "\u03AF\u03B1\x05\u0118\x8D\x02\u03B0\u03AF\x03\x02\x02\x02\u03B1\u03B2" +
        "\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02" +
        "\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B5\x07]\x02\x02\u03B5E\x03\x02\x02" +
        "\x02\u03B6\u03B7\x07\x15\x02\x02\u03B7\u03B8\x05\xA6T\x02\u03B8\u03B9" +
        "\x07]\x02\x02\u03B9\u03C3\x07r\x02\x02\u03BA\u03BE\x05:\x1E\x02\u03BB" +
        "\u03BD\x07r\x02\x02\u03BC\u03BB\x03\x02\x02\x02\u03BD\u03C0\x03\x02\x02" +
        "\x02\u03BE\u03BC\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C2" +
        "\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1\u03BA\x03\x02\x02\x02" +
        "\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03" +
        "\x02\x02\x02\u03C4\u03CF\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C6" +
        "\u03C8\x07r\x02\x02\u03C7\u03C6\x03\x02\x02\x02\u03C8\u03CB\x03\x02\x02" +
        "\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CC" +
        "\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CC\u03CE\x05H%\x02\u03CD" +
        "\u03C9\x03\x02\x02\x02\u03CE\u03D1\x03\x02\x02\x02\u03CF\u03CD\x03\x02" +
        "\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D5\x03\x02\x02\x02\u03D1" +
        "\u03CF\x03\x02\x02\x02\u03D2\u03D4\x07r\x02\x02\u03D3\u03D2\x03\x02\x02" +
        "\x02\u03D4\u03D7\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D5\u03D6" +
        "\x03\x02\x02\x02\u03D6\u03E5\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02" +
        "\u03D8\u03E2\x05L\'\x02\u03D9\u03DB\x07r\x02\x02\u03DA\u03D9\x03\x02\x02" +
        "\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD" +
        "\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02" +
        "\u03DF\u03E1\x05L\'\x02\u03E0\u03DC\x03\x02\x02\x02\u03E1\u03E4\x03\x02" +
        "\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3" +
        "\u03E6\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E5\u03D8\x03\x02" +
        "\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6G\x03\x02\x02\x02\u03E7\u03EF" +
        "\x07}\x02\x02\u03E8\u03EA\x07r\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9" +
        "\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x05\u0116" +
        "\x8C\x02\u03EC\u03EE\x07r\x02\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE" +
        "\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03E9\x03\x02\x02\x02" +
        "\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2\x07" +
        "]\x02\x02\u03F2I\x03\x02\x02\x02\u03F3\u03F4\t\x05\x02\x02\u03F4K\x03" +
        "\x02\x02\x02\u03F5\u03F6\x05:\x1E\x02\u03F6M\x03\x02\x02\x02\u03F7\u03F8" +
        "\x07\x17\x02\x02\u03F8\u03F9\x05\xA6T\x02\u03F9\u03FA\x07]\x02\x02\u03FA" +
        "\u0404\x07r\x02\x02\u03FB\u03FF\x05:\x1E\x02\u03FC\u03FE\x07r\x02\x02" +
        "\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02\x02\u03FF\u03FD\x03" +
        "\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0403\x03\x02\x02\x02\u0401" +
        "\u03FF\x03\x02\x02\x02\u0402\u03FB\x03\x02\x02\x02\u0403\u0406\x03\x02" +
        "\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405" +
        "\u040A\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0407\u0409\x05P)\x02" +
        "\u0408\u0407\x03\x02\x02\x02\u0409\u040C\x03\x02\x02\x02\u040A\u0408\x03" +
        "\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u0410\x03\x02\x02\x02\u040C" +
        "\u040A\x03\x02\x02\x02\u040D\u040F\x07r\x02\x02\u040E\u040D\x03\x02\x02" +
        "\x02\u040F\u0412\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411" +
        "\x03\x02\x02\x02\u0411\u0420\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02" +
        "\u0413\u041D\x05L\'\x02\u0414\u0416\x07r\x02\x02\u0415\u0414\x03\x02\x02" +
        "\x02\u0416\u0419\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02\u0417\u0418" +
        "\x03\x02\x02\x02\u0418\u041A\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02" +
        "\u041A\u041C\x05L\'\x02\u041B\u0417\x03\x02\x02\x02\u041C\u041F\x03\x02" +
        "\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E" +
        "\u0421\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u0420\u0413\x03\x02" +
        "\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421O\x03\x02\x02\x02\u0422\u0426" +
        "\x07X\x02\x02\u0423\u0425\v\x02\x02\x02\u0424\u0423\x03\x02\x02\x02\u0425" +
        "\u0428\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0426\u0424\x03\x02" +
        "\x02\x02\u0427\u0429\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0429" +
        "\u042A\x07]\x02\x02\u042A\u0435\x07r\x02\x02\u042B\u042F\x07W\x02\x02" +
        "\u042C\u042E\v\x02\x02\x02\u042D\u042C\x03\x02\x02\x02\u042E\u0431\x03" +
        "\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u0430" +
        "\u0432\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0433\x07]\x02" +
        "\x02\u0433\u0435\x07r\x02\x02\u0434\u0422\x03\x02\x02\x02\u0434\u042B" +
        "\x03\x02\x02\x02\u0435Q\x03\x02\x02\x02\u0436\u0437\x07\x18\x02\x02\u0437" +
        "\u0438\x05\xA6T\x02\u0438\u0439\x07]\x02\x02\u0439\u0446\x07r\x02\x02" +
        "\u043A\u043D\x05:\x1E\x02\u043B\u043D\x05T+\x02\u043C\u043A\x03\x02\x02" +
        "\x02\u043C\u043B\x03\x02\x02\x02\u043D\u0441\x03\x02\x02\x02\u043E\u0440" +
        "\x07r\x02\x02\u043F\u043E\x03\x02\x02\x02\u0440\u0443\x03\x02\x02\x02" +
        "\u0441\u043F\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0445\x03" +
        "\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0444\u043C\x03\x02\x02\x02\u0445" +
        "\u0448\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02" +
        "\x02\x02\u0447\u044C\x03\x02\x02\x02\u0448\u0446\x03\x02\x02\x02\u0449" +
        "\u044B\x07r\x02\x02\u044A\u0449\x03\x02\x02\x02\u044B\u044E\x03\x02\x02" +
        "\x02\u044C\u044A\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u045C" +
        "\x03\x02\x02\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0459\x05L\'\x02\u0450" +
        "\u0452\x07r\x02\x02\u0451\u0450\x03\x02\x02\x02\u0452\u0455\x03\x02\x02" +
        "\x02\u0453\u0451\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0456" +
        "\x03\x02\x02\x02\u0455\u0453\x03\x02\x02\x02\u0456\u0458\x05L\'\x02\u0457" +
        "\u0453\x03\x02\x02\x02\u0458\u045B\x03\x02\x02\x02\u0459\u0457\x03\x02" +
        "\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045D\x03\x02\x02\x02\u045B" +
        "\u0459\x03\x02\x02\x02\u045C\u044F\x03\x02\x02\x02\u045C\u045D\x03\x02" +
        "\x02\x02\u045DS\x03\x02\x02\x02\u045E\u045F\x07Y\x02\x02\u045F\u0460\x05" +
        "\u0118\x8D\x02\u0460\u0462\x07]\x02\x02\u0461\u0463\x05V,\x02\u0462\u0461" +
        "\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0469\x03\x02\x02\x02" +
        "\u0464\u0468\x05\u0102\x82\x02\u0465\u0468\x05\xEEx\x02\u0466\u0468\x05" +
        "\u0100\x81\x02\u0467\u0464\x03\x02\x02\x02\u0467\u0465\x03\x02\x02\x02" +
        "\u0467\u0466\x03\x02\x02\x02\u0468\u046B\x03\x02\x02\x02\u0469\u0467\x03" +
        "\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046AU\x03\x02\x02\x02\u046B" +
        "\u0469\x03\x02\x02\x02\u046C\u0470\x07\x86\x02\x02\u046D\u046F\x07\x04" +
        "\x02\x02\u046E\u046D\x03\x02\x02\x02\u046F\u0472\x03\x02\x02\x02\u0470" +
        "\u046E\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0473\x03\x02" +
        "\x02\x02\u0472\u0470\x03\x02\x02\x02\u0473\u0477\x07q\x02\x02\u0474\u0476" +
        "\x07\x04\x02\x02\u0475\u0474\x03\x02\x02\x02\u0476\u0479\x03\x02\x02\x02" +
        "\u0477\u0475\x03\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047A\x03" +
        "\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u047A\u047B\x07]\x02\x02\u047B" +
        "W\x03\x02\x02\x02\u047C\u047E\x07\x19\x02\x02\u047D\u047F\t\x06\x02\x02" +
        "\u047E\u047D\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0480\x03" +
        "\x02\x02\x02\u0480\u0481\x07]\x02\x02\u0481\u048B\x07r\x02\x02\u0482\u0486" +
        "\x05:\x1E\x02\u0483\u0485\x07r\x02\x02\u0484\u0483\x03\x02\x02\x02\u0485" +
        "\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02\u0486\u0487\x03\x02" +
        "\x02\x02\u0487\u048A\x03\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0489" +
        "\u0482\x03\x02\x02\x02\u048A\u048D\x03\x02\x02\x02\u048B\u0489\x03\x02" +
        "\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C\u0491\x03\x02\x02\x02\u048D" +
        "\u048B\x03\x02\x02\x02\u048E\u0490\x07r\x02\x02\u048F\u048E\x03\x02\x02" +
        "\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491\u0492" +
        "\x03\x02\x02\x02\u0492\u04A1\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02" +
        "\u0494\u049E\x05L\'\x02\u0495\u0497\x07r\x02\x02\u0496\u0495\x03\x02\x02" +
        "\x02\u0497\u049A\x03\x02\x02\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0499" +
        "\x03\x02\x02\x02\u0499\u049B\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02" +
        "\u049B\u049D\x05L\'\x02\u049C\u0498\x03\x02\x02\x02\u049D\u04A0\x03\x02" +
        "\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F" +
        "\u04A2\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A1\u0494\x03\x02" +
        "\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2Y\x03\x02\x02\x02\u04A3\u04A4" +
        "\x07\x1A\x02\x02\u04A4\u04A5\x05\xA6T\x02\u04A5\u04A6\x07]\x02\x02\u04A6" +
        "\u04B0\x07r\x02\x02\u04A7\u04AB\x05:\x1E\x02\u04A8\u04AA\x07r\x02\x02" +
        "\u04A9\u04A8\x03\x02\x02\x02\u04AA\u04AD\x03\x02\x02\x02\u04AB\u04A9\x03" +
        "\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AF\x03\x02\x02\x02\u04AD" +
        "\u04AB\x03\x02\x02\x02\u04AE\u04A7\x03\x02\x02\x02\u04AF\u04B2\x03\x02" +
        "\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1" +
        "\u04B6\x03\x02\x02\x02\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B5\x07r\x02" +
        "\x02\u04B4\u04B3\x03\x02\x02\x02\u04B5\u04B8\x03\x02\x02\x02\u04B6\u04B4" +
        "\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04C6\x03\x02\x02\x02" +
        "\u04B8\u04B6\x03\x02\x02\x02\u04B9\u04C3\x05L\'\x02\u04BA\u04BC\x07r\x02" +
        "\x02\u04BB\u04BA\x03\x02\x02\x02\u04BC\u04BF\x03\x02\x02\x02\u04BD\u04BB" +
        "\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04C0\x03\x02\x02\x02" +
        "\u04BF\u04BD\x03\x02\x02\x02\u04C0\u04C2\x05L\'\x02\u04C1\u04BD\x03\x02" +
        "\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C3" +
        "\u04C4\x03\x02\x02\x02\u04C4\u04C7\x03\x02\x02\x02\u04C5\u04C3\x03\x02" +
        "\x02\x02\u04C6\u04B9\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7" +
        "[\x03\x02\x02\x02\u04C8\u04C9\x07\x1B\x02\x02\u04C9\u04CA\x05\xA6T\x02" +
        "\u04CA\u04CB\x07]\x02\x02\u04CB\u04D5\x07r\x02\x02\u04CC\u04D0\x05:\x1E" +
        "\x02\u04CD\u04CF\x07r\x02\x02\u04CE\u04CD\x03\x02\x02\x02\u04CF\u04D2" +
        "\x03\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02" +
        "\u04D1\u04D4\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04CC\x03" +
        "\x02\x02\x02\u04D4\u04D7\x03\x02\x02\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5" +
        "\u04D6\x03\x02\x02\x02\u04D6\u04DB\x03\x02\x02\x02\u04D7\u04D5\x03\x02" +
        "\x02\x02\u04D8\u04DA\x07r\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04DA\u04DD" +
        "\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02" +
        "\u04DC\u04EB\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE\u04E8\x05" +
        "L\'\x02\u04DF\u04E1\x07r\x02\x02\u04E0\u04DF\x03\x02\x02\x02\u04E1\u04E4" +
        "\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02" +
        "\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5\u04E7\x05" +
        "L\'\x02\u04E6\u04E2\x03\x02\x02\x02\u04E7\u04EA\x03\x02\x02\x02\u04E8" +
        "\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EC\x03\x02" +
        "\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EB\u04DE\x03\x02\x02\x02\u04EB" +
        "\u04EC\x03\x02\x02\x02\u04EC]\x03\x02\x02\x02\u04ED\u04EE\x07\x1C\x02" +
        "\x02\u04EE\u04EF\x05\xA6T\x02\u04EF\u04F3\x07]\x02\x02\u04F0\u04F2\x07" +
        "r\x02\x02\u04F1\u04F0\x03\x02\x02\x02\u04F2\u04F5\x03\x02\x02\x02";
    bitmarkParser._serializedATNSegment3 = "\u04F3\u04F1\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04FF\x03" +
        "\x02\x02\x02\u04F5\u04F3\x03\x02\x02\x02\u04F6\u04FA\x05:\x1E\x02\u04F7" +
        "\u04F9\x07r\x02\x02\u04F8\u04F7\x03\x02\x02\x02\u04F9\u04FC\x03\x02\x02" +
        "\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u04FE" +
        "\x03\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u04F6\x03\x02\x02\x02" +
        "\u04FE\u0501\x03\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u04FF\u0500\x03" +
        "\x02\x02\x02\u0500\u0503\x03\x02\x02\x02\u0501\u04FF\x03\x02\x02\x02\u0502" +
        "\u0504\x05\u0116\x8C\x02\u0503\u0502\x03\x02\x02\x02\u0503\u0504\x03\x02" +
        "\x02\x02\u0504\u0508\x03\x02\x02\x02\u0505\u0507\x07r\x02\x02\u0506\u0505" +
        "\x03\x02\x02\x02\u0507\u050A\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02" +
        "\u0508\u0509\x03\x02\x02\x02\u0509\u0518\x03\x02\x02\x02\u050A\u0508\x03" +
        "\x02\x02\x02\u050B\u0515\x05L\'\x02\u050C\u050E\x07r\x02\x02\u050D\u050C" +
        "\x03\x02\x02\x02\u050E\u0511\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02" +
        "\u050F\u0510\x03\x02\x02\x02\u0510\u0512\x03\x02\x02\x02\u0511\u050F\x03" +
        "\x02\x02\x02\u0512\u0514\x05L\'\x02\u0513\u050F\x03\x02\x02\x02\u0514" +
        "\u0517\x03\x02\x02\x02\u0515\u0513\x03\x02\x02\x02\u0515\u0516\x03\x02" +
        "\x02\x02\u0516\u0519\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0518" +
        "\u050B\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519_\x03\x02\x02" +
        "\x02\u051A\u051B\x07\x1D\x02\x02\u051B\u051C\x05\xA6T\x02\u051C\u051E" +
        "\x07]\x02\x02\u051D\u051F\x07r\x02\x02\u051E\u051D\x03\x02\x02\x02\u051F" +
        "\u0520\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0520\u0521\x03\x02" +
        "\x02\x02\u0521\u052B\x03\x02\x02\x02\u0522\u0526\x05:\x1E\x02\u0523\u0525" +
        "\x07r\x02\x02\u0524\u0523\x03\x02\x02\x02\u0525\u0528\x03\x02\x02\x02" +
        "\u0526\u0524\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527\u052A\x03" +
        "\x02\x02\x02\u0528\u0526\x03\x02\x02\x02\u0529\u0522\x03\x02\x02\x02\u052A" +
        "\u052D\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B\u052C\x03\x02" +
        "\x02\x02\u052C\u052F\x03\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052E" +
        "\u0530\x05\u0116\x8C\x02\u052F\u052E\x03\x02\x02\x02\u052F\u0530\x03\x02" +
        "\x02\x02\u0530\u0534\x03\x02\x02\x02\u0531\u0533\x07r\x02\x02\u0532\u0531" +
        "\x03\x02\x02\x02\u0533\u0536\x03\x02\x02\x02\u0534\u0532\x03\x02\x02\x02" +
        "\u0534\u0535\x03\x02\x02\x02\u0535\u0544\x03\x02\x02\x02\u0536\u0534\x03" +
        "\x02\x02\x02\u0537\u0541\x05L\'\x02\u0538\u053A\x07r\x02\x02\u0539\u0538" +
        "\x03\x02\x02\x02\u053A\u053D\x03\x02\x02\x02\u053B\u0539\x03\x02\x02\x02" +
        "\u053B\u053C\x03\x02\x02\x02\u053C\u053E\x03\x02\x02\x02\u053D\u053B\x03" +
        "\x02\x02\x02\u053E\u0540\x05L\'\x02\u053F\u053B\x03\x02\x02\x02\u0540" +
        "\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542\x03\x02" +
        "\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544" +
        "\u0537\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545a\x03\x02\x02" +
        "\x02\u0546\u0547\x07\x13\x02\x02\u0547\u0548\x05\xA6T\x02\u0548\u054C" +
        "\x07]\x02\x02\u0549\u054B\x07r\x02\x02\u054A\u0549\x03\x02\x02\x02\u054B" +
        "\u054E\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02\u054C\u054D\x03\x02" +
        "\x02\x02\u054D\u0556\x03\x02\x02\x02\u054E\u054C\x03\x02\x02\x02\u054F" +
        "\u0553\x05:\x1E\x02\u0550\u0552\x07r\x02\x02\u0551\u0550\x03\x02\x02\x02" +
        "\u0552\u0555\x03\x02\x02\x02\u0553\u0551\x03\x02\x02\x02\u0553\u0554\x03" +
        "\x02\x02\x02\u0554\u0557\x03\x02\x02\x02\u0555\u0553\x03\x02\x02\x02\u0556" +
        "\u054F\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u0556\x03\x02" +
        "\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559c\x03\x02\x02\x02\u055A\u055B" +
        "\x07\x0F\x02\x02\u055B\u055C\x05\xA6T\x02\u055C\u0560\x07]\x02\x02\u055D" +
        "\u055F\x07r\x02\x02\u055E\u055D\x03\x02\x02\x02\u055F\u0562\x03\x02\x02" +
        "\x02\u0560\u055E\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u056A" +
        "\x03\x02\x02\x02\u0562\u0560\x03\x02\x02\x02\u0563\u0567\x05:\x1E\x02" +
        "\u0564\u0566\x07r\x02\x02\u0565\u0564\x03\x02\x02\x02\u0566\u0569\x03" +
        "\x02\x02\x02\u0567\u0565\x03\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568" +
        "\u056B\x03\x02\x02\x02\u0569\u0567\x03\x02\x02\x02\u056A\u0563\x03\x02" +
        "\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056C" +
        "\u056D\x03\x02\x02\x02\u056De\x03\x02\x02\x02\u056E\u056F\x07\x10\x02" +
        "\x02\u056F\u0570\x05\xA6T\x02\u0570\u0574\x07]\x02\x02\u0571\u0573\x07" +
        "r\x02\x02\u0572\u0571\x03\x02\x02\x02\u0573\u0576\x03\x02\x02\x02\u0574" +
        "\u0572\x03\x02\x02\x02\u0574\u0575\x03\x02\x02\x02\u0575\u057E\x03\x02" +
        "\x02\x02\u0576\u0574\x03\x02\x02\x02\u0577\u057B\x05:\x1E\x02\u0578\u057A" +
        "\x07r\x02\x02\u0579\u0578\x03\x02\x02\x02\u057A\u057D\x03\x02\x02\x02" +
        "\u057B\u0579\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u057F\x03" +
        "\x02\x02\x02\u057D\u057B\x03\x02\x02\x02\u057E\u0577\x03\x02\x02\x02\u057F" +
        "\u0580\x03\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580\u0581\x03\x02" +
        "\x02\x02\u0581g\x03\x02\x02\x02\u0582\u0583\x074\x02\x02\u0583\u0584\x05" +
        "\xA6T\x02\u0584\u0588\x07]\x02\x02\u0585\u0587\x07r\x02\x02\u0586\u0585" +
        "\x03\x02\x02\x02\u0587\u058A\x03\x02\x02\x02\u0588\u0586\x03\x02\x02\x02" +
        "\u0588\u0589\x03\x02\x02\x02\u0589\u0592\x03\x02\x02\x02\u058A\u0588\x03" +
        "\x02\x02\x02\u058B\u058F\x05:\x1E\x02\u058C\u058E\x07r\x02\x02\u058D\u058C" +
        "\x03\x02\x02\x02\u058E\u0591\x03\x02\x02\x02\u058F\u058D\x03\x02\x02\x02" +
        "\u058F\u0590\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02\u0591\u058F\x03" +
        "\x02\x02\x02\u0592\u058B\x03\x02\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594" +
        "\u0592\x03\x02\x02\x02\u0594\u0595\x03\x02\x02\x02\u0595i\x03\x02\x02" +
        "\x02\u0596\u0597\x075\x02\x02\u0597\u0598\x05\xA6T\x02\u0598\u059C\x07" +
        "]\x02\x02\u0599\u059B\x07r\x02\x02\u059A\u0599\x03\x02\x02\x02\u059B\u059E" +
        "\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02" +
        "\u059D\u05A6\x03\x02\x02\x02\u059E\u059C\x03\x02\x02\x02\u059F\u05A3\x05" +
        ":\x1E\x02\u05A0\u05A2\x07r\x02\x02\u05A1\u05A0\x03\x02\x02\x02\u05A2\u05A5" +
        "\x03\x02\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A3\u05A4\x03\x02\x02\x02" +
        "\u05A4\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A6\u059F\x03" +
        "\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A8" +
        "\u05A9\x03\x02\x02\x02\u05A9k\x03\x02\x02\x02\u05AA\u05AB\x076\x02\x02" +
        "\u05AB\u05AC\x05\xA6T\x02\u05AC\u05B0\x07]\x02\x02\u05AD\u05AF\x07r\x02" +
        "\x02\u05AE\u05AD\x03\x02\x02\x02\u05AF\u05B2\x03\x02\x02\x02\u05B0\u05AE" +
        "\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05BA\x03\x02\x02\x02" +
        "\u05B2\u05B0\x03\x02\x02\x02\u05B3\u05B7\x05:\x1E\x02\u05B4\u05B6\x07" +
        "r\x02\x02\u05B5\u05B4\x03\x02\x02\x02\u05B6\u05B9\x03\x02\x02\x02\u05B7" +
        "\u05B5\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05BB\x03\x02" +
        "\x02\x02\u05B9\u05B7\x03\x02\x02\x02\u05BA\u05B3\x03\x02\x02\x02\u05BB" +
        "\u05BC\x03\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03\x02" +
        "\x02\x02\u05BDm\x03\x02\x02\x02\u05BE\u05BF\x07\x14\x02\x02\u05BF\u05C0" +
        "\x05\xA6T\x02\u05C0\u05C4\x07]\x02\x02\u05C1\u05C3\x07r\x02\x02\u05C2" +
        "\u05C1\x03\x02\x02\x02\u05C3\u05C6\x03\x02\x02\x02\u05C4\u05C2\x03\x02" +
        "\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5\u05CE\x03\x02\x02\x02\u05C6" +
        "\u05C4\x03\x02\x02\x02\u05C7\u05CB\x05:\x1E\x02\u05C8\u05CA\x07r\x02\x02" +
        "\u05C9\u05C8\x03\x02\x02\x02\u05CA\u05CD\x03\x02\x02\x02\u05CB\u05C9\x03" +
        "\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD" +
        "\u05CB\x03\x02\x02\x02\u05CE\u05C7\x03\x02\x02\x02\u05CF\u05D0\x03\x02" +
        "\x02\x02\u05D0\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1" +
        "o\x03\x02\x02\x02\u05D2\u05D3\x07\'\x02\x02\u05D3\u05D4\x05\xA6T\x02\u05D4" +
        "\u05D8\x07]\x02\x02\u05D5\u05D7\x07r\x02\x02\u05D6\u05D5\x03\x02\x02\x02" +
        "\u05D7\u05DA\x03\x02\x02\x02\u05D8\u05D6\x03\x02\x02\x02\u05D8\u05D9\x03" +
        "\x02\x02\x02\u05D9\u05E2\x03\x02\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DB" +
        "\u05DF\x05:\x1E\x02\u05DC\u05DE\x07r\x02\x02\u05DD\u05DC\x03\x02\x02\x02" +
        "\u05DE\u05E1\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05DF\u05E0\x03" +
        "\x02\x02\x02\u05E0\u05E3\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E2" +
        "\u05DB\x03\x02\x02\x02\u05E3\u05E4\x03\x02\x02\x02\u05E4\u05E2\x03\x02" +
        "\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5q\x03\x02\x02\x02\u05E6\u05E7" +
        "\x07(\x02\x02\u05E7\u05E8\x05\xA6T\x02\u05E8\u05EC\x07]\x02\x02\u05E9" +
        "\u05EB\x07r\x02\x02\u05EA\u05E9\x03\x02\x02\x02\u05EB\u05EE\x03\x02\x02" +
        "\x02\u05EC\u05EA\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02\u05ED\u05F6" +
        "\x03\x02\x02\x02\u05EE\u05EC\x03\x02\x02\x02\u05EF\u05F3\x05:\x1E\x02" +
        "\u05F0\u05F2\x07r\x02\x02\u05F1\u05F0\x03\x02\x02\x02\u05F2\u05F5\x03" +
        "\x02\x02\x02\u05F3\u05F1\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4" +
        "\u05F7\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F6\u05EF\x03\x02" +
        "\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8" +
        "\u05F9\x03\x02\x02\x02\u05F9s\x03\x02\x02\x02\u05FA\u05FB\x07)\x02\x02" +
        "\u05FB\u05FC\x05\xA6T\x02\u05FC\u0600\x07]\x02\x02\u05FD\u05FF\x07r\x02" +
        "\x02\u05FE\u05FD\x03\x02\x02\x02\u05FF\u0602\x03\x02\x02\x02\u0600\u05FE" +
        "\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601\u060A\x03\x02\x02\x02" +
        "\u0602\u0600\x03\x02\x02\x02\u0603\u0607\x05:\x1E\x02\u0604\u0606\x07" +
        "r\x02\x02\u0605\u0604\x03\x02\x02\x02\u0606\u0609\x03\x02\x02\x02\u0607" +
        "\u0605\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608\u060B\x03\x02" +
        "\x02\x02\u0609\u0607\x03\x02\x02\x02\u060A\u0603\x03\x02\x02\x02\u060B" +
        "\u060C\x03\x02\x02\x02\u060C\u060A\x03\x02\x02\x02\u060C\u060D\x03\x02" +
        "\x02\x02\u060Du\x03\x02\x02\x02\u060E\u060F\x07*\x02\x02\u060F\u0610\x05" +
        "\xA6T\x02\u0610\u0614\x07]\x02\x02\u0611\u0613\x07r\x02\x02\u0612\u0611" +
        "\x03\x02\x02\x02\u0613\u0616\x03\x02\x02\x02\u0614\u0612\x03\x02\x02\x02" +
        "\u0614\u0615\x03\x02\x02\x02\u0615\u061E\x03\x02\x02\x02\u0616\u0614\x03" +
        "\x02\x02\x02\u0617\u061B\x05:\x1E\x02\u0618\u061A\x07r\x02\x02\u0619\u0618" +
        "\x03\x02\x02\x02\u061A\u061D\x03\x02\x02\x02\u061B\u0619\x03\x02\x02\x02" +
        "\u061B\u061C\x03\x02\x02\x02\u061C\u061F\x03\x02\x02\x02\u061D\u061B\x03" +
        "\x02\x02\x02\u061E\u0617\x03\x02\x02\x02\u061F\u0620\x03\x02\x02\x02\u0620" +
        "\u061E\x03\x02\x02\x02\u0620\u0621\x03\x02\x02\x02\u0621w\x03\x02\x02" +
        "\x02\u0622\u0623\x07,\x02\x02\u0623\u0624\x05\xA6T\x02\u0624\u0628\x07" +
        "]\x02\x02\u0625\u0627\x07r\x02\x02\u0626\u0625\x03\x02\x02\x02\u0627\u062A" +
        "\x03\x02\x02\x02\u0628\u0626\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02" +
        "\u0629\u0632\x03\x02\x02\x02\u062A\u0628\x03\x02\x02\x02\u062B\u062F\x05" +
        ":\x1E\x02\u062C\u062E\x07r\x02\x02\u062D\u062C\x03\x02\x02\x02\u062E\u0631" +
        "\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u062F\u0630\x03\x02\x02\x02" +
        "\u0630\u0633\x03\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0632\u062B\x03" +
        "\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0632\x03\x02\x02\x02\u0634" +
        "\u0635\x03\x02\x02\x02\u0635y\x03\x02\x02\x02\u0636\u0637\x07-\x02\x02" +
        "\u0637\u0638\x05\xA6T\x02\u0638\u063C\x07]\x02\x02\u0639\u063B\x07r\x02" +
        "\x02\u063A\u0639\x03\x02\x02\x02\u063B\u063E\x03\x02\x02\x02\u063C\u063A" +
        "\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u0646\x03\x02\x02\x02" +
        "\u063E\u063C\x03\x02\x02\x02\u063F\u0643\x05:\x1E\x02\u0640\u0642\x07" +
        "r\x02\x02\u0641\u0640\x03\x02\x02\x02\u0642\u0645\x03\x02\x02\x02\u0643" +
        "\u0641\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0647\x03\x02" +
        "\x02\x02\u0645\u0643\x03\x02\x02\x02\u0646\u063F\x03\x02\x02\x02\u0647" +
        "\u0648\x03\x02\x02\x02\u0648\u0646\x03\x02\x02\x02\u0648\u0649\x03\x02" +
        "\x02\x02\u0649{\x03\x02\x02\x02\u064A\u064B\x07.\x02\x02\u064B\u064C\x05" +
        "\xA6T\x02\u064C\u0650\x07]\x02\x02\u064D\u064F\x07r\x02\x02\u064E\u064D" +
        "\x03\x02\x02\x02\u064F\u0652\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02" +
        "\u0650\u0651\x03\x02\x02\x02\u0651\u065A\x03\x02\x02\x02\u0652\u0650\x03" +
        "\x02\x02\x02\u0653\u0657\x05:\x1E\x02\u0654\u0656\x07r\x02\x02\u0655\u0654" +
        "\x03\x02\x02\x02\u0656\u0659\x03\x02\x02\x02\u0657\u0655\x03\x02\x02\x02" +
        "\u0657\u0658\x03\x02\x02\x02\u0658\u065B\x03\x02\x02\x02\u0659\u0657\x03" +
        "\x02\x02\x02\u065A\u0653\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C" +
        "\u065A\x03\x02\x02\x02\u065C\u065D\x03\x02\x02\x02\u065D}\x03\x02\x02" +
        "\x02\u065E\u065F\x07/\x02\x02\u065F\u0660\x05\xA6T\x02\u0660\u0664\x07" +
        "]\x02\x02\u0661\u0663\x07r\x02\x02\u0662\u0661\x03\x02\x02\x02\u0663\u0666" +
        "\x03\x02\x02\x02\u0664\u0662\x03\x02\x02\x02\u0664\u0665\x03\x02\x02\x02" +
        "\u0665\u066E\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0667\u066B\x05" +
        ":\x1E\x02\u0668\u066A\x07r\x02\x02\u0669\u0668\x03\x02\x02\x02\u066A\u066D" +
        "\x03\x02\x02\x02\u066B\u0669\x03\x02\x02\x02\u066B\u066C\x03\x02\x02\x02" +
        "\u066C\u066F\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066E\u0667\x03" +
        "\x02\x02\x02\u066F\u0670\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0670" +
        "\u0671\x03\x02\x02\x02\u0671\x7F\x03\x02\x02\x02\u0672\u0673\x070\x02" +
        "\x02\u0673\u0674\x05\xA6T\x02\u0674\u0678\x07]\x02\x02\u0675\u0677\x07" +
        "r\x02\x02\u0676\u0675\x03\x02\x02\x02\u0677\u067A\x03\x02\x02\x02\u0678" +
        "\u0676\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u0682\x03\x02" +
        "\x02\x02\u067A\u0678\x03\x02\x02\x02\u067B\u067F\x05:\x1E\x02\u067C\u067E" +
        "\x07r\x02\x02\u067D\u067C\x03\x02\x02\x02\u067E\u0681\x03\x02\x02\x02" +
        "\u067F\u067D\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02\u0680\u0683\x03" +
        "\x02\x02\x02\u0681\u067F\x03\x02\x02\x02\u0682\u067B\x03\x02\x02\x02\u0683" +
        "\u0684\x03\x02\x02\x02\u0684\u0682\x03\x02\x02\x02\u0684\u0685\x03\x02" +
        "\x02\x02\u0685\x81\x03\x02\x02\x02\u0686\u0687\x071\x02\x02\u0687\u0688" +
        "\x05\xA6T\x02\u0688\u068C\x07]\x02\x02\u0689\u068B\x07r\x02\x02\u068A" +
        "\u0689\x03\x02\x02\x02\u068B\u068E\x03\x02\x02\x02\u068C\u068A\x03\x02" +
        "\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u0696\x03\x02\x02\x02\u068E" +
        "\u068C\x03\x02\x02\x02\u068F\u0693\x05:\x1E\x02\u0690\u0692\x07r\x02\x02" +
        "\u0691\u0690\x03\x02\x02\x02\u0692\u0695\x03\x02\x02\x02\u0693\u0691\x03" +
        "\x02\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u0697\x03\x02\x02\x02\u0695" +
        "\u0693\x03\x02\x02\x02\u0696\u068F\x03\x02\x02\x02\u0697\u0698\x03\x02" +
        "\x02\x02\u0698\u0696\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699" +
        "\x83\x03\x02\x02\x02\u069A\u069B\x072\x02\x02\u069B\u069C\x05\xA6T\x02" +
        "\u069C\u06A0\x07]\x02\x02\u069D\u069F\x07r\x02\x02\u069E\u069D\x03\x02" +
        "\x02\x02\u069F\u06A2\x03\x02\x02\x02\u06A0\u069E\x03\x02\x02\x02\u06A0" +
        "\u06A1\x03\x02\x02\x02\u06A1\u06AA\x03\x02\x02\x02\u06A2\u06A0\x03\x02" +
        "\x02\x02\u06A3\u06A7\x05:\x1E\x02\u06A4\u06A6\x07r\x02\x02\u06A5\u06A4" +
        "\x03\x02\x02\x02\u06A6\u06A9\x03\x02\x02\x02\u06A7\u06A5\x03\x02\x02\x02" +
        "\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02\u06A9\u06A7\x03" +
        "\x02\x02\x02\u06AA\u06A3\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC" +
        "\u06AA\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\x85\x03\x02\x02" +
        "\x02\u06AE\u06AF\x07+\x02\x02\u06AF\u06B0\x05\xA6T\x02\u06B0\u06B4\x07" +
        "]\x02\x02\u06B1\u06B3\x07r\x02\x02\u06B2\u06B1\x03\x02\x02\x02\u06B3\u06B6" +
        "\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02" +
        "\u06B5\u06BE\x03\x02\x02\x02\u06B6\u06B4\x03\x02\x02\x02\u06B7\u06BB\x05" +
        ":\x1E\x02\u06B8\u06BA\x07r\x02\x02\u06B9\u06B8\x03\x02\x02\x02\u06BA\u06BD" +
        "\x03\x02\x02\x02\u06BB\u06B9\x03\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02" +
        "\u06BC\u06BF\x03\x02\x02\x02\u06BD\u06BB\x03\x02\x02\x02\u06BE\u06B7\x03" +
        "\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06BE\x03\x02\x02\x02\u06C0" +
        "\u06C1\x03\x02\x02\x02\u06C1\x87\x03\x02\x02\x02\u06C2\u06C3\x073\x02" +
        "\x02\u06C3\u06C4\x05\xA6T\x02\u06C4\u06C8\x07]\x02\x02\u06C5\u06C7\x07" +
        "r\x02\x02\u06C6\u06C5\x03\x02\x02\x02\u06C7\u06CA\x03\x02\x02\x02\u06C8" +
        "\u06C6\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06D2\x03\x02" +
        "\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CB\u06CF\x05:\x1E\x02\u06CC\u06CE" +
        "\x07r\x02\x02\u06CD\u06CC\x03\x02\x02\x02\u06CE\u06D1\x03\x02\x02\x02" +
        "\u06CF\u06CD\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06D3\x03" +
        "\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D2\u06CB\x03\x02\x02\x02\u06D3" +
        "\u06D4\x03\x02\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D4\u06D5\x03\x02" +
        "\x02\x02\u06D5\x89\x03\x02\x02\x02\u06D6\u06D7\x07G\x02\x02\u06D7\u06D8" +
        "\x05\xA6T\x02\u06D8\u06DC\x07]\x02\x02\u06D9\u06DB\x07r\x02\x02\u06DA" +
        "\u06D9\x03\x02\x02\x02\u06DB\u06DE\x03\x02\x02\x02\u06DC\u06DA\x03\x02" +
        "\x02\x02\u06DC\u06DD\x03\x02\x02\x02\u06DD\u06E6\x03\x02\x02\x02\u06DE" +
        "\u06DC\x03\x02\x02\x02\u06DF\u06E3\x05:\x1E\x02\u06E0\u06E2\x07r\x02\x02" +
        "\u06E1\u06E0\x03\x02\x02\x02\u06E2\u06E5\x03\x02\x02\x02\u06E3\u06E1\x03" +
        "\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06E7\x03\x02\x02\x02\u06E5" +
        "\u06E3\x03\x02\x02\x02\u06E6\u06DF\x03\x02\x02\x02\u06E7\u06E8\x03\x02" +
        "\x02\x02\u06E8\u06E6\x03\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9" +
        "\x8B\x03\x02\x02\x02\u06EA\u06EB\x07H\x02\x02\u06EB\u06EC\x05\xA6T\x02" +
        "\u06EC\u06F0\x07]\x02\x02\u06ED\u06EF\x07r\x02\x02\u06EE\u06ED\x03\x02" +
        "\x02\x02\u06EF\u06F2\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F0" +
        "\u06F1\x03\x02\x02\x02\u06F1\u06FA\x03\x02\x02\x02\u06F2\u06F0\x03\x02" +
        "\x02\x02\u06F3\u06F7\x05:\x1E\x02\u06F4\u06F6\x07r\x02\x02\u06F5\u06F4" +
        "\x03\x02\x02\x02\u06F6\u06F9\x03\x02\x02\x02\u06F7\u06F5\x03\x02\x02\x02" +
        "\u06F7\u06F8\x03\x02\x02\x02\u06F8\u06FB\x03\x02\x02\x02\u06F9\u06F7\x03" +
        "\x02\x02\x02\u06FA\u06F3\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC" +
        "\u06FA\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\x8D\x03\x02\x02" +
        "\x02\u06FE\u06FF\x07\x16\x02\x02\u06FF\u0700\x05\xA6T\x02\u0700\u0704" +
        "\x07]\x02\x02\u0701\u0703\x07r\x02\x02\u0702\u0701\x03\x02\x02\x02\u0703" +
        "\u0706\x03\x02\x02\x02\u0704\u0702\x03\x02\x02\x02\u0704\u0705\x03\x02" +
        "\x02\x02\u0705\u070E\x03\x02\x02\x02\u0706\u0704\x03\x02\x02\x02\u0707" +
        "\u070B\x05:\x1E\x02\u0708\u070A\x07r\x02\x02\u0709\u0708\x03\x02\x02\x02" +
        "\u070A\u070D\x03\x02\x02\x02\u070B\u0709\x03\x02\x02\x02\u070B\u070C\x03" +
        "\x02\x02\x02\u070C\u070F\x03\x02\x02\x02\u070D\u070B\x03\x02\x02\x02\u070E" +
        "\u0707\x03\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u070E\x03\x02" +
        "\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\x8F\x03\x02\x02\x02\u0712\u0713" +
        "\x07\x1E\x02\x02\u0713\u0714\x05\xA6T\x02\u0714\u071F\x07]\x02\x02\u0715" +
        "\u0716\t\x07\x02\x02\u0716\u071C\x05\x92J\x02\u0717\u0718\x05\u0120\x91" +
        "\x02\u0718\u0719\x05\x92J\x02\u0719\u071B\x03\x02\x02\x02\u071A\u0717" +
        "\x03\x02\x02\x02\u071B\u071E\x03\x02\x02\x02\u071C\u071A\x03\x02\x02\x02" +
        "\u071C\u071D\x03\x02\x02\x02\u071D\u0720\x03\x02\x02\x02\u071E\u071C\x03" +
        "\x02\x02\x02\u071F\u0715\x03\x02\x02\x02\u0720\u0721\x03\x02\x02\x02\u0721" +
        "\u071F\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0723\x03\x02" +
        "\x02\x02\u0723\u0727\t\x07\x02\x02\u0724\u0726\x07r\x02\x02\u0725\u0724" +
        "\x03\x02\x02\x02\u0726\u0729\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02" +
        "\u0727\u0728\x03\x02\x02\x02\u0728\u0737\x03\x02\x02\x02\u0729\u0727\x03" +
        "\x02\x02\x02\u072A\u0734\x05L\'\x02\u072B\u072D\x07r\x02\x02\u072C\u072B" +
        "\x03\x02\x02\x02\u072D\u0730\x03\x02\x02\x02\u072E\u072C\x03\x02\x02\x02" +
        "\u072E\u072F\x03\x02\x02\x02\u072F\u0731\x03\x02\x02\x02\u0730\u072E\x03" +
        "\x02\x02\x02\u0731\u0733\x05L\'\x02\u0732\u072E\x03\x02\x02\x02\u0733" +
        "\u0736\x03\x02\x02\x02\u0734\u0732\x03\x02\x02\x02\u0734\u0735\x03\x02" +
        "\x02\x02\u0735\u0738\x03\x02\x02\x02\u0736\u0734\x03\x02\x02\x02\u0737" +
        "\u072A\x03\x02\x02\x02\u0737\u0738\x03\x02\x02\x02\u0738\x91\x03\x02\x02" +
        "\x02\u0739\u0741\x05\u0122\x92\x02\u073A\u0741\x05\u0100\x81\x02\u073B" +
        "\u0741\x05\xE0q\x02\u073C\u0741\x05<\x1F\x02\u073D\u0741\x05@!\x02\u073E" +
        "\u0741\x05B\"\x02\u073F\u0741\x05D#\x02\u0740\u0739\x03\x02\x02\x02\u0740" +
        "\u073A\x03\x02\x02\x02\u0740\u073B\x03\x02\x02\x02\u0740\u073C\x03\x02" +
        "\x02\x02\u0740\u073D\x03\x02\x02\x02\u0740\u073E\x03\x02\x02\x02\u0740" +
        "\u073F\x03\x02\x02\x02\u0741\u0742\x03\x02\x02\x02\u0742\u0740\x03\x02" +
        "\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743\x93\x03\x02\x02\x02\u0744\u0745" +
        "\x07 \x02\x02\u0745\u0746\x05\xA6T\x02\u0746\u074A\x07]\x02\x02\u0747" +
        "\u0749\x07r\x02\x02\u0748\u0747\x03\x02\x02\x02\u0749\u074C\x03\x02\x02" +
        "\x02\u074A\u0748\x03\x02\x02\x02\u074A\u074B\x03\x02\x02\x02\u074B\u0756" +
        "\x03\x02\x02\x02\u074C\u074A\x03\x02\x02\x02\u074D\u0751\x05:\x1E\x02" +
        "\u074E\u0750\x07r\x02\x02\u074F\u074E\x03\x02\x02\x02\u0750\u0753\x03" +
        "\x02\x02\x02\u0751\u074F\x03\x02\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752" +
        "\u0755\x03\x02\x02\x02\u0753\u0751\x03\x02\x02\x02\u0754\u074D\x03\x02" +
        "\x02\x02\u0755\u0758\x03\x02\x02\x02\u0756\u0754\x03\x02\x02\x02\u0756" +
        "\u0757\x03\x02\x02\x02\u0757\u0761\x03\x02\x02\x02\u0758\u0756\x03\x02" +
        "\x02\x02\u0759\u075A\t\x07\x02\x02\u075A\u075D\x05\u0118\x8D\x02\u075B" +
        "\u075C\x07r\x02\x02\u075C\u075E\x05\x96L\x02\u075D\u075B\x03\x02\x02\x02" +
        "\u075E\u075F\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u075F\u0760\x03" +
        "\x02\x02\x02\u0760\u0762\x03\x02\x02\x02\u0761\u0759\x03\x02\x02\x02\u0762" +
        "\u0763\x03\x02\x02\x02\u0763\u0761\x03\x02\x02\x02\u0763\u0764\x03\x02" +
        "\x02\x02\u0764\u0765\x03\x02\x02\x02\u0765\u0769\t\x07\x02\x02\u0766\u0768" +
        "\x07r\x02\x02\u0767\u0766\x03\x02\x02\x02\u0768\u076B\x03\x02\x02\x02" +
        "\u0769\u0767\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A\u0779\x03" +
        "\x02\x02\x02\u076B\u0769\x03\x02\x02\x02\u076C\u0776\x05L\'\x02\u076D" +
        "\u076F\x07r\x02\x02\u076E\u076D\x03\x02\x02\x02\u076F\u0772\x03\x02\x02" +
        "\x02\u0770\u076E\x03\x02\x02\x02\u0770\u0771\x03\x02\x02\x02\u0771\u0773" +
        "\x03\x02\x02\x02\u0772\u0770\x03\x02\x02\x02\u0773\u0775\x05L\'\x02\u0774" +
        "\u0770\x03\x02\x02\x02\u0775\u0778\x03\x02\x02\x02\u0776\u0774\x03\x02" +
        "\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777\u077A\x03\x02\x02\x02\u0778" +
        "\u0776\x03\x02\x02\x02\u0779\u076C\x03\x02\x02\x02\u0779\u077A\x03\x02" +
        "\x02\x02\u077A\x95\x03\x02\x02\x02\u077B\u077C\x07N\x02\x02\u077C\u077D" +
        "\x05\u0118\x8D\x02\u077D\u077F\x07]\x02\x02\u077E\u0780\x05\xA4S\x02\u077F" +
        "\u077E\x03\x02\x02\x02\u077F\u0780\x03\x02\x02\x02\u0780\x97\x03\x02\x02" +
        "\x02\u0781\u0782\x07!\x02\x02\u0782\u0783\x05\xA6T\x02\u0783\u0787\x07" +
        "]\x02\x02\u0784\u0786\x07r\x02\x02\u0785\u0784\x03\x02\x02\x02\u0786\u0789" +
        "\x03\x02\x02\x02\u0787\u0785\x03\x02\x02\x02\u0787\u0788\x03\x02\x02\x02" +
        "\u0788\u0793\x03\x02\x02\x02\u0789\u0787\x03\x02\x02\x02\u078A\u078E\x05" +
        ":\x1E\x02\u078B\u078D\x07r\x02\x02\u078C\u078B\x03\x02\x02\x02\u078D\u0790" +
        "\x03\x02\x02\x02\u078E\u078C\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02" +
        "\u078F\u0792\x03\x02\x02\x02\u0790\u078E\x03\x02\x02\x02\u0791\u078A\x03" +
        "\x02\x02\x02\u0792\u0795\x03\x02\x02\x02\u0793\u0791\x03\x02\x02\x02\u0793" +
        "\u0794\x03\x02\x02\x02\u0794\u07A5\x03\x02\x02\x02\u0795\u0793\x03\x02" +
        "\x02\x02\u0796\u0798\t\x07\x02\x02\u0797\u0799\x05\u0118\x8D\x02\u0798" +
        "\u0797\x03\x02\x02\x02\u0798\u0799\x03\x02\x02\x02\u0799\u07A1\x03\x02" +
        "\x02\x02\u079A\u079C\x07r\x02\x02\u079B\u079A\x03\x02\x02\x02\u079C\u079F" +
        "\x03\x02\x02\x02\u079D\u079B\x03\x02\x02\x02\u079D\u079E\x03\x02\x02\x02" +
        "\u079E\u07A0\x03\x02\x02\x02\u079F\u079D\x03\x02\x02\x02\u07A0\u07A2\x05" +
        "\x96L\x02\u07A1\u079D\x03\x02\x02\x02\u07A2\u07A3\x03\x02\x02\x02\u07A3" +
        "\u07A1\x03\x02\x02\x02\u07A3\u07A4\x03\x02\x02\x02\u07A4\u07A6\x03\x02" +
        "\x02\x02\u07A5\u0796\x03\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7" +
        "\u07A5\x03\x02\x02\x02\u07A7\u07A8\x03\x02\x02\x02\u07A8\u07A9\x03\x02" +
        "\x02\x02\u07A9\u07AA\t\x07\x02\x02\u07AA\x99\x03\x02\x02\x02\u07AB\u07AC" +
        "\x07\"\x02\x02\u07AC\u07AD\x05\xA6T\x02\u07AD\u07B1\x07]\x02\x02\u07AE" +
        "\u07B0\x07r\x02\x02\u07AF\u07AE\x03\x02\x02\x02\u07B0\u07B3\x03\x02\x02" +
        "\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2\u07BD" +
        "\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4\u07B8\x05:\x1E\x02" +
        "\u07B5\u07B7\x07r\x02\x02\u07B6\u07B5\x03\x02\x02\x02\u07B7\u07BA\x03" +
        "\x02\x02\x02\u07B8\u07B6\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9" +
        "\u07BC\x03\x02\x02\x02\u07BA\u07B8\x03\x02\x02\x02\u07BB\u07B4\x03\x02" +
        "\x02\x02\u07BC\u07BF\x03\x02\x02\x02\u07BD\u07BB\x03\x02\x02\x02\u07BD" +
        "\u07BE\x03\x02\x02\x02\u07BE\u07C8";
    bitmarkParser._serializedATNSegment4 = "\x03\x02\x02\x02\u07BF\u07BD\x03\x02\x02\x02\u07C0\u07C1\t\x07\x02\x02" +
        "\u07C1\u07C4\x05\u0118\x8D\x02\u07C2\u07C3\x07r\x02\x02\u07C3\u07C5\x05" +
        "\x96L\x02\u07C4\u07C2\x03\x02\x02\x02\u07C5\u07C6\x03\x02\x02\x02\u07C6" +
        "\u07C4\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7\u07C9\x03\x02" +
        "\x02\x02\u07C8\u07C0\x03\x02\x02\x02\u07C9\u07CA\x03\x02\x02\x02\u07CA" +
        "\u07C8\x03\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB\u07CC\x03\x02" +
        "\x02\x02\u07CC\u07CD\t\x07\x02\x02\u07CD\x9B\x03\x02\x02\x02\u07CE\u07CF" +
        "\x07#\x02\x02\u07CF\u07D0\x05\xA6T\x02\u07D0\u07D4\x07]\x02\x02\u07D1" +
        "\u07D3\x07r\x02\x02\u07D2\u07D1\x03\x02\x02\x02\u07D3\u07D6\x03\x02\x02" +
        "\x02\u07D4\u07D2\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07E0" +
        "\x03\x02\x02\x02\u07D6\u07D4\x03\x02\x02\x02\u07D7\u07DB\x05:\x1E\x02" +
        "\u07D8\u07DA\x07r\x02\x02\u07D9\u07D8\x03\x02\x02\x02\u07DA\u07DD\x03" +
        "\x02\x02\x02\u07DB\u07D9\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC" +
        "\u07DF\x03\x02\x02\x02\u07DD\u07DB\x03\x02\x02\x02\u07DE\u07D7\x03\x02" +
        "\x02\x02\u07DF\u07E2\x03\x02\x02\x02\u07E0\u07DE\x03\x02\x02\x02\u07E0" +
        "\u07E1\x03\x02\x02\x02\u07E1\u07EB\x03\x02\x02\x02\u07E2\u07E0\x03\x02" +
        "\x02\x02\u07E3\u07E4\t\x07\x02\x02\u07E4\u07E7\x05\u0118\x8D\x02\u07E5" +
        "\u07E6\x07r\x02\x02\u07E6\u07E8\x05\x96L\x02\u07E7\u07E5\x03\x02\x02\x02" +
        "\u07E8\u07E9\x03\x02\x02\x02\u07E9\u07E7\x03\x02\x02\x02\u07E9\u07EA\x03" +
        "\x02\x02\x02\u07EA\u07EC\x03\x02\x02\x02\u07EB\u07E3\x03\x02\x02\x02\u07EC" +
        "\u07ED\x03\x02\x02\x02\u07ED\u07EB\x03\x02\x02\x02\u07ED\u07EE\x03\x02" +
        "\x02\x02\u07EE\u07EF\x03\x02\x02\x02\u07EF\u07F0\t\x07\x02\x02\u07F0\x9D" +
        "\x03\x02\x02\x02\u07F1\u07F2\x07$\x02\x02\u07F2\u07F3\x05\xA6T\x02\u07F3" +
        "\u07F7\x07]\x02\x02\u07F4\u07F6\x07r\x02\x02\u07F5\u07F4\x03\x02\x02\x02" +
        "\u07F6\u07F9\x03\x02\x02\x02\u07F7\u07F5\x03\x02\x02\x02\u07F7\u07F8\x03" +
        "\x02\x02\x02\u07F8\u0803\x03\x02\x02\x02\u07F9\u07F7\x03\x02\x02\x02\u07FA" +
        "\u07FE\x05:\x1E\x02\u07FB\u07FD\x07r\x02\x02\u07FC\u07FB\x03\x02\x02\x02" +
        "\u07FD\u0800\x03\x02\x02\x02\u07FE\u07FC\x03\x02\x02\x02\u07FE\u07FF\x03" +
        "\x02\x02\x02\u07FF\u0802\x03\x02\x02\x02\u0800\u07FE\x03\x02\x02\x02\u0801" +
        "\u07FA\x03\x02\x02\x02\u0802\u0805\x03\x02\x02\x02\u0803\u0801\x03\x02" +
        "\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u080E\x03\x02\x02\x02\u0805" +
        "\u0803\x03\x02\x02\x02\u0806\u0807\t\x07\x02\x02\u0807\u080A\x05\u0118" +
        "\x8D\x02\u0808\u0809\x07r\x02\x02\u0809\u080B\x05\x96L\x02\u080A\u0808" +
        "\x03\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u080A\x03\x02\x02\x02" +
        "\u080C\u080D\x03\x02\x02\x02\u080D\u080F\x03\x02\x02\x02\u080E\u0806\x03" +
        "\x02\x02\x02\u080F\u0810\x03\x02\x02\x02\u0810\u080E\x03\x02\x02\x02\u0810" +
        "\u0811\x03\x02\x02\x02\u0811\u0812\x03\x02\x02\x02\u0812\u0813\t\x07\x02" +
        "\x02\u0813\x9F\x03\x02\x02\x02\u0814\u0815\x07\x1F\x02\x02\u0815\u0816" +
        "\x05\xA6T\x02\u0816\u081A\x07]\x02\x02\u0817\u0819\x07r\x02\x02\u0818" +
        "\u0817\x03\x02\x02\x02\u0819\u081C\x03\x02\x02\x02\u081A\u0818\x03\x02" +
        "\x02\x02\u081A\u081B\x03\x02\x02\x02\u081B\u0826\x03\x02\x02\x02\u081C" +
        "\u081A\x03\x02\x02\x02\u081D\u0821\x05:\x1E\x02\u081E\u0820\x07r\x02\x02" +
        "\u081F\u081E\x03\x02\x02\x02\u0820\u0823\x03\x02\x02\x02\u0821\u081F\x03" +
        "\x02\x02\x02\u0821\u0822\x03\x02\x02\x02\u0822\u0825\x03\x02\x02\x02\u0823" +
        "\u0821\x03\x02\x02\x02\u0824\u081D\x03\x02\x02\x02\u0825\u0828\x03\x02" +
        "\x02\x02\u0826\u0824\x03\x02\x02\x02\u0826\u0827\x03\x02\x02\x02\u0827" +
        "\u0836\x03\x02\x02\x02\u0828\u0826\x03\x02\x02\x02\u0829\u082A\t\x07\x02" +
        "\x02\u082A\u0832\x05\xA2R\x02\u082B\u082D\x07r\x02\x02\u082C\u082B\x03" +
        "\x02\x02\x02\u082D\u0830\x03\x02\x02\x02\u082E\u082C\x03\x02\x02\x02\u082E" +
        "\u082F\x03\x02\x02\x02\u082F\u0831\x03\x02\x02\x02\u0830\u082E\x03\x02" +
        "\x02\x02\u0831\u0833\x05\x96L\x02\u0832\u082E\x03\x02\x02\x02\u0833\u0834" +
        "\x03\x02\x02\x02\u0834\u0832\x03\x02\x02\x02\u0834\u0835\x03\x02\x02\x02" +
        "\u0835\u0837\x03\x02\x02\x02\u0836\u0829\x03\x02\x02\x02\u0837\u0838\x03" +
        "\x02\x02\x02\u0838\u0836\x03\x02\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839" +
        "\u083A\x03\x02\x02\x02\u083A\u083E\t\x07\x02\x02\u083B\u083D\x07r\x02" +
        "\x02\u083C\u083B\x03\x02\x02\x02\u083D\u0840\x03\x02\x02\x02\u083E\u083C" +
        "\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02\u083F\u084E\x03\x02\x02\x02" +
        "\u0840\u083E\x03\x02\x02\x02\u0841\u084B\x05L\'\x02\u0842\u0844\x07r\x02" +
        "\x02\u0843\u0842\x03\x02\x02\x02\u0844\u0847\x03\x02\x02\x02\u0845\u0843" +
        "\x03\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\u0848\x03\x02\x02\x02" +
        "\u0847\u0845\x03\x02\x02\x02\u0848\u084A\x05L\'\x02\u0849\u0845\x03\x02" +
        "\x02\x02\u084A\u084D\x03\x02\x02\x02\u084B\u0849\x03\x02\x02\x02\u084B" +
        "\u084C\x03\x02\x02\x02\u084C\u084F\x03\x02\x02\x02\u084D\u084B\x03\x02" +
        "\x02\x02\u084E\u0841\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02\u084F" +
        "\xA1\x03\x02\x02\x02\u0850\u0852\n\b\x02\x02\u0851\u0850\x03\x02\x02\x02" +
        "\u0852\u0853\x03\x02\x02\x02\u0853\u0851\x03\x02\x02\x02\u0853\u0854\x03" +
        "\x02\x02\x02\u0854\xA3\x03\x02\x02\x02\u0855\u0856\x07\x83\x02\x02\u0856" +
        "\u0857\x07p\x02\x02\u0857\u0858\x07]\x02\x02\u0858\xA5\x03\x02\x02\x02" +
        "\u0859\u085B\x05\xA8U\x02\u085A\u0859\x03\x02\x02\x02\u085B\u085E\x03" +
        "\x02\x02\x02\u085C\u085A\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D" +
        "\u0863\x03\x02\x02\x02\u085E\u085C\x03\x02\x02\x02\u085F\u0862\x07\xB9" +
        "\x02\x02\u0860\u0862\x05\xAAV\x02\u0861\u085F\x03\x02\x02\x02\u0861\u0860" +
        "\x03\x02\x02\x02\u0862\u0865\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02" +
        "\u0863\u0864\x03\x02\x02\x02\u0864\xA7\x03\x02\x02\x02\u0865\u0863\x03" +
        "\x02\x02\x02\u0866\u0867\t\t\x02\x02\u0867\xA9\x03\x02\x02\x02\u0868\u0872" +
        "\x05\xACW\x02\u0869\u0872\x05\xE4s\x02\u086A\u0872\x05\xAEX\x02\u086B" +
        "\u0872\x05\xB0Y\x02\u086C\u0872\x05\xB2Z\x02\u086D\u0872\x05\xB4[\x02" +
        "\u086E\u0872\x05\xB6\\\x02\u086F\u0872\x05\xB8]\x02\u0870\u0872\x07\x9A" +
        "\x02\x02\u0871\u0868\x03\x02\x02\x02\u0871\u0869\x03\x02\x02\x02\u0871" +
        "\u086A\x03\x02\x02\x02\u0871\u086B\x03\x02\x02\x02\u0871\u086C\x03\x02" +
        "\x02\x02\u0871\u086D\x03\x02\x02\x02\u0871\u086E\x03\x02\x02\x02\u0871" +
        "\u086F\x03\x02\x02\x02\u0871\u0870\x03\x02\x02\x02\u0872\xAB\x03\x02\x02" +
        "\x02\u0873\u0876\x07\x91\x02\x02\u0874\u0877\x07J\x02\x02\u0875\u0877" +
        "\x07\xC9\x02\x02\u0876\u0874\x03\x02\x02\x02\u0876\u0875\x03\x02\x02\x02" +
        "\u0876\u0877\x03\x02\x02\x02\u0877\u0882\x03\x02\x02\x02\u0878\u087A\x07" +
        "\xA8\x02\x02\u0879\u087B\x07J\x02\x02\u087A\u0879\x03\x02\x02\x02\u087A" +
        "\u087B\x03\x02\x02\x02\u087B\u0882\x03\x02\x02\x02\u087C\u087E\x07\x92" +
        "\x02\x02\u087D\u087F\x07J\x02\x02\u087E\u087D\x03\x02\x02\x02\u087E\u087F" +
        "\x03\x02\x02\x02\u087F\u0882\x03\x02\x02\x02\u0880\u0882\x07\x93\x02\x02" +
        "\u0881\u0873\x03\x02\x02\x02\u0881\u0878\x03\x02\x02\x02\u0881\u087C\x03" +
        "\x02\x02\x02\u0881\u0880\x03\x02\x02\x02\u0882\xAD\x03\x02\x02\x02\u0883" +
        "\u0886\t\n\x02\x02\u0884\u0885\x07^\x02\x02\u0885\u0887\x07L\x02\x02\u0886" +
        "\u0884\x03\x02\x02\x02\u0886\u0887\x03\x02\x02\x02\u0887\xAF\x03\x02\x02" +
        "\x02\u0888\u0889\t\v\x02\x02\u0889\xB1\x03\x02\x02\x02\u088A\u088B\t\f" +
        "\x02\x02\u088B\xB3\x03\x02\x02\x02\u088C\u088D\t\r\x02\x02\u088D\xB5\x03" +
        "\x02\x02\x02\u088E\u088F\t\x0E\x02\x02\u088F\xB7\x03\x02\x02\x02\u0890" +
        "\u0891\t\x0F\x02\x02\u0891\xB9\x03\x02\x02\x02\u0892\u0893\t\x10\x02\x02" +
        "\u0893\xBB\x03\x02\x02\x02\u0894\u0895\t\x11\x02\x02\u0895\xBD\x03\x02" +
        "\x02\x02\u0896\u0897\t\x12\x02\x02\u0897\xBF\x03\x02\x02\x02\u0898\u0899" +
        "\t\x13\x02\x02\u0899\xC1\x03\x02\x02\x02\u089A\u089D\x07\x9F\x02\x02\u089B" +
        "\u089C\x07^\x02\x02\u089C\u089E\x07L\x02\x02\u089D\u089B\x03\x02\x02\x02" +
        "\u089D\u089E\x03\x02\x02\x02\u089E\u08A5\x03\x02\x02\x02\u089F\u08A2\x07" +
        "\xB1\x02\x02\u08A0\u08A1\x07^\x02\x02\u08A1\u08A3\x07L\x02\x02\u08A2\u08A0" +
        "\x03\x02\x02\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A5\x03\x02\x02\x02" +
        "\u08A4\u089A\x03\x02\x02\x02\u08A4\u089F\x03\x02\x02\x02\u08A5\xC3\x03" +
        "\x02\x02\x02\u08A6\u08A7\t\x14\x02\x02\u08A7\xC5\x03\x02\x02\x02\u08A8" +
        "\u08A9\x05\xBA^\x02\u08A9\u08AA\x07^\x02\x02\u08AA\u08AB\x05\xECw\x02" +
        "\u08AB\u08AC\x07]\x02\x02\u08AC\u08AF\x03\x02\x02\x02\u08AD\u08AF\x07" +
        "n\x02\x02\u08AE\u08A8\x03\x02\x02\x02\u08AE\u08AD\x03\x02\x02\x02\u08AF" +
        "\xC7\x03\x02\x02\x02\u08B0\u08B1\x05\xBC_\x02\u08B1\u08B2\x07^\x02\x02" +
        "\u08B2\u08B3\x05\xECw\x02\u08B3\u08B8\x07]\x02\x02\u08B4\u08B5\x07\x85" +
        "\x02\x02\u08B5\u08B6\x05\u0122\x92\x02\u08B6\u08B7\x07]\x02\x02\u08B7" +
        "\u08B9\x03\x02\x02\x02\u08B8\u08B4\x03\x02\x02\x02\u08B8\u08B9\x03\x02" +
        "\x02\x02\u08B9\xC9\x03\x02\x02\x02\u08BA\u08BB\x05\xC0a\x02\u08BB\u08BC" +
        "\x07^\x02\x02\u08BC\u08BD\x05\xECw\x02\u08BD\u08C2\x07]\x02\x02\u08BE" +
        "\u08BF\x07\x85\x02\x02\u08BF\u08C0\x05\u0122\x92\x02\u08C0\u08C1\x07]" +
        "\x02\x02\u08C1\u08C3\x03\x02\x02\x02\u08C2\u08BE\x03\x02\x02\x02\u08C2" +
        "\u08C3\x03\x02\x02\x02\u08C3\xCB\x03\x02\x02\x02\u08C4\u08C5\x05\xBE`" +
        "\x02\u08C5\u08C8\x07^\x02\x02\u08C6\u08C9\x05\xECw\x02\u08C7\u08C9\x05" +
        "\xEAv\x02\u08C8\u08C6\x03\x02\x02\x02\u08C8\u08C7\x03\x02\x02\x02\u08C9" +
        "\u08CA\x03\x02\x02\x02\u08CA\u08CF\x07]\x02\x02\u08CB\u08CC\x07\x85\x02" +
        "\x02\u08CC\u08CD\x05\u0122\x92\x02\u08CD\u08CE\x07]\x02\x02\u08CE\u08D0" +
        "\x03\x02\x02\x02\u08CF\u08CB\x03\x02\x02\x02\u08CF\u08D0\x03\x02\x02\x02" +
        "\u08D0\xCD\x03\x02\x02\x02\u08D1\u08D5\x05\xD0i\x02\u08D2\u08D4\x05\xE8" +
        "u\x02\u08D3\u08D2\x03\x02\x02\x02\u08D4\u08D7\x03\x02\x02\x02\u08D5\u08D3" +
        "\x03\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6\xCF\x03\x02\x02\x02" +
        "\u08D7\u08D5\x03\x02\x02\x02\u08D8\u08D9\x05\xC4c\x02\u08D9\u08DD\x07" +
        "^\x02\x02\u08DA\u08DC\x07\x04\x02\x02\u08DB\u08DA\x03\x02\x02\x02\u08DC" +
        "\u08DF\x03\x02\x02\x02\u08DD\u08DB\x03\x02\x02\x02\u08DD\u08DE\x03\x02" +
        "\x02\x02\u08DE\u08E0\x03\x02\x02\x02\u08DF\u08DD\x03\x02\x02\x02\u08E0" +
        "\u08E1\x05\xECw\x02\u08E1\u08E2\x07]\x02\x02\u08E2\xD1\x03\x02\x02\x02" +
        "\u08E3\u08E7\x05\xD4k\x02\u08E4\u08E6\x05\xE8u\x02\u08E5\u08E4\x03\x02" +
        "\x02\x02\u08E6\u08E9\x03\x02\x02\x02\u08E7\u08E5\x03\x02\x02\x02\u08E7" +
        "\u08E8\x03\x02\x02\x02\u08E8\xD3\x03\x02\x02\x02\u08E9\u08E7\x03\x02\x02" +
        "\x02\u08EA\u08EB\x05\xC2b\x02\u08EB\u08EC\x07^\x02\x02\u08EC\u08ED\x05" +
        "\xECw\x02\u08ED\u08F2\x07]\x02\x02\u08EE\u08EF\x07\x85\x02\x02\u08EF\u08F0" +
        "\x05\u0122\x92\x02\u08F0\u08F1\x07]\x02\x02\u08F1\u08F3\x03\x02\x02\x02" +
        "\u08F2\u08EE\x03\x02\x02\x02\u08F2\u08F3\x03\x02\x02\x02\u08F3\xD5\x03" +
        "\x02\x02\x02\u08F4\u08F8\x05\xD8m\x02\u08F5\u08F7\x05\xDCo\x02\u08F6\u08F5" +
        "\x03\x02\x02\x02\u08F7\u08FA\x03\x02\x02\x02\u08F8\u08F6\x03\x02\x02\x02" +
        "\u08F8\u08F9\x03\x02\x02\x02\u08F9\u08FD\x03\x02\x02\x02\u08FA\u08F8\x03" +
        "\x02\x02\x02\u08FB\u08FC\x07r\x02\x02\u08FC\u08FE\x07\x87\x02\x02\u08FD" +
        "\u08FB\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\xD7\x03\x02\x02" +
        "\x02\u08FF\u0900\x05\xDAn\x02\u0900\u0904\x07^\x02\x02\u0901\u0903\x07" +
        "\x04\x02\x02\u0902\u0901\x03\x02\x02\x02\u0903\u0906\x03\x02\x02\x02\u0904" +
        "\u0902\x03\x02\x02\x02\u0904\u0905\x03\x02\x02\x02\u0905\u0907\x03\x02" +
        "\x02\x02\u0906\u0904\x03\x02\x02\x02\u0907\u0908\x05\xECw\x02\u0908\u0909" +
        "\x07]\x02\x02\u0909\xD9\x03\x02\x02\x02\u090A\u090D\x07\x9C\x02\x02\u090B" +
        "\u090E\x07J\x02\x02\u090C\u090E\x07\xC9\x02\x02\u090D\u090B\x03\x02\x02" +
        "\x02\u090D\u090C\x03\x02\x02\x02\u090D\u090E\x03\x02\x02\x02\u090E\u0919" +
        "\x03\x02\x02\x02\u090F\u0911\x07\xB0\x02\x02\u0910\u0912\x07J\x02\x02" +
        "\u0911\u0910\x03\x02\x02\x02\u0911\u0912\x03\x02\x02\x02\u0912\u0919\x03" +
        "\x02\x02\x02\u0913\u0915\x07\x9D\x02\x02\u0914\u0916\x07J\x02\x02\u0915" +
        "\u0914\x03\x02\x02\x02\u0915\u0916\x03\x02\x02\x02\u0916\u0919\x03\x02" +
        "\x02\x02\u0917\u0919\x07\x9E\x02\x02\u0918\u090A\x03\x02\x02\x02\u0918" +
        "\u090F\x03\x02\x02\x02\u0918\u0913\x03\x02\x02\x02\u0918\u0917\x03\x02" +
        "\x02\x02\u0919\xDB\x03\x02\x02\x02\u091A\u091B\x07\x84\x02\x02\u091B\u091C" +
        "\x07^\x02\x02\u091C\u091D\x05\xECw\x02\u091D\u091E\x07]\x02\x02\u091E" +
        "\u092C\x03\x02\x02\x02\u091F\u0920\t\x15\x02\x02\u0920\u0921\x07^\x02" +
        "\x02\u0921\u0922\x07p\x02\x02\u0922\u092C\x07]\x02\x02\u0923\u0927\t\x16" +
        "\x02\x02\u0924\u0926\v\x02\x02\x02\u0925\u0924\x03\x02\x02\x02\u0926\u0929" +
        "\x03\x02\x02\x02\u0927\u0928\x03\x02\x02\x02\u0927\u0925\x03\x02\x02\x02" +
        "\u0928\u092A\x03\x02\x02\x02\u0929\u0927\x03\x02\x02\x02\u092A\u092C\x07" +
        "]\x02\x02\u092B\u091A\x03\x02\x02\x02\u092B\u091F\x03\x02\x02\x02\u092B" +
        "\u0923\x03\x02\x02\x02\u092C\xDD\x03\x02\x02\x02\u092D\u092E\x07\x84\x02" +
        "\x02\u092E\u092F\x07^\x02\x02\u092F\u0930\x05\xECw\x02\u0930\u0931\x07" +
        "]\x02\x02\u0931\u093F\x03\x02\x02\x02\u0932\u0933\t\x15\x02\x02\u0933" +
        "\u0934\x07^\x02\x02\u0934\u0935\x07p\x02\x02\u0935\u093F\x07]\x02\x02" +
        "\u0936\u093A\t\x16\x02\x02\u0937\u0939\v\x02\x02\x02\u0938\u0937\x03\x02" +
        "\x02\x02\u0939\u093C\x03\x02\x02\x02\u093A\u093B\x03\x02\x02\x02\u093A" +
        "\u0938\x03\x02\x02\x02\u093B\u093D\x03\x02\x02\x02\u093C\u093A\x03\x02" +
        "\x02\x02\u093D\u093F\x07]\x02\x02\u093E\u092D\x03\x02\x02\x02\u093E\u0932" +
        "\x03\x02\x02\x02\u093E\u0936\x03\x02\x02\x02\u093F\xDF\x03\x02\x02\x02" +
        "\u0940\u0944\x05\xE2r\x02\u0941\u0943\x05\xE8u\x02\u0942\u0941\x03\x02" +
        "\x02\x02\u0943\u0946\x03\x02\x02\x02\u0944\u0942\x03\x02\x02\x02\u0944" +
        "\u0945\x03\x02\x02\x02\u0945\xE1\x03\x02\x02\x02\u0946\u0944\x03\x02\x02" +
        "\x02\u0947\u0948\x05\xE6t\x02\u0948\u0949\x07^\x02\x02\u0949\u094A\x05" +
        "\xECw\x02\u094A\u094F\x07]\x02\x02\u094B\u094C\x07\x85\x02\x02\u094C\u094D" +
        "\x05\u0122\x92\x02\u094D\u094E\x07]\x02\x02\u094E\u0950\x03\x02\x02\x02" +
        "\u094F\u094B\x03\x02\x02\x02\u094F\u0950\x03\x02\x02\x02\u0950\xE3\x03" +
        "\x02\x02\x02\u0951\u0954\x07\x90\x02\x02\u0952\u0953\x07^\x02\x02\u0953" +
        "\u0955\x07K\x02\x02\u0954\u0952\x03\x02\x02\x02\u0954\u0955\x03\x02\x02" +
        "\x02\u0955\u095C\x03\x02\x02\x02\u0956\u0959\x07\xA7\x02\x02\u0957\u0958" +
        "\x07^\x02\x02\u0958\u095A\x07K\x02\x02\u0959\u0957\x03\x02\x02\x02\u0959" +
        "\u095A\x03\x02\x02\x02\u095A\u095C\x03\x02\x02\x02\u095B\u0951\x03\x02" +
        "\x02\x02\u095B\u0956\x03\x02\x02\x02\u095C\xE5\x03\x02\x02\x02\u095D\u0960" +
        "\x07\x9B\x02\x02\u095E\u095F\x07^\x02\x02\u095F\u0961\x07K\x02\x02\u0960" +
        "\u095E\x03\x02\x02\x02\u0960\u0961\x03\x02\x02\x02\u0961\u0968\x03\x02" +
        "\x02\x02\u0962\u0965\x07\xAF\x02\x02\u0963\u0964\x07^\x02\x02\u0964\u0966" +
        "\x07K\x02\x02\u0965\u0963\x03\x02\x02\x02\u0965\u0966\x03\x02\x02\x02" +
        "\u0966\u0968\x03\x02\x02\x02\u0967\u095D\x03\x02\x02\x02\u0967\u0962\x03" +
        "\x02\x02\x02\u0968\xE7\x03\x02\x02\x02\u0969\u096A\x07V\x02\x02\u096A" +
        "\u096D\x05\u0118\x8D\x02\u096B\u096D\x07\x84\x02\x02\u096C\u0969\x03\x02" +
        "\x02\x02\u096C\u096B\x03\x02\x02\x02\u096D\u096E\x03\x02\x02\x02\u096E" +
        "\u0972\x07^\x02\x02\u096F\u0971\x07\x04\x02\x02\u0970\u096F\x03\x02\x02" +
        "\x02\u0971\u0974\x03\x02\x02\x02\u0972\u0970\x03\x02\x02\x02\u0972\u0973" +
        "\x03\x02\x02\x02\u0973\u0977\x03\x02\x02\x02\u0974\u0972\x03\x02\x02\x02" +
        "\u0975\u0978\x05\u0118\x8D\x02\u0976\u0978\x07r\x02\x02\u0977\u0975\x03" +
        "\x02\x02\x02\u0977\u0976\x03\x02\x02\x02\u0978\u0979\x03\x02\x02\x02\u0979" +
        "\u0977\x03\x02\x02\x02\u0979\u097A\x03\x02\x02\x02\u097A\u097B\x03\x02" +
        "\x02\x02\u097B\u0989\x07]\x02\x02\u097C\u097D\t\x15\x02\x02\u097D\u097E" +
        "\x07^\x02\x02\u097E\u097F\x07p\x02\x02\u097F\u0989\x07]\x02\x02\u0980" +
        "\u0984\t\x16\x02\x02\u0981\u0983\v\x02\x02\x02\u0982\u0981\x03\x02\x02" +
        "\x02\u0983\u0986\x03\x02\x02\x02\u0984\u0985\x03\x02\x02\x02\u0984\u0982" +
        "\x03\x02\x02\x02\u0985\u0987\x03\x02\x02\x02\u0986\u0984\x03\x02\x02\x02" +
        "\u0987\u0989\x07]\x02\x02\u0988\u096C\x03\x02\x02\x02\u0988\u097C\x03" +
        "\x02\x02\x02\u0988\u0980\x03\x02\x02\x02\u0989\xE9\x03\x02\x02\x02\u098A" +
        "\u098B\x07\xC8\x02\x02\u098B\u098C\x07a\x02\x02\u098C\u098D\x07p\x02\x02" +
        "\u098D\xEB\x03\x02\x02\x02\u098E\u098F\x07\xCB\x02\x02\u098F\xED\x03\x02" +
        "\x02\x02\u0990\u0991\x07\\\x02\x02\u0991\u0999\x07]\x02\x02\u0992\u0994" +
        "\x07\x04\x02\x02\u0993\u0992\x03\x02\x02\x02\u0994\u0997\x03\x02\x02\x02" +
        "\u0995\u0993\x03\x02\x02\x02\u0995\u0996\x03\x02\x02\x02\u0996\u0998\x03" +
        "\x02\x02\x02\u0997\u0995\x03\x02\x02\x02\u0998\u099A\x05\xF0y\x02\u0999" +
        "\u0995\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u09AF\x03\x02" +
        "\x02\x02\u099B\u099C\x07\\\x02\x02\u099C\u09A1\x05\u0118\x8D\x02\u099D" +
        "\u09A0\x07^\x02\x02\u099E\u09A0\x05\u0122\x92\x02\u099F\u099D\x03\x02" +
        "\x02\x02\u099F\u099E\x03\x02\x02\x02\u09A0\u09A3\x03\x02\x02\x02\u09A1" +
        "\u099F\x03\x02\x02\x02\u09A1\u09A2\x03\x02\x02\x02\u09A2\u09A4\x03\x02" +
        "\x02\x02\u09A3\u09A1\x03\x02\x02\x02\u09A4\u09AC\x07]\x02\x02\u09A5\u09A7" +
        "\x07\x04\x02\x02\u09A6\u09A5\x03\x02\x02\x02\u09A7\u09AA\x03\x02\x02\x02" +
        "\u09A8\u09A6\x03\x02\x02\x02\u09A8\u09A9\x03\x02\x02\x02\u09A9\u09AB\x03" +
        "\x02\x02\x02\u09AA\u09A8\x03\x02\x02\x02\u09AB\u09AD\x05\xF0y\x02\u09AC" +
        "\u09A8\x03\x02\x02\x02\u09AC\u09AD\x03\x02\x02\x02\u09AD\u09AF\x03\x02" +
        "\x02\x02\u09AE\u0990\x03\x02\x02\x02\u09AE\u099B\x03\x02\x02\x02\u09AF" +
        "\xEF\x03\x02\x02\x02\u09B0\u09B1\x07\\\x02\x02\u09B1\u09B6\x05\u0118\x8D" +
        "\x02\u09B2\u09B5\x07^\x02\x02\u09B3\u09B5\x05\u0122\x92\x02\u09B4\u09B2" +
        "\x03\x02\x02\x02\u09B4\u09B3\x03\x02\x02\x02\u09B5\u09B8\x03\x02\x02\x02" +
        "\u09B6\u09B4\x03\x02\x02\x02\u09B6\u09B7\x03\x02\x02\x02\u09B7\u09B9\x03" +
        "\x02\x02\x02\u09B8\u09B6\x03\x02\x02\x02\u09B9\u09BA\x07]\x02\x02\u09BA" +
        "\xF1\x03\x02\x02\x02\u09BB\u09BD\x07P\x02\x02\u09BC\u09BE\x05\u0118\x8D" +
        "\x02\u09BD\u09BC\x03\x02\x02\x02\u09BD\u09BE\x03\x02\x02\x02\u09BE\u09BF" +
        "\x03\x02\x02\x02\u09BF\u09C6\x07]\x02\x02\u09C0\u09C2\x07Q\x02\x02\u09C1" +
        "\u09C3\x05\u0118\x8D\x02\u09C2\u09C1\x03\x02\x02\x02\u09C2\u09C3\x03\x02" +
        "\x02\x02\u09C3\u09C4\x03\x02\x02\x02\u09C4\u09C6\x07]\x02\x02\u09C5\u09BB" +
        "\x03\x02\x02\x02\u09C5\u09C0\x03\x02\x02\x02\u09C6\xF3\x03\x02\x02\x02" +
        "\u09C7\u09CF\x07~\x02\x02\u09C8\u09CF\x07|\x02\x02\u09C9\u09CB\x07}\x02" +
        "\x02\u09CA\u09CC\x07s\x02\x02\u09CB\u09CA\x03\x02\x02\x02\u09CB\u09CC" +
        "\x03\x02\x02\x02\u09CC\u09CD\x03\x02\x02\x02\u09CD\u09CF\x07\x02\x02\x03" +
        "\u09CE\u09C7\x03\x02\x02\x02\u09CE\u09C8\x03\x02\x02\x02\u09CE\u09C9\x03" +
        "\x02\x02\x02\u09CF\xF5\x03\x02\x02\x02\u09D0\u09D2\x07\xA6\x02\x02\u09D1" +
        "\u09D3\x05\u0118\x8D\x02\u09D2\u09D1\x03\x02\x02\x02\u09D2\u09D3\x03\x02" +
        "\x02\x02\u09D3\u09E9\x03\x02\x02\x02\u09D4\u09DE\x05\u0118\x8D\x02\u09D5" +
        "\u09D9\x07r\x02\x02\u09D6\u09D8\x07\x04\x02\x02\u09D7\u09D6\x03\x02\x02" +
        "\x02\u09D8\u09DB\x03\x02\x02\x02\u09D9\u09D7\x03\x02\x02\x02\u09D9\u09DA" +
        "\x03\x02\x02\x02\u09DA\u09DD\x03\x02\x02\x02\u09DB\u09D9\x03\x02\x02\x02" +
        "\u09DC\u09D5\x03\x02\x02\x02\u09DD\u09E0\x03\x02\x02\x02\u09DE\u09DC\x03" +
        "\x02\x02\x02\u09DE\u09DF\x03\x02\x02\x02\u09DF\u09E4\x03\x02\x02\x02\u09E0" +
        "\u09DE\x03\x02\x02\x02\u09E1\u09E3\x07r\x02\x02\u09E2\u09E1\x03\x02\x02" +
        "\x02\u09E3\u09E6\x03\x02\x02\x02\u09E4\u09E2\x03\x02\x02\x02\u09E4\u09E5" +
        "\x03\x02\x02\x02\u09E5\u09E8\x03\x02\x02\x02\u09E6\u09E4\x03\x02\x02\x02" +
        "\u09E7\u09D4\x03\x02\x02\x02\u09E8\u09EB\x03\x02\x02\x02\u09E9\u09E7\x03" +
        "\x02\x02\x02\u09E9\u09EA\x03\x02\x02\x02\u09EA\u09EC\x03\x02\x02\x02\u09EB" +
        "\u09E9\x03\x02\x02\x02\u09EC\u09F8\x07]\x02\x02\u09ED\u09F3\x07\xA6\x02" +
        "\x02\u09EE\u09F2\x05\u0118\x8D\x02\u09EF\u09F2\x07r\x02\x02\u09F0\u09F2" +
        "\x07\x04\x02\x02\u09F1\u09EE\x03\x02\x02\x02\u09F1\u09EF\x03\x02\x02\x02" +
        "\u09F1\u09F0\x03\x02\x02\x02\u09F2\u09F5\x03\x02\x02\x02\u09F3\u09F1\x03" +
        "\x02\x02\x02\u09F3\u09F4\x03\x02\x02\x02\u09F4\u09F6\x03\x02\x02\x02\u09F5" +
        "\u09F3\x03\x02\x02\x02\u09F6\u09F8\x07\x02\x02\x03\u09F7\u09D0\x03\x02" +
        "\x02\x02\u09F7\u09ED\x03\x02\x02\x02\u09F8\xF7\x03\x02\x02\x02\u09F9\u09FE" +
        "\x07v\x02\x02\u09FA\u09FF\x05\u0118\x8D\x02\u09FB\u09FF\x07^\x02\x02\u09FC" +
        "\u09FF\x07\xCB\x02\x02\u09FD\u09FF\x07r\x02\x02\u09FE\u09FA\x03\x02\x02" +
        "\x02\u09FE\u09FB\x03\x02\x02\x02\u09FE\u09FC\x03\x02\x02\x02\u09FE\u09FD" +
        "\x03\x02\x02\x02\u09FF\u0A00\x03\x02\x02\x02\u0A00\u09FE\x03\x02\x02\x02" +
        "\u0A00\u0A01\x03\x02\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02\u0A10\x07" +
        "]\x02\x02\u0A03\u0A0B\x07v\x02\x02\u0A04\u0A0A\x05\u0118\x8D\x02\u0A05" +
        "\u0A0A\x07^\x02\x02\u0A06\u0A0A\x07\xCB\x02\x02\u0A07\u0A0A\x07r\x02\x02" +
        "\u0A08\u0A0A\x07\x04\x02\x02\u0A09\u0A04\x03\x02\x02\x02\u0A09\u0A05\x03" +
        "\x02\x02\x02\u0A09\u0A06\x03\x02\x02\x02\u0A09\u0A07\x03\x02\x02\x02\u0A09" +
        "\u0A08\x03\x02\x02\x02\u0A0A\u0A0D\x03\x02\x02\x02\u0A0B\u0A09\x03\x02" +
        "\x02\x02\u0A0B\u0A0C\x03\x02\x02\x02\u0A0C\u0A0E\x03\x02\x02\x02\u0A0D" +
        "\u0A0B\x03\x02\x02\x02\u0A0E\u0A10\x07\x02\x02\x03\u0A0F\u09F9\x03\x02" +
        "\x02\x02\u0A0F\u0A03\x03\x02\x02\x02\u0A10\xF9\x03\x02\x02\x02\u0A11\u0A12" +
        "\x07u\x02\x02\u0A12\u0A13\x05\u0118\x8D\x02\u0A13\u0A14\x07]\x02\x02\u0A14" +
        "\xFB\x03\x02\x02\x02\u0A15\u0A19\x07\x8D\x02\x02\u0A16\u0A1A\x05\u0118" +
        "\x8D\x02\u0A17\u0A1A\x07^\x02\x02\u0A18\u0A1A\x07r\x02\x02\u0A19\u0A16" +
        "\x03\x02\x02\x02\u0A19\u0A17\x03\x02\x02\x02\u0A19\u0A18\x03\x02\x02\x02" +
        "\u0A1A\u0A1B\x03\x02\x02\x02\u0A1B\u0A19\x03\x02\x02\x02\u0A1B\u0A1C\x03" +
        "\x02\x02\x02\u0A1C\u0A1D\x03\x02\x02\x02\u0A1D\u0A1F\x07]\x02\x02\u0A1E" +
        "\u0A20\x05\xFE\x80\x02\u0A1F\u0A1E\x03\x02\x02\x02\u0A1F\u0A20\x03\x02" +
        "\x02\x02\u0A20\xFD\x03\x02\x02\x02\u0A21\u0A25\x07\x8D\x02\x02\u0A22\u0A26" +
        "\x05\u0118\x8D\x02\u0A23\u0A26\x07^\x02\x02\u0A24\u0A26\x07r\x02\x02\u0A25" +
        "\u0A22\x03\x02\x02\x02\u0A25\u0A23\x03\x02\x02\x02\u0A25\u0A24\x03\x02" +
        "\x02\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27\u0A25\x03\x02\x02\x02\u0A27" +
        "\u0A28\x03\x02\x02\x02\u0A28\u0A29\x03\x02\x02\x02\u0A29\u0A2A\x07]\x02" +
        "\x02\u0A2A\xFF\x03\x02\x02\x02\u0A2B\u0A2D\x07T\x02\x02\u0A2C\u0A2E\x05" +
        "\u0118\x8D\x02\u0A2D\u0A2C\x03\x02\x02\x02\u0A2D\u0A2E\x03\x02\x02\x02" +
        "\u0A2E\u0A44\x03\x02\x02\x02\u0A2F\u0A39\x05\u0118\x8D\x02\u0A30\u0A34" +
        "\x07r\x02\x02\u0A31\u0A33\x07\x04\x02\x02\u0A32\u0A31\x03\x02\x02\x02" +
        "\u0A33\u0A36\x03\x02\x02\x02\u0A34\u0A32\x03\x02\x02\x02\u0A34\u0A35\x03" +
        "\x02\x02\x02\u0A35\u0A38\x03\x02\x02\x02\u0A36\u0A34\x03\x02\x02\x02\u0A37" +
        "\u0A30\x03\x02\x02\x02\u0A38\u0A3B\x03\x02\x02\x02\u0A39\u0A37\x03\x02" +
        "\x02\x02\u0A39\u0A3A\x03\x02\x02\x02\u0A3A\u0A3F\x03\x02\x02\x02\u0A3B" +
        "\u0A39\x03\x02\x02\x02\u0A3C\u0A3E\x07r\x02\x02\u0A3D\u0A3C\x03\x02\x02" +
        "\x02\u0A3E\u0A41\x03\x02\x02\x02\u0A3F\u0A3D\x03\x02\x02\x02\u0A3F\u0A40" +
        "\x03\x02\x02\x02\u0A40\u0A43\x03\x02\x02\x02\u0A41\u0A3F\x03\x02\x02\x02" +
        "\u0A42\u0A2F\x03\x02\x02\x02\u0A43\u0A46\x03\x02\x02\x02\u0A44\u0A42\x03" +
        "\x02\x02\x02\u0A44\u0A45\x03\x02\x02\x02\u0A45\u0A47\x03\x02\x02\x02\u0A46" +
        "\u0A44\x03\x02\x02\x02\u0A47\u0A4E\x07]\x02\x02\u0A48\u0A4A\x07T\x02\x02" +
        "\u0A49\u0A4B\x05\u0118\x8D\x02\u0A4A\u0A49\x03\x02\x02\x02\u0A4A\u0A4B" +
        "\x03\x02\x02\x02\u0A4B\u0A4C\x03\x02\x02\x02\u0A4C\u0A4E\x07\x02\x02\x03" +
        "\u0A4D\u0A2B\x03\x02\x02\x02\u0A4D\u0A48\x03\x02\x02\x02\u0A4E\u0101\x03" +
        "\x02\x02\x02\u0A4F\u0A51\x07U\x02\x02\u0A50\u0A52\n\x17\x02\x02\u0A51" +
        "\u0A50\x03\x02\x02\x02\u0A52\u0A53\x03\x02\x02\x02\u0A53\u0A51\x03\x02" +
        "\x02\x02\u0A53\u0A54\x03\x02\x02\x02\u0A54\u0A55\x03\x02\x02\x02\u0A55" +
        "\u0A56\x07]\x02\x02\u0A56\u0103\x03\x02\x02\x02\u0A57\u0A5A\x07[\x02\x02" +
        "\u0A58\u0A5B\x05\u0118\x8D\x02\u0A59\u0A5B\x07r\x02\x02\u0A5A\u0A58\x03" +
        "\x02\x02\x02\u0A5A\u0A59\x03\x02\x02\x02\u0A5B\u0A5C\x03\x02\x02\x02\u0A5C" +
        "\u0A5A\x03\x02\x02\x02\u0A5C\u0A5D\x03\x02\x02\x02\u0A5D\u0A5E\x03\x02" +
        "\x02\x02\u0A5E\u0A64\x07]\x02\x02\u0A5F\u0A60\x07[\x02\x02\u0A60\u0A61" +
        "\x05\u0118\x8D\x02\u0A61\u0A62\x07\x02\x02\x03\u0A62\u0A64\x03\x02\x02" +
        "\x02\u0A63\u0A57\x03\x02\x02\x02\u0A63\u0A5F\x03\x02\x02\x02\u0A64\u0105" +
        "\x03\x02\x02\x02\u0A65\u0A66\x07\x81\x02\x02\u0A66\u0A67\x05\u0118\x8D" +
        "\x02\u0A67\u0A68\x07]\x02\x02\u0A68\u0A6E\x03\x02\x02\x02\u0A69\u0A6A" +
        "\x07\x82\x02\x02\u0A6A\u0A6B\x05\u0118\x8D\x02\u0A6B\u0A6C\x07]\x02\x02" +
        "\u0A6C\u0A6E\x03\x02\x02\x02\u0A6D\u0A65\x03\x02\x02\x02\u0A6D\u0A69\x03" +
        "\x02\x02\x02\u0A6E\u0107\x03\x02\x02\x02\u0A6F\u0A70\x07y\x02\x02\u0A70" +
        "\u0A71\x07^\x02\x02\u0A71\u0A72\x07p\x02\x02\u0A72\u0A79\x07]\x02\x02" +
        "\u0A73\u0A74\x07y\x02\x02\u0A74\u0A75\x07^\x02\x02\u0A75\u0A76\x05\u0118";
    bitmarkParser._serializedATNSegment5 = "\x8D\x02\u0A76\u0A77\x07]\x02\x02\u0A77\u0A79\x03\x02\x02\x02\u0A78\u0A6F" +
        "\x03\x02\x02\x02\u0A78\u0A73\x03\x02\x02\x02\u0A79\u0109\x03\x02\x02\x02" +
        "\u0A7A\u0A7B\x07\x8B\x02\x02\u0A7B\u0A7C\x05\u0118\x8D\x02\u0A7C\u0A7D" +
        "\x07]\x02\x02\u0A7D\u010B\x03\x02\x02\x02\u0A7E\u0A7F\x07\x8C\x02\x02" +
        "\u0A7F\u0A80\x05\u0118\x8D\x02\u0A80\u0A81\x07]\x02\x02\u0A81\u010D\x03" +
        "\x02\x02\x02\u0A82\u0A8C\x05\u0110\x89\x02\u0A83\u0A85\x07r\x02\x02\u0A84" +
        "\u0A83\x03\x02\x02\x02\u0A85\u0A88\x03\x02\x02\x02\u0A86\u0A84\x03\x02" +
        "\x02\x02\u0A86\u0A87\x03\x02\x02\x02\u0A87\u0A89\x03\x02\x02\x02\u0A88" +
        "\u0A86\x03\x02\x02\x02\u0A89\u0A8B\x05\u0110\x89\x02\u0A8A\u0A86\x03\x02" +
        "\x02\x02\u0A8B\u0A8E\x03\x02\x02\x02\u0A8C\u0A8A\x03\x02\x02\x02\u0A8C" +
        "\u0A8D\x03\x02\x02\x02\u0A8D\u010F\x03\x02\x02\x02\u0A8E\u0A8C\x03\x02" +
        "\x02\x02\u0A8F\u0A90\x07V\x02\x02\u0A90\u0A91\x05\u0118\x8D\x02\u0A91" +
        "\u0A92\t\x18\x02\x02\u0A92\u0A98\x05\u0118\x8D\x02\u0A93\u0A97\x07r\x02" +
        "\x02\u0A94\u0A97\x07^\x02\x02\u0A95\u0A97\x05\u0118\x8D\x02\u0A96\u0A93" +
        "\x03\x02\x02\x02\u0A96\u0A94\x03\x02\x02\x02\u0A96\u0A95\x03\x02\x02\x02" +
        "\u0A97\u0A9A\x03\x02\x02\x02\u0A98\u0A96\x03\x02\x02\x02\u0A98\u0A99\x03" +
        "\x02\x02\x02\u0A99\u0A9B\x03\x02\x02\x02\u0A9A\u0A98\x03\x02\x02\x02\u0A9B" +
        "\u0A9C\x07]\x02\x02\u0A9C\u0AA6\x03\x02\x02\x02\u0A9D\u0AA1\x07\x8A\x02" +
        "\x02\u0A9E\u0AA0\v\x02\x02\x02\u0A9F\u0A9E\x03\x02\x02\x02\u0AA0\u0AA3" +
        "\x03\x02\x02\x02\u0AA1\u0AA2\x03\x02\x02\x02\u0AA1\u0A9F\x03\x02\x02\x02" +
        "\u0AA2\u0AA4\x03\x02\x02\x02\u0AA3\u0AA1\x03\x02\x02\x02\u0AA4\u0AA6\x07" +
        "]\x02\x02\u0AA5\u0A8F\x03\x02\x02\x02\u0AA5\u0A9D\x03\x02\x02\x02\u0AA6" +
        "\u0111\x03\x02\x02\x02\u0AA7\u0AAB\x07M\x02\x02\u0AA8\u0AAC\x05\u0118" +
        "\x8D\x02\u0AA9\u0AAC\x07^\x02\x02\u0AAA\u0AAC\x07r\x02\x02\u0AAB\u0AA8" +
        "\x03\x02\x02\x02\u0AAB\u0AA9\x03\x02\x02\x02\u0AAB\u0AAA\x03\x02\x02\x02" +
        "\u0AAC\u0AAD\x03\x02\x02\x02\u0AAD\u0AAB\x03\x02\x02\x02\u0AAD\u0AAE\x03" +
        "\x02\x02\x02\u0AAE\u0AAF\x03\x02\x02\x02\u0AAF\u0ABB\x07]\x02\x02\u0AB0" +
        "\u0AB6\x07M\x02\x02\u0AB1\u0AB5\x05\u0118\x8D\x02\u0AB2\u0AB5\x07^\x02" +
        "\x02\u0AB3\u0AB5\x07r\x02\x02\u0AB4\u0AB1\x03\x02\x02\x02\u0AB4\u0AB2" +
        "\x03\x02\x02\x02\u0AB4\u0AB3\x03\x02\x02\x02\u0AB5\u0AB8\x03\x02\x02\x02" +
        "\u0AB6\u0AB4\x03\x02\x02\x02\u0AB6\u0AB7\x03\x02\x02\x02\u0AB7\u0AB9\x03" +
        "\x02\x02\x02\u0AB8\u0AB6\x03\x02\x02\x02\u0AB9\u0ABB\x07\x02\x02\x03\u0ABA" +
        "\u0AA7\x03\x02\x02\x02\u0ABA\u0AB0\x03\x02\x02\x02\u0ABB\u0113\x03\x02" +
        "\x02\x02\u0ABC\u0ABE\x07R\x02\x02\u0ABD\u0ABF\x05\u0118\x8D\x02\u0ABE" +
        "\u0ABD\x03\x02\x02\x02\u0ABE\u0ABF\x03\x02\x02\x02\u0ABF\u0AC0\x03\x02" +
        "\x02\x02\u0AC0\u0AC1\x07]\x02\x02\u0AC1\u0115\x03\x02\x02\x02\u0AC2\u0AC4" +
        "\x05\u0118\x8D\x02\u0AC3\u0AC5\x07r\x02\x02\u0AC4\u0AC3\x03\x02\x02\x02" +
        "\u0AC4\u0AC5\x03\x02\x02\x02\u0AC5\u0AC7\x03\x02\x02\x02\u0AC6\u0AC2\x03" +
        "\x02\x02\x02\u0AC7\u0AC8\x03\x02\x02\x02\u0AC8\u0AC6\x03\x02\x02\x02\u0AC8" +
        "\u0AC9\x03\x02\x02\x02\u0AC9\u0117\x03\x02\x02\x02\u0ACA\u0AD1\x07q\x02" +
        "\x02\u0ACB\u0ACD\x07\x04\x02\x02\u0ACC\u0ACB\x03\x02\x02\x02\u0ACD\u0ACE" +
        "\x03\x02\x02\x02\u0ACE\u0ACC\x03\x02\x02\x02\u0ACE\u0ACF\x03\x02\x02\x02" +
        "\u0ACF\u0AD0\x03\x02\x02\x02\u0AD0\u0AD2\x07p\x02\x02\u0AD1\u0ACC\x03" +
        "\x02\x02\x02\u0AD1\u0AD2\x03\x02\x02\x02\u0AD2\u0AF9\x03\x02\x02\x02\u0AD3" +
        "\u0ADA\x05\u0122\x92\x02\u0AD4\u0AD6\x07\x04\x02\x02\u0AD5\u0AD4\x03\x02" +
        "\x02\x02\u0AD6\u0AD7\x03\x02\x02\x02\u0AD7\u0AD5\x03\x02\x02\x02\u0AD7" +
        "\u0AD8\x03\x02\x02\x02\u0AD8\u0AD9\x03\x02\x02\x02\u0AD9\u0ADB\x07p\x02" +
        "\x02\u0ADA\u0AD5\x03\x02\x02\x02\u0ADA\u0ADB\x03\x02\x02\x02\u0ADB\u0AF9" +
        "\x03\x02\x02\x02\u0ADC\u0AF9\x07p\x02\x02\u0ADD\u0ADE\x07Y\x02\x02\u0ADE" +
        "\u0ADF\x05\u0118\x8D\x02\u0ADF\u0AE0\x07]\x02\x02\u0AE0\u0AF9\x03\x02" +
        "\x02\x02\u0AE1\u0AE3\x07\x04\x02\x02\u0AE2\u0AE1\x03\x02\x02\x02\u0AE3" +
        "\u0AE6\x03\x02\x02\x02\u0AE4\u0AE2\x03\x02\x02\x02\u0AE4\u0AE5\x03\x02" +
        "\x02\x02\u0AE5\u0AE7\x03\x02\x02\x02\u0AE6\u0AE4\x03\x02\x02\x02\u0AE7" +
        "\u0AEB\x07^\x02\x02\u0AE8\u0AEA\x07\x04\x02\x02\u0AE9\u0AE8\x03\x02\x02" +
        "\x02\u0AEA\u0AED\x03\x02\x02\x02\u0AEB\u0AE9\x03\x02\x02\x02\u0AEB\u0AEC" +
        "\x03\x02\x02\x02\u0AEC\u0AF9\x03\x02\x02\x02\u0AED\u0AEB\x03\x02\x02\x02" +
        "\u0AEE\u0AF2\x07_\x02\x02\u0AEF\u0AF1\x07\x04\x02\x02\u0AF0\u0AEF\x03" +
        "\x02\x02\x02\u0AF1\u0AF4\x03\x02\x02\x02\u0AF2\u0AF0\x03\x02\x02\x02\u0AF2" +
        "\u0AF3\x03\x02\x02\x02\u0AF3\u0AF9\x03\x02\x02\x02\u0AF4\u0AF2\x03\x02" +
        "\x02\x02\u0AF5\u0AF9\x07g\x02\x02\u0AF6\u0AF9\x07\xCB\x02\x02\u0AF7\u0AF9" +
        "\x05\u011C\x8F\x02\u0AF8\u0ACA\x03\x02\x02\x02\u0AF8\u0AD3\x03\x02\x02" +
        "\x02\u0AF8\u0ADC\x03\x02\x02\x02\u0AF8\u0ADD\x03\x02\x02\x02\u0AF8\u0AE4" +
        "\x03\x02\x02\x02\u0AF8\u0AEE\x03\x02\x02\x02\u0AF8\u0AF5\x03\x02\x02\x02" +
        "\u0AF8\u0AF6\x03\x02\x02\x02\u0AF8\u0AF7\x03\x02\x02\x02\u0AF9\u0119\x03" +
        "\x02\x02\x02\u0AFA\u0AFB\x07m\x02\x02\u0AFB\u011B\x03\x02\x02\x02\u0AFC" +
        "\u0AFE\x07O\x02\x02\u0AFD\u0AFF\x05\u0118\x8D\x02\u0AFE\u0AFD\x03\x02" +
        "\x02\x02\u0AFF\u0B00\x03\x02\x02\x02\u0B00\u0AFE\x03\x02\x02\x02\u0B00" +
        "\u0B01\x03\x02\x02\x02\u0B01\u0B03\x03\x02\x02\x02\u0B02\u0B04\x07]\x02" +
        "\x02\u0B03\u0B02\x03\x02\x02\x02\u0B03\u0B04\x03\x02\x02\x02\u0B04\u011D" +
        "\x03\x02\x02\x02\u0B05\u0B06\x07]\x02\x02\u0B06\u011F\x03\x02\x02\x02" +
        "\u0B07\u0B08\t\x19\x02\x02\u0B08\u0121\x03\x02\x02\x02\u0B09\u0B25\x05" +
        "\u0126\x94\x02\u0B0A\u0B25\x07_\x02\x02\u0B0B\u0B0C\x07c\x02\x02\u0B0C" +
        "\u0B25\n\x1A\x02\x02\u0B0D\u0B0E\x07d\x02\x02\u0B0E\u0B25\n\x1B\x02\x02" +
        "\u0B0F\u0B25\x07f\x02\x02\u0B10\u0B25\x07e\x02\x02\u0B11\u0B25\x07\x95" +
        "\x02\x02\u0B12\u0B25\x07\xAA\x02\x02\u0B13\u0B25\x07\x96\x02\x02\u0B14" +
        "\u0B25\x07\xAB\x02\x02\u0B15\u0B25\x07\x98\x02\x02\u0B16\u0B25\x07\xAD" +
        "\x02\x02\u0B17\u0B25\x07\x91\x02\x02\u0B18\u0B25\x07\xA8\x02\x02\u0B19" +
        "\u0B25\x07\x90\x02\x02\u0B1A\u0B25\x07\xA7\x02\x02\u0B1B\u0B25\x07\x94" +
        "\x02\x02\u0B1C\u0B25\x07\xA9\x02\x02\u0B1D\u0B25\x07\x97\x02\x02\u0B1E" +
        "\u0B25\x07\xAC\x02\x02\u0B1F\u0B25\x07\x99\x02\x02\u0B20\u0B25\x07\xAE" +
        "\x02\x02\u0B21\u0B25\x07\xB7\x02\x02\u0B22\u0B25\x07\xB8\x02\x02\u0B23" +
        "\u0B25\x07l\x02\x02\u0B24\u0B09\x03\x02\x02\x02\u0B24\u0B0A\x03\x02\x02" +
        "\x02\u0B24\u0B0B\x03\x02\x02\x02\u0B24\u0B0D\x03\x02\x02\x02\u0B24\u0B0F" +
        "\x03\x02\x02\x02\u0B24\u0B10\x03\x02\x02\x02\u0B24\u0B11\x03\x02\x02\x02" +
        "\u0B24\u0B12\x03\x02\x02\x02\u0B24\u0B13\x03\x02\x02\x02\u0B24\u0B14\x03" +
        "\x02\x02\x02\u0B24\u0B15\x03\x02\x02\x02\u0B24\u0B16\x03\x02\x02\x02\u0B24" +
        "\u0B17\x03\x02\x02\x02\u0B24\u0B18\x03\x02\x02\x02\u0B24\u0B19\x03\x02" +
        "\x02\x02\u0B24\u0B1A\x03\x02\x02\x02\u0B24\u0B1B\x03\x02\x02\x02\u0B24" +
        "\u0B1C\x03\x02\x02\x02\u0B24\u0B1D\x03\x02\x02\x02\u0B24\u0B1E\x03\x02" +
        "\x02\x02\u0B24\u0B1F\x03\x02\x02\x02\u0B24\u0B20\x03\x02\x02\x02\u0B24" +
        "\u0B21\x03\x02\x02\x02\u0B24\u0B22\x03\x02\x02\x02\u0B24\u0B23\x03\x02" +
        "\x02\x02\u0B25\u0B26\x03\x02\x02\x02\u0B26\u0B24\x03\x02\x02\x02\u0B26" +
        "\u0B27\x03\x02\x02\x02\u0B27\u0123\x03\x02\x02\x02\u0B28\u0B29\x07\x04" +
        "\x02\x02\u0B29\u0125\x03\x02\x02\x02\u0B2A\u0B2B\x07s\x02\x02\u0B2B\u0127" +
        "\x03\x02\x02\x02\u018D\u012C\u0132\u0137\u013C\u0143\u0185\u0189\u018F" +
        "\u0195\u0199\u019F\u01A5\u01AB\u01B1\u01B6\u01BD\u01C4\u01CB\u01D1\u01D7" +
        "\u01DF\u01E8\u01EC\u01F5\u01F7\u01FC\u0202\u020B\u020D\u0212\u0218\u0221" +
        "\u0228\u022D\u0235\u023C\u0241\u0249\u0250\u0255\u025D\u0264\u0269\u0271" +
        "\u0278\u027D\u0285\u028C\u0291\u0299\u02A0\u02A5\u02AD\u02B4\u02B9\u02C1" +
        "\u02C8\u02CD\u02D5\u02DC\u02E1\u02E9\u02F0\u02F5\u02FD\u0304\u0309\u0311" +
        "\u0318\u031D\u0325\u032C\u0331\u0339\u0340\u0345\u034D\u0354\u0359\u037A" +
        "\u0382\u0384\u038B\u0390\u0396\u039C\u03A1\u03A7\u03AC\u03B2\u03BE\u03C3" +
        "\u03C9\u03CF\u03D5\u03DC\u03E2\u03E5\u03E9\u03ED\u03EF\u03FF\u0404\u040A" +
        "\u0410\u0417\u041D\u0420\u0426\u042F\u0434\u043C\u0441\u0446\u044C\u0453" +
        "\u0459\u045C\u0462\u0467\u0469\u0470\u0477\u047E\u0486\u048B\u0491\u0498" +
        "\u049E\u04A1\u04AB\u04B0\u04B6\u04BD\u04C3\u04C6\u04D0\u04D5\u04DB\u04E2" +
        "\u04E8\u04EB\u04F3\u04FA\u04FF\u0503\u0508\u050F\u0515\u0518\u0520\u0526" +
        "\u052B\u052F\u0534\u053B\u0541\u0544\u054C\u0553\u0558\u0560\u0567\u056C" +
        "\u0574\u057B\u0580\u0588\u058F\u0594\u059C\u05A3\u05A8\u05B0\u05B7\u05BC" +
        "\u05C4\u05CB\u05D0\u05D8\u05DF\u05E4\u05EC\u05F3\u05F8\u0600\u0607\u060C" +
        "\u0614\u061B\u0620\u0628\u062F\u0634\u063C\u0643\u0648\u0650\u0657\u065C" +
        "\u0664\u066B\u0670\u0678\u067F\u0684\u068C\u0693\u0698\u06A0\u06A7\u06AC" +
        "\u06B4\u06BB\u06C0\u06C8\u06CF\u06D4\u06DC\u06E3\u06E8\u06F0\u06F7\u06FC" +
        "\u0704\u070B\u0710\u071C\u0721\u0727\u072E\u0734\u0737\u0740\u0742\u074A" +
        "\u0751\u0756\u075F\u0763\u0769\u0770\u0776\u0779\u077F\u0787\u078E\u0793" +
        "\u0798\u079D\u07A3\u07A7\u07B1\u07B8\u07BD\u07C6\u07CA\u07D4\u07DB\u07E0" +
        "\u07E9\u07ED\u07F7\u07FE\u0803\u080C\u0810\u081A\u0821\u0826\u082E\u0834" +
        "\u0838\u083E\u0845\u084B\u084E\u0853\u085C\u0861\u0863\u0871\u0876\u087A" +
        "\u087E\u0881\u0886\u089D\u08A2\u08A4\u08AE\u08B8\u08C2\u08C8\u08CF\u08D5" +
        "\u08DD\u08E7\u08F2\u08F8\u08FD\u0904\u090D\u0911\u0915\u0918\u0927\u092B" +
        "\u093A\u093E\u0944\u094F\u0954\u0959\u095B\u0960\u0965\u0967\u096C\u0972" +
        "\u0977\u0979\u0984\u0988\u0995\u0999\u099F\u09A1\u09A8\u09AC\u09AE\u09B4" +
        "\u09B6\u09BD\u09C2\u09C5\u09CB\u09CE\u09D2\u09D9\u09DE\u09E4\u09E9\u09F1" +
        "\u09F3\u09F7\u09FE\u0A00\u0A09\u0A0B\u0A0F\u0A19\u0A1B\u0A1F\u0A25\u0A27" +
        "\u0A2D\u0A34\u0A39\u0A3F\u0A44\u0A4A\u0A4D\u0A53\u0A5A\u0A5C\u0A63\u0A6D" +
        "\u0A78\u0A86\u0A8C\u0A96\u0A98\u0AA1\u0AA5\u0AAB\u0AAD\u0AB4\u0AB6\u0ABA" +
        "\u0ABE\u0AC4\u0AC8\u0ACE\u0AD1\u0AD7\u0ADA\u0AE4\u0AEB\u0AF2\u0AF8\u0B00" +
        "\u0B03\u0B24\u0B26";
    bitmarkParser._serializedATN = Utils.join([
        bitmarkParser._serializedATNSegment0,
        bitmarkParser._serializedATNSegment1,
        bitmarkParser._serializedATNSegment2,
        bitmarkParser._serializedATNSegment3,
        bitmarkParser._serializedATNSegment4,
        bitmarkParser._serializedATNSegment5,
    ], "");
    return bitmarkParser;
})();
export { bitmarkParser };
export class BitmarkContext extends ParserRuleContext {
    EOF() { return this.getToken(bitmarkParser.EOF, 0); }
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bitmark; }
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
    get ruleIndex() { return bitmarkParser.RULE_bitmark_; }
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
    essay() {
        return this.tryGetRuleContext(0, EssayContext);
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
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    details() {
        return this.tryGetRuleContext(0, DetailsContext);
    }
    buttoncopytext() {
        return this.tryGetRuleContext(0, ButtoncopytextContext);
    }
    wbtcontinue() {
        return this.tryGetRuleContext(0, WbtcontinueContext);
    }
    learningpathdetails() {
        return this.tryGetRuleContext(0, LearningpathdetailsContext);
    }
    note() {
        return this.tryGetRuleContext(0, NoteContext);
    }
    info() {
        return this.tryGetRuleContext(0, InfoContext);
    }
    warning() {
        return this.tryGetRuleContext(0, WarningContext);
    }
    remark() {
        return this.tryGetRuleContext(0, RemarkContext);
    }
    hintbit() {
        return this.tryGetRuleContext(0, HintbitContext);
    }
    help() {
        return this.tryGetRuleContext(0, HelpContext);
    }
    danger() {
        return this.tryGetRuleContext(0, DangerContext);
    }
    bug() {
        return this.tryGetRuleContext(0, BugContext);
    }
    sidenote() {
        return this.tryGetRuleContext(0, SidenoteContext);
    }
    stickynote() {
        return this.tryGetRuleContext(0, StickynoteContext);
    }
    quote() {
        return this.tryGetRuleContext(0, QuoteContext);
    }
    footnote() {
        return this.tryGetRuleContext(0, FootnoteContext);
    }
    examplebit() {
        return this.tryGetRuleContext(0, ExamplebitContext);
    }
    page() {
        return this.tryGetRuleContext(0, PageContext);
    }
    message() {
        return this.tryGetRuleContext(0, MessageContext);
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
    vendor_padlet_embed() {
        return this.tryGetRuleContext(0, Vendor_padlet_embedContext);
    }
    scorm() {
        return this.tryGetRuleContext(0, ScormContext);
    }
    learning_path_lti() {
        return this.tryGetRuleContext(0, Learning_path_ltiContext);
    }
    learning_path_step() {
        return this.tryGetRuleContext(0, Learning_path_stepContext);
    }
    learning_path_book() {
        return this.tryGetRuleContext(0, Learning_path_bookContext);
    }
    learning_path_sign() {
        return this.tryGetRuleContext(0, Learning_path_signContext);
    }
    learning_path_video_call() {
        return this.tryGetRuleContext(0, Learning_path_video_callContext);
    }
    learning_path_learning_goal() {
        return this.tryGetRuleContext(0, Learning_path_learning_goalContext);
    }
    learning_path_closing() {
        return this.tryGetRuleContext(0, Learning_path_closingContext);
    }
    learning_path_feedback() {
        return this.tryGetRuleContext(0, Learning_path_feedbackContext);
    }
    learning_path_bot_training() {
        return this.tryGetRuleContext(0, Learning_path_bot_trainingContext);
    }
    learning_path_external_link() {
        return this.tryGetRuleContext(0, Learning_path_external_linkContext);
    }
    learning_path_classroom_training() {
        return this.tryGetRuleContext(0, Learning_path_classroom_trainingContext);
    }
    learning_path_classroom_event() {
        return this.tryGetRuleContext(0, Learning_path_classroom_eventContext);
    }
    bot_action_send() {
        return this.tryGetRuleContext(0, Bot_action_sendContext);
    }
    bot_action_announce() {
        return this.tryGetRuleContext(0, Bot_action_announceContext);
    }
    bot_action_save() {
        return this.tryGetRuleContext(0, Bot_action_saveContext);
    }
    bot_action_remind() {
        return this.tryGetRuleContext(0, Bot_action_remindContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bit; }
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
    BitBook() { return this.getToken(bitmarkParser.BitBook, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    format() {
        return this.tryGetRuleContext(0, FormatContext);
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_book; }
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
    BitChapter() { return this.getToken(bitmarkParser.BitChapter, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    format() {
        return this.tryGetRuleContext(0, FormatContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    anchor() {
        return this.tryGetRuleContext(0, AnchorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_chapter; }
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
export class TocContext extends ParserRuleContext {
    BitToc() { return this.getToken(bitmarkParser.BitToc, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_toc; }
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
    BitSummary() { return this.getToken(bitmarkParser.BitSummary, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    title_etc() {
        return this.getRuleContext(0, Title_etcContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_summary; }
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
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    BitIntlink() { return this.tryGetToken(bitmarkParser.BitIntlink, 0); }
    BitIntRef() { return this.tryGetToken(bitmarkParser.BitIntRef, 0); }
    bitElem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BitElemContext);
        }
        else {
            return this.getRuleContext(i, BitElemContext);
        }
    }
    BitmarkMinus() { return this.tryGetToken(bitmarkParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(bitmarkParser.BitmarkPlus, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_internal_link; }
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
    BitAlias() { return this.getToken(bitmarkParser.BitAlias, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    angleref() {
        return this.getRuleContext(0, AnglerefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bit_alias; }
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
    title(i) {
        if (i === undefined) {
            return this.getRuleContexts(TitleContext);
        }
        else {
            return this.getRuleContext(i, TitleContext);
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
    angleref(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnglerefContext);
        }
        else {
            return this.getRuleContext(i, AnglerefContext);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_title_etc; }
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
    BitGroups() { return this.getToken(bitmarkParser.BitGroups, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    lines(i) {
        if (i === undefined) {
            return this.getRuleContexts(LinesContext);
        }
        else {
            return this.getRuleContext(i, LinesContext);
        }
    }
    OPR(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.OPR);
        }
        else {
            return this.getToken(bitmarkParser.OPR, i);
        }
    }
    OPHASH(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.OPHASH);
        }
        else {
            return this.getToken(bitmarkParser.OPHASH, i);
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
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_group_born; }
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
    BitGroupt() { return this.getToken(bitmarkParser.BitGroupt, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    lines(i) {
        if (i === undefined) {
            return this.getRuleContexts(LinesContext);
        }
        else {
            return this.getRuleContext(i, LinesContext);
        }
    }
    OPR(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.OPR);
        }
        else {
            return this.getToken(bitmarkParser.OPR, i);
        }
    }
    OPHASH(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.OPHASH);
        }
        else {
            return this.getToken(bitmarkParser.OPHASH, i);
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
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_group_died; }
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
export class Learning_path_ltiContext extends ParserRuleContext {
    BitLearningPathLti() { return this.getToken(bitmarkParser.BitLearningPathLti, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_lti; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_lti) {
            listener.enterLearning_path_lti(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_lti) {
            listener.exitLearning_path_lti(this);
        }
    }
}
export class Learning_path_stepContext extends ParserRuleContext {
    BitLearningPathStep() { return this.getToken(bitmarkParser.BitLearningPathStep, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_step; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_step) {
            listener.enterLearning_path_step(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_step) {
            listener.exitLearning_path_step(this);
        }
    }
}
export class Learning_path_bookContext extends ParserRuleContext {
    BitLearningPathBook() { return this.getToken(bitmarkParser.BitLearningPathBook, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_book; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_book) {
            listener.enterLearning_path_book(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_book) {
            listener.exitLearning_path_book(this);
        }
    }
}
export class Learning_path_signContext extends ParserRuleContext {
    BitLearningPathSign() { return this.getToken(bitmarkParser.BitLearningPathSign, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_sign; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_sign) {
            listener.enterLearning_path_sign(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_sign) {
            listener.exitLearning_path_sign(this);
        }
    }
}
export class Learning_path_video_callContext extends ParserRuleContext {
    BitLearningPathVideoCall() { return this.getToken(bitmarkParser.BitLearningPathVideoCall, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_video_call; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_video_call) {
            listener.enterLearning_path_video_call(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_video_call) {
            listener.exitLearning_path_video_call(this);
        }
    }
}
export class Learning_path_learning_goalContext extends ParserRuleContext {
    BitLearningPathLearningGoal() { return this.getToken(bitmarkParser.BitLearningPathLearningGoal, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_learning_goal; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_learning_goal) {
            listener.enterLearning_path_learning_goal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_learning_goal) {
            listener.exitLearning_path_learning_goal(this);
        }
    }
}
export class Learning_path_closingContext extends ParserRuleContext {
    BitLearningPathClosing() { return this.getToken(bitmarkParser.BitLearningPathClosing, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_closing; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_closing) {
            listener.enterLearning_path_closing(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_closing) {
            listener.exitLearning_path_closing(this);
        }
    }
}
export class Learning_path_feedbackContext extends ParserRuleContext {
    BitLearningPathFeedback() { return this.getToken(bitmarkParser.BitLearningPathFeedback, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_feedback; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_feedback) {
            listener.enterLearning_path_feedback(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_feedback) {
            listener.exitLearning_path_feedback(this);
        }
    }
}
export class Learning_path_bot_trainingContext extends ParserRuleContext {
    BitLearningPathBotTraining() { return this.getToken(bitmarkParser.BitLearningPathBotTraining, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_bot_training; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_bot_training) {
            listener.enterLearning_path_bot_training(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_bot_training) {
            listener.exitLearning_path_bot_training(this);
        }
    }
}
export class Learning_path_external_linkContext extends ParserRuleContext {
    BitLearningPathExternalLink() { return this.getToken(bitmarkParser.BitLearningPathExternalLink, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_external_link; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_external_link) {
            listener.enterLearning_path_external_link(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_external_link) {
            listener.exitLearning_path_external_link(this);
        }
    }
}
export class Learning_path_classroom_trainingContext extends ParserRuleContext {
    BitLearningPathClassroomTraining() { return this.getToken(bitmarkParser.BitLearningPathClassroomTraining, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_classroom_training; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_classroom_training) {
            listener.enterLearning_path_classroom_training(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_classroom_training) {
            listener.exitLearning_path_classroom_training(this);
        }
    }
}
export class Learning_path_classroom_eventContext extends ParserRuleContext {
    BitLearningPathClassroomEvent() { return this.getToken(bitmarkParser.BitLearningPathClassroomEvent, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learning_path_classroom_event; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearning_path_classroom_event) {
            listener.enterLearning_path_classroom_event(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearning_path_classroom_event) {
            listener.exitLearning_path_classroom_event(this);
        }
    }
}
export class Bot_action_sendContext extends ParserRuleContext {
    BitBotActionSend() { return this.getToken(bitmarkParser.BitBotActionSend, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_bot_action_send; }
    // @Override
    enterRule(listener) {
        if (listener.enterBot_action_send) {
            listener.enterBot_action_send(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBot_action_send) {
            listener.exitBot_action_send(this);
        }
    }
}
export class Bot_action_announceContext extends ParserRuleContext {
    BitBotActionAnnounce() { return this.getToken(bitmarkParser.BitBotActionAnnounce, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_bot_action_announce; }
    // @Override
    enterRule(listener) {
        if (listener.enterBot_action_announce) {
            listener.enterBot_action_announce(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBot_action_announce) {
            listener.exitBot_action_announce(this);
        }
    }
}
export class Bot_action_saveContext extends ParserRuleContext {
    BitBotActionSave() { return this.getToken(bitmarkParser.BitBotActionSave, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_bot_action_save; }
    // @Override
    enterRule(listener) {
        if (listener.enterBot_action_save) {
            listener.enterBot_action_save(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBot_action_save) {
            listener.exitBot_action_save(this);
        }
    }
}
export class Bot_action_remindContext extends ParserRuleContext {
    BitBotActionRemind() { return this.getToken(bitmarkParser.BitBotActionRemind, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_bot_action_remind; }
    // @Override
    enterRule(listener) {
        if (listener.enterBot_action_remind) {
            listener.enterBot_action_remind(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBot_action_remind) {
            listener.exitBot_action_remind(this);
        }
    }
}
export class BitElemContext extends ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(bitmarkParser.LIST_LINE, 0); }
    dclines() {
        return this.tryGetRuleContext(0, DclinesContext);
    }
    gap() {
        return this.tryGetRuleContext(0, GapContext);
    }
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
    }
    dateprop() {
        return this.tryGetRuleContext(0, DatepropContext);
    }
    progress() {
        return this.tryGetRuleContext(0, ProgressContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    dollarans() {
        return this.tryGetRuleContext(0, DollaransContext);
    }
    partans() {
        return this.tryGetRuleContext(0, PartansContext);
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
    progress_points() {
        return this.tryGetRuleContext(0, Progress_pointsContext);
    }
    istracked() {
        return this.tryGetRuleContext(0, IstrackedContext);
    }
    isinfoonly() {
        return this.tryGetRuleContext(0, IsinfoonlyContext);
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
    bracketed_text() {
        return this.tryGetRuleContext(0, Bracketed_textContext);
    }
    sp() {
        return this.tryGetRuleContext(0, SpContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bitElem; }
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
    get ruleIndex() { return bitmarkParser.RULE_gap; }
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
    OPU() { return this.getToken(bitmarkParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(bitmarkParser.STRING, 0); }
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
    get ruleIndex() { return bitmarkParser.RULE_single_gap; }
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
export class Choice_plusContext extends ParserRuleContext {
    OPP() { return this.getToken(bitmarkParser.OPP, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
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
    get ruleIndex() { return bitmarkParser.RULE_choice_plus; }
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
    OPM() { return this.getToken(bitmarkParser.OPM, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
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
    get ruleIndex() { return bitmarkParser.RULE_choice_minus; }
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
    OPR() { return this.getToken(bitmarkParser.OPR, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
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
    get ruleIndex() { return bitmarkParser.RULE_choice_star; }
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
export class EssayContext extends ParserRuleContext {
    BitEssay() { return this.getToken(bitmarkParser.BitEssay, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_essay; }
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
export class Ml_exampleContext extends ParserRuleContext {
    AtExamplecol() { return this.getToken(bitmarkParser.AtExamplecol, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_ml_example; }
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
export class PartansContext extends ParserRuleContext {
    AtPartialAnswerS() { return this.tryGetToken(bitmarkParser.AtPartialAnswerS, 0); }
    AtPartialAnswer() { return this.tryGetToken(bitmarkParser.AtPartialAnswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_partans; }
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
export class ResourceContext extends ParserRuleContext {
    bitElem() {
        return this.getRuleContext(0, BitElemContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_resource; }
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
export class CorrectionContext extends ParserRuleContext {
    BitCorrection() { return this.getToken(bitmarkParser.BitCorrection, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_correction; }
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
    OPM() { return this.tryGetToken(bitmarkParser.OPM, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL() { return this.getToken(bitmarkParser.NL, 0); }
    OPP() { return this.tryGetToken(bitmarkParser.OPP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_corrs; }
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
    BitMark() { return this.getToken(bitmarkParser.BitMark, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_mark_; }
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
    OPS() { return this.getToken(bitmarkParser.OPS, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    mark_color() {
        return this.tryGetRuleContext(0, Mark_colorContext);
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
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_mark_text; }
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
    OPAMARK() { return this.getToken(bitmarkParser.OPAMARK, 0); }
    STRING() { return this.getToken(bitmarkParser.STRING, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_mark_color; }
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
    BitDocup() { return this.getToken(bitmarkParser.BitDocup, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    Video_type() { return this.tryGetToken(bitmarkParser.Video_type, 0); }
    Audio_type() { return this.tryGetToken(bitmarkParser.Audio_type, 0); }
    Image_type() { return this.tryGetToken(bitmarkParser.Image_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_document_upload; }
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
    BitTakepic() { return this.getToken(bitmarkParser.BitTakepic, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_take_picture; }
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
    BitRecaud() { return this.getToken(bitmarkParser.BitRecaud, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_record_audio; }
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
    BitPrepnote() { return this.getToken(bitmarkParser.BitPrepnote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_preparation_note; }
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
    BitAssign() { return this.getToken(bitmarkParser.BitAssign, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_assignment; }
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
export class ArticleContext extends ParserRuleContext {
    BitArticle() { return this.getToken(bitmarkParser.BitArticle, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_article; }
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
export class StatementContext extends ParserRuleContext {
    BitStatement() { return this.getToken(bitmarkParser.BitStatement, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}
export class DetailsContext extends ParserRuleContext {
    BitDetails() { return this.getToken(bitmarkParser.BitDetails, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_details; }
    // @Override
    enterRule(listener) {
        if (listener.enterDetails) {
            listener.enterDetails(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDetails) {
            listener.exitDetails(this);
        }
    }
}
export class ButtoncopytextContext extends ParserRuleContext {
    BitButtonCopytext() { return this.getToken(bitmarkParser.BitButtonCopytext, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_buttoncopytext; }
    // @Override
    enterRule(listener) {
        if (listener.enterButtoncopytext) {
            listener.enterButtoncopytext(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitButtoncopytext) {
            listener.exitButtoncopytext(this);
        }
    }
}
export class WbtcontinueContext extends ParserRuleContext {
    BitWbtContinue() { return this.getToken(bitmarkParser.BitWbtContinue, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_wbtcontinue; }
    // @Override
    enterRule(listener) {
        if (listener.enterWbtcontinue) {
            listener.enterWbtcontinue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWbtcontinue) {
            listener.exitWbtcontinue(this);
        }
    }
}
export class LearningpathdetailsContext extends ParserRuleContext {
    BitLearningPathDetails() { return this.getToken(bitmarkParser.BitLearningPathDetails, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_learningpathdetails; }
    // @Override
    enterRule(listener) {
        if (listener.enterLearningpathdetails) {
            listener.enterLearningpathdetails(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLearningpathdetails) {
            listener.exitLearningpathdetails(this);
        }
    }
}
export class PageContext extends ParserRuleContext {
    BitPage() { return this.getToken(bitmarkParser.BitPage, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_page; }
    // @Override
    enterRule(listener) {
        if (listener.enterPage) {
            listener.enterPage(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPage) {
            listener.exitPage(this);
        }
    }
}
export class NoteContext extends ParserRuleContext {
    BitNote() { return this.getToken(bitmarkParser.BitNote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_note; }
    // @Override
    enterRule(listener) {
        if (listener.enterNote) {
            listener.enterNote(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNote) {
            listener.exitNote(this);
        }
    }
}
export class InfoContext extends ParserRuleContext {
    BitInfo() { return this.getToken(bitmarkParser.BitInfo, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_info; }
    // @Override
    enterRule(listener) {
        if (listener.enterInfo) {
            listener.enterInfo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInfo) {
            listener.exitInfo(this);
        }
    }
}
export class WarningContext extends ParserRuleContext {
    BitWarning() { return this.getToken(bitmarkParser.BitWarning, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_warning; }
    // @Override
    enterRule(listener) {
        if (listener.enterWarning) {
            listener.enterWarning(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWarning) {
            listener.exitWarning(this);
        }
    }
}
export class RemarkContext extends ParserRuleContext {
    BitRemark() { return this.getToken(bitmarkParser.BitRemark, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_remark; }
    // @Override
    enterRule(listener) {
        if (listener.enterRemark) {
            listener.enterRemark(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRemark) {
            listener.exitRemark(this);
        }
    }
}
export class HelpContext extends ParserRuleContext {
    BitHelp() { return this.getToken(bitmarkParser.BitHelp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_help; }
    // @Override
    enterRule(listener) {
        if (listener.enterHelp) {
            listener.enterHelp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHelp) {
            listener.exitHelp(this);
        }
    }
}
export class DangerContext extends ParserRuleContext {
    BitDanger() { return this.getToken(bitmarkParser.BitDanger, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_danger; }
    // @Override
    enterRule(listener) {
        if (listener.enterDanger) {
            listener.enterDanger(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDanger) {
            listener.exitDanger(this);
        }
    }
}
export class BugContext extends ParserRuleContext {
    BitBug() { return this.getToken(bitmarkParser.BitBug, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_bug; }
    // @Override
    enterRule(listener) {
        if (listener.enterBug) {
            listener.enterBug(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBug) {
            listener.exitBug(this);
        }
    }
}
export class SidenoteContext extends ParserRuleContext {
    BitSidenote() { return this.getToken(bitmarkParser.BitSidenote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_sidenote; }
    // @Override
    enterRule(listener) {
        if (listener.enterSidenote) {
            listener.enterSidenote(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSidenote) {
            listener.exitSidenote(this);
        }
    }
}
export class StickynoteContext extends ParserRuleContext {
    BitStickynote() { return this.getToken(bitmarkParser.BitStickynote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_stickynote; }
    // @Override
    enterRule(listener) {
        if (listener.enterStickynote) {
            listener.enterStickynote(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStickynote) {
            listener.exitStickynote(this);
        }
    }
}
export class QuoteContext extends ParserRuleContext {
    BitQuote() { return this.getToken(bitmarkParser.BitQuote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_quote; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuote) {
            listener.enterQuote(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuote) {
            listener.exitQuote(this);
        }
    }
}
export class FootnoteContext extends ParserRuleContext {
    BitFootnote() { return this.getToken(bitmarkParser.BitFootnote, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_footnote; }
    // @Override
    enterRule(listener) {
        if (listener.enterFootnote) {
            listener.enterFootnote(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFootnote) {
            listener.exitFootnote(this);
        }
    }
}
export class HintbitContext extends ParserRuleContext {
    BitHint() { return this.getToken(bitmarkParser.BitHint, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_hintbit; }
    // @Override
    enterRule(listener) {
        if (listener.enterHintbit) {
            listener.enterHintbit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHintbit) {
            listener.exitHintbit(this);
        }
    }
}
export class ExamplebitContext extends ParserRuleContext {
    BitExample() { return this.getToken(bitmarkParser.BitExample, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_examplebit; }
    // @Override
    enterRule(listener) {
        if (listener.enterExamplebit) {
            listener.enterExamplebit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExamplebit) {
            listener.exitExamplebit(this);
        }
    }
}
export class Vendor_padlet_embedContext extends ParserRuleContext {
    BitVendorPadletEmbed() { return this.getToken(bitmarkParser.BitVendorPadletEmbed, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_vendor_padlet_embed; }
    // @Override
    enterRule(listener) {
        if (listener.enterVendor_padlet_embed) {
            listener.enterVendor_padlet_embed(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVendor_padlet_embed) {
            listener.exitVendor_padlet_embed(this);
        }
    }
}
export class ScormContext extends ParserRuleContext {
    BitScorm() { return this.getToken(bitmarkParser.BitScorm, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_scorm; }
    // @Override
    enterRule(listener) {
        if (listener.enterScorm) {
            listener.enterScorm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitScorm) {
            listener.exitScorm(this);
        }
    }
}
export class MessageContext extends ParserRuleContext {
    BitMessage() { return this.getToken(bitmarkParser.BitMessage, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_message; }
    // @Override
    enterRule(listener) {
        if (listener.enterMessage) {
            listener.enterMessage(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMessage) {
            listener.exitMessage(this);
        }
    }
}
export class Bot_interviewContext extends ParserRuleContext {
    BitBotint() { return this.getToken(bitmarkParser.BitBotint, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_bot_interview; }
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
    get ruleIndex() { return bitmarkParser.RULE_bot_choice; }
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
export class RatingContext extends ParserRuleContext {
    BitRating() { return this.getToken(bitmarkParser.BitRating, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
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
    get ruleIndex() { return bitmarkParser.RULE_rating; }
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
    OPBUL() { return this.getToken(bitmarkParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bullet_item; }
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
    BitSurvey() { return this.getToken(bitmarkParser.BitSurvey, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_survey; }
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
    BitSurvey1() { return this.getToken(bitmarkParser.BitSurvey1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_survey_1; }
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
    BitSurveyanon() { return this.getToken(bitmarkParser.BitSurveyanon, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_survey_anonymous; }
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
    BitSurveyanon1() { return this.getToken(bitmarkParser.BitSurveyanon1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    get ruleIndex() { return bitmarkParser.RULE_survey_anonymous_1; }
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
export class Self_assessmentContext extends ParserRuleContext {
    BitSelfassess() { return this.getToken(bitmarkParser.BitSelfassess, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL);
        }
        else {
            return this.getToken(bitmarkParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.HSPL2);
        }
        else {
            return this.getToken(bitmarkParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
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
    self_assess_s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(Self_assess_s_and_wContext);
        }
        else {
            return this.getRuleContext(i, Self_assess_s_and_wContext);
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
    get ruleIndex() { return bitmarkParser.RULE_self_assessment; }
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
export class Self_assess_s_and_wContext extends ParserRuleContext {
    OPBUL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.OPBUL);
        }
        else {
            return this.getToken(bitmarkParser.OPBUL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_self_assess_s_and_w; }
    // @Override
    enterRule(listener) {
        if (listener.enterSelf_assess_s_and_w) {
            listener.enterSelf_assess_s_and_w(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSelf_assess_s_and_w) {
            listener.exitSelf_assess_s_and_w(this);
        }
    }
}
export class AtpointContext extends ParserRuleContext {
    AtPoints() { return this.getToken(bitmarkParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(bitmarkParser.NUMERIC, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_atpoint; }
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
            return this.getTokens(bitmarkParser.ColonText);
        }
        else {
            return this.getToken(bitmarkParser.ColonText, i);
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
    get ruleIndex() { return bitmarkParser.RULE_format; }
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
export class Resource_formatContext extends ParserRuleContext {
    BitmarkMinus() { return this.tryGetToken(bitmarkParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(bitmarkParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(bitmarkParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(bitmarkParser.Placeholder, 0); }
    AmpArticle() { return this.tryGetToken(bitmarkParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(bitmarkParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(bitmarkParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(bitmarkParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(bitmarkParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(bitmarkParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(bitmarkParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(bitmarkParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(bitmarkParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(bitmarkParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(bitmarkParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(bitmarkParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_resource_format; }
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
export class Resource_format_extraContext extends ParserRuleContext {
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
    AmpPdf() { return this.tryGetToken(bitmarkParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_resource_format_extra; }
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
export class Image_formatContext extends ParserRuleContext {
    AmpImage() { return this.tryGetToken(bitmarkParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(bitmarkParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(bitmarkParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(bitmarkParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(bitmarkParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(bitmarkParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_image_format; }
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
export class Video_formatContext extends ParserRuleContext {
    AmpVideo() { return this.tryGetToken(bitmarkParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(bitmarkParser.AmpVideoLink, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    Video_type() { return this.tryGetToken(bitmarkParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_video_format; }
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
export class Article_formatContext extends ParserRuleContext {
    AmpArticle() { return this.tryGetToken(bitmarkParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(bitmarkParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(bitmarkParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(bitmarkParser.AmpDocumentLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(bitmarkParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(bitmarkParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_app_format; }
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
export class Website_formatContext extends ParserRuleContext {
    AmpWebsite() { return this.tryGetToken(bitmarkParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(bitmarkParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_website_format; }
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
export class Stillimagefilm_formatContext extends ParserRuleContext {
    AmpStillImageFilm() { return this.tryGetToken(bitmarkParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(bitmarkParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_stillimagefilm_format; }
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
export class Op_article_formatContext extends ParserRuleContext {
    OpAmpArticleLink() { return this.tryGetToken(bitmarkParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(bitmarkParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_article_format; }
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
export class Op_document_formatContext extends ParserRuleContext {
    OpAmpDocumentLink() { return this.tryGetToken(bitmarkParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(bitmarkParser.OpAmpDocument, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_document_format; }
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
export class Op_app_formatContext extends ParserRuleContext {
    OpAmpApp() { return this.tryGetToken(bitmarkParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(bitmarkParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_app_format; }
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
export class Op_website_formatContext extends ParserRuleContext {
    OpAmpWebsite() { return this.tryGetToken(bitmarkParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(bitmarkParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_website_format; }
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
export class Op_video_formatContext extends ParserRuleContext {
    OpAmpVideo() { return this.tryGetToken(bitmarkParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    Video_type() { return this.tryGetToken(bitmarkParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(bitmarkParser.OpAmpVideoLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_video_format; }
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
export class Op_stillimagefilm_formatContext extends ParserRuleContext {
    OpAmpStillImageFilm() { return this.tryGetToken(bitmarkParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(bitmarkParser.OpAmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_stillimagefilm_format; }
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
export class ArticlebitContext extends ParserRuleContext {
    op_article_format() {
        return this.tryGetRuleContext(0, Op_article_formatContext);
    }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
    ArticleText() { return this.tryGetToken(bitmarkParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_articlebit; }
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
    op_document_format() {
        return this.getRuleContext(0, Op_document_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_documentbit; }
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
export class WebsitebitContext extends ParserRuleContext {
    op_website_format() {
        return this.getRuleContext(0, Op_website_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_websitebit; }
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
export class AppbitContext extends ParserRuleContext {
    op_app_format() {
        return this.getRuleContext(0, Op_app_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_appbit; }
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
export class StillimagefilmbitContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmarkParser.RULE_stillimagefilmbit; }
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
export class Stillimg_oneContext extends ParserRuleContext {
    op_stillimagefilm_format() {
        return this.getRuleContext(0, Op_stillimagefilm_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_stillimg_one; }
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
export class VideobitContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmarkParser.RULE_videobit; }
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
export class Video_oneContext extends ParserRuleContext {
    op_video_format() {
        return this.getRuleContext(0, Op_video_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_video_one; }
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
export class ImagebitContext extends ParserRuleContext {
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
    NL() { return this.tryGetToken(bitmarkParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(bitmarkParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_imagebit; }
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
export class Image_oneContext extends ParserRuleContext {
    op_image_format() {
        return this.getRuleContext(0, Op_image_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_image_one; }
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
export class Op_image_formatContext extends ParserRuleContext {
    OpAmpImage() { return this.tryGetToken(bitmarkParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(bitmarkParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(bitmarkParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(bitmarkParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(bitmarkParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(bitmarkParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_image_format; }
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
export class Image_chainedContext extends ParserRuleContext {
    AtSrc() { return this.tryGetToken(bitmarkParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(bitmarkParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(bitmarkParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(bitmarkParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(bitmarkParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_image_chained; }
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
export class Image_chained4matchContext extends ParserRuleContext {
    AtSrc() { return this.tryGetToken(bitmarkParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(bitmarkParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(bitmarkParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(bitmarkParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(bitmarkParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_image_chained4match; }
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
export class AudiobitContext extends ParserRuleContext {
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
    get ruleIndex() { return bitmarkParser.RULE_audiobit; }
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
export class Audio_oneContext extends ParserRuleContext {
    op_audio_format() {
        return this.getRuleContext(0, Op_audio_formatContext);
    }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_audio_one; }
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
export class Audio_formatContext extends ParserRuleContext {
    AmpAudio() { return this.tryGetToken(bitmarkParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(bitmarkParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(bitmarkParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_audio_format; }
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
export class Op_audio_formatContext extends ParserRuleContext {
    OpAmpAudio() { return this.tryGetToken(bitmarkParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(bitmarkParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(bitmarkParser.OpAmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_op_audio_format; }
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
export class Resource_chainedContext extends ParserRuleContext {
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    OPA() { return this.tryGetToken(bitmarkParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(bitmarkParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(bitmarkParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(bitmarkParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(bitmarkParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(bitmarkParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(bitmarkParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_resource_chained; }
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
export class TelephoneContext extends ParserRuleContext {
    TEL() { return this.getToken(bitmarkParser.TEL, 0); }
    PLUS() { return this.getToken(bitmarkParser.PLUS, 0); }
    NUMERIC() { return this.getToken(bitmarkParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_telephone; }
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
export class UrlContext extends ParserRuleContext {
    URL() { return this.getToken(bitmarkParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_url; }
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
export class ItemContext extends ParserRuleContext {
    OPC() { return this.getToken(bitmarkParser.OPC, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
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
    get ruleIndex() { return bitmarkParser.RULE_item; }
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
export class LeadContext extends ParserRuleContext {
    OPC() { return this.getToken(bitmarkParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
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
    get ruleIndex() { return bitmarkParser.RULE_lead; }
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
export class AnglerefContext extends ParserRuleContext {
    OPRANGLES() { return this.tryGetToken(bitmarkParser.OPRANGLES, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(bitmarkParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_angleref; }
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
export class ExampleContext extends ParserRuleContext {
    AtExamplecl() { return this.tryGetToken(bitmarkParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(bitmarkParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(bitmarkParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(bitmarkParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(bitmarkParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_example; }
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
export class Bracketed_textContext extends ParserRuleContext {
    BracEnclose() { return this.getToken(bitmarkParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(bitmarkParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bracketed_text; }
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
export class ReferenceContext extends ParserRuleContext {
    AtReference() { return this.getToken(bitmarkParser.AtReference, 0); }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.URL);
        }
        else {
            return this.getToken(bitmarkParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(bitmarkParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_reference; }
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
export class ProgressContext extends ParserRuleContext {
    AtProgress() { return this.getToken(bitmarkParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_progress; }
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
export class DatepropContext extends ParserRuleContext {
    AtDate() { return this.getToken(bitmarkParser.AtDate, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_dateprop; }
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
export class Dateprop_chainedContext extends ParserRuleContext {
    AtDate() { return this.getToken(bitmarkParser.AtDate, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_dateprop_chained; }
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
export class InstructionContext extends ParserRuleContext {
    OPB() { return this.getToken(bitmarkParser.OPB, 0); }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(bitmarkParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_instruction; }
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
    OPQ() { return this.getToken(bitmarkParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.CL);
        }
        else {
            return this.getToken(bitmarkParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_hint; }
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
export class TitleContext extends ParserRuleContext {
    OPHASH() { return this.getToken(bitmarkParser.OPHASH, 0); }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(bitmarkParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_title; }
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
export class Bool_labelContext extends ParserRuleContext {
    AtLabeltrue() { return this.tryGetToken(bitmarkParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(bitmarkParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bool_label; }
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
export class Progress_pointsContext extends ParserRuleContext {
    AtProgressPoints() { return this.getToken(bitmarkParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(bitmarkParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_progress_points; }
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
export class IstrackedContext extends ParserRuleContext {
    OpAtIsTracked() { return this.getToken(bitmarkParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_istracked; }
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
export class IsinfoonlyContext extends ParserRuleContext {
    OpAtIsInfoOnly() { return this.getToken(bitmarkParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_isinfoonly; }
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
export class AtdefContext extends ParserRuleContext {
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(bitmarkParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(bitmarkParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(bitmarkParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_atdef_; }
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
export class DollaransContext extends ParserRuleContext {
    OPDOLL() { return this.getToken(bitmarkParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
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
            return this.getTokens(bitmarkParser.COLON);
        }
        else {
            return this.getToken(bitmarkParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(bitmarkParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_dollarans; }
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
export class AnchorContext extends ParserRuleContext {
    OPDANGLE() { return this.getToken(bitmarkParser.OPDANGLE, 0); }
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_anchor; }
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
export class LinesContext extends ParserRuleContext {
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
            return this.getTokens(bitmarkParser.NL);
        }
        else {
            return this.getToken(bitmarkParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(bitmarkParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(bitmarkParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.S);
        }
        else {
            return this.getToken(bitmarkParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(bitmarkParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
    COLON() { return this.tryGetToken(bitmarkParser.COLON, 0); }
    AMP() { return this.tryGetToken(bitmarkParser.AMP, 0); }
    DBLEQ() { return this.tryGetToken(bitmarkParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(bitmarkParser.URL, 0); }
    bracket_escaped() {
        return this.tryGetRuleContext(0, Bracket_escapedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_s_and_w; }
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
export class DclinesContext extends ParserRuleContext {
    DCANY() { return this.getToken(bitmarkParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_dclines; }
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
export class Bracket_escapedContext extends ParserRuleContext {
    OPESC() { return this.getToken(bitmarkParser.OPESC, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.tryGetToken(bitmarkParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_bracket_escaped; }
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
export class ClnspContext extends ParserRuleContext {
    CL() { return this.getToken(bitmarkParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_clnsp; }
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
export class SsplContext extends ParserRuleContext {
    SSPL() { return this.tryGetToken(bitmarkParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(bitmarkParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_sspl; }
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
export class WordsContext extends ParserRuleContext {
    sentence(i) {
        if (i === undefined) {
            return this.getRuleContexts(SentenceContext);
        }
        else {
            return this.getRuleContext(i, SentenceContext);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AMP);
        }
        else {
            return this.getToken(bitmarkParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.Greater);
        }
        else {
            return this.getToken(bitmarkParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.Less);
        }
        else {
            return this.getToken(bitmarkParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.RightArrow);
        }
        else {
            return this.getToken(bitmarkParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.RightAngle);
        }
        else {
            return this.getToken(bitmarkParser.RightAngle, i);
        }
    }
    AmpArticle(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpArticle);
        }
        else {
            return this.getToken(bitmarkParser.AmpArticle, i);
        }
    }
    AmpArticleLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpArticleLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpArticleLink, i);
        }
    }
    AmpDocument(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpDocument);
        }
        else {
            return this.getToken(bitmarkParser.AmpDocument, i);
        }
    }
    AmpDocumentLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpDocumentLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpDocumentLink, i);
        }
    }
    AmpWebsite(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpWebsite);
        }
        else {
            return this.getToken(bitmarkParser.AmpWebsite, i);
        }
    }
    AmpWebsiteLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpWebsiteLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpWebsiteLink, i);
        }
    }
    AmpImage(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpImage);
        }
        else {
            return this.getToken(bitmarkParser.AmpImage, i);
        }
    }
    AmpImageLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpImageLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpImageLink, i);
        }
    }
    AmpAudio(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpAudio);
        }
        else {
            return this.getToken(bitmarkParser.AmpAudio, i);
        }
    }
    AmpAudioLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpAudioLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpAudioLink, i);
        }
    }
    AmpVideo(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpVideo);
        }
        else {
            return this.getToken(bitmarkParser.AmpVideo, i);
        }
    }
    AmpVideoLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpVideoLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpVideoLink, i);
        }
    }
    AmpApp(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpApp);
        }
        else {
            return this.getToken(bitmarkParser.AmpApp, i);
        }
    }
    AmpAppLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpAppLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpAppLink, i);
        }
    }
    AmpStillImageFilm(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpStillImageFilm);
        }
        else {
            return this.getToken(bitmarkParser.AmpStillImageFilm, i);
        }
    }
    AmpStillImageFilmLink(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.AmpStillImageFilmLink);
        }
        else {
            return this.getToken(bitmarkParser.AmpStillImageFilmLink, i);
        }
    }
    BitmarkMinus(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.BitmarkMinus);
        }
        else {
            return this.getToken(bitmarkParser.BitmarkMinus, i);
        }
    }
    BitmarkPlus(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.BitmarkPlus);
        }
        else {
            return this.getToken(bitmarkParser.BitmarkPlus, i);
        }
    }
    QUOTE_INDEX(i) {
        if (i === undefined) {
            return this.getTokens(bitmarkParser.QUOTE_INDEX);
        }
        else {
            return this.getToken(bitmarkParser.QUOTE_INDEX, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_words; }
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
    S() { return this.getToken(bitmarkParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_sp; }
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
export class SentenceContext extends ParserRuleContext {
    SENTENCE() { return this.getToken(bitmarkParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return bitmarkParser.RULE_sentence; }
    // @Override
    enterRule(listener) {
        if (listener.enterSentence) {
            listener.enterSentence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSentence) {
            listener.exitSentence(this);
        }
    }
}
