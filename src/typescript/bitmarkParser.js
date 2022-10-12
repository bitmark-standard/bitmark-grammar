"use strict";
// Generated from ./typescript//bitmarkParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentenceContext = exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.Bracket_escapedContext = exports.DclinesContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Self_assess_s_and_wContext = exports.Self_assessmentContext = exports.Survey_anonymous_1Context = exports.Survey_anonymousContext = exports.Survey_1Context = exports.SurveyContext = exports.Bullet_itemContext = exports.RatingContext = exports.Bot_choiceContext = exports.Bot_interviewContext = exports.MessageContext = exports.ScormContext = exports.Vendor_padlet_embedContext = exports.ExamplebitContext = exports.HintbitContext = exports.FootnoteContext = exports.QuoteContext = exports.StickynoteContext = exports.SidenoteContext = exports.BugContext = exports.DangerContext = exports.HelpContext = exports.RemarkContext = exports.WarningContext = exports.InfoContext = exports.NoteContext = exports.PageContext = exports.LearningpathdetailsContext = exports.WbtcontinueContext = exports.ButtoncopytextContext = exports.Sample_solutionContext = exports.DetailsContext = exports.StatementContext = exports.ArticleContext = exports.AssignmentContext = exports.Preparation_noteContext = exports.Record_audioContext = exports.Take_pictureContext = exports.Take_audioContext = exports.Document_uploadContext = exports.Mark_colorContext = exports.Mark_textContext = exports.Mark_Context = exports.CorrsContext = exports.CorrectionContext = exports.ResourceContext = exports.PartansContext = exports.Ml_exampleContext = exports.EssayContext = exports.Choice_starContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.Single_gapContext = exports.GapContext = exports.BitElemContext = exports.Bot_action_remindContext = exports.Bot_action_saveContext = exports.Bot_action_announceContext = exports.Bot_action_sendContext = exports.Learning_path_classroom_eventContext = exports.Learning_path_classroom_trainingContext = exports.Learning_path_external_linkContext = exports.Learning_path_bot_trainingContext = exports.Learning_path_feedbackContext = exports.Learning_path_closingContext = exports.Learning_path_learning_goalContext = exports.Learning_path_video_callContext = exports.Learning_path_signContext = exports.Learning_path_bookContext = exports.Learning_path_stepContext = exports.Learning_path_ltiContext = exports.Group_diedContext = exports.Group_bornContext = exports.Title_etcContext = exports.Bit_aliasContext = exports.Internal_linkContext = exports.SummaryContext = exports.TocContext = exports.ChapterContext = exports.BookContext = exports.BitContext = exports.Bitmark_Context = exports.BitmarkContext = exports.bitmarkParser = void 0;
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
let bitmarkParser = /** @class */ (() => {
    class bitmarkParser extends Parser_1.Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator_1.ParserATNSimulator(bitmarkParser._ATN, this);
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
                    this.state = 311;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 298;
                                this.bitmark_();
                                this.state = 308;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 302;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.S) {
                                                    {
                                                        {
                                                            this.state = 299;
                                                            this.match(bitmarkParser.S);
                                                        }
                                                    }
                                                    this.state = 304;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 305;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 310;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 313;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitSampleSolution) | (1 << bitmarkParser.BitTakeAudio) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitRating - 32)) | (1 << (bitmarkParser.BitSurvey - 32)) | (1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathExternalLink - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.OPESC - 64)) | (1 << (bitmarkParser.OPDANGLE - 64)) | (1 << (bitmarkParser.OPQ - 64)) | (1 << (bitmarkParser.OPS - 64)) | (1 << (bitmarkParser.COLON - 64)) | (1 << (bitmarkParser.AMP - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (bitmarkParser.Greater - 99)) | (1 << (bitmarkParser.Less - 99)) | (1 << (bitmarkParser.RightAngle - 99)) | (1 << (bitmarkParser.RightArrow - 99)) | (1 << (bitmarkParser.DBLEQ - 99)) | (1 << (bitmarkParser.QUOTE_INDEX - 99)) | (1 << (bitmarkParser.NUMERIC - 99)) | (1 << (bitmarkParser.STRING - 99)) | (1 << (bitmarkParser.SENTENCE - 99)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                    this.state = 318;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 315;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 320;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 321;
                    this.match(bitmarkParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 325;
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
                    case bitmarkParser.BitSampleSolution:
                    case bitmarkParser.BitTakeAudio:
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
                            this.state = 323;
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
                            this.state = 324;
                            this.lines();
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
        bit() {
            let _localctx = new BitContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, bitmarkParser.RULE_bit);
            try {
                this.state = 393;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.BitBook:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 327;
                            this.book();
                        }
                        break;
                    case bitmarkParser.BitChapter:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 328;
                            this.chapter();
                        }
                        break;
                    case bitmarkParser.BitSummary:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 329;
                            this.summary();
                        }
                        break;
                    case bitmarkParser.BitToc:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 330;
                            this.toc();
                        }
                        break;
                    case bitmarkParser.BitAlias:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 331;
                            this.bit_alias();
                        }
                        break;
                    case bitmarkParser.BitIntlink:
                    case bitmarkParser.BitIntRef:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 332;
                            this.internal_link();
                        }
                        break;
                    case bitmarkParser.OPDANGLE:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 333;
                            this.anchor();
                        }
                        break;
                    case bitmarkParser.BitGroups:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 334;
                            this.group_born();
                        }
                        break;
                    case bitmarkParser.BitGroupt:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 335;
                            this.group_died();
                        }
                        break;
                    case bitmarkParser.BitEssay:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 336;
                            this.essay();
                        }
                        break;
                    case bitmarkParser.BitCorrection:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 337;
                            this.correction();
                        }
                        break;
                    case bitmarkParser.BitMark:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 338;
                            this.mark_();
                        }
                        break;
                    case bitmarkParser.BitDocup:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 339;
                            this.document_upload();
                        }
                        break;
                    case bitmarkParser.BitTakepic:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 340;
                            this.take_picture();
                        }
                        break;
                    case bitmarkParser.BitTakeAudio:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 341;
                            this.take_audio();
                        }
                        break;
                    case bitmarkParser.BitRecaud:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 342;
                            this.record_audio();
                        }
                        break;
                    case bitmarkParser.BitPrepnote:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 343;
                            this.preparation_note();
                        }
                        break;
                    case bitmarkParser.BitAssign:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 344;
                            this.assignment();
                        }
                        break;
                    case bitmarkParser.BitArticle:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 345;
                            this.article();
                        }
                        break;
                    case bitmarkParser.BitStatement:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 346;
                            this.statement();
                        }
                        break;
                    case bitmarkParser.BitDetails:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 347;
                            this.details();
                        }
                        break;
                    case bitmarkParser.BitSampleSolution:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 348;
                            this.sample_solution();
                        }
                        break;
                    case bitmarkParser.BitButtonCopytext:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 349;
                            this.buttoncopytext();
                        }
                        break;
                    case bitmarkParser.BitWbtContinue:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 350;
                            this.wbtcontinue();
                        }
                        break;
                    case bitmarkParser.BitLearningPathDetails:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 351;
                            this.learningpathdetails();
                        }
                        break;
                    case bitmarkParser.BitNote:
                        this.enterOuterAlt(_localctx, 26);
                        {
                            this.state = 352;
                            this.note();
                        }
                        break;
                    case bitmarkParser.BitInfo:
                        this.enterOuterAlt(_localctx, 27);
                        {
                            this.state = 353;
                            this.info();
                        }
                        break;
                    case bitmarkParser.BitWarning:
                        this.enterOuterAlt(_localctx, 28);
                        {
                            this.state = 354;
                            this.warning();
                        }
                        break;
                    case bitmarkParser.BitRemark:
                        this.enterOuterAlt(_localctx, 29);
                        {
                            this.state = 355;
                            this.remark();
                        }
                        break;
                    case bitmarkParser.BitHint:
                        this.enterOuterAlt(_localctx, 30);
                        {
                            this.state = 356;
                            this.hintbit();
                        }
                        break;
                    case bitmarkParser.BitHelp:
                        this.enterOuterAlt(_localctx, 31);
                        {
                            this.state = 357;
                            this.help();
                        }
                        break;
                    case bitmarkParser.BitDanger:
                        this.enterOuterAlt(_localctx, 32);
                        {
                            this.state = 358;
                            this.danger();
                        }
                        break;
                    case bitmarkParser.BitBug:
                        this.enterOuterAlt(_localctx, 33);
                        {
                            this.state = 359;
                            this.bug();
                        }
                        break;
                    case bitmarkParser.BitSidenote:
                        this.enterOuterAlt(_localctx, 34);
                        {
                            this.state = 360;
                            this.sidenote();
                        }
                        break;
                    case bitmarkParser.BitStickynote:
                        this.enterOuterAlt(_localctx, 35);
                        {
                            this.state = 361;
                            this.stickynote();
                        }
                        break;
                    case bitmarkParser.BitQuote:
                        this.enterOuterAlt(_localctx, 36);
                        {
                            this.state = 362;
                            this.quote();
                        }
                        break;
                    case bitmarkParser.BitFootnote:
                        this.enterOuterAlt(_localctx, 37);
                        {
                            this.state = 363;
                            this.footnote();
                        }
                        break;
                    case bitmarkParser.BitExample:
                        this.enterOuterAlt(_localctx, 38);
                        {
                            this.state = 364;
                            this.examplebit();
                        }
                        break;
                    case bitmarkParser.BitPage:
                        this.enterOuterAlt(_localctx, 39);
                        {
                            this.state = 365;
                            this.page();
                        }
                        break;
                    case bitmarkParser.BitMessage:
                        this.enterOuterAlt(_localctx, 40);
                        {
                            this.state = 366;
                            this.message();
                        }
                        break;
                    case bitmarkParser.BitBotint:
                        this.enterOuterAlt(_localctx, 41);
                        {
                            this.state = 367;
                            this.bot_interview();
                        }
                        break;
                    case bitmarkParser.BitSelfassess:
                        this.enterOuterAlt(_localctx, 42);
                        {
                            this.state = 368;
                            this.self_assessment();
                        }
                        break;
                    case bitmarkParser.BitRating:
                        this.enterOuterAlt(_localctx, 43);
                        {
                            this.state = 369;
                            this.rating();
                        }
                        break;
                    case bitmarkParser.BitSurvey:
                        this.enterOuterAlt(_localctx, 44);
                        {
                            this.state = 370;
                            this.survey();
                        }
                        break;
                    case bitmarkParser.BitSurvey1:
                        this.enterOuterAlt(_localctx, 45);
                        {
                            this.state = 371;
                            this.survey_1();
                        }
                        break;
                    case bitmarkParser.BitSurveyanon:
                        this.enterOuterAlt(_localctx, 46);
                        {
                            this.state = 372;
                            this.survey_anonymous();
                        }
                        break;
                    case bitmarkParser.BitSurveyanon1:
                        this.enterOuterAlt(_localctx, 47);
                        {
                            this.state = 373;
                            this.survey_anonymous_1();
                        }
                        break;
                    case bitmarkParser.OPQ:
                        this.enterOuterAlt(_localctx, 48);
                        {
                            this.state = 374;
                            this.hint();
                        }
                        break;
                    case bitmarkParser.BitVendorPadletEmbed:
                        this.enterOuterAlt(_localctx, 49);
                        {
                            this.state = 375;
                            this.vendor_padlet_embed();
                        }
                        break;
                    case bitmarkParser.BitScorm:
                        this.enterOuterAlt(_localctx, 50);
                        {
                            this.state = 376;
                            this.scorm();
                        }
                        break;
                    case bitmarkParser.BitLearningPathLti:
                        this.enterOuterAlt(_localctx, 51);
                        {
                            this.state = 377;
                            this.learning_path_lti();
                        }
                        break;
                    case bitmarkParser.BitLearningPathStep:
                        this.enterOuterAlt(_localctx, 52);
                        {
                            this.state = 378;
                            this.learning_path_step();
                        }
                        break;
                    case bitmarkParser.BitLearningPathBook:
                        this.enterOuterAlt(_localctx, 53);
                        {
                            this.state = 379;
                            this.learning_path_book();
                        }
                        break;
                    case bitmarkParser.BitLearningPathSign:
                        this.enterOuterAlt(_localctx, 54);
                        {
                            this.state = 380;
                            this.learning_path_sign();
                        }
                        break;
                    case bitmarkParser.BitLearningPathVideoCall:
                        this.enterOuterAlt(_localctx, 55);
                        {
                            this.state = 381;
                            this.learning_path_video_call();
                        }
                        break;
                    case bitmarkParser.BitLearningPathLearningGoal:
                        this.enterOuterAlt(_localctx, 56);
                        {
                            this.state = 382;
                            this.learning_path_learning_goal();
                        }
                        break;
                    case bitmarkParser.BitLearningPathClosing:
                        this.enterOuterAlt(_localctx, 57);
                        {
                            this.state = 383;
                            this.learning_path_closing();
                        }
                        break;
                    case bitmarkParser.BitLearningPathFeedback:
                        this.enterOuterAlt(_localctx, 58);
                        {
                            this.state = 384;
                            this.learning_path_feedback();
                        }
                        break;
                    case bitmarkParser.BitLearningPathBotTraining:
                        this.enterOuterAlt(_localctx, 59);
                        {
                            this.state = 385;
                            this.learning_path_bot_training();
                        }
                        break;
                    case bitmarkParser.BitLearningPathExternalLink:
                        this.enterOuterAlt(_localctx, 60);
                        {
                            this.state = 386;
                            this.learning_path_external_link();
                        }
                        break;
                    case bitmarkParser.BitLearningPathClassroomTraining:
                        this.enterOuterAlt(_localctx, 61);
                        {
                            this.state = 387;
                            this.learning_path_classroom_training();
                        }
                        break;
                    case bitmarkParser.BitLearningPathClassroomEvent:
                        this.enterOuterAlt(_localctx, 62);
                        {
                            this.state = 388;
                            this.learning_path_classroom_event();
                        }
                        break;
                    case bitmarkParser.BitBotActionSend:
                        this.enterOuterAlt(_localctx, 63);
                        {
                            this.state = 389;
                            this.bot_action_send();
                        }
                        break;
                    case bitmarkParser.BitBotActionAnnounce:
                        this.enterOuterAlt(_localctx, 64);
                        {
                            this.state = 390;
                            this.bot_action_announce();
                        }
                        break;
                    case bitmarkParser.BitBotActionSave:
                        this.enterOuterAlt(_localctx, 65);
                        {
                            this.state = 391;
                            this.bot_action_save();
                        }
                        break;
                    case bitmarkParser.BitBotActionRemind:
                        this.enterOuterAlt(_localctx, 66);
                        {
                            this.state = 392;
                            this.bot_action_remind();
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
        book() {
            let _localctx = new BookContext(this._ctx, this.state);
            this.enterRule(_localctx, 6, bitmarkParser.RULE_book);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 395;
                    this.match(bitmarkParser.BitBook);
                    this.state = 397;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                        case 1:
                            {
                                this.state = 396;
                                this.format();
                            }
                            break;
                    }
                    this.state = 399;
                    this.match(bitmarkParser.CL);
                    this.state = 407;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 403;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.NL) {
                                            {
                                                {
                                                    this.state = 400;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                            this.state = 405;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 406;
                                        this.bitElem();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 409;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
        chapter() {
            let _localctx = new ChapterContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, bitmarkParser.RULE_chapter);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 411;
                    this.match(bitmarkParser.BitChapter);
                    this.state = 413;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                        case 1:
                            {
                                this.state = 412;
                                this.format();
                            }
                            break;
                    }
                    this.state = 415;
                    this.match(bitmarkParser.CL);
                    this.state = 419;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 416;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 421;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 425;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                        case 1:
                            {
                                this.state = 422;
                                this.anchor();
                                this.state = 423;
                                this.match(bitmarkParser.NL);
                            }
                            break;
                    }
                    this.state = 427;
                    this.resource();
                    this.state = 437;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 431;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 428;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 433;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 434;
                                    this.resource();
                                }
                            }
                        }
                        this.state = 439;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 440;
                    this.match(bitmarkParser.BitToc);
                    this.state = 442;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                        {
                            this.state = 441;
                            this.s_and_w();
                        }
                    }
                    this.state = 444;
                    this.match(bitmarkParser.CL);
                    this.state = 445;
                    this.match(bitmarkParser.NL);
                    this.state = 449;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPA || _la === bitmarkParser.OpAtCopyright) {
                        {
                            this.state = 446;
                            this.atdef();
                            this.state = 447;
                            this.match(bitmarkParser.NL);
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
        summary() {
            let _localctx = new SummaryContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, bitmarkParser.RULE_summary);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 451;
                    this.match(bitmarkParser.BitSummary);
                    this.state = 452;
                    this.match(bitmarkParser.CL);
                    this.state = 456;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 453;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 458;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    }
                    this.state = 459;
                    this.title_etc();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 461;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.BitIntlink || _la === bitmarkParser.BitIntRef)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 463;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
                        {
                            this.state = 462;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus)) {
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
                    this.state = 465;
                    this.match(bitmarkParser.CL);
                    this.state = 475;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 469;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 466;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 471;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 472;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 477;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 478;
                    this.match(bitmarkParser.BitAlias);
                    this.state = 479;
                    this.match(bitmarkParser.CL);
                    this.state = 480;
                    this.angleref();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 496;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 483;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === bitmarkParser.NL) {
                                        {
                                            this.state = 482;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 492;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.OPHASH:
                                            {
                                                this.state = 485;
                                                this.title();
                                            }
                                            break;
                                        case bitmarkParser.OPA:
                                        case bitmarkParser.OpAtCopyright:
                                            {
                                                this.state = 486;
                                                this.atdef();
                                            }
                                            break;
                                        case bitmarkParser.OPC:
                                            {
                                                this.state = 487;
                                                this.item();
                                            }
                                            break;
                                        case bitmarkParser.OPB:
                                            {
                                                this.state = 488;
                                                this.instruction();
                                            }
                                            break;
                                        case bitmarkParser.OPRANGLES:
                                        case bitmarkParser.OPRANGLEL:
                                            {
                                                this.state = 489;
                                                this.angleref();
                                            }
                                            break;
                                        case bitmarkParser.OPDANGLE:
                                            {
                                                this.state = 490;
                                                this.anchor();
                                            }
                                            break;
                                        case bitmarkParser.AtProgress:
                                            {
                                                this.state = 491;
                                                this.progress();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                            }
                        }
                        this.state = 498;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 499;
                    this.match(bitmarkParser.BitGroups);
                    this.state = 500;
                    this.match(bitmarkParser.CL);
                    this.state = 510;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 501;
                                        this.match(bitmarkParser.NL);
                                        this.state = 502;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.OPR || _la === bitmarkParser.OPHASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 505;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                this.state = 505;
                                                this._errHandler.sync(this);
                                                switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                                                    case 1:
                                                        {
                                                            this.state = 503;
                                                            this.s_and_w();
                                                        }
                                                        break;
                                                    case 2:
                                                        {
                                                            this.state = 504;
                                                            this.match(bitmarkParser.COLON);
                                                        }
                                                        break;
                                                }
                                            }
                                            this.state = 507;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                                        this.state = 509;
                                        this.match(bitmarkParser.CL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 512;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 514;
                    this.match(bitmarkParser.NL);
                    this.state = 518;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 515;
                                    this.lines();
                                }
                            }
                        }
                        this.state = 520;
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
        group_died() {
            let _localctx = new Group_diedContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, bitmarkParser.RULE_group_died);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 521;
                    this.match(bitmarkParser.BitGroupt);
                    this.state = 522;
                    this.match(bitmarkParser.CL);
                    this.state = 532;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 523;
                                        this.match(bitmarkParser.NL);
                                        this.state = 524;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.OPR || _la === bitmarkParser.OPHASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 527;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                this.state = 527;
                                                this._errHandler.sync(this);
                                                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                                                    case 1:
                                                        {
                                                            this.state = 525;
                                                            this.s_and_w();
                                                        }
                                                        break;
                                                    case 2:
                                                        {
                                                            this.state = 526;
                                                            this.match(bitmarkParser.COLON);
                                                        }
                                                        break;
                                                }
                                            }
                                            this.state = 529;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                                        this.state = 531;
                                        this.match(bitmarkParser.CL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 534;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 536;
                    this.match(bitmarkParser.NL);
                    this.state = 540;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 537;
                                    this.lines();
                                }
                            }
                        }
                        this.state = 542;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 543;
                    this.match(bitmarkParser.BitLearningPathLti);
                    this.state = 544;
                    this.format();
                    this.state = 545;
                    this.match(bitmarkParser.CL);
                    this.state = 549;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 546;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 551;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 559;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 552;
                                        this.bitElem();
                                        this.state = 556;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 553;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 558;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 561;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
        learning_path_step() {
            let _localctx = new Learning_path_stepContext(this._ctx, this.state);
            this.enterRule(_localctx, 26, bitmarkParser.RULE_learning_path_step);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 563;
                    this.match(bitmarkParser.BitLearningPathStep);
                    this.state = 564;
                    this.format();
                    this.state = 565;
                    this.match(bitmarkParser.CL);
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 566;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 579;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 572;
                                        this.bitElem();
                                        this.state = 576;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 573;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 578;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 581;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
        learning_path_book() {
            let _localctx = new Learning_path_bookContext(this._ctx, this.state);
            this.enterRule(_localctx, 28, bitmarkParser.RULE_learning_path_book);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 583;
                    this.match(bitmarkParser.BitLearningPathBook);
                    this.state = 584;
                    this.format();
                    this.state = 585;
                    this.match(bitmarkParser.CL);
                    this.state = 589;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 586;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 591;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 599;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 592;
                                        this.bitElem();
                                        this.state = 596;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 593;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 598;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 601;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
        learning_path_sign() {
            let _localctx = new Learning_path_signContext(this._ctx, this.state);
            this.enterRule(_localctx, 30, bitmarkParser.RULE_learning_path_sign);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 603;
                    this.match(bitmarkParser.BitLearningPathSign);
                    this.state = 604;
                    this.format();
                    this.state = 605;
                    this.match(bitmarkParser.CL);
                    this.state = 609;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 606;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 611;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 619;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 612;
                                        this.bitElem();
                                        this.state = 616;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 613;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 618;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 621;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
        learning_path_video_call() {
            let _localctx = new Learning_path_video_callContext(this._ctx, this.state);
            this.enterRule(_localctx, 32, bitmarkParser.RULE_learning_path_video_call);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 623;
                    this.match(bitmarkParser.BitLearningPathVideoCall);
                    this.state = 624;
                    this.format();
                    this.state = 625;
                    this.match(bitmarkParser.CL);
                    this.state = 629;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 626;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 631;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 639;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 632;
                                        this.bitElem();
                                        this.state = 636;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 633;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 638;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 641;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
        learning_path_learning_goal() {
            let _localctx = new Learning_path_learning_goalContext(this._ctx, this.state);
            this.enterRule(_localctx, 34, bitmarkParser.RULE_learning_path_learning_goal);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 643;
                    this.match(bitmarkParser.BitLearningPathLearningGoal);
                    this.state = 644;
                    this.format();
                    this.state = 645;
                    this.match(bitmarkParser.CL);
                    this.state = 649;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 646;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 651;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 659;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 652;
                                        this.bitElem();
                                        this.state = 656;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 653;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 658;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 661;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
        learning_path_closing() {
            let _localctx = new Learning_path_closingContext(this._ctx, this.state);
            this.enterRule(_localctx, 36, bitmarkParser.RULE_learning_path_closing);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 663;
                    this.match(bitmarkParser.BitLearningPathClosing);
                    this.state = 664;
                    this.format();
                    this.state = 665;
                    this.match(bitmarkParser.CL);
                    this.state = 669;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 666;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 671;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 679;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 672;
                                        this.bitElem();
                                        this.state = 676;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 673;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 678;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 681;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
        learning_path_feedback() {
            let _localctx = new Learning_path_feedbackContext(this._ctx, this.state);
            this.enterRule(_localctx, 38, bitmarkParser.RULE_learning_path_feedback);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 683;
                    this.match(bitmarkParser.BitLearningPathFeedback);
                    this.state = 684;
                    this.format();
                    this.state = 685;
                    this.match(bitmarkParser.CL);
                    this.state = 689;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 686;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 691;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 699;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 692;
                                        this.bitElem();
                                        this.state = 696;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 693;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 698;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 701;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
        learning_path_bot_training() {
            let _localctx = new Learning_path_bot_trainingContext(this._ctx, this.state);
            this.enterRule(_localctx, 40, bitmarkParser.RULE_learning_path_bot_training);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 703;
                    this.match(bitmarkParser.BitLearningPathBotTraining);
                    this.state = 704;
                    this.format();
                    this.state = 705;
                    this.match(bitmarkParser.CL);
                    this.state = 709;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 706;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 711;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 719;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 712;
                                        this.bitElem();
                                        this.state = 716;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 713;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 718;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 721;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
        learning_path_external_link() {
            let _localctx = new Learning_path_external_linkContext(this._ctx, this.state);
            this.enterRule(_localctx, 42, bitmarkParser.RULE_learning_path_external_link);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 723;
                    this.match(bitmarkParser.BitLearningPathExternalLink);
                    this.state = 724;
                    this.format();
                    this.state = 725;
                    this.match(bitmarkParser.CL);
                    this.state = 729;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 726;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 731;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 739;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 732;
                                        this.bitElem();
                                        this.state = 736;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 733;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 738;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 741;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
        learning_path_classroom_training() {
            let _localctx = new Learning_path_classroom_trainingContext(this._ctx, this.state);
            this.enterRule(_localctx, 44, bitmarkParser.RULE_learning_path_classroom_training);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 743;
                    this.match(bitmarkParser.BitLearningPathClassroomTraining);
                    this.state = 744;
                    this.format();
                    this.state = 745;
                    this.match(bitmarkParser.CL);
                    this.state = 749;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 746;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 751;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 759;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 752;
                                        this.bitElem();
                                        this.state = 756;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 753;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 758;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 761;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
        learning_path_classroom_event() {
            let _localctx = new Learning_path_classroom_eventContext(this._ctx, this.state);
            this.enterRule(_localctx, 46, bitmarkParser.RULE_learning_path_classroom_event);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 763;
                    this.match(bitmarkParser.BitLearningPathClassroomEvent);
                    this.state = 764;
                    this.format();
                    this.state = 765;
                    this.match(bitmarkParser.CL);
                    this.state = 769;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 766;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 771;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 779;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 772;
                                        this.bitElem();
                                        this.state = 776;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 773;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 778;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 781;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
        bot_action_send() {
            let _localctx = new Bot_action_sendContext(this._ctx, this.state);
            this.enterRule(_localctx, 48, bitmarkParser.RULE_bot_action_send);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 783;
                    this.match(bitmarkParser.BitBotActionSend);
                    this.state = 784;
                    this.format();
                    this.state = 785;
                    this.match(bitmarkParser.CL);
                    this.state = 789;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 786;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 791;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 799;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 792;
                                        this.bitElem();
                                        this.state = 796;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 793;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 798;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 801;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
        bot_action_announce() {
            let _localctx = new Bot_action_announceContext(this._ctx, this.state);
            this.enterRule(_localctx, 50, bitmarkParser.RULE_bot_action_announce);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 803;
                    this.match(bitmarkParser.BitBotActionAnnounce);
                    this.state = 804;
                    this.format();
                    this.state = 805;
                    this.match(bitmarkParser.CL);
                    this.state = 809;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 806;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 811;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 819;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 812;
                                        this.bitElem();
                                        this.state = 816;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 813;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 818;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 821;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
        bot_action_save() {
            let _localctx = new Bot_action_saveContext(this._ctx, this.state);
            this.enterRule(_localctx, 52, bitmarkParser.RULE_bot_action_save);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 823;
                    this.match(bitmarkParser.BitBotActionSave);
                    this.state = 824;
                    this.format();
                    this.state = 825;
                    this.match(bitmarkParser.CL);
                    this.state = 829;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 826;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 831;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 839;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 832;
                                        this.bitElem();
                                        this.state = 836;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 833;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 838;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 841;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
        bot_action_remind() {
            let _localctx = new Bot_action_remindContext(this._ctx, this.state);
            this.enterRule(_localctx, 54, bitmarkParser.RULE_bot_action_remind);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 843;
                    this.match(bitmarkParser.BitBotActionRemind);
                    this.state = 844;
                    this.format();
                    this.state = 845;
                    this.match(bitmarkParser.CL);
                    this.state = 849;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 846;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 851;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 859;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 852;
                                        this.bitElem();
                                        this.state = 856;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 853;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 858;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 861;
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
        bitElem() {
            let _localctx = new BitElemContext(this._ctx, this.state);
            this.enterRule(_localctx, 56, bitmarkParser.RULE_bitElem);
            try {
                this.state = 894;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 863;
                            this.match(bitmarkParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 864;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 865;
                            this.gap();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 866;
                            this.reference();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 867;
                            this.dateprop();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 868;
                            this.progress();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 869;
                            this.atdef();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 870;
                            this.dollarans();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 871;
                            this.partans();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 872;
                            this.item();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 873;
                            this.title();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 874;
                            this.instruction();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 875;
                            this.hint();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 876;
                            this.s_and_w();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 877;
                            this.example();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 878;
                            this.bool_label();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 879;
                            this.progress_points();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 880;
                            this.istracked();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 881;
                            this.isinfoonly();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 882;
                            this.imagebit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 883;
                            this.audiobit();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 884;
                            this.videobit();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 885;
                            this.articlebit();
                        }
                        break;
                    case 24:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 886;
                            this.documentbit();
                        }
                        break;
                    case 25:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 887;
                            this.appbit();
                        }
                        break;
                    case 26:
                        this.enterOuterAlt(_localctx, 26);
                        {
                            this.state = 888;
                            this.websitebit();
                        }
                        break;
                    case 27:
                        this.enterOuterAlt(_localctx, 27);
                        {
                            this.state = 889;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 28:
                        this.enterOuterAlt(_localctx, 28);
                        {
                            this.state = 890;
                            this.angleref();
                        }
                        break;
                    case 29:
                        this.enterOuterAlt(_localctx, 29);
                        {
                            this.state = 891;
                            this.anchor();
                        }
                        break;
                    case 30:
                        this.enterOuterAlt(_localctx, 30);
                        {
                            this.state = 892;
                            this.bracketed_text();
                        }
                        break;
                    case 31:
                        this.enterOuterAlt(_localctx, 31);
                        {
                            this.state = 893;
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
        gap() {
            let _localctx = new GapContext(this._ctx, this.state);
            this.enterRule(_localctx, 58, bitmarkParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 896;
                    this.single_gap();
                    this.state = 904;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 902;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case bitmarkParser.OPU:
                                        {
                                            this.state = 897;
                                            this.single_gap();
                                        }
                                        break;
                                    case bitmarkParser.OPB:
                                        {
                                            this.state = 898;
                                            this.instruction();
                                        }
                                        break;
                                    case bitmarkParser.OPQ:
                                        {
                                            this.state = 899;
                                            this.hint();
                                        }
                                        break;
                                    case bitmarkParser.OPC:
                                        {
                                            this.state = 900;
                                            this.item();
                                        }
                                        break;
                                    case bitmarkParser.AtExampleWithStr:
                                    case bitmarkParser.AtExamplecol:
                                    case bitmarkParser.AtExamplecl:
                                        {
                                            this.state = 901;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 906;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 907;
                    this.match(bitmarkParser.OPU);
                    this.state = 911;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                        case 1:
                            {
                                this.state = 908;
                                this.match(bitmarkParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 909;
                                this.match(bitmarkParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 916;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                        {
                            {
                                this.state = 913;
                                this.s_and_w();
                            }
                        }
                        this.state = 918;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 919;
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
        choice_plus() {
            let _localctx = new Choice_plusContext(this._ctx, this.state);
            this.enterRule(_localctx, 62, bitmarkParser.RULE_choice_plus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 922;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPC) {
                        {
                            this.state = 921;
                            this.item();
                        }
                    }
                    this.state = 924;
                    this.match(bitmarkParser.OPP);
                    this.state = 926;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 925;
                                this.s_and_w();
                            }
                        }
                        this.state = 928;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                    this.state = 930;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 933;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPC) {
                        {
                            this.state = 932;
                            this.item();
                        }
                    }
                    this.state = 935;
                    this.match(bitmarkParser.OPM);
                    this.state = 937;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 936;
                                this.s_and_w();
                            }
                        }
                        this.state = 939;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                    this.state = 941;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 944;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPC) {
                        {
                            this.state = 943;
                            this.item();
                        }
                    }
                    this.state = 946;
                    this.match(bitmarkParser.OPR);
                    this.state = 948;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 947;
                                this.s_and_w();
                            }
                        }
                        this.state = 950;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                    this.state = 952;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 954;
                    this.match(bitmarkParser.BitEssay);
                    this.state = 955;
                    this.format();
                    this.state = 956;
                    this.match(bitmarkParser.CL);
                    this.state = 957;
                    this.match(bitmarkParser.NL);
                    this.state = 967;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    {
                                        this.state = 958;
                                        this.bitElem();
                                    }
                                    this.state = 962;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 959;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 964;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 969;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                    }
                    this.state = 979;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 973;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 970;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 975;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    {
                                        this.state = 976;
                                        this.ml_example();
                                    }
                                }
                            }
                        }
                        this.state = 981;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                    }
                    this.state = 985;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 982;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 987;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                    }
                    this.state = 1001;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                        case 1:
                            {
                                this.state = 988;
                                this.resource();
                                this.state = 998;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 992;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 989;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 994;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 995;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1000;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
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
        ml_example() {
            let _localctx = new Ml_exampleContext(this._ctx, this.state);
            this.enterRule(_localctx, 70, bitmarkParser.RULE_ml_example);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1003;
                    this.match(bitmarkParser.AtExamplecol);
                    this.state = 1011;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                        {
                            this.state = 1005;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.NL) {
                                {
                                    this.state = 1004;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                            this.state = 1007;
                            this.lines();
                            this.state = 1009;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.NL) {
                                {
                                    this.state = 1008;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 1013;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1015;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AtPartialAnswerS || _la === bitmarkParser.AtPartialAnswer)) {
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
        resource() {
            let _localctx = new ResourceContext(this._ctx, this.state);
            this.enterRule(_localctx, 74, bitmarkParser.RULE_resource);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1017;
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
        correction() {
            let _localctx = new CorrectionContext(this._ctx, this.state);
            this.enterRule(_localctx, 76, bitmarkParser.RULE_correction);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1019;
                    this.match(bitmarkParser.BitCorrection);
                    this.state = 1020;
                    this.format();
                    this.state = 1021;
                    this.match(bitmarkParser.CL);
                    this.state = 1022;
                    this.match(bitmarkParser.NL);
                    this.state = 1032;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1023;
                                    this.bitElem();
                                    this.state = 1027;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1024;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1029;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1034;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    }
                    this.state = 1038;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.OPP || _la === bitmarkParser.OPM) {
                        {
                            {
                                this.state = 1035;
                                this.corrs();
                            }
                        }
                        this.state = 1040;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1044;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1041;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1046;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                    }
                    this.state = 1060;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                        case 1:
                            {
                                this.state = 1047;
                                this.resource();
                                this.state = 1057;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1051;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1048;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1053;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1054;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1059;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
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
        corrs() {
            let _localctx = new CorrsContext(this._ctx, this.state);
            this.enterRule(_localctx, 78, bitmarkParser.RULE_corrs);
            try {
                let _alt;
                this.state = 1080;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPM:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1062;
                            this.match(bitmarkParser.OPM);
                            this.state = 1066;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1063;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1068;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                            }
                            this.state = 1069;
                            this.match(bitmarkParser.CL);
                            this.state = 1070;
                            this.match(bitmarkParser.NL);
                        }
                        break;
                    case bitmarkParser.OPP:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1071;
                            this.match(bitmarkParser.OPP);
                            this.state = 1075;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1072;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1077;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                            }
                            this.state = 1078;
                            this.match(bitmarkParser.CL);
                            this.state = 1079;
                            this.match(bitmarkParser.NL);
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
        mark_() {
            let _localctx = new Mark_Context(this._ctx, this.state);
            this.enterRule(_localctx, 80, bitmarkParser.RULE_mark_);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1082;
                    this.match(bitmarkParser.BitMark);
                    this.state = 1083;
                    this.format();
                    this.state = 1084;
                    this.match(bitmarkParser.CL);
                    this.state = 1085;
                    this.match(bitmarkParser.NL);
                    this.state = 1098;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1088;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1086;
                                                this.bitElem();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1087;
                                                this.mark_text();
                                            }
                                            break;
                                    }
                                    this.state = 1093;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1090;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1095;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1100;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                    }
                    this.state = 1104;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1101;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1106;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                    }
                    this.state = 1120;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                        case 1:
                            {
                                this.state = 1107;
                                this.resource();
                                this.state = 1117;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1111;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1108;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1113;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1114;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1119;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
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
        mark_text() {
            let _localctx = new Mark_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 82, bitmarkParser.RULE_mark_text);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1122;
                    this.match(bitmarkParser.OPS);
                    this.state = 1123;
                    this.s_and_w();
                    this.state = 1124;
                    this.match(bitmarkParser.CL);
                    this.state = 1126;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPAMARK) {
                        {
                            this.state = 1125;
                            this.mark_color();
                        }
                    }
                    this.state = 1133;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 1131;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case bitmarkParser.OPQ:
                                        {
                                            this.state = 1128;
                                            this.hint();
                                        }
                                        break;
                                    case bitmarkParser.OPC:
                                        {
                                            this.state = 1129;
                                            this.item();
                                        }
                                        break;
                                    case bitmarkParser.OPB:
                                        {
                                            this.state = 1130;
                                            this.instruction();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 1135;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1136;
                    this.match(bitmarkParser.OPAMARK);
                    this.state = 1140;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 1137;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 1142;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1143;
                    this.match(bitmarkParser.STRING);
                    this.state = 1147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 1144;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 1149;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1150;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1152;
                    this.match(bitmarkParser.BitDocup);
                    this.state = 1154;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (bitmarkParser.Image_type - 74)) | (1 << (bitmarkParser.Audio_type - 74)) | (1 << (bitmarkParser.Video_type - 74)))) !== 0)) {
                        {
                            this.state = 1153;
                            _la = this._input.LA(1);
                            if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (bitmarkParser.Image_type - 74)) | (1 << (bitmarkParser.Audio_type - 74)) | (1 << (bitmarkParser.Video_type - 74)))) !== 0))) {
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
                    this.state = 1156;
                    this.match(bitmarkParser.CL);
                    this.state = 1157;
                    this.match(bitmarkParser.NL);
                    this.state = 1167;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1158;
                                    this.bitElem();
                                    this.state = 1162;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1159;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1164;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1169;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                    }
                    this.state = 1173;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1170;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1175;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
                    }
                    this.state = 1189;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                        case 1:
                            {
                                this.state = 1176;
                                this.resource();
                                this.state = 1186;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1180;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1177;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1182;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1183;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1188;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
        take_audio() {
            let _localctx = new Take_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 88, bitmarkParser.RULE_take_audio);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1191;
                    this.match(bitmarkParser.BitTakeAudio);
                    this.state = 1192;
                    this.format();
                    this.state = 1193;
                    this.match(bitmarkParser.CL);
                    this.state = 1194;
                    this.match(bitmarkParser.NL);
                    this.state = 1204;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1195;
                                    this.bitElem();
                                    this.state = 1199;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1196;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1201;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1206;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                    }
                    this.state = 1210;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1207;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1212;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                    }
                    this.state = 1226;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                        case 1:
                            {
                                this.state = 1213;
                                this.resource();
                                this.state = 1223;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1217;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1214;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1219;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1220;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1225;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
        take_picture() {
            let _localctx = new Take_pictureContext(this._ctx, this.state);
            this.enterRule(_localctx, 90, bitmarkParser.RULE_take_picture);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1228;
                    this.match(bitmarkParser.BitTakepic);
                    this.state = 1229;
                    this.format();
                    this.state = 1230;
                    this.match(bitmarkParser.CL);
                    this.state = 1231;
                    this.match(bitmarkParser.NL);
                    this.state = 1241;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1232;
                                    this.bitElem();
                                    this.state = 1236;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1233;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1238;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1243;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                    }
                    this.state = 1247;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1244;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1249;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                    }
                    this.state = 1263;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                        case 1:
                            {
                                this.state = 1250;
                                this.resource();
                                this.state = 1260;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1254;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1251;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1256;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1257;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1262;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
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
        record_audio() {
            let _localctx = new Record_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 92, bitmarkParser.RULE_record_audio);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1265;
                    this.match(bitmarkParser.BitRecaud);
                    this.state = 1266;
                    this.format();
                    this.state = 1267;
                    this.match(bitmarkParser.CL);
                    this.state = 1268;
                    this.match(bitmarkParser.NL);
                    this.state = 1278;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1269;
                                    this.bitElem();
                                    this.state = 1273;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1270;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1275;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1280;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                    }
                    this.state = 1284;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1281;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1286;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                    }
                    this.state = 1300;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                        case 1:
                            {
                                this.state = 1287;
                                this.resource();
                                this.state = 1297;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1291;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1288;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1293;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1294;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1299;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
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
        preparation_note() {
            let _localctx = new Preparation_noteContext(this._ctx, this.state);
            this.enterRule(_localctx, 94, bitmarkParser.RULE_preparation_note);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1302;
                    this.match(bitmarkParser.BitPrepnote);
                    this.state = 1303;
                    this.format();
                    this.state = 1304;
                    this.match(bitmarkParser.CL);
                    this.state = 1308;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1305;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1310;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
                    }
                    this.state = 1320;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1311;
                                    this.bitElem();
                                    this.state = 1315;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1312;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1317;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1322;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                    }
                    this.state = 1324;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                        case 1:
                            {
                                this.state = 1323;
                                this.lines();
                            }
                            break;
                    }
                    this.state = 1329;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1326;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1331;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                    }
                    this.state = 1345;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                        case 1:
                            {
                                this.state = 1332;
                                this.resource();
                                this.state = 1342;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1336;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1333;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1338;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1339;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1344;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
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
        assignment() {
            let _localctx = new AssignmentContext(this._ctx, this.state);
            this.enterRule(_localctx, 96, bitmarkParser.RULE_assignment);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1347;
                    this.match(bitmarkParser.BitAssign);
                    this.state = 1348;
                    this.format();
                    this.state = 1349;
                    this.match(bitmarkParser.CL);
                    this.state = 1351;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1350;
                                        this.match(bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1353;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 1364;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1355;
                                    this.bitElem();
                                    this.state = 1359;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1356;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 1361;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 1366;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                    }
                    this.state = 1368;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                        case 1:
                            {
                                this.state = 1367;
                                this.lines();
                            }
                            break;
                    }
                    this.state = 1373;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1370;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1375;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                    }
                    this.state = 1389;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                        case 1:
                            {
                                this.state = 1376;
                                this.resource();
                                this.state = 1386;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1380;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1377;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1382;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1383;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1388;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
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
        article() {
            let _localctx = new ArticleContext(this._ctx, this.state);
            this.enterRule(_localctx, 98, bitmarkParser.RULE_article);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1391;
                    this.match(bitmarkParser.BitArticle);
                    this.state = 1392;
                    this.format();
                    this.state = 1393;
                    this.match(bitmarkParser.CL);
                    this.state = 1397;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1394;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1399;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1407;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1400;
                                        this.bitElem();
                                        this.state = 1404;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1401;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1406;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 165, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1409;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
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
        statement() {
            let _localctx = new StatementContext(this._ctx, this.state);
            this.enterRule(_localctx, 100, bitmarkParser.RULE_statement);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1411;
                    this.match(bitmarkParser.BitStatement);
                    this.state = 1412;
                    this.format();
                    this.state = 1413;
                    this.match(bitmarkParser.CL);
                    this.state = 1417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1414;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1419;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1427;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1420;
                                        this.bitElem();
                                        this.state = 1424;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1421;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1426;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1429;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
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
        details() {
            let _localctx = new DetailsContext(this._ctx, this.state);
            this.enterRule(_localctx, 102, bitmarkParser.RULE_details);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1431;
                    this.match(bitmarkParser.BitDetails);
                    this.state = 1432;
                    this.format();
                    this.state = 1433;
                    this.match(bitmarkParser.CL);
                    this.state = 1437;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1434;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1439;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1447;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1440;
                                        this.bitElem();
                                        this.state = 1444;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1441;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1446;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1449;
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
        sample_solution() {
            let _localctx = new Sample_solutionContext(this._ctx, this.state);
            this.enterRule(_localctx, 104, bitmarkParser.RULE_sample_solution);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1451;
                    this.match(bitmarkParser.BitSampleSolution);
                    this.state = 1452;
                    this.format();
                    this.state = 1453;
                    this.match(bitmarkParser.CL);
                    this.state = 1457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1454;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1459;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1467;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1460;
                                        this.bitElem();
                                        this.state = 1464;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1461;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1466;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1469;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
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
        buttoncopytext() {
            let _localctx = new ButtoncopytextContext(this._ctx, this.state);
            this.enterRule(_localctx, 106, bitmarkParser.RULE_buttoncopytext);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1471;
                    this.match(bitmarkParser.BitButtonCopytext);
                    this.state = 1472;
                    this.format();
                    this.state = 1473;
                    this.match(bitmarkParser.CL);
                    this.state = 1477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1474;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1479;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1487;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1480;
                                        this.bitElem();
                                        this.state = 1484;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1481;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1486;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1489;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
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
        wbtcontinue() {
            let _localctx = new WbtcontinueContext(this._ctx, this.state);
            this.enterRule(_localctx, 108, bitmarkParser.RULE_wbtcontinue);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1491;
                    this.match(bitmarkParser.BitWbtContinue);
                    this.state = 1492;
                    this.format();
                    this.state = 1493;
                    this.match(bitmarkParser.CL);
                    this.state = 1497;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1494;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1499;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1507;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1500;
                                        this.bitElem();
                                        this.state = 1504;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1501;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1506;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1509;
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
        learningpathdetails() {
            let _localctx = new LearningpathdetailsContext(this._ctx, this.state);
            this.enterRule(_localctx, 110, bitmarkParser.RULE_learningpathdetails);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1511;
                    this.match(bitmarkParser.BitLearningPathDetails);
                    this.state = 1512;
                    this.format();
                    this.state = 1513;
                    this.match(bitmarkParser.CL);
                    this.state = 1517;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1514;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1519;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1527;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1520;
                                        this.bitElem();
                                        this.state = 1524;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1521;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1526;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1529;
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
        page() {
            let _localctx = new PageContext(this._ctx, this.state);
            this.enterRule(_localctx, 112, bitmarkParser.RULE_page);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1531;
                    this.match(bitmarkParser.BitPage);
                    this.state = 1532;
                    this.format();
                    this.state = 1533;
                    this.match(bitmarkParser.CL);
                    this.state = 1537;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1534;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1539;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1547;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1540;
                                        this.bitElem();
                                        this.state = 1544;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1541;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1546;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1549;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
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
        note() {
            let _localctx = new NoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 114, bitmarkParser.RULE_note);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1551;
                    this.match(bitmarkParser.BitNote);
                    this.state = 1552;
                    this.format();
                    this.state = 1553;
                    this.match(bitmarkParser.CL);
                    this.state = 1557;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1554;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1559;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1567;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1560;
                                        this.bitElem();
                                        this.state = 1564;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1561;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1566;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1569;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
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
        info() {
            let _localctx = new InfoContext(this._ctx, this.state);
            this.enterRule(_localctx, 116, bitmarkParser.RULE_info);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1571;
                    this.match(bitmarkParser.BitInfo);
                    this.state = 1572;
                    this.format();
                    this.state = 1573;
                    this.match(bitmarkParser.CL);
                    this.state = 1577;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1574;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1579;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1587;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1580;
                                        this.bitElem();
                                        this.state = 1584;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1581;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1586;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1589;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
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
        warning() {
            let _localctx = new WarningContext(this._ctx, this.state);
            this.enterRule(_localctx, 118, bitmarkParser.RULE_warning);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1591;
                    this.match(bitmarkParser.BitWarning);
                    this.state = 1592;
                    this.format();
                    this.state = 1593;
                    this.match(bitmarkParser.CL);
                    this.state = 1597;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1594;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1599;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1607;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1600;
                                        this.bitElem();
                                        this.state = 1604;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1601;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1606;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1609;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
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
        remark() {
            let _localctx = new RemarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 120, bitmarkParser.RULE_remark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1611;
                    this.match(bitmarkParser.BitRemark);
                    this.state = 1612;
                    this.format();
                    this.state = 1613;
                    this.match(bitmarkParser.CL);
                    this.state = 1617;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1614;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1619;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1627;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1620;
                                        this.bitElem();
                                        this.state = 1624;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1621;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1626;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1629;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
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
        help() {
            let _localctx = new HelpContext(this._ctx, this.state);
            this.enterRule(_localctx, 122, bitmarkParser.RULE_help);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1631;
                    this.match(bitmarkParser.BitHelp);
                    this.state = 1632;
                    this.format();
                    this.state = 1633;
                    this.match(bitmarkParser.CL);
                    this.state = 1637;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1634;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1639;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1647;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1640;
                                        this.bitElem();
                                        this.state = 1644;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1641;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1646;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1649;
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
        danger() {
            let _localctx = new DangerContext(this._ctx, this.state);
            this.enterRule(_localctx, 124, bitmarkParser.RULE_danger);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1651;
                    this.match(bitmarkParser.BitDanger);
                    this.state = 1652;
                    this.format();
                    this.state = 1653;
                    this.match(bitmarkParser.CL);
                    this.state = 1657;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1654;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1659;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1667;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1660;
                                        this.bitElem();
                                        this.state = 1664;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1661;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1666;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1669;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
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
        bug() {
            let _localctx = new BugContext(this._ctx, this.state);
            this.enterRule(_localctx, 126, bitmarkParser.RULE_bug);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1671;
                    this.match(bitmarkParser.BitBug);
                    this.state = 1672;
                    this.format();
                    this.state = 1673;
                    this.match(bitmarkParser.CL);
                    this.state = 1677;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1674;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1679;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1687;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1680;
                                        this.bitElem();
                                        this.state = 1684;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1681;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1686;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1689;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
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
        sidenote() {
            let _localctx = new SidenoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 128, bitmarkParser.RULE_sidenote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1691;
                    this.match(bitmarkParser.BitSidenote);
                    this.state = 1692;
                    this.format();
                    this.state = 1693;
                    this.match(bitmarkParser.CL);
                    this.state = 1697;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1694;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1699;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1707;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1700;
                                        this.bitElem();
                                        this.state = 1704;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1701;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1706;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1709;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
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
        stickynote() {
            let _localctx = new StickynoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 130, bitmarkParser.RULE_stickynote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1711;
                    this.match(bitmarkParser.BitStickynote);
                    this.state = 1712;
                    this.format();
                    this.state = 1713;
                    this.match(bitmarkParser.CL);
                    this.state = 1717;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1714;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1719;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1727;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1720;
                                        this.bitElem();
                                        this.state = 1724;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1721;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1726;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1729;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
        quote() {
            let _localctx = new QuoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 132, bitmarkParser.RULE_quote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1731;
                    this.match(bitmarkParser.BitQuote);
                    this.state = 1732;
                    this.format();
                    this.state = 1733;
                    this.match(bitmarkParser.CL);
                    this.state = 1737;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1734;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1739;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1747;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1740;
                                        this.bitElem();
                                        this.state = 1744;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1741;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1746;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1749;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
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
        footnote() {
            let _localctx = new FootnoteContext(this._ctx, this.state);
            this.enterRule(_localctx, 134, bitmarkParser.RULE_footnote);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1751;
                    this.match(bitmarkParser.BitFootnote);
                    this.state = 1752;
                    this.format();
                    this.state = 1753;
                    this.match(bitmarkParser.CL);
                    this.state = 1757;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1754;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1759;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1767;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1760;
                                        this.bitElem();
                                        this.state = 1764;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1761;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1766;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1769;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
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
        hintbit() {
            let _localctx = new HintbitContext(this._ctx, this.state);
            this.enterRule(_localctx, 136, bitmarkParser.RULE_hintbit);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1771;
                    this.match(bitmarkParser.BitHint);
                    this.state = 1772;
                    this.format();
                    this.state = 1773;
                    this.match(bitmarkParser.CL);
                    this.state = 1777;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1774;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1779;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1787;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1780;
                                        this.bitElem();
                                        this.state = 1784;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1781;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1786;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1789;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
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
        examplebit() {
            let _localctx = new ExamplebitContext(this._ctx, this.state);
            this.enterRule(_localctx, 138, bitmarkParser.RULE_examplebit);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1791;
                    this.match(bitmarkParser.BitExample);
                    this.state = 1792;
                    this.format();
                    this.state = 1793;
                    this.match(bitmarkParser.CL);
                    this.state = 1797;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1794;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1799;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1807;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1800;
                                        this.bitElem();
                                        this.state = 1804;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1801;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1806;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1809;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
        vendor_padlet_embed() {
            let _localctx = new Vendor_padlet_embedContext(this._ctx, this.state);
            this.enterRule(_localctx, 140, bitmarkParser.RULE_vendor_padlet_embed);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1811;
                    this.match(bitmarkParser.BitVendorPadletEmbed);
                    this.state = 1812;
                    this.format();
                    this.state = 1813;
                    this.match(bitmarkParser.CL);
                    this.state = 1817;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1814;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1819;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1827;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1820;
                                        this.bitElem();
                                        this.state = 1824;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1821;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1826;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1829;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
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
        scorm() {
            let _localctx = new ScormContext(this._ctx, this.state);
            this.enterRule(_localctx, 142, bitmarkParser.RULE_scorm);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1831;
                    this.match(bitmarkParser.BitScorm);
                    this.state = 1832;
                    this.format();
                    this.state = 1833;
                    this.match(bitmarkParser.CL);
                    this.state = 1837;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1834;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1839;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1847;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1840;
                                        this.bitElem();
                                        this.state = 1844;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1841;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1846;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1849;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
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
        message() {
            let _localctx = new MessageContext(this._ctx, this.state);
            this.enterRule(_localctx, 144, bitmarkParser.RULE_message);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1851;
                    this.match(bitmarkParser.BitMessage);
                    this.state = 1852;
                    this.format();
                    this.state = 1853;
                    this.match(bitmarkParser.CL);
                    this.state = 1857;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1854;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1859;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1867;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1860;
                                        this.bitElem();
                                        this.state = 1864;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1861;
                                                        this.match(bitmarkParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1866;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1869;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
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
        bot_interview() {
            let _localctx = new Bot_interviewContext(this._ctx, this.state);
            this.enterRule(_localctx, 146, bitmarkParser.RULE_bot_interview);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1871;
                    this.match(bitmarkParser.BitBotint);
                    this.state = 1872;
                    this.format();
                    this.state = 1873;
                    this.match(bitmarkParser.CL);
                    this.state = 1884;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1874;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1875;
                                        this.bot_choice();
                                        this.state = 1881;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2) {
                                            {
                                                {
                                                    this.state = 1876;
                                                    this.sspl();
                                                    this.state = 1877;
                                                    this.bot_choice();
                                                }
                                            }
                                            this.state = 1883;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1886;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 1888;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1892;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1889;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1894;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                    }
                    this.state = 1908;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 241, this._ctx)) {
                        case 1:
                            {
                                this.state = 1895;
                                this.resource();
                                this.state = 1905;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1899;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1896;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1901;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1902;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1907;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 240, this._ctx);
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
        bot_choice() {
            let _localctx = new Bot_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 148, bitmarkParser.RULE_bot_choice);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1917;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1917;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 242, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1910;
                                        this.words();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1911;
                                        this.instruction();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1912;
                                        this.audiobit();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 1913;
                                        this.gap();
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 1914;
                                        this.choice_plus();
                                    }
                                    break;
                                case 6:
                                    {
                                        this.state = 1915;
                                        this.choice_minus();
                                    }
                                    break;
                                case 7:
                                    {
                                        this.state = 1916;
                                        this.choice_star();
                                    }
                                    break;
                            }
                        }
                        this.state = 1919;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (bitmarkParser.OPU - 83)) | (1 << (bitmarkParser.OPB - 83)) | (1 << (bitmarkParser.OPP - 83)) | (1 << (bitmarkParser.OPM - 83)) | (1 << (bitmarkParser.OPR - 83)) | (1 << (bitmarkParser.OPC - 83)) | (1 << (bitmarkParser.AMP - 83)) | (1 << (bitmarkParser.Greater - 83)) | (1 << (bitmarkParser.Less - 83)) | (1 << (bitmarkParser.RightAngle - 83)) | (1 << (bitmarkParser.RightArrow - 83)) | (1 << (bitmarkParser.QUOTE_INDEX - 83)))) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & ((1 << (bitmarkParser.SENTENCE - 115)) | (1 << (bitmarkParser.AmpAudio - 115)) | (1 << (bitmarkParser.AmpImage - 115)))) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & ((1 << (bitmarkParser.AmpVideo - 149)) | (1 << (bitmarkParser.AmpArticle - 149)) | (1 << (bitmarkParser.AmpDocument - 149)) | (1 << (bitmarkParser.AmpApp - 149)) | (1 << (bitmarkParser.AmpWebsite - 149)) | (1 << (bitmarkParser.AmpStillImageFilm - 149)) | (1 << (bitmarkParser.OpAmpAudio - 149)) | (1 << (bitmarkParser.AmpAudioLink - 149)) | (1 << (bitmarkParser.AmpImageLink - 149)) | (1 << (bitmarkParser.AmpVideoLink - 149)) | (1 << (bitmarkParser.AmpArticleLink - 149)) | (1 << (bitmarkParser.AmpDocumentLink - 149)) | (1 << (bitmarkParser.AmpAppLink - 149)) | (1 << (bitmarkParser.AmpWebsiteLink - 149)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 149)) | (1 << (bitmarkParser.OpAmpAudioLink - 149)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 150, bitmarkParser.RULE_rating);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1921;
                    this.match(bitmarkParser.BitRating);
                    this.state = 1922;
                    this.format();
                    this.state = 1923;
                    this.match(bitmarkParser.CL);
                    this.state = 1927;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1924;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1929;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1939;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPDOLL - 77)) | (1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPRANGLES - 77)) | (1 << (bitmarkParser.OPRANGLEL - 77)) | (1 << (bitmarkParser.OPDANGLE - 77)) | (1 << (bitmarkParser.OPU - 77)) | (1 << (bitmarkParser.OPB - 77)) | (1 << (bitmarkParser.OPQ - 77)) | (1 << (bitmarkParser.OPA - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.OPHASH - 77)) | (1 << (bitmarkParser.OPC - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (bitmarkParser.DCANY - 109)) | (1 << (bitmarkParser.ArticleText - 109)) | (1 << (bitmarkParser.NUMERIC - 109)) | (1 << (bitmarkParser.STRING - 109)) | (1 << (bitmarkParser.SENTENCE - 109)) | (1 << (bitmarkParser.AtProgress - 109)) | (1 << (bitmarkParser.AtReference - 109)) | (1 << (bitmarkParser.AtProgressPoints - 109)) | (1 << (bitmarkParser.AtExampleWithStr - 109)) | (1 << (bitmarkParser.AtExamplecol - 109)) | (1 << (bitmarkParser.AtExamplecl - 109)) | (1 << (bitmarkParser.AtPartialAnswerS - 109)) | (1 << (bitmarkParser.AtPartialAnswer - 109)) | (1 << (bitmarkParser.AtLabeltrue - 109)) | (1 << (bitmarkParser.AtLabelfalse - 109)) | (1 << (bitmarkParser.OpAtCopyright - 109)) | (1 << (bitmarkParser.OpAtIsTracked - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 141)) | (1 << (bitmarkParser.AtDate - 141)) | (1 << (bitmarkParser.AmpAudio - 141)) | (1 << (bitmarkParser.AmpImage - 141)) | (1 << (bitmarkParser.AmpVideo - 141)) | (1 << (bitmarkParser.AmpArticle - 141)) | (1 << (bitmarkParser.AmpDocument - 141)) | (1 << (bitmarkParser.AmpApp - 141)) | (1 << (bitmarkParser.AmpWebsite - 141)) | (1 << (bitmarkParser.AmpStillImageFilm - 141)) | (1 << (bitmarkParser.OpAmpAudio - 141)) | (1 << (bitmarkParser.OpAmpImage - 141)) | (1 << (bitmarkParser.OpAmpImageZoom - 141)) | (1 << (bitmarkParser.OpAmpImageWAudio - 141)) | (1 << (bitmarkParser.OpAmpVideo - 141)) | (1 << (bitmarkParser.OpAmpArticle - 141)) | (1 << (bitmarkParser.OpAmpDocument - 141)) | (1 << (bitmarkParser.OpAmpApp - 141)) | (1 << (bitmarkParser.OpAmpWebsite - 141)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 141)) | (1 << (bitmarkParser.BracEnclose - 141)) | (1 << (bitmarkParser.AmpAudioLink - 141)) | (1 << (bitmarkParser.AmpImageLink - 141)) | (1 << (bitmarkParser.AmpVideoLink - 141)) | (1 << (bitmarkParser.AmpArticleLink - 141)) | (1 << (bitmarkParser.AmpDocumentLink - 141)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (bitmarkParser.AmpAppLink - 173)) | (1 << (bitmarkParser.AmpWebsiteLink - 173)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.OpAmpAudioLink - 173)) | (1 << (bitmarkParser.OpAmpImageLink - 173)) | (1 << (bitmarkParser.OpAmpVideoLink - 173)) | (1 << (bitmarkParser.OpAmpArticleLink - 173)) | (1 << (bitmarkParser.OpAmpDocumentLink - 173)) | (1 << (bitmarkParser.OpAmpAppLink - 173)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 173)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.BitmarkMinus - 173)) | (1 << (bitmarkParser.BitmarkPlus - 173)) | (1 << (bitmarkParser.URL - 173)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
                        {
                            {
                                this.state = 1930;
                                this.bitElem();
                                this.state = 1934;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 1931;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 1936;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1941;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1950;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1942;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1943;
                                        this.s_and_w();
                                        this.state = 1946;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1944;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 1945;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 1948;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1952;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 248, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 1954;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1958;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1955;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 1960;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
                    }
                    this.state = 1974;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 252, this._ctx)) {
                        case 1:
                            {
                                this.state = 1961;
                                this.resource();
                                this.state = 1971;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1965;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 1962;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 1967;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 1968;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 1973;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
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
        bullet_item() {
            let _localctx = new Bullet_itemContext(this._ctx, this.state);
            this.enterRule(_localctx, 152, bitmarkParser.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1976;
                    this.match(bitmarkParser.OPBUL);
                    this.state = 1977;
                    this.s_and_w();
                    this.state = 1978;
                    this.match(bitmarkParser.CL);
                    this.state = 1980;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.AtPoints) {
                        {
                            this.state = 1979;
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
        survey() {
            let _localctx = new SurveyContext(this._ctx, this.state);
            this.enterRule(_localctx, 154, bitmarkParser.RULE_survey);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1982;
                    this.match(bitmarkParser.BitSurvey);
                    this.state = 1983;
                    this.format();
                    this.state = 1984;
                    this.match(bitmarkParser.CL);
                    this.state = 1988;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 1985;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 1990;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2000;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPDOLL - 77)) | (1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPRANGLES - 77)) | (1 << (bitmarkParser.OPRANGLEL - 77)) | (1 << (bitmarkParser.OPDANGLE - 77)) | (1 << (bitmarkParser.OPU - 77)) | (1 << (bitmarkParser.OPB - 77)) | (1 << (bitmarkParser.OPQ - 77)) | (1 << (bitmarkParser.OPA - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.OPHASH - 77)) | (1 << (bitmarkParser.OPC - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (bitmarkParser.DCANY - 109)) | (1 << (bitmarkParser.ArticleText - 109)) | (1 << (bitmarkParser.NUMERIC - 109)) | (1 << (bitmarkParser.STRING - 109)) | (1 << (bitmarkParser.SENTENCE - 109)) | (1 << (bitmarkParser.AtProgress - 109)) | (1 << (bitmarkParser.AtReference - 109)) | (1 << (bitmarkParser.AtProgressPoints - 109)) | (1 << (bitmarkParser.AtExampleWithStr - 109)) | (1 << (bitmarkParser.AtExamplecol - 109)) | (1 << (bitmarkParser.AtExamplecl - 109)) | (1 << (bitmarkParser.AtPartialAnswerS - 109)) | (1 << (bitmarkParser.AtPartialAnswer - 109)) | (1 << (bitmarkParser.AtLabeltrue - 109)) | (1 << (bitmarkParser.AtLabelfalse - 109)) | (1 << (bitmarkParser.OpAtCopyright - 109)) | (1 << (bitmarkParser.OpAtIsTracked - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 141)) | (1 << (bitmarkParser.AtDate - 141)) | (1 << (bitmarkParser.AmpAudio - 141)) | (1 << (bitmarkParser.AmpImage - 141)) | (1 << (bitmarkParser.AmpVideo - 141)) | (1 << (bitmarkParser.AmpArticle - 141)) | (1 << (bitmarkParser.AmpDocument - 141)) | (1 << (bitmarkParser.AmpApp - 141)) | (1 << (bitmarkParser.AmpWebsite - 141)) | (1 << (bitmarkParser.AmpStillImageFilm - 141)) | (1 << (bitmarkParser.OpAmpAudio - 141)) | (1 << (bitmarkParser.OpAmpImage - 141)) | (1 << (bitmarkParser.OpAmpImageZoom - 141)) | (1 << (bitmarkParser.OpAmpImageWAudio - 141)) | (1 << (bitmarkParser.OpAmpVideo - 141)) | (1 << (bitmarkParser.OpAmpArticle - 141)) | (1 << (bitmarkParser.OpAmpDocument - 141)) | (1 << (bitmarkParser.OpAmpApp - 141)) | (1 << (bitmarkParser.OpAmpWebsite - 141)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 141)) | (1 << (bitmarkParser.BracEnclose - 141)) | (1 << (bitmarkParser.AmpAudioLink - 141)) | (1 << (bitmarkParser.AmpImageLink - 141)) | (1 << (bitmarkParser.AmpVideoLink - 141)) | (1 << (bitmarkParser.AmpArticleLink - 141)) | (1 << (bitmarkParser.AmpDocumentLink - 141)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (bitmarkParser.AmpAppLink - 173)) | (1 << (bitmarkParser.AmpWebsiteLink - 173)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.OpAmpAudioLink - 173)) | (1 << (bitmarkParser.OpAmpImageLink - 173)) | (1 << (bitmarkParser.OpAmpVideoLink - 173)) | (1 << (bitmarkParser.OpAmpArticleLink - 173)) | (1 << (bitmarkParser.OpAmpDocumentLink - 173)) | (1 << (bitmarkParser.OpAmpAppLink - 173)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 173)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.BitmarkMinus - 173)) | (1 << (bitmarkParser.BitmarkPlus - 173)) | (1 << (bitmarkParser.URL - 173)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
                        {
                            {
                                this.state = 1991;
                                this.bitElem();
                                this.state = 1995;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 1992;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 1997;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2002;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2018;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2003;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2005;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                            {
                                                this.state = 2004;
                                                this.s_and_w();
                                            }
                                        }
                                        this.state = 2014;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2010;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === bitmarkParser.NL) {
                                                        {
                                                            {
                                                                this.state = 2007;
                                                                this.match(bitmarkParser.NL);
                                                            }
                                                        }
                                                        this.state = 2012;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 2013;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2016;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2020;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 2022;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        survey_1() {
            let _localctx = new Survey_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 156, bitmarkParser.RULE_survey_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2024;
                    this.match(bitmarkParser.BitSurvey1);
                    this.state = 2025;
                    this.format();
                    this.state = 2026;
                    this.match(bitmarkParser.CL);
                    this.state = 2030;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 2027;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2032;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2042;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPDOLL - 77)) | (1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPRANGLES - 77)) | (1 << (bitmarkParser.OPRANGLEL - 77)) | (1 << (bitmarkParser.OPDANGLE - 77)) | (1 << (bitmarkParser.OPU - 77)) | (1 << (bitmarkParser.OPB - 77)) | (1 << (bitmarkParser.OPQ - 77)) | (1 << (bitmarkParser.OPA - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.OPHASH - 77)) | (1 << (bitmarkParser.OPC - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (bitmarkParser.DCANY - 109)) | (1 << (bitmarkParser.ArticleText - 109)) | (1 << (bitmarkParser.NUMERIC - 109)) | (1 << (bitmarkParser.STRING - 109)) | (1 << (bitmarkParser.SENTENCE - 109)) | (1 << (bitmarkParser.AtProgress - 109)) | (1 << (bitmarkParser.AtReference - 109)) | (1 << (bitmarkParser.AtProgressPoints - 109)) | (1 << (bitmarkParser.AtExampleWithStr - 109)) | (1 << (bitmarkParser.AtExamplecol - 109)) | (1 << (bitmarkParser.AtExamplecl - 109)) | (1 << (bitmarkParser.AtPartialAnswerS - 109)) | (1 << (bitmarkParser.AtPartialAnswer - 109)) | (1 << (bitmarkParser.AtLabeltrue - 109)) | (1 << (bitmarkParser.AtLabelfalse - 109)) | (1 << (bitmarkParser.OpAtCopyright - 109)) | (1 << (bitmarkParser.OpAtIsTracked - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 141)) | (1 << (bitmarkParser.AtDate - 141)) | (1 << (bitmarkParser.AmpAudio - 141)) | (1 << (bitmarkParser.AmpImage - 141)) | (1 << (bitmarkParser.AmpVideo - 141)) | (1 << (bitmarkParser.AmpArticle - 141)) | (1 << (bitmarkParser.AmpDocument - 141)) | (1 << (bitmarkParser.AmpApp - 141)) | (1 << (bitmarkParser.AmpWebsite - 141)) | (1 << (bitmarkParser.AmpStillImageFilm - 141)) | (1 << (bitmarkParser.OpAmpAudio - 141)) | (1 << (bitmarkParser.OpAmpImage - 141)) | (1 << (bitmarkParser.OpAmpImageZoom - 141)) | (1 << (bitmarkParser.OpAmpImageWAudio - 141)) | (1 << (bitmarkParser.OpAmpVideo - 141)) | (1 << (bitmarkParser.OpAmpArticle - 141)) | (1 << (bitmarkParser.OpAmpDocument - 141)) | (1 << (bitmarkParser.OpAmpApp - 141)) | (1 << (bitmarkParser.OpAmpWebsite - 141)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 141)) | (1 << (bitmarkParser.BracEnclose - 141)) | (1 << (bitmarkParser.AmpAudioLink - 141)) | (1 << (bitmarkParser.AmpImageLink - 141)) | (1 << (bitmarkParser.AmpVideoLink - 141)) | (1 << (bitmarkParser.AmpArticleLink - 141)) | (1 << (bitmarkParser.AmpDocumentLink - 141)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (bitmarkParser.AmpAppLink - 173)) | (1 << (bitmarkParser.AmpWebsiteLink - 173)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.OpAmpAudioLink - 173)) | (1 << (bitmarkParser.OpAmpImageLink - 173)) | (1 << (bitmarkParser.OpAmpVideoLink - 173)) | (1 << (bitmarkParser.OpAmpArticleLink - 173)) | (1 << (bitmarkParser.OpAmpDocumentLink - 173)) | (1 << (bitmarkParser.OpAmpAppLink - 173)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 173)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.BitmarkMinus - 173)) | (1 << (bitmarkParser.BitmarkPlus - 173)) | (1 << (bitmarkParser.URL - 173)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
                        {
                            {
                                this.state = 2033;
                                this.bitElem();
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
                            }
                        }
                        this.state = 2044;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2053;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2045;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2046;
                                        this.s_and_w();
                                        this.state = 2049;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2047;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 2048;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2051;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2055;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 2057;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        survey_anonymous() {
            let _localctx = new Survey_anonymousContext(this._ctx, this.state);
            this.enterRule(_localctx, 158, bitmarkParser.RULE_survey_anonymous);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2059;
                    this.match(bitmarkParser.BitSurveyanon);
                    this.state = 2060;
                    this.format();
                    this.state = 2061;
                    this.match(bitmarkParser.CL);
                    this.state = 2065;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 2062;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2067;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2077;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPDOLL - 77)) | (1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPRANGLES - 77)) | (1 << (bitmarkParser.OPRANGLEL - 77)) | (1 << (bitmarkParser.OPDANGLE - 77)) | (1 << (bitmarkParser.OPU - 77)) | (1 << (bitmarkParser.OPB - 77)) | (1 << (bitmarkParser.OPQ - 77)) | (1 << (bitmarkParser.OPA - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.OPHASH - 77)) | (1 << (bitmarkParser.OPC - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (bitmarkParser.DCANY - 109)) | (1 << (bitmarkParser.ArticleText - 109)) | (1 << (bitmarkParser.NUMERIC - 109)) | (1 << (bitmarkParser.STRING - 109)) | (1 << (bitmarkParser.SENTENCE - 109)) | (1 << (bitmarkParser.AtProgress - 109)) | (1 << (bitmarkParser.AtReference - 109)) | (1 << (bitmarkParser.AtProgressPoints - 109)) | (1 << (bitmarkParser.AtExampleWithStr - 109)) | (1 << (bitmarkParser.AtExamplecol - 109)) | (1 << (bitmarkParser.AtExamplecl - 109)) | (1 << (bitmarkParser.AtPartialAnswerS - 109)) | (1 << (bitmarkParser.AtPartialAnswer - 109)) | (1 << (bitmarkParser.AtLabeltrue - 109)) | (1 << (bitmarkParser.AtLabelfalse - 109)) | (1 << (bitmarkParser.OpAtCopyright - 109)) | (1 << (bitmarkParser.OpAtIsTracked - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 141)) | (1 << (bitmarkParser.AtDate - 141)) | (1 << (bitmarkParser.AmpAudio - 141)) | (1 << (bitmarkParser.AmpImage - 141)) | (1 << (bitmarkParser.AmpVideo - 141)) | (1 << (bitmarkParser.AmpArticle - 141)) | (1 << (bitmarkParser.AmpDocument - 141)) | (1 << (bitmarkParser.AmpApp - 141)) | (1 << (bitmarkParser.AmpWebsite - 141)) | (1 << (bitmarkParser.AmpStillImageFilm - 141)) | (1 << (bitmarkParser.OpAmpAudio - 141)) | (1 << (bitmarkParser.OpAmpImage - 141)) | (1 << (bitmarkParser.OpAmpImageZoom - 141)) | (1 << (bitmarkParser.OpAmpImageWAudio - 141)) | (1 << (bitmarkParser.OpAmpVideo - 141)) | (1 << (bitmarkParser.OpAmpArticle - 141)) | (1 << (bitmarkParser.OpAmpDocument - 141)) | (1 << (bitmarkParser.OpAmpApp - 141)) | (1 << (bitmarkParser.OpAmpWebsite - 141)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 141)) | (1 << (bitmarkParser.BracEnclose - 141)) | (1 << (bitmarkParser.AmpAudioLink - 141)) | (1 << (bitmarkParser.AmpImageLink - 141)) | (1 << (bitmarkParser.AmpVideoLink - 141)) | (1 << (bitmarkParser.AmpArticleLink - 141)) | (1 << (bitmarkParser.AmpDocumentLink - 141)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (bitmarkParser.AmpAppLink - 173)) | (1 << (bitmarkParser.AmpWebsiteLink - 173)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.OpAmpAudioLink - 173)) | (1 << (bitmarkParser.OpAmpImageLink - 173)) | (1 << (bitmarkParser.OpAmpVideoLink - 173)) | (1 << (bitmarkParser.OpAmpArticleLink - 173)) | (1 << (bitmarkParser.OpAmpDocumentLink - 173)) | (1 << (bitmarkParser.OpAmpAppLink - 173)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 173)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.BitmarkMinus - 173)) | (1 << (bitmarkParser.BitmarkPlus - 173)) | (1 << (bitmarkParser.URL - 173)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
                        {
                            {
                                this.state = 2068;
                                this.bitElem();
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
                            }
                        }
                        this.state = 2079;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2088;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2080;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2081;
                                        this.s_and_w();
                                        this.state = 2084;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2082;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 2083;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2086;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2090;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 2092;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        survey_anonymous_1() {
            let _localctx = new Survey_anonymous_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 160, bitmarkParser.RULE_survey_anonymous_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2094;
                    this.match(bitmarkParser.BitSurveyanon1);
                    this.state = 2095;
                    this.format();
                    this.state = 2096;
                    this.match(bitmarkParser.CL);
                    this.state = 2100;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 2097;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2102;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2112;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPDOLL - 77)) | (1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPRANGLES - 77)) | (1 << (bitmarkParser.OPRANGLEL - 77)) | (1 << (bitmarkParser.OPDANGLE - 77)) | (1 << (bitmarkParser.OPU - 77)) | (1 << (bitmarkParser.OPB - 77)) | (1 << (bitmarkParser.OPQ - 77)) | (1 << (bitmarkParser.OPA - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.OPHASH - 77)) | (1 << (bitmarkParser.OPC - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (bitmarkParser.DCANY - 109)) | (1 << (bitmarkParser.ArticleText - 109)) | (1 << (bitmarkParser.NUMERIC - 109)) | (1 << (bitmarkParser.STRING - 109)) | (1 << (bitmarkParser.SENTENCE - 109)) | (1 << (bitmarkParser.AtProgress - 109)) | (1 << (bitmarkParser.AtReference - 109)) | (1 << (bitmarkParser.AtProgressPoints - 109)) | (1 << (bitmarkParser.AtExampleWithStr - 109)) | (1 << (bitmarkParser.AtExamplecol - 109)) | (1 << (bitmarkParser.AtExamplecl - 109)) | (1 << (bitmarkParser.AtPartialAnswerS - 109)) | (1 << (bitmarkParser.AtPartialAnswer - 109)) | (1 << (bitmarkParser.AtLabeltrue - 109)) | (1 << (bitmarkParser.AtLabelfalse - 109)) | (1 << (bitmarkParser.OpAtCopyright - 109)) | (1 << (bitmarkParser.OpAtIsTracked - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 141)) | (1 << (bitmarkParser.AtDate - 141)) | (1 << (bitmarkParser.AmpAudio - 141)) | (1 << (bitmarkParser.AmpImage - 141)) | (1 << (bitmarkParser.AmpVideo - 141)) | (1 << (bitmarkParser.AmpArticle - 141)) | (1 << (bitmarkParser.AmpDocument - 141)) | (1 << (bitmarkParser.AmpApp - 141)) | (1 << (bitmarkParser.AmpWebsite - 141)) | (1 << (bitmarkParser.AmpStillImageFilm - 141)) | (1 << (bitmarkParser.OpAmpAudio - 141)) | (1 << (bitmarkParser.OpAmpImage - 141)) | (1 << (bitmarkParser.OpAmpImageZoom - 141)) | (1 << (bitmarkParser.OpAmpImageWAudio - 141)) | (1 << (bitmarkParser.OpAmpVideo - 141)) | (1 << (bitmarkParser.OpAmpArticle - 141)) | (1 << (bitmarkParser.OpAmpDocument - 141)) | (1 << (bitmarkParser.OpAmpApp - 141)) | (1 << (bitmarkParser.OpAmpWebsite - 141)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 141)) | (1 << (bitmarkParser.BracEnclose - 141)) | (1 << (bitmarkParser.AmpAudioLink - 141)) | (1 << (bitmarkParser.AmpImageLink - 141)) | (1 << (bitmarkParser.AmpVideoLink - 141)) | (1 << (bitmarkParser.AmpArticleLink - 141)) | (1 << (bitmarkParser.AmpDocumentLink - 141)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (bitmarkParser.AmpAppLink - 173)) | (1 << (bitmarkParser.AmpWebsiteLink - 173)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.OpAmpAudioLink - 173)) | (1 << (bitmarkParser.OpAmpImageLink - 173)) | (1 << (bitmarkParser.OpAmpVideoLink - 173)) | (1 << (bitmarkParser.OpAmpArticleLink - 173)) | (1 << (bitmarkParser.OpAmpDocumentLink - 173)) | (1 << (bitmarkParser.OpAmpAppLink - 173)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 173)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.BitmarkMinus - 173)) | (1 << (bitmarkParser.BitmarkPlus - 173)) | (1 << (bitmarkParser.URL - 173)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
                        {
                            {
                                this.state = 2103;
                                this.bitElem();
                                this.state = 2107;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 2104;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 2109;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2114;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2123;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2115;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2116;
                                        this.s_and_w();
                                        this.state = 2119;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2117;
                                                    this.match(bitmarkParser.NL);
                                                    this.state = 2118;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2121;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2125;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 2127;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
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
        self_assessment() {
            let _localctx = new Self_assessmentContext(this._ctx, this.state);
            this.enterRule(_localctx, 162, bitmarkParser.RULE_self_assessment);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2129;
                    this.match(bitmarkParser.BitSelfassess);
                    this.state = 2130;
                    this.format();
                    this.state = 2131;
                    this.match(bitmarkParser.CL);
                    this.state = 2135;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.NL) {
                        {
                            {
                                this.state = 2132;
                                this.match(bitmarkParser.NL);
                            }
                        }
                        this.state = 2137;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (bitmarkParser.OPDOLL - 77)) | (1 << (bitmarkParser.OPESC - 77)) | (1 << (bitmarkParser.OPRANGLES - 77)) | (1 << (bitmarkParser.OPRANGLEL - 77)) | (1 << (bitmarkParser.OPDANGLE - 77)) | (1 << (bitmarkParser.OPU - 77)) | (1 << (bitmarkParser.OPB - 77)) | (1 << (bitmarkParser.OPQ - 77)) | (1 << (bitmarkParser.OPA - 77)) | (1 << (bitmarkParser.OPS - 77)) | (1 << (bitmarkParser.OPHASH - 77)) | (1 << (bitmarkParser.OPC - 77)) | (1 << (bitmarkParser.COLON - 77)) | (1 << (bitmarkParser.AMP - 77)) | (1 << (bitmarkParser.Greater - 77)) | (1 << (bitmarkParser.Less - 77)) | (1 << (bitmarkParser.RightAngle - 77)) | (1 << (bitmarkParser.RightArrow - 77)) | (1 << (bitmarkParser.DBLEQ - 77)) | (1 << (bitmarkParser.QUOTE_INDEX - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (bitmarkParser.DCANY - 109)) | (1 << (bitmarkParser.ArticleText - 109)) | (1 << (bitmarkParser.NUMERIC - 109)) | (1 << (bitmarkParser.STRING - 109)) | (1 << (bitmarkParser.SENTENCE - 109)) | (1 << (bitmarkParser.AtProgress - 109)) | (1 << (bitmarkParser.AtReference - 109)) | (1 << (bitmarkParser.AtProgressPoints - 109)) | (1 << (bitmarkParser.AtExampleWithStr - 109)) | (1 << (bitmarkParser.AtExamplecol - 109)) | (1 << (bitmarkParser.AtExamplecl - 109)) | (1 << (bitmarkParser.AtPartialAnswerS - 109)) | (1 << (bitmarkParser.AtPartialAnswer - 109)) | (1 << (bitmarkParser.AtLabeltrue - 109)) | (1 << (bitmarkParser.AtLabelfalse - 109)) | (1 << (bitmarkParser.OpAtCopyright - 109)) | (1 << (bitmarkParser.OpAtIsTracked - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (bitmarkParser.OpAtIsInfoOnly - 141)) | (1 << (bitmarkParser.AtDate - 141)) | (1 << (bitmarkParser.AmpAudio - 141)) | (1 << (bitmarkParser.AmpImage - 141)) | (1 << (bitmarkParser.AmpVideo - 141)) | (1 << (bitmarkParser.AmpArticle - 141)) | (1 << (bitmarkParser.AmpDocument - 141)) | (1 << (bitmarkParser.AmpApp - 141)) | (1 << (bitmarkParser.AmpWebsite - 141)) | (1 << (bitmarkParser.AmpStillImageFilm - 141)) | (1 << (bitmarkParser.OpAmpAudio - 141)) | (1 << (bitmarkParser.OpAmpImage - 141)) | (1 << (bitmarkParser.OpAmpImageZoom - 141)) | (1 << (bitmarkParser.OpAmpImageWAudio - 141)) | (1 << (bitmarkParser.OpAmpVideo - 141)) | (1 << (bitmarkParser.OpAmpArticle - 141)) | (1 << (bitmarkParser.OpAmpDocument - 141)) | (1 << (bitmarkParser.OpAmpApp - 141)) | (1 << (bitmarkParser.OpAmpWebsite - 141)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 141)) | (1 << (bitmarkParser.BracEnclose - 141)) | (1 << (bitmarkParser.AmpAudioLink - 141)) | (1 << (bitmarkParser.AmpImageLink - 141)) | (1 << (bitmarkParser.AmpVideoLink - 141)) | (1 << (bitmarkParser.AmpArticleLink - 141)) | (1 << (bitmarkParser.AmpDocumentLink - 141)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (bitmarkParser.AmpAppLink - 173)) | (1 << (bitmarkParser.AmpWebsiteLink - 173)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.OpAmpAudioLink - 173)) | (1 << (bitmarkParser.OpAmpImageLink - 173)) | (1 << (bitmarkParser.OpAmpVideoLink - 173)) | (1 << (bitmarkParser.OpAmpArticleLink - 173)) | (1 << (bitmarkParser.OpAmpDocumentLink - 173)) | (1 << (bitmarkParser.OpAmpAppLink - 173)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 173)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 173)) | (1 << (bitmarkParser.BitmarkMinus - 173)) | (1 << (bitmarkParser.BitmarkPlus - 173)) | (1 << (bitmarkParser.URL - 173)))) !== 0) || _la === bitmarkParser.LIST_LINE) {
                        {
                            {
                                this.state = 2138;
                                this.bitElem();
                                this.state = 2142;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === bitmarkParser.NL) {
                                    {
                                        {
                                            this.state = 2139;
                                            this.match(bitmarkParser.NL);
                                        }
                                    }
                                    this.state = 2144;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2149;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2163;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2150;
                                        _la = this._input.LA(1);
                                        if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2151;
                                        this.self_assess_s_and_w();
                                        this.state = 2159;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2155;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === bitmarkParser.NL) {
                                                        {
                                                            {
                                                                this.state = 2152;
                                                                this.match(bitmarkParser.NL);
                                                            }
                                                        }
                                                        this.state = 2157;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 2158;
                                                    this.bullet_item();
                                                }
                                            }
                                            this.state = 2161;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.OPBUL || _la === bitmarkParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2165;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 2167;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.HSPL || _la === bitmarkParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 2171;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2168;
                                    this.match(bitmarkParser.NL);
                                }
                            }
                        }
                        this.state = 2173;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
                    }
                    this.state = 2187;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 285, this._ctx)) {
                        case 1:
                            {
                                this.state = 2174;
                                this.resource();
                                this.state = 2184;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2178;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === bitmarkParser.NL) {
                                                    {
                                                        {
                                                            this.state = 2175;
                                                            this.match(bitmarkParser.NL);
                                                        }
                                                    }
                                                    this.state = 2180;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 2181;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 2186;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 284, this._ctx);
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
        self_assess_s_and_w() {
            let _localctx = new Self_assess_s_and_wContext(this._ctx, this.state);
            this.enterRule(_localctx, 164, bitmarkParser.RULE_self_assess_s_and_w);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2190;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2189;
                                        _la = this._input.LA(1);
                                        if (_la <= 0 || (_la === bitmarkParser.OPBUL)) {
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
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2192;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
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
        atpoint() {
            let _localctx = new AtpointContext(this._ctx, this.state);
            this.enterRule(_localctx, 166, bitmarkParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2194;
                    this.match(bitmarkParser.AtPoints);
                    this.state = 2195;
                    this.match(bitmarkParser.NUMERIC);
                    this.state = 2196;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 168, bitmarkParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2201;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 287, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2198;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 2203;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 287, this._ctx);
                    }
                    this.state = 2208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpImageZoom - 145)) | (1 << (bitmarkParser.AmpImageWAudio - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpPdf - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || _la === bitmarkParser.ColonText) {
                        {
                            this.state = 2206;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.ColonText:
                                    {
                                        this.state = 2204;
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
                                        this.state = 2205;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 2210;
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
            this.enterRule(_localctx, 170, bitmarkParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2211;
                    _la = this._input.LA(1);
                    if (!(((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & ((1 << (bitmarkParser.AmpArticle - 150)) | (1 << (bitmarkParser.AmpDocument - 150)) | (1 << (bitmarkParser.AmpWebsite - 150)) | (1 << (bitmarkParser.AmpStillImageFilm - 150)) | (1 << (bitmarkParser.AmpAudioLink - 150)) | (1 << (bitmarkParser.AmpImageLink - 150)) | (1 << (bitmarkParser.AmpVideoLink - 150)) | (1 << (bitmarkParser.AmpArticleLink - 150)) | (1 << (bitmarkParser.AmpDocumentLink - 150)) | (1 << (bitmarkParser.AmpAppLink - 150)) | (1 << (bitmarkParser.AmpWebsiteLink - 150)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 150)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.Prosemirror - 184)) | (1 << (bitmarkParser.Placeholder - 184)))) !== 0))) {
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
            this.enterRule(_localctx, 172, bitmarkParser.RULE_resource_format_extra);
            try {
                this.state = 2222;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AmpImage:
                    case bitmarkParser.AmpImageZoom:
                    case bitmarkParser.AmpImageWAudio:
                    case bitmarkParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2213;
                            this.image_format();
                        }
                        break;
                    case bitmarkParser.AmpAudio:
                    case bitmarkParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2214;
                            this.audio_format();
                        }
                        break;
                    case bitmarkParser.AmpVideo:
                    case bitmarkParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2215;
                            this.video_format();
                        }
                        break;
                    case bitmarkParser.AmpArticle:
                    case bitmarkParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2216;
                            this.article_format();
                        }
                        break;
                    case bitmarkParser.AmpDocument:
                    case bitmarkParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 2217;
                            this.document_format();
                        }
                        break;
                    case bitmarkParser.AmpApp:
                    case bitmarkParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 2218;
                            this.app_format();
                        }
                        break;
                    case bitmarkParser.AmpWebsite:
                    case bitmarkParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 2219;
                            this.website_format();
                        }
                        break;
                    case bitmarkParser.AmpStillImageFilm:
                    case bitmarkParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 2220;
                            this.stillimagefilm_format();
                        }
                        break;
                    case bitmarkParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 2221;
                            this.match(bitmarkParser.AmpPdf);
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
            this.enterRule(_localctx, 174, bitmarkParser.RULE_image_format);
            let _la;
            try {
                this.state = 2238;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2224;
                            this.match(bitmarkParser.AmpImage);
                            this.state = 2227;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.Image_type:
                                    {
                                        {
                                            this.state = 2225;
                                            this.match(bitmarkParser.Image_type);
                                        }
                                    }
                                    break;
                                case bitmarkParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 2226;
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
                            this.state = 2229;
                            this.match(bitmarkParser.AmpImageLink);
                            this.state = 2231;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2230;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2233;
                            this.match(bitmarkParser.AmpImageZoom);
                            this.state = 2235;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2234;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2237;
                            this.match(bitmarkParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 176, bitmarkParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2240;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpVideo || _la === bitmarkParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 2243;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.COLON) {
                        {
                            this.state = 2241;
                            this.match(bitmarkParser.COLON);
                            this.state = 2242;
                            this.match(bitmarkParser.Video_type);
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
            this.enterRule(_localctx, 178, bitmarkParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2245;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpArticle || _la === bitmarkParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 180, bitmarkParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2247;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpDocument || _la === bitmarkParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 182, bitmarkParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2249;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpApp || _la === bitmarkParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 184, bitmarkParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2251;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpWebsite || _la === bitmarkParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 186, bitmarkParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2253;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.AmpStillImageFilm || _la === bitmarkParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 188, bitmarkParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2255;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpArticle || _la === bitmarkParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 190, bitmarkParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2257;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpDocument || _la === bitmarkParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 192, bitmarkParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2259;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpApp || _la === bitmarkParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 194, bitmarkParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2261;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpWebsite || _la === bitmarkParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 196, bitmarkParser.RULE_op_video_format);
            try {
                this.state = 2273;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2263;
                            this.match(bitmarkParser.OpAmpVideo);
                            this.state = 2266;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 296, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2264;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2265;
                                        this.match(bitmarkParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2268;
                            this.match(bitmarkParser.OpAmpVideoLink);
                            this.state = 2271;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 297, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2269;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2270;
                                        this.match(bitmarkParser.Video_type);
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
            this.enterRule(_localctx, 198, bitmarkParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2275;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.OpAmpStillImageFilm || _la === bitmarkParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 200, bitmarkParser.RULE_articlebit);
            try {
                this.state = 2283;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpArticle:
                    case bitmarkParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2277;
                            this.op_article_format();
                            this.state = 2278;
                            this.match(bitmarkParser.COLON);
                            this.state = 2279;
                            this.url();
                            this.state = 2280;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2282;
                            this.match(bitmarkParser.ArticleText);
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
            this.enterRule(_localctx, 202, bitmarkParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2285;
                    this.op_document_format();
                    this.state = 2286;
                    this.match(bitmarkParser.COLON);
                    this.state = 2287;
                    this.url();
                    this.state = 2288;
                    this.match(bitmarkParser.CL);
                    this.state = 2293;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPATALT) {
                        {
                            this.state = 2289;
                            this.match(bitmarkParser.OPATALT);
                            this.state = 2290;
                            this.words();
                            this.state = 2291;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 204, bitmarkParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2295;
                    this.op_website_format();
                    this.state = 2296;
                    this.match(bitmarkParser.COLON);
                    this.state = 2297;
                    this.url();
                    this.state = 2298;
                    this.match(bitmarkParser.CL);
                    this.state = 2303;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPATALT) {
                        {
                            this.state = 2299;
                            this.match(bitmarkParser.OPATALT);
                            this.state = 2300;
                            this.words();
                            this.state = 2301;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 206, bitmarkParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2305;
                    this.op_app_format();
                    this.state = 2306;
                    this.match(bitmarkParser.COLON);
                    this.state = 2309;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case bitmarkParser.URL:
                            {
                                this.state = 2307;
                                this.url();
                            }
                            break;
                        case bitmarkParser.TEL:
                            {
                                this.state = 2308;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 2311;
                    this.match(bitmarkParser.CL);
                    this.state = 2316;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.OPATALT) {
                        {
                            this.state = 2312;
                            this.match(bitmarkParser.OPATALT);
                            this.state = 2313;
                            this.words();
                            this.state = 2314;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 208, bitmarkParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2318;
                    this.stillimg_one();
                    this.state = 2322;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2319;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 2324;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 210, bitmarkParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2325;
                    this.op_stillimagefilm_format();
                    this.state = 2326;
                    this.match(bitmarkParser.COLON);
                    this.state = 2330;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 2327;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 2332;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2333;
                    this.url();
                    this.state = 2334;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 212, bitmarkParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2336;
                    this.video_one();
                    this.state = 2340;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2337;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 2342;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 214, bitmarkParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2343;
                    this.op_video_format();
                    this.state = 2344;
                    this.match(bitmarkParser.COLON);
                    this.state = 2345;
                    this.url();
                    this.state = 2346;
                    this.match(bitmarkParser.CL);
                    this.state = 2351;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 307, this._ctx)) {
                        case 1:
                            {
                                this.state = 2347;
                                this.match(bitmarkParser.OPATALT);
                                this.state = 2348;
                                this.words();
                                this.state = 2349;
                                this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 216, bitmarkParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2353;
                    this.image_one();
                    this.state = 2357;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2354;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 2359;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 308, this._ctx);
                    }
                    this.state = 2362;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 309, this._ctx)) {
                        case 1:
                            {
                                this.state = 2360;
                                this.match(bitmarkParser.NL);
                                this.state = 2361;
                                this.match(bitmarkParser.ShowInIndex);
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
            this.enterRule(_localctx, 218, bitmarkParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2364;
                    this.op_image_format();
                    this.state = 2365;
                    this.match(bitmarkParser.COLON);
                    this.state = 2369;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === bitmarkParser.S) {
                        {
                            {
                                this.state = 2366;
                                this.match(bitmarkParser.S);
                            }
                        }
                        this.state = 2371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2372;
                    this.url();
                    this.state = 2373;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 220, bitmarkParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 2389;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2375;
                            this.match(bitmarkParser.OpAmpImage);
                            this.state = 2378;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.Image_type:
                                    {
                                        {
                                            this.state = 2376;
                                            this.match(bitmarkParser.Image_type);
                                        }
                                    }
                                    break;
                                case bitmarkParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 2377;
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
                            this.state = 2380;
                            this.match(bitmarkParser.OpAmpImageLink);
                            this.state = 2382;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2381;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2384;
                            this.match(bitmarkParser.OpAmpImageZoom);
                            this.state = 2386;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.Image_type) {
                                {
                                    this.state = 2385;
                                    this.match(bitmarkParser.Image_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2388;
                            this.match(bitmarkParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 222, bitmarkParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 2408;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2391;
                            this.match(bitmarkParser.AtSrc);
                            this.state = 2392;
                            this.match(bitmarkParser.COLON);
                            this.state = 2393;
                            this.url();
                            this.state = 2394;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtWidth:
                    case bitmarkParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2396;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2397;
                            this.match(bitmarkParser.COLON);
                            this.state = 2398;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2399;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPATALT:
                    case bitmarkParser.OpAtCaption:
                    case bitmarkParser.OpAtLicense:
                    case bitmarkParser.OpAtCopyright:
                    case bitmarkParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2400;
                            _la = this._input.LA(1);
                            if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (bitmarkParser.OPATALT - 133)) | (1 << (bitmarkParser.OpAtCaption - 133)) | (1 << (bitmarkParser.OpAtLicense - 133)) | (1 << (bitmarkParser.OpAtCopyright - 133)) | (1 << (bitmarkParser.OpAtSearch - 133)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2404;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2401;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2406;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
                            }
                            this.state = 2407;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 224, bitmarkParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 2427;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2410;
                            this.match(bitmarkParser.AtSrc);
                            this.state = 2411;
                            this.match(bitmarkParser.COLON);
                            this.state = 2412;
                            this.url();
                            this.state = 2413;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtWidth:
                    case bitmarkParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2415;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2416;
                            this.match(bitmarkParser.COLON);
                            this.state = 2417;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2418;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPATALT:
                    case bitmarkParser.OpAtCaption:
                    case bitmarkParser.OpAtLicense:
                    case bitmarkParser.OpAtCopyright:
                    case bitmarkParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2419;
                            _la = this._input.LA(1);
                            if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (bitmarkParser.OPATALT - 133)) | (1 << (bitmarkParser.OpAtCaption - 133)) | (1 << (bitmarkParser.OpAtLicense - 133)) | (1 << (bitmarkParser.OpAtCopyright - 133)) | (1 << (bitmarkParser.OpAtSearch - 133)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2423;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2420;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2425;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
                            }
                            this.state = 2426;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 226, bitmarkParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2429;
                    this.audio_one();
                    this.state = 2433;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2430;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 2435;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 228, bitmarkParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2436;
                    this.op_audio_format();
                    this.state = 2437;
                    this.match(bitmarkParser.COLON);
                    this.state = 2438;
                    this.url();
                    this.state = 2439;
                    this.match(bitmarkParser.CL);
                    this.state = 2444;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 320, this._ctx)) {
                        case 1:
                            {
                                this.state = 2440;
                                this.match(bitmarkParser.OPATALT);
                                this.state = 2441;
                                this.words();
                                this.state = 2442;
                                this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 230, bitmarkParser.RULE_audio_format);
            let _la;
            try {
                this.state = 2456;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2446;
                            this.match(bitmarkParser.AmpAudio);
                            this.state = 2449;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.COLON) {
                                {
                                    this.state = 2447;
                                    this.match(bitmarkParser.COLON);
                                    this.state = 2448;
                                    this.match(bitmarkParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case bitmarkParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2451;
                            this.match(bitmarkParser.AmpAudioLink);
                            this.state = 2454;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.COLON) {
                                {
                                    this.state = 2452;
                                    this.match(bitmarkParser.COLON);
                                    this.state = 2453;
                                    this.match(bitmarkParser.Audio_type);
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
            this.enterRule(_localctx, 232, bitmarkParser.RULE_op_audio_format);
            try {
                this.state = 2468;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2458;
                            this.match(bitmarkParser.OpAmpAudio);
                            this.state = 2461;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 324, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2459;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2460;
                                        this.match(bitmarkParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case bitmarkParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2463;
                            this.match(bitmarkParser.OpAmpAudioLink);
                            this.state = 2466;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 325, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2464;
                                        this.match(bitmarkParser.COLON);
                                        this.state = 2465;
                                        this.match(bitmarkParser.Audio_type);
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
            this.enterRule(_localctx, 234, bitmarkParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 2501;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPA:
                    case bitmarkParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2473;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.OPA:
                                    {
                                        this.state = 2470;
                                        this.match(bitmarkParser.OPA);
                                        this.state = 2471;
                                        this.s_and_w();
                                    }
                                    break;
                                case bitmarkParser.AtSrc:
                                    {
                                        this.state = 2472;
                                        this.match(bitmarkParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 2475;
                            this.match(bitmarkParser.COLON);
                            this.state = 2479;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2476;
                                            this.match(bitmarkParser.S);
                                        }
                                    }
                                }
                                this.state = 2481;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
                            }
                            this.state = 2484;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2484;
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
                                                this.state = 2482;
                                                this.s_and_w();
                                            }
                                            break;
                                        case bitmarkParser.NL:
                                            {
                                                this.state = 2483;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 2486;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                            this.state = 2488;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtWidth:
                    case bitmarkParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2489;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.AtWidth || _la === bitmarkParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2490;
                            this.match(bitmarkParser.COLON);
                            this.state = 2491;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2492;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPATALT:
                    case bitmarkParser.OpAtCaption:
                    case bitmarkParser.OpAtLicense:
                    case bitmarkParser.OpAtCopyright:
                    case bitmarkParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2493;
                            _la = this._input.LA(1);
                            if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (bitmarkParser.OPATALT - 133)) | (1 << (bitmarkParser.OpAtCaption - 133)) | (1 << (bitmarkParser.OpAtLicense - 133)) | (1 << (bitmarkParser.OpAtCopyright - 133)) | (1 << (bitmarkParser.OpAtSearch - 133)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2497;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2494;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2499;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
                            }
                            this.state = 2500;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 236, bitmarkParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2503;
                    this.match(bitmarkParser.TEL);
                    this.state = 2504;
                    this.match(bitmarkParser.PLUS);
                    this.state = 2505;
                    this.match(bitmarkParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 238, bitmarkParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2507;
                    this.match(bitmarkParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 240, bitmarkParser.RULE_item);
            let _la;
            try {
                this.state = 2539;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 339, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2509;
                            this.match(bitmarkParser.OPC);
                            this.state = 2510;
                            this.match(bitmarkParser.CL);
                            this.state = 2518;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 334, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2514;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.S) {
                                            {
                                                {
                                                    this.state = 2511;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2516;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2517;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2520;
                            this.match(bitmarkParser.OPC);
                            this.state = 2521;
                            this.s_and_w();
                            this.state = 2526;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (bitmarkParser.COLON - 94)) | (1 << (bitmarkParser.AMP - 94)) | (1 << (bitmarkParser.Greater - 94)) | (1 << (bitmarkParser.Less - 94)) | (1 << (bitmarkParser.RightAngle - 94)) | (1 << (bitmarkParser.RightArrow - 94)) | (1 << (bitmarkParser.QUOTE_INDEX - 94)) | (1 << (bitmarkParser.SENTENCE - 94)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
                                {
                                    this.state = 2524;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.COLON:
                                            {
                                                this.state = 2522;
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
                                                this.state = 2523;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 2528;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2529;
                            this.match(bitmarkParser.CL);
                            this.state = 2537;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 338, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2533;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.S) {
                                            {
                                                {
                                                    this.state = 2530;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2535;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2536;
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
            this.enterRule(_localctx, 242, bitmarkParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2541;
                    this.match(bitmarkParser.OPC);
                    this.state = 2542;
                    this.s_and_w();
                    this.state = 2547;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (bitmarkParser.COLON - 94)) | (1 << (bitmarkParser.AMP - 94)) | (1 << (bitmarkParser.Greater - 94)) | (1 << (bitmarkParser.Less - 94)) | (1 << (bitmarkParser.RightAngle - 94)) | (1 << (bitmarkParser.RightArrow - 94)) | (1 << (bitmarkParser.QUOTE_INDEX - 94)) | (1 << (bitmarkParser.SENTENCE - 94)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || _la === bitmarkParser.BitmarkMinus || _la === bitmarkParser.BitmarkPlus) {
                        {
                            this.state = 2545;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case bitmarkParser.COLON:
                                    {
                                        this.state = 2543;
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
                                        this.state = 2544;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 2549;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 2550;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 244, bitmarkParser.RULE_angleref);
            let _la;
            try {
                this.state = 2562;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2552;
                            this.match(bitmarkParser.OPRANGLES);
                            this.state = 2554;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2553;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2556;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2557;
                            this.match(bitmarkParser.OPRANGLEL);
                            this.state = 2559;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2558;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2561;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 246, bitmarkParser.RULE_example);
            let _la;
            try {
                this.state = 2571;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2564;
                            this.match(bitmarkParser.AtExamplecl);
                        }
                        break;
                    case bitmarkParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2565;
                            this.match(bitmarkParser.AtExampleWithStr);
                        }
                        break;
                    case bitmarkParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2566;
                            this.match(bitmarkParser.AtExamplecol);
                            this.state = 2568;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.SENTENCE) {
                                {
                                    this.state = 2567;
                                    this.match(bitmarkParser.SENTENCE);
                                }
                            }
                            this.state = 2570;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 248, bitmarkParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 2612;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 354, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2573;
                            this.match(bitmarkParser.BracEnclose);
                            this.state = 2575;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 347, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2574;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 2598;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    {
                                        this.state = 2577;
                                        this.s_and_w();
                                        this.state = 2587;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2578;
                                                        this.match(bitmarkParser.NL);
                                                        this.state = 2582;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 348, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 2579;
                                                                        this.match(bitmarkParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 2584;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 348, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 2589;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
                                        }
                                        this.state = 2593;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.NL) {
                                            {
                                                {
                                                    this.state = 2590;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                            this.state = 2595;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 2600;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2601;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2602;
                            this.match(bitmarkParser.BracEnclose);
                            this.state = 2608;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2606;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 352, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2603;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2604;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2605;
                                                this.match(bitmarkParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2610;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2611;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 250, bitmarkParser.RULE_reference);
            let _la;
            try {
                this.state = 2636;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 359, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2614;
                            this.match(bitmarkParser.AtReference);
                            this.state = 2619;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2619;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 355, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2615;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2616;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2617;
                                                this.match(bitmarkParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 2618;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2621;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                            this.state = 2623;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2624;
                            this.match(bitmarkParser.AtReference);
                            this.state = 2632;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2630;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 357, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2625;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2626;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2627;
                                                this.match(bitmarkParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 2628;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 2629;
                                                this.match(bitmarkParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2634;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2635;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 252, bitmarkParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2638;
                    this.match(bitmarkParser.AtProgress);
                    this.state = 2639;
                    this.s_and_w();
                    this.state = 2640;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 254, bitmarkParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2642;
                    this.match(bitmarkParser.AtDate);
                    this.state = 2646;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 2646;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 360, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2643;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2644;
                                        this.match(bitmarkParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 2645;
                                        this.match(bitmarkParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 2648;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                    this.state = 2650;
                    this.match(bitmarkParser.CL);
                    this.state = 2652;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 362, this._ctx)) {
                        case 1:
                            {
                                this.state = 2651;
                                this.dateprop_chained();
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
        dateprop_chained() {
            let _localctx = new Dateprop_chainedContext(this._ctx, this.state);
            this.enterRule(_localctx, 256, bitmarkParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2654;
                    this.match(bitmarkParser.AtDate);
                    this.state = 2658;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 2658;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 363, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2655;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2656;
                                        this.match(bitmarkParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 2657;
                                        this.match(bitmarkParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 2660;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                    this.state = 2662;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 258, bitmarkParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 2698;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 371, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2664;
                            this.match(bitmarkParser.OPB);
                            this.state = 2666;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 365, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2665;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 2689;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    {
                                        this.state = 2668;
                                        this.s_and_w();
                                        this.state = 2678;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 367, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2669;
                                                        this.match(bitmarkParser.NL);
                                                        this.state = 2673;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 2670;
                                                                        this.match(bitmarkParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 2675;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 2680;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 367, this._ctx);
                                        }
                                        this.state = 2684;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === bitmarkParser.NL) {
                                            {
                                                {
                                                    this.state = 2681;
                                                    this.match(bitmarkParser.NL);
                                                }
                                            }
                                            this.state = 2686;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 2691;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2692;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2693;
                            this.match(bitmarkParser.OPB);
                            this.state = 2695;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2694;
                                    this.s_and_w();
                                }
                            }
                            this.state = 2697;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 260, bitmarkParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2700;
                    this.match(bitmarkParser.OPQ);
                    this.state = 2702;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 2701;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === bitmarkParser.CL)) {
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
                        this.state = 2704;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bitmarkParser.OPDOT) | (1 << bitmarkParser.S) | (1 << bitmarkParser.BitBook) | (1 << bitmarkParser.BitChapter) | (1 << bitmarkParser.BitToc) | (1 << bitmarkParser.BitSummary) | (1 << bitmarkParser.BitIntlink) | (1 << bitmarkParser.BitIntRef) | (1 << bitmarkParser.BitAlias) | (1 << bitmarkParser.BitGroups) | (1 << bitmarkParser.BitGroupt) | (1 << bitmarkParser.BitPlaceholder) | (1 << bitmarkParser.BitStatement) | (1 << bitmarkParser.BitDetails) | (1 << bitmarkParser.BitSampleSolution) | (1 << bitmarkParser.BitTakeAudio) | (1 << bitmarkParser.CLOZE) | (1 << bitmarkParser.MATCH) | (1 << bitmarkParser.BitArticle) | (1 << bitmarkParser.BitPage) | (1 << bitmarkParser.BitEssay) | (1 << bitmarkParser.BitMessage) | (1 << bitmarkParser.BitCorrection) | (1 << bitmarkParser.BitMark) | (1 << bitmarkParser.BitDocup) | (1 << bitmarkParser.BitTakepic) | (1 << bitmarkParser.BitRecaud) | (1 << bitmarkParser.BitPrepnote) | (1 << bitmarkParser.BitAssign) | (1 << bitmarkParser.BitBotint) | (1 << bitmarkParser.BitSelfassess))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (bitmarkParser.BitRating - 32)) | (1 << (bitmarkParser.BitSurvey - 32)) | (1 << (bitmarkParser.BitSurvey1 - 32)) | (1 << (bitmarkParser.BitSurveyanon - 32)) | (1 << (bitmarkParser.BitSurveyanon1 - 32)) | (1 << (bitmarkParser.BitVocabulary - 32)) | (1 << (bitmarkParser.BitVocabulary1 - 32)) | (1 << (bitmarkParser.BitNote - 32)) | (1 << (bitmarkParser.BitInfo - 32)) | (1 << (bitmarkParser.BitWarning - 32)) | (1 << (bitmarkParser.BitRemark - 32)) | (1 << (bitmarkParser.BitHint - 32)) | (1 << (bitmarkParser.BitHelp - 32)) | (1 << (bitmarkParser.BitDanger - 32)) | (1 << (bitmarkParser.BitBug - 32)) | (1 << (bitmarkParser.BitSidenote - 32)) | (1 << (bitmarkParser.BitStickynote - 32)) | (1 << (bitmarkParser.BitQuote - 32)) | (1 << (bitmarkParser.BitFootnote - 32)) | (1 << (bitmarkParser.BitExample - 32)) | (1 << (bitmarkParser.BitButtonCopytext - 32)) | (1 << (bitmarkParser.BitWbtContinue - 32)) | (1 << (bitmarkParser.BitLearningPathDetails - 32)) | (1 << (bitmarkParser.BitLearningPathLti - 32)) | (1 << (bitmarkParser.BitLearningPathStep - 32)) | (1 << (bitmarkParser.BitLearningPathBook - 32)) | (1 << (bitmarkParser.BitLearningPathSign - 32)) | (1 << (bitmarkParser.BitLearningPathVideoCall - 32)) | (1 << (bitmarkParser.BitLearningPathLearningGoal - 32)) | (1 << (bitmarkParser.BitLearningPathClosing - 32)) | (1 << (bitmarkParser.BitLearningPathFeedback - 32)) | (1 << (bitmarkParser.BitLearningPathBotTraining - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (bitmarkParser.BitLearningPathExternalLink - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomTraining - 64)) | (1 << (bitmarkParser.BitLearningPathClassroomEvent - 64)) | (1 << (bitmarkParser.BitBotActionSend - 64)) | (1 << (bitmarkParser.BitBotActionAnnounce - 64)) | (1 << (bitmarkParser.BitBotActionSave - 64)) | (1 << (bitmarkParser.BitBotActionRemind - 64)) | (1 << (bitmarkParser.BitVendorPadletEmbed - 64)) | (1 << (bitmarkParser.BitScorm - 64)) | (1 << (bitmarkParser.COMMENT - 64)) | (1 << (bitmarkParser.Image_type - 64)) | (1 << (bitmarkParser.Audio_type - 64)) | (1 << (bitmarkParser.Video_type - 64)) | (1 << (bitmarkParser.OPDOLL - 64)) | (1 << (bitmarkParser.OPBUL - 64)) | (1 << (bitmarkParser.OPESC - 64)) | (1 << (bitmarkParser.OPRANGLES - 64)) | (1 << (bitmarkParser.OPRANGLEL - 64)) | (1 << (bitmarkParser.OPDANGLE - 64)) | (1 << (bitmarkParser.OPU - 64)) | (1 << (bitmarkParser.OPB - 64)) | (1 << (bitmarkParser.OPQ - 64)) | (1 << (bitmarkParser.OPA - 64)) | (1 << (bitmarkParser.OPP - 64)) | (1 << (bitmarkParser.OPM - 64)) | (1 << (bitmarkParser.OPS - 64)) | (1 << (bitmarkParser.OPR - 64)) | (1 << (bitmarkParser.OPHASH - 64)) | (1 << (bitmarkParser.OPC - 64)) | (1 << (bitmarkParser.COLON - 64)) | (1 << (bitmarkParser.AMP - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (bitmarkParser.DBLCOLON - 96)) | (1 << (bitmarkParser.PLUS - 96)) | (1 << (bitmarkParser.DotAt - 96)) | (1 << (bitmarkParser.Greater - 96)) | (1 << (bitmarkParser.Less - 96)) | (1 << (bitmarkParser.RightAngle - 96)) | (1 << (bitmarkParser.RightArrow - 96)) | (1 << (bitmarkParser.DBLEQ - 96)) | (1 << (bitmarkParser.HSPL - 96)) | (1 << (bitmarkParser.HSPL2 - 96)) | (1 << (bitmarkParser.SSPL - 96)) | (1 << (bitmarkParser.SSPL2 - 96)) | (1 << (bitmarkParser.QUOTE_INDEX - 96)) | (1 << (bitmarkParser.DCANY - 96)) | (1 << (bitmarkParser.ArticleText - 96)) | (1 << (bitmarkParser.NOTCL - 96)) | (1 << (bitmarkParser.NUMERIC - 96)) | (1 << (bitmarkParser.STRING - 96)) | (1 << (bitmarkParser.NL - 96)) | (1 << (bitmarkParser.SENTENCE - 96)) | (1 << (bitmarkParser.OPAT - 96)) | (1 << (bitmarkParser.AtProgress - 96)) | (1 << (bitmarkParser.AtReference - 96)) | (1 << (bitmarkParser.AtWidth - 96)) | (1 << (bitmarkParser.AtHeight - 96)) | (1 << (bitmarkParser.AtProgressPoints - 96)) | (1 << (bitmarkParser.AtShortanswer - 96)) | (1 << (bitmarkParser.AtLonganswer - 96)) | (1 << (bitmarkParser.AtExampleWithStr - 96)) | (1 << (bitmarkParser.AtExamplecol - 96)) | (1 << (bitmarkParser.AtExamplecl - 96)) | (1 << (bitmarkParser.AtPartialAnswerS - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (bitmarkParser.AtPartialAnswer - 128)) | (1 << (bitmarkParser.AtLabeltrue - 128)) | (1 << (bitmarkParser.AtLabelfalse - 128)) | (1 << (bitmarkParser.AtPoints - 128)) | (1 << (bitmarkParser.AtSrc - 128)) | (1 << (bitmarkParser.OPATALT - 128)) | (1 << (bitmarkParser.OPAMARK - 128)) | (1 << (bitmarkParser.ShowInIndex - 128)) | (1 << (bitmarkParser.OpAtCaption - 128)) | (1 << (bitmarkParser.OpAtLicense - 128)) | (1 << (bitmarkParser.OpAtCopyright - 128)) | (1 << (bitmarkParser.OpAtSearch - 128)) | (1 << (bitmarkParser.OpAtIsTracked - 128)) | (1 << (bitmarkParser.OpAtIsInfoOnly - 128)) | (1 << (bitmarkParser.AtDate - 128)) | (1 << (bitmarkParser.Http - 128)) | (1 << (bitmarkParser.Https - 128)) | (1 << (bitmarkParser.AmpAudio - 128)) | (1 << (bitmarkParser.AmpImage - 128)) | (1 << (bitmarkParser.AmpImageZoom - 128)) | (1 << (bitmarkParser.AmpImageWAudio - 128)) | (1 << (bitmarkParser.AmpVideo - 128)) | (1 << (bitmarkParser.AmpArticle - 128)) | (1 << (bitmarkParser.AmpDocument - 128)) | (1 << (bitmarkParser.AmpApp - 128)) | (1 << (bitmarkParser.AmpWebsite - 128)) | (1 << (bitmarkParser.AmpStillImageFilm - 128)) | (1 << (bitmarkParser.AmpPdf - 128)) | (1 << (bitmarkParser.OpAmpAudio - 128)) | (1 << (bitmarkParser.OpAmpImage - 128)) | (1 << (bitmarkParser.OpAmpImageZoom - 128)) | (1 << (bitmarkParser.OpAmpImageWAudio - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (bitmarkParser.OpAmpVideo - 160)) | (1 << (bitmarkParser.OpAmpArticle - 160)) | (1 << (bitmarkParser.OpAmpArticleAtt - 160)) | (1 << (bitmarkParser.OpAmpDocument - 160)) | (1 << (bitmarkParser.OpAmpApp - 160)) | (1 << (bitmarkParser.OpAmpWebsite - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilm - 160)) | (1 << (bitmarkParser.BracEnclose - 160)) | (1 << (bitmarkParser.AmpAudioLink - 160)) | (1 << (bitmarkParser.AmpImageLink - 160)) | (1 << (bitmarkParser.AmpVideoLink - 160)) | (1 << (bitmarkParser.AmpArticleLink - 160)) | (1 << (bitmarkParser.AmpDocumentLink - 160)) | (1 << (bitmarkParser.AmpAppLink - 160)) | (1 << (bitmarkParser.AmpWebsiteLink - 160)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 160)) | (1 << (bitmarkParser.OpAmpAudioLink - 160)) | (1 << (bitmarkParser.OpAmpImageLink - 160)) | (1 << (bitmarkParser.OpAmpVideoLink - 160)) | (1 << (bitmarkParser.OpAmpArticleLink - 160)) | (1 << (bitmarkParser.OpAmpDocumentLink - 160)) | (1 << (bitmarkParser.OpAmpAppLink - 160)) | (1 << (bitmarkParser.OpAmpWebsiteLink - 160)) | (1 << (bitmarkParser.OpAmpStillImageFilmLink - 160)) | (1 << (bitmarkParser.BitmarkMinus - 160)) | (1 << (bitmarkParser.BitmarkPlus - 160)) | (1 << (bitmarkParser.ColonText - 160)) | (1 << (bitmarkParser.Prosemirror - 160)) | (1 << (bitmarkParser.Placeholder - 160)) | (1 << (bitmarkParser.BASIC - 160)) | (1 << (bitmarkParser.JPG - 160)) | (1 << (bitmarkParser.PNG - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (bitmarkParser.GIF - 192)) | (1 << (bitmarkParser.SVG - 192)) | (1 << (bitmarkParser.MP2 - 192)) | (1 << (bitmarkParser.MP3 - 192)) | (1 << (bitmarkParser.MP4 - 192)) | (1 << (bitmarkParser.FLV - 192)) | (1 << (bitmarkParser.WMV - 192)) | (1 << (bitmarkParser.MPEG - 192)) | (1 << (bitmarkParser.MPG - 192)) | (1 << (bitmarkParser.TEL - 192)) | (1 << (bitmarkParser.DotArticleAtt - 192)) | (1 << (bitmarkParser.STAR - 192)) | (1 << (bitmarkParser.URL - 192)) | (1 << (bitmarkParser.LIST_LINE - 192)))) !== 0));
                    this.state = 2706;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 262, bitmarkParser.RULE_title);
            let _la;
            try {
                this.state = 2720;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 375, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2708;
                            this.match(bitmarkParser.OPHASH);
                            this.state = 2711;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2711;
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
                                                this.state = 2709;
                                                this.s_and_w();
                                            }
                                            break;
                                        case bitmarkParser.NL:
                                            {
                                                this.state = 2710;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 2713;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                            this.state = 2715;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2716;
                            this.match(bitmarkParser.OPHASH);
                            this.state = 2717;
                            this.s_and_w();
                            this.state = 2718;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 264, bitmarkParser.RULE_bool_label);
            try {
                this.state = 2730;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2722;
                            this.match(bitmarkParser.AtLabeltrue);
                            this.state = 2723;
                            this.s_and_w();
                            this.state = 2724;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2726;
                            this.match(bitmarkParser.AtLabelfalse);
                            this.state = 2727;
                            this.s_and_w();
                            this.state = 2728;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 266, bitmarkParser.RULE_progress_points);
            try {
                this.state = 2741;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 377, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2732;
                            this.match(bitmarkParser.AtProgressPoints);
                            this.state = 2733;
                            this.match(bitmarkParser.COLON);
                            this.state = 2734;
                            this.match(bitmarkParser.NUMERIC);
                            this.state = 2735;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2736;
                            this.match(bitmarkParser.AtProgressPoints);
                            this.state = 2737;
                            this.match(bitmarkParser.COLON);
                            this.state = 2738;
                            this.s_and_w();
                            this.state = 2739;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 268, bitmarkParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2743;
                    this.match(bitmarkParser.OpAtIsTracked);
                    this.state = 2744;
                    this.s_and_w();
                    this.state = 2745;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 270, bitmarkParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2747;
                    this.match(bitmarkParser.OpAtIsInfoOnly);
                    this.state = 2748;
                    this.s_and_w();
                    this.state = 2749;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 272, bitmarkParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2751;
                    this.atdef_();
                    this.state = 2761;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 379, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 2755;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === bitmarkParser.NL) {
                                        {
                                            {
                                                this.state = 2752;
                                                this.match(bitmarkParser.NL);
                                            }
                                        }
                                        this.state = 2757;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2758;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 2763;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 379, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 274, bitmarkParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 2786;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case bitmarkParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2764;
                            this.match(bitmarkParser.OPA);
                            this.state = 2765;
                            this.s_and_w();
                            this.state = 2766;
                            _la = this._input.LA(1);
                            if (!(_la === bitmarkParser.COLON || _la === bitmarkParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2767;
                            this.s_and_w();
                            this.state = 2773;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2771;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 380, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2768;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2769;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2770;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 2775;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2776;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case bitmarkParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2778;
                            this.match(bitmarkParser.OpAtCopyright);
                            this.state = 2782;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 2779;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 2784;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 382, this._ctx);
                            }
                            this.state = 2785;
                            this.match(bitmarkParser.CL);
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
            this.enterRule(_localctx, 276, bitmarkParser.RULE_dollarans);
            let _la;
            try {
                this.state = 2807;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 388, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2788;
                            this.match(bitmarkParser.OPDOLL);
                            this.state = 2792;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 2792;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 384, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2789;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2790;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2791;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2794;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0));
                            this.state = 2796;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2797;
                            this.match(bitmarkParser.OPDOLL);
                            this.state = 2803;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.NL - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                                {
                                    this.state = 2801;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 386, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 2798;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 2799;
                                                this.match(bitmarkParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 2800;
                                                this.match(bitmarkParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 2805;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2806;
                            this.match(bitmarkParser.EOF);
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
            this.enterRule(_localctx, 278, bitmarkParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2809;
                    this.match(bitmarkParser.OPDANGLE);
                    this.state = 2811;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === bitmarkParser.S || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (bitmarkParser.OPESC - 79)) | (1 << (bitmarkParser.OPS - 79)) | (1 << (bitmarkParser.COLON - 79)) | (1 << (bitmarkParser.AMP - 79)) | (1 << (bitmarkParser.Greater - 79)) | (1 << (bitmarkParser.Less - 79)) | (1 << (bitmarkParser.RightAngle - 79)) | (1 << (bitmarkParser.RightArrow - 79)) | (1 << (bitmarkParser.DBLEQ - 79)) | (1 << (bitmarkParser.QUOTE_INDEX - 79)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (bitmarkParser.NUMERIC - 112)) | (1 << (bitmarkParser.STRING - 112)) | (1 << (bitmarkParser.SENTENCE - 112)))) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (bitmarkParser.AmpAudio - 145)) | (1 << (bitmarkParser.AmpImage - 145)) | (1 << (bitmarkParser.AmpVideo - 145)) | (1 << (bitmarkParser.AmpArticle - 145)) | (1 << (bitmarkParser.AmpDocument - 145)) | (1 << (bitmarkParser.AmpApp - 145)) | (1 << (bitmarkParser.AmpWebsite - 145)) | (1 << (bitmarkParser.AmpStillImageFilm - 145)) | (1 << (bitmarkParser.AmpAudioLink - 145)) | (1 << (bitmarkParser.AmpImageLink - 145)) | (1 << (bitmarkParser.AmpVideoLink - 145)) | (1 << (bitmarkParser.AmpArticleLink - 145)) | (1 << (bitmarkParser.AmpDocumentLink - 145)) | (1 << (bitmarkParser.AmpAppLink - 145)) | (1 << (bitmarkParser.AmpWebsiteLink - 145)) | (1 << (bitmarkParser.AmpStillImageFilmLink - 145)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (bitmarkParser.BitmarkMinus - 184)) | (1 << (bitmarkParser.BitmarkPlus - 184)) | (1 << (bitmarkParser.URL - 184)))) !== 0)) {
                        {
                            this.state = 2810;
                            this.s_and_w();
                        }
                    }
                    this.state = 2813;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 280, bitmarkParser.RULE_lines);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2819;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2815;
                                        this.s_and_w();
                                        this.state = 2817;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 390, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 2816;
                                                    this.match(bitmarkParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2821;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 391, this._ctx);
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
            this.enterRule(_localctx, 282, bitmarkParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 2869;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 399, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 2823;
                            this.match(bitmarkParser.STRING);
                            this.state = 2830;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 393, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2825;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2824;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2827;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S);
                                        this.state = 2829;
                                        this.match(bitmarkParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 2832;
                            this.words();
                            this.state = 2839;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 395, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2834;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 2833;
                                                    this.match(bitmarkParser.S);
                                                }
                                            }
                                            this.state = 2836;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === bitmarkParser.S);
                                        this.state = 2838;
                                        this.match(bitmarkParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 2841;
                            this.match(bitmarkParser.NUMERIC);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 2842;
                            this.match(bitmarkParser.OPS);
                            this.state = 2843;
                            this.s_and_w();
                            this.state = 2844;
                            this.match(bitmarkParser.CL);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 2849;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === bitmarkParser.S) {
                                {
                                    {
                                        this.state = 2846;
                                        this.match(bitmarkParser.S);
                                    }
                                }
                                this.state = 2851;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2852;
                            this.match(bitmarkParser.COLON);
                            this.state = 2856;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 397, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2853;
                                            this.match(bitmarkParser.S);
                                        }
                                    }
                                }
                                this.state = 2858;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 397, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 2859;
                            this.match(bitmarkParser.AMP);
                            this.state = 2863;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 398, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2860;
                                            this.match(bitmarkParser.S);
                                        }
                                    }
                                }
                                this.state = 2865;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 398, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 2866;
                            this.match(bitmarkParser.DBLEQ);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 2867;
                            this.match(bitmarkParser.URL);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 2868;
                            this.bracket_escaped();
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
            this.enterRule(_localctx, 284, bitmarkParser.RULE_dclines);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2871;
                    this.match(bitmarkParser.DCANY);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 286, bitmarkParser.RULE_bracket_escaped);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2873;
                    this.match(bitmarkParser.OPESC);
                    this.state = 2875;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 2874;
                                        this.s_and_w();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 2877;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 400, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 2880;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 401, this._ctx)) {
                        case 1:
                            {
                                this.state = 2879;
                                this.match(bitmarkParser.CL);
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
        clnsp() {
            let _localctx = new ClnspContext(this._ctx, this.state);
            this.enterRule(_localctx, 288, bitmarkParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2882;
                    this.match(bitmarkParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 290, bitmarkParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2884;
                    _la = this._input.LA(1);
                    if (!(_la === bitmarkParser.SSPL || _la === bitmarkParser.SSPL2)) {
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
            this.enterRule(_localctx, 292, bitmarkParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2913;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 2913;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case bitmarkParser.SENTENCE:
                                            {
                                                this.state = 2886;
                                                this.sentence();
                                            }
                                            break;
                                        case bitmarkParser.AMP:
                                            {
                                                this.state = 2887;
                                                this.match(bitmarkParser.AMP);
                                            }
                                            break;
                                        case bitmarkParser.Greater:
                                            {
                                                this.state = 2888;
                                                this.match(bitmarkParser.Greater);
                                                this.state = 2889;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === bitmarkParser.Greater)) {
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
                                        case bitmarkParser.Less:
                                            {
                                                this.state = 2890;
                                                this.match(bitmarkParser.Less);
                                                this.state = 2891;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === bitmarkParser.Less)) {
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
                                        case bitmarkParser.RightArrow:
                                            {
                                                this.state = 2892;
                                                this.match(bitmarkParser.RightArrow);
                                            }
                                            break;
                                        case bitmarkParser.RightAngle:
                                            {
                                                this.state = 2893;
                                                this.match(bitmarkParser.RightAngle);
                                            }
                                            break;
                                        case bitmarkParser.AmpArticle:
                                            {
                                                this.state = 2894;
                                                this.match(bitmarkParser.AmpArticle);
                                            }
                                            break;
                                        case bitmarkParser.AmpArticleLink:
                                            {
                                                this.state = 2895;
                                                this.match(bitmarkParser.AmpArticleLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpDocument:
                                            {
                                                this.state = 2896;
                                                this.match(bitmarkParser.AmpDocument);
                                            }
                                            break;
                                        case bitmarkParser.AmpDocumentLink:
                                            {
                                                this.state = 2897;
                                                this.match(bitmarkParser.AmpDocumentLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpWebsite:
                                            {
                                                this.state = 2898;
                                                this.match(bitmarkParser.AmpWebsite);
                                            }
                                            break;
                                        case bitmarkParser.AmpWebsiteLink:
                                            {
                                                this.state = 2899;
                                                this.match(bitmarkParser.AmpWebsiteLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpImage:
                                            {
                                                this.state = 2900;
                                                this.match(bitmarkParser.AmpImage);
                                            }
                                            break;
                                        case bitmarkParser.AmpImageLink:
                                            {
                                                this.state = 2901;
                                                this.match(bitmarkParser.AmpImageLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpAudio:
                                            {
                                                this.state = 2902;
                                                this.match(bitmarkParser.AmpAudio);
                                            }
                                            break;
                                        case bitmarkParser.AmpAudioLink:
                                            {
                                                this.state = 2903;
                                                this.match(bitmarkParser.AmpAudioLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpVideo:
                                            {
                                                this.state = 2904;
                                                this.match(bitmarkParser.AmpVideo);
                                            }
                                            break;
                                        case bitmarkParser.AmpVideoLink:
                                            {
                                                this.state = 2905;
                                                this.match(bitmarkParser.AmpVideoLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpApp:
                                            {
                                                this.state = 2906;
                                                this.match(bitmarkParser.AmpApp);
                                            }
                                            break;
                                        case bitmarkParser.AmpAppLink:
                                            {
                                                this.state = 2907;
                                                this.match(bitmarkParser.AmpAppLink);
                                            }
                                            break;
                                        case bitmarkParser.AmpStillImageFilm:
                                            {
                                                this.state = 2908;
                                                this.match(bitmarkParser.AmpStillImageFilm);
                                            }
                                            break;
                                        case bitmarkParser.AmpStillImageFilmLink:
                                            {
                                                this.state = 2909;
                                                this.match(bitmarkParser.AmpStillImageFilmLink);
                                            }
                                            break;
                                        case bitmarkParser.BitmarkMinus:
                                            {
                                                this.state = 2910;
                                                this.match(bitmarkParser.BitmarkMinus);
                                            }
                                            break;
                                        case bitmarkParser.BitmarkPlus:
                                            {
                                                this.state = 2911;
                                                this.match(bitmarkParser.BitmarkPlus);
                                            }
                                            break;
                                        case bitmarkParser.QUOTE_INDEX:
                                            {
                                                this.state = 2912;
                                                this.match(bitmarkParser.QUOTE_INDEX);
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
                        this.state = 2915;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 403, this._ctx);
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
            this.enterRule(_localctx, 294, bitmarkParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2917;
                    this.match(bitmarkParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 296, bitmarkParser.RULE_sentence);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2919;
                    this.match(bitmarkParser.SENTENCE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
                bitmarkParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(bitmarkParser._serializedATN));
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
    bitmarkParser.BitSampleSolution = 15;
    bitmarkParser.BitTakeAudio = 16;
    bitmarkParser.CLOZE = 17;
    bitmarkParser.MATCH = 18;
    bitmarkParser.BitArticle = 19;
    bitmarkParser.BitPage = 20;
    bitmarkParser.BitEssay = 21;
    bitmarkParser.BitMessage = 22;
    bitmarkParser.BitCorrection = 23;
    bitmarkParser.BitMark = 24;
    bitmarkParser.BitDocup = 25;
    bitmarkParser.BitTakepic = 26;
    bitmarkParser.BitRecaud = 27;
    bitmarkParser.BitPrepnote = 28;
    bitmarkParser.BitAssign = 29;
    bitmarkParser.BitBotint = 30;
    bitmarkParser.BitSelfassess = 31;
    bitmarkParser.BitRating = 32;
    bitmarkParser.BitSurvey = 33;
    bitmarkParser.BitSurvey1 = 34;
    bitmarkParser.BitSurveyanon = 35;
    bitmarkParser.BitSurveyanon1 = 36;
    bitmarkParser.BitVocabulary = 37;
    bitmarkParser.BitVocabulary1 = 38;
    bitmarkParser.BitNote = 39;
    bitmarkParser.BitInfo = 40;
    bitmarkParser.BitWarning = 41;
    bitmarkParser.BitRemark = 42;
    bitmarkParser.BitHint = 43;
    bitmarkParser.BitHelp = 44;
    bitmarkParser.BitDanger = 45;
    bitmarkParser.BitBug = 46;
    bitmarkParser.BitSidenote = 47;
    bitmarkParser.BitStickynote = 48;
    bitmarkParser.BitQuote = 49;
    bitmarkParser.BitFootnote = 50;
    bitmarkParser.BitExample = 51;
    bitmarkParser.BitButtonCopytext = 52;
    bitmarkParser.BitWbtContinue = 53;
    bitmarkParser.BitLearningPathDetails = 54;
    bitmarkParser.BitLearningPathLti = 55;
    bitmarkParser.BitLearningPathStep = 56;
    bitmarkParser.BitLearningPathBook = 57;
    bitmarkParser.BitLearningPathSign = 58;
    bitmarkParser.BitLearningPathVideoCall = 59;
    bitmarkParser.BitLearningPathLearningGoal = 60;
    bitmarkParser.BitLearningPathClosing = 61;
    bitmarkParser.BitLearningPathFeedback = 62;
    bitmarkParser.BitLearningPathBotTraining = 63;
    bitmarkParser.BitLearningPathExternalLink = 64;
    bitmarkParser.BitLearningPathClassroomTraining = 65;
    bitmarkParser.BitLearningPathClassroomEvent = 66;
    bitmarkParser.BitBotActionSend = 67;
    bitmarkParser.BitBotActionAnnounce = 68;
    bitmarkParser.BitBotActionSave = 69;
    bitmarkParser.BitBotActionRemind = 70;
    bitmarkParser.BitVendorPadletEmbed = 71;
    bitmarkParser.BitScorm = 72;
    bitmarkParser.COMMENT = 73;
    bitmarkParser.Image_type = 74;
    bitmarkParser.Audio_type = 75;
    bitmarkParser.Video_type = 76;
    bitmarkParser.OPDOLL = 77;
    bitmarkParser.OPBUL = 78;
    bitmarkParser.OPESC = 79;
    bitmarkParser.OPRANGLES = 80;
    bitmarkParser.OPRANGLEL = 81;
    bitmarkParser.OPDANGLE = 82;
    bitmarkParser.OPU = 83;
    bitmarkParser.OPB = 84;
    bitmarkParser.OPQ = 85;
    bitmarkParser.OPA = 86;
    bitmarkParser.OPP = 87;
    bitmarkParser.OPM = 88;
    bitmarkParser.OPS = 89;
    bitmarkParser.OPR = 90;
    bitmarkParser.OPHASH = 91;
    bitmarkParser.OPC = 92;
    bitmarkParser.CL = 93;
    bitmarkParser.COLON = 94;
    bitmarkParser.AMP = 95;
    bitmarkParser.DBLCOLON = 96;
    bitmarkParser.PLUS = 97;
    bitmarkParser.DotAt = 98;
    bitmarkParser.Greater = 99;
    bitmarkParser.Less = 100;
    bitmarkParser.RightAngle = 101;
    bitmarkParser.RightArrow = 102;
    bitmarkParser.DBLEQ = 103;
    bitmarkParser.HSPL = 104;
    bitmarkParser.HSPL2 = 105;
    bitmarkParser.SSPL = 106;
    bitmarkParser.SSPL2 = 107;
    bitmarkParser.QUOTE_INDEX = 108;
    bitmarkParser.DCANY = 109;
    bitmarkParser.ArticleText = 110;
    bitmarkParser.NOTCL = 111;
    bitmarkParser.NUMERIC = 112;
    bitmarkParser.STRING = 113;
    bitmarkParser.NL = 114;
    bitmarkParser.SENTENCE = 115;
    bitmarkParser.OPAT = 116;
    bitmarkParser.AtProgress = 117;
    bitmarkParser.AtReference = 118;
    bitmarkParser.AtWidth = 119;
    bitmarkParser.AtHeight = 120;
    bitmarkParser.AtProgressPoints = 121;
    bitmarkParser.AtShortanswer = 122;
    bitmarkParser.AtLonganswer = 123;
    bitmarkParser.AtExampleWithStr = 124;
    bitmarkParser.AtExamplecol = 125;
    bitmarkParser.AtExamplecl = 126;
    bitmarkParser.AtPartialAnswerS = 127;
    bitmarkParser.AtPartialAnswer = 128;
    bitmarkParser.AtLabeltrue = 129;
    bitmarkParser.AtLabelfalse = 130;
    bitmarkParser.AtPoints = 131;
    bitmarkParser.AtSrc = 132;
    bitmarkParser.OPATALT = 133;
    bitmarkParser.OPAMARK = 134;
    bitmarkParser.ShowInIndex = 135;
    bitmarkParser.OpAtCaption = 136;
    bitmarkParser.OpAtLicense = 137;
    bitmarkParser.OpAtCopyright = 138;
    bitmarkParser.OpAtSearch = 139;
    bitmarkParser.OpAtIsTracked = 140;
    bitmarkParser.OpAtIsInfoOnly = 141;
    bitmarkParser.AtDate = 142;
    bitmarkParser.Http = 143;
    bitmarkParser.Https = 144;
    bitmarkParser.AmpAudio = 145;
    bitmarkParser.AmpImage = 146;
    bitmarkParser.AmpImageZoom = 147;
    bitmarkParser.AmpImageWAudio = 148;
    bitmarkParser.AmpVideo = 149;
    bitmarkParser.AmpArticle = 150;
    bitmarkParser.AmpDocument = 151;
    bitmarkParser.AmpApp = 152;
    bitmarkParser.AmpWebsite = 153;
    bitmarkParser.AmpStillImageFilm = 154;
    bitmarkParser.AmpPdf = 155;
    bitmarkParser.OpAmpAudio = 156;
    bitmarkParser.OpAmpImage = 157;
    bitmarkParser.OpAmpImageZoom = 158;
    bitmarkParser.OpAmpImageWAudio = 159;
    bitmarkParser.OpAmpVideo = 160;
    bitmarkParser.OpAmpArticle = 161;
    bitmarkParser.OpAmpArticleAtt = 162;
    bitmarkParser.OpAmpDocument = 163;
    bitmarkParser.OpAmpApp = 164;
    bitmarkParser.OpAmpWebsite = 165;
    bitmarkParser.OpAmpStillImageFilm = 166;
    bitmarkParser.BracEnclose = 167;
    bitmarkParser.AmpAudioLink = 168;
    bitmarkParser.AmpImageLink = 169;
    bitmarkParser.AmpVideoLink = 170;
    bitmarkParser.AmpArticleLink = 171;
    bitmarkParser.AmpDocumentLink = 172;
    bitmarkParser.AmpAppLink = 173;
    bitmarkParser.AmpWebsiteLink = 174;
    bitmarkParser.AmpStillImageFilmLink = 175;
    bitmarkParser.OpAmpAudioLink = 176;
    bitmarkParser.OpAmpImageLink = 177;
    bitmarkParser.OpAmpVideoLink = 178;
    bitmarkParser.OpAmpArticleLink = 179;
    bitmarkParser.OpAmpDocumentLink = 180;
    bitmarkParser.OpAmpAppLink = 181;
    bitmarkParser.OpAmpWebsiteLink = 182;
    bitmarkParser.OpAmpStillImageFilmLink = 183;
    bitmarkParser.BitmarkMinus = 184;
    bitmarkParser.BitmarkPlus = 185;
    bitmarkParser.ColonText = 186;
    bitmarkParser.Prosemirror = 187;
    bitmarkParser.Placeholder = 188;
    bitmarkParser.BASIC = 189;
    bitmarkParser.JPG = 190;
    bitmarkParser.PNG = 191;
    bitmarkParser.GIF = 192;
    bitmarkParser.SVG = 193;
    bitmarkParser.MP2 = 194;
    bitmarkParser.MP3 = 195;
    bitmarkParser.MP4 = 196;
    bitmarkParser.FLV = 197;
    bitmarkParser.WMV = 198;
    bitmarkParser.MPEG = 199;
    bitmarkParser.MPG = 200;
    bitmarkParser.TEL = 201;
    bitmarkParser.DotArticleAtt = 202;
    bitmarkParser.STAR = 203;
    bitmarkParser.URL = 204;
    bitmarkParser.LIST_LINE = 205;
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
    bitmarkParser.RULE_take_audio = 44;
    bitmarkParser.RULE_take_picture = 45;
    bitmarkParser.RULE_record_audio = 46;
    bitmarkParser.RULE_preparation_note = 47;
    bitmarkParser.RULE_assignment = 48;
    bitmarkParser.RULE_article = 49;
    bitmarkParser.RULE_statement = 50;
    bitmarkParser.RULE_details = 51;
    bitmarkParser.RULE_sample_solution = 52;
    bitmarkParser.RULE_buttoncopytext = 53;
    bitmarkParser.RULE_wbtcontinue = 54;
    bitmarkParser.RULE_learningpathdetails = 55;
    bitmarkParser.RULE_page = 56;
    bitmarkParser.RULE_note = 57;
    bitmarkParser.RULE_info = 58;
    bitmarkParser.RULE_warning = 59;
    bitmarkParser.RULE_remark = 60;
    bitmarkParser.RULE_help = 61;
    bitmarkParser.RULE_danger = 62;
    bitmarkParser.RULE_bug = 63;
    bitmarkParser.RULE_sidenote = 64;
    bitmarkParser.RULE_stickynote = 65;
    bitmarkParser.RULE_quote = 66;
    bitmarkParser.RULE_footnote = 67;
    bitmarkParser.RULE_hintbit = 68;
    bitmarkParser.RULE_examplebit = 69;
    bitmarkParser.RULE_vendor_padlet_embed = 70;
    bitmarkParser.RULE_scorm = 71;
    bitmarkParser.RULE_message = 72;
    bitmarkParser.RULE_bot_interview = 73;
    bitmarkParser.RULE_bot_choice = 74;
    bitmarkParser.RULE_rating = 75;
    bitmarkParser.RULE_bullet_item = 76;
    bitmarkParser.RULE_survey = 77;
    bitmarkParser.RULE_survey_1 = 78;
    bitmarkParser.RULE_survey_anonymous = 79;
    bitmarkParser.RULE_survey_anonymous_1 = 80;
    bitmarkParser.RULE_self_assessment = 81;
    bitmarkParser.RULE_self_assess_s_and_w = 82;
    bitmarkParser.RULE_atpoint = 83;
    bitmarkParser.RULE_format = 84;
    bitmarkParser.RULE_resource_format = 85;
    bitmarkParser.RULE_resource_format_extra = 86;
    bitmarkParser.RULE_image_format = 87;
    bitmarkParser.RULE_video_format = 88;
    bitmarkParser.RULE_article_format = 89;
    bitmarkParser.RULE_document_format = 90;
    bitmarkParser.RULE_app_format = 91;
    bitmarkParser.RULE_website_format = 92;
    bitmarkParser.RULE_stillimagefilm_format = 93;
    bitmarkParser.RULE_op_article_format = 94;
    bitmarkParser.RULE_op_document_format = 95;
    bitmarkParser.RULE_op_app_format = 96;
    bitmarkParser.RULE_op_website_format = 97;
    bitmarkParser.RULE_op_video_format = 98;
    bitmarkParser.RULE_op_stillimagefilm_format = 99;
    bitmarkParser.RULE_articlebit = 100;
    bitmarkParser.RULE_documentbit = 101;
    bitmarkParser.RULE_websitebit = 102;
    bitmarkParser.RULE_appbit = 103;
    bitmarkParser.RULE_stillimagefilmbit = 104;
    bitmarkParser.RULE_stillimg_one = 105;
    bitmarkParser.RULE_videobit = 106;
    bitmarkParser.RULE_video_one = 107;
    bitmarkParser.RULE_imagebit = 108;
    bitmarkParser.RULE_image_one = 109;
    bitmarkParser.RULE_op_image_format = 110;
    bitmarkParser.RULE_image_chained = 111;
    bitmarkParser.RULE_image_chained4match = 112;
    bitmarkParser.RULE_audiobit = 113;
    bitmarkParser.RULE_audio_one = 114;
    bitmarkParser.RULE_audio_format = 115;
    bitmarkParser.RULE_op_audio_format = 116;
    bitmarkParser.RULE_resource_chained = 117;
    bitmarkParser.RULE_telephone = 118;
    bitmarkParser.RULE_url = 119;
    bitmarkParser.RULE_item = 120;
    bitmarkParser.RULE_lead = 121;
    bitmarkParser.RULE_angleref = 122;
    bitmarkParser.RULE_example = 123;
    bitmarkParser.RULE_bracketed_text = 124;
    bitmarkParser.RULE_reference = 125;
    bitmarkParser.RULE_progress = 126;
    bitmarkParser.RULE_dateprop = 127;
    bitmarkParser.RULE_dateprop_chained = 128;
    bitmarkParser.RULE_instruction = 129;
    bitmarkParser.RULE_hint = 130;
    bitmarkParser.RULE_title = 131;
    bitmarkParser.RULE_bool_label = 132;
    bitmarkParser.RULE_progress_points = 133;
    bitmarkParser.RULE_istracked = 134;
    bitmarkParser.RULE_isinfoonly = 135;
    bitmarkParser.RULE_atdef = 136;
    bitmarkParser.RULE_atdef_ = 137;
    bitmarkParser.RULE_dollarans = 138;
    bitmarkParser.RULE_anchor = 139;
    bitmarkParser.RULE_lines = 140;
    bitmarkParser.RULE_s_and_w = 141;
    bitmarkParser.RULE_dclines = 142;
    bitmarkParser.RULE_bracket_escaped = 143;
    bitmarkParser.RULE_clnsp = 144;
    bitmarkParser.RULE_sspl = 145;
    bitmarkParser.RULE_words = 146;
    bitmarkParser.RULE_sp = 147;
    bitmarkParser.RULE_sentence = 148;
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
        "document_upload", "take_audio", "take_picture", "record_audio", "preparation_note",
        "assignment", "article", "statement", "details", "sample_solution", "buttoncopytext",
        "wbtcontinue", "learningpathdetails", "page", "note", "info", "warning",
        "remark", "help", "danger", "bug", "sidenote", "stickynote", "quote",
        "footnote", "hintbit", "examplebit", "vendor_padlet_embed", "scorm", "message",
        "bot_interview", "bot_choice", "rating", "bullet_item", "survey", "survey_1",
        "survey_anonymous", "survey_anonymous_1", "self_assessment", "self_assess_s_and_w",
        "atpoint", "format", "resource_format", "resource_format_extra", "image_format",
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
        undefined, undefined, undefined, "'CLOZE'", "'MATCH'", undefined, undefined,
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
        undefined, undefined, undefined, "':'", "'&'", "'::'", "'+'", "'.@'",
        "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'[@'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'",
        "'&imageWithAudio'", "'&video'", "'&article'", "'&document'", "'&app'",
        "'&website'", "'&stillImageFilm'", "'&pdf'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'&audioLink'", "'&imageLink'", "'&videoLink'",
        "'&articleLink'", "'&documentLink'", "'&appLink'", "'&websiteLink'", "'&stillImageFilmLink'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "':bitmark--'", "':bitmark++'", "':text'", "':prosemirror'",
        "':placeholder'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'",
        "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'",
        "'tel:'", "'.article-attachment'", "'*'",
    ];
    bitmarkParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitBook", "BitChapter", "BitToc", "BitSummary",
        "BitIntlink", "BitIntRef", "BitAlias", "BitGroups", "BitGroupt", "BitPlaceholder",
        "BitStatement", "BitDetails", "BitSampleSolution", "BitTakeAudio", "CLOZE",
        "MATCH", "BitArticle", "BitPage", "BitEssay", "BitMessage", "BitCorrection",
        "BitMark", "BitDocup", "BitTakepic", "BitRecaud", "BitPrepnote", "BitAssign",
        "BitBotint", "BitSelfassess", "BitRating", "BitSurvey", "BitSurvey1",
        "BitSurveyanon", "BitSurveyanon1", "BitVocabulary", "BitVocabulary1",
        "BitNote", "BitInfo", "BitWarning", "BitRemark", "BitHint", "BitHelp",
        "BitDanger", "BitBug", "BitSidenote", "BitStickynote", "BitQuote", "BitFootnote",
        "BitExample", "BitButtonCopytext", "BitWbtContinue", "BitLearningPathDetails",
        "BitLearningPathLti", "BitLearningPathStep", "BitLearningPathBook", "BitLearningPathSign",
        "BitLearningPathVideoCall", "BitLearningPathLearningGoal", "BitLearningPathClosing",
        "BitLearningPathFeedback", "BitLearningPathBotTraining", "BitLearningPathExternalLink",
        "BitLearningPathClassroomTraining", "BitLearningPathClassroomEvent", "BitBotActionSend",
        "BitBotActionAnnounce", "BitBotActionSave", "BitBotActionRemind", "BitVendorPadletEmbed",
        "BitScorm", "COMMENT", "Image_type", "Audio_type", "Video_type", "OPDOLL",
        "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB",
        "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPHASH", "OPC", "CL", "COLON",
        "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow",
        "DBLEQ", "HSPL", "HSPL2", "SSPL", "SSPL2", "QUOTE_INDEX", "DCANY", "ArticleText",
        "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE", "OPAT", "AtProgress",
        "AtReference", "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer",
        "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtPartialAnswerS",
        "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc",
        "OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright",
        "OpAtSearch", "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https",
        "AmpAudio", "AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo",
        "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm",
        "AmpPdf", "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio",
        "OpAmpVideo", "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp",
        "OpAmpWebsite", "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink",
        "AmpImageLink", "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink",
        "AmpWebsiteLink", "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink",
        "OpAmpVideoLink", "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink",
        "OpAmpWebsiteLink", "OpAmpStillImageFilmLink", "BitmarkMinus", "BitmarkPlus",
        "ColonText", "Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF",
        "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt",
        "STAR", "URL", "LIST_LINE",
    ];
    bitmarkParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(bitmarkParser._LITERAL_NAMES, bitmarkParser._SYMBOLIC_NAMES, []);
    bitmarkParser._serializedATNSegments = 6;
    bitmarkParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xCF\u0B6C\x04" +
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
        "\x04\x96\t\x96\x03\x02\x03\x02\x07\x02\u012F\n\x02\f\x02\x0E\x02\u0132" +
        "\v\x02\x03\x02\x07\x02\u0135\n\x02\f\x02\x0E\x02\u0138\v\x02\x06\x02\u013A" +
        "\n\x02\r\x02\x0E\x02\u013B\x03\x02\x07\x02\u013F\n\x02\f\x02\x0E\x02\u0142" +
        "\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0148\n\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x05\x04\u018C\n\x04\x03\x05\x03\x05\x05\x05\u0190\n\x05\x03" +
        "\x05\x03\x05\x07\x05\u0194\n\x05\f\x05\x0E\x05\u0197\v\x05\x03\x05\x06" +
        "\x05\u019A\n\x05\r\x05\x0E\x05\u019B\x03\x06\x03\x06\x05\x06\u01A0\n\x06" +
        "\x03\x06\x03\x06\x07\x06\u01A4\n\x06\f\x06\x0E\x06\u01A7\v\x06\x03\x06" +
        "\x03\x06\x03\x06\x05\x06\u01AC\n\x06\x03\x06\x03\x06\x07\x06\u01B0\n\x06" +
        "\f\x06\x0E\x06\u01B3\v\x06\x03\x06\x07\x06\u01B6\n\x06\f\x06\x0E\x06\u01B9" +
        "\v\x06\x03\x07\x03\x07\x05\x07\u01BD\n\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x05\x07\u01C4\n\x07\x03\b\x03\b\x03\b\x07\b\u01C9\n\b\f\b" +
        "\x0E\b\u01CC\v\b\x03\b\x03\b\x03\t\x03\t\x05\t\u01D2\n\t\x03\t\x03\t\x07" +
        "\t\u01D6\n\t\f\t\x0E\t\u01D9\v\t\x03\t\x07\t\u01DC\n\t\f\t\x0E\t\u01DF" +
        "\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x05\v\u01E6\n\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x05\v\u01EF\n\v\x07\v\u01F1\n\v\f\v\x0E\v\u01F4\v" +
        "\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u01FC\n\f\r\f\x0E\f\u01FD" +
        "\x03\f\x06\f\u0201\n\f\r\f\x0E\f\u0202\x03\f\x03\f\x07\f\u0207\n\f\f\f" +
        "\x0E\f\u020A\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u0212\n\r\r" +
        "\r\x0E\r\u0213\x03\r\x06\r\u0217\n\r\r\r\x0E\r\u0218\x03\r\x03\r\x07\r" +
        "\u021D\n\r\f\r\x0E\r\u0220\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
        "\u0226\n\x0E\f\x0E\x0E\x0E\u0229\v\x0E\x03\x0E\x03\x0E\x07\x0E\u022D\n" +
        "\x0E\f\x0E\x0E\x0E\u0230\v\x0E\x06\x0E\u0232\n\x0E\r\x0E\x0E\x0E\u0233" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u023A\n\x0F\f\x0F\x0E\x0F\u023D" +
        "\v\x0F\x03\x0F\x03\x0F\x07\x0F\u0241\n\x0F\f\x0F\x0E\x0F\u0244\v\x0F\x06" +
        "\x0F\u0246\n\x0F\r\x0F\x0E\x0F\u0247\x03\x10\x03\x10\x03\x10\x03\x10\x07" +
        "\x10\u024E\n\x10\f\x10\x0E\x10\u0251\v\x10\x03\x10\x03\x10\x07\x10\u0255" +
        "\n\x10\f\x10\x0E\x10\u0258\v\x10\x06\x10\u025A\n\x10\r\x10\x0E\x10\u025B" +
        "\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0262\n\x11\f\x11\x0E\x11\u0265" +
        "\v\x11\x03\x11\x03\x11\x07\x11\u0269\n\x11\f\x11\x0E\x11\u026C\v\x11\x06" +
        "\x11\u026E\n\x11\r\x11\x0E\x11\u026F\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
        "\x12\u0276\n\x12\f\x12\x0E\x12\u0279\v\x12\x03\x12\x03\x12\x07\x12\u027D" +
        "\n\x12\f\x12\x0E\x12\u0280\v\x12\x06\x12\u0282\n\x12\r\x12\x0E\x12\u0283" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u028A\n\x13\f\x13\x0E\x13\u028D" +
        "\v\x13\x03\x13\x03\x13\x07\x13\u0291\n\x13\f\x13\x0E\x13\u0294\v\x13\x06" +
        "\x13\u0296\n\x13\r\x13\x0E\x13\u0297\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
        "\x14\u029E\n\x14\f\x14\x0E\x14\u02A1\v\x14\x03\x14\x03\x14\x07\x14\u02A5" +
        "\n\x14\f\x14\x0E\x14\u02A8\v\x14\x06\x14\u02AA\n\x14\r\x14\x0E\x14\u02AB" +
        "\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02B2\n\x15\f\x15\x0E\x15\u02B5" +
        "\v\x15\x03\x15\x03\x15\x07\x15\u02B9\n\x15\f\x15\x0E\x15\u02BC\v\x15\x06" +
        "\x15\u02BE\n\x15\r\x15\x0E\x15\u02BF\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
        "\x16\u02C6\n\x16\f\x16\x0E\x16\u02C9\v\x16\x03\x16\x03\x16\x07\x16\u02CD" +
        "\n\x16\f\x16\x0E\x16\u02D0\v\x16\x06\x16\u02D2\n\x16\r\x16\x0E\x16\u02D3" +
        "\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u02DA\n\x17\f\x17\x0E\x17\u02DD" +
        "\v\x17\x03\x17\x03\x17\x07\x17\u02E1\n\x17\f\x17\x0E\x17\u02E4\v\x17\x06" +
        "\x17\u02E6\n\x17\r\x17\x0E\x17\u02E7\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
        "\x18\u02EE\n\x18\f\x18\x0E\x18\u02F1\v\x18\x03\x18\x03\x18\x07\x18\u02F5" +
        "\n\x18\f\x18\x0E\x18\u02F8\v\x18\x06\x18\u02FA\n\x18\r\x18\x0E\x18\u02FB" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0302\n\x19\f\x19\x0E\x19\u0305" +
        "\v\x19\x03\x19\x03\x19\x07\x19\u0309\n\x19\f\x19\x0E\x19\u030C\v\x19\x06" +
        "\x19\u030E\n\x19\r\x19\x0E\x19\u030F\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07" +
        "\x1A\u0316\n\x1A\f\x1A\x0E\x1A\u0319\v\x1A\x03\x1A\x03\x1A\x07\x1A\u031D" +
        "\n\x1A\f\x1A\x0E\x1A\u0320\v\x1A\x06\x1A\u0322\n\x1A\r\x1A\x0E\x1A\u0323" +
        "\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u032A\n\x1B\f\x1B\x0E\x1B\u032D" +
        "\v\x1B\x03\x1B\x03\x1B\x07\x1B\u0331\n\x1B\f\x1B\x0E\x1B\u0334\v\x1B\x06" +
        "\x1B\u0336\n\x1B\r\x1B\x0E\x1B\u0337\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
        "\x1C\u033E\n\x1C\f\x1C\x0E\x1C\u0341\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0345" +
        "\n\x1C\f\x1C\x0E\x1C\u0348\v\x1C\x06\x1C\u034A\n\x1C\r\x1C\x0E\x1C\u034B" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0352\n\x1D\f\x1D\x0E\x1D\u0355" +
        "\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0359\n\x1D\f\x1D\x0E\x1D\u035C\v\x1D\x06" +
        "\x1D\u035E\n\x1D\r\x1D\x0E\x1D\u035F\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
        "\x1E\u0381\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
        "\u0389\n\x1F\f\x1F\x0E\x1F\u038C\v\x1F\x03 \x03 \x03 \x03 \x05 \u0392" +
        "\n \x03 \x07 \u0395\n \f \x0E \u0398\v \x03 \x03 \x03!\x05!\u039D\n!\x03" +
        "!\x03!\x06!\u03A1\n!\r!\x0E!\u03A2\x03!\x03!\x03\"\x05\"\u03A8\n\"\x03" +
        "\"\x03\"\x06\"\u03AC\n\"\r\"\x0E\"\u03AD\x03\"\x03\"\x03#\x05#\u03B3\n" +
        "#\x03#\x03#\x06#\u03B7\n#\r#\x0E#\u03B8\x03#\x03#\x03$\x03$\x03$\x03$" +
        "\x03$\x03$\x07$\u03C3\n$\f$\x0E$\u03C6\v$\x07$\u03C8\n$\f$\x0E$\u03CB" +
        "\v$\x03$\x07$\u03CE\n$\f$\x0E$\u03D1\v$\x03$\x07$\u03D4\n$\f$\x0E$\u03D7" +
        "\v$\x03$\x07$\u03DA\n$\f$\x0E$\u03DD\v$\x03$\x03$\x07$\u03E1\n$\f$\x0E" +
        "$\u03E4\v$\x03$\x07$\u03E7\n$\f$\x0E$\u03EA\v$\x05$\u03EC\n$\x03%\x03" +
        "%\x05%\u03F0\n%\x03%\x03%\x05%\u03F4\n%\x05%\u03F6\n%\x03%\x03%\x03&\x03" +
        "&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0404\n(\f(\x0E(\u0407" +
        "\v(\x07(\u0409\n(\f(\x0E(\u040C\v(\x03(\x07(\u040F\n(\f(\x0E(\u0412\v" +
        "(\x03(\x07(\u0415\n(\f(\x0E(\u0418\v(\x03(\x03(\x07(\u041C\n(\f(\x0E(" +
        "\u041F\v(\x03(\x07(\u0422\n(\f(\x0E(\u0425\v(\x05(\u0427\n(\x03)\x03)" +
        "\x07)\u042B\n)\f)\x0E)\u042E\v)\x03)\x03)\x03)\x03)\x07)\u0434\n)\f)\x0E" +
        ")\u0437\v)\x03)\x03)\x05)\u043B\n)\x03*\x03*\x03*\x03*\x03*\x03*\x05*" +
        "\u0443\n*\x03*\x07*\u0446\n*\f*\x0E*\u0449\v*\x07*\u044B\n*\f*\x0E*\u044E" +
        "\v*\x03*\x07*\u0451\n*\f*\x0E*\u0454\v*\x03*\x03*\x07*\u0458\n*\f*\x0E" +
        "*\u045B\v*\x03*\x07*\u045E\n*\f*\x0E*\u0461\v*\x05*\u0463\n*\x03+\x03" +
        "+\x03+\x03+\x05+\u0469\n+\x03+\x03+\x03+\x07+\u046E\n+\f+\x0E+\u0471\v" +
        "+\x03,\x03,\x07,\u0475\n,\f,\x0E,\u0478\v,\x03,\x03,\x07,\u047C\n,\f," +
        "\x0E,\u047F\v,\x03,\x03,\x03-\x03-\x05-\u0485\n-\x03-\x03-\x03-\x03-\x07" +
        "-\u048B\n-\f-\x0E-\u048E\v-\x07-\u0490\n-\f-\x0E-\u0493\v-\x03-\x07-\u0496" +
        "\n-\f-\x0E-\u0499\v-\x03-\x03-\x07-\u049D\n-\f-\x0E-\u04A0\v-\x03-\x07" +
        "-\u04A3\n-\f-\x0E-\u04A6\v-\x05-\u04A8\n-\x03.\x03.\x03.\x03.\x03.\x03" +
        ".\x07.\u04B0\n.\f.\x0E.\u04B3\v.\x07.\u04B5\n.\f.\x0E.\u04B8\v.\x03.\x07" +
        ".\u04BB\n.\f.\x0E.\u04BE\v.\x03.\x03.\x07.\u04C2\n.\f.\x0E.\u04C5\v.\x03" +
        ".\x07.\u04C8\n.\f.\x0E.\u04CB\v.\x05.\u04CD\n.\x03/\x03/\x03/\x03/\x03" +
        "/\x03/\x07/\u04D5\n/\f/\x0E/\u04D8\v/\x07/\u04DA\n/\f/\x0E/\u04DD\v/\x03" +
        "/\x07/\u04E0\n/\f/\x0E/\u04E3\v/\x03/\x03/\x07/\u04E7\n/\f/\x0E/\u04EA" +
        "\v/\x03/\x07/\u04ED\n/\f/\x0E/\u04F0\v/\x05/\u04F2\n/\x030\x030\x030\x03" +
        "0\x030\x030\x070\u04FA\n0\f0\x0E0\u04FD\v0\x070\u04FF\n0\f0\x0E0\u0502" +
        "\v0\x030\x070\u0505\n0\f0\x0E0\u0508\v0\x030\x030\x070\u050C\n0\f0\x0E" +
        "0\u050F\v0\x030\x070\u0512\n0\f0\x0E0\u0515\v0\x050\u0517\n0\x031\x03" +
        "1\x031\x031\x071\u051D\n1\f1\x0E1\u0520\v1\x031\x031\x071\u0524\n1\f1" +
        "\x0E1\u0527\v1\x071\u0529\n1\f1\x0E1\u052C\v1\x031\x051\u052F\n1\x031" +
        "\x071\u0532\n1\f1\x0E1\u0535\v1\x031\x031\x071\u0539\n1\f1\x0E1\u053C" +
        "\v1\x031\x071\u053F\n1\f1\x0E1\u0542\v1\x051\u0544\n1\x032\x032\x032\x03" +
        "2\x062\u054A\n2\r2\x0E2\u054B\x032\x032\x072\u0550\n2\f2\x0E2\u0553\v" +
        "2\x072\u0555\n2\f2\x0E2\u0558\v2\x032\x052\u055B\n2\x032\x072\u055E\n" +
        "2\f2\x0E2\u0561\v2\x032\x032\x072\u0565\n2\f2\x0E2\u0568\v2\x032\x072" +
        "\u056B\n2\f2\x0E2\u056E\v2\x052\u0570\n2\x033\x033\x033\x033\x073\u0576" +
        "\n3\f3\x0E3\u0579\v3\x033\x033\x073\u057D\n3\f3\x0E3\u0580\v3\x063\u0582" +
        "\n3\r3\x0E3\u0583\x034\x034\x034\x034\x074\u058A\n4\f4\x0E4\u058D\v4\x03" +
        "4\x034\x074\u0591\n4\f4\x0E4\u0594\v4\x064\u0596\n4\r4\x0E4\u0597\x03" +
        "5\x035\x035\x035\x075\u059E\n5\f5\x0E5\u05A1\v5\x035\x035\x075\u05A5\n" +
        "5\f5\x0E5\u05A8\v5\x065\u05AA\n5\r5\x0E5\u05AB\x036\x036\x036\x036\x07" +
        "6\u05B2\n6\f6\x0E6\u05B5\v6\x036\x036\x076\u05B9\n6\f6\x0E6\u05BC\v6\x06" +
        "6\u05BE\n6\r6\x0E6\u05BF\x037\x037\x037\x037\x077\u05C6\n7\f7\x0E7\u05C9" +
        "\v7\x037\x037\x077\u05CD\n7\f7\x0E7\u05D0\v7\x067\u05D2\n7\r7\x0E7\u05D3" +
        "\x038\x038\x038\x038\x078\u05DA\n8\f8\x0E8\u05DD\v8\x038\x038\x078\u05E1" +
        "\n8\f8\x0E8\u05E4\v8\x068\u05E6\n8\r8\x0E8\u05E7\x039\x039\x039\x039\x07" +
        "9\u05EE\n9\f9\x0E9\u05F1\v9\x039\x039\x079\u05F5\n9\f9\x0E9\u05F8\v9\x06" +
        "9\u05FA\n9\r9\x0E9\u05FB\x03:\x03:\x03:\x03:\x07:\u0602\n:\f:\x0E:\u0605" +
        "\v:\x03:\x03:\x07:\u0609\n:\f:\x0E:\u060C\v:\x06:\u060E\n:\r:\x0E:\u060F" +
        "\x03;\x03;\x03;\x03;\x07;\u0616\n;\f;\x0E;\u0619\v;\x03;\x03;\x07;\u061D" +
        "\n;\f;\x0E;\u0620\v;\x06;\u0622\n;\r;\x0E;\u0623\x03<\x03<\x03<\x03<\x07" +
        "<\u062A\n<\f<\x0E<\u062D\v<\x03<\x03<\x07<\u0631\n<\f<\x0E<\u0634\v<\x06" +
        "<\u0636\n<\r<\x0E<\u0637\x03=\x03=\x03=\x03=\x07=\u063E\n=\f=\x0E=\u0641" +
        "\v=\x03=\x03=\x07=\u0645\n=\f=\x0E=\u0648\v=\x06=\u064A\n=\r=\x0E=\u064B" +
        "\x03>\x03>\x03>\x03>\x07>\u0652\n>\f>\x0E>\u0655\v>\x03>\x03>\x07>\u0659" +
        "\n>\f>\x0E>\u065C\v>\x06>\u065E\n>\r>\x0E>\u065F\x03?\x03?\x03?\x03?\x07" +
        "?\u0666\n?\f?\x0E?\u0669\v?\x03?\x03?\x07?\u066D\n?\f?\x0E?\u0670\v?\x06" +
        "?\u0672\n?\r?\x0E?\u0673\x03@\x03@\x03@\x03@\x07@\u067A\n@\f@\x0E@\u067D" +
        "\v@\x03@\x03@\x07@\u0681\n@\f@\x0E@\u0684\v@\x06@\u0686\n@\r@\x0E@\u0687" +
        "\x03A\x03A\x03A\x03A\x07A\u068E\nA\fA\x0EA\u0691\vA\x03A\x03A\x07A\u0695" +
        "\nA\fA\x0EA\u0698\vA\x06A\u069A\nA\rA\x0EA\u069B\x03B\x03B\x03B\x03B\x07" +
        "B\u06A2\nB\fB\x0EB\u06A5\vB\x03B\x03B\x07B\u06A9\nB\fB\x0EB\u06AC\vB\x06" +
        "B\u06AE\nB\rB\x0EB\u06AF\x03C\x03C\x03C\x03C\x07C\u06B6\nC\fC\x0EC\u06B9" +
        "\vC\x03C\x03C\x07C\u06BD\nC\fC\x0EC\u06C0\vC\x06C\u06C2\nC\rC\x0EC\u06C3" +
        "\x03D\x03D\x03D\x03D\x07D\u06CA\nD\fD\x0ED\u06CD\vD\x03D\x03D\x07D\u06D1" +
        "\nD\fD\x0ED\u06D4\vD\x06D\u06D6\nD\rD\x0ED\u06D7\x03E\x03E\x03E\x03E\x07" +
        "E\u06DE\nE\fE\x0EE\u06E1\vE\x03E\x03E\x07E\u06E5\nE\fE\x0EE\u06E8\vE\x06" +
        "E\u06EA\nE\rE\x0EE\u06EB\x03F\x03F\x03F\x03F\x07F\u06F2\nF\fF\x0EF\u06F5" +
        "\vF\x03F\x03F\x07F\u06F9\nF\fF\x0EF\u06FC\vF\x06F\u06FE\nF\rF\x0EF\u06FF" +
        "\x03G\x03G\x03G\x03G\x07G\u0706\nG\fG\x0EG\u0709\vG\x03G\x03G\x07G\u070D" +
        "\nG\fG\x0EG\u0710\vG\x06G\u0712\nG\rG\x0EG\u0713\x03H\x03H\x03H\x03H\x07" +
        "H\u071A\nH\fH\x0EH\u071D\vH\x03H\x03H\x07H\u0721\nH\fH\x0EH\u0724\vH\x06" +
        "H\u0726\nH\rH\x0EH\u0727\x03I\x03I\x03I\x03I\x07I\u072E\nI\fI\x0EI\u0731" +
        "\vI\x03I\x03I\x07I\u0735\nI\fI\x0EI\u0738\vI\x06I\u073A\nI\rI\x0EI\u073B" +
        "\x03J\x03J\x03J\x03J\x07J\u0742\nJ\fJ\x0EJ\u0745\vJ\x03J\x03J\x07J\u0749" +
        "\nJ\fJ\x0EJ\u074C\vJ\x06J\u074E\nJ\rJ\x0EJ\u074F\x03K\x03K\x03K\x03K\x03" +
        "K\x03K\x03K\x03K\x07K\u075A\nK\fK\x0EK\u075D\vK\x06K\u075F\nK\rK\x0EK" +
        "\u0760\x03K\x03K\x07K\u0765\nK\fK\x0EK\u0768\vK\x03K\x03K\x07K\u076C\n" +
        "K\fK\x0EK\u076F\vK\x03K\x07K\u0772\nK\fK\x0EK\u0775\vK\x05K\u0777\nK\x03" +
        "L\x03L\x03L\x03L\x03L\x03L\x03L\x06L\u0780\nL\rL\x0EL\u0781\x03M\x03M" +
        "\x03M\x03M\x07M\u0788\nM\fM\x0EM\u078B\vM\x03M\x03M\x07M\u078F\nM\fM\x0E" +
        "M\u0792\vM\x07M\u0794\nM\fM\x0EM\u0797\vM\x03M\x03M\x03M\x03M\x06M\u079D" +
        "\nM\rM\x0EM\u079E\x06M\u07A1\nM\rM\x0EM\u07A2\x03M\x03M\x07M\u07A7\nM" +
        "\fM\x0EM\u07AA\vM\x03M\x03M\x07M\u07AE\nM\fM\x0EM\u07B1\vM\x03M\x07M\u07B4" +
        "\nM\fM\x0EM\u07B7\vM\x05M\u07B9\nM\x03N\x03N\x03N\x03N\x05N\u07BF\nN\x03" +
        "O\x03O\x03O\x03O\x07O\u07C5\nO\fO\x0EO\u07C8\vO\x03O\x03O\x07O\u07CC\n" +
        "O\fO\x0EO\u07CF\vO\x07O\u07D1\nO\fO\x0EO\u07D4\vO\x03O\x03O\x05O\u07D8" +
        "\nO\x03O\x07O\u07DB\nO\fO\x0EO\u07DE\vO\x03O\x06O\u07E1\nO\rO\x0EO\u07E2" +
        "\x06O\u07E5\nO\rO\x0EO\u07E6\x03O\x03O\x03P\x03P\x03P\x03P\x07P\u07EF" +
        "\nP\fP\x0EP\u07F2\vP\x03P\x03P\x07P\u07F6\nP\fP\x0EP\u07F9\vP\x07P\u07FB" +
        "\nP\fP\x0EP\u07FE\vP\x03P\x03P\x03P\x03P\x06P\u0804\nP\rP\x0EP\u0805\x06" +
        "P\u0808\nP\rP\x0EP\u0809\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x07Q\u0812\nQ\f" +
        "Q\x0EQ\u0815\vQ\x03Q\x03Q\x07Q\u0819\nQ\fQ\x0EQ\u081C\vQ\x07Q\u081E\n" +
        "Q\fQ\x0EQ\u0821\vQ\x03Q\x03Q\x03Q\x03Q\x06Q\u0827\nQ\rQ\x0EQ\u0828\x06" +
        "Q\u082B\nQ\rQ\x0EQ\u082C\x03Q\x03Q\x03R\x03R\x03R\x03R\x07R\u0835\nR\f" +
        "R\x0ER\u0838\vR\x03R\x03R\x07R\u083C\nR\fR\x0ER\u083F\vR\x07R\u0841\n" +
        "R\fR\x0ER\u0844\vR\x03R\x03R\x03R\x03R\x06R\u084A\nR\rR\x0ER\u084B\x06" +
        "R\u084E\nR\rR\x0ER\u084F\x03R\x03R\x03S\x03S\x03S\x03S\x07S\u0858\nS\f" +
        "S\x0ES\u085B\vS\x03S\x03S\x07S\u085F\nS\fS\x0ES\u0862\vS\x07S\u0864\n" +
        "S\fS\x0ES\u0867\vS\x03S\x03S\x03S\x07S\u086C\nS\fS\x0ES\u086F\vS\x03S" +
        "\x06S\u0872\nS\rS\x0ES\u0873\x06S\u0876\nS\rS\x0ES\u0877\x03S\x03S\x07" +
        "S\u087C\nS\fS\x0ES\u087F\vS\x03S\x03S\x07S\u0883\nS\fS\x0ES\u0886\vS\x03" +
        "S\x07S\u0889\nS\fS\x0ES\u088C\vS\x05S\u088E\nS\x03T\x06T\u0891\nT\rT\x0E" +
        "T\u0892\x03U\x03U\x03U\x03U\x03V\x07V\u089A\nV\fV\x0EV\u089D\vV\x03V\x03" +
        "V\x07V\u08A1\nV\fV\x0EV\u08A4\vV\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03" +
        "X\x03X\x03X\x03X\x05X\u08B1\nX\x03Y\x03Y\x03Y\x05Y\u08B6";
    bitmarkParser._serializedATNSegment1 = "\nY\x03Y\x03Y\x05Y\u08BA\nY\x03Y\x03Y\x05Y\u08BE\nY\x03Y\x05Y\u08C1\n" +
        "Y\x03Z\x03Z\x03Z\x05Z\u08C6\nZ\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03" +
        "^\x03_\x03_\x03`\x03`\x03a\x03a\x03b\x03b\x03c\x03c\x03d\x03d\x03d\x05" +
        "d\u08DD\nd\x03d\x03d\x03d\x05d\u08E2\nd\x05d\u08E4\nd\x03e\x03e\x03f\x03" +
        "f\x03f\x03f\x03f\x03f\x05f\u08EE\nf\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
        "g\x03g\x05g\u08F8\ng\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x05h\u0902" +
        "\nh\x03i\x03i\x03i\x03i\x05i\u0908\ni\x03i\x03i\x03i\x03i\x03i\x05i\u090F" +
        "\ni\x03j\x03j\x07j\u0913\nj\fj\x0Ej\u0916\vj\x03k\x03k\x03k\x07k\u091B" +
        "\nk\fk\x0Ek\u091E\vk\x03k\x03k\x03k\x03l\x03l\x07l\u0925\nl\fl\x0El\u0928" +
        "\vl\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x05m\u0932\nm\x03n\x03n\x07" +
        "n\u0936\nn\fn\x0En\u0939\vn\x03n\x03n\x05n\u093D\nn\x03o\x03o\x03o\x07" +
        "o\u0942\no\fo\x0Eo\u0945\vo\x03o\x03o\x03o\x03p\x03p\x03p\x05p\u094D\n" +
        "p\x03p\x03p\x05p\u0951\np\x03p\x03p\x05p\u0955\np\x03p\x05p\u0958\np\x03" +
        "q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x07q\u0965\nq\fq\x0E" +
        "q\u0968\vq\x03q\x05q\u096B\nq\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r" +
        "\x03r\x03r\x03r\x07r\u0978\nr\fr\x0Er\u097B\vr\x03r\x05r\u097E\nr\x03" +
        "s\x03s\x07s\u0982\ns\fs\x0Es\u0985\vs\x03t\x03t\x03t\x03t\x03t\x03t\x03" +
        "t\x03t\x05t\u098F\nt\x03u\x03u\x03u\x05u\u0994\nu\x03u\x03u\x03u\x05u" +
        "\u0999\nu\x05u\u099B\nu\x03v\x03v\x03v\x05v\u09A0\nv\x03v\x03v\x03v\x05" +
        "v\u09A5\nv\x05v\u09A7\nv\x03w\x03w\x03w\x05w\u09AC\nw\x03w\x03w\x07w\u09B0" +
        "\nw\fw\x0Ew\u09B3\vw\x03w\x03w\x06w\u09B7\nw\rw\x0Ew\u09B8\x03w\x03w\x03" +
        "w\x03w\x03w\x03w\x03w\x07w\u09C2\nw\fw\x0Ew\u09C5\vw\x03w\x05w\u09C8\n" +
        "w\x03x\x03x\x03x\x03x\x03y\x03y\x03z\x03z\x03z\x07z\u09D3\nz\fz\x0Ez\u09D6" +
        "\vz\x03z\x05z\u09D9\nz\x03z\x03z\x03z\x03z\x07z\u09DF\nz\fz\x0Ez\u09E2" +
        "\vz\x03z\x03z\x07z\u09E6\nz\fz\x0Ez\u09E9\vz\x03z\x05z\u09EC\nz\x05z\u09EE" +
        "\nz\x03{\x03{\x03{\x03{\x07{\u09F4\n{\f{\x0E{\u09F7\v{\x03{\x03{\x03|" +
        "\x03|\x05|\u09FD\n|\x03|\x03|\x03|\x05|\u0A02\n|\x03|\x05|\u0A05\n|\x03" +
        "}\x03}\x03}\x03}\x05}\u0A0B\n}\x03}\x05}\u0A0E\n}\x03~\x03~\x05~\u0A12" +
        "\n~\x03~\x03~\x03~\x07~\u0A17\n~\f~\x0E~\u0A1A\v~\x07~\u0A1C\n~\f~\x0E" +
        "~\u0A1F\v~\x03~\x07~\u0A22\n~\f~\x0E~\u0A25\v~\x07~\u0A27\n~\f~\x0E~\u0A2A" +
        "\v~\x03~\x03~\x03~\x03~\x03~\x07~\u0A31\n~\f~\x0E~\u0A34\v~\x03~\x05~" +
        "\u0A37\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x06\x7F\u0A3E\n\x7F" +
        "\r\x7F\x0E\x7F\u0A3F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
        "\x7F\x07\x7F\u0A49\n\x7F\f\x7F\x0E\x7F\u0A4C\v\x7F\x03\x7F\x05\x7F\u0A4F" +
        "\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81" +
        "\x06\x81\u0A59\n\x81\r\x81\x0E\x81\u0A5A\x03\x81\x03\x81\x05\x81\u0A5F" +
        "\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x06\x82\u0A65\n\x82\r\x82\x0E\x82" +
        "\u0A66\x03\x82\x03\x82\x03\x83\x03\x83\x05\x83\u0A6D\n\x83\x03\x83\x03" +
        "\x83\x03\x83\x07\x83\u0A72\n\x83\f\x83\x0E\x83\u0A75\v\x83\x07\x83\u0A77" +
        "\n\x83\f\x83\x0E\x83\u0A7A\v\x83\x03\x83\x07\x83\u0A7D\n\x83\f\x83\x0E" +
        "\x83\u0A80\v\x83\x07\x83\u0A82\n\x83\f\x83\x0E\x83\u0A85\v\x83\x03\x83" +
        "\x03\x83\x03\x83\x05\x83\u0A8A\n\x83\x03\x83\x05\x83\u0A8D\n\x83\x03\x84" +
        "\x03\x84\x06\x84\u0A91\n\x84\r\x84\x0E\x84\u0A92\x03\x84\x03\x84\x03\x85" +
        "\x03\x85\x03\x85\x06\x85\u0A9A\n\x85\r\x85\x0E\x85\u0A9B\x03\x85\x03\x85" +
        "\x03\x85\x03\x85\x03\x85\x05\x85\u0AA3\n\x85\x03\x86\x03\x86\x03\x86\x03" +
        "\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0AAD\n\x86\x03\x87\x03\x87" +
        "\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0AB8" +
        "\n\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89" +
        "\x03\x8A\x03\x8A\x07\x8A\u0AC4\n\x8A\f\x8A\x0E\x8A\u0AC7\v\x8A\x03\x8A" +
        "\x07\x8A\u0ACA\n\x8A\f\x8A\x0E\x8A\u0ACD\v\x8A\x03\x8B\x03\x8B\x03\x8B" +
        "\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0AD6\n\x8B\f\x8B\x0E\x8B\u0AD9" +
        "\v\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0ADF\n\x8B\f\x8B\x0E\x8B" +
        "\u0AE2\v\x8B\x03\x8B\x05\x8B\u0AE5\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
        "\x06\x8C\u0AEB\n\x8C\r\x8C\x0E\x8C\u0AEC\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
        "\x03\x8C\x07\x8C\u0AF4\n\x8C\f\x8C\x0E\x8C\u0AF7\v\x8C\x03\x8C\x05\x8C" +
        "\u0AFA\n\x8C\x03\x8D\x03\x8D\x05\x8D\u0AFE\n\x8D\x03\x8D\x03\x8D\x03\x8E" +
        "\x03\x8E\x05\x8E\u0B04\n\x8E\x06\x8E\u0B06\n\x8E\r\x8E\x0E\x8E\u0B07\x03" +
        "\x8F\x03\x8F\x06\x8F\u0B0C\n\x8F\r\x8F\x0E\x8F\u0B0D\x03\x8F\x05\x8F\u0B11" +
        "\n\x8F\x03\x8F\x03\x8F\x06\x8F\u0B15\n\x8F\r\x8F\x0E\x8F\u0B16\x03\x8F" +
        "\x05\x8F\u0B1A\n\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x07" +
        "\x8F\u0B22\n\x8F\f\x8F\x0E\x8F\u0B25\v\x8F\x03\x8F\x03\x8F\x07\x8F\u0B29" +
        "\n\x8F\f\x8F\x0E\x8F\u0B2C\v\x8F\x03\x8F\x03\x8F\x07\x8F\u0B30\n\x8F\f" +
        "\x8F\x0E\x8F\u0B33\v\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u0B38\n\x8F\x03" +
        "\x90\x03\x90\x03\x91\x03\x91\x06\x91\u0B3E\n\x91\r\x91\x0E\x91\u0B3F\x03" +
        "\x91\x05\x91\u0B43\n\x91\x03\x92\x03\x92\x03\x93\x03\x93\x03\x94\x03\x94" +
        "\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
        "\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
        "\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x06\x94\u0B64" +
        "\n\x94\r\x94\x0E\x94\u0B65\x03\x95\x03\x95\x03\x96\x03\x96\x03\x96\b\u042C" +
        "\u0435\u0966\u0979\u09C3\u0AE0\x02\x02\x97\x02\x02\x04\x02\x06\x02\b\x02" +
        "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
        "\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
        "\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
        "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
        "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
        "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
        "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
        "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
        "\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
        "\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
        "\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
        "\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102" +
        "\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110" +
        "\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E" +
        "\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\x02\x1C" +
        "\x03\x02\t\n\x03\x02\xBA\xBB\x03\x02\\]\x03\x02\x81\x82\x03\x02LN\x03" +
        "\x02jk\x03\x02PP\x07\x02\x98\x99\x9B\x9C\xAA\xB1\xBA\xBB\xBD\xBE\x04\x02" +
        "\x97\x97\xAC\xAC\x04\x02\x98\x98\xAD\xAD\x04\x02\x99\x99\xAE\xAE\x04\x02" +
        "\x9A\x9A\xAF\xAF\x04\x02\x9B\x9B\xB0\xB0\x04\x02\x9C\x9C\xB1\xB1\x04\x02" +
        "\xA3\xA3\xB5\xB5\x04\x02\xA5\xA5\xB6\xB6\x04\x02\xA6\xA6\xB7\xB7\x04\x02" +
        "\xA7\xA7\xB8\xB8\x04\x02\xA8\xA8\xB9\xB9\x03\x02yz\x04\x02\x87\x87\x8A" +
        "\x8D\x03\x02__\x04\x02``bb\x03\x02lm\x03\x02ee\x03\x02ff\x02\u0D10\x02" +
        "\u0139\x03\x02\x02\x02\x04\u0147\x03\x02\x02\x02\x06\u018B\x03\x02\x02" +
        "\x02\b\u018D\x03\x02\x02\x02\n\u019D\x03\x02\x02\x02\f\u01BA\x03\x02\x02" +
        "\x02\x0E\u01C5\x03\x02\x02\x02\x10\u01CF\x03\x02\x02\x02\x12\u01E0\x03" +
        "\x02\x02\x02\x14\u01F2\x03\x02\x02\x02\x16\u01F5\x03\x02\x02\x02\x18\u020B" +
        "\x03\x02\x02\x02\x1A\u0221\x03\x02\x02\x02\x1C\u0235\x03\x02\x02\x02\x1E" +
        "\u0249\x03\x02\x02\x02 \u025D\x03\x02\x02\x02\"\u0271\x03\x02\x02\x02" +
        "$\u0285\x03\x02\x02\x02&\u0299\x03\x02\x02\x02(\u02AD\x03\x02\x02\x02" +
        "*\u02C1\x03\x02\x02\x02,\u02D5\x03\x02\x02\x02.\u02E9\x03\x02\x02\x02" +
        "0\u02FD\x03\x02\x02\x022\u0311\x03\x02\x02\x024\u0325\x03\x02\x02\x02" +
        "6\u0339\x03\x02\x02\x028\u034D\x03\x02\x02\x02:\u0380\x03\x02\x02\x02" +
        "<\u0382\x03\x02\x02\x02>\u038D\x03\x02\x02\x02@\u039C\x03\x02\x02\x02" +
        "B\u03A7\x03\x02\x02\x02D\u03B2\x03\x02\x02\x02F\u03BC\x03\x02\x02\x02" +
        "H\u03ED\x03\x02\x02\x02J\u03F9\x03\x02\x02\x02L\u03FB\x03\x02\x02\x02" +
        "N\u03FD\x03\x02\x02\x02P\u043A\x03\x02\x02\x02R\u043C\x03\x02\x02\x02" +
        "T\u0464\x03\x02\x02\x02V\u0472\x03\x02\x02\x02X\u0482\x03\x02\x02\x02" +
        "Z\u04A9\x03\x02\x02\x02\\\u04CE\x03\x02\x02\x02^\u04F3\x03\x02\x02\x02" +
        "`\u0518\x03\x02\x02\x02b\u0545\x03\x02\x02\x02d\u0571\x03\x02\x02\x02" +
        "f\u0585\x03\x02\x02\x02h\u0599\x03\x02\x02\x02j\u05AD\x03\x02\x02\x02" +
        "l\u05C1\x03\x02\x02\x02n\u05D5\x03\x02\x02\x02p\u05E9\x03\x02\x02\x02" +
        "r\u05FD\x03\x02\x02\x02t\u0611\x03\x02\x02\x02v\u0625\x03\x02\x02\x02" +
        "x\u0639\x03\x02\x02\x02z\u064D\x03\x02\x02\x02|\u0661\x03\x02\x02\x02" +
        "~\u0675\x03\x02\x02\x02\x80\u0689\x03\x02\x02\x02\x82\u069D\x03\x02\x02" +
        "\x02\x84\u06B1\x03\x02\x02\x02\x86\u06C5\x03\x02\x02\x02\x88\u06D9\x03" +
        "\x02\x02\x02\x8A\u06ED\x03\x02\x02\x02\x8C\u0701\x03\x02\x02\x02\x8E\u0715" +
        "\x03\x02\x02\x02\x90\u0729\x03\x02\x02\x02\x92\u073D\x03\x02\x02\x02\x94" +
        "\u0751\x03\x02\x02\x02\x96\u077F\x03\x02\x02\x02\x98\u0783\x03\x02\x02" +
        "\x02\x9A\u07BA\x03\x02\x02\x02\x9C\u07C0\x03\x02\x02\x02\x9E\u07EA\x03" +
        "\x02\x02\x02\xA0\u080D\x03\x02\x02\x02\xA2\u0830\x03\x02\x02\x02\xA4\u0853" +
        "\x03\x02\x02\x02\xA6\u0890\x03\x02\x02\x02\xA8\u0894\x03\x02\x02\x02\xAA" +
        "\u089B\x03\x02\x02\x02\xAC\u08A5\x03\x02\x02\x02\xAE\u08B0\x03\x02\x02" +
        "\x02\xB0\u08C0\x03\x02\x02\x02\xB2\u08C2\x03\x02\x02\x02\xB4\u08C7\x03" +
        "\x02\x02\x02\xB6\u08C9\x03\x02\x02\x02\xB8\u08CB\x03\x02\x02\x02\xBA\u08CD" +
        "\x03\x02\x02\x02\xBC\u08CF\x03\x02\x02\x02\xBE\u08D1\x03\x02\x02\x02\xC0" +
        "\u08D3\x03\x02\x02\x02\xC2\u08D5\x03\x02\x02\x02\xC4\u08D7\x03\x02\x02" +
        "\x02\xC6\u08E3\x03\x02\x02\x02\xC8\u08E5\x03\x02\x02\x02\xCA\u08ED\x03" +
        "\x02\x02\x02\xCC\u08EF\x03\x02\x02\x02\xCE\u08F9\x03\x02\x02\x02\xD0\u0903" +
        "\x03\x02\x02\x02\xD2\u0910\x03\x02\x02\x02\xD4\u0917\x03\x02\x02\x02\xD6" +
        "\u0922\x03\x02\x02\x02\xD8\u0929\x03\x02\x02\x02\xDA\u0933\x03\x02\x02" +
        "\x02\xDC\u093E\x03\x02\x02\x02\xDE\u0957\x03\x02\x02\x02\xE0\u096A\x03" +
        "\x02\x02\x02\xE2\u097D\x03\x02\x02\x02\xE4\u097F\x03\x02\x02\x02\xE6\u0986" +
        "\x03\x02\x02\x02\xE8\u099A\x03\x02\x02\x02\xEA\u09A6\x03\x02\x02\x02\xEC" +
        "\u09C7\x03\x02\x02\x02\xEE\u09C9\x03\x02\x02\x02\xF0\u09CD\x03\x02\x02" +
        "\x02\xF2\u09ED\x03\x02\x02\x02\xF4\u09EF\x03\x02\x02\x02\xF6\u0A04\x03" +
        "\x02\x02\x02\xF8\u0A0D\x03\x02\x02\x02\xFA\u0A36\x03\x02\x02\x02\xFC\u0A4E" +
        "\x03\x02\x02\x02\xFE\u0A50\x03\x02\x02\x02\u0100\u0A54\x03\x02\x02\x02" +
        "\u0102\u0A60\x03\x02\x02\x02\u0104\u0A8C\x03\x02\x02\x02\u0106\u0A8E\x03" +
        "\x02\x02\x02\u0108\u0AA2\x03\x02\x02\x02\u010A\u0AAC\x03\x02\x02\x02\u010C" +
        "\u0AB7\x03\x02\x02\x02\u010E\u0AB9\x03\x02\x02\x02\u0110\u0ABD\x03\x02" +
        "\x02\x02\u0112\u0AC1\x03\x02\x02\x02\u0114\u0AE4\x03\x02\x02\x02\u0116" +
        "\u0AF9\x03\x02\x02\x02\u0118\u0AFB\x03\x02\x02\x02\u011A\u0B05\x03\x02" +
        "\x02\x02\u011C\u0B37\x03\x02\x02\x02\u011E\u0B39\x03\x02\x02\x02\u0120" +
        "\u0B3B\x03\x02\x02\x02\u0122\u0B44\x03\x02\x02\x02\u0124\u0B46\x03\x02" +
        "\x02\x02\u0126\u0B63\x03\x02\x02\x02\u0128\u0B67\x03\x02\x02\x02\u012A" +
        "\u0B69\x03\x02\x02\x02\u012C\u0136\x05\x04\x03\x02\u012D\u012F\x07\x04" +
        "\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130" +
        "\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02" +
        "\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0135\x07t\x02\x02\u0134\u0130" +
        "\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02" +
        "\u0136\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03" +
        "\x02\x02\x02\u0139\u012C\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
        "\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u0140\x03\x02" +
        "\x02\x02\u013D\u013F\x07t\x02\x02\u013E\u013D\x03\x02\x02\x02\u013F\u0142" +
        "\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02" +
        "\u0141\u0143\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0144\x07" +
        "\x02\x02\x03\u0144\x03\x03\x02\x02\x02\u0145\u0148\x05\x06\x04\x02\u0146" +
        "\u0148\x05\u011A\x8E\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0146\x03\x02" +
        "\x02\x02\u0148\x05\x03\x02\x02\x02\u0149\u018C\x05\b\x05\x02\u014A\u018C" +
        "\x05\n\x06\x02\u014B\u018C\x05\x0E\b\x02\u014C\u018C\x05\f\x07\x02\u014D" +
        "\u018C\x05\x12\n\x02\u014E\u018C\x05\x10\t\x02\u014F\u018C\x05\u0118\x8D" +
        "\x02\u0150\u018C\x05\x16\f\x02\u0151\u018C\x05\x18\r\x02\u0152\u018C\x05" +
        "F$\x02\u0153\u018C\x05N(\x02\u0154\u018C\x05R*\x02\u0155\u018C\x05X-\x02" +
        "\u0156\u018C\x05\\/\x02\u0157\u018C\x05Z.\x02\u0158\u018C\x05^0\x02\u0159" +
        "\u018C\x05`1\x02\u015A\u018C\x05b2\x02\u015B\u018C\x05d3\x02\u015C\u018C" +
        "\x05f4\x02\u015D\u018C\x05h5\x02\u015E\u018C\x05j6\x02\u015F\u018C\x05" +
        "l7\x02\u0160\u018C\x05n8\x02\u0161\u018C\x05p9\x02\u0162\u018C\x05t;\x02" +
        "\u0163\u018C\x05v<\x02\u0164\u018C\x05x=\x02\u0165\u018C\x05z>\x02\u0166" +
        "\u018C\x05\x8AF\x02\u0167\u018C\x05|?\x02\u0168\u018C\x05~@\x02\u0169" +
        "\u018C\x05\x80A\x02\u016A\u018C\x05\x82B\x02\u016B\u018C\x05\x84C\x02" +
        "\u016C\u018C\x05\x86D\x02\u016D\u018C\x05\x88E\x02\u016E\u018C\x05\x8C" +
        "G\x02\u016F\u018C\x05r:\x02\u0170\u018C\x05\x92J\x02\u0171\u018C\x05\x94" +
        "K\x02\u0172\u018C\x05\xA4S\x02\u0173\u018C\x05\x98M\x02\u0174\u018C\x05" +
        "\x9CO\x02\u0175\u018C\x05\x9EP\x02\u0176\u018C\x05\xA0Q\x02\u0177\u018C" +
        "\x05\xA2R\x02\u0178\u018C\x05\u0106\x84\x02\u0179\u018C\x05\x8EH\x02\u017A" +
        "\u018C\x05\x90I\x02\u017B\u018C\x05\x1A\x0E\x02\u017C\u018C\x05\x1C\x0F" +
        "\x02\u017D\u018C\x05\x1E\x10\x02\u017E\u018C\x05 \x11\x02\u017F\u018C" +
        "\x05\"\x12\x02\u0180\u018C\x05$\x13\x02\u0181\u018C\x05&\x14\x02\u0182" +
        "\u018C\x05(\x15\x02\u0183\u018C\x05*\x16\x02\u0184\u018C\x05,\x17\x02" +
        "\u0185\u018C\x05.\x18\x02\u0186\u018C\x050\x19\x02\u0187\u018C\x052\x1A" +
        "\x02\u0188\u018C\x054\x1B\x02\u0189\u018C\x056\x1C\x02\u018A\u018C\x05" +
        "8\x1D\x02\u018B\u0149\x03\x02\x02\x02\u018B\u014A\x03\x02\x02\x02\u018B" +
        "\u014B\x03\x02\x02\x02\u018B\u014C\x03\x02\x02\x02\u018B\u014D\x03\x02" +
        "\x02\x02\u018B\u014E\x03\x02\x02\x02\u018B\u014F\x03\x02\x02\x02\u018B" +
        "\u0150\x03\x02\x02\x02\u018B\u0151\x03\x02\x02\x02\u018B\u0152\x03\x02" +
        "\x02\x02\u018B\u0153\x03\x02\x02\x02\u018B\u0154\x03\x02\x02\x02\u018B" +
        "\u0155\x03\x02\x02\x02\u018B\u0156\x03\x02\x02\x02\u018B\u0157\x03\x02" +
        "\x02\x02\u018B\u0158\x03\x02\x02\x02\u018B\u0159\x03\x02\x02\x02\u018B" +
        "\u015A\x03\x02\x02\x02\u018B\u015B\x03\x02\x02\x02\u018B\u015C\x03\x02" +
        "\x02\x02\u018B\u015D\x03\x02\x02\x02\u018B\u015E\x03\x02\x02\x02\u018B" +
        "\u015F\x03\x02\x02\x02\u018B\u0160\x03\x02\x02\x02\u018B\u0161\x03\x02" +
        "\x02\x02\u018B\u0162\x03\x02\x02\x02\u018B\u0163\x03\x02\x02\x02\u018B" +
        "\u0164\x03\x02\x02\x02\u018B\u0165\x03\x02\x02\x02\u018B\u0166\x03\x02" +
        "\x02\x02\u018B\u0167\x03\x02\x02\x02\u018B\u0168\x03\x02\x02\x02\u018B" +
        "\u0169\x03\x02\x02\x02\u018B\u016A\x03\x02\x02\x02\u018B\u016B\x03\x02" +
        "\x02\x02\u018B\u016C\x03\x02\x02\x02\u018B\u016D\x03\x02\x02\x02\u018B" +
        "\u016E\x03\x02\x02\x02\u018B\u016F\x03\x02\x02\x02\u018B\u0170\x03\x02" +
        "\x02\x02\u018B\u0171\x03\x02\x02\x02\u018B\u0172\x03\x02\x02\x02\u018B" +
        "\u0173\x03\x02\x02\x02\u018B\u0174\x03\x02\x02\x02\u018B\u0175\x03\x02" +
        "\x02\x02\u018B\u0176\x03\x02\x02\x02\u018B\u0177\x03\x02\x02\x02\u018B" +
        "\u0178\x03\x02\x02\x02\u018B\u0179\x03\x02\x02\x02\u018B\u017A\x03\x02" +
        "\x02\x02\u018B\u017B\x03\x02\x02\x02\u018B\u017C\x03\x02\x02\x02\u018B" +
        "\u017D\x03\x02\x02\x02\u018B\u017E\x03\x02\x02\x02\u018B\u017F\x03\x02" +
        "\x02\x02\u018B\u0180\x03\x02\x02\x02\u018B\u0181\x03\x02\x02\x02\u018B" +
        "\u0182\x03\x02\x02\x02\u018B\u0183\x03\x02\x02\x02\u018B\u0184\x03\x02" +
        "\x02\x02\u018B\u0185\x03\x02\x02\x02\u018B\u0186\x03\x02\x02\x02\u018B" +
        "\u0187\x03\x02\x02\x02\u018B\u0188\x03\x02\x02\x02\u018B\u0189\x03\x02" +
        "\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C\x07\x03\x02\x02\x02\u018D\u018F" +
        "\x07\x05\x02\x02\u018E\u0190\x05\xAAV\x02\u018F\u018E\x03\x02\x02\x02" +
        "\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0199\x07" +
        "_\x02\x02\u0192\u0194\x07t\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197" +
        "\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02" +
        "\u0196\u0198\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u019A\x05" +
        ":\x1E\x02\u0199\u0195\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
        "\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\t\x03\x02\x02" +
        "\x02\u019D\u019F\x07\x06\x02\x02\u019E\u01A0\x05\xAAV\x02\u019F\u019E" +
        "\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
        "\u01A1\u01A5\x07_\x02\x02\u01A2\u01A4\x07t\x02\x02\u01A3\u01A2\x03\x02" +
        "\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5" +
        "\u01A6\x03\x02\x02\x02\u01A6\u01AB\x03\x02\x02\x02\u01A7\u01A5\x03\x02" +
        "\x02\x02\u01A8\u01A9\x05\u0118\x8D\x02\u01A9\u01AA\x07t\x02\x02\u01AA" +
        "\u01AC\x03\x02\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
        "\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B7\x05L\'\x02\u01AE\u01B0" +
        "\x07t\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02" +
        "\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B4\x03" +
        "\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B6\x05L\'\x02\u01B5" +
        "\u01B1\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02" +
        "\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\v\x03\x02\x02\x02\u01B9\u01B7" +
        "\x03\x02\x02\x02\u01BA\u01BC\x07\x07\x02\x02\u01BB\u01BD\x05\u011C\x8F" +
        "\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE" +
        "\x03\x02\x02\x02\u01BE\u01BF\x07_\x02\x02\u01BF\u01C3\x07t\x02\x02\u01C0" +
        "\u01C1\x05\u0112\x8A\x02\u01C1\u01C2\x07t\x02\x02\u01C2\u01C4\x03\x02" +
        "\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
        "\r\x03\x02\x02\x02\u01C5\u01C6\x07\b\x02\x02\u01C6\u01CA\x07_\x02\x02" +
        "\u01C7\u01C9\x07t\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CC\x03" +
        "\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
        "\u01CD\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01CE\x05\x14" +
        "\v\x02\u01CE\x0F\x03\x02\x02\x02\u01CF\u01D1\t\x02\x02\x02\u01D0\u01D2" +
        "\t\x03\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
        "\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01DD\x07_\x02\x02\u01D4\u01D6\x07" +
        "t\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7" +
        "\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02" +
        "\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DC\x05:\x1E\x02\u01DB\u01D7" +
        "\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02" +
        "\u01DD\u01DE\x03\x02\x02\x02\u01DE\x11\x03\x02\x02\x02\u01DF\u01DD\x03" +
        "\x02\x02\x02\u01E0\u01E1\x07\v\x02\x02\u01E1\u01E2\x07_\x02\x02\u01E2" +
        "\u01E3\x05\xF6|\x02\u01E3\x13\x03\x02\x02\x02\u01E4\u01E6\x07t\x02\x02" +
        "\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01EE\x03" +
        "\x02\x02\x02\u01E7\u01EF\x05\u0108\x85\x02\u01E8\u01EF\x05\u0112\x8A\x02" +
        "\u01E9\u01EF\x05\xF2z\x02\u01EA\u01EF\x05\u0104\x83\x02\u01EB\u01EF\x05" +
        "\xF6|\x02\u01EC\u01EF\x05\u0118\x8D\x02\u01ED\u01EF\x05\xFE\x80\x02\u01EE" +
        "\u01E7\x03\x02\x02\x02\u01EE\u01E8\x03\x02\x02\x02\u01EE\u01E9\x03\x02" +
        "\x02\x02\u01EE\u01EA\x03\x02\x02\x02\u01EE\u01EB\x03\x02\x02\x02\u01EE" +
        "\u01EC\x03\x02\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F1\x03\x02" +
        "\x02\x02\u01F0\u01E5\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2" +
        "\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\x15\x03\x02\x02" +
        "\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5\u01F6\x07\f\x02\x02\u01F6\u0200" +
        "\x07_\x02\x02\u01F7\u01F8\x07t\x02\x02\u01F8\u01FB\t\x04\x02\x02\u01F9" +
        "\u01FC\x05\u011C\x8F\x02\u01FA\u01FC\x07`\x02\x02\u01FB\u01F9\x03\x02" +
        "\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD" +
        "\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02" +
        "\x02\x02\u01FF\u0201\x07_\x02\x02\u0200\u01F7\x03\x02\x02\x02\u0201\u0202" +
        "\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
        "\u0203\u0204\x03\x02\x02\x02\u0204\u0208\x07t\x02\x02\u0205\u0207\x05" +
        "\u011A\x8E\x02\u0206\u0205\x03\x02\x02\x02\u0207\u020A\x03\x02\x02\x02" +
        "\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\x17\x03" +
        "\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020B\u020C\x07\r\x02\x02\u020C" +
        "\u0216\x07_\x02\x02\u020D\u020E\x07t\x02\x02\u020E\u0211\t\x04\x02\x02" +
        "\u020F\u0212\x05\u011C\x8F\x02\u0210\u0212\x07`\x02\x02\u0211\u020F\x03" +
        "\x02\x02\x02\u0211\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
        "\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02" +
        "\x02\x02\u0215\u0217\x07_\x02\x02\u0216\u020D\x03\x02\x02\x02\u0217\u0218" +
        "\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
        "\u0219\u021A\x03\x02\x02\x02\u021A\u021E\x07t\x02\x02\u021B\u021D\x05" +
        "\u011A\x8E\x02\u021C\u021B\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02" +
        "\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\x19\x03" +
        "\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0222\x079\x02\x02\u0222" +
        "\u0223\x05\xAAV\x02\u0223\u0227\x07_\x02\x02\u0224\u0226\x07t\x02\x02" +
        "\u0225\u0224\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225\x03" +
        "\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0231\x03\x02\x02\x02\u0229";
    bitmarkParser._serializedATNSegment2 = "\u0227\x03\x02\x02\x02\u022A\u022E\x05:\x1E\x02\u022B\u022D\x07t\x02\x02" +
        "\u022C\u022B\x03\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03" +
        "\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230" +
        "\u022E\x03\x02\x02\x02\u0231\u022A\x03\x02\x02\x02\u0232\u0233\x03\x02" +
        "\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234" +
        "\x1B\x03\x02\x02\x02\u0235\u0236\x07:\x02\x02\u0236\u0237\x05\xAAV\x02" +
        "\u0237\u023B\x07_\x02\x02\u0238\u023A\x07t\x02\x02\u0239\u0238\x03\x02" +
        "\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B" +
        "\u023C\x03\x02\x02\x02\u023C\u0245\x03\x02\x02\x02\u023D\u023B\x03\x02" +
        "\x02\x02\u023E\u0242\x05:\x1E\x02\u023F\u0241\x07t\x02\x02\u0240\u023F" +
        "\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02" +
        "\u0242\u0243\x03\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03" +
        "\x02\x02\x02\u0245\u023E\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247" +
        "\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\x1D\x03\x02\x02" +
        "\x02\u0249\u024A\x07;\x02\x02\u024A\u024B\x05\xAAV\x02\u024B\u024F\x07" +
        "_\x02\x02\u024C\u024E\x07t\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E\u0251" +
        "\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02" +
        "\u0250\u0259\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0256\x05" +
        ":\x1E\x02\u0253\u0255\x07t\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0258" +
        "\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02" +
        "\u0257\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u0252\x03" +
        "\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B" +
        "\u025C\x03\x02\x02\x02\u025C\x1F\x03\x02\x02\x02\u025D\u025E\x07<\x02" +
        "\x02\u025E\u025F\x05\xAAV\x02\u025F\u0263\x07_\x02\x02\u0260\u0262\x07" +
        "t\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263" +
        "\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u026D\x03\x02" +
        "\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u026A\x05:\x1E\x02\u0267\u0269" +
        "\x07t\x02\x02\u0268\u0267\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02" +
        "\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026E\x03" +
        "\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026D\u0266\x03\x02\x02\x02\u026E" +
        "\u026F\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02" +
        "\x02\x02\u0270!\x03\x02\x02\x02\u0271\u0272\x07=\x02\x02\u0272\u0273\x05" +
        "\xAAV\x02\u0273\u0277\x07_\x02\x02\u0274\u0276\x07t\x02\x02\u0275\u0274" +
        "\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02" +
        "\u0277\u0278\x03\x02\x02\x02\u0278\u0281\x03\x02\x02\x02\u0279\u0277\x03" +
        "\x02\x02\x02\u027A\u027E\x05:\x1E\x02\u027B\u027D\x07t\x02\x02\u027C\u027B" +
        "\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02" +
        "\u027E\u027F\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03" +
        "\x02\x02\x02\u0281\u027A\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
        "\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284#\x03\x02\x02" +
        "\x02\u0285\u0286\x07>\x02\x02\u0286\u0287\x05\xAAV\x02\u0287\u028B\x07" +
        "_\x02\x02\u0288\u028A\x07t\x02\x02\u0289\u0288\x03\x02\x02\x02\u028A\u028D" +
        "\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02" +
        "\u028C\u0295\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0292\x05" +
        ":\x1E\x02\u028F\u0291\x07t\x02\x02\u0290\u028F\x03\x02\x02\x02\u0291\u0294" +
        "\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02" +
        "\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0295\u028E\x03" +
        "\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297" +
        "\u0298\x03\x02\x02\x02\u0298%\x03\x02\x02\x02\u0299\u029A\x07?\x02\x02" +
        "\u029A\u029B\x05\xAAV\x02\u029B\u029F\x07_\x02\x02\u029C\u029E\x07t\x02" +
        "\x02\u029D\u029C\x03\x02\x02\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u029D" +
        "\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A9\x03\x02\x02\x02" +
        "\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A6\x05:\x1E\x02\u02A3\u02A5\x07" +
        "t\x02\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6" +
        "\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02AA\x03\x02" +
        "\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02A2\x03\x02\x02\x02\u02AA" +
        "\u02AB\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02" +
        "\x02\x02\u02AC\'\x03\x02\x02\x02\u02AD\u02AE\x07@\x02\x02\u02AE\u02AF" +
        "\x05\xAAV\x02\u02AF\u02B3\x07_\x02\x02\u02B0\u02B2\x07t\x02\x02\u02B1" +
        "\u02B0\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B1\x03\x02" +
        "\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02BD\x03\x02\x02\x02\u02B5" +
        "\u02B3\x03\x02\x02\x02\u02B6\u02BA\x05:\x1E\x02\u02B7\u02B9\x07t\x02\x02" +
        "\u02B8\u02B7\x03\x02\x02\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03" +
        "\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC" +
        "\u02BA\x03\x02\x02\x02\u02BD\u02B6\x03\x02\x02\x02\u02BE\u02BF\x03\x02" +
        "\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
        ")\x03\x02\x02\x02\u02C1\u02C2\x07A\x02\x02\u02C2\u02C3\x05\xAAV\x02\u02C3" +
        "\u02C7\x07_\x02\x02\u02C4\u02C6\x07t\x02\x02\u02C5\u02C4\x03\x02\x02\x02" +
        "\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03" +
        "\x02\x02\x02\u02C8\u02D1\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA" +
        "\u02CE\x05:\x1E\x02\u02CB\u02CD\x07t\x02\x02\u02CC\u02CB\x03\x02\x02\x02" +
        "\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03" +
        "\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1" +
        "\u02CA\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
        "\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4+\x03\x02\x02\x02\u02D5\u02D6" +
        "\x07B\x02\x02\u02D6\u02D7\x05\xAAV\x02\u02D7\u02DB\x07_\x02\x02\u02D8" +
        "\u02DA\x07t\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03\x02\x02" +
        "\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E5" +
        "\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02E2\x05:\x1E\x02" +
        "\u02DF\u02E1\x07t\x02\x02\u02E0\u02DF\x03\x02\x02\x02\u02E1\u02E4\x03" +
        "\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3" +
        "\u02E6\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E5\u02DE\x03\x02" +
        "\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7" +
        "\u02E8\x03\x02\x02\x02\u02E8-\x03\x02\x02\x02\u02E9\u02EA\x07C\x02\x02" +
        "\u02EA\u02EB\x05\xAAV\x02\u02EB\u02EF\x07_\x02\x02\u02EC\u02EE\x07t\x02" +
        "\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF\u02ED" +
        "\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F9\x03\x02\x02\x02" +
        "\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F6\x05:\x1E\x02\u02F3\u02F5\x07" +
        "t\x02\x02\u02F4\u02F3\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6" +
        "\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02FA\x03\x02" +
        "\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F9\u02F2\x03\x02\x02\x02\u02FA" +
        "\u02FB\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02" +
        "\x02\x02\u02FC/\x03\x02\x02\x02\u02FD\u02FE\x07D\x02\x02\u02FE\u02FF\x05" +
        "\xAAV\x02\u02FF\u0303\x07_\x02\x02\u0300\u0302\x07t\x02\x02\u0301\u0300" +
        "\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02" +
        "\u0303\u0304\x03\x02\x02\x02\u0304\u030D\x03\x02\x02\x02\u0305\u0303\x03" +
        "\x02\x02\x02\u0306\u030A\x05:\x1E\x02\u0307\u0309\x07t\x02\x02\u0308\u0307" +
        "\x03\x02\x02\x02\u0309\u030C\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02" +
        "\u030A\u030B\x03\x02\x02\x02\u030B\u030E\x03\x02\x02\x02\u030C\u030A\x03" +
        "\x02\x02\x02\u030D\u0306\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
        "\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u03101\x03\x02\x02" +
        "\x02\u0311\u0312\x07E\x02\x02\u0312\u0313\x05\xAAV\x02\u0313\u0317\x07" +
        "_\x02\x02\u0314\u0316\x07t\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319" +
        "\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02" +
        "\u0318\u0321\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031E\x05" +
        ":\x1E\x02\u031B\u031D\x07t\x02\x02\u031C\u031B\x03\x02\x02\x02\u031D\u0320" +
        "\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02" +
        "\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u031A\x03" +
        "\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323" +
        "\u0324\x03\x02\x02\x02\u03243\x03\x02\x02\x02\u0325\u0326\x07F\x02\x02" +
        "\u0326\u0327\x05\xAAV\x02\u0327\u032B\x07_\x02\x02\u0328\u032A\x07t\x02" +
        "\x02\u0329\u0328\x03\x02\x02\x02\u032A\u032D\x03\x02\x02\x02\u032B\u0329" +
        "\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0335\x03\x02\x02\x02" +
        "\u032D\u032B\x03\x02\x02\x02\u032E\u0332\x05:\x1E\x02\u032F\u0331\x07" +
        "t\x02\x02\u0330\u032F\x03\x02\x02\x02\u0331\u0334\x03\x02\x02\x02\u0332" +
        "\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0336\x03\x02" +
        "\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u032E\x03\x02\x02\x02\u0336" +
        "\u0337\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02" +
        "\x02\x02\u03385\x03\x02\x02\x02\u0339\u033A\x07G\x02\x02\u033A\u033B\x05" +
        "\xAAV\x02\u033B\u033F\x07_\x02\x02\u033C\u033E\x07t\x02\x02\u033D\u033C" +
        "\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02" +
        "\u033F\u0340\x03\x02\x02\x02\u0340\u0349\x03\x02\x02\x02\u0341\u033F\x03" +
        "\x02\x02\x02\u0342\u0346\x05:\x1E\x02\u0343\u0345\x07t\x02\x02\u0344\u0343" +
        "\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02" +
        "\u0346\u0347\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346\x03" +
        "\x02\x02\x02\u0349\u0342\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
        "\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C7\x03\x02\x02" +
        "\x02\u034D\u034E\x07H\x02\x02\u034E\u034F\x05\xAAV\x02\u034F\u0353\x07" +
        "_\x02\x02\u0350\u0352\x07t\x02\x02\u0351\u0350\x03\x02\x02\x02\u0352\u0355" +
        "\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02" +
        "\u0354\u035D\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356\u035A\x05" +
        ":\x1E\x02\u0357\u0359\x07t\x02\x02\u0358\u0357\x03\x02\x02\x02\u0359\u035C" +
        "\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02" +
        "\u035B\u035E\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D\u0356\x03" +
        "\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02\u035F" +
        "\u0360\x03\x02\x02\x02\u03609\x03\x02\x02\x02\u0361\u0381\x07\xCF\x02" +
        "\x02\u0362\u0381\x05\u011E\x90\x02\u0363\u0381\x05<\x1F\x02\u0364\u0381" +
        "\x05\xFC\x7F\x02\u0365\u0381\x05\u0100\x81\x02\u0366\u0381\x05\xFE\x80" +
        "\x02\u0367\u0381\x05\u0112\x8A\x02\u0368\u0381\x05\u0116\x8C\x02\u0369" +
        "\u0381\x05J&\x02\u036A\u0381\x05\xF2z\x02\u036B\u0381\x05\u0108\x85\x02" +
        "\u036C\u0381\x05\u0104\x83\x02\u036D\u0381\x05\u0106\x84\x02\u036E\u0381" +
        "\x05\u011C\x8F\x02\u036F\u0381\x05\xF8}\x02\u0370\u0381\x05\u010A\x86" +
        "\x02\u0371\u0381\x05\u010C\x87\x02\u0372\u0381\x05\u010E\x88\x02\u0373" +
        "\u0381\x05\u0110\x89\x02\u0374\u0381\x05\xDAn\x02\u0375\u0381\x05\xE4" +
        "s\x02\u0376\u0381\x05\xD6l\x02\u0377\u0381\x05\xCAf\x02\u0378\u0381\x05" +
        "\xCCg\x02\u0379\u0381\x05\xD0i\x02\u037A\u0381\x05\xCEh\x02\u037B\u0381" +
        "\x05\xD2j\x02\u037C\u0381\x05\xF6|\x02\u037D\u0381\x05\u0118\x8D\x02\u037E" +
        "\u0381\x05\xFA~\x02\u037F\u0381\x05\u0128\x95\x02\u0380\u0361\x03\x02" +
        "\x02\x02\u0380\u0362\x03\x02\x02\x02\u0380\u0363\x03\x02\x02\x02\u0380" +
        "\u0364\x03\x02\x02\x02\u0380\u0365\x03\x02\x02\x02\u0380\u0366\x03\x02" +
        "\x02\x02\u0380\u0367\x03\x02\x02\x02\u0380\u0368\x03\x02\x02\x02\u0380" +
        "\u0369\x03\x02\x02\x02\u0380\u036A\x03\x02\x02\x02\u0380\u036B\x03\x02" +
        "\x02\x02\u0380\u036C\x03\x02\x02\x02\u0380\u036D\x03\x02\x02\x02\u0380" +
        "\u036E\x03\x02\x02\x02\u0380\u036F\x03\x02\x02\x02\u0380\u0370\x03\x02" +
        "\x02\x02\u0380\u0371\x03\x02\x02\x02\u0380\u0372\x03\x02\x02\x02\u0380" +
        "\u0373\x03\x02\x02\x02\u0380\u0374\x03\x02\x02\x02\u0380\u0375\x03\x02" +
        "\x02\x02\u0380\u0376\x03\x02\x02\x02\u0380\u0377\x03\x02\x02\x02\u0380" +
        "\u0378\x03\x02\x02\x02\u0380\u0379\x03\x02\x02\x02\u0380\u037A\x03\x02" +
        "\x02\x02\u0380\u037B\x03\x02\x02\x02\u0380\u037C\x03\x02\x02\x02\u0380" +
        "\u037D\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u037F\x03\x02" +
        "\x02\x02\u0381;\x03\x02\x02\x02\u0382\u038A\x05> \x02\u0383\u0389\x05" +
        "> \x02\u0384\u0389\x05\u0104\x83\x02\u0385\u0389\x05\u0106\x84\x02\u0386" +
        "\u0389\x05\xF2z\x02\u0387\u0389\x05\xF8}\x02\u0388\u0383\x03\x02\x02\x02" +
        "\u0388\u0384\x03\x02\x02\x02\u0388\u0385\x03\x02\x02\x02\u0388\u0386\x03" +
        "\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0389\u038C\x03\x02\x02\x02\u038A" +
        "\u0388\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B=\x03\x02\x02" +
        "\x02\u038C\u038A\x03\x02\x02\x02\u038D\u0391\x07U\x02\x02\u038E\u0392" +
        "\x07r\x02\x02\u038F\u0392\x07s\x02\x02\u0390\u0392\x03\x02\x02\x02\u0391" +
        "\u038E\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0391\u0390\x03\x02" +
        "\x02\x02\u0392\u0396\x03\x02\x02\x02\u0393\u0395\x05\u011C\x8F\x02\u0394" +
        "\u0393\x03\x02\x02\x02\u0395\u0398\x03\x02\x02\x02\u0396\u0394\x03\x02" +
        "\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398" +
        "\u0396\x03\x02\x02\x02\u0399\u039A\x05\u0122\x92\x02\u039A?\x03\x02\x02" +
        "\x02\u039B\u039D\x05\xF2z\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D" +
        "\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x07Y\x02\x02" +
        "\u039F\u03A1\x05\u011C\x8F\x02\u03A0\u039F\x03\x02\x02\x02\u03A1\u03A2" +
        "\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02" +
        "\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x07_\x02\x02\u03A5A\x03\x02\x02" +
        "\x02\u03A6\u03A8\x05\xF2z\x02\u03A7\u03A6\x03\x02\x02\x02\u03A7\u03A8" +
        "\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AB\x07Z\x02\x02" +
        "\u03AA\u03AC\x05\u011C\x8F\x02\u03AB\u03AA\x03\x02\x02\x02\u03AC\u03AD" +
        "\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02" +
        "\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B0\x07_\x02\x02\u03B0C\x03\x02\x02" +
        "\x02\u03B1\u03B3\x05\xF2z\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3" +
        "\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x07\\\x02\x02" +
        "\u03B5\u03B7\x05\u011C\x8F\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7\u03B8" +
        "\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02" +
        "\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB\x07_\x02\x02\u03BBE\x03\x02\x02" +
        "\x02\u03BC\u03BD\x07\x17\x02\x02\u03BD\u03BE\x05\xAAV\x02\u03BE\u03BF" +
        "\x07_\x02\x02\u03BF\u03C9\x07t\x02\x02\u03C0\u03C4\x05:\x1E\x02\u03C1" +
        "\u03C3\x07t\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3\u03C6\x03\x02\x02" +
        "\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C8" +
        "\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C7\u03C0\x03\x02\x02\x02" +
        "\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02\u03C9\u03CA\x03" +
        "\x02\x02\x02\u03CA\u03D5\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CC" +
        "\u03CE\x07t\x02\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE\u03D1\x03\x02\x02" +
        "\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D2" +
        "\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D4\x05H%\x02\u03D3" +
        "\u03CF\x03\x02\x02\x02\u03D4\u03D7\x03\x02\x02\x02\u03D5\u03D3\x03\x02" +
        "\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03DB\x03\x02\x02\x02\u03D7" +
        "\u03D5\x03\x02\x02\x02\u03D8\u03DA\x07t\x02\x02\u03D9\u03D8\x03\x02\x02" +
        "\x02\u03DA\u03DD\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DB\u03DC" +
        "\x03\x02\x02\x02\u03DC\u03EB\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02" +
        "\u03DE\u03E8\x05L\'\x02\u03DF\u03E1\x07t\x02\x02\u03E0\u03DF\x03\x02\x02" +
        "\x02\u03E1\u03E4\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E3" +
        "\x03\x02\x02\x02\u03E3\u03E5\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02" +
        "\u03E5\u03E7\x05L\'\x02\u03E6\u03E2\x03\x02\x02\x02\u03E7\u03EA\x03\x02" +
        "\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9" +
        "\u03EC\x03\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EB\u03DE\x03\x02" +
        "\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03ECG\x03\x02\x02\x02\u03ED\u03F5" +
        "\x07\x7F\x02\x02\u03EE\u03F0\x07t\x02\x02\u03EF\u03EE\x03\x02\x02\x02" +
        "\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x05" +
        "\u011A\x8E\x02\u03F2\u03F4\x07t\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3" +
        "\u03F4\x03\x02\x02\x02\u03F4\u03F6\x03\x02\x02\x02\u03F5\u03EF\x03\x02" +
        "\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7" +
        "\u03F8\x07_\x02\x02\u03F8I\x03\x02\x02\x02\u03F9\u03FA\t\x05\x02\x02\u03FA" +
        "K\x03\x02\x02\x02\u03FB\u03FC\x05:\x1E\x02\u03FCM\x03\x02\x02\x02\u03FD" +
        "\u03FE\x07\x19\x02\x02\u03FE\u03FF\x05\xAAV\x02\u03FF\u0400\x07_\x02\x02" +
        "\u0400\u040A\x07t\x02\x02\u0401\u0405\x05:\x1E\x02\u0402\u0404\x07t\x02" +
        "\x02\u0403\u0402\x03\x02\x02\x02\u0404\u0407\x03\x02\x02\x02\u0405\u0403" +
        "\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02" +
        "\u0407\u0405\x03\x02\x02\x02\u0408\u0401\x03\x02\x02\x02\u0409\u040C\x03" +
        "\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B" +
        "\u0410\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040D\u040F\x05P)\x02" +
        "\u040E\u040D\x03\x02\x02\x02\u040F\u0412\x03\x02\x02\x02\u0410\u040E\x03" +
        "\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0416\x03\x02\x02\x02\u0412" +
        "\u0410\x03\x02\x02\x02\u0413\u0415\x07t\x02\x02\u0414\u0413\x03\x02\x02" +
        "\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417" +
        "\x03\x02\x02\x02\u0417\u0426\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02" +
        "\u0419\u0423\x05L\'\x02\u041A\u041C\x07t\x02\x02\u041B\u041A\x03\x02\x02" +
        "\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041E" +
        "\x03\x02\x02\x02\u041E\u0420\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02" +
        "\u0420\u0422\x05L\'\x02\u0421\u041D\x03\x02\x02\x02\u0422\u0425\x03\x02" +
        "\x02\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424" +
        "\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0426\u0419\x03\x02" +
        "\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427O\x03\x02\x02\x02\u0428\u042C" +
        "\x07Z\x02\x02\u0429\u042B\v\x02\x02\x02\u042A\u0429\x03\x02\x02\x02\u042B" +
        "\u042E\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042C\u042A\x03\x02" +
        "\x02\x02\u042D\u042F\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042F" +
        "\u0430\x07_\x02\x02\u0430\u043B\x07t\x02\x02\u0431\u0435\x07Y\x02\x02" +
        "\u0432\u0434\v\x02\x02\x02\u0433\u0432\x03\x02\x02\x02\u0434\u0437\x03" +
        "\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0436" +
        "\u0438\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0438\u0439\x07_\x02" +
        "\x02\u0439\u043B\x07t\x02\x02\u043A\u0428\x03\x02\x02\x02\u043A\u0431" +
        "\x03\x02\x02\x02\u043BQ\x03\x02\x02\x02\u043C\u043D\x07\x1A\x02\x02\u043D" +
        "\u043E\x05\xAAV\x02\u043E\u043F\x07_\x02\x02\u043F\u044C\x07t\x02\x02" +
        "\u0440\u0443\x05:\x1E\x02\u0441\u0443\x05T+\x02\u0442\u0440\x03\x02\x02" +
        "\x02\u0442\u0441\x03\x02\x02\x02\u0443\u0447\x03\x02\x02\x02\u0444\u0446" +
        "\x07t\x02\x02\u0445\u0444\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02" +
        "\u0447\u0445\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u044B\x03" +
        "\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u044A\u0442\x03\x02\x02\x02\u044B" +
        "\u044E\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044C\u044D\x03\x02" +
        "\x02\x02\u044D\u0452\x03\x02\x02\x02\u044E\u044C\x03\x02\x02\x02\u044F" +
        "\u0451\x07t\x02\x02\u0450\u044F\x03\x02\x02\x02\u0451\u0454\x03\x02\x02" +
        "\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0462" +
        "\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0455\u045F\x05L\'\x02\u0456" +
        "\u0458\x07t\x02\x02\u0457\u0456\x03\x02\x02\x02\u0458\u045B\x03\x02\x02" +
        "\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045C" +
        "\x03\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045C\u045E\x05L\'\x02\u045D" +
        "\u0459\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02\u045F\u045D\x03\x02" +
        "\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461" +
        "\u045F\x03\x02\x02\x02\u0462\u0455\x03\x02\x02\x02\u0462\u0463\x03\x02" +
        "\x02\x02\u0463S\x03\x02\x02\x02\u0464\u0465\x07[\x02\x02\u0465\u0466\x05" +
        "\u011C\x8F\x02\u0466\u0468\x07_\x02\x02\u0467\u0469\x05V,\x02\u0468\u0467" +
        "\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046F\x03\x02\x02\x02" +
        "\u046A\u046E\x05\u0106\x84\x02\u046B\u046E\x05\xF2z\x02\u046C\u046E\x05" +
        "\u0104\x83\x02\u046D\u046A\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02" +
        "\u046D\u046C\x03\x02\x02\x02\u046E\u0471\x03\x02\x02\x02\u046F\u046D\x03" +
        "\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470U\x03\x02\x02\x02\u0471" +
        "\u046F\x03\x02\x02\x02\u0472\u0476\x07\x88\x02\x02\u0473\u0475\x07\x04" +
        "\x02\x02\u0474\u0473\x03\x02\x02\x02\u0475\u0478\x03\x02\x02\x02\u0476" +
        "\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0479\x03\x02" +
        "\x02\x02\u0478\u0476\x03\x02\x02\x02\u0479\u047D\x07s\x02\x02\u047A\u047C" +
        "\x07\x04\x02\x02\u047B\u047A\x03\x02\x02\x02\u047C\u047F\x03\x02\x02\x02" +
        "\u047D\u047B\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E\u0480\x03" +
        "\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0481\x07_\x02\x02\u0481" +
        "W\x03\x02\x02\x02\u0482\u0484\x07\x1B\x02\x02\u0483\u0485\t\x06\x02\x02" +
        "\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03" +
        "\x02\x02\x02\u0486\u0487\x07_\x02\x02\u0487\u0491\x07t\x02\x02\u0488\u048C" +
        "\x05:\x1E\x02\u0489\u048B\x07t\x02\x02\u048A\u0489\x03\x02\x02\x02\u048B" +
        "\u048E\x03\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02" +
        "\x02\x02\u048D\u0490\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048F" +
        "\u0488\x03\x02\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02" +
        "\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0497\x03\x02\x02\x02\u0493" +
        "\u0491\x03\x02\x02\x02\u0494\u0496\x07t\x02\x02\u0495\u0494\x03\x02\x02" +
        "\x02\u0496\u0499\x03\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0497\u0498" +
        "\x03\x02\x02\x02\u0498\u04A7\x03\x02\x02\x02\u0499\u0497\x03\x02\x02\x02" +
        "\u049A\u04A4\x05L\'\x02\u049B\u049D\x07t\x02\x02\u049C\u049B\x03\x02\x02" +
        "\x02\u049D\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E\u049F" +
        "\x03\x02\x02\x02\u049F\u04A1\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02" +
        "\u04A1\u04A3\x05L\'\x02\u04A2\u049E\x03\x02\x02\x02\u04A3\u04A6\x03\x02" +
        "\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5" +
        "\u04A8\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A7\u049A\x03\x02" +
        "\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8Y\x03\x02\x02\x02\u04A9\u04AA" +
        "\x07\x12\x02\x02\u04AA\u04AB\x05\xAAV\x02\u04AB\u04AC\x07_\x02\x02\u04AC" +
        "\u04B6\x07t\x02\x02\u04AD\u04B1\x05:\x1E\x02\u04AE\u04B0\x07t\x02\x02" +
        "\u04AF\u04AE\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03" +
        "\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B5\x03\x02\x02\x02\u04B3" +
        "\u04B1\x03\x02\x02\x02\u04B4\u04AD\x03\x02\x02\x02\u04B5\u04B8\x03\x02" +
        "\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7" +
        "\u04BC\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B9\u04BB\x07t\x02" +
        "\x02\u04BA\u04B9\x03\x02\x02\x02\u04BB\u04BE\x03\x02\x02\x02\u04BC\u04BA" +
        "\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04CC\x03\x02\x02\x02" +
        "\u04BE\u04BC\x03\x02\x02\x02\u04BF\u04C9\x05L\'\x02\u04C0\u04C2\x07t\x02" +
        "\x02\u04C1\u04C0\x03\x02\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C1" +
        "\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C6\x03\x02\x02\x02" +
        "\u04C5\u04C3\x03\x02\x02\x02\u04C6\u04C8\x05L\'\x02\u04C7\u04C3\x03\x02" +
        "\x02\x02\u04C8\u04CB\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04C9" +
        "\u04CA\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9\x03\x02" +
        "\x02\x02\u04CC\u04BF\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD" +
        "[\x03\x02\x02\x02\u04CE\u04CF\x07\x1C\x02\x02\u04CF\u04D0\x05\xAAV\x02" +
        "\u04D0\u04D1\x07_\x02\x02\u04D1\u04DB\x07t\x02\x02\u04D2\u04D6\x05:\x1E" +
        "\x02\u04D3\u04D5\x07t\x02\x02\u04D4\u04D3\x03\x02\x02\x02\u04D5\u04D8" +
        "\x03\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02" +
        "\u04D7\u04DA\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D9\u04D2\x03" +
        "\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB" +
        "\u04DC\x03\x02\x02\x02\u04DC\u04E1\x03\x02\x02\x02\u04DD\u04DB\x03\x02" +
        "\x02\x02\u04DE\u04E0\x07";
    bitmarkParser._serializedATNSegment3 = "t\x02\x02\u04DF\u04DE\x03\x02\x02\x02\u04E0\u04E3\x03\x02\x02\x02\u04E1" +
        "\u04DF\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u04F1\x03\x02" +
        "\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E4\u04EE\x05L\'\x02\u04E5\u04E7" +
        "\x07t\x02\x02\u04E6\u04E5\x03\x02\x02\x02\u04E7\u04EA\x03\x02\x02\x02" +
        "\u04E8\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EB\x03" +
        "\x02\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EB\u04ED\x05L\'\x02\u04EC" +
        "\u04E8\x03\x02\x02\x02\u04ED\u04F0\x03\x02\x02\x02\u04EE\u04EC\x03\x02" +
        "\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F2\x03\x02\x02\x02\u04F0" +
        "\u04EE\x03\x02\x02\x02\u04F1\u04E4\x03\x02\x02\x02\u04F1\u04F2\x03\x02" +
        "\x02\x02\u04F2]\x03\x02\x02\x02\u04F3\u04F4\x07\x1D\x02\x02\u04F4\u04F5" +
        "\x05\xAAV\x02\u04F5\u04F6\x07_\x02\x02\u04F6\u0500\x07t\x02\x02\u04F7" +
        "\u04FB\x05:\x1E\x02\u04F8\u04FA\x07t\x02\x02\u04F9\u04F8\x03\x02\x02\x02" +
        "\u04FA\u04FD\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03" +
        "\x02\x02\x02\u04FC\u04FF\x03\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FE" +
        "\u04F7\x03\x02\x02\x02\u04FF\u0502\x03\x02\x02\x02\u0500\u04FE\x03\x02" +
        "\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0506\x03\x02\x02\x02\u0502" +
        "\u0500\x03\x02\x02\x02\u0503\u0505\x07t\x02\x02\u0504\u0503\x03\x02\x02" +
        "\x02\u0505\u0508\x03\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507" +
        "\x03\x02\x02\x02\u0507\u0516\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02" +
        "\u0509\u0513\x05L\'\x02\u050A\u050C\x07t\x02\x02\u050B\u050A\x03\x02\x02" +
        "\x02\u050C\u050F\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050D\u050E" +
        "\x03\x02\x02\x02\u050E\u0510\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02" +
        "\u0510\u0512\x05L\'\x02\u0511\u050D\x03\x02\x02\x02\u0512\u0515\x03\x02" +
        "\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514" +
        "\u0517\x03\x02\x02\x02\u0515\u0513\x03\x02\x02\x02\u0516\u0509\x03\x02" +
        "\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517_\x03\x02\x02\x02\u0518\u0519" +
        "\x07\x1E\x02\x02\u0519\u051A\x05\xAAV\x02\u051A\u051E\x07_\x02\x02\u051B" +
        "\u051D\x07t\x02\x02\u051C\u051B\x03\x02\x02\x02\u051D\u0520\x03\x02\x02" +
        "\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\u052A" +
        "\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0521\u0525\x05:\x1E\x02" +
        "\u0522\u0524\x07t\x02\x02\u0523\u0522\x03\x02\x02\x02\u0524\u0527\x03" +
        "\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526" +
        "\u0529\x03\x02\x02\x02\u0527\u0525\x03\x02\x02\x02\u0528\u0521\x03\x02" +
        "\x02\x02\u0529\u052C\x03\x02\x02\x02\u052A\u0528\x03\x02\x02\x02\u052A" +
        "\u052B\x03\x02\x02\x02\u052B\u052E\x03\x02\x02\x02\u052C\u052A\x03\x02" +
        "\x02\x02\u052D\u052F\x05\u011A\x8E\x02\u052E\u052D\x03\x02\x02\x02\u052E" +
        "\u052F\x03\x02\x02\x02\u052F\u0533\x03\x02\x02\x02\u0530\u0532\x07t\x02" +
        "\x02\u0531\u0530\x03\x02\x02\x02\u0532\u0535\x03\x02\x02\x02\u0533\u0531" +
        "\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0543\x03\x02\x02\x02" +
        "\u0535\u0533\x03\x02\x02\x02\u0536\u0540\x05L\'\x02\u0537\u0539\x07t\x02" +
        "\x02\u0538\u0537\x03\x02\x02\x02\u0539\u053C\x03\x02\x02\x02\u053A\u0538" +
        "\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053D\x03\x02\x02\x02" +
        "\u053C\u053A\x03\x02\x02\x02\u053D\u053F\x05L\'\x02\u053E\u053A\x03\x02" +
        "\x02\x02\u053F\u0542\x03\x02\x02\x02\u0540\u053E\x03\x02\x02\x02\u0540" +
        "\u0541\x03\x02\x02\x02\u0541\u0544\x03\x02\x02\x02\u0542\u0540\x03\x02" +
        "\x02\x02\u0543\u0536\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544" +
        "a\x03\x02\x02\x02\u0545\u0546\x07\x1F\x02\x02\u0546\u0547\x05\xAAV\x02" +
        "\u0547\u0549\x07_\x02\x02\u0548\u054A\x07t\x02\x02\u0549\u0548\x03\x02" +
        "\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\u0549\x03\x02\x02\x02\u054B" +
        "\u054C\x03\x02\x02\x02\u054C\u0556\x03\x02\x02\x02\u054D\u0551\x05:\x1E" +
        "\x02\u054E\u0550\x07t\x02\x02\u054F\u054E\x03\x02\x02\x02\u0550\u0553" +
        "\x03\x02\x02\x02\u0551\u054F\x03\x02\x02\x02\u0551\u0552\x03\x02\x02\x02" +
        "\u0552\u0555\x03\x02\x02\x02\u0553\u0551\x03\x02\x02\x02\u0554\u054D\x03" +
        "\x02\x02\x02\u0555\u0558\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0556" +
        "\u0557\x03\x02\x02\x02\u0557\u055A\x03\x02\x02\x02\u0558\u0556\x03\x02" +
        "\x02\x02\u0559\u055B\x05\u011A\x8E\x02\u055A\u0559\x03\x02\x02\x02\u055A" +
        "\u055B\x03\x02\x02\x02\u055B\u055F\x03\x02\x02\x02\u055C\u055E\x07t\x02" +
        "\x02\u055D\u055C\x03\x02\x02\x02\u055E\u0561\x03\x02\x02\x02\u055F\u055D" +
        "\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\u056F\x03\x02\x02\x02" +
        "\u0561\u055F\x03\x02\x02\x02\u0562\u056C\x05L\'\x02\u0563\u0565\x07t\x02" +
        "\x02\u0564\u0563\x03\x02\x02\x02\u0565\u0568\x03\x02\x02\x02\u0566\u0564" +
        "\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0569\x03\x02\x02\x02" +
        "\u0568\u0566\x03\x02\x02\x02\u0569\u056B\x05L\'\x02\u056A\u0566\x03\x02" +
        "\x02\x02\u056B\u056E\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056C" +
        "\u056D\x03\x02\x02\x02\u056D\u0570\x03\x02\x02\x02\u056E\u056C\x03\x02" +
        "\x02\x02\u056F\u0562\x03\x02\x02\x02\u056F\u0570\x03\x02\x02\x02\u0570" +
        "c\x03\x02\x02\x02\u0571\u0572\x07\x15\x02\x02\u0572\u0573\x05\xAAV\x02" +
        "\u0573\u0577\x07_\x02\x02\u0574\u0576\x07t\x02\x02\u0575\u0574\x03\x02" +
        "\x02\x02\u0576\u0579\x03\x02\x02\x02\u0577\u0575\x03\x02\x02\x02\u0577" +
        "\u0578\x03\x02\x02\x02\u0578\u0581\x03\x02\x02\x02\u0579\u0577\x03\x02" +
        "\x02\x02\u057A\u057E\x05:\x1E\x02\u057B\u057D\x07t\x02\x02\u057C\u057B" +
        "\x03\x02\x02\x02\u057D\u0580\x03\x02\x02\x02\u057E\u057C\x03\x02\x02\x02" +
        "\u057E\u057F\x03\x02\x02\x02\u057F\u0582\x03\x02\x02\x02\u0580\u057E\x03" +
        "\x02\x02\x02\u0581\u057A\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02\u0583" +
        "\u0581\x03\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584e\x03\x02\x02" +
        "\x02\u0585\u0586\x07\x0F\x02\x02\u0586\u0587\x05\xAAV\x02\u0587\u058B" +
        "\x07_\x02\x02\u0588\u058A\x07t\x02\x02\u0589\u0588\x03\x02\x02\x02\u058A" +
        "\u058D\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02\u058B\u058C\x03\x02" +
        "\x02\x02\u058C\u0595\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058E" +
        "\u0592\x05:\x1E\x02\u058F\u0591\x07t\x02\x02\u0590\u058F\x03\x02\x02\x02" +
        "\u0591\u0594\x03\x02\x02\x02\u0592\u0590\x03\x02\x02\x02\u0592\u0593\x03" +
        "\x02\x02\x02\u0593\u0596\x03\x02\x02\x02\u0594\u0592\x03\x02\x02\x02\u0595" +
        "\u058E\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0595\x03\x02" +
        "\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598g\x03\x02\x02\x02\u0599\u059A" +
        "\x07\x10\x02\x02\u059A\u059B\x05\xAAV\x02\u059B\u059F\x07_\x02\x02\u059C" +
        "\u059E\x07t\x02\x02\u059D\u059C\x03\x02\x02\x02\u059E\u05A1\x03\x02\x02" +
        "\x02\u059F\u059D\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A9" +
        "\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A2\u05A6\x05:\x1E\x02" +
        "\u05A3\u05A5\x07t\x02\x02\u05A4\u05A3\x03\x02\x02\x02\u05A5\u05A8\x03" +
        "\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7" +
        "\u05AA\x03\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9\u05A2\x03\x02" +
        "\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05A9\x03\x02\x02\x02\u05AB" +
        "\u05AC\x03\x02\x02\x02\u05ACi\x03\x02\x02\x02\u05AD\u05AE\x07\x11\x02" +
        "\x02\u05AE\u05AF\x05\xAAV\x02\u05AF\u05B3\x07_\x02\x02\u05B0\u05B2\x07" +
        "t\x02\x02\u05B1\u05B0\x03\x02\x02\x02\u05B2\u05B5\x03\x02\x02\x02\u05B3" +
        "\u05B1\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05BD\x03\x02" +
        "\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B6\u05BA\x05:\x1E\x02\u05B7\u05B9" +
        "\x07t\x02\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9\u05BC\x03\x02\x02\x02" +
        "\u05BA\u05B8\x03\x02\x02\x02\u05BA\u05BB\x03\x02\x02\x02\u05BB\u05BE\x03" +
        "\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BD\u05B6\x03\x02\x02\x02\u05BE" +
        "\u05BF\x03\x02\x02\x02\u05BF\u05BD\x03\x02\x02\x02\u05BF\u05C0\x03\x02" +
        "\x02\x02\u05C0k\x03\x02\x02\x02\u05C1\u05C2\x076\x02\x02\u05C2\u05C3\x05" +
        "\xAAV\x02\u05C3\u05C7\x07_\x02\x02\u05C4\u05C6\x07t\x02\x02\u05C5\u05C4" +
        "\x03\x02\x02\x02\u05C6\u05C9\x03\x02\x02\x02\u05C7\u05C5\x03\x02\x02\x02" +
        "\u05C7\u05C8\x03\x02\x02\x02\u05C8\u05D1\x03\x02\x02\x02\u05C9\u05C7\x03" +
        "\x02\x02\x02\u05CA\u05CE\x05:\x1E\x02\u05CB\u05CD\x07t\x02\x02\u05CC\u05CB" +
        "\x03\x02\x02\x02\u05CD\u05D0\x03\x02\x02\x02\u05CE\u05CC\x03\x02\x02\x02" +
        "\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0\u05CE\x03" +
        "\x02\x02\x02\u05D1\u05CA\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3" +
        "\u05D1\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4m\x03\x02\x02" +
        "\x02\u05D5\u05D6\x077\x02\x02\u05D6\u05D7\x05\xAAV\x02\u05D7\u05DB\x07" +
        "_\x02\x02\u05D8\u05DA\x07t\x02\x02\u05D9\u05D8\x03\x02\x02\x02\u05DA\u05DD" +
        "\x03\x02\x02\x02\u05DB\u05D9\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02" +
        "\u05DC\u05E5\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DE\u05E2\x05" +
        ":\x1E\x02\u05DF\u05E1\x07t\x02\x02\u05E0\u05DF\x03\x02\x02\x02\u05E1\u05E4" +
        "\x03\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02" +
        "\u05E3\u05E6\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E5\u05DE\x03" +
        "\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05E5\x03\x02\x02\x02\u05E7" +
        "\u05E8\x03\x02\x02\x02\u05E8o\x03\x02\x02\x02\u05E9\u05EA\x078\x02\x02" +
        "\u05EA\u05EB\x05\xAAV\x02\u05EB\u05EF\x07_\x02\x02\u05EC\u05EE\x07t\x02" +
        "\x02\u05ED\u05EC\x03\x02\x02\x02\u05EE\u05F1\x03\x02\x02\x02\u05EF\u05ED" +
        "\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F9\x03\x02\x02\x02" +
        "\u05F1\u05EF\x03\x02\x02\x02\u05F2\u05F6\x05:\x1E\x02\u05F3\u05F5\x07" +
        "t\x02\x02\u05F4\u05F3\x03\x02\x02\x02\u05F5\u05F8\x03\x02\x02\x02\u05F6" +
        "\u05F4\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05FA\x03\x02" +
        "\x02\x02\u05F8\u05F6\x03\x02\x02\x02\u05F9\u05F2\x03\x02\x02\x02\u05FA" +
        "\u05FB\x03\x02\x02\x02\u05FB\u05F9\x03\x02\x02\x02\u05FB\u05FC\x03\x02" +
        "\x02\x02\u05FCq\x03\x02\x02\x02\u05FD\u05FE\x07\x16\x02\x02\u05FE\u05FF" +
        "\x05\xAAV\x02\u05FF\u0603\x07_\x02\x02\u0600\u0602\x07t\x02\x02\u0601" +
        "\u0600\x03\x02\x02\x02\u0602\u0605\x03\x02\x02\x02\u0603\u0601\x03\x02" +
        "\x02\x02\u0603\u0604\x03\x02\x02\x02\u0604\u060D\x03\x02\x02\x02\u0605" +
        "\u0603\x03\x02\x02\x02\u0606\u060A\x05:\x1E\x02\u0607\u0609\x07t\x02\x02" +
        "\u0608\u0607\x03\x02\x02\x02\u0609\u060C\x03\x02\x02\x02\u060A\u0608\x03" +
        "\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u060E\x03\x02\x02\x02\u060C" +
        "\u060A\x03\x02\x02\x02\u060D\u0606\x03\x02\x02\x02\u060E\u060F\x03\x02" +
        "\x02\x02\u060F\u060D\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610" +
        "s\x03\x02\x02\x02\u0611\u0612\x07)\x02\x02\u0612\u0613\x05\xAAV\x02\u0613" +
        "\u0617\x07_\x02\x02\u0614\u0616\x07t\x02\x02\u0615\u0614\x03\x02\x02\x02" +
        "\u0616\u0619\x03\x02\x02\x02\u0617\u0615\x03\x02\x02\x02\u0617\u0618\x03" +
        "\x02\x02\x02\u0618\u0621\x03\x02\x02\x02\u0619\u0617\x03\x02\x02\x02\u061A" +
        "\u061E\x05:\x1E\x02\u061B\u061D\x07t\x02\x02\u061C\u061B\x03\x02\x02\x02" +
        "\u061D\u0620\x03\x02\x02\x02\u061E\u061C\x03\x02\x02\x02\u061E\u061F\x03" +
        "\x02\x02\x02\u061F\u0622\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02\u0621" +
        "\u061A\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0621\x03\x02" +
        "\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624u\x03\x02\x02\x02\u0625\u0626" +
        "\x07*\x02\x02\u0626\u0627\x05\xAAV\x02\u0627\u062B\x07_\x02\x02\u0628" +
        "\u062A\x07t\x02\x02\u0629\u0628\x03\x02\x02\x02\u062A\u062D\x03\x02\x02" +
        "\x02\u062B\u0629\x03\x02\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u0635" +
        "\x03\x02\x02\x02\u062D\u062B\x03\x02\x02\x02\u062E\u0632\x05:\x1E\x02" +
        "\u062F\u0631\x07t\x02\x02\u0630\u062F\x03\x02\x02\x02\u0631\u0634\x03" +
        "\x02\x02\x02\u0632\u0630\x03\x02\x02\x02\u0632\u0633\x03\x02\x02\x02\u0633" +
        "\u0636\x03\x02\x02\x02\u0634\u0632\x03\x02\x02\x02\u0635\u062E\x03\x02" +
        "\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637\u0635\x03\x02\x02\x02\u0637" +
        "\u0638\x03\x02\x02\x02\u0638w\x03\x02\x02\x02\u0639\u063A\x07+\x02\x02" +
        "\u063A\u063B\x05\xAAV\x02\u063B\u063F\x07_\x02\x02\u063C\u063E\x07t\x02" +
        "\x02\u063D\u063C\x03\x02\x02\x02\u063E\u0641\x03\x02\x02\x02\u063F\u063D" +
        "\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u0649\x03\x02\x02\x02" +
        "\u0641\u063F\x03\x02\x02\x02\u0642\u0646\x05:\x1E\x02\u0643\u0645\x07" +
        "t\x02\x02\u0644\u0643\x03\x02\x02\x02\u0645\u0648\x03\x02\x02\x02\u0646" +
        "\u0644\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647\u064A\x03\x02" +
        "\x02\x02\u0648\u0646\x03\x02\x02\x02\u0649\u0642\x03\x02\x02\x02\u064A" +
        "\u064B\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02\u064B\u064C\x03\x02" +
        "\x02\x02\u064Cy\x03\x02\x02\x02\u064D\u064E\x07,\x02\x02\u064E\u064F\x05" +
        "\xAAV\x02\u064F\u0653\x07_\x02\x02\u0650\u0652\x07t\x02\x02\u0651\u0650" +
        "\x03\x02\x02\x02\u0652\u0655\x03\x02\x02\x02\u0653\u0651\x03\x02\x02\x02" +
        "\u0653\u0654\x03\x02\x02\x02\u0654\u065D\x03\x02\x02\x02\u0655\u0653\x03" +
        "\x02\x02\x02\u0656\u065A\x05:\x1E\x02\u0657\u0659\x07t\x02\x02\u0658\u0657" +
        "\x03\x02\x02\x02\u0659\u065C\x03\x02\x02\x02\u065A\u0658\x03\x02\x02\x02" +
        "\u065A\u065B\x03\x02\x02\x02\u065B\u065E\x03\x02\x02\x02\u065C\u065A\x03" +
        "\x02\x02\x02\u065D\u0656\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F" +
        "\u065D\x03\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660{\x03\x02\x02" +
        "\x02\u0661\u0662\x07.\x02\x02\u0662\u0663\x05\xAAV\x02\u0663\u0667\x07" +
        "_\x02\x02\u0664\u0666\x07t\x02\x02\u0665\u0664\x03\x02\x02\x02\u0666\u0669" +
        "\x03\x02\x02\x02\u0667\u0665\x03\x02\x02\x02\u0667\u0668\x03\x02\x02\x02" +
        "\u0668\u0671\x03\x02\x02\x02\u0669\u0667\x03\x02\x02\x02\u066A\u066E\x05" +
        ":\x1E\x02\u066B\u066D\x07t\x02\x02\u066C\u066B\x03\x02\x02\x02\u066D\u0670" +
        "\x03\x02\x02\x02\u066E\u066C\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02" +
        "\u066F\u0672\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0671\u066A\x03" +
        "\x02\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673\u0671\x03\x02\x02\x02\u0673" +
        "\u0674\x03\x02\x02\x02\u0674}\x03\x02\x02\x02\u0675\u0676\x07/\x02\x02" +
        "\u0676\u0677\x05\xAAV\x02\u0677\u067B\x07_\x02\x02\u0678\u067A\x07t\x02" +
        "\x02\u0679\u0678\x03\x02\x02\x02\u067A\u067D\x03\x02\x02\x02\u067B\u0679" +
        "\x03\x02\x02\x02\u067B\u067C\x03\x02\x02\x02\u067C\u0685\x03\x02\x02\x02" +
        "\u067D\u067B\x03\x02\x02\x02\u067E\u0682\x05:\x1E\x02\u067F\u0681\x07" +
        "t\x02\x02\u0680\u067F\x03\x02\x02\x02\u0681\u0684\x03\x02\x02\x02\u0682" +
        "\u0680\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u0686\x03\x02" +
        "\x02\x02\u0684\u0682\x03\x02\x02\x02\u0685\u067E\x03\x02\x02\x02\u0686" +
        "\u0687\x03\x02\x02\x02\u0687\u0685\x03\x02\x02\x02\u0687\u0688\x03\x02" +
        "\x02\x02\u0688\x7F\x03\x02\x02\x02\u0689\u068A\x070\x02\x02\u068A\u068B" +
        "\x05\xAAV\x02\u068B\u068F\x07_\x02\x02\u068C\u068E\x07t\x02\x02\u068D" +
        "\u068C\x03\x02\x02\x02\u068E\u0691\x03\x02\x02\x02\u068F\u068D\x03\x02" +
        "\x02\x02\u068F\u0690\x03\x02\x02\x02\u0690\u0699\x03\x02\x02\x02\u0691" +
        "\u068F\x03\x02\x02\x02\u0692\u0696\x05:\x1E\x02\u0693\u0695\x07t\x02\x02" +
        "\u0694\u0693\x03\x02\x02\x02\u0695\u0698\x03\x02\x02\x02\u0696\u0694\x03" +
        "\x02\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u069A\x03\x02\x02\x02\u0698" +
        "\u0696\x03\x02\x02\x02\u0699\u0692\x03\x02\x02\x02\u069A\u069B\x03\x02" +
        "\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C" +
        "\x81\x03\x02\x02\x02\u069D\u069E\x071\x02\x02\u069E\u069F\x05\xAAV\x02" +
        "\u069F\u06A3\x07_\x02\x02\u06A0\u06A2\x07t\x02\x02\u06A1\u06A0\x03\x02" +
        "\x02\x02\u06A2\u06A5\x03\x02\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A3" +
        "\u06A4\x03\x02\x02\x02\u06A4\u06AD\x03\x02\x02\x02\u06A5\u06A3\x03\x02" +
        "\x02\x02\u06A6\u06AA\x05:\x1E\x02\u06A7\u06A9\x07t\x02\x02\u06A8\u06A7" +
        "\x03\x02\x02\x02\u06A9\u06AC\x03\x02\x02\x02\u06AA\u06A8\x03\x02\x02\x02" +
        "\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AE\x03\x02\x02\x02\u06AC\u06AA\x03" +
        "\x02\x02\x02\u06AD\u06A6\x03\x02\x02\x02\u06AE\u06AF\x03\x02\x02\x02\u06AF" +
        "\u06AD\x03\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\x83\x03\x02\x02" +
        "\x02\u06B1\u06B2\x072\x02\x02\u06B2\u06B3\x05\xAAV\x02\u06B3\u06B7\x07" +
        "_\x02\x02\u06B4\u06B6\x07t\x02\x02\u06B5\u06B4\x03\x02\x02\x02\u06B6\u06B9" +
        "\x03\x02\x02\x02\u06B7\u06B5\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02" +
        "\u06B8\u06C1\x03\x02\x02\x02\u06B9\u06B7\x03\x02\x02\x02\u06BA\u06BE\x05" +
        ":\x1E\x02\u06BB\u06BD\x07t\x02\x02\u06BC\u06BB\x03\x02\x02\x02\u06BD\u06C0" +
        "\x03\x02\x02\x02\u06BE\u06BC\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02" +
        "\u06BF\u06C2\x03\x02\x02\x02\u06C0\u06BE\x03\x02\x02\x02\u06C1\u06BA\x03" +
        "\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C1\x03\x02\x02\x02\u06C3" +
        "\u06C4\x03\x02\x02\x02\u06C4\x85\x03\x02\x02\x02\u06C5\u06C6\x073\x02" +
        "\x02\u06C6\u06C7\x05\xAAV\x02\u06C7\u06CB\x07_\x02\x02\u06C8\u06CA\x07" +
        "t\x02\x02\u06C9\u06C8\x03\x02\x02\x02\u06CA\u06CD\x03\x02\x02\x02\u06CB" +
        "\u06C9\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02\u06CC\u06D5\x03\x02" +
        "\x02\x02\u06CD\u06CB\x03\x02\x02\x02\u06CE\u06D2\x05:\x1E\x02\u06CF\u06D1" +
        "\x07t\x02\x02\u06D0\u06CF\x03\x02\x02\x02\u06D1\u06D4\x03\x02\x02\x02" +
        "\u06D2\u06D0\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02\u06D3\u06D6\x03" +
        "\x02\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D5\u06CE\x03\x02\x02\x02\u06D6" +
        "\u06D7\x03\x02\x02\x02\u06D7\u06D5\x03\x02\x02\x02\u06D7\u06D8\x03\x02" +
        "\x02\x02\u06D8\x87\x03\x02\x02\x02\u06D9\u06DA\x074\x02\x02\u06DA\u06DB" +
        "\x05\xAAV\x02\u06DB\u06DF\x07_\x02\x02\u06DC\u06DE\x07t\x02\x02\u06DD" +
        "\u06DC\x03\x02\x02\x02\u06DE\u06E1\x03\x02\x02\x02\u06DF\u06DD\x03\x02" +
        "\x02\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E9\x03\x02\x02\x02\u06E1" +
        "\u06DF\x03\x02\x02\x02\u06E2\u06E6\x05:\x1E\x02\u06E3\u06E5\x07t\x02\x02" +
        "\u06E4\u06E3\x03\x02\x02\x02\u06E5\u06E8\x03\x02\x02\x02\u06E6\u06E4\x03" +
        "\x02\x02\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7\u06EA\x03\x02\x02\x02\u06E8" +
        "\u06E6\x03\x02\x02\x02\u06E9\u06E2\x03\x02\x02\x02\u06EA\u06EB\x03\x02" +
        "\x02\x02\u06EB\u06E9\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC" +
        "\x89\x03\x02\x02\x02\u06ED\u06EE\x07-\x02\x02\u06EE\u06EF\x05\xAAV\x02" +
        "\u06EF\u06F3\x07_\x02\x02\u06F0\u06F2\x07t\x02\x02\u06F1\u06F0\x03\x02" +
        "\x02\x02\u06F2\u06F5\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F3" +
        "\u06F4\x03\x02\x02\x02\u06F4\u06FD\x03\x02\x02\x02\u06F5\u06F3\x03\x02" +
        "\x02\x02\u06F6\u06FA\x05:\x1E\x02\u06F7\u06F9\x07t\x02\x02\u06F8\u06F7" +
        "\x03\x02\x02\x02\u06F9\u06FC\x03\x02\x02\x02\u06FA\u06F8\x03\x02\x02\x02" +
        "\u06FA\u06FB\x03\x02\x02\x02\u06FB\u06FE\x03\x02\x02\x02\u06FC\u06FA\x03" +
        "\x02\x02\x02\u06FD\u06F6\x03\x02\x02\x02\u06FE\u06FF\x03\x02\x02\x02\u06FF" +
        "\u06FD\x03\x02\x02\x02\u06FF\u0700\x03\x02\x02\x02\u0700\x8B\x03\x02\x02" +
        "\x02\u0701\u0702\x075\x02\x02\u0702\u0703\x05\xAAV\x02\u0703\u0707\x07" +
        "_\x02\x02\u0704\u0706\x07t\x02\x02\u0705\u0704\x03\x02\x02\x02\u0706\u0709" +
        "\x03\x02\x02\x02\u0707\u0705\x03\x02\x02\x02\u0707\u0708\x03\x02\x02\x02" +
        "\u0708\u0711\x03\x02\x02\x02\u0709\u0707\x03\x02\x02\x02\u070A\u070E\x05" +
        ":\x1E\x02\u070B\u070D\x07t\x02\x02\u070C\u070B\x03\x02\x02\x02\u070D\u0710" +
        "\x03\x02\x02\x02\u070E\u070C\x03\x02\x02\x02\u070E\u070F\x03\x02\x02\x02" +
        "\u070F\u0712\x03\x02\x02\x02\u0710\u070E\x03\x02\x02\x02\u0711\u070A\x03" +
        "\x02\x02\x02\u0712\u0713\x03\x02\x02\x02\u0713\u0711\x03\x02\x02\x02\u0713" +
        "\u0714\x03\x02\x02\x02\u0714\x8D\x03\x02\x02\x02\u0715\u0716\x07I\x02" +
        "\x02\u0716\u0717\x05\xAAV\x02\u0717\u071B\x07_\x02\x02\u0718\u071A\x07" +
        "t\x02\x02\u0719\u0718\x03\x02\x02\x02\u071A\u071D\x03\x02\x02\x02\u071B" +
        "\u0719\x03\x02\x02\x02\u071B\u071C\x03\x02\x02\x02\u071C\u0725\x03\x02" +
        "\x02\x02\u071D\u071B\x03\x02\x02\x02\u071E\u0722\x05:\x1E\x02\u071F\u0721" +
        "\x07t\x02\x02\u0720\u071F\x03\x02\x02\x02\u0721\u0724\x03\x02\x02\x02" +
        "\u0722\u0720\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723\u0726\x03" +
        "\x02\x02\x02\u0724\u0722\x03\x02\x02\x02\u0725\u071E\x03\x02\x02\x02\u0726" +
        "\u0727\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02\u0727\u0728\x03\x02" +
        "\x02\x02\u0728\x8F\x03\x02\x02\x02\u0729\u072A\x07J\x02\x02\u072A\u072B" +
        "\x05\xAAV\x02\u072B\u072F\x07_\x02\x02\u072C\u072E\x07t\x02\x02\u072D" +
        "\u072C\x03\x02\x02\x02\u072E\u0731\x03\x02\x02\x02\u072F\u072D\x03\x02" +
        "\x02\x02\u072F\u0730\x03\x02\x02\x02\u0730\u0739\x03\x02\x02\x02\u0731" +
        "\u072F\x03\x02\x02\x02\u0732\u0736\x05:\x1E\x02\u0733\u0735\x07t\x02\x02" +
        "\u0734\u0733\x03\x02\x02\x02\u0735\u0738\x03\x02\x02\x02\u0736\u0734\x03" +
        "\x02\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737\u073A\x03\x02\x02\x02\u0738" +
        "\u0736\x03\x02\x02\x02\u0739\u0732\x03\x02\x02\x02\u073A\u073B\x03\x02" +
        "\x02\x02\u073B\u0739\x03\x02\x02\x02\u073B\u073C\x03\x02\x02\x02\u073C" +
        "\x91\x03\x02\x02\x02\u073D\u073E\x07\x18\x02\x02\u073E\u073F\x05\xAAV" +
        "\x02\u073F\u0743\x07_\x02\x02\u0740\u0742\x07t\x02\x02\u0741\u0740\x03" +
        "\x02\x02\x02\u0742\u0745\x03\x02\x02\x02\u0743\u0741\x03\x02\x02\x02\u0743" +
        "\u0744\x03\x02\x02\x02\u0744\u074D\x03\x02\x02\x02\u0745\u0743\x03\x02" +
        "\x02\x02\u0746\u074A\x05:\x1E\x02\u0747\u0749\x07t\x02\x02\u0748\u0747" +
        "\x03\x02\x02\x02\u0749\u074C\x03\x02\x02\x02\u074A\u0748\x03\x02\x02\x02" +
        "\u074A\u074B\x03\x02\x02\x02\u074B\u074E\x03\x02\x02\x02\u074C\u074A\x03" +
        "\x02\x02\x02\u074D\u0746\x03\x02\x02\x02\u074E\u074F\x03\x02\x02\x02\u074F" +
        "\u074D\x03\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\x93\x03\x02\x02" +
        "\x02\u0751\u0752\x07 \x02\x02\u0752\u0753\x05\xAAV\x02\u0753\u075E\x07" +
        "_\x02\x02\u0754\u0755\t\x07\x02\x02\u0755\u075B\x05\x96L\x02\u0756\u0757" +
        "\x05\u0124\x93\x02\u0757\u0758\x05\x96L\x02\u0758\u075A\x03\x02\x02\x02" +
        "\u0759\u0756\x03\x02\x02\x02\u075A\u075D\x03\x02\x02\x02\u075B\u0759\x03" +
        "\x02\x02\x02\u075B\u075C\x03\x02\x02\x02\u075C\u075F\x03\x02\x02\x02\u075D" +
        "\u075B\x03\x02\x02\x02\u075E\u0754\x03\x02\x02\x02\u075F\u0760\x03\x02" +
        "\x02\x02\u0760\u075E\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02\u0761" +
        "\u0762\x03\x02\x02\x02\u0762\u0766\t\x07\x02\x02\u0763\u0765\x07t\x02" +
        "\x02\u0764\u0763\x03\x02\x02\x02\u0765\u0768\x03\x02\x02\x02\u0766\u0764" +
        "\x03\x02\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u0776\x03\x02\x02\x02" +
        "\u0768\u0766\x03\x02\x02\x02\u0769\u0773\x05L\'\x02\u076A\u076C\x07t\x02" +
        "\x02\u076B\u076A\x03\x02\x02\x02\u076C\u076F\x03\x02\x02\x02\u076D\u076B" +
        "\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E\u0770\x03\x02\x02\x02" +
        "\u076F\u076D\x03\x02\x02\x02\u0770\u0772\x05L\'\x02\u0771\u076D\x03\x02" +
        "\x02\x02\u0772\u0775\x03\x02\x02\x02\u0773\u0771\x03\x02\x02\x02\u0773" +
        "\u0774\x03\x02\x02\x02\u0774\u0777\x03\x02\x02\x02\u0775\u0773\x03\x02" +
        "\x02\x02\u0776\u0769\x03\x02\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777" +
        "\x95\x03\x02\x02\x02\u0778\u0780\x05\u0126\x94\x02\u0779\u0780\x05\u0104" +
        "\x83\x02\u077A\u0780\x05\xE4s\x02\u077B\u0780\x05<\x1F\x02\u077C\u0780" +
        "\x05@!\x02\u077D\u0780\x05B\"\x02\u077E\u0780\x05D#\x02\u077F\u0778\x03" +
        "\x02\x02\x02\u077F\u0779\x03\x02\x02\x02\u077F\u077A\x03\x02\x02\x02\u077F" +
        "\u077B\x03\x02\x02\x02\u077F\u077C\x03\x02\x02\x02\u077F\u077D\x03\x02" +
        "\x02\x02\u077F\u077E\x03\x02\x02\x02\u0780\u0781\x03\x02\x02\x02\u0781" +
        "\u077F\x03\x02\x02\x02\u0781\u0782\x03\x02\x02\x02\u0782\x97\x03\x02\x02" +
        "\x02\u0783\u0784\x07\"\x02\x02\u0784\u0785\x05\xAAV\x02\u0785\u0789\x07" +
        "_\x02\x02\u0786\u0788\x07t\x02\x02\u0787\u0786\x03\x02\x02\x02\u0788\u078B" +
        "\x03\x02\x02\x02\u0789\u0787\x03\x02\x02\x02\u0789\u078A\x03\x02\x02\x02" +
        "\u078A\u0795\x03\x02\x02\x02\u078B\u0789\x03\x02\x02\x02\u078C\u0790\x05" +
        ":\x1E\x02\u078D\u078F\x07t\x02\x02\u078E\u078D\x03\x02\x02\x02\u078F\u0792" +
        "\x03\x02\x02\x02\u0790\u078E\x03\x02\x02\x02\u0790\u0791\x03\x02\x02\x02" +
        "\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02\u0793\u078C\x03" +
        "\x02\x02\x02\u0794\u0797\x03\x02\x02\x02\u0795\u0793\x03\x02\x02\x02\u0795" +
        "\u0796\x03\x02\x02\x02\u0796\u07A0\x03\x02\x02\x02\u0797\u0795\x03\x02" +
        "\x02\x02\u0798\u0799\t\x07\x02\x02\u0799\u079C\x05\u011C\x8F\x02\u079A" +
        "\u079B\x07t\x02\x02\u079B\u079D\x05\x9AN\x02\u079C\u079A\x03\x02\x02\x02" +
        "\u079D\u079E\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02\u079E\u079F\x03" +
        "\x02\x02\x02\u079F\u07A1\x03\x02\x02\x02\u07A0\u0798\x03\x02\x02\x02\u07A1" +
        "\u07A2\x03\x02\x02\x02\u07A2\u07A0\x03\x02\x02\x02\u07A2\u07A3\x03\x02" +
        "\x02\x02\u07A3\u07A4\x03\x02\x02\x02\u07A4\u07A8\t\x07\x02\x02\u07A5\u07A7" +
        "\x07t\x02\x02\u07A6\u07A5\x03\x02\x02\x02\u07A7\u07AA\x03\x02\x02\x02" +
        "\u07A8\u07A6\x03\x02\x02\x02\u07A8\u07A9\x03\x02\x02\x02\u07A9\u07B8\x03" +
        "\x02\x02\x02\u07AA\u07A8\x03\x02\x02";
    bitmarkParser._serializedATNSegment4 = "\x02\u07AB\u07B5\x05L\'\x02\u07AC\u07AE\x07t\x02\x02\u07AD\u07AC\x03\x02" +
        "\x02\x02\u07AE\u07B1\x03\x02\x02\x02\u07AF\u07AD\x03\x02\x02\x02\u07AF" +
        "\u07B0\x03\x02\x02\x02\u07B0\u07B2\x03\x02\x02\x02\u07B1\u07AF\x03\x02" +
        "\x02\x02\u07B2\u07B4\x05L\'\x02\u07B3\u07AF\x03\x02\x02\x02\u07B4\u07B7" +
        "\x03\x02\x02\x02\u07B5\u07B3\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02" +
        "\u07B6\u07B9\x03\x02\x02\x02\u07B7\u07B5\x03\x02\x02\x02\u07B8\u07AB\x03" +
        "\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\x99\x03\x02\x02\x02\u07BA" +
        "\u07BB\x07P\x02\x02\u07BB\u07BC\x05\u011C\x8F\x02\u07BC\u07BE\x07_\x02" +
        "\x02\u07BD\u07BF\x05\xA8U\x02\u07BE\u07BD\x03\x02\x02\x02\u07BE\u07BF" +
        "\x03\x02\x02\x02\u07BF\x9B\x03\x02\x02\x02\u07C0\u07C1\x07#\x02\x02\u07C1" +
        "\u07C2\x05\xAAV\x02\u07C2\u07C6\x07_\x02\x02\u07C3\u07C5\x07t\x02\x02" +
        "\u07C4\u07C3\x03\x02\x02\x02\u07C5\u07C8\x03\x02\x02\x02\u07C6\u07C4\x03" +
        "\x02\x02\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7\u07D2\x03\x02\x02\x02\u07C8" +
        "\u07C6\x03\x02\x02\x02\u07C9\u07CD\x05:\x1E\x02\u07CA\u07CC\x07t\x02\x02" +
        "\u07CB\u07CA\x03\x02\x02\x02\u07CC\u07CF\x03\x02\x02\x02\u07CD\u07CB\x03" +
        "\x02\x02\x02\u07CD\u07CE\x03\x02\x02\x02\u07CE\u07D1\x03\x02\x02\x02\u07CF" +
        "\u07CD\x03\x02\x02\x02\u07D0\u07C9\x03\x02\x02\x02\u07D1\u07D4\x03\x02" +
        "\x02\x02\u07D2\u07D0\x03\x02\x02\x02\u07D2\u07D3\x03\x02\x02\x02\u07D3" +
        "\u07E4\x03\x02\x02\x02\u07D4\u07D2\x03\x02\x02\x02\u07D5\u07D7\t\x07\x02" +
        "\x02\u07D6\u07D8\x05\u011C\x8F\x02\u07D7\u07D6\x03\x02\x02\x02\u07D7\u07D8" +
        "\x03\x02\x02\x02\u07D8\u07E0\x03\x02\x02\x02\u07D9\u07DB\x07t\x02\x02" +
        "\u07DA\u07D9\x03\x02\x02\x02\u07DB\u07DE\x03\x02\x02\x02\u07DC\u07DA\x03" +
        "\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DF\x03\x02\x02\x02\u07DE" +
        "\u07DC\x03\x02\x02\x02\u07DF\u07E1\x05\x9AN\x02\u07E0\u07DC\x03\x02\x02" +
        "\x02\u07E1\u07E2\x03\x02\x02\x02\u07E2\u07E0\x03\x02\x02\x02\u07E2\u07E3" +
        "\x03\x02\x02\x02\u07E3\u07E5\x03\x02\x02\x02\u07E4\u07D5\x03\x02\x02\x02" +
        "\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E4\x03\x02\x02\x02\u07E6\u07E7\x03" +
        "\x02\x02\x02\u07E7\u07E8\x03\x02\x02\x02\u07E8\u07E9\t\x07\x02\x02\u07E9" +
        "\x9D\x03\x02\x02\x02\u07EA\u07EB\x07$\x02\x02\u07EB\u07EC\x05\xAAV\x02" +
        "\u07EC\u07F0\x07_\x02\x02\u07ED\u07EF\x07t\x02\x02\u07EE\u07ED\x03\x02" +
        "\x02\x02\u07EF\u07F2\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F0" +
        "\u07F1\x03\x02\x02\x02\u07F1\u07FC\x03\x02\x02\x02\u07F2\u07F0\x03\x02" +
        "\x02\x02\u07F3\u07F7\x05:\x1E\x02\u07F4\u07F6\x07t\x02\x02\u07F5\u07F4" +
        "\x03\x02\x02\x02\u07F6\u07F9\x03\x02\x02\x02\u07F7\u07F5\x03\x02\x02\x02" +
        "\u07F7\u07F8\x03\x02\x02\x02\u07F8\u07FB\x03\x02\x02\x02\u07F9\u07F7\x03" +
        "\x02\x02\x02\u07FA\u07F3\x03\x02\x02\x02\u07FB\u07FE\x03\x02\x02\x02\u07FC" +
        "\u07FA\x03\x02\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\u0807\x03\x02" +
        "\x02\x02\u07FE\u07FC\x03\x02\x02\x02\u07FF\u0800\t\x07\x02\x02\u0800\u0803" +
        "\x05\u011C\x8F\x02\u0801\u0802\x07t\x02\x02\u0802\u0804\x05\x9AN\x02\u0803" +
        "\u0801\x03\x02\x02\x02\u0804\u0805\x03\x02\x02\x02\u0805\u0803\x03\x02" +
        "\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806\u0808\x03\x02\x02\x02\u0807" +
        "\u07FF\x03\x02\x02\x02\u0808\u0809\x03\x02\x02\x02\u0809\u0807\x03\x02" +
        "\x02\x02\u0809\u080A\x03\x02\x02\x02\u080A\u080B\x03\x02\x02\x02\u080B" +
        "\u080C\t\x07\x02\x02\u080C\x9F\x03\x02\x02\x02\u080D\u080E\x07%\x02\x02" +
        "\u080E\u080F\x05\xAAV\x02\u080F\u0813\x07_\x02\x02\u0810\u0812\x07t\x02" +
        "\x02\u0811\u0810\x03\x02\x02\x02\u0812\u0815\x03\x02\x02\x02\u0813\u0811" +
        "\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02\u0814\u081F\x03\x02\x02\x02" +
        "\u0815\u0813\x03\x02\x02\x02\u0816\u081A\x05:\x1E\x02\u0817\u0819\x07" +
        "t\x02\x02\u0818\u0817\x03\x02\x02\x02\u0819\u081C\x03\x02\x02\x02\u081A" +
        "\u0818\x03\x02\x02\x02\u081A\u081B\x03\x02\x02\x02\u081B\u081E\x03\x02" +
        "\x02\x02\u081C\u081A\x03\x02\x02\x02\u081D\u0816\x03\x02\x02\x02\u081E" +
        "\u0821\x03\x02\x02\x02\u081F\u081D\x03\x02\x02\x02\u081F\u0820\x03\x02" +
        "\x02\x02\u0820\u082A\x03\x02\x02\x02\u0821\u081F\x03\x02\x02\x02\u0822" +
        "\u0823\t\x07\x02\x02\u0823\u0826\x05\u011C\x8F\x02\u0824\u0825\x07t\x02" +
        "\x02\u0825\u0827\x05\x9AN\x02\u0826\u0824\x03\x02\x02\x02\u0827\u0828" +
        "\x03\x02\x02\x02\u0828\u0826\x03\x02\x02\x02\u0828\u0829\x03\x02\x02\x02" +
        "\u0829\u082B\x03\x02\x02\x02\u082A\u0822\x03\x02\x02\x02\u082B\u082C\x03" +
        "\x02\x02\x02\u082C\u082A\x03\x02\x02\x02\u082C\u082D\x03\x02\x02\x02\u082D" +
        "\u082E\x03\x02\x02\x02\u082E\u082F\t\x07\x02\x02\u082F\xA1\x03\x02\x02" +
        "\x02\u0830\u0831\x07&\x02\x02\u0831\u0832\x05\xAAV\x02\u0832\u0836\x07" +
        "_\x02\x02\u0833\u0835\x07t\x02\x02\u0834\u0833\x03\x02\x02\x02\u0835\u0838" +
        "\x03\x02\x02\x02\u0836\u0834\x03\x02\x02\x02\u0836\u0837\x03\x02\x02\x02" +
        "\u0837\u0842\x03\x02\x02\x02\u0838\u0836\x03\x02\x02\x02\u0839\u083D\x05" +
        ":\x1E\x02\u083A\u083C\x07t\x02\x02\u083B\u083A\x03\x02\x02\x02\u083C\u083F" +
        "\x03\x02\x02\x02\u083D\u083B\x03\x02\x02\x02\u083D\u083E\x03\x02\x02\x02" +
        "\u083E\u0841\x03\x02\x02\x02\u083F\u083D\x03\x02\x02\x02\u0840\u0839\x03" +
        "\x02\x02\x02\u0841\u0844\x03\x02\x02\x02\u0842\u0840\x03\x02\x02\x02\u0842" +
        "\u0843\x03\x02\x02\x02\u0843\u084D\x03\x02\x02\x02\u0844\u0842\x03\x02" +
        "\x02\x02\u0845\u0846\t\x07\x02\x02\u0846\u0849\x05\u011C\x8F\x02\u0847" +
        "\u0848\x07t\x02\x02\u0848\u084A\x05\x9AN\x02\u0849\u0847\x03\x02\x02\x02" +
        "\u084A\u084B\x03\x02\x02\x02\u084B\u0849\x03\x02\x02\x02\u084B\u084C\x03" +
        "\x02\x02\x02\u084C\u084E\x03\x02\x02\x02\u084D\u0845\x03\x02\x02\x02\u084E" +
        "\u084F\x03\x02\x02\x02\u084F\u084D\x03\x02\x02\x02\u084F\u0850\x03\x02" +
        "\x02\x02\u0850\u0851\x03\x02\x02\x02\u0851\u0852\t\x07\x02\x02\u0852\xA3" +
        "\x03\x02\x02\x02\u0853\u0854\x07!\x02\x02\u0854\u0855\x05\xAAV\x02\u0855" +
        "\u0859\x07_\x02\x02\u0856\u0858\x07t\x02\x02\u0857\u0856\x03\x02\x02\x02" +
        "\u0858\u085B\x03\x02\x02\x02\u0859\u0857\x03\x02\x02\x02\u0859\u085A\x03" +
        "\x02\x02\x02\u085A\u0865\x03\x02\x02\x02\u085B\u0859\x03\x02\x02\x02\u085C" +
        "\u0860\x05:\x1E\x02\u085D\u085F\x07t\x02\x02\u085E\u085D\x03\x02\x02\x02" +
        "\u085F\u0862\x03\x02\x02\x02\u0860\u085E\x03\x02\x02\x02\u0860\u0861\x03" +
        "\x02\x02\x02\u0861\u0864\x03\x02\x02\x02\u0862\u0860\x03\x02\x02\x02\u0863" +
        "\u085C\x03\x02\x02\x02\u0864\u0867\x03\x02\x02\x02\u0865\u0863\x03\x02" +
        "\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866\u0875\x03\x02\x02\x02\u0867" +
        "\u0865\x03\x02\x02\x02\u0868\u0869\t\x07\x02\x02\u0869\u0871\x05\xA6T" +
        "\x02\u086A\u086C\x07t\x02\x02\u086B\u086A\x03\x02\x02\x02\u086C\u086F" +
        "\x03\x02\x02\x02\u086D\u086B\x03\x02\x02\x02\u086D\u086E\x03\x02\x02\x02" +
        "\u086E\u0870\x03\x02\x02\x02\u086F\u086D\x03\x02\x02\x02\u0870\u0872\x05" +
        "\x9AN\x02\u0871\u086D\x03\x02\x02\x02\u0872\u0873\x03\x02\x02\x02\u0873" +
        "\u0871\x03\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874\u0876\x03\x02" +
        "\x02\x02\u0875\u0868\x03\x02\x02\x02\u0876\u0877\x03\x02\x02\x02\u0877" +
        "\u0875\x03\x02\x02\x02\u0877\u0878\x03\x02\x02\x02\u0878\u0879\x03\x02" +
        "\x02\x02\u0879\u087D\t\x07\x02\x02\u087A\u087C\x07t\x02\x02\u087B\u087A" +
        "\x03\x02\x02\x02\u087C\u087F\x03\x02\x02\x02\u087D\u087B\x03\x02\x02\x02" +
        "\u087D\u087E\x03\x02\x02\x02\u087E\u088D\x03\x02\x02\x02\u087F\u087D\x03" +
        "\x02\x02\x02\u0880\u088A\x05L\'\x02\u0881\u0883\x07t\x02\x02\u0882\u0881" +
        "\x03\x02\x02\x02\u0883\u0886\x03\x02\x02\x02\u0884\u0882\x03\x02\x02\x02" +
        "\u0884\u0885\x03\x02\x02\x02\u0885\u0887\x03\x02\x02\x02\u0886\u0884\x03" +
        "\x02\x02\x02\u0887\u0889\x05L\'\x02\u0888\u0884\x03\x02\x02\x02\u0889" +
        "\u088C\x03\x02\x02\x02\u088A\u0888\x03\x02\x02\x02\u088A\u088B\x03\x02" +
        "\x02\x02\u088B\u088E\x03\x02\x02\x02\u088C\u088A\x03\x02\x02\x02\u088D" +
        "\u0880\x03\x02\x02\x02\u088D\u088E\x03\x02\x02\x02\u088E\xA5\x03\x02\x02" +
        "\x02\u088F\u0891\n\b\x02\x02\u0890\u088F\x03\x02\x02\x02\u0891\u0892\x03" +
        "\x02\x02\x02\u0892\u0890\x03\x02\x02\x02\u0892\u0893\x03\x02\x02\x02\u0893" +
        "\xA7\x03\x02\x02\x02\u0894\u0895\x07\x85\x02\x02\u0895\u0896\x07r\x02" +
        "\x02\u0896\u0897\x07_\x02\x02\u0897\xA9\x03\x02\x02\x02\u0898\u089A\x05" +
        "\xACW\x02\u0899\u0898\x03\x02\x02\x02\u089A\u089D\x03\x02\x02\x02\u089B" +
        "\u0899\x03\x02\x02\x02\u089B\u089C\x03\x02\x02\x02\u089C\u08A2\x03\x02" +
        "\x02\x02\u089D\u089B\x03\x02\x02\x02\u089E\u08A1\x07\xBC\x02\x02\u089F" +
        "\u08A1\x05\xAEX\x02\u08A0\u089E\x03\x02\x02\x02\u08A0\u089F\x03\x02\x02" +
        "\x02\u08A1\u08A4\x03\x02\x02\x02\u08A2\u08A0\x03\x02\x02\x02\u08A2\u08A3" +
        "\x03\x02\x02\x02\u08A3\xAB\x03\x02\x02\x02\u08A4\u08A2\x03\x02\x02\x02" +
        "\u08A5\u08A6\t\t\x02\x02\u08A6\xAD\x03\x02\x02\x02\u08A7\u08B1\x05\xB0" +
        "Y\x02\u08A8\u08B1\x05\xE8u\x02\u08A9\u08B1\x05\xB2Z\x02\u08AA\u08B1\x05" +
        "\xB4[\x02\u08AB\u08B1\x05\xB6\\\x02\u08AC\u08B1\x05\xB8]\x02\u08AD\u08B1" +
        "\x05\xBA^\x02\u08AE\u08B1\x05\xBC_\x02\u08AF\u08B1\x07\x9D\x02\x02\u08B0" +
        "\u08A7\x03\x02\x02\x02\u08B0\u08A8\x03\x02\x02\x02\u08B0\u08A9\x03\x02" +
        "\x02\x02\u08B0\u08AA\x03\x02\x02\x02\u08B0\u08AB\x03\x02\x02\x02\u08B0" +
        "\u08AC\x03\x02\x02\x02\u08B0\u08AD\x03\x02\x02\x02\u08B0\u08AE\x03\x02" +
        "\x02\x02\u08B0\u08AF\x03\x02\x02\x02\u08B1\xAF\x03\x02\x02\x02\u08B2\u08B5" +
        "\x07\x94\x02\x02\u08B3\u08B6\x07L\x02\x02\u08B4\u08B6\x07\xCC\x02\x02" +
        "\u08B5\u08B3\x03\x02\x02\x02\u08B5\u08B4\x03\x02\x02\x02\u08B5\u08B6\x03" +
        "\x02\x02\x02\u08B6\u08C1\x03\x02\x02\x02\u08B7\u08B9\x07\xAB\x02\x02\u08B8" +
        "\u08BA\x07L\x02\x02\u08B9\u08B8\x03\x02\x02\x02\u08B9\u08BA\x03\x02\x02" +
        "\x02\u08BA\u08C1\x03\x02\x02\x02\u08BB\u08BD\x07\x95\x02\x02\u08BC\u08BE" +
        "\x07L\x02\x02\u08BD\u08BC\x03\x02\x02\x02\u08BD\u08BE\x03\x02\x02\x02" +
        "\u08BE\u08C1\x03\x02\x02\x02\u08BF\u08C1\x07\x96\x02\x02\u08C0\u08B2\x03" +
        "\x02\x02\x02\u08C0\u08B7\x03\x02\x02\x02\u08C0\u08BB\x03\x02\x02\x02\u08C0" +
        "\u08BF\x03\x02\x02\x02\u08C1\xB1\x03\x02\x02\x02\u08C2\u08C5\t\n\x02\x02" +
        "\u08C3\u08C4\x07`\x02\x02\u08C4\u08C6\x07N\x02\x02\u08C5\u08C3\x03\x02" +
        "\x02\x02\u08C5\u08C6\x03\x02\x02\x02\u08C6\xB3\x03\x02\x02\x02\u08C7\u08C8" +
        "\t\v\x02\x02\u08C8\xB5\x03\x02\x02\x02\u08C9\u08CA\t\f\x02\x02\u08CA\xB7" +
        "\x03\x02\x02\x02\u08CB\u08CC\t\r\x02\x02\u08CC\xB9\x03\x02\x02\x02\u08CD" +
        "\u08CE\t\x0E\x02\x02\u08CE\xBB\x03\x02\x02\x02\u08CF\u08D0\t\x0F\x02\x02" +
        "\u08D0\xBD\x03\x02\x02\x02\u08D1\u08D2\t\x10\x02\x02\u08D2\xBF\x03\x02" +
        "\x02\x02\u08D3\u08D4\t\x11\x02\x02\u08D4\xC1\x03\x02\x02\x02\u08D5\u08D6" +
        "\t\x12\x02\x02\u08D6\xC3\x03\x02\x02\x02\u08D7\u08D8\t\x13\x02\x02\u08D8" +
        "\xC5\x03\x02\x02\x02\u08D9\u08DC\x07\xA2\x02\x02\u08DA\u08DB\x07`\x02" +
        "\x02\u08DB\u08DD\x07N\x02\x02\u08DC\u08DA\x03\x02\x02\x02\u08DC\u08DD" +
        "\x03\x02\x02\x02\u08DD\u08E4\x03\x02\x02\x02\u08DE\u08E1\x07\xB4\x02\x02" +
        "\u08DF\u08E0\x07`\x02\x02\u08E0\u08E2\x07N\x02\x02\u08E1\u08DF\x03\x02" +
        "\x02\x02\u08E1\u08E2\x03\x02\x02\x02\u08E2\u08E4\x03\x02\x02\x02\u08E3" +
        "\u08D9\x03\x02\x02\x02\u08E3\u08DE\x03\x02\x02\x02\u08E4\xC7\x03\x02\x02" +
        "\x02\u08E5\u08E6\t\x14\x02\x02\u08E6\xC9\x03\x02\x02\x02\u08E7\u08E8\x05" +
        "\xBE`\x02\u08E8\u08E9\x07`\x02\x02\u08E9\u08EA\x05\xF0y\x02\u08EA\u08EB" +
        "\x07_\x02\x02\u08EB\u08EE\x03\x02\x02\x02\u08EC\u08EE\x07p\x02\x02\u08ED" +
        "\u08E7\x03\x02\x02\x02\u08ED\u08EC\x03\x02\x02\x02\u08EE\xCB\x03\x02\x02" +
        "\x02\u08EF\u08F0\x05\xC0a\x02\u08F0\u08F1\x07`\x02\x02\u08F1\u08F2\x05" +
        "\xF0y\x02\u08F2\u08F7\x07_\x02\x02\u08F3\u08F4\x07\x87\x02\x02\u08F4\u08F5" +
        "\x05\u0126\x94\x02\u08F5\u08F6\x07_\x02\x02\u08F6\u08F8\x03\x02\x02\x02" +
        "\u08F7\u08F3\x03\x02\x02\x02\u08F7\u08F8\x03\x02\x02\x02\u08F8\xCD\x03" +
        "\x02\x02\x02\u08F9\u08FA\x05\xC4c\x02\u08FA\u08FB\x07`\x02\x02\u08FB\u08FC" +
        "\x05\xF0y\x02\u08FC\u0901\x07_\x02\x02\u08FD\u08FE\x07\x87\x02\x02\u08FE" +
        "\u08FF\x05\u0126\x94\x02\u08FF\u0900\x07_\x02\x02\u0900\u0902\x03\x02" +
        "\x02\x02\u0901\u08FD\x03\x02\x02\x02\u0901\u0902\x03\x02\x02\x02\u0902" +
        "\xCF\x03\x02\x02\x02\u0903\u0904\x05\xC2b\x02\u0904\u0907\x07`\x02\x02" +
        "\u0905\u0908\x05\xF0y\x02\u0906\u0908\x05\xEEx\x02\u0907\u0905\x03\x02" +
        "\x02\x02\u0907\u0906\x03\x02\x02\x02\u0908\u0909\x03\x02\x02\x02\u0909" +
        "\u090E\x07_\x02\x02\u090A\u090B\x07\x87\x02\x02\u090B\u090C\x05\u0126" +
        "\x94\x02\u090C\u090D\x07_\x02\x02\u090D\u090F\x03\x02\x02\x02\u090E\u090A" +
        "\x03\x02\x02\x02\u090E\u090F\x03\x02\x02\x02\u090F\xD1\x03\x02\x02\x02" +
        "\u0910\u0914\x05\xD4k\x02\u0911\u0913\x05\xECw\x02\u0912\u0911\x03\x02" +
        "\x02\x02\u0913\u0916\x03\x02\x02\x02\u0914\u0912\x03\x02\x02\x02\u0914" +
        "\u0915\x03\x02\x02\x02\u0915\xD3\x03\x02\x02\x02\u0916\u0914\x03\x02\x02" +
        "\x02\u0917\u0918\x05\xC8e\x02\u0918\u091C\x07`\x02\x02\u0919\u091B\x07" +
        "\x04\x02\x02\u091A\u0919\x03\x02\x02\x02\u091B\u091E\x03\x02\x02\x02\u091C" +
        "\u091A\x03\x02\x02\x02\u091C\u091D\x03\x02\x02\x02\u091D\u091F\x03\x02" +
        "\x02\x02\u091E\u091C\x03\x02\x02\x02\u091F\u0920\x05\xF0y\x02\u0920\u0921" +
        "\x07_\x02\x02\u0921\xD5\x03\x02\x02\x02\u0922\u0926\x05\xD8m\x02\u0923" +
        "\u0925\x05\xECw\x02\u0924\u0923\x03\x02\x02\x02\u0925\u0928\x03\x02\x02" +
        "\x02\u0926\u0924\x03\x02\x02\x02\u0926\u0927\x03\x02\x02\x02\u0927\xD7" +
        "\x03\x02\x02\x02\u0928\u0926\x03\x02\x02\x02\u0929\u092A\x05\xC6d\x02" +
        "\u092A\u092B\x07`\x02\x02\u092B\u092C\x05\xF0y\x02\u092C\u0931\x07_\x02" +
        "\x02\u092D\u092E\x07\x87\x02\x02\u092E\u092F\x05\u0126\x94\x02\u092F\u0930" +
        "\x07_\x02\x02\u0930\u0932\x03\x02\x02\x02\u0931\u092D\x03\x02\x02\x02" +
        "\u0931\u0932\x03\x02\x02\x02\u0932\xD9\x03\x02\x02\x02\u0933\u0937\x05" +
        "\xDCo\x02\u0934\u0936\x05\xE0q\x02\u0935\u0934\x03\x02\x02\x02\u0936\u0939" +
        "\x03\x02\x02\x02\u0937\u0935\x03\x02\x02\x02\u0937\u0938\x03\x02\x02\x02" +
        "\u0938\u093C\x03\x02\x02\x02\u0939\u0937\x03\x02\x02\x02\u093A\u093B\x07" +
        "t\x02\x02\u093B\u093D\x07\x89\x02\x02\u093C\u093A\x03\x02\x02\x02\u093C" +
        "\u093D\x03\x02\x02\x02\u093D\xDB\x03\x02\x02\x02\u093E\u093F\x05\xDEp" +
        "\x02\u093F\u0943\x07`\x02\x02\u0940\u0942\x07\x04\x02\x02\u0941\u0940" +
        "\x03\x02\x02\x02\u0942\u0945\x03\x02\x02\x02\u0943\u0941\x03\x02\x02\x02" +
        "\u0943\u0944\x03\x02\x02\x02\u0944\u0946\x03\x02\x02\x02\u0945\u0943\x03" +
        "\x02\x02\x02\u0946\u0947\x05\xF0y\x02\u0947\u0948\x07_\x02\x02\u0948\xDD" +
        "\x03\x02\x02\x02\u0949\u094C\x07\x9F\x02\x02\u094A\u094D\x07L\x02\x02" +
        "\u094B\u094D\x07\xCC\x02\x02\u094C\u094A\x03\x02\x02\x02\u094C\u094B\x03" +
        "\x02\x02\x02\u094C\u094D\x03\x02\x02\x02\u094D\u0958\x03\x02\x02\x02\u094E" +
        "\u0950\x07\xB3\x02\x02\u094F\u0951\x07L\x02\x02\u0950\u094F\x03\x02\x02" +
        "\x02\u0950\u0951\x03\x02\x02\x02\u0951\u0958\x03\x02\x02\x02\u0952\u0954" +
        "\x07\xA0\x02\x02\u0953\u0955\x07L\x02\x02\u0954\u0953\x03\x02\x02\x02" +
        "\u0954\u0955\x03\x02\x02\x02\u0955\u0958\x03\x02\x02\x02\u0956\u0958\x07" +
        "\xA1\x02\x02\u0957\u0949\x03\x02\x02\x02\u0957\u094E\x03\x02\x02\x02\u0957" +
        "\u0952\x03\x02\x02\x02\u0957\u0956\x03\x02\x02\x02\u0958\xDF\x03\x02\x02" +
        "\x02\u0959\u095A\x07\x86\x02\x02\u095A\u095B\x07`\x02\x02\u095B\u095C" +
        "\x05\xF0y\x02\u095C\u095D\x07_\x02\x02\u095D\u096B\x03\x02\x02\x02\u095E" +
        "\u095F\t\x15\x02\x02\u095F\u0960\x07`\x02\x02\u0960\u0961\x07r\x02\x02" +
        "\u0961\u096B\x07_\x02\x02\u0962\u0966\t\x16\x02\x02\u0963\u0965\v\x02" +
        "\x02\x02\u0964\u0963\x03\x02\x02\x02\u0965\u0968\x03\x02\x02\x02\u0966" +
        "\u0967\x03\x02\x02\x02\u0966\u0964\x03\x02\x02\x02\u0967\u0969\x03\x02" +
        "\x02\x02\u0968\u0966\x03\x02\x02\x02\u0969\u096B\x07_\x02\x02\u096A\u0959" +
        "\x03\x02\x02\x02\u096A\u095E\x03\x02\x02\x02\u096A\u0962\x03\x02\x02\x02" +
        "\u096B\xE1\x03\x02\x02\x02\u096C\u096D\x07\x86\x02\x02\u096D\u096E\x07" +
        "`\x02\x02\u096E\u096F\x05\xF0y\x02\u096F\u0970\x07_\x02\x02\u0970\u097E" +
        "\x03\x02\x02\x02\u0971\u0972\t\x15\x02\x02\u0972\u0973\x07`\x02\x02\u0973" +
        "\u0974\x07r\x02\x02\u0974\u097E\x07_\x02\x02\u0975\u0979\t\x16\x02\x02" +
        "\u0976\u0978\v\x02\x02\x02\u0977\u0976\x03\x02\x02\x02\u0978\u097B\x03" +
        "\x02\x02\x02\u0979\u097A\x03\x02\x02\x02\u0979\u0977\x03\x02\x02\x02\u097A" +
        "\u097C\x03\x02\x02\x02\u097B\u0979\x03\x02\x02\x02\u097C\u097E\x07_\x02" +
        "\x02\u097D\u096C\x03\x02\x02\x02\u097D\u0971\x03\x02\x02\x02\u097D\u0975" +
        "\x03\x02\x02\x02\u097E\xE3\x03\x02\x02\x02\u097F\u0983\x05\xE6t\x02\u0980" +
        "\u0982\x05\xECw\x02\u0981\u0980\x03\x02\x02\x02\u0982\u0985\x03\x02\x02" +
        "\x02\u0983\u0981\x03\x02\x02\x02\u0983\u0984\x03\x02\x02\x02\u0984\xE5" +
        "\x03\x02\x02\x02\u0985\u0983\x03\x02\x02\x02\u0986\u0987\x05\xEAv\x02" +
        "\u0987\u0988\x07`\x02\x02\u0988\u0989\x05\xF0y\x02\u0989\u098E\x07_\x02" +
        "\x02\u098A\u098B\x07\x87\x02\x02\u098B\u098C\x05\u0126\x94\x02\u098C\u098D" +
        "\x07_\x02\x02\u098D\u098F\x03\x02\x02\x02\u098E\u098A\x03\x02\x02\x02" +
        "\u098E\u098F\x03\x02\x02\x02\u098F\xE7\x03\x02\x02\x02\u0990\u0993\x07" +
        "\x93\x02\x02\u0991\u0992\x07`\x02\x02\u0992\u0994\x07M\x02\x02\u0993\u0991" +
        "\x03\x02\x02\x02\u0993\u0994\x03\x02\x02\x02\u0994\u099B\x03\x02\x02\x02" +
        "\u0995\u0998\x07\xAA\x02\x02\u0996\u0997\x07`\x02\x02\u0997\u0999\x07" +
        "M\x02\x02\u0998\u0996\x03\x02\x02\x02\u0998\u0999\x03\x02\x02\x02\u0999" +
        "\u099B\x03\x02\x02\x02\u099A\u0990\x03\x02\x02\x02\u099A\u0995\x03\x02" +
        "\x02\x02\u099B\xE9\x03\x02\x02\x02\u099C\u099F\x07\x9E\x02\x02\u099D\u099E" +
        "\x07`\x02\x02\u099E\u09A0\x07M\x02\x02\u099F\u099D\x03\x02\x02\x02\u099F" +
        "\u09A0\x03\x02\x02\x02\u09A0\u09A7\x03\x02\x02\x02\u09A1\u09A4\x07\xB2" +
        "\x02\x02\u09A2\u09A3\x07`\x02\x02\u09A3\u09A5\x07M\x02\x02\u09A4\u09A2" +
        "\x03\x02\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5\u09A7\x03\x02\x02\x02" +
        "\u09A6\u099C\x03\x02\x02\x02\u09A6\u09A1\x03\x02\x02\x02\u09A7\xEB\x03" +
        "\x02\x02\x02\u09A8\u09A9\x07X\x02\x02\u09A9\u09AC\x05\u011C\x8F\x02\u09AA" +
        "\u09AC\x07\x86\x02\x02\u09AB\u09A8\x03\x02\x02\x02\u09AB\u09AA\x03\x02" +
        "\x02\x02\u09AC\u09AD\x03\x02\x02\x02\u09AD\u09B1\x07`\x02\x02\u09AE\u09B0" +
        "\x07\x04\x02\x02\u09AF\u09AE\x03\x02\x02\x02\u09B0\u09B3\x03\x02\x02\x02" +
        "\u09B1\u09AF\x03\x02\x02\x02\u09B1\u09B2\x03\x02\x02\x02\u09B2\u09B6\x03" +
        "\x02\x02\x02\u09B3\u09B1\x03\x02\x02\x02\u09B4\u09B7\x05\u011C\x8F\x02" +
        "\u09B5\u09B7\x07t\x02\x02\u09B6\u09B4\x03\x02\x02\x02\u09B6\u09B5\x03" +
        "\x02\x02\x02\u09B7\u09B8\x03\x02\x02\x02\u09B8\u09B6\x03\x02\x02\x02\u09B8" +
        "\u09B9\x03\x02\x02\x02\u09B9\u09BA\x03\x02\x02\x02\u09BA\u09C8\x07_\x02" +
        "\x02\u09BB\u09BC\t\x15\x02\x02\u09BC\u09BD\x07`\x02\x02\u09BD\u09BE\x07" +
        "r\x02\x02\u09BE\u09C8\x07_\x02\x02\u09BF\u09C3\t\x16\x02\x02\u09C0\u09C2" +
        "\v\x02\x02\x02\u09C1\u09C0\x03\x02\x02\x02\u09C2\u09C5\x03\x02\x02\x02" +
        "\u09C3\u09C4\x03\x02\x02\x02\u09C3\u09C1\x03\x02\x02\x02\u09C4\u09C6\x03" +
        "\x02\x02\x02\u09C5\u09C3\x03\x02\x02\x02\u09C6\u09C8\x07_\x02\x02\u09C7" +
        "\u09AB\x03\x02\x02\x02\u09C7\u09BB\x03\x02\x02\x02\u09C7\u09BF\x03\x02" +
        "\x02\x02\u09C8\xED\x03\x02\x02\x02\u09C9\u09CA\x07\xCB\x02\x02\u09CA\u09CB" +
        "\x07c\x02\x02\u09CB\u09CC\x07r\x02\x02\u09CC\xEF\x03\x02\x02\x02\u09CD" +
        "\u09CE\x07\xCE\x02\x02\u09CE\xF1\x03\x02\x02\x02\u09CF\u09D0\x07^\x02" +
        "\x02\u09D0\u09D8\x07_\x02\x02\u09D1\u09D3\x07\x04\x02\x02\u09D2\u09D1" +
        "\x03\x02\x02\x02\u09D3\u09D6\x03\x02\x02\x02\u09D4\u09D2\x03\x02\x02\x02" +
        "\u09D4\u09D5\x03\x02\x02\x02\u09D5\u09D7\x03\x02\x02\x02\u09D6\u09D4\x03" +
        "\x02\x02\x02\u09D7\u09D9\x05\xF4{\x02\u09D8\u09D4\x03\x02\x02\x02\u09D8" +
        "\u09D9\x03\x02\x02\x02\u09D9\u09EE\x03\x02\x02\x02\u09DA\u09DB\x07^\x02" +
        "\x02\u09DB\u09E0\x05\u011C\x8F\x02\u09DC\u09DF\x07`\x02\x02\u09DD\u09DF" +
        "\x05\u0126\x94\x02\u09DE\u09DC\x03\x02\x02\x02\u09DE\u09DD\x03\x02\x02" +
        "\x02\u09DF\u09E2\x03\x02\x02\x02\u09E0\u09DE\x03\x02\x02\x02\u09E0\u09E1" +
        "\x03\x02\x02\x02\u09E1\u09E3\x03\x02\x02\x02\u09E2\u09E0\x03\x02\x02\x02" +
        "\u09E3\u09EB\x07_\x02\x02\u09E4\u09E6\x07\x04\x02\x02\u09E5\u09E4\x03" +
        "\x02\x02\x02\u09E6\u09E9\x03\x02\x02\x02\u09E7\u09E5\x03\x02\x02\x02\u09E7" +
        "\u09E8\x03\x02\x02\x02\u09E8\u09EA\x03\x02\x02\x02\u09E9\u09E7\x03\x02" +
        "\x02\x02\u09EA\u09EC\x05\xF4{\x02\u09EB\u09E7\x03\x02\x02\x02\u09EB\u09EC" +
        "\x03\x02\x02\x02\u09EC\u09EE\x03\x02\x02\x02\u09ED\u09CF\x03\x02\x02\x02" +
        "\u09ED\u09DA\x03\x02\x02\x02\u09EE\xF3\x03\x02\x02\x02\u09EF\u09F0\x07" +
        "^\x02\x02\u09F0\u09F5\x05\u011C\x8F\x02\u09F1\u09F4\x07`\x02\x02\u09F2" +
        "\u09F4\x05\u0126\x94\x02\u09F3\u09F1\x03\x02\x02\x02\u09F3\u09F2\x03\x02" +
        "\x02\x02\u09F4\u09F7\x03\x02\x02\x02\u09F5\u09F3\x03\x02\x02\x02\u09F5" +
        "\u09F6\x03\x02\x02\x02\u09F6\u09F8\x03\x02\x02\x02\u09F7\u09F5\x03\x02" +
        "\x02\x02\u09F8\u09F9\x07_\x02\x02\u09F9\xF5\x03\x02\x02\x02\u09FA\u09FC" +
        "\x07R\x02\x02\u09FB\u09FD\x05\u011C\x8F\x02\u09FC\u09FB\x03\x02\x02\x02" +
        "\u09FC\u09FD\x03\x02\x02\x02\u09FD\u09FE\x03\x02\x02\x02\u09FE\u0A05\x07" +
        "_\x02\x02\u09FF\u0A01\x07S\x02\x02\u0A00\u0A02\x05\u011C\x8F\x02\u0A01" +
        "\u0A00\x03\x02\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02\u0A03\x03\x02" +
        "\x02\x02\u0A03\u0A05\x07_\x02\x02\u0A04\u09FA\x03\x02\x02\x02\u0A04\u09FF" +
        "\x03\x02\x02\x02\u0A05\xF7\x03\x02\x02\x02\u0A06\u0A0E\x07\x80\x02\x02" +
        "\u0A07\u0A0E\x07~\x02\x02\u0A08\u0A0A\x07\x7F\x02\x02\u0A09\u0A0B\x07" +
        "u\x02\x02\u0A0A\u0A09\x03\x02\x02\x02\u0A0A\u0A0B\x03\x02\x02\x02\u0A0B" +
        "\u0A0C\x03\x02\x02\x02\u0A0C\u0A0E\x07\x02\x02\x03\u0A0D\u0A06\x03\x02" +
        "\x02\x02\u0A0D\u0A07\x03\x02\x02\x02\u0A0D\u0A08\x03\x02\x02\x02\u0A0E" +
        "\xF9\x03\x02\x02\x02\u0A0F\u0A11\x07\xA9\x02\x02\u0A10\u0A12\x05\u011C" +
        "\x8F\x02\u0A11\u0A10\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02\x02\u0A12" +
        "\u0A28\x03\x02\x02\x02\u0A13\u0A1D\x05\u011C\x8F\x02\u0A14\u0A18\x07t" +
        "\x02\x02\u0A15\u0A17\x07\x04\x02\x02\u0A16\u0A15\x03\x02\x02\x02\u0A17" +
        "\u0A1A\x03\x02\x02\x02\u0A18\u0A16\x03\x02\x02\x02\u0A18\u0A19\x03\x02" +
        "\x02\x02\u0A19\u0A1C\x03\x02\x02\x02\u0A1A\u0A18\x03\x02\x02\x02\u0A1B" +
        "\u0A14\x03\x02\x02\x02\u0A1C\u0A1F\x03\x02\x02\x02\u0A1D\u0A1B\x03\x02" +
        "\x02\x02\u0A1D\u0A1E\x03\x02\x02\x02\u0A1E\u0A23\x03\x02\x02\x02\u0A1F" +
        "\u0A1D\x03\x02\x02\x02\u0A20\u0A22\x07t\x02\x02\u0A21\u0A20\x03\x02\x02" +
        "\x02\u0A22\u0A25\x03\x02\x02\x02\u0A23\u0A21\x03\x02\x02\x02\u0A23\u0A24" +
        "\x03\x02\x02\x02\u0A24\u0A27\x03\x02\x02\x02\u0A25\u0A23\x03\x02\x02\x02" +
        "\u0A26\u0A13\x03\x02\x02\x02\u0A27\u0A2A\x03\x02\x02\x02\u0A28\u0A26\x03" +
        "\x02\x02\x02\u0A28\u0A29\x03\x02\x02\x02\u0A29\u0A2B\x03\x02\x02\x02\u0A2A" +
        "\u0A28\x03\x02\x02\x02\u0A2B\u0A37\x07_\x02\x02\u0A2C\u0A32\x07\xA9\x02" +
        "\x02\u0A2D\u0A31\x05\u011C\x8F\x02\u0A2E\u0A31\x07t\x02\x02\u0A2F\u0A31" +
        "\x07\x04\x02\x02\u0A30\u0A2D\x03\x02\x02\x02\u0A30\u0A2E\x03\x02\x02\x02" +
        "\u0A30\u0A2F\x03\x02\x02\x02\u0A31\u0A34\x03\x02\x02\x02\u0A32\u0A30\x03" +
        "\x02\x02\x02\u0A32\u0A33\x03\x02\x02\x02\u0A33\u0A35\x03\x02\x02\x02\u0A34" +
        "\u0A32\x03\x02\x02\x02\u0A35\u0A37\x07\x02\x02\x03\u0A36\u0A0F\x03\x02" +
        "\x02\x02\u0A36\u0A2C\x03\x02\x02\x02\u0A37\xFB\x03\x02\x02\x02\u0A38\u0A3D" +
        "\x07x\x02\x02\u0A39\u0A3E\x05\u011C\x8F\x02\u0A3A\u0A3E\x07`\x02\x02\u0A3B" +
        "\u0A3E\x07\xCE\x02\x02\u0A3C\u0A3E\x07t\x02\x02\u0A3D\u0A39\x03\x02\x02" +
        "\x02\u0A3D\u0A3A\x03\x02\x02\x02\u0A3D\u0A3B\x03\x02\x02\x02\u0A3D\u0A3C" +
        "\x03\x02\x02\x02\u0A3E\u0A3F\x03\x02\x02\x02\u0A3F\u0A3D\x03\x02\x02\x02" +
        "\u0A3F\u0A40\x03\x02\x02\x02\u0A40\u0A41\x03\x02\x02\x02\u0A41\u0A4F\x07" +
        "_\x02\x02\u0A42\u0A4A\x07x\x02\x02\u0A43\u0A49\x05\u011C\x8F\x02\u0A44" +
        "\u0A49\x07`\x02\x02\u0A45\u0A49\x07\xCE\x02\x02\u0A46\u0A49\x07t\x02\x02" +
        "\u0A47\u0A49\x07\x04\x02\x02\u0A48\u0A43\x03\x02\x02\x02\u0A48\u0A44\x03" +
        "\x02\x02\x02\u0A48\u0A45\x03\x02\x02\x02\u0A48\u0A46\x03\x02\x02\x02\u0A48" +
        "\u0A47\x03\x02\x02\x02\u0A49\u0A4C\x03\x02\x02\x02\u0A4A\u0A48\x03\x02" +
        "\x02\x02\u0A4A\u0A4B\x03\x02\x02\x02\u0A4B\u0A4D\x03\x02\x02\x02\u0A4C" +
        "\u0A4A\x03\x02\x02\x02\u0A4D\u0A4F\x07\x02\x02\x03\u0A4E\u0A38\x03\x02" +
        "\x02\x02\u0A4E\u0A42\x03\x02\x02\x02\u0A4F\xFD\x03\x02\x02\x02\u0A50\u0A51" +
        "\x07w\x02\x02\u0A51\u0A52\x05\u011C\x8F\x02\u0A52\u0A53\x07_\x02\x02\u0A53" +
        "\xFF\x03\x02\x02\x02\u0A54\u0A58\x07\x90\x02\x02\u0A55\u0A59\x05\u011C" +
        "\x8F\x02\u0A56\u0A59\x07`\x02\x02\u0A57\u0A59\x07t\x02\x02\u0A58\u0A55" +
        "\x03\x02\x02\x02\u0A58\u0A56\x03\x02\x02\x02\u0A58\u0A57\x03\x02\x02\x02" +
        "\u0A59\u0A5A\x03\x02\x02\x02\u0A5A\u0A58\x03\x02\x02\x02\u0A5A\u0A5B\x03" +
        "\x02\x02\x02\u0A5B\u0A5C\x03\x02\x02\x02\u0A5C\u0A5E\x07_\x02\x02\u0A5D" +
        "\u0A5F\x05\u0102\x82\x02\u0A5E\u0A5D\x03\x02\x02\x02\u0A5E\u0A5F\x03\x02" +
        "\x02\x02\u0A5F\u0101\x03\x02\x02\x02\u0A60\u0A64\x07\x90\x02\x02\u0A61" +
        "\u0A65\x05\u011C\x8F\x02\u0A62\u0A65\x07`\x02\x02\u0A63";
    bitmarkParser._serializedATNSegment5 = "\u0A65\x07t\x02\x02\u0A64\u0A61\x03\x02\x02\x02\u0A64\u0A62\x03\x02\x02" +
        "\x02\u0A64\u0A63\x03\x02\x02\x02\u0A65\u0A66\x03\x02\x02\x02\u0A66\u0A64" +
        "\x03\x02\x02\x02\u0A66\u0A67\x03\x02\x02\x02\u0A67\u0A68\x03\x02\x02\x02" +
        "\u0A68\u0A69\x07_\x02\x02\u0A69\u0103\x03\x02\x02\x02\u0A6A\u0A6C\x07" +
        "V\x02\x02\u0A6B\u0A6D\x05\u011C\x8F\x02\u0A6C\u0A6B\x03\x02\x02\x02\u0A6C" +
        "\u0A6D\x03\x02\x02\x02\u0A6D\u0A83\x03\x02\x02\x02\u0A6E\u0A78\x05\u011C" +
        "\x8F\x02\u0A6F\u0A73\x07t\x02\x02\u0A70\u0A72\x07\x04\x02\x02\u0A71\u0A70" +
        "\x03\x02\x02\x02\u0A72\u0A75\x03\x02\x02\x02\u0A73\u0A71\x03\x02\x02\x02" +
        "\u0A73\u0A74\x03\x02\x02\x02\u0A74\u0A77\x03\x02\x02\x02\u0A75\u0A73\x03" +
        "\x02\x02\x02\u0A76\u0A6F\x03\x02\x02\x02\u0A77\u0A7A\x03\x02\x02\x02\u0A78" +
        "\u0A76\x03\x02\x02\x02\u0A78\u0A79\x03\x02\x02\x02\u0A79\u0A7E\x03\x02" +
        "\x02\x02\u0A7A\u0A78\x03\x02\x02\x02\u0A7B\u0A7D\x07t\x02\x02\u0A7C\u0A7B" +
        "\x03\x02\x02\x02\u0A7D\u0A80\x03\x02\x02\x02\u0A7E\u0A7C\x03\x02\x02\x02" +
        "\u0A7E\u0A7F\x03\x02\x02\x02\u0A7F\u0A82\x03\x02\x02\x02\u0A80\u0A7E\x03" +
        "\x02\x02\x02\u0A81\u0A6E\x03\x02\x02\x02\u0A82\u0A85\x03\x02\x02\x02\u0A83" +
        "\u0A81\x03\x02\x02\x02\u0A83\u0A84\x03\x02\x02\x02\u0A84\u0A86\x03\x02" +
        "\x02\x02\u0A85\u0A83\x03\x02\x02\x02\u0A86\u0A8D\x07_\x02\x02\u0A87\u0A89" +
        "\x07V\x02\x02\u0A88\u0A8A\x05\u011C\x8F\x02\u0A89\u0A88\x03\x02\x02\x02" +
        "\u0A89\u0A8A\x03\x02\x02\x02\u0A8A\u0A8B\x03\x02\x02\x02\u0A8B\u0A8D\x07" +
        "\x02\x02\x03\u0A8C\u0A6A\x03\x02\x02\x02\u0A8C\u0A87\x03\x02\x02\x02\u0A8D" +
        "\u0105\x03\x02\x02\x02\u0A8E\u0A90\x07W\x02\x02\u0A8F\u0A91\n\x17\x02" +
        "\x02\u0A90\u0A8F\x03\x02\x02\x02\u0A91\u0A92\x03\x02\x02\x02\u0A92\u0A90" +
        "\x03\x02\x02\x02\u0A92\u0A93\x03\x02\x02\x02\u0A93\u0A94\x03\x02\x02\x02" +
        "\u0A94\u0A95\x07_\x02\x02\u0A95\u0107\x03\x02\x02\x02\u0A96\u0A99\x07" +
        "]\x02\x02\u0A97\u0A9A\x05\u011C\x8F\x02\u0A98\u0A9A\x07t\x02\x02\u0A99" +
        "\u0A97\x03\x02\x02\x02\u0A99\u0A98\x03\x02\x02\x02\u0A9A\u0A9B\x03\x02" +
        "\x02\x02\u0A9B\u0A99\x03\x02\x02\x02\u0A9B\u0A9C\x03\x02\x02\x02\u0A9C" +
        "\u0A9D\x03\x02\x02\x02\u0A9D\u0AA3\x07_\x02\x02\u0A9E\u0A9F\x07]\x02\x02" +
        "\u0A9F\u0AA0\x05\u011C\x8F\x02\u0AA0\u0AA1\x07\x02\x02\x03\u0AA1\u0AA3" +
        "\x03\x02\x02\x02\u0AA2\u0A96\x03\x02\x02\x02\u0AA2\u0A9E\x03\x02\x02\x02" +
        "\u0AA3\u0109\x03\x02\x02\x02\u0AA4\u0AA5\x07\x83\x02\x02\u0AA5\u0AA6\x05" +
        "\u011C\x8F\x02\u0AA6\u0AA7\x07_\x02\x02\u0AA7\u0AAD\x03\x02\x02\x02\u0AA8" +
        "\u0AA9\x07\x84\x02\x02\u0AA9\u0AAA\x05\u011C\x8F\x02\u0AAA\u0AAB\x07_" +
        "\x02\x02\u0AAB\u0AAD\x03\x02\x02\x02\u0AAC\u0AA4\x03\x02\x02\x02\u0AAC" +
        "\u0AA8\x03\x02\x02\x02\u0AAD\u010B\x03\x02\x02\x02\u0AAE\u0AAF\x07{\x02" +
        "\x02\u0AAF\u0AB0\x07`\x02\x02\u0AB0\u0AB1\x07r\x02\x02\u0AB1\u0AB8\x07" +
        "_\x02\x02\u0AB2\u0AB3\x07{\x02\x02\u0AB3\u0AB4\x07`\x02\x02\u0AB4\u0AB5" +
        "\x05\u011C\x8F\x02\u0AB5\u0AB6\x07_\x02\x02\u0AB6\u0AB8\x03\x02\x02\x02" +
        "\u0AB7\u0AAE\x03\x02\x02\x02\u0AB7\u0AB2\x03\x02\x02\x02\u0AB8\u010D\x03" +
        "\x02\x02\x02\u0AB9\u0ABA\x07\x8E\x02\x02\u0ABA\u0ABB\x05\u011C\x8F\x02" +
        "\u0ABB\u0ABC\x07_\x02\x02\u0ABC\u010F\x03\x02\x02\x02\u0ABD\u0ABE\x07" +
        "\x8F\x02\x02\u0ABE\u0ABF\x05\u011C\x8F\x02\u0ABF\u0AC0\x07_\x02\x02\u0AC0" +
        "\u0111\x03\x02\x02\x02\u0AC1\u0ACB\x05\u0114\x8B\x02\u0AC2\u0AC4\x07t" +
        "\x02\x02\u0AC3\u0AC2\x03\x02\x02\x02\u0AC4\u0AC7\x03\x02\x02\x02\u0AC5" +
        "\u0AC3\x03\x02\x02\x02\u0AC5\u0AC6\x03\x02\x02\x02\u0AC6\u0AC8\x03\x02" +
        "\x02\x02\u0AC7\u0AC5\x03\x02\x02\x02\u0AC8\u0ACA\x05\u0114\x8B\x02\u0AC9" +
        "\u0AC5\x03\x02\x02\x02\u0ACA\u0ACD\x03\x02\x02\x02\u0ACB\u0AC9\x03\x02" +
        "\x02\x02\u0ACB\u0ACC\x03\x02\x02\x02\u0ACC\u0113\x03\x02\x02\x02\u0ACD" +
        "\u0ACB\x03\x02\x02\x02\u0ACE\u0ACF\x07X\x02\x02\u0ACF\u0AD0\x05\u011C" +
        "\x8F\x02\u0AD0\u0AD1\t\x18\x02\x02\u0AD1\u0AD7\x05\u011C\x8F\x02\u0AD2" +
        "\u0AD6\x07t\x02\x02\u0AD3\u0AD6\x07`\x02\x02\u0AD4\u0AD6\x05\u011C\x8F" +
        "\x02\u0AD5\u0AD2\x03\x02\x02\x02\u0AD5\u0AD3\x03\x02\x02\x02\u0AD5\u0AD4" +
        "\x03\x02\x02\x02\u0AD6\u0AD9\x03\x02\x02\x02\u0AD7\u0AD5\x03\x02\x02\x02" +
        "\u0AD7\u0AD8\x03\x02\x02\x02\u0AD8\u0ADA\x03\x02\x02\x02\u0AD9\u0AD7\x03" +
        "\x02\x02\x02\u0ADA\u0ADB\x07_\x02\x02\u0ADB\u0AE5\x03\x02\x02\x02\u0ADC" +
        "\u0AE0\x07\x8C\x02\x02\u0ADD\u0ADF\v\x02\x02\x02\u0ADE\u0ADD\x03\x02\x02" +
        "\x02\u0ADF\u0AE2\x03\x02\x02\x02\u0AE0\u0AE1\x03\x02\x02\x02\u0AE0\u0ADE" +
        "\x03\x02\x02\x02\u0AE1\u0AE3\x03\x02\x02\x02\u0AE2\u0AE0\x03\x02\x02\x02" +
        "\u0AE3\u0AE5\x07_\x02\x02\u0AE4\u0ACE\x03\x02\x02\x02\u0AE4\u0ADC\x03" +
        "\x02\x02\x02\u0AE5\u0115\x03\x02\x02\x02\u0AE6\u0AEA\x07O\x02\x02\u0AE7" +
        "\u0AEB\x05\u011C\x8F\x02\u0AE8\u0AEB\x07`\x02\x02\u0AE9\u0AEB\x07t\x02" +
        "\x02\u0AEA\u0AE7\x03\x02\x02\x02\u0AEA\u0AE8\x03\x02\x02\x02\u0AEA\u0AE9" +
        "\x03\x02\x02\x02\u0AEB\u0AEC\x03\x02\x02\x02\u0AEC\u0AEA\x03\x02\x02\x02" +
        "\u0AEC\u0AED\x03\x02\x02\x02\u0AED\u0AEE\x03\x02\x02\x02\u0AEE\u0AFA\x07" +
        "_\x02\x02\u0AEF\u0AF5\x07O\x02\x02\u0AF0\u0AF4\x05\u011C\x8F\x02\u0AF1" +
        "\u0AF4\x07`\x02\x02\u0AF2\u0AF4\x07t\x02\x02\u0AF3\u0AF0\x03\x02\x02\x02" +
        "\u0AF3\u0AF1\x03\x02\x02\x02\u0AF3\u0AF2\x03\x02\x02\x02\u0AF4\u0AF7\x03" +
        "\x02\x02\x02\u0AF5\u0AF3\x03\x02\x02\x02\u0AF5\u0AF6\x03\x02\x02\x02\u0AF6" +
        "\u0AF8\x03\x02\x02\x02\u0AF7\u0AF5\x03\x02\x02\x02\u0AF8\u0AFA\x07\x02" +
        "\x02\x03\u0AF9\u0AE6\x03\x02\x02\x02\u0AF9\u0AEF\x03\x02\x02\x02\u0AFA" +
        "\u0117\x03\x02\x02\x02\u0AFB\u0AFD\x07T\x02\x02\u0AFC\u0AFE\x05\u011C" +
        "\x8F\x02\u0AFD\u0AFC\x03\x02\x02\x02\u0AFD\u0AFE\x03\x02\x02\x02\u0AFE" +
        "\u0AFF\x03\x02\x02\x02\u0AFF\u0B00\x07_\x02\x02\u0B00\u0119\x03\x02\x02" +
        "\x02\u0B01\u0B03\x05\u011C\x8F\x02\u0B02\u0B04\x07t\x02\x02\u0B03\u0B02" +
        "\x03\x02\x02\x02\u0B03\u0B04\x03\x02\x02\x02\u0B04\u0B06\x03\x02\x02\x02" +
        "\u0B05\u0B01\x03\x02\x02\x02\u0B06\u0B07\x03\x02\x02\x02\u0B07\u0B05\x03" +
        "\x02\x02\x02\u0B07\u0B08\x03\x02\x02\x02\u0B08\u011B\x03\x02\x02\x02\u0B09" +
        "\u0B10\x07s\x02\x02\u0B0A\u0B0C\x07\x04\x02\x02\u0B0B\u0B0A\x03\x02\x02" +
        "\x02\u0B0C\u0B0D\x03\x02\x02\x02\u0B0D\u0B0B\x03\x02\x02\x02\u0B0D\u0B0E" +
        "\x03\x02\x02\x02\u0B0E\u0B0F\x03\x02\x02\x02\u0B0F\u0B11\x07r\x02\x02" +
        "\u0B10\u0B0B\x03\x02\x02\x02\u0B10\u0B11\x03\x02\x02\x02\u0B11\u0B38\x03" +
        "\x02\x02\x02\u0B12\u0B19\x05\u0126\x94\x02\u0B13\u0B15\x07\x04\x02\x02" +
        "\u0B14\u0B13\x03\x02\x02\x02\u0B15\u0B16\x03\x02\x02\x02\u0B16\u0B14\x03" +
        "\x02\x02\x02\u0B16\u0B17\x03\x02\x02\x02\u0B17\u0B18\x03\x02\x02\x02\u0B18" +
        "\u0B1A\x07r\x02\x02\u0B19\u0B14\x03\x02\x02\x02\u0B19\u0B1A\x03\x02\x02" +
        "\x02\u0B1A\u0B38\x03\x02\x02\x02\u0B1B\u0B38\x07r\x02\x02\u0B1C\u0B1D" +
        "\x07[\x02\x02\u0B1D\u0B1E\x05\u011C\x8F\x02\u0B1E\u0B1F\x07_\x02\x02\u0B1F" +
        "\u0B38\x03\x02\x02\x02\u0B20\u0B22\x07\x04\x02\x02\u0B21\u0B20\x03\x02" +
        "\x02\x02\u0B22\u0B25\x03\x02\x02\x02\u0B23\u0B21\x03\x02\x02\x02\u0B23" +
        "\u0B24\x03\x02\x02\x02\u0B24\u0B26\x03\x02\x02\x02\u0B25\u0B23\x03\x02" +
        "\x02\x02\u0B26\u0B2A\x07`\x02\x02\u0B27\u0B29\x07\x04\x02\x02\u0B28\u0B27" +
        "\x03\x02\x02\x02\u0B29\u0B2C\x03\x02\x02\x02\u0B2A\u0B28\x03\x02\x02\x02" +
        "\u0B2A\u0B2B\x03\x02\x02\x02\u0B2B\u0B38\x03\x02\x02\x02\u0B2C\u0B2A\x03" +
        "\x02\x02\x02\u0B2D\u0B31\x07a\x02\x02\u0B2E\u0B30\x07\x04\x02\x02\u0B2F" +
        "\u0B2E\x03\x02\x02\x02\u0B30\u0B33\x03\x02\x02\x02\u0B31\u0B2F\x03\x02" +
        "\x02\x02\u0B31\u0B32\x03\x02\x02\x02\u0B32\u0B38\x03\x02\x02\x02\u0B33" +
        "\u0B31\x03\x02\x02\x02\u0B34\u0B38\x07i\x02\x02\u0B35\u0B38\x07\xCE\x02" +
        "\x02\u0B36\u0B38\x05\u0120\x91\x02\u0B37\u0B09\x03\x02\x02\x02\u0B37\u0B12" +
        "\x03\x02\x02\x02\u0B37\u0B1B\x03\x02\x02\x02\u0B37\u0B1C\x03\x02\x02\x02" +
        "\u0B37\u0B23\x03\x02\x02\x02\u0B37\u0B2D\x03\x02\x02\x02\u0B37\u0B34\x03" +
        "\x02\x02\x02\u0B37\u0B35\x03\x02\x02\x02\u0B37\u0B36\x03\x02\x02\x02\u0B38" +
        "\u011D\x03\x02\x02\x02\u0B39\u0B3A\x07o\x02\x02\u0B3A\u011F\x03\x02\x02" +
        "\x02\u0B3B\u0B3D\x07Q\x02\x02\u0B3C\u0B3E\x05\u011C\x8F\x02\u0B3D\u0B3C" +
        "\x03\x02\x02\x02\u0B3E\u0B3F\x03\x02\x02\x02\u0B3F\u0B3D\x03\x02\x02\x02" +
        "\u0B3F\u0B40\x03\x02\x02\x02\u0B40\u0B42\x03\x02\x02\x02\u0B41\u0B43\x07" +
        "_\x02\x02\u0B42\u0B41\x03\x02\x02\x02\u0B42\u0B43\x03\x02\x02\x02\u0B43" +
        "\u0121\x03\x02\x02\x02\u0B44\u0B45\x07_\x02\x02\u0B45\u0123\x03\x02\x02" +
        "\x02\u0B46\u0B47\t\x19\x02\x02\u0B47\u0125\x03\x02\x02\x02\u0B48\u0B64" +
        "\x05\u012A\x96\x02\u0B49\u0B64\x07a\x02\x02\u0B4A\u0B4B\x07e\x02\x02\u0B4B" +
        "\u0B64\n\x1A\x02\x02\u0B4C\u0B4D\x07f\x02\x02\u0B4D\u0B64\n\x1B\x02\x02" +
        "\u0B4E\u0B64\x07h\x02\x02\u0B4F\u0B64\x07g\x02\x02\u0B50\u0B64\x07\x98" +
        "\x02\x02\u0B51\u0B64\x07\xAD\x02\x02\u0B52\u0B64\x07\x99\x02\x02\u0B53" +
        "\u0B64\x07\xAE\x02\x02\u0B54\u0B64\x07\x9B\x02\x02\u0B55\u0B64\x07\xB0" +
        "\x02\x02\u0B56\u0B64\x07\x94\x02\x02\u0B57\u0B64\x07\xAB\x02\x02\u0B58" +
        "\u0B64\x07\x93\x02\x02\u0B59\u0B64\x07\xAA\x02\x02\u0B5A\u0B64\x07\x97" +
        "\x02\x02\u0B5B\u0B64\x07\xAC\x02\x02\u0B5C\u0B64\x07\x9A\x02\x02\u0B5D" +
        "\u0B64\x07\xAF\x02\x02\u0B5E\u0B64\x07\x9C\x02\x02\u0B5F\u0B64\x07\xB1" +
        "\x02\x02\u0B60\u0B64\x07\xBA\x02\x02\u0B61\u0B64\x07\xBB\x02\x02\u0B62" +
        "\u0B64\x07n\x02\x02\u0B63\u0B48\x03\x02\x02\x02\u0B63\u0B49\x03\x02\x02" +
        "\x02\u0B63\u0B4A\x03\x02\x02\x02\u0B63\u0B4C\x03\x02\x02\x02\u0B63\u0B4E" +
        "\x03\x02\x02\x02\u0B63\u0B4F\x03\x02\x02\x02\u0B63\u0B50\x03\x02\x02\x02" +
        "\u0B63\u0B51\x03\x02\x02\x02\u0B63\u0B52\x03\x02\x02\x02\u0B63\u0B53\x03" +
        "\x02\x02\x02\u0B63\u0B54\x03\x02\x02\x02\u0B63\u0B55\x03\x02\x02\x02\u0B63" +
        "\u0B56\x03\x02\x02\x02\u0B63\u0B57\x03\x02\x02\x02\u0B63\u0B58\x03\x02" +
        "\x02\x02\u0B63\u0B59\x03\x02\x02\x02\u0B63\u0B5A\x03\x02\x02\x02\u0B63" +
        "\u0B5B\x03\x02\x02\x02\u0B63\u0B5C\x03\x02\x02\x02\u0B63\u0B5D\x03\x02" +
        "\x02\x02\u0B63\u0B5E\x03\x02\x02\x02\u0B63\u0B5F\x03\x02\x02\x02\u0B63" +
        "\u0B60\x03\x02\x02\x02\u0B63\u0B61\x03\x02\x02\x02\u0B63\u0B62\x03\x02" +
        "\x02\x02\u0B64\u0B65\x03\x02\x02\x02\u0B65\u0B63\x03\x02\x02\x02\u0B65" +
        "\u0B66\x03\x02\x02\x02\u0B66\u0127\x03\x02\x02\x02\u0B67\u0B68\x07\x04" +
        "\x02\x02\u0B68\u0129\x03\x02\x02\x02\u0B69\u0B6A\x07u\x02\x02\u0B6A\u012B" +
        "\x03\x02\x02\x02\u0196\u0130\u0136\u013B\u0140\u0147\u018B\u018F\u0195" +
        "\u019B\u019F\u01A5\u01AB\u01B1\u01B7\u01BC\u01C3\u01CA\u01D1\u01D7\u01DD" +
        "\u01E5\u01EE\u01F2\u01FB\u01FD\u0202\u0208\u0211\u0213\u0218\u021E\u0227" +
        "\u022E\u0233\u023B\u0242\u0247\u024F\u0256\u025B\u0263\u026A\u026F\u0277" +
        "\u027E\u0283\u028B\u0292\u0297\u029F\u02A6\u02AB\u02B3\u02BA\u02BF\u02C7" +
        "\u02CE\u02D3\u02DB\u02E2\u02E7\u02EF\u02F6\u02FB\u0303\u030A\u030F\u0317" +
        "\u031E\u0323\u032B\u0332\u0337\u033F\u0346\u034B\u0353\u035A\u035F\u0380" +
        "\u0388\u038A\u0391\u0396\u039C\u03A2\u03A7\u03AD\u03B2\u03B8\u03C4\u03C9" +
        "\u03CF\u03D5\u03DB\u03E2\u03E8\u03EB\u03EF\u03F3\u03F5\u0405\u040A\u0410" +
        "\u0416\u041D\u0423\u0426\u042C\u0435\u043A\u0442\u0447\u044C\u0452\u0459" +
        "\u045F\u0462\u0468\u046D\u046F\u0476\u047D\u0484\u048C\u0491\u0497\u049E" +
        "\u04A4\u04A7\u04B1\u04B6\u04BC\u04C3\u04C9\u04CC\u04D6\u04DB\u04E1\u04E8" +
        "\u04EE\u04F1\u04FB\u0500\u0506\u050D\u0513\u0516\u051E\u0525\u052A\u052E" +
        "\u0533\u053A\u0540\u0543\u054B\u0551\u0556\u055A\u055F\u0566\u056C\u056F" +
        "\u0577\u057E\u0583\u058B\u0592\u0597\u059F\u05A6\u05AB\u05B3\u05BA\u05BF" +
        "\u05C7\u05CE\u05D3\u05DB\u05E2\u05E7\u05EF\u05F6\u05FB\u0603\u060A\u060F" +
        "\u0617\u061E\u0623\u062B\u0632\u0637\u063F\u0646\u064B\u0653\u065A\u065F" +
        "\u0667\u066E\u0673\u067B\u0682\u0687\u068F\u0696\u069B\u06A3\u06AA\u06AF" +
        "\u06B7\u06BE\u06C3\u06CB\u06D2\u06D7\u06DF\u06E6\u06EB\u06F3\u06FA\u06FF" +
        "\u0707\u070E\u0713\u071B\u0722\u0727\u072F\u0736\u073B\u0743\u074A\u074F" +
        "\u075B\u0760\u0766\u076D\u0773\u0776\u077F\u0781\u0789\u0790\u0795\u079E" +
        "\u07A2\u07A8\u07AF\u07B5\u07B8\u07BE\u07C6\u07CD\u07D2\u07D7\u07DC\u07E2" +
        "\u07E6\u07F0\u07F7\u07FC\u0805\u0809\u0813\u081A\u081F\u0828\u082C\u0836" +
        "\u083D\u0842\u084B\u084F\u0859\u0860\u0865\u086D\u0873\u0877\u087D\u0884" +
        "\u088A\u088D\u0892\u089B\u08A0\u08A2\u08B0\u08B5\u08B9\u08BD\u08C0\u08C5" +
        "\u08DC\u08E1\u08E3\u08ED\u08F7\u0901\u0907\u090E\u0914\u091C\u0926\u0931" +
        "\u0937\u093C\u0943\u094C\u0950\u0954\u0957\u0966\u096A\u0979\u097D\u0983" +
        "\u098E\u0993\u0998\u099A\u099F\u09A4\u09A6\u09AB\u09B1\u09B6\u09B8\u09C3" +
        "\u09C7\u09D4\u09D8\u09DE\u09E0\u09E7\u09EB\u09ED\u09F3\u09F5\u09FC\u0A01" +
        "\u0A04\u0A0A\u0A0D\u0A11\u0A18\u0A1D\u0A23\u0A28\u0A30\u0A32\u0A36\u0A3D" +
        "\u0A3F\u0A48\u0A4A\u0A4E\u0A58\u0A5A\u0A5E\u0A64\u0A66\u0A6C\u0A73\u0A78" +
        "\u0A7E\u0A83\u0A89\u0A8C\u0A92\u0A99\u0A9B\u0AA2\u0AAC\u0AB7\u0AC5\u0ACB" +
        "\u0AD5\u0AD7\u0AE0\u0AE4\u0AEA\u0AEC\u0AF3\u0AF5\u0AF9\u0AFD\u0B03\u0B07" +
        "\u0B0D\u0B10\u0B16\u0B19\u0B23\u0B2A\u0B31\u0B37\u0B3F\u0B42\u0B63\u0B65";
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
exports.bitmarkParser = bitmarkParser;
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.BitmarkContext = BitmarkContext;
class Bitmark_Context extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bitmark_Context = Bitmark_Context;
class BitContext extends ParserRuleContext_1.ParserRuleContext {
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
    take_audio() {
        return this.tryGetRuleContext(0, Take_audioContext);
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
    sample_solution() {
        return this.tryGetRuleContext(0, Sample_solutionContext);
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
exports.BitContext = BitContext;
class BookContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.BookContext = BookContext;
class ChapterContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ChapterContext = ChapterContext;
class TocContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.TocContext = TocContext;
class SummaryContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.SummaryContext = SummaryContext;
class Internal_linkContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Internal_linkContext = Internal_linkContext;
class Bit_aliasContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bit_aliasContext = Bit_aliasContext;
class Title_etcContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Title_etcContext = Title_etcContext;
class Group_bornContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Group_bornContext = Group_bornContext;
class Group_diedContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Group_diedContext = Group_diedContext;
class Learning_path_ltiContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_ltiContext = Learning_path_ltiContext;
class Learning_path_stepContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_stepContext = Learning_path_stepContext;
class Learning_path_bookContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_bookContext = Learning_path_bookContext;
class Learning_path_signContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_signContext = Learning_path_signContext;
class Learning_path_video_callContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_video_callContext = Learning_path_video_callContext;
class Learning_path_learning_goalContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_learning_goalContext = Learning_path_learning_goalContext;
class Learning_path_closingContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_closingContext = Learning_path_closingContext;
class Learning_path_feedbackContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_feedbackContext = Learning_path_feedbackContext;
class Learning_path_bot_trainingContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_bot_trainingContext = Learning_path_bot_trainingContext;
class Learning_path_external_linkContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_external_linkContext = Learning_path_external_linkContext;
class Learning_path_classroom_trainingContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_classroom_trainingContext = Learning_path_classroom_trainingContext;
class Learning_path_classroom_eventContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Learning_path_classroom_eventContext = Learning_path_classroom_eventContext;
class Bot_action_sendContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bot_action_sendContext = Bot_action_sendContext;
class Bot_action_announceContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bot_action_announceContext = Bot_action_announceContext;
class Bot_action_saveContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bot_action_saveContext = Bot_action_saveContext;
class Bot_action_remindContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bot_action_remindContext = Bot_action_remindContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.BitElemContext = BitElemContext;
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
exports.GapContext = GapContext;
class Single_gapContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Single_gapContext = Single_gapContext;
class Choice_plusContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Choice_plusContext = Choice_plusContext;
class Choice_minusContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Choice_minusContext = Choice_minusContext;
class Choice_starContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Choice_starContext = Choice_starContext;
class EssayContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.EssayContext = EssayContext;
class Ml_exampleContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Ml_exampleContext = Ml_exampleContext;
class PartansContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.PartansContext = PartansContext;
class ResourceContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ResourceContext = ResourceContext;
class CorrectionContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.CorrectionContext = CorrectionContext;
class CorrsContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.CorrsContext = CorrsContext;
class Mark_Context extends ParserRuleContext_1.ParserRuleContext {
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
exports.Mark_Context = Mark_Context;
class Mark_textContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Mark_textContext = Mark_textContext;
class Mark_colorContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Mark_colorContext = Mark_colorContext;
class Document_uploadContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Document_uploadContext = Document_uploadContext;
class Take_audioContext extends ParserRuleContext_1.ParserRuleContext {
    BitTakeAudio() { return this.getToken(bitmarkParser.BitTakeAudio, 0); }
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
    get ruleIndex() { return bitmarkParser.RULE_take_audio; }
    // @Override
    enterRule(listener) {
        if (listener.enterTake_audio) {
            listener.enterTake_audio(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTake_audio) {
            listener.exitTake_audio(this);
        }
    }
}
exports.Take_audioContext = Take_audioContext;
class Take_pictureContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Take_pictureContext = Take_pictureContext;
class Record_audioContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Record_audioContext = Record_audioContext;
class Preparation_noteContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Preparation_noteContext = Preparation_noteContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.AssignmentContext = AssignmentContext;
class ArticleContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ArticleContext = ArticleContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.StatementContext = StatementContext;
class DetailsContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.DetailsContext = DetailsContext;
class Sample_solutionContext extends ParserRuleContext_1.ParserRuleContext {
    BitSampleSolution() { return this.getToken(bitmarkParser.BitSampleSolution, 0); }
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
    get ruleIndex() { return bitmarkParser.RULE_sample_solution; }
    // @Override
    enterRule(listener) {
        if (listener.enterSample_solution) {
            listener.enterSample_solution(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSample_solution) {
            listener.exitSample_solution(this);
        }
    }
}
exports.Sample_solutionContext = Sample_solutionContext;
class ButtoncopytextContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ButtoncopytextContext = ButtoncopytextContext;
class WbtcontinueContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.WbtcontinueContext = WbtcontinueContext;
class LearningpathdetailsContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.LearningpathdetailsContext = LearningpathdetailsContext;
class PageContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.PageContext = PageContext;
class NoteContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.NoteContext = NoteContext;
class InfoContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.InfoContext = InfoContext;
class WarningContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.WarningContext = WarningContext;
class RemarkContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.RemarkContext = RemarkContext;
class HelpContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.HelpContext = HelpContext;
class DangerContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.DangerContext = DangerContext;
class BugContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.BugContext = BugContext;
class SidenoteContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.SidenoteContext = SidenoteContext;
class StickynoteContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.StickynoteContext = StickynoteContext;
class QuoteContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.QuoteContext = QuoteContext;
class FootnoteContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.FootnoteContext = FootnoteContext;
class HintbitContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.HintbitContext = HintbitContext;
class ExamplebitContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ExamplebitContext = ExamplebitContext;
class Vendor_padlet_embedContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Vendor_padlet_embedContext = Vendor_padlet_embedContext;
class ScormContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ScormContext = ScormContext;
class MessageContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.MessageContext = MessageContext;
class Bot_interviewContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bot_interviewContext = Bot_interviewContext;
class Bot_choiceContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bot_choiceContext = Bot_choiceContext;
class RatingContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.RatingContext = RatingContext;
class Bullet_itemContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bullet_itemContext = Bullet_itemContext;
class SurveyContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.SurveyContext = SurveyContext;
class Survey_1Context extends ParserRuleContext_1.ParserRuleContext {
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
exports.Survey_1Context = Survey_1Context;
class Survey_anonymousContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Survey_anonymousContext = Survey_anonymousContext;
class Survey_anonymous_1Context extends ParserRuleContext_1.ParserRuleContext {
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
exports.Survey_anonymous_1Context = Survey_anonymous_1Context;
class Self_assessmentContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Self_assessmentContext = Self_assessmentContext;
class Self_assess_s_and_wContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Self_assess_s_and_wContext = Self_assess_s_and_wContext;
class AtpointContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.FormatContext = FormatContext;
class Resource_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Resource_format_extraContext = Resource_format_extraContext;
class Image_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Image_formatContext = Image_formatContext;
class Video_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Video_formatContext = Video_formatContext;
class Article_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Article_formatContext = Article_formatContext;
class Document_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Document_formatContext = Document_formatContext;
class App_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.App_formatContext = App_formatContext;
class Website_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Website_formatContext = Website_formatContext;
class Stillimagefilm_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Stillimagefilm_formatContext = Stillimagefilm_formatContext;
class Op_article_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_article_formatContext = Op_article_formatContext;
class Op_document_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_document_formatContext = Op_document_formatContext;
class Op_app_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_app_formatContext = Op_app_formatContext;
class Op_website_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_website_formatContext = Op_website_formatContext;
class Op_video_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_video_formatContext = Op_video_formatContext;
class Op_stillimagefilm_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_stillimagefilm_formatContext = Op_stillimagefilm_formatContext;
class ArticlebitContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ArticlebitContext = ArticlebitContext;
class DocumentbitContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.DocumentbitContext = DocumentbitContext;
class WebsitebitContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.WebsitebitContext = WebsitebitContext;
class AppbitContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.StillimagefilmbitContext = StillimagefilmbitContext;
class Stillimg_oneContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.VideobitContext = VideobitContext;
class Video_oneContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ImagebitContext = ImagebitContext;
class Image_oneContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Image_oneContext = Image_oneContext;
class Op_image_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_image_formatContext = Op_image_formatContext;
class Image_chainedContext extends ParserRuleContext_1.ParserRuleContext {
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
    OpAtSearch() { return this.tryGetToken(bitmarkParser.OpAtSearch, 0); }
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
exports.Image_chainedContext = Image_chainedContext;
class Image_chained4matchContext extends ParserRuleContext_1.ParserRuleContext {
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
    OpAtSearch() { return this.tryGetToken(bitmarkParser.OpAtSearch, 0); }
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
exports.AudiobitContext = AudiobitContext;
class Audio_oneContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Audio_oneContext = Audio_oneContext;
class Audio_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Audio_formatContext = Audio_formatContext;
class Op_audio_formatContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Op_audio_formatContext = Op_audio_formatContext;
class Resource_chainedContext extends ParserRuleContext_1.ParserRuleContext {
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
    OpAtSearch() { return this.tryGetToken(bitmarkParser.OpAtSearch, 0); }
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
exports.Resource_chainedContext = Resource_chainedContext;
class TelephoneContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.TelephoneContext = TelephoneContext;
class UrlContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.UrlContext = UrlContext;
class ItemContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ItemContext = ItemContext;
class LeadContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.LeadContext = LeadContext;
class AnglerefContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.AnglerefContext = AnglerefContext;
class ExampleContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ExampleContext = ExampleContext;
class Bracketed_textContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bracketed_textContext = Bracketed_textContext;
class ReferenceContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ReferenceContext = ReferenceContext;
class ProgressContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ProgressContext = ProgressContext;
class DatepropContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.DatepropContext = DatepropContext;
class Dateprop_chainedContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Dateprop_chainedContext = Dateprop_chainedContext;
class InstructionContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.InstructionContext = InstructionContext;
class HintContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.HintContext = HintContext;
class TitleContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.TitleContext = TitleContext;
class Bool_labelContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bool_labelContext = Bool_labelContext;
class Progress_pointsContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Progress_pointsContext = Progress_pointsContext;
class IstrackedContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.IstrackedContext = IstrackedContext;
class IsinfoonlyContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.AtdefContext = AtdefContext;
class Atdef_Context extends ParserRuleContext_1.ParserRuleContext {
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
exports.Atdef_Context = Atdef_Context;
class DollaransContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.DollaransContext = DollaransContext;
class AnchorContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.LinesContext = LinesContext;
class S_and_wContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.S_and_wContext = S_and_wContext;
class DclinesContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.DclinesContext = DclinesContext;
class Bracket_escapedContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.Bracket_escapedContext = Bracket_escapedContext;
class ClnspContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.ClnspContext = ClnspContext;
class SsplContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.SsplContext = SsplContext;
class WordsContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.WordsContext = WordsContext;
class SpContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.SpContext = SpContext;
class SentenceContext extends ParserRuleContext_1.ParserRuleContext {
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
exports.SentenceContext = SentenceContext;
