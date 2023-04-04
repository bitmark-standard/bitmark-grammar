"use strict";
// Generated from ./Choice/choiceParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.S_and_wContext = exports.LinesContext = exports.DclinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Bullet_itemContext = exports.ResourceContext = exports.ShortansContext = exports.LongansContext = exports.Il_followContext = exports.Ml_exampleContext = exports.Inline_choicesContext = exports.Choice_headContext = exports.Headed_choicesContext = exports.Highlight_inline_choicesContext = exports.Headed_inline_choicesContext = exports.Il_choice_minusContext = exports.Il_choice_plusContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.CminusContext = exports.CplusContext = exports.ChoicesContext = exports.Single_gapContext = exports.GapContext = exports.BitElemContext = exports.Highlight_il_choiceContext = exports.Highlight_textContext = exports.Multitxt_il_choiceContext = exports.Multiple_choice_textContext = exports.Multiple_response_1Context = exports.Multiple_responseContext = exports.Multiple_choice_1Context = exports.McrmiscContext = exports.McrsepContext = exports.Multiple_choiceContext = exports.Multi_choicesContext = exports.Bitmark_Context = exports.BitmarkContext = exports.choiceParser = void 0;
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
class choiceParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(choiceParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return choiceParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "choiceParser.g4"; }
    // @Override
    get ruleNames() { return choiceParser.ruleNames; }
    // @Override
    get serializedATN() { return choiceParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, choiceParser.RULE_bitmark);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 198;
                            this.bitmark_();
                            this.state = 208;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 202;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === choiceParser.S) {
                                                {
                                                    {
                                                        this.state = 199;
                                                        this.match(choiceParser.S);
                                                    }
                                                }
                                                this.state = 204;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 205;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                }
                                this.state = 210;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 213;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.BitMultichoice1) | (1 << choiceParser.BitMultichoice) | (1 << choiceParser.BitMultiresp1) | (1 << choiceParser.BitMultiresp) | (1 << choiceParser.BitMultichoicetext) | (1 << choiceParser.BitHighlighttext))) !== 0));
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === choiceParser.NL) {
                    {
                        {
                            this.state = 215;
                            this.match(choiceParser.NL);
                        }
                    }
                    this.state = 220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 221;
                this.match(choiceParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 2, choiceParser.RULE_bitmark_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 223;
                this.multi_choices();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multi_choices() {
        let _localctx = new Multi_choicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, choiceParser.RULE_multi_choices);
        try {
            this.state = 231;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.BitMultichoice:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 225;
                        this.multiple_choice();
                    }
                    break;
                case choiceParser.BitMultichoice1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 226;
                        this.multiple_choice_1();
                    }
                    break;
                case choiceParser.BitMultiresp:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 227;
                        this.multiple_response();
                    }
                    break;
                case choiceParser.BitMultiresp1:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 228;
                        this.multiple_response_1();
                    }
                    break;
                case choiceParser.BitMultichoicetext:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 229;
                        this.multiple_choice_text();
                    }
                    break;
                case choiceParser.BitHighlighttext:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 230;
                        this.highlight_text();
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
    multiple_choice() {
        let _localctx = new Multiple_choiceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, choiceParser.RULE_multiple_choice);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this.match(choiceParser.BitMultichoice);
                this.state = 234;
                this.format();
                this.state = 235;
                this.match(choiceParser.CL);
                this.state = 237;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 236;
                                    this.match(choiceParser.NL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.DCANY - 35)) | (1 << (choiceParser.ArticleText - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)) | (1 << (choiceParser.AtReference - 35)) | (1 << (choiceParser.AtExampleWithStr - 35)) | (1 << (choiceParser.AtExamplecol - 35)) | (1 << (choiceParser.AtExamplecl - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (choiceParser.AtLabeltrue - 69)) | (1 << (choiceParser.AtLabelfalse - 69)) | (1 << (choiceParser.OpAtCopyright - 69)) | (1 << (choiceParser.OpAmpAudio - 69)) | (1 << (choiceParser.OpAmpImage - 69)) | (1 << (choiceParser.OpAmpImageZoom - 69)) | (1 << (choiceParser.OpAmpImageWAudio - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (choiceParser.OpAmpVideo - 101)) | (1 << (choiceParser.OpAmpArticle - 101)) | (1 << (choiceParser.OpAmpDocument - 101)) | (1 << (choiceParser.OpAmpApp - 101)) | (1 << (choiceParser.OpAmpWebsite - 101)) | (1 << (choiceParser.OpAmpStillImageFilm - 101)) | (1 << (choiceParser.OpAmpAudioLink - 101)) | (1 << (choiceParser.OpAmpImageLink - 101)) | (1 << (choiceParser.OpAmpVideoLink - 101)) | (1 << (choiceParser.OpAmpArticleLink - 101)) | (1 << (choiceParser.OpAmpDocumentLink - 101)) | (1 << (choiceParser.OpAmpAppLink - 101)) | (1 << (choiceParser.OpAmpWebsiteLink - 101)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 101)) | (1 << (choiceParser.OpAmpVideoEmbed - 101)) | (1 << (choiceParser.OpAmpAudioEmbed - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (choiceParser.OpAmpDocumentEmbed - 133)) | (1 << (choiceParser.OpAmpStillImageFilmEmbed - 133)) | (1 << (choiceParser.URL - 133)) | (1 << (choiceParser.LIST_LINE - 133)))) !== 0)) {
                    {
                        {
                            this.state = 241;
                            this.bitElem();
                            this.state = 245;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 242;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                }
                                this.state = 247;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                            }
                        }
                    }
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 274;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 256;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 253;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 258;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                    }
                                    this.state = 259;
                                    this.mcrsep();
                                    this.state = 267;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 263;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 260;
                                                                this.match(choiceParser.NL);
                                                            }
                                                        }
                                                    }
                                                    this.state = 265;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                }
                                                this.state = 266;
                                                this.mcrmisc();
                                            }
                                            break;
                                    }
                                    this.state = 270;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                                        {
                                            this.state = 269;
                                            this.s_and_w();
                                        }
                                    }
                                    this.state = 272;
                                    this.choices();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 276;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 280;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.HSPL:
                    case choiceParser.HSPL2:
                        {
                            this.state = 278;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.HSPL || _la === choiceParser.HSPL2)) {
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
                    case choiceParser.NL:
                        {
                            this.state = 279;
                            this.match(choiceParser.NL);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 285;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 282;
                            this.bitElem();
                            this.state = 283;
                            this.match(choiceParser.NL);
                        }
                        break;
                }
                this.state = 290;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 287;
                                this.match(choiceParser.NL);
                            }
                        }
                    }
                    this.state = 292;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                }
                this.state = 306;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 293;
                            this.resource();
                            this.state = 303;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 297;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === choiceParser.NL) {
                                                {
                                                    {
                                                        this.state = 294;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                this.state = 299;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 300;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 305;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
        this.enterRule(_localctx, 8, choiceParser.RULE_mcrsep);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 310;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.HSPL:
                    case choiceParser.HSPL2:
                        {
                            this.state = 308;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.HSPL || _la === choiceParser.HSPL2)) {
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
                    case choiceParser.NL:
                        {
                            this.state = 309;
                            this.match(choiceParser.NL);
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
    mcrmisc() {
        let _localctx = new McrmiscContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, choiceParser.RULE_mcrmisc);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.DCANY - 35)) | (1 << (choiceParser.ArticleText - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)) | (1 << (choiceParser.AtReference - 35)) | (1 << (choiceParser.AtExampleWithStr - 35)) | (1 << (choiceParser.AtExamplecol - 35)) | (1 << (choiceParser.AtExamplecl - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (choiceParser.AtLabeltrue - 69)) | (1 << (choiceParser.AtLabelfalse - 69)) | (1 << (choiceParser.OpAtCopyright - 69)) | (1 << (choiceParser.OpAmpAudio - 69)) | (1 << (choiceParser.OpAmpImage - 69)) | (1 << (choiceParser.OpAmpImageZoom - 69)) | (1 << (choiceParser.OpAmpImageWAudio - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (choiceParser.OpAmpVideo - 101)) | (1 << (choiceParser.OpAmpArticle - 101)) | (1 << (choiceParser.OpAmpDocument - 101)) | (1 << (choiceParser.OpAmpApp - 101)) | (1 << (choiceParser.OpAmpWebsite - 101)) | (1 << (choiceParser.OpAmpStillImageFilm - 101)) | (1 << (choiceParser.OpAmpAudioLink - 101)) | (1 << (choiceParser.OpAmpImageLink - 101)) | (1 << (choiceParser.OpAmpVideoLink - 101)) | (1 << (choiceParser.OpAmpArticleLink - 101)) | (1 << (choiceParser.OpAmpDocumentLink - 101)) | (1 << (choiceParser.OpAmpAppLink - 101)) | (1 << (choiceParser.OpAmpWebsiteLink - 101)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 101)) | (1 << (choiceParser.OpAmpVideoEmbed - 101)) | (1 << (choiceParser.OpAmpAudioEmbed - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (choiceParser.OpAmpDocumentEmbed - 133)) | (1 << (choiceParser.OpAmpStillImageFilmEmbed - 133)) | (1 << (choiceParser.URL - 133)) | (1 << (choiceParser.LIST_LINE - 133)))) !== 0)) {
                    {
                        {
                            this.state = 312;
                            this.bitElem();
                        }
                    }
                    this.state = 317;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 318;
                this.match(choiceParser.NL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 12, choiceParser.RULE_multiple_choice_1);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 320;
                this.match(choiceParser.BitMultichoice1);
                this.state = 321;
                this.format();
                this.state = 322;
                this.match(choiceParser.CL);
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 323;
                            this.match(choiceParser.NL);
                        }
                    }
                    this.state = 326;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === choiceParser.NL);
                this.state = 337;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 328;
                                this.bitElem();
                                this.state = 332;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === choiceParser.NL) {
                                    {
                                        {
                                            this.state = 329;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                    this.state = 334;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                    }
                    this.state = 339;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                }
                this.state = 340;
                this.choices();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 14, choiceParser.RULE_multiple_response);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.match(choiceParser.BitMultiresp);
                this.state = 343;
                this.format();
                this.state = 344;
                this.match(choiceParser.CL);
                this.state = 346;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 345;
                                    this.match(choiceParser.NL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 348;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.DCANY - 35)) | (1 << (choiceParser.ArticleText - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)) | (1 << (choiceParser.AtReference - 35)) | (1 << (choiceParser.AtExampleWithStr - 35)) | (1 << (choiceParser.AtExamplecol - 35)) | (1 << (choiceParser.AtExamplecl - 35)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (choiceParser.AtLabeltrue - 69)) | (1 << (choiceParser.AtLabelfalse - 69)) | (1 << (choiceParser.OpAtCopyright - 69)) | (1 << (choiceParser.OpAmpAudio - 69)) | (1 << (choiceParser.OpAmpImage - 69)) | (1 << (choiceParser.OpAmpImageZoom - 69)) | (1 << (choiceParser.OpAmpImageWAudio - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (choiceParser.OpAmpVideo - 101)) | (1 << (choiceParser.OpAmpArticle - 101)) | (1 << (choiceParser.OpAmpDocument - 101)) | (1 << (choiceParser.OpAmpApp - 101)) | (1 << (choiceParser.OpAmpWebsite - 101)) | (1 << (choiceParser.OpAmpStillImageFilm - 101)) | (1 << (choiceParser.OpAmpAudioLink - 101)) | (1 << (choiceParser.OpAmpImageLink - 101)) | (1 << (choiceParser.OpAmpVideoLink - 101)) | (1 << (choiceParser.OpAmpArticleLink - 101)) | (1 << (choiceParser.OpAmpDocumentLink - 101)) | (1 << (choiceParser.OpAmpAppLink - 101)) | (1 << (choiceParser.OpAmpWebsiteLink - 101)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 101)) | (1 << (choiceParser.OpAmpVideoEmbed - 101)) | (1 << (choiceParser.OpAmpAudioEmbed - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (choiceParser.OpAmpDocumentEmbed - 133)) | (1 << (choiceParser.OpAmpStillImageFilmEmbed - 133)) | (1 << (choiceParser.URL - 133)) | (1 << (choiceParser.LIST_LINE - 133)))) !== 0)) {
                    {
                        {
                            this.state = 350;
                            this.bitElem();
                            this.state = 354;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 351;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                }
                                this.state = 356;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                            }
                        }
                    }
                    this.state = 361;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 380;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 365;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 362;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 367;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                                    }
                                    this.state = 368;
                                    this.mcrsep();
                                    this.state = 376;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 372;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 369;
                                                                this.match(choiceParser.NL);
                                                            }
                                                        }
                                                    }
                                                    this.state = 374;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                                                }
                                                this.state = 375;
                                                this.mcrmisc();
                                            }
                                            break;
                                    }
                                    this.state = 378;
                                    this.choices();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 382;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 386;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                    case 1:
                        {
                            this.state = 384;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.HSPL || _la === choiceParser.HSPL2)) {
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
                    case 2:
                        {
                            this.state = 385;
                            this.match(choiceParser.NL);
                        }
                        break;
                }
                this.state = 395;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 388;
                            this.bitElem();
                            this.state = 392;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 389;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                }
                                this.state = 394;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                            }
                        }
                        break;
                }
                this.state = 400;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 397;
                                this.match(choiceParser.NL);
                            }
                        }
                    }
                    this.state = 402;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                }
                this.state = 416;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 403;
                            this.resource();
                            this.state = 413;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 407;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === choiceParser.NL) {
                                                {
                                                    {
                                                        this.state = 404;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                this.state = 409;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 410;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 415;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
    multiple_response_1() {
        let _localctx = new Multiple_response_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 16, choiceParser.RULE_multiple_response_1);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 418;
                this.match(choiceParser.BitMultiresp1);
                this.state = 419;
                this.format();
                this.state = 420;
                this.match(choiceParser.CL);
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 421;
                            this.match(choiceParser.NL);
                        }
                    }
                    this.state = 424;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === choiceParser.NL);
                this.state = 433;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 426;
                                    this.bitElem();
                                    this.state = 430;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.NL) {
                                        {
                                            {
                                                this.state = 427;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                        this.state = 432;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 435;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 437;
                this.choices();
                this.state = 441;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 438;
                                this.match(choiceParser.NL);
                            }
                        }
                    }
                    this.state = 443;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                }
                this.state = 457;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                    case 1:
                        {
                            this.state = 444;
                            this.resource();
                            this.state = 454;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 448;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === choiceParser.NL) {
                                                {
                                                    {
                                                        this.state = 445;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                this.state = 450;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 451;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 456;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
    multiple_choice_text() {
        let _localctx = new Multiple_choice_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, choiceParser.RULE_multiple_choice_text);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 459;
                this.match(choiceParser.BitMultichoicetext);
                this.state = 460;
                this.format();
                this.state = 461;
                this.match(choiceParser.CL);
                this.state = 463;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 462;
                                    this.match(choiceParser.NL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 465;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 476;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 467;
                                this.bitElem();
                                this.state = 471;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 468;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 473;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                }
                this.state = 482;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 479;
                                this.multitxt_il_choice();
                            }
                        }
                    }
                    this.state = 484;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                }
                this.state = 488;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 485;
                                this.match(choiceParser.NL);
                            }
                        }
                    }
                    this.state = 490;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                }
                this.state = 504;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                    case 1:
                        {
                            this.state = 491;
                            this.resource();
                            this.state = 501;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 495;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === choiceParser.NL) {
                                                {
                                                    {
                                                        this.state = 492;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                this.state = 497;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 498;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 503;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
    multitxt_il_choice() {
        let _localctx = new Multitxt_il_choiceContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, choiceParser.RULE_multitxt_il_choice);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 520;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 520;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 506;
                                                this.headed_inline_choices();
                                            }
                                            break;
                                        case 2:
                                            {
                                                {
                                                    this.state = 510;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === choiceParser.S) {
                                                        {
                                                            {
                                                                this.state = 507;
                                                                this.match(choiceParser.S);
                                                            }
                                                        }
                                                        this.state = 512;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 513;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 514;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 516;
                                                this._errHandler.sync(this);
                                                _alt = 1;
                                                do {
                                                    switch (_alt) {
                                                        case 1:
                                                            {
                                                                {
                                                                    this.state = 515;
                                                                    this.match(choiceParser.S);
                                                                }
                                                            }
                                                            break;
                                                        default:
                                                            throw new NoViableAltException_1.NoViableAltException(this);
                                                    }
                                                    this.state = 518;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 522;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    highlight_text() {
        let _localctx = new Highlight_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, choiceParser.RULE_highlight_text);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.match(choiceParser.BitHighlighttext);
                this.state = 525;
                this.format();
                this.state = 526;
                this.match(choiceParser.CL);
                this.state = 528;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 527;
                                    this.match(choiceParser.NL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 530;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 541;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 532;
                                this.bitElem();
                                this.state = 536;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 533;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 538;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 543;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                }
                this.state = 547;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 544;
                                this.highlight_il_choice();
                            }
                        }
                    }
                    this.state = 549;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                }
                this.state = 553;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 550;
                                this.match(choiceParser.NL);
                            }
                        }
                    }
                    this.state = 555;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                }
                this.state = 569;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 556;
                            this.resource();
                            this.state = 566;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 560;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === choiceParser.NL) {
                                                {
                                                    {
                                                        this.state = 557;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                this.state = 562;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 563;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 568;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
    highlight_il_choice() {
        let _localctx = new Highlight_il_choiceContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, choiceParser.RULE_highlight_il_choice);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 585;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 585;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 571;
                                                this.highlight_inline_choices();
                                            }
                                            break;
                                        case 2:
                                            {
                                                {
                                                    this.state = 575;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    while (_la === choiceParser.S) {
                                                        {
                                                            {
                                                                this.state = 572;
                                                                this.match(choiceParser.S);
                                                            }
                                                        }
                                                        this.state = 577;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                    }
                                                    this.state = 578;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 579;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 581;
                                                this._errHandler.sync(this);
                                                _alt = 1;
                                                do {
                                                    switch (_alt) {
                                                        case 1:
                                                            {
                                                                {
                                                                    this.state = 580;
                                                                    this.match(choiceParser.S);
                                                                }
                                                            }
                                                            break;
                                                        default:
                                                            throw new NoViableAltException_1.NoViableAltException(this);
                                                    }
                                                    this.state = 583;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                                                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 587;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 26, choiceParser.RULE_bitElem);
        try {
            this.state = 613;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 589;
                        this.match(choiceParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 590;
                        this.match(choiceParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 591;
                        this.dclines();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 592;
                        this.gap();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 593;
                        this.atdef();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 594;
                        this.reference();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 595;
                        this.item();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 596;
                        this.title();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 597;
                        this.instruction();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 598;
                        this.hint();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 599;
                        this.s_and_w();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 600;
                        this.example();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 601;
                        this.bool_label();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 602;
                        this.imagebit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 603;
                        this.audiobit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 604;
                        this.videobit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 605;
                        this.articlebit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 606;
                        this.documentbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 607;
                        this.appbit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 608;
                        this.websitebit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 609;
                        this.stillimagefilmbit();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 610;
                        this.angleref();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 611;
                        this.anchor();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 612;
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
        this.enterRule(_localctx, 28, choiceParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 615;
                this.single_gap();
                this.state = 623;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 621;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.OPU:
                                    {
                                        this.state = 616;
                                        this.single_gap();
                                    }
                                    break;
                                case choiceParser.OPB:
                                    {
                                        this.state = 617;
                                        this.instruction();
                                    }
                                    break;
                                case choiceParser.OPQ:
                                    {
                                        this.state = 618;
                                        this.hint();
                                    }
                                    break;
                                case choiceParser.OPC:
                                    {
                                        this.state = 619;
                                        this.item();
                                    }
                                    break;
                                case choiceParser.AtExampleWithStr:
                                case choiceParser.AtExamplecol:
                                case choiceParser.AtExamplecl:
                                    {
                                        this.state = 620;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 625;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 30, choiceParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 626;
                this.match(choiceParser.OPU);
                this.state = 630;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 627;
                            this.match(choiceParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 628;
                            this.match(choiceParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 635;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                    {
                        {
                            this.state = 632;
                            this.s_and_w();
                        }
                    }
                    this.state = 637;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 638;
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
    choices() {
        let _localctx = new ChoicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, choiceParser.RULE_choices);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 642;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 640;
                            this.cplus();
                        }
                        break;
                    case 2:
                        {
                            this.state = 641;
                            this.cminus();
                        }
                        break;
                }
                this.state = 659;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 645;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === choiceParser.NL) {
                                    {
                                        this.state = 644;
                                        this.match(choiceParser.NL);
                                    }
                                }
                                this.state = 650;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === choiceParser.S) {
                                    {
                                        {
                                            this.state = 647;
                                            this.match(choiceParser.S);
                                        }
                                    }
                                    this.state = 652;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 655;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 653;
                                            this.cplus();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 654;
                                            this.cminus();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 661;
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
    cplus() {
        let _localctx = new CplusContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, choiceParser.RULE_cplus);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 662;
                this.choice_plus();
                this.state = 669;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 667;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.OPC:
                                    {
                                        this.state = 663;
                                        this.item();
                                    }
                                    break;
                                case choiceParser.AtExampleWithStr:
                                case choiceParser.AtExamplecol:
                                case choiceParser.AtExamplecl:
                                    {
                                        this.state = 664;
                                        this.example();
                                    }
                                    break;
                                case choiceParser.OPB:
                                    {
                                        this.state = 665;
                                        this.instruction();
                                    }
                                    break;
                                case choiceParser.OPQ:
                                    {
                                        this.state = 666;
                                        this.hint();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 671;
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
    cminus() {
        let _localctx = new CminusContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, choiceParser.RULE_cminus);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 672;
                this.choice_minus();
                this.state = 679;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 677;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.OPC:
                                    {
                                        this.state = 673;
                                        this.item();
                                    }
                                    break;
                                case choiceParser.AtExampleWithStr:
                                case choiceParser.AtExamplecol:
                                case choiceParser.AtExamplecl:
                                    {
                                        this.state = 674;
                                        this.example();
                                    }
                                    break;
                                case choiceParser.OPB:
                                    {
                                        this.state = 675;
                                        this.instruction();
                                    }
                                    break;
                                case choiceParser.OPQ:
                                    {
                                        this.state = 676;
                                        this.hint();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 681;
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
    choice_plus() {
        let _localctx = new Choice_plusContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, choiceParser.RULE_choice_plus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 683;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPC) {
                    {
                        this.state = 682;
                        this.item();
                    }
                }
                this.state = 685;
                this.match(choiceParser.OPP);
                this.state = 687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.StrParen) {
                    {
                        this.state = 686;
                        this.match(choiceParser.StrParen);
                    }
                }
                this.state = 691;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 691;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.S:
                            case choiceParser.COLON:
                            case choiceParser.AMP:
                            case choiceParser.Greater:
                            case choiceParser.Less:
                            case choiceParser.RightAngle:
                            case choiceParser.RightArrow:
                            case choiceParser.DBLEQ:
                            case choiceParser.NUMERIC:
                            case choiceParser.STRING:
                            case choiceParser.NOTBITMARK:
                            case choiceParser.SENTENCE:
                            case choiceParser.BARSTRING:
                            case choiceParser.URL:
                                {
                                    this.state = 689;
                                    this.s_and_w();
                                }
                                break;
                            case choiceParser.NL:
                                {
                                    this.state = 690;
                                    this.match(choiceParser.NL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 693;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                this.state = 695;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 40, choiceParser.RULE_choice_minus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPC) {
                    {
                        this.state = 697;
                        this.item();
                    }
                }
                this.state = 700;
                this.match(choiceParser.OPM);
                this.state = 702;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.StrParen) {
                    {
                        this.state = 701;
                        this.match(choiceParser.StrParen);
                    }
                }
                this.state = 706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 706;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.S:
                            case choiceParser.COLON:
                            case choiceParser.AMP:
                            case choiceParser.Greater:
                            case choiceParser.Less:
                            case choiceParser.RightAngle:
                            case choiceParser.RightArrow:
                            case choiceParser.DBLEQ:
                            case choiceParser.NUMERIC:
                            case choiceParser.STRING:
                            case choiceParser.NOTBITMARK:
                            case choiceParser.SENTENCE:
                            case choiceParser.BARSTRING:
                            case choiceParser.URL:
                                {
                                    this.state = 704;
                                    this.s_and_w();
                                }
                                break;
                            case choiceParser.NL:
                                {
                                    this.state = 705;
                                    this.match(choiceParser.NL);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 708;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                this.state = 710;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    il_choice_plus() {
        let _localctx = new Il_choice_plusContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, choiceParser.RULE_il_choice_plus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 713;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPC) {
                    {
                        this.state = 712;
                        this.item();
                    }
                }
                this.state = 715;
                this.match(choiceParser.OPP);
                this.state = 717;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.StrParen) {
                    {
                        this.state = 716;
                        this.match(choiceParser.StrParen);
                    }
                }
                this.state = 719;
                this.s_and_w();
                this.state = 720;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    il_choice_minus() {
        let _localctx = new Il_choice_minusContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, choiceParser.RULE_il_choice_minus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 723;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPC) {
                    {
                        this.state = 722;
                        this.item();
                    }
                }
                this.state = 725;
                this.match(choiceParser.OPM);
                this.state = 727;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.StrParen) {
                    {
                        this.state = 726;
                        this.match(choiceParser.StrParen);
                    }
                }
                this.state = 729;
                this.s_and_w();
                this.state = 730;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 46, choiceParser.RULE_headed_inline_choices);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPS) {
                    {
                        this.state = 732;
                        this.choice_head();
                    }
                }
                this.state = 735;
                this.inline_choices();
                this.state = 739;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 736;
                                this.il_follow();
                            }
                        }
                    }
                    this.state = 741;
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
    highlight_inline_choices() {
        let _localctx = new Highlight_inline_choicesContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, choiceParser.RULE_highlight_inline_choices);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPS) {
                    {
                        this.state = 742;
                        this.choice_head();
                    }
                }
                this.state = 745;
                this.inline_choices();
                this.state = 749;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 746;
                                this.il_follow();
                            }
                        }
                    }
                    this.state = 751;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 50, choiceParser.RULE_headed_choices);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPS) {
                    {
                        this.state = 752;
                        this.choice_head();
                    }
                }
                this.state = 755;
                this.choices();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 52, choiceParser.RULE_choice_head);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
                this.match(choiceParser.OPS);
                this.state = 758;
                this.s_and_w();
                this.state = 759;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 54, choiceParser.RULE_inline_choices);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                    case 1:
                        {
                            this.state = 761;
                            this.il_choice_plus();
                        }
                        break;
                    case 2:
                        {
                            this.state = 762;
                            this.il_choice_minus();
                        }
                        break;
                }
                this.state = 769;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 767;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 765;
                                        this.il_choice_plus();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 766;
                                        this.il_choice_minus();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 771;
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
    ml_example() {
        let _localctx = new Ml_exampleContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, choiceParser.RULE_ml_example);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 772;
                this.match(choiceParser.AtExamplecol);
                this.state = 780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                    {
                        this.state = 774;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.NL) {
                            {
                                this.state = 773;
                                this.match(choiceParser.NL);
                            }
                        }
                        this.state = 776;
                        this.lines();
                        this.state = 778;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.NL) {
                            {
                                this.state = 777;
                                this.match(choiceParser.NL);
                            }
                        }
                    }
                }
                this.state = 782;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    il_follow() {
        let _localctx = new Il_followContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, choiceParser.RULE_il_follow);
        let _la;
        try {
            this.state = 792;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AtExampleWithStr:
                case choiceParser.AtExamplecol:
                case choiceParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 784;
                        this.example();
                    }
                    break;
                case choiceParser.OPQ:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 785;
                        this.match(choiceParser.OPQ);
                        this.state = 787;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 786;
                                    _la = this._input.LA(1);
                                    if (_la <= 0 || (_la === choiceParser.CL)) {
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
                            this.state = 789;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.OPDOT) | (1 << choiceParser.S) | (1 << choiceParser.BitMultichoice1) | (1 << choiceParser.BitMultichoice) | (1 << choiceParser.BitMultiresp1) | (1 << choiceParser.BitMultiresp) | (1 << choiceParser.BitMultichoicetext) | (1 << choiceParser.BitHighlighttext) | (1 << choiceParser.COMMENT) | (1 << choiceParser.Image_type) | (1 << choiceParser.Audio_type) | (1 << choiceParser.Video_type) | (1 << choiceParser.OPDOLL) | (1 << choiceParser.OPBUL) | (1 << choiceParser.OPESC) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPP) | (1 << choiceParser.OPM) | (1 << choiceParser.OPS) | (1 << choiceParser.OPR) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (choiceParser.DBLCOLON - 32)) | (1 << (choiceParser.PLUS - 32)) | (1 << (choiceParser.DotAt - 32)) | (1 << (choiceParser.Greater - 32)) | (1 << (choiceParser.Less - 32)) | (1 << (choiceParser.Lparen - 32)) | (1 << (choiceParser.Rparen - 32)) | (1 << (choiceParser.RightAngle - 32)) | (1 << (choiceParser.RightArrow - 32)) | (1 << (choiceParser.DBLEQ - 32)) | (1 << (choiceParser.HSPL - 32)) | (1 << (choiceParser.HSPL2 - 32)) | (1 << (choiceParser.SSPL - 32)) | (1 << (choiceParser.SSPL2 - 32)) | (1 << (choiceParser.StrParen - 32)) | (1 << (choiceParser.DCANY - 32)) | (1 << (choiceParser.ArticleText - 32)) | (1 << (choiceParser.NOTCL - 32)) | (1 << (choiceParser.NUMERIC - 32)) | (1 << (choiceParser.STRING - 32)) | (1 << (choiceParser.NL - 32)) | (1 << (choiceParser.NOTBITMARK - 32)) | (1 << (choiceParser.SENTENCE - 32)) | (1 << (choiceParser.BARSTRING - 32)) | (1 << (choiceParser.OPAT - 32)) | (1 << (choiceParser.AtProgress - 32)) | (1 << (choiceParser.AtReference - 32)) | (1 << (choiceParser.AtWidth - 32)) | (1 << (choiceParser.AtHeight - 32)) | (1 << (choiceParser.AtProgressPoints - 32)) | (1 << (choiceParser.AtShortanswer - 32)) | (1 << (choiceParser.AtLonganswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (choiceParser.AtExampleWithStr - 64)) | (1 << (choiceParser.AtExamplecol - 64)) | (1 << (choiceParser.AtExamplecl - 64)) | (1 << (choiceParser.AtPartialAnswerS - 64)) | (1 << (choiceParser.AtPartialAnswer - 64)) | (1 << (choiceParser.AtLabeltrue - 64)) | (1 << (choiceParser.AtLabelfalse - 64)) | (1 << (choiceParser.AtPoints - 64)) | (1 << (choiceParser.AtSrc - 64)) | (1 << (choiceParser.AtPartner - 64)) | (1 << (choiceParser.OPATALT - 64)) | (1 << (choiceParser.OPAMARK - 64)) | (1 << (choiceParser.ShowInIndex - 64)) | (1 << (choiceParser.OpAtCaption - 64)) | (1 << (choiceParser.OpAtLicense - 64)) | (1 << (choiceParser.OpAtCopyright - 64)) | (1 << (choiceParser.OpAtSearch - 64)) | (1 << (choiceParser.OpAtIsTracked - 64)) | (1 << (choiceParser.OpAtIsInfoOnly - 64)) | (1 << (choiceParser.AtDate - 64)) | (1 << (choiceParser.Http - 64)) | (1 << (choiceParser.Https - 64)) | (1 << (choiceParser.AmpAudio - 64)) | (1 << (choiceParser.AmpImage - 64)) | (1 << (choiceParser.AmpImageZoom - 64)) | (1 << (choiceParser.AmpImageWAudio - 64)) | (1 << (choiceParser.AmpVideo - 64)) | (1 << (choiceParser.AmpArticle - 64)) | (1 << (choiceParser.AmpDocument - 64)) | (1 << (choiceParser.AmpApp - 64)) | (1 << (choiceParser.AmpWebsite - 64)) | (1 << (choiceParser.AmpStillImageFilm - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (choiceParser.AmpPdf - 96)) | (1 << (choiceParser.OpAmpAudio - 96)) | (1 << (choiceParser.OpAmpImage - 96)) | (1 << (choiceParser.OpAmpImageZoom - 96)) | (1 << (choiceParser.OpAmpImageWAudio - 96)) | (1 << (choiceParser.OpAmpVideo - 96)) | (1 << (choiceParser.OpAmpArticle - 96)) | (1 << (choiceParser.OpAmpArticleAtt - 96)) | (1 << (choiceParser.OpAmpDocument - 96)) | (1 << (choiceParser.OpAmpApp - 96)) | (1 << (choiceParser.OpAmpWebsite - 96)) | (1 << (choiceParser.OpAmpStillImageFilm - 96)) | (1 << (choiceParser.BracEnclose - 96)) | (1 << (choiceParser.AmpAudioLink - 96)) | (1 << (choiceParser.AmpImageLink - 96)) | (1 << (choiceParser.AmpVideoLink - 96)) | (1 << (choiceParser.AmpArticleLink - 96)) | (1 << (choiceParser.AmpDocumentLink - 96)) | (1 << (choiceParser.AmpAppLink - 96)) | (1 << (choiceParser.AmpWebsiteLink - 96)) | (1 << (choiceParser.AmpStillImageFilmLink - 96)) | (1 << (choiceParser.OpAmpAudioLink - 96)) | (1 << (choiceParser.OpAmpImageLink - 96)) | (1 << (choiceParser.OpAmpVideoLink - 96)) | (1 << (choiceParser.OpAmpArticleLink - 96)) | (1 << (choiceParser.OpAmpDocumentLink - 96)) | (1 << (choiceParser.OpAmpAppLink - 96)) | (1 << (choiceParser.OpAmpWebsiteLink - 96)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 96)) | (1 << (choiceParser.AmpImageEmbed - 96)) | (1 << (choiceParser.AmpVideoEmbed - 96)) | (1 << (choiceParser.AmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (choiceParser.AmpDocumentEmbed - 128)) | (1 << (choiceParser.AmpStillImageFilmEmbed - 128)) | (1 << (choiceParser.OpAmpImageEmbed - 128)) | (1 << (choiceParser.OpAmpVideoEmbed - 128)) | (1 << (choiceParser.OpAmpAudioEmbed - 128)) | (1 << (choiceParser.OpAmpDocumentEmbed - 128)) | (1 << (choiceParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (choiceParser.BitmarkMinus - 128)) | (1 << (choiceParser.BitmarkPlus - 128)) | (1 << (choiceParser.ColonText - 128)) | (1 << (choiceParser.ColonJson - 128)) | (1 << (choiceParser.Prosemirror - 128)) | (1 << (choiceParser.Placeholder - 128)) | (1 << (choiceParser.BASIC - 128)) | (1 << (choiceParser.JPG - 128)) | (1 << (choiceParser.PNG - 128)) | (1 << (choiceParser.GIF - 128)) | (1 << (choiceParser.SVG - 128)) | (1 << (choiceParser.MP2 - 128)) | (1 << (choiceParser.MP3 - 128)) | (1 << (choiceParser.MP4 - 128)) | (1 << (choiceParser.FLV - 128)) | (1 << (choiceParser.WMV - 128)) | (1 << (choiceParser.MPEG - 128)) | (1 << (choiceParser.MPG - 128)) | (1 << (choiceParser.TEL - 128)) | (1 << (choiceParser.DotArticleAtt - 128)) | (1 << (choiceParser.STAR - 128)) | (1 << (choiceParser.URL - 128)) | (1 << (choiceParser.LIST_LINE - 128)) | (1 << (choiceParser.ENCLBARS - 128)))) !== 0));
                        this.state = 791;
                        this.match(choiceParser.CL);
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
    longans() {
        let _localctx = new LongansContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, choiceParser.RULE_longans);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 794;
                this.match(choiceParser.AtLonganswer);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 62, choiceParser.RULE_shortans);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 796;
                this.match(choiceParser.AtShortanswer);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 64, choiceParser.RULE_resource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 798;
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
    bullet_item() {
        let _localctx = new Bullet_itemContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, choiceParser.RULE_bullet_item);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 800;
                this.match(choiceParser.OPBUL);
                this.state = 801;
                this.s_and_w();
                this.state = 802;
                this.match(choiceParser.CL);
                this.state = 804;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.AtPoints) {
                    {
                        this.state = 803;
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
        this.enterRule(_localctx, 68, choiceParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this.match(choiceParser.AtPoints);
                this.state = 807;
                this.match(choiceParser.NUMERIC);
                this.state = 808;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 70, choiceParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 813;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 810;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 815;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                }
                this.state = 821;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (choiceParser.AmpAudio - 86)) | (1 << (choiceParser.AmpImage - 86)) | (1 << (choiceParser.AmpImageZoom - 86)) | (1 << (choiceParser.AmpImageWAudio - 86)) | (1 << (choiceParser.AmpVideo - 86)) | (1 << (choiceParser.AmpArticle - 86)) | (1 << (choiceParser.AmpDocument - 86)) | (1 << (choiceParser.AmpApp - 86)) | (1 << (choiceParser.AmpWebsite - 86)) | (1 << (choiceParser.AmpStillImageFilm - 86)) | (1 << (choiceParser.AmpPdf - 86)) | (1 << (choiceParser.AmpAudioLink - 86)) | (1 << (choiceParser.AmpImageLink - 86)) | (1 << (choiceParser.AmpVideoLink - 86)) | (1 << (choiceParser.AmpArticleLink - 86)) | (1 << (choiceParser.AmpDocumentLink - 86)) | (1 << (choiceParser.AmpAppLink - 86)) | (1 << (choiceParser.AmpWebsiteLink - 86)) | (1 << (choiceParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (choiceParser.AmpVideoEmbed - 126)) | (1 << (choiceParser.AmpDocumentEmbed - 126)) | (1 << (choiceParser.AmpStillImageFilmEmbed - 126)) | (1 << (choiceParser.ColonText - 126)) | (1 << (choiceParser.ColonJson - 126)))) !== 0)) {
                    {
                        this.state = 819;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.ColonText:
                                {
                                    this.state = 816;
                                    this.match(choiceParser.ColonText);
                                }
                                break;
                            case choiceParser.ColonJson:
                                {
                                    this.state = 817;
                                    this.match(choiceParser.ColonJson);
                                }
                                break;
                            case choiceParser.AmpAudio:
                            case choiceParser.AmpImage:
                            case choiceParser.AmpImageZoom:
                            case choiceParser.AmpImageWAudio:
                            case choiceParser.AmpVideo:
                            case choiceParser.AmpArticle:
                            case choiceParser.AmpDocument:
                            case choiceParser.AmpApp:
                            case choiceParser.AmpWebsite:
                            case choiceParser.AmpStillImageFilm:
                            case choiceParser.AmpPdf:
                            case choiceParser.AmpAudioLink:
                            case choiceParser.AmpImageLink:
                            case choiceParser.AmpVideoLink:
                            case choiceParser.AmpArticleLink:
                            case choiceParser.AmpDocumentLink:
                            case choiceParser.AmpAppLink:
                            case choiceParser.AmpWebsiteLink:
                            case choiceParser.AmpStillImageFilmLink:
                            case choiceParser.AmpVideoEmbed:
                            case choiceParser.AmpDocumentEmbed:
                            case choiceParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 818;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 823;
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
        this.enterRule(_localctx, 72, choiceParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 824;
                _la = this._input.LA(1);
                if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (choiceParser.AmpArticle - 91)) | (1 << (choiceParser.AmpDocument - 91)) | (1 << (choiceParser.AmpWebsite - 91)) | (1 << (choiceParser.AmpStillImageFilm - 91)) | (1 << (choiceParser.AmpAudioLink - 91)) | (1 << (choiceParser.AmpImageLink - 91)) | (1 << (choiceParser.AmpVideoLink - 91)) | (1 << (choiceParser.AmpArticleLink - 91)) | (1 << (choiceParser.AmpDocumentLink - 91)) | (1 << (choiceParser.AmpAppLink - 91)) | (1 << (choiceParser.AmpWebsiteLink - 91)) | (1 << (choiceParser.AmpStillImageFilmLink - 91)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (choiceParser.AmpVideoEmbed - 126)) | (1 << (choiceParser.AmpAudioEmbed - 126)) | (1 << (choiceParser.AmpDocumentEmbed - 126)) | (1 << (choiceParser.AmpStillImageFilmEmbed - 126)) | (1 << (choiceParser.BitmarkMinus - 126)) | (1 << (choiceParser.BitmarkPlus - 126)) | (1 << (choiceParser.ColonJson - 126)) | (1 << (choiceParser.Prosemirror - 126)) | (1 << (choiceParser.Placeholder - 126)))) !== 0))) {
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
        this.enterRule(_localctx, 74, choiceParser.RULE_resource_format_extra);
        try {
            this.state = 835;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AmpImage:
                case choiceParser.AmpImageZoom:
                case choiceParser.AmpImageWAudio:
                case choiceParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 826;
                        this.image_format();
                    }
                    break;
                case choiceParser.AmpAudio:
                case choiceParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 827;
                        this.audio_format();
                    }
                    break;
                case choiceParser.AmpVideo:
                case choiceParser.AmpVideoLink:
                case choiceParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 828;
                        this.video_format();
                    }
                    break;
                case choiceParser.AmpArticle:
                case choiceParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 829;
                        this.article_format();
                    }
                    break;
                case choiceParser.AmpDocument:
                case choiceParser.AmpDocumentLink:
                case choiceParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 830;
                        this.document_format();
                    }
                    break;
                case choiceParser.AmpApp:
                case choiceParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 831;
                        this.app_format();
                    }
                    break;
                case choiceParser.AmpWebsite:
                case choiceParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 832;
                        this.website_format();
                    }
                    break;
                case choiceParser.AmpStillImageFilm:
                case choiceParser.AmpStillImageFilmLink:
                case choiceParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 833;
                        this.stillimagefilm_format();
                    }
                    break;
                case choiceParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 834;
                        this.match(choiceParser.AmpPdf);
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
        this.enterRule(_localctx, 76, choiceParser.RULE_format2);
        try {
            this.state = 842;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 837;
                        this.match(choiceParser.BitmarkMinus);
                    }
                    break;
                case choiceParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 838;
                        this.match(choiceParser.BitmarkPlus);
                    }
                    break;
                case choiceParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 839;
                        this.match(choiceParser.ColonText);
                    }
                    break;
                case choiceParser.ColonJson:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 840;
                        this.match(choiceParser.ColonJson);
                    }
                    break;
                case choiceParser.EOF:
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
        this.enterRule(_localctx, 78, choiceParser.RULE_image_format);
        let _la;
        try {
            this.state = 858;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 844;
                        this.match(choiceParser.AmpImage);
                        this.state = 847;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.Image_type:
                                {
                                    {
                                        this.state = 845;
                                        this.match(choiceParser.Image_type);
                                    }
                                }
                                break;
                            case choiceParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 846;
                                        this.match(choiceParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case choiceParser.CL:
                            case choiceParser.AmpAudio:
                            case choiceParser.AmpImage:
                            case choiceParser.AmpImageZoom:
                            case choiceParser.AmpImageWAudio:
                            case choiceParser.AmpVideo:
                            case choiceParser.AmpArticle:
                            case choiceParser.AmpDocument:
                            case choiceParser.AmpApp:
                            case choiceParser.AmpWebsite:
                            case choiceParser.AmpStillImageFilm:
                            case choiceParser.AmpPdf:
                            case choiceParser.AmpAudioLink:
                            case choiceParser.AmpImageLink:
                            case choiceParser.AmpVideoLink:
                            case choiceParser.AmpArticleLink:
                            case choiceParser.AmpDocumentLink:
                            case choiceParser.AmpAppLink:
                            case choiceParser.AmpWebsiteLink:
                            case choiceParser.AmpStillImageFilmLink:
                            case choiceParser.AmpVideoEmbed:
                            case choiceParser.AmpDocumentEmbed:
                            case choiceParser.AmpStillImageFilmEmbed:
                            case choiceParser.ColonText:
                            case choiceParser.ColonJson:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case choiceParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 849;
                        this.match(choiceParser.AmpImageLink);
                        this.state = 851;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.Image_type) {
                            {
                                this.state = 850;
                                this.match(choiceParser.Image_type);
                            }
                        }
                    }
                    break;
                case choiceParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 853;
                        this.match(choiceParser.AmpImageZoom);
                        this.state = 855;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.Image_type) {
                            {
                                this.state = 854;
                                this.match(choiceParser.Image_type);
                            }
                        }
                    }
                    break;
                case choiceParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 857;
                        this.match(choiceParser.AmpImageWAudio);
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
        this.enterRule(_localctx, 80, choiceParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 860;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.AmpVideo || _la === choiceParser.AmpVideoLink || _la === choiceParser.AmpVideoEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 863;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.COLON) {
                    {
                        this.state = 861;
                        this.match(choiceParser.COLON);
                        this.state = 862;
                        this.match(choiceParser.Video_type);
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
        this.enterRule(_localctx, 82, choiceParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 865;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.AmpArticle || _la === choiceParser.AmpArticleLink)) {
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
        this.enterRule(_localctx, 84, choiceParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 867;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.AmpDocument || _la === choiceParser.AmpDocumentLink || _la === choiceParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 86, choiceParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 869;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.AmpApp || _la === choiceParser.AmpAppLink)) {
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
        this.enterRule(_localctx, 88, choiceParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 871;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.AmpWebsite || _la === choiceParser.AmpWebsiteLink)) {
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
        this.enterRule(_localctx, 90, choiceParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.AmpStillImageFilm || _la === choiceParser.AmpStillImageFilmLink || _la === choiceParser.AmpStillImageFilmEmbed)) {
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
        this.enterRule(_localctx, 92, choiceParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 875;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.OpAmpArticle || _la === choiceParser.OpAmpArticleLink)) {
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
        this.enterRule(_localctx, 94, choiceParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 877;
                _la = this._input.LA(1);
                if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (choiceParser.OpAmpDocument - 104)) | (1 << (choiceParser.OpAmpDocumentLink - 104)) | (1 << (choiceParser.OpAmpDocumentEmbed - 104)))) !== 0))) {
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
        this.enterRule(_localctx, 96, choiceParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 879;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.OpAmpApp || _la === choiceParser.OpAmpAppLink)) {
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
        this.enterRule(_localctx, 98, choiceParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 881;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.OpAmpWebsite || _la === choiceParser.OpAmpWebsiteLink)) {
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
        this.enterRule(_localctx, 100, choiceParser.RULE_op_video_format);
        try {
            this.state = 898;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 883;
                        this.match(choiceParser.OpAmpVideo);
                        this.state = 886;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                            case 1:
                                {
                                    this.state = 884;
                                    this.match(choiceParser.COLON);
                                    this.state = 885;
                                    this.match(choiceParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case choiceParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 888;
                        this.match(choiceParser.OpAmpVideoLink);
                        this.state = 891;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                            case 1:
                                {
                                    this.state = 889;
                                    this.match(choiceParser.COLON);
                                    this.state = 890;
                                    this.match(choiceParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case choiceParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 893;
                        this.match(choiceParser.OpAmpVideoEmbed);
                        this.state = 896;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                            case 1:
                                {
                                    this.state = 894;
                                    this.match(choiceParser.COLON);
                                    this.state = 895;
                                    this.match(choiceParser.Video_type);
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
        this.enterRule(_localctx, 102, choiceParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 900;
                _la = this._input.LA(1);
                if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (choiceParser.OpAmpStillImageFilm - 107)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 107)) | (1 << (choiceParser.OpAmpStillImageFilmEmbed - 107)))) !== 0))) {
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
        this.enterRule(_localctx, 104, choiceParser.RULE_articlebit);
        try {
            this.state = 908;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OpAmpArticle:
                case choiceParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 902;
                        this.op_article_format();
                        this.state = 903;
                        this.match(choiceParser.COLON);
                        this.state = 904;
                        this.url();
                        this.state = 905;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 907;
                        this.match(choiceParser.ArticleText);
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
        this.enterRule(_localctx, 106, choiceParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 910;
                this.op_document_format();
                this.state = 911;
                this.match(choiceParser.COLON);
                this.state = 912;
                this.url();
                this.state = 913;
                this.match(choiceParser.CL);
                this.state = 918;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPATALT) {
                    {
                        this.state = 914;
                        this.match(choiceParser.OPATALT);
                        this.state = 915;
                        this.words();
                        this.state = 916;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 108, choiceParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 920;
                this.op_website_format();
                this.state = 921;
                this.match(choiceParser.COLON);
                this.state = 922;
                this.url();
                this.state = 923;
                this.match(choiceParser.CL);
                this.state = 928;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPATALT) {
                    {
                        this.state = 924;
                        this.match(choiceParser.OPATALT);
                        this.state = 925;
                        this.words();
                        this.state = 926;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 110, choiceParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 930;
                this.op_app_format();
                this.state = 931;
                this.match(choiceParser.COLON);
                this.state = 934;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.URL:
                        {
                            this.state = 932;
                            this.url();
                        }
                        break;
                    case choiceParser.TEL:
                        {
                            this.state = 933;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 936;
                this.match(choiceParser.CL);
                this.state = 941;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.OPATALT) {
                    {
                        this.state = 937;
                        this.match(choiceParser.OPATALT);
                        this.state = 938;
                        this.words();
                        this.state = 939;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 112, choiceParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 943;
                this.stillimg_one();
                this.state = 947;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 944;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 949;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 114, choiceParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 950;
                this.op_stillimagefilm_format();
                this.state = 951;
                this.match(choiceParser.COLON);
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === choiceParser.S) {
                    {
                        {
                            this.state = 952;
                            this.match(choiceParser.S);
                        }
                    }
                    this.state = 957;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 958;
                this.url();
                this.state = 959;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 116, choiceParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 961;
                this.video_one();
                this.state = 965;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 962;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 967;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 118, choiceParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 968;
                this.op_video_format();
                this.state = 969;
                this.match(choiceParser.COLON);
                this.state = 970;
                this.url();
                this.state = 971;
                this.match(choiceParser.CL);
                this.state = 976;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                    case 1:
                        {
                            this.state = 972;
                            this.match(choiceParser.OPATALT);
                            this.state = 973;
                            this.words();
                            this.state = 974;
                            this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 120, choiceParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 978;
                this.image_one();
                this.state = 982;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 979;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 984;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                }
                this.state = 987;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                    case 1:
                        {
                            this.state = 985;
                            this.match(choiceParser.NL);
                            this.state = 986;
                            this.match(choiceParser.ShowInIndex);
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
        this.enterRule(_localctx, 122, choiceParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 989;
                this.op_image_format();
                this.state = 990;
                this.match(choiceParser.COLON);
                this.state = 994;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === choiceParser.S) {
                    {
                        {
                            this.state = 991;
                            this.match(choiceParser.S);
                        }
                    }
                    this.state = 996;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 997;
                this.url();
                this.state = 998;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 124, choiceParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 1014;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1000;
                        this.match(choiceParser.OpAmpImage);
                        this.state = 1003;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.Image_type:
                                {
                                    {
                                        this.state = 1001;
                                        this.match(choiceParser.Image_type);
                                    }
                                }
                                break;
                            case choiceParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 1002;
                                        this.match(choiceParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case choiceParser.COLON:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case choiceParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1005;
                        this.match(choiceParser.OpAmpImageLink);
                        this.state = 1007;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.Image_type) {
                            {
                                this.state = 1006;
                                this.match(choiceParser.Image_type);
                            }
                        }
                    }
                    break;
                case choiceParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1009;
                        this.match(choiceParser.OpAmpImageZoom);
                        this.state = 1011;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.Image_type) {
                            {
                                this.state = 1010;
                                this.match(choiceParser.Image_type);
                            }
                        }
                    }
                    break;
                case choiceParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1013;
                        this.match(choiceParser.OpAmpImageWAudio);
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
        this.enterRule(_localctx, 126, choiceParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 1033;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1016;
                        this.match(choiceParser.AtSrc);
                        this.state = 1017;
                        this.match(choiceParser.COLON);
                        this.state = 1018;
                        this.url();
                        this.state = 1019;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.AtWidth:
                case choiceParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1021;
                        _la = this._input.LA(1);
                        if (!(_la === choiceParser.AtWidth || _la === choiceParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1022;
                        this.match(choiceParser.COLON);
                        this.state = 1023;
                        this.match(choiceParser.NUMERIC);
                        this.state = 1024;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.OPATALT:
                case choiceParser.OpAtCaption:
                case choiceParser.OpAtLicense:
                case choiceParser.OpAtCopyright:
                case choiceParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1025;
                        _la = this._input.LA(1);
                        if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (choiceParser.OPATALT - 74)) | (1 << (choiceParser.OpAtCaption - 74)) | (1 << (choiceParser.OpAtLicense - 74)) | (1 << (choiceParser.OpAtCopyright - 74)) | (1 << (choiceParser.OpAtSearch - 74)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1029;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1026;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1031;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                        }
                        this.state = 1032;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 128, choiceParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 1052;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1035;
                        this.match(choiceParser.AtSrc);
                        this.state = 1036;
                        this.match(choiceParser.COLON);
                        this.state = 1037;
                        this.url();
                        this.state = 1038;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.AtWidth:
                case choiceParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1040;
                        _la = this._input.LA(1);
                        if (!(_la === choiceParser.AtWidth || _la === choiceParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1041;
                        this.match(choiceParser.COLON);
                        this.state = 1042;
                        this.match(choiceParser.NUMERIC);
                        this.state = 1043;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.OPATALT:
                case choiceParser.OpAtCaption:
                case choiceParser.OpAtLicense:
                case choiceParser.OpAtCopyright:
                case choiceParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1044;
                        _la = this._input.LA(1);
                        if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (choiceParser.OPATALT - 74)) | (1 << (choiceParser.OpAtCaption - 74)) | (1 << (choiceParser.OpAtLicense - 74)) | (1 << (choiceParser.OpAtCopyright - 74)) | (1 << (choiceParser.OpAtSearch - 74)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1048;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1045;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1050;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        }
                        this.state = 1051;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 130, choiceParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1054;
                this.audio_one();
                this.state = 1058;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1055;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 1060;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 132, choiceParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1061;
                this.op_audio_format();
                this.state = 1062;
                this.match(choiceParser.COLON);
                this.state = 1063;
                this.url();
                this.state = 1064;
                this.match(choiceParser.CL);
                this.state = 1069;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                    case 1:
                        {
                            this.state = 1065;
                            this.match(choiceParser.OPATALT);
                            this.state = 1066;
                            this.words();
                            this.state = 1067;
                            this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 134, choiceParser.RULE_audio_format);
        let _la;
        try {
            this.state = 1081;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1071;
                        this.match(choiceParser.AmpAudio);
                        this.state = 1074;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.COLON) {
                            {
                                this.state = 1072;
                                this.match(choiceParser.COLON);
                                this.state = 1073;
                                this.match(choiceParser.Audio_type);
                            }
                        }
                    }
                    break;
                case choiceParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1076;
                        this.match(choiceParser.AmpAudioLink);
                        this.state = 1079;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.COLON) {
                            {
                                this.state = 1077;
                                this.match(choiceParser.COLON);
                                this.state = 1078;
                                this.match(choiceParser.Audio_type);
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
        this.enterRule(_localctx, 136, choiceParser.RULE_op_audio_format);
        try {
            this.state = 1098;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1083;
                        this.match(choiceParser.OpAmpAudio);
                        this.state = 1086;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1084;
                                    this.match(choiceParser.COLON);
                                    this.state = 1085;
                                    this.match(choiceParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case choiceParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1088;
                        this.match(choiceParser.OpAmpAudioLink);
                        this.state = 1091;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1089;
                                    this.match(choiceParser.COLON);
                                    this.state = 1090;
                                    this.match(choiceParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case choiceParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1093;
                        this.match(choiceParser.OpAmpAudioEmbed);
                        this.state = 1096;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1094;
                                    this.match(choiceParser.COLON);
                                    this.state = 1095;
                                    this.match(choiceParser.Audio_type);
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
        this.enterRule(_localctx, 138, choiceParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 1131;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OPA:
                case choiceParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1103;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.OPA:
                                {
                                    this.state = 1100;
                                    this.match(choiceParser.OPA);
                                    this.state = 1101;
                                    this.s_and_w();
                                }
                                break;
                            case choiceParser.AtSrc:
                                {
                                    this.state = 1102;
                                    this.match(choiceParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1105;
                        this.match(choiceParser.COLON);
                        this.state = 1109;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1106;
                                        this.match(choiceParser.S);
                                    }
                                }
                            }
                            this.state = 1111;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                        }
                        this.state = 1114;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1114;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.S:
                                    case choiceParser.COLON:
                                    case choiceParser.AMP:
                                    case choiceParser.Greater:
                                    case choiceParser.Less:
                                    case choiceParser.RightAngle:
                                    case choiceParser.RightArrow:
                                    case choiceParser.DBLEQ:
                                    case choiceParser.NUMERIC:
                                    case choiceParser.STRING:
                                    case choiceParser.NOTBITMARK:
                                    case choiceParser.SENTENCE:
                                    case choiceParser.BARSTRING:
                                    case choiceParser.URL:
                                        {
                                            this.state = 1112;
                                            this.s_and_w();
                                        }
                                        break;
                                    case choiceParser.NL:
                                        {
                                            this.state = 1113;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1116;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                        this.state = 1118;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.AtWidth:
                case choiceParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1119;
                        _la = this._input.LA(1);
                        if (!(_la === choiceParser.AtWidth || _la === choiceParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1120;
                        this.match(choiceParser.COLON);
                        this.state = 1121;
                        this.match(choiceParser.NUMERIC);
                        this.state = 1122;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.OPATALT:
                case choiceParser.OpAtCaption:
                case choiceParser.OpAtLicense:
                case choiceParser.OpAtCopyright:
                case choiceParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1123;
                        _la = this._input.LA(1);
                        if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (choiceParser.OPATALT - 74)) | (1 << (choiceParser.OpAtCaption - 74)) | (1 << (choiceParser.OpAtLicense - 74)) | (1 << (choiceParser.OpAtCopyright - 74)) | (1 << (choiceParser.OpAtSearch - 74)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1127;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1124;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1129;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                        }
                        this.state = 1130;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 140, choiceParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1133;
                this.match(choiceParser.TEL);
                this.state = 1134;
                this.match(choiceParser.PLUS);
                this.state = 1135;
                this.match(choiceParser.NUMERIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 142, choiceParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1137;
                this.match(choiceParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 144, choiceParser.RULE_item);
        let _la;
        try {
            this.state = 1169;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1139;
                        this.match(choiceParser.OPC);
                        this.state = 1140;
                        this.match(choiceParser.CL);
                        this.state = 1148;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1144;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.S) {
                                        {
                                            {
                                                this.state = 1141;
                                                this.match(choiceParser.S);
                                            }
                                        }
                                        this.state = 1146;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1147;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1150;
                        this.match(choiceParser.OPC);
                        this.state = 1151;
                        this.s_and_w();
                        this.state = 1156;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (choiceParser.COLON - 30)) | (1 << (choiceParser.AMP - 30)) | (1 << (choiceParser.Greater - 30)) | (1 << (choiceParser.Less - 30)) | (1 << (choiceParser.RightAngle - 30)) | (1 << (choiceParser.RightArrow - 30)) | (1 << (choiceParser.NOTBITMARK - 30)) | (1 << (choiceParser.SENTENCE - 30)) | (1 << (choiceParser.BARSTRING - 30)))) !== 0)) {
                            {
                                this.state = 1154;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.COLON:
                                        {
                                            this.state = 1152;
                                            this.match(choiceParser.COLON);
                                        }
                                        break;
                                    case choiceParser.AMP:
                                    case choiceParser.Greater:
                                    case choiceParser.Less:
                                    case choiceParser.RightAngle:
                                    case choiceParser.RightArrow:
                                    case choiceParser.NOTBITMARK:
                                    case choiceParser.SENTENCE:
                                    case choiceParser.BARSTRING:
                                        {
                                            this.state = 1153;
                                            this.words();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1158;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1159;
                        this.match(choiceParser.CL);
                        this.state = 1167;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1163;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.S) {
                                        {
                                            {
                                                this.state = 1160;
                                                this.match(choiceParser.S);
                                            }
                                        }
                                        this.state = 1165;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1166;
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
        this.enterRule(_localctx, 146, choiceParser.RULE_lead);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1171;
                this.match(choiceParser.OPC);
                this.state = 1172;
                this.s_and_w();
                this.state = 1177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (choiceParser.COLON - 30)) | (1 << (choiceParser.AMP - 30)) | (1 << (choiceParser.Greater - 30)) | (1 << (choiceParser.Less - 30)) | (1 << (choiceParser.RightAngle - 30)) | (1 << (choiceParser.RightArrow - 30)) | (1 << (choiceParser.NOTBITMARK - 30)) | (1 << (choiceParser.SENTENCE - 30)) | (1 << (choiceParser.BARSTRING - 30)))) !== 0)) {
                    {
                        this.state = 1175;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case choiceParser.COLON:
                                {
                                    this.state = 1173;
                                    this.match(choiceParser.COLON);
                                }
                                break;
                            case choiceParser.AMP:
                            case choiceParser.Greater:
                            case choiceParser.Less:
                            case choiceParser.RightAngle:
                            case choiceParser.RightArrow:
                            case choiceParser.NOTBITMARK:
                            case choiceParser.SENTENCE:
                            case choiceParser.BARSTRING:
                                {
                                    this.state = 1174;
                                    this.words();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 1179;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1180;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 148, choiceParser.RULE_angleref);
        let _la;
        try {
            this.state = 1192;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1182;
                        this.match(choiceParser.OPRANGLES);
                        this.state = 1184;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1183;
                                this.s_and_w();
                            }
                        }
                        this.state = 1186;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1187;
                        this.match(choiceParser.OPRANGLEL);
                        this.state = 1189;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1188;
                                this.s_and_w();
                            }
                        }
                        this.state = 1191;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 150, choiceParser.RULE_example);
        let _la;
        try {
            this.state = 1201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1194;
                        this.match(choiceParser.AtExamplecl);
                    }
                    break;
                case choiceParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1195;
                        this.match(choiceParser.AtExampleWithStr);
                    }
                    break;
                case choiceParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1196;
                        this.match(choiceParser.AtExamplecol);
                        this.state = 1198;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === choiceParser.SENTENCE) {
                            {
                                this.state = 1197;
                                this.match(choiceParser.SENTENCE);
                            }
                        }
                        this.state = 1200;
                        this.match(choiceParser.EOF);
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
        this.enterRule(_localctx, 152, choiceParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 1242;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1203;
                        this.match(choiceParser.BracEnclose);
                        this.state = 1205;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1204;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                {
                                    this.state = 1207;
                                    this.s_and_w();
                                    this.state = 1217;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1208;
                                                    this.match(choiceParser.NL);
                                                    this.state = 1212;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1209;
                                                                    this.match(choiceParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1214;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1219;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                                    }
                                    this.state = 1223;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.NL) {
                                        {
                                            {
                                                this.state = 1220;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                        this.state = 1225;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1230;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1231;
                        this.match(choiceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1232;
                        this.match(choiceParser.BracEnclose);
                        this.state = 1238;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1236;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1233;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1234;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1235;
                                            this.match(choiceParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1240;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1241;
                        this.match(choiceParser.EOF);
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
        this.enterRule(_localctx, 154, choiceParser.RULE_reference);
        let _la;
        try {
            this.state = 1266;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1244;
                        this.match(choiceParser.AtReference);
                        this.state = 1249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1249;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1245;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1246;
                                            this.match(choiceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1247;
                                            this.match(choiceParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1248;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1251;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                        this.state = 1253;
                        this.match(choiceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1254;
                        this.match(choiceParser.AtReference);
                        this.state = 1262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1260;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1255;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1256;
                                            this.match(choiceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1257;
                                            this.match(choiceParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1258;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1259;
                                            this.match(choiceParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1264;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1265;
                        this.match(choiceParser.EOF);
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
        this.enterRule(_localctx, 156, choiceParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1268;
                this.match(choiceParser.AtProgress);
                this.state = 1269;
                this.s_and_w();
                this.state = 1270;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 158, choiceParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1272;
                this.match(choiceParser.AtDate);
                this.state = 1276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1276;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 185, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1273;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1274;
                                    this.match(choiceParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1275;
                                    this.match(choiceParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1278;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                this.state = 1280;
                this.match(choiceParser.CL);
                this.state = 1282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === choiceParser.AtDate) {
                    {
                        this.state = 1281;
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
        this.enterRule(_localctx, 160, choiceParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this.match(choiceParser.AtDate);
                this.state = 1288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1288;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 188, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1285;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1286;
                                    this.match(choiceParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1287;
                                    this.match(choiceParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1290;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                this.state = 1292;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 162, choiceParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1340;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1294;
                        this.match(choiceParser.OPB);
                        this.state = 1298;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === choiceParser.NL) {
                            {
                                {
                                    this.state = 1295;
                                    this.match(choiceParser.NL);
                                }
                            }
                            this.state = 1300;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1302;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1301;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1325;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                {
                                    this.state = 1304;
                                    this.s_and_w();
                                    this.state = 1314;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1305;
                                                    this.match(choiceParser.NL);
                                                    this.state = 1309;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1306;
                                                                    this.match(choiceParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1311;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1316;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                                    }
                                    this.state = 1320;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.NL) {
                                        {
                                            {
                                                this.state = 1317;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                        this.state = 1322;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1327;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1328;
                        this.match(choiceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1329;
                        this.match(choiceParser.OPB);
                        this.state = 1333;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === choiceParser.NL) {
                            {
                                {
                                    this.state = 1330;
                                    this.match(choiceParser.NL);
                                }
                            }
                            this.state = 1335;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1337;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1336;
                                this.s_and_w();
                            }
                        }
                        this.state = 1339;
                        this.match(choiceParser.EOF);
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
        this.enterRule(_localctx, 164, choiceParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1342;
                this.match(choiceParser.OPQ);
                this.state = 1344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1343;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === choiceParser.CL)) {
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
                    this.state = 1346;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.OPDOT) | (1 << choiceParser.S) | (1 << choiceParser.BitMultichoice1) | (1 << choiceParser.BitMultichoice) | (1 << choiceParser.BitMultiresp1) | (1 << choiceParser.BitMultiresp) | (1 << choiceParser.BitMultichoicetext) | (1 << choiceParser.BitHighlighttext) | (1 << choiceParser.COMMENT) | (1 << choiceParser.Image_type) | (1 << choiceParser.Audio_type) | (1 << choiceParser.Video_type) | (1 << choiceParser.OPDOLL) | (1 << choiceParser.OPBUL) | (1 << choiceParser.OPESC) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPP) | (1 << choiceParser.OPM) | (1 << choiceParser.OPS) | (1 << choiceParser.OPR) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (choiceParser.DBLCOLON - 32)) | (1 << (choiceParser.PLUS - 32)) | (1 << (choiceParser.DotAt - 32)) | (1 << (choiceParser.Greater - 32)) | (1 << (choiceParser.Less - 32)) | (1 << (choiceParser.Lparen - 32)) | (1 << (choiceParser.Rparen - 32)) | (1 << (choiceParser.RightAngle - 32)) | (1 << (choiceParser.RightArrow - 32)) | (1 << (choiceParser.DBLEQ - 32)) | (1 << (choiceParser.HSPL - 32)) | (1 << (choiceParser.HSPL2 - 32)) | (1 << (choiceParser.SSPL - 32)) | (1 << (choiceParser.SSPL2 - 32)) | (1 << (choiceParser.StrParen - 32)) | (1 << (choiceParser.DCANY - 32)) | (1 << (choiceParser.ArticleText - 32)) | (1 << (choiceParser.NOTCL - 32)) | (1 << (choiceParser.NUMERIC - 32)) | (1 << (choiceParser.STRING - 32)) | (1 << (choiceParser.NL - 32)) | (1 << (choiceParser.NOTBITMARK - 32)) | (1 << (choiceParser.SENTENCE - 32)) | (1 << (choiceParser.BARSTRING - 32)) | (1 << (choiceParser.OPAT - 32)) | (1 << (choiceParser.AtProgress - 32)) | (1 << (choiceParser.AtReference - 32)) | (1 << (choiceParser.AtWidth - 32)) | (1 << (choiceParser.AtHeight - 32)) | (1 << (choiceParser.AtProgressPoints - 32)) | (1 << (choiceParser.AtShortanswer - 32)) | (1 << (choiceParser.AtLonganswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (choiceParser.AtExampleWithStr - 64)) | (1 << (choiceParser.AtExamplecol - 64)) | (1 << (choiceParser.AtExamplecl - 64)) | (1 << (choiceParser.AtPartialAnswerS - 64)) | (1 << (choiceParser.AtPartialAnswer - 64)) | (1 << (choiceParser.AtLabeltrue - 64)) | (1 << (choiceParser.AtLabelfalse - 64)) | (1 << (choiceParser.AtPoints - 64)) | (1 << (choiceParser.AtSrc - 64)) | (1 << (choiceParser.AtPartner - 64)) | (1 << (choiceParser.OPATALT - 64)) | (1 << (choiceParser.OPAMARK - 64)) | (1 << (choiceParser.ShowInIndex - 64)) | (1 << (choiceParser.OpAtCaption - 64)) | (1 << (choiceParser.OpAtLicense - 64)) | (1 << (choiceParser.OpAtCopyright - 64)) | (1 << (choiceParser.OpAtSearch - 64)) | (1 << (choiceParser.OpAtIsTracked - 64)) | (1 << (choiceParser.OpAtIsInfoOnly - 64)) | (1 << (choiceParser.AtDate - 64)) | (1 << (choiceParser.Http - 64)) | (1 << (choiceParser.Https - 64)) | (1 << (choiceParser.AmpAudio - 64)) | (1 << (choiceParser.AmpImage - 64)) | (1 << (choiceParser.AmpImageZoom - 64)) | (1 << (choiceParser.AmpImageWAudio - 64)) | (1 << (choiceParser.AmpVideo - 64)) | (1 << (choiceParser.AmpArticle - 64)) | (1 << (choiceParser.AmpDocument - 64)) | (1 << (choiceParser.AmpApp - 64)) | (1 << (choiceParser.AmpWebsite - 64)) | (1 << (choiceParser.AmpStillImageFilm - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (choiceParser.AmpPdf - 96)) | (1 << (choiceParser.OpAmpAudio - 96)) | (1 << (choiceParser.OpAmpImage - 96)) | (1 << (choiceParser.OpAmpImageZoom - 96)) | (1 << (choiceParser.OpAmpImageWAudio - 96)) | (1 << (choiceParser.OpAmpVideo - 96)) | (1 << (choiceParser.OpAmpArticle - 96)) | (1 << (choiceParser.OpAmpArticleAtt - 96)) | (1 << (choiceParser.OpAmpDocument - 96)) | (1 << (choiceParser.OpAmpApp - 96)) | (1 << (choiceParser.OpAmpWebsite - 96)) | (1 << (choiceParser.OpAmpStillImageFilm - 96)) | (1 << (choiceParser.BracEnclose - 96)) | (1 << (choiceParser.AmpAudioLink - 96)) | (1 << (choiceParser.AmpImageLink - 96)) | (1 << (choiceParser.AmpVideoLink - 96)) | (1 << (choiceParser.AmpArticleLink - 96)) | (1 << (choiceParser.AmpDocumentLink - 96)) | (1 << (choiceParser.AmpAppLink - 96)) | (1 << (choiceParser.AmpWebsiteLink - 96)) | (1 << (choiceParser.AmpStillImageFilmLink - 96)) | (1 << (choiceParser.OpAmpAudioLink - 96)) | (1 << (choiceParser.OpAmpImageLink - 96)) | (1 << (choiceParser.OpAmpVideoLink - 96)) | (1 << (choiceParser.OpAmpArticleLink - 96)) | (1 << (choiceParser.OpAmpDocumentLink - 96)) | (1 << (choiceParser.OpAmpAppLink - 96)) | (1 << (choiceParser.OpAmpWebsiteLink - 96)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 96)) | (1 << (choiceParser.AmpImageEmbed - 96)) | (1 << (choiceParser.AmpVideoEmbed - 96)) | (1 << (choiceParser.AmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (choiceParser.AmpDocumentEmbed - 128)) | (1 << (choiceParser.AmpStillImageFilmEmbed - 128)) | (1 << (choiceParser.OpAmpImageEmbed - 128)) | (1 << (choiceParser.OpAmpVideoEmbed - 128)) | (1 << (choiceParser.OpAmpAudioEmbed - 128)) | (1 << (choiceParser.OpAmpDocumentEmbed - 128)) | (1 << (choiceParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (choiceParser.BitmarkMinus - 128)) | (1 << (choiceParser.BitmarkPlus - 128)) | (1 << (choiceParser.ColonText - 128)) | (1 << (choiceParser.ColonJson - 128)) | (1 << (choiceParser.Prosemirror - 128)) | (1 << (choiceParser.Placeholder - 128)) | (1 << (choiceParser.BASIC - 128)) | (1 << (choiceParser.JPG - 128)) | (1 << (choiceParser.PNG - 128)) | (1 << (choiceParser.GIF - 128)) | (1 << (choiceParser.SVG - 128)) | (1 << (choiceParser.MP2 - 128)) | (1 << (choiceParser.MP3 - 128)) | (1 << (choiceParser.MP4 - 128)) | (1 << (choiceParser.FLV - 128)) | (1 << (choiceParser.WMV - 128)) | (1 << (choiceParser.MPEG - 128)) | (1 << (choiceParser.MPG - 128)) | (1 << (choiceParser.TEL - 128)) | (1 << (choiceParser.DotArticleAtt - 128)) | (1 << (choiceParser.STAR - 128)) | (1 << (choiceParser.URL - 128)) | (1 << (choiceParser.LIST_LINE - 128)) | (1 << (choiceParser.ENCLBARS - 128)))) !== 0));
                this.state = 1348;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 166, choiceParser.RULE_title);
        let _la;
        try {
            this.state = 1362;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 202, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1350;
                        this.match(choiceParser.OPHASH);
                        this.state = 1353;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1353;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.S:
                                    case choiceParser.COLON:
                                    case choiceParser.AMP:
                                    case choiceParser.Greater:
                                    case choiceParser.Less:
                                    case choiceParser.RightAngle:
                                    case choiceParser.RightArrow:
                                    case choiceParser.DBLEQ:
                                    case choiceParser.NUMERIC:
                                    case choiceParser.STRING:
                                    case choiceParser.NOTBITMARK:
                                    case choiceParser.SENTENCE:
                                    case choiceParser.BARSTRING:
                                    case choiceParser.URL:
                                        {
                                            this.state = 1351;
                                            this.s_and_w();
                                        }
                                        break;
                                    case choiceParser.NL:
                                        {
                                            this.state = 1352;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1355;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                        this.state = 1357;
                        this.match(choiceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1358;
                        this.match(choiceParser.OPHASH);
                        this.state = 1359;
                        this.s_and_w();
                        this.state = 1360;
                        this.match(choiceParser.EOF);
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
        this.enterRule(_localctx, 168, choiceParser.RULE_bool_label);
        try {
            this.state = 1372;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1364;
                        this.match(choiceParser.AtLabeltrue);
                        this.state = 1365;
                        this.s_and_w();
                        this.state = 1366;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1368;
                        this.match(choiceParser.AtLabelfalse);
                        this.state = 1369;
                        this.s_and_w();
                        this.state = 1370;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 170, choiceParser.RULE_progress_points);
        try {
            this.state = 1383;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 204, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1374;
                        this.match(choiceParser.AtProgressPoints);
                        this.state = 1375;
                        this.match(choiceParser.COLON);
                        this.state = 1376;
                        this.match(choiceParser.NUMERIC);
                        this.state = 1377;
                        this.match(choiceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1378;
                        this.match(choiceParser.AtProgressPoints);
                        this.state = 1379;
                        this.match(choiceParser.COLON);
                        this.state = 1380;
                        this.s_and_w();
                        this.state = 1381;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 172, choiceParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1385;
                this.match(choiceParser.OpAtIsTracked);
                this.state = 1386;
                this.s_and_w();
                this.state = 1387;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 174, choiceParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1389;
                this.match(choiceParser.OpAtIsInfoOnly);
                this.state = 1390;
                this.s_and_w();
                this.state = 1391;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 176, choiceParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1393;
                this.atdef_();
                this.state = 1403;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1397;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === choiceParser.NL) {
                                    {
                                        {
                                            this.state = 1394;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                    this.state = 1399;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1400;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1405;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 178, choiceParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1428;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case choiceParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1406;
                        this.match(choiceParser.OPA);
                        this.state = 1407;
                        this.s_and_w();
                        this.state = 1408;
                        _la = this._input.LA(1);
                        if (!(_la === choiceParser.COLON || _la === choiceParser.DBLCOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1409;
                        this.s_and_w();
                        this.state = 1415;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1413;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1410;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1411;
                                            this.match(choiceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1412;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1417;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1418;
                        this.match(choiceParser.CL);
                    }
                    break;
                case choiceParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1420;
                        this.match(choiceParser.OpAtCopyright);
                        this.state = 1424;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1421;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1426;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
                        }
                        this.state = 1427;
                        this.match(choiceParser.CL);
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
        this.enterRule(_localctx, 180, choiceParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1449;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 215, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1430;
                        this.match(choiceParser.OPDOLL);
                        this.state = 1434;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1434;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 211, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1431;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1432;
                                            this.match(choiceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1433;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1436;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
                        this.state = 1438;
                        this.match(choiceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1439;
                        this.match(choiceParser.OPDOLL);
                        this.state = 1445;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                            {
                                this.state = 1443;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1440;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1441;
                                            this.match(choiceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1442;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1447;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1448;
                        this.match(choiceParser.EOF);
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
        this.enterRule(_localctx, 182, choiceParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1451;
                this.match(choiceParser.OPDANGLE);
                this.state = 1453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL) {
                    {
                        this.state = 1452;
                        this.s_and_w();
                    }
                }
                this.state = 1455;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 184, choiceParser.RULE_dclines);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1457;
                this.match(choiceParser.DCANY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 186, choiceParser.RULE_lines);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1463;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1459;
                            this.s_and_w();
                            this.state = 1461;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 217, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1460;
                                        this.match(choiceParser.NL);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1465;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NOTBITMARK - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.BARSTRING - 35)))) !== 0) || _la === choiceParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 188, choiceParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1508;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 226, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1467;
                        this.match(choiceParser.STRING);
                        this.state = 1474;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 220, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1469;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1468;
                                                this.match(choiceParser.S);
                                            }
                                        }
                                        this.state = 1471;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === choiceParser.S);
                                    this.state = 1473;
                                    this.match(choiceParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1476;
                        this.words();
                        this.state = 1483;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 222, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1478;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1477;
                                                this.match(choiceParser.S);
                                            }
                                        }
                                        this.state = 1480;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === choiceParser.S);
                                    this.state = 1482;
                                    this.match(choiceParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1485;
                        this.match(choiceParser.NUMERIC);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1489;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === choiceParser.S) {
                            {
                                {
                                    this.state = 1486;
                                    this.match(choiceParser.S);
                                }
                            }
                            this.state = 1491;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1492;
                        this.match(choiceParser.COLON);
                        this.state = 1496;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1493;
                                        this.match(choiceParser.S);
                                    }
                                }
                            }
                            this.state = 1498;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1499;
                        this.match(choiceParser.AMP);
                        this.state = 1503;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1500;
                                        this.match(choiceParser.S);
                                    }
                                }
                            }
                            this.state = 1505;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1506;
                        this.match(choiceParser.DBLEQ);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1507;
                        this.match(choiceParser.URL);
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
        this.enterRule(_localctx, 190, choiceParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1510;
                this.match(choiceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 192, choiceParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1512;
                _la = this._input.LA(1);
                if (!(_la === choiceParser.SSPL || _la === choiceParser.SSPL2)) {
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
        this.enterRule(_localctx, 194, choiceParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1524;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1524;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.SENTENCE:
                                        {
                                            this.state = 1514;
                                            this.match(choiceParser.SENTENCE);
                                        }
                                        break;
                                    case choiceParser.BARSTRING:
                                        {
                                            this.state = 1515;
                                            this.match(choiceParser.BARSTRING);
                                        }
                                        break;
                                    case choiceParser.NOTBITMARK:
                                        {
                                            this.state = 1516;
                                            this.match(choiceParser.NOTBITMARK);
                                        }
                                        break;
                                    case choiceParser.AMP:
                                        {
                                            this.state = 1517;
                                            this.match(choiceParser.AMP);
                                        }
                                        break;
                                    case choiceParser.Greater:
                                        {
                                            this.state = 1518;
                                            this.match(choiceParser.Greater);
                                            this.state = 1519;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === choiceParser.Greater)) {
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
                                    case choiceParser.Less:
                                        {
                                            this.state = 1520;
                                            this.match(choiceParser.Less);
                                            this.state = 1521;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === choiceParser.Less)) {
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
                                    case choiceParser.RightArrow:
                                        {
                                            this.state = 1522;
                                            this.match(choiceParser.RightArrow);
                                        }
                                        break;
                                    case choiceParser.RightAngle:
                                        {
                                            this.state = 1523;
                                            this.match(choiceParser.RightAngle);
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
                    this.state = 1526;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
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
        this.enterRule(_localctx, 196, choiceParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1528;
                this.match(choiceParser.S);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
        if (!choiceParser.__ATN) {
            choiceParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(choiceParser._serializedATN));
        }
        return choiceParser.__ATN;
    }
}
exports.choiceParser = choiceParser;
choiceParser.OPDOT = 1;
choiceParser.S = 2;
choiceParser.BitMultichoice1 = 3;
choiceParser.BitMultichoice = 4;
choiceParser.BitMultiresp1 = 5;
choiceParser.BitMultiresp = 6;
choiceParser.BitMultichoicetext = 7;
choiceParser.BitHighlighttext = 8;
choiceParser.COMMENT = 9;
choiceParser.Image_type = 10;
choiceParser.Audio_type = 11;
choiceParser.Video_type = 12;
choiceParser.OPDOLL = 13;
choiceParser.OPBUL = 14;
choiceParser.OPESC = 15;
choiceParser.OPRANGLES = 16;
choiceParser.OPRANGLEL = 17;
choiceParser.OPDANGLE = 18;
choiceParser.OPU = 19;
choiceParser.OPB = 20;
choiceParser.OPQ = 21;
choiceParser.OPA = 22;
choiceParser.OPP = 23;
choiceParser.OPM = 24;
choiceParser.OPS = 25;
choiceParser.OPR = 26;
choiceParser.OPC = 27;
choiceParser.OPHASH = 28;
choiceParser.CL = 29;
choiceParser.COLON = 30;
choiceParser.AMP = 31;
choiceParser.DBLCOLON = 32;
choiceParser.PLUS = 33;
choiceParser.DotAt = 34;
choiceParser.Greater = 35;
choiceParser.Less = 36;
choiceParser.Lparen = 37;
choiceParser.Rparen = 38;
choiceParser.RightAngle = 39;
choiceParser.RightArrow = 40;
choiceParser.DBLEQ = 41;
choiceParser.HSPL = 42;
choiceParser.HSPL2 = 43;
choiceParser.SSPL = 44;
choiceParser.SSPL2 = 45;
choiceParser.StrParen = 46;
choiceParser.DCANY = 47;
choiceParser.ArticleText = 48;
choiceParser.NOTCL = 49;
choiceParser.NUMERIC = 50;
choiceParser.STRING = 51;
choiceParser.NL = 52;
choiceParser.NOTBITMARK = 53;
choiceParser.SENTENCE = 54;
choiceParser.BARSTRING = 55;
choiceParser.OPAT = 56;
choiceParser.AtProgress = 57;
choiceParser.AtReference = 58;
choiceParser.AtWidth = 59;
choiceParser.AtHeight = 60;
choiceParser.AtProgressPoints = 61;
choiceParser.AtShortanswer = 62;
choiceParser.AtLonganswer = 63;
choiceParser.AtExampleWithStr = 64;
choiceParser.AtExamplecol = 65;
choiceParser.AtExamplecl = 66;
choiceParser.AtPartialAnswerS = 67;
choiceParser.AtPartialAnswer = 68;
choiceParser.AtLabeltrue = 69;
choiceParser.AtLabelfalse = 70;
choiceParser.AtPoints = 71;
choiceParser.AtSrc = 72;
choiceParser.AtPartner = 73;
choiceParser.OPATALT = 74;
choiceParser.OPAMARK = 75;
choiceParser.ShowInIndex = 76;
choiceParser.OpAtCaption = 77;
choiceParser.OpAtLicense = 78;
choiceParser.OpAtCopyright = 79;
choiceParser.OpAtSearch = 80;
choiceParser.OpAtIsTracked = 81;
choiceParser.OpAtIsInfoOnly = 82;
choiceParser.AtDate = 83;
choiceParser.Http = 84;
choiceParser.Https = 85;
choiceParser.AmpAudio = 86;
choiceParser.AmpImage = 87;
choiceParser.AmpImageZoom = 88;
choiceParser.AmpImageWAudio = 89;
choiceParser.AmpVideo = 90;
choiceParser.AmpArticle = 91;
choiceParser.AmpDocument = 92;
choiceParser.AmpApp = 93;
choiceParser.AmpWebsite = 94;
choiceParser.AmpStillImageFilm = 95;
choiceParser.AmpPdf = 96;
choiceParser.OpAmpAudio = 97;
choiceParser.OpAmpImage = 98;
choiceParser.OpAmpImageZoom = 99;
choiceParser.OpAmpImageWAudio = 100;
choiceParser.OpAmpVideo = 101;
choiceParser.OpAmpArticle = 102;
choiceParser.OpAmpArticleAtt = 103;
choiceParser.OpAmpDocument = 104;
choiceParser.OpAmpApp = 105;
choiceParser.OpAmpWebsite = 106;
choiceParser.OpAmpStillImageFilm = 107;
choiceParser.BracEnclose = 108;
choiceParser.AmpAudioLink = 109;
choiceParser.AmpImageLink = 110;
choiceParser.AmpVideoLink = 111;
choiceParser.AmpArticleLink = 112;
choiceParser.AmpDocumentLink = 113;
choiceParser.AmpAppLink = 114;
choiceParser.AmpWebsiteLink = 115;
choiceParser.AmpStillImageFilmLink = 116;
choiceParser.OpAmpAudioLink = 117;
choiceParser.OpAmpImageLink = 118;
choiceParser.OpAmpVideoLink = 119;
choiceParser.OpAmpArticleLink = 120;
choiceParser.OpAmpDocumentLink = 121;
choiceParser.OpAmpAppLink = 122;
choiceParser.OpAmpWebsiteLink = 123;
choiceParser.OpAmpStillImageFilmLink = 124;
choiceParser.AmpImageEmbed = 125;
choiceParser.AmpVideoEmbed = 126;
choiceParser.AmpAudioEmbed = 127;
choiceParser.AmpDocumentEmbed = 128;
choiceParser.AmpStillImageFilmEmbed = 129;
choiceParser.OpAmpImageEmbed = 130;
choiceParser.OpAmpVideoEmbed = 131;
choiceParser.OpAmpAudioEmbed = 132;
choiceParser.OpAmpDocumentEmbed = 133;
choiceParser.OpAmpStillImageFilmEmbed = 134;
choiceParser.BitmarkMinus = 135;
choiceParser.BitmarkPlus = 136;
choiceParser.ColonText = 137;
choiceParser.ColonJson = 138;
choiceParser.Prosemirror = 139;
choiceParser.Placeholder = 140;
choiceParser.BASIC = 141;
choiceParser.JPG = 142;
choiceParser.PNG = 143;
choiceParser.GIF = 144;
choiceParser.SVG = 145;
choiceParser.MP2 = 146;
choiceParser.MP3 = 147;
choiceParser.MP4 = 148;
choiceParser.FLV = 149;
choiceParser.WMV = 150;
choiceParser.MPEG = 151;
choiceParser.MPG = 152;
choiceParser.TEL = 153;
choiceParser.DotArticleAtt = 154;
choiceParser.STAR = 155;
choiceParser.URL = 156;
choiceParser.LIST_LINE = 157;
choiceParser.ENCLBARS = 158;
choiceParser.RULE_bitmark = 0;
choiceParser.RULE_bitmark_ = 1;
choiceParser.RULE_multi_choices = 2;
choiceParser.RULE_multiple_choice = 3;
choiceParser.RULE_mcrsep = 4;
choiceParser.RULE_mcrmisc = 5;
choiceParser.RULE_multiple_choice_1 = 6;
choiceParser.RULE_multiple_response = 7;
choiceParser.RULE_multiple_response_1 = 8;
choiceParser.RULE_multiple_choice_text = 9;
choiceParser.RULE_multitxt_il_choice = 10;
choiceParser.RULE_highlight_text = 11;
choiceParser.RULE_highlight_il_choice = 12;
choiceParser.RULE_bitElem = 13;
choiceParser.RULE_gap = 14;
choiceParser.RULE_single_gap = 15;
choiceParser.RULE_choices = 16;
choiceParser.RULE_cplus = 17;
choiceParser.RULE_cminus = 18;
choiceParser.RULE_choice_plus = 19;
choiceParser.RULE_choice_minus = 20;
choiceParser.RULE_il_choice_plus = 21;
choiceParser.RULE_il_choice_minus = 22;
choiceParser.RULE_headed_inline_choices = 23;
choiceParser.RULE_highlight_inline_choices = 24;
choiceParser.RULE_headed_choices = 25;
choiceParser.RULE_choice_head = 26;
choiceParser.RULE_inline_choices = 27;
choiceParser.RULE_ml_example = 28;
choiceParser.RULE_il_follow = 29;
choiceParser.RULE_longans = 30;
choiceParser.RULE_shortans = 31;
choiceParser.RULE_resource = 32;
choiceParser.RULE_bullet_item = 33;
choiceParser.RULE_atpoint = 34;
choiceParser.RULE_format = 35;
choiceParser.RULE_resource_format = 36;
choiceParser.RULE_resource_format_extra = 37;
choiceParser.RULE_format2 = 38;
choiceParser.RULE_image_format = 39;
choiceParser.RULE_video_format = 40;
choiceParser.RULE_article_format = 41;
choiceParser.RULE_document_format = 42;
choiceParser.RULE_app_format = 43;
choiceParser.RULE_website_format = 44;
choiceParser.RULE_stillimagefilm_format = 45;
choiceParser.RULE_op_article_format = 46;
choiceParser.RULE_op_document_format = 47;
choiceParser.RULE_op_app_format = 48;
choiceParser.RULE_op_website_format = 49;
choiceParser.RULE_op_video_format = 50;
choiceParser.RULE_op_stillimagefilm_format = 51;
choiceParser.RULE_articlebit = 52;
choiceParser.RULE_documentbit = 53;
choiceParser.RULE_websitebit = 54;
choiceParser.RULE_appbit = 55;
choiceParser.RULE_stillimagefilmbit = 56;
choiceParser.RULE_stillimg_one = 57;
choiceParser.RULE_videobit = 58;
choiceParser.RULE_video_one = 59;
choiceParser.RULE_imagebit = 60;
choiceParser.RULE_image_one = 61;
choiceParser.RULE_op_image_format = 62;
choiceParser.RULE_image_chained = 63;
choiceParser.RULE_image_chained4match = 64;
choiceParser.RULE_audiobit = 65;
choiceParser.RULE_audio_one = 66;
choiceParser.RULE_audio_format = 67;
choiceParser.RULE_op_audio_format = 68;
choiceParser.RULE_resource_chained = 69;
choiceParser.RULE_telephone = 70;
choiceParser.RULE_url = 71;
choiceParser.RULE_item = 72;
choiceParser.RULE_lead = 73;
choiceParser.RULE_angleref = 74;
choiceParser.RULE_example = 75;
choiceParser.RULE_bracketed_text = 76;
choiceParser.RULE_reference = 77;
choiceParser.RULE_progress = 78;
choiceParser.RULE_dateprop = 79;
choiceParser.RULE_dateprop_chained = 80;
choiceParser.RULE_instruction = 81;
choiceParser.RULE_hint = 82;
choiceParser.RULE_title = 83;
choiceParser.RULE_bool_label = 84;
choiceParser.RULE_progress_points = 85;
choiceParser.RULE_istracked = 86;
choiceParser.RULE_isinfoonly = 87;
choiceParser.RULE_atdef = 88;
choiceParser.RULE_atdef_ = 89;
choiceParser.RULE_dollarans = 90;
choiceParser.RULE_anchor = 91;
choiceParser.RULE_dclines = 92;
choiceParser.RULE_lines = 93;
choiceParser.RULE_s_and_w = 94;
choiceParser.RULE_clnsp = 95;
choiceParser.RULE_sspl = 96;
choiceParser.RULE_words = 97;
choiceParser.RULE_sp = 98;
// tslint:disable:no-trailing-whitespace
choiceParser.ruleNames = [
    "bitmark", "bitmark_", "multi_choices", "multiple_choice", "mcrsep", "mcrmisc",
    "multiple_choice_1", "multiple_response", "multiple_response_1", "multiple_choice_text",
    "multitxt_il_choice", "highlight_text", "highlight_il_choice", "bitElem",
    "gap", "single_gap", "choices", "cplus", "cminus", "choice_plus", "choice_minus",
    "il_choice_plus", "il_choice_minus", "headed_inline_choices", "highlight_inline_choices",
    "headed_choices", "choice_head", "inline_choices", "ml_example", "il_follow",
    "longans", "shortans", "resource", "bullet_item", "atpoint", "format",
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
    "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dclines", "lines",
    "s_and_w", "clnsp", "sspl", "words", "sp",
];
choiceParser._LITERAL_NAMES = [
    undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, "'[^'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'",
    "'('", "')'", "'\u25BA'", "'\u2192'", "'=='", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'[@'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'http://'", "'https://'",
    "'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'", "'&video'",
    "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'",
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
choiceParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitMultichoice1", "BitMultichoice", "BitMultiresp1",
    "BitMultiresp", "BitMultichoicetext", "BitHighlighttext", "COMMENT", "Image_type",
    "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
    "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
    "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
    "Less", "Lparen", "Rparen", "RightAngle", "RightArrow", "DBLEQ", "HSPL",
    "HSPL2", "SSPL", "SSPL2", "StrParen", "DCANY", "ArticleText", "NOTCL",
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
choiceParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(choiceParser._LITERAL_NAMES, choiceParser._SYMBOLIC_NAMES, []);
choiceParser._serializedATNSegments = 3;
choiceParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA0\u05FD\x04" +
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
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x03\x02\x03\x02\x07\x02\xCB\n\x02\f" +
    "\x02\x0E\x02\xCE\v\x02\x03\x02\x07\x02\xD1\n\x02\f\x02\x0E\x02\xD4\v\x02" +
    "\x06\x02\xD6\n\x02\r\x02\x0E\x02\xD7\x03\x02\x07\x02\xDB\n\x02\f\x02\x0E" +
    "\x02\xDE\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x05\x04\xEA\n\x04\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x06\x05\xF0\n\x05\r\x05\x0E\x05\xF1\x03\x05\x03\x05\x07\x05\xF6\n" +
    "\x05\f\x05\x0E\x05\xF9\v\x05\x07\x05\xFB\n\x05\f\x05\x0E\x05\xFE\v\x05" +
    "\x03\x05\x07\x05\u0101\n\x05\f\x05\x0E\x05\u0104\v\x05\x03\x05\x03\x05" +
    "\x07\x05\u0108\n\x05\f\x05\x0E\x05\u010B\v\x05\x03\x05\x05\x05\u010E\n" +
    "\x05\x03\x05\x05\x05\u0111\n\x05\x03\x05\x03\x05\x06\x05\u0115\n\x05\r" +
    "\x05\x0E\x05\u0116\x03\x05\x03\x05\x05\x05\u011B\n\x05\x03\x05\x03\x05" +
    "\x03\x05\x05\x05\u0120\n\x05\x03\x05\x07\x05\u0123\n\x05\f\x05\x0E\x05" +
    "\u0126\v\x05\x03\x05\x03\x05\x07\x05\u012A\n\x05\f\x05\x0E\x05\u012D\v" +
    "\x05\x03\x05\x07\x05\u0130\n\x05\f\x05\x0E\x05\u0133\v\x05\x05\x05\u0135" +
    "\n\x05\x03\x06\x03\x06\x05\x06\u0139\n\x06\x03\x07\x07\x07\u013C\n\x07" +
    "\f\x07\x0E\x07\u013F\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x06" +
    "\b\u0147\n\b\r\b\x0E\b\u0148\x03\b\x03\b\x07\b\u014D\n\b\f\b\x0E\b\u0150" +
    "\v\b\x07\b\u0152\n\b\f\b\x0E\b\u0155\v\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
    "\x03\t\x06\t\u015D\n\t\r\t\x0E\t\u015E\x03\t\x03\t\x07\t\u0163\n\t\f\t" +
    "\x0E\t\u0166\v\t\x07\t\u0168\n\t\f\t\x0E\t\u016B\v\t\x03\t\x07\t\u016E" +
    "\n\t\f\t\x0E\t\u0171\v\t\x03\t\x03\t\x07\t\u0175\n\t\f\t\x0E\t\u0178\v" +
    "\t\x03\t\x05\t\u017B\n\t\x03\t\x03\t\x06\t\u017F\n\t\r\t\x0E\t\u0180\x03" +
    "\t\x03\t\x05\t\u0185\n\t\x03\t\x03\t\x07\t\u0189\n\t\f\t\x0E\t\u018C\v" +
    "\t\x05\t\u018E\n\t\x03\t\x07\t\u0191\n\t\f\t\x0E\t\u0194\v\t\x03\t\x03" +
    "\t\x07\t\u0198\n\t\f\t\x0E\t\u019B\v\t\x03\t\x07\t\u019E\n\t\f\t\x0E\t" +
    "\u01A1\v\t\x05\t\u01A3\n\t\x03\n\x03\n\x03\n\x03\n\x06\n\u01A9\n\n\r\n" +
    "\x0E\n\u01AA\x03\n\x03\n\x07\n\u01AF\n\n\f\n\x0E\n\u01B2\v\n\x06\n\u01B4" +
    "\n\n\r\n\x0E\n\u01B5\x03\n\x03\n\x07\n\u01BA\n\n\f\n\x0E\n\u01BD\v\n\x03" +
    "\n\x03\n\x07\n\u01C1\n\n\f\n\x0E\n\u01C4\v\n\x03\n\x07\n\u01C7\n\n\f\n" +
    "\x0E\n\u01CA\v\n\x05\n\u01CC\n\n\x03\v\x03\v\x03\v\x03\v\x06\v\u01D2\n" +
    "\v\r\v\x0E\v\u01D3\x03\v\x03\v\x07\v\u01D8\n\v\f\v\x0E\v\u01DB\v\v\x07" +
    "\v\u01DD\n\v\f\v\x0E\v\u01E0\v\v\x03\v\x07\v\u01E3\n\v\f\v\x0E\v\u01E6" +
    "\v\v\x03\v\x07\v\u01E9\n\v\f\v\x0E\v\u01EC\v\v\x03\v\x03\v\x07\v\u01F0" +
    "\n\v\f\v\x0E\v\u01F3\v\v\x03\v\x07\v\u01F6\n\v\f\v\x0E\v\u01F9\v\v\x05" +
    "\v\u01FB\n\v\x03\f\x03\f\x07\f\u01FF\n\f\f\f\x0E\f\u0202\v\f\x03\f\x03" +
    "\f\x03\f\x06\f\u0207\n\f\r\f\x0E\f\u0208\x06\f\u020B\n\f\r\f\x0E\f\u020C" +
    "\x03\r\x03\r\x03\r\x03\r\x06\r\u0213\n\r\r\r\x0E\r\u0214\x03\r\x03\r\x07" +
    "\r\u0219\n\r\f\r\x0E\r\u021C\v\r\x07\r\u021E\n\r\f\r\x0E\r\u0221\v\r\x03" +
    "\r\x07\r\u0224\n\r\f\r\x0E\r\u0227\v\r\x03\r\x07\r\u022A\n\r\f\r\x0E\r" +
    "\u022D\v\r\x03\r\x03\r\x07\r\u0231\n\r\f\r\x0E\r\u0234\v\r\x03\r\x07\r" +
    "\u0237\n\r\f\r\x0E\r\u023A\v\r\x05\r\u023C\n\r\x03\x0E\x03\x0E\x07\x0E" +
    "\u0240\n\x0E\f\x0E\x0E\x0E\u0243\v\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E" +
    "\u0248\n\x0E\r\x0E\x0E\x0E\u0249\x06\x0E\u024C\n\x0E\r\x0E\x0E\x0E\u024D" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0268\n\x0F\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0270\n\x10\f\x10" +
    "\x0E\x10\u0273\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0279\n\x11" +
    "\x03\x11\x07\x11\u027C\n\x11\f\x11\x0E\x11\u027F\v\x11\x03\x11\x03\x11" +
    "\x03\x12\x03\x12\x05\x12\u0285\n\x12\x03\x12\x05\x12\u0288\n\x12\x03\x12" +
    "\x07\x12\u028B\n\x12\f\x12\x0E\x12\u028E\v\x12\x03\x12\x03\x12\x05\x12" +
    "\u0292\n\x12\x07\x12\u0294\n\x12\f\x12\x0E\x12\u0297\v\x12\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x07\x13\u029E\n\x13\f\x13\x0E\x13\u02A1\v" +
    "\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u02A8\n\x14\f\x14" +
    "\x0E\x14\u02AB\v\x14\x03\x15\x05\x15\u02AE\n\x15\x03\x15\x03\x15\x05\x15" +
    "\u02B2\n\x15\x03\x15\x03\x15\x06\x15\u02B6\n\x15\r\x15\x0E\x15\u02B7\x03" +
    "\x15\x03\x15\x03\x16\x05\x16\u02BD\n\x16\x03\x16\x03\x16\x05\x16\u02C1" +
    "\n\x16\x03\x16\x03\x16\x06\x16\u02C5\n\x16\r\x16\x0E\x16\u02C6\x03\x16" +
    "\x03\x16\x03\x17\x05\x17\u02CC\n\x17\x03\x17\x03\x17\x05\x17\u02D0\n\x17" +
    "\x03\x17\x03\x17\x03\x17\x03\x18\x05\x18\u02D6\n\x18\x03\x18\x03\x18\x05" +
    "\x18\u02DA\n\x18\x03\x18\x03\x18\x03\x18\x03\x19\x05\x19\u02E0\n\x19\x03" +
    "\x19\x03\x19\x07\x19\u02E4\n\x19\f\x19\x0E\x19\u02E7\v\x19\x03\x1A\x05" +
    "\x1A\u02EA\n\x1A\x03\x1A\x03\x1A\x07\x1A\u02EE\n\x1A\f\x1A\x0E\x1A\u02F1" +
    "\v\x1A\x03\x1B\x05\x1B\u02F4\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u02FE\n\x1D\x03\x1D\x03\x1D\x07\x1D" +
    "\u0302\n\x1D\f\x1D\x0E\x1D\u0305\v\x1D\x03\x1E\x03\x1E\x05\x1E\u0309\n" +
    "\x1E\x03\x1E\x03\x1E\x05\x1E\u030D\n\x1E\x05\x1E\u030F\n\x1E\x03\x1E\x03" +
    "\x1E\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u0316\n\x1F\r\x1F\x0E\x1F\u0317\x03" +
    "\x1F\x05\x1F\u031B\n\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03" +
    "#\x03#\x05#\u0327\n#\x03$\x03$\x03$\x03$\x03%\x07%\u032E\n%\f%\x0E%\u0331" +
    "\v%\x03%\x03%\x03%\x07%\u0336\n%\f%\x0E%\u0339\v%\x03&\x03&\x03\'\x03" +
    "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0346\n\'\x03(\x03" +
    "(\x03(\x03(\x03(\x05(\u034D\n(\x03)\x03)\x03)\x05)\u0352\n)\x03)\x03)" +
    "\x05)\u0356\n)\x03)\x03)\x05)\u035A\n)\x03)\x05)\u035D\n)\x03*\x03*\x03" +
    "*\x05*\u0362\n*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03" +
    "0\x030\x031\x031\x032\x032\x033\x033\x034\x034\x034\x054\u0379\n4\x03" +
    "4\x034\x034\x054\u037E\n4\x034\x034\x034\x054\u0383\n4\x054\u0385\n4\x03" +
    "5\x035\x036\x036\x036\x036\x036\x036\x056\u038F\n6\x037\x037\x037\x03" +
    "7\x037\x037\x037\x037\x057\u0399\n7\x038\x038\x038\x038\x038\x038\x03" +
    "8\x038\x058\u03A3\n8\x039\x039\x039\x039\x059\u03A9\n9\x039\x039\x039" +
    "\x039\x039\x059\u03B0\n9\x03:\x03:\x07:\u03B4\n:\f:\x0E:\u03B7\v:\x03" +
    ";\x03;\x03;\x07;\u03BC\n;\f;\x0E;\u03BF\v;\x03;\x03;\x03;\x03<\x03<\x07" +
    "<\u03C6\n<\f<\x0E<\u03C9\v<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05" +
    "=\u03D3\n=\x03>\x03>\x07>\u03D7\n>\f>\x0E>\u03DA\v>\x03>\x03>\x05>\u03DE" +
    "\n>\x03?\x03?\x03?\x07?\u03E3\n?\f?\x0E?\u03E6\v?\x03?\x03?\x03?\x03@" +
    "\x03@\x03@\x05@\u03EE\n@\x03@\x03@\x05@\u03F2\n@\x03@\x03@\x05@\u03F6" +
    "\n@\x03@\x05@\u03F9\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
    "A\x03A\x07A\u0406\nA\fA\x0EA\u0409\vA\x03A\x05A\u040C\nA\x03B\x03B\x03" +
    "B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u0419\nB\fB\x0EB\u041C" +
    "\vB\x03B\x05B\u041F\nB\x03C\x03C\x07C\u0423\nC\fC\x0EC\u0426\vC\x03D\x03" +
    "D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0430\nD\x03E\x03E\x03E\x05E\u0435" +
    "\nE\x03E\x03E\x03E\x05E\u043A\nE\x05E\u043C\nE\x03F\x03F\x03F\x05F\u0441" +
    "\nF\x03F\x03F\x03F\x05F\u0446\nF\x03F\x03F\x03F\x05F\u044B\nF\x05F\u044D" +
    "\nF\x03G\x03G\x03G\x05G\u0452\nG\x03G\x03G\x07G\u0456\nG\fG\x0EG\u0459" +
    "\vG\x03G\x03G\x06G\u045D\nG\rG\x0EG\u045E\x03G\x03G\x03G\x03G\x03G\x03" +
    "G\x03G\x07G\u0468\nG\fG\x0EG\u046B\vG\x03G\x05G\u046E\nG\x03H\x03H\x03" +
    "H\x03H\x03I\x03I\x03J\x03J\x03J\x07J\u0479\nJ\fJ\x0EJ\u047C\vJ\x03J\x05" +
    "J\u047F\nJ\x03J\x03J\x03J\x03J\x07J\u0485\nJ\fJ\x0EJ\u0488\vJ\x03J\x03" +
    "J\x07J\u048C\nJ\fJ\x0EJ\u048F\vJ\x03J\x05J\u0492\nJ\x05J\u0494\nJ\x03" +
    "K\x03K\x03K\x03K\x07K\u049A\nK\fK\x0EK\u049D\vK\x03K\x03K\x03L\x03L\x05" +
    "L\u04A3\nL\x03L\x03L\x03L\x05L\u04A8\nL\x03L\x05L\u04AB\nL\x03M\x03M\x03" +
    "M\x03M\x05M\u04B1\nM\x03M\x05M\u04B4\nM\x03N\x03N\x05N\u04B8\nN\x03N\x03" +
    "N\x03N\x07N\u04BD\nN\fN\x0EN\u04C0\vN\x07N\u04C2\nN\fN\x0EN\u04C5\vN\x03" +
    "N\x07N\u04C8\nN\fN\x0EN\u04CB\vN\x07N\u04CD\nN\fN\x0EN\u04D0\vN\x03N\x03" +
    "N\x03N\x03N\x03N\x07N\u04D7\nN\fN\x0EN\u04DA\vN\x03N\x05N\u04DD\nN\x03" +
    "O\x03O\x03O\x03O\x03O\x06O\u04E4\nO\rO\x0EO\u04E5\x03O\x03O\x03O\x03O" +
    "\x03O\x03O\x03O\x07O\u04EF\nO\fO\x0EO\u04F2\vO\x03O\x05O\u04F5\nO\x03" +
    "P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x06Q\u04FF\nQ\rQ\x0EQ\u0500\x03Q" +
    "\x03Q\x05Q\u0505\nQ\x03R\x03R\x03R\x03R\x06R\u050B\nR\rR\x0ER\u050C\x03" +
    "R\x03R\x03S\x03S\x07S\u0513\nS\fS\x0ES\u0516\vS\x03S\x05S\u0519\nS\x03" +
    "S\x03S\x03S\x07S\u051E\nS\fS\x0ES\u0521\vS\x07S\u0523\nS\fS\x0ES\u0526" +
    "\vS\x03S\x07S\u0529\nS\fS\x0ES\u052C\vS\x07S\u052E\nS\fS\x0ES\u0531\v" +
    "S\x03S\x03S\x03S\x07S\u0536\nS\fS\x0ES\u0539\vS\x03S\x05S\u053C\nS\x03" +
    "S\x05S\u053F\nS\x03T\x03T\x06T\u0543\nT\rT\x0ET\u0544\x03T\x03T\x03U\x03" +
    "U\x03U\x06U\u054C\nU\rU\x0EU\u054D\x03U\x03U\x03U\x03U\x03U\x05U\u0555" +
    "\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u055F\nV\x03W\x03W\x03" +
    "W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u056A\nW\x03X\x03X\x03X\x03X\x03" +
    "Y\x03Y\x03Y\x03Y\x03Z\x03Z\x07Z\u0576\nZ\fZ\x0EZ\u0579\vZ\x03Z\x07Z\u057C" +
    "\nZ\fZ\x0EZ\u057F\vZ\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x07[\u0588\n[" +
    "\f[\x0E[\u058B\v[\x03[\x03[\x03[\x03[\x07[\u0591\n[\f[\x0E[\u0594\v[\x03" +
    "[\x05[\u0597\n[\x03\\\x03\\\x03\\\x03\\\x06\\\u059D\n\\\r\\\x0E\\\u059E" +
    "\x03\\\x03\\\x03\\\x03\\\x03\\\x07\\\u05A6\n\\\f\\\x0E\\\u05A9\v\\\x03" +
    "\\\x05\\\u05AC\n\\\x03]\x03]\x05]\u05B0\n]\x03]\x03]\x03^\x03^\x03_\x03" +
    "_\x05_\u05B8\n_\x06_\u05BA\n_\r_\x0E_\u05BB\x03`\x03`\x06`\u05C0\n`\r" +
    "`\x0E`\u05C1\x03`\x05`\u05C5\n`\x03`\x03`\x06`\u05C9\n`\r`\x0E`\u05CA" +
    "\x03`\x05`\u05CE\n`\x03`\x03`\x07`\u05D2\n`\f`\x0E`\u05D5\v`\x03`\x03" +
    "`\x07`\u05D9\n`\f`\x0E`\u05DC\v`\x03`\x03`\x07`\u05E0\n`\f`\x0E`\u05E3" +
    "\v`\x03`\x03`\x05`\u05E7\n`\x03a\x03a\x03b\x03b\x03c\x03c\x03c\x03c\x03" +
    "c\x03c\x03c\x03c\x03c\x03c\x06c\u05F7\nc\rc\x0Ec\u05F8\x03d\x03d\x03d" +
    "\x06\u0407\u041A\u0469\u0592\x02\x02e\x02\x02\x04\x02\x06\x02\b\x02\n" +
    "\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
    "\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
    "\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
    "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
    "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
    "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
    "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
    "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
    "\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\x02\x16\x03\x02,-\x03" +
    "\x02\x1F\x1F\b\x02]^`aov\x80\x83\x89\x8A\x8C\x8E\x05\x02\\\\qq\x80\x80" +
    "\x04\x02]]rr\x05\x02^^ss\x82\x82\x04\x02__tt\x04\x02``uu\x05\x02aavv\x83" +
    "\x83\x04\x02hhzz\x05\x02jj{{\x87\x87\x04\x02kk||\x04\x02ll}}\x05\x02m" +
    "m~~\x88\x88\x03\x02=>\x04\x02LLOR\x04\x02  \"\"\x03\x02./\x03\x02%%\x03" +
    "\x02&&\x02\u06D2\x02\xD5\x03\x02\x02\x02\x04\xE1\x03\x02\x02\x02\x06\xE9" +
    "\x03\x02\x02\x02\b\xEB\x03\x02\x02\x02\n\u0138\x03\x02\x02\x02\f\u013D" +
    "\x03\x02\x02\x02\x0E\u0142\x03\x02\x02\x02\x10\u0158\x03\x02\x02\x02\x12" +
    "\u01A4\x03\x02\x02\x02\x14\u01CD\x03\x02\x02\x02\x16\u020A\x03\x02\x02" +
    "\x02\x18\u020E\x03\x02\x02\x02\x1A\u024B\x03\x02\x02\x02\x1C\u0267\x03" +
    "\x02\x02\x02\x1E\u0269\x03\x02\x02\x02 \u0274\x03\x02\x02\x02\"\u0284" +
    "\x03\x02\x02\x02$\u0298\x03\x02\x02\x02&\u02A2\x03\x02\x02\x02(\u02AD" +
    "\x03\x02\x02\x02*\u02BC\x03\x02\x02\x02,\u02CB\x03\x02\x02\x02.\u02D5" +
    "\x03\x02\x02\x020\u02DF\x03\x02\x02\x022\u02E9\x03\x02\x02\x024\u02F3" +
    "\x03\x02\x02\x026\u02F7\x03\x02\x02\x028\u02FD\x03\x02\x02\x02:\u0306" +
    "\x03\x02\x02\x02<\u031A\x03\x02\x02\x02>\u031C\x03\x02\x02\x02@\u031E" +
    "\x03\x02\x02\x02B\u0320\x03\x02\x02\x02D\u0322\x03\x02\x02\x02F\u0328" +
    "\x03\x02\x02\x02H\u032F\x03\x02\x02\x02J\u033A\x03\x02\x02\x02L\u0345" +
    "\x03\x02\x02\x02N\u034C\x03\x02\x02\x02P\u035C\x03\x02\x02\x02R\u035E" +
    "\x03\x02\x02\x02T\u0363\x03\x02\x02\x02V\u0365\x03\x02\x02\x02X\u0367" +
    "\x03\x02\x02\x02Z\u0369\x03\x02\x02\x02\\\u036B\x03\x02\x02\x02^\u036D" +
    "\x03\x02\x02\x02`\u036F\x03\x02\x02\x02b\u0371\x03\x02\x02\x02d\u0373" +
    "\x03\x02\x02\x02f\u0384\x03\x02\x02\x02h\u0386\x03\x02\x02\x02j\u038E" +
    "\x03\x02\x02\x02l\u0390\x03\x02\x02\x02n\u039A\x03\x02\x02\x02p\u03A4" +
    "\x03\x02\x02\x02r\u03B1\x03\x02\x02\x02t\u03B8\x03\x02\x02\x02v\u03C3" +
    "\x03\x02\x02\x02x\u03CA\x03\x02\x02\x02z\u03D4\x03\x02\x02\x02|\u03DF" +
    "\x03\x02\x02\x02~\u03F8\x03\x02\x02\x02\x80\u040B\x03\x02\x02\x02\x82" +
    "\u041E\x03\x02\x02\x02\x84\u0420\x03\x02\x02\x02\x86\u0427\x03\x02\x02" +
    "\x02\x88\u043B\x03\x02\x02\x02\x8A\u044C\x03\x02\x02\x02\x8C\u046D\x03" +
    "\x02\x02\x02\x8E\u046F\x03\x02\x02\x02\x90\u0473\x03\x02\x02\x02\x92\u0493" +
    "\x03\x02\x02\x02\x94\u0495\x03\x02\x02\x02\x96\u04AA\x03\x02\x02\x02\x98" +
    "\u04B3\x03\x02\x02\x02\x9A\u04DC\x03\x02\x02\x02\x9C\u04F4\x03\x02\x02" +
    "\x02\x9E\u04F6\x03\x02\x02\x02\xA0\u04FA\x03\x02\x02\x02\xA2\u0506\x03" +
    "\x02\x02\x02\xA4\u053E\x03\x02\x02\x02\xA6\u0540\x03\x02\x02\x02\xA8\u0554" +
    "\x03\x02\x02\x02\xAA\u055E\x03\x02\x02\x02\xAC\u0569\x03\x02\x02\x02\xAE" +
    "\u056B\x03\x02\x02\x02\xB0\u056F\x03\x02\x02\x02\xB2\u0573\x03\x02\x02" +
    "\x02\xB4\u0596\x03\x02\x02\x02\xB6\u05AB\x03\x02\x02\x02\xB8\u05AD\x03" +
    "\x02\x02\x02\xBA\u05B3\x03\x02\x02\x02\xBC\u05B9\x03\x02\x02\x02\xBE\u05E6" +
    "\x03\x02\x02\x02\xC0\u05E8\x03\x02\x02\x02\xC2\u05EA\x03\x02\x02\x02\xC4" +
    "\u05F6\x03\x02\x02\x02\xC6\u05FA\x03\x02\x02\x02\xC8\xD2\x05\x04\x03\x02" +
    "\xC9\xCB\x07\x04\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02" +
    "\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02" +
    "\xCE\xCC\x03\x02\x02\x02\xCF\xD1\x076\x02\x02\xD0\xCC\x03\x02\x02\x02" +
    "\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
    "\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xC8\x03\x02\x02\x02" +
    "\xD6\xD7\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
    "\xD8\xDC\x03\x02\x02\x02\xD9\xDB\x076\x02\x02\xDA\xD9\x03\x02\x02\x02" +
    "\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02" +
    "\xDD\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x07\x02\x02\x03" +
    "\xE0\x03\x03\x02\x02\x02\xE1\xE2\x05\x06\x04\x02\xE2\x05\x03\x02\x02\x02" +
    "\xE3\xEA\x05\b\x05\x02\xE4\xEA\x05\x0E\b\x02\xE5\xEA\x05\x10\t\x02\xE6" +
    "\xEA\x05\x12\n\x02\xE7\xEA\x05\x14\v\x02\xE8\xEA\x05\x18\r\x02\xE9\xE3" +
    "\x03\x02\x02\x02\xE9\xE4\x03\x02\x02\x02\xE9\xE5\x03\x02\x02\x02\xE9\xE6" +
    "\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\x07" +
    "\x03\x02\x02\x02\xEB\xEC\x07\x06\x02\x02\xEC\xED\x05H%\x02\xED\xEF\x07" +
    "\x1F\x02\x02\xEE\xF0\x076\x02\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF1\x03" +
    "\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xFC\x03" +
    "\x02\x02\x02\xF3\xF7\x05\x1C\x0F\x02\xF4\xF6\x076\x02\x02\xF5\xF4\x03" +
    "\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03" +
    "\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xF3\x03" +
    "\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03" +
    "\x02\x02\x02\xFD\u0114\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0101" +
    "\x076\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102" +
    "\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x03\x02" +
    "\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\u010D\x05\n\x06\x02\u0106\u0108" +
    "\x076\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02" +
    "\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C\x03" +
    "\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010E\x05\f\x07\x02\u010D" +
    "\u0109\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110\x03\x02" +
    "\x02\x02\u010F\u0111\x05\xBE`\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111" +
    "\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x05\"\x12\x02" +
    "\u0113\u0115\x03\x02\x02\x02\u0114\u0102\x03\x02\x02\x02\u0115\u0116\x03" +
    "\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
    "\u011A\x03\x02\x02\x02\u0118\u011B\t\x02\x02\x02\u0119\u011B\x076\x02" +
    "\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011F" +
    "\x03\x02\x02\x02\u011C\u011D\x05\x1C\x0F\x02\u011D\u011E\x076\x02\x02" +
    "\u011E\u0120\x03\x02\x02\x02\u011F\u011C\x03\x02\x02\x02\u011F\u0120\x03" +
    "\x02\x02\x02\u0120\u0124\x03\x02\x02\x02\u0121\u0123\x076\x02\x02\u0122" +
    "\u0121\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02" +
    "\x02\x02\u0124\u0125\x03\x02\x02";
choiceParser._serializedATNSegment1 = "\x02\u0125\u0134\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u0131" +
    "\x05B\"\x02\u0128\u012A\x076\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A" +
    "\u012D\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02" +
    "\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012E" +
    "\u0130\x05B\"\x02\u012F\u012B\x03\x02\x02\x02\u0130\u0133\x03\x02\x02" +
    "\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0135" +
    "\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0127\x03\x02\x02\x02" +
    "\u0134\u0135\x03\x02\x02\x02\u0135\t\x03\x02\x02\x02\u0136\u0139\t\x02" +
    "\x02\x02\u0137\u0139\x076\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0137" +
    "\x03\x02\x02\x02\u0139\v\x03\x02\x02\x02\u013A\u013C\x05\x1C\x0F\x02\u013B" +
    "\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02" +
    "\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F" +
    "\u013D\x03\x02\x02\x02\u0140\u0141\x076\x02\x02\u0141\r\x03\x02\x02\x02" +
    "\u0142\u0143\x07\x05\x02\x02\u0143\u0144\x05H%\x02\u0144\u0146\x07\x1F" +
    "\x02\x02\u0145\u0147\x076\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u0148" +
    "\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
    "\u0149\u0153\x03\x02\x02\x02\u014A\u014E\x05\x1C\x0F\x02\u014B\u014D\x07" +
    "6\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E" +
    "\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0152\x03\x02" +
    "\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u014A\x03\x02\x02\x02\u0152" +
    "\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02" +
    "\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156" +
    "\u0157\x05\"\x12\x02\u0157\x0F\x03\x02\x02\x02\u0158\u0159\x07\b\x02\x02" +
    "\u0159\u015A\x05H%\x02\u015A\u015C\x07\x1F\x02\x02\u015B\u015D\x076\x02" +
    "\x02\u015C\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015C" +
    "\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0169\x03\x02\x02\x02" +
    "\u0160\u0164\x05\x1C\x0F\x02\u0161\u0163\x076\x02\x02\u0162\u0161\x03" +
    "\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164" +
    "\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02" +
    "\x02\x02\u0167\u0160\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169" +
    "\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u017E\x03\x02" +
    "\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016E\x076\x02\x02\u016D\u016C" +
    "\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02" +
    "\u016F\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171\u016F\x03" +
    "\x02\x02\x02\u0172\u017A\x05\n\x06\x02\u0173\u0175\x076\x02\x02\u0174" +
    "\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02" +
    "\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02\u0178" +
    "\u0176\x03\x02\x02\x02\u0179\u017B\x05\f\x07\x02\u017A\u0176\x03\x02\x02" +
    "\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D" +
    "\x05\"\x12\x02\u017D\u017F\x03\x02\x02\x02\u017E\u016F\x03\x02\x02\x02" +
    "\u017F\u0180\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03" +
    "\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0185\t\x02\x02\x02\u0183" +
    "\u0185\x076\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0183\x03\x02\x02" +
    "\x02\u0184\u0185\x03\x02\x02\x02\u0185\u018D\x03\x02\x02\x02\u0186\u018A" +
    "\x05\x1C\x0F\x02\u0187\u0189\x076\x02\x02\u0188\u0187\x03\x02\x02\x02" +
    "\u0189\u018C\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03" +
    "\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D" +
    "\u0186\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0192\x03\x02" +
    "\x02\x02\u018F\u0191\x076\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194" +
    "\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02" +
    "\u0193\u01A2\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u019F\x05" +
    "B\"\x02\u0196\u0198\x076\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B" +
    "\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02" +
    "\u019A\u019C\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019E\x05" +
    "B\"\x02\u019D\u0199\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F" +
    "\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A3\x03\x02" +
    "\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u0195\x03\x02\x02\x02\u01A2" +
    "\u01A3\x03\x02\x02\x02\u01A3\x11\x03\x02\x02\x02\u01A4\u01A5\x07\x07\x02" +
    "\x02\u01A5\u01A6\x05H%\x02\u01A6\u01A8\x07\x1F\x02\x02\u01A7\u01A9\x07" +
    "6\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
    "\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01B3\x03\x02" +
    "\x02\x02\u01AC\u01B0\x05\x1C\x0F\x02\u01AD\u01AF\x076\x02\x02\u01AE\u01AD" +
    "\x03\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02" +
    "\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03" +
    "\x02\x02\x02\u01B3\u01AC\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
    "\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02" +
    "\x02\x02\u01B7\u01BB\x05\"\x12\x02\u01B8\u01BA\x076\x02\x02\u01B9\u01B8" +
    "\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02" +
    "\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01CB\x03\x02\x02\x02\u01BD\u01BB\x03" +
    "\x02\x02\x02\u01BE\u01C8\x05B\"\x02\u01BF\u01C1\x076\x02\x02\u01C0\u01BF" +
    "\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02" +
    "\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C2\x03" +
    "\x02\x02\x02\u01C5\u01C7\x05B\"\x02\u01C6\u01C2\x03\x02\x02\x02\u01C7" +
    "\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03\x02" +
    "\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB" +
    "\u01BE\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\x13\x03\x02\x02" +
    "\x02\u01CD\u01CE\x07\t\x02\x02\u01CE\u01CF\x05H%\x02\u01CF\u01D1\x07\x1F" +
    "\x02\x02\u01D0\u01D2\x076\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\u01D3" +
    "\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
    "\u01D4\u01DE\x03\x02\x02\x02\u01D5\u01D9\x05\x1C\x0F\x02\u01D6\u01D8\x07" +
    "6\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9" +
    "\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DD\x03\x02" +
    "\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01D5\x03\x02\x02\x02\u01DD" +
    "\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02" +
    "\x02\x02\u01DF\u01E4\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1" +
    "\u01E3\x05\x16\f\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02" +
    "\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01EA" +
    "\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01E9\x076\x02\x02" +
    "\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03" +
    "\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01FA\x03\x02\x02\x02\u01EC" +
    "\u01EA\x03\x02\x02\x02\u01ED\u01F7\x05B\"\x02\u01EE\u01F0\x076\x02\x02" +
    "\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03" +
    "\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3" +
    "\u01F1\x03\x02\x02\x02\u01F4\u01F6\x05B\"\x02\u01F5\u01F1\x03\x02\x02" +
    "\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8" +
    "\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02" +
    "\u01FA\u01ED\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\x15\x03" +
    "\x02\x02\x02\u01FC\u020B\x050\x19\x02\u01FD\u01FF\x07\x04\x02\x02\u01FE" +
    "\u01FD\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200\u01FE\x03\x02" +
    "\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203\x03\x02\x02\x02\u0202" +
    "\u0200\x03\x02\x02\x02\u0203\u020B\x076\x02\x02\u0204\u020B\x05\xBE`\x02" +
    "\u0205\u0207\x07\x04\x02\x02\u0206\u0205\x03\x02\x02\x02\u0207\u0208\x03" +
    "\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209" +
    "\u020B\x03\x02\x02\x02\u020A\u01FC\x03\x02\x02\x02\u020A\u0200\x03\x02" +
    "\x02\x02\u020A\u0204\x03\x02\x02\x02\u020A\u0206\x03\x02\x02\x02\u020B" +
    "\u020C\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02" +
    "\x02\x02\u020D\x17\x03\x02\x02\x02\u020E\u020F\x07\n\x02\x02\u020F\u0210" +
    "\x05H%\x02\u0210\u0212\x07\x1F\x02\x02\u0211\u0213\x076\x02\x02\u0212" +
    "\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0212\x03\x02" +
    "\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u021F\x03\x02\x02\x02\u0216" +
    "\u021A\x05\x1C\x0F\x02\u0217\u0219\x076\x02\x02\u0218\u0217\x03\x02\x02" +
    "\x02\u0219\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B" +
    "\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02" +
    "\u021D\u0216\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03" +
    "\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0225\x03\x02\x02\x02\u0221" +
    "\u021F\x03\x02\x02\x02\u0222\u0224\x05\x1A\x0E\x02\u0223\u0222\x03\x02" +
    "\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225" +
    "\u0226\x03\x02\x02\x02\u0226\u022B\x03\x02\x02\x02\u0227\u0225\x03\x02" +
    "\x02\x02\u0228\u022A\x076\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A\u022D" +
    "\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02" +
    "\u022C\u023B\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022E\u0238\x05" +
    "B\"\x02\u022F\u0231\x076\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0234" +
    "\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02" +
    "\u0233\u0235\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0237\x05" +
    "B\"\x02\u0236\u0232\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238" +
    "\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023C\x03\x02" +
    "\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B\u022E\x03\x02\x02\x02\u023B" +
    "\u023C\x03\x02\x02\x02\u023C\x19\x03\x02\x02\x02\u023D\u024C\x052\x1A" +
    "\x02\u023E\u0240\x07\x04\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240\u0243" +
    "\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02" +
    "\u0242\u0244\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0244\u024C\x07" +
    "6\x02\x02\u0245\u024C\x05\xBE`\x02\u0246\u0248\x07\x04\x02\x02\u0247\u0246" +
    "\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02" +
    "\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u023D\x03" +
    "\x02\x02\x02\u024B\u0241\x03\x02\x02\x02\u024B\u0245\x03\x02\x02\x02\u024B" +
    "\u0247\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024B\x03\x02" +
    "\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\x1B\x03\x02\x02\x02\u024F\u0268" +
    "\x07\x9F\x02\x02\u0250\u0268\x077\x02\x02\u0251\u0268\x05\xBA^\x02\u0252" +
    "\u0268\x05\x1E\x10\x02\u0253\u0268\x05\xB2Z\x02\u0254\u0268\x05\x9CO\x02" +
    "\u0255\u0268\x05\x92J\x02\u0256\u0268\x05\xA8U\x02\u0257\u0268\x05\xA4" +
    "S\x02\u0258\u0268\x05\xA6T\x02\u0259\u0268\x05\xBE`\x02\u025A\u0268\x05" +
    "\x98M\x02\u025B\u0268\x05\xAAV\x02\u025C\u0268\x05z>\x02\u025D\u0268\x05" +
    "\x84C\x02\u025E\u0268\x05v<\x02\u025F\u0268\x05j6\x02\u0260\u0268\x05" +
    "l7\x02\u0261\u0268\x05p9\x02\u0262\u0268\x05n8\x02\u0263\u0268\x05r:\x02" +
    "\u0264\u0268\x05\x96L\x02\u0265\u0268\x05\xB8]\x02\u0266\u0268\x05\xC6" +
    "d\x02\u0267\u024F\x03\x02\x02\x02\u0267\u0250\x03\x02\x02\x02\u0267\u0251" +
    "\x03\x02\x02\x02\u0267\u0252\x03\x02\x02\x02\u0267\u0253\x03\x02\x02\x02" +
    "\u0267\u0254\x03\x02\x02\x02\u0267\u0255\x03\x02\x02\x02\u0267\u0256\x03" +
    "\x02\x02\x02\u0267\u0257\x03\x02\x02\x02\u0267\u0258\x03\x02\x02\x02\u0267" +
    "\u0259\x03\x02\x02\x02\u0267\u025A\x03\x02\x02\x02\u0267\u025B\x03\x02" +
    "\x02\x02\u0267\u025C\x03\x02\x02\x02\u0267\u025D\x03\x02\x02\x02\u0267" +
    "\u025E\x03\x02\x02\x02\u0267\u025F\x03\x02\x02\x02\u0267\u0260\x03\x02" +
    "\x02\x02\u0267\u0261\x03\x02\x02\x02\u0267\u0262\x03\x02\x02\x02\u0267" +
    "\u0263\x03\x02\x02\x02\u0267\u0264\x03\x02\x02\x02\u0267\u0265\x03\x02" +
    "\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268\x1D\x03\x02\x02\x02\u0269\u0271" +
    "\x05 \x11\x02\u026A\u0270\x05 \x11\x02\u026B\u0270\x05\xA4S\x02\u026C" +
    "\u0270\x05\xA6T\x02\u026D\u0270\x05\x92J\x02\u026E\u0270\x05\x98M\x02" +
    "\u026F\u026A\x03\x02\x02\x02\u026F\u026B\x03\x02\x02\x02\u026F\u026C\x03" +
    "\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270" +
    "\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02" +
    "\x02\x02\u0272\x1F\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0278" +
    "\x07\x15\x02\x02\u0275\u0279\x074\x02\x02\u0276\u0279\x075\x02\x02\u0277" +
    "\u0279\x03\x02\x02\x02\u0278\u0275\x03\x02\x02\x02\u0278\u0276\x03\x02" +
    "\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279\u027D\x03\x02\x02\x02\u027A" +
    "\u027C\x05\xBE`\x02\u027B\u027A\x03\x02\x02\x02\u027C\u027F\x03\x02\x02" +
    "\x02\u027D\u027B\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280" +
    "\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0281\x05\xC0a\x02" +
    "\u0281!\x03\x02\x02\x02\u0282\u0285\x05$\x13\x02\u0283\u0285\x05&\x14" +
    "\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285\u0295" +
    "\x03\x02\x02\x02\u0286\u0288\x076\x02\x02\u0287\u0286\x03\x02\x02\x02" +
    "\u0287\u0288\x03\x02\x02\x02\u0288\u028C\x03\x02\x02\x02\u0289\u028B\x07" +
    "\x04\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02\u028C" +
    "\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u0291\x03\x02" +
    "\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0292\x05$\x13\x02\u0290\u0292" +
    "\x05&\x14\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0290\x03\x02\x02\x02" +
    "\u0292\u0294\x03\x02\x02\x02\u0293\u0287\x03\x02\x02\x02\u0294\u0297\x03" +
    "\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296" +
    "#\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0298\u029F\x05(\x15\x02" +
    "\u0299\u029E\x05\x92J\x02\u029A\u029E\x05\x98M\x02\u029B\u029E\x05\xA4" +
    "S\x02\u029C\u029E\x05\xA6T\x02\u029D\u0299\x03\x02\x02\x02\u029D\u029A" +
    "\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029C\x03\x02\x02\x02" +
    "\u029E\u02A1\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F\u02A0\x03" +
    "\x02\x02\x02\u02A0%\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2" +
    "\u02A9\x05*\x16\x02\u02A3\u02A8\x05\x92J\x02\u02A4\u02A8\x05\x98M\x02" +
    "\u02A5\u02A8\x05\xA4S\x02\u02A6\u02A8\x05\xA6T\x02\u02A7\u02A3\x03\x02" +
    "\x02\x02\u02A7\u02A4\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7" +
    "\u02A6\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02" +
    "\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\'\x03\x02\x02\x02\u02AB\u02A9" +
    "\x03\x02\x02\x02\u02AC\u02AE\x05\x92J\x02\u02AD\u02AC\x03\x02\x02\x02" +
    "\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x07" +
    "\x19\x02\x02\u02B0\u02B2\x070\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B1" +
    "\u02B2\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B6\x05\xBE" +
    "`\x02\u02B4\u02B6\x076\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B4" +
    "\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02" +
    "\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x07" +
    "\x1F\x02\x02\u02BA)\x03\x02\x02\x02\u02BB\u02BD\x05\x92J\x02\u02BC\u02BB" +
    "\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02" +
    "\u02BE\u02C0\x07\x1A\x02\x02\u02BF\u02C1\x070\x02\x02\u02C0\u02BF\x03" +
    "\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2" +
    "\u02C5\x05\xBE`\x02\u02C3\u02C5\x076\x02\x02\u02C4\u02C2\x03\x02\x02\x02" +
    "\u02C4\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C4\x03" +
    "\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8" +
    "\u02C9\x07\x1F\x02\x02\u02C9+\x03\x02\x02\x02\u02CA\u02CC\x05\x92J\x02" +
    "\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x03" +
    "\x02\x02\x02\u02CD\u02CF\x07\x19\x02\x02\u02CE\u02D0\x070\x02\x02\u02CF" +
    "\u02CE\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1\x03\x02" +
    "\x02\x02\u02D1\u02D2\x05\xBE`\x02\u02D2\u02D3\x07\x1F\x02\x02\u02D3-\x03" +
    "\x02\x02\x02\u02D4\u02D6\x05\x92J\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5" +
    "\u02D6\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x07\x1A" +
    "\x02\x02\u02D8\u02DA\x070\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA" +
    "\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x05\xBE`\x02" +
    "\u02DC\u02DD\x07\x1F\x02\x02\u02DD/\x03\x02\x02\x02\u02DE\u02E0\x056\x1C" +
    "\x02\u02DF\u02DE\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1" +
    "\x03\x02\x02\x02\u02E1\u02E5\x058\x1D\x02\u02E2\u02E4\x05<\x1F\x02\u02E3" +
    "\u02E2\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3\x03\x02" +
    "\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E61\x03\x02\x02\x02\u02E7\u02E5" +
    "\x03\x02\x02\x02\u02E8\u02EA\x056\x1C\x02\u02E9\u02E8\x03\x02\x02\x02" +
    "\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EF\x05" +
    "8\x1D\x02\u02EC\u02EE\x05<\x1F\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE\u02F1" +
    "\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02" +
    "\u02F03\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F4\x056\x1C" +
    "\x02\u02F3\u02F2\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5" +
    "\x03\x02\x02\x02\u02F5\u02F6\x05\"\x12\x02\u02F65\x03\x02\x02\x02\u02F7" +
    "\u02F8\x07\x1B\x02\x02\u02F8\u02F9\x05\xBE`\x02\u02F9\u02FA\x07\x1F\x02" +
    "\x02\u02FA7\x03\x02\x02\x02\u02FB\u02FE\x05,\x17\x02\u02FC\u02FE\x05." +
    "\x18\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FE" +
    "\u0303\x03\x02\x02\x02\u02FF\u0302\x05,\x17\x02\u0300\u0302\x05.\x18\x02" +
    "\u0301\u02FF\x03\x02\x02\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0305\x03" +
    "\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304" +
    "9\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306\u030E\x07C\x02\x02" +
    "\u0307\u0309\x076\x02\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03" +
    "\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030C\x05\xBC_\x02\u030B" +
    "\u030D\x076\x02\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D\x03\x02\x02" +
    "\x02\u030D\u030F\x03\x02\x02\x02\u030E\u0308\x03\x02\x02\x02\u030E\u030F" +
    "\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0311\x07\x1F\x02\x02" +
    "\u0311;\x03\x02\x02\x02\u0312\u031B\x05\x98M\x02\u0313\u0315\x07\x17\x02" +
    "\x02\u0314\u0316\n\x03\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0317" +
    "\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02" +
    "\u0318\u0319\x03\x02\x02\x02\u0319\u031B\x07\x1F\x02\x02\u031A\u0312\x03" +
    "\x02\x02\x02\u031A\u0313\x03\x02\x02\x02\u031B=\x03\x02\x02\x02\u031C" +
    "\u031D\x07A\x02\x02\u031D?\x03\x02\x02\x02\u031E\u031F\x07@\x02\x02\u031F" +
    "A\x03\x02\x02\x02\u0320\u0321\x05\x1C\x0F\x02\u0321C\x03\x02\x02\x02\u0322" +
    "\u0323\x07\x10\x02\x02\u0323\u0324\x05\xBE`\x02\u0324\u0326\x07\x1F\x02" +
    "\x02\u0325\u0327\x05F$\x02\u0326\u0325\x03\x02\x02\x02\u0326\u0327\x03" +
    "\x02\x02\x02\u0327E\x03\x02\x02\x02\u0328\u0329\x07I\x02\x02\u0329\u032A" +
    "\x074\x02\x02\u032A\u032B\x07\x1F\x02\x02\u032BG\x03\x02\x02\x02\u032C" +
    "\u032E\x05J&\x02\u032D\u032C\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02" +
    "\u032F\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0337\x03" +
    "\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0336\x07\x8B\x02\x02\u0333" +
    "\u0336\x07\x8C\x02\x02\u0334\u0336\x05L\'\x02\u0335\u0332\x03\x02\x02" +
    "\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339" +
    "\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02" +
    "\u0338I\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A\u033B\t\x04" +
    "\x02\x02\u033BK\x03\x02\x02\x02\u033C\u0346\x05P)\x02\u033D\u0346\x05" +
    "\x88E\x02\u033E\u0346\x05R*\x02\u033F\u0346\x05T+\x02\u0340\u0346\x05" +
    "V,\x02\u0341\u0346\x05X-\x02\u0342\u0346\x05Z.\x02\u0343\u0346\x05\\/" +
    "\x02\u0344\u0346\x07b\x02\x02\u0345\u033C\x03\x02\x02\x02\u0345\u033D" +
    "\x03\x02\x02\x02\u0345\u033E\x03\x02\x02\x02\u0345\u033F\x03\x02\x02\x02" +
    "\u0345\u0340\x03\x02\x02\x02\u0345\u0341\x03\x02\x02\x02\u0345\u0342\x03" +
    "\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346" +
    "M\x03\x02\x02\x02\u0347\u034D\x07\x89\x02\x02\u0348\u034D\x07\x8A\x02" +
    "\x02\u0349\u034D\x07\x8B\x02\x02\u034A\u034D\x07\x8C\x02\x02\u034B\u034D" +
    "\x03\x02\x02\x02\u034C\u0347\x03\x02\x02\x02\u034C\u0348\x03\x02\x02\x02" +
    "\u034C\u0349\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034B\x03" +
    "\x02\x02\x02\u034DO\x03\x02\x02\x02\u034E\u0351\x07Y\x02\x02\u034F\u0352" +
    "\x07\f\x02\x02\u0350\u0352\x07\x9C\x02\x02\u0351\u034F\x03\x02\x02\x02" +
    "\u0351\u0350\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u035D\x03" +
    "\x02\x02\x02\u0353\u0355\x07p\x02\x02\u0354\u0356\x07\f\x02\x02\u0355" +
    "\u0354\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u035D\x03\x02" +
    "\x02\x02\u0357\u0359\x07Z\x02\x02\u0358\u035A\x07\f\x02\x02\u0359\u0358" +
    "\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02" +
    "\u035B\u035D\x07[\x02\x02\u035C\u034E\x03\x02\x02\x02\u035C\u0353\x03" +
    "\x02\x02\x02\u035C\u0357\x03\x02\x02\x02\u035C\u035B\x03\x02\x02\x02\u035D" +
    "Q\x03\x02\x02\x02\u035E\u0361\t\x05\x02\x02\u035F\u0360\x07 \x02\x02\u0360" +
    "\u0362\x07\x0E\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362\x03\x02" +
    "\x02\x02\u0362S\x03\x02\x02\x02\u0363\u0364\t\x06\x02\x02\u0364U\x03\x02" +
    "\x02\x02\u0365\u0366\t\x07\x02\x02\u0366W\x03\x02\x02\x02\u0367\u0368" +
    "\t\b\x02\x02\u0368Y\x03\x02\x02\x02\u0369\u036A\t\t\x02\x02\u036A[\x03" +
    "\x02\x02\x02\u036B\u036C\t\n\x02\x02\u036C]\x03\x02\x02\x02\u036D\u036E" +
    "\t\v\x02\x02\u036E_\x03\x02\x02\x02\u036F\u0370\t\f\x02\x02\u0370a\x03" +
    "\x02\x02\x02\u0371\u0372\t\r\x02\x02\u0372c\x03\x02\x02\x02\u0373\u0374" +
    "\t\x0E\x02\x02\u0374e\x03\x02\x02\x02\u0375\u0378\x07g\x02\x02\u0376\u0377" +
    "\x07 \x02\x02\u0377\u0379\x07\x0E\x02\x02\u0378\u0376\x03\x02\x02\x02" +
    "\u0378\u0379\x03\x02\x02\x02\u0379\u0385\x03\x02\x02\x02\u037A\u037D\x07" +
    "y\x02\x02\u037B\u037C\x07 \x02\x02\u037C\u037E\x07\x0E\x02\x02\u037D\u037B" +
    "\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0385\x03\x02\x02\x02" +
    "\u037F\u0382\x07\x85\x02\x02\u0380\u0381\x07 \x02\x02\u0381\u0383\x07" +
    "\x0E\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383" +
    "\u0385\x03\x02\x02\x02\u0384\u0375\x03\x02\x02\x02\u0384\u037A\x03\x02" +
    "\x02\x02\u0384\u037F\x03\x02\x02\x02\u0385g\x03\x02\x02\x02\u0386\u0387" +
    "\t\x0F\x02\x02\u0387i\x03\x02\x02\x02\u0388\u0389\x05^0\x02\u0389\u038A" +
    "\x07 \x02\x02\u038A\u038B\x05\x90I\x02\u038B\u038C\x07\x1F\x02\x02\u038C" +
    "\u038F\x03\x02\x02\x02\u038D\u038F\x072\x02\x02\u038E\u0388\x03\x02\x02" +
    "\x02\u038E\u038D\x03\x02\x02\x02\u038Fk\x03\x02\x02\x02\u0390\u0391\x05" +
    "`1\x02\u0391\u0392\x07 \x02\x02\u0392\u0393\x05\x90I\x02\u0393\u0398\x07" +
    "\x1F\x02\x02\u0394\u0395\x07L\x02\x02\u0395\u0396\x05\xC4c\x02\u0396\u0397" +
    "\x07\x1F\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398\u0394\x03\x02\x02\x02" +
    "\u0398\u0399\x03\x02\x02\x02\u0399m\x03\x02\x02\x02\u039A\u039B\x05d3" +
    "\x02\u039B\u039C\x07 \x02\x02\u039C\u039D\x05\x90I\x02\u039D\u03A2\x07" +
    "\x1F\x02\x02\u039E\u039F\x07L\x02\x02\u039F\u03A0\x05\xC4c\x02\u03A0\u03A1" +
    "\x07\x1F\x02\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2\u039E\x03\x02\x02\x02" +
    "\u03A2\u03A3\x03\x02\x02\x02\u03A3o\x03\x02\x02\x02\u03A4\u03A5\x05b2" +
    "\x02\u03A5\u03A8\x07 \x02\x02\u03A6\u03A9\x05\x90I\x02\u03A7\u03A9\x05" +
    "\x8EH\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9" +
    "\u03AA\x03\x02\x02\x02\u03AA\u03AF\x07\x1F\x02\x02\u03AB\u03AC\x07L\x02" +
    "\x02\u03AC\u03AD\x05\xC4c\x02\u03AD\u03AE\x07\x1F\x02\x02\u03AE\u03B0" +
    "\x03\x02\x02\x02\u03AF\u03AB\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02" +
    "\u03B0q\x03\x02\x02\x02\u03B1\u03B5\x05t;\x02\u03B2\u03B4\x05\x8CG\x02" +
    "\u03B3\u03B2\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5\u03B3\x03" +
    "\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6s\x03\x02\x02\x02\u03B7" +
    "\u03B5\x03\x02\x02\x02\u03B8\u03B9\x05h5\x02\u03B9\u03BD\x07 \x02\x02" +
    "\u03BA\u03BC\x07\x04\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BF\x03" +
    "\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
    "\u03C0\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03C1\x05\x90" +
    "I\x02\u03C1\u03C2\x07\x1F\x02\x02\u03C2";
choiceParser._serializedATNSegment2 = "u\x03\x02\x02\x02\u03C3\u03C7\x05x=\x02\u03C4\u03C6\x05\x8CG\x02\u03C5" +
    "\u03C4\x03\x02\x02\x02\u03C6\u03C9\x03\x02\x02\x02\u03C7\u03C5\x03\x02" +
    "\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8w\x03\x02\x02\x02\u03C9\u03C7" +
    "\x03\x02\x02\x02\u03CA\u03CB\x05f4\x02\u03CB\u03CC\x07 \x02\x02\u03CC" +
    "\u03CD\x05\x90I\x02\u03CD\u03D2\x07\x1F\x02\x02\u03CE\u03CF\x07L\x02\x02" +
    "\u03CF\u03D0\x05\xC4c\x02\u03D0\u03D1\x07\x1F\x02\x02\u03D1\u03D3\x03" +
    "\x02\x02\x02\u03D2\u03CE\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3" +
    "y\x03\x02\x02\x02\u03D4\u03D8\x05|?\x02\u03D5\u03D7\x05\x80A\x02\u03D6" +
    "\u03D5\x03\x02\x02\x02\u03D7\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02" +
    "\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DD\x03\x02\x02\x02\u03DA" +
    "\u03D8\x03\x02\x02\x02\u03DB\u03DC\x076\x02\x02\u03DC\u03DE\x07N\x02\x02" +
    "\u03DD\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE{\x03\x02" +
    "\x02\x02\u03DF\u03E0\x05~@\x02\u03E0\u03E4\x07 \x02\x02\u03E1\u03E3\x07" +
    "\x04\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02\u03E4" +
    "\u03E2\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7\x03\x02" +
    "\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E7\u03E8\x05\x90I\x02\u03E8\u03E9" +
    "\x07\x1F\x02\x02\u03E9}\x03\x02\x02\x02\u03EA\u03ED\x07d\x02\x02\u03EB" +
    "\u03EE\x07\f\x02\x02\u03EC\u03EE\x07\x9C\x02\x02\u03ED\u03EB\x03\x02\x02" +
    "\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F9" +
    "\x03\x02\x02\x02\u03EF\u03F1\x07x\x02\x02\u03F0\u03F2\x07\f\x02\x02\u03F1" +
    "\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F9\x03\x02" +
    "\x02\x02\u03F3\u03F5\x07e\x02\x02\u03F4\u03F6\x07\f\x02\x02\u03F5\u03F4" +
    "\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02" +
    "\u03F7\u03F9\x07f\x02\x02\u03F8\u03EA\x03\x02\x02\x02\u03F8\u03EF\x03" +
    "\x02\x02\x02\u03F8\u03F3\x03\x02\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9" +
    "\x7F\x03\x02\x02\x02\u03FA\u03FB\x07J\x02\x02\u03FB\u03FC\x07 \x02\x02" +
    "\u03FC\u03FD\x05\x90I\x02\u03FD\u03FE\x07\x1F\x02\x02\u03FE\u040C\x03" +
    "\x02\x02\x02\u03FF\u0400\t\x10\x02\x02\u0400\u0401\x07 \x02\x02\u0401" +
    "\u0402\x074\x02\x02\u0402\u040C\x07\x1F\x02\x02\u0403\u0407\t\x11\x02" +
    "\x02\u0404\u0406\v\x02\x02\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0409" +
    "\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02" +
    "\u0408\u040A\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A\u040C\x07" +
    "\x1F\x02\x02\u040B\u03FA\x03\x02\x02\x02\u040B\u03FF\x03\x02\x02\x02\u040B" +
    "\u0403\x03\x02\x02\x02\u040C\x81\x03\x02\x02\x02\u040D\u040E\x07J\x02" +
    "\x02\u040E\u040F\x07 \x02\x02\u040F\u0410\x05\x90I\x02\u0410\u0411\x07" +
    "\x1F\x02\x02\u0411\u041F\x03\x02\x02\x02\u0412\u0413\t\x10\x02\x02\u0413" +
    "\u0414\x07 \x02\x02\u0414\u0415\x074\x02\x02\u0415\u041F\x07\x1F\x02\x02" +
    "\u0416\u041A\t\x11\x02\x02\u0417\u0419\v\x02\x02\x02\u0418\u0417\x03\x02" +
    "\x02\x02\u0419\u041C\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041A" +
    "\u0418\x03\x02\x02\x02\u041B\u041D\x03\x02\x02\x02\u041C\u041A\x03\x02" +
    "\x02\x02\u041D\u041F\x07\x1F\x02\x02\u041E\u040D\x03\x02\x02\x02\u041E" +
    "\u0412\x03\x02\x02\x02\u041E\u0416\x03\x02\x02\x02\u041F\x83\x03\x02\x02" +
    "\x02\u0420\u0424\x05\x86D\x02\u0421\u0423\x05\x8CG\x02\u0422\u0421\x03" +
    "\x02\x02\x02\u0423\u0426\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0424" +
    "\u0425\x03\x02\x02\x02\u0425\x85\x03\x02\x02\x02\u0426\u0424\x03\x02\x02" +
    "\x02\u0427\u0428\x05\x8AF\x02\u0428\u0429\x07 \x02\x02\u0429\u042A\x05" +
    "\x90I\x02\u042A\u042F\x07\x1F\x02\x02\u042B\u042C\x07L\x02\x02\u042C\u042D" +
    "\x05\xC4c\x02\u042D\u042E\x07\x1F\x02\x02\u042E\u0430\x03\x02\x02\x02" +
    "\u042F\u042B\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\x87\x03" +
    "\x02\x02\x02\u0431\u0434\x07X\x02\x02\u0432\u0433\x07 \x02\x02\u0433\u0435" +
    "\x07\r\x02\x02\u0434\u0432\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02" +
    "\u0435\u043C\x03\x02\x02\x02\u0436\u0439\x07o\x02\x02\u0437\u0438\x07" +
    " \x02\x02\u0438\u043A\x07\r\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439" +
    "\u043A\x03\x02\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B\u0431\x03\x02" +
    "\x02\x02\u043B\u0436\x03\x02\x02\x02\u043C\x89\x03\x02\x02\x02\u043D\u0440" +
    "\x07c\x02\x02\u043E\u043F\x07 \x02\x02\u043F\u0441\x07\r\x02\x02\u0440" +
    "\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u044D\x03\x02" +
    "\x02\x02\u0442\u0445\x07w\x02\x02\u0443\u0444\x07 \x02\x02\u0444\u0446" +
    "\x07\r\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02" +
    "\u0446\u044D\x03\x02\x02\x02\u0447\u044A\x07\x86\x02\x02\u0448\u0449\x07" +
    " \x02\x02\u0449\u044B\x07\r\x02\x02\u044A\u0448\x03\x02\x02\x02\u044A" +
    "\u044B\x03\x02\x02\x02\u044B\u044D\x03\x02\x02\x02\u044C\u043D\x03\x02" +
    "\x02\x02\u044C\u0442\x03\x02\x02\x02\u044C\u0447\x03\x02\x02\x02\u044D" +
    "\x8B\x03\x02\x02\x02\u044E\u044F\x07\x18\x02\x02\u044F\u0452\x05\xBE`" +
    "\x02\u0450\u0452\x07J\x02\x02\u0451\u044E\x03\x02\x02\x02\u0451\u0450" +
    "\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0457\x07 \x02\x02" +
    "\u0454\u0456\x07\x04\x02\x02\u0455\u0454\x03\x02\x02\x02\u0456\u0459\x03" +
    "\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458" +
    "\u045C\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u045A\u045D\x05\xBE" +
    "`\x02\u045B\u045D\x076\x02\x02\u045C\u045A\x03\x02\x02\x02\u045C\u045B" +
    "\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02" +
    "\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u046E\x07" +
    "\x1F\x02\x02\u0461\u0462\t\x10\x02\x02\u0462\u0463\x07 \x02\x02\u0463" +
    "\u0464\x074\x02\x02\u0464\u046E\x07\x1F\x02\x02\u0465\u0469\t\x11\x02" +
    "\x02\u0466\u0468\v\x02\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\u046B" +
    "\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u0469\u0467\x03\x02\x02\x02" +
    "\u046A\u046C\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046C\u046E\x07" +
    "\x1F\x02\x02\u046D\u0451\x03\x02\x02\x02\u046D\u0461\x03\x02\x02\x02\u046D" +
    "\u0465\x03\x02\x02\x02\u046E\x8D\x03\x02\x02\x02\u046F\u0470\x07\x9B\x02" +
    "\x02\u0470\u0471\x07#\x02\x02\u0471\u0472\x074\x02\x02\u0472\x8F\x03\x02" +
    "\x02\x02\u0473\u0474\x07\x9E\x02\x02\u0474\x91\x03\x02\x02\x02\u0475\u0476" +
    "\x07\x1D\x02\x02\u0476\u047E\x07\x1F\x02\x02\u0477\u0479\x07\x04\x02\x02" +
    "\u0478\u0477\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03" +
    "\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047D\x03\x02\x02\x02\u047C" +
    "\u047A\x03\x02\x02\x02\u047D\u047F\x05\x94K\x02\u047E\u047A\x03\x02\x02" +
    "\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0494\x03\x02\x02\x02\u0480\u0481" +
    "\x07\x1D\x02\x02\u0481\u0486\x05\xBE`\x02\u0482\u0485\x07 \x02\x02\u0483" +
    "\u0485\x05\xC4c\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0483\x03\x02\x02" +
    "\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02\u0486\u0487" +
    "\x03\x02\x02\x02\u0487\u0489\x03\x02\x02\x02\u0488\u0486\x03\x02\x02\x02" +
    "\u0489\u0491\x07\x1F\x02\x02\u048A\u048C\x07\x04\x02\x02\u048B\u048A\x03" +
    "\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D" +
    "\u048E\x03\x02\x02\x02\u048E\u0490\x03\x02\x02\x02\u048F\u048D\x03\x02" +
    "\x02\x02\u0490\u0492\x05\x94K\x02\u0491\u048D\x03\x02\x02\x02\u0491\u0492" +
    "\x03\x02\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0475\x03\x02\x02\x02" +
    "\u0493\u0480\x03\x02\x02\x02\u0494\x93\x03\x02\x02\x02\u0495\u0496\x07" +
    "\x1D\x02\x02\u0496\u049B\x05\xBE`\x02\u0497\u049A\x07 \x02\x02\u0498\u049A" +
    "\x05\xC4c\x02\u0499\u0497\x03\x02\x02\x02\u0499\u0498\x03\x02\x02\x02" +
    "\u049A\u049D\x03\x02\x02\x02\u049B\u0499\x03\x02\x02\x02\u049B\u049C\x03" +
    "\x02\x02\x02\u049C\u049E\x03\x02\x02\x02\u049D\u049B\x03\x02\x02\x02\u049E" +
    "\u049F\x07\x1F\x02\x02\u049F\x95\x03\x02\x02\x02\u04A0\u04A2\x07\x12\x02" +
    "\x02\u04A1\u04A3\x05\xBE`\x02\u04A2\u04A1\x03\x02\x02\x02\u04A2\u04A3" +
    "\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04AB\x07\x1F\x02\x02" +
    "\u04A5\u04A7\x07\x13\x02\x02\u04A6\u04A8\x05\xBE`\x02\u04A7\u04A6\x03" +
    "\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9" +
    "\u04AB\x07\x1F\x02\x02\u04AA\u04A0\x03\x02\x02\x02\u04AA\u04A5\x03\x02" +
    "\x02\x02\u04AB\x97\x03\x02\x02\x02\u04AC\u04B4\x07D\x02\x02\u04AD\u04B4" +
    "\x07B\x02\x02\u04AE\u04B0\x07C\x02\x02\u04AF\u04B1\x078\x02\x02\u04B0" +
    "\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x03\x02" +
    "\x02\x02\u04B2\u04B4\x07\x02\x02\x03\u04B3\u04AC\x03\x02\x02\x02\u04B3" +
    "\u04AD\x03\x02\x02\x02\u04B3\u04AE\x03\x02\x02\x02\u04B4\x99\x03\x02\x02" +
    "\x02\u04B5\u04B7\x07n\x02\x02\u04B6\u04B8\x05\xBE`\x02\u04B7\u04B6\x03" +
    "\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04CE\x03\x02\x02\x02\u04B9" +
    "\u04C3\x05\xBE`\x02\u04BA\u04BE\x076\x02\x02\u04BB\u04BD\x07\x04\x02\x02" +
    "\u04BC\u04BB\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03" +
    "\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0" +
    "\u04BE\x03\x02\x02\x02\u04C1\u04BA\x03\x02\x02\x02\u04C2\u04C5\x03\x02" +
    "\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4" +
    "\u04C9\x03\x02\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C6\u04C8\x076\x02" +
    "\x02\u04C7\u04C6\x03\x02\x02\x02\u04C8\u04CB\x03\x02\x02\x02\u04C9\u04C7" +
    "\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02" +
    "\u04CB\u04C9\x03\x02\x02\x02\u04CC\u04B9\x03\x02\x02\x02\u04CD\u04D0\x03" +
    "\x02\x02\x02\u04CE\u04CC\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF" +
    "\u04D1\x03\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D1\u04DD\x07\x1F" +
    "\x02\x02\u04D2\u04D8\x07n\x02\x02\u04D3\u04D7\x05\xBE`\x02\u04D4\u04D7" +
    "\x076\x02\x02\u04D5\u04D7\x07\x04\x02\x02\u04D6\u04D3\x03\x02\x02\x02" +
    "\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D5\x03\x02\x02\x02\u04D7\u04DA\x03" +
    "\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9" +
    "\u04DB\x03\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DB\u04DD\x07\x02" +
    "\x02\x03\u04DC\u04B5\x03\x02\x02\x02\u04DC\u04D2\x03\x02\x02\x02\u04DD" +
    "\x9B\x03\x02\x02\x02\u04DE\u04E3\x07<\x02\x02\u04DF\u04E4\x05\xBE`\x02" +
    "\u04E0\u04E4\x07 \x02\x02\u04E1\u04E4\x07\x9E\x02\x02\u04E2\u04E4\x07" +
    "6\x02\x02\u04E3\u04DF\x03\x02\x02\x02\u04E3\u04E0\x03\x02\x02\x02\u04E3" +
    "\u04E1\x03\x02\x02\x02\u04E3\u04E2\x03\x02\x02\x02\u04E4\u04E5\x03\x02" +
    "\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6" +
    "\u04E7\x03\x02\x02\x02\u04E7\u04F5\x07\x1F\x02\x02\u04E8\u04F0\x07<\x02" +
    "\x02\u04E9\u04EF\x05\xBE`\x02\u04EA\u04EF\x07 \x02\x02\u04EB\u04EF\x07" +
    "\x9E\x02\x02\u04EC\u04EF\x076\x02\x02\u04ED\u04EF\x07\x04\x02\x02\u04EE" +
    "\u04E9\x03\x02\x02\x02\u04EE\u04EA\x03\x02\x02\x02\u04EE\u04EB\x03\x02" +
    "\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE\u04ED\x03\x02\x02\x02\u04EF" +
    "\u04F2\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02\u04F0\u04F1\x03\x02" +
    "\x02\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04F0\x03\x02\x02\x02\u04F3" +
    "\u04F5\x07\x02\x02\x03\u04F4\u04DE\x03\x02\x02\x02\u04F4\u04E8\x03\x02" +
    "\x02\x02\u04F5\x9D\x03\x02\x02\x02\u04F6\u04F7\x07;\x02\x02\u04F7\u04F8" +
    "\x05\xBE`\x02\u04F8\u04F9\x07\x1F\x02\x02\u04F9\x9F\x03\x02\x02\x02\u04FA" +
    "\u04FE\x07U\x02\x02\u04FB\u04FF\x05\xBE`\x02\u04FC\u04FF\x07 \x02\x02" +
    "\u04FD\u04FF\x076\x02\x02\u04FE\u04FB\x03\x02\x02\x02\u04FE\u04FC\x03" +
    "\x02\x02\x02\u04FE\u04FD\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500" +
    "\u04FE\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502\x03\x02" +
    "\x02\x02\u0502\u0504\x07\x1F\x02\x02\u0503\u0505\x05\xA2R\x02\u0504\u0503" +
    "\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\xA1\x03\x02\x02\x02" +
    "\u0506\u050A\x07U\x02\x02\u0507\u050B\x05\xBE`\x02\u0508\u050B\x07 \x02" +
    "\x02\u0509\u050B\x076\x02\x02\u050A\u0507\x03\x02\x02\x02\u050A\u0508" +
    "\x03\x02\x02\x02\u050A\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02" +
    "\u050C\u050A\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02\u050D\u050E\x03" +
    "\x02\x02\x02\u050E\u050F\x07\x1F\x02\x02\u050F\xA3\x03\x02\x02\x02\u0510" +
    "\u0514\x07\x16\x02\x02\u0511\u0513\x076\x02\x02\u0512\u0511\x03\x02\x02" +
    "\x02\u0513\u0516\x03\x02\x02\x02\u0514\u0512\x03\x02\x02\x02\u0514\u0515" +
    "\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02" +
    "\u0517\u0519\x05\xBE`\x02\u0518\u0517\x03\x02\x02\x02\u0518\u0519\x03" +
    "\x02\x02\x02\u0519\u052F\x03\x02\x02\x02\u051A\u0524\x05\xBE`\x02\u051B" +
    "\u051F\x076\x02\x02\u051C\u051E\x07\x04\x02\x02\u051D\u051C\x03\x02\x02" +
    "\x02\u051E\u0521\x03\x02\x02\x02\u051F\u051D\x03\x02\x02\x02\u051F\u0520" +
    "\x03\x02\x02\x02\u0520\u0523\x03\x02\x02\x02\u0521\u051F\x03\x02\x02\x02" +
    "\u0522\u051B\x03\x02\x02\x02\u0523\u0526\x03\x02\x02\x02\u0524\u0522\x03" +
    "\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u052A\x03\x02\x02\x02\u0526" +
    "\u0524\x03\x02\x02\x02\u0527\u0529\x076\x02\x02\u0528\u0527\x03\x02\x02" +
    "\x02\u0529\u052C\x03\x02\x02\x02\u052A\u0528\x03\x02\x02\x02\u052A\u052B" +
    "\x03\x02\x02\x02\u052B\u052E\x03\x02\x02\x02\u052C\u052A\x03\x02\x02\x02" +
    "\u052D\u051A\x03\x02\x02\x02\u052E\u0531\x03\x02\x02\x02\u052F\u052D\x03" +
    "\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0532\x03\x02\x02\x02\u0531" +
    "\u052F\x03\x02\x02\x02\u0532\u053F\x07\x1F\x02\x02\u0533\u0537\x07\x16" +
    "\x02\x02\u0534\u0536\x076\x02\x02\u0535\u0534\x03\x02\x02\x02\u0536\u0539" +
    "\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02" +
    "\u0538\u053B\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u053A\u053C\x05" +
    "\xBE`\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C" +
    "\u053D\x03\x02\x02\x02\u053D\u053F\x07\x02\x02\x03\u053E\u0510\x03\x02" +
    "\x02\x02\u053E\u0533\x03\x02\x02\x02\u053F\xA5\x03\x02\x02\x02\u0540\u0542" +
    "\x07\x17\x02\x02\u0541\u0543\n\x03\x02\x02\u0542\u0541\x03\x02\x02\x02" +
    "\u0543\u0544\x03\x02\x02\x02\u0544\u0542\x03\x02\x02\x02\u0544\u0545\x03" +
    "\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546\u0547\x07\x1F\x02\x02\u0547" +
    "\xA7\x03\x02\x02\x02\u0548\u054B\x07\x1E\x02\x02\u0549\u054C\x05\xBE`" +
    "\x02\u054A\u054C\x076\x02\x02\u054B\u0549\x03\x02\x02\x02\u054B\u054A" +
    "\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u054B\x03\x02\x02\x02" +
    "\u054D\u054E\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\u0555\x07" +
    "\x1F\x02\x02\u0550\u0551\x07\x1E\x02\x02\u0551\u0552\x05\xBE`\x02\u0552" +
    "\u0553\x07\x02\x02\x03\u0553\u0555\x03\x02\x02\x02\u0554\u0548\x03\x02" +
    "\x02\x02\u0554\u0550\x03\x02\x02\x02\u0555\xA9\x03\x02\x02\x02\u0556\u0557" +
    "\x07G\x02\x02\u0557\u0558\x05\xBE`\x02\u0558\u0559\x07\x1F\x02\x02\u0559" +
    "\u055F\x03\x02\x02\x02\u055A\u055B\x07H\x02\x02\u055B\u055C\x05\xBE`\x02" +
    "\u055C\u055D\x07\x1F\x02\x02\u055D\u055F\x03\x02\x02\x02\u055E\u0556\x03" +
    "\x02\x02\x02\u055E\u055A\x03\x02\x02\x02\u055F\xAB\x03\x02\x02\x02\u0560" +
    "\u0561\x07?\x02\x02\u0561\u0562\x07 \x02\x02\u0562\u0563\x074\x02\x02" +
    "\u0563\u056A\x07\x1F\x02\x02\u0564\u0565\x07?\x02\x02\u0565\u0566\x07" +
    " \x02\x02\u0566\u0567\x05\xBE`\x02\u0567\u0568\x07\x1F\x02\x02\u0568\u056A" +
    "\x03\x02\x02\x02\u0569\u0560\x03\x02\x02\x02\u0569\u0564\x03\x02\x02\x02" +
    "\u056A\xAD\x03\x02\x02\x02\u056B\u056C\x07S\x02\x02\u056C\u056D\x05\xBE" +
    "`\x02\u056D\u056E\x07\x1F\x02\x02\u056E\xAF\x03\x02\x02\x02\u056F\u0570" +
    "\x07T\x02\x02\u0570\u0571\x05\xBE`\x02\u0571\u0572\x07\x1F\x02\x02\u0572" +
    "\xB1\x03\x02\x02\x02\u0573\u057D\x05\xB4[\x02\u0574\u0576\x076\x02\x02" +
    "\u0575\u0574\x03\x02\x02\x02\u0576\u0579\x03\x02\x02\x02\u0577\u0575\x03" +
    "\x02\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\u057A\x03\x02\x02\x02\u0579" +
    "\u0577\x03\x02\x02\x02\u057A\u057C\x05\xB4[\x02\u057B\u0577\x03\x02\x02" +
    "\x02\u057C\u057F\x03\x02\x02\x02\u057D\u057B\x03\x02\x02\x02\u057D\u057E" +
    "\x03\x02\x02\x02\u057E\xB3\x03\x02\x02\x02\u057F\u057D\x03\x02\x02\x02" +
    "\u0580\u0581\x07\x18\x02\x02\u0581\u0582\x05\xBE`\x02\u0582\u0583\t\x12" +
    "\x02\x02\u0583\u0589\x05\xBE`\x02\u0584\u0588\x076\x02\x02\u0585\u0588" +
    "\x07 \x02\x02\u0586\u0588\x05\xBE`\x02\u0587\u0584\x03\x02\x02\x02\u0587" +
    "\u0585\x03\x02\x02\x02\u0587\u0586\x03\x02\x02\x02\u0588\u058B\x03\x02" +
    "\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589\u058A\x03\x02\x02\x02\u058A" +
    "\u058C\x03\x02\x02\x02\u058B\u0589\x03\x02\x02\x02\u058C\u058D\x07\x1F" +
    "\x02\x02\u058D\u0597\x03\x02\x02\x02\u058E\u0592\x07Q\x02\x02\u058F\u0591" +
    "\v\x02\x02\x02\u0590\u058F\x03\x02\x02\x02\u0591\u0594\x03\x02\x02\x02" +
    "\u0592\u0593\x03\x02\x02\x02\u0592\u0590\x03\x02\x02\x02\u0593\u0595\x03" +
    "\x02\x02\x02\u0594\u0592\x03\x02\x02\x02\u0595\u0597\x07\x1F\x02\x02\u0596" +
    "\u0580\x03\x02\x02\x02\u0596\u058E\x03\x02\x02\x02\u0597\xB5\x03\x02\x02" +
    "\x02\u0598\u059C\x07\x0F\x02\x02\u0599\u059D\x05\xBE`\x02\u059A\u059D" +
    "\x07 \x02\x02\u059B\u059D\x076\x02\x02\u059C\u0599\x03\x02\x02\x02\u059C" +
    "\u059A\x03\x02\x02\x02\u059C\u059B\x03\x02\x02\x02\u059D\u059E\x03\x02" +
    "\x02\x02\u059E\u059C\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F" +
    "\u05A0\x03\x02\x02\x02\u05A0\u05AC\x07\x1F\x02\x02\u05A1\u05A7\x07\x0F" +
    "\x02\x02\u05A2\u05A6\x05\xBE`\x02\u05A3\u05A6\x07 \x02\x02\u05A4\u05A6" +
    "\x076\x02\x02\u05A5\u05A2\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02" +
    "\u05A5\u05A4\x03\x02\x02\x02\u05A6\u05A9\x03\x02\x02\x02\u05A7\u05A5\x03" +
    "\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05AA\x03\x02\x02\x02\u05A9" +
    "\u05A7\x03\x02\x02\x02\u05AA\u05AC\x07\x02\x02\x03\u05AB\u0598\x03\x02" +
    "\x02\x02\u05AB\u05A1\x03\x02\x02\x02\u05AC\xB7\x03\x02\x02\x02\u05AD\u05AF" +
    "\x07\x14\x02\x02\u05AE\u05B0\x05\xBE`\x02\u05AF\u05AE\x03\x02\x02\x02" +
    "\u05AF\u05B0\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B2\x07" +
    "\x1F\x02\x02\u05B2\xB9\x03\x02\x02\x02\u05B3\u05B4\x071\x02\x02\u05B4" +
    "\xBB\x03\x02\x02\x02\u05B5\u05B7\x05\xBE`\x02\u05B6\u05B8\x076\x02\x02" +
    "\u05B7\u05B6\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05BA\x03" +
    "\x02\x02\x02\u05B9\u05B5\x03\x02\x02\x02\u05BA\u05BB\x03\x02\x02\x02\u05BB" +
    "\u05B9\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\xBD\x03\x02\x02" +
    "\x02\u05BD\u05C4\x075\x02\x02\u05BE\u05C0\x07\x04\x02\x02\u05BF\u05BE" +
    "\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\u05BF\x03\x02\x02\x02" +
    "\u05C1\u05C2\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C5\x07" +
    "4\x02\x02\u05C4\u05BF\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5" +
    "\u05E7\x03\x02\x02\x02\u05C6\u05CD\x05\xC4c\x02\u05C7\u05C9\x07\x04\x02" +
    "\x02\u05C8\u05C7\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA\u05C8" +
    "\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02" +
    "\u05CC\u05CE\x074\x02\x02\u05CD\u05C8\x03\x02\x02\x02\u05CD\u05CE\x03" +
    "\x02\x02\x02\u05CE\u05E7\x03\x02\x02\x02\u05CF\u05E7\x074\x02\x02\u05D0" +
    "\u05D2\x07\x04\x02\x02\u05D1\u05D0\x03\x02\x02\x02\u05D2\u05D5\x03\x02" +
    "\x02\x02\u05D3\u05D1\x03\x02\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4" +
    "\u05D6\x03\x02\x02\x02\u05D5\u05D3\x03\x02\x02\x02\u05D6\u05DA\x07 \x02" +
    "\x02\u05D7\u05D9\x07\x04\x02\x02\u05D8\u05D7\x03\x02\x02\x02\u05D9\u05DC" +
    "\x03\x02\x02\x02\u05DA\u05D8\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02" +
    "\u05DB\u05E7\x03\x02\x02\x02\u05DC\u05DA\x03\x02\x02\x02\u05DD\u05E1\x07" +
    "!\x02\x02\u05DE\u05E0\x07\x04\x02\x02\u05DF\u05DE\x03\x02\x02\x02\u05E0" +
    "\u05E3\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1\u05E2\x03\x02" +
    "\x02\x02\u05E2\u05E7\x03\x02\x02\x02\u05E3\u05E1\x03\x02\x02\x02\u05E4" +
    "\u05E7\x07+\x02\x02\u05E5\u05E7\x07\x9E\x02\x02\u05E6\u05BD\x03\x02\x02" +
    "\x02\u05E6\u05C6\x03\x02\x02\x02\u05E6\u05CF\x03\x02\x02\x02\u05E6\u05D3" +
    "\x03\x02\x02\x02\u05E6\u05DD\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02" +
    "\u05E6\u05E5\x03\x02\x02\x02\u05E7\xBF\x03\x02\x02\x02\u05E8\u05E9\x07" +
    "\x1F\x02\x02\u05E9\xC1\x03\x02\x02\x02\u05EA\u05EB\t\x13\x02\x02\u05EB" +
    "\xC3\x03\x02\x02\x02\u05EC\u05F7\x078\x02\x02\u05ED\u05F7\x079\x02\x02" +
    "\u05EE\u05F7\x077\x02\x02\u05EF\u05F7\x07!\x02\x02\u05F0\u05F1\x07%\x02" +
    "\x02\u05F1\u05F7\n\x14\x02\x02\u05F2\u05F3\x07&\x02\x02\u05F3\u05F7\n" +
    "\x15\x02\x02\u05F4\u05F7\x07*\x02\x02\u05F5\u05F7\x07)\x02\x02\u05F6\u05EC" +
    "\x03\x02\x02\x02\u05F6\u05ED\x03\x02\x02\x02\u05F6\u05EE\x03\x02\x02\x02" +
    "\u05F6\u05EF\x03\x02\x02\x02\u05F6\u05F0\x03\x02\x02\x02\u05F6\u05F2\x03" +
    "\x02\x02\x02\u05F6\u05F4\x03\x02\x02\x02\u05F6\u05F5\x03\x02\x02\x02\u05F7" +
    "\u05F8\x03\x02\x02\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8\u05F9\x03\x02" +
    "\x02\x02\u05F9\xC5\x03\x02\x02\x02\u05FA\u05FB\x07\x04\x02\x02\u05FB\xC7" +
    "\x03\x02\x02\x02\xE7\xCC\xD2\xD7\xDC\xE9\xF1\xF7\xFC\u0102\u0109\u010D" +
    "\u0110\u0116\u011A\u011F\u0124\u012B\u0131\u0134\u0138\u013D\u0148\u014E" +
    "\u0153\u015E\u0164\u0169\u016F\u0176\u017A\u0180\u0184\u018A\u018D\u0192" +
    "\u0199\u019F\u01A2\u01AA\u01B0\u01B5\u01BB\u01C2\u01C8\u01CB\u01D3\u01D9" +
    "\u01DE\u01E4\u01EA\u01F1\u01F7\u01FA\u0200\u0208\u020A\u020C\u0214\u021A" +
    "\u021F\u0225\u022B\u0232\u0238\u023B\u0241\u0249\u024B\u024D\u0267\u026F" +
    "\u0271\u0278\u027D\u0284\u0287\u028C\u0291\u0295\u029D\u029F\u02A7\u02A9" +
    "\u02AD\u02B1\u02B5\u02B7\u02BC\u02C0\u02C4\u02C6\u02CB\u02CF\u02D5\u02D9" +
    "\u02DF\u02E5\u02E9\u02EF\u02F3\u02FD\u0301\u0303\u0308\u030C\u030E\u0317" +
    "\u031A\u0326\u032F\u0335\u0337\u0345\u034C\u0351\u0355\u0359\u035C\u0361" +
    "\u0378\u037D\u0382\u0384\u038E\u0398\u03A2\u03A8\u03AF\u03B5\u03BD\u03C7" +
    "\u03D2\u03D8\u03DD\u03E4\u03ED\u03F1\u03F5\u03F8\u0407\u040B\u041A\u041E" +
    "\u0424\u042F\u0434\u0439\u043B\u0440\u0445\u044A\u044C\u0451\u0457\u045C" +
    "\u045E\u0469\u046D\u047A\u047E\u0484\u0486\u048D\u0491\u0493\u0499\u049B" +
    "\u04A2\u04A7\u04AA\u04B0\u04B3\u04B7\u04BE\u04C3\u04C9\u04CE\u04D6\u04D8" +
    "\u04DC\u04E3\u04E5\u04EE\u04F0\u04F4\u04FE\u0500\u0504\u050A\u050C\u0514" +
    "\u0518\u051F\u0524\u052A\u052F\u0537\u053B\u053E\u0544\u054B\u054D\u0554" +
    "\u055E\u0569\u0577\u057D\u0587\u0589\u0592\u0596\u059C\u059E\u05A5\u05A7" +
    "\u05AB\u05AF\u05B7\u05BB\u05C1\u05C4\u05CA\u05CD\u05D3\u05DA\u05E1\u05E6" +
    "\u05F6\u05F8";
choiceParser._serializedATN = Utils.join([
    choiceParser._serializedATNSegment0,
    choiceParser._serializedATNSegment1,
    choiceParser._serializedATNSegment2,
], "");
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(choiceParser.EOF, 0); }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_bitmark; }
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
    multi_choices() {
        return this.getRuleContext(0, Multi_choicesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_bitmark_; }
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
class Multi_choicesContext extends ParserRuleContext_1.ParserRuleContext {
    multiple_choice() {
        return this.tryGetRuleContext(0, Multiple_choiceContext);
    }
    multiple_choice_1() {
        return this.tryGetRuleContext(0, Multiple_choice_1Context);
    }
    multiple_response() {
        return this.tryGetRuleContext(0, Multiple_responseContext);
    }
    multiple_response_1() {
        return this.tryGetRuleContext(0, Multiple_response_1Context);
    }
    multiple_choice_text() {
        return this.tryGetRuleContext(0, Multiple_choice_textContext);
    }
    highlight_text() {
        return this.tryGetRuleContext(0, Highlight_textContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_multi_choices; }
    // @Override
    enterRule(listener) {
        if (listener.enterMulti_choices) {
            listener.enterMulti_choices(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMulti_choices) {
            listener.exitMulti_choices(this);
        }
    }
}
exports.Multi_choicesContext = Multi_choicesContext;
class Multiple_choiceContext extends ParserRuleContext_1.ParserRuleContext {
    BitMultichoice() { return this.getToken(choiceParser.BitMultichoice, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
    choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(ChoicesContext);
        }
        else {
            return this.getRuleContext(i, ChoicesContext);
        }
    }
    HSPL() { return this.tryGetToken(choiceParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(choiceParser.HSPL2, 0); }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    mcrmisc(i) {
        if (i === undefined) {
            return this.getRuleContexts(McrmiscContext);
        }
        else {
            return this.getRuleContext(i, McrmiscContext);
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
    get ruleIndex() { return choiceParser.RULE_multiple_choice; }
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
exports.Multiple_choiceContext = Multiple_choiceContext;
class McrsepContext extends ParserRuleContext_1.ParserRuleContext {
    NL() { return this.tryGetToken(choiceParser.NL, 0); }
    HSPL() { return this.tryGetToken(choiceParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(choiceParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_mcrsep; }
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
class McrmiscContext extends ParserRuleContext_1.ParserRuleContext {
    NL() { return this.getToken(choiceParser.NL, 0); }
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
    get ruleIndex() { return choiceParser.RULE_mcrmisc; }
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
class Multiple_choice_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitMultichoice1() { return this.getToken(choiceParser.BitMultichoice1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    choices() {
        return this.getRuleContext(0, ChoicesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
    get ruleIndex() { return choiceParser.RULE_multiple_choice_1; }
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
exports.Multiple_choice_1Context = Multiple_choice_1Context;
class Multiple_responseContext extends ParserRuleContext_1.ParserRuleContext {
    BitMultiresp() { return this.getToken(choiceParser.BitMultiresp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
    HSPL() { return this.tryGetToken(choiceParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(choiceParser.HSPL2, 0); }
    mcrmisc(i) {
        if (i === undefined) {
            return this.getRuleContexts(McrmiscContext);
        }
        else {
            return this.getRuleContext(i, McrmiscContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_multiple_response; }
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
exports.Multiple_responseContext = Multiple_responseContext;
class Multiple_response_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitMultiresp1() { return this.getToken(choiceParser.BitMultiresp1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    choices() {
        return this.getRuleContext(0, ChoicesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
    get ruleIndex() { return choiceParser.RULE_multiple_response_1; }
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
exports.Multiple_response_1Context = Multiple_response_1Context;
class Multiple_choice_textContext extends ParserRuleContext_1.ParserRuleContext {
    BitMultichoicetext() { return this.getToken(choiceParser.BitMultichoicetext, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
    multitxt_il_choice(i) {
        if (i === undefined) {
            return this.getRuleContexts(Multitxt_il_choiceContext);
        }
        else {
            return this.getRuleContext(i, Multitxt_il_choiceContext);
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
    get ruleIndex() { return choiceParser.RULE_multiple_choice_text; }
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
exports.Multiple_choice_textContext = Multiple_choice_textContext;
class Multitxt_il_choiceContext extends ParserRuleContext_1.ParserRuleContext {
    headed_inline_choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(Headed_inline_choicesContext);
        }
        else {
            return this.getRuleContext(i, Headed_inline_choicesContext);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_multitxt_il_choice; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultitxt_il_choice) {
            listener.enterMultitxt_il_choice(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultitxt_il_choice) {
            listener.exitMultitxt_il_choice(this);
        }
    }
}
exports.Multitxt_il_choiceContext = Multitxt_il_choiceContext;
class Highlight_textContext extends ParserRuleContext_1.ParserRuleContext {
    BitHighlighttext() { return this.getToken(choiceParser.BitHighlighttext, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
    highlight_il_choice(i) {
        if (i === undefined) {
            return this.getRuleContexts(Highlight_il_choiceContext);
        }
        else {
            return this.getRuleContext(i, Highlight_il_choiceContext);
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
    get ruleIndex() { return choiceParser.RULE_highlight_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterHighlight_text) {
            listener.enterHighlight_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHighlight_text) {
            listener.exitHighlight_text(this);
        }
    }
}
exports.Highlight_textContext = Highlight_textContext;
class Highlight_il_choiceContext extends ParserRuleContext_1.ParserRuleContext {
    highlight_inline_choices(i) {
        if (i === undefined) {
            return this.getRuleContexts(Highlight_inline_choicesContext);
        }
        else {
            return this.getRuleContext(i, Highlight_inline_choicesContext);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_highlight_il_choice; }
    // @Override
    enterRule(listener) {
        if (listener.enterHighlight_il_choice) {
            listener.enterHighlight_il_choice(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHighlight_il_choice) {
            listener.exitHighlight_il_choice(this);
        }
    }
}
exports.Highlight_il_choiceContext = Highlight_il_choiceContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(choiceParser.LIST_LINE, 0); }
    NOTBITMARK() { return this.tryGetToken(choiceParser.NOTBITMARK, 0); }
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
    get ruleIndex() { return choiceParser.RULE_bitElem; }
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
    get ruleIndex() { return choiceParser.RULE_gap; }
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
    OPU() { return this.getToken(choiceParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(choiceParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(choiceParser.STRING, 0); }
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
    get ruleIndex() { return choiceParser.RULE_single_gap; }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_choices; }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_cplus; }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_cminus; }
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
    OPP() { return this.getToken(choiceParser.OPP, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    StrParen() { return this.tryGetToken(choiceParser.StrParen, 0); }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_choice_plus; }
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
    OPM() { return this.getToken(choiceParser.OPM, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    StrParen() { return this.tryGetToken(choiceParser.StrParen, 0); }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_choice_minus; }
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
class Il_choice_plusContext extends ParserRuleContext_1.ParserRuleContext {
    OPP() { return this.getToken(choiceParser.OPP, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    StrParen() { return this.tryGetToken(choiceParser.StrParen, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_il_choice_plus; }
    // @Override
    enterRule(listener) {
        if (listener.enterIl_choice_plus) {
            listener.enterIl_choice_plus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIl_choice_plus) {
            listener.exitIl_choice_plus(this);
        }
    }
}
exports.Il_choice_plusContext = Il_choice_plusContext;
class Il_choice_minusContext extends ParserRuleContext_1.ParserRuleContext {
    OPM() { return this.getToken(choiceParser.OPM, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    StrParen() { return this.tryGetToken(choiceParser.StrParen, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_il_choice_minus; }
    // @Override
    enterRule(listener) {
        if (listener.enterIl_choice_minus) {
            listener.enterIl_choice_minus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIl_choice_minus) {
            listener.exitIl_choice_minus(this);
        }
    }
}
exports.Il_choice_minusContext = Il_choice_minusContext;
class Headed_inline_choicesContext extends ParserRuleContext_1.ParserRuleContext {
    inline_choices() {
        return this.getRuleContext(0, Inline_choicesContext);
    }
    choice_head() {
        return this.tryGetRuleContext(0, Choice_headContext);
    }
    il_follow(i) {
        if (i === undefined) {
            return this.getRuleContexts(Il_followContext);
        }
        else {
            return this.getRuleContext(i, Il_followContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_headed_inline_choices; }
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
class Highlight_inline_choicesContext extends ParserRuleContext_1.ParserRuleContext {
    inline_choices() {
        return this.getRuleContext(0, Inline_choicesContext);
    }
    choice_head() {
        return this.tryGetRuleContext(0, Choice_headContext);
    }
    il_follow(i) {
        if (i === undefined) {
            return this.getRuleContexts(Il_followContext);
        }
        else {
            return this.getRuleContext(i, Il_followContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_highlight_inline_choices; }
    // @Override
    enterRule(listener) {
        if (listener.enterHighlight_inline_choices) {
            listener.enterHighlight_inline_choices(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHighlight_inline_choices) {
            listener.exitHighlight_inline_choices(this);
        }
    }
}
exports.Highlight_inline_choicesContext = Highlight_inline_choicesContext;
class Headed_choicesContext extends ParserRuleContext_1.ParserRuleContext {
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
    get ruleIndex() { return choiceParser.RULE_headed_choices; }
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
exports.Headed_choicesContext = Headed_choicesContext;
class Choice_headContext extends ParserRuleContext_1.ParserRuleContext {
    OPS() { return this.getToken(choiceParser.OPS, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_choice_head; }
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
    il_choice_plus(i) {
        if (i === undefined) {
            return this.getRuleContexts(Il_choice_plusContext);
        }
        else {
            return this.getRuleContext(i, Il_choice_plusContext);
        }
    }
    il_choice_minus(i) {
        if (i === undefined) {
            return this.getRuleContexts(Il_choice_minusContext);
        }
        else {
            return this.getRuleContext(i, Il_choice_minusContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_inline_choices; }
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
class Ml_exampleContext extends ParserRuleContext_1.ParserRuleContext {
    AtExamplecol() { return this.getToken(choiceParser.AtExamplecol, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_ml_example; }
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
class Il_followContext extends ParserRuleContext_1.ParserRuleContext {
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    OPQ() { return this.tryGetToken(choiceParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_il_follow; }
    // @Override
    enterRule(listener) {
        if (listener.enterIl_follow) {
            listener.enterIl_follow(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIl_follow) {
            listener.exitIl_follow(this);
        }
    }
}
exports.Il_followContext = Il_followContext;
class LongansContext extends ParserRuleContext_1.ParserRuleContext {
    AtLonganswer() { return this.getToken(choiceParser.AtLonganswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_longans; }
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
    AtShortanswer() { return this.getToken(choiceParser.AtShortanswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_shortans; }
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
class ResourceContext extends ParserRuleContext_1.ParserRuleContext {
    bitElem() {
        return this.getRuleContext(0, BitElemContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_resource; }
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
class Bullet_itemContext extends ParserRuleContext_1.ParserRuleContext {
    OPBUL() { return this.getToken(choiceParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_bullet_item; }
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
    AtPoints() { return this.getToken(choiceParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(choiceParser.NUMERIC, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_atpoint; }
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
            return this.getTokens(choiceParser.ColonText);
        }
        else {
            return this.getToken(choiceParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.ColonJson);
        }
        else {
            return this.getToken(choiceParser.ColonJson, i);
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
    get ruleIndex() { return choiceParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(choiceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(choiceParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(choiceParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(choiceParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(choiceParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(choiceParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(choiceParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(choiceParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(choiceParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(choiceParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(choiceParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(choiceParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(choiceParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(choiceParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(choiceParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(choiceParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(choiceParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(choiceParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(choiceParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(choiceParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(choiceParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(choiceParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(choiceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(choiceParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(choiceParser.ColonText, 0); }
    ColonJson() { return this.tryGetToken(choiceParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(choiceParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(choiceParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(choiceParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(choiceParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(choiceParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(choiceParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(choiceParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(choiceParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(choiceParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    Video_type() { return this.tryGetToken(choiceParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(choiceParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(choiceParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(choiceParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(choiceParser.AmpDocumentLink, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(choiceParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(choiceParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(choiceParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(choiceParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(choiceParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(choiceParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(choiceParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(choiceParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(choiceParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(choiceParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(choiceParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(choiceParser.OpAmpDocument, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(choiceParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(choiceParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(choiceParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(choiceParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(choiceParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(choiceParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    Video_type() { return this.tryGetToken(choiceParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(choiceParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(choiceParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(choiceParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(choiceParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(choiceParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(choiceParser.CL, 0); }
    ArticleText() { return this.tryGetToken(choiceParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_articlebit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_documentbit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_websitebit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_appbit; }
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
    get ruleIndex() { return choiceParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_stillimg_one; }
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
    get ruleIndex() { return choiceParser.RULE_videobit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(choiceParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(choiceParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_imagebit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(choiceParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(choiceParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(choiceParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(choiceParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(choiceParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(choiceParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(choiceParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(choiceParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(choiceParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(choiceParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(choiceParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(choiceParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(choiceParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(choiceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(choiceParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(choiceParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(choiceParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(choiceParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(choiceParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(choiceParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(choiceParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(choiceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_image_chained4match; }
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
    get ruleIndex() { return choiceParser.RULE_audiobit; }
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
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(choiceParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(choiceParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(choiceParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(choiceParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(choiceParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(choiceParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(choiceParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    OPA() { return this.tryGetToken(choiceParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(choiceParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(choiceParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(choiceParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(choiceParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(choiceParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(choiceParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(choiceParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(choiceParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(choiceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(choiceParser.TEL, 0); }
    PLUS() { return this.getToken(choiceParser.PLUS, 0); }
    NUMERIC() { return this.getToken(choiceParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_telephone; }
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
    URL() { return this.getToken(choiceParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_url; }
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
    OPC() { return this.getToken(choiceParser.OPC, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
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
    get ruleIndex() { return choiceParser.RULE_item; }
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
    OPC() { return this.getToken(choiceParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
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
    get ruleIndex() { return choiceParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(choiceParser.OPRANGLES, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(choiceParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(choiceParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(choiceParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(choiceParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(choiceParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(choiceParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_example; }
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
    BracEnclose() { return this.getToken(choiceParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(choiceParser.CL, 0); }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(choiceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(choiceParser.AtReference, 0); }
    CL() { return this.tryGetToken(choiceParser.CL, 0); }
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
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.URL);
        }
        else {
            return this.getToken(choiceParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(choiceParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_reference; }
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
    AtProgress() { return this.getToken(choiceParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_progress; }
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
    AtDate() { return this.getToken(choiceParser.AtDate, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
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
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(choiceParser.AtDate, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
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
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(choiceParser.OPB, 0); }
    CL() { return this.tryGetToken(choiceParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
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
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(choiceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_instruction; }
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
    OPQ() { return this.getToken(choiceParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.CL);
        }
        else {
            return this.getToken(choiceParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_hint; }
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
    OPHASH() { return this.getToken(choiceParser.OPHASH, 0); }
    CL() { return this.tryGetToken(choiceParser.CL, 0); }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(choiceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(choiceParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(choiceParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(choiceParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(choiceParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(choiceParser.NUMERIC, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(choiceParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(choiceParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_isinfoonly; }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(choiceParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(choiceParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(choiceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(choiceParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(choiceParser.CL, 0); }
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
            return this.getTokens(choiceParser.COLON);
        }
        else {
            return this.getToken(choiceParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(choiceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(choiceParser.OPDANGLE, 0); }
    CL() { return this.getToken(choiceParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_anchor; }
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
class DclinesContext extends ParserRuleContext_1.ParserRuleContext {
    DCANY() { return this.getToken(choiceParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_dclines; }
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
            return this.getTokens(choiceParser.NL);
        }
        else {
            return this.getToken(choiceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(choiceParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(choiceParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.S);
        }
        else {
            return this.getToken(choiceParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    AMP() { return this.tryGetToken(choiceParser.AMP, 0); }
    DBLEQ() { return this.tryGetToken(choiceParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(choiceParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_s_and_w; }
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
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(choiceParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(choiceParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_sspl; }
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
            return this.getTokens(choiceParser.SENTENCE);
        }
        else {
            return this.getToken(choiceParser.SENTENCE, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.BARSTRING);
        }
        else {
            return this.getToken(choiceParser.BARSTRING, i);
        }
    }
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.NOTBITMARK);
        }
        else {
            return this.getToken(choiceParser.NOTBITMARK, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.AMP);
        }
        else {
            return this.getToken(choiceParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.Greater);
        }
        else {
            return this.getToken(choiceParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.Less);
        }
        else {
            return this.getToken(choiceParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.RightArrow);
        }
        else {
            return this.getToken(choiceParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.RightAngle);
        }
        else {
            return this.getToken(choiceParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_words; }
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
    S() { return this.getToken(choiceParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_sp; }
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
