"use strict";
// Generated from ./Match/matchParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.Or_Context = exports.ClnspContext = exports.OpcContext = exports.OprContext = exports.OpsContext = exports.OpmContext = exports.OppContext = exports.OpaContext = exports.OpqContext = exports.OpbContext = exports.OpuContext = exports.OpdollContext = exports.DclinesContext = exports.S_and_wContext = exports.List_lineContext = exports.LinesContext = exports.ColcoltextContext = exports.DcolonContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Bullet_itemContext = exports.PaudiobitContext = exports.Pimage_oneContext = exports.PimagebitContext = exports.Mpanswer__Context = exports.MpanswerContext = exports.Mpquery__Context = exports.MpqueryContext = exports.Pairmultival_audioContext = exports.Pairmultival_imageContext = exports.Pair_multivalContext = exports.Pair_multivalsContext = exports.Pair_audioContext = exports.Pair_audiosContext = exports.Pair_imageContext = exports.Pair_imagesContext = exports.Panswer__Context = exports.PanswerContext = exports.TenseContext = exports.Pquery__Context = exports.PqueryContext = exports.PqpairContext = exports.PairsContext = exports.Value_title_multiContext = exports.Value_titleContext = exports.Key_titleContext = exports.Pair_heading_multiContext = exports.Pair_headingContext = exports.ResourceContext = exports.ShortansContext = exports.LongansContext = exports.Ml_exampleContext = exports.Single_gapContext = exports.GapContext = exports.BitElemContext = exports.Match_allContext = exports.Match_audioContext = exports.Match_pictureContext = exports.Match_all_reverseContext = exports.Match_reverseContext = exports.Match_solution_groupedContext = exports.Match_matrixContext = exports.Match_Context = exports.MatchesContext = exports.Bitmark_Context = exports.BitmarkContext = exports.matchParser = void 0;
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
let matchParser = /** @class */ (() => {
    class matchParser extends Parser_1.Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator_1.ParserATNSimulator(matchParser._ATN, this);
        }
        // @Override
        // @NotNull
        get vocabulary() {
            return matchParser.VOCABULARY;
        }
        // tslint:enable:no-trailing-whitespace
        // @Override
        get grammarFileName() { return "matchParser.g4"; }
        // @Override
        get ruleNames() { return matchParser.ruleNames; }
        // @Override
        get serializedATN() { return matchParser._serializedATN; }
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, matchParser.RULE_bitmark);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 261;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 248;
                                this.bitmark_();
                                this.state = 258;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.S || _la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 252;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === matchParser.S) {
                                                {
                                                    {
                                                        this.state = 249;
                                                        this.match(matchParser.S);
                                                    }
                                                }
                                                this.state = 254;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 255;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 260;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 263;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.BitMatch) | (1 << matchParser.BitMatchmatrix) | (1 << matchParser.BitMatchall) | (1 << matchParser.BitMatchrev) | (1 << matchParser.BitMatchallrev) | (1 << matchParser.BitMatchpic) | (1 << matchParser.BitMatchaudio) | (1 << matchParser.BitMatchsolgrp))) !== 0));
                    this.state = 265;
                    this.match(matchParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 2, matchParser.RULE_bitmark_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 267;
                    this.matches();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        matches() {
            let _localctx = new MatchesContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, matchParser.RULE_matches);
            try {
                this.state = 277;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.BitMatch:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 269;
                            this.match_();
                        }
                        break;
                    case matchParser.BitMatchmatrix:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 270;
                            this.match_matrix();
                        }
                        break;
                    case matchParser.BitMatchall:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 271;
                            this.match_all();
                        }
                        break;
                    case matchParser.BitMatchallrev:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 272;
                            this.match_all_reverse();
                        }
                        break;
                    case matchParser.BitMatchrev:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 273;
                            this.match_reverse();
                        }
                        break;
                    case matchParser.BitMatchpic:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 274;
                            this.match_picture();
                        }
                        break;
                    case matchParser.BitMatchaudio:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 275;
                            this.match_audio();
                        }
                        break;
                    case matchParser.BitMatchsolgrp:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 276;
                            this.match_solution_grouped();
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
        match_() {
            let _localctx = new Match_Context(this._ctx, this.state);
            this.enterRule(_localctx, 6, matchParser.RULE_match_);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 279;
                    this.match(matchParser.BitMatch);
                    this.state = 280;
                    this.format();
                    this.state = 281;
                    this.match(matchParser.CL);
                    this.state = 283;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 282;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 285;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 296;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 287;
                                this.bitElem();
                                this.state = 291;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 288;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 293;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 298;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 303;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 299;
                                    this.match(matchParser.HSPL);
                                    this.state = 300;
                                    this.match(matchParser.NL);
                                }
                                this.state = 302;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 305;
                    this.pairs();
                    this.state = 309;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 306;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 311;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                    }
                    this.state = 325;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                        case 1:
                            {
                                this.state = 312;
                                this.resource();
                                this.state = 322;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 316;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 313;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 318;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 319;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 324;
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
        match_matrix() {
            let _localctx = new Match_matrixContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, matchParser.RULE_match_matrix);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 327;
                    this.match(matchParser.BitMatchmatrix);
                    this.state = 328;
                    this.format();
                    this.state = 329;
                    this.match(matchParser.CL);
                    this.state = 331;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 330;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 333;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 335;
                                this.bitElem();
                                this.state = 339;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 336;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 341;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 351;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 347;
                                    this.match(matchParser.HSPL);
                                    this.state = 348;
                                    this.match(matchParser.NL);
                                }
                                this.state = 350;
                                this.pair_heading_multi();
                            }
                            break;
                    }
                    this.state = 353;
                    this.pair_multivals();
                    this.state = 357;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 354;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 359;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    }
                    this.state = 373;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                        case 1:
                            {
                                this.state = 360;
                                this.resource();
                                this.state = 370;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 364;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 361;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 366;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 367;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 372;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
        match_solution_grouped() {
            let _localctx = new Match_solution_groupedContext(this._ctx, this.state);
            this.enterRule(_localctx, 10, matchParser.RULE_match_solution_grouped);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 375;
                    this.match(matchParser.BitMatchsolgrp);
                    this.state = 376;
                    this.format();
                    this.state = 377;
                    this.match(matchParser.CL);
                    this.state = 379;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 378;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 392;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 383;
                                this.bitElem();
                                this.state = 387;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 384;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 389;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 394;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 399;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 395;
                                    this.match(matchParser.HSPL);
                                    this.state = 396;
                                    this.match(matchParser.NL);
                                }
                                this.state = 398;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 401;
                    this.pairs();
                    this.state = 405;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 402;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 407;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                    }
                    this.state = 421;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                        case 1:
                            {
                                this.state = 408;
                                this.resource();
                                this.state = 418;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 412;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 409;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 414;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 415;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 420;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
        match_reverse() {
            let _localctx = new Match_reverseContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, matchParser.RULE_match_reverse);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 423;
                    this.match(matchParser.BitMatchrev);
                    this.state = 424;
                    this.format();
                    this.state = 425;
                    this.match(matchParser.CL);
                    this.state = 427;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 426;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 429;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 440;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 431;
                                this.bitElem();
                                this.state = 435;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 432;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 437;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 442;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 447;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 443;
                                    this.match(matchParser.HSPL);
                                    this.state = 444;
                                    this.match(matchParser.NL);
                                }
                                this.state = 446;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 449;
                    this.pairs();
                    this.state = 453;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 450;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 455;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                    }
                    this.state = 469;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                        case 1:
                            {
                                this.state = 456;
                                this.resource();
                                this.state = 466;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 460;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 457;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 462;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 463;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 468;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
        match_all_reverse() {
            let _localctx = new Match_all_reverseContext(this._ctx, this.state);
            this.enterRule(_localctx, 14, matchParser.RULE_match_all_reverse);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 471;
                    this.match(matchParser.BitMatchallrev);
                    this.state = 472;
                    this.format();
                    this.state = 473;
                    this.match(matchParser.CL);
                    this.state = 475;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 474;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 477;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 488;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 479;
                                this.bitElem();
                                this.state = 483;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 480;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 485;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 490;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 495;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 491;
                                    this.match(matchParser.HSPL);
                                    this.state = 492;
                                    this.match(matchParser.NL);
                                }
                                this.state = 494;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 497;
                    this.pairs();
                    this.state = 501;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 498;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 503;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                    }
                    this.state = 517;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                        case 1:
                            {
                                this.state = 504;
                                this.resource();
                                this.state = 514;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 508;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 505;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 510;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 511;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 516;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
        match_picture() {
            let _localctx = new Match_pictureContext(this._ctx, this.state);
            this.enterRule(_localctx, 16, matchParser.RULE_match_picture);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 519;
                    this.match(matchParser.BitMatchpic);
                    this.state = 520;
                    this.format();
                    this.state = 521;
                    this.match(matchParser.CL);
                    this.state = 523;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 522;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 525;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 536;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 527;
                                this.bitElem();
                                this.state = 531;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 528;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 533;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 538;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 543;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 539;
                                    this.match(matchParser.HSPL);
                                    this.state = 540;
                                    this.match(matchParser.NL);
                                }
                                this.state = 542;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 545;
                    this.pair_images();
                    this.state = 549;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 546;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 551;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                    }
                    this.state = 565;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                        case 1:
                            {
                                this.state = 552;
                                this.resource();
                                this.state = 562;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 556;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 553;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 558;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 559;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 564;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
        match_audio() {
            let _localctx = new Match_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 18, matchParser.RULE_match_audio);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 567;
                    this.match(matchParser.BitMatchaudio);
                    this.state = 568;
                    this.format();
                    this.state = 569;
                    this.match(matchParser.CL);
                    this.state = 571;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 570;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 573;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 584;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 575;
                                this.bitElem();
                                this.state = 579;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 576;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 581;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 586;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 591;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 587;
                                    this.match(matchParser.HSPL);
                                    this.state = 588;
                                    this.match(matchParser.NL);
                                }
                                this.state = 590;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 593;
                    this.pair_audios();
                    this.state = 597;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 594;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 599;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                    }
                    this.state = 613;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                        case 1:
                            {
                                this.state = 600;
                                this.resource();
                                this.state = 610;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 604;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 601;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 606;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 607;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 612;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
        match_all() {
            let _localctx = new Match_allContext(this._ctx, this.state);
            this.enterRule(_localctx, 20, matchParser.RULE_match_all);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 615;
                    this.match(matchParser.BitMatchall);
                    this.state = 616;
                    this.format();
                    this.state = 617;
                    this.match(matchParser.CL);
                    this.state = 619;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 618;
                                this.match(matchParser.NL);
                            }
                        }
                        this.state = 621;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.NL);
                    this.state = 632;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)))) !== 0) || _la === matchParser.LIST_LINE) {
                        {
                            {
                                this.state = 623;
                                this.bitElem();
                                this.state = 627;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 624;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 629;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 634;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 639;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                        case 1:
                            {
                                {
                                    this.state = 635;
                                    this.match(matchParser.HSPL);
                                    this.state = 636;
                                    this.match(matchParser.NL);
                                }
                                this.state = 638;
                                this.pair_heading();
                            }
                            break;
                    }
                    this.state = 641;
                    this.pairs();
                    this.state = 645;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 642;
                                    this.match(matchParser.NL);
                                }
                            }
                        }
                        this.state = 647;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    }
                    this.state = 661;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                        case 1:
                            {
                                this.state = 648;
                                this.resource();
                                this.state = 658;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 652;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === matchParser.NL) {
                                                    {
                                                        {
                                                            this.state = 649;
                                                            this.match(matchParser.NL);
                                                        }
                                                    }
                                                    this.state = 654;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 655;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 660;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
        bitElem() {
            let _localctx = new BitElemContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, matchParser.RULE_bitElem);
            try {
                this.state = 688;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 663;
                            this.list_line();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 664;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 665;
                            this.colcoltext();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 666;
                            this.gap();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 667;
                            this.atdef();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 668;
                            this.dollarans();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 669;
                            this.reference();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 670;
                            this.item();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 671;
                            this.instruction();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 672;
                            this.hint();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 673;
                            this.s_and_w();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 674;
                            this.example();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 675;
                            this.bool_label();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 676;
                            this.imagebit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 677;
                            this.audiobit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 678;
                            this.videobit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 679;
                            this.articlebit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 680;
                            this.documentbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 681;
                            this.appbit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 682;
                            this.websitebit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 683;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 684;
                            this.angleref();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 685;
                            this.anchor();
                        }
                        break;
                    case 24:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 686;
                            this.bracketed_text();
                        }
                        break;
                    case 25:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 687;
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
            this.enterRule(_localctx, 24, matchParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 690;
                    this.single_gap();
                    this.state = 698;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 696;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case matchParser.OPU:
                                        {
                                            this.state = 691;
                                            this.single_gap();
                                        }
                                        break;
                                    case matchParser.OPB:
                                        {
                                            this.state = 692;
                                            this.instruction();
                                        }
                                        break;
                                    case matchParser.OPQ:
                                        {
                                            this.state = 693;
                                            this.hint();
                                        }
                                        break;
                                    case matchParser.OPC:
                                        {
                                            this.state = 694;
                                            this.item();
                                        }
                                        break;
                                    case matchParser.AtExampleWithStr:
                                    case matchParser.AtExamplecol:
                                    case matchParser.AtExamplecl:
                                        {
                                            this.state = 695;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 700;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 26, matchParser.RULE_single_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 701;
                    this.match(matchParser.OPU);
                    this.state = 705;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                        case 1:
                            {
                                this.state = 702;
                                this.match(matchParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 703;
                                this.match(matchParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 710;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 707;
                                    this.s_and_w();
                                }
                            }
                        }
                        this.state = 712;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                    }
                    this.state = 713;
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
        ml_example() {
            let _localctx = new Ml_exampleContext(this._ctx, this.state);
            this.enterRule(_localctx, 28, matchParser.RULE_ml_example);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 715;
                    this.match(matchParser.AtExamplecol);
                    this.state = 723;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                        case 1:
                            {
                                this.state = 717;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === matchParser.NL) {
                                    {
                                        this.state = 716;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 719;
                                this.lines();
                                this.state = 721;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === matchParser.NL) {
                                    {
                                        this.state = 720;
                                        this.match(matchParser.NL);
                                    }
                                }
                            }
                            break;
                    }
                    this.state = 725;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 30, matchParser.RULE_longans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 727;
                    this.match(matchParser.AtLonganswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 32, matchParser.RULE_shortans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 729;
                    this.match(matchParser.AtShortanswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 34, matchParser.RULE_resource);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 731;
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
        pair_heading() {
            let _localctx = new Pair_headingContext(this._ctx, this.state);
            this.enterRule(_localctx, 36, matchParser.RULE_pair_heading);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 733;
                    this.key_title();
                    {
                        this.state = 737;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === matchParser.NL) {
                            {
                                {
                                    this.state = 734;
                                    this.match(matchParser.NL);
                                }
                            }
                            this.state = 739;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 740;
                        this.match(matchParser.EQ);
                        this.state = 744;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === matchParser.NL) {
                            {
                                {
                                    this.state = 741;
                                    this.match(matchParser.NL);
                                }
                            }
                            this.state = 746;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    this.state = 747;
                    this.value_title();
                    this.state = 748;
                    this.match(matchParser.NL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        pair_heading_multi() {
            let _localctx = new Pair_heading_multiContext(this._ctx, this.state);
            this.enterRule(_localctx, 38, matchParser.RULE_pair_heading_multi);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 750;
                    this.key_title();
                    this.state = 765;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        {
                                            this.state = 754;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === matchParser.NL) {
                                                {
                                                    {
                                                        this.state = 751;
                                                        this.match(matchParser.NL);
                                                    }
                                                }
                                                this.state = 756;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 757;
                                            this.match(matchParser.EQ);
                                            this.state = 761;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === matchParser.NL) {
                                                {
                                                    {
                                                        this.state = 758;
                                                        this.match(matchParser.NL);
                                                    }
                                                }
                                                this.state = 763;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                        this.state = 764;
                                        this.value_title_multi();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 767;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 769;
                    this.match(matchParser.NL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 40, matchParser.RULE_key_title);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 771;
                    this.match(matchParser.OPHASH);
                    this.state = 775;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 772;
                                    this.s_and_w();
                                }
                            }
                        }
                        this.state = 777;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                    }
                    this.state = 778;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 42, matchParser.RULE_value_title);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 780;
                    this.match(matchParser.OPHASH);
                    this.state = 784;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 781;
                                    this.s_and_w();
                                }
                            }
                        }
                        this.state = 786;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                    }
                    this.state = 787;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        value_title_multi() {
            let _localctx = new Value_title_multiContext(this._ctx, this.state);
            this.enterRule(_localctx, 44, matchParser.RULE_value_title_multi);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 789;
                    this.match(matchParser.OPHASH);
                    this.state = 793;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 790;
                                    this.s_and_w();
                                }
                            }
                        }
                        this.state = 795;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                    }
                    this.state = 796;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 46, matchParser.RULE_pairs);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 798;
                    this.match(matchParser.HSPL);
                    this.state = 799;
                    this.match(matchParser.NL);
                    this.state = 801;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 800;
                                        this.pqpair();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 803;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
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
        pqpair() {
            let _localctx = new PqpairContext(this._ctx, this.state);
            this.enterRule(_localctx, 48, matchParser.RULE_pqpair);
            let _la;
            try {
                let _alt;
                this.state = 879;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 805;
                            this.pquery();
                            {
                                this.state = 806;
                                this.match(matchParser.NL);
                                this.state = 807;
                                this.match(matchParser.EQ);
                                this.state = 808;
                                this.match(matchParser.NL);
                            }
                            this.state = 810;
                            this.panswer();
                            this.state = 816;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.OR) {
                                {
                                    {
                                        this.state = 811;
                                        this.or_();
                                        this.state = 812;
                                        this.panswer();
                                    }
                                }
                                this.state = 818;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            {
                                this.state = 822;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 819;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 824;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 825;
                                this.match(matchParser.HSPL);
                                this.state = 829;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 826;
                                                this.match(matchParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 831;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                                }
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 832;
                            this.pquery();
                            {
                                this.state = 833;
                                this.match(matchParser.NL);
                                this.state = 834;
                                this.match(matchParser.EQ);
                                this.state = 838;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 835;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 840;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                            {
                                this.state = 841;
                                this.match(matchParser.HSPL);
                                this.state = 845;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 842;
                                                this.match(matchParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 847;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                                }
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            {
                                this.state = 851;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 848;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 853;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 854;
                                this.match(matchParser.EQ);
                                this.state = 858;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 855;
                                                this.match(matchParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 860;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                                }
                            }
                            {
                                this.state = 861;
                                this.match(matchParser.NL);
                                this.state = 862;
                                this.match(matchParser.EQ);
                                this.state = 863;
                                this.match(matchParser.NL);
                            }
                            this.state = 865;
                            this.panswer();
                            {
                                this.state = 869;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.NL) {
                                    {
                                        {
                                            this.state = 866;
                                            this.match(matchParser.NL);
                                        }
                                    }
                                    this.state = 871;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 872;
                                this.match(matchParser.HSPL);
                                this.state = 876;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 873;
                                                this.match(matchParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 878;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
                                }
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
        pquery() {
            let _localctx = new PqueryContext(this._ctx, this.state);
            this.enterRule(_localctx, 50, matchParser.RULE_pquery);
            try {
                let _alt;
                this.state = 889;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 881;
                            this.pquery__();
                            this.state = 885;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 882;
                                            this.pquery__();
                                        }
                                    }
                                }
                                this.state = 887;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        // tslint:disable-next-line:no-empty
                        {
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
        pquery__() {
            let _localctx = new Pquery__Context(this._ctx, this.state);
            this.enterRule(_localctx, 52, matchParser.RULE_pquery__);
            let _la;
            try {
                let _alt;
                this.state = 931;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 894;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.NL) {
                                {
                                    {
                                        this.state = 891;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 896;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 900;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 897;
                                            this.match(matchParser.S);
                                        }
                                    }
                                }
                                this.state = 902;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                            }
                            this.state = 906;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 906;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 903;
                                                        this.item();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 904;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 905;
                                                        this.match(matchParser.COLON);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 908;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 917;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 913;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === matchParser.S) {
                                            {
                                                {
                                                    this.state = 910;
                                                    this.match(matchParser.S);
                                                }
                                            }
                                            this.state = 915;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        {
                                            this.state = 916;
                                            this.example();
                                        }
                                    }
                                    break;
                            }
                            this.state = 922;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case matchParser.AtLonganswer:
                                    {
                                        this.state = 919;
                                        this.longans();
                                    }
                                    break;
                                case matchParser.AtShortanswer:
                                    {
                                        this.state = 920;
                                        this.shortans();
                                    }
                                    break;
                                case matchParser.TENSE:
                                    {
                                        this.state = 921;
                                        this.tense();
                                    }
                                    break;
                                case matchParser.S:
                                case matchParser.OPB:
                                case matchParser.OPS:
                                case matchParser.OPC:
                                case matchParser.CL:
                                case matchParser.COLON:
                                case matchParser.AMP:
                                case matchParser.DBLCOLON:
                                case matchParser.Greater:
                                case matchParser.Less:
                                case matchParser.RightAngle:
                                case matchParser.RightArrow:
                                case matchParser.NUMERIC:
                                case matchParser.STRING:
                                case matchParser.NL:
                                case matchParser.SENTENCE:
                                case matchParser.BARSTRING:
                                case matchParser.LIST_LINE:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 927;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.NL) {
                                {
                                    {
                                        this.state = 924;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 929;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 930;
                            this.instruction();
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
        tense() {
            let _localctx = new TenseContext(this._ctx, this.state);
            this.enterRule(_localctx, 54, matchParser.RULE_tense);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 933;
                    this.match(matchParser.TENSE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 56, matchParser.RULE_panswer);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 935;
                    this.panswer__();
                    this.state = 939;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case matchParser.AtLonganswer:
                            {
                                this.state = 936;
                                this.longans();
                            }
                            break;
                        case matchParser.AtShortanswer:
                            {
                                this.state = 937;
                                this.shortans();
                            }
                            break;
                        case matchParser.AtExampleWithStr:
                        case matchParser.AtExamplecol:
                        case matchParser.AtExamplecl:
                            {
                                this.state = 938;
                                this.example();
                            }
                            break;
                        case matchParser.HSPL:
                        case matchParser.OR:
                        case matchParser.NL:
                            break;
                        default:
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
        panswer__() {
            let _localctx = new Panswer__Context(this._ctx, this.state);
            this.enterRule(_localctx, 58, matchParser.RULE_panswer__);
            let _la;
            try {
                let _alt;
                this.state = 1008;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 942;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 941;
                                    this.example();
                                }
                            }
                            this.state = 945;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.OPC) {
                                {
                                    this.state = 944;
                                    this.item();
                                }
                            }
                            this.state = 953;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 953;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 947;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 948;
                                                        this.match(matchParser.NL);
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 949;
                                                        this.match(matchParser.S);
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 950;
                                                        this.match(matchParser.OP);
                                                    }
                                                    break;
                                                case 5:
                                                    {
                                                        this.state = 951;
                                                        this.match(matchParser.CL);
                                                    }
                                                    break;
                                                case 6:
                                                    {
                                                        this.state = 952;
                                                        this.match(matchParser.DBLCOLON);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 955;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 964;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 960;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === matchParser.S) {
                                            {
                                                {
                                                    this.state = 957;
                                                    this.match(matchParser.S);
                                                }
                                            }
                                            this.state = 962;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 963;
                                        this.example();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 967;
                            this.example();
                            this.state = 969;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.LIST_LINE) {
                                {
                                    this.state = 968;
                                    this.s_and_w();
                                }
                            }
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 971;
                            this.s_and_w();
                            this.state = 973;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 972;
                                        this.match(matchParser.NL);
                                    }
                                    break;
                            }
                            this.state = 980;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        this.state = 978;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case matchParser.AtExampleWithStr:
                                            case matchParser.AtExamplecol:
                                            case matchParser.AtExamplecl:
                                                {
                                                    this.state = 975;
                                                    this.example();
                                                }
                                                break;
                                            case matchParser.OPQ:
                                                {
                                                    this.state = 976;
                                                    this.hint();
                                                }
                                                break;
                                            case matchParser.OPB:
                                                {
                                                    this.state = 977;
                                                    this.instruction();
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException_1.NoViableAltException(this);
                                        }
                                    }
                                }
                                this.state = 982;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            }
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 983;
                            this.s_and_w();
                            this.state = 984;
                            this.match(matchParser.NL);
                            this.state = 985;
                            this.instruction();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 988;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.OPB) {
                                {
                                    this.state = 987;
                                    this.instruction();
                                }
                            }
                            this.state = 990;
                            this.opdoll();
                            this.state = 995;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 995;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 991;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 992;
                                                        this.match(matchParser.NL);
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 993;
                                                        this.match(matchParser.DOT);
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 994;
                                                        this.match(matchParser.COLON);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 997;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 999;
                            this.match(matchParser.CL);
                            this.state = 1001;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1000;
                                        this.example();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1003;
                            this.instruction();
                            this.state = 1004;
                            this.s_and_w();
                            this.state = 1006;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1005;
                                        this.example();
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
        pair_images() {
            let _localctx = new Pair_imagesContext(this._ctx, this.state);
            this.enterRule(_localctx, 60, matchParser.RULE_pair_images);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1010;
                    this.match(matchParser.HSPL);
                    this.state = 1011;
                    this.match(matchParser.NL);
                    this.state = 1013;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1012;
                                        this.pair_image();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1015;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
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
        pair_image() {
            let _localctx = new Pair_imageContext(this._ctx, this.state);
            this.enterRule(_localctx, 62, matchParser.RULE_pair_image);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1017;
                    this.pimagebit();
                    {
                        this.state = 1018;
                        this.match(matchParser.NL);
                        this.state = 1019;
                        this.match(matchParser.EQ);
                        this.state = 1020;
                        this.match(matchParser.NL);
                    }
                    this.state = 1022;
                    this.panswer();
                    {
                        this.state = 1026;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === matchParser.NL) {
                            {
                                {
                                    this.state = 1023;
                                    this.match(matchParser.NL);
                                }
                            }
                            this.state = 1028;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1029;
                        this.match(matchParser.HSPL);
                        this.state = 1033;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1030;
                                        this.match(matchParser.NL);
                                    }
                                }
                            }
                            this.state = 1035;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
        pair_audios() {
            let _localctx = new Pair_audiosContext(this._ctx, this.state);
            this.enterRule(_localctx, 64, matchParser.RULE_pair_audios);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1036;
                    this.match(matchParser.HSPL);
                    this.state = 1037;
                    this.match(matchParser.NL);
                    this.state = 1039;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1038;
                                        this.pair_audio();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1041;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
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
        pair_audio() {
            let _localctx = new Pair_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 66, matchParser.RULE_pair_audio);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1043;
                    this.paudiobit();
                    {
                        this.state = 1044;
                        this.match(matchParser.NL);
                        this.state = 1045;
                        this.match(matchParser.EQ);
                        this.state = 1046;
                        this.match(matchParser.NL);
                    }
                    this.state = 1048;
                    this.panswer();
                    {
                        this.state = 1052;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === matchParser.NL) {
                            {
                                {
                                    this.state = 1049;
                                    this.match(matchParser.NL);
                                }
                            }
                            this.state = 1054;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1055;
                        this.match(matchParser.HSPL);
                        this.state = 1059;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1056;
                                        this.match(matchParser.NL);
                                    }
                                }
                            }
                            this.state = 1061;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
        pair_multivals() {
            let _localctx = new Pair_multivalsContext(this._ctx, this.state);
            this.enterRule(_localctx, 68, matchParser.RULE_pair_multivals);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1062;
                    this.match(matchParser.HSPL);
                    this.state = 1063;
                    this.match(matchParser.NL);
                    this.state = 1065;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1064;
                                        this.pair_multival();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1067;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
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
        pair_multival() {
            let _localctx = new Pair_multivalContext(this._ctx, this.state);
            this.enterRule(_localctx, 70, matchParser.RULE_pair_multival);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1069;
                    this.mpquery();
                    this.state = 1075;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        {
                                            this.state = 1070;
                                            this.match(matchParser.NL);
                                            this.state = 1071;
                                            this.match(matchParser.EQ);
                                            this.state = 1072;
                                            this.match(matchParser.NL);
                                        }
                                        this.state = 1074;
                                        this.mpanswer();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1077;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    {
                        this.state = 1082;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === matchParser.NL) {
                            {
                                {
                                    this.state = 1079;
                                    this.match(matchParser.NL);
                                }
                            }
                            this.state = 1084;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1085;
                        this.match(matchParser.HSPL);
                        this.state = 1089;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1086;
                                        this.match(matchParser.NL);
                                    }
                                }
                            }
                            this.state = 1091;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
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
        pairmultival_image() {
            let _localctx = new Pairmultival_imageContext(this._ctx, this.state);
            this.enterRule(_localctx, 72, matchParser.RULE_pairmultival_image);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    {
                        this.state = 1092;
                        this.match(matchParser.HSPL);
                        this.state = 1093;
                        this.imagebit();
                        this.state = 1094;
                        this.match(matchParser.EQ);
                        this.state = 1095;
                        this.mpanswer();
                        this.state = 1100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === matchParser.EQ) {
                            {
                                {
                                    this.state = 1096;
                                    this.match(matchParser.EQ);
                                    this.state = 1097;
                                    this.mpanswer();
                                }
                            }
                            this.state = 1102;
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
        pairmultival_audio() {
            let _localctx = new Pairmultival_audioContext(this._ctx, this.state);
            this.enterRule(_localctx, 74, matchParser.RULE_pairmultival_audio);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1114;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1103;
                                this.match(matchParser.HSPL);
                                this.state = 1104;
                                this.audiobit();
                                this.state = 1105;
                                this.match(matchParser.EQ);
                                this.state = 1106;
                                this.mpanswer();
                                this.state = 1111;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === matchParser.EQ) {
                                    {
                                        {
                                            this.state = 1107;
                                            this.match(matchParser.EQ);
                                            this.state = 1108;
                                            this.mpanswer();
                                        }
                                    }
                                    this.state = 1113;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 1116;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === matchParser.HSPL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        mpquery() {
            let _localctx = new MpqueryContext(this._ctx, this.state);
            this.enterRule(_localctx, 76, matchParser.RULE_mpquery);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1118;
                    this.mpquery__();
                    this.state = 1123;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1119;
                                    this.match(matchParser.NL);
                                    this.state = 1120;
                                    this.mpquery__();
                                }
                            }
                        }
                        this.state = 1125;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        mpquery__() {
            let _localctx = new Mpquery__Context(this._ctx, this.state);
            this.enterRule(_localctx, 78, matchParser.RULE_mpquery__);
            let _la;
            try {
                this.state = 1149;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1129;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.NL) {
                                {
                                    {
                                        this.state = 1126;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 1131;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1135;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1135;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1132;
                                                this.item();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1133;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1134;
                                                this.match(matchParser.COLON);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1137;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.OPC) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.LIST_LINE);
                            this.state = 1140;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 1139;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1145;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.NL) {
                                {
                                    {
                                        this.state = 1142;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 1147;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1148;
                            this.match(matchParser.LIST_LINE);
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
        mpanswer() {
            let _localctx = new MpanswerContext(this._ctx, this.state);
            this.enterRule(_localctx, 80, matchParser.RULE_mpanswer);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1151;
                    this.mpanswer__();
                    this.state = 1154;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case matchParser.AtLonganswer:
                            {
                                this.state = 1152;
                                this.longans();
                            }
                            break;
                        case matchParser.AtShortanswer:
                            {
                                this.state = 1153;
                                this.shortans();
                            }
                            break;
                        case matchParser.EOF:
                        case matchParser.EQ:
                        case matchParser.HSPL:
                        case matchParser.OR:
                        case matchParser.NL:
                            break;
                        default:
                            break;
                    }
                    this.state = 1164;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1156;
                                    _la = this._input.LA(1);
                                    if (!(_la === matchParser.OR || _la === matchParser.NL)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        if (this._input.LA(1) === Token_1.Token.EOF) {
                                            this.matchedEOF = true;
                                        }
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1157;
                                    this.mpanswer__();
                                    this.state = 1160;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case matchParser.AtLonganswer:
                                            {
                                                this.state = 1158;
                                                this.longans();
                                            }
                                            break;
                                        case matchParser.AtShortanswer:
                                            {
                                                this.state = 1159;
                                                this.shortans();
                                            }
                                            break;
                                        case matchParser.EOF:
                                        case matchParser.EQ:
                                        case matchParser.HSPL:
                                        case matchParser.OR:
                                        case matchParser.NL:
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            }
                        }
                        this.state = 1166;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        mpanswer__() {
            let _localctx = new Mpanswer__Context(this._ctx, this.state);
            this.enterRule(_localctx, 82, matchParser.RULE_mpanswer__);
            let _la;
            try {
                let _alt;
                this.state = 1234;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1168;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 1167;
                                    this.example();
                                }
                            }
                            this.state = 1171;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.OPC) {
                                {
                                    this.state = 1170;
                                    this.item();
                                }
                            }
                            this.state = 1179;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1179;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1173;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1174;
                                                        this.match(matchParser.NL);
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 1175;
                                                        this.match(matchParser.S);
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 1176;
                                                        this.match(matchParser.OP);
                                                    }
                                                    break;
                                                case 5:
                                                    {
                                                        this.state = 1177;
                                                        this.match(matchParser.CL);
                                                    }
                                                    break;
                                                case 6:
                                                    {
                                                        this.state = 1178;
                                                        this.match(matchParser.DBLCOLON);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1181;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 1190;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.S || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 1186;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === matchParser.S) {
                                        {
                                            {
                                                this.state = 1183;
                                                this.match(matchParser.S);
                                            }
                                        }
                                        this.state = 1188;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1189;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1193;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.OPB) {
                                {
                                    this.state = 1192;
                                    this.instruction();
                                }
                            }
                            this.state = 1195;
                            this.opdoll();
                            this.state = 1200;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1200;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1196;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1197;
                                                        this.match(matchParser.NL);
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 1198;
                                                        this.match(matchParser.DOT);
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 1199;
                                                        this.match(matchParser.COLON);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1202;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 1204;
                            this.match(matchParser.CL);
                            this.state = 1206;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 1205;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1208;
                            this.instruction();
                            this.state = 1209;
                            this.s_and_w();
                            this.state = 1211;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 1210;
                                    this.example();
                                }
                            }
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1214;
                            this.example();
                            this.state = 1216;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.LIST_LINE) {
                                {
                                    this.state = 1215;
                                    this.s_and_w();
                                }
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1218;
                            this.s_and_w();
                            this.state = 1220;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1219;
                                        this.match(matchParser.NL);
                                    }
                                    break;
                            }
                            this.state = 1227;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.OPB || _la === matchParser.OPQ || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (matchParser.AtExampleWithStr - 62)) | (1 << (matchParser.AtExamplecol - 62)) | (1 << (matchParser.AtExamplecl - 62)))) !== 0)) {
                                {
                                    this.state = 1225;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case matchParser.AtExampleWithStr:
                                        case matchParser.AtExamplecol:
                                        case matchParser.AtExamplecl:
                                            {
                                                this.state = 1222;
                                                this.example();
                                            }
                                            break;
                                        case matchParser.OPQ:
                                            {
                                                this.state = 1223;
                                                this.hint();
                                            }
                                            break;
                                        case matchParser.OPB:
                                            {
                                                this.state = 1224;
                                                this.instruction();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 1229;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1230;
                            this.s_and_w();
                            this.state = 1231;
                            this.match(matchParser.NL);
                            this.state = 1232;
                            this.instruction();
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
        pimagebit() {
            let _localctx = new PimagebitContext(this._ctx, this.state);
            this.enterRule(_localctx, 84, matchParser.RULE_pimagebit);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1236;
                    this.pimage_one();
                    this.state = 1240;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1237;
                                    this.image_chained4match();
                                }
                            }
                        }
                        this.state = 1242;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
                    }
                    this.state = 1247;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.OPATALT) {
                        {
                            this.state = 1243;
                            this.match(matchParser.OPATALT);
                            this.state = 1244;
                            this.words();
                            this.state = 1245;
                            this.match(matchParser.CL);
                        }
                    }
                    this.state = 1257;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.OpAtCaption) {
                        {
                            this.state = 1249;
                            this.match(matchParser.OpAtCaption);
                            this.state = 1253;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1250;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1255;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                            }
                            this.state = 1256;
                            this.match(matchParser.CL);
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
        pimage_one() {
            let _localctx = new Pimage_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 86, matchParser.RULE_pimage_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1259;
                    this.image_one();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 88, matchParser.RULE_paudiobit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1261;
                    this.op_audio_format();
                    this.state = 1262;
                    this.match(matchParser.COLON);
                    this.state = 1263;
                    this.url();
                    this.state = 1264;
                    this.match(matchParser.CL);
                    this.state = 1269;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.OPATALT) {
                        {
                            this.state = 1265;
                            this.match(matchParser.OPATALT);
                            this.state = 1266;
                            this.words();
                            this.state = 1267;
                            this.match(matchParser.CL);
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
        bullet_item() {
            let _localctx = new Bullet_itemContext(this._ctx, this.state);
            this.enterRule(_localctx, 90, matchParser.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1271;
                    this.match(matchParser.OPBUL);
                    this.state = 1272;
                    this.s_and_w();
                    this.state = 1273;
                    this.match(matchParser.CL);
                    this.state = 1275;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.AtPoints) {
                        {
                            this.state = 1274;
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
            this.enterRule(_localctx, 92, matchParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1277;
                    this.match(matchParser.AtPoints);
                    this.state = 1278;
                    this.match(matchParser.NUMERIC);
                    this.state = 1279;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 94, matchParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1284;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1281;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 1286;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
                    }
                    this.state = 1292;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (matchParser.AmpAudio - 83)) | (1 << (matchParser.AmpImage - 83)) | (1 << (matchParser.AmpImageZoom - 83)) | (1 << (matchParser.AmpImageWAudio - 83)) | (1 << (matchParser.AmpVideo - 83)) | (1 << (matchParser.AmpArticle - 83)) | (1 << (matchParser.AmpDocument - 83)) | (1 << (matchParser.AmpApp - 83)) | (1 << (matchParser.AmpWebsite - 83)) | (1 << (matchParser.AmpStillImageFilm - 83)) | (1 << (matchParser.AmpPdf - 83)) | (1 << (matchParser.AmpAudioLink - 83)) | (1 << (matchParser.AmpImageLink - 83)) | (1 << (matchParser.AmpVideoLink - 83)) | (1 << (matchParser.AmpArticleLink - 83)) | (1 << (matchParser.AmpDocumentLink - 83)) | (1 << (matchParser.AmpAppLink - 83)) | (1 << (matchParser.AmpWebsiteLink - 83)) | (1 << (matchParser.AmpStillImageFilmLink - 83)))) !== 0) || _la === matchParser.ColonText || _la === matchParser.ColonJson) {
                        {
                            this.state = 1290;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case matchParser.ColonText:
                                    {
                                        this.state = 1287;
                                        this.match(matchParser.ColonText);
                                    }
                                    break;
                                case matchParser.ColonJson:
                                    {
                                        this.state = 1288;
                                        this.match(matchParser.ColonJson);
                                    }
                                    break;
                                case matchParser.AmpAudio:
                                case matchParser.AmpImage:
                                case matchParser.AmpImageZoom:
                                case matchParser.AmpImageWAudio:
                                case matchParser.AmpVideo:
                                case matchParser.AmpArticle:
                                case matchParser.AmpDocument:
                                case matchParser.AmpApp:
                                case matchParser.AmpWebsite:
                                case matchParser.AmpStillImageFilm:
                                case matchParser.AmpPdf:
                                case matchParser.AmpAudioLink:
                                case matchParser.AmpImageLink:
                                case matchParser.AmpVideoLink:
                                case matchParser.AmpArticleLink:
                                case matchParser.AmpDocumentLink:
                                case matchParser.AmpAppLink:
                                case matchParser.AmpWebsiteLink:
                                case matchParser.AmpStillImageFilmLink:
                                    {
                                        this.state = 1289;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 1294;
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
            this.enterRule(_localctx, 96, matchParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1295;
                    _la = this._input.LA(1);
                    if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (matchParser.AmpArticle - 88)) | (1 << (matchParser.AmpDocument - 88)) | (1 << (matchParser.AmpWebsite - 88)) | (1 << (matchParser.AmpStillImageFilm - 88)) | (1 << (matchParser.AmpAudioLink - 88)) | (1 << (matchParser.AmpImageLink - 88)) | (1 << (matchParser.AmpVideoLink - 88)) | (1 << (matchParser.AmpArticleLink - 88)) | (1 << (matchParser.AmpDocumentLink - 88)) | (1 << (matchParser.AmpAppLink - 88)) | (1 << (matchParser.AmpWebsiteLink - 88)) | (1 << (matchParser.AmpStillImageFilmLink - 88)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (matchParser.BitmarkMinus - 122)) | (1 << (matchParser.BitmarkPlus - 122)) | (1 << (matchParser.ColonJson - 122)) | (1 << (matchParser.Prosemirror - 122)) | (1 << (matchParser.Placeholder - 122)))) !== 0))) {
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
            this.enterRule(_localctx, 98, matchParser.RULE_resource_format_extra);
            try {
                this.state = 1306;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AmpImage:
                    case matchParser.AmpImageZoom:
                    case matchParser.AmpImageWAudio:
                    case matchParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1297;
                            this.image_format();
                        }
                        break;
                    case matchParser.AmpAudio:
                    case matchParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1298;
                            this.audio_format();
                        }
                        break;
                    case matchParser.AmpVideo:
                    case matchParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1299;
                            this.video_format();
                        }
                        break;
                    case matchParser.AmpArticle:
                    case matchParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1300;
                            this.article_format();
                        }
                        break;
                    case matchParser.AmpDocument:
                    case matchParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1301;
                            this.document_format();
                        }
                        break;
                    case matchParser.AmpApp:
                    case matchParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1302;
                            this.app_format();
                        }
                        break;
                    case matchParser.AmpWebsite:
                    case matchParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1303;
                            this.website_format();
                        }
                        break;
                    case matchParser.AmpStillImageFilm:
                    case matchParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1304;
                            this.stillimagefilm_format();
                        }
                        break;
                    case matchParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1305;
                            this.match(matchParser.AmpPdf);
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
            this.enterRule(_localctx, 100, matchParser.RULE_format2);
            try {
                this.state = 1313;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.BitmarkMinus:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1308;
                            this.match(matchParser.BitmarkMinus);
                        }
                        break;
                    case matchParser.BitmarkPlus:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1309;
                            this.match(matchParser.BitmarkPlus);
                        }
                        break;
                    case matchParser.ColonText:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1310;
                            this.match(matchParser.ColonText);
                        }
                        break;
                    case matchParser.ColonJson:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1311;
                            this.match(matchParser.ColonJson);
                        }
                        break;
                    case matchParser.EOF:
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
            this.enterRule(_localctx, 102, matchParser.RULE_image_format);
            let _la;
            try {
                this.state = 1329;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1315;
                            this.match(matchParser.AmpImage);
                            this.state = 1318;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case matchParser.Image_type:
                                    {
                                        {
                                            this.state = 1316;
                                            this.match(matchParser.Image_type);
                                        }
                                    }
                                    break;
                                case matchParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 1317;
                                            this.match(matchParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case matchParser.CL:
                                case matchParser.AmpAudio:
                                case matchParser.AmpImage:
                                case matchParser.AmpImageZoom:
                                case matchParser.AmpImageWAudio:
                                case matchParser.AmpVideo:
                                case matchParser.AmpArticle:
                                case matchParser.AmpDocument:
                                case matchParser.AmpApp:
                                case matchParser.AmpWebsite:
                                case matchParser.AmpStillImageFilm:
                                case matchParser.AmpPdf:
                                case matchParser.AmpAudioLink:
                                case matchParser.AmpImageLink:
                                case matchParser.AmpVideoLink:
                                case matchParser.AmpArticleLink:
                                case matchParser.AmpDocumentLink:
                                case matchParser.AmpAppLink:
                                case matchParser.AmpWebsiteLink:
                                case matchParser.AmpStillImageFilmLink:
                                case matchParser.ColonText:
                                case matchParser.ColonJson:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case matchParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1320;
                            this.match(matchParser.AmpImageLink);
                            this.state = 1322;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.Image_type) {
                                {
                                    this.state = 1321;
                                    this.match(matchParser.Image_type);
                                }
                            }
                        }
                        break;
                    case matchParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1324;
                            this.match(matchParser.AmpImageZoom);
                            this.state = 1326;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.Image_type) {
                                {
                                    this.state = 1325;
                                    this.match(matchParser.Image_type);
                                }
                            }
                        }
                        break;
                    case matchParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1328;
                            this.match(matchParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 104, matchParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1331;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.AmpVideo || _la === matchParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1334;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.COLON) {
                        {
                            this.state = 1332;
                            this.match(matchParser.COLON);
                            this.state = 1333;
                            this.match(matchParser.Video_type);
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
            this.enterRule(_localctx, 106, matchParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1336;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.AmpArticle || _la === matchParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 108, matchParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1338;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.AmpDocument || _la === matchParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 110, matchParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1340;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.AmpApp || _la === matchParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 112, matchParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1342;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.AmpWebsite || _la === matchParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 114, matchParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1344;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.AmpStillImageFilm || _la === matchParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 116, matchParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1346;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.OpAmpArticle || _la === matchParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 118, matchParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1348;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.OpAmpDocument || _la === matchParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 120, matchParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1350;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.OpAmpApp || _la === matchParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 122, matchParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1352;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.OpAmpWebsite || _la === matchParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 124, matchParser.RULE_op_video_format);
            try {
                this.state = 1364;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1354;
                            this.match(matchParser.OpAmpVideo);
                            this.state = 1357;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1355;
                                        this.match(matchParser.COLON);
                                        this.state = 1356;
                                        this.match(matchParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case matchParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1359;
                            this.match(matchParser.OpAmpVideoLink);
                            this.state = 1362;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1360;
                                        this.match(matchParser.COLON);
                                        this.state = 1361;
                                        this.match(matchParser.Video_type);
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
            this.enterRule(_localctx, 126, matchParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1366;
                    _la = this._input.LA(1);
                    if (!(_la === matchParser.OpAmpStillImageFilm || _la === matchParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 128, matchParser.RULE_articlebit);
            try {
                this.state = 1374;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OpAmpArticle:
                    case matchParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1368;
                            this.op_article_format();
                            this.state = 1369;
                            this.match(matchParser.COLON);
                            this.state = 1370;
                            this.url();
                            this.state = 1371;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1373;
                            this.match(matchParser.ArticleText);
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
            this.enterRule(_localctx, 130, matchParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1376;
                    this.op_document_format();
                    this.state = 1377;
                    this.match(matchParser.COLON);
                    this.state = 1378;
                    this.url();
                    this.state = 1379;
                    this.match(matchParser.CL);
                    this.state = 1384;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.OPATALT) {
                        {
                            this.state = 1380;
                            this.match(matchParser.OPATALT);
                            this.state = 1381;
                            this.words();
                            this.state = 1382;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 132, matchParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1386;
                    this.op_website_format();
                    this.state = 1387;
                    this.match(matchParser.COLON);
                    this.state = 1388;
                    this.url();
                    this.state = 1389;
                    this.match(matchParser.CL);
                    this.state = 1394;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.OPATALT) {
                        {
                            this.state = 1390;
                            this.match(matchParser.OPATALT);
                            this.state = 1391;
                            this.words();
                            this.state = 1392;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 134, matchParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1396;
                    this.op_app_format();
                    this.state = 1397;
                    this.match(matchParser.COLON);
                    this.state = 1400;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case matchParser.URL:
                            {
                                this.state = 1398;
                                this.url();
                            }
                            break;
                        case matchParser.TEL:
                            {
                                this.state = 1399;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1402;
                    this.match(matchParser.CL);
                    this.state = 1407;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.OPATALT) {
                        {
                            this.state = 1403;
                            this.match(matchParser.OPATALT);
                            this.state = 1404;
                            this.words();
                            this.state = 1405;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 136, matchParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1409;
                    this.stillimg_one();
                    this.state = 1413;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1410;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 1415;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 138, matchParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1416;
                    this.op_stillimagefilm_format();
                    this.state = 1417;
                    this.match(matchParser.COLON);
                    this.state = 1421;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === matchParser.S) {
                        {
                            {
                                this.state = 1418;
                                this.match(matchParser.S);
                            }
                        }
                        this.state = 1423;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1424;
                    this.url();
                    this.state = 1425;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 140, matchParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1427;
                    this.video_one();
                    this.state = 1431;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1428;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 1433;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 142, matchParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1434;
                    this.op_video_format();
                    this.state = 1435;
                    this.match(matchParser.COLON);
                    this.state = 1436;
                    this.url();
                    this.state = 1437;
                    this.match(matchParser.CL);
                    this.state = 1442;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 189, this._ctx)) {
                        case 1:
                            {
                                this.state = 1438;
                                this.match(matchParser.OPATALT);
                                this.state = 1439;
                                this.words();
                                this.state = 1440;
                                this.match(matchParser.CL);
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
            this.enterRule(_localctx, 144, matchParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1444;
                    this.image_one();
                    this.state = 1448;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1445;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 1450;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                    }
                    this.state = 1453;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                        case 1:
                            {
                                this.state = 1451;
                                this.match(matchParser.NL);
                                this.state = 1452;
                                this.match(matchParser.ShowInIndex);
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
            this.enterRule(_localctx, 146, matchParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1455;
                    this.op_image_format();
                    this.state = 1456;
                    this.match(matchParser.COLON);
                    this.state = 1460;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === matchParser.S) {
                        {
                            {
                                this.state = 1457;
                                this.match(matchParser.S);
                            }
                        }
                        this.state = 1462;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1463;
                    this.url();
                    this.state = 1464;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 148, matchParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 1480;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1466;
                            this.match(matchParser.OpAmpImage);
                            this.state = 1469;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case matchParser.Image_type:
                                    {
                                        {
                                            this.state = 1467;
                                            this.match(matchParser.Image_type);
                                        }
                                    }
                                    break;
                                case matchParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 1468;
                                            this.match(matchParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case matchParser.COLON:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case matchParser.OpAmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1471;
                            this.match(matchParser.OpAmpImageLink);
                            this.state = 1473;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.Image_type) {
                                {
                                    this.state = 1472;
                                    this.match(matchParser.Image_type);
                                }
                            }
                        }
                        break;
                    case matchParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1475;
                            this.match(matchParser.OpAmpImageZoom);
                            this.state = 1477;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.Image_type) {
                                {
                                    this.state = 1476;
                                    this.match(matchParser.Image_type);
                                }
                            }
                        }
                        break;
                    case matchParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1479;
                            this.match(matchParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 150, matchParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 1499;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1482;
                            this.match(matchParser.AtSrc);
                            this.state = 1483;
                            this.match(matchParser.COLON);
                            this.state = 1484;
                            this.url();
                            this.state = 1485;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.AtWidth:
                    case matchParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1487;
                            _la = this._input.LA(1);
                            if (!(_la === matchParser.AtWidth || _la === matchParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1488;
                            this.match(matchParser.COLON);
                            this.state = 1489;
                            this.match(matchParser.NUMERIC);
                            this.state = 1490;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.OPATALT:
                    case matchParser.OpAtCaption:
                    case matchParser.OpAtLicense:
                    case matchParser.OpAtCopyright:
                    case matchParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1491;
                            _la = this._input.LA(1);
                            if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (matchParser.OPATALT - 71)) | (1 << (matchParser.OpAtCaption - 71)) | (1 << (matchParser.OpAtLicense - 71)) | (1 << (matchParser.OpAtCopyright - 71)) | (1 << (matchParser.OpAtSearch - 71)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1495;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1492;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1497;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
                            }
                            this.state = 1498;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 152, matchParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 1518;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1501;
                            this.match(matchParser.AtSrc);
                            this.state = 1502;
                            this.match(matchParser.COLON);
                            this.state = 1503;
                            this.url();
                            this.state = 1504;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.AtWidth:
                    case matchParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1506;
                            _la = this._input.LA(1);
                            if (!(_la === matchParser.AtWidth || _la === matchParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1507;
                            this.match(matchParser.COLON);
                            this.state = 1508;
                            this.match(matchParser.NUMERIC);
                            this.state = 1509;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.OPATALT:
                    case matchParser.OpAtCaption:
                    case matchParser.OpAtLicense:
                    case matchParser.OpAtCopyright:
                    case matchParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1510;
                            _la = this._input.LA(1);
                            if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (matchParser.OPATALT - 71)) | (1 << (matchParser.OpAtCaption - 71)) | (1 << (matchParser.OpAtLicense - 71)) | (1 << (matchParser.OpAtCopyright - 71)) | (1 << (matchParser.OpAtSearch - 71)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1514;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1511;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1516;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
                            }
                            this.state = 1517;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 154, matchParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1520;
                    this.audio_one();
                    this.state = 1524;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1521;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 1526;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 156, matchParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1527;
                    this.op_audio_format();
                    this.state = 1528;
                    this.match(matchParser.COLON);
                    this.state = 1529;
                    this.url();
                    this.state = 1530;
                    this.match(matchParser.CL);
                    this.state = 1535;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 202, this._ctx)) {
                        case 1:
                            {
                                this.state = 1531;
                                this.match(matchParser.OPATALT);
                                this.state = 1532;
                                this.words();
                                this.state = 1533;
                                this.match(matchParser.CL);
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
            this.enterRule(_localctx, 158, matchParser.RULE_audio_format);
            let _la;
            try {
                this.state = 1547;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1537;
                            this.match(matchParser.AmpAudio);
                            this.state = 1540;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.COLON) {
                                {
                                    this.state = 1538;
                                    this.match(matchParser.COLON);
                                    this.state = 1539;
                                    this.match(matchParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case matchParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1542;
                            this.match(matchParser.AmpAudioLink);
                            this.state = 1545;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.COLON) {
                                {
                                    this.state = 1543;
                                    this.match(matchParser.COLON);
                                    this.state = 1544;
                                    this.match(matchParser.Audio_type);
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
            this.enterRule(_localctx, 160, matchParser.RULE_op_audio_format);
            try {
                this.state = 1559;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1549;
                            this.match(matchParser.OpAmpAudio);
                            this.state = 1552;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1550;
                                        this.match(matchParser.COLON);
                                        this.state = 1551;
                                        this.match(matchParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case matchParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1554;
                            this.match(matchParser.OpAmpAudioLink);
                            this.state = 1557;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1555;
                                        this.match(matchParser.COLON);
                                        this.state = 1556;
                                        this.match(matchParser.Audio_type);
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
            this.enterRule(_localctx, 162, matchParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 1592;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OPA:
                    case matchParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1564;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case matchParser.OPA:
                                    {
                                        this.state = 1561;
                                        this.match(matchParser.OPA);
                                        this.state = 1562;
                                        this.s_and_w();
                                    }
                                    break;
                                case matchParser.AtSrc:
                                    {
                                        this.state = 1563;
                                        this.match(matchParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 1566;
                            this.match(matchParser.COLON);
                            this.state = 1570;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1567;
                                            this.match(matchParser.S);
                                        }
                                    }
                                }
                                this.state = 1572;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                            }
                            this.state = 1575;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1575;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case matchParser.S:
                                                case matchParser.OPS:
                                                case matchParser.CL:
                                                case matchParser.COLON:
                                                case matchParser.AMP:
                                                case matchParser.DBLCOLON:
                                                case matchParser.Greater:
                                                case matchParser.Less:
                                                case matchParser.RightAngle:
                                                case matchParser.RightArrow:
                                                case matchParser.NUMERIC:
                                                case matchParser.STRING:
                                                case matchParser.SENTENCE:
                                                case matchParser.BARSTRING:
                                                case matchParser.LIST_LINE:
                                                    {
                                                        this.state = 1573;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case matchParser.NL:
                                                    {
                                                        this.state = 1574;
                                                        this.match(matchParser.NL);
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
                                this.state = 1577;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 1579;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.AtWidth:
                    case matchParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1580;
                            _la = this._input.LA(1);
                            if (!(_la === matchParser.AtWidth || _la === matchParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1581;
                            this.match(matchParser.COLON);
                            this.state = 1582;
                            this.match(matchParser.NUMERIC);
                            this.state = 1583;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.OPATALT:
                    case matchParser.OpAtCaption:
                    case matchParser.OpAtLicense:
                    case matchParser.OpAtCopyright:
                    case matchParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1584;
                            _la = this._input.LA(1);
                            if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (matchParser.OPATALT - 71)) | (1 << (matchParser.OpAtCaption - 71)) | (1 << (matchParser.OpAtLicense - 71)) | (1 << (matchParser.OpAtCopyright - 71)) | (1 << (matchParser.OpAtSearch - 71)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1588;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1585;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1590;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                            }
                            this.state = 1591;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 164, matchParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1594;
                    this.match(matchParser.TEL);
                    this.state = 1595;
                    this.match(matchParser.PLUS);
                    this.state = 1596;
                    this.match(matchParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 166, matchParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1598;
                    this.match(matchParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 168, matchParser.RULE_item);
            let _la;
            try {
                this.state = 1630;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 221, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1600;
                            this.match(matchParser.OPC);
                            this.state = 1601;
                            this.match(matchParser.CL);
                            this.state = 1609;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1605;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === matchParser.S) {
                                            {
                                                {
                                                    this.state = 1602;
                                                    this.match(matchParser.S);
                                                }
                                            }
                                            this.state = 1607;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1608;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1611;
                            this.match(matchParser.OPC);
                            this.state = 1612;
                            this.s_and_w();
                            this.state = 1617;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0)) {
                                {
                                    this.state = 1615;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case matchParser.COLON:
                                            {
                                                this.state = 1613;
                                                this.match(matchParser.COLON);
                                            }
                                            break;
                                        case matchParser.AMP:
                                        case matchParser.Greater:
                                        case matchParser.Less:
                                        case matchParser.RightAngle:
                                        case matchParser.RightArrow:
                                        case matchParser.SENTENCE:
                                        case matchParser.BARSTRING:
                                            {
                                                this.state = 1614;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 1619;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1620;
                            this.match(matchParser.CL);
                            this.state = 1628;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 220, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1624;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === matchParser.S) {
                                            {
                                                {
                                                    this.state = 1621;
                                                    this.match(matchParser.S);
                                                }
                                            }
                                            this.state = 1626;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1627;
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
            this.enterRule(_localctx, 170, matchParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1632;
                    this.match(matchParser.OPC);
                    this.state = 1633;
                    this.s_and_w();
                    this.state = 1638;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0)) {
                        {
                            this.state = 1636;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case matchParser.COLON:
                                    {
                                        this.state = 1634;
                                        this.match(matchParser.COLON);
                                    }
                                    break;
                                case matchParser.AMP:
                                case matchParser.Greater:
                                case matchParser.Less:
                                case matchParser.RightAngle:
                                case matchParser.RightArrow:
                                case matchParser.SENTENCE:
                                case matchParser.BARSTRING:
                                    {
                                        this.state = 1635;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 1640;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1641;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 172, matchParser.RULE_angleref);
            try {
                this.state = 1653;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1643;
                            this.match(matchParser.OPRANGLES);
                            this.state = 1645;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 224, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1644;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1647;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1648;
                            this.match(matchParser.OPRANGLEL);
                            this.state = 1650;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 225, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1649;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1652;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 174, matchParser.RULE_example);
            let _la;
            try {
                this.state = 1662;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1655;
                            this.match(matchParser.AtExamplecl);
                        }
                        break;
                    case matchParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1656;
                            this.match(matchParser.AtExampleWithStr);
                        }
                        break;
                    case matchParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1657;
                            this.match(matchParser.AtExamplecol);
                            this.state = 1659;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === matchParser.SENTENCE) {
                                {
                                    this.state = 1658;
                                    this.match(matchParser.SENTENCE);
                                }
                            }
                            this.state = 1661;
                            this.match(matchParser.EOF);
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
            this.enterRule(_localctx, 176, matchParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 1703;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 236, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1664;
                            this.match(matchParser.BracEnclose);
                            this.state = 1666;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 229, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1665;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1689;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1668;
                                            this.s_and_w();
                                            this.state = 1678;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 1669;
                                                            this.match(matchParser.NL);
                                                            this.state = 1673;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
                                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                                if (_alt === 1) {
                                                                    {
                                                                        {
                                                                            this.state = 1670;
                                                                            this.match(matchParser.S);
                                                                        }
                                                                    }
                                                                }
                                                                this.state = 1675;
                                                                this._errHandler.sync(this);
                                                                _alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
                                                            }
                                                        }
                                                    }
                                                }
                                                this.state = 1680;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
                                            }
                                            this.state = 1684;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === matchParser.NL) {
                                                {
                                                    {
                                                        this.state = 1681;
                                                        this.match(matchParser.NL);
                                                    }
                                                }
                                                this.state = 1686;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                }
                                this.state = 1691;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
                            }
                            this.state = 1692;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1693;
                            this.match(matchParser.BracEnclose);
                            this.state = 1699;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.NL - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.LIST_LINE) {
                                {
                                    this.state = 1697;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 234, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1694;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1695;
                                                this.match(matchParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1696;
                                                this.match(matchParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1701;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1702;
                            this.match(matchParser.EOF);
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
            this.enterRule(_localctx, 178, matchParser.RULE_reference);
            let _la;
            try {
                let _alt;
                this.state = 1727;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 241, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1705;
                            this.match(matchParser.AtReference);
                            this.state = 1710;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1710;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 237, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1706;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1707;
                                                        this.match(matchParser.COLON);
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 1708;
                                                        this.match(matchParser.URL);
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 1709;
                                                        this.match(matchParser.NL);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1712;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 1714;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1715;
                            this.match(matchParser.AtReference);
                            this.state = 1723;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.NL - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.URL || _la === matchParser.LIST_LINE) {
                                {
                                    this.state = 1721;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 239, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1716;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1717;
                                                this.match(matchParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1718;
                                                this.match(matchParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1719;
                                                this.match(matchParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 1720;
                                                this.match(matchParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1725;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1726;
                            this.match(matchParser.EOF);
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
            this.enterRule(_localctx, 180, matchParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1729;
                    this.match(matchParser.AtProgress);
                    this.state = 1730;
                    this.s_and_w();
                    this.state = 1731;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 182, matchParser.RULE_dateprop);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1733;
                    this.match(matchParser.AtDate);
                    this.state = 1737;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1737;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 242, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1734;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1735;
                                                this.match(matchParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1736;
                                                this.match(matchParser.NL);
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1739;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 1741;
                    this.match(matchParser.CL);
                    this.state = 1743;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === matchParser.AtDate) {
                        {
                            this.state = 1742;
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
            this.enterRule(_localctx, 184, matchParser.RULE_dateprop_chained);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1745;
                    this.match(matchParser.AtDate);
                    this.state = 1749;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1749;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 245, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1746;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1747;
                                                this.match(matchParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1748;
                                                this.match(matchParser.NL);
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1751;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 1753;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 186, matchParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 1801;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 255, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1755;
                            this.match(matchParser.OPB);
                            this.state = 1759;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.NL) {
                                {
                                    {
                                        this.state = 1756;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 1761;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1763;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 248, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1762;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1786;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1765;
                                            this.s_and_w();
                                            this.state = 1775;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 1766;
                                                            this.match(matchParser.NL);
                                                            this.state = 1770;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
                                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                                if (_alt === 1) {
                                                                    {
                                                                        {
                                                                            this.state = 1767;
                                                                            this.match(matchParser.S);
                                                                        }
                                                                    }
                                                                }
                                                                this.state = 1772;
                                                                this._errHandler.sync(this);
                                                                _alt = this.interpreter.adaptivePredict(this._input, 249, this._ctx);
                                                            }
                                                        }
                                                    }
                                                }
                                                this.state = 1777;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 250, this._ctx);
                                            }
                                            this.state = 1781;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === matchParser.NL) {
                                                {
                                                    {
                                                        this.state = 1778;
                                                        this.match(matchParser.NL);
                                                    }
                                                }
                                                this.state = 1783;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                        }
                                    }
                                }
                                this.state = 1788;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
                            }
                            this.state = 1789;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1790;
                            this.match(matchParser.OPB);
                            this.state = 1794;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.NL) {
                                {
                                    {
                                        this.state = 1791;
                                        this.match(matchParser.NL);
                                    }
                                }
                                this.state = 1796;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1798;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.LIST_LINE) {
                                {
                                    this.state = 1797;
                                    this.s_and_w();
                                }
                            }
                            this.state = 1800;
                            this.match(matchParser.EOF);
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
            this.enterRule(_localctx, 188, matchParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1803;
                    this.match(matchParser.OPQ);
                    this.state = 1805;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1804;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === matchParser.CL)) {
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
                        this.state = 1807;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.OPDOT) | (1 << matchParser.S) | (1 << matchParser.OP) | (1 << matchParser.BitMatch) | (1 << matchParser.BitMatchmatrix) | (1 << matchParser.BitMatchall) | (1 << matchParser.BitMatchrev) | (1 << matchParser.BitMatchallrev) | (1 << matchParser.BitMatchpic) | (1 << matchParser.BitMatchaudio) | (1 << matchParser.BitMatchsolgrp) | (1 << matchParser.COMMENT) | (1 << matchParser.Image_type) | (1 << matchParser.Audio_type) | (1 << matchParser.Video_type) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPBUL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPP) | (1 << matchParser.OPM) | (1 << matchParser.OPS) | (1 << matchParser.OPR) | (1 << matchParser.OPC) | (1 << matchParser.OPHASH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.PLUS - 32)) | (1 << (matchParser.DotAt - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.DOT - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.EQ - 32)) | (1 << (matchParser.HSPL - 32)) | (1 << (matchParser.OR - 32)) | (1 << (matchParser.TENSE - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NOTCL - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.NL - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.OPAT - 32)) | (1 << (matchParser.AtProgress - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtWidth - 32)) | (1 << (matchParser.AtHeight - 32)) | (1 << (matchParser.AtProgressPoints - 32)) | (1 << (matchParser.AtShortanswer - 32)) | (1 << (matchParser.AtLonganswer - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtPartialAnswerS - 64)) | (1 << (matchParser.AtPartialAnswer - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.AtPoints - 64)) | (1 << (matchParser.AtSrc - 64)) | (1 << (matchParser.OPATALT - 64)) | (1 << (matchParser.OPAMARK - 64)) | (1 << (matchParser.ShowInIndex - 64)) | (1 << (matchParser.OpAtCaption - 64)) | (1 << (matchParser.OpAtLicense - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAtSearch - 64)) | (1 << (matchParser.OpAtIsTracked - 64)) | (1 << (matchParser.OpAtIsInfoOnly - 64)) | (1 << (matchParser.AtDate - 64)) | (1 << (matchParser.Http - 64)) | (1 << (matchParser.Https - 64)) | (1 << (matchParser.AmpAudio - 64)) | (1 << (matchParser.AmpImage - 64)) | (1 << (matchParser.AmpImageZoom - 64)) | (1 << (matchParser.AmpImageWAudio - 64)) | (1 << (matchParser.AmpVideo - 64)) | (1 << (matchParser.AmpArticle - 64)) | (1 << (matchParser.AmpDocument - 64)) | (1 << (matchParser.AmpApp - 64)) | (1 << (matchParser.AmpWebsite - 64)) | (1 << (matchParser.AmpStillImageFilm - 64)) | (1 << (matchParser.AmpPdf - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpArticleAtt - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.AmpAudioLink - 96)) | (1 << (matchParser.AmpImageLink - 96)) | (1 << (matchParser.AmpVideoLink - 96)) | (1 << (matchParser.AmpArticleLink - 96)) | (1 << (matchParser.AmpDocumentLink - 96)) | (1 << (matchParser.AmpAppLink - 96)) | (1 << (matchParser.AmpWebsiteLink - 96)) | (1 << (matchParser.AmpStillImageFilmLink - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)) | (1 << (matchParser.BitmarkMinus - 96)) | (1 << (matchParser.BitmarkPlus - 96)) | (1 << (matchParser.ColonText - 96)) | (1 << (matchParser.ColonJson - 96)) | (1 << (matchParser.Prosemirror - 96)) | (1 << (matchParser.Placeholder - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (matchParser.BASIC - 128)) | (1 << (matchParser.JPG - 128)) | (1 << (matchParser.PNG - 128)) | (1 << (matchParser.GIF - 128)) | (1 << (matchParser.SVG - 128)) | (1 << (matchParser.MP2 - 128)) | (1 << (matchParser.MP3 - 128)) | (1 << (matchParser.MP4 - 128)) | (1 << (matchParser.FLV - 128)) | (1 << (matchParser.WMV - 128)) | (1 << (matchParser.MPEG - 128)) | (1 << (matchParser.MPG - 128)) | (1 << (matchParser.TEL - 128)) | (1 << (matchParser.DotArticleAtt - 128)) | (1 << (matchParser.STAR - 128)) | (1 << (matchParser.URL - 128)) | (1 << (matchParser.LIST_LINE - 128)) | (1 << (matchParser.ENCLBARS - 128)))) !== 0));
                    this.state = 1809;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 190, matchParser.RULE_title);
            try {
                let _alt;
                this.state = 1823;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 259, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1811;
                            this.match(matchParser.OPHASH);
                            this.state = 1814;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1814;
                                            this._errHandler.sync(this);
                                            switch (this._input.LA(1)) {
                                                case matchParser.S:
                                                case matchParser.OPS:
                                                case matchParser.CL:
                                                case matchParser.COLON:
                                                case matchParser.AMP:
                                                case matchParser.DBLCOLON:
                                                case matchParser.Greater:
                                                case matchParser.Less:
                                                case matchParser.RightAngle:
                                                case matchParser.RightArrow:
                                                case matchParser.NUMERIC:
                                                case matchParser.STRING:
                                                case matchParser.SENTENCE:
                                                case matchParser.BARSTRING:
                                                case matchParser.LIST_LINE:
                                                    {
                                                        this.state = 1812;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case matchParser.NL:
                                                    {
                                                        this.state = 1813;
                                                        this.match(matchParser.NL);
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
                                this.state = 1816;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 258, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 1818;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1819;
                            this.match(matchParser.OPHASH);
                            this.state = 1820;
                            this.s_and_w();
                            this.state = 1821;
                            this.match(matchParser.EOF);
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
            this.enterRule(_localctx, 192, matchParser.RULE_bool_label);
            try {
                this.state = 1833;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1825;
                            this.match(matchParser.AtLabeltrue);
                            this.state = 1826;
                            this.s_and_w();
                            this.state = 1827;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1829;
                            this.match(matchParser.AtLabelfalse);
                            this.state = 1830;
                            this.s_and_w();
                            this.state = 1831;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 194, matchParser.RULE_progress_points);
            try {
                this.state = 1844;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 261, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1835;
                            this.match(matchParser.AtProgressPoints);
                            this.state = 1836;
                            this.match(matchParser.COLON);
                            this.state = 1837;
                            this.match(matchParser.NUMERIC);
                            this.state = 1838;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1839;
                            this.match(matchParser.AtProgressPoints);
                            this.state = 1840;
                            this.match(matchParser.COLON);
                            this.state = 1841;
                            this.s_and_w();
                            this.state = 1842;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 196, matchParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1846;
                    this.match(matchParser.OpAtIsTracked);
                    this.state = 1847;
                    this.s_and_w();
                    this.state = 1848;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 198, matchParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1850;
                    this.match(matchParser.OpAtIsInfoOnly);
                    this.state = 1851;
                    this.s_and_w();
                    this.state = 1852;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 200, matchParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1854;
                    this.atdef_();
                    this.state = 1864;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1858;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === matchParser.NL) {
                                        {
                                            {
                                                this.state = 1855;
                                                this.match(matchParser.NL);
                                            }
                                        }
                                        this.state = 1860;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1861;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 1866;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 202, matchParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 1889;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case matchParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1867;
                            this.match(matchParser.OPA);
                            this.state = 1868;
                            this.s_and_w();
                            this.state = 1869;
                            _la = this._input.LA(1);
                            if (!(_la === matchParser.COLON || _la === matchParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1870;
                            this.s_and_w();
                            this.state = 1876;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        this.state = 1874;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 264, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1871;
                                                    this.match(matchParser.NL);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1872;
                                                    this.match(matchParser.COLON);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1873;
                                                    this.s_and_w();
                                                }
                                                break;
                                        }
                                    }
                                }
                                this.state = 1878;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 265, this._ctx);
                            }
                            this.state = 1879;
                            this.match(matchParser.CL);
                        }
                        break;
                    case matchParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1881;
                            this.match(matchParser.OpAtCopyright);
                            this.state = 1885;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1882;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1887;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
                            }
                            this.state = 1888;
                            this.match(matchParser.CL);
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
            this.enterRule(_localctx, 204, matchParser.RULE_dollarans);
            let _la;
            try {
                let _alt;
                this.state = 1910;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 272, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1891;
                            this.match(matchParser.OPDOLL);
                            this.state = 1895;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 1895;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 268, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 1892;
                                                        this.s_and_w();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1893;
                                                        this.match(matchParser.COLON);
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 1894;
                                                        this.match(matchParser.NL);
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 1897;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 1899;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1900;
                            this.match(matchParser.OPDOLL);
                            this.state = 1906;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.S) | (1 << matchParser.OPS) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.DBLCOLON - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.NL - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)))) !== 0) || _la === matchParser.LIST_LINE) {
                                {
                                    this.state = 1904;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 270, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1901;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1902;
                                                this.match(matchParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1903;
                                                this.match(matchParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1908;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1909;
                            this.match(matchParser.EOF);
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
            this.enterRule(_localctx, 206, matchParser.RULE_anchor);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1912;
                    this.match(matchParser.OPDANGLE);
                    this.state = 1914;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 273, this._ctx)) {
                        case 1:
                            {
                                this.state = 1913;
                                this.s_and_w();
                            }
                            break;
                    }
                    this.state = 1916;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 208, matchParser.RULE_dcolon);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1918;
                    this.match(matchParser.DBLCOLON);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        colcoltext() {
            let _localctx = new ColcoltextContext(this._ctx, this.state);
            this.enterRule(_localctx, 210, matchParser.RULE_colcoltext);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1920;
                    this.dcolon();
                    this.state = 1921;
                    this.match(matchParser.STRING);
                    this.state = 1922;
                    this.dcolon();
                    this.state = 1924;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1923;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === matchParser.DBLCOLON)) {
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
                        this.state = 1926;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matchParser.OPDOT) | (1 << matchParser.S) | (1 << matchParser.OP) | (1 << matchParser.BitMatch) | (1 << matchParser.BitMatchmatrix) | (1 << matchParser.BitMatchall) | (1 << matchParser.BitMatchrev) | (1 << matchParser.BitMatchallrev) | (1 << matchParser.BitMatchpic) | (1 << matchParser.BitMatchaudio) | (1 << matchParser.BitMatchsolgrp) | (1 << matchParser.COMMENT) | (1 << matchParser.Image_type) | (1 << matchParser.Audio_type) | (1 << matchParser.Video_type) | (1 << matchParser.OPDOLL) | (1 << matchParser.OPBUL) | (1 << matchParser.OPRANGLES) | (1 << matchParser.OPRANGLEL) | (1 << matchParser.OPDANGLE) | (1 << matchParser.OPU) | (1 << matchParser.OPB) | (1 << matchParser.OPQ) | (1 << matchParser.OPA) | (1 << matchParser.OPP) | (1 << matchParser.OPM) | (1 << matchParser.OPS) | (1 << matchParser.OPR) | (1 << matchParser.OPC) | (1 << matchParser.OPHASH) | (1 << matchParser.CL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (matchParser.COLON - 32)) | (1 << (matchParser.AMP - 32)) | (1 << (matchParser.PLUS - 32)) | (1 << (matchParser.DotAt - 32)) | (1 << (matchParser.Greater - 32)) | (1 << (matchParser.Less - 32)) | (1 << (matchParser.DOT - 32)) | (1 << (matchParser.RightAngle - 32)) | (1 << (matchParser.RightArrow - 32)) | (1 << (matchParser.EQ - 32)) | (1 << (matchParser.HSPL - 32)) | (1 << (matchParser.OR - 32)) | (1 << (matchParser.TENSE - 32)) | (1 << (matchParser.DCANY - 32)) | (1 << (matchParser.ArticleText - 32)) | (1 << (matchParser.NOTCL - 32)) | (1 << (matchParser.NUMERIC - 32)) | (1 << (matchParser.STRING - 32)) | (1 << (matchParser.NL - 32)) | (1 << (matchParser.SENTENCE - 32)) | (1 << (matchParser.BARSTRING - 32)) | (1 << (matchParser.OPAT - 32)) | (1 << (matchParser.AtProgress - 32)) | (1 << (matchParser.AtReference - 32)) | (1 << (matchParser.AtWidth - 32)) | (1 << (matchParser.AtHeight - 32)) | (1 << (matchParser.AtProgressPoints - 32)) | (1 << (matchParser.AtShortanswer - 32)) | (1 << (matchParser.AtLonganswer - 32)) | (1 << (matchParser.AtExampleWithStr - 32)) | (1 << (matchParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (matchParser.AtExamplecl - 64)) | (1 << (matchParser.AtPartialAnswerS - 64)) | (1 << (matchParser.AtPartialAnswer - 64)) | (1 << (matchParser.AtLabeltrue - 64)) | (1 << (matchParser.AtLabelfalse - 64)) | (1 << (matchParser.AtPoints - 64)) | (1 << (matchParser.AtSrc - 64)) | (1 << (matchParser.OPATALT - 64)) | (1 << (matchParser.OPAMARK - 64)) | (1 << (matchParser.ShowInIndex - 64)) | (1 << (matchParser.OpAtCaption - 64)) | (1 << (matchParser.OpAtLicense - 64)) | (1 << (matchParser.OpAtCopyright - 64)) | (1 << (matchParser.OpAtSearch - 64)) | (1 << (matchParser.OpAtIsTracked - 64)) | (1 << (matchParser.OpAtIsInfoOnly - 64)) | (1 << (matchParser.AtDate - 64)) | (1 << (matchParser.Http - 64)) | (1 << (matchParser.Https - 64)) | (1 << (matchParser.AmpAudio - 64)) | (1 << (matchParser.AmpImage - 64)) | (1 << (matchParser.AmpImageZoom - 64)) | (1 << (matchParser.AmpImageWAudio - 64)) | (1 << (matchParser.AmpVideo - 64)) | (1 << (matchParser.AmpArticle - 64)) | (1 << (matchParser.AmpDocument - 64)) | (1 << (matchParser.AmpApp - 64)) | (1 << (matchParser.AmpWebsite - 64)) | (1 << (matchParser.AmpStillImageFilm - 64)) | (1 << (matchParser.AmpPdf - 64)) | (1 << (matchParser.OpAmpAudio - 64)) | (1 << (matchParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (matchParser.OpAmpImageZoom - 96)) | (1 << (matchParser.OpAmpImageWAudio - 96)) | (1 << (matchParser.OpAmpVideo - 96)) | (1 << (matchParser.OpAmpArticle - 96)) | (1 << (matchParser.OpAmpArticleAtt - 96)) | (1 << (matchParser.OpAmpDocument - 96)) | (1 << (matchParser.OpAmpApp - 96)) | (1 << (matchParser.OpAmpWebsite - 96)) | (1 << (matchParser.OpAmpStillImageFilm - 96)) | (1 << (matchParser.BracEnclose - 96)) | (1 << (matchParser.AmpAudioLink - 96)) | (1 << (matchParser.AmpImageLink - 96)) | (1 << (matchParser.AmpVideoLink - 96)) | (1 << (matchParser.AmpArticleLink - 96)) | (1 << (matchParser.AmpDocumentLink - 96)) | (1 << (matchParser.AmpAppLink - 96)) | (1 << (matchParser.AmpWebsiteLink - 96)) | (1 << (matchParser.AmpStillImageFilmLink - 96)) | (1 << (matchParser.OpAmpAudioLink - 96)) | (1 << (matchParser.OpAmpImageLink - 96)) | (1 << (matchParser.OpAmpVideoLink - 96)) | (1 << (matchParser.OpAmpArticleLink - 96)) | (1 << (matchParser.OpAmpDocumentLink - 96)) | (1 << (matchParser.OpAmpAppLink - 96)) | (1 << (matchParser.OpAmpWebsiteLink - 96)) | (1 << (matchParser.OpAmpStillImageFilmLink - 96)) | (1 << (matchParser.BitmarkMinus - 96)) | (1 << (matchParser.BitmarkPlus - 96)) | (1 << (matchParser.ColonText - 96)) | (1 << (matchParser.ColonJson - 96)) | (1 << (matchParser.Prosemirror - 96)) | (1 << (matchParser.Placeholder - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (matchParser.BASIC - 128)) | (1 << (matchParser.JPG - 128)) | (1 << (matchParser.PNG - 128)) | (1 << (matchParser.GIF - 128)) | (1 << (matchParser.SVG - 128)) | (1 << (matchParser.MP2 - 128)) | (1 << (matchParser.MP3 - 128)) | (1 << (matchParser.MP4 - 128)) | (1 << (matchParser.FLV - 128)) | (1 << (matchParser.WMV - 128)) | (1 << (matchParser.MPEG - 128)) | (1 << (matchParser.MPG - 128)) | (1 << (matchParser.TEL - 128)) | (1 << (matchParser.DotArticleAtt - 128)) | (1 << (matchParser.STAR - 128)) | (1 << (matchParser.URL - 128)) | (1 << (matchParser.LIST_LINE - 128)) | (1 << (matchParser.ENCLBARS - 128)))) !== 0));
                    this.state = 1928;
                    this.dcolon();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 212, matchParser.RULE_lines);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1934;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1930;
                                        this.s_and_w();
                                        this.state = 1932;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 275, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1931;
                                                    this.match(matchParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 1936;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 276, this._ctx);
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
        list_line() {
            let _localctx = new List_lineContext(this._ctx, this.state);
            this.enterRule(_localctx, 214, matchParser.RULE_list_line);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1938;
                    this.match(matchParser.LIST_LINE);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 216, matchParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1987;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 284, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1940;
                            this.match(matchParser.STRING);
                            this.state = 1947;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 278, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1942;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1941;
                                                    this.match(matchParser.S);
                                                }
                                            }
                                            this.state = 1944;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === matchParser.S);
                                        this.state = 1946;
                                        this.match(matchParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1949;
                            this.words();
                            this.state = 1956;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 280, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1951;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1950;
                                                    this.match(matchParser.S);
                                                }
                                            }
                                            this.state = 1953;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === matchParser.S);
                                        this.state = 1955;
                                        this.match(matchParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1958;
                            this.match(matchParser.OPS);
                            this.state = 1959;
                            this.s_and_w();
                            this.state = 1960;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1962;
                            this.match(matchParser.NUMERIC);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1966;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === matchParser.S) {
                                {
                                    {
                                        this.state = 1963;
                                        this.match(matchParser.S);
                                    }
                                }
                                this.state = 1968;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1969;
                            this.match(matchParser.COLON);
                            this.state = 1973;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1970;
                                            this.match(matchParser.S);
                                        }
                                    }
                                }
                                this.state = 1975;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 282, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1976;
                            this.match(matchParser.AMP);
                            this.state = 1980;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1977;
                                            this.match(matchParser.S);
                                        }
                                    }
                                }
                                this.state = 1982;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1983;
                            this.match(matchParser.CL);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1984;
                            this.match(matchParser.DBLCOLON);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1985;
                            this.match(matchParser.LIST_LINE);
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 1986;
                            this.colcoltext();
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
            this.enterRule(_localctx, 218, matchParser.RULE_dclines);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1989;
                    this.match(matchParser.DCANY);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 220, matchParser.RULE_opdoll);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1991;
                    this.match(matchParser.OPDOLL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 222, matchParser.RULE_opu);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1993;
                    this.match(matchParser.OPU);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 224, matchParser.RULE_opb);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1995;
                    this.match(matchParser.OPB);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 226, matchParser.RULE_opq);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1997;
                    this.match(matchParser.OPQ);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 228, matchParser.RULE_opa);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1999;
                    this.match(matchParser.OPA);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 230, matchParser.RULE_opp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2001;
                    this.match(matchParser.OPP);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 232, matchParser.RULE_opm);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2003;
                    this.match(matchParser.OPM);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 234, matchParser.RULE_ops);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2005;
                    this.match(matchParser.OPS);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 236, matchParser.RULE_opr);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2007;
                    this.match(matchParser.OPR);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 238, matchParser.RULE_opc);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2009;
                    this.match(matchParser.OPC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 240, matchParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2011;
                    this.match(matchParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        or_() {
            let _localctx = new Or_Context(this._ctx, this.state);
            this.enterRule(_localctx, 242, matchParser.RULE_or_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2013;
                    this.match(matchParser.OR);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 244, matchParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2024;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 2024;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case matchParser.SENTENCE:
                                            {
                                                this.state = 2015;
                                                this.match(matchParser.SENTENCE);
                                            }
                                            break;
                                        case matchParser.BARSTRING:
                                            {
                                                this.state = 2016;
                                                this.match(matchParser.BARSTRING);
                                            }
                                            break;
                                        case matchParser.AMP:
                                            {
                                                this.state = 2017;
                                                this.match(matchParser.AMP);
                                            }
                                            break;
                                        case matchParser.Greater:
                                            {
                                                this.state = 2018;
                                                this.match(matchParser.Greater);
                                                this.state = 2019;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === matchParser.Greater)) {
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
                                        case matchParser.Less:
                                            {
                                                this.state = 2020;
                                                this.match(matchParser.Less);
                                                this.state = 2021;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === matchParser.Less)) {
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
                                        case matchParser.RightArrow:
                                            {
                                                this.state = 2022;
                                                this.match(matchParser.RightArrow);
                                            }
                                            break;
                                        case matchParser.RightAngle:
                                            {
                                                this.state = 2023;
                                                this.match(matchParser.RightAngle);
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
                        this.state = 2026;
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
        sp() {
            let _localctx = new SpContext(this._ctx, this.state);
            this.enterRule(_localctx, 246, matchParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 2028;
                    this.match(matchParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
            if (!matchParser.__ATN) {
                matchParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(matchParser._serializedATN));
            }
            return matchParser.__ATN;
        }
    }
    matchParser.OPDOT = 1;
    matchParser.S = 2;
    matchParser.OP = 3;
    matchParser.BitMatch = 4;
    matchParser.BitMatchmatrix = 5;
    matchParser.BitMatchall = 6;
    matchParser.BitMatchrev = 7;
    matchParser.BitMatchallrev = 8;
    matchParser.BitMatchpic = 9;
    matchParser.BitMatchaudio = 10;
    matchParser.BitMatchsolgrp = 11;
    matchParser.COMMENT = 12;
    matchParser.Image_type = 13;
    matchParser.Audio_type = 14;
    matchParser.Video_type = 15;
    matchParser.OPDOLL = 16;
    matchParser.OPBUL = 17;
    matchParser.OPRANGLES = 18;
    matchParser.OPRANGLEL = 19;
    matchParser.OPDANGLE = 20;
    matchParser.OPU = 21;
    matchParser.OPB = 22;
    matchParser.OPQ = 23;
    matchParser.OPA = 24;
    matchParser.OPP = 25;
    matchParser.OPM = 26;
    matchParser.OPS = 27;
    matchParser.OPR = 28;
    matchParser.OPC = 29;
    matchParser.OPHASH = 30;
    matchParser.CL = 31;
    matchParser.COLON = 32;
    matchParser.AMP = 33;
    matchParser.DBLCOLON = 34;
    matchParser.PLUS = 35;
    matchParser.DotAt = 36;
    matchParser.Greater = 37;
    matchParser.Less = 38;
    matchParser.DOT = 39;
    matchParser.RightAngle = 40;
    matchParser.RightArrow = 41;
    matchParser.EQ = 42;
    matchParser.HSPL = 43;
    matchParser.OR = 44;
    matchParser.TENSE = 45;
    matchParser.DCANY = 46;
    matchParser.ArticleText = 47;
    matchParser.NOTCL = 48;
    matchParser.NUMERIC = 49;
    matchParser.STRING = 50;
    matchParser.NL = 51;
    matchParser.SENTENCE = 52;
    matchParser.BARSTRING = 53;
    matchParser.OPAT = 54;
    matchParser.AtProgress = 55;
    matchParser.AtReference = 56;
    matchParser.AtWidth = 57;
    matchParser.AtHeight = 58;
    matchParser.AtProgressPoints = 59;
    matchParser.AtShortanswer = 60;
    matchParser.AtLonganswer = 61;
    matchParser.AtExampleWithStr = 62;
    matchParser.AtExamplecol = 63;
    matchParser.AtExamplecl = 64;
    matchParser.AtPartialAnswerS = 65;
    matchParser.AtPartialAnswer = 66;
    matchParser.AtLabeltrue = 67;
    matchParser.AtLabelfalse = 68;
    matchParser.AtPoints = 69;
    matchParser.AtSrc = 70;
    matchParser.OPATALT = 71;
    matchParser.OPAMARK = 72;
    matchParser.ShowInIndex = 73;
    matchParser.OpAtCaption = 74;
    matchParser.OpAtLicense = 75;
    matchParser.OpAtCopyright = 76;
    matchParser.OpAtSearch = 77;
    matchParser.OpAtIsTracked = 78;
    matchParser.OpAtIsInfoOnly = 79;
    matchParser.AtDate = 80;
    matchParser.Http = 81;
    matchParser.Https = 82;
    matchParser.AmpAudio = 83;
    matchParser.AmpImage = 84;
    matchParser.AmpImageZoom = 85;
    matchParser.AmpImageWAudio = 86;
    matchParser.AmpVideo = 87;
    matchParser.AmpArticle = 88;
    matchParser.AmpDocument = 89;
    matchParser.AmpApp = 90;
    matchParser.AmpWebsite = 91;
    matchParser.AmpStillImageFilm = 92;
    matchParser.AmpPdf = 93;
    matchParser.OpAmpAudio = 94;
    matchParser.OpAmpImage = 95;
    matchParser.OpAmpImageZoom = 96;
    matchParser.OpAmpImageWAudio = 97;
    matchParser.OpAmpVideo = 98;
    matchParser.OpAmpArticle = 99;
    matchParser.OpAmpArticleAtt = 100;
    matchParser.OpAmpDocument = 101;
    matchParser.OpAmpApp = 102;
    matchParser.OpAmpWebsite = 103;
    matchParser.OpAmpStillImageFilm = 104;
    matchParser.BracEnclose = 105;
    matchParser.AmpAudioLink = 106;
    matchParser.AmpImageLink = 107;
    matchParser.AmpVideoLink = 108;
    matchParser.AmpArticleLink = 109;
    matchParser.AmpDocumentLink = 110;
    matchParser.AmpAppLink = 111;
    matchParser.AmpWebsiteLink = 112;
    matchParser.AmpStillImageFilmLink = 113;
    matchParser.OpAmpAudioLink = 114;
    matchParser.OpAmpImageLink = 115;
    matchParser.OpAmpVideoLink = 116;
    matchParser.OpAmpArticleLink = 117;
    matchParser.OpAmpDocumentLink = 118;
    matchParser.OpAmpAppLink = 119;
    matchParser.OpAmpWebsiteLink = 120;
    matchParser.OpAmpStillImageFilmLink = 121;
    matchParser.BitmarkMinus = 122;
    matchParser.BitmarkPlus = 123;
    matchParser.ColonText = 124;
    matchParser.ColonJson = 125;
    matchParser.Prosemirror = 126;
    matchParser.Placeholder = 127;
    matchParser.BASIC = 128;
    matchParser.JPG = 129;
    matchParser.PNG = 130;
    matchParser.GIF = 131;
    matchParser.SVG = 132;
    matchParser.MP2 = 133;
    matchParser.MP3 = 134;
    matchParser.MP4 = 135;
    matchParser.FLV = 136;
    matchParser.WMV = 137;
    matchParser.MPEG = 138;
    matchParser.MPG = 139;
    matchParser.TEL = 140;
    matchParser.DotArticleAtt = 141;
    matchParser.STAR = 142;
    matchParser.URL = 143;
    matchParser.LIST_LINE = 144;
    matchParser.ENCLBARS = 145;
    matchParser.RULE_bitmark = 0;
    matchParser.RULE_bitmark_ = 1;
    matchParser.RULE_matches = 2;
    matchParser.RULE_match_ = 3;
    matchParser.RULE_match_matrix = 4;
    matchParser.RULE_match_solution_grouped = 5;
    matchParser.RULE_match_reverse = 6;
    matchParser.RULE_match_all_reverse = 7;
    matchParser.RULE_match_picture = 8;
    matchParser.RULE_match_audio = 9;
    matchParser.RULE_match_all = 10;
    matchParser.RULE_bitElem = 11;
    matchParser.RULE_gap = 12;
    matchParser.RULE_single_gap = 13;
    matchParser.RULE_ml_example = 14;
    matchParser.RULE_longans = 15;
    matchParser.RULE_shortans = 16;
    matchParser.RULE_resource = 17;
    matchParser.RULE_pair_heading = 18;
    matchParser.RULE_pair_heading_multi = 19;
    matchParser.RULE_key_title = 20;
    matchParser.RULE_value_title = 21;
    matchParser.RULE_value_title_multi = 22;
    matchParser.RULE_pairs = 23;
    matchParser.RULE_pqpair = 24;
    matchParser.RULE_pquery = 25;
    matchParser.RULE_pquery__ = 26;
    matchParser.RULE_tense = 27;
    matchParser.RULE_panswer = 28;
    matchParser.RULE_panswer__ = 29;
    matchParser.RULE_pair_images = 30;
    matchParser.RULE_pair_image = 31;
    matchParser.RULE_pair_audios = 32;
    matchParser.RULE_pair_audio = 33;
    matchParser.RULE_pair_multivals = 34;
    matchParser.RULE_pair_multival = 35;
    matchParser.RULE_pairmultival_image = 36;
    matchParser.RULE_pairmultival_audio = 37;
    matchParser.RULE_mpquery = 38;
    matchParser.RULE_mpquery__ = 39;
    matchParser.RULE_mpanswer = 40;
    matchParser.RULE_mpanswer__ = 41;
    matchParser.RULE_pimagebit = 42;
    matchParser.RULE_pimage_one = 43;
    matchParser.RULE_paudiobit = 44;
    matchParser.RULE_bullet_item = 45;
    matchParser.RULE_atpoint = 46;
    matchParser.RULE_format = 47;
    matchParser.RULE_resource_format = 48;
    matchParser.RULE_resource_format_extra = 49;
    matchParser.RULE_format2 = 50;
    matchParser.RULE_image_format = 51;
    matchParser.RULE_video_format = 52;
    matchParser.RULE_article_format = 53;
    matchParser.RULE_document_format = 54;
    matchParser.RULE_app_format = 55;
    matchParser.RULE_website_format = 56;
    matchParser.RULE_stillimagefilm_format = 57;
    matchParser.RULE_op_article_format = 58;
    matchParser.RULE_op_document_format = 59;
    matchParser.RULE_op_app_format = 60;
    matchParser.RULE_op_website_format = 61;
    matchParser.RULE_op_video_format = 62;
    matchParser.RULE_op_stillimagefilm_format = 63;
    matchParser.RULE_articlebit = 64;
    matchParser.RULE_documentbit = 65;
    matchParser.RULE_websitebit = 66;
    matchParser.RULE_appbit = 67;
    matchParser.RULE_stillimagefilmbit = 68;
    matchParser.RULE_stillimg_one = 69;
    matchParser.RULE_videobit = 70;
    matchParser.RULE_video_one = 71;
    matchParser.RULE_imagebit = 72;
    matchParser.RULE_image_one = 73;
    matchParser.RULE_op_image_format = 74;
    matchParser.RULE_image_chained = 75;
    matchParser.RULE_image_chained4match = 76;
    matchParser.RULE_audiobit = 77;
    matchParser.RULE_audio_one = 78;
    matchParser.RULE_audio_format = 79;
    matchParser.RULE_op_audio_format = 80;
    matchParser.RULE_resource_chained = 81;
    matchParser.RULE_telephone = 82;
    matchParser.RULE_url = 83;
    matchParser.RULE_item = 84;
    matchParser.RULE_lead = 85;
    matchParser.RULE_angleref = 86;
    matchParser.RULE_example = 87;
    matchParser.RULE_bracketed_text = 88;
    matchParser.RULE_reference = 89;
    matchParser.RULE_progress = 90;
    matchParser.RULE_dateprop = 91;
    matchParser.RULE_dateprop_chained = 92;
    matchParser.RULE_instruction = 93;
    matchParser.RULE_hint = 94;
    matchParser.RULE_title = 95;
    matchParser.RULE_bool_label = 96;
    matchParser.RULE_progress_points = 97;
    matchParser.RULE_istracked = 98;
    matchParser.RULE_isinfoonly = 99;
    matchParser.RULE_atdef = 100;
    matchParser.RULE_atdef_ = 101;
    matchParser.RULE_dollarans = 102;
    matchParser.RULE_anchor = 103;
    matchParser.RULE_dcolon = 104;
    matchParser.RULE_colcoltext = 105;
    matchParser.RULE_lines = 106;
    matchParser.RULE_list_line = 107;
    matchParser.RULE_s_and_w = 108;
    matchParser.RULE_dclines = 109;
    matchParser.RULE_opdoll = 110;
    matchParser.RULE_opu = 111;
    matchParser.RULE_opb = 112;
    matchParser.RULE_opq = 113;
    matchParser.RULE_opa = 114;
    matchParser.RULE_opp = 115;
    matchParser.RULE_opm = 116;
    matchParser.RULE_ops = 117;
    matchParser.RULE_opr = 118;
    matchParser.RULE_opc = 119;
    matchParser.RULE_clnsp = 120;
    matchParser.RULE_or_ = 121;
    matchParser.RULE_words = 122;
    matchParser.RULE_sp = 123;
    // tslint:disable:no-trailing-whitespace
    matchParser.ruleNames = [
        "bitmark", "bitmark_", "matches", "match_", "match_matrix", "match_solution_grouped",
        "match_reverse", "match_all_reverse", "match_picture", "match_audio",
        "match_all", "bitElem", "gap", "single_gap", "ml_example", "longans",
        "shortans", "resource", "pair_heading", "pair_heading_multi", "key_title",
        "value_title", "value_title_multi", "pairs", "pqpair", "pquery", "pquery__",
        "tense", "panswer", "panswer__", "pair_images", "pair_image", "pair_audios",
        "pair_audio", "pair_multivals", "pair_multival", "pairmultival_image",
        "pairmultival_audio", "mpquery", "mpquery__", "mpanswer", "mpanswer__",
        "pimagebit", "pimage_one", "paudiobit", "bullet_item", "atpoint", "format",
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
        "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon", "colcoltext",
        "lines", "list_line", "s_and_w", "dclines", "opdoll", "opu", "opb", "opq",
        "opa", "opp", "opm", "ops", "opr", "opc", "clnsp", "or_", "words", "sp",
    ];
    matchParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, "'['", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'", "'+'", "'.@'",
        "'>'", "'<'", "'.'", "'\u25BA'", "'\u2192'", "'=='", "'==='", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'[@'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'",
        "'&image-with-audio'", "'&video'", "'&article'", "'&document'", "'&app'",
        "'&website'", "'&still-image-film'", "'&pdf'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'&audio-link'", "'&image-link'", "'&video-link'",
        "'&article-link'", "'&document-link'", "'&app-link'", "'&website-link'",
        "'&still-image-film-link'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "':bitmark--'", "':bitmark++'",
        "':text'", "':json'", "':prosemirror'", "':placeholder'", "':basic'",
        "':jpg'", "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'",
        "':flv'", "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'",
        "'*'",
    ];
    matchParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "OP", "BitMatch", "BitMatchmatrix", "BitMatchall",
        "BitMatchrev", "BitMatchallrev", "BitMatchpic", "BitMatchaudio", "BitMatchsolgrp",
        "COMMENT", "Image_type", "Audio_type", "Video_type", "OPDOLL", "OPBUL",
        "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP",
        "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON",
        "PLUS", "DotAt", "Greater", "Less", "DOT", "RightAngle", "RightArrow",
        "EQ", "HSPL", "OR", "TENSE", "DCANY", "ArticleText", "NOTCL", "NUMERIC",
        "STRING", "NL", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference",
        "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer",
        "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtPartialAnswerS",
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
        "ColonText", "ColonJson", "Prosemirror", "Placeholder", "BASIC", "JPG",
        "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG",
        "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS",
    ];
    matchParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(matchParser._LITERAL_NAMES, matchParser._SYMBOLIC_NAMES, []);
    matchParser._serializedATNSegments = 4;
    matchParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x93\u07F1\x04" +
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
        "{\t{\x04|\t|\x04}\t}\x03\x02\x03\x02\x07\x02\xFD\n\x02\f\x02\x0E\x02\u0100" +
        "\v\x02\x03\x02\x07\x02\u0103\n\x02\f\x02\x0E\x02\u0106\v\x02\x06\x02\u0108" +
        "\n\x02\r\x02\x0E\x02\u0109\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0118\n\x04" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05\u011E\n\x05\r\x05\x0E\x05\u011F" +
        "\x03\x05\x03\x05\x07\x05\u0124\n\x05\f\x05\x0E\x05\u0127\v\x05\x07\x05" +
        "\u0129\n\x05\f\x05\x0E\x05\u012C\v\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x05\x05\u0132\n\x05\x03\x05\x03\x05\x07\x05\u0136\n\x05\f\x05\x0E\x05" +
        "\u0139\v\x05\x03\x05\x03\x05\x07\x05\u013D\n\x05\f\x05\x0E\x05\u0140\v" +
        "\x05\x03\x05\x07\x05\u0143\n\x05\f\x05\x0E\x05\u0146\v\x05\x05\x05\u0148" +
        "\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\u014E\n\x06\r\x06\x0E\x06" +
        "\u014F\x03\x06\x03\x06\x07\x06\u0154\n\x06\f\x06\x0E\x06\u0157\v\x06\x07" +
        "\x06\u0159\n\x06\f\x06\x0E\x06\u015C\v\x06\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x05\x06\u0162\n\x06\x03\x06\x03\x06\x07\x06\u0166\n\x06\f\x06\x0E" +
        "\x06\u0169\v\x06\x03\x06\x03\x06\x07\x06\u016D\n\x06\f\x06\x0E\x06\u0170" +
        "\v\x06\x03\x06\x07\x06\u0173\n\x06\f\x06\x0E\x06\u0176\v\x06\x05\x06\u0178" +
        "\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\u017E\n\x07\r\x07\x0E\x07" +
        "\u017F\x03\x07\x03\x07\x07\x07\u0184\n\x07\f\x07\x0E\x07\u0187\v\x07\x07" +
        "\x07\u0189\n\x07\f\x07\x0E\x07\u018C\v\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x05\x07\u0192\n\x07\x03\x07\x03\x07\x07\x07\u0196\n\x07\f\x07\x0E" +
        "\x07\u0199\v\x07\x03\x07\x03\x07\x07\x07\u019D\n\x07\f\x07\x0E\x07\u01A0" +
        "\v\x07\x03\x07\x07\x07\u01A3\n\x07\f\x07\x0E\x07\u01A6\v\x07\x05\x07\u01A8" +
        "\n\x07\x03\b\x03\b\x03\b\x03\b\x06\b\u01AE\n\b\r\b\x0E\b\u01AF\x03\b\x03" +
        "\b\x07\b\u01B4\n\b\f\b\x0E\b\u01B7\v\b\x07\b\u01B9\n\b\f\b\x0E\b\u01BC" +
        "\v\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01C2\n\b\x03\b\x03\b\x07\b\u01C6\n" +
        "\b\f\b\x0E\b\u01C9\v\b\x03\b\x03\b\x07\b\u01CD\n\b\f\b\x0E\b\u01D0\v\b" +
        "\x03\b\x07\b\u01D3\n\b\f\b\x0E\b\u01D6\v\b\x05\b\u01D8\n\b\x03\t\x03\t" +
        "\x03\t\x03\t\x06\t\u01DE\n\t\r\t\x0E\t\u01DF\x03\t\x03\t\x07\t\u01E4\n" +
        "\t\f\t\x0E\t\u01E7\v\t\x07\t\u01E9\n\t\f\t\x0E\t\u01EC\v\t\x03\t\x03\t" +
        "\x03\t\x03\t\x05\t\u01F2\n\t\x03\t\x03\t\x07\t\u01F6\n\t\f\t\x0E\t\u01F9" +
        "\v\t\x03\t\x03\t\x07\t\u01FD\n\t\f\t\x0E\t\u0200\v\t\x03\t\x07\t\u0203" +
        "\n\t\f\t\x0E\t\u0206\v\t\x05\t\u0208\n\t\x03\n\x03\n\x03\n\x03\n\x06\n" +
        "\u020E\n\n\r\n\x0E\n\u020F\x03\n\x03\n\x07\n\u0214\n\n\f\n\x0E\n\u0217" +
        "\v\n\x07\n\u0219\n\n\f\n\x0E\n\u021C\v\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
        "\u0222\n\n\x03\n\x03\n\x07\n\u0226\n\n\f\n\x0E\n\u0229\v\n\x03\n\x03\n" +
        "\x07\n\u022D\n\n\f\n\x0E\n\u0230\v\n\x03\n\x07\n\u0233\n\n\f\n\x0E\n\u0236" +
        "\v\n\x05\n\u0238\n\n\x03\v\x03\v\x03\v\x03\v\x06\v\u023E\n\v\r\v\x0E\v" +
        "\u023F\x03\v\x03\v\x07\v\u0244\n\v\f\v\x0E\v\u0247\v\v\x07\v\u0249\n\v" +
        "\f\v\x0E\v\u024C\v\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0252\n\v\x03\v\x03" +
        "\v\x07\v\u0256\n\v\f\v\x0E\v\u0259\v\v\x03\v\x03\v\x07\v\u025D\n\v\f\v" +
        "\x0E\v\u0260\v\v\x03\v\x07\v\u0263\n\v\f\v\x0E\v\u0266\v\v\x05\v\u0268" +
        "\n\v\x03\f\x03\f\x03\f\x03\f\x06\f\u026E\n\f\r\f\x0E\f\u026F\x03\f\x03" +
        "\f\x07\f\u0274\n\f\f\f\x0E\f\u0277\v\f\x07\f\u0279\n\f\f\f\x0E\f\u027C" +
        "\v\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0282\n\f\x03\f\x03\f\x07\f\u0286\n" +
        "\f\f\f\x0E\f\u0289\v\f\x03\f\x03\f\x07\f\u028D\n\f\f\f\x0E\f\u0290\v\f" +
        "\x03\f\x07\f\u0293\n\f\f\f\x0E\f\u0296\v\f\x05\f\u0298\n\f\x03\r\x03\r" +
        "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
        "\r\u02B3\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u02BB" +
        "\n\x0E\f\x0E\x0E\x0E\u02BE\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
        "\u02C4\n\x0F\x03\x0F\x07\x0F\u02C7\n\x0F\f\x0F\x0E\x0F\u02CA\v\x0F\x03" +
        "\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u02D0\n\x10\x03\x10\x03\x10\x05\x10" +
        "\u02D4\n\x10\x05\x10\u02D6\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12" +
        "\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u02E2\n\x14\f\x14\x0E" +
        "\x14\u02E5\v\x14\x03\x14\x03\x14\x07\x14\u02E9\n\x14\f\x14\x0E\x14\u02EC" +
        "\v\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u02F3\n\x15\f\x15" +
        "\x0E\x15\u02F6\v\x15\x03\x15\x03\x15\x07\x15\u02FA\n\x15\f\x15\x0E\x15" +
        "\u02FD\v\x15\x03\x15\x06\x15\u0300\n\x15\r\x15\x0E\x15\u0301\x03\x15\x03" +
        "\x15\x03\x16\x03\x16\x07\x16\u0308\n\x16\f\x16\x0E\x16\u030B\v\x16\x03" +
        "\x16\x03\x16\x03\x17\x03\x17\x07\x17\u0311\n\x17\f\x17\x0E\x17\u0314\v" +
        "\x17\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18\u031A\n\x18\f\x18\x0E\x18" +
        "\u031D\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x06\x19\u0324\n\x19" +
        "\r\x19\x0E\x19\u0325\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x07\x1A\u0331\n\x1A\f\x1A\x0E\x1A\u0334\v\x1A\x03" +
        "\x1A\x07\x1A\u0337\n\x1A\f\x1A\x0E\x1A\u033A\v\x1A\x03\x1A\x03\x1A\x07" +
        "\x1A\u033E\n\x1A\f\x1A\x0E\x1A\u0341\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
        "\x1A\x07\x1A\u0347\n\x1A\f\x1A\x0E\x1A\u034A\v\x1A\x03\x1A\x03\x1A\x07" +
        "\x1A\u034E\n\x1A\f\x1A\x0E\x1A\u0351\v\x1A\x03\x1A\x07\x1A\u0354\n\x1A" +
        "\f\x1A\x0E\x1A\u0357\v\x1A\x03\x1A\x03\x1A\x07\x1A\u035B\n\x1A\f\x1A\x0E" +
        "\x1A\u035E\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
        "\u0366\n\x1A\f\x1A\x0E\x1A\u0369\v\x1A\x03\x1A\x03\x1A\x07\x1A\u036D\n" +
        "\x1A\f\x1A\x0E\x1A\u0370\v\x1A\x05\x1A\u0372\n\x1A\x03\x1B\x03\x1B\x07" +
        "\x1B\u0376\n\x1B\f\x1B\x0E\x1B\u0379\v\x1B\x03\x1B\x05\x1B\u037C\n\x1B" +
        "\x03\x1C\x07\x1C\u037F\n\x1C\f\x1C\x0E\x1C\u0382\v\x1C\x03\x1C\x07\x1C" +
        "\u0385\n\x1C\f\x1C\x0E\x1C\u0388\v\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C" +
        "\u038D\n\x1C\r\x1C\x0E\x1C\u038E\x03\x1C\x07\x1C\u0392\n\x1C\f\x1C\x0E" +
        "\x1C\u0395\v\x1C\x03\x1C\x05\x1C\u0398\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05" +
        "\x1C\u039D\n\x1C\x03\x1C\x07\x1C\u03A0\n\x1C\f\x1C\x0E\x1C\u03A3\v\x1C" +
        "\x03\x1C\x05\x1C\u03A6\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
        "\x1E\x05\x1E\u03AE\n\x1E\x03\x1F\x05\x1F\u03B1\n\x1F\x03\x1F\x05\x1F\u03B4" +
        "\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u03BC\n" +
        "\x1F\r\x1F\x0E\x1F\u03BD\x03\x1F\x07\x1F\u03C1\n\x1F\f\x1F\x0E\x1F\u03C4" +
        "\v\x1F\x03\x1F\x05\x1F\u03C7\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u03CC" +
        "\n\x1F\x03\x1F\x03\x1F\x05\x1F\u03D0\n\x1F\x03\x1F\x03\x1F\x03\x1F\x07" +
        "\x1F\u03D5\n\x1F\f\x1F\x0E\x1F\u03D8\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x05\x1F\u03DF\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
        "\x06\x1F\u03E6\n\x1F\r\x1F\x0E\x1F\u03E7\x03\x1F\x03\x1F\x05\x1F\u03EC" +
        "\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u03F1\n\x1F\x05\x1F\u03F3\n\x1F" +
        "\x03 \x03 \x03 \x06 \u03F8\n \r \x0E \u03F9\x03!\x03!\x03!\x03!\x03!\x03" +
        "!\x03!\x07!\u0403\n!\f!\x0E!\u0406\v!\x03!\x03!\x07!\u040A\n!\f!\x0E!" +
        "\u040D\v!\x03\"\x03\"\x03\"\x06\"\u0412\n\"\r\"\x0E\"\u0413\x03#\x03#" +
        "\x03#\x03#\x03#\x03#\x03#\x07#\u041D\n#\f#\x0E#\u0420\v#\x03#\x03#\x07" +
        "#\u0424\n#\f#\x0E#\u0427\v#\x03$\x03$\x03$\x06$\u042C\n$\r$\x0E$\u042D" +
        "\x03%\x03%\x03%\x03%\x03%\x03%\x06%\u0436\n%\r%\x0E%\u0437\x03%\x07%\u043B" +
        "\n%\f%\x0E%\u043E\v%\x03%\x03%\x07%\u0442\n%\f%\x0E%\u0445\v%\x03&\x03" +
        "&\x03&\x03&\x03&\x03&\x07&\u044D\n&\f&\x0E&\u0450\v&\x03\'\x03\'\x03\'" +
        "\x03\'\x03\'\x03\'\x07\'\u0458\n\'\f\'\x0E\'\u045B\v\'\x06\'\u045D\n\'" +
        "\r\'\x0E\'\u045E\x03(\x03(\x03(\x07(\u0464\n(\f(\x0E(\u0467\v(\x03)\x07" +
        ")\u046A\n)\f)\x0E)\u046D\v)\x03)\x03)\x03)\x06)\u0472\n)\r)\x0E)\u0473" +
        "\x03)\x05)\u0477\n)\x03)\x07)\u047A\n)\f)\x0E)\u047D\v)\x03)\x05)\u0480" +
        "\n)\x03*\x03*\x03*\x05*\u0485\n*\x03*\x03*\x03*\x03*\x05*\u048B\n*\x07" +
        "*\u048D\n*\f*\x0E*\u0490\v*\x03+\x05+\u0493\n+\x03+\x05+\u0496\n+\x03" +
        "+\x03+\x03+\x03+\x03+\x03+\x06+\u049E\n+\r+\x0E+\u049F\x03+\x07+\u04A3" +
        "\n+\f+\x0E+\u04A6\v+\x03+\x05+\u04A9\n+\x03+\x05+\u04AC\n+\x03+\x03+\x03" +
        "+\x03+\x03+\x06+\u04B3\n+\r+\x0E+\u04B4\x03+\x03+\x05+\u04B9\n+\x03+\x03" +
        "+\x03+\x05+\u04BE\n+\x03+\x03+\x03+\x05+\u04C3\n+\x03+\x03+\x05+\u04C7" +
        "\n+\x03+\x03+\x03+\x07+\u04CC\n+\f+\x0E+\u04CF\v+\x03+\x03+\x03+\x03+" +
        "\x05+\u04D5\n+\x03,\x03,\x07,\u04D9\n,\f,\x0E,\u04DC\v,\x03,\x03,\x03" +
        ",\x03,\x05,\u04E2\n,\x03,\x03,\x07,\u04E6\n,\f,\x0E,\u04E9\v,\x03,\x05" +
        ",\u04EC\n,\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u04F8" +
        "\n.\x03/\x03/\x03/\x03/\x05/\u04FE\n/\x030\x030\x030\x030\x031\x071\u0505" +
        "\n1\f1\x0E1\u0508\v1\x031\x031\x031\x071\u050D\n1\f1\x0E1\u0510\v1\x03" +
        "2\x032\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u051D\n3\x03" +
        "4\x034\x034\x034\x034\x054\u0524\n4\x035\x035\x035\x055\u0529\n5\x035" +
        "\x035\x055\u052D\n5\x035\x035\x055\u0531\n5\x035\x055\u0534\n5\x036\x03" +
        "6\x036\x056\u0539\n6\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03" +
        ";\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x05@\u0550\n" +
        "@\x03@\x03@\x03@\x05@\u0555\n@\x05@\u0557\n@\x03A\x03A\x03B\x03B\x03B" +
        "\x03B\x03B\x03B\x05B\u0561\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C" +
        "\x05C\u056B\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0575\nD\x03" +
        "E\x03E\x03E\x03E\x05E\u057B\nE\x03E\x03E\x03E\x03E\x03E\x05E\u0582\nE" +
        "\x03F\x03F\x07F\u0586\nF\fF\x0EF\u0589\vF\x03G\x03G\x03G\x07G\u058E\n" +
        "G\fG\x0EG\u0591\vG\x03G\x03G\x03G\x03H\x03H\x07H\u0598\nH\fH\x0EH\u059B" +
        "\vH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u05A5\nI\x03J\x03J\x07" +
        "J\u05A9\nJ\fJ\x0EJ\u05AC\vJ\x03J\x03J\x05J\u05B0\nJ\x03K\x03K\x03K\x07" +
        "K\u05B5\nK\fK\x0EK\u05B8\vK\x03K\x03K\x03K\x03L\x03L\x03L\x05L\u05C0\n" +
        "L\x03L\x03L\x05L\u05C4\nL\x03L\x03L\x05L\u05C8\nL\x03L\x05L\u05CB\nL\x03" +
        "M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u05D8\nM\fM\x0E" +
        "M\u05DB\vM\x03M\x05M\u05DE\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N" +
        "\x03N\x03N\x03N\x07N\u05EB\nN\fN\x0EN\u05EE\vN\x03N\x05N\u05F1\nN\x03" +
        "O\x03O\x07O\u05F5\nO\fO\x0EO\u05F8\vO\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
        "P\x03P\x05P\u0602\nP\x03Q\x03Q\x03Q\x05Q\u0607\nQ\x03Q\x03Q\x03Q\x05Q" +
        "\u060C\nQ\x05Q\u060E\nQ\x03R\x03R\x03R\x05R\u0613\nR\x03R\x03R\x03R\x05" +
        "R\u0618\nR\x05R\u061A\nR\x03S\x03S\x03S\x05S\u061F\nS\x03S\x03S\x07S\u0623" +
        "\nS\fS\x0ES\u0626\vS\x03S\x03S\x06S\u062A\nS\rS\x0ES\u062B\x03S\x03S\x03" +
        "S\x03S\x03S\x03S\x03S\x07S\u0635\nS\fS\x0ES\u0638\vS\x03S\x05S\u063B\n" +
        "S\x03T\x03T\x03T\x03T\x03U\x03U\x03V\x03V\x03V\x07V\u0646\nV\fV\x0EV\u0649" +
        "\vV\x03V\x05V\u064C\nV\x03V\x03V\x03V\x03V\x07V\u0652\nV\fV\x0EV\u0655" +
        "\vV\x03V\x03V\x07V\u0659\nV\fV\x0EV\u065C\vV\x03V\x05V\u065F\nV\x05V\u0661" +
        "\nV\x03W\x03W\x03W\x03W\x07W\u0667\nW\fW\x0EW\u066A\vW\x03W\x03W\x03X" +
        "\x03X\x05X\u0670\nX\x03X\x03X\x03X\x05X\u0675\nX\x03X\x05X\u0678\nX\x03" +
        "Y\x03Y\x03Y\x03Y\x05Y\u067E\nY\x03Y\x05Y\u0681\nY\x03Z\x03Z\x05Z\u0685" +
        "\nZ\x03Z\x03Z\x03Z\x07Z\u068A\nZ\fZ\x0EZ\u068D\vZ\x07Z\u068F\nZ\fZ\x0E" +
        "Z\u0692\vZ\x03Z\x07Z\u0695\nZ\fZ\x0EZ\u0698\vZ\x07Z\u069A\nZ\fZ\x0EZ\u069D" +
        "\vZ\x03Z\x03Z\x03Z\x03Z\x03Z\x07Z\u06A4\nZ\fZ\x0EZ\u06A7\vZ\x03Z\x05Z" +
        "\u06AA\nZ\x03[\x03[\x03[\x03[\x03[\x06[\u06B1\n[\r[\x0E[\u06B2\x03[\x03" +
        "[\x03[\x03[\x03[\x03[\x03[\x07[\u06BC\n[\f[\x0E[\u06BF\v[\x03[\x05[\u06C2" +
        "\n[\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x06]\u06CC\n]\r]\x0E]" +
        "\u06CD\x03]\x03]\x05]\u06D2\n]\x03^\x03^\x03^\x03^\x06^\u06D8\n^\r^\x0E" +
        "^\u06D9\x03^\x03^\x03_\x03_\x07_\u06E0\n_\f_\x0E_\u06E3\v_\x03_\x05_\u06E6" +
        "\n_\x03_\x03_\x03_\x07_\u06EB\n_\f_\x0E_\u06EE\v_\x07_\u06F0\n_\f_\x0E" +
        "_\u06F3\v_\x03_\x07_\u06F6\n_\f_\x0E_\u06F9\v_\x07_\u06FB\n_\f_\x0E_\u06FE" +
        "\v_\x03_\x03_\x03_\x07_\u0703\n_\f_\x0E_\u0706\v_\x03_\x05_\u0709\n_\x03" +
        "_\x05_\u070C\n_\x03`\x03`\x06`\u0710\n`\r`\x0E`\u0711\x03`\x03`\x03a\x03" +
        "a\x03a\x06a\u0719\na\ra\x0Ea\u071A\x03a\x03a\x03a\x03a\x03a\x05a\u0722" +
        "\na\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u072C\nb\x03c\x03c\x03" +
        "c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u0737\nc\x03d\x03d\x03d\x03d\x03" +
        "e\x03e\x03e\x03e\x03f\x03f\x07f\u0743\nf\ff\x0Ef\u0746\vf\x03f\x07f\u0749" +
        "\nf\ff\x0Ef\u074C\vf\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x07g\u0755\ng" +
        "\fg\x0Eg\u0758\vg\x03g\x03g\x03g\x03g\x07g\u075E\ng\fg\x0Eg\u0761\vg\x03" +
        "g\x05g\u0764\ng\x03h\x03h\x03h\x03h\x06h\u076A\nh\rh\x0Eh\u076B\x03h\x03" +
        "h\x03h\x03h\x03h\x07h\u0773\nh\fh\x0Eh\u0776\vh\x03h\x05h\u0779\nh\x03" +
        "i\x03i\x05i\u077D\ni\x03i\x03i\x03j\x03j\x03k\x03k\x03k\x03k\x06k\u0787" +
        "\nk\rk\x0Ek\u0788\x03k\x03k\x03l\x03l\x05l\u078F\nl\x06l\u0791\nl\rl\x0E" +
        "l\u0792\x03m\x03m\x03n\x03n\x06n\u0799\nn\rn\x0En\u079A\x03n\x05n\u079E" +
        "\nn\x03n\x03n\x06n\u07A2\nn\rn\x0En\u07A3\x03n\x05n\u07A7\nn\x03n\x03" +
        "n\x03n\x03n\x03n\x03n\x07n\u07AF\nn\fn\x0En\u07B2\vn\x03n\x03n\x07n\u07B6" +
        "\nn\fn\x0En\u07B9\vn\x03n\x03n\x07n\u07BD\nn\fn\x0En\u07C0\vn\x03n\x03" +
        "n\x03n\x03n\x05n\u07C6\nn\x03o\x03o\x03p\x03p\x03q\x03q\x03r\x03r\x03" +
        "s\x03s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03w\x03x\x03x\x03y\x03y\x03" +
        "z\x03z\x03{\x03{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x06|\u07EB" +
        "\n|\r|\x0E|\u07EC\x03}\x03}\x03}\x07\u04E7\u05D9\u05EC\u0636\u075F\x02" +
        "\x02~\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
        "(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
        "D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
        "`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
        "|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
        "\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
        "\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
        "\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
        "\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
        "\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
        "\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\x02" +
        "\x16\x04\x02..55\x07\x02Z[]^ls|}\x7F\x81\x04\x02YYnn\x04\x02ZZoo\x04\x02" +
        "[[pp\x04\x02\\\\qq\x04\x02]]rr\x04\x02^^ss\x04\x02eeww\x04\x02ggxx\x04" +
        "\x02hhyy\x04\x02iizz\x04\x02jj{{\x03\x02;<\x04\x02IILO\x03\x02!!\x04\x02" +
        "\"\"$$\x03\x02$$\x03\x02\'\'\x03\x02((\x02\u0902\x02\u0107\x03\x02\x02" +
        "\x02\x04\u010D\x03\x02\x02\x02\x06\u0117\x03\x02\x02\x02\b\u0119\x03\x02" +
        "\x02\x02\n\u0149\x03\x02\x02\x02\f\u0179\x03\x02\x02\x02\x0E\u01A9\x03" +
        "\x02\x02\x02\x10\u01D9\x03\x02\x02\x02\x12\u0209\x03\x02\x02\x02\x14\u0239" +
        "\x03\x02\x02\x02\x16\u0269\x03\x02\x02\x02\x18\u02B2\x03\x02\x02\x02\x1A" +
        "\u02B4\x03\x02\x02\x02\x1C\u02BF\x03\x02\x02\x02\x1E\u02CD\x03\x02\x02" +
        "\x02 \u02D9\x03\x02\x02\x02\"\u02DB\x03\x02\x02\x02$\u02DD\x03\x02\x02" +
        "\x02&\u02DF\x03\x02\x02\x02(\u02F0\x03\x02\x02\x02*\u0305\x03\x02\x02" +
        "\x02,\u030E\x03\x02\x02\x02";
    matchParser._serializedATNSegment1 = ".\u0317\x03\x02\x02\x020\u0320\x03\x02\x02\x022\u0371\x03\x02\x02\x02" +
        "4\u037B\x03\x02\x02\x026\u03A5\x03\x02\x02\x028\u03A7\x03\x02\x02\x02" +
        ":\u03A9\x03\x02\x02\x02<\u03F2\x03\x02\x02\x02>\u03F4\x03\x02\x02\x02" +
        "@\u03FB\x03\x02\x02\x02B\u040E\x03\x02\x02\x02D\u0415\x03\x02\x02\x02" +
        "F\u0428\x03\x02\x02\x02H\u042F\x03\x02\x02\x02J\u0446\x03\x02\x02\x02" +
        "L\u045C\x03\x02\x02\x02N\u0460\x03\x02\x02\x02P\u047F\x03\x02\x02\x02" +
        "R\u0481\x03\x02\x02\x02T\u04D4\x03\x02\x02\x02V\u04D6\x03\x02\x02\x02" +
        "X\u04ED\x03\x02\x02\x02Z\u04EF\x03\x02\x02\x02\\\u04F9\x03\x02\x02\x02" +
        "^\u04FF\x03\x02\x02\x02`\u0506\x03\x02\x02\x02b\u0511\x03\x02\x02\x02" +
        "d\u051C\x03\x02\x02\x02f\u0523\x03\x02\x02\x02h\u0533\x03\x02\x02\x02" +
        "j\u0535\x03\x02\x02\x02l\u053A\x03\x02\x02\x02n\u053C\x03\x02\x02\x02" +
        "p\u053E\x03\x02\x02\x02r\u0540\x03\x02\x02\x02t\u0542\x03\x02\x02\x02" +
        "v\u0544\x03\x02\x02\x02x\u0546\x03\x02\x02\x02z\u0548\x03\x02\x02\x02" +
        "|\u054A\x03\x02\x02\x02~\u0556\x03\x02\x02\x02\x80\u0558\x03\x02\x02\x02" +
        "\x82\u0560\x03\x02\x02\x02\x84\u0562\x03\x02\x02\x02\x86\u056C\x03\x02" +
        "\x02\x02\x88\u0576\x03\x02\x02\x02\x8A\u0583\x03\x02\x02\x02\x8C\u058A" +
        "\x03\x02\x02\x02\x8E\u0595\x03\x02\x02\x02\x90\u059C\x03\x02\x02\x02\x92" +
        "\u05A6\x03\x02\x02\x02\x94\u05B1\x03\x02\x02\x02\x96\u05CA\x03\x02\x02" +
        "\x02\x98\u05DD\x03\x02\x02\x02\x9A\u05F0\x03\x02\x02\x02\x9C\u05F2\x03" +
        "\x02\x02\x02\x9E\u05F9\x03\x02\x02\x02\xA0\u060D\x03\x02\x02\x02\xA2\u0619" +
        "\x03\x02\x02\x02\xA4\u063A\x03\x02\x02\x02\xA6\u063C\x03\x02\x02\x02\xA8" +
        "\u0640\x03\x02\x02\x02\xAA\u0660\x03\x02\x02\x02\xAC\u0662\x03\x02\x02" +
        "\x02\xAE\u0677\x03\x02\x02\x02\xB0\u0680\x03\x02\x02\x02\xB2\u06A9\x03" +
        "\x02\x02\x02\xB4\u06C1\x03\x02\x02\x02\xB6\u06C3\x03\x02\x02\x02\xB8\u06C7" +
        "\x03\x02\x02\x02\xBA\u06D3\x03\x02\x02\x02\xBC\u070B\x03\x02\x02\x02\xBE" +
        "\u070D\x03\x02\x02\x02\xC0\u0721\x03\x02\x02\x02\xC2\u072B\x03\x02\x02" +
        "\x02\xC4\u0736\x03\x02\x02\x02\xC6\u0738\x03\x02\x02\x02\xC8\u073C\x03" +
        "\x02\x02\x02\xCA\u0740\x03\x02\x02\x02\xCC\u0763\x03\x02\x02\x02\xCE\u0778" +
        "\x03\x02\x02\x02\xD0\u077A\x03\x02\x02\x02\xD2\u0780\x03\x02\x02\x02\xD4" +
        "\u0782\x03\x02\x02\x02\xD6\u0790\x03\x02\x02\x02\xD8\u0794\x03\x02\x02" +
        "\x02\xDA\u07C5\x03\x02\x02\x02\xDC\u07C7\x03\x02\x02\x02\xDE\u07C9\x03" +
        "\x02\x02\x02\xE0\u07CB\x03\x02\x02\x02\xE2\u07CD\x03\x02\x02\x02\xE4\u07CF" +
        "\x03\x02\x02\x02\xE6\u07D1\x03\x02\x02\x02\xE8\u07D3\x03\x02\x02\x02\xEA" +
        "\u07D5\x03\x02\x02\x02\xEC\u07D7\x03\x02\x02\x02\xEE\u07D9\x03\x02\x02" +
        "\x02\xF0\u07DB\x03\x02\x02\x02\xF2\u07DD\x03\x02\x02\x02\xF4\u07DF\x03" +
        "\x02\x02\x02\xF6\u07EA\x03\x02\x02\x02\xF8\u07EE\x03\x02\x02\x02\xFA\u0104" +
        "\x05\x04\x03\x02\xFB\xFD\x07\x04\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100" +
        "\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101" +
        "\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x075\x02\x02\u0102" +
        "\xFE\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02" +
        "\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104" +
        "\x03\x02\x02\x02\u0107\xFA\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02" +
        "\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03" +
        "\x02\x02\x02\u010B\u010C\x07\x02\x02\x03\u010C\x03\x03\x02\x02\x02\u010D" +
        "\u010E\x05\x06\x04\x02\u010E\x05\x03\x02\x02\x02\u010F\u0118\x05\b\x05" +
        "\x02\u0110\u0118\x05\n\x06\x02\u0111\u0118\x05\x16\f\x02\u0112\u0118\x05" +
        "\x10\t\x02\u0113\u0118\x05\x0E\b\x02\u0114\u0118\x05\x12\n\x02\u0115\u0118" +
        "\x05\x14\v\x02\u0116\u0118\x05\f\x07\x02\u0117\u010F\x03\x02\x02\x02\u0117" +
        "\u0110\x03\x02\x02\x02\u0117\u0111\x03\x02\x02\x02\u0117\u0112\x03\x02" +
        "\x02\x02\u0117\u0113\x03\x02\x02\x02\u0117\u0114\x03\x02\x02\x02\u0117" +
        "\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\x07\x03\x02\x02" +
        "\x02\u0119\u011A\x07\x06\x02\x02\u011A\u011B\x05`1\x02\u011B\u011D\x07" +
        "!\x02\x02\u011C\u011E\x075\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\u011F" +
        "\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02" +
        "\u0120\u012A\x03\x02\x02\x02\u0121\u0125\x05\x18\r\x02\u0122\u0124\x07" +
        "5\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125" +
        "\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0129\x03\x02" +
        "\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u0121\x03\x02\x02\x02\u0129" +
        "\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
        "\x02\x02\u012B\u0131\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
        "\u012E\x07-\x02\x02\u012E\u012F\x075\x02\x02\u012F\u0130\x03\x02\x02\x02" +
        "\u0130\u0132\x05&\x14\x02\u0131\u012D\x03\x02\x02\x02\u0131\u0132\x03" +
        "\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0137\x050\x19\x02\u0134" +
        "\u0136\x075\x02\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0139\x03\x02\x02" +
        "\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0147" +
        "\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u0144\x05$\x13\x02" +
        "\u013B\u013D\x075\x02\x02\u013C\u013B\x03\x02\x02\x02\u013D\u0140\x03" +
        "\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
        "\u0141\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0143\x05$\x13" +
        "\x02\u0142\u013E\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142" +
        "\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02" +
        "\u0146\u0144\x03\x02\x02\x02\u0147\u013A\x03\x02\x02\x02\u0147\u0148\x03" +
        "\x02\x02\x02\u0148\t\x03\x02\x02\x02\u0149\u014A\x07\x07\x02\x02\u014A" +
        "\u014B\x05`1\x02\u014B\u014D\x07!\x02\x02\u014C\u014E\x075\x02\x02\u014D" +
        "\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u014D\x03\x02" +
        "\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u015A\x03\x02\x02\x02\u0151" +
        "\u0155\x05\x18\r\x02\u0152\u0154\x075\x02\x02\u0153\u0152\x03\x02\x02" +
        "\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156" +
        "\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02" +
        "\u0158\u0151\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03" +
        "\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u0161\x03\x02\x02\x02\u015C" +
        "\u015A\x03\x02\x02\x02\u015D\u015E\x07-\x02\x02\u015E\u015F\x075\x02\x02" +
        "\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x05(\x15\x02\u0161\u015D\x03" +
        "\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
        "\u0167\x05F$\x02\u0164\u0166\x075\x02\x02\u0165\u0164\x03\x02\x02\x02" +
        "\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03" +
        "\x02\x02\x02\u0168\u0177\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
        "\u0174\x05$\x13\x02\u016B\u016D\x075\x02\x02\u016C\u016B\x03\x02\x02\x02" +
        "\u016D\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03" +
        "\x02\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171" +
        "\u0173\x05$\x13\x02\u0172\u016E\x03\x02\x02\x02\u0173\u0176\x03\x02\x02" +
        "\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0178" +
        "\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u016A\x03\x02\x02\x02" +
        "\u0177\u0178\x03\x02\x02\x02\u0178\v\x03\x02\x02\x02\u0179\u017A\x07\r" +
        "\x02\x02\u017A\u017B\x05`1\x02\u017B\u017D\x07!\x02\x02\u017C\u017E\x07" +
        "5\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
        "\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u018A\x03\x02" +
        "\x02\x02\u0181\u0185\x05\x18\r\x02\u0182\u0184\x075\x02\x02\u0183\u0182" +
        "\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02" +
        "\u0185\u0186\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0185\x03" +
        "\x02\x02\x02\u0188\u0181\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02\u018A" +
        "\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0191\x03\x02" +
        "\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018E\x07-\x02\x02\u018E\u018F" +
        "\x075\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x05&\x14\x02\u0191" +
        "\u018D\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03\x02" +
        "\x02\x02\u0193\u0197\x050\x19\x02\u0194\u0196\x075\x02\x02\u0195\u0194" +
        "\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02" +
        "\u0197\u0198\x03\x02\x02\x02\u0198\u01A7\x03\x02\x02\x02\u0199\u0197\x03" +
        "\x02\x02\x02\u019A\u01A4\x05$\x13\x02\u019B\u019D\x075\x02\x02\u019C\u019B" +
        "\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02" +
        "\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u019E\x03" +
        "\x02\x02\x02\u01A1\u01A3\x05$\x13\x02\u01A2\u019E\x03\x02\x02\x02\u01A3" +
        "\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02" +
        "\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7" +
        "\u019A\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\r\x03\x02\x02" +
        "\x02\u01A9\u01AA\x07\t\x02\x02\u01AA\u01AB\x05`1\x02\u01AB\u01AD\x07!" +
        "\x02\x02\u01AC\u01AE\x075\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE\u01AF" +
        "\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02" +
        "\u01B0\u01BA\x03\x02\x02\x02\u01B1\u01B5\x05\x18\r\x02\u01B2\u01B4\x07" +
        "5\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5" +
        "\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B9\x03\x02" +
        "\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01B1\x03\x02\x02\x02\u01B9" +
        "\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02" +
        "\x02\x02\u01BB\u01C1\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD" +
        "\u01BE\x07-\x02\x02\u01BE\u01BF\x075\x02\x02\u01BF\u01C0\x03\x02\x02\x02" +
        "\u01C0\u01C2\x05&\x14\x02\u01C1\u01BD\x03\x02\x02\x02\u01C1\u01C2\x03" +
        "\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C7\x050\x19\x02\u01C4" +
        "\u01C6\x075\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02" +
        "\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01D7" +
        "\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01D4\x05$\x13\x02" +
        "\u01CB\u01CD\x075\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01D0\x03" +
        "\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
        "\u01D1\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D3\x05$\x13" +
        "\x02\u01D2\u01CE\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2" +
        "\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02" +
        "\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01CA\x03\x02\x02\x02\u01D7\u01D8\x03" +
        "\x02\x02\x02\u01D8\x0F\x03\x02\x02\x02\u01D9\u01DA\x07\n\x02\x02\u01DA" +
        "\u01DB\x05`1\x02\u01DB\u01DD\x07!\x02\x02\u01DC\u01DE\x075\x02\x02\u01DD" +
        "\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
        "\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01EA\x03\x02\x02\x02\u01E1" +
        "\u01E5\x05\x18\r\x02\u01E2\u01E4\x075\x02\x02\u01E3\u01E2\x03\x02\x02" +
        "\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6" +
        "\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02" +
        "\u01E8\u01E1\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03" +
        "\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01F1\x03\x02\x02\x02\u01EC" +
        "\u01EA\x03\x02\x02\x02\u01ED\u01EE\x07-\x02\x02\u01EE\u01EF\x075\x02\x02" +
        "\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x05&\x14\x02\u01F1\u01ED\x03" +
        "\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3" +
        "\u01F7\x050\x19\x02\u01F4\u01F6\x075\x02\x02\u01F5\u01F4\x03\x02\x02\x02" +
        "\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03" +
        "\x02\x02\x02\u01F8\u0207\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA" +
        "\u0204\x05$\x13\x02\u01FB\u01FD\x075\x02\x02\u01FC\u01FB\x03\x02\x02\x02" +
        "\u01FD\u0200\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03" +
        "\x02\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201" +
        "\u0203\x05$\x13\x02\u0202\u01FE\x03\x02\x02\x02\u0203\u0206\x03\x02\x02" +
        "\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0208" +
        "\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207\u01FA\x03\x02\x02\x02" +
        "\u0207\u0208\x03\x02\x02\x02\u0208\x11\x03\x02\x02\x02\u0209\u020A\x07" +
        "\v\x02\x02\u020A\u020B\x05`1\x02\u020B\u020D\x07!\x02\x02\u020C\u020E" +
        "\x075\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02" +
        "\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u021A\x03" +
        "\x02\x02\x02\u0211\u0215\x05\x18\r\x02\u0212\u0214\x075\x02\x02\u0213" +
        "\u0212\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02" +
        "\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217" +
        "\u0215\x03\x02\x02\x02\u0218\u0211\x03\x02\x02\x02\u0219\u021C\x03\x02" +
        "\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B" +
        "\u0221\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E\x07-\x02" +
        "\x02\u021E\u021F\x075\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0222" +
        "\x05&\x14\x02\u0221\u021D\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02" +
        "\u0222\u0223\x03\x02\x02\x02\u0223\u0227\x05> \x02\u0224\u0226\x075\x02" +
        "\x02\u0225\u0224\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225" +
        "\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0237\x03\x02\x02\x02" +
        "\u0229\u0227\x03\x02\x02\x02\u022A\u0234\x05$\x13\x02\u022B\u022D\x07" +
        "5\x02\x02\u022C\u022B\x03\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E" +
        "\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0231\x03\x02" +
        "\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0233\x05$\x13\x02\u0232\u022E" +
        "\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02" +
        "\u0234\u0235\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234\x03" +
        "\x02\x02\x02\u0237\u022A\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238" +
        "\x13\x03\x02\x02\x02\u0239\u023A\x07\f\x02\x02\u023A\u023B\x05`1\x02\u023B" +
        "\u023D\x07!\x02\x02\u023C\u023E\x075\x02\x02\u023D\u023C\x03\x02\x02\x02" +
        "\u023E\u023F\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03" +
        "\x02\x02\x02\u0240\u024A\x03\x02\x02\x02\u0241\u0245\x05\x18\r\x02\u0242" +
        "\u0244\x075\x02\x02\u0243\u0242\x03\x02\x02\x02\u0244\u0247\x03\x02\x02" +
        "\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0249" +
        "\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u0241\x03\x02\x02\x02" +
        "\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03" +
        "\x02\x02\x02\u024B\u0251\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D" +
        "\u024E\x07-\x02\x02\u024E\u024F\x075\x02\x02\u024F\u0250\x03\x02\x02\x02" +
        "\u0250\u0252\x05&\x14\x02\u0251\u024D\x03\x02\x02\x02\u0251\u0252\x03" +
        "\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0257\x05B\"\x02\u0254" +
        "\u0256\x075\x02\x02\u0255\u0254\x03\x02\x02\x02\u0256\u0259\x03\x02\x02" +
        "\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0267" +
        "\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A\u0264\x05$\x13\x02" +
        "\u025B\u025D\x075\x02\x02\u025C\u025B\x03\x02\x02\x02\u025D\u0260\x03" +
        "\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
        "\u0261\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0263\x05$\x13" +
        "\x02\u0262\u025E\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262" +
        "\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02" +
        "\u0266\u0264\x03\x02\x02\x02\u0267\u025A\x03\x02\x02\x02\u0267\u0268\x03" +
        "\x02\x02\x02\u0268\x15\x03\x02\x02\x02\u0269\u026A\x07\b\x02\x02\u026A" +
        "\u026B\x05`1\x02\u026B\u026D\x07!\x02\x02\u026C\u026E\x075\x02\x02\u026D" +
        "\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u026D\x03\x02" +
        "\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u027A\x03\x02\x02\x02\u0271" +
        "\u0275\x05\x18\r\x02\u0272\u0274\x075\x02\x02\u0273\u0272\x03\x02\x02" +
        "\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276" +
        "\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02" +
        "\u0278\u0271\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03" +
        "\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u0281\x03\x02\x02\x02\u027C" +
        "\u027A\x03\x02\x02\x02\u027D\u027E\x07-\x02\x02\u027E\u027F\x075\x02\x02" +
        "\u027F\u0280\x03\x02\x02\x02\u0280\u0282\x05&\x14\x02\u0281\u027D\x03" +
        "\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
        "\u0287\x050\x19\x02\u0284\u0286\x075\x02\x02\u0285\u0284\x03\x02\x02\x02" +
        "\u0286\u0289\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03" +
        "\x02\x02\x02\u0288\u0297\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u028A" +
        "\u0294\x05$\x13\x02\u028B\u028D\x075\x02\x02\u028C\u028B\x03\x02\x02\x02" +
        "\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03" +
        "\x02\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
        "\u0293\x05$\x13\x02\u0292\u028E\x03\x02\x02\x02\u0293\u0296\x03\x02\x02" +
        "\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0298" +
        "\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297\u028A\x03\x02\x02\x02" +
        "\u0297\u0298\x03\x02\x02\x02\u0298\x17\x03\x02\x02\x02\u0299\u02B3\x05" +
        "\xD8m\x02\u029A\u02B3\x05\xDCo\x02\u029B\u02B3\x05\xD4k\x02\u029C\u02B3" +
        "\x05\x1A\x0E\x02\u029D\u02B3\x05\xCAf\x02\u029E\u02B3\x05\xCEh\x02\u029F" +
        "\u02B3\x05\xB4[\x02\u02A0\u02B3\x05\xAAV\x02\u02A1\u02B3\x05\xBC_\x02" +
        "\u02A2\u02B3\x05\xBE`\x02\u02A3\u02B3\x05\xDAn\x02\u02A4\u02B3\x05\xB0" +
        "Y\x02\u02A5\u02B3\x05\xC2b\x02\u02A6\u02B3\x05\x92J\x02\u02A7\u02B3\x05" +
        "\x9CO\x02\u02A8\u02B3\x05\x8EH\x02\u02A9\u02B3\x05\x82B\x02\u02AA\u02B3" +
        "\x05\x84C\x02\u02AB\u02B3\x05\x88E\x02\u02AC\u02B3\x05\x86D\x02\u02AD" +
        "\u02B3\x05\x8AF\x02\u02AE\u02B3\x05\xAEX\x02\u02AF\u02B3\x05\xD0i\x02" +
        "\u02B0\u02B3\x05\xB2Z\x02\u02B1\u02B3\x05\xF8}\x02\u02B2\u0299\x03\x02" +
        "\x02\x02\u02B2\u029A\x03\x02\x02\x02\u02B2\u029B\x03\x02\x02\x02\u02B2" +
        "\u029C\x03\x02\x02\x02\u02B2\u029D\x03\x02\x02\x02\u02B2\u029E\x03\x02" +
        "\x02\x02\u02B2\u029F\x03\x02\x02\x02\u02B2\u02A0\x03\x02\x02\x02\u02B2" +
        "\u02A1\x03\x02\x02\x02\u02B2\u02A2\x03\x02\x02\x02\u02B2\u02A3\x03\x02" +
        "\x02\x02\u02B2\u02A4\x03\x02\x02\x02\u02B2\u02A5\x03\x02\x02\x02\u02B2" +
        "\u02A6\x03\x02\x02\x02\u02B2\u02A7\x03\x02\x02\x02\u02B2\u02A8\x03\x02" +
        "\x02\x02\u02B2\u02A9\x03\x02\x02\x02\u02B2\u02AA\x03\x02\x02\x02\u02B2" +
        "\u02AB\x03\x02\x02\x02\u02B2\u02AC\x03\x02\x02\x02\u02B2\u02AD\x03\x02" +
        "\x02\x02\u02B2\u02AE\x03\x02\x02\x02\u02B2\u02AF\x03\x02\x02\x02\u02B2" +
        "\u02B0\x03\x02\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\x19\x03\x02\x02" +
        "\x02\u02B4\u02BC\x05\x1C\x0F\x02\u02B5\u02BB\x05\x1C\x0F\x02\u02B6\u02BB" +
        "\x05\xBC_\x02\u02B7\u02BB\x05\xBE`\x02\u02B8\u02BB\x05\xAAV\x02\u02B9" +
        "\u02BB\x05\xB0Y\x02\u02BA\u02B5\x03\x02\x02\x02\u02BA\u02B6\x03\x02\x02" +
        "\x02\u02BA\u02B7\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02B9" +
        "\x03\x02\x02\x02\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02" +
        "\u02BC\u02BD\x03\x02\x02\x02\u02BD\x1B\x03\x02\x02\x02\u02BE\u02BC\x03" +
        "\x02\x02\x02\u02BF\u02C3\x07\x17\x02\x02\u02C0\u02C4\x073\x02\x02\u02C1" +
        "\u02C4\x074\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C0\x03\x02\x02" +
        "\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C2\x03\x02\x02\x02\u02C4\u02C8" +
        "\x03\x02\x02\x02\u02C5\u02C7\x05\xDAn\x02\u02C6\u02C5\x03\x02\x02\x02" +
        "\u02C7\u02CA\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8\u02C9\x03" +
        "\x02\x02\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB" +
        "\u02CC\x05\xF2z\x02\u02CC\x1D\x03\x02\x02\x02\u02CD\u02D5\x07A\x02\x02" +
        "\u02CE\u02D0\x075\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0\x03" +
        "\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D3\x05\xD6l\x02\u02D2" +
        "\u02D4\x075\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02" +
        "\x02\u02D4\u02D6\x03\x02\x02\x02\u02D5\u02CF\x03\x02\x02\x02\u02D5\u02D6" +
        "\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x07!\x02\x02" +
        "\u02D8\x1F\x03\x02\x02\x02\u02D9\u02DA\x07?\x02\x02\u02DA!\x03\x02\x02" +
        "\x02\u02DB\u02DC\x07>\x02\x02\u02DC#\x03\x02\x02\x02\u02DD\u02DE\x05\x18" +
        "\r\x02\u02DE%\x03\x02\x02\x02\u02DF\u02E3\x05*\x16\x02\u02E0\u02E2\x07" +
        "5\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3" +
        "\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02" +
        "\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02EA\x07,\x02\x02\u02E7\u02E9" +
        "\x075\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02\x02" +
        "\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02ED\x03" +
        "\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02EE\x05,\x17\x02\u02EE" +
        "\u02EF\x075\x02\x02\u02EF\'\x03\x02\x02\x02\u02F0\u02FF\x05*\x16\x02\u02F1" +
        "\u02F3\x075\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F3\u02F6\x03\x02\x02" +
        "\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F7" +
        "\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02FB\x07,\x02\x02" +
        "\u02F8\u02FA\x075\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02FA\u02FD\x03" +
        "\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC" +
        "\u02FE\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE\u0300\x05.\x18" +
        "\x02\u02FF\u02F4\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u02FF" +
        "\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02" +
        "\u0303\u0304\x075\x02\x02\u0304)\x03\x02\x02\x02\u0305\u0309\x07 \x02" +
        "\x02\u0306\u0308\x05\xDAn\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B" +
        "\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02" +
        "\u030A\u030C\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030D\x07" +
        "!\x02\x02\u030D+\x03\x02\x02\x02\u030E\u0312\x07 \x02\x02\u030F\u0311" +
        "\x05\xDAn\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02" +
        "\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315\x03" +
        "\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0316\x07!\x02\x02\u0316" +
        "-\x03\x02\x02\x02\u0317\u031B\x07 \x02\x02\u0318\u031A\x05\xDAn\x02\u0319" +
        "\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02" +
        "\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D" +
        "\u031B\x03\x02\x02\x02\u031E\u031F\x07!\x02\x02\u031F/\x03\x02\x02\x02" +
        "\u0320\u0321\x07-\x02\x02\u0321\u0323\x075\x02\x02\u0322\u0324\x052\x1A" +
        "\x02\u0323\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0323" +
        "\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u03261\x03\x02\x02\x02\u0327" +
        "\u0328\x054\x1B\x02\u0328\u0329\x075\x02\x02\u0329\u032A\x07,\x02\x02" +
        "\u032A\u032B\x075\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0332\x05" +
        ":\x1E\x02\u032D\u032E\x05\xF4{\x02\u032E\u032F\x05:\x1E\x02\u032F\u0331" +
        "\x03\x02\x02\x02\u0330\u032D\x03\x02\x02\x02\u0331\u0334\x03\x02\x02\x02" +
        "\u0332\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0338\x03" +
        "\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u0337\x075\x02\x02\u0336" +
        "\u0335\x03\x02\x02\x02\u0337\u033A\x03\x02\x02\x02\u0338\u0336\x03\x02" +
        "\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A" +
        "\u0338\x03\x02\x02\x02\u033B\u033F\x07-\x02\x02\u033C\u033E\x075\x02\x02" +
        "\u033D\u033C\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F\u033D\x03" +
        "\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0372\x03\x02\x02\x02\u0341" +
        "\u033F\x03\x02\x02\x02\u0342\u0343\x054\x1B\x02\u0343\u0344\x075\x02\x02" +
        "\u0344\u0348\x07,\x02\x02\u0345\u0347\x075\x02\x02\u0346\u0345\x03\x02" +
        "\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0348" +
        "\u0349\x03\x02\x02\x02\u0349\u034B\x03\x02\x02\x02\u034A\u0348\x03\x02" +
        "\x02\x02\u034B\u034F\x07-\x02\x02\u034C\u034E\x075\x02\x02\u034D\u034C" +
        "\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02" +
        "\u034F\u0350\x03\x02\x02\x02\u0350\u0372\x03\x02\x02\x02\u0351\u034F\x03" +
        "\x02\x02\x02\u0352\u0354\x075\x02\x02\u0353\u0352\x03\x02\x02\x02\u0354" +
        "\u0357\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0356\x03\x02" +
        "\x02\x02\u0356\u0358\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0358" +
        "\u035C\x07,\x02\x02\u0359\u035B";
    matchParser._serializedATNSegment2 = "\x075\x02\x02\u035A\u0359\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02" +
        "\u035C\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F\x03" +
        "\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035F\u0360\x075\x02\x02\u0360" +
        "\u0361\x07,\x02\x02\u0361\u0362\x075\x02\x02\u0362\u0363\x03\x02\x02\x02" +
        "\u0363\u0367\x05:\x1E\x02\u0364\u0366\x075\x02\x02\u0365\u0364\x03\x02" +
        "\x02\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367" +
        "\u0368\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369\u0367\x03\x02" +
        "\x02\x02\u036A\u036E\x07-\x02\x02\u036B\u036D\x075\x02\x02\u036C\u036B" +
        "\x03\x02\x02\x02\u036D\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02" +
        "\u036E\u036F\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03" +
        "\x02\x02\x02\u0371\u0327\x03\x02\x02\x02\u0371\u0342\x03\x02\x02\x02\u0371" +
        "\u0355\x03\x02\x02\x02\u03723\x03\x02\x02\x02\u0373\u0377\x056\x1C\x02" +
        "\u0374\u0376\x056\x1C\x02\u0375\u0374\x03\x02\x02\x02\u0376\u0379\x03" +
        "\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378" +
        "\u037C\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A\u037C\x03\x02" +
        "\x02\x02\u037B\u0373\x03\x02\x02\x02\u037B\u037A\x03\x02\x02\x02\u037C" +
        "5\x03\x02\x02\x02\u037D\u037F\x075\x02\x02\u037E\u037D\x03\x02\x02\x02" +
        "\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03" +
        "\x02\x02\x02\u0381\u0386\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383" +
        "\u0385\x07\x04\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385\u0388\x03\x02" +
        "\x02\x02\u0386\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387" +
        "\u038C\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0389\u038D\x05\xAA" +
        "V\x02\u038A\u038D\x05\xDAn\x02\u038B\u038D\x07\"\x02\x02\u038C\u0389\x03" +
        "\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038B\x03\x02\x02\x02\u038D" +
        "\u038E\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038E\u038F\x03\x02" +
        "\x02\x02\u038F\u0397\x03\x02\x02\x02\u0390\u0392\x07\x04\x02\x02\u0391" +
        "\u0390\x03\x02\x02\x02\u0392\u0395\x03\x02\x02\x02\u0393\u0391\x03\x02" +
        "\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x03\x02\x02\x02\u0395" +
        "\u0393\x03\x02\x02\x02\u0396\u0398\x05\xB0Y\x02\u0397\u0393\x03\x02\x02" +
        "\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039C\x03\x02\x02\x02\u0399\u039D" +
        "\x05 \x11\x02\u039A\u039D\x05\"\x12\x02\u039B\u039D\x058\x1D\x02\u039C" +
        "\u0399\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039C\u039B\x03\x02" +
        "\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u03A6\x03\x02\x02\x02\u039E" +
        "\u03A0\x075\x02\x02\u039F\u039E\x03\x02\x02\x02\u03A0\u03A3\x03\x02\x02" +
        "\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A4" +
        "\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u03A6\x05\xBC_\x02" +
        "\u03A5\u0380\x03\x02\x02\x02\u03A5\u03A1\x03\x02\x02\x02\u03A67\x03\x02" +
        "\x02\x02\u03A7\u03A8\x07/\x02\x02\u03A89\x03\x02\x02\x02\u03A9\u03AD\x05" +
        "<\x1F\x02\u03AA\u03AE\x05 \x11\x02\u03AB\u03AE\x05\"\x12\x02\u03AC\u03AE" +
        "\x05\xB0Y\x02\u03AD\u03AA\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02" +
        "\u03AD\u03AC\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE;\x03\x02" +
        "\x02\x02\u03AF\u03B1\x05\xB0Y\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1" +
        "\x03\x02\x02\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03B4\x05\xAAV\x02" +
        "\u03B3\u03B2\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03BB\x03" +
        "\x02\x02\x02\u03B5\u03BC\x05\xDAn\x02\u03B6\u03BC\x075\x02\x02\u03B7\u03BC" +
        "\x07\x04\x02\x02\u03B8\u03BC\x07\x05\x02\x02\u03B9\u03BC\x07!\x02\x02" +
        "\u03BA\u03BC\x07$\x02\x02\u03BB\u03B5\x03\x02\x02\x02\u03BB\u03B6\x03" +
        "\x02\x02\x02\u03BB\u03B7\x03\x02\x02\x02\u03BB\u03B8\x03\x02\x02\x02\u03BB" +
        "\u03B9\x03\x02\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BD\x03\x02" +
        "\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
        "\u03C6\x03\x02\x02\x02\u03BF\u03C1\x07\x04\x02\x02\u03C0\u03BF\x03\x02" +
        "\x02\x02\u03C1\u03C4\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2" +
        "\u03C3\x03\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03C2\x03\x02" +
        "\x02\x02\u03C5\u03C7\x05\xB0Y\x02\u03C6\u03C2\x03\x02\x02\x02\u03C6\u03C7" +
        "\x03\x02\x02\x02\u03C7\u03F3\x03\x02\x02\x02\u03C8\u03F3\x03\x02\x02\x02" +
        "\u03C9\u03CB\x05\xB0Y\x02\u03CA\u03CC\x05\xDAn\x02\u03CB\u03CA\x03\x02" +
        "\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03F3\x03\x02\x02\x02\u03CD" +
        "\u03CF\x05\xDAn\x02\u03CE\u03D0\x075\x02\x02\u03CF\u03CE\x03\x02\x02\x02" +
        "\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D6\x03\x02\x02\x02\u03D1\u03D5\x05" +
        "\xB0Y\x02\u03D2\u03D5\x05\xBE`\x02\u03D3\u03D5\x05\xBC_\x02\u03D4\u03D1" +
        "\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D3\x03\x02\x02\x02" +
        "\u03D5\u03D8\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03" +
        "\x02\x02\x02\u03D7\u03F3\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9" +
        "\u03DA\x05\xDAn\x02\u03DA\u03DB\x075\x02\x02\u03DB\u03DC\x05\xBC_\x02" +
        "\u03DC\u03F3\x03\x02\x02\x02\u03DD\u03DF\x05\xBC_\x02\u03DE\u03DD\x03" +
        "\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0" +
        "\u03E5\x05\xDEp\x02\u03E1\u03E6\x05\xDAn\x02\u03E2\u03E6\x075\x02\x02" +
        "\u03E3\u03E6\x07)\x02\x02\u03E4\u03E6\x07\"\x02\x02\u03E5\u03E1\x03\x02" +
        "\x02\x02\u03E5\u03E2\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5" +
        "\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E5\x03\x02" +
        "\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9" +
        "\u03EB\x07!\x02\x02\u03EA\u03EC\x05\xB0Y\x02\u03EB\u03EA\x03\x02\x02\x02" +
        "\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03F3\x03\x02\x02\x02\u03ED\u03EE\x05" +
        "\xBC_\x02\u03EE\u03F0\x05\xDAn\x02\u03EF\u03F1\x05\xB0Y\x02\u03F0\u03EF" +
        "\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x03\x02\x02\x02" +
        "\u03F2\u03B0\x03\x02\x02\x02\u03F2\u03C8\x03\x02\x02\x02\u03F2\u03C9\x03" +
        "\x02\x02\x02\u03F2\u03CD\x03\x02\x02\x02\u03F2\u03D9\x03\x02\x02\x02\u03F2" +
        "\u03DE\x03\x02\x02\x02\u03F2\u03ED\x03\x02\x02\x02\u03F3=\x03\x02\x02" +
        "\x02\u03F4\u03F5\x07-\x02\x02\u03F5\u03F7\x075\x02\x02\u03F6\u03F8\x05" +
        "@!\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03F7" +
        "\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA?\x03\x02\x02\x02\u03FB" +
        "\u03FC\x05V,\x02\u03FC\u03FD\x075\x02\x02\u03FD\u03FE\x07,\x02\x02\u03FE" +
        "\u03FF\x075\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0404\x05:\x1E\x02" +
        "\u0401\u0403\x075\x02\x02\u0402\u0401\x03\x02\x02\x02\u0403\u0406\x03" +
        "\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405" +
        "\u0407\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0407\u040B\x07-\x02" +
        "\x02\u0408\u040A\x075\x02\x02\u0409\u0408\x03\x02\x02\x02\u040A\u040D" +
        "\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02" +
        "\u040CA\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E\u040F\x07-\x02" +
        "\x02\u040F\u0411\x075\x02\x02\u0410\u0412\x05D#\x02\u0411\u0410\x03\x02" +
        "\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413" +
        "\u0414\x03\x02\x02\x02\u0414C\x03\x02\x02\x02\u0415\u0416\x05Z.\x02\u0416" +
        "\u0417\x075\x02\x02\u0417\u0418\x07,\x02\x02\u0418\u0419\x075\x02\x02" +
        "\u0419\u041A\x03\x02\x02\x02\u041A\u041E\x05:\x1E\x02\u041B\u041D\x07" +
        "5\x02\x02\u041C\u041B\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E" +
        "\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0421\x03\x02" +
        "\x02\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0425\x07-\x02\x02\u0422\u0424" +
        "\x075\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02" +
        "\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426E\x03\x02" +
        "\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428\u0429\x07-\x02\x02\u0429\u042B" +
        "\x075\x02\x02\u042A\u042C\x05H%\x02\u042B\u042A\x03\x02\x02\x02\u042C" +
        "\u042D\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042E\x03\x02" +
        "\x02\x02\u042EG\x03\x02\x02\x02\u042F\u0435\x05N(\x02\u0430\u0431\x07" +
        "5\x02\x02\u0431\u0432\x07,\x02\x02\u0432\u0433\x075\x02\x02\u0433\u0434" +
        "\x03\x02\x02\x02\u0434\u0436\x05R*\x02\u0435\u0430\x03\x02\x02\x02\u0436" +
        "\u0437\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02" +
        "\x02\x02\u0438\u043C\x03\x02\x02\x02\u0439\u043B\x075\x02\x02\u043A\u0439" +
        "\x03\x02\x02\x02\u043B\u043E\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02" +
        "\u043C\u043D\x03\x02\x02\x02\u043D\u043F\x03\x02\x02\x02\u043E\u043C\x03" +
        "\x02\x02\x02\u043F\u0443\x07-\x02\x02\u0440\u0442\x075\x02\x02\u0441\u0440" +
        "\x03\x02\x02\x02\u0442\u0445\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02" +
        "\u0443\u0444\x03\x02\x02\x02\u0444I\x03\x02\x02\x02\u0445\u0443\x03\x02" +
        "\x02\x02\u0446\u0447\x07-\x02\x02\u0447\u0448\x05\x92J\x02\u0448\u0449" +
        "\x07,\x02\x02\u0449\u044E\x05R*\x02\u044A\u044B\x07,\x02\x02\u044B\u044D" +
        "\x05R*\x02\u044C\u044A\x03\x02\x02\x02\u044D\u0450\x03\x02\x02\x02\u044E" +
        "\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044FK\x03\x02\x02" +
        "\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0452\x07-\x02\x02\u0452\u0453" +
        "\x05\x9CO\x02\u0453\u0454\x07,\x02\x02\u0454\u0459\x05R*\x02\u0455\u0456" +
        "\x07,\x02\x02\u0456\u0458\x05R*\x02\u0457\u0455\x03\x02\x02\x02\u0458" +
        "\u045B\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02" +
        "\x02\x02\u045A\u045D\x03\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045C" +
        "\u0451\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u045C\x03\x02" +
        "\x02\x02\u045E\u045F\x03\x02\x02\x02\u045FM\x03\x02\x02\x02\u0460\u0465" +
        "\x05P)\x02\u0461\u0462\x075\x02\x02\u0462\u0464\x05P)\x02\u0463\u0461" +
        "\x03\x02\x02\x02\u0464\u0467\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02" +
        "\u0465\u0466\x03\x02\x02\x02\u0466O\x03\x02\x02\x02\u0467\u0465\x03\x02" +
        "\x02\x02\u0468\u046A\x075\x02\x02\u0469\u0468\x03\x02\x02\x02\u046A\u046D" +
        "\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02" +
        "\u046C\u0471\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046E\u0472\x05" +
        "\xAAV\x02\u046F\u0472\x05\xDAn\x02\u0470\u0472\x07\"\x02\x02\u0471\u046E" +
        "\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0471\u0470\x03\x02\x02\x02" +
        "\u0472\u0473\x03\x02\x02\x02\u0473\u0471\x03\x02\x02\x02\u0473\u0474\x03" +
        "\x02\x02\x02\u0474\u0476\x03\x02\x02\x02\u0475\u0477\x05\xB0Y\x02\u0476" +
        "\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0480\x03\x02" +
        "\x02\x02\u0478\u047A\x075\x02\x02\u0479\u0478\x03\x02\x02\x02\u047A\u047D" +
        "\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02" +
        "\u047C\u047E\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047E\u0480\x07" +
        "\x92\x02\x02\u047F\u046B\x03\x02\x02\x02\u047F\u047B\x03\x02\x02\x02\u0480" +
        "Q\x03\x02\x02\x02\u0481\u0484\x05T+\x02\u0482\u0485\x05 \x11\x02\u0483" +
        "\u0485\x05\"\x12\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0483\x03\x02\x02" +
        "\x02\u0484\u0485\x03\x02\x02\x02\u0485\u048E\x03\x02\x02\x02\u0486\u0487" +
        "\t\x02\x02\x02\u0487\u048A\x05T+\x02\u0488\u048B\x05 \x11\x02\u0489\u048B" +
        "\x05\"\x12\x02\u048A\u0488\x03\x02\x02\x02\u048A\u0489\x03\x02\x02\x02" +
        "\u048A\u048B\x03\x02\x02\x02\u048B\u048D\x03\x02\x02\x02\u048C\u0486\x03" +
        "\x02\x02\x02\u048D\u0490\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048E" +
        "\u048F\x03\x02\x02\x02\u048FS\x03\x02\x02\x02\u0490\u048E\x03\x02\x02" +
        "\x02\u0491\u0493\x05\xB0Y\x02\u0492\u0491\x03\x02\x02\x02\u0492\u0493" +
        "\x03\x02\x02\x02\u0493\u0495\x03\x02\x02\x02\u0494\u0496\x05\xAAV\x02" +
        "\u0495\u0494\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u049D\x03" +
        "\x02\x02\x02\u0497\u049E\x05\xDAn\x02\u0498\u049E\x075\x02\x02\u0499\u049E" +
        "\x07\x04\x02\x02\u049A\u049E\x07\x05\x02\x02\u049B\u049E\x07!\x02\x02" +
        "\u049C\u049E\x07$\x02\x02\u049D\u0497\x03\x02\x02\x02\u049D\u0498\x03" +
        "\x02\x02\x02\u049D\u0499\x03\x02\x02\x02\u049D\u049A\x03\x02\x02\x02\u049D" +
        "\u049B\x03\x02\x02\x02\u049D\u049C\x03\x02\x02\x02\u049E\u049F\x03\x02" +
        "\x02\x02\u049F\u049D\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0" +
        "\u04A8\x03\x02\x02\x02\u04A1\u04A3\x07\x04\x02\x02\u04A2\u04A1\x03\x02" +
        "\x02\x02\u04A3\u04A6\x03\x02\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4" +
        "\u04A5\x03\x02\x02\x02\u04A5\u04A7\x03\x02\x02\x02\u04A6\u04A4\x03\x02" +
        "\x02\x02\u04A7\u04A9\x05\xB0Y\x02\u04A8\u04A4\x03\x02\x02\x02\u04A8\u04A9" +
        "\x03\x02\x02\x02\u04A9\u04D5\x03\x02\x02\x02\u04AA\u04AC\x05\xBC_\x02" +
        "\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x03" +
        "\x02\x02\x02\u04AD\u04B2\x05\xDEp\x02\u04AE\u04B3\x05\xDAn\x02\u04AF\u04B3" +
        "\x075\x02\x02\u04B0\u04B3\x07)\x02\x02\u04B1\u04B3\x07\"\x02\x02\u04B2" +
        "\u04AE\x03\x02\x02\x02\u04B2\u04AF\x03\x02\x02\x02\u04B2\u04B0\x03\x02" +
        "\x02\x02\u04B2\u04B1\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4" +
        "\u04B2\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B6\x03\x02" +
        "\x02\x02\u04B6\u04B8\x07!\x02\x02\u04B7\u04B9\x05\xB0Y\x02\u04B8\u04B7" +
        "\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04D5\x03\x02\x02\x02" +
        "\u04BA\u04BB\x05\xBC_\x02\u04BB\u04BD\x05\xDAn\x02\u04BC\u04BE\x05\xB0" +
        "Y\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04D5" +
        "\x03\x02\x02\x02\u04BF\u04D5\x03\x02\x02\x02\u04C0\u04C2\x05\xB0Y\x02" +
        "\u04C1\u04C3\x05\xDAn\x02\u04C2\u04C1\x03\x02\x02\x02\u04C2\u04C3\x03" +
        "\x02\x02\x02\u04C3\u04D5\x03\x02\x02\x02\u04C4\u04C6\x05\xDAn\x02\u04C5" +
        "\u04C7\x075\x02\x02\u04C6\u04C5\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02" +
        "\x02\u04C7\u04CD\x03\x02\x02\x02\u04C8\u04CC\x05\xB0Y\x02\u04C9\u04CC" +
        "\x05\xBE`\x02\u04CA\u04CC\x05\xBC_\x02\u04CB\u04C8\x03\x02\x02\x02\u04CB" +
        "\u04C9\x03\x02\x02\x02\u04CB\u04CA\x03\x02\x02\x02\u04CC\u04CF\x03\x02" +
        "\x02\x02\u04CD\u04CB\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE" +
        "\u04D5\x03\x02\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04D0\u04D1\x05\xDA" +
        "n\x02\u04D1\u04D2\x075\x02\x02\u04D2\u04D3\x05\xBC_\x02\u04D3\u04D5\x03" +
        "\x02\x02\x02\u04D4\u0492\x03\x02\x02\x02\u04D4\u04AB\x03\x02\x02\x02\u04D4" +
        "\u04BA\x03\x02\x02\x02\u04D4\u04BF\x03\x02\x02\x02\u04D4\u04C0\x03\x02" +
        "\x02\x02\u04D4\u04C4\x03\x02\x02\x02\u04D4\u04D0\x03\x02\x02\x02\u04D5" +
        "U\x03\x02\x02\x02\u04D6\u04DA\x05X-\x02\u04D7\u04D9\x05\x9AN\x02\u04D8" +
        "\u04D7\x03\x02\x02\x02\u04D9\u04DC\x03\x02\x02\x02\u04DA\u04D8\x03\x02" +
        "\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04E1\x03\x02\x02\x02\u04DC" +
        "\u04DA\x03\x02\x02\x02\u04DD\u04DE\x07I\x02\x02\u04DE\u04DF\x05\xF6|\x02" +
        "\u04DF\u04E0\x07!\x02\x02\u04E0\u04E2\x03\x02\x02\x02\u04E1\u04DD\x03" +
        "\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u04EB\x03\x02\x02\x02\u04E3" +
        "\u04E7\x07L\x02\x02\u04E4\u04E6\v\x02\x02\x02\u04E5\u04E4\x03\x02\x02" +
        "\x02\u04E6\u04E9\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E7\u04E5" +
        "\x03\x02\x02\x02\u04E8\u04EA\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02" +
        "\u04EA\u04EC\x07!\x02\x02\u04EB\u04E3\x03\x02\x02\x02\u04EB\u04EC\x03" +
        "\x02\x02\x02\u04ECW\x03\x02\x02\x02\u04ED\u04EE\x05\x94K\x02\u04EEY\x03" +
        "\x02\x02\x02\u04EF\u04F0\x05\xA2R\x02\u04F0\u04F1\x07\"\x02\x02\u04F1" +
        "\u04F2\x05\xA8U\x02\u04F2\u04F7\x07!\x02\x02\u04F3\u04F4\x07I\x02\x02" +
        "\u04F4\u04F5\x05\xF6|\x02\u04F5\u04F6\x07!\x02\x02\u04F6\u04F8\x03\x02" +
        "\x02\x02\u04F7\u04F3\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8" +
        "[\x03\x02\x02\x02\u04F9\u04FA\x07\x13\x02\x02\u04FA\u04FB\x05\xDAn\x02" +
        "\u04FB\u04FD\x07!\x02\x02\u04FC\u04FE\x05^0\x02\u04FD\u04FC\x03\x02\x02" +
        "\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE]\x03\x02\x02\x02\u04FF\u0500\x07" +
        "G\x02\x02\u0500\u0501\x073\x02\x02\u0501\u0502\x07!\x02\x02\u0502_\x03" +
        "\x02\x02\x02\u0503\u0505\x05b2\x02\u0504\u0503\x03\x02\x02\x02\u0505\u0508" +
        "\x03\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02" +
        "\u0507\u050E\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050D\x07" +
        "~\x02\x02\u050A\u050D\x07\x7F\x02\x02\u050B\u050D\x05d3\x02\u050C\u0509" +
        "\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050B\x03\x02\x02\x02" +
        "\u050D\u0510\x03\x02\x02\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050F\x03" +
        "\x02\x02\x02\u050Fa\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02\u0511" +
        "\u0512\t\x03\x02\x02\u0512c\x03\x02\x02\x02\u0513\u051D\x05h5\x02\u0514" +
        "\u051D\x05\xA0Q\x02\u0515\u051D\x05j6\x02\u0516\u051D\x05l7\x02\u0517" +
        "\u051D\x05n8\x02\u0518\u051D\x05p9\x02\u0519\u051D\x05r:\x02\u051A\u051D" +
        "\x05t;\x02\u051B\u051D\x07_\x02\x02\u051C\u0513\x03\x02\x02\x02\u051C" +
        "\u0514\x03\x02\x02\x02\u051C\u0515\x03\x02\x02\x02\u051C\u0516\x03\x02" +
        "\x02\x02\u051C\u0517\x03\x02\x02\x02\u051C\u0518\x03\x02\x02\x02\u051C" +
        "\u0519\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02\u051C\u051B\x03\x02" +
        "\x02\x02\u051De\x03\x02\x02\x02\u051E\u0524\x07|\x02\x02\u051F\u0524\x07" +
        "}\x02\x02\u0520\u0524\x07~\x02\x02\u0521\u0524\x07\x7F\x02\x02\u0522\u0524" +
        "\x03\x02\x02\x02\u0523\u051E\x03\x02\x02\x02\u0523\u051F\x03\x02\x02\x02" +
        "\u0523\u0520\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0523\u0522\x03" +
        "\x02\x02\x02\u0524g\x03\x02\x02\x02\u0525\u0528\x07V\x02\x02\u0526\u0529" +
        "\x07\x0F\x02\x02\u0527\u0529\x07\x8F\x02\x02\u0528\u0526\x03\x02\x02\x02" +
        "\u0528\u0527\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\u0534\x03" +
        "\x02\x02\x02\u052A\u052C\x07m\x02\x02\u052B\u052D\x07\x0F\x02\x02\u052C" +
        "\u052B\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u0534\x03\x02" +
        "\x02\x02\u052E\u0530\x07W\x02\x02\u052F\u0531\x07\x0F\x02\x02\u0530\u052F" +
        "\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02\u0531\u0534\x03\x02\x02\x02" +
        "\u0532\u0534\x07X\x02\x02\u0533\u0525\x03\x02\x02\x02\u0533\u052A\x03" +
        "\x02\x02\x02\u0533\u052E\x03\x02\x02\x02\u0533\u0532\x03\x02\x02\x02\u0534" +
        "i\x03\x02\x02\x02\u0535\u0538\t\x04\x02\x02\u0536\u0537\x07\"\x02\x02" +
        "\u0537\u0539\x07\x11\x02\x02\u0538\u0536\x03\x02\x02\x02\u0538\u0539\x03" +
        "\x02\x02\x02\u0539k\x03\x02\x02\x02\u053A\u053B\t\x05\x02\x02\u053Bm\x03" +
        "\x02\x02\x02\u053C\u053D\t\x06\x02\x02\u053Do\x03\x02\x02\x02\u053E\u053F" +
        "\t\x07\x02\x02\u053Fq\x03\x02\x02\x02\u0540\u0541\t\b\x02\x02\u0541s\x03" +
        "\x02\x02\x02\u0542\u0543\t\t\x02\x02\u0543u\x03\x02\x02\x02\u0544\u0545" +
        "\t\n\x02\x02\u0545w\x03\x02\x02\x02\u0546\u0547\t\v\x02\x02\u0547y\x03" +
        "\x02\x02\x02\u0548\u0549\t\f\x02\x02\u0549{\x03\x02\x02\x02\u054A\u054B" +
        "\t\r\x02\x02\u054B}\x03\x02\x02\x02\u054C\u054F\x07d\x02\x02\u054D\u054E" +
        "\x07\"\x02\x02\u054E\u0550\x07\x11\x02\x02\u054F\u054D\x03\x02\x02\x02" +
        "\u054F\u0550\x03\x02\x02\x02\u0550\u0557\x03\x02\x02\x02\u0551\u0554\x07" +
        "v\x02\x02\u0552\u0553\x07\"\x02\x02\u0553\u0555\x07\x11\x02\x02\u0554" +
        "\u0552\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0557\x03\x02" +
        "\x02\x02\u0556\u054C\x03\x02\x02\x02\u0556\u0551\x03\x02\x02\x02\u0557" +
        "\x7F\x03\x02\x02\x02\u0558\u0559\t\x0E\x02\x02\u0559\x81\x03\x02\x02\x02" +
        "\u055A\u055B\x05v<\x02\u055B\u055C\x07\"\x02\x02\u055C\u055D\x05\xA8U" +
        "\x02\u055D\u055E\x07!\x02\x02\u055E\u0561\x03\x02\x02\x02\u055F\u0561" +
        "\x071\x02\x02\u0560\u055A\x03\x02\x02\x02\u0560\u055F\x03\x02\x02\x02" +
        "\u0561\x83\x03\x02\x02\x02\u0562\u0563\x05x=\x02\u0563\u0564\x07\"\x02" +
        "\x02\u0564\u0565\x05\xA8U\x02\u0565\u056A\x07!\x02\x02\u0566\u0567\x07" +
        "I\x02\x02\u0567\u0568\x05\xF6|\x02\u0568\u0569\x07!\x02\x02\u0569\u056B" +
        "\x03\x02\x02\x02\u056A\u0566\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02" +
        "\u056B\x85\x03\x02\x02\x02\u056C\u056D\x05|?\x02\u056D\u056E\x07\"\x02" +
        "\x02\u056E\u056F\x05\xA8U\x02\u056F\u0574\x07!\x02\x02\u0570\u0571\x07" +
        "I\x02\x02\u0571\u0572\x05\xF6|\x02\u0572\u0573\x07!\x02\x02\u0573\u0575" +
        "\x03\x02\x02\x02\u0574\u0570\x03\x02\x02\x02\u0574\u0575\x03\x02\x02\x02" +
        "\u0575\x87\x03\x02\x02\x02\u0576\u0577\x05z>\x02\u0577\u057A\x07\"\x02" +
        "\x02\u0578\u057B\x05\xA8U\x02\u0579\u057B\x05\xA6T\x02\u057A\u0578\x03" +
        "\x02\x02\x02\u057A\u0579\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C" +
        "\u0581\x07!\x02\x02\u057D\u057E\x07I\x02\x02\u057E\u057F\x05\xF6|\x02" +
        "\u057F\u0580\x07!\x02\x02\u0580\u0582\x03\x02\x02\x02\u0581\u057D\x03" +
        "\x02\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582\x89\x03\x02\x02\x02\u0583" +
        "\u0587\x05\x8CG\x02\u0584\u0586\x05\xA4S\x02\u0585\u0584\x03\x02\x02\x02" +
        "\u0586\u0589\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0588\x03" +
        "\x02\x02\x02\u0588\x8B\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u058A" +
        "\u058B\x05\x80A\x02\u058B\u058F\x07\"\x02\x02\u058C\u058E\x07\x04\x02" +
        "\x02\u058D\u058C\x03\x02\x02\x02\u058E\u0591\x03\x02\x02\x02\u058F\u058D" +
        "\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\u0592\x03\x02\x02\x02" +
        "\u0591\u058F\x03\x02\x02\x02\u0592\u0593\x05\xA8U\x02\u0593\u0594\x07" +
        "!\x02\x02\u0594\x8D\x03\x02\x02\x02\u0595\u0599\x05\x90I\x02\u0596\u0598" +
        "\x05\xA4S\x02\u0597\u0596\x03\x02\x02\x02\u0598\u059B\x03\x02\x02\x02" +
        "\u0599\u0597\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A\x8F\x03" +
        "\x02\x02\x02\u059B\u0599\x03\x02\x02\x02\u059C\u059D\x05~@\x02\u059D\u059E" +
        "\x07\"\x02\x02\u059E\u059F\x05\xA8U\x02\u059F\u05A4\x07!\x02\x02\u05A0" +
        "\u05A1\x07I\x02\x02\u05A1\u05A2\x05\xF6|\x02\u05A2\u05A3\x07!\x02\x02" +
        "\u05A3\u05A5\x03\x02\x02\x02\u05A4\u05A0\x03\x02\x02\x02\u05A4\u05A5\x03" +
        "\x02\x02\x02\u05A5\x91\x03\x02\x02\x02\u05A6\u05AA\x05\x94K\x02\u05A7" +
        "\u05A9\x05\x98M\x02\u05A8\u05A7\x03\x02\x02\x02\u05A9\u05AC\x03\x02\x02" +
        "\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AF" +
        "\x03\x02\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD\u05AE\x075\x02\x02" +
        "\u05AE\u05B0\x07K\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05B0\x03" +
        "\x02\x02\x02\u05B0\x93\x03\x02\x02\x02\u05B1\u05B2\x05\x96L\x02\u05B2" +
        "\u05B6\x07\"\x02\x02\u05B3\u05B5\x07\x04\x02\x02\u05B4\u05B3\x03\x02\x02" +
        "\x02\u05B5\u05B8\x03\x02\x02\x02\u05B6\u05B4\x03\x02\x02\x02\u05B6\u05B7" +
        "\x03\x02\x02\x02\u05B7\u05B9\x03\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02" +
        "\u05B9\u05BA\x05\xA8U\x02\u05BA\u05BB\x07!\x02\x02\u05BB\x95\x03\x02\x02" +
        "\x02\u05BC\u05BF\x07a\x02\x02\u05BD\u05C0\x07\x0F\x02\x02\u05BE\u05C0" +
        "\x07\x8F\x02\x02\u05BF\u05BD\x03\x02\x02\x02\u05BF\u05BE\x03\x02\x02\x02" +
        "\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05CB\x03\x02\x02\x02\u05C1\u05C3\x07" +
        "u\x02\x02\u05C2\u05C4\x07\x0F\x02\x02\u05C3\u05C2\x03\x02\x02\x02\u05C3" +
        "\u05C4\x03\x02\x02\x02\u05C4\u05CB\x03\x02\x02\x02\u05C5\u05C7\x07b\x02" +
        "\x02\u05C6\u05C8\x07\x0F\x02\x02\u05C7\u05C6\x03\x02\x02\x02\u05C7\u05C8" +
        "\x03\x02\x02\x02\u05C8\u05CB\x03\x02\x02\x02\u05C9\u05CB\x07c\x02\x02" +
        "\u05CA\u05BC\x03\x02\x02\x02\u05CA\u05C1\x03\x02\x02\x02\u05CA\u05C5\x03" +
        "\x02\x02\x02\u05CA\u05C9\x03\x02\x02\x02\u05CB\x97\x03\x02\x02\x02\u05CC" +
        "\u05CD\x07H\x02\x02\u05CD\u05CE\x07\"\x02\x02\u05CE\u05CF\x05\xA8U\x02" +
        "\u05CF\u05D0\x07!\x02\x02\u05D0\u05DE\x03\x02\x02\x02\u05D1\u05D2\t\x0F" +
        "\x02\x02\u05D2\u05D3\x07\"\x02\x02\u05D3\u05D4\x073\x02\x02\u05D4\u05DE" +
        "\x07!\x02\x02\u05D5\u05D9\t\x10\x02\x02\u05D6\u05D8\v\x02\x02\x02\u05D7" +
        "\u05D6\x03\x02\x02\x02\u05D8\u05DB\x03\x02\x02\x02\u05D9\u05DA\x03\x02" +
        "\x02\x02\u05D9\u05D7\x03\x02\x02\x02\u05DA\u05DC\x03\x02\x02\x02\u05DB" +
        "\u05D9\x03\x02\x02\x02\u05DC\u05DE\x07!\x02\x02\u05DD\u05CC\x03\x02\x02" +
        "\x02\u05DD\u05D1\x03\x02\x02\x02\u05DD\u05D5\x03\x02\x02\x02\u05DE\x99" +
        "\x03\x02\x02\x02\u05DF\u05E0\x07H\x02\x02\u05E0\u05E1\x07\"\x02\x02\u05E1" +
        "\u05E2\x05\xA8U\x02\u05E2\u05E3\x07!\x02\x02\u05E3\u05F1\x03\x02\x02\x02" +
        "\u05E4\u05E5\t\x0F\x02\x02\u05E5\u05E6\x07\"\x02\x02\u05E6\u05E7\x073" +
        "\x02\x02\u05E7\u05F1\x07!\x02\x02\u05E8\u05EC\t\x10\x02\x02\u05E9\u05EB" +
        "\v\x02\x02\x02\u05EA\u05E9\x03\x02\x02\x02\u05EB\u05EE\x03\x02\x02\x02" +
        "\u05EC\u05ED\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02\u05ED\u05EF\x03" +
        "\x02\x02\x02\u05EE\u05EC\x03\x02\x02\x02\u05EF\u05F1\x07!\x02\x02\u05F0" +
        "\u05DF\x03\x02\x02\x02\u05F0\u05E4\x03\x02\x02\x02\u05F0\u05E8\x03\x02" +
        "\x02\x02\u05F1\x9B\x03\x02\x02\x02\u05F2\u05F6\x05\x9EP\x02\u05F3\u05F5" +
        "\x05\xA4S\x02\u05F4\u05F3\x03\x02\x02\x02\u05F5\u05F8\x03\x02\x02\x02" +
        "\u05F6\u05F4\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\x9D\x03" +
        "\x02";
    matchParser._serializedATNSegment3 = "\x02\x02\u05F8\u05F6\x03\x02\x02\x02\u05F9\u05FA\x05\xA2R\x02\u05FA\u05FB" +
        "\x07\"\x02\x02\u05FB\u05FC\x05\xA8U\x02\u05FC\u0601\x07!\x02\x02\u05FD" +
        "\u05FE\x07I\x02\x02\u05FE\u05FF\x05\xF6|\x02\u05FF\u0600\x07!\x02\x02" +
        "\u0600\u0602\x03\x02\x02\x02\u0601\u05FD\x03\x02\x02\x02\u0601\u0602\x03" +
        "\x02\x02\x02\u0602\x9F\x03\x02\x02\x02\u0603\u0606\x07U\x02\x02\u0604" +
        "\u0605\x07\"\x02\x02\u0605\u0607\x07\x10\x02\x02\u0606\u0604\x03\x02\x02" +
        "\x02\u0606\u0607\x03\x02\x02\x02\u0607\u060E\x03\x02\x02\x02\u0608\u060B" +
        "\x07l\x02\x02\u0609\u060A\x07\"\x02\x02\u060A\u060C\x07\x10\x02\x02\u060B" +
        "\u0609\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C\u060E\x03\x02" +
        "\x02\x02\u060D\u0603\x03\x02\x02\x02\u060D\u0608\x03\x02\x02\x02\u060E" +
        "\xA1\x03\x02\x02\x02\u060F\u0612\x07`\x02\x02\u0610\u0611\x07\"\x02\x02" +
        "\u0611\u0613\x07\x10\x02\x02\u0612\u0610\x03\x02\x02\x02\u0612\u0613\x03" +
        "\x02\x02\x02\u0613\u061A\x03\x02\x02\x02\u0614\u0617\x07t\x02\x02\u0615" +
        "\u0616\x07\"\x02\x02\u0616\u0618\x07\x10\x02\x02\u0617\u0615\x03\x02\x02" +
        "\x02\u0617\u0618\x03\x02\x02\x02\u0618\u061A\x03\x02\x02\x02\u0619\u060F" +
        "\x03\x02\x02\x02\u0619\u0614\x03\x02\x02\x02\u061A\xA3\x03\x02\x02\x02" +
        "\u061B\u061C\x07\x1A\x02\x02\u061C\u061F\x05\xDAn\x02\u061D\u061F\x07" +
        "H\x02\x02\u061E\u061B\x03\x02\x02\x02\u061E\u061D\x03\x02\x02\x02\u061F" +
        "\u0620\x03\x02\x02\x02\u0620\u0624\x07\"\x02\x02\u0621\u0623\x07\x04\x02" +
        "\x02\u0622\u0621\x03\x02\x02\x02\u0623\u0626\x03\x02\x02\x02\u0624\u0622" +
        "\x03\x02\x02\x02\u0624\u0625\x03\x02\x02\x02\u0625\u0629\x03\x02\x02\x02" +
        "\u0626\u0624\x03\x02\x02\x02\u0627\u062A\x05\xDAn\x02\u0628\u062A\x07" +
        "5\x02\x02\u0629\u0627\x03\x02\x02\x02\u0629\u0628\x03\x02\x02\x02\u062A" +
        "\u062B\x03\x02\x02\x02\u062B\u0629\x03\x02\x02\x02\u062B\u062C\x03\x02" +
        "\x02\x02\u062C\u062D\x03\x02\x02\x02\u062D\u063B\x07!\x02\x02\u062E\u062F" +
        "\t\x0F\x02\x02\u062F\u0630\x07\"\x02\x02\u0630\u0631\x073\x02\x02\u0631" +
        "\u063B\x07!\x02\x02\u0632\u0636\t\x10\x02\x02\u0633\u0635\v\x02\x02\x02" +
        "\u0634\u0633\x03\x02\x02\x02\u0635\u0638\x03\x02\x02\x02\u0636\u0637\x03" +
        "\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0637\u0639\x03\x02\x02\x02\u0638" +
        "\u0636\x03\x02\x02\x02\u0639\u063B\x07!\x02\x02\u063A\u061E\x03\x02\x02" +
        "\x02\u063A\u062E\x03\x02\x02\x02\u063A\u0632\x03\x02\x02\x02\u063B\xA5" +
        "\x03\x02\x02\x02\u063C\u063D\x07\x8E\x02\x02\u063D\u063E\x07%\x02\x02" +
        "\u063E\u063F\x073\x02\x02\u063F\xA7\x03\x02\x02\x02\u0640\u0641\x07\x91" +
        "\x02\x02\u0641\xA9\x03\x02\x02\x02\u0642\u0643\x07\x1F\x02\x02\u0643\u064B" +
        "\x07!\x02\x02\u0644\u0646\x07\x04\x02\x02\u0645\u0644\x03\x02\x02\x02" +
        "\u0646\u0649\x03\x02\x02\x02\u0647\u0645\x03\x02\x02\x02\u0647\u0648\x03" +
        "\x02\x02\x02\u0648\u064A\x03\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u064A" +
        "\u064C\x05\xACW\x02\u064B\u0647\x03\x02\x02\x02\u064B\u064C\x03\x02\x02" +
        "\x02\u064C\u0661\x03\x02\x02\x02\u064D\u064E\x07\x1F\x02\x02\u064E\u0653" +
        "\x05\xDAn\x02\u064F\u0652\x07\"\x02\x02\u0650\u0652\x05\xF6|\x02\u0651" +
        "\u064F\x03\x02\x02\x02\u0651\u0650\x03\x02\x02\x02\u0652\u0655\x03\x02" +
        "\x02\x02\u0653\u0651\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654" +
        "\u0656\x03\x02\x02\x02\u0655\u0653\x03\x02\x02\x02\u0656\u065E\x07!\x02" +
        "\x02\u0657\u0659\x07\x04\x02\x02\u0658\u0657\x03\x02\x02\x02\u0659\u065C" +
        "\x03\x02\x02\x02\u065A\u0658\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02" +
        "\u065B\u065D\x03\x02\x02\x02\u065C\u065A\x03\x02\x02\x02\u065D\u065F\x05" +
        "\xACW\x02\u065E\u065A\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F" +
        "\u0661\x03\x02\x02\x02\u0660\u0642\x03\x02\x02\x02\u0660\u064D\x03\x02" +
        "\x02\x02\u0661\xAB\x03\x02\x02\x02\u0662\u0663\x07\x1F\x02\x02\u0663\u0668" +
        "\x05\xDAn\x02\u0664\u0667\x07\"\x02\x02\u0665\u0667\x05\xF6|\x02\u0666" +
        "\u0664\x03\x02\x02\x02\u0666\u0665\x03\x02\x02\x02\u0667\u066A\x03\x02" +
        "\x02\x02\u0668\u0666\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669" +
        "\u066B\x03\x02\x02\x02\u066A\u0668\x03\x02\x02\x02\u066B\u066C\x07!\x02" +
        "\x02\u066C\xAD\x03\x02\x02\x02\u066D\u066F\x07\x14\x02\x02\u066E\u0670" +
        "\x05\xDAn\x02\u066F\u066E\x03\x02\x02\x02\u066F\u0670\x03\x02\x02\x02" +
        "\u0670\u0671\x03\x02\x02\x02\u0671\u0678\x07!\x02\x02\u0672\u0674\x07" +
        "\x15\x02\x02\u0673\u0675\x05\xDAn\x02\u0674\u0673\x03\x02\x02\x02\u0674" +
        "\u0675\x03\x02\x02\x02\u0675\u0676\x03\x02\x02\x02\u0676\u0678\x07!\x02" +
        "\x02\u0677\u066D\x03\x02\x02\x02\u0677\u0672\x03\x02\x02\x02\u0678\xAF" +
        "\x03\x02\x02\x02\u0679\u0681\x07B\x02\x02\u067A\u0681\x07@\x02\x02\u067B" +
        "\u067D\x07A\x02\x02\u067C\u067E\x076\x02\x02\u067D\u067C\x03\x02\x02\x02" +
        "\u067D\u067E\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0681\x07" +
        "\x02\x02\x03\u0680\u0679\x03\x02\x02\x02\u0680\u067A\x03\x02\x02\x02\u0680" +
        "\u067B\x03\x02\x02\x02\u0681\xB1\x03\x02\x02\x02\u0682\u0684\x07k\x02" +
        "\x02\u0683\u0685\x05\xDAn\x02\u0684\u0683\x03\x02\x02\x02\u0684\u0685" +
        "\x03\x02\x02\x02\u0685\u069B\x03\x02\x02\x02\u0686\u0690\x05\xDAn\x02" +
        "\u0687\u068B\x075\x02\x02\u0688\u068A\x07\x04\x02\x02\u0689\u0688\x03" +
        "\x02\x02\x02\u068A\u068D\x03\x02\x02\x02\u068B\u0689\x03\x02\x02\x02\u068B" +
        "\u068C\x03\x02\x02\x02\u068C\u068F\x03\x02\x02\x02\u068D\u068B\x03\x02" +
        "\x02\x02\u068E\u0687\x03\x02\x02\x02\u068F\u0692\x03\x02\x02\x02\u0690" +
        "\u068E\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0696\x03\x02" +
        "\x02\x02\u0692\u0690\x03\x02\x02\x02\u0693\u0695\x075\x02\x02\u0694\u0693" +
        "\x03\x02\x02\x02\u0695\u0698\x03\x02\x02\x02\u0696\u0694\x03\x02\x02\x02" +
        "\u0696\u0697\x03\x02\x02\x02\u0697\u069A\x03\x02\x02\x02\u0698\u0696\x03" +
        "\x02\x02\x02\u0699\u0686\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02\u069B" +
        "\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u069E\x03\x02" +
        "\x02\x02\u069D\u069B\x03\x02\x02\x02\u069E\u06AA\x07!\x02\x02\u069F\u06A5" +
        "\x07k\x02\x02\u06A0\u06A4\x05\xDAn\x02\u06A1\u06A4\x075\x02\x02\u06A2" +
        "\u06A4\x07\x04\x02\x02\u06A3\u06A0\x03\x02\x02\x02\u06A3\u06A1\x03\x02" +
        "\x02\x02\u06A3\u06A2\x03\x02\x02\x02\u06A4\u06A7\x03\x02\x02\x02\u06A5" +
        "\u06A3\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6\u06A8\x03\x02" +
        "\x02\x02\u06A7\u06A5\x03\x02\x02\x02\u06A8\u06AA\x07\x02\x02\x03\u06A9" +
        "\u0682\x03\x02\x02\x02\u06A9\u069F\x03\x02\x02\x02\u06AA\xB3\x03\x02\x02" +
        "\x02\u06AB\u06B0\x07:\x02\x02\u06AC\u06B1\x05\xDAn\x02\u06AD\u06B1\x07" +
        "\"\x02\x02\u06AE\u06B1\x07\x91\x02\x02\u06AF\u06B1\x075\x02\x02\u06B0" +
        "\u06AC\x03\x02\x02\x02\u06B0\u06AD\x03\x02\x02\x02\u06B0\u06AE\x03\x02" +
        "\x02\x02\u06B0\u06AF\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2" +
        "\u06B0\x03\x02\x02\x02\u06B2\u06B3\x03\x02\x02\x02\u06B3\u06B4\x03\x02" +
        "\x02\x02\u06B4\u06C2\x07!\x02\x02\u06B5\u06BD\x07:\x02\x02\u06B6\u06BC" +
        "\x05\xDAn\x02\u06B7\u06BC\x07\"\x02\x02\u06B8\u06BC\x07\x91\x02\x02\u06B9" +
        "\u06BC\x075\x02\x02\u06BA\u06BC\x07\x04\x02\x02\u06BB\u06B6\x03\x02\x02" +
        "\x02\u06BB\u06B7\x03\x02\x02\x02\u06BB\u06B8\x03\x02\x02\x02\u06BB\u06B9" +
        "\x03\x02\x02\x02\u06BB\u06BA\x03\x02\x02\x02\u06BC\u06BF\x03\x02\x02\x02" +
        "\u06BD\u06BB\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06C0\x03" +
        "\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02\u06C0\u06C2\x07\x02\x02\x03\u06C1" +
        "\u06AB\x03\x02\x02\x02\u06C1\u06B5\x03\x02\x02\x02\u06C2\xB5\x03\x02\x02" +
        "\x02\u06C3\u06C4\x079\x02\x02\u06C4\u06C5\x05\xDAn\x02\u06C5\u06C6\x07" +
        "!\x02\x02\u06C6\xB7\x03\x02\x02\x02\u06C7\u06CB\x07R\x02\x02\u06C8\u06CC" +
        "\x05\xDAn\x02\u06C9\u06CC\x07\"\x02\x02\u06CA\u06CC\x075\x02\x02\u06CB" +
        "\u06C8\x03\x02\x02\x02\u06CB\u06C9\x03\x02\x02\x02\u06CB\u06CA\x03\x02" +
        "\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06CB\x03\x02\x02\x02\u06CD" +
        "\u06CE\x03\x02\x02\x02\u06CE\u06CF\x03\x02\x02\x02\u06CF\u06D1\x07!\x02" +
        "\x02\u06D0\u06D2\x05\xBA^\x02\u06D1\u06D0\x03\x02\x02\x02\u06D1\u06D2" +
        "\x03\x02\x02\x02\u06D2\xB9\x03\x02\x02\x02\u06D3\u06D7\x07R\x02\x02\u06D4" +
        "\u06D8\x05\xDAn\x02\u06D5\u06D8\x07\"\x02\x02\u06D6\u06D8\x075\x02\x02" +
        "\u06D7\u06D4\x03\x02\x02\x02\u06D7\u06D5\x03\x02\x02\x02\u06D7\u06D6\x03" +
        "\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9\u06D7\x03\x02\x02\x02\u06D9" +
        "\u06DA\x03\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DC\x07!\x02" +
        "\x02\u06DC\xBB\x03\x02\x02\x02\u06DD\u06E1\x07\x18\x02\x02\u06DE\u06E0" +
        "\x075\x02\x02\u06DF\u06DE\x03\x02\x02\x02\u06E0\u06E3\x03\x02\x02\x02" +
        "\u06E1\u06DF\x03\x02\x02\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2\u06E5\x03" +
        "\x02\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E4\u06E6\x05\xDAn\x02\u06E5" +
        "\u06E4\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06FC\x03\x02" +
        "\x02\x02\u06E7\u06F1\x05\xDAn\x02\u06E8\u06EC\x075\x02\x02\u06E9\u06EB" +
        "\x07\x04\x02\x02\u06EA\u06E9\x03\x02\x02\x02\u06EB\u06EE\x03\x02\x02\x02" +
        "\u06EC\u06EA\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06F0\x03" +
        "\x02\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EF\u06E8\x03\x02\x02\x02\u06F0" +
        "\u06F3\x03\x02\x02\x02\u06F1\u06EF\x03\x02\x02\x02\u06F1\u06F2\x03\x02" +
        "\x02\x02\u06F2\u06F7\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F4" +
        "\u06F6\x075\x02\x02\u06F5\u06F4\x03\x02\x02\x02\u06F6\u06F9\x03\x02\x02" +
        "\x02\u06F7\u06F5\x03\x02\x02\x02\u06F7\u06F8\x03\x02\x02\x02\u06F8\u06FB" +
        "\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06FA\u06E7\x03\x02\x02\x02" +
        "\u06FB\u06FE\x03\x02\x02\x02\u06FC\u06FA\x03\x02\x02\x02\u06FC\u06FD\x03" +
        "\x02\x02\x02\u06FD\u06FF\x03\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FF" +
        "\u070C\x07!\x02\x02\u0700\u0704\x07\x18\x02\x02\u0701\u0703\x075\x02\x02" +
        "\u0702\u0701\x03\x02\x02\x02\u0703\u0706\x03\x02\x02\x02\u0704\u0702\x03" +
        "\x02\x02\x02\u0704\u0705\x03\x02\x02\x02\u0705\u0708\x03\x02\x02\x02\u0706" +
        "\u0704\x03\x02\x02\x02\u0707\u0709\x05\xDAn\x02\u0708\u0707\x03\x02\x02" +
        "\x02\u0708\u0709\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u070C" +
        "\x07\x02\x02\x03\u070B\u06DD\x03\x02\x02\x02\u070B\u0700\x03\x02\x02\x02" +
        "\u070C\xBD\x03\x02\x02\x02\u070D\u070F\x07\x19\x02\x02\u070E\u0710\n\x11" +
        "\x02\x02\u070F\u070E\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711" +
        "\u070F\x03\x02\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712\u0713\x03\x02" +
        "\x02\x02\u0713\u0714\x07!\x02\x02\u0714\xBF\x03\x02\x02\x02\u0715\u0718" +
        "\x07 \x02\x02\u0716\u0719\x05\xDAn\x02\u0717\u0719\x075\x02\x02\u0718" +
        "\u0716\x03\x02\x02\x02\u0718\u0717\x03\x02\x02\x02\u0719\u071A\x03\x02" +
        "\x02\x02\u071A\u0718\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B" +
        "\u071C\x03\x02\x02\x02\u071C\u0722\x07!\x02\x02\u071D\u071E\x07 \x02\x02" +
        "\u071E\u071F\x05\xDAn\x02\u071F\u0720\x07\x02\x02\x03\u0720\u0722\x03" +
        "\x02\x02\x02\u0721\u0715\x03\x02\x02\x02\u0721\u071D\x03\x02\x02\x02\u0722" +
        "\xC1\x03\x02\x02\x02\u0723\u0724\x07E\x02\x02\u0724\u0725\x05\xDAn\x02" +
        "\u0725\u0726\x07!\x02\x02\u0726\u072C\x03\x02\x02\x02\u0727\u0728\x07" +
        "F\x02\x02\u0728\u0729\x05\xDAn\x02\u0729\u072A\x07!\x02\x02\u072A\u072C" +
        "\x03\x02\x02\x02\u072B\u0723\x03\x02\x02\x02\u072B\u0727\x03\x02\x02\x02" +
        "\u072C\xC3\x03\x02\x02\x02\u072D\u072E\x07=\x02\x02\u072E\u072F\x07\"" +
        "\x02\x02\u072F\u0730\x073\x02\x02\u0730\u0737\x07!\x02\x02\u0731\u0732" +
        "\x07=\x02\x02\u0732\u0733\x07\"\x02\x02\u0733\u0734\x05\xDAn\x02\u0734" +
        "\u0735\x07!\x02\x02\u0735\u0737\x03\x02\x02\x02\u0736\u072D\x03\x02\x02" +
        "\x02\u0736\u0731\x03\x02\x02\x02\u0737\xC5\x03\x02\x02\x02\u0738\u0739" +
        "\x07P\x02\x02\u0739\u073A\x05\xDAn\x02\u073A\u073B\x07!\x02\x02\u073B" +
        "\xC7\x03\x02\x02\x02\u073C\u073D\x07Q\x02\x02\u073D\u073E\x05\xDAn\x02" +
        "\u073E\u073F\x07!\x02\x02\u073F\xC9\x03\x02\x02\x02\u0740\u074A\x05\xCC" +
        "g\x02\u0741\u0743\x075\x02\x02\u0742\u0741\x03\x02\x02\x02\u0743\u0746" +
        "\x03\x02\x02\x02\u0744\u0742\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02" +
        "\u0745\u0747\x03\x02\x02\x02\u0746\u0744\x03\x02\x02\x02\u0747\u0749\x05" +
        "\xCCg\x02\u0748\u0744\x03\x02\x02\x02\u0749\u074C\x03\x02\x02\x02\u074A" +
        "\u0748\x03\x02\x02\x02\u074A\u074B\x03\x02\x02\x02\u074B\xCB\x03\x02\x02" +
        "\x02\u074C\u074A\x03\x02\x02\x02\u074D\u074E\x07\x1A\x02\x02\u074E\u074F" +
        "\x05\xDAn\x02\u074F\u0750\t\x12\x02\x02\u0750\u0756\x05\xDAn\x02\u0751" +
        "\u0755\x075\x02\x02\u0752\u0755\x07\"\x02\x02\u0753\u0755\x05\xDAn\x02" +
        "\u0754\u0751\x03\x02\x02\x02\u0754\u0752\x03\x02\x02\x02\u0754\u0753\x03" +
        "\x02\x02\x02\u0755\u0758\x03\x02\x02\x02\u0756\u0754\x03\x02\x02\x02\u0756" +
        "\u0757\x03\x02\x02\x02\u0757\u0759\x03\x02\x02\x02\u0758\u0756\x03\x02" +
        "\x02\x02\u0759\u075A\x07!\x02\x02\u075A\u0764\x03\x02\x02\x02\u075B\u075F" +
        "\x07N\x02\x02\u075C\u075E\v\x02\x02\x02\u075D\u075C\x03\x02\x02\x02\u075E" +
        "\u0761\x03\x02\x02\x02\u075F\u0760\x03\x02\x02\x02\u075F\u075D\x03\x02" +
        "\x02\x02\u0760\u0762\x03\x02\x02\x02\u0761\u075F\x03\x02\x02\x02\u0762" +
        "\u0764\x07!\x02\x02\u0763\u074D\x03\x02\x02\x02\u0763\u075B\x03\x02\x02" +
        "\x02\u0764\xCD\x03\x02\x02\x02\u0765\u0769\x07\x12\x02\x02\u0766\u076A" +
        "\x05\xDAn\x02\u0767\u076A\x07\"\x02\x02\u0768\u076A\x075\x02\x02\u0769" +
        "\u0766\x03\x02\x02\x02\u0769\u0767\x03\x02\x02\x02\u0769\u0768\x03\x02" +
        "\x02\x02\u076A\u076B\x03\x02\x02\x02\u076B\u0769\x03\x02\x02\x02\u076B" +
        "\u076C\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02\u076D\u0779\x07!\x02" +
        "\x02\u076E\u0774\x07\x12\x02\x02\u076F\u0773\x05\xDAn\x02\u0770\u0773" +
        "\x07\"\x02\x02\u0771\u0773\x075\x02\x02\u0772\u076F\x03\x02\x02\x02\u0772" +
        "\u0770\x03\x02\x02\x02\u0772\u0771\x03\x02\x02\x02\u0773\u0776\x03\x02" +
        "\x02\x02\u0774\u0772\x03\x02\x02\x02\u0774\u0775\x03\x02\x02\x02\u0775" +
        "\u0777\x03\x02\x02\x02\u0776\u0774\x03\x02\x02\x02\u0777\u0779\x07\x02" +
        "\x02\x03\u0778\u0765\x03\x02\x02\x02\u0778\u076E\x03\x02\x02\x02\u0779" +
        "\xCF\x03\x02\x02\x02\u077A\u077C\x07\x16\x02\x02\u077B\u077D\x05\xDAn" +
        "\x02\u077C\u077B\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D\u077E" +
        "\x03\x02\x02\x02\u077E\u077F\x07!\x02\x02\u077F\xD1\x03\x02\x02\x02\u0780" +
        "\u0781\x07$\x02\x02\u0781\xD3\x03\x02\x02\x02\u0782\u0783\x05\xD2j\x02" +
        "\u0783\u0784\x074\x02\x02\u0784\u0786\x05\xD2j\x02\u0785\u0787\n\x13\x02" +
        "\x02\u0786\u0785\x03\x02\x02\x02\u0787\u0788\x03\x02\x02\x02\u0788\u0786" +
        "\x03\x02\x02\x02\u0788\u0789\x03\x02\x02\x02\u0789\u078A\x03\x02\x02\x02" +
        "\u078A\u078B\x05\xD2j\x02\u078B\xD5\x03\x02\x02\x02\u078C\u078E\x05\xDA" +
        "n\x02\u078D\u078F\x075\x02\x02\u078E\u078D\x03\x02\x02\x02\u078E\u078F" +
        "\x03\x02\x02\x02\u078F\u0791\x03\x02\x02\x02\u0790\u078C\x03\x02\x02\x02" +
        "\u0791\u0792\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02\u0792\u0793\x03" +
        "\x02\x02\x02\u0793\xD7\x03\x02\x02\x02\u0794\u0795\x07\x92\x02\x02\u0795" +
        "\xD9\x03\x02\x02\x02\u0796\u079D\x074\x02\x02\u0797\u0799\x07\x04\x02" +
        "\x02\u0798\u0797\x03\x02\x02\x02\u0799\u079A\x03\x02\x02\x02\u079A\u0798" +
        "\x03\x02\x02\x02\u079A\u079B\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02" +
        "\u079C\u079E\x073\x02\x02\u079D\u0798\x03\x02\x02\x02\u079D\u079E\x03" +
        "\x02\x02\x02\u079E\u07C6\x03\x02\x02\x02\u079F\u07A6\x05\xF6|\x02\u07A0" +
        "\u07A2\x07\x04\x02\x02\u07A1\u07A0\x03\x02\x02\x02\u07A2\u07A3\x03\x02" +
        "\x02\x02\u07A3\u07A1\x03\x02\x02\x02\u07A3\u07A4\x03\x02\x02\x02\u07A4" +
        "\u07A5\x03\x02\x02\x02\u07A5\u07A7\x073\x02\x02\u07A6\u07A1\x03\x02\x02" +
        "\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07C6\x03\x02\x02\x02\u07A8\u07A9" +
        "\x07\x1D\x02\x02\u07A9\u07AA\x05\xDAn\x02\u07AA\u07AB\x07!\x02\x02\u07AB" +
        "\u07C6\x03\x02\x02\x02\u07AC\u07C6\x073\x02\x02\u07AD\u07AF\x07\x04\x02" +
        "\x02\u07AE\u07AD\x03\x02\x02\x02\u07AF\u07B2\x03\x02\x02\x02\u07B0\u07AE" +
        "\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07B3\x03\x02\x02\x02" +
        "\u07B2\u07B0\x03\x02\x02\x02\u07B3\u07B7\x07\"\x02\x02\u07B4\u07B6\x07" +
        "\x04\x02\x02\u07B5\u07B4\x03\x02\x02\x02\u07B6\u07B9\x03\x02\x02\x02\u07B7" +
        "\u07B5\x03\x02\x02\x02\u07B7\u07B8\x03\x02\x02\x02\u07B8\u07C6\x03\x02" +
        "\x02\x02\u07B9\u07B7\x03\x02\x02\x02\u07BA\u07BE\x07#\x02\x02\u07BB\u07BD" +
        "\x07\x04\x02\x02\u07BC\u07BB\x03\x02\x02\x02\u07BD\u07C0\x03\x02\x02\x02" +
        "\u07BE\u07BC\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C6\x03" +
        "\x02\x02\x02\u07C0\u07BE\x03\x02\x02\x02\u07C1\u07C6\x07!\x02\x02\u07C2" +
        "\u07C6\x07$\x02\x02\u07C3\u07C6\x07\x92\x02\x02\u07C4\u07C6\x05\xD4k\x02" +
        "\u07C5\u0796\x03\x02\x02\x02\u07C5\u079F\x03\x02\x02\x02\u07C5\u07A8\x03" +
        "\x02\x02\x02\u07C5\u07AC\x03\x02\x02\x02\u07C5\u07B0\x03\x02\x02\x02\u07C5" +
        "\u07BA\x03\x02\x02\x02\u07C5\u07C1\x03\x02\x02\x02\u07C5\u07C2\x03\x02" +
        "\x02\x02\u07C5\u07C3\x03\x02\x02\x02\u07C5\u07C4\x03\x02\x02\x02\u07C6" +
        "\xDB\x03\x02\x02\x02\u07C7\u07C8\x070\x02\x02\u07C8\xDD\x03\x02\x02\x02" +
        "\u07C9\u07CA\x07\x12\x02\x02\u07CA\xDF\x03\x02\x02\x02\u07CB\u07CC\x07" +
        "\x17\x02\x02\u07CC\xE1\x03\x02\x02\x02\u07CD\u07CE\x07\x18\x02\x02\u07CE" +
        "\xE3\x03\x02\x02\x02\u07CF\u07D0\x07\x19\x02\x02\u07D0\xE5\x03\x02\x02" +
        "\x02\u07D1\u07D2\x07\x1A\x02\x02\u07D2\xE7\x03\x02\x02\x02\u07D3\u07D4" +
        "\x07\x1B\x02\x02\u07D4\xE9\x03\x02\x02\x02\u07D5\u07D6\x07\x1C\x02\x02" +
        "\u07D6\xEB\x03\x02\x02\x02\u07D7\u07D8\x07\x1D\x02\x02\u07D8\xED\x03\x02" +
        "\x02\x02\u07D9\u07DA\x07\x1E\x02\x02\u07DA\xEF\x03\x02\x02\x02\u07DB\u07DC" +
        "\x07\x1F\x02\x02\u07DC\xF1\x03\x02\x02\x02\u07DD\u07DE\x07!\x02\x02\u07DE" +
        "\xF3\x03\x02\x02\x02\u07DF\u07E0\x07.\x02\x02\u07E0\xF5\x03\x02\x02\x02" +
        "\u07E1\u07EB\x076\x02\x02\u07E2\u07EB\x077\x02\x02\u07E3\u07EB\x07#\x02" +
        "\x02\u07E4\u07E5\x07\'\x02\x02\u07E5\u07EB\n\x14\x02\x02\u07E6\u07E7\x07" +
        "(\x02\x02\u07E7\u07EB\n\x15\x02\x02\u07E8\u07EB\x07+\x02\x02\u07E9\u07EB" +
        "\x07*\x02\x02\u07EA\u07E1\x03\x02\x02\x02\u07EA\u07E2\x03\x02\x02\x02" +
        "\u07EA\u07E3\x03\x02\x02\x02\u07EA\u07E4\x03\x02\x02\x02\u07EA\u07E6\x03" +
        "\x02\x02\x02\u07EA\u07E8\x03\x02\x02\x02\u07EA\u07E9\x03\x02\x02\x02\u07EB" +
        "\u07EC\x03\x02\x02\x02\u07EC\u07EA\x03\x02\x02\x02\u07EC\u07ED\x03\x02" +
        "\x02\x02\u07ED\xF7\x03\x02\x02\x02\u07EE\u07EF\x07\x04\x02\x02\u07EF\xF9" +
        "\x03\x02\x02\x02\u0121\xFE\u0104\u0109\u0117\u011F\u0125\u012A\u0131\u0137" +
        "\u013E\u0144\u0147\u014F\u0155\u015A\u0161\u0167\u016E\u0174\u0177\u017F" +
        "\u0185\u018A\u0191\u0197\u019E\u01A4\u01A7\u01AF\u01B5\u01BA\u01C1\u01C7" +
        "\u01CE\u01D4\u01D7\u01DF\u01E5\u01EA\u01F1\u01F7\u01FE\u0204\u0207\u020F" +
        "\u0215\u021A\u0221\u0227\u022E\u0234\u0237\u023F\u0245\u024A\u0251\u0257" +
        "\u025E\u0264\u0267\u026F\u0275\u027A\u0281\u0287\u028E\u0294\u0297\u02B2" +
        "\u02BA\u02BC\u02C3\u02C8\u02CF\u02D3\u02D5\u02E3\u02EA\u02F4\u02FB\u0301" +
        "\u0309\u0312\u031B\u0325\u0332\u0338\u033F\u0348\u034F\u0355\u035C\u0367" +
        "\u036E\u0371\u0377\u037B\u0380\u0386\u038C\u038E\u0393\u0397\u039C\u03A1" +
        "\u03A5\u03AD\u03B0\u03B3\u03BB\u03BD\u03C2\u03C6\u03CB\u03CF\u03D4\u03D6" +
        "\u03DE\u03E5\u03E7\u03EB\u03F0\u03F2\u03F9\u0404\u040B\u0413\u041E\u0425" +
        "\u042D\u0437\u043C\u0443\u044E\u0459\u045E\u0465\u046B\u0471\u0473\u0476" +
        "\u047B\u047F\u0484\u048A\u048E\u0492\u0495\u049D\u049F\u04A4\u04A8\u04AB" +
        "\u04B2\u04B4\u04B8\u04BD\u04C2\u04C6\u04CB\u04CD\u04D4\u04DA\u04E1\u04E7" +
        "\u04EB\u04F7\u04FD\u0506\u050C\u050E\u051C\u0523\u0528\u052C\u0530\u0533" +
        "\u0538\u054F\u0554\u0556\u0560\u056A\u0574\u057A\u0581\u0587\u058F\u0599" +
        "\u05A4\u05AA\u05AF\u05B6\u05BF\u05C3\u05C7\u05CA\u05D9\u05DD\u05EC\u05F0" +
        "\u05F6\u0601\u0606\u060B\u060D\u0612\u0617\u0619\u061E\u0624\u0629\u062B" +
        "\u0636\u063A\u0647\u064B\u0651\u0653\u065A\u065E\u0660\u0666\u0668\u066F" +
        "\u0674\u0677\u067D\u0680\u0684\u068B\u0690\u0696\u069B\u06A3\u06A5\u06A9" +
        "\u06B0\u06B2\u06BB\u06BD\u06C1\u06CB\u06CD\u06D1\u06D7\u06D9\u06E1\u06E5" +
        "\u06EC\u06F1\u06F7\u06FC\u0704\u0708\u070B\u0711\u0718\u071A\u0721\u072B" +
        "\u0736\u0744\u074A\u0754\u0756\u075F\u0763\u0769\u076B\u0772\u0774\u0778" +
        "\u077C\u0788\u078E\u0792\u079A\u079D\u07A3\u07A6\u07B0\u07B7\u07BE\u07C5" +
        "\u07EA\u07EC";
    matchParser._serializedATN = Utils.join([
        matchParser._serializedATNSegment0,
        matchParser._serializedATNSegment1,
        matchParser._serializedATNSegment2,
        matchParser._serializedATNSegment3,
    ], "");
    return matchParser;
})();
exports.matchParser = matchParser;
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(matchParser.EOF, 0); }
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
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_bitmark; }
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
    matches() {
        return this.getRuleContext(0, MatchesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_bitmark_; }
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
class MatchesContext extends ParserRuleContext_1.ParserRuleContext {
    match_() {
        return this.tryGetRuleContext(0, Match_Context);
    }
    match_matrix() {
        return this.tryGetRuleContext(0, Match_matrixContext);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_matches; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatches) {
            listener.enterMatches(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatches) {
            listener.exitMatches(this);
        }
    }
}
exports.MatchesContext = MatchesContext;
class Match_Context extends ParserRuleContext_1.ParserRuleContext {
    BitMatch() { return this.getToken(matchParser.BitMatch, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_; }
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
exports.Match_Context = Match_Context;
class Match_matrixContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchmatrix() { return this.getToken(matchParser.BitMatchmatrix, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pair_multivals() {
        return this.getRuleContext(0, Pair_multivalsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading_multi() {
        return this.tryGetRuleContext(0, Pair_heading_multiContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_matrix; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatch_matrix) {
            listener.enterMatch_matrix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatch_matrix) {
            listener.exitMatch_matrix(this);
        }
    }
}
exports.Match_matrixContext = Match_matrixContext;
class Match_solution_groupedContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchsolgrp() { return this.getToken(matchParser.BitMatchsolgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_solution_grouped; }
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
exports.Match_solution_groupedContext = Match_solution_groupedContext;
class Match_reverseContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchrev() { return this.getToken(matchParser.BitMatchrev, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_reverse; }
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
exports.Match_reverseContext = Match_reverseContext;
class Match_all_reverseContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchallrev() { return this.getToken(matchParser.BitMatchallrev, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_all_reverse; }
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
exports.Match_all_reverseContext = Match_all_reverseContext;
class Match_pictureContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchpic() { return this.getToken(matchParser.BitMatchpic, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pair_images() {
        return this.getRuleContext(0, Pair_imagesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_picture; }
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
exports.Match_pictureContext = Match_pictureContext;
class Match_audioContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchaudio() { return this.getToken(matchParser.BitMatchaudio, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pair_audios() {
        return this.getRuleContext(0, Pair_audiosContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_audio; }
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
exports.Match_audioContext = Match_audioContext;
class Match_allContext extends ParserRuleContext_1.ParserRuleContext {
    BitMatchall() { return this.getToken(matchParser.BitMatchall, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    pairs() {
        return this.getRuleContext(0, PairsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
    pair_heading() {
        return this.tryGetRuleContext(0, Pair_headingContext);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_match_all; }
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
exports.Match_allContext = Match_allContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    list_line() {
        return this.tryGetRuleContext(0, List_lineContext);
    }
    dclines() {
        return this.tryGetRuleContext(0, DclinesContext);
    }
    colcoltext() {
        return this.tryGetRuleContext(0, ColcoltextContext);
    }
    gap() {
        return this.tryGetRuleContext(0, GapContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    dollarans() {
        return this.tryGetRuleContext(0, DollaransContext);
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
    get ruleIndex() { return matchParser.RULE_bitElem; }
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
    get ruleIndex() { return matchParser.RULE_gap; }
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
    OPU() { return this.getToken(matchParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(matchParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(matchParser.STRING, 0); }
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
    get ruleIndex() { return matchParser.RULE_single_gap; }
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
class Ml_exampleContext extends ParserRuleContext_1.ParserRuleContext {
    AtExamplecol() { return this.getToken(matchParser.AtExamplecol, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_ml_example; }
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
class LongansContext extends ParserRuleContext_1.ParserRuleContext {
    AtLonganswer() { return this.getToken(matchParser.AtLonganswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_longans; }
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
    AtShortanswer() { return this.getToken(matchParser.AtShortanswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_shortans; }
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
    get ruleIndex() { return matchParser.RULE_resource; }
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
class Pair_headingContext extends ParserRuleContext_1.ParserRuleContext {
    key_title() {
        return this.getRuleContext(0, Key_titleContext);
    }
    value_title() {
        return this.getRuleContext(0, Value_titleContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EQ() { return this.tryGetToken(matchParser.EQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pair_heading; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_heading) {
            listener.enterPair_heading(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_heading) {
            listener.exitPair_heading(this);
        }
    }
}
exports.Pair_headingContext = Pair_headingContext;
class Pair_heading_multiContext extends ParserRuleContext_1.ParserRuleContext {
    key_title() {
        return this.getRuleContext(0, Key_titleContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    value_title_multi(i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_title_multiContext);
        }
        else {
            return this.getRuleContext(i, Value_title_multiContext);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.EQ);
        }
        else {
            return this.getToken(matchParser.EQ, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pair_heading_multi; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_heading_multi) {
            listener.enterPair_heading_multi(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_heading_multi) {
            listener.exitPair_heading_multi(this);
        }
    }
}
exports.Pair_heading_multiContext = Pair_heading_multiContext;
class Key_titleContext extends ParserRuleContext_1.ParserRuleContext {
    OPHASH() { return this.getToken(matchParser.OPHASH, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
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
    get ruleIndex() { return matchParser.RULE_key_title; }
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
    OPHASH() { return this.getToken(matchParser.OPHASH, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
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
    get ruleIndex() { return matchParser.RULE_value_title; }
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
class Value_title_multiContext extends ParserRuleContext_1.ParserRuleContext {
    OPHASH() { return this.getToken(matchParser.OPHASH, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
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
    get ruleIndex() { return matchParser.RULE_value_title_multi; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue_title_multi) {
            listener.enterValue_title_multi(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue_title_multi) {
            listener.exitValue_title_multi(this);
        }
    }
}
exports.Value_title_multiContext = Value_title_multiContext;
class PairsContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.getToken(matchParser.HSPL, 0); }
    NL() { return this.getToken(matchParser.NL, 0); }
    pqpair(i) {
        if (i === undefined) {
            return this.getRuleContexts(PqpairContext);
        }
        else {
            return this.getRuleContext(i, PqpairContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pairs; }
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
exports.PairsContext = PairsContext;
class PqpairContext extends ParserRuleContext_1.ParserRuleContext {
    pquery() {
        return this.tryGetRuleContext(0, PqueryContext);
    }
    panswer(i) {
        if (i === undefined) {
            return this.getRuleContexts(PanswerContext);
        }
        else {
            return this.getRuleContext(i, PanswerContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.EQ);
        }
        else {
            return this.getToken(matchParser.EQ, i);
        }
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    or_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Or_Context);
        }
        else {
            return this.getRuleContext(i, Or_Context);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pqpair; }
    // @Override
    enterRule(listener) {
        if (listener.enterPqpair) {
            listener.enterPqpair(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPqpair) {
            listener.exitPqpair(this);
        }
    }
}
exports.PqpairContext = PqpairContext;
class PqueryContext extends ParserRuleContext_1.ParserRuleContext {
    pquery__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Pquery__Context);
        }
        else {
            return this.getRuleContext(i, Pquery__Context);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pquery; }
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
exports.PqueryContext = PqueryContext;
class Pquery__Context extends ParserRuleContext_1.ParserRuleContext {
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
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
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    longans() {
        return this.tryGetRuleContext(0, LongansContext);
    }
    shortans() {
        return this.tryGetRuleContext(0, ShortansContext);
    }
    tense() {
        return this.tryGetRuleContext(0, TenseContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pquery__; }
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
exports.Pquery__Context = Pquery__Context;
class TenseContext extends ParserRuleContext_1.ParserRuleContext {
    TENSE() { return this.getToken(matchParser.TENSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_tense; }
    // @Override
    enterRule(listener) {
        if (listener.enterTense) {
            listener.enterTense(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTense) {
            listener.exitTense(this);
        }
    }
}
exports.TenseContext = TenseContext;
class PanswerContext extends ParserRuleContext_1.ParserRuleContext {
    panswer__() {
        return this.getRuleContext(0, Panswer__Context);
    }
    longans() {
        return this.tryGetRuleContext(0, LongansContext);
    }
    shortans() {
        return this.tryGetRuleContext(0, ShortansContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_panswer; }
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
exports.PanswerContext = PanswerContext;
class Panswer__Context extends ParserRuleContext_1.ParserRuleContext {
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
        }
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    OP(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.OP);
        }
        else {
            return this.getToken(matchParser.OP, i);
        }
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    DBLCOLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.DBLCOLON);
        }
        else {
            return this.getToken(matchParser.DBLCOLON, i);
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
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    opdoll() {
        return this.tryGetRuleContext(0, OpdollContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.DOT);
        }
        else {
            return this.getToken(matchParser.DOT, i);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_panswer__; }
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
exports.Panswer__Context = Panswer__Context;
class Pair_imagesContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.getToken(matchParser.HSPL, 0); }
    NL() { return this.getToken(matchParser.NL, 0); }
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
    get ruleIndex() { return matchParser.RULE_pair_images; }
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
exports.Pair_imagesContext = Pair_imagesContext;
class Pair_imageContext extends ParserRuleContext_1.ParserRuleContext {
    pimagebit() {
        return this.getRuleContext(0, PimagebitContext);
    }
    panswer() {
        return this.getRuleContext(0, PanswerContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EQ() { return this.tryGetToken(matchParser.EQ, 0); }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pair_image; }
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
exports.Pair_imageContext = Pair_imageContext;
class Pair_audiosContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.getToken(matchParser.HSPL, 0); }
    NL() { return this.getToken(matchParser.NL, 0); }
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
    get ruleIndex() { return matchParser.RULE_pair_audios; }
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
exports.Pair_audiosContext = Pair_audiosContext;
class Pair_audioContext extends ParserRuleContext_1.ParserRuleContext {
    paudiobit() {
        return this.getRuleContext(0, PaudiobitContext);
    }
    panswer() {
        return this.getRuleContext(0, PanswerContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EQ() { return this.tryGetToken(matchParser.EQ, 0); }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pair_audio; }
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
exports.Pair_audioContext = Pair_audioContext;
class Pair_multivalsContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.getToken(matchParser.HSPL, 0); }
    NL() { return this.getToken(matchParser.NL, 0); }
    pair_multival(i) {
        if (i === undefined) {
            return this.getRuleContexts(Pair_multivalContext);
        }
        else {
            return this.getRuleContext(i, Pair_multivalContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pair_multivals; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_multivals) {
            listener.enterPair_multivals(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_multivals) {
            listener.exitPair_multivals(this);
        }
    }
}
exports.Pair_multivalsContext = Pair_multivalsContext;
class Pair_multivalContext extends ParserRuleContext_1.ParserRuleContext {
    mpquery() {
        return this.getRuleContext(0, MpqueryContext);
    }
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    mpanswer(i) {
        if (i === undefined) {
            return this.getRuleContexts(MpanswerContext);
        }
        else {
            return this.getRuleContext(i, MpanswerContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.EQ);
        }
        else {
            return this.getToken(matchParser.EQ, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pair_multival; }
    // @Override
    enterRule(listener) {
        if (listener.enterPair_multival) {
            listener.enterPair_multival(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair_multival) {
            listener.exitPair_multival(this);
        }
    }
}
exports.Pair_multivalContext = Pair_multivalContext;
class Pairmultival_imageContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.tryGetToken(matchParser.HSPL, 0); }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.EQ);
        }
        else {
            return this.getToken(matchParser.EQ, i);
        }
    }
    mpanswer(i) {
        if (i === undefined) {
            return this.getRuleContexts(MpanswerContext);
        }
        else {
            return this.getRuleContext(i, MpanswerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pairmultival_image; }
    // @Override
    enterRule(listener) {
        if (listener.enterPairmultival_image) {
            listener.enterPairmultival_image(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPairmultival_image) {
            listener.exitPairmultival_image(this);
        }
    }
}
exports.Pairmultival_imageContext = Pairmultival_imageContext;
class Pairmultival_audioContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.HSPL);
        }
        else {
            return this.getToken(matchParser.HSPL, i);
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
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.EQ);
        }
        else {
            return this.getToken(matchParser.EQ, i);
        }
    }
    mpanswer(i) {
        if (i === undefined) {
            return this.getRuleContexts(MpanswerContext);
        }
        else {
            return this.getRuleContext(i, MpanswerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pairmultival_audio; }
    // @Override
    enterRule(listener) {
        if (listener.enterPairmultival_audio) {
            listener.enterPairmultival_audio(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPairmultival_audio) {
            listener.exitPairmultival_audio(this);
        }
    }
}
exports.Pairmultival_audioContext = Pairmultival_audioContext;
class MpqueryContext extends ParserRuleContext_1.ParserRuleContext {
    mpquery__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Mpquery__Context);
        }
        else {
            return this.getRuleContext(i, Mpquery__Context);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_mpquery; }
    // @Override
    enterRule(listener) {
        if (listener.enterMpquery) {
            listener.enterMpquery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMpquery) {
            listener.exitMpquery(this);
        }
    }
}
exports.MpqueryContext = MpqueryContext;
class Mpquery__Context extends ParserRuleContext_1.ParserRuleContext {
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    LIST_LINE() { return this.tryGetToken(matchParser.LIST_LINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_mpquery__; }
    // @Override
    enterRule(listener) {
        if (listener.enterMpquery__) {
            listener.enterMpquery__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMpquery__) {
            listener.exitMpquery__(this);
        }
    }
}
exports.Mpquery__Context = Mpquery__Context;
class MpanswerContext extends ParserRuleContext_1.ParserRuleContext {
    mpanswer__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Mpanswer__Context);
        }
        else {
            return this.getRuleContext(i, Mpanswer__Context);
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
    shortans(i) {
        if (i === undefined) {
            return this.getRuleContexts(ShortansContext);
        }
        else {
            return this.getRuleContext(i, ShortansContext);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.OR);
        }
        else {
            return this.getToken(matchParser.OR, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_mpanswer; }
    // @Override
    enterRule(listener) {
        if (listener.enterMpanswer) {
            listener.enterMpanswer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMpanswer) {
            listener.exitMpanswer(this);
        }
    }
}
exports.MpanswerContext = MpanswerContext;
class Mpanswer__Context extends ParserRuleContext_1.ParserRuleContext {
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
        }
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    OP(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.OP);
        }
        else {
            return this.getToken(matchParser.OP, i);
        }
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    DBLCOLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.DBLCOLON);
        }
        else {
            return this.getToken(matchParser.DBLCOLON, i);
        }
    }
    opdoll() {
        return this.tryGetRuleContext(0, OpdollContext);
    }
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.DOT);
        }
        else {
            return this.getToken(matchParser.DOT, i);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
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
    get ruleIndex() { return matchParser.RULE_mpanswer__; }
    // @Override
    enterRule(listener) {
        if (listener.enterMpanswer__) {
            listener.enterMpanswer__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMpanswer__) {
            listener.exitMpanswer__(this);
        }
    }
}
exports.Mpanswer__Context = Mpanswer__Context;
class PimagebitContext extends ParserRuleContext_1.ParserRuleContext {
    pimage_one() {
        return this.getRuleContext(0, Pimage_oneContext);
    }
    image_chained4match(i) {
        if (i === undefined) {
            return this.getRuleContexts(Image_chained4matchContext);
        }
        else {
            return this.getRuleContext(i, Image_chained4matchContext);
        }
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    OpAtCaption() { return this.tryGetToken(matchParser.OpAtCaption, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pimagebit; }
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
class Pimage_oneContext extends ParserRuleContext_1.ParserRuleContext {
    image_one() {
        return this.getRuleContext(0, Image_oneContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_pimage_one; }
    // @Override
    enterRule(listener) {
        if (listener.enterPimage_one) {
            listener.enterPimage_one(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPimage_one) {
            listener.exitPimage_one(this);
        }
    }
}
exports.Pimage_oneContext = Pimage_oneContext;
class PaudiobitContext extends ParserRuleContext_1.ParserRuleContext {
    op_audio_format() {
        return this.getRuleContext(0, Op_audio_formatContext);
    }
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_paudiobit; }
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
exports.PaudiobitContext = PaudiobitContext;
class Bullet_itemContext extends ParserRuleContext_1.ParserRuleContext {
    OPBUL() { return this.getToken(matchParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_bullet_item; }
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
    AtPoints() { return this.getToken(matchParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(matchParser.NUMERIC, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_atpoint; }
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
            return this.getTokens(matchParser.ColonText);
        }
        else {
            return this.getToken(matchParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.ColonJson);
        }
        else {
            return this.getToken(matchParser.ColonJson, i);
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
    get ruleIndex() { return matchParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(matchParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(matchParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(matchParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(matchParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(matchParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(matchParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(matchParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(matchParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(matchParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(matchParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(matchParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(matchParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(matchParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(matchParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(matchParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(matchParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(matchParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(matchParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(matchParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(matchParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(matchParser.ColonText, 0); }
    ColonJson() { return this.tryGetToken(matchParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(matchParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(matchParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(matchParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(matchParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(matchParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(matchParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(matchParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(matchParser.AmpVideoLink, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    Video_type() { return this.tryGetToken(matchParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(matchParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(matchParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(matchParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(matchParser.AmpDocumentLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(matchParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(matchParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(matchParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(matchParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(matchParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(matchParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(matchParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(matchParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(matchParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(matchParser.OpAmpDocument, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(matchParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(matchParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(matchParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(matchParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(matchParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    Video_type() { return this.tryGetToken(matchParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(matchParser.OpAmpVideoLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(matchParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(matchParser.OpAmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
    ArticleText() { return this.tryGetToken(matchParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_articlebit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_documentbit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_websitebit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_appbit; }
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
    get ruleIndex() { return matchParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_stillimg_one; }
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
    get ruleIndex() { return matchParser.RULE_videobit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(matchParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(matchParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_imagebit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(matchParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(matchParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(matchParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(matchParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(matchParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(matchParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(matchParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(matchParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(matchParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(matchParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(matchParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(matchParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(matchParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(matchParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(matchParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(matchParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(matchParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(matchParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(matchParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(matchParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_image_chained4match; }
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
    get ruleIndex() { return matchParser.RULE_audiobit; }
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
    COLON() { return this.getToken(matchParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(matchParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(matchParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(matchParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(matchParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(matchParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(matchParser.OpAmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    OPA() { return this.tryGetToken(matchParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(matchParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(matchParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(matchParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(matchParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(matchParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(matchParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(matchParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(matchParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(matchParser.TEL, 0); }
    PLUS() { return this.getToken(matchParser.PLUS, 0); }
    NUMERIC() { return this.getToken(matchParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_telephone; }
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
    URL() { return this.getToken(matchParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_url; }
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
    OPC() { return this.getToken(matchParser.OPC, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
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
    get ruleIndex() { return matchParser.RULE_item; }
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
    OPC() { return this.getToken(matchParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
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
    get ruleIndex() { return matchParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(matchParser.OPRANGLES, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(matchParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(matchParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(matchParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(matchParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(matchParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(matchParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_example; }
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
    BracEnclose() { return this.getToken(matchParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
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
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(matchParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(matchParser.AtReference, 0); }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
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
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.URL);
        }
        else {
            return this.getToken(matchParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(matchParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_reference; }
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
    AtProgress() { return this.getToken(matchParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_progress; }
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
    AtDate() { return this.getToken(matchParser.AtDate, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
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
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(matchParser.AtDate, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
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
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(matchParser.OPB, 0); }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
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
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(matchParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_instruction; }
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
    OPQ() { return this.getToken(matchParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.CL);
        }
        else {
            return this.getToken(matchParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_hint; }
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
    OPHASH() { return this.getToken(matchParser.OPHASH, 0); }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
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
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(matchParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(matchParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(matchParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(matchParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(matchParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(matchParser.NUMERIC, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(matchParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(matchParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_isinfoonly; }
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
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(matchParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(matchParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(matchParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(matchParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(matchParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
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
            return this.getTokens(matchParser.COLON);
        }
        else {
            return this.getToken(matchParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(matchParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(matchParser.OPDANGLE, 0); }
    CL() { return this.getToken(matchParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_anchor; }
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
    DBLCOLON() { return this.getToken(matchParser.DBLCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_dcolon; }
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
class ColcoltextContext extends ParserRuleContext_1.ParserRuleContext {
    dcolon(i) {
        if (i === undefined) {
            return this.getRuleContexts(DcolonContext);
        }
        else {
            return this.getRuleContext(i, DcolonContext);
        }
    }
    STRING() { return this.getToken(matchParser.STRING, 0); }
    DBLCOLON(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.DBLCOLON);
        }
        else {
            return this.getToken(matchParser.DBLCOLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_colcoltext; }
    // @Override
    enterRule(listener) {
        if (listener.enterColcoltext) {
            listener.enterColcoltext(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitColcoltext) {
            listener.exitColcoltext(this);
        }
    }
}
exports.ColcoltextContext = ColcoltextContext;
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
            return this.getTokens(matchParser.NL);
        }
        else {
            return this.getToken(matchParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_lines; }
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
class List_lineContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.getToken(matchParser.LIST_LINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_list_line; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_line) {
            listener.enterList_line(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_line) {
            listener.exitList_line(this);
        }
    }
}
exports.List_lineContext = List_lineContext;
class S_and_wContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(matchParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(matchParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.S);
        }
        else {
            return this.getToken(matchParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(matchParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(matchParser.CL, 0); }
    COLON() { return this.tryGetToken(matchParser.COLON, 0); }
    AMP() { return this.tryGetToken(matchParser.AMP, 0); }
    DBLCOLON() { return this.tryGetToken(matchParser.DBLCOLON, 0); }
    LIST_LINE() { return this.tryGetToken(matchParser.LIST_LINE, 0); }
    colcoltext() {
        return this.tryGetRuleContext(0, ColcoltextContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_s_and_w; }
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
    DCANY() { return this.getToken(matchParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_dclines; }
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
class OpdollContext extends ParserRuleContext_1.ParserRuleContext {
    OPDOLL() { return this.getToken(matchParser.OPDOLL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opdoll; }
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
exports.OpdollContext = OpdollContext;
class OpuContext extends ParserRuleContext_1.ParserRuleContext {
    OPU() { return this.getToken(matchParser.OPU, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opu; }
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
    OPB() { return this.getToken(matchParser.OPB, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opb; }
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
    OPQ() { return this.getToken(matchParser.OPQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opq; }
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
    OPA() { return this.getToken(matchParser.OPA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opa; }
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
    OPP() { return this.getToken(matchParser.OPP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opp; }
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
    OPM() { return this.getToken(matchParser.OPM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opm; }
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
    OPS() { return this.getToken(matchParser.OPS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_ops; }
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
    OPR() { return this.getToken(matchParser.OPR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opr; }
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
    OPC() { return this.getToken(matchParser.OPC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_opc; }
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
class ClnspContext extends ParserRuleContext_1.ParserRuleContext {
    CL() { return this.getToken(matchParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_clnsp; }
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
class Or_Context extends ParserRuleContext_1.ParserRuleContext {
    OR() { return this.getToken(matchParser.OR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_or_; }
    // @Override
    enterRule(listener) {
        if (listener.enterOr_) {
            listener.enterOr_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOr_) {
            listener.exitOr_(this);
        }
    }
}
exports.Or_Context = Or_Context;
class WordsContext extends ParserRuleContext_1.ParserRuleContext {
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.SENTENCE);
        }
        else {
            return this.getToken(matchParser.SENTENCE, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.BARSTRING);
        }
        else {
            return this.getToken(matchParser.BARSTRING, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.AMP);
        }
        else {
            return this.getToken(matchParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.Greater);
        }
        else {
            return this.getToken(matchParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.Less);
        }
        else {
            return this.getToken(matchParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.RightArrow);
        }
        else {
            return this.getToken(matchParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(matchParser.RightAngle);
        }
        else {
            return this.getToken(matchParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_words; }
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
    S() { return this.getToken(matchParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return matchParser.RULE_sp; }
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
