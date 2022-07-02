"use strict";
// Generated from ./Chat/chatParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.Bracket_escapedContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.DcolonContext = exports.Single_gapContext = exports.GapContext = exports.ResourceContext = exports.BitElemContext = exports.Sspl_chat_partnerContext = exports.Chat_partnerContext = exports.Chat_initiatorContext = exports.Name_textContext = exports.PartnerContext = exports.InitiatorContext = exports.ConversationContext = exports.ChatContext = exports.Bitmark_Context = exports.BitmarkContext = exports.chatParser = void 0;
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
                    this.state = 171;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 158;
                                this.bitmark_();
                                this.state = 168;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 162;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === chatParser.S) {
                                                    {
                                                        {
                                                            this.state = 159;
                                                            this.match(chatParser.S);
                                                        }
                                                    }
                                                    this.state = 164;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 165;
                                                this.match(chatParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 170;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 173;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === chatParser.BitChat || _la === chatParser.BitConv);
                    this.state = 178;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.NL) {
                        {
                            {
                                this.state = 175;
                                this.match(chatParser.NL);
                            }
                        }
                        this.state = 180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 181;
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
                this.state = 185;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.BitChat:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 183;
                            this.chat();
                        }
                        break;
                    case chatParser.BitConv:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 184;
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
                    this.state = 187;
                    this.match(chatParser.BitChat);
                    this.state = 188;
                    this.format();
                    this.state = 189;
                    this.match(chatParser.CL);
                    this.state = 193;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.NL) {
                        {
                            {
                                this.state = 190;
                                this.match(chatParser.NL);
                            }
                        }
                        this.state = 195;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (chatParser.OpAtCopyright - 69)) | (1 << (chatParser.OpAmpAudio - 69)) | (1 << (chatParser.OpAmpImage - 69)) | (1 << (chatParser.OpAmpImageZoom - 69)) | (1 << (chatParser.OpAmpImageWAudio - 69)) | (1 << (chatParser.OpAmpVideo - 69)) | (1 << (chatParser.OpAmpArticle - 69)) | (1 << (chatParser.OpAmpDocument - 69)) | (1 << (chatParser.OpAmpApp - 69)) | (1 << (chatParser.OpAmpWebsite - 69)) | (1 << (chatParser.OpAmpStillImageFilm - 69)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (chatParser.OpAmpAudioLink - 105)) | (1 << (chatParser.OpAmpImageLink - 105)) | (1 << (chatParser.OpAmpVideoLink - 105)) | (1 << (chatParser.OpAmpArticleLink - 105)) | (1 << (chatParser.OpAmpDocumentLink - 105)) | (1 << (chatParser.OpAmpAppLink - 105)) | (1 << (chatParser.OpAmpWebsiteLink - 105)) | (1 << (chatParser.OpAmpStillImageFilmLink - 105)) | (1 << (chatParser.URL - 105)) | (1 << (chatParser.LIST_LINE - 105)))) !== 0)) {
                        {
                            {
                                this.state = 196;
                                this.bitElem();
                                this.state = 200;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === chatParser.NL) {
                                    {
                                        {
                                            this.state = 197;
                                            this.match(chatParser.NL);
                                        }
                                    }
                                    this.state = 202;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 208;
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
                    this.state = 209;
                    this.initiator();
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
                    this.partner();
                    this.state = 220;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
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
                                        this.chat_initiator();
                                        this.state = 217;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
                                            {
                                                {
                                                    this.state = 214;
                                                    this.sspl_chat_partner();
                                                }
                                            }
                                            this.state = 219;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 222;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 224;
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
                    this.state = 228;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 225;
                                    this.match(chatParser.NL);
                                }
                            }
                        }
                        this.state = 230;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                    }
                    this.state = 244;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                        case 1:
                            {
                                this.state = 231;
                                this.resource();
                                this.state = 241;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 235;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === chatParser.NL) {
                                                    {
                                                        {
                                                            this.state = 232;
                                                            this.match(chatParser.NL);
                                                        }
                                                    }
                                                    this.state = 237;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 238;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 243;
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
                    this.state = 246;
                    this.match(chatParser.BitConv);
                    this.state = 247;
                    this.format();
                    this.state = 248;
                    this.match(chatParser.CL);
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.NL) {
                        {
                            {
                                this.state = 249;
                                this.match(chatParser.NL);
                            }
                        }
                        this.state = 254;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 264;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (chatParser.OpAtCopyright - 69)) | (1 << (chatParser.OpAmpAudio - 69)) | (1 << (chatParser.OpAmpImage - 69)) | (1 << (chatParser.OpAmpImageZoom - 69)) | (1 << (chatParser.OpAmpImageWAudio - 69)) | (1 << (chatParser.OpAmpVideo - 69)) | (1 << (chatParser.OpAmpArticle - 69)) | (1 << (chatParser.OpAmpDocument - 69)) | (1 << (chatParser.OpAmpApp - 69)) | (1 << (chatParser.OpAmpWebsite - 69)) | (1 << (chatParser.OpAmpStillImageFilm - 69)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (chatParser.OpAmpAudioLink - 105)) | (1 << (chatParser.OpAmpImageLink - 105)) | (1 << (chatParser.OpAmpVideoLink - 105)) | (1 << (chatParser.OpAmpArticleLink - 105)) | (1 << (chatParser.OpAmpDocumentLink - 105)) | (1 << (chatParser.OpAmpAppLink - 105)) | (1 << (chatParser.OpAmpWebsiteLink - 105)) | (1 << (chatParser.OpAmpStillImageFilmLink - 105)) | (1 << (chatParser.URL - 105)) | (1 << (chatParser.LIST_LINE - 105)))) !== 0)) {
                        {
                            {
                                this.state = 255;
                                this.bitElem();
                                this.state = 259;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === chatParser.NL) {
                                    {
                                        {
                                            this.state = 256;
                                            this.match(chatParser.NL);
                                        }
                                    }
                                    this.state = 261;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 267;
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
                    this.state = 268;
                    this.initiator();
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
                    this.partner();
                    this.state = 279;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
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
                                        this.chat_initiator();
                                        this.state = 276;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
                                            {
                                                {
                                                    this.state = 273;
                                                    this.sspl_chat_partner();
                                                }
                                            }
                                            this.state = 278;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 281;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    this.state = 283;
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
                    this.state = 287;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 284;
                                    this.match(chatParser.NL);
                                }
                            }
                        }
                        this.state = 289;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    }
                    this.state = 303;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                        case 1:
                            {
                                this.state = 290;
                                this.resource();
                                this.state = 300;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 294;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === chatParser.NL) {
                                                    {
                                                        {
                                                            this.state = 291;
                                                            this.match(chatParser.NL);
                                                        }
                                                    }
                                                    this.state = 296;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 297;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 302;
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
                    this.state = 305;
                    this.name_text();
                    this.state = 308;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.NL) {
                        {
                            this.state = 306;
                            this.match(chatParser.NL);
                            this.state = 307;
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
                    this.state = 310;
                    this.name_text();
                    this.state = 313;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.NL) {
                        {
                            this.state = 311;
                            this.match(chatParser.NL);
                            this.state = 312;
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
                    this.state = 315;
                    this.match(chatParser.OPHASH);
                    this.state = 316;
                    this.s_and_w();
                    this.state = 317;
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
                    this.state = 319;
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
        sspl_chat_partner() {
            let _localctx = new Sspl_chat_partnerContext(this._ctx, this.state);
            this.enterRule(_localctx, 18, chatParser.RULE_sspl_chat_partner);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 323;
                    this.sspl();
                    this.state = 324;
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
                this.state = 348;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 326;
                            this.match(chatParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 327;
                            this.gap();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 328;
                            this.atdef();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 329;
                            this.reference();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 330;
                            this.item();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 331;
                            this.title();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 332;
                            this.instruction();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 333;
                            this.hint();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 334;
                            this.s_and_w();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 335;
                            this.example();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 336;
                            this.bool_label();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 337;
                            this.imagebit();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 338;
                            this.audiobit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 339;
                            this.videobit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 340;
                            this.articlebit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 341;
                            this.documentbit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 342;
                            this.appbit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 343;
                            this.websitebit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 344;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 345;
                            this.angleref();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 346;
                            this.anchor();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 347;
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
                    this.state = 350;
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
                    this.state = 352;
                    this.single_gap();
                    this.state = 360;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 358;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case chatParser.OPU:
                                        {
                                            this.state = 353;
                                            this.single_gap();
                                        }
                                        break;
                                    case chatParser.OPB:
                                        {
                                            this.state = 354;
                                            this.instruction();
                                        }
                                        break;
                                    case chatParser.OPQ:
                                        {
                                            this.state = 355;
                                            this.hint();
                                        }
                                        break;
                                    case chatParser.OPC:
                                        {
                                            this.state = 356;
                                            this.item();
                                        }
                                        break;
                                    case chatParser.AtExampleWithStr:
                                    case chatParser.AtExamplecol:
                                    case chatParser.AtExamplecl:
                                        {
                                            this.state = 357;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 362;
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
                    this.state = 363;
                    this.match(chatParser.OPU);
                    this.state = 367;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                        case 1:
                            {
                                this.state = 364;
                                this.match(chatParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 365;
                                this.match(chatParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 372;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                        {
                            {
                                this.state = 369;
                                this.s_and_w();
                            }
                        }
                        this.state = 374;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 375;
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
                    this.state = 377;
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
                    this.state = 379;
                    this.match(chatParser.AtPoints);
                    this.state = 380;
                    this.match(chatParser.NUMERIC);
                    this.state = 381;
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
                    this.state = 386;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 383;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 388;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    }
                    this.state = 393;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (chatParser.AmpAudio - 75)) | (1 << (chatParser.AmpImage - 75)) | (1 << (chatParser.AmpImageZoom - 75)) | (1 << (chatParser.AmpImageWAudio - 75)) | (1 << (chatParser.AmpVideo - 75)) | (1 << (chatParser.AmpArticle - 75)) | (1 << (chatParser.AmpDocument - 75)) | (1 << (chatParser.AmpApp - 75)) | (1 << (chatParser.AmpWebsite - 75)) | (1 << (chatParser.AmpStillImageFilm - 75)) | (1 << (chatParser.AmpAudioLink - 75)) | (1 << (chatParser.AmpImageLink - 75)) | (1 << (chatParser.AmpVideoLink - 75)) | (1 << (chatParser.AmpArticleLink - 75)) | (1 << (chatParser.AmpDocumentLink - 75)) | (1 << (chatParser.AmpAppLink - 75)) | (1 << (chatParser.AmpWebsiteLink - 75)) | (1 << (chatParser.AmpStillImageFilmLink - 75)))) !== 0) || _la === chatParser.ColonText) {
                        {
                            this.state = 391;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.ColonText:
                                    {
                                        this.state = 389;
                                        this.match(chatParser.ColonText);
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
                                case chatParser.AmpAudioLink:
                                case chatParser.AmpImageLink:
                                case chatParser.AmpVideoLink:
                                case chatParser.AmpArticleLink:
                                case chatParser.AmpDocumentLink:
                                case chatParser.AmpAppLink:
                                case chatParser.AmpWebsiteLink:
                                case chatParser.AmpStillImageFilmLink:
                                    {
                                        this.state = 390;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        this.state = 395;
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
                    this.state = 396;
                    _la = this._input.LA(1);
                    if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (chatParser.AmpArticle - 80)) | (1 << (chatParser.AmpDocument - 80)) | (1 << (chatParser.AmpWebsite - 80)) | (1 << (chatParser.AmpStillImageFilm - 80)) | (1 << (chatParser.AmpAudioLink - 80)) | (1 << (chatParser.AmpImageLink - 80)) | (1 << (chatParser.AmpVideoLink - 80)) | (1 << (chatParser.AmpArticleLink - 80)) | (1 << (chatParser.AmpDocumentLink - 80)) | (1 << (chatParser.AmpAppLink - 80)) | (1 << (chatParser.AmpWebsiteLink - 80)) | (1 << (chatParser.AmpStillImageFilmLink - 80)))) !== 0) || _la === chatParser.BitmarkMinus || _la === chatParser.BitmarkPlus)) {
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
                this.state = 406;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AmpImage:
                    case chatParser.AmpImageZoom:
                    case chatParser.AmpImageWAudio:
                    case chatParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 398;
                            this.image_format();
                        }
                        break;
                    case chatParser.AmpAudio:
                    case chatParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 399;
                            this.audio_format();
                        }
                        break;
                    case chatParser.AmpVideo:
                    case chatParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 400;
                            this.video_format();
                        }
                        break;
                    case chatParser.AmpArticle:
                    case chatParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 401;
                            this.article_format();
                        }
                        break;
                    case chatParser.AmpDocument:
                    case chatParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 402;
                            this.document_format();
                        }
                        break;
                    case chatParser.AmpApp:
                    case chatParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 403;
                            this.app_format();
                        }
                        break;
                    case chatParser.AmpWebsite:
                    case chatParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 404;
                            this.website_format();
                        }
                        break;
                    case chatParser.AmpStillImageFilm:
                    case chatParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 405;
                            this.stillimagefilm_format();
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
            this.enterRule(_localctx, 38, chatParser.RULE_image_format);
            let _la;
            try {
                this.state = 422;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 408;
                            this.match(chatParser.AmpImage);
                            this.state = 411;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.Image_type:
                                    {
                                        {
                                            this.state = 409;
                                            this.match(chatParser.Image_type);
                                        }
                                    }
                                    break;
                                case chatParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 410;
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
                                case chatParser.AmpAudioLink:
                                case chatParser.AmpImageLink:
                                case chatParser.AmpVideoLink:
                                case chatParser.AmpArticleLink:
                                case chatParser.AmpDocumentLink:
                                case chatParser.AmpAppLink:
                                case chatParser.AmpWebsiteLink:
                                case chatParser.AmpStillImageFilmLink:
                                case chatParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case chatParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 413;
                            this.match(chatParser.AmpImageLink);
                            this.state = 415;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 414;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 417;
                            this.match(chatParser.AmpImageZoom);
                            this.state = 419;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 418;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 421;
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
            this.enterRule(_localctx, 40, chatParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 424;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpVideo || _la === chatParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token_1.Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 427;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.COLON) {
                        {
                            this.state = 425;
                            this.match(chatParser.COLON);
                            this.state = 426;
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
            this.enterRule(_localctx, 42, chatParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 429;
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
            this.enterRule(_localctx, 44, chatParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 431;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpDocument || _la === chatParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 46, chatParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 433;
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
            this.enterRule(_localctx, 48, chatParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 435;
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
            this.enterRule(_localctx, 50, chatParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 437;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.AmpStillImageFilm || _la === chatParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 52, chatParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 439;
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
            this.enterRule(_localctx, 54, chatParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 441;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.OpAmpDocument || _la === chatParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 56, chatParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 443;
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
            this.enterRule(_localctx, 58, chatParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 445;
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
            this.enterRule(_localctx, 60, chatParser.RULE_op_video_format);
            try {
                this.state = 457;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 447;
                            this.match(chatParser.OpAmpVideo);
                            this.state = 450;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 448;
                                        this.match(chatParser.COLON);
                                        this.state = 449;
                                        this.match(chatParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 452;
                            this.match(chatParser.OpAmpVideoLink);
                            this.state = 455;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 453;
                                        this.match(chatParser.COLON);
                                        this.state = 454;
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
            this.enterRule(_localctx, 62, chatParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 459;
                    _la = this._input.LA(1);
                    if (!(_la === chatParser.OpAmpStillImageFilm || _la === chatParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 64, chatParser.RULE_articlebit);
            try {
                this.state = 467;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpArticle:
                    case chatParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 461;
                            this.op_article_format();
                            this.state = 462;
                            this.match(chatParser.COLON);
                            this.state = 463;
                            this.url();
                            this.state = 464;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 466;
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
            this.enterRule(_localctx, 66, chatParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 469;
                    this.op_document_format();
                    this.state = 470;
                    this.match(chatParser.COLON);
                    this.state = 471;
                    this.url();
                    this.state = 472;
                    this.match(chatParser.CL);
                    this.state = 477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.OPATALT) {
                        {
                            this.state = 473;
                            this.match(chatParser.OPATALT);
                            this.state = 474;
                            this.words();
                            this.state = 475;
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
            this.enterRule(_localctx, 68, chatParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 479;
                    this.op_website_format();
                    this.state = 480;
                    this.match(chatParser.COLON);
                    this.state = 481;
                    this.url();
                    this.state = 482;
                    this.match(chatParser.CL);
                    this.state = 487;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.OPATALT) {
                        {
                            this.state = 483;
                            this.match(chatParser.OPATALT);
                            this.state = 484;
                            this.words();
                            this.state = 485;
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
            this.enterRule(_localctx, 70, chatParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 489;
                    this.op_app_format();
                    this.state = 490;
                    this.match(chatParser.COLON);
                    this.state = 493;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case chatParser.URL:
                            {
                                this.state = 491;
                                this.url();
                            }
                            break;
                        case chatParser.TEL:
                            {
                                this.state = 492;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 495;
                    this.match(chatParser.CL);
                    this.state = 500;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.OPATALT) {
                        {
                            this.state = 496;
                            this.match(chatParser.OPATALT);
                            this.state = 497;
                            this.words();
                            this.state = 498;
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
            this.enterRule(_localctx, 72, chatParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 502;
                    this.stillimg_one();
                    this.state = 506;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 503;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 508;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 74, chatParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 509;
                    this.op_stillimagefilm_format();
                    this.state = 510;
                    this.match(chatParser.COLON);
                    this.state = 514;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.S) {
                        {
                            {
                                this.state = 511;
                                this.match(chatParser.S);
                            }
                        }
                        this.state = 516;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 517;
                    this.url();
                    this.state = 518;
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
            this.enterRule(_localctx, 76, chatParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 520;
                    this.video_one();
                    this.state = 524;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 521;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 526;
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
        video_one() {
            let _localctx = new Video_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 78, chatParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 527;
                    this.op_video_format();
                    this.state = 528;
                    this.match(chatParser.COLON);
                    this.state = 529;
                    this.url();
                    this.state = 530;
                    this.match(chatParser.CL);
                    this.state = 535;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                        case 1:
                            {
                                this.state = 531;
                                this.match(chatParser.OPATALT);
                                this.state = 532;
                                this.words();
                                this.state = 533;
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
            this.enterRule(_localctx, 80, chatParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 537;
                    this.image_one();
                    this.state = 541;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 538;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 543;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                    }
                    this.state = 546;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                        case 1:
                            {
                                this.state = 544;
                                this.match(chatParser.NL);
                                this.state = 545;
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
            this.enterRule(_localctx, 82, chatParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 548;
                    this.op_image_format();
                    this.state = 549;
                    this.match(chatParser.COLON);
                    this.state = 553;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === chatParser.S) {
                        {
                            {
                                this.state = 550;
                                this.match(chatParser.S);
                            }
                        }
                        this.state = 555;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 556;
                    this.url();
                    this.state = 557;
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
            this.enterRule(_localctx, 84, chatParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 573;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 559;
                            this.match(chatParser.OpAmpImage);
                            this.state = 562;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.Image_type:
                                    {
                                        {
                                            this.state = 560;
                                            this.match(chatParser.Image_type);
                                        }
                                    }
                                    break;
                                case chatParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 561;
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
                            this.state = 564;
                            this.match(chatParser.OpAmpImageLink);
                            this.state = 566;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 565;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 568;
                            this.match(chatParser.OpAmpImageZoom);
                            this.state = 570;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.Image_type) {
                                {
                                    this.state = 569;
                                    this.match(chatParser.Image_type);
                                }
                            }
                        }
                        break;
                    case chatParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 572;
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
            this.enterRule(_localctx, 86, chatParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 592;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 575;
                            this.match(chatParser.AtSrc);
                            this.state = 576;
                            this.match(chatParser.COLON);
                            this.state = 577;
                            this.url();
                            this.state = 578;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtWidth:
                    case chatParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 580;
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
                            this.state = 581;
                            this.match(chatParser.COLON);
                            this.state = 582;
                            this.match(chatParser.NUMERIC);
                            this.state = 583;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPATALT:
                    case chatParser.OpAtCaption:
                    case chatParser.OpAtLicense:
                    case chatParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 584;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 588;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 585;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 590;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                            }
                            this.state = 591;
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
            this.enterRule(_localctx, 88, chatParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 611;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 594;
                            this.match(chatParser.AtSrc);
                            this.state = 595;
                            this.match(chatParser.COLON);
                            this.state = 596;
                            this.url();
                            this.state = 597;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtWidth:
                    case chatParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 599;
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
                            this.state = 600;
                            this.match(chatParser.COLON);
                            this.state = 601;
                            this.match(chatParser.NUMERIC);
                            this.state = 602;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPATALT:
                    case chatParser.OpAtCaption:
                    case chatParser.OpAtLicense:
                    case chatParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 603;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 607;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 604;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 609;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                            }
                            this.state = 610;
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
            this.enterRule(_localctx, 90, chatParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 613;
                    this.audio_one();
                    this.state = 617;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 614;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 619;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 92, chatParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 620;
                    this.op_audio_format();
                    this.state = 621;
                    this.match(chatParser.COLON);
                    this.state = 622;
                    this.url();
                    this.state = 623;
                    this.match(chatParser.CL);
                    this.state = 628;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                        case 1:
                            {
                                this.state = 624;
                                this.match(chatParser.OPATALT);
                                this.state = 625;
                                this.words();
                                this.state = 626;
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
            this.enterRule(_localctx, 94, chatParser.RULE_audio_format);
            let _la;
            try {
                this.state = 640;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 630;
                            this.match(chatParser.AmpAudio);
                            this.state = 633;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.COLON) {
                                {
                                    this.state = 631;
                                    this.match(chatParser.COLON);
                                    this.state = 632;
                                    this.match(chatParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case chatParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 635;
                            this.match(chatParser.AmpAudioLink);
                            this.state = 638;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.COLON) {
                                {
                                    this.state = 636;
                                    this.match(chatParser.COLON);
                                    this.state = 637;
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
            this.enterRule(_localctx, 96, chatParser.RULE_op_audio_format);
            try {
                this.state = 652;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 642;
                            this.match(chatParser.OpAmpAudio);
                            this.state = 645;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 643;
                                        this.match(chatParser.COLON);
                                        this.state = 644;
                                        this.match(chatParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case chatParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 647;
                            this.match(chatParser.OpAmpAudioLink);
                            this.state = 650;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 648;
                                        this.match(chatParser.COLON);
                                        this.state = 649;
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
            this.enterRule(_localctx, 98, chatParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 685;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OPA:
                    case chatParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 657;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.OPA:
                                    {
                                        this.state = 654;
                                        this.match(chatParser.OPA);
                                        this.state = 655;
                                        this.s_and_w();
                                    }
                                    break;
                                case chatParser.AtSrc:
                                    {
                                        this.state = 656;
                                        this.match(chatParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 659;
                            this.match(chatParser.COLON);
                            this.state = 663;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 660;
                                            this.match(chatParser.S);
                                        }
                                    }
                                }
                                this.state = 665;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                            }
                            this.state = 668;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 668;
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
                                        case chatParser.URL:
                                            {
                                                this.state = 666;
                                                this.s_and_w();
                                            }
                                            break;
                                        case chatParser.NL:
                                            {
                                                this.state = 667;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 670;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 672;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtWidth:
                    case chatParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 673;
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
                            this.state = 674;
                            this.match(chatParser.COLON);
                            this.state = 675;
                            this.match(chatParser.NUMERIC);
                            this.state = 676;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPATALT:
                    case chatParser.OpAtCaption:
                    case chatParser.OpAtLicense:
                    case chatParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 677;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 681;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 678;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 683;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                            }
                            this.state = 684;
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
            this.enterRule(_localctx, 100, chatParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 687;
                    this.match(chatParser.TEL);
                    this.state = 688;
                    this.match(chatParser.PLUS);
                    this.state = 689;
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
            this.enterRule(_localctx, 102, chatParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 691;
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
            this.enterRule(_localctx, 104, chatParser.RULE_item);
            let _la;
            try {
                this.state = 723;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 693;
                            this.match(chatParser.OPC);
                            this.state = 694;
                            this.match(chatParser.CL);
                            this.state = 702;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 698;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.S) {
                                            {
                                                {
                                                    this.state = 695;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 700;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 701;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 704;
                            this.match(chatParser.OPC);
                            this.state = 705;
                            this.s_and_w();
                            this.state = 710;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (chatParser.COLON - 26)) | (1 << (chatParser.AMP - 26)) | (1 << (chatParser.Greater - 26)) | (1 << (chatParser.Less - 26)) | (1 << (chatParser.RightAngle - 26)) | (1 << (chatParser.RightArrow - 26)) | (1 << (chatParser.DBLEQ - 26)) | (1 << (chatParser.SENTENCE - 26)))) !== 0)) {
                                {
                                    this.state = 708;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case chatParser.COLON:
                                            {
                                                this.state = 706;
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
                                            {
                                                this.state = 707;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 712;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 713;
                            this.match(chatParser.CL);
                            this.state = 721;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 717;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.S) {
                                            {
                                                {
                                                    this.state = 714;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 719;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 720;
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
            this.enterRule(_localctx, 106, chatParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 725;
                    this.match(chatParser.OPC);
                    this.state = 726;
                    this.s_and_w();
                    this.state = 731;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (chatParser.COLON - 26)) | (1 << (chatParser.AMP - 26)) | (1 << (chatParser.Greater - 26)) | (1 << (chatParser.Less - 26)) | (1 << (chatParser.RightAngle - 26)) | (1 << (chatParser.RightArrow - 26)) | (1 << (chatParser.DBLEQ - 26)) | (1 << (chatParser.SENTENCE - 26)))) !== 0)) {
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
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 108, chatParser.RULE_angleref);
            let _la;
            try {
                this.state = 746;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 736;
                            this.match(chatParser.OPRANGLES);
                            this.state = 738;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 737;
                                    this.s_and_w();
                                }
                            }
                            this.state = 740;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 741;
                            this.match(chatParser.OPRANGLEL);
                            this.state = 743;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 742;
                                    this.s_and_w();
                                }
                            }
                            this.state = 745;
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
            this.enterRule(_localctx, 110, chatParser.RULE_example);
            let _la;
            try {
                this.state = 755;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 748;
                            this.match(chatParser.AtExamplecl);
                        }
                        break;
                    case chatParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 749;
                            this.match(chatParser.AtExampleWithStr);
                        }
                        break;
                    case chatParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 750;
                            this.match(chatParser.AtExamplecol);
                            this.state = 752;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.SENTENCE) {
                                {
                                    this.state = 751;
                                    this.match(chatParser.SENTENCE);
                                }
                            }
                            this.state = 754;
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
            this.enterRule(_localctx, 112, chatParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 796;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 757;
                            this.match(chatParser.BracEnclose);
                            this.state = 759;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 758;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 782;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    {
                                        this.state = 761;
                                        this.s_and_w();
                                        this.state = 771;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 762;
                                                        this.match(chatParser.NL);
                                                        this.state = 766;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 763;
                                                                        this.match(chatParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 768;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 773;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                                        }
                                        this.state = 777;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.NL) {
                                            {
                                                {
                                                    this.state = 774;
                                                    this.match(chatParser.NL);
                                                }
                                            }
                                            this.state = 779;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 784;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 785;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 786;
                            this.match(chatParser.BracEnclose);
                            this.state = 792;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 790;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 787;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 788;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 789;
                                                this.match(chatParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 794;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 795;
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
            this.enterRule(_localctx, 114, chatParser.RULE_reference);
            let _la;
            try {
                this.state = 820;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 798;
                            this.match(chatParser.AtReference);
                            this.state = 803;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 803;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 799;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 800;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 801;
                                                this.match(chatParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 802;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 805;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 807;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 808;
                            this.match(chatParser.AtReference);
                            this.state = 816;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 814;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 809;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 810;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 811;
                                                this.match(chatParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 812;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 813;
                                                this.match(chatParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 818;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 819;
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
            this.enterRule(_localctx, 116, chatParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 822;
                    this.match(chatParser.AtProgress);
                    this.state = 823;
                    this.s_and_w();
                    this.state = 824;
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
            this.enterRule(_localctx, 118, chatParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 826;
                    this.match(chatParser.AtDate);
                    this.state = 830;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 830;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 827;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 828;
                                        this.match(chatParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 829;
                                        this.match(chatParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 832;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                    this.state = 834;
                    this.match(chatParser.CL);
                    this.state = 836;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === chatParser.AtDate) {
                        {
                            this.state = 835;
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
            this.enterRule(_localctx, 120, chatParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 838;
                    this.match(chatParser.AtDate);
                    this.state = 842;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 842;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 839;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 840;
                                        this.match(chatParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 841;
                                        this.match(chatParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 844;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                    this.state = 846;
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
            this.enterRule(_localctx, 122, chatParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 882;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 848;
                            this.match(chatParser.OPB);
                            this.state = 850;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 849;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 873;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    {
                                        this.state = 852;
                                        this.s_and_w();
                                        this.state = 862;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 853;
                                                        this.match(chatParser.NL);
                                                        this.state = 857;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 854;
                                                                        this.match(chatParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 859;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 864;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                                        }
                                        this.state = 868;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === chatParser.NL) {
                                            {
                                                {
                                                    this.state = 865;
                                                    this.match(chatParser.NL);
                                                }
                                            }
                                            this.state = 870;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 875;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 876;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 877;
                            this.match(chatParser.OPB);
                            this.state = 879;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 878;
                                    this.s_and_w();
                                }
                            }
                            this.state = 881;
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
            this.enterRule(_localctx, 124, chatParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 884;
                    this.match(chatParser.OPQ);
                    this.state = 886;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 885;
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
                        this.state = 888;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.OPDOT) | (1 << chatParser.S) | (1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.COMMENT) | (1 << chatParser.Image_type) | (1 << chatParser.Audio_type) | (1 << chatParser.Video_type) | (1 << chatParser.OPDOLL) | (1 << chatParser.OPBUL) | (1 << chatParser.OPESC) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPP) | (1 << chatParser.OPM) | (1 << chatParser.OPS) | (1 << chatParser.OPR) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.PLUS) | (1 << chatParser.DotAt) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.HSPL - 32)) | (1 << (chatParser.HSPL2 - 32)) | (1 << (chatParser.SSPL - 32)) | (1 << (chatParser.SSPL2 - 32)) | (1 << (chatParser.DCANY - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NOTCL - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.OPAT - 32)) | (1 << (chatParser.AtProgress - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtWidth - 32)) | (1 << (chatParser.AtHeight - 32)) | (1 << (chatParser.AtProgressPoints - 32)) | (1 << (chatParser.AtShortanswer - 32)) | (1 << (chatParser.AtLonganswer - 32)) | (1 << (chatParser.AtExampleWithStr - 32)) | (1 << (chatParser.AtExamplecol - 32)) | (1 << (chatParser.AtExamplecl - 32)) | (1 << (chatParser.AtPartialAnswerS - 32)) | (1 << (chatParser.AtPartialAnswer - 32)) | (1 << (chatParser.AtLabeltrue - 32)) | (1 << (chatParser.AtLabelfalse - 32)) | (1 << (chatParser.AtPoints - 32)) | (1 << (chatParser.AtSrc - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OPAMARK - 64)) | (1 << (chatParser.ShowInIndex - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)) | (1 << (chatParser.OpAtIsTracked - 64)) | (1 << (chatParser.OpAtIsInfoOnly - 64)) | (1 << (chatParser.AtDate - 64)) | (1 << (chatParser.Http - 64)) | (1 << (chatParser.Https - 64)) | (1 << (chatParser.AmpAudio - 64)) | (1 << (chatParser.AmpImage - 64)) | (1 << (chatParser.AmpImageZoom - 64)) | (1 << (chatParser.AmpImageWAudio - 64)) | (1 << (chatParser.AmpVideo - 64)) | (1 << (chatParser.AmpArticle - 64)) | (1 << (chatParser.AmpDocument - 64)) | (1 << (chatParser.AmpApp - 64)) | (1 << (chatParser.AmpWebsite - 64)) | (1 << (chatParser.AmpStillImageFilm - 64)) | (1 << (chatParser.OpAmpAudio - 64)) | (1 << (chatParser.OpAmpImage - 64)) | (1 << (chatParser.OpAmpImageZoom - 64)) | (1 << (chatParser.OpAmpImageWAudio - 64)) | (1 << (chatParser.OpAmpVideo - 64)) | (1 << (chatParser.OpAmpArticle - 64)) | (1 << (chatParser.OpAmpArticleAtt - 64)) | (1 << (chatParser.OpAmpDocument - 64)) | (1 << (chatParser.OpAmpApp - 64)) | (1 << (chatParser.OpAmpWebsite - 64)) | (1 << (chatParser.OpAmpStillImageFilm - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (chatParser.BracEnclose - 96)) | (1 << (chatParser.AmpAudioLink - 96)) | (1 << (chatParser.AmpImageLink - 96)) | (1 << (chatParser.AmpVideoLink - 96)) | (1 << (chatParser.AmpArticleLink - 96)) | (1 << (chatParser.AmpDocumentLink - 96)) | (1 << (chatParser.AmpAppLink - 96)) | (1 << (chatParser.AmpWebsiteLink - 96)) | (1 << (chatParser.AmpStillImageFilmLink - 96)) | (1 << (chatParser.OpAmpAudioLink - 96)) | (1 << (chatParser.OpAmpImageLink - 96)) | (1 << (chatParser.OpAmpVideoLink - 96)) | (1 << (chatParser.OpAmpArticleLink - 96)) | (1 << (chatParser.OpAmpDocumentLink - 96)) | (1 << (chatParser.OpAmpAppLink - 96)) | (1 << (chatParser.OpAmpWebsiteLink - 96)) | (1 << (chatParser.OpAmpStillImageFilmLink - 96)) | (1 << (chatParser.BitmarkMinus - 96)) | (1 << (chatParser.BitmarkPlus - 96)) | (1 << (chatParser.ColonText - 96)) | (1 << (chatParser.BASIC - 96)) | (1 << (chatParser.JPG - 96)) | (1 << (chatParser.PNG - 96)) | (1 << (chatParser.GIF - 96)) | (1 << (chatParser.SVG - 96)) | (1 << (chatParser.MP2 - 96)) | (1 << (chatParser.MP3 - 96)) | (1 << (chatParser.MP4 - 96)) | (1 << (chatParser.FLV - 96)) | (1 << (chatParser.WMV - 96)) | (1 << (chatParser.MPEG - 96)) | (1 << (chatParser.MPG - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.TEL - 128)) | (1 << (chatParser.DotArticleAtt - 128)) | (1 << (chatParser.STAR - 128)) | (1 << (chatParser.URL - 128)) | (1 << (chatParser.LIST_LINE - 128)))) !== 0));
                    this.state = 890;
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
            this.enterRule(_localctx, 126, chatParser.RULE_title);
            let _la;
            try {
                this.state = 904;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 892;
                            this.match(chatParser.OPHASH);
                            this.state = 895;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 895;
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
                                        case chatParser.URL:
                                            {
                                                this.state = 893;
                                                this.s_and_w();
                                            }
                                            break;
                                        case chatParser.NL:
                                            {
                                                this.state = 894;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                                this.state = 897;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 899;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 900;
                            this.match(chatParser.OPHASH);
                            this.state = 901;
                            this.s_and_w();
                            this.state = 902;
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
            this.enterRule(_localctx, 128, chatParser.RULE_bool_label);
            try {
                this.state = 914;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 906;
                            this.match(chatParser.AtLabeltrue);
                            this.state = 907;
                            this.s_and_w();
                            this.state = 908;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 910;
                            this.match(chatParser.AtLabelfalse);
                            this.state = 911;
                            this.s_and_w();
                            this.state = 912;
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
            this.enterRule(_localctx, 130, chatParser.RULE_progress_points);
            try {
                this.state = 925;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 916;
                            this.match(chatParser.AtProgressPoints);
                            this.state = 917;
                            this.match(chatParser.COLON);
                            this.state = 918;
                            this.match(chatParser.NUMERIC);
                            this.state = 919;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 920;
                            this.match(chatParser.AtProgressPoints);
                            this.state = 921;
                            this.match(chatParser.COLON);
                            this.state = 922;
                            this.s_and_w();
                            this.state = 923;
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
            this.enterRule(_localctx, 132, chatParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 927;
                    this.match(chatParser.OpAtIsTracked);
                    this.state = 928;
                    this.s_and_w();
                    this.state = 929;
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
            this.enterRule(_localctx, 134, chatParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 931;
                    this.match(chatParser.OpAtIsInfoOnly);
                    this.state = 932;
                    this.s_and_w();
                    this.state = 933;
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
            this.enterRule(_localctx, 136, chatParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 935;
                    this.atdef_();
                    this.state = 945;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 939;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.NL) {
                                        {
                                            {
                                                this.state = 936;
                                                this.match(chatParser.NL);
                                            }
                                        }
                                        this.state = 941;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 942;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 947;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
                    }
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 138, chatParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 970;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 948;
                            this.match(chatParser.OPA);
                            this.state = 949;
                            this.s_and_w();
                            this.state = 950;
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
                            this.state = 951;
                            this.s_and_w();
                            this.state = 957;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 955;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 952;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 953;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 954;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 959;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 960;
                            this.match(chatParser.CL);
                        }
                        break;
                    case chatParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 962;
                            this.match(chatParser.OpAtCopyright);
                            this.state = 966;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                            while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 963;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 968;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                            }
                            this.state = 969;
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
            this.enterRule(_localctx, 140, chatParser.RULE_dollarans);
            let _la;
            try {
                this.state = 991;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 972;
                            this.match(chatParser.OPDOLL);
                            this.state = 976;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 976;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 973;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 974;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 975;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 978;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                            this.state = 980;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 981;
                            this.match(chatParser.OPDOLL);
                            this.state = 987;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                                {
                                    this.state = 985;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 982;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 983;
                                                this.match(chatParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 984;
                                                this.match(chatParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 989;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 990;
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
            this.enterRule(_localctx, 142, chatParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 993;
                    this.match(chatParser.OPDANGLE);
                    this.state = 995;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL) {
                        {
                            this.state = 994;
                            this.s_and_w();
                        }
                    }
                    this.state = 997;
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
            this.enterRule(_localctx, 144, chatParser.RULE_lines);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1003;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 999;
                                this.s_and_w();
                                this.state = 1001;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === chatParser.NL) {
                                    {
                                        this.state = 1000;
                                        this.match(chatParser.NL);
                                    }
                                }
                            }
                        }
                        this.state = 1005;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.SENTENCE - 32)))) !== 0) || _la === chatParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException_1.RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 146, chatParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1053;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1007;
                            this.match(chatParser.STRING);
                            this.state = 1014;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1009;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1008;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 1011;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === chatParser.S);
                                        this.state = 1013;
                                        this.match(chatParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1016;
                            this.words();
                            this.state = 1023;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1018;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1017;
                                                    this.match(chatParser.S);
                                                }
                                            }
                                            this.state = 1020;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === chatParser.S);
                                        this.state = 1022;
                                        this.match(chatParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1025;
                            this.match(chatParser.OPS);
                            this.state = 1026;
                            this.s_and_w();
                            this.state = 1027;
                            this.match(chatParser.CL);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1029;
                            this.match(chatParser.NUMERIC);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1033;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.S) {
                                {
                                    {
                                        this.state = 1030;
                                        this.match(chatParser.S);
                                    }
                                }
                                this.state = 1035;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1036;
                            this.match(chatParser.COLON);
                            this.state = 1040;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1037;
                                            this.match(chatParser.S);
                                        }
                                    }
                                }
                                this.state = 1042;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1043;
                            this.match(chatParser.AMP);
                            this.state = 1047;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1044;
                                            this.match(chatParser.S);
                                        }
                                    }
                                }
                                this.state = 1049;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1050;
                            this.match(chatParser.DBLCOLON);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1051;
                            this.match(chatParser.DBLEQ);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1052;
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
            this.enterRule(_localctx, 148, chatParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1055;
                    this.match(chatParser.OPESC);
                    this.state = 1056;
                    this.s_and_w();
                    this.state = 1057;
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
            this.enterRule(_localctx, 150, chatParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1059;
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
            this.enterRule(_localctx, 152, chatParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1061;
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
            this.enterRule(_localctx, 154, chatParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1072;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1072;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case chatParser.SENTENCE:
                                            {
                                                this.state = 1063;
                                                this.match(chatParser.SENTENCE);
                                            }
                                            break;
                                        case chatParser.AMP:
                                            {
                                                this.state = 1064;
                                                this.match(chatParser.AMP);
                                            }
                                            break;
                                        case chatParser.Greater:
                                            {
                                                this.state = 1065;
                                                this.match(chatParser.Greater);
                                                this.state = 1066;
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
                                                this.state = 1067;
                                                this.match(chatParser.Less);
                                                this.state = 1068;
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
                                                this.state = 1069;
                                                this.match(chatParser.DBLEQ);
                                            }
                                            break;
                                        case chatParser.RightArrow:
                                            {
                                                this.state = 1070;
                                                this.match(chatParser.RightArrow);
                                            }
                                            break;
                                        case chatParser.RightAngle:
                                            {
                                                this.state = 1071;
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
                        this.state = 1074;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
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
            this.enterRule(_localctx, 156, chatParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1076;
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
    chatParser.OPAT = 47;
    chatParser.AtProgress = 48;
    chatParser.AtReference = 49;
    chatParser.AtWidth = 50;
    chatParser.AtHeight = 51;
    chatParser.AtProgressPoints = 52;
    chatParser.AtShortanswer = 53;
    chatParser.AtLonganswer = 54;
    chatParser.AtExampleWithStr = 55;
    chatParser.AtExamplecol = 56;
    chatParser.AtExamplecl = 57;
    chatParser.AtPartialAnswerS = 58;
    chatParser.AtPartialAnswer = 59;
    chatParser.AtLabeltrue = 60;
    chatParser.AtLabelfalse = 61;
    chatParser.AtPoints = 62;
    chatParser.AtSrc = 63;
    chatParser.OPATALT = 64;
    chatParser.OPAMARK = 65;
    chatParser.ShowInIndex = 66;
    chatParser.OpAtCaption = 67;
    chatParser.OpAtLicense = 68;
    chatParser.OpAtCopyright = 69;
    chatParser.OpAtIsTracked = 70;
    chatParser.OpAtIsInfoOnly = 71;
    chatParser.AtDate = 72;
    chatParser.Http = 73;
    chatParser.Https = 74;
    chatParser.AmpAudio = 75;
    chatParser.AmpImage = 76;
    chatParser.AmpImageZoom = 77;
    chatParser.AmpImageWAudio = 78;
    chatParser.AmpVideo = 79;
    chatParser.AmpArticle = 80;
    chatParser.AmpDocument = 81;
    chatParser.AmpApp = 82;
    chatParser.AmpWebsite = 83;
    chatParser.AmpStillImageFilm = 84;
    chatParser.OpAmpAudio = 85;
    chatParser.OpAmpImage = 86;
    chatParser.OpAmpImageZoom = 87;
    chatParser.OpAmpImageWAudio = 88;
    chatParser.OpAmpVideo = 89;
    chatParser.OpAmpArticle = 90;
    chatParser.OpAmpArticleAtt = 91;
    chatParser.OpAmpDocument = 92;
    chatParser.OpAmpApp = 93;
    chatParser.OpAmpWebsite = 94;
    chatParser.OpAmpStillImageFilm = 95;
    chatParser.BracEnclose = 96;
    chatParser.AmpAudioLink = 97;
    chatParser.AmpImageLink = 98;
    chatParser.AmpVideoLink = 99;
    chatParser.AmpArticleLink = 100;
    chatParser.AmpDocumentLink = 101;
    chatParser.AmpAppLink = 102;
    chatParser.AmpWebsiteLink = 103;
    chatParser.AmpStillImageFilmLink = 104;
    chatParser.OpAmpAudioLink = 105;
    chatParser.OpAmpImageLink = 106;
    chatParser.OpAmpVideoLink = 107;
    chatParser.OpAmpArticleLink = 108;
    chatParser.OpAmpDocumentLink = 109;
    chatParser.OpAmpAppLink = 110;
    chatParser.OpAmpWebsiteLink = 111;
    chatParser.OpAmpStillImageFilmLink = 112;
    chatParser.BitmarkMinus = 113;
    chatParser.BitmarkPlus = 114;
    chatParser.ColonText = 115;
    chatParser.BASIC = 116;
    chatParser.JPG = 117;
    chatParser.PNG = 118;
    chatParser.GIF = 119;
    chatParser.SVG = 120;
    chatParser.MP2 = 121;
    chatParser.MP3 = 122;
    chatParser.MP4 = 123;
    chatParser.FLV = 124;
    chatParser.WMV = 125;
    chatParser.MPEG = 126;
    chatParser.MPG = 127;
    chatParser.TEL = 128;
    chatParser.DotArticleAtt = 129;
    chatParser.STAR = 130;
    chatParser.URL = 131;
    chatParser.LIST_LINE = 132;
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
    chatParser.RULE_image_format = 19;
    chatParser.RULE_video_format = 20;
    chatParser.RULE_article_format = 21;
    chatParser.RULE_document_format = 22;
    chatParser.RULE_app_format = 23;
    chatParser.RULE_website_format = 24;
    chatParser.RULE_stillimagefilm_format = 25;
    chatParser.RULE_op_article_format = 26;
    chatParser.RULE_op_document_format = 27;
    chatParser.RULE_op_app_format = 28;
    chatParser.RULE_op_website_format = 29;
    chatParser.RULE_op_video_format = 30;
    chatParser.RULE_op_stillimagefilm_format = 31;
    chatParser.RULE_articlebit = 32;
    chatParser.RULE_documentbit = 33;
    chatParser.RULE_websitebit = 34;
    chatParser.RULE_appbit = 35;
    chatParser.RULE_stillimagefilmbit = 36;
    chatParser.RULE_stillimg_one = 37;
    chatParser.RULE_videobit = 38;
    chatParser.RULE_video_one = 39;
    chatParser.RULE_imagebit = 40;
    chatParser.RULE_image_one = 41;
    chatParser.RULE_op_image_format = 42;
    chatParser.RULE_image_chained = 43;
    chatParser.RULE_image_chained4match = 44;
    chatParser.RULE_audiobit = 45;
    chatParser.RULE_audio_one = 46;
    chatParser.RULE_audio_format = 47;
    chatParser.RULE_op_audio_format = 48;
    chatParser.RULE_resource_chained = 49;
    chatParser.RULE_telephone = 50;
    chatParser.RULE_url = 51;
    chatParser.RULE_item = 52;
    chatParser.RULE_lead = 53;
    chatParser.RULE_angleref = 54;
    chatParser.RULE_example = 55;
    chatParser.RULE_bracketed_text = 56;
    chatParser.RULE_reference = 57;
    chatParser.RULE_progress = 58;
    chatParser.RULE_dateprop = 59;
    chatParser.RULE_dateprop_chained = 60;
    chatParser.RULE_instruction = 61;
    chatParser.RULE_hint = 62;
    chatParser.RULE_title = 63;
    chatParser.RULE_bool_label = 64;
    chatParser.RULE_progress_points = 65;
    chatParser.RULE_istracked = 66;
    chatParser.RULE_isinfoonly = 67;
    chatParser.RULE_atdef = 68;
    chatParser.RULE_atdef_ = 69;
    chatParser.RULE_dollarans = 70;
    chatParser.RULE_anchor = 71;
    chatParser.RULE_lines = 72;
    chatParser.RULE_s_and_w = 73;
    chatParser.RULE_bracket_escaped = 74;
    chatParser.RULE_clnsp = 75;
    chatParser.RULE_sspl = 76;
    chatParser.RULE_words = 77;
    chatParser.RULE_sp = 78;
    // tslint:disable:no-trailing-whitespace
    chatParser.ruleNames = [
        "bitmark", "bitmark_", "chat", "conversation", "initiator", "partner",
        "name_text", "chat_initiator", "chat_partner", "sspl_chat_partner", "bitElem",
        "resource", "gap", "single_gap", "dcolon", "atpoint", "format", "resource_format",
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
        undefined, undefined, undefined, "'[@'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'",
        "'&imageWithAudio'", "'&video'", "'&article'", "'&document'", "'&app'",
        "'&website'", "'&stillImageFilm'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'&audioLink'", "'&imageLink'", "'&videoLink'", "'&articleLink'",
        "'&documentLink'", "'&appLink'", "'&websiteLink'", "'&stillImageFilmLink'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "':bitmark--'", "':bitmark++'", "':text'", "':basic'", "':jpg'",
        "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", "':flv'",
        "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", "'*'",
    ];
    chatParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitChat", "BitConv", "COMMENT", "Image_type",
        "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
        "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
        "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
        "Less", "RightAngle", "RightArrow", "DBLEQ", "HSPL", "HSPL2", "SSPL",
        "SSPL2", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE",
        "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints",
        "AtShortanswer", "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl",
        "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse",
        "AtPoints", "AtSrc", "OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption",
        "OpAtLicense", "OpAtCopyright", "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate",
        "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom", "AmpImageWAudio",
        "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm",
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
    chatParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(chatParser._LITERAL_NAMES, chatParser._SYMBOLIC_NAMES, []);
    chatParser._serializedATNSegments = 3;
    chatParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x86\u0439\x04" +
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
        "O\tO\x04P\tP\x03\x02\x03\x02\x07\x02\xA3\n\x02\f\x02\x0E\x02\xA6\v\x02" +
        "\x03\x02\x07\x02\xA9\n\x02\f\x02\x0E\x02\xAC\v\x02\x06\x02\xAE\n\x02\r" +
        "\x02\x0E\x02\xAF\x03\x02\x07\x02\xB3\n\x02\f\x02\x0E\x02\xB6\v\x02\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x05\x03\xBC\n\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x07\x04\xC2\n\x04\f\x04\x0E\x04\xC5\v\x04\x03\x04\x03\x04\x07" +
        "\x04\xC9\n\x04\f\x04\x0E\x04\xCC\v\x04\x07\x04\xCE\n\x04\f\x04\x0E\x04" +
        "\xD1\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
        "\x04\xDA\n\x04\f\x04\x0E\x04\xDD\v\x04\x06\x04\xDF\n\x04\r\x04\x0E\x04" +
        "\xE0\x03\x04\x03\x04\x07\x04\xE5\n\x04\f\x04\x0E\x04\xE8\v\x04\x03\x04" +
        "\x03\x04\x07\x04\xEC\n\x04\f\x04\x0E\x04\xEF\v\x04\x03\x04\x07\x04\xF2" +
        "\n\x04\f\x04\x0E\x04\xF5\v\x04\x05\x04\xF7\n\x04\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x07\x05\xFD\n\x05\f\x05\x0E\x05\u0100\v\x05\x03\x05\x03\x05\x07" +
        "\x05\u0104\n\x05\f\x05\x0E\x05\u0107\v\x05\x07\x05\u0109\n\x05\f\x05\x0E" +
        "\x05\u010C\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x07\x05\u0115\n\x05\f\x05\x0E\x05\u0118\v\x05\x06\x05\u011A\n\x05\r\x05" +
        "\x0E\x05\u011B\x03\x05\x03\x05\x07\x05\u0120\n\x05\f\x05\x0E\x05\u0123" +
        "\v\x05\x03\x05\x03\x05\x07\x05\u0127\n\x05\f\x05\x0E\x05\u012A\v\x05\x03" +
        "\x05\x07\x05\u012D\n\x05\f\x05\x0E\x05\u0130\v\x05\x05\x05\u0132\n\x05" +
        "\x03\x06\x03\x06\x03\x06\x05\x06\u0137\n\x06\x03\x07\x03\x07\x03\x07\x05" +
        "\x07\u013C\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
        "\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x05\f\u015F\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x07\x0E\u0169\n\x0E\f\x0E\x0E\x0E\u016C\v\x0E\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x05\x0F\u0172\n\x0F\x03\x0F\x07\x0F\u0175\n\x0F\f\x0F" +
        "\x0E\x0F\u0178\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
        "\x11\x03\x11\x03\x12\x07\x12\u0183\n\x12\f\x12\x0E\x12\u0186\v\x12\x03" +
        "\x12\x03\x12\x07\x12\u018A\n\x12\f\x12\x0E\x12\u018D\v\x12\x03\x13\x03" +
        "\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
        "\x14\u0199\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u019E\n\x15\x03\x15\x03" +
        "\x15\x05\x15\u01A2\n\x15\x03\x15\x03\x15\x05\x15\u01A6\n\x15\x03\x15\x05" +
        "\x15\u01A9\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01AE\n\x16\x03\x17\x03" +
        "\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
        "\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03" +
        " \x03 \x05 \u01C5\n \x03 \x03 \x03 \x05 \u01CA\n \x05 \u01CC\n \x03!\x03" +
        "!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01D6\n\"\x03#\x03#\x03#\x03" +
        "#\x03#\x03#\x03#\x03#\x05#\u01E0\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
        "$\x03$\x05$\u01EA\n$\x03%\x03%\x03%\x03%\x05%\u01F0\n%\x03%\x03%\x03%" +
        "\x03%\x03%\x05%\u01F7\n%\x03&\x03&\x07&\u01FB\n&\f&\x0E&\u01FE\v&\x03" +
        "\'\x03\'\x03\'\x07\'\u0203\n\'\f\'\x0E\'\u0206\v\'\x03\'\x03\'\x03\'\x03" +
        "(\x03(\x07(\u020D\n(\f(\x0E(\u0210\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x05)\u021A\n)\x03*\x03*\x07*\u021E\n*\f*\x0E*\u0221\v*\x03*\x03" +
        "*\x05*\u0225\n*\x03+\x03+\x03+\x07+\u022A\n+\f+\x0E+\u022D\v+\x03+\x03" +
        "+\x03+\x03,\x03,\x03,\x05,\u0235\n,\x03,\x03,\x05,\u0239\n,\x03,\x03," +
        "\x05,\u023D\n,\x03,\x05,\u0240\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x07-\u024D\n-\f-\x0E-\u0250\v-\x03-\x05-\u0253\n-\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u0260\n.\f.\x0E" +
        ".\u0263\v.\x03.\x05.\u0266\n.\x03/\x03/\x07/\u026A\n/\f/\x0E/\u026D\v" +
        "/\x030\x030\x030\x030\x030\x030\x030\x030\x050\u0277\n0\x031\x031\x03" +
        "1\x051\u027C\n1\x031\x031\x031\x051\u0281\n1\x051\u0283\n1\x032\x032\x03" +
        "2\x052\u0288\n2\x032\x032\x032\x052\u028D\n2\x052\u028F\n2\x033\x033\x03" +
        "3\x053\u0294\n3\x033\x033\x073\u0298\n3\f3\x0E3\u029B\v3\x033\x033\x06" +
        "3\u029F\n3\r3\x0E3\u02A0\x033\x033\x033\x033\x033\x033\x033\x073\u02AA" +
        "\n3\f3\x0E3\u02AD\v3\x033\x053\u02B0\n3\x034\x034\x034\x034\x035\x035" +
        "\x036\x036\x036\x076\u02BB\n6\f6\x0E6\u02BE\v6\x036\x056\u02C1\n6\x03" +
        "6\x036\x036\x036\x076\u02C7\n6\f6\x0E6\u02CA\v6\x036\x036\x076\u02CE\n" +
        "6\f6\x0E6\u02D1\v6\x036\x056\u02D4\n6\x056\u02D6\n6\x037\x037\x037\x03" +
        "7\x077\u02DC\n7\f7\x0E7\u02DF\v7\x037\x037\x038\x038\x058\u02E5\n8\x03" +
        "8\x038\x038\x058\u02EA\n8\x038\x058\u02ED\n8\x039\x039\x039\x039\x059" +
        "\u02F3\n9\x039\x059\u02F6\n9\x03:\x03:\x05:\u02FA\n:\x03:\x03:\x03:\x07" +
        ":\u02FF\n:\f:\x0E:\u0302\v:\x07:\u0304\n:\f:\x0E:\u0307\v:\x03:\x07:\u030A" +
        "\n:\f:\x0E:\u030D\v:\x07:\u030F\n:\f:\x0E:\u0312\v:\x03:\x03:\x03:\x03" +
        ":\x03:\x07:\u0319\n:\f:\x0E:\u031C\v:\x03:\x05:\u031F\n:\x03;\x03;\x03" +
        ";\x03;\x03;\x06;\u0326\n;\r;\x0E;\u0327\x03;\x03;\x03;\x03;\x03;\x03;" +
        "\x03;\x07;\u0331\n;\f;\x0E;\u0334\v;\x03;\x05;\u0337\n;\x03<\x03<\x03" +
        "<\x03<\x03=\x03=\x03=\x03=\x06=\u0341\n=\r=\x0E=\u0342\x03=\x03=\x05=" +
        "\u0347\n=\x03>\x03>\x03>\x03>\x06>\u034D\n>\r>\x0E>\u034E\x03>\x03>\x03" +
        "?\x03?\x05?\u0355\n?\x03?\x03?\x03?\x07?\u035A\n?\f?\x0E?\u035D\v?\x07" +
        "?\u035F\n?\f?\x0E?\u0362\v?\x03?\x07?\u0365\n?\f?\x0E?\u0368\v?\x07?\u036A" +
        "\n?\f?\x0E?\u036D\v?\x03?\x03?\x03?\x05?\u0372\n?\x03?\x05?\u0375\n?\x03" +
        "@\x03@\x06@\u0379\n@\r@\x0E@\u037A\x03@\x03@\x03A\x03A\x03A\x06A\u0382" +
        "\nA\rA\x0EA\u0383\x03A\x03A\x03A\x03A\x03A\x05A\u038B\nA\x03B\x03B\x03" +
        "B\x03B\x03B\x03B\x03B\x03B\x05B\u0395\nB\x03C\x03C\x03C\x03C\x03C\x03" +
        "C\x03C\x03C\x03C\x05C\u03A0\nC\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03" +
        "E\x03F\x03F\x07F\u03AC\nF\fF\x0EF\u03AF\vF\x03F\x07F\u03B2\nF\fF\x0EF" +
        "\u03B5\vF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u03BE\nG\fG\x0EG\u03C1" +
        "\vG\x03G\x03G\x03G\x03G\x07G\u03C7\nG\fG\x0EG\u03CA\vG\x03G\x05G\u03CD" +
        "\nG\x03H\x03H\x03H\x03H\x06H\u03D3\nH\rH\x0EH\u03D4\x03H\x03H\x03H\x03" +
        "H\x03H\x07H\u03DC\nH\fH\x0EH\u03DF\vH\x03H\x05H\u03E2\nH\x03I\x03I\x05" +
        "I\u03E6\nI\x03I\x03I\x03J\x03J\x05J\u03EC\nJ\x06J\u03EE\nJ\rJ\x0EJ\u03EF" +
        "\x03K\x03K\x06K\u03F4\nK\rK\x0EK\u03F5\x03K\x05K\u03F9\nK\x03K\x03K\x06" +
        "K\u03FD\nK\rK\x0EK\u03FE\x03K\x05K\u0402\nK\x03K\x03K\x03K\x03K\x03K\x03" +
        "K\x07K\u040A\nK\fK\x0EK\u040D\vK\x03K\x03K\x07K\u0411\nK\fK\x0EK\u0414" +
        "\vK\x03K\x03K\x07K\u0418\nK\fK\x0EK\u041B\vK\x03K\x03K\x03K\x05K\u0420" +
        "\nK\x03L\x03L\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03" +
        "O\x03O\x03O\x03O\x06O\u0433\nO\rO\x0EO\u0434\x03P\x03P\x03P\x06\u024E" +
        "\u0261\u02AB\u03C8\x02\x02Q\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\x02\x16\x03\x02&\'\x06\x02RSUVcjst\x04\x02QQee\x04\x02" +
        "RRff\x04\x02SSgg\x04\x02TThh\x04\x02UUii\x04\x02VVjj\x04\x02\\\\nn\x04" +
        "\x02^^oo\x04\x02__pp\x04\x02``qq\x04\x02aarr\x03\x0245\x04\x02BBEG\x03" +
        "\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02()\x03\x02!!\x03\x02\"\"\x02" +
        "\u04B9\x02\xAD\x03\x02\x02\x02\x04\xBB\x03\x02\x02\x02\x06\xBD\x03\x02" +
        "\x02\x02\b\xF8\x03\x02\x02\x02\n\u0133\x03\x02\x02\x02\f\u0138\x03\x02" +
        "\x02\x02\x0E\u013D\x03\x02\x02\x02\x10\u0141\x03\x02\x02\x02\x12\u0143" +
        "\x03\x02\x02\x02\x14\u0145\x03\x02\x02\x02\x16\u015E\x03\x02\x02\x02\x18" +
        "\u0160\x03\x02\x02\x02\x1A\u0162\x03\x02\x02\x02\x1C\u016D\x03\x02\x02" +
        "\x02\x1E\u017B\x03\x02\x02\x02 \u017D\x03\x02\x02\x02\"\u0184\x03\x02" +
        "\x02\x02$\u018E\x03\x02\x02\x02&\u0198\x03\x02\x02\x02(\u01A8\x03\x02" +
        "\x02\x02*\u01AA\x03\x02\x02\x02,\u01AF\x03\x02\x02\x02.\u01B1\x03\x02" +
        "\x02\x020\u01B3\x03\x02\x02\x022\u01B5\x03\x02\x02\x024\u01B7\x03\x02" +
        "\x02\x026\u01B9\x03\x02\x02\x028\u01BB\x03\x02\x02\x02:\u01BD\x03\x02" +
        "\x02\x02<\u01BF\x03\x02\x02\x02>\u01CB\x03\x02\x02\x02@\u01CD\x03\x02" +
        "\x02\x02B\u01D5\x03\x02\x02\x02D\u01D7\x03\x02\x02\x02F\u01E1\x03\x02" +
        "\x02\x02H\u01EB\x03\x02\x02\x02J\u01F8\x03\x02\x02\x02L\u01FF\x03\x02" +
        "\x02\x02N\u020A\x03\x02\x02\x02P\u0211\x03\x02\x02\x02R\u021B\x03\x02" +
        "\x02\x02T\u0226\x03\x02\x02\x02V\u023F\x03\x02\x02\x02X\u0252\x03\x02" +
        "\x02\x02Z\u0265\x03\x02\x02\x02\\\u0267\x03\x02\x02\x02^\u026E\x03\x02" +
        "\x02\x02`\u0282\x03\x02\x02\x02b\u028E\x03\x02\x02\x02d\u02AF\x03\x02" +
        "\x02\x02f\u02B1\x03\x02\x02\x02h\u02B5\x03\x02\x02\x02j\u02D5\x03\x02" +
        "\x02\x02l\u02D7\x03\x02\x02\x02n\u02EC\x03\x02\x02\x02p\u02F5\x03\x02" +
        "\x02\x02r\u031E\x03\x02\x02\x02t\u0336\x03\x02\x02\x02v\u0338\x03\x02" +
        "\x02\x02x\u033C\x03\x02\x02\x02z\u0348\x03\x02\x02\x02|\u0374\x03\x02" +
        "\x02\x02~\u0376\x03\x02\x02\x02\x80\u038A\x03\x02\x02\x02\x82\u0394\x03" +
        "\x02\x02\x02\x84\u039F\x03\x02\x02\x02\x86\u03A1\x03\x02\x02\x02\x88\u03A5" +
        "\x03\x02\x02\x02\x8A\u03A9\x03\x02\x02\x02\x8C\u03CC\x03\x02\x02\x02\x8E" +
        "\u03E1\x03\x02\x02\x02\x90\u03E3\x03\x02\x02\x02\x92\u03ED\x03\x02\x02" +
        "\x02\x94\u041F\x03\x02\x02\x02\x96\u0421\x03\x02\x02\x02\x98\u0425\x03" +
        "\x02\x02\x02\x9A\u0427\x03\x02\x02\x02\x9C\u0432\x03\x02\x02\x02\x9E\u0436" +
        "\x03\x02\x02\x02\xA0\xAA\x05\x04\x03\x02\xA1\xA3\x07\x04\x02\x02\xA2\xA1" +
        "\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5" +
        "\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xA9" +
        "\x07/\x02\x02\xA8\xA4\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8" +
        "\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA" +
        "\x03\x02\x02\x02\xAD\xA0\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xAD" +
        "\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB4\x03\x02\x02\x02\xB1\xB3" +
        "\x07/\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2" +
        "\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4" +
        "\x03\x02\x02\x02\xB7\xB8\x07\x02\x02\x03\xB8\x03\x03\x02\x02\x02\xB9\xBC" +
        "\x05\x06\x04\x02\xBA\xBC\x05\b\x05\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBA" +
        "\x03\x02\x02\x02\xBC\x05\x03\x02\x02\x02\xBD\xBE\x07\x05\x02\x02\xBE\xBF" +
        "\x05\"\x12\x02\xBF\xC3\x07\x1B\x02\x02\xC0\xC2\x07/\x02\x02\xC1\xC0\x03" +
        "\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03" +
        "\x02\x02\x02\xC4\xCF\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xCA\x05" +
        "\x16\f\x02\xC7\xC9\x07/\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02" +
        "\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCE\x03\x02" +
        "\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xC6\x03\x02\x02\x02\xCE\xD1\x03\x02" +
        "\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02" +
        "\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\t\x02\x02\x02\xD3\xD4\x05\n\x06" +
        "\x02\xD4\xD5\t\x02\x02\x02\xD5\xDE\x05\f\x07\x02\xD6\xD7\t\x02\x02\x02" +
        "\xD7\xDB\x05\x10\t\x02\xD8\xDA\x05\x14\v\x02\xD9\xD8\x03\x02\x02\x02\xDA" +
        "\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC" +
        "\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xD6\x03\x02\x02\x02\xDF" +
        "\xE0\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1" +
        "\xE2\x03\x02\x02\x02\xE2\xE6\t\x02\x02\x02\xE3\xE5\x07/\x02\x02\xE4\xE3" +
        "\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7" +
        "\x03\x02\x02\x02\xE7\xF6\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xF3" +
        "\x05\x18\r\x02\xEA\xEC\x07/\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC\xEF\x03" +
        "\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03" +
        "\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF2\x05\x18\r\x02\xF1\xED\x03" +
        "\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03" +
        "\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xE9\x03" +
        "\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\x07\x03\x02\x02\x02\xF8\xF9\x07" +
        "\x06\x02\x02\xF9\xFA\x05\"\x12\x02\xFA\xFE\x07\x1B\x02\x02\xFB\xFD\x07" +
        "/\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03" +
        "\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u010A\x03\x02\x02\x02\u0100\xFE" +
        "\x03\x02\x02\x02\u0101\u0105\x05\x16\f\x02\u0102\u0104\x07/\x02\x02\u0103" +
        "\u0102\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02" +
        "\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107" +
        "\u0105\x03\x02\x02\x02\u0108\u0101\x03\x02\x02\x02\u0109\u010C\x03\x02" +
        "\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B" +
        "\u010D\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010E\t\x02\x02" +
        "\x02\u010E\u010F\x05\n\x06\x02\u010F\u0110\t\x02\x02\x02\u0110\u0119\x05" +
        "\f\x07\x02\u0111\u0112\t\x02\x02\x02\u0112\u0116\x05\x10\t\x02\u0113\u0115" +
        "\x05\x14\v\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02" +
        "\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u011A\x03" +
        "\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u0111\x03\x02\x02\x02\u011A" +
        "\u011B\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02" +
        "\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0121\t\x02\x02\x02\u011E\u0120" +
        "\x07/\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02" +
        "\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0131\x03" +
        "\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u012E\x05\x18\r\x02\u0125" +
        "\u0127\x07/\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02" +
        "\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B" +
        "\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012D\x05\x18\r\x02" +
        "\u012C\u0128\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03" +
        "\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130" +
        "\u012E\x03\x02\x02\x02\u0131\u0124\x03\x02\x02\x02\u0131\u0132\x03\x02" +
        "\x02\x02\u0132\t\x03\x02\x02\x02\u0133\u0136\x05\x0E\b\x02\u0134\u0135" +
        "\x07/\x02\x02\u0135\u0137\x05R*\x02\u0136\u0134\x03\x02\x02\x02\u0136" +
        "\u0137\x03\x02\x02\x02\u0137\v\x03\x02\x02\x02\u0138\u013B\x05\x0E\b\x02" +
        "\u0139\u013A\x07/\x02\x02\u013A\u013C\x05R*\x02\u013B\u0139\x03\x02\x02" +
        "\x02\u013B\u013C\x03\x02\x02\x02\u013C\r\x03\x02\x02\x02\u013D\u013E\x07" +
        "\x1A\x02\x02\u013E\u013F\x05\x94K\x02\u013F\u0140\x07\x1B\x02\x02\u0140" +
        "\x0F\x03\x02\x02\x02\u0141\u0142\x05\x94K\x02\u0142\x11\x03\x02\x02\x02" +
        "\u0143\u0144\x05\x94K\x02\u0144\x13\x03\x02\x02\x02\u0145\u0146\x05\x9A" +
        "N\x02\u0146\u0147\x05\x12\n\x02\u0147\x15\x03\x02\x02\x02\u0148\u015F" +
        "\x07\x86\x02\x02\u0149\u015F\x05\x1A\x0E\x02\u014A\u015F\x05\x8AF\x02" +
        "\u014B\u015F\x05t;\x02\u014C\u015F\x05j6\x02\u014D\u015F\x05\x80A\x02" +
        "\u014E\u015F\x05|?\x02\u014F\u015F\x05~@\x02\u0150\u015F\x05\x94K\x02" +
        "\u0151\u015F\x05p9\x02\u0152\u015F\x05\x82B\x02\u0153\u015F\x05R*\x02" +
        "\u0154\u015F\x05\\/\x02\u0155\u015F\x05N(\x02\u0156\u015F\x05B\"\x02\u0157" +
        "\u015F\x05D#\x02\u0158\u015F\x05H%\x02\u0159\u015F\x05F$\x02\u015A\u015F" +
        "\x05J&\x02\u015B\u015F\x05n8\x02\u015C\u015F\x05\x90I\x02\u015D\u015F" +
        "\x05\x9EP\x02\u015E\u0148\x03\x02\x02\x02\u015E\u0149\x03\x02\x02\x02" +
        "\u015E\u014A\x03\x02\x02\x02\u015E\u014B\x03\x02\x02\x02\u015E\u014C\x03" +
        "\x02\x02\x02\u015E\u014D\x03\x02\x02\x02\u015E\u014E\x03\x02\x02\x02\u015E" +
        "\u014F\x03\x02\x02\x02\u015E\u0150\x03\x02\x02\x02\u015E\u0151\x03\x02" +
        "\x02\x02\u015E\u0152\x03\x02\x02\x02\u015E\u0153\x03\x02\x02\x02\u015E" +
        "\u0154\x03\x02\x02\x02\u015E\u0155\x03\x02\x02\x02\u015E\u0156\x03\x02" +
        "\x02\x02\u015E\u0157\x03\x02\x02\x02\u015E\u0158\x03\x02\x02\x02\u015E" +
        "\u0159\x03\x02\x02\x02\u015E\u015A\x03\x02\x02\x02\u015E\u015B\x03\x02" +
        "\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F" +
        "\x17\x03\x02\x02\x02\u0160\u0161\x05\x16\f\x02\u0161\x19\x03\x02\x02\x02" +
        "\u0162\u016A\x05\x1C\x0F\x02\u0163\u0169\x05\x1C\x0F\x02\u0164\u0169\x05" +
        "|?\x02\u0165\u0169\x05~@\x02\u0166\u0169\x05j6\x02\u0167\u0169\x05p9\x02" +
        "\u0168\u0163\x03\x02\x02\x02\u0168\u0164\x03\x02\x02\x02\u0168\u0165\x03" +
        "\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169" +
        "\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02" +
        "\x02\x02\u016B\x1B\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0171" +
        "\x07\x11\x02\x02\u016E\u0172\x07-\x02\x02\u016F\u0172\x07.\x02\x02\u0170" +
        "\u0172\x03\x02\x02\x02\u0171\u016E\x03\x02\x02\x02\u0171\u016F\x03\x02" +
        "\x02\x02\u0171\u0170\x03\x02\x02\x02\u0172\u0176\x03\x02\x02\x02\u0173" +
        "\u0175\x05\x94K\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02" +
        "\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179" +
        "\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017A\x05\x98M\x02" +
        "\u017A\x1D\x03\x02\x02\x02\u017B\u017C\x07\x1E\x02\x02\u017C\x1F\x03\x02" +
        "\x02\x02\u017D\u017E\x07@\x02\x02\u017E\u017F\x07-\x02\x02\u017F\u0180" +
        "\x07\x1B\x02\x02\u0180!\x03\x02\x02\x02\u0181\u0183\x05$\x13\x02\u0182" +
        "\u0181\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02" +
        "\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u018B\x03\x02\x02\x02\u0186" +
        "\u0184\x03\x02\x02\x02\u0187\u018A\x07u\x02\x02\u0188\u018A\x05&\x14\x02" +
        "\u0189\u0187\x03\x02\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018D\x03" +
        "\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
        "#\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E\u018F\t\x03\x02\x02" +
        "\u018F%\x03\x02\x02\x02\u0190\u0199\x05(\x15\x02\u0191\u0199\x05`1\x02" +
        "\u0192\u0199\x05*\x16\x02\u0193\u0199\x05,\x17\x02\u0194\u0199\x05.\x18" +
        "\x02\u0195\u0199\x050\x19\x02\u0196\u0199\x052\x1A\x02\u0197\u0199\x05" +
        "4\x1B\x02\u0198\u0190\x03\x02\x02\x02\u0198\u0191\x03\x02\x02\x02\u0198" +
        "\u0192\x03\x02\x02\x02\u0198\u0193\x03\x02\x02\x02\u0198\u0194\x03\x02" +
        "\x02\x02\u0198\u0195\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
        "\u0197\x03\x02\x02";
    chatParser._serializedATNSegment1 = "\x02\u0199\'\x03\x02\x02\x02\u019A\u019D\x07N\x02\x02\u019B\u019E\x07" +
        "\b\x02\x02\u019C\u019E\x07\x83\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D" +
        "\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A9\x03\x02" +
        "\x02\x02\u019F\u01A1\x07d\x02\x02\u01A0\u01A2\x07\b\x02\x02\u01A1\u01A0" +
        "\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A9\x03\x02\x02\x02" +
        "\u01A3\u01A5\x07O\x02\x02\u01A4\u01A6\x07\b\x02\x02\u01A5\u01A4\x03\x02" +
        "\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7" +
        "\u01A9\x07P\x02\x02\u01A8\u019A\x03\x02\x02\x02\u01A8\u019F\x03\x02\x02" +
        "\x02\u01A8\u01A3\x03\x02\x02\x02\u01A8\u01A7\x03\x02\x02\x02\u01A9)\x03" +
        "\x02\x02\x02\u01AA\u01AD\t\x04\x02\x02\u01AB\u01AC\x07\x1C\x02\x02\u01AC" +
        "\u01AE\x07\n\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02" +
        "\x02\u01AE+\x03\x02\x02\x02\u01AF\u01B0\t\x05\x02\x02\u01B0-\x03\x02\x02" +
        "\x02\u01B1\u01B2\t\x06\x02\x02\u01B2/\x03\x02\x02\x02\u01B3\u01B4\t\x07" +
        "\x02\x02\u01B41\x03\x02\x02\x02\u01B5\u01B6\t\b\x02\x02\u01B63\x03\x02" +
        "\x02\x02\u01B7\u01B8\t\t\x02\x02\u01B85\x03\x02\x02\x02\u01B9\u01BA\t" +
        "\n\x02\x02\u01BA7\x03\x02\x02\x02\u01BB\u01BC\t\v\x02\x02\u01BC9\x03\x02" +
        "\x02\x02\u01BD\u01BE\t\f\x02\x02\u01BE;\x03\x02\x02\x02\u01BF\u01C0\t" +
        "\r\x02\x02\u01C0=\x03\x02\x02\x02\u01C1\u01C4\x07[\x02\x02\u01C2\u01C3" +
        "\x07\x1C\x02\x02\u01C3\u01C5\x07\n\x02\x02\u01C4\u01C2\x03\x02\x02\x02" +
        "\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01CC\x03\x02\x02\x02\u01C6\u01C9\x07" +
        "m\x02\x02\u01C7\u01C8\x07\x1C\x02\x02\u01C8\u01CA\x07\n\x02\x02\u01C9" +
        "\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02" +
        "\x02\x02\u01CB\u01C1\x03\x02\x02\x02\u01CB\u01C6\x03\x02\x02\x02\u01CC" +
        "?\x03\x02\x02\x02\u01CD\u01CE\t\x0E\x02\x02\u01CEA\x03\x02\x02\x02\u01CF" +
        "\u01D0\x056\x1C\x02\u01D0\u01D1\x07\x1C\x02\x02\u01D1\u01D2\x05h5\x02" +
        "\u01D2\u01D3\x07\x1B\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D6\x07" +
        "+\x02\x02\u01D5\u01CF\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6" +
        "C\x03\x02\x02\x02\u01D7\u01D8\x058\x1D\x02\u01D8\u01D9\x07\x1C\x02\x02" +
        "\u01D9\u01DA\x05h5\x02\u01DA\u01DF\x07\x1B\x02\x02\u01DB\u01DC\x07B\x02" +
        "\x02\u01DC\u01DD\x05\x9CO\x02\u01DD\u01DE\x07\x1B\x02\x02\u01DE\u01E0" +
        "\x03\x02\x02\x02\u01DF\u01DB\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02" +
        "\u01E0E\x03\x02\x02\x02\u01E1\u01E2\x05<\x1F\x02\u01E2\u01E3\x07\x1C\x02" +
        "\x02\u01E3\u01E4\x05h5\x02\u01E4\u01E9\x07\x1B\x02\x02\u01E5\u01E6\x07" +
        "B\x02\x02\u01E6\u01E7\x05\x9CO\x02\u01E7\u01E8\x07\x1B\x02\x02\u01E8\u01EA" +
        "\x03\x02\x02\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02" +
        "\u01EAG\x03\x02\x02\x02\u01EB\u01EC\x05:\x1E\x02\u01EC\u01EF\x07\x1C\x02" +
        "\x02\u01ED\u01F0\x05h5\x02\u01EE\u01F0\x05f4\x02\u01EF\u01ED\x03\x02\x02" +
        "\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F6" +
        "\x07\x1B\x02\x02\u01F2\u01F3\x07B\x02\x02\u01F3\u01F4\x05\x9CO\x02\u01F4" +
        "\u01F5\x07\x1B\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01F2\x03\x02" +
        "\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7I\x03\x02\x02\x02\u01F8\u01FC" +
        "\x05L\'\x02\u01F9\u01FB\x05d3\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FE" +
        "\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
        "\u01FDK\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0200\x05@!" +
        "\x02\u0200\u0204\x07\x1C\x02\x02\u0201\u0203\x07\x04\x02\x02\u0202\u0201" +
        "\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02" +
        "\u0204\u0205\x03\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u0204\x03" +
        "\x02\x02\x02\u0207\u0208\x05h5\x02\u0208\u0209\x07\x1B\x02\x02\u0209M" +
        "\x03\x02\x02\x02\u020A\u020E\x05P)\x02\u020B\u020D\x05d3\x02\u020C\u020B" +
        "\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02" +
        "\u020E\u020F\x03\x02\x02\x02\u020FO\x03\x02\x02\x02\u0210\u020E\x03\x02" +
        "\x02\x02\u0211\u0212\x05> \x02\u0212\u0213\x07\x1C\x02\x02\u0213\u0214" +
        "\x05h5\x02\u0214\u0219\x07\x1B\x02\x02\u0215\u0216\x07B\x02\x02\u0216" +
        "\u0217\x05\x9CO\x02\u0217\u0218\x07\x1B\x02\x02\u0218\u021A\x03\x02\x02" +
        "\x02\u0219\u0215\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021AQ\x03" +
        "\x02\x02\x02\u021B\u021F\x05T+\x02\u021C\u021E\x05X-\x02\u021D\u021C\x03" +
        "\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F" +
        "\u0220\x03\x02\x02\x02\u0220\u0224\x03\x02\x02\x02\u0221\u021F\x03\x02" +
        "\x02\x02\u0222\u0223\x07/\x02\x02\u0223\u0225\x07D\x02\x02\u0224\u0222" +
        "\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225S\x03\x02\x02\x02\u0226" +
        "\u0227\x05V,\x02\u0227\u022B\x07\x1C\x02\x02\u0228\u022A\x07\x04\x02\x02" +
        "\u0229\u0228\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03" +
        "\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03\x02\x02\x02\u022D" +
        "\u022B\x03\x02\x02\x02\u022E\u022F\x05h5\x02\u022F\u0230\x07\x1B\x02\x02" +
        "\u0230U\x03\x02\x02\x02\u0231\u0234\x07X\x02\x02\u0232\u0235\x07\b\x02" +
        "\x02\u0233\u0235\x07\x83\x02\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0233" +
        "\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0240\x03\x02\x02\x02" +
        "\u0236\u0238\x07l\x02\x02\u0237\u0239\x07\b\x02\x02\u0238\u0237\x03\x02" +
        "\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u0240\x03\x02\x02\x02\u023A" +
        "\u023C\x07Y\x02\x02\u023B\u023D\x07\b\x02\x02\u023C\u023B\x03\x02\x02" +
        "\x02\u023C\u023D\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u0240" +
        "\x07Z\x02\x02\u023F\u0231\x03\x02\x02\x02\u023F\u0236\x03\x02\x02\x02" +
        "\u023F\u023A\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240W\x03\x02" +
        "\x02\x02\u0241\u0242\x07A\x02\x02\u0242\u0243\x07\x1C\x02\x02\u0243\u0244" +
        "\x05h5\x02\u0244\u0245\x07\x1B\x02\x02\u0245\u0253\x03\x02\x02\x02\u0246" +
        "\u0247\t\x0F\x02\x02\u0247\u0248\x07\x1C\x02\x02\u0248\u0249\x07-\x02" +
        "\x02\u0249\u0253\x07\x1B\x02\x02\u024A\u024E\t\x10\x02\x02\u024B\u024D" +
        "\v\x02\x02\x02\u024C\u024B\x03\x02\x02\x02\u024D\u0250\x03\x02\x02\x02" +
        "\u024E\u024F\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024F\u0251\x03" +
        "\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0253\x07\x1B\x02\x02\u0252" +
        "\u0241\x03\x02\x02\x02\u0252\u0246\x03\x02\x02\x02\u0252\u024A\x03\x02" +
        "\x02\x02\u0253Y\x03\x02\x02\x02\u0254\u0255\x07A\x02\x02\u0255\u0256\x07" +
        "\x1C\x02\x02\u0256\u0257\x05h5\x02\u0257\u0258\x07\x1B\x02\x02\u0258\u0266" +
        "\x03\x02\x02\x02\u0259\u025A\t\x0F\x02\x02\u025A\u025B\x07\x1C\x02\x02" +
        "\u025B\u025C\x07-\x02\x02\u025C\u0266\x07\x1B\x02\x02\u025D\u0261\t\x10" +
        "\x02\x02\u025E\u0260\v\x02\x02\x02\u025F\u025E\x03\x02\x02\x02\u0260\u0263" +
        "\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02" +
        "\u0262\u0264\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0264\u0266\x07" +
        "\x1B\x02\x02\u0265\u0254\x03\x02\x02\x02\u0265\u0259\x03\x02\x02\x02\u0265" +
        "\u025D\x03\x02\x02\x02\u0266[\x03\x02\x02\x02\u0267\u026B\x05^0\x02\u0268" +
        "\u026A\x05d3\x02\u0269\u0268\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02" +
        "\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C]\x03\x02" +
        "\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u026F\x05b2\x02\u026F\u0270" +
        "\x07\x1C\x02\x02\u0270\u0271\x05h5\x02\u0271\u0276\x07\x1B\x02\x02\u0272" +
        "\u0273\x07B\x02\x02\u0273\u0274\x05\x9CO\x02\u0274\u0275\x07\x1B\x02\x02" +
        "\u0275\u0277\x03\x02\x02\x02\u0276\u0272\x03\x02\x02\x02\u0276\u0277\x03" +
        "\x02\x02\x02\u0277_\x03\x02\x02\x02\u0278\u027B\x07M\x02\x02\u0279\u027A" +
        "\x07\x1C\x02\x02\u027A\u027C\x07\t\x02\x02\u027B\u0279\x03\x02\x02\x02" +
        "\u027B\u027C\x03\x02\x02\x02\u027C\u0283\x03\x02\x02\x02\u027D\u0280\x07" +
        "c\x02\x02\u027E\u027F\x07\x1C\x02\x02\u027F\u0281\x07\t\x02\x02\u0280" +
        "\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03\x02" +
        "\x02\x02\u0282\u0278\x03\x02\x02\x02\u0282\u027D\x03\x02\x02\x02\u0283" +
        "a\x03\x02\x02\x02\u0284\u0287\x07W\x02\x02\u0285\u0286\x07\x1C\x02\x02" +
        "\u0286\u0288\x07\t\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03" +
        "\x02\x02\x02\u0288\u028F\x03\x02\x02\x02\u0289\u028C\x07k\x02\x02\u028A" +
        "\u028B\x07\x1C\x02\x02\u028B\u028D\x07\t\x02\x02\u028C\u028A\x03\x02\x02" +
        "\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u0284" +
        "\x03\x02\x02\x02\u028E\u0289\x03\x02\x02\x02\u028Fc\x03\x02\x02\x02\u0290" +
        "\u0291\x07\x14\x02\x02\u0291\u0294\x05\x94K\x02\u0292\u0294\x07A\x02\x02" +
        "\u0293\u0290\x03\x02\x02\x02\u0293\u0292\x03\x02\x02\x02\u0294\u0295\x03" +
        "\x02\x02\x02\u0295\u0299\x07\x1C\x02\x02\u0296\u0298\x07\x04\x02\x02\u0297" +
        "\u0296\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u0297\x03\x02" +
        "\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029E\x03\x02\x02\x02\u029B" +
        "\u0299\x03\x02\x02\x02\u029C\u029F\x05\x94K\x02\u029D\u029F\x07/\x02\x02" +
        "\u029E\u029C\x03\x02\x02\x02\u029E\u029D\x03\x02\x02\x02\u029F\u02A0\x03" +
        "\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1" +
        "\u02A2\x03\x02\x02\x02\u02A2\u02B0\x07\x1B\x02\x02\u02A3\u02A4\t\x0F\x02" +
        "\x02\u02A4\u02A5\x07\x1C\x02\x02\u02A5\u02A6\x07-\x02\x02\u02A6\u02B0" +
        "\x07\x1B\x02\x02\u02A7\u02AB\t\x10\x02\x02\u02A8\u02AA\v\x02\x02\x02\u02A9" +
        "\u02A8\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02AC\x03\x02" +
        "\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC\u02AE\x03\x02\x02\x02\u02AD" +
        "\u02AB\x03\x02\x02\x02\u02AE\u02B0\x07\x1B\x02\x02\u02AF\u0293\x03\x02" +
        "\x02\x02\u02AF\u02A3\x03\x02\x02\x02\u02AF\u02A7\x03\x02\x02\x02\u02B0" +
        "e\x03\x02\x02\x02\u02B1\u02B2\x07\x82\x02\x02\u02B2\u02B3\x07\x1F\x02" +
        "\x02\u02B3\u02B4\x07-\x02\x02\u02B4g\x03\x02\x02\x02\u02B5\u02B6\x07\x85" +
        "\x02\x02\u02B6i\x03\x02\x02\x02\u02B7\u02B8\x07\x19\x02\x02\u02B8\u02C0" +
        "\x07\x1B\x02\x02\u02B9\u02BB\x07\x04\x02\x02\u02BA\u02B9\x03\x02\x02\x02" +
        "\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03" +
        "\x02\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF" +
        "\u02C1\x05l7\x02\u02C0\u02BC\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02" +
        "\u02C1\u02D6\x03\x02\x02\x02\u02C2\u02C3\x07\x19\x02\x02\u02C3\u02C8\x05" +
        "\x94K\x02\u02C4\u02C7\x07\x1C\x02\x02\u02C5\u02C7\x05\x9CO\x02\u02C6\u02C4" +
        "\x03\x02\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02" +
        "\u02C8\u02C6\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03" +
        "\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB\u02D3\x07\x1B\x02\x02\u02CC" +
        "\u02CE\x07\x04\x02\x02\u02CD\u02CC\x03\x02\x02\x02\u02CE\u02D1\x03\x02" +
        "\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0" +
        "\u02D2\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D4\x05l7\x02" +
        "\u02D3\u02CF\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x03" +
        "\x02\x02\x02\u02D5\u02B7\x03\x02\x02\x02\u02D5\u02C2\x03\x02\x02\x02\u02D6" +
        "k\x03\x02\x02\x02\u02D7\u02D8\x07\x19\x02\x02\u02D8\u02DD\x05\x94K\x02" +
        "\u02D9\u02DC\x07\x1C\x02\x02\u02DA\u02DC\x05\x9CO\x02\u02DB\u02D9\x03" +
        "\x02\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD" +
        "\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x03\x02" +
        "\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07\x1B\x02\x02\u02E1" +
        "m\x03\x02\x02\x02\u02E2\u02E4\x07\x0E\x02\x02\u02E3\u02E5\x05\x94K\x02" +
        "\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03" +
        "\x02\x02\x02\u02E6\u02ED\x07\x1B\x02\x02\u02E7\u02E9\x07\x0F\x02\x02\u02E8" +
        "\u02EA\x05\x94K\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02" +
        "\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02ED\x07\x1B\x02\x02\u02EC\u02E2" +
        "\x03\x02\x02\x02\u02EC\u02E7\x03\x02\x02\x02\u02EDo\x03\x02\x02\x02\u02EE" +
        "\u02F6\x07;\x02\x02\u02EF\u02F6\x079\x02\x02\u02F0\u02F2\x07:\x02\x02" +
        "\u02F1\u02F3\x070\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03" +
        "\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x07\x02\x02\x03\u02F5" +
        "\u02EE\x03\x02\x02\x02\u02F5\u02EF\x03\x02\x02\x02\u02F5\u02F0\x03\x02" +
        "\x02\x02\u02F6q\x03\x02\x02\x02\u02F7\u02F9\x07b\x02\x02\u02F8\u02FA\x05" +
        "\x94K\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA" +
        "\u0310\x03\x02\x02\x02\u02FB\u0305\x05\x94K\x02\u02FC\u0300\x07/\x02\x02" +
        "\u02FD\u02FF\x07\x04\x02\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF\u0302\x03" +
        "\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301" +
        "\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0303\u02FC\x03\x02" +
        "\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0305" +
        "\u0306\x03\x02\x02\x02\u0306\u030B\x03\x02\x02\x02\u0307\u0305\x03\x02" +
        "\x02\x02\u0308\u030A\x07/\x02\x02\u0309\u0308\x03\x02\x02\x02\u030A\u030D" +
        "\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02" +
        "\u030C\u030F\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030E\u02FB\x03" +
        "\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310" +
        "\u0311\x03\x02\x02\x02\u0311\u0313\x03\x02\x02\x02\u0312\u0310\x03\x02" +
        "\x02\x02\u0313\u031F\x07\x1B\x02\x02\u0314\u031A\x07b\x02\x02\u0315\u0319" +
        "\x05\x94K\x02\u0316\u0319\x07/\x02\x02\u0317\u0319\x07\x04\x02\x02\u0318" +
        "\u0315\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0317\x03\x02" +
        "\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A" +
        "\u031B\x03\x02\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C\u031A\x03\x02" +
        "\x02\x02\u031D\u031F\x07\x02\x02\x03\u031E\u02F7\x03\x02\x02\x02\u031E" +
        "\u0314\x03\x02\x02\x02\u031Fs\x03\x02\x02\x02\u0320\u0325\x073\x02\x02" +
        "\u0321\u0326\x05\x94K\x02\u0322\u0326\x07\x1C\x02\x02\u0323\u0326\x07" +
        "\x85\x02\x02\u0324\u0326\x07/\x02\x02\u0325\u0321\x03\x02\x02\x02\u0325" +
        "\u0322\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325\u0324\x03\x02" +
        "\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0327" +
        "\u0328\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u0337\x07\x1B" +
        "\x02\x02\u032A\u0332\x073\x02\x02\u032B\u0331\x05\x94K\x02\u032C\u0331" +
        "\x07\x1C\x02\x02\u032D\u0331\x07\x85\x02\x02\u032E\u0331\x07/\x02\x02" +
        "\u032F\u0331\x07\x04\x02\x02\u0330\u032B\x03\x02\x02\x02\u0330\u032C\x03" +
        "\x02\x02\x02\u0330\u032D\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330" +
        "\u032F\x03\x02\x02\x02\u0331\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02" +
        "\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x03\x02\x02\x02\u0334" +
        "\u0332\x03\x02\x02\x02\u0335\u0337\x07\x02\x02\x03\u0336\u0320\x03\x02" +
        "\x02\x02\u0336\u032A\x03\x02\x02\x02\u0337u\x03\x02\x02\x02\u0338\u0339" +
        "\x072\x02\x02\u0339\u033A\x05\x94K\x02\u033A\u033B\x07\x1B\x02\x02\u033B" +
        "w\x03\x02\x02\x02\u033C\u0340\x07J\x02\x02\u033D\u0341\x05\x94K\x02\u033E" +
        "\u0341\x07\x1C\x02\x02\u033F\u0341\x07/\x02\x02\u0340\u033D\x03\x02\x02" +
        "\x02\u0340\u033E\x03\x02\x02\x02\u0340\u033F\x03\x02\x02\x02\u0341\u0342" +
        "\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02" +
        "\u0343\u0344\x03\x02\x02\x02\u0344\u0346\x07\x1B\x02\x02\u0345\u0347\x05" +
        "z>\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347y" +
        "\x03\x02\x02\x02\u0348\u034C\x07J\x02\x02\u0349\u034D\x05\x94K\x02\u034A" +
        "\u034D\x07\x1C\x02\x02\u034B\u034D\x07/\x02\x02\u034C\u0349\x03\x02\x02" +
        "\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D\u034E" +
        "\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02" +
        "\u034F\u0350\x03\x02\x02\x02\u0350\u0351\x07\x1B\x02\x02\u0351{\x03\x02" +
        "\x02\x02\u0352\u0354\x07\x12\x02\x02\u0353\u0355\x05\x94K\x02\u0354\u0353" +
        "\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u036B\x03\x02\x02\x02" +
        "\u0356\u0360\x05\x94K\x02\u0357\u035B\x07/\x02\x02\u0358\u035A\x07\x04" +
        "\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02\u035B" +
        "\u0359\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035F\x03\x02" +
        "\x02\x02\u035D\u035B\x03\x02\x02\x02\u035E\u0357\x03\x02\x02\x02\u035F" +
        "\u0362\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02" +
        "\x02\x02\u0361\u0366\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363" +
        "\u0365\x07/\x02\x02\u0364\u0363\x03\x02\x02\x02\u0365\u0368\x03\x02\x02" +
        "\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u036A" +
        "\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369\u0356\x03\x02\x02\x02" +
        "\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B\u036C\x03" +
        "\x02\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036E" +
        "\u0375\x07\x1B\x02\x02\u036F\u0371\x07\x12\x02\x02\u0370\u0372\x05\x94" +
        "K\x02\u0371\u0370\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u0373" +
        "\x03\x02\x02\x02\u0373\u0375\x07\x02\x02\x03\u0374\u0352\x03\x02\x02\x02" +
        "\u0374\u036F\x03\x02\x02\x02\u0375}\x03\x02\x02\x02\u0376\u0378\x07\x13" +
        "\x02\x02\u0377\u0379\n\x11\x02\x02\u0378\u0377\x03\x02\x02\x02\u0379\u037A" +
        "\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02" +
        "\u037B\u037C\x03\x02\x02\x02\u037C\u037D\x07\x1B\x02\x02\u037D\x7F\x03" +
        "\x02\x02\x02\u037E\u0381\x07\x1A\x02\x02\u037F\u0382\x05\x94K\x02\u0380" +
        "\u0382\x07/\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0380\x03\x02\x02" +
        "\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0384" +
        "\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u038B\x07\x1B\x02\x02" +
        "\u0386\u0387\x07\x1A\x02\x02\u0387\u0388\x05\x94K\x02\u0388\u0389\x07" +
        "\x02\x02\x03\u0389\u038B\x03\x02\x02\x02\u038A\u037E\x03\x02\x02\x02\u038A" +
        "\u0386\x03\x02\x02\x02\u038B\x81\x03\x02\x02\x02\u038C\u038D\x07>\x02" +
        "\x02\u038D\u038E\x05\x94K\x02\u038E\u038F\x07\x1B\x02\x02\u038F\u0395" +
        "\x03\x02\x02\x02\u0390\u0391\x07?\x02\x02\u0391\u0392\x05\x94K\x02\u0392" +
        "\u0393\x07\x1B\x02\x02\u0393\u0395\x03\x02\x02\x02\u0394\u038C\x03\x02" +
        "\x02\x02\u0394\u0390\x03\x02\x02\x02\u0395\x83\x03\x02\x02\x02\u0396\u0397" +
        "\x076\x02\x02\u0397\u0398\x07\x1C\x02\x02\u0398\u0399\x07-\x02\x02\u0399" +
        "\u03A0\x07\x1B\x02\x02\u039A\u039B\x076\x02\x02\u039B\u039C\x07\x1C\x02" +
        "\x02\u039C\u039D\x05\x94K\x02\u039D\u039E\x07\x1B\x02\x02\u039E\u03A0" +
        "\x03\x02\x02\x02\u039F\u0396\x03\x02\x02\x02\u039F\u039A\x03\x02\x02\x02" +
        "\u03A0\x85\x03\x02\x02\x02\u03A1\u03A2\x07H\x02\x02\u03A2\u03A3\x05\x94" +
        "K\x02\u03A3\u03A4\x07\x1B\x02\x02\u03A4\x87\x03\x02\x02\x02\u03A5\u03A6" +
        "\x07I\x02\x02\u03A6\u03A7\x05\x94K\x02\u03A7\u03A8\x07\x1B\x02\x02\u03A8" +
        "\x89\x03\x02\x02\x02\u03A9\u03B3\x05\x8CG\x02\u03AA\u03AC\x07/\x02\x02" +
        "\u03AB\u03AA\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02\u03AD\u03AB\x03" +
        "\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF" +
        "\u03AD\x03\x02\x02\x02\u03B0\u03B2\x05\x8CG\x02\u03B1\u03AD\x03\x02\x02" +
        "\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4" +
        "\x03\x02\x02\x02\u03B4\x8B\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02" +
        "\u03B6\u03B7\x07\x14\x02\x02\u03B7\u03B8\x05\x94K\x02\u03B8\u03B9\t\x12" +
        "\x02\x02\u03B9\u03BF\x05\x94K\x02\u03BA\u03BE\x07/\x02\x02\u03BB\u03BE" +
        "\x07\x1C\x02\x02\u03BC\u03BE\x05\x94K\x02\u03BD\u03BA\x03\x02\x02\x02" +
        "\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BE\u03C1\x03" +
        "\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0" +
        "\u03C2\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C3\x07\x1B" +
        "\x02\x02\u03C3\u03CD\x03\x02\x02\x02\u03C4\u03C8\x07G\x02\x02\u03C5\u03C7" +
        "\v\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03CA\x03\x02\x02\x02" +
        "\u03C8\u03C9\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CB\x03" +
        "\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CD\x07\x1B\x02\x02\u03CC" +
        "\u03B6\x03\x02\x02\x02\u03CC\u03C4\x03\x02\x02\x02\u03CD\x8D\x03\x02\x02" +
        "\x02\u03CE\u03D2\x07\v\x02\x02\u03CF\u03D3\x05\x94K\x02\u03D0\u03D3\x07" +
        "\x1C\x02\x02\u03D1\u03D3\x07/\x02\x02\u03D2\u03CF\x03\x02\x02\x02\u03D2" +
        "\u03D0\x03\x02\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02" +
        "\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5" +
        "\u03D6\x03\x02\x02\x02\u03D6\u03E2\x07\x1B\x02\x02\u03D7\u03DD\x07\v\x02" +
        "\x02\u03D8\u03DC\x05\x94K\x02\u03D9\u03DC\x07\x1C\x02\x02\u03DA\u03DC" +
        "\x07/\x02\x02\u03DB\u03D8\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02" +
        "\u03DB\u03DA\x03\x02\x02\x02\u03DC\u03DF\x03\x02\x02\x02\u03DD\u03DB\x03" +
        "\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03E0\x03\x02\x02\x02\u03DF" +
        "\u03DD\x03\x02\x02\x02\u03E0\u03E2\x07\x02\x02\x03\u03E1\u03CE\x03\x02" +
        "\x02\x02\u03E1\u03D7\x03\x02\x02\x02\u03E2\x8F\x03\x02\x02\x02\u03E3\u03E5" +
        "\x07\x10\x02\x02\u03E4\u03E6\x05\x94K\x02\u03E5\u03E4\x03\x02\x02\x02" +
        "\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8\x07" +
        "\x1B\x02\x02\u03E8\x91\x03\x02\x02\x02\u03E9\u03EB\x05\x94K\x02\u03EA" +
        "\u03EC\x07/\x02\x02\u03EB\u03EA\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02" +
        "\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03E9\x03\x02\x02\x02\u03EE\u03EF" +
        "\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02" +
        "\u03F0\x93\x03\x02\x02\x02\u03F1\u03F8\x07.\x02\x02\u03F2\u03F4\x07\x04" +
        "\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5" +
        "\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F7\x03\x02" +
        "\x02\x02\u03F7\u03F9\x07-\x02\x02\u03F8\u03F3\x03\x02\x02\x02\u03F8\u03F9" +
        "\x03\x02\x02\x02\u03F9\u0420\x03\x02\x02\x02\u03FA\u0401\x05\x9CO\x02" +
        "\u03FB\u03FD\x07\x04\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD\u03FE\x03" +
        "\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
        "\u0400\x03\x02\x02\x02\u0400\u0402\x07-\x02\x02\u0401\u03FC\x03\x02\x02" +
        "\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0420\x03\x02\x02\x02\u0403\u0404" +
        "\x07\x17\x02\x02\u0404\u0405\x05\x94K\x02\u0405\u0406\x07\x1B\x02\x02" +
        "\u0406\u0420\x03\x02\x02\x02\u0407\u0420\x07-\x02\x02\u0408\u040A\x07" +
        "\x04\x02\x02\u0409\u0408\x03\x02\x02\x02\u040A\u040D\x03\x02\x02\x02\u040B" +
        "\u0409\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040E\x03\x02" +
        "\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E\u0412\x07\x1C\x02\x02\u040F" +
        "\u0411\x07\x04\x02\x02\u0410\u040F\x03\x02\x02\x02\u0411\u0414\x03\x02" +
        "\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413" +
        "\u0420\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415\u0419\x07\x1D" +
        "\x02\x02\u0416\u0418\x07\x04\x02\x02\u0417\u0416\x03\x02\x02\x02\u0418" +
        "\u041B\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419\u041A\x03\x02" +
        "\x02\x02\u041A\u0420\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041C" +
        "\u0420\x07\x1E\x02\x02\u041D\u0420\x07%\x02\x02\u041E\u0420\x07\x85\x02" +
        "\x02\u041F\u03F1\x03\x02\x02\x02\u041F\u03FA\x03\x02\x02\x02\u041F\u0403" +
        "\x03\x02\x02\x02\u041F\u0407\x03\x02\x02\x02\u041F\u040B\x03\x02\x02\x02" +
        "\u041F\u0415\x03\x02\x02\x02\u041F\u041C\x03\x02\x02\x02\u041F\u041D\x03" +
        "\x02\x02\x02\u041F\u041E\x03\x02\x02\x02\u0420\x95\x03\x02\x02\x02\u0421" +
        "\u0422\x07\r\x02\x02\u0422\u0423\x05\x94K\x02\u0423\u0424\x07\x1B\x02" +
        "\x02\u0424\x97\x03\x02\x02\x02\u0425\u0426\x07\x1B\x02\x02\u0426\x99\x03" +
        "\x02\x02\x02\u0427\u0428\t\x13\x02\x02\u0428\x9B\x03\x02\x02\x02\u0429" +
        "\u0433\x070\x02\x02\u042A\u0433\x07\x1D\x02\x02\u042B\u042C\x07!\x02\x02" +
        "\u042C\u0433\n\x14\x02\x02\u042D\u042E\x07\"\x02\x02\u042E\u0433\n\x15" +
        "\x02\x02\u042F\u0433\x07%\x02\x02\u0430\u0433\x07$\x02\x02\u0431\u0433" +
        "\x07#\x02\x02\u0432\u0429\x03\x02\x02\x02\u0432\u042A\x03\x02\x02\x02" +
        "\u0432\u042B\x03\x02\x02\x02\u0432\u042D\x03\x02\x02\x02\u0432\u042F\x03" +
        "\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0431\x03\x02\x02\x02\u0433" +
        "\u0434\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02\u0434\u0435\x03\x02" +
        "\x02\x02\u0435\x9D\x03\x02\x02\x02\u0436\u0437\x07\x04\x02\x02\u0437\x9F" +
        "\x03\x02\x02\x02\x93\xA4\xAA\xAF\xB4\xBB\xC3\xCA\xCF\xDB\xE0\xE6\xED\xF3" +
        "\xF6\xFE\u0105\u010A\u0116\u011B\u0121\u0128\u012E\u0131\u0136\u013B\u015E" +
        "\u0168\u016A\u0171\u0176\u0184\u0189\u018B\u0198\u019D\u01A1\u01A5\u01A8" +
        "\u01AD\u01C4\u01C9\u01CB\u01D5\u01DF\u01E9\u01EF\u01F6\u01FC\u0204\u020E" +
        "\u0219\u021F\u0224\u022B\u0234\u0238\u023C\u023F\u024E\u0252\u0261\u0265" +
        "\u026B\u0276\u027B\u0280\u0282\u0287\u028C\u028E\u0293\u0299\u029E\u02A0" +
        "\u02AB\u02AF\u02BC\u02C0\u02C6\u02C8\u02CF\u02D3\u02D5\u02DB\u02DD\u02E4" +
        "\u02E9\u02EC\u02F2\u02F5\u02F9\u0300\u0305\u030B\u0310\u0318\u031A\u031E" +
        "\u0325\u0327\u0330\u0332\u0336\u0340\u0342\u0346\u034C\u034E";
    chatParser._serializedATNSegment2 = "\u0354\u035B\u0360\u0366\u036B\u0371\u0374\u037A\u0381\u0383\u038A\u0394" +
        "\u039F\u03AD\u03B3\u03BD\u03BF\u03C8\u03CC\u03D2\u03D4\u03DB\u03DD\u03E1" +
        "\u03E5\u03EB\u03EF\u03F5\u03F8\u03FE\u0401\u040B\u0412\u0419\u041F\u0432" +
        "\u0434";
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
