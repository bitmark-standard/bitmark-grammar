"use strict";
// Generated from ./Chat/chatParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.Bracket_escapedContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.DcolonContext = exports.Single_gapContext = exports.GapContext = exports.ResourceContext = exports.BitElemContext = exports.Sspl_chat_partnerContext = exports.Chat_partnerContext = exports.Chat_initiatorContext = exports.Name_textContext = exports.PartnerContext = exports.InitiatorContext = exports.ConversationContext = exports.ChatContext = exports.Bitmark_Context = exports.BitmarkContext = exports.chatParser = void 0;
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
let chatParser = /** @class */ (() => {
    class chatParser extends Parser_1.Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator_1.ParserATNSimulator(chatParser._ATN, this);
        }
        // @Override
        // @NotNull
        get vocabulary() {
            return chatParser.VOCABULARY;
        }
        // tslint:enable:no-trailing-whitespace
        // @Override
        get grammarFileName() { return "chatParser.g4"; }
        // @Override
        get ruleNames() { return chatParser.ruleNames; }
        // @Override
        get serializedATN() { return chatParser._serializedATN; }
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, chatParser.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 160;
                                this.bitmark_();
                                this.state = 170;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 164;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === chatParser.S) {
                                                    {
                                                        {
                                                            this.state = 161;
                                                            this.match(chatParser.S);
                                                        }
                                                    }
                                                    this.state = 166;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 167;
                                                this.match(chatParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 172;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 175;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === chatParser.BitChat || _la === chatParser.BitConv);
                    this.state = 180;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.NL) {
                        {
                            {
                                this.state = 177;
                                this.match(chatParser.NL);
                            }
                        }
                        this.state = 182;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 183;
                    this.match(chatParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 2, chatParser.RULE_bitmark_);
            try {
                this.state = 187;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.BitChat:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 185;
                            this.chat();
                        }
                        break;
                    case chatParser.BitConv:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 186;
                            this.conversation();
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
        chat() {
            let _localctx = new ChatContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, chatParser.RULE_chat);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 189;
                    this.match(chatParser.BitChat);
                    this.state = 190;
                    this.format();
                    this.state = 191;
                    this.match(chatParser.CL);
                    this.state = 195;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.NL) {
                        {
                            {
                                this.state = 192;
                                this.match(chatParser.NL);
                            }
                        }
                        this.state = 197;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 207;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (chatParser.OpAtCopyright - 70)) | (1 << (chatParser.OpAmpAudio - 70)) | (1 << (chatParser.OpAmpImage - 70)) | (1 << (chatParser.OpAmpImageZoom - 70)) | (1 << (chatParser.OpAmpImageWAudio - 70)) | (1 << (chatParser.OpAmpVideo - 70)) | (1 << (chatParser.OpAmpArticle - 70)) | (1 << (chatParser.OpAmpDocument - 70)) | (1 << (chatParser.OpAmpApp - 70)) | (1 << (chatParser.OpAmpWebsite - 70)) | (1 << (chatParser.OpAmpStillImageFilm - 70)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (chatParser.OpAmpAudioLink - 108)) | (1 << (chatParser.OpAmpImageLink - 108)) | (1 << (chatParser.OpAmpVideoLink - 108)) | (1 << (chatParser.OpAmpArticleLink - 108)) | (1 << (chatParser.OpAmpDocumentLink - 108)) | (1 << (chatParser.OpAmpAppLink - 108)) | (1 << (chatParser.OpAmpWebsiteLink - 108)) | (1 << (chatParser.OpAmpStillImageFilmLink - 108)) | (1 << (chatParser.OpAmpVideoEmbed - 108)) | (1 << (chatParser.OpAmpAudioEmbed - 108)) | (1 << (chatParser.OpAmpDocumentEmbed - 108)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 108)))) !== 0) || _la === chatParser.URL || _la === chatParser.LIST_LINE) {
                        {
                            {
                                this.state = 198;
                                this.bitElem();
                                this.state = 202;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === chatParser.NL) {
                                    {
                                        {
                                            this.state = 199;
                                            this.match(chatParser.NL);
                                        }
                                    }
                                    this.state = 204;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 210;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 211;
                    this.initiator();
                    this.state = 212;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 213;
                    this.partner();
                    this.state = 222;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 214;
                                        _la = this._input.LA(1);
                                        if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 215;
                                        this.chat_initiator();
                                        this.state = 219;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
                                            {
                                                {
                                                    this.state = 216;
                                                    this.sspl_chat_partner();
                                                }
                                            }
                                            this.state = 221;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 224;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 226;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 227;
                                    this.match(chatParser.NL);
                                }
                            }
                        }
                        this.state = 232;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                    }
                    this.state = 246;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                        case 1:
                            {
                                this.state = 233;
                                this.resource();
                                this.state = 243;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 237;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === chatParser.NL) {
                                                    {
                                                        {
                                                            this.state = 234;
                                                            this.match(chatParser.NL);
                                                        }
                                                    }
                                                    this.state = 239;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 240;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 245;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
        conversation() {
            let _localctx = new ConversationContext(this._ctx, this.state);
            this.enterRule(_localctx, 6, chatParser.RULE_conversation);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 248;
                    this.match(chatParser.BitConv);
                    this.state = 249;
                    this.format();
                    this.state = 250;
                    this.match(chatParser.CL);
                    this.state = 254;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.NL) {
                        {
                            {
                                this.state = 251;
                                this.match(chatParser.NL);
                            }
                        }
                        this.state = 256;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 266;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (chatParser.OpAtCopyright - 70)) | (1 << (chatParser.OpAmpAudio - 70)) | (1 << (chatParser.OpAmpImage - 70)) | (1 << (chatParser.OpAmpImageZoom - 70)) | (1 << (chatParser.OpAmpImageWAudio - 70)) | (1 << (chatParser.OpAmpVideo - 70)) | (1 << (chatParser.OpAmpArticle - 70)) | (1 << (chatParser.OpAmpDocument - 70)) | (1 << (chatParser.OpAmpApp - 70)) | (1 << (chatParser.OpAmpWebsite - 70)) | (1 << (chatParser.OpAmpStillImageFilm - 70)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (chatParser.OpAmpAudioLink - 108)) | (1 << (chatParser.OpAmpImageLink - 108)) | (1 << (chatParser.OpAmpVideoLink - 108)) | (1 << (chatParser.OpAmpArticleLink - 108)) | (1 << (chatParser.OpAmpDocumentLink - 108)) | (1 << (chatParser.OpAmpAppLink - 108)) | (1 << (chatParser.OpAmpWebsiteLink - 108)) | (1 << (chatParser.OpAmpStillImageFilmLink - 108)) | (1 << (chatParser.OpAmpVideoEmbed - 108)) | (1 << (chatParser.OpAmpAudioEmbed - 108)) | (1 << (chatParser.OpAmpDocumentEmbed - 108)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 108)))) !== 0) || _la === chatParser.URL || _la === chatParser.LIST_LINE) {
                        {
                            {
                                this.state = 257;
                                this.bitElem();
                                this.state = 261;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === chatParser.NL) {
                                    {
                                        {
                                            this.state = 258;
                                            this.match(chatParser.NL);
                                        }
                                    }
                                    this.state = 263;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 268;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 269;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 270;
                    this.initiator();
                    this.state = 271;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 272;
                    this.partner();
                    this.state = 281;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 273;
                                        _la = this._input.LA(1);
                                        if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 274;
                                        this.chat_initiator();
                                        this.state = 278;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
                                            {
                                                {
                                                    this.state = 275;
                                                    this.sspl_chat_partner();
                                                }
                                            }
                                            this.state = 280;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 283;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 285;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.HSPL || _la === chatParser.HSPL2)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 289;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 286;
                                    this.match(chatParser.NL);
                                }
                            }
                        }
                        this.state = 291;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                        case 1:
                            {
                                this.state = 292;
                                this.resource();
                                this.state = 302;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 296;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === chatParser.NL) {
                                                    {
                                                        {
                                                            this.state = 293;
                                                            this.match(chatParser.NL);
                                                        }
                                                    }
                                                    this.state = 298;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 299;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 304;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
        initiator() {
            let _localctx = new InitiatorContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, chatParser.RULE_initiator);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 307;
                    this.name_text();
                    this.state = 310;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.NL) {
                        {
                            this.state = 308;
                            this.match(chatParser.NL);
                            this.state = 309;
                            this.imagebit();
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
        partner() {
            let _localctx = new PartnerContext(this._ctx, this.state);
            this.enterRule(_localctx, 10, chatParser.RULE_partner);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 312;
                    this.name_text();
                    this.state = 315;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.NL) {
                        {
                            this.state = 313;
                            this.match(chatParser.NL);
                            this.state = 314;
                            this.imagebit();
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
        name_text() {
            let _localctx = new Name_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, chatParser.RULE_name_text);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 317;
                    this.match(chatParser.OPHASH);
                    this.state = 318;
                    this.s_and_w();
                    this.state = 319;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 14, chatParser.RULE_chat_initiator);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 321;
                    this.s_and_w();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 16, chatParser.RULE_chat_partner);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 323;
                    this.s_and_w();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        sspl_chat_partner() {
            let _localctx = new Sspl_chat_partnerContext(this._ctx, this.state);
            this.enterRule(_localctx, 18, chatParser.RULE_sspl_chat_partner);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 325;
                    this.sspl();
                    this.state = 326;
                    this.chat_partner();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 20, chatParser.RULE_bitElem);
            try {
                this.state = 350;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 328;
                            this.match(chatParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 329;
                            this.gap();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 330;
                            this.atdef();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 331;
                            this.reference();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 332;
                            this.item();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 333;
                            this.title();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 334;
                            this.instruction();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 335;
                            this.hint();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 336;
                            this.s_and_w();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 337;
                            this.example();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 338;
                            this.bool_label();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 339;
                            this.imagebit();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 340;
                            this.audiobit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 341;
                            this.videobit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 342;
                            this.articlebit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 343;
                            this.documentbit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 344;
                            this.appbit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 345;
                            this.websitebit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 346;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 347;
                            this.angleref();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 348;
                            this.anchor();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 349;
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
            this.enterRule(_localctx, 22, chatParser.RULE_resource);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 352;
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
        gap() {
            let _localctx = new GapContext(this._ctx, this.state);
            this.enterRule(_localctx, 24, chatParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 354;
                    this.single_gap();
                    this.state = 362;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 360;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case chatParser.OPU:
                                        {
                                            this.state = 355;
                                            this.single_gap();
                                        }
                                        break;
                                    case chatParser.OPB:
                                        {
                                            this.state = 356;
                                            this.instruction();
                                        }
                                        break;
                                    case chatParser.OPQ:
                                        {
                                            this.state = 357;
                                            this.hint();
                                        }
                                        break;
                                    case chatParser.OPC:
                                        {
                                            this.state = 358;
                                            this.item();
                                        }
                                        break;
                                    case chatParser.AtExampleWithStr:
                                    case chatParser.AtExamplecol:
                                    case chatParser.AtExamplecl:
                                        {
                                            this.state = 359;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 364;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 26, chatParser.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 365;
                    this.match(chatParser.OPU);
                    this.state = 369;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                        case 1:
                            {
                                this.state = 366;
                                this.match(chatParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 367;
                                this.match(chatParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 374;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                        {
                            {
                                this.state = 371;
                                this.s_and_w();
                            }
                        }
                        this.state = 376;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 377;
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
        dcolon() {
            let _localctx = new DcolonContext(this._ctx, this.state);
            this.enterRule(_localctx, 28, chatParser.RULE_dcolon);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 379;
                    this.match(chatParser.DBLCOLON);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 30, chatParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 381;
                    this.match(chatParser.AtPoints);
                    this.state = 382;
                    this.match(chatParser.NUMERIC);
                    this.state = 383;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 32, chatParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 388;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 385;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 390;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    }
                    this.state = 396;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (chatParser.AmpAudio - 77)) | (1 << (chatParser.AmpImage - 77)) | (1 << (chatParser.AmpImageZoom - 77)) | (1 << (chatParser.AmpImageWAudio - 77)) | (1 << (chatParser.AmpVideo - 77)) | (1 << (chatParser.AmpArticle - 77)) | (1 << (chatParser.AmpDocument - 77)) | (1 << (chatParser.AmpApp - 77)) | (1 << (chatParser.AmpWebsite - 77)) | (1 << (chatParser.AmpStillImageFilm - 77)) | (1 << (chatParser.AmpPdf - 77)) | (1 << (chatParser.AmpAudioLink - 77)) | (1 << (chatParser.AmpImageLink - 77)) | (1 << (chatParser.AmpVideoLink - 77)) | (1 << (chatParser.AmpArticleLink - 77)) | (1 << (chatParser.AmpDocumentLink - 77)) | (1 << (chatParser.AmpAppLink - 77)) | (1 << (chatParser.AmpWebsiteLink - 77)) | (1 << (chatParser.AmpStillImageFilmLink - 77)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (chatParser.AmpVideoEmbed - 117)) | (1 << (chatParser.AmpDocumentEmbed - 117)) | (1 << (chatParser.AmpStillImageFilmEmbed - 117)) | (1 << (chatParser.ColonText - 117)) | (1 << (chatParser.ColonJson - 117)))) !== 0)) {
                        {
                            this.state = 394;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.ColonText:
                                    {
                                        this.state = 391;
                                        this.match(chatParser.ColonText);
                                    }
                                    break;
                                case chatParser.ColonJson:
                                    {
                                        this.state = 392;
                                        this.match(chatParser.ColonJson);
                                    }
                                    break;
                                case chatParser.AmpAudio:
                                case chatParser.AmpImage:
                                case chatParser.AmpImageZoom:
                                case chatParser.AmpImageWAudio:
                                case chatParser.AmpVideo:
                                case chatParser.AmpArticle:
                                case chatParser.AmpDocument:
                                case chatParser.AmpApp:
                                case chatParser.AmpWebsite:
                                case chatParser.AmpStillImageFilm:
                                case chatParser.AmpPdf:
                                case chatParser.AmpAudioLink:
                                case chatParser.AmpImageLink:
                                case chatParser.AmpVideoLink:
                                case chatParser.AmpArticleLink:
                                case chatParser.AmpDocumentLink:
                                case chatParser.AmpAppLink:
                                case chatParser.AmpWebsiteLink:
                                case chatParser.AmpStillImageFilmLink:
                                case chatParser.AmpVideoEmbed:
                                case chatParser.AmpDocumentEmbed:
                                case chatParser.AmpStillImageFilmEmbed:
                                    {
                                        this.state = 393;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 398;
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
            this.enterRule(_localctx, 34, chatParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 399;
                    _la = this._input.LA(1);
                    if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (chatParser.AmpArticle - 82)) | (1 << (chatParser.AmpDocument - 82)) | (1 << (chatParser.AmpWebsite - 82)) | (1 << (chatParser.AmpStillImageFilm - 82)) | (1 << (chatParser.AmpAudioLink - 82)) | (1 << (chatParser.AmpImageLink - 82)) | (1 << (chatParser.AmpVideoLink - 82)) | (1 << (chatParser.AmpArticleLink - 82)) | (1 << (chatParser.AmpDocumentLink - 82)) | (1 << (chatParser.AmpAppLink - 82)) | (1 << (chatParser.AmpWebsiteLink - 82)) | (1 << (chatParser.AmpStillImageFilmLink - 82)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (chatParser.AmpVideoEmbed - 117)) | (1 << (chatParser.AmpAudioEmbed - 117)) | (1 << (chatParser.AmpDocumentEmbed - 117)) | (1 << (chatParser.AmpStillImageFilmEmbed - 117)) | (1 << (chatParser.BitmarkMinus - 117)) | (1 << (chatParser.BitmarkPlus - 117)) | (1 << (chatParser.ColonJson - 117)) | (1 << (chatParser.Prosemirror - 117)) | (1 << (chatParser.Placeholder - 117)))) !== 0))) {
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
            this.enterRule(_localctx, 36, chatParser.RULE_resource_format_extra);
            try {
                this.state = 410;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AmpImage:
                    case chatParser.AmpImageZoom:
                    case chatParser.AmpImageWAudio:
                    case chatParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 401;
                            this.image_format();
                        }
                        break;
                    case chatParser.AmpAudio:
                    case chatParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 402;
                            this.audio_format();
                        }
                        break;
                    case chatParser.AmpVideo:
                    case chatParser.AmpVideoLink:
                    case chatParser.AmpVideoEmbed:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 403;
                            this.video_format();
                        }
                        break;
                    case chatParser.AmpArticle:
                    case chatParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 404;
                            this.article_format();
                        }
                        break;
                    case chatParser.AmpDocument:
                    case chatParser.AmpDocumentLink:
                    case chatParser.AmpDocumentEmbed:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 405;
                            this.document_format();
                        }
                        break;
                    case chatParser.AmpApp:
                    case chatParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 406;
                            this.app_format();
                        }
                        break;
                    case chatParser.AmpWebsite:
                    case chatParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 407;
                            this.website_format();
                        }
                        break;
                    case chatParser.AmpStillImageFilm:
                    case chatParser.AmpStillImageFilmLink:
                    case chatParser.AmpStillImageFilmEmbed:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 408;
                            this.stillimagefilm_format();
                        }
                        break;
                    case chatParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 409;
                            this.match(chatParser.AmpPdf);
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
            this.enterRule(_localctx, 38, chatParser.RULE_format2);
            try {
                this.state = 417;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.BitmarkMinus:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 412;
                            this.match(chatParser.BitmarkMinus);
                        }
                        break;
                    case chatParser.BitmarkPlus:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 413;
                            this.match(chatParser.BitmarkPlus);
                        }
                        break;
                    case chatParser.ColonText:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 414;
                            this.match(chatParser.ColonText);
                        }
                        break;
                    case chatParser.ColonJson:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 415;
                            this.match(chatParser.ColonJson);
                        }
                        break;
                    case chatParser.EOF:
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
            this.enterRule(_localctx, 40, chatParser.RULE_image_format);
            let _la;
            try {
                this.state = 433;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 419;
                            this.match(chatParser.AmpImage);
                            this.state = 422;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.Image_type:
                                    {
                                        {
                                            this.state = 420;
                                            this.match(chatParser.Image_type);
                                        }
                                    }
                                    break;
                                case chatParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 421;
                                            this.match(chatParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case chatParser.CL:
                                case chatParser.AmpAudio:
                                case chatParser.AmpImage:
                                case chatParser.AmpImageZoom:
                                case chatParser.AmpImageWAudio:
                                case chatParser.AmpVideo:
                                case chatParser.AmpArticle:
                                case chatParser.AmpDocument:
                                case chatParser.AmpApp:
                                case chatParser.AmpWebsite:
                                case chatParser.AmpStillImageFilm:
                                case chatParser.AmpPdf:
                                case chatParser.AmpAudioLink:
                                case chatParser.AmpImageLink:
                                case chatParser.AmpVideoLink:
                                case chatParser.AmpArticleLink:
                                case chatParser.AmpDocumentLink:
                                case chatParser.AmpAppLink:
                                case chatParser.AmpWebsiteLink:
                                case chatParser.AmpStillImageFilmLink:
                                case chatParser.AmpVideoEmbed:
                                case chatParser.AmpDocumentEmbed:
                                case chatParser.AmpStillImageFilmEmbed:
                                case chatParser.ColonText:
                                case chatParser.ColonJson:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case chatParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 424;
                            this.match(chatParser.AmpImageLink);
                            this.state = 426;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 425;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 428;
                            this.match(chatParser.AmpImageZoom);
                            this.state = 430;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 429;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 432;
                            this.match(chatParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 42, chatParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 435;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpVideo || _la === chatParser.AmpVideoLink || _la === chatParser.AmpVideoEmbed)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 438;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.COLON) {
                        {
                            this.state = 436;
                            this.match(chatParser.COLON);
                            this.state = 437;
                            this.match(chatParser.Video_type);
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
            this.enterRule(_localctx, 44, chatParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 440;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpArticle || _la === chatParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 46, chatParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 442;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpDocument || _la === chatParser.AmpDocumentLink || _la === chatParser.AmpDocumentEmbed)) {
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
            this.enterRule(_localctx, 48, chatParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 444;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpApp || _la === chatParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 50, chatParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 446;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpWebsite || _la === chatParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 52, chatParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 448;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpStillImageFilm || _la === chatParser.AmpStillImageFilmLink || _la === chatParser.AmpStillImageFilmEmbed)) {
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
            this.enterRule(_localctx, 54, chatParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 450;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.OpAmpArticle || _la === chatParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 56, chatParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 452;
                    _la = this._input.LA(1);
                    if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (chatParser.OpAmpDocument - 95)) | (1 << (chatParser.OpAmpDocumentLink - 95)) | (1 << (chatParser.OpAmpDocumentEmbed - 95)))) !== 0))) {
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
            this.enterRule(_localctx, 58, chatParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 454;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.OpAmpApp || _la === chatParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 60, chatParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 456;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.OpAmpWebsite || _la === chatParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 62, chatParser.RULE_op_video_format);
            try {
                this.state = 473;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 458;
                            this.match(chatParser.OpAmpVideo);
                            this.state = 461;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 459;
                                        this.match(chatParser.COLON);
                                        this.state = 460;
                                        this.match(chatParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 463;
                            this.match(chatParser.OpAmpVideoLink);
                            this.state = 466;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 464;
                                        this.match(chatParser.COLON);
                                        this.state = 465;
                                        this.match(chatParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpVideoEmbed:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 468;
                            this.match(chatParser.OpAmpVideoEmbed);
                            this.state = 471;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 469;
                                        this.match(chatParser.COLON);
                                        this.state = 470;
                                        this.match(chatParser.Video_type);
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
            this.enterRule(_localctx, 64, chatParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 475;
                    _la = this._input.LA(1);
                    if (!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpStillImageFilm - 98)) | (1 << (chatParser.OpAmpStillImageFilmLink - 98)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 98)))) !== 0))) {
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
            this.enterRule(_localctx, 66, chatParser.RULE_articlebit);
            try {
                this.state = 483;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpArticle:
                    case chatParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 477;
                            this.op_article_format();
                            this.state = 478;
                            this.match(chatParser.COLON);
                            this.state = 479;
                            this.url();
                            this.state = 480;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 482;
                            this.match(chatParser.ArticleText);
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
            this.enterRule(_localctx, 68, chatParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 485;
                    this.op_document_format();
                    this.state = 486;
                    this.match(chatParser.COLON);
                    this.state = 487;
                    this.url();
                    this.state = 488;
                    this.match(chatParser.CL);
                    this.state = 493;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.OPATALT) {
                        {
                            this.state = 489;
                            this.match(chatParser.OPATALT);
                            this.state = 490;
                            this.words();
                            this.state = 491;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 70, chatParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 495;
                    this.op_website_format();
                    this.state = 496;
                    this.match(chatParser.COLON);
                    this.state = 497;
                    this.url();
                    this.state = 498;
                    this.match(chatParser.CL);
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.OPATALT) {
                        {
                            this.state = 499;
                            this.match(chatParser.OPATALT);
                            this.state = 500;
                            this.words();
                            this.state = 501;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 72, chatParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 505;
                    this.op_app_format();
                    this.state = 506;
                    this.match(chatParser.COLON);
                    this.state = 509;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case chatParser.URL:
                            {
                                this.state = 507;
                                this.url();
                            }
                            break;
                        case chatParser.TEL:
                            {
                                this.state = 508;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 511;
                    this.match(chatParser.CL);
                    this.state = 516;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.OPATALT) {
                        {
                            this.state = 512;
                            this.match(chatParser.OPATALT);
                            this.state = 513;
                            this.words();
                            this.state = 514;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 74, chatParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 518;
                    this.stillimg_one();
                    this.state = 522;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 519;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 524;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 76, chatParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 525;
                    this.op_stillimagefilm_format();
                    this.state = 526;
                    this.match(chatParser.COLON);
                    this.state = 530;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.S) {
                        {
                            {
                                this.state = 527;
                                this.match(chatParser.S);
                            }
                        }
                        this.state = 532;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 533;
                    this.url();
                    this.state = 534;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 78, chatParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 536;
                    this.video_one();
                    this.state = 540;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 537;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 542;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 80, chatParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 543;
                    this.op_video_format();
                    this.state = 544;
                    this.match(chatParser.COLON);
                    this.state = 545;
                    this.url();
                    this.state = 546;
                    this.match(chatParser.CL);
                    this.state = 551;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                        case 1:
                            {
                                this.state = 547;
                                this.match(chatParser.OPATALT);
                                this.state = 548;
                                this.words();
                                this.state = 549;
                                this.match(chatParser.CL);
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
            this.enterRule(_localctx, 82, chatParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 553;
                    this.image_one();
                    this.state = 557;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 554;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 559;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                    }
                    this.state = 562;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                        case 1:
                            {
                                this.state = 560;
                                this.match(chatParser.NL);
                                this.state = 561;
                                this.match(chatParser.ShowInIndex);
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
            this.enterRule(_localctx, 84, chatParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 564;
                    this.op_image_format();
                    this.state = 565;
                    this.match(chatParser.COLON);
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.S) {
                        {
                            {
                                this.state = 566;
                                this.match(chatParser.S);
                            }
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 572;
                    this.url();
                    this.state = 573;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 86, chatParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 589;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 575;
                            this.match(chatParser.OpAmpImage);
                            this.state = 578;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.Image_type:
                                    {
                                        {
                                            this.state = 576;
                                            this.match(chatParser.Image_type);
                                        }
                                    }
                                    break;
                                case chatParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 577;
                                            this.match(chatParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case chatParser.COLON:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 580;
                            this.match(chatParser.OpAmpImageLink);
                            this.state = 582;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 581;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 584;
                            this.match(chatParser.OpAmpImageZoom);
                            this.state = 586;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 585;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 588;
                            this.match(chatParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 88, chatParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 608;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 591;
                            this.match(chatParser.AtSrc);
                            this.state = 592;
                            this.match(chatParser.COLON);
                            this.state = 593;
                            this.url();
                            this.state = 594;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtWidth:
                    case chatParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 596;
                            _la = this._input.LA(1);
                            if (!(_la === chatParser.AtWidth || _la === chatParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 597;
                            this.match(chatParser.COLON);
                            this.state = 598;
                            this.match(chatParser.NUMERIC);
                            this.state = 599;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPATALT:
                    case chatParser.OpAtCaption:
                    case chatParser.OpAtLicense:
                    case chatParser.OpAtCopyright:
                    case chatParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 600;
                            _la = this._input.LA(1);
                            if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 604;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 601;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 606;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                            }
                            this.state = 607;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 90, chatParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 627;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 610;
                            this.match(chatParser.AtSrc);
                            this.state = 611;
                            this.match(chatParser.COLON);
                            this.state = 612;
                            this.url();
                            this.state = 613;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtWidth:
                    case chatParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 615;
                            _la = this._input.LA(1);
                            if (!(_la === chatParser.AtWidth || _la === chatParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 616;
                            this.match(chatParser.COLON);
                            this.state = 617;
                            this.match(chatParser.NUMERIC);
                            this.state = 618;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPATALT:
                    case chatParser.OpAtCaption:
                    case chatParser.OpAtLicense:
                    case chatParser.OpAtCopyright:
                    case chatParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 619;
                            _la = this._input.LA(1);
                            if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 623;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 620;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 625;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                            }
                            this.state = 626;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 92, chatParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 629;
                    this.audio_one();
                    this.state = 633;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 630;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 635;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 94, chatParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 636;
                    this.op_audio_format();
                    this.state = 637;
                    this.match(chatParser.COLON);
                    this.state = 638;
                    this.url();
                    this.state = 639;
                    this.match(chatParser.CL);
                    this.state = 644;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                        case 1:
                            {
                                this.state = 640;
                                this.match(chatParser.OPATALT);
                                this.state = 641;
                                this.words();
                                this.state = 642;
                                this.match(chatParser.CL);
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
            this.enterRule(_localctx, 96, chatParser.RULE_audio_format);
            let _la;
            try {
                this.state = 656;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 646;
                            this.match(chatParser.AmpAudio);
                            this.state = 649;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.COLON) {
                                {
                                    this.state = 647;
                                    this.match(chatParser.COLON);
                                    this.state = 648;
                                    this.match(chatParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case chatParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 651;
                            this.match(chatParser.AmpAudioLink);
                            this.state = 654;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.COLON) {
                                {
                                    this.state = 652;
                                    this.match(chatParser.COLON);
                                    this.state = 653;
                                    this.match(chatParser.Audio_type);
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
            this.enterRule(_localctx, 98, chatParser.RULE_op_audio_format);
            try {
                this.state = 673;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 658;
                            this.match(chatParser.OpAmpAudio);
                            this.state = 661;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 659;
                                        this.match(chatParser.COLON);
                                        this.state = 660;
                                        this.match(chatParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 663;
                            this.match(chatParser.OpAmpAudioLink);
                            this.state = 666;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 664;
                                        this.match(chatParser.COLON);
                                        this.state = 665;
                                        this.match(chatParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpAudioEmbed:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 668;
                            this.match(chatParser.OpAmpAudioEmbed);
                            this.state = 671;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 669;
                                        this.match(chatParser.COLON);
                                        this.state = 670;
                                        this.match(chatParser.Audio_type);
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
            this.enterRule(_localctx, 100, chatParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 706;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OPA:
                    case chatParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 678;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.OPA:
                                    {
                                        this.state = 675;
                                        this.match(chatParser.OPA);
                                        this.state = 676;
                                        this.s_and_w();
                                    }
                                    break;
                                case chatParser.AtSrc:
                                    {
                                        this.state = 677;
                                        this.match(chatParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 680;
                            this.match(chatParser.COLON);
                            this.state = 684;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 681;
                                            this.match(chatParser.S);
                                        }
                                    }
                                }
                                this.state = 686;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            }
                            this.state = 689;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 689;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case chatParser.S:
                                        case chatParser.OPS:
                                        case chatParser.COLON:
                                        case chatParser.AMP:
                                        case chatParser.DBLCOLON:
                                        case chatParser.Greater:
                                        case chatParser.Less:
                                        case chatParser.RightAngle:
                                        case chatParser.RightArrow:
                                        case chatParser.DBLEQ:
                                        case chatParser.NUMERIC:
                                        case chatParser.STRING:
                                        case chatParser.SENTENCE:
                                        case chatParser.BARSTRING:
                                        case chatParser.URL:
                                            {
                                                this.state = 687;
                                                this.s_and_w();
                                            }
                                            break;
                                        case chatParser.NL:
                                            {
                                                this.state = 688;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 691;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 693;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtWidth:
                    case chatParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 694;
                            _la = this._input.LA(1);
                            if (!(_la === chatParser.AtWidth || _la === chatParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 695;
                            this.match(chatParser.COLON);
                            this.state = 696;
                            this.match(chatParser.NUMERIC);
                            this.state = 697;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPATALT:
                    case chatParser.OpAtCaption:
                    case chatParser.OpAtLicense:
                    case chatParser.OpAtCopyright:
                    case chatParser.OpAtSearch:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 698;
                            _la = this._input.LA(1);
                            if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.OPATALT - 65)) | (1 << (chatParser.OpAtCaption - 65)) | (1 << (chatParser.OpAtLicense - 65)) | (1 << (chatParser.OpAtCopyright - 65)) | (1 << (chatParser.OpAtSearch - 65)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 702;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 699;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 704;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                            }
                            this.state = 705;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 102, chatParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 708;
                    this.match(chatParser.TEL);
                    this.state = 709;
                    this.match(chatParser.PLUS);
                    this.state = 710;
                    this.match(chatParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 104, chatParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 712;
                    this.match(chatParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 106, chatParser.RULE_item);
            let _la;
            try {
                this.state = 744;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 714;
                            this.match(chatParser.OPC);
                            this.state = 715;
                            this.match(chatParser.CL);
                            this.state = 723;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 719;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.S) {
                                            {
                                                {
                                                    this.state = 716;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 721;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 722;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 725;
                            this.match(chatParser.OPC);
                            this.state = 726;
                            this.s_and_w();
                            this.state = 731;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (chatParser.COLON - 26)) | (1 << (chatParser.AMP - 26)) | (1 << (chatParser.Greater - 26)) | (1 << (chatParser.Less - 26)) | (1 << (chatParser.RightAngle - 26)) | (1 << (chatParser.RightArrow - 26)) | (1 << (chatParser.DBLEQ - 26)) | (1 << (chatParser.SENTENCE - 26)) | (1 << (chatParser.BARSTRING - 26)))) !== 0)) {
                                {
                                    this.state = 729;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case chatParser.COLON:
                                            {
                                                this.state = 727;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case chatParser.AMP:
                                        case chatParser.Greater:
                                        case chatParser.Less:
                                        case chatParser.RightAngle:
                                        case chatParser.RightArrow:
                                        case chatParser.DBLEQ:
                                        case chatParser.SENTENCE:
                                        case chatParser.BARSTRING:
                                            {
                                                this.state = 728;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 733;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 734;
                            this.match(chatParser.CL);
                            this.state = 742;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 738;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.S) {
                                            {
                                                {
                                                    this.state = 735;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 740;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 741;
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
            this.enterRule(_localctx, 108, chatParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 746;
                    this.match(chatParser.OPC);
                    this.state = 747;
                    this.s_and_w();
                    this.state = 752;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (chatParser.COLON - 26)) | (1 << (chatParser.AMP - 26)) | (1 << (chatParser.Greater - 26)) | (1 << (chatParser.Less - 26)) | (1 << (chatParser.RightAngle - 26)) | (1 << (chatParser.RightArrow - 26)) | (1 << (chatParser.DBLEQ - 26)) | (1 << (chatParser.SENTENCE - 26)) | (1 << (chatParser.BARSTRING - 26)))) !== 0)) {
                        {
                            this.state = 750;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.COLON:
                                    {
                                        this.state = 748;
                                        this.match(chatParser.COLON);
                                    }
                                    break;
                                case chatParser.AMP:
                                case chatParser.Greater:
                                case chatParser.Less:
                                case chatParser.RightAngle:
                                case chatParser.RightArrow:
                                case chatParser.DBLEQ:
                                case chatParser.SENTENCE:
                                case chatParser.BARSTRING:
                                    {
                                        this.state = 749;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 754;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 755;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 110, chatParser.RULE_angleref);
            let _la;
            try {
                this.state = 767;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 757;
                            this.match(chatParser.OPRANGLES);
                            this.state = 759;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 758;
                                    this.s_and_w();
                                }
                            }
                            this.state = 761;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 762;
                            this.match(chatParser.OPRANGLEL);
                            this.state = 764;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 763;
                                    this.s_and_w();
                                }
                            }
                            this.state = 766;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 112, chatParser.RULE_example);
            let _la;
            try {
                this.state = 776;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 769;
                            this.match(chatParser.AtExamplecl);
                        }
                        break;
                    case chatParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 770;
                            this.match(chatParser.AtExampleWithStr);
                        }
                        break;
                    case chatParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 771;
                            this.match(chatParser.AtExamplecol);
                            this.state = 773;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.SENTENCE) {
                                {
                                    this.state = 772;
                                    this.match(chatParser.SENTENCE);
                                }
                            }
                            this.state = 775;
                            this.match(chatParser.EOF);
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
            this.enterRule(_localctx, 114, chatParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 817;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 778;
                            this.match(chatParser.BracEnclose);
                            this.state = 780;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 779;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 803;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    {
                                        this.state = 782;
                                        this.s_and_w();
                                        this.state = 792;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 783;
                                                        this.match(chatParser.NL);
                                                        this.state = 787;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 784;
                                                                        this.match(chatParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 789;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 794;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                                        }
                                        this.state = 798;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.NL) {
                                            {
                                                {
                                                    this.state = 795;
                                                    this.match(chatParser.NL);
                                                }
                                            }
                                            this.state = 800;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 805;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 806;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 807;
                            this.match(chatParser.BracEnclose);
                            this.state = 813;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 811;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 808;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 809;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 810;
                                                this.match(chatParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 815;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 816;
                            this.match(chatParser.EOF);
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
            this.enterRule(_localctx, 116, chatParser.RULE_reference);
            let _la;
            try {
                this.state = 841;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 819;
                            this.match(chatParser.AtReference);
                            this.state = 824;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 824;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 820;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 821;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 822;
                                                this.match(chatParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 823;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 826;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 828;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 829;
                            this.match(chatParser.AtReference);
                            this.state = 837;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 835;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 830;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 831;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 832;
                                                this.match(chatParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 833;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 834;
                                                this.match(chatParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 839;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 840;
                            this.match(chatParser.EOF);
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
            this.enterRule(_localctx, 118, chatParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 843;
                    this.match(chatParser.AtProgress);
                    this.state = 844;
                    this.s_and_w();
                    this.state = 845;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 120, chatParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 847;
                    this.match(chatParser.AtDate);
                    this.state = 851;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 851;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 848;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 849;
                                        this.match(chatParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 850;
                                        this.match(chatParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 853;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                    this.state = 855;
                    this.match(chatParser.CL);
                    this.state = 857;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.AtDate) {
                        {
                            this.state = 856;
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
            this.enterRule(_localctx, 122, chatParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 859;
                    this.match(chatParser.AtDate);
                    this.state = 863;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 863;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 860;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 861;
                                        this.match(chatParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 862;
                                        this.match(chatParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 865;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                    this.state = 867;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 124, chatParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 915;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 869;
                            this.match(chatParser.OPB);
                            this.state = 873;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 870;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 875;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 877;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 876;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 900;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    {
                                        this.state = 879;
                                        this.s_and_w();
                                        this.state = 889;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 880;
                                                        this.match(chatParser.NL);
                                                        this.state = 884;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 881;
                                                                        this.match(chatParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 886;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 891;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                                        }
                                        this.state = 895;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.NL) {
                                            {
                                                {
                                                    this.state = 892;
                                                    this.match(chatParser.NL);
                                                }
                                            }
                                            this.state = 897;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 902;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 903;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 904;
                            this.match(chatParser.OPB);
                            this.state = 908;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 905;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 910;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 912;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 911;
                                    this.s_and_w();
                                }
                            }
                            this.state = 914;
                            this.match(chatParser.EOF);
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
            this.enterRule(_localctx, 126, chatParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 917;
                    this.match(chatParser.OPQ);
                    this.state = 919;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 918;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === chatParser.CL)) {
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
                        this.state = 921;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.OPDOT) | (1 << chatParser.S) | (1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.COMMENT) | (1 << chatParser.Image_type) | (1 << chatParser.Audio_type) | (1 << chatParser.Video_type) | (1 << chatParser.OPDOLL) | (1 << chatParser.OPBUL) | (1 << chatParser.OPESC) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPP) | (1 << chatParser.OPM) | (1 << chatParser.OPS) | (1 << chatParser.OPR) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.PLUS) | (1 << chatParser.DotAt) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.HSPL - 32)) | (1 << (chatParser.HSPL2 - 32)) | (1 << (chatParser.SSPL - 32)) | (1 << (chatParser.SSPL2 - 32)) | (1 << (chatParser.DCANY - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NOTCL - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.OPAT - 32)) | (1 << (chatParser.AtProgress - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtWidth - 32)) | (1 << (chatParser.AtHeight - 32)) | (1 << (chatParser.AtProgressPoints - 32)) | (1 << (chatParser.AtShortanswer - 32)) | (1 << (chatParser.AtLonganswer - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtPartialAnswerS - 32)) | (1 << (chatParser.AtPartialAnswer - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)) | (1 << (chatParser.AtPoints - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.AtSrc - 64)) | (1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OPAMARK - 64)) | (1 << (chatParser.ShowInIndex - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)) | (1 << (chatParser.OpAtSearch - 64)) | (1 << (chatParser.OpAtIsTracked - 64)) | (1 << (chatParser.OpAtIsInfoOnly - 64)) | (1 << (chatParser.AtDate - 64)) | (1 << (chatParser.Http - 64)) | (1 << (chatParser.Https - 64)) | (1 << (chatParser.AmpAudio - 64)) | (1 << (chatParser.AmpImage - 64)) | (1 << (chatParser.AmpImageZoom - 64)) | (1 << (chatParser.AmpImageWAudio - 64)) | (1 << (chatParser.AmpVideo - 64)) | (1 << (chatParser.AmpArticle - 64)) | (1 << (chatParser.AmpDocument - 64)) | (1 << (chatParser.AmpApp - 64)) | (1 << (chatParser.AmpWebsite - 64)) | (1 << (chatParser.AmpStillImageFilm - 64)) | (1 << (chatParser.AmpPdf - 64)) | (1 << (chatParser.OpAmpAudio - 64)) | (1 << (chatParser.OpAmpImage - 64)) | (1 << (chatParser.OpAmpImageZoom - 64)) | (1 << (chatParser.OpAmpImageWAudio - 64)) | (1 << (chatParser.OpAmpVideo - 64)) | (1 << (chatParser.OpAmpArticle - 64)) | (1 << (chatParser.OpAmpArticleAtt - 64)) | (1 << (chatParser.OpAmpDocument - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (chatParser.OpAmpApp - 96)) | (1 << (chatParser.OpAmpWebsite - 96)) | (1 << (chatParser.OpAmpStillImageFilm - 96)) | (1 << (chatParser.BracEnclose - 96)) | (1 << (chatParser.AmpAudioLink - 96)) | (1 << (chatParser.AmpImageLink - 96)) | (1 << (chatParser.AmpVideoLink - 96)) | (1 << (chatParser.AmpArticleLink - 96)) | (1 << (chatParser.AmpDocumentLink - 96)) | (1 << (chatParser.AmpAppLink - 96)) | (1 << (chatParser.AmpWebsiteLink - 96)) | (1 << (chatParser.AmpStillImageFilmLink - 96)) | (1 << (chatParser.OpAmpAudioLink - 96)) | (1 << (chatParser.OpAmpImageLink - 96)) | (1 << (chatParser.OpAmpVideoLink - 96)) | (1 << (chatParser.OpAmpArticleLink - 96)) | (1 << (chatParser.OpAmpDocumentLink - 96)) | (1 << (chatParser.OpAmpAppLink - 96)) | (1 << (chatParser.OpAmpWebsiteLink - 96)) | (1 << (chatParser.OpAmpStillImageFilmLink - 96)) | (1 << (chatParser.AmpImageEmbed - 96)) | (1 << (chatParser.AmpVideoEmbed - 96)) | (1 << (chatParser.AmpAudioEmbed - 96)) | (1 << (chatParser.AmpDocumentEmbed - 96)) | (1 << (chatParser.AmpStillImageFilmEmbed - 96)) | (1 << (chatParser.OpAmpImageEmbed - 96)) | (1 << (chatParser.OpAmpVideoEmbed - 96)) | (1 << (chatParser.OpAmpAudioEmbed - 96)) | (1 << (chatParser.OpAmpDocumentEmbed - 96)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 96)) | (1 << (chatParser.BitmarkMinus - 96)) | (1 << (chatParser.BitmarkPlus - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.ColonText - 128)) | (1 << (chatParser.ColonJson - 128)) | (1 << (chatParser.Prosemirror - 128)) | (1 << (chatParser.Placeholder - 128)) | (1 << (chatParser.BASIC - 128)) | (1 << (chatParser.JPG - 128)) | (1 << (chatParser.PNG - 128)) | (1 << (chatParser.GIF - 128)) | (1 << (chatParser.SVG - 128)) | (1 << (chatParser.MP2 - 128)) | (1 << (chatParser.MP3 - 128)) | (1 << (chatParser.MP4 - 128)) | (1 << (chatParser.FLV - 128)) | (1 << (chatParser.WMV - 128)) | (1 << (chatParser.MPEG - 128)) | (1 << (chatParser.MPG - 128)) | (1 << (chatParser.TEL - 128)) | (1 << (chatParser.DotArticleAtt - 128)) | (1 << (chatParser.STAR - 128)) | (1 << (chatParser.URL - 128)) | (1 << (chatParser.LIST_LINE - 128)) | (1 << (chatParser.ENCLBARS - 128)))) !== 0));
                    this.state = 923;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 128, chatParser.RULE_title);
            let _la;
            try {
                this.state = 937;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 925;
                            this.match(chatParser.OPHASH);
                            this.state = 928;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 928;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case chatParser.S:
                                        case chatParser.OPS:
                                        case chatParser.COLON:
                                        case chatParser.AMP:
                                        case chatParser.DBLCOLON:
                                        case chatParser.Greater:
                                        case chatParser.Less:
                                        case chatParser.RightAngle:
                                        case chatParser.RightArrow:
                                        case chatParser.DBLEQ:
                                        case chatParser.NUMERIC:
                                        case chatParser.STRING:
                                        case chatParser.SENTENCE:
                                        case chatParser.BARSTRING:
                                        case chatParser.URL:
                                            {
                                                this.state = 926;
                                                this.s_and_w();
                                            }
                                            break;
                                        case chatParser.NL:
                                            {
                                                this.state = 927;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 930;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 932;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 933;
                            this.match(chatParser.OPHASH);
                            this.state = 934;
                            this.s_and_w();
                            this.state = 935;
                            this.match(chatParser.EOF);
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
            this.enterRule(_localctx, 130, chatParser.RULE_bool_label);
            try {
                this.state = 947;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 939;
                            this.match(chatParser.AtLabeltrue);
                            this.state = 940;
                            this.s_and_w();
                            this.state = 941;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 943;
                            this.match(chatParser.AtLabelfalse);
                            this.state = 944;
                            this.s_and_w();
                            this.state = 945;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 132, chatParser.RULE_progress_points);
            try {
                this.state = 958;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 949;
                            this.match(chatParser.AtProgressPoints);
                            this.state = 950;
                            this.match(chatParser.COLON);
                            this.state = 951;
                            this.match(chatParser.NUMERIC);
                            this.state = 952;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 953;
                            this.match(chatParser.AtProgressPoints);
                            this.state = 954;
                            this.match(chatParser.COLON);
                            this.state = 955;
                            this.s_and_w();
                            this.state = 956;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 134, chatParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 960;
                    this.match(chatParser.OpAtIsTracked);
                    this.state = 961;
                    this.s_and_w();
                    this.state = 962;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 136, chatParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 964;
                    this.match(chatParser.OpAtIsInfoOnly);
                    this.state = 965;
                    this.s_and_w();
                    this.state = 966;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 138, chatParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 968;
                    this.atdef_();
                    this.state = 978;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 972;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.NL) {
                                        {
                                            {
                                                this.state = 969;
                                                this.match(chatParser.NL);
                                            }
                                        }
                                        this.state = 974;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 975;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 980;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 140, chatParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 1003;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 981;
                            this.match(chatParser.OPA);
                            this.state = 982;
                            this.s_and_w();
                            this.state = 983;
                            _la = this._input.LA(1);
                            if (!(_la === chatParser.COLON || _la === chatParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 984;
                            this.s_and_w();
                            this.state = 990;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 988;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 985;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 986;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 987;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 992;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 993;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 995;
                            this.match(chatParser.OpAtCopyright);
                            this.state = 999;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 996;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1001;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                            }
                            this.state = 1002;
                            this.match(chatParser.CL);
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
            this.enterRule(_localctx, 142, chatParser.RULE_dollarans);
            let _la;
            try {
                this.state = 1024;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1005;
                            this.match(chatParser.OPDOLL);
                            this.state = 1009;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1009;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1006;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1007;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1008;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1011;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 1013;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1014;
                            this.match(chatParser.OPDOLL);
                            this.state = 1020;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 1018;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1015;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1016;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1017;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1022;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1023;
                            this.match(chatParser.EOF);
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
            this.enterRule(_localctx, 144, chatParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1026;
                    this.match(chatParser.OPDANGLE);
                    this.state = 1028;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL) {
                        {
                            this.state = 1027;
                            this.s_and_w();
                        }
                    }
                    this.state = 1030;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 146, chatParser.RULE_lines);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1036;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1032;
                                this.s_and_w();
                                this.state = 1034;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === chatParser.NL) {
                                    {
                                        this.state = 1033;
                                        this.match(chatParser.NL);
                                    }
                                }
                            }
                        }
                        this.state = 1038;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)))) !== 0) || _la === chatParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 148, chatParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1086;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1040;
                            this.match(chatParser.STRING);
                            this.state = 1047;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1042;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1041;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 1044;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === chatParser.S);
                                        this.state = 1046;
                                        this.match(chatParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1049;
                            this.words();
                            this.state = 1056;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1051;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1050;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 1053;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === chatParser.S);
                                        this.state = 1055;
                                        this.match(chatParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1058;
                            this.match(chatParser.OPS);
                            this.state = 1059;
                            this.s_and_w();
                            this.state = 1060;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1062;
                            this.match(chatParser.NUMERIC);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1066;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.S) {
                                {
                                    {
                                        this.state = 1063;
                                        this.match(chatParser.S);
                                    }
                                }
                                this.state = 1068;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1069;
                            this.match(chatParser.COLON);
                            this.state = 1073;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1070;
                                            this.match(chatParser.S);
                                        }
                                    }
                                }
                                this.state = 1075;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1076;
                            this.match(chatParser.AMP);
                            this.state = 1080;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1077;
                                            this.match(chatParser.S);
                                        }
                                    }
                                }
                                this.state = 1082;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1083;
                            this.match(chatParser.DBLCOLON);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1084;
                            this.match(chatParser.DBLEQ);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1085;
                            this.match(chatParser.URL);
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
            this.enterRule(_localctx, 150, chatParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1088;
                    this.match(chatParser.OPESC);
                    this.state = 1089;
                    this.s_and_w();
                    this.state = 1090;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 152, chatParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1092;
                    this.match(chatParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 154, chatParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1094;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.SSPL || _la === chatParser.SSPL2)) {
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
            this.enterRule(_localctx, 156, chatParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1106;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1106;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case chatParser.SENTENCE:
                                            {
                                                this.state = 1096;
                                                this.match(chatParser.SENTENCE);
                                            }
                                            break;
                                        case chatParser.BARSTRING:
                                            {
                                                this.state = 1097;
                                                this.match(chatParser.BARSTRING);
                                            }
                                            break;
                                        case chatParser.AMP:
                                            {
                                                this.state = 1098;
                                                this.match(chatParser.AMP);
                                            }
                                            break;
                                        case chatParser.Greater:
                                            {
                                                this.state = 1099;
                                                this.match(chatParser.Greater);
                                                this.state = 1100;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === chatParser.Greater)) {
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
                                        case chatParser.Less:
                                            {
                                                this.state = 1101;
                                                this.match(chatParser.Less);
                                                this.state = 1102;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === chatParser.Less)) {
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
                                        case chatParser.DBLEQ:
                                            {
                                                this.state = 1103;
                                                this.match(chatParser.DBLEQ);
                                            }
                                            break;
                                        case chatParser.RightArrow:
                                            {
                                                this.state = 1104;
                                                this.match(chatParser.RightArrow);
                                            }
                                            break;
                                        case chatParser.RightAngle:
                                            {
                                                this.state = 1105;
                                                this.match(chatParser.RightAngle);
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
                        this.state = 1108;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
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
            this.enterRule(_localctx, 158, chatParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1110;
                    this.match(chatParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
            if (!chatParser.__ATN) {
                chatParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(chatParser._serializedATN));
            }
            return chatParser.__ATN;
        }
    }
    chatParser.OPDOT = 1;
    chatParser.S = 2;
    chatParser.BitChat = 3;
    chatParser.BitConv = 4;
    chatParser.COMMENT = 5;
    chatParser.Image_type = 6;
    chatParser.Audio_type = 7;
    chatParser.Video_type = 8;
    chatParser.OPDOLL = 9;
    chatParser.OPBUL = 10;
    chatParser.OPESC = 11;
    chatParser.OPRANGLES = 12;
    chatParser.OPRANGLEL = 13;
    chatParser.OPDANGLE = 14;
    chatParser.OPU = 15;
    chatParser.OPB = 16;
    chatParser.OPQ = 17;
    chatParser.OPA = 18;
    chatParser.OPP = 19;
    chatParser.OPM = 20;
    chatParser.OPS = 21;
    chatParser.OPR = 22;
    chatParser.OPC = 23;
    chatParser.OPHASH = 24;
    chatParser.CL = 25;
    chatParser.COLON = 26;
    chatParser.AMP = 27;
    chatParser.DBLCOLON = 28;
    chatParser.PLUS = 29;
    chatParser.DotAt = 30;
    chatParser.Greater = 31;
    chatParser.Less = 32;
    chatParser.RightAngle = 33;
    chatParser.RightArrow = 34;
    chatParser.DBLEQ = 35;
    chatParser.HSPL = 36;
    chatParser.HSPL2 = 37;
    chatParser.SSPL = 38;
    chatParser.SSPL2 = 39;
    chatParser.DCANY = 40;
    chatParser.ArticleText = 41;
    chatParser.NOTCL = 42;
    chatParser.NUMERIC = 43;
    chatParser.STRING = 44;
    chatParser.NL = 45;
    chatParser.SENTENCE = 46;
    chatParser.BARSTRING = 47;
    chatParser.OPAT = 48;
    chatParser.AtProgress = 49;
    chatParser.AtReference = 50;
    chatParser.AtWidth = 51;
    chatParser.AtHeight = 52;
    chatParser.AtProgressPoints = 53;
    chatParser.AtShortanswer = 54;
    chatParser.AtLonganswer = 55;
    chatParser.AtExampleWithStr = 56;
    chatParser.AtExamplecol = 57;
    chatParser.AtExamplecl = 58;
    chatParser.AtPartialAnswerS = 59;
    chatParser.AtPartialAnswer = 60;
    chatParser.AtLabeltrue = 61;
    chatParser.AtLabelfalse = 62;
    chatParser.AtPoints = 63;
    chatParser.AtSrc = 64;
    chatParser.OPATALT = 65;
    chatParser.OPAMARK = 66;
    chatParser.ShowInIndex = 67;
    chatParser.OpAtCaption = 68;
    chatParser.OpAtLicense = 69;
    chatParser.OpAtCopyright = 70;
    chatParser.OpAtSearch = 71;
    chatParser.OpAtIsTracked = 72;
    chatParser.OpAtIsInfoOnly = 73;
    chatParser.AtDate = 74;
    chatParser.Http = 75;
    chatParser.Https = 76;
    chatParser.AmpAudio = 77;
    chatParser.AmpImage = 78;
    chatParser.AmpImageZoom = 79;
    chatParser.AmpImageWAudio = 80;
    chatParser.AmpVideo = 81;
    chatParser.AmpArticle = 82;
    chatParser.AmpDocument = 83;
    chatParser.AmpApp = 84;
    chatParser.AmpWebsite = 85;
    chatParser.AmpStillImageFilm = 86;
    chatParser.AmpPdf = 87;
    chatParser.OpAmpAudio = 88;
    chatParser.OpAmpImage = 89;
    chatParser.OpAmpImageZoom = 90;
    chatParser.OpAmpImageWAudio = 91;
    chatParser.OpAmpVideo = 92;
    chatParser.OpAmpArticle = 93;
    chatParser.OpAmpArticleAtt = 94;
    chatParser.OpAmpDocument = 95;
    chatParser.OpAmpApp = 96;
    chatParser.OpAmpWebsite = 97;
    chatParser.OpAmpStillImageFilm = 98;
    chatParser.BracEnclose = 99;
    chatParser.AmpAudioLink = 100;
    chatParser.AmpImageLink = 101;
    chatParser.AmpVideoLink = 102;
    chatParser.AmpArticleLink = 103;
    chatParser.AmpDocumentLink = 104;
    chatParser.AmpAppLink = 105;
    chatParser.AmpWebsiteLink = 106;
    chatParser.AmpStillImageFilmLink = 107;
    chatParser.OpAmpAudioLink = 108;
    chatParser.OpAmpImageLink = 109;
    chatParser.OpAmpVideoLink = 110;
    chatParser.OpAmpArticleLink = 111;
    chatParser.OpAmpDocumentLink = 112;
    chatParser.OpAmpAppLink = 113;
    chatParser.OpAmpWebsiteLink = 114;
    chatParser.OpAmpStillImageFilmLink = 115;
    chatParser.AmpImageEmbed = 116;
    chatParser.AmpVideoEmbed = 117;
    chatParser.AmpAudioEmbed = 118;
    chatParser.AmpDocumentEmbed = 119;
    chatParser.AmpStillImageFilmEmbed = 120;
    chatParser.OpAmpImageEmbed = 121;
    chatParser.OpAmpVideoEmbed = 122;
    chatParser.OpAmpAudioEmbed = 123;
    chatParser.OpAmpDocumentEmbed = 124;
    chatParser.OpAmpStillImageFilmEmbed = 125;
    chatParser.BitmarkMinus = 126;
    chatParser.BitmarkPlus = 127;
    chatParser.ColonText = 128;
    chatParser.ColonJson = 129;
    chatParser.Prosemirror = 130;
    chatParser.Placeholder = 131;
    chatParser.BASIC = 132;
    chatParser.JPG = 133;
    chatParser.PNG = 134;
    chatParser.GIF = 135;
    chatParser.SVG = 136;
    chatParser.MP2 = 137;
    chatParser.MP3 = 138;
    chatParser.MP4 = 139;
    chatParser.FLV = 140;
    chatParser.WMV = 141;
    chatParser.MPEG = 142;
    chatParser.MPG = 143;
    chatParser.TEL = 144;
    chatParser.DotArticleAtt = 145;
    chatParser.STAR = 146;
    chatParser.URL = 147;
    chatParser.LIST_LINE = 148;
    chatParser.ENCLBARS = 149;
    chatParser.RULE_bitmark = 0;
    chatParser.RULE_bitmark_ = 1;
    chatParser.RULE_chat = 2;
    chatParser.RULE_conversation = 3;
    chatParser.RULE_initiator = 4;
    chatParser.RULE_partner = 5;
    chatParser.RULE_name_text = 6;
    chatParser.RULE_chat_initiator = 7;
    chatParser.RULE_chat_partner = 8;
    chatParser.RULE_sspl_chat_partner = 9;
    chatParser.RULE_bitElem = 10;
    chatParser.RULE_resource = 11;
    chatParser.RULE_gap = 12;
    chatParser.RULE_single_gap = 13;
    chatParser.RULE_dcolon = 14;
    chatParser.RULE_atpoint = 15;
    chatParser.RULE_format = 16;
    chatParser.RULE_resource_format = 17;
    chatParser.RULE_resource_format_extra = 18;
    chatParser.RULE_format2 = 19;
    chatParser.RULE_image_format = 20;
    chatParser.RULE_video_format = 21;
    chatParser.RULE_article_format = 22;
    chatParser.RULE_document_format = 23;
    chatParser.RULE_app_format = 24;
    chatParser.RULE_website_format = 25;
    chatParser.RULE_stillimagefilm_format = 26;
    chatParser.RULE_op_article_format = 27;
    chatParser.RULE_op_document_format = 28;
    chatParser.RULE_op_app_format = 29;
    chatParser.RULE_op_website_format = 30;
    chatParser.RULE_op_video_format = 31;
    chatParser.RULE_op_stillimagefilm_format = 32;
    chatParser.RULE_articlebit = 33;
    chatParser.RULE_documentbit = 34;
    chatParser.RULE_websitebit = 35;
    chatParser.RULE_appbit = 36;
    chatParser.RULE_stillimagefilmbit = 37;
    chatParser.RULE_stillimg_one = 38;
    chatParser.RULE_videobit = 39;
    chatParser.RULE_video_one = 40;
    chatParser.RULE_imagebit = 41;
    chatParser.RULE_image_one = 42;
    chatParser.RULE_op_image_format = 43;
    chatParser.RULE_image_chained = 44;
    chatParser.RULE_image_chained4match = 45;
    chatParser.RULE_audiobit = 46;
    chatParser.RULE_audio_one = 47;
    chatParser.RULE_audio_format = 48;
    chatParser.RULE_op_audio_format = 49;
    chatParser.RULE_resource_chained = 50;
    chatParser.RULE_telephone = 51;
    chatParser.RULE_url = 52;
    chatParser.RULE_item = 53;
    chatParser.RULE_lead = 54;
    chatParser.RULE_angleref = 55;
    chatParser.RULE_example = 56;
    chatParser.RULE_bracketed_text = 57;
    chatParser.RULE_reference = 58;
    chatParser.RULE_progress = 59;
    chatParser.RULE_dateprop = 60;
    chatParser.RULE_dateprop_chained = 61;
    chatParser.RULE_instruction = 62;
    chatParser.RULE_hint = 63;
    chatParser.RULE_title = 64;
    chatParser.RULE_bool_label = 65;
    chatParser.RULE_progress_points = 66;
    chatParser.RULE_istracked = 67;
    chatParser.RULE_isinfoonly = 68;
    chatParser.RULE_atdef = 69;
    chatParser.RULE_atdef_ = 70;
    chatParser.RULE_dollarans = 71;
    chatParser.RULE_anchor = 72;
    chatParser.RULE_lines = 73;
    chatParser.RULE_s_and_w = 74;
    chatParser.RULE_bracket_escaped = 75;
    chatParser.RULE_clnsp = 76;
    chatParser.RULE_sspl = 77;
    chatParser.RULE_words = 78;
    chatParser.RULE_sp = 79;
    // tslint:disable:no-trailing-whitespace
    chatParser.ruleNames = [
        "bitmark", "bitmark_", "chat", "conversation", "initiator", "partner",
        "name_text", "chat_initiator", "chat_partner", "sspl_chat_partner", "bitElem",
        "resource", "gap", "single_gap", "dcolon", "atpoint", "format", "resource_format",
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
        "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    chatParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[^'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'[#'", undefined, "':'", "'&'", "'::'",
        "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[@'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'http://'", "'https://'", "'&audio'",
        "'&image'", "'&image-zoom'", "'&image-with-audio'", "'&video'", "'&article'",
        "'&document'", "'&app'", "'&website'", "'&still-image-film'", "'&pdf'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'&audio-link'",
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
    chatParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitChat", "BitConv", "COMMENT", "Image_type",
        "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
        "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
        "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
        "Less", "RightAngle", "RightArrow", "DBLEQ", "HSPL", "HSPL2", "SSPL",
        "SSPL2", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE",
        "BARSTRING", "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight",
        "AtProgressPoints", "AtShortanswer", "AtLonganswer", "AtExampleWithStr",
        "AtExamplecol", "AtExamplecl", "AtPartialAnswerS", "AtPartialAnswer",
        "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc", "OPATALT", "OPAMARK",
        "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright", "OpAtSearch",
        "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "AmpAudio",
        "AmpImage", "AmpImageZoom", "AmpImageWAudio", "AmpVideo", "AmpArticle",
        "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm", "AmpPdf",
        "OpAmpAudio", "OpAmpImage", "OpAmpImageZoom", "OpAmpImageWAudio", "OpAmpVideo",
        "OpAmpArticle", "OpAmpArticleAtt", "OpAmpDocument", "OpAmpApp", "OpAmpWebsite",
        "OpAmpStillImageFilm", "BracEnclose", "AmpAudioLink", "AmpImageLink",
        "AmpVideoLink", "AmpArticleLink", "AmpDocumentLink", "AmpAppLink", "AmpWebsiteLink",
        "AmpStillImageFilmLink", "OpAmpAudioLink", "OpAmpImageLink", "OpAmpVideoLink",
        "OpAmpArticleLink", "OpAmpDocumentLink", "OpAmpAppLink", "OpAmpWebsiteLink",
        "OpAmpStillImageFilmLink", "AmpImageEmbed", "AmpVideoEmbed", "AmpAudioEmbed",
        "AmpDocumentEmbed", "AmpStillImageFilmEmbed", "OpAmpImageEmbed", "OpAmpVideoEmbed",
        "OpAmpAudioEmbed", "OpAmpDocumentEmbed", "OpAmpStillImageFilmEmbed", "BitmarkMinus",
        "BitmarkPlus", "ColonText", "ColonJson", "Prosemirror", "Placeholder",
        "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4", "FLV", "WMV",
        "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE", "ENCLBARS",
    ];
    chatParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(chatParser._LITERAL_NAMES, chatParser._SYMBOLIC_NAMES, []);
    chatParser._serializedATNSegments = 3;
    chatParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x97\u045B\x04" +
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
        "O\tO\x04P\tP\x04Q\tQ\x03\x02\x03\x02\x07\x02\xA5\n\x02\f\x02\x0E\x02\xA8" +
        "\v\x02\x03\x02\x07\x02\xAB\n\x02\f\x02\x0E\x02\xAE\v\x02\x06\x02\xB0\n" +
        "\x02\r\x02\x0E\x02\xB1\x03\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8\v\x02" +
        "\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xBE\n\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x07\x04\xC4\n\x04\f\x04\x0E\x04\xC7\v\x04\x03\x04\x03\x04" +
        "\x07\x04\xCB\n\x04\f\x04\x0E\x04\xCE\v\x04\x07\x04\xD0\n\x04\f\x04\x0E" +
        "\x04\xD3\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x07\x04\xDC\n\x04\f\x04\x0E\x04\xDF\v\x04\x06\x04\xE1\n\x04\r\x04\x0E" +
        "\x04\xE2\x03\x04\x03\x04\x07\x04\xE7\n\x04\f\x04\x0E\x04\xEA\v\x04\x03" +
        "\x04\x03\x04\x07\x04\xEE\n\x04\f\x04\x0E\x04\xF1\v\x04\x03\x04\x07\x04" +
        "\xF4\n\x04\f\x04\x0E\x04\xF7\v\x04\x05\x04\xF9\n\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x07\x05\xFF\n\x05\f\x05\x0E\x05\u0102\v\x05\x03\x05\x03\x05" +
        "\x07\x05\u0106\n\x05\f\x05\x0E\x05\u0109\v\x05\x07\x05\u010B\n\x05\f\x05" +
        "\x0E\x05\u010E\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x07\x05\u0117\n\x05\f\x05\x0E\x05\u011A\v\x05\x06\x05\u011C\n\x05" +
        "\r\x05\x0E\x05\u011D\x03\x05\x03\x05\x07\x05\u0122\n\x05\f\x05\x0E\x05" +
        "\u0125\v\x05\x03\x05\x03\x05\x07\x05\u0129\n\x05\f\x05\x0E\x05\u012C\v" +
        "\x05\x03\x05\x07\x05\u012F\n\x05\f\x05\x0E\x05\u0132\v\x05\x05\x05\u0134" +
        "\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\u0139\n\x06\x03\x07\x03\x07\x03" +
        "\x07\x05\x07\u013E\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
        "\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x05\f\u0161\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x07\x0E\u016B\n\x0E\f\x0E\x0E\x0E\u016E\v\x0E\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x05\x0F\u0174\n\x0F\x03\x0F\x07\x0F\u0177\n\x0F\f" +
        "\x0F\x0E\x0F\u017A\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x11\x03\x11\x03\x12\x07\x12\u0185\n\x12\f\x12\x0E\x12\u0188\v\x12" +
        "\x03\x12\x03\x12\x03\x12\x07\x12\u018D\n\x12\f\x12\x0E\x12\u0190\v\x12" +
        "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x05\x14\u019D\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
        "\x15\x05\x15\u01A4\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01A9\n\x16\x03" +
        "\x16\x03\x16\x05\x16\u01AD\n\x16\x03\x16\x03\x16\x05\x16\u01B1\n\x16\x03" +
        "\x16\x05\x16\u01B4\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\u01B9\n\x17\x03" +
        "\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
        "\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03" +
        "!\x03!\x05!\u01D0\n!\x03!\x03!\x03!\x05!\u01D5\n!\x03!\x03!\x03!\x05!" +
        "\u01DA\n!\x05!\u01DC\n!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x05" +
        "#\u01E6\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u01F0\n$\x03%" +
        "\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01FA\n%\x03&\x03&\x03&\x03&" +
        "\x05&\u0200\n&\x03&\x03&\x03&\x03&\x03&\x05&\u0207\n&\x03\'\x03\'\x07" +
        "\'\u020B\n\'\f\'\x0E\'\u020E\v\'\x03(\x03(\x03(\x07(\u0213\n(\f(\x0E(" +
        "\u0216\v(\x03(\x03(\x03(\x03)\x03)\x07)\u021D\n)\f)\x0E)\u0220\v)\x03" +
        "*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u022A\n*\x03+\x03+\x07+\u022E" +
        "\n+\f+\x0E+\u0231\v+\x03+\x03+\x05+\u0235\n+\x03,\x03,\x03,\x07,\u023A" +
        "\n,\f,\x0E,\u023D\v,\x03,\x03,\x03,\x03-\x03-\x03-\x05-\u0245\n-\x03-" +
        "\x03-\x05-\u0249\n-\x03-\x03-\x05-\u024D\n-\x03-\x05-\u0250\n-\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u025D\n.\f.\x0E.\u0260" +
        "\v.\x03.\x05.\u0263\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
        "/\x03/\x07/\u0270\n/\f/\x0E/\u0273\v/\x03/\x05/\u0276\n/\x030\x030\x07" +
        "0\u027A\n0\f0\x0E0\u027D\v0\x031\x031\x031\x031\x031\x031\x031\x031\x05" +
        "1\u0287\n1\x032\x032\x032\x052\u028C\n2\x032\x032\x032\x052\u0291\n2\x05" +
        "2\u0293\n2\x033\x033\x033\x053\u0298\n3\x033\x033\x033\x053\u029D\n3\x03" +
        "3\x033\x033\x053\u02A2\n3\x053\u02A4\n3\x034\x034\x034\x054\u02A9\n4\x03" +
        "4\x034\x074\u02AD\n4\f4\x0E4\u02B0\v4\x034\x034\x064\u02B4\n4\r4\x0E4" +
        "\u02B5\x034\x034\x034\x034\x034\x034\x034\x074\u02BF\n4\f4\x0E4\u02C2" +
        "\v4\x034\x054\u02C5\n4\x035\x035\x035\x035\x036\x036\x037\x037\x037\x07" +
        "7\u02D0\n7\f7\x0E7\u02D3\v7\x037\x057\u02D6\n7\x037\x037\x037\x037\x07" +
        "7\u02DC\n7\f7\x0E7\u02DF\v7\x037\x037\x077\u02E3\n7\f7\x0E7\u02E6\v7\x03" +
        "7\x057\u02E9\n7\x057\u02EB\n7\x038\x038\x038\x038\x078\u02F1\n8\f8\x0E" +
        "8\u02F4\v8\x038\x038\x039\x039\x059\u02FA\n9\x039\x039\x039\x059\u02FF" +
        "\n9\x039\x059\u0302\n9\x03:\x03:\x03:\x03:\x05:\u0308\n:\x03:\x05:\u030B" +
        "\n:\x03;\x03;\x05;\u030F\n;\x03;\x03;\x03;\x07;\u0314\n;\f;\x0E;\u0317" +
        "\v;\x07;\u0319\n;\f;\x0E;\u031C\v;\x03;\x07;\u031F\n;\f;\x0E;\u0322\v" +
        ";\x07;\u0324\n;\f;\x0E;\u0327\v;\x03;\x03;\x03;\x03;\x03;\x07;\u032E\n" +
        ";\f;\x0E;\u0331\v;\x03;\x05;\u0334\n;\x03<\x03<\x03<\x03<\x03<\x06<\u033B" +
        "\n<\r<\x0E<\u033C\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0346\n<\f<" +
        "\x0E<\u0349\v<\x03<\x05<\u034C\n<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03" +
        ">\x06>\u0356\n>\r>\x0E>\u0357\x03>\x03>\x05>\u035C\n>\x03?\x03?\x03?\x03" +
        "?\x06?\u0362\n?\r?\x0E?\u0363\x03?\x03?\x03@\x03@\x07@\u036A\n@\f@\x0E" +
        "@\u036D\v@\x03@\x05@\u0370\n@\x03@\x03@\x03@\x07@\u0375\n@\f@\x0E@\u0378" +
        "\v@\x07@\u037A\n@\f@\x0E@\u037D\v@\x03@\x07@\u0380\n@\f@\x0E@\u0383\v" +
        "@\x07@\u0385\n@\f@\x0E@\u0388\v@\x03@\x03@\x03@\x07@\u038D\n@\f@\x0E@" +
        "\u0390\v@\x03@\x05@\u0393\n@\x03@\x05@\u0396\n@\x03A\x03A\x06A\u039A\n" +
        "A\rA\x0EA\u039B\x03A\x03A\x03B\x03B\x03B\x06B\u03A3\nB\rB\x0EB\u03A4\x03" +
        "B\x03B\x03B\x03B\x03B\x05B\u03AC\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
        "C\x03C\x05C\u03B6\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05" +
        "D\u03C1\nD\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03G\x03G\x07G\u03CD" +
        "\nG\fG\x0EG\u03D0\vG\x03G\x07G\u03D3\nG\fG\x0EG\u03D6\vG\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x07H\u03DF\nH\fH\x0EH\u03E2\vH\x03H\x03H\x03H\x03" +
        "H\x07H\u03E8\nH\fH\x0EH\u03EB\vH\x03H\x05H\u03EE\nH\x03I\x03I\x03I\x03" +
        "I\x06I\u03F4\nI\rI\x0EI\u03F5\x03I\x03I\x03I\x03I\x03I\x07I\u03FD\nI\f" +
        "I\x0EI\u0400\vI\x03I\x05I\u0403\nI\x03J\x03J\x05J\u0407\nJ\x03J\x03J\x03" +
        "K\x03K\x05K\u040D\nK\x06K\u040F\nK\rK\x0EK\u0410\x03L\x03L\x06L\u0415" +
        "\nL\rL\x0EL\u0416\x03L\x05L\u041A\nL\x03L\x03L\x06L\u041E\nL\rL\x0EL\u041F" +
        "\x03L\x05L\u0423\nL\x03L\x03L\x03L\x03L\x03L\x03L\x07L\u042B\nL\fL\x0E" +
        "L\u042E\vL\x03L\x03L\x07L\u0432\nL\fL\x0EL\u0435\vL\x03L\x03L\x07L\u0439" +
        "\nL\fL\x0EL\u043C\vL\x03L\x03L\x03L\x05L\u0441\nL\x03M\x03M\x03M\x03M" +
        "\x03N\x03N\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
        "P\x06P\u0455\nP\rP\x0EP\u0456\x03Q\x03Q\x03Q\x06\u025E\u0271\u02C0\u03E9" +
        "\x02\x02R\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
        "\xA0\x02\x02\x16\x03\x02&\'\b\x02TUWXfmwz\x80\x81\x83\x85\x05\x02SShh" +
        "ww\x04\x02TTii\x05\x02UUjjyy\x04\x02VVkk\x04\x02WWll\x05\x02XXmmzz\x04" +
        "\x02__qq\x05\x02aarr~~\x04\x02bbss\x04\x02cctt\x05\x02dduu\x7F\x7F\x03" +
        "\x0256\x04\x02CCFI\x03\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02()\x03" +
        "\x02!!\x03\x02\"\"\x02\u04E7\x02\xAF\x03\x02\x02\x02\x04\xBD\x03\x02\x02" +
        "\x02\x06\xBF\x03\x02\x02\x02\b\xFA\x03\x02\x02\x02\n\u0135\x03\x02\x02" +
        "\x02\f\u013A\x03\x02\x02\x02\x0E\u013F\x03\x02\x02\x02\x10\u0143\x03\x02" +
        "\x02\x02\x12\u0145\x03\x02\x02\x02\x14\u0147\x03\x02\x02\x02\x16\u0160" +
        "\x03\x02\x02\x02\x18\u0162\x03\x02\x02\x02\x1A\u0164\x03\x02\x02\x02\x1C" +
        "\u016F\x03\x02\x02\x02\x1E\u017D\x03\x02\x02\x02 \u017F\x03\x02\x02\x02" +
        "\"\u0186\x03\x02\x02\x02$\u0191\x03\x02\x02\x02&\u019C\x03\x02\x02\x02" +
        "(\u01A3\x03\x02\x02\x02*\u01B3\x03\x02\x02\x02,\u01B5\x03\x02\x02\x02" +
        ".\u01BA\x03\x02\x02\x020\u01BC\x03\x02\x02\x022\u01BE\x03\x02\x02\x02" +
        "4\u01C0\x03\x02\x02\x026\u01C2\x03\x02\x02\x028\u01C4\x03\x02\x02\x02" +
        ":\u01C6\x03\x02\x02\x02<\u01C8\x03\x02\x02\x02>\u01CA\x03\x02\x02\x02" +
        "@\u01DB\x03\x02\x02\x02B\u01DD\x03\x02\x02\x02D\u01E5\x03\x02\x02\x02" +
        "F\u01E7\x03\x02\x02\x02H\u01F1\x03\x02\x02\x02J\u01FB\x03\x02\x02\x02" +
        "L\u0208\x03\x02\x02\x02N\u020F\x03\x02\x02\x02P\u021A\x03\x02\x02\x02" +
        "R\u0221\x03\x02\x02\x02T\u022B\x03\x02\x02\x02V\u0236\x03\x02\x02\x02" +
        "X\u024F\x03\x02\x02\x02Z\u0262\x03\x02\x02\x02\\\u0275\x03\x02\x02\x02" +
        "^\u0277\x03\x02\x02\x02`\u027E\x03\x02\x02\x02b\u0292\x03\x02\x02\x02" +
        "d\u02A3\x03\x02\x02\x02f\u02C4\x03\x02\x02\x02h\u02C6\x03\x02\x02\x02" +
        "j\u02CA\x03\x02\x02\x02l\u02EA\x03\x02\x02\x02n\u02EC\x03\x02\x02\x02" +
        "p\u0301\x03\x02\x02\x02r\u030A\x03\x02\x02\x02t\u0333\x03\x02\x02\x02" +
        "v\u034B\x03\x02\x02\x02x\u034D\x03\x02\x02\x02z\u0351\x03\x02\x02\x02" +
        "|\u035D\x03\x02\x02\x02~\u0395\x03\x02\x02\x02\x80\u0397\x03\x02\x02\x02" +
        "\x82\u03AB\x03\x02\x02\x02\x84\u03B5\x03\x02\x02\x02\x86\u03C0\x03\x02" +
        "\x02\x02\x88\u03C2\x03\x02\x02\x02\x8A\u03C6\x03\x02\x02\x02\x8C\u03CA" +
        "\x03\x02\x02\x02\x8E\u03ED\x03\x02\x02\x02\x90\u0402\x03\x02\x02\x02\x92" +
        "\u0404\x03\x02\x02\x02\x94\u040E\x03\x02\x02\x02\x96\u0440\x03\x02\x02" +
        "\x02\x98\u0442\x03\x02\x02\x02\x9A\u0446\x03\x02\x02\x02\x9C\u0448\x03" +
        "\x02\x02\x02\x9E\u0454\x03\x02\x02\x02\xA0\u0458\x03\x02\x02\x02\xA2\xAC" +
        "\x05\x04\x03\x02\xA3\xA5\x07\x04\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8" +
        "\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9" +
        "\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB\x07/\x02\x02\xAA\xA6" +
        "\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD" +
        "\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xA2" +
        "\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2" +
        "\x03\x02\x02\x02\xB2\xB6\x03\x02\x02\x02\xB3\xB5\x07/\x02\x02\xB4\xB3" +
        "\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7" +
        "\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA" +
        "\x07\x02\x02\x03\xBA\x03\x03\x02\x02\x02\xBB\xBE\x05\x06\x04\x02\xBC\xBE" +
        "\x05\b\x05\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\x05" +
        "\x03\x02\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0\xC1\x05\"\x12\x02\xC1\xC5" +
        "\x07\x1B\x02\x02\xC2\xC4\x07/\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4\xC7" +
        "\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xD1" +
        "\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCC\x05\x16\f\x02\xC9\xCB" +
        "\x07/\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA" +
        "\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC" +
        "\x03\x02\x02\x02\xCF\xC8\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF" +
        "\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1" +
        "\x03\x02\x02\x02\xD4\xD5\t\x02\x02\x02\xD5\xD6\x05\n\x06\x02\xD6\xD7\t" +
        "\x02\x02\x02\xD7\xE0\x05\f\x07\x02\xD8\xD9\t\x02\x02\x02\xD9\xDD\x05\x10" +
        "\t\x02\xDA\xDC\x05\x14\v\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02\x02" +
        "\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE1\x03\x02\x02" +
        "\x02\xDF\xDD\x03\x02\x02\x02\xE0\xD8\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
        "\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
        "\x02\xE4\xE8\t\x02\x02\x02\xE5\xE7\x07/\x02\x02\xE6\xE5\x03\x02\x02\x02" +
        "\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02" +
        "\xE9\xF8\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xF5\x05\x18\r\x02" +
        "\xEC\xEE\x07/\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02" +
        "\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02" +
        "\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x05\x18\r\x02\xF3\xEF\x03\x02\x02\x02" +
        "\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
        "\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xEB\x03\x02\x02\x02" +
        "\xF8\xF9\x03\x02\x02\x02\xF9\x07\x03\x02\x02\x02\xFA\xFB\x07\x06\x02\x02" +
        "\xFB\xFC\x05\"\x12\x02\xFC\u0100\x07\x1B\x02\x02\xFD\xFF\x07/\x02\x02" +
        "\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
        "\x02\u0100\u0101\x03\x02\x02\x02\u0101\u010C\x03\x02\x02\x02\u0102\u0100" +
        "\x03\x02\x02\x02\u0103\u0107\x05\x16\f\x02\u0104\u0106\x07/\x02\x02\u0105" +
        "\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02" +
        "\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109" +
        "\u0107\x03\x02\x02\x02\u010A\u0103\x03\x02\x02\x02\u010B\u010E\x03\x02" +
        "\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
        "\u010F\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0110\t\x02\x02" +
        "\x02\u0110\u0111\x05\n\x06\x02\u0111\u0112\t\x02\x02\x02\u0112\u011B\x05" +
        "\f\x07\x02\u0113\u0114\t\x02\x02\x02\u0114\u0118\x05\x10\t\x02\u0115\u0117" +
        "\x05\x14\v\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02" +
        "\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011C\x03" +
        "\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u0113\x03\x02\x02\x02\u011C" +
        "\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02" +
        "\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0123\t\x02\x02\x02\u0120\u0122" +
        "\x07/\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02" +
        "\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0133\x03" +
        "\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0130\x05\x18\r\x02\u0127" +
        "\u0129\x07/\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02" +
        "\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D" +
        "\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012F\x05\x18\r\x02" +
        "\u012E\u012A\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03" +
        "\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132" +
        "\u0130\x03\x02\x02\x02\u0133\u0126\x03\x02\x02\x02\u0133\u0134\x03\x02" +
        "\x02\x02\u0134\t\x03\x02\x02\x02\u0135\u0138\x05\x0E\b\x02\u0136\u0137" +
        "\x07/\x02\x02\u0137\u0139\x05T+\x02\u0138\u0136\x03\x02\x02\x02\u0138" +
        "\u0139\x03\x02\x02\x02\u0139\v\x03\x02\x02\x02\u013A\u013D\x05\x0E\b\x02" +
        "\u013B\u013C\x07/\x02\x02\u013C\u013E\x05T+\x02\u013D\u013B\x03\x02\x02" +
        "\x02\u013D\u013E\x03\x02\x02\x02\u013E\r\x03\x02\x02\x02\u013F\u0140\x07" +
        "\x1A\x02\x02\u0140\u0141\x05\x96L\x02\u0141\u0142\x07\x1B\x02\x02\u0142" +
        "\x0F\x03\x02\x02\x02\u0143\u0144\x05\x96L\x02\u0144\x11\x03\x02\x02\x02" +
        "\u0145\u0146\x05\x96L\x02\u0146\x13\x03\x02\x02\x02\u0147\u0148\x05\x9C" +
        "O\x02\u0148\u0149\x05\x12\n\x02\u0149\x15\x03\x02\x02\x02\u014A\u0161" +
        "\x07\x96\x02\x02\u014B\u0161\x05\x1A\x0E\x02\u014C\u0161\x05\x8CG\x02" +
        "\u014D\u0161\x05v<\x02\u014E\u0161\x05l7\x02\u014F\u0161\x05\x82B\x02" +
        "\u0150\u0161\x05~@\x02\u0151\u0161\x05\x80A\x02\u0152\u0161\x05\x96L\x02" +
        "\u0153\u0161\x05r:\x02\u0154\u0161\x05\x84C\x02\u0155\u0161\x05T+\x02" +
        "\u0156\u0161\x05^0\x02\u0157\u0161\x05P)\x02\u0158\u0161\x05D#\x02\u0159" +
        "\u0161\x05F$\x02\u015A\u0161\x05J&\x02\u015B\u0161\x05H%\x02\u015C\u0161" +
        "\x05L\'\x02\u015D\u0161\x05p9\x02\u015E\u0161\x05\x92J\x02\u015F\u0161" +
        "\x05\xA0Q\x02\u0160\u014A\x03\x02\x02\x02\u0160\u014B\x03\x02\x02\x02" +
        "\u0160\u014C\x03\x02\x02\x02\u0160\u014D\x03\x02\x02\x02\u0160\u014E\x03" +
        "\x02\x02\x02\u0160\u014F\x03\x02\x02\x02\u0160\u0150\x03\x02\x02\x02\u0160" +
        "\u0151\x03\x02\x02\x02\u0160\u0152\x03\x02\x02\x02\u0160\u0153\x03\x02" +
        "\x02\x02\u0160\u0154\x03\x02\x02\x02\u0160\u0155\x03\x02\x02\x02\u0160" +
        "\u0156\x03\x02\x02\x02\u0160\u0157\x03\x02\x02\x02\u0160\u0158\x03\x02" +
        "\x02\x02\u0160\u0159\x03\x02\x02\x02\u0160\u015A\x03\x02\x02\x02\u0160" +
        "\u015B\x03\x02\x02\x02\u0160\u015C\x03\x02\x02\x02\u0160\u015D\x03\x02" +
        "\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u015F\x03\x02\x02\x02\u0161" +
        "\x17\x03\x02\x02\x02\u0162\u0163\x05\x16\f\x02\u0163\x19\x03\x02\x02\x02" +
        "\u0164\u016C\x05\x1C\x0F\x02\u0165\u016B\x05\x1C\x0F\x02\u0166\u016B\x05" +
        "~@\x02\u0167\u016B\x05\x80A\x02\u0168\u016B\x05l7\x02\u0169\u016B\x05" +
        "r:\x02\u016A\u0165\x03\x02\x02\x02\u016A\u0166\x03\x02\x02\x02\u016A\u0167" +
        "\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u0169\x03\x02\x02\x02" +
        "\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03" +
        "\x02\x02\x02\u016D\x1B\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F" +
        "\u0173\x07\x11\x02\x02\u0170\u0174\x07-\x02\x02\u0171\u0174\x07.\x02\x02" +
        "\u0172\u0174\x03\x02\x02\x02\u0173\u0170\x03\x02\x02\x02\u0173\u0171\x03" +
        "\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0178\x03\x02\x02\x02\u0175" +
        "\u0177\x05\x96L\x02\u0176\u0175\x03\x02\x02\x02\u0177\u017A\x03\x02\x02" +
        "\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017B" +
        "\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017C\x05\x9AN\x02" +
        "\u017C\x1D\x03\x02\x02\x02\u017D\u017E\x07\x1E\x02\x02\u017E\x1F\x03\x02" +
        "\x02\x02\u017F\u0180\x07A\x02\x02\u0180\u0181\x07-\x02\x02\u0181\u0182" +
        "\x07\x1B\x02\x02\u0182!\x03\x02\x02\x02\u0183\u0185\x05$\x13\x02\u0184" +
        "\u0183\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02" +
        "\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u018E\x03\x02\x02\x02\u0188" +
        "\u0186\x03\x02\x02\x02\u0189\u018D\x07\x82\x02\x02\u018A\u018D\x07\x83" +
        "\x02\x02\u018B\u018D\x05&\x14\x02\u018C\u0189\x03\x02\x02\x02\u018C\u018A" +
        "\x03\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02" +
        "\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F#\x03\x02" +
        "\x02\x02\u0190\u018E\x03\x02";
    chatParser._serializedATNSegment1 = "\x02\x02\u0191\u0192\t\x03\x02\x02\u0192%\x03\x02\x02\x02\u0193\u019D" +
        "\x05*\x16\x02\u0194\u019D\x05b2\x02\u0195\u019D\x05,\x17\x02\u0196\u019D" +
        "\x05.\x18\x02\u0197\u019D\x050\x19\x02\u0198\u019D\x052\x1A\x02\u0199" +
        "\u019D\x054\x1B\x02\u019A\u019D\x056\x1C\x02\u019B\u019D\x07Y\x02\x02" +
        "\u019C\u0193\x03\x02\x02\x02\u019C\u0194\x03\x02\x02\x02\u019C\u0195\x03" +
        "\x02\x02\x02\u019C\u0196\x03\x02\x02\x02\u019C\u0197\x03\x02\x02\x02\u019C" +
        "\u0198\x03\x02\x02\x02\u019C\u0199\x03\x02\x02\x02\u019C\u019A\x03\x02" +
        "\x02\x02\u019C\u019B\x03\x02\x02\x02\u019D\'\x03\x02\x02\x02\u019E\u01A4" +
        "\x07\x80\x02\x02\u019F\u01A4\x07\x81\x02\x02\u01A0\u01A4\x07\x82\x02\x02" +
        "\u01A1\u01A4\x07\x83\x02\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3\u019E\x03" +
        "\x02\x02\x02\u01A3\u019F\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3" +
        "\u01A1\x03\x02\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4)\x03\x02\x02" +
        "\x02\u01A5\u01A8\x07P\x02\x02\u01A6\u01A9\x07\b\x02\x02\u01A7\u01A9\x07" +
        "\x93\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8" +
        "\u01A9\x03\x02\x02\x02\u01A9\u01B4\x03\x02\x02\x02\u01AA\u01AC\x07g\x02" +
        "\x02\u01AB\u01AD\x07\b\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD" +
        "\x03\x02\x02\x02\u01AD\u01B4\x03\x02\x02\x02\u01AE\u01B0\x07Q\x02\x02" +
        "\u01AF\u01B1\x07\b\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B0\u01B1\x03" +
        "\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B4\x07R\x02\x02\u01B3" +
        "\u01A5\x03\x02\x02\x02\u01B3\u01AA\x03\x02\x02\x02\u01B3\u01AE\x03\x02" +
        "\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4+\x03\x02\x02\x02\u01B5\u01B8" +
        "\t\x04\x02\x02\u01B6\u01B7\x07\x1C\x02\x02\u01B7\u01B9\x07\n\x02\x02\u01B8" +
        "\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9-\x03\x02\x02" +
        "\x02\u01BA\u01BB\t\x05\x02\x02\u01BB/\x03\x02\x02\x02\u01BC\u01BD\t\x06" +
        "\x02\x02\u01BD1\x03\x02\x02\x02\u01BE\u01BF\t\x07\x02\x02\u01BF3\x03\x02" +
        "\x02\x02\u01C0\u01C1\t\b\x02\x02\u01C15\x03\x02\x02\x02\u01C2\u01C3\t" +
        "\t\x02\x02\u01C37\x03\x02\x02\x02\u01C4\u01C5\t\n\x02\x02\u01C59\x03\x02" +
        "\x02\x02\u01C6\u01C7\t\v\x02\x02\u01C7;\x03\x02\x02\x02\u01C8\u01C9\t" +
        "\f\x02\x02\u01C9=\x03\x02\x02\x02\u01CA\u01CB\t\r\x02\x02\u01CB?\x03\x02" +
        "\x02\x02\u01CC\u01CF\x07^\x02\x02\u01CD\u01CE\x07\x1C\x02\x02\u01CE\u01D0" +
        "\x07\n\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02" +
        "\u01D0\u01DC\x03\x02\x02\x02\u01D1\u01D4\x07p\x02\x02\u01D2\u01D3\x07" +
        "\x1C\x02\x02\u01D3\u01D5\x07\n\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4" +
        "\u01D5\x03\x02\x02\x02\u01D5\u01DC\x03\x02\x02\x02\u01D6\u01D9\x07|\x02" +
        "\x02\u01D7\u01D8\x07\x1C\x02\x02\u01D8\u01DA\x07\n\x02\x02\u01D9\u01D7" +
        "\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03\x02\x02\x02" +
        "\u01DB\u01CC\x03\x02\x02\x02\u01DB\u01D1\x03\x02\x02\x02\u01DB\u01D6\x03" +
        "\x02\x02\x02\u01DCA\x03\x02\x02\x02\u01DD\u01DE\t\x0E\x02\x02\u01DEC\x03" +
        "\x02\x02\x02\u01DF\u01E0\x058\x1D\x02\u01E0\u01E1\x07\x1C\x02\x02\u01E1" +
        "\u01E2\x05j6\x02\u01E2\u01E3\x07\x1B\x02\x02\u01E3\u01E6\x03\x02\x02\x02" +
        "\u01E4\u01E6\x07+\x02\x02\u01E5\u01DF\x03\x02\x02\x02\u01E5\u01E4\x03" +
        "\x02\x02\x02\u01E6E\x03\x02\x02\x02\u01E7\u01E8\x05:\x1E\x02\u01E8\u01E9" +
        "\x07\x1C\x02\x02\u01E9\u01EA\x05j6\x02\u01EA\u01EF\x07\x1B\x02\x02\u01EB" +
        "\u01EC\x07C\x02\x02\u01EC\u01ED\x05\x9EP\x02\u01ED\u01EE\x07\x1B\x02\x02" +
        "\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01EB\x03\x02\x02\x02\u01EF\u01F0\x03" +
        "\x02\x02\x02\u01F0G\x03\x02\x02\x02\u01F1\u01F2\x05> \x02\u01F2\u01F3" +
        "\x07\x1C\x02\x02\u01F3\u01F4\x05j6\x02\u01F4\u01F9\x07\x1B\x02\x02\u01F5" +
        "\u01F6\x07C\x02\x02\u01F6\u01F7\x05\x9EP\x02\u01F7\u01F8\x07\x1B\x02\x02" +
        "\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F5\x03\x02\x02\x02\u01F9\u01FA\x03" +
        "\x02\x02\x02\u01FAI\x03\x02\x02\x02\u01FB\u01FC\x05<\x1F\x02\u01FC\u01FF" +
        "\x07\x1C\x02\x02\u01FD\u0200\x05j6\x02\u01FE\u0200\x05h5\x02\u01FF\u01FD" +
        "\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02" +
        "\u0201\u0206\x07\x1B\x02\x02\u0202\u0203\x07C\x02\x02\u0203\u0204\x05" +
        "\x9EP\x02\u0204\u0205\x07\x1B\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206" +
        "\u0202\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207K\x03\x02\x02" +
        "\x02\u0208\u020C\x05N(\x02\u0209\u020B\x05f4\x02\u020A\u0209\x03\x02\x02" +
        "\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D" +
        "\x03\x02\x02\x02\u020DM\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F" +
        "\u0210\x05B\"\x02\u0210\u0214\x07\x1C\x02\x02\u0211\u0213\x07\x04\x02" +
        "\x02\u0212\u0211\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214\u0212" +
        "\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02" +
        "\u0216\u0214\x03\x02\x02\x02\u0217\u0218\x05j6\x02\u0218\u0219\x07\x1B" +
        "\x02\x02\u0219O\x03\x02\x02\x02\u021A\u021E\x05R*\x02\u021B\u021D\x05" +
        "f4\x02\u021C\u021B\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C" +
        "\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021FQ\x03\x02\x02\x02\u0220" +
        "\u021E\x03\x02\x02\x02\u0221\u0222\x05@!\x02\u0222\u0223\x07\x1C\x02\x02" +
        "\u0223\u0224\x05j6\x02\u0224\u0229\x07\x1B\x02\x02\u0225\u0226\x07C\x02" +
        "\x02\u0226\u0227\x05\x9EP\x02\u0227\u0228\x07\x1B\x02\x02\u0228\u022A" +
        "\x03\x02\x02\x02\u0229\u0225\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02" +
        "\u022AS\x03\x02\x02\x02\u022B\u022F\x05V,\x02\u022C\u022E\x05Z.\x02\u022D" +
        "\u022C\x03\x02\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02" +
        "\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0234\x03\x02\x02\x02\u0231" +
        "\u022F\x03\x02\x02\x02\u0232\u0233\x07/\x02\x02\u0233\u0235\x07E\x02\x02" +
        "\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235U\x03\x02" +
        "\x02\x02\u0236\u0237\x05X-\x02\u0237\u023B\x07\x1C\x02\x02\u0238\u023A" +
        "\x07\x04\x02\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02" +
        "\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03" +
        "\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u023F\x05j6\x02\u023F\u0240" +
        "\x07\x1B\x02\x02\u0240W\x03\x02\x02\x02\u0241\u0244\x07[\x02\x02\u0242" +
        "\u0245\x07\b\x02\x02\u0243\u0245\x07\x93\x02\x02\u0244\u0242\x03\x02\x02" +
        "\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0250" +
        "\x03\x02\x02\x02\u0246\u0248\x07o\x02\x02\u0247\u0249\x07\b\x02\x02\u0248" +
        "\u0247\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u0250\x03\x02" +
        "\x02\x02\u024A\u024C\x07\\\x02\x02\u024B\u024D\x07\b\x02\x02\u024C\u024B" +
        "\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u0250\x03\x02\x02\x02" +
        "\u024E\u0250\x07]\x02\x02\u024F\u0241\x03\x02\x02\x02\u024F\u0246\x03" +
        "\x02\x02\x02\u024F\u024A\x03\x02\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250" +
        "Y\x03\x02\x02\x02\u0251\u0252\x07B\x02\x02\u0252\u0253\x07\x1C\x02\x02" +
        "\u0253\u0254\x05j6\x02\u0254\u0255\x07\x1B\x02\x02\u0255\u0263\x03\x02" +
        "\x02\x02\u0256\u0257\t\x0F\x02\x02\u0257\u0258\x07\x1C\x02\x02\u0258\u0259" +
        "\x07-\x02\x02\u0259\u0263\x07\x1B\x02\x02\u025A\u025E\t\x10\x02\x02\u025B" +
        "\u025D\v\x02\x02\x02\u025C\u025B\x03\x02\x02\x02\u025D\u0260\x03\x02\x02" +
        "\x02\u025E\u025F\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0261" +
        "\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0263\x07\x1B\x02\x02" +
        "\u0262\u0251\x03\x02\x02\x02\u0262\u0256\x03\x02\x02\x02\u0262\u025A\x03" +
        "\x02\x02\x02\u0263[\x03\x02\x02\x02\u0264\u0265\x07B\x02\x02\u0265\u0266" +
        "\x07\x1C\x02\x02\u0266\u0267\x05j6\x02\u0267\u0268\x07\x1B\x02\x02\u0268" +
        "\u0276\x03\x02\x02\x02\u0269\u026A\t\x0F\x02\x02\u026A\u026B\x07\x1C\x02" +
        "\x02\u026B\u026C\x07-\x02\x02\u026C\u0276\x07\x1B\x02\x02\u026D\u0271" +
        "\t\x10\x02\x02\u026E\u0270\v\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270" +
        "\u0273\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0271\u026F\x03\x02" +
        "\x02\x02\u0272\u0274\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274" +
        "\u0276\x07\x1B\x02\x02\u0275\u0264\x03\x02\x02\x02\u0275\u0269\x03\x02" +
        "\x02\x02\u0275\u026D\x03\x02\x02\x02\u0276]\x03\x02\x02\x02\u0277\u027B" +
        "\x05`1\x02\u0278\u027A\x05f4\x02\u0279\u0278\x03\x02\x02\x02\u027A\u027D" +
        "\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02" +
        "\u027C_\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u027F\x05d3" +
        "\x02\u027F\u0280\x07\x1C\x02\x02\u0280\u0281\x05j6\x02\u0281\u0286\x07" +
        "\x1B\x02\x02\u0282\u0283\x07C\x02\x02\u0283\u0284\x05\x9EP\x02\u0284\u0285" +
        "\x07\x1B\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0282\x03\x02\x02\x02" +
        "\u0286\u0287\x03\x02\x02\x02\u0287a\x03\x02\x02\x02\u0288\u028B\x07O\x02" +
        "\x02\u0289\u028A\x07\x1C\x02\x02\u028A\u028C\x07\t\x02\x02\u028B\u0289" +
        "\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u0293\x03\x02\x02\x02" +
        "\u028D\u0290\x07f\x02\x02\u028E\u028F\x07\x1C\x02\x02\u028F\u0291\x07" +
        "\t\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291" +
        "\u0293\x03\x02\x02\x02\u0292\u0288\x03\x02\x02\x02\u0292\u028D\x03\x02" +
        "\x02\x02\u0293c\x03\x02\x02\x02\u0294\u0297\x07Z\x02\x02\u0295\u0296\x07" +
        "\x1C\x02\x02\u0296\u0298\x07\t\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297" +
        "\u0298\x03\x02\x02\x02\u0298\u02A4\x03\x02\x02\x02\u0299\u029C\x07n\x02" +
        "\x02\u029A\u029B\x07\x1C\x02\x02\u029B\u029D\x07\t\x02\x02\u029C\u029A" +
        "\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u02A4\x03\x02\x02\x02" +
        "\u029E\u02A1\x07}\x02\x02\u029F\u02A0\x07\x1C\x02\x02\u02A0\u02A2\x07" +
        "\t\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
        "\u02A4\x03\x02\x02\x02\u02A3\u0294\x03\x02\x02\x02\u02A3\u0299\x03\x02" +
        "\x02\x02\u02A3\u029E\x03\x02\x02\x02\u02A4e\x03\x02\x02\x02\u02A5\u02A6" +
        "\x07\x14\x02\x02\u02A6\u02A9\x05\x96L\x02\u02A7\u02A9\x07B\x02\x02\u02A8" +
        "\u02A5\x03\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02" +
        "\x02\x02\u02AA\u02AE\x07\x1C\x02\x02\u02AB\u02AD\x07\x04\x02\x02\u02AC" +
        "\u02AB\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03\x02" +
        "\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B3\x03\x02\x02\x02\u02B0" +
        "\u02AE\x03\x02\x02\x02\u02B1\u02B4\x05\x96L\x02\u02B2\u02B4\x07/\x02\x02" +
        "\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03" +
        "\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
        "\u02B7\x03\x02\x02\x02\u02B7\u02C5\x07\x1B\x02\x02\u02B8\u02B9\t\x0F\x02" +
        "\x02\u02B9\u02BA\x07\x1C\x02\x02\u02BA\u02BB\x07-\x02\x02\u02BB\u02C5" +
        "\x07\x1B\x02\x02\u02BC\u02C0\t\x10\x02\x02\u02BD\u02BF\v\x02\x02\x02\u02BE" +
        "\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02C1\x03\x02" +
        "\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2" +
        "\u02C0\x03\x02\x02\x02\u02C3\u02C5\x07\x1B\x02\x02\u02C4\u02A8\x03\x02" +
        "\x02\x02\u02C4\u02B8\x03\x02\x02\x02\u02C4\u02BC\x03\x02\x02\x02\u02C5" +
        "g\x03\x02\x02\x02\u02C6\u02C7\x07\x92\x02\x02\u02C7\u02C8\x07\x1F\x02" +
        "\x02\u02C8\u02C9\x07-\x02\x02\u02C9i\x03\x02\x02\x02\u02CA\u02CB\x07\x95" +
        "\x02\x02\u02CBk\x03\x02\x02\x02\u02CC\u02CD\x07\x19\x02\x02\u02CD\u02D5" +
        "\x07\x1B\x02\x02\u02CE\u02D0\x07\x04\x02\x02\u02CF\u02CE\x03\x02\x02\x02" +
        "\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03" +
        "\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4" +
        "\u02D6\x05n8\x02\u02D5\u02D1\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02" +
        "\u02D6\u02EB\x03\x02\x02\x02\u02D7\u02D8\x07\x19\x02\x02\u02D8\u02DD\x05" +
        "\x96L\x02\u02D9\u02DC\x07\x1C\x02\x02\u02DA\u02DC\x05\x9EP\x02\u02DB\u02D9" +
        "\x03\x02\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02" +
        "\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x03" +
        "\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E8\x07\x1B\x02\x02\u02E1" +
        "\u02E3\x07\x04\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3\u02E6\x03\x02" +
        "\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5" +
        "\u02E7\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02E9\x05n8\x02" +
        "\u02E8\u02E4\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EB\x03" +
        "\x02\x02\x02\u02EA\u02CC\x03\x02\x02\x02\u02EA\u02D7\x03\x02\x02\x02\u02EB" +
        "m\x03\x02\x02\x02\u02EC\u02ED\x07\x19\x02\x02\u02ED\u02F2\x05\x96L\x02" +
        "\u02EE\u02F1\x07\x1C\x02\x02\u02EF\u02F1\x05\x9EP\x02\u02F0\u02EE\x03" +
        "\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1\u02F4\x03\x02\x02\x02\u02F2" +
        "\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F5\x03\x02" +
        "\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F6\x07\x1B\x02\x02\u02F6" +
        "o\x03\x02\x02\x02\u02F7\u02F9\x07\x0E\x02\x02\u02F8\u02FA\x05\x96L\x02" +
        "\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03" +
        "\x02\x02\x02\u02FB\u0302\x07\x1B\x02\x02\u02FC\u02FE\x07\x0F\x02\x02\u02FD" +
        "\u02FF\x05\x96L\x02\u02FE\u02FD\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02" +
        "\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0302\x07\x1B\x02\x02\u0301\u02F7" +
        "\x03\x02\x02\x02\u0301\u02FC\x03\x02\x02\x02\u0302q\x03\x02\x02\x02\u0303" +
        "\u030B\x07<\x02\x02\u0304\u030B\x07:\x02\x02\u0305\u0307\x07;\x02\x02" +
        "\u0306\u0308\x070\x02\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03" +
        "\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x07\x02\x02\x03\u030A" +
        "\u0303\x03\x02\x02\x02\u030A\u0304\x03\x02\x02\x02\u030A\u0305\x03\x02" +
        "\x02\x02\u030Bs\x03\x02\x02\x02\u030C\u030E\x07e\x02\x02\u030D\u030F\x05" +
        "\x96L\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F" +
        "\u0325\x03\x02\x02\x02\u0310\u031A\x05\x96L\x02\u0311\u0315\x07/\x02\x02" +
        "\u0312\u0314\x07\x04\x02\x02\u0313\u0312\x03\x02\x02\x02\u0314\u0317\x03" +
        "\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316" +
        "\u0319\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0318\u0311\x03\x02" +
        "\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
        "\u031B\x03\x02\x02\x02\u031B\u0320\x03\x02\x02\x02\u031C\u031A\x03\x02" +
        "\x02\x02\u031D\u031F\x07/\x02\x02\u031E\u031D\x03\x02\x02\x02\u031F\u0322" +
        "\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02" +
        "\u0321\u0324\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0310\x03" +
        "\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325" +
        "\u0326\x03\x02\x02\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0325\x03\x02" +
        "\x02\x02\u0328\u0334\x07\x1B\x02\x02\u0329\u032F\x07e\x02\x02\u032A\u032E" +
        "\x05\x96L\x02\u032B\u032E\x07/\x02\x02\u032C\u032E\x07\x04\x02\x02\u032D" +
        "\u032A\x03\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032D\u032C\x03\x02" +
        "\x02\x02\u032E\u0331\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u032F" +
        "\u0330\x03\x02\x02\x02\u0330\u0332\x03\x02\x02\x02\u0331\u032F\x03\x02" +
        "\x02\x02\u0332\u0334\x07\x02\x02\x03\u0333\u030C\x03\x02\x02\x02\u0333" +
        "\u0329\x03\x02\x02\x02\u0334u\x03\x02\x02\x02\u0335\u033A\x074\x02\x02" +
        "\u0336\u033B\x05\x96L\x02\u0337\u033B\x07\x1C\x02\x02\u0338\u033B\x07" +
        "\x95\x02\x02\u0339\u033B\x07/\x02\x02\u033A\u0336\x03\x02\x02\x02\u033A" +
        "\u0337\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A\u0339\x03\x02" +
        "\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
        "\u033D\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u034C\x07\x1B" +
        "\x02\x02\u033F\u0347\x074\x02\x02\u0340\u0346\x05\x96L\x02\u0341\u0346" +
        "\x07\x1C\x02\x02\u0342\u0346\x07\x95\x02\x02\u0343\u0346\x07/\x02\x02" +
        "\u0344\u0346\x07\x04\x02\x02\u0345\u0340\x03\x02\x02\x02\u0345\u0341\x03" +
        "\x02\x02\x02\u0345\u0342\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345" +
        "\u0344\x03\x02\x02\x02\u0346\u0349\x03\x02\x02\x02\u0347\u0345\x03\x02" +
        "\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034A\x03\x02\x02\x02\u0349" +
        "\u0347\x03\x02\x02\x02\u034A\u034C\x07\x02\x02\x03\u034B\u0335\x03\x02" +
        "\x02\x02\u034B\u033F\x03\x02\x02\x02\u034Cw\x03\x02\x02\x02\u034D\u034E" +
        "\x073\x02\x02\u034E\u034F\x05\x96L\x02\u034F\u0350\x07\x1B\x02\x02\u0350" +
        "y\x03\x02\x02\x02\u0351\u0355\x07L\x02\x02\u0352\u0356\x05\x96L\x02\u0353" +
        "\u0356\x07\x1C\x02\x02\u0354\u0356\x07/\x02\x02\u0355\u0352\x03\x02\x02" +
        "\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356\u0357" +
        "\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02" +
        "\u0358\u0359\x03\x02\x02\x02\u0359\u035B\x07\x1B\x02\x02\u035A\u035C\x05" +
        "|?\x02\u035B\u035A\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C{" +
        "\x03\x02\x02\x02\u035D\u0361\x07L\x02\x02\u035E\u0362\x05\x96L\x02\u035F" +
        "\u0362\x07\x1C\x02\x02\u0360\u0362\x07/\x02\x02\u0361\u035E\x03\x02\x02" +
        "\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0360\x03\x02\x02\x02\u0362\u0363" +
        "\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02" +
        "\u0364\u0365\x03\x02\x02\x02\u0365\u0366\x07\x1B\x02\x02\u0366}\x03\x02" +
        "\x02\x02\u0367\u036B\x07\x12\x02\x02\u0368\u036A\x07/\x02\x02\u0369\u0368" +
        "\x03\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02" +
        "\u036B\u036C\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03" +
        "\x02\x02\x02\u036E\u0370\x05\x96L\x02\u036F\u036E\x03\x02\x02\x02\u036F" +
        "\u0370\x03\x02\x02\x02\u0370\u0386\x03\x02\x02\x02\u0371\u037B\x05\x96" +
        "L\x02\u0372\u0376\x07/\x02\x02\u0373\u0375\x07\x04\x02\x02\u0374\u0373" +
        "\x03\x02\x02\x02\u0375\u0378\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02" +
        "\u0376\u0377\x03\x02\x02\x02\u0377\u037A\x03\x02\x02\x02\u0378\u0376\x03" +
        "\x02\x02\x02\u0379\u0372\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B" +
        "\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u0381\x03\x02" +
        "\x02\x02\u037D\u037B\x03\x02\x02\x02\u037E\u0380\x07/\x02\x02\u037F\u037E" +
        "\x03\x02\x02\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02" +
        "\u0381\u0382\x03\x02\x02\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381\x03" +
        "\x02\x02\x02\u0384\u0371\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386" +
        "\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0389\x03\x02" +
        "\x02\x02\u0388\u0386\x03\x02\x02\x02\u0389\u0396\x07\x1B\x02\x02\u038A" +
        "\u038E\x07\x12\x02\x02\u038B\u038D\x07/\x02\x02\u038C\u038B\x03\x02\x02" +
        "\x02\u038D\u0390\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038E\u038F" +
        "\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02" +
        "\u0391\u0393\x05\x96L\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03" +
        "\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394\u0396\x07\x02\x02\x03\u0395" +
        "\u0367\x03\x02\x02\x02\u0395\u038A\x03\x02\x02\x02\u0396\x7F\x03\x02\x02" +
        "\x02\u0397\u0399\x07\x13\x02\x02\u0398\u039A\n\x11\x02\x02\u0399\u0398" +
        "\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02" +
        "\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039E\x07" +
        "\x1B\x02\x02\u039E\x81\x03\x02\x02\x02\u039F\u03A2\x07\x1A\x02\x02\u03A0" +
        "\u03A3\x05\x96L\x02\u03A1\u03A3\x07/\x02\x02\u03A2\u03A0\x03\x02\x02\x02" +
        "\u03A2\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A2\x03" +
        "\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6" +
        "\u03AC\x07\x1B\x02\x02\u03A7\u03A8\x07\x1A\x02\x02\u03A8\u03A9\x05\x96" +
        "L\x02\u03A9\u03AA\x07\x02\x02\x03\u03AA\u03AC\x03\x02\x02\x02\u03AB\u039F" +
        "\x03\x02\x02\x02\u03AB\u03A7\x03\x02\x02\x02\u03AC\x83\x03\x02\x02\x02" +
        "\u03AD\u03AE\x07?\x02\x02\u03AE\u03AF\x05\x96L\x02\u03AF\u03B0\x07\x1B" +
        "\x02\x02\u03B0\u03B6\x03\x02\x02\x02\u03B1\u03B2\x07@\x02\x02\u03B2\u03B3" +
        "\x05\x96L\x02\u03B3\u03B4\x07\x1B\x02\x02\u03B4\u03B6\x03\x02\x02\x02" +
        "\u03B5\u03AD\x03\x02\x02\x02\u03B5\u03B1\x03\x02\x02\x02\u03B6\x85\x03" +
        "\x02\x02\x02\u03B7\u03B8\x077\x02\x02\u03B8\u03B9\x07\x1C\x02\x02\u03B9" +
        "\u03BA\x07-\x02\x02\u03BA\u03C1\x07\x1B\x02\x02\u03BB\u03BC\x077\x02\x02" +
        "\u03BC\u03BD\x07\x1C\x02\x02\u03BD\u03BE\x05\x96L\x02\u03BE\u03BF\x07" +
        "\x1B\x02\x02\u03BF\u03C1\x03\x02\x02\x02\u03C0\u03B7\x03\x02\x02\x02\u03C0" +
        "\u03BB\x03\x02\x02\x02\u03C1\x87\x03\x02\x02\x02\u03C2\u03C3\x07J\x02" +
        "\x02\u03C3\u03C4\x05\x96L\x02\u03C4\u03C5\x07\x1B\x02\x02\u03C5\x89\x03" +
        "\x02\x02\x02\u03C6\u03C7\x07K\x02\x02\u03C7\u03C8\x05\x96L\x02\u03C8\u03C9" +
        "\x07\x1B\x02\x02\u03C9\x8B\x03\x02\x02\x02\u03CA\u03D4\x05\x8EH\x02\u03CB" +
        "\u03CD\x07/\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CD\u03D0\x03\x02\x02" +
        "\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D1" +
        "\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1\u03D3\x05\x8EH\x02" +
        "\u03D2\u03CE\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03" +
        "\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\x8D\x03\x02\x02\x02\u03D6" +
        "\u03D4\x03\x02\x02\x02\u03D7\u03D8\x07\x14\x02\x02\u03D8\u03D9\x05\x96" +
        "L\x02\u03D9\u03DA\t\x12\x02\x02\u03DA\u03E0\x05\x96L\x02\u03DB\u03DF\x07" +
        "/\x02\x02\u03DC\u03DF\x07\x1C\x02\x02\u03DD\u03DF\x05\x96L\x02\u03DE\u03DB" +
        "\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DD\x03\x02\x02\x02" +
        "\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03" +
        "\x02\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E3" +
        "\u03E4\x07\x1B\x02\x02\u03E4\u03EE\x03\x02\x02\x02\u03E5\u03E9\x07H\x02" +
        "\x02\u03E6\u03E8\v\x02\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8\u03EB" +
        "\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02" +
        "\u03EA\u03EC\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC\u03EE\x07" +
        "\x1B\x02\x02\u03ED\u03D7\x03\x02\x02\x02\u03ED\u03E5\x03\x02\x02\x02\u03EE" +
        "\x8F\x03\x02\x02\x02\u03EF\u03F3\x07\v\x02\x02\u03F0\u03F4\x05\x96L\x02" +
        "\u03F1\u03F4\x07\x1C\x02\x02\u03F2\u03F4\x07/\x02\x02\u03F3\u03F0\x03" +
        "\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4" +
        "\u03F5\x03\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02" +
        "\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u0403\x07\x1B\x02\x02\u03F8" +
        "\u03FE\x07\v\x02\x02\u03F9\u03FD\x05\x96L\x02\u03FA\u03FD\x07\x1C\x02" +
        "\x02\u03FB\u03FD\x07/\x02\x02\u03FC\u03F9\x03\x02\x02\x02\u03FC\u03FA" +
        "\x03\x02\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD\u0400\x03\x02\x02\x02" +
        "\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0401\x03" +
        "\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0403\x07\x02\x02\x03\u0402" +
        "\u03EF\x03\x02\x02\x02\u0402\u03F8\x03\x02\x02\x02\u0403\x91\x03\x02\x02" +
        "\x02\u0404\u0406\x07\x10\x02\x02\u0405\u0407\x05\x96L\x02\u0406\u0405" +
        "\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02" +
        "\u0408\u0409\x07\x1B\x02\x02\u0409\x93\x03\x02\x02\x02\u040A\u040C\x05" +
        "\x96L\x02\u040B\u040D\x07/\x02\x02\u040C\u040B\x03\x02\x02\x02\u040C\u040D" +
        "\x03\x02\x02\x02\u040D\u040F\x03\x02\x02\x02\u040E\u040A\x03\x02\x02\x02" +
        "\u040F\u0410\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03" +
        "\x02\x02\x02\u0411\x95\x03\x02\x02\x02\u0412\u0419\x07.\x02\x02\u0413" +
        "\u0415\x07\x04\x02\x02\u0414\u0413\x03\x02\x02\x02\u0415\u0416\x03\x02" +
        "\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417" +
        "\u0418\x03\x02\x02\x02\u0418\u041A\x07-\x02\x02\u0419\u0414\x03\x02\x02" +
        "\x02\u0419\u041A\x03\x02\x02\x02\u041A\u0441\x03\x02\x02\x02\u041B\u0422" +
        "\x05\x9EP\x02\u041C\u041E\x07\x04\x02\x02\u041D\u041C\x03\x02\x02\x02" +
        "\u041E\u041F\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u041F\u0420\x03" +
        "\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0423\x07-\x02\x02\u0422" +
        "\u041D\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0441\x03\x02" +
        "\x02\x02\u0424\u0425\x07\x17\x02\x02\u0425\u0426\x05\x96L\x02\u0426\u0427" +
        "\x07\x1B\x02\x02\u0427\u0441\x03\x02\x02\x02\u0428\u0441\x07-\x02\x02" +
        "\u0429\u042B\x07\x04\x02\x02\u042A\u0429\x03\x02\x02\x02\u042B\u042E\x03" +
        "\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D" +
        "\u042F\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042F\u0433\x07\x1C" +
        "\x02\x02\u0430\u0432\x07\x04\x02\x02\u0431\u0430\x03\x02\x02\x02\u0432" +
        "\u0435\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0433\u0434\x03\x02" +
        "\x02\x02\u0434\u0441\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0436" +
        "\u043A\x07\x1D\x02\x02\u0437\u0439\x07\x04\x02\x02\u0438\u0437\x03\x02" +
        "\x02\x02\u0439\u043C\x03\x02\x02\x02\u043A\u0438\x03\x02\x02\x02\u043A" +
        "\u043B\x03\x02\x02\x02\u043B\u0441\x03\x02\x02\x02\u043C\u043A\x03\x02" +
        "\x02\x02\u043D\u0441\x07\x1E\x02\x02\u043E\u0441\x07%\x02\x02";
    chatParser._serializedATNSegment2 = "\u043F\u0441\x07\x95\x02\x02\u0440\u0412\x03\x02\x02\x02\u0440\u041B\x03" +
        "\x02\x02\x02\u0440\u0424\x03\x02\x02\x02\u0440\u0428\x03\x02\x02\x02\u0440" +
        "\u042C\x03\x02\x02\x02\u0440\u0436\x03\x02\x02\x02\u0440\u043D\x03\x02" +
        "\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u043F\x03\x02\x02\x02\u0441" +
        "\x97\x03\x02\x02\x02\u0442\u0443\x07\r\x02\x02\u0443\u0444\x05\x96L\x02" +
        "\u0444\u0445\x07\x1B\x02\x02\u0445\x99\x03\x02\x02\x02\u0446\u0447\x07" +
        "\x1B\x02\x02\u0447\x9B\x03\x02\x02\x02\u0448\u0449\t\x13\x02\x02\u0449" +
        "\x9D\x03\x02\x02\x02\u044A\u0455\x070\x02\x02\u044B\u0455\x071\x02\x02" +
        "\u044C\u0455\x07\x1D\x02\x02\u044D\u044E\x07!\x02\x02\u044E\u0455\n\x14" +
        "\x02\x02\u044F\u0450\x07\"\x02\x02\u0450\u0455\n\x15\x02\x02\u0451\u0455" +
        "\x07%\x02\x02\u0452\u0455\x07$\x02\x02\u0453\u0455\x07#\x02\x02\u0454" +
        "\u044A\x03\x02\x02\x02\u0454\u044B\x03\x02\x02\x02\u0454\u044C\x03\x02" +
        "\x02\x02\u0454\u044D\x03\x02\x02\x02\u0454\u044F\x03\x02\x02\x02\u0454" +
        "\u0451\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0453\x03\x02" +
        "\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456" +
        "\u0457\x03\x02\x02\x02\u0457\x9F\x03\x02\x02\x02\u0458\u0459\x07\x04\x02" +
        "\x02\u0459\xA1\x03\x02\x02\x02\x98\xA6\xAC\xB1\xB6\xBD\xC5\xCC\xD1\xDD" +
        "\xE2\xE8\xEF\xF5\xF8\u0100\u0107\u010C\u0118\u011D\u0123\u012A\u0130\u0133" +
        "\u0138\u013D\u0160\u016A\u016C\u0173\u0178\u0186\u018C\u018E\u019C\u01A3" +
        "\u01A8\u01AC\u01B0\u01B3\u01B8\u01CF\u01D4\u01D9\u01DB\u01E5\u01EF\u01F9" +
        "\u01FF\u0206\u020C\u0214\u021E\u0229\u022F\u0234\u023B\u0244\u0248\u024C" +
        "\u024F\u025E\u0262\u0271\u0275\u027B\u0286\u028B\u0290\u0292\u0297\u029C" +
        "\u02A1\u02A3\u02A8\u02AE\u02B3\u02B5\u02C0\u02C4\u02D1\u02D5\u02DB\u02DD" +
        "\u02E4\u02E8\u02EA\u02F0\u02F2\u02F9\u02FE\u0301\u0307\u030A\u030E\u0315" +
        "\u031A\u0320\u0325\u032D\u032F\u0333\u033A\u033C\u0345\u0347\u034B\u0355" +
        "\u0357\u035B\u0361\u0363\u036B\u036F\u0376\u037B\u0381\u0386\u038E\u0392" +
        "\u0395\u039B\u03A2\u03A4\u03AB\u03B5\u03C0\u03CE\u03D4\u03DE\u03E0\u03E9" +
        "\u03ED\u03F3\u03F5\u03FC\u03FE\u0402\u0406\u040C\u0410\u0416\u0419\u041F" +
        "\u0422\u042C\u0433\u043A\u0440\u0454\u0456";
    chatParser._serializedATN = Utils.join([
        chatParser._serializedATNSegment0,
        chatParser._serializedATNSegment1,
        chatParser._serializedATNSegment2,
    ], "");
    return chatParser;
})();
exports.chatParser = chatParser;
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(chatParser.EOF, 0); }
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
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_bitmark; }
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
    chat() {
        return this.tryGetRuleContext(0, ChatContext);
    }
    conversation() {
        return this.tryGetRuleContext(0, ConversationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_bitmark_; }
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
class ChatContext extends ParserRuleContext_1.ParserRuleContext {
    BitChat() { return this.getToken(chatParser.BitChat, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    initiator() {
        return this.getRuleContext(0, InitiatorContext);
    }
    partner() {
        return this.getRuleContext(0, PartnerContext);
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.HSPL);
        }
        else {
            return this.getToken(chatParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.HSPL2);
        }
        else {
            return this.getToken(chatParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
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
    chat_initiator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Chat_initiatorContext);
        }
        else {
            return this.getRuleContext(i, Chat_initiatorContext);
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
    sspl_chat_partner(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sspl_chat_partnerContext);
        }
        else {
            return this.getRuleContext(i, Sspl_chat_partnerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_chat; }
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
exports.ChatContext = ChatContext;
class ConversationContext extends ParserRuleContext_1.ParserRuleContext {
    BitConv() { return this.getToken(chatParser.BitConv, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    initiator() {
        return this.getRuleContext(0, InitiatorContext);
    }
    partner() {
        return this.getRuleContext(0, PartnerContext);
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.HSPL);
        }
        else {
            return this.getToken(chatParser.HSPL, i);
        }
    }
    HSPL2(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.HSPL2);
        }
        else {
            return this.getToken(chatParser.HSPL2, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
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
    chat_initiator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Chat_initiatorContext);
        }
        else {
            return this.getRuleContext(i, Chat_initiatorContext);
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
    sspl_chat_partner(i) {
        if (i === undefined) {
            return this.getRuleContexts(Sspl_chat_partnerContext);
        }
        else {
            return this.getRuleContext(i, Sspl_chat_partnerContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_conversation; }
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
exports.ConversationContext = ConversationContext;
class InitiatorContext extends ParserRuleContext_1.ParserRuleContext {
    name_text() {
        return this.getRuleContext(0, Name_textContext);
    }
    NL() { return this.tryGetToken(chatParser.NL, 0); }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_initiator; }
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
exports.InitiatorContext = InitiatorContext;
class PartnerContext extends ParserRuleContext_1.ParserRuleContext {
    name_text() {
        return this.getRuleContext(0, Name_textContext);
    }
    NL() { return this.tryGetToken(chatParser.NL, 0); }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_partner; }
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
exports.PartnerContext = PartnerContext;
class Name_textContext extends ParserRuleContext_1.ParserRuleContext {
    OPHASH() { return this.getToken(chatParser.OPHASH, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_name_text; }
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
exports.Name_textContext = Name_textContext;
class Chat_initiatorContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_chat_initiator; }
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
exports.Chat_initiatorContext = Chat_initiatorContext;
class Chat_partnerContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_chat_partner; }
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
exports.Chat_partnerContext = Chat_partnerContext;
class Sspl_chat_partnerContext extends ParserRuleContext_1.ParserRuleContext {
    sspl() {
        return this.getRuleContext(0, SsplContext);
    }
    chat_partner() {
        return this.getRuleContext(0, Chat_partnerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_sspl_chat_partner; }
    // @Override
    enterRule(listener) {
        if (listener.enterSspl_chat_partner) {
            listener.enterSspl_chat_partner(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSspl_chat_partner) {
            listener.exitSspl_chat_partner(this);
        }
    }
}
exports.Sspl_chat_partnerContext = Sspl_chat_partnerContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(chatParser.LIST_LINE, 0); }
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
    get ruleIndex() { return chatParser.RULE_bitElem; }
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
    get ruleIndex() { return chatParser.RULE_resource; }
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
    get ruleIndex() { return chatParser.RULE_gap; }
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
    OPU() { return this.getToken(chatParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(chatParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(chatParser.STRING, 0); }
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
    get ruleIndex() { return chatParser.RULE_single_gap; }
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
class DcolonContext extends ParserRuleContext_1.ParserRuleContext {
    DBLCOLON() { return this.getToken(chatParser.DBLCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_dcolon; }
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
class AtpointContext extends ParserRuleContext_1.ParserRuleContext {
    AtPoints() { return this.getToken(chatParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(chatParser.NUMERIC, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_atpoint; }
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
            return this.getTokens(chatParser.ColonText);
        }
        else {
            return this.getToken(chatParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.ColonJson);
        }
        else {
            return this.getToken(chatParser.ColonJson, i);
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
    get ruleIndex() { return chatParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(chatParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(chatParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(chatParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(chatParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(chatParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(chatParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(chatParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(chatParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(chatParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(chatParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(chatParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(chatParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(chatParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(chatParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(chatParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(chatParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(chatParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(chatParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(chatParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(chatParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(chatParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(chatParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(chatParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(chatParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(chatParser.ColonText, 0); }
    ColonJson() { return this.tryGetToken(chatParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(chatParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(chatParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(chatParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(chatParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(chatParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(chatParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(chatParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(chatParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(chatParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    Video_type() { return this.tryGetToken(chatParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(chatParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(chatParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(chatParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(chatParser.AmpDocumentLink, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(chatParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(chatParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(chatParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(chatParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(chatParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(chatParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(chatParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(chatParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(chatParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(chatParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(chatParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(chatParser.OpAmpDocument, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(chatParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(chatParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(chatParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(chatParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(chatParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(chatParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    Video_type() { return this.tryGetToken(chatParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(chatParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(chatParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(chatParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(chatParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(chatParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
    ArticleText() { return this.tryGetToken(chatParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_articlebit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.CL);
        }
        else {
            return this.getToken(chatParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_documentbit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.CL);
        }
        else {
            return this.getToken(chatParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_websitebit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.CL);
        }
        else {
            return this.getToken(chatParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_appbit; }
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
    get ruleIndex() { return chatParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_stillimg_one; }
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
    get ruleIndex() { return chatParser.RULE_videobit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.CL);
        }
        else {
            return this.getToken(chatParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(chatParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(chatParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_imagebit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(chatParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(chatParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(chatParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(chatParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(chatParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(chatParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(chatParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(chatParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(chatParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(chatParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(chatParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(chatParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(chatParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(chatParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(chatParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(chatParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(chatParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(chatParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(chatParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(chatParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_image_chained4match; }
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
    get ruleIndex() { return chatParser.RULE_audiobit; }
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
    COLON() { return this.getToken(chatParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.CL);
        }
        else {
            return this.getToken(chatParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(chatParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(chatParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(chatParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(chatParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(chatParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(chatParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(chatParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    OPA() { return this.tryGetToken(chatParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(chatParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(chatParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(chatParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(chatParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(chatParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(chatParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(chatParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(chatParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(chatParser.TEL, 0); }
    PLUS() { return this.getToken(chatParser.PLUS, 0); }
    NUMERIC() { return this.getToken(chatParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_telephone; }
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
    URL() { return this.getToken(chatParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_url; }
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
    OPC() { return this.getToken(chatParser.OPC, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
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
    get ruleIndex() { return chatParser.RULE_item; }
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
    OPC() { return this.getToken(chatParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
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
    get ruleIndex() { return chatParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(chatParser.OPRANGLES, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(chatParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(chatParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(chatParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(chatParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(chatParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(chatParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_example; }
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
    BracEnclose() { return this.getToken(chatParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
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
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(chatParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(chatParser.AtReference, 0); }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
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
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.URL);
        }
        else {
            return this.getToken(chatParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(chatParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_reference; }
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
    AtProgress() { return this.getToken(chatParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_progress; }
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
    AtDate() { return this.getToken(chatParser.AtDate, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
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
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(chatParser.AtDate, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
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
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(chatParser.OPB, 0); }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
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
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(chatParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_instruction; }
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
    OPQ() { return this.getToken(chatParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.CL);
        }
        else {
            return this.getToken(chatParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_hint; }
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
    OPHASH() { return this.getToken(chatParser.OPHASH, 0); }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
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
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(chatParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(chatParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(chatParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(chatParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(chatParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(chatParser.NUMERIC, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(chatParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(chatParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_isinfoonly; }
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
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(chatParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(chatParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(chatParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(chatParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
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
            return this.getTokens(chatParser.COLON);
        }
        else {
            return this.getToken(chatParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(chatParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(chatParser.OPDANGLE, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_anchor; }
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
            return this.getTokens(chatParser.NL);
        }
        else {
            return this.getToken(chatParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(chatParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(chatParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.S);
        }
        else {
            return this.getToken(chatParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(chatParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(chatParser.CL, 0); }
    COLON() { return this.tryGetToken(chatParser.COLON, 0); }
    AMP() { return this.tryGetToken(chatParser.AMP, 0); }
    DBLCOLON() { return this.tryGetToken(chatParser.DBLCOLON, 0); }
    DBLEQ() { return this.tryGetToken(chatParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(chatParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_s_and_w; }
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
    OPESC() { return this.getToken(chatParser.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_bracket_escaped; }
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
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(chatParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(chatParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_sspl; }
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
            return this.getTokens(chatParser.SENTENCE);
        }
        else {
            return this.getToken(chatParser.SENTENCE, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.BARSTRING);
        }
        else {
            return this.getToken(chatParser.BARSTRING, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.AMP);
        }
        else {
            return this.getToken(chatParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.Greater);
        }
        else {
            return this.getToken(chatParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.Less);
        }
        else {
            return this.getToken(chatParser.Less, i);
        }
    }
    DBLEQ(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.DBLEQ);
        }
        else {
            return this.getToken(chatParser.DBLEQ, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.RightArrow);
        }
        else {
            return this.getToken(chatParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.RightAngle);
        }
        else {
            return this.getToken(chatParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_words; }
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
    S() { return this.getToken(chatParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_sp; }
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
