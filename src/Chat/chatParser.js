"use strict";
// Generated from ./Chat/chatParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.S_and_wContext = exports.LinesContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.DcolonContext = exports.Single_gapContext = exports.GapContext = exports.ResourceContext = exports.BitElemContext = exports.Sspl_chat_partnerContext = exports.Chat_partnerContext = exports.Chat_initiatorContext = exports.Name_altContext = exports.Name_textContext = exports.Partner1_nameContext = exports.Partner1Context = exports.PartnerContext = exports.InitiatorContext = exports.Conversation_left_1_screamContext = exports.Conversation_left_1_thoughtContext = exports.Conversation_right_1_screamContext = exports.Conversation_right_1_thoughtContext = exports.Conversation_right_1Context = exports.Conversation_left_1Context = exports.ConversationContext = exports.ChatContext = exports.Bitmark_Context = exports.BitmarkContext = exports.chatParser = void 0;
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
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, chatParser.RULE_bitmark);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 176;
                            this.bitmark_();
                            this.state = 186;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 180;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === chatParser.S) {
                                                {
                                                    {
                                                        this.state = 177;
                                                        this.match(chatParser.S);
                                                    }
                                                }
                                                this.state = 182;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 183;
                                            this.match(chatParser.NL);
                                        }
                                    }
                                }
                                this.state = 188;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 191;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.BitConversationLeft1) | (1 << chatParser.BitConversationRight1) | (1 << chatParser.BitConversationRight1Thought) | (1 << chatParser.BitConversationRight1Scream) | (1 << chatParser.BitConversationLeft1Thought) | (1 << chatParser.BitConversationLeft1Scream))) !== 0));
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 193;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 198;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 199;
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
            this.state = 209;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.BitChat:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 201;
                        this.chat();
                    }
                    break;
                case chatParser.BitConv:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 202;
                        this.conversation();
                    }
                    break;
                case chatParser.BitConversationLeft1:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 203;
                        this.conversation_left_1();
                    }
                    break;
                case chatParser.BitConversationRight1:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 204;
                        this.conversation_right_1();
                    }
                    break;
                case chatParser.BitConversationRight1Thought:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 205;
                        this.conversation_right_1_thought();
                    }
                    break;
                case chatParser.BitConversationRight1Scream:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 206;
                        this.conversation_right_1_scream();
                    }
                    break;
                case chatParser.BitConversationLeft1Thought:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 207;
                        this.conversation_left_1_thought();
                    }
                    break;
                case chatParser.BitConversationLeft1Scream:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 208;
                        this.conversation_left_1_scream();
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
                this.state = 211;
                this.match(chatParser.BitChat);
                this.state = 212;
                this.format();
                this.state = 213;
                this.match(chatParser.CL);
                this.state = 217;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 214;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 219;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 220;
                            this.bitElem();
                            this.state = 224;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 221;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 226;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 232;
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
                this.state = 233;
                this.initiator();
                this.state = 234;
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
                this.state = 235;
                this.partner();
                this.state = 244;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 236;
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
                                    this.state = 237;
                                    this.chat_initiator();
                                    this.state = 241;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
                                        {
                                            {
                                                this.state = 238;
                                                this.sspl_chat_partner();
                                            }
                                        }
                                        this.state = 243;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 246;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 248;
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
                this.state = 252;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 249;
                                this.match(chatParser.NL);
                            }
                        }
                    }
                    this.state = 254;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                }
                this.state = 268;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 255;
                            this.resource();
                            this.state = 265;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
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
                                            this.state = 262;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 267;
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
                this.state = 270;
                this.match(chatParser.BitConv);
                this.state = 271;
                this.format();
                this.state = 272;
                this.match(chatParser.CL);
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 273;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 278;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 279;
                            this.bitElem();
                            this.state = 283;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 280;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 285;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 290;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 291;
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
                this.state = 292;
                this.initiator();
                this.state = 293;
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
                this.state = 294;
                this.partner();
                this.state = 303;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 295;
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
                                    this.state = 296;
                                    this.chat_initiator();
                                    this.state = 300;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.SSPL || _la === chatParser.SSPL2) {
                                        {
                                            {
                                                this.state = 297;
                                                this.sspl_chat_partner();
                                            }
                                        }
                                        this.state = 302;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 307;
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
                this.state = 311;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 308;
                                this.match(chatParser.NL);
                            }
                        }
                    }
                    this.state = 313;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                }
                this.state = 327;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 314;
                            this.resource();
                            this.state = 324;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 318;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === chatParser.NL) {
                                                {
                                                    {
                                                        this.state = 315;
                                                        this.match(chatParser.NL);
                                                    }
                                                }
                                                this.state = 320;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 321;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 326;
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
    conversation_left_1() {
        let _localctx = new Conversation_left_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, chatParser.RULE_conversation_left_1);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.match(chatParser.BitConversationLeft1);
                this.state = 330;
                this.format2();
                this.state = 331;
                this.match(chatParser.CL);
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 332;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 337;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 338;
                            this.bitElem();
                            this.state = 342;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 339;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 344;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 349;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 350;
                this.partner1();
                this.state = 354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 351;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 356;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 358;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 357;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 360;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
    conversation_right_1() {
        let _localctx = new Conversation_right_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, chatParser.RULE_conversation_right_1);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(chatParser.BitConversationRight1);
                this.state = 363;
                this.format2();
                this.state = 364;
                this.match(chatParser.CL);
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 365;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 370;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 371;
                            this.bitElem();
                            this.state = 375;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 372;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 377;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 382;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 383;
                this.partner1();
                this.state = 387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 384;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 389;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 391;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 390;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 393;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
    conversation_right_1_thought() {
        let _localctx = new Conversation_right_1_thoughtContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, chatParser.RULE_conversation_right_1_thought);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.match(chatParser.BitConversationRight1Thought);
                this.state = 396;
                this.format2();
                this.state = 397;
                this.match(chatParser.CL);
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 398;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 403;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 404;
                            this.bitElem();
                            this.state = 408;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 405;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 410;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 415;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 416;
                this.partner1();
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 417;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 422;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 424;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 423;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 426;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
    conversation_right_1_scream() {
        let _localctx = new Conversation_right_1_screamContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, chatParser.RULE_conversation_right_1_scream);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.match(chatParser.BitConversationRight1Scream);
                this.state = 429;
                this.format2();
                this.state = 430;
                this.match(chatParser.CL);
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 431;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 436;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 437;
                            this.bitElem();
                            this.state = 441;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 438;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 443;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 448;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 449;
                this.partner1();
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 450;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 455;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 457;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 456;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 459;
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
    conversation_left_1_thought() {
        let _localctx = new Conversation_left_1_thoughtContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, chatParser.RULE_conversation_left_1_thought);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                this.match(chatParser.BitConversationLeft1Thought);
                this.state = 462;
                this.format2();
                this.state = 463;
                this.match(chatParser.CL);
                this.state = 467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 464;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 469;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 470;
                            this.bitElem();
                            this.state = 474;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 471;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 476;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 481;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 482;
                this.partner1();
                this.state = 486;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 483;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 488;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 490;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 489;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 492;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
    conversation_left_1_scream() {
        let _localctx = new Conversation_left_1_screamContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, chatParser.RULE_conversation_left_1_scream);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 494;
                this.match(chatParser.BitConversationLeft1Scream);
                this.state = 495;
                this.format2();
                this.state = 496;
                this.match(chatParser.CL);
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 497;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 502;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 512;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPS) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.ArticleText - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)) | (1 << (chatParser.AtReference - 33)) | (1 << (chatParser.AtExampleWithStr - 33)) | (1 << (chatParser.AtExamplecol - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (chatParser.AtExamplecl - 65)) | (1 << (chatParser.AtLabeltrue - 65)) | (1 << (chatParser.AtLabelfalse - 65)) | (1 << (chatParser.OpAtCopyright - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (chatParser.OpAmpAudio - 97)) | (1 << (chatParser.OpAmpImage - 97)) | (1 << (chatParser.OpAmpImageZoom - 97)) | (1 << (chatParser.OpAmpImageWAudio - 97)) | (1 << (chatParser.OpAmpVideo - 97)) | (1 << (chatParser.OpAmpArticle - 97)) | (1 << (chatParser.OpAmpDocument - 97)) | (1 << (chatParser.OpAmpApp - 97)) | (1 << (chatParser.OpAmpWebsite - 97)) | (1 << (chatParser.OpAmpStillImageFilm - 97)) | (1 << (chatParser.OpAmpAudioLink - 97)) | (1 << (chatParser.OpAmpImageLink - 97)) | (1 << (chatParser.OpAmpVideoLink - 97)) | (1 << (chatParser.OpAmpArticleLink - 97)) | (1 << (chatParser.OpAmpDocumentLink - 97)) | (1 << (chatParser.OpAmpAppLink - 97)) | (1 << (chatParser.OpAmpWebsiteLink - 97)) | (1 << (chatParser.OpAmpStillImageFilmLink - 97)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (chatParser.OpAmpVideoEmbed - 131)) | (1 << (chatParser.OpAmpAudioEmbed - 131)) | (1 << (chatParser.OpAmpDocumentEmbed - 131)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 131)) | (1 << (chatParser.URL - 131)) | (1 << (chatParser.LIST_LINE - 131)))) !== 0)) {
                    {
                        {
                            this.state = 503;
                            this.bitElem();
                            this.state = 507;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 504;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 509;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                    this.state = 514;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 515;
                this.partner1();
                this.state = 519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.NL) {
                    {
                        {
                            this.state = 516;
                            this.match(chatParser.NL);
                        }
                    }
                    this.state = 521;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 523;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 522;
                                    this.s_and_w();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 525;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
    initiator() {
        let _localctx = new InitiatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, chatParser.RULE_initiator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 527;
                this.name_text();
                this.state = 535;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.NL || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpImage - 98)) | (1 << (chatParser.OpAmpImageZoom - 98)) | (1 << (chatParser.OpAmpImageWAudio - 98)) | (1 << (chatParser.OpAmpImageLink - 98)))) !== 0)) {
                    {
                        this.state = 531;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === chatParser.NL) {
                            {
                                {
                                    this.state = 528;
                                    this.match(chatParser.NL);
                                }
                            }
                            this.state = 533;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 534;
                        this.imagebit();
                    }
                }
                this.state = 538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.OPATALT) {
                    {
                        this.state = 537;
                        this.name_alt();
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
        this.enterRule(_localctx, 22, chatParser.RULE_partner);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this.name_text();
                this.state = 548;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.NL || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (chatParser.OpAmpImage - 98)) | (1 << (chatParser.OpAmpImageZoom - 98)) | (1 << (chatParser.OpAmpImageWAudio - 98)) | (1 << (chatParser.OpAmpImageLink - 98)))) !== 0)) {
                    {
                        this.state = 544;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === chatParser.NL) {
                            {
                                {
                                    this.state = 541;
                                    this.match(chatParser.NL);
                                }
                            }
                            this.state = 546;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 547;
                        this.imagebit();
                    }
                }
                this.state = 551;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.OPATALT) {
                    {
                        this.state = 550;
                        this.name_alt();
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
    partner1() {
        let _localctx = new Partner1Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, chatParser.RULE_partner1);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this.partner1_name();
                this.state = 561;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 557;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === chatParser.NL) {
                                {
                                    {
                                        this.state = 554;
                                        this.match(chatParser.NL);
                                    }
                                }
                                this.state = 559;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 560;
                            this.imagebit();
                        }
                        break;
                }
                this.state = 564;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.OPATALT) {
                    {
                        this.state = 563;
                        this.name_alt();
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
    partner1_name() {
        let _localctx = new Partner1_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, chatParser.RULE_partner1_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 566;
                this.match(chatParser.AtPartner);
                this.state = 567;
                this.match(chatParser.STRING);
                this.state = 568;
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
    name_text() {
        let _localctx = new Name_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, chatParser.RULE_name_text);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 570;
                this.match(chatParser.OPHASH);
                this.state = 571;
                this.s_and_w();
                this.state = 572;
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
    name_alt() {
        let _localctx = new Name_altContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, chatParser.RULE_name_alt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 574;
                this.match(chatParser.OPATALT);
                this.state = 575;
                this.match(chatParser.STRING);
                this.state = 576;
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
        this.enterRule(_localctx, 32, chatParser.RULE_chat_initiator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 578;
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
        this.enterRule(_localctx, 34, chatParser.RULE_chat_partner);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 580;
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
        this.enterRule(_localctx, 36, chatParser.RULE_sspl_chat_partner);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 582;
                this.sspl();
                this.state = 583;
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
        this.enterRule(_localctx, 38, chatParser.RULE_bitElem);
        try {
            this.state = 608;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 585;
                        this.match(chatParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 586;
                        this.match(chatParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 587;
                        this.gap();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 588;
                        this.atdef();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 589;
                        this.reference();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 590;
                        this.item();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 591;
                        this.title();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 592;
                        this.instruction();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 593;
                        this.hint();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 594;
                        this.s_and_w();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 595;
                        this.example();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 596;
                        this.bool_label();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 597;
                        this.imagebit();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 598;
                        this.audiobit();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 599;
                        this.videobit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 600;
                        this.articlebit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 601;
                        this.documentbit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 602;
                        this.appbit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 603;
                        this.websitebit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 604;
                        this.stillimagefilmbit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 605;
                        this.angleref();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 606;
                        this.anchor();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 607;
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
        this.enterRule(_localctx, 40, chatParser.RULE_resource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
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
        this.enterRule(_localctx, 42, chatParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                this.single_gap();
                this.state = 620;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 618;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case chatParser.OPU:
                                    {
                                        this.state = 613;
                                        this.single_gap();
                                    }
                                    break;
                                case chatParser.OPB:
                                    {
                                        this.state = 614;
                                        this.instruction();
                                    }
                                    break;
                                case chatParser.OPQ:
                                    {
                                        this.state = 615;
                                        this.hint();
                                    }
                                    break;
                                case chatParser.OPC:
                                    {
                                        this.state = 616;
                                        this.item();
                                    }
                                    break;
                                case chatParser.AtExampleWithStr:
                                case chatParser.AtExamplecol:
                                case chatParser.AtExamplecl:
                                    {
                                        this.state = 617;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 622;
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
    single_gap() {
        let _localctx = new Single_gapContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, chatParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 623;
                this.match(chatParser.OPU);
                this.state = 627;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                    case 1:
                        {
                            this.state = 624;
                            this.match(chatParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 625;
                            this.match(chatParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 632;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                    {
                        {
                            this.state = 629;
                            this.s_and_w();
                        }
                    }
                    this.state = 634;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 635;
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
        this.enterRule(_localctx, 46, chatParser.RULE_dcolon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 637;
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
        this.enterRule(_localctx, 48, chatParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 639;
                this.match(chatParser.AtPoints);
                this.state = 640;
                this.match(chatParser.NUMERIC);
                this.state = 641;
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
        this.enterRule(_localctx, 50, chatParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 646;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 643;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 648;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                }
                this.state = 654;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (chatParser.AmpAudio - 86)) | (1 << (chatParser.AmpImage - 86)) | (1 << (chatParser.AmpImageZoom - 86)) | (1 << (chatParser.AmpImageWAudio - 86)) | (1 << (chatParser.AmpVideo - 86)) | (1 << (chatParser.AmpArticle - 86)) | (1 << (chatParser.AmpDocument - 86)) | (1 << (chatParser.AmpApp - 86)) | (1 << (chatParser.AmpWebsite - 86)) | (1 << (chatParser.AmpStillImageFilm - 86)) | (1 << (chatParser.AmpPdf - 86)) | (1 << (chatParser.AmpAudioLink - 86)) | (1 << (chatParser.AmpImageLink - 86)) | (1 << (chatParser.AmpVideoLink - 86)) | (1 << (chatParser.AmpArticleLink - 86)) | (1 << (chatParser.AmpDocumentLink - 86)) | (1 << (chatParser.AmpAppLink - 86)) | (1 << (chatParser.AmpWebsiteLink - 86)) | (1 << (chatParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (chatParser.AmpVideoEmbed - 126)) | (1 << (chatParser.AmpDocumentEmbed - 126)) | (1 << (chatParser.AmpStillImageFilmEmbed - 126)) | (1 << (chatParser.ColonText - 126)) | (1 << (chatParser.ColonJson - 126)))) !== 0)) {
                    {
                        this.state = 652;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case chatParser.ColonText:
                                {
                                    this.state = 649;
                                    this.match(chatParser.ColonText);
                                }
                                break;
                            case chatParser.ColonJson:
                                {
                                    this.state = 650;
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
                                    this.state = 651;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 656;
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
        this.enterRule(_localctx, 52, chatParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 657;
                _la = this._input.LA(1);
                if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (chatParser.AmpArticle - 91)) | (1 << (chatParser.AmpDocument - 91)) | (1 << (chatParser.AmpWebsite - 91)) | (1 << (chatParser.AmpStillImageFilm - 91)) | (1 << (chatParser.AmpAudioLink - 91)) | (1 << (chatParser.AmpImageLink - 91)) | (1 << (chatParser.AmpVideoLink - 91)) | (1 << (chatParser.AmpArticleLink - 91)) | (1 << (chatParser.AmpDocumentLink - 91)) | (1 << (chatParser.AmpAppLink - 91)) | (1 << (chatParser.AmpWebsiteLink - 91)) | (1 << (chatParser.AmpStillImageFilmLink - 91)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (chatParser.AmpVideoEmbed - 126)) | (1 << (chatParser.AmpAudioEmbed - 126)) | (1 << (chatParser.AmpDocumentEmbed - 126)) | (1 << (chatParser.AmpStillImageFilmEmbed - 126)) | (1 << (chatParser.BitmarkMinus - 126)) | (1 << (chatParser.BitmarkPlus - 126)) | (1 << (chatParser.ColonJson - 126)) | (1 << (chatParser.Prosemirror - 126)) | (1 << (chatParser.Placeholder - 126)))) !== 0))) {
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
        this.enterRule(_localctx, 54, chatParser.RULE_resource_format_extra);
        try {
            this.state = 668;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AmpImage:
                case chatParser.AmpImageZoom:
                case chatParser.AmpImageWAudio:
                case chatParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 659;
                        this.image_format();
                    }
                    break;
                case chatParser.AmpAudio:
                case chatParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 660;
                        this.audio_format();
                    }
                    break;
                case chatParser.AmpVideo:
                case chatParser.AmpVideoLink:
                case chatParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 661;
                        this.video_format();
                    }
                    break;
                case chatParser.AmpArticle:
                case chatParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 662;
                        this.article_format();
                    }
                    break;
                case chatParser.AmpDocument:
                case chatParser.AmpDocumentLink:
                case chatParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 663;
                        this.document_format();
                    }
                    break;
                case chatParser.AmpApp:
                case chatParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 664;
                        this.app_format();
                    }
                    break;
                case chatParser.AmpWebsite:
                case chatParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 665;
                        this.website_format();
                    }
                    break;
                case chatParser.AmpStillImageFilm:
                case chatParser.AmpStillImageFilmLink:
                case chatParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 666;
                        this.stillimagefilm_format();
                    }
                    break;
                case chatParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 667;
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
        this.enterRule(_localctx, 56, chatParser.RULE_format2);
        try {
            this.state = 675;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 670;
                        this.match(chatParser.BitmarkMinus);
                    }
                    break;
                case chatParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 671;
                        this.match(chatParser.BitmarkPlus);
                    }
                    break;
                case chatParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 672;
                        this.match(chatParser.ColonText);
                    }
                    break;
                case chatParser.ColonJson:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 673;
                        this.match(chatParser.ColonJson);
                    }
                    break;
                case chatParser.CL:
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
        this.enterRule(_localctx, 58, chatParser.RULE_image_format);
        let _la;
        try {
            this.state = 691;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 677;
                        this.match(chatParser.AmpImage);
                        this.state = 680;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case chatParser.Image_type:
                                {
                                    {
                                        this.state = 678;
                                        this.match(chatParser.Image_type);
                                    }
                                }
                                break;
                            case chatParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 679;
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
                        this.state = 682;
                        this.match(chatParser.AmpImageLink);
                        this.state = 684;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.Image_type) {
                            {
                                this.state = 683;
                                this.match(chatParser.Image_type);
                            }
                        }
                    }
                    break;
                case chatParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 686;
                        this.match(chatParser.AmpImageZoom);
                        this.state = 688;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.Image_type) {
                            {
                                this.state = 687;
                                this.match(chatParser.Image_type);
                            }
                        }
                    }
                    break;
                case chatParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 690;
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
        this.enterRule(_localctx, 60, chatParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
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
                this.state = 696;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.COLON) {
                    {
                        this.state = 694;
                        this.match(chatParser.COLON);
                        this.state = 695;
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
        this.enterRule(_localctx, 62, chatParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 698;
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
        this.enterRule(_localctx, 64, chatParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 700;
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
        this.enterRule(_localctx, 66, chatParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
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
        this.enterRule(_localctx, 68, chatParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 704;
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
        this.enterRule(_localctx, 70, chatParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 706;
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
        this.enterRule(_localctx, 72, chatParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 708;
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
        this.enterRule(_localctx, 74, chatParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 710;
                _la = this._input.LA(1);
                if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (chatParser.OpAmpDocument - 104)) | (1 << (chatParser.OpAmpDocumentLink - 104)) | (1 << (chatParser.OpAmpDocumentEmbed - 104)))) !== 0))) {
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
        this.enterRule(_localctx, 76, chatParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 712;
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
        this.enterRule(_localctx, 78, chatParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 714;
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
        this.enterRule(_localctx, 80, chatParser.RULE_op_video_format);
        try {
            this.state = 731;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 716;
                        this.match(chatParser.OpAmpVideo);
                        this.state = 719;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                            case 1:
                                {
                                    this.state = 717;
                                    this.match(chatParser.COLON);
                                    this.state = 718;
                                    this.match(chatParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case chatParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 721;
                        this.match(chatParser.OpAmpVideoLink);
                        this.state = 724;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                            case 1:
                                {
                                    this.state = 722;
                                    this.match(chatParser.COLON);
                                    this.state = 723;
                                    this.match(chatParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case chatParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 726;
                        this.match(chatParser.OpAmpVideoEmbed);
                        this.state = 729;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                            case 1:
                                {
                                    this.state = 727;
                                    this.match(chatParser.COLON);
                                    this.state = 728;
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
        this.enterRule(_localctx, 82, chatParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                _la = this._input.LA(1);
                if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (chatParser.OpAmpStillImageFilm - 107)) | (1 << (chatParser.OpAmpStillImageFilmLink - 107)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 107)))) !== 0))) {
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
        this.enterRule(_localctx, 84, chatParser.RULE_articlebit);
        try {
            this.state = 741;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OpAmpArticle:
                case chatParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 735;
                        this.op_article_format();
                        this.state = 736;
                        this.match(chatParser.COLON);
                        this.state = 737;
                        this.url();
                        this.state = 738;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 740;
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
        this.enterRule(_localctx, 86, chatParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 743;
                this.op_document_format();
                this.state = 744;
                this.match(chatParser.COLON);
                this.state = 745;
                this.url();
                this.state = 746;
                this.match(chatParser.CL);
                this.state = 751;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.OPATALT) {
                    {
                        this.state = 747;
                        this.match(chatParser.OPATALT);
                        this.state = 748;
                        this.words();
                        this.state = 749;
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
        this.enterRule(_localctx, 88, chatParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 753;
                this.op_website_format();
                this.state = 754;
                this.match(chatParser.COLON);
                this.state = 755;
                this.url();
                this.state = 756;
                this.match(chatParser.CL);
                this.state = 761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.OPATALT) {
                    {
                        this.state = 757;
                        this.match(chatParser.OPATALT);
                        this.state = 758;
                        this.words();
                        this.state = 759;
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
        this.enterRule(_localctx, 90, chatParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this.op_app_format();
                this.state = 764;
                this.match(chatParser.COLON);
                this.state = 767;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case chatParser.URL:
                        {
                            this.state = 765;
                            this.url();
                        }
                        break;
                    case chatParser.TEL:
                        {
                            this.state = 766;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 769;
                this.match(chatParser.CL);
                this.state = 774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.OPATALT) {
                    {
                        this.state = 770;
                        this.match(chatParser.OPATALT);
                        this.state = 771;
                        this.words();
                        this.state = 772;
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
        this.enterRule(_localctx, 92, chatParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 776;
                this.stillimg_one();
                this.state = 780;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 777;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 782;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 94, chatParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 783;
                this.op_stillimagefilm_format();
                this.state = 784;
                this.match(chatParser.COLON);
                this.state = 788;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.S) {
                    {
                        {
                            this.state = 785;
                            this.match(chatParser.S);
                        }
                    }
                    this.state = 790;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 791;
                this.url();
                this.state = 792;
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
        this.enterRule(_localctx, 96, chatParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 794;
                this.video_one();
                this.state = 798;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 795;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 800;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 98, chatParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 801;
                this.op_video_format();
                this.state = 802;
                this.match(chatParser.COLON);
                this.state = 803;
                this.url();
                this.state = 804;
                this.match(chatParser.CL);
                this.state = 809;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                    case 1:
                        {
                            this.state = 805;
                            this.match(chatParser.OPATALT);
                            this.state = 806;
                            this.words();
                            this.state = 807;
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
        this.enterRule(_localctx, 100, chatParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 811;
                this.image_one();
                this.state = 815;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 812;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 817;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                }
                this.state = 820;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                    case 1:
                        {
                            this.state = 818;
                            this.match(chatParser.NL);
                            this.state = 819;
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
        this.enterRule(_localctx, 102, chatParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 822;
                this.op_image_format();
                this.state = 823;
                this.match(chatParser.COLON);
                this.state = 827;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === chatParser.S) {
                    {
                        {
                            this.state = 824;
                            this.match(chatParser.S);
                        }
                    }
                    this.state = 829;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 830;
                this.url();
                this.state = 831;
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
        this.enterRule(_localctx, 104, chatParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 847;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 833;
                        this.match(chatParser.OpAmpImage);
                        this.state = 836;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case chatParser.Image_type:
                                {
                                    {
                                        this.state = 834;
                                        this.match(chatParser.Image_type);
                                    }
                                }
                                break;
                            case chatParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 835;
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
                        this.state = 838;
                        this.match(chatParser.OpAmpImageLink);
                        this.state = 840;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.Image_type) {
                            {
                                this.state = 839;
                                this.match(chatParser.Image_type);
                            }
                        }
                    }
                    break;
                case chatParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 842;
                        this.match(chatParser.OpAmpImageZoom);
                        this.state = 844;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.Image_type) {
                            {
                                this.state = 843;
                                this.match(chatParser.Image_type);
                            }
                        }
                    }
                    break;
                case chatParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 846;
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
        this.enterRule(_localctx, 106, chatParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 866;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 849;
                        this.match(chatParser.AtSrc);
                        this.state = 850;
                        this.match(chatParser.COLON);
                        this.state = 851;
                        this.url();
                        this.state = 852;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.AtWidth:
                case chatParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 854;
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
                        this.state = 855;
                        this.match(chatParser.COLON);
                        this.state = 856;
                        this.match(chatParser.NUMERIC);
                        this.state = 857;
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
                        this.state = 858;
                        _la = this._input.LA(1);
                        if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (chatParser.OPATALT - 74)) | (1 << (chatParser.OpAtCaption - 74)) | (1 << (chatParser.OpAtLicense - 74)) | (1 << (chatParser.OpAtCopyright - 74)) | (1 << (chatParser.OpAtSearch - 74)))) !== 0))) {
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
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 859;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 864;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
                        }
                        this.state = 865;
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
        this.enterRule(_localctx, 108, chatParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 885;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 868;
                        this.match(chatParser.AtSrc);
                        this.state = 869;
                        this.match(chatParser.COLON);
                        this.state = 870;
                        this.url();
                        this.state = 871;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.AtWidth:
                case chatParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 873;
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
                        this.state = 874;
                        this.match(chatParser.COLON);
                        this.state = 875;
                        this.match(chatParser.NUMERIC);
                        this.state = 876;
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
                        this.state = 877;
                        _la = this._input.LA(1);
                        if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (chatParser.OPATALT - 74)) | (1 << (chatParser.OpAtCaption - 74)) | (1 << (chatParser.OpAtLicense - 74)) | (1 << (chatParser.OpAtCopyright - 74)) | (1 << (chatParser.OpAtSearch - 74)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 881;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 878;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 883;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                        }
                        this.state = 884;
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
        this.enterRule(_localctx, 110, chatParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 887;
                this.audio_one();
                this.state = 891;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 888;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 893;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 112, chatParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 894;
                this.op_audio_format();
                this.state = 895;
                this.match(chatParser.COLON);
                this.state = 896;
                this.url();
                this.state = 897;
                this.match(chatParser.CL);
                this.state = 902;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                    case 1:
                        {
                            this.state = 898;
                            this.match(chatParser.OPATALT);
                            this.state = 899;
                            this.words();
                            this.state = 900;
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
        this.enterRule(_localctx, 114, chatParser.RULE_audio_format);
        let _la;
        try {
            this.state = 914;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 904;
                        this.match(chatParser.AmpAudio);
                        this.state = 907;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.COLON) {
                            {
                                this.state = 905;
                                this.match(chatParser.COLON);
                                this.state = 906;
                                this.match(chatParser.Audio_type);
                            }
                        }
                    }
                    break;
                case chatParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 909;
                        this.match(chatParser.AmpAudioLink);
                        this.state = 912;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.COLON) {
                            {
                                this.state = 910;
                                this.match(chatParser.COLON);
                                this.state = 911;
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
        this.enterRule(_localctx, 116, chatParser.RULE_op_audio_format);
        try {
            this.state = 931;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 916;
                        this.match(chatParser.OpAmpAudio);
                        this.state = 919;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                            case 1:
                                {
                                    this.state = 917;
                                    this.match(chatParser.COLON);
                                    this.state = 918;
                                    this.match(chatParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case chatParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 921;
                        this.match(chatParser.OpAmpAudioLink);
                        this.state = 924;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                            case 1:
                                {
                                    this.state = 922;
                                    this.match(chatParser.COLON);
                                    this.state = 923;
                                    this.match(chatParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case chatParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 926;
                        this.match(chatParser.OpAmpAudioEmbed);
                        this.state = 929;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                            case 1:
                                {
                                    this.state = 927;
                                    this.match(chatParser.COLON);
                                    this.state = 928;
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
        this.enterRule(_localctx, 118, chatParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 964;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OPA:
                case chatParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 936;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case chatParser.OPA:
                                {
                                    this.state = 933;
                                    this.match(chatParser.OPA);
                                    this.state = 934;
                                    this.s_and_w();
                                }
                                break;
                            case chatParser.AtSrc:
                                {
                                    this.state = 935;
                                    this.match(chatParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 938;
                        this.match(chatParser.COLON);
                        this.state = 942;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 939;
                                        this.match(chatParser.S);
                                    }
                                }
                            }
                            this.state = 944;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                        }
                        this.state = 947;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 947;
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
                                    case chatParser.NOTBITMARK:
                                    case chatParser.SENTENCE:
                                    case chatParser.BARSTRING:
                                    case chatParser.URL:
                                        {
                                            this.state = 945;
                                            this.s_and_w();
                                        }
                                        break;
                                    case chatParser.NL:
                                        {
                                            this.state = 946;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 949;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
                        this.state = 951;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.AtWidth:
                case chatParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 952;
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
                        this.state = 953;
                        this.match(chatParser.COLON);
                        this.state = 954;
                        this.match(chatParser.NUMERIC);
                        this.state = 955;
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
                        this.state = 956;
                        _la = this._input.LA(1);
                        if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (chatParser.OPATALT - 74)) | (1 << (chatParser.OpAtCaption - 74)) | (1 << (chatParser.OpAtLicense - 74)) | (1 << (chatParser.OpAtCopyright - 74)) | (1 << (chatParser.OpAtSearch - 74)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 960;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 957;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 962;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
                        }
                        this.state = 963;
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
        this.enterRule(_localctx, 120, chatParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 966;
                this.match(chatParser.TEL);
                this.state = 967;
                this.match(chatParser.PLUS);
                this.state = 968;
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
        this.enterRule(_localctx, 122, chatParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 970;
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
        this.enterRule(_localctx, 124, chatParser.RULE_item);
        let _la;
        try {
            this.state = 1002;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 972;
                        this.match(chatParser.OPC);
                        this.state = 973;
                        this.match(chatParser.CL);
                        this.state = 981;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                            case 1:
                                {
                                    this.state = 977;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.S) {
                                        {
                                            {
                                                this.state = 974;
                                                this.match(chatParser.S);
                                            }
                                        }
                                        this.state = 979;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 980;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 983;
                        this.match(chatParser.OPC);
                        this.state = 984;
                        this.s_and_w();
                        this.state = 989;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (chatParser.COLON - 28)) | (1 << (chatParser.AMP - 28)) | (1 << (chatParser.Greater - 28)) | (1 << (chatParser.Less - 28)) | (1 << (chatParser.RightAngle - 28)) | (1 << (chatParser.RightArrow - 28)) | (1 << (chatParser.DBLEQ - 28)) | (1 << (chatParser.NOTBITMARK - 28)) | (1 << (chatParser.SENTENCE - 28)) | (1 << (chatParser.BARSTRING - 28)))) !== 0)) {
                            {
                                this.state = 987;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case chatParser.COLON:
                                        {
                                            this.state = 985;
                                            this.match(chatParser.COLON);
                                        }
                                        break;
                                    case chatParser.AMP:
                                    case chatParser.Greater:
                                    case chatParser.Less:
                                    case chatParser.RightAngle:
                                    case chatParser.RightArrow:
                                    case chatParser.DBLEQ:
                                    case chatParser.NOTBITMARK:
                                    case chatParser.SENTENCE:
                                    case chatParser.BARSTRING:
                                        {
                                            this.state = 986;
                                            this.words();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 991;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 992;
                        this.match(chatParser.CL);
                        this.state = 1000;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                            case 1:
                                {
                                    this.state = 996;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.S) {
                                        {
                                            {
                                                this.state = 993;
                                                this.match(chatParser.S);
                                            }
                                        }
                                        this.state = 998;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 999;
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
        this.enterRule(_localctx, 126, chatParser.RULE_lead);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1004;
                this.match(chatParser.OPC);
                this.state = 1005;
                this.s_and_w();
                this.state = 1010;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (chatParser.COLON - 28)) | (1 << (chatParser.AMP - 28)) | (1 << (chatParser.Greater - 28)) | (1 << (chatParser.Less - 28)) | (1 << (chatParser.RightAngle - 28)) | (1 << (chatParser.RightArrow - 28)) | (1 << (chatParser.DBLEQ - 28)) | (1 << (chatParser.NOTBITMARK - 28)) | (1 << (chatParser.SENTENCE - 28)) | (1 << (chatParser.BARSTRING - 28)))) !== 0)) {
                    {
                        this.state = 1008;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case chatParser.COLON:
                                {
                                    this.state = 1006;
                                    this.match(chatParser.COLON);
                                }
                                break;
                            case chatParser.AMP:
                            case chatParser.Greater:
                            case chatParser.Less:
                            case chatParser.RightAngle:
                            case chatParser.RightArrow:
                            case chatParser.DBLEQ:
                            case chatParser.NOTBITMARK:
                            case chatParser.SENTENCE:
                            case chatParser.BARSTRING:
                                {
                                    this.state = 1007;
                                    this.words();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 1012;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1013;
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
        this.enterRule(_localctx, 128, chatParser.RULE_angleref);
        let _la;
        try {
            this.state = 1025;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1015;
                        this.match(chatParser.OPRANGLES);
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1016;
                                this.s_and_w();
                            }
                        }
                        this.state = 1019;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1020;
                        this.match(chatParser.OPRANGLEL);
                        this.state = 1022;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1021;
                                this.s_and_w();
                            }
                        }
                        this.state = 1024;
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
        this.enterRule(_localctx, 130, chatParser.RULE_example);
        let _la;
        try {
            this.state = 1034;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1027;
                        this.match(chatParser.AtExamplecl);
                    }
                    break;
                case chatParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1028;
                        this.match(chatParser.AtExampleWithStr);
                    }
                    break;
                case chatParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1029;
                        this.match(chatParser.AtExamplecol);
                        this.state = 1031;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === chatParser.SENTENCE) {
                            {
                                this.state = 1030;
                                this.match(chatParser.SENTENCE);
                            }
                        }
                        this.state = 1033;
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
        this.enterRule(_localctx, 132, chatParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 1075;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1036;
                        this.match(chatParser.BracEnclose);
                        this.state = 1038;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1037;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1061;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                {
                                    this.state = 1040;
                                    this.s_and_w();
                                    this.state = 1050;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1041;
                                                    this.match(chatParser.NL);
                                                    this.state = 1045;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1042;
                                                                    this.match(chatParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1047;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1052;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                                    }
                                    this.state = 1056;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.NL) {
                                        {
                                            {
                                                this.state = 1053;
                                                this.match(chatParser.NL);
                                            }
                                        }
                                        this.state = 1058;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1063;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1064;
                        this.match(chatParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1065;
                        this.match(chatParser.BracEnclose);
                        this.state = 1071;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1069;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1066;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1067;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1068;
                                            this.match(chatParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1073;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1074;
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
        this.enterRule(_localctx, 134, chatParser.RULE_reference);
        let _la;
        try {
            this.state = 1099;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1077;
                        this.match(chatParser.AtReference);
                        this.state = 1082;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1082;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1078;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1079;
                                            this.match(chatParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1080;
                                            this.match(chatParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1081;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1084;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
                        this.state = 1086;
                        this.match(chatParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1087;
                        this.match(chatParser.AtReference);
                        this.state = 1095;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1093;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1088;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1089;
                                            this.match(chatParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1090;
                                            this.match(chatParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1091;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1092;
                                            this.match(chatParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 1097;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1098;
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
        this.enterRule(_localctx, 136, chatParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1101;
                this.match(chatParser.AtProgress);
                this.state = 1102;
                this.s_and_w();
                this.state = 1103;
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
        this.enterRule(_localctx, 138, chatParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1105;
                this.match(chatParser.AtDate);
                this.state = 1109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1109;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1106;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1107;
                                    this.match(chatParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1108;
                                    this.match(chatParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
                this.state = 1113;
                this.match(chatParser.CL);
                this.state = 1115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === chatParser.AtDate) {
                    {
                        this.state = 1114;
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
        this.enterRule(_localctx, 140, chatParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1117;
                this.match(chatParser.AtDate);
                this.state = 1121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 1121;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1118;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1119;
                                    this.match(chatParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1120;
                                    this.match(chatParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 1123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
                this.state = 1125;
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
        this.enterRule(_localctx, 142, chatParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 1173;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1127;
                        this.match(chatParser.OPB);
                        this.state = 1131;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === chatParser.NL) {
                            {
                                {
                                    this.state = 1128;
                                    this.match(chatParser.NL);
                                }
                            }
                            this.state = 1133;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1135;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1134;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 1158;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                {
                                    this.state = 1137;
                                    this.s_and_w();
                                    this.state = 1147;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 1138;
                                                    this.match(chatParser.NL);
                                                    this.state = 1142;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 1139;
                                                                    this.match(chatParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 1144;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 1149;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                                    }
                                    this.state = 1153;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === chatParser.NL) {
                                        {
                                            {
                                                this.state = 1150;
                                                this.match(chatParser.NL);
                                            }
                                        }
                                        this.state = 1155;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 1160;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1161;
                        this.match(chatParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1162;
                        this.match(chatParser.OPB);
                        this.state = 1166;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === chatParser.NL) {
                            {
                                {
                                    this.state = 1163;
                                    this.match(chatParser.NL);
                                }
                            }
                            this.state = 1168;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1170;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1169;
                                this.s_and_w();
                            }
                        }
                        this.state = 1172;
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
        this.enterRule(_localctx, 144, chatParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1175;
                this.match(chatParser.OPQ);
                this.state = 1177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1176;
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
                    this.state = 1179;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.OPDOT) | (1 << chatParser.S) | (1 << chatParser.BitChat) | (1 << chatParser.BitConv) | (1 << chatParser.BitConversationLeft1) | (1 << chatParser.BitConversationRight1) | (1 << chatParser.BitConversationRight1Thought) | (1 << chatParser.BitConversationRight1Scream) | (1 << chatParser.BitConversationLeft1Thought) | (1 << chatParser.BitConversationLeft1Scream) | (1 << chatParser.OPDOLL) | (1 << chatParser.OPBUL) | (1 << chatParser.OPESC) | (1 << chatParser.OPRANGLES) | (1 << chatParser.OPRANGLEL) | (1 << chatParser.OPDANGLE) | (1 << chatParser.OPU) | (1 << chatParser.OPB) | (1 << chatParser.OPQ) | (1 << chatParser.OPA) | (1 << chatParser.OPP) | (1 << chatParser.OPM) | (1 << chatParser.OPS) | (1 << chatParser.OPR) | (1 << chatParser.OPC) | (1 << chatParser.OPHASH) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON) | (1 << chatParser.PLUS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (chatParser.DotAt - 32)) | (1 << (chatParser.Greater - 32)) | (1 << (chatParser.Less - 32)) | (1 << (chatParser.RightAngle - 32)) | (1 << (chatParser.RightArrow - 32)) | (1 << (chatParser.DBLEQ - 32)) | (1 << (chatParser.HSPL - 32)) | (1 << (chatParser.HSPL2 - 32)) | (1 << (chatParser.SSPL - 32)) | (1 << (chatParser.SSPL2 - 32)) | (1 << (chatParser.COMMENT - 32)) | (1 << (chatParser.DCANY - 32)) | (1 << (chatParser.Image_type - 32)) | (1 << (chatParser.Audio_type - 32)) | (1 << (chatParser.Video_type - 32)) | (1 << (chatParser.ArticleText - 32)) | (1 << (chatParser.NOTCL - 32)) | (1 << (chatParser.NUMERIC - 32)) | (1 << (chatParser.STRING - 32)) | (1 << (chatParser.NL - 32)) | (1 << (chatParser.NOTBITMARK - 32)) | (1 << (chatParser.SENTENCE - 32)) | (1 << (chatParser.BARSTRING - 32)) | (1 << (chatParser.OPAT - 32)) | (1 << (chatParser.AtProgress - 32)) | (1 << (chatParser.AtReference - 32)) | (1 << (chatParser.AtWidth - 32)) | (1 << (chatParser.AtHeight - 32)) | (1 << (chatParser.AtProgressPoints - 32)) | (1 << (chatParser.AtShortanswer - 32)) | (1 << (chatParser.AtLonganswer - 32)) | (1 << (chatParser.AtExampleWithStr - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (chatParser.AtExamplecol - 64)) | (1 << (chatParser.AtExamplecl - 64)) | (1 << (chatParser.AtSampleSolution - 64)) | (1 << (chatParser.AtPartialAnswerS - 64)) | (1 << (chatParser.AtPartialAnswer - 64)) | (1 << (chatParser.AtLabeltrue - 64)) | (1 << (chatParser.AtLabelfalse - 64)) | (1 << (chatParser.AtPoints - 64)) | (1 << (chatParser.AtSrc - 64)) | (1 << (chatParser.AtPartner - 64)) | (1 << (chatParser.OPATALT - 64)) | (1 << (chatParser.OPAMARK - 64)) | (1 << (chatParser.ShowInIndex - 64)) | (1 << (chatParser.OpAtCaption - 64)) | (1 << (chatParser.OpAtLicense - 64)) | (1 << (chatParser.OpAtCopyright - 64)) | (1 << (chatParser.OpAtSearch - 64)) | (1 << (chatParser.OpAtIsTracked - 64)) | (1 << (chatParser.OpAtIsInfoOnly - 64)) | (1 << (chatParser.AtDate - 64)) | (1 << (chatParser.Http - 64)) | (1 << (chatParser.Https - 64)) | (1 << (chatParser.AmpAudio - 64)) | (1 << (chatParser.AmpImage - 64)) | (1 << (chatParser.AmpImageZoom - 64)) | (1 << (chatParser.AmpImageWAudio - 64)) | (1 << (chatParser.AmpVideo - 64)) | (1 << (chatParser.AmpArticle - 64)) | (1 << (chatParser.AmpDocument - 64)) | (1 << (chatParser.AmpApp - 64)) | (1 << (chatParser.AmpWebsite - 64)) | (1 << (chatParser.AmpStillImageFilm - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (chatParser.AmpPdf - 96)) | (1 << (chatParser.OpAmpAudio - 96)) | (1 << (chatParser.OpAmpImage - 96)) | (1 << (chatParser.OpAmpImageZoom - 96)) | (1 << (chatParser.OpAmpImageWAudio - 96)) | (1 << (chatParser.OpAmpVideo - 96)) | (1 << (chatParser.OpAmpArticle - 96)) | (1 << (chatParser.OpAmpArticleAtt - 96)) | (1 << (chatParser.OpAmpDocument - 96)) | (1 << (chatParser.OpAmpApp - 96)) | (1 << (chatParser.OpAmpWebsite - 96)) | (1 << (chatParser.OpAmpStillImageFilm - 96)) | (1 << (chatParser.BracEnclose - 96)) | (1 << (chatParser.AmpAudioLink - 96)) | (1 << (chatParser.AmpImageLink - 96)) | (1 << (chatParser.AmpVideoLink - 96)) | (1 << (chatParser.AmpArticleLink - 96)) | (1 << (chatParser.AmpDocumentLink - 96)) | (1 << (chatParser.AmpAppLink - 96)) | (1 << (chatParser.AmpWebsiteLink - 96)) | (1 << (chatParser.AmpStillImageFilmLink - 96)) | (1 << (chatParser.OpAmpAudioLink - 96)) | (1 << (chatParser.OpAmpImageLink - 96)) | (1 << (chatParser.OpAmpVideoLink - 96)) | (1 << (chatParser.OpAmpArticleLink - 96)) | (1 << (chatParser.OpAmpDocumentLink - 96)) | (1 << (chatParser.OpAmpAppLink - 96)) | (1 << (chatParser.OpAmpWebsiteLink - 96)) | (1 << (chatParser.OpAmpStillImageFilmLink - 96)) | (1 << (chatParser.AmpImageEmbed - 96)) | (1 << (chatParser.AmpVideoEmbed - 96)) | (1 << (chatParser.AmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (chatParser.AmpDocumentEmbed - 128)) | (1 << (chatParser.AmpStillImageFilmEmbed - 128)) | (1 << (chatParser.OpAmpImageEmbed - 128)) | (1 << (chatParser.OpAmpVideoEmbed - 128)) | (1 << (chatParser.OpAmpAudioEmbed - 128)) | (1 << (chatParser.OpAmpDocumentEmbed - 128)) | (1 << (chatParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (chatParser.BitmarkMinus - 128)) | (1 << (chatParser.BitmarkPlus - 128)) | (1 << (chatParser.ColonText - 128)) | (1 << (chatParser.ColonJson - 128)) | (1 << (chatParser.Prosemirror - 128)) | (1 << (chatParser.Placeholder - 128)) | (1 << (chatParser.BASIC - 128)) | (1 << (chatParser.JPG - 128)) | (1 << (chatParser.PNG - 128)) | (1 << (chatParser.GIF - 128)) | (1 << (chatParser.SVG - 128)) | (1 << (chatParser.MP2 - 128)) | (1 << (chatParser.MP3 - 128)) | (1 << (chatParser.MP4 - 128)) | (1 << (chatParser.FLV - 128)) | (1 << (chatParser.WMV - 128)) | (1 << (chatParser.MPEG - 128)) | (1 << (chatParser.MPG - 128)) | (1 << (chatParser.TEL - 128)) | (1 << (chatParser.DotArticleAtt - 128)) | (1 << (chatParser.STAR - 128)) | (1 << (chatParser.URL - 128)) | (1 << (chatParser.LIST_LINE - 128)) | (1 << (chatParser.ENCLBARS - 128)))) !== 0));
                this.state = 1181;
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
        this.enterRule(_localctx, 146, chatParser.RULE_title);
        let _la;
        try {
            this.state = 1195;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1183;
                        this.match(chatParser.OPHASH);
                        this.state = 1186;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1186;
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
                                    case chatParser.NOTBITMARK:
                                    case chatParser.SENTENCE:
                                    case chatParser.BARSTRING:
                                    case chatParser.URL:
                                        {
                                            this.state = 1184;
                                            this.s_and_w();
                                        }
                                        break;
                                    case chatParser.NL:
                                        {
                                            this.state = 1185;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1188;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
                        this.state = 1190;
                        this.match(chatParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1191;
                        this.match(chatParser.OPHASH);
                        this.state = 1192;
                        this.s_and_w();
                        this.state = 1193;
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
        this.enterRule(_localctx, 148, chatParser.RULE_bool_label);
        try {
            this.state = 1205;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1197;
                        this.match(chatParser.AtLabeltrue);
                        this.state = 1198;
                        this.s_and_w();
                        this.state = 1199;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1201;
                        this.match(chatParser.AtLabelfalse);
                        this.state = 1202;
                        this.s_and_w();
                        this.state = 1203;
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
        this.enterRule(_localctx, 150, chatParser.RULE_progress_points);
        try {
            this.state = 1216;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1207;
                        this.match(chatParser.AtProgressPoints);
                        this.state = 1208;
                        this.match(chatParser.COLON);
                        this.state = 1209;
                        this.match(chatParser.NUMERIC);
                        this.state = 1210;
                        this.match(chatParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1211;
                        this.match(chatParser.AtProgressPoints);
                        this.state = 1212;
                        this.match(chatParser.COLON);
                        this.state = 1213;
                        this.s_and_w();
                        this.state = 1214;
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
        this.enterRule(_localctx, 152, chatParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1218;
                this.match(chatParser.OpAtIsTracked);
                this.state = 1219;
                this.s_and_w();
                this.state = 1220;
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
        this.enterRule(_localctx, 154, chatParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1222;
                this.match(chatParser.OpAtIsInfoOnly);
                this.state = 1223;
                this.s_and_w();
                this.state = 1224;
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
        this.enterRule(_localctx, 156, chatParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1226;
                this.atdef_();
                this.state = 1236;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1230;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === chatParser.NL) {
                                    {
                                        {
                                            this.state = 1227;
                                            this.match(chatParser.NL);
                                        }
                                    }
                                    this.state = 1232;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1233;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1238;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 158, chatParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1261;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case chatParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1239;
                        this.match(chatParser.OPA);
                        this.state = 1240;
                        this.s_and_w();
                        this.state = 1241;
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
                        this.state = 1242;
                        this.s_and_w();
                        this.state = 1248;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1246;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1243;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1244;
                                            this.match(chatParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1245;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1250;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1251;
                        this.match(chatParser.CL);
                    }
                    break;
                case chatParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1253;
                        this.match(chatParser.OpAtCopyright);
                        this.state = 1257;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1254;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1259;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                        }
                        this.state = 1260;
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
        this.enterRule(_localctx, 160, chatParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1282;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1263;
                        this.match(chatParser.OPDOLL);
                        this.state = 1267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1267;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1264;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1265;
                                            this.match(chatParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1266;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1269;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
                        this.state = 1271;
                        this.match(chatParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1272;
                        this.match(chatParser.OPDOLL);
                        this.state = 1278;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NL - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                            {
                                this.state = 1276;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1273;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1274;
                                            this.match(chatParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1275;
                                            this.match(chatParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1280;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1281;
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
        this.enterRule(_localctx, 162, chatParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1284;
                this.match(chatParser.OPDANGLE);
                this.state = 1286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL) {
                    {
                        this.state = 1285;
                        this.s_and_w();
                    }
                }
                this.state = 1288;
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
        this.enterRule(_localctx, 164, chatParser.RULE_lines);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1290;
                            this.s_and_w();
                            this.state = 1292;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === chatParser.NL) {
                                {
                                    this.state = 1291;
                                    this.match(chatParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 1296;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << chatParser.S) | (1 << chatParser.OPS) | (1 << chatParser.COLON) | (1 << chatParser.AMP) | (1 << chatParser.DBLCOLON))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (chatParser.Greater - 33)) | (1 << (chatParser.Less - 33)) | (1 << (chatParser.RightAngle - 33)) | (1 << (chatParser.RightArrow - 33)) | (1 << (chatParser.DBLEQ - 33)) | (1 << (chatParser.NUMERIC - 33)) | (1 << (chatParser.STRING - 33)) | (1 << (chatParser.NOTBITMARK - 33)) | (1 << (chatParser.SENTENCE - 33)) | (1 << (chatParser.BARSTRING - 33)))) !== 0) || _la === chatParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 166, chatParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1344;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1298;
                        this.match(chatParser.STRING);
                        this.state = 1305;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1300;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1299;
                                                this.match(chatParser.S);
                                            }
                                        }
                                        this.state = 1302;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === chatParser.S);
                                    this.state = 1304;
                                    this.match(chatParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1307;
                        this.words();
                        this.state = 1314;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1309;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1308;
                                                this.match(chatParser.S);
                                            }
                                        }
                                        this.state = 1311;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === chatParser.S);
                                    this.state = 1313;
                                    this.match(chatParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1316;
                        this.match(chatParser.OPS);
                        this.state = 1317;
                        this.s_and_w();
                        this.state = 1318;
                        this.match(chatParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1320;
                        this.match(chatParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1324;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === chatParser.S) {
                            {
                                {
                                    this.state = 1321;
                                    this.match(chatParser.S);
                                }
                            }
                            this.state = 1326;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1327;
                        this.match(chatParser.COLON);
                        this.state = 1331;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1328;
                                        this.match(chatParser.S);
                                    }
                                }
                            }
                            this.state = 1333;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1334;
                        this.match(chatParser.AMP);
                        this.state = 1338;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1335;
                                        this.match(chatParser.S);
                                    }
                                }
                            }
                            this.state = 1340;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1341;
                        this.match(chatParser.DBLCOLON);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1342;
                        this.match(chatParser.DBLEQ);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1343;
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
    clnsp() {
        let _localctx = new ClnspContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, chatParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1346;
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
        this.enterRule(_localctx, 170, chatParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1348;
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
        this.enterRule(_localctx, 172, chatParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1361;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1361;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case chatParser.SENTENCE:
                                        {
                                            this.state = 1350;
                                            this.match(chatParser.SENTENCE);
                                        }
                                        break;
                                    case chatParser.NOTBITMARK:
                                        {
                                            this.state = 1351;
                                            this.match(chatParser.NOTBITMARK);
                                        }
                                        break;
                                    case chatParser.BARSTRING:
                                        {
                                            this.state = 1352;
                                            this.match(chatParser.BARSTRING);
                                        }
                                        break;
                                    case chatParser.AMP:
                                        {
                                            this.state = 1353;
                                            this.match(chatParser.AMP);
                                        }
                                        break;
                                    case chatParser.Greater:
                                        {
                                            this.state = 1354;
                                            this.match(chatParser.Greater);
                                            this.state = 1355;
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
                                            this.state = 1356;
                                            this.match(chatParser.Less);
                                            this.state = 1357;
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
                                            this.state = 1358;
                                            this.match(chatParser.DBLEQ);
                                        }
                                        break;
                                    case chatParser.RightArrow:
                                        {
                                            this.state = 1359;
                                            this.match(chatParser.RightArrow);
                                        }
                                        break;
                                    case chatParser.RightAngle:
                                        {
                                            this.state = 1360;
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
                    this.state = 1363;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
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
        this.enterRule(_localctx, 174, chatParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1365;
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
exports.chatParser = chatParser;
chatParser.OPDOT = 1;
chatParser.S = 2;
chatParser.BitChat = 3;
chatParser.BitConv = 4;
chatParser.BitConversationLeft1 = 5;
chatParser.BitConversationRight1 = 6;
chatParser.BitConversationRight1Thought = 7;
chatParser.BitConversationRight1Scream = 8;
chatParser.BitConversationLeft1Thought = 9;
chatParser.BitConversationLeft1Scream = 10;
chatParser.OPDOLL = 11;
chatParser.OPBUL = 12;
chatParser.OPESC = 13;
chatParser.OPRANGLES = 14;
chatParser.OPRANGLEL = 15;
chatParser.OPDANGLE = 16;
chatParser.OPU = 17;
chatParser.OPB = 18;
chatParser.OPQ = 19;
chatParser.OPA = 20;
chatParser.OPP = 21;
chatParser.OPM = 22;
chatParser.OPS = 23;
chatParser.OPR = 24;
chatParser.OPC = 25;
chatParser.OPHASH = 26;
chatParser.CL = 27;
chatParser.COLON = 28;
chatParser.AMP = 29;
chatParser.DBLCOLON = 30;
chatParser.PLUS = 31;
chatParser.DotAt = 32;
chatParser.Greater = 33;
chatParser.Less = 34;
chatParser.RightAngle = 35;
chatParser.RightArrow = 36;
chatParser.DBLEQ = 37;
chatParser.HSPL = 38;
chatParser.HSPL2 = 39;
chatParser.SSPL = 40;
chatParser.SSPL2 = 41;
chatParser.COMMENT = 42;
chatParser.DCANY = 43;
chatParser.Image_type = 44;
chatParser.Audio_type = 45;
chatParser.Video_type = 46;
chatParser.ArticleText = 47;
chatParser.NOTCL = 48;
chatParser.NUMERIC = 49;
chatParser.STRING = 50;
chatParser.NL = 51;
chatParser.NOTBITMARK = 52;
chatParser.SENTENCE = 53;
chatParser.BARSTRING = 54;
chatParser.OPAT = 55;
chatParser.AtProgress = 56;
chatParser.AtReference = 57;
chatParser.AtWidth = 58;
chatParser.AtHeight = 59;
chatParser.AtProgressPoints = 60;
chatParser.AtShortanswer = 61;
chatParser.AtLonganswer = 62;
chatParser.AtExampleWithStr = 63;
chatParser.AtExamplecol = 64;
chatParser.AtExamplecl = 65;
chatParser.AtSampleSolution = 66;
chatParser.AtPartialAnswerS = 67;
chatParser.AtPartialAnswer = 68;
chatParser.AtLabeltrue = 69;
chatParser.AtLabelfalse = 70;
chatParser.AtPoints = 71;
chatParser.AtSrc = 72;
chatParser.AtPartner = 73;
chatParser.OPATALT = 74;
chatParser.OPAMARK = 75;
chatParser.ShowInIndex = 76;
chatParser.OpAtCaption = 77;
chatParser.OpAtLicense = 78;
chatParser.OpAtCopyright = 79;
chatParser.OpAtSearch = 80;
chatParser.OpAtIsTracked = 81;
chatParser.OpAtIsInfoOnly = 82;
chatParser.AtDate = 83;
chatParser.Http = 84;
chatParser.Https = 85;
chatParser.AmpAudio = 86;
chatParser.AmpImage = 87;
chatParser.AmpImageZoom = 88;
chatParser.AmpImageWAudio = 89;
chatParser.AmpVideo = 90;
chatParser.AmpArticle = 91;
chatParser.AmpDocument = 92;
chatParser.AmpApp = 93;
chatParser.AmpWebsite = 94;
chatParser.AmpStillImageFilm = 95;
chatParser.AmpPdf = 96;
chatParser.OpAmpAudio = 97;
chatParser.OpAmpImage = 98;
chatParser.OpAmpImageZoom = 99;
chatParser.OpAmpImageWAudio = 100;
chatParser.OpAmpVideo = 101;
chatParser.OpAmpArticle = 102;
chatParser.OpAmpArticleAtt = 103;
chatParser.OpAmpDocument = 104;
chatParser.OpAmpApp = 105;
chatParser.OpAmpWebsite = 106;
chatParser.OpAmpStillImageFilm = 107;
chatParser.BracEnclose = 108;
chatParser.AmpAudioLink = 109;
chatParser.AmpImageLink = 110;
chatParser.AmpVideoLink = 111;
chatParser.AmpArticleLink = 112;
chatParser.AmpDocumentLink = 113;
chatParser.AmpAppLink = 114;
chatParser.AmpWebsiteLink = 115;
chatParser.AmpStillImageFilmLink = 116;
chatParser.OpAmpAudioLink = 117;
chatParser.OpAmpImageLink = 118;
chatParser.OpAmpVideoLink = 119;
chatParser.OpAmpArticleLink = 120;
chatParser.OpAmpDocumentLink = 121;
chatParser.OpAmpAppLink = 122;
chatParser.OpAmpWebsiteLink = 123;
chatParser.OpAmpStillImageFilmLink = 124;
chatParser.AmpImageEmbed = 125;
chatParser.AmpVideoEmbed = 126;
chatParser.AmpAudioEmbed = 127;
chatParser.AmpDocumentEmbed = 128;
chatParser.AmpStillImageFilmEmbed = 129;
chatParser.OpAmpImageEmbed = 130;
chatParser.OpAmpVideoEmbed = 131;
chatParser.OpAmpAudioEmbed = 132;
chatParser.OpAmpDocumentEmbed = 133;
chatParser.OpAmpStillImageFilmEmbed = 134;
chatParser.BitmarkMinus = 135;
chatParser.BitmarkPlus = 136;
chatParser.ColonText = 137;
chatParser.ColonJson = 138;
chatParser.Prosemirror = 139;
chatParser.Placeholder = 140;
chatParser.BASIC = 141;
chatParser.JPG = 142;
chatParser.PNG = 143;
chatParser.GIF = 144;
chatParser.SVG = 145;
chatParser.MP2 = 146;
chatParser.MP3 = 147;
chatParser.MP4 = 148;
chatParser.FLV = 149;
chatParser.WMV = 150;
chatParser.MPEG = 151;
chatParser.MPG = 152;
chatParser.TEL = 153;
chatParser.DotArticleAtt = 154;
chatParser.STAR = 155;
chatParser.URL = 156;
chatParser.LIST_LINE = 157;
chatParser.ENCLBARS = 158;
chatParser.RULE_bitmark = 0;
chatParser.RULE_bitmark_ = 1;
chatParser.RULE_chat = 2;
chatParser.RULE_conversation = 3;
chatParser.RULE_conversation_left_1 = 4;
chatParser.RULE_conversation_right_1 = 5;
chatParser.RULE_conversation_right_1_thought = 6;
chatParser.RULE_conversation_right_1_scream = 7;
chatParser.RULE_conversation_left_1_thought = 8;
chatParser.RULE_conversation_left_1_scream = 9;
chatParser.RULE_initiator = 10;
chatParser.RULE_partner = 11;
chatParser.RULE_partner1 = 12;
chatParser.RULE_partner1_name = 13;
chatParser.RULE_name_text = 14;
chatParser.RULE_name_alt = 15;
chatParser.RULE_chat_initiator = 16;
chatParser.RULE_chat_partner = 17;
chatParser.RULE_sspl_chat_partner = 18;
chatParser.RULE_bitElem = 19;
chatParser.RULE_resource = 20;
chatParser.RULE_gap = 21;
chatParser.RULE_single_gap = 22;
chatParser.RULE_dcolon = 23;
chatParser.RULE_atpoint = 24;
chatParser.RULE_format = 25;
chatParser.RULE_resource_format = 26;
chatParser.RULE_resource_format_extra = 27;
chatParser.RULE_format2 = 28;
chatParser.RULE_image_format = 29;
chatParser.RULE_video_format = 30;
chatParser.RULE_article_format = 31;
chatParser.RULE_document_format = 32;
chatParser.RULE_app_format = 33;
chatParser.RULE_website_format = 34;
chatParser.RULE_stillimagefilm_format = 35;
chatParser.RULE_op_article_format = 36;
chatParser.RULE_op_document_format = 37;
chatParser.RULE_op_app_format = 38;
chatParser.RULE_op_website_format = 39;
chatParser.RULE_op_video_format = 40;
chatParser.RULE_op_stillimagefilm_format = 41;
chatParser.RULE_articlebit = 42;
chatParser.RULE_documentbit = 43;
chatParser.RULE_websitebit = 44;
chatParser.RULE_appbit = 45;
chatParser.RULE_stillimagefilmbit = 46;
chatParser.RULE_stillimg_one = 47;
chatParser.RULE_videobit = 48;
chatParser.RULE_video_one = 49;
chatParser.RULE_imagebit = 50;
chatParser.RULE_image_one = 51;
chatParser.RULE_op_image_format = 52;
chatParser.RULE_image_chained = 53;
chatParser.RULE_image_chained4match = 54;
chatParser.RULE_audiobit = 55;
chatParser.RULE_audio_one = 56;
chatParser.RULE_audio_format = 57;
chatParser.RULE_op_audio_format = 58;
chatParser.RULE_resource_chained = 59;
chatParser.RULE_telephone = 60;
chatParser.RULE_url = 61;
chatParser.RULE_item = 62;
chatParser.RULE_lead = 63;
chatParser.RULE_angleref = 64;
chatParser.RULE_example = 65;
chatParser.RULE_bracketed_text = 66;
chatParser.RULE_reference = 67;
chatParser.RULE_progress = 68;
chatParser.RULE_dateprop = 69;
chatParser.RULE_dateprop_chained = 70;
chatParser.RULE_instruction = 71;
chatParser.RULE_hint = 72;
chatParser.RULE_title = 73;
chatParser.RULE_bool_label = 74;
chatParser.RULE_progress_points = 75;
chatParser.RULE_istracked = 76;
chatParser.RULE_isinfoonly = 77;
chatParser.RULE_atdef = 78;
chatParser.RULE_atdef_ = 79;
chatParser.RULE_dollarans = 80;
chatParser.RULE_anchor = 81;
chatParser.RULE_lines = 82;
chatParser.RULE_s_and_w = 83;
chatParser.RULE_clnsp = 84;
chatParser.RULE_sspl = 85;
chatParser.RULE_words = 86;
chatParser.RULE_sp = 87;
// tslint:disable:no-trailing-whitespace
chatParser.ruleNames = [
    "bitmark", "bitmark_", "chat", "conversation", "conversation_left_1",
    "conversation_right_1", "conversation_right_1_thought", "conversation_right_1_scream",
    "conversation_left_1_thought", "conversation_left_1_scream", "initiator",
    "partner", "partner1", "partner1_name", "name_text", "name_alt", "chat_initiator",
    "chat_partner", "sspl_chat_partner", "bitElem", "resource", "gap", "single_gap",
    "dcolon", "atpoint", "format", "resource_format", "resource_format_extra",
    "format2", "image_format", "video_format", "article_format", "document_format",
    "app_format", "website_format", "stillimagefilm_format", "op_article_format",
    "op_document_format", "op_app_format", "op_website_format", "op_video_format",
    "op_stillimagefilm_format", "articlebit", "documentbit", "websitebit",
    "appbit", "stillimagefilmbit", "stillimg_one", "videobit", "video_one",
    "imagebit", "image_one", "op_image_format", "image_chained", "image_chained4match",
    "audiobit", "audio_one", "audio_format", "op_audio_format", "resource_chained",
    "telephone", "url", "item", "lead", "angleref", "example", "bracketed_text",
    "reference", "progress", "dateprop", "dateprop_chained", "instruction",
    "hint", "title", "bool_label", "progress_points", "istracked", "isinfoonly",
    "atdef", "atdef_", "dollarans", "anchor", "lines", "s_and_w", "clnsp",
    "sspl", "words", "sp",
];
chatParser._LITERAL_NAMES = [
    undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'[^'",
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'[#'", undefined,
    "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'",
    "'=='", undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'[@'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'http://'", "'https://'",
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
chatParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitChat", "BitConv", "BitConversationLeft1",
    "BitConversationRight1", "BitConversationRight1Thought", "BitConversationRight1Scream",
    "BitConversationLeft1Thought", "BitConversationLeft1Scream", "OPDOLL",
    "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB",
    "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON",
    "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow",
    "DBLEQ", "HSPL", "HSPL2", "SSPL", "SSPL2", "COMMENT", "DCANY", "Image_type",
    "Audio_type", "Video_type", "ArticleText", "NOTCL", "NUMERIC", "STRING",
    "NL", "NOTBITMARK", "SENTENCE", "BARSTRING", "OPAT", "AtProgress", "AtReference",
    "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer", "AtLonganswer",
    "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtSampleSolution",
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
chatParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(chatParser._LITERAL_NAMES, chatParser._SYMBOLIC_NAMES, []);
chatParser._serializedATNSegments = 3;
chatParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA0\u055A\x04" +
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
    "X\tX\x04Y\tY\x03\x02\x03\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8\v\x02" +
    "\x03\x02\x07\x02\xBB\n\x02\f\x02\x0E\x02\xBE\v\x02\x06\x02\xC0\n\x02\r" +
    "\x02\x0E\x02\xC1\x03\x02\x07\x02\xC5\n\x02\f\x02\x0E\x02\xC8\v\x02\x03" +
    "\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x05\x03\xD4\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xDA\n\x04" +
    "\f\x04\x0E\x04\xDD\v\x04\x03\x04\x03\x04\x07\x04\xE1\n\x04\f\x04\x0E\x04" +
    "\xE4\v\x04\x07\x04\xE6\n\x04\f\x04\x0E\x04\xE9\v\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xF2\n\x04\f\x04\x0E\x04\xF5" +
    "\v\x04\x06\x04\xF7\n\x04\r\x04\x0E\x04\xF8\x03\x04\x03\x04\x07\x04\xFD" +
    "\n\x04\f\x04\x0E\x04\u0100\v\x04\x03\x04\x03\x04\x07\x04\u0104\n\x04\f" +
    "\x04\x0E\x04\u0107\v\x04\x03\x04\x07\x04\u010A\n\x04\f\x04\x0E\x04\u010D" +
    "\v\x04\x05\x04\u010F\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u0115" +
    "\n\x05\f\x05\x0E\x05\u0118\v\x05\x03\x05\x03\x05\x07\x05\u011C\n\x05\f" +
    "\x05\x0E\x05\u011F\v\x05\x07\x05\u0121\n\x05\f\x05\x0E\x05\u0124\v\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u012D" +
    "\n\x05\f\x05\x0E\x05\u0130\v\x05\x06\x05\u0132\n\x05\r\x05\x0E\x05\u0133" +
    "\x03\x05\x03\x05\x07\x05\u0138\n\x05\f\x05\x0E\x05\u013B\v\x05\x03\x05" +
    "\x03\x05\x07\x05\u013F\n\x05\f\x05\x0E\x05\u0142\v\x05\x03\x05\x07\x05" +
    "\u0145\n\x05\f\x05\x0E\x05\u0148\v\x05\x05\x05\u014A\n\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x07\x06\u0150\n\x06\f\x06\x0E\x06\u0153\v\x06\x03" +
    "\x06\x03\x06\x07\x06\u0157\n\x06\f\x06\x0E\x06\u015A\v\x06\x07\x06\u015C" +
    "\n\x06\f\x06\x0E\x06\u015F\v\x06\x03\x06\x03\x06\x07\x06\u0163\n\x06\f" +
    "\x06\x0E\x06\u0166\v\x06\x03\x06\x06\x06\u0169\n\x06\r\x06\x0E\x06\u016A" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0171\n\x07\f\x07\x0E\x07\u0174" +
    "\v\x07\x03\x07\x03\x07\x07\x07\u0178\n\x07\f\x07\x0E\x07\u017B\v\x07\x07" +
    "\x07\u017D\n\x07\f\x07\x0E\x07\u0180\v\x07\x03\x07\x03\x07\x07\x07\u0184" +
    "\n\x07\f\x07\x0E\x07\u0187\v\x07\x03\x07\x06\x07\u018A\n\x07\r\x07\x0E" +
    "\x07\u018B\x03\b\x03\b\x03\b\x03\b\x07\b\u0192\n\b\f\b\x0E\b\u0195\v\b" +
    "\x03\b\x03\b\x07\b\u0199\n\b\f\b\x0E\b\u019C\v\b\x07\b\u019E\n\b\f\b\x0E" +
    "\b\u01A1\v\b\x03\b\x03\b\x07\b\u01A5\n\b\f\b\x0E\b\u01A8\v\b\x03\b\x06" +
    "\b\u01AB\n\b\r\b\x0E\b\u01AC\x03\t\x03\t\x03\t\x03\t\x07\t\u01B3\n\t\f" +
    "\t\x0E\t\u01B6\v\t\x03\t\x03\t\x07\t\u01BA\n\t\f\t\x0E\t\u01BD\v\t\x07" +
    "\t\u01BF\n\t\f\t\x0E\t\u01C2\v\t\x03\t\x03\t\x07\t\u01C6\n\t\f\t\x0E\t" +
    "\u01C9\v\t\x03\t\x06\t\u01CC\n\t\r\t\x0E\t\u01CD\x03\n\x03\n\x03\n\x03" +
    "\n\x07\n\u01D4\n\n\f\n\x0E\n\u01D7\v\n\x03\n\x03\n\x07\n\u01DB\n\n\f\n" +
    "\x0E\n\u01DE\v\n\x07\n\u01E0\n\n\f\n\x0E\n\u01E3\v\n\x03\n\x03\n\x07\n" +
    "\u01E7\n\n\f\n\x0E\n\u01EA\v\n\x03\n\x06\n\u01ED\n\n\r\n\x0E\n\u01EE\x03" +
    "\v\x03\v\x03\v\x03\v\x07\v\u01F5\n\v\f\v\x0E\v\u01F8\v\v\x03\v\x03\v\x07" +
    "\v\u01FC\n\v\f\v\x0E\v\u01FF\v\v\x07\v\u0201\n\v\f\v\x0E\v\u0204\v\v\x03" +
    "\v\x03\v\x07\v\u0208\n\v\f\v\x0E\v\u020B\v\v\x03\v\x06\v\u020E\n\v\r\v" +
    "\x0E\v\u020F\x03\f\x03\f\x07\f\u0214\n\f\f\f\x0E\f\u0217\v\f\x03\f\x05" +
    "\f\u021A\n\f\x03\f\x05\f\u021D\n\f\x03\r\x03\r\x07\r\u0221\n\r\f\r\x0E" +
    "\r\u0224\v\r\x03\r\x05\r\u0227\n\r\x03\r\x05\r\u022A\n\r\x03\x0E\x03\x0E" +
    "\x07\x0E\u022E\n\x0E\f\x0E\x0E\x0E\u0231\v\x0E\x03\x0E\x05\x0E\u0234\n" +
    "\x0E\x03\x0E\x05\x0E\u0237\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
    "\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x05\x15\u0263\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
    "\x17\x03\x17\x03\x17\x07\x17\u026D\n\x17\f\x17\x0E\x17\u0270\v\x17\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0276\n\x18\x03\x18\x07\x18\u0279" +
    "\n\x18\f\x18\x0E\x18\u027C\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x07\x1B\u0287\n\x1B\f\x1B\x0E\x1B\u028A" +
    "\v\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u028F\n\x1B\f\x1B\x0E\x1B\u0292" +
    "\v\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u029F\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
    "\x1E\x03\x1E\x05\x1E\u02A6\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02AB" +
    "\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02AF\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02B3" +
    "\n\x1F\x03\x1F\x05\x1F\u02B6\n\x1F\x03 \x03 \x03 \x05 \u02BB\n \x03!\x03" +
    "!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03" +
    "(\x03(\x03)\x03)\x03*\x03*\x03*\x05*\u02D2\n*\x03*\x03*\x03*\x05*\u02D7" +
    "\n*\x03*\x03*\x03*\x05*\u02DC\n*\x05*\u02DE\n*\x03+\x03+\x03,\x03,\x03" +
    ",\x03,\x03,\x03,\x05,\u02E8\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
    "-\x05-\u02F2\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u02FC\n." +
    "\x03/\x03/\x03/\x03/\x05/\u0302\n/\x03/\x03/\x03/\x03/\x03/\x05/\u0309" +
    "\n/\x030\x030\x070\u030D\n0\f0\x0E0\u0310\v0\x031\x031\x031\x071\u0315" +
    "\n1\f1\x0E1\u0318\v1\x031\x031\x031\x032\x032\x072\u031F\n2\f2\x0E2\u0322" +
    "\v2\x033\x033\x033\x033\x033\x033\x033\x033\x053\u032C\n3\x034\x034\x07" +
    "4\u0330\n4\f4\x0E4\u0333\v4\x034\x034\x054\u0337\n4\x035\x035\x035\x07" +
    "5\u033C\n5\f5\x0E5\u033F\v5\x035\x035\x035\x036\x036\x036\x056\u0347\n" +
    "6\x036\x036\x056\u034B\n6\x036\x036\x056\u034F\n6\x036\x056\u0352\n6\x03" +
    "7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x077\u035F\n7\f7\x0E" +
    "7\u0362\v7\x037\x057\u0365\n7\x038\x038\x038\x038\x038\x038\x038\x038" +
    "\x038\x038\x038\x078\u0372\n8\f8\x0E8\u0375\v8\x038\x058\u0378\n8\x03" +
    "9\x039\x079\u037C\n9\f9\x0E9\u037F\v9\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
    ":\x03:\x05:\u0389\n:\x03;\x03;\x03;\x05;\u038E\n;\x03;\x03;\x03;\x05;" +
    "\u0393\n;\x05;\u0395\n;\x03<\x03<\x03<\x05<\u039A\n<\x03<\x03<\x03<\x05" +
    "<\u039F\n<\x03<\x03<\x03<\x05<\u03A4\n<\x05<\u03A6\n<\x03=\x03=\x03=\x05" +
    "=\u03AB\n=\x03=\x03=\x07=\u03AF\n=\f=\x0E=\u03B2\v=\x03=\x03=\x06=\u03B6" +
    "\n=\r=\x0E=\u03B7\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u03C1\n=\f=" +
    "\x0E=\u03C4\v=\x03=\x05=\u03C7\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03@\x03" +
    "@\x03@\x07@\u03D2\n@\f@\x0E@\u03D5\v@\x03@\x05@\u03D8\n@\x03@\x03@\x03" +
    "@\x03@\x07@\u03DE\n@\f@\x0E@\u03E1\v@\x03@\x03@\x07@\u03E5\n@\f@\x0E@" +
    "\u03E8\v@\x03@\x05@\u03EB\n@\x05@\u03ED\n@\x03A\x03A\x03A\x03A\x07A\u03F3" +
    "\nA\fA\x0EA\u03F6\vA\x03A\x03A\x03B\x03B\x05B\u03FC\nB\x03B\x03B\x03B" +
    "\x05B\u0401\nB\x03B\x05B\u0404\nB\x03C\x03C\x03C\x03C\x05C\u040A\nC\x03" +
    "C\x05C\u040D\nC\x03D\x03D\x05D\u0411\nD\x03D\x03D\x03D\x07D\u0416\nD\f" +
    "D\x0ED\u0419\vD\x07D\u041B\nD\fD\x0ED\u041E\vD\x03D\x07D\u0421\nD\fD\x0E" +
    "D\u0424\vD\x07D\u0426\nD\fD\x0ED\u0429\vD\x03D\x03D\x03D\x03D\x03D\x07" +
    "D\u0430\nD\fD\x0ED\u0433\vD\x03D\x05D\u0436\nD\x03E\x03E\x03E\x03E\x03" +
    "E\x06E\u043D\nE\rE\x0EE\u043E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x07E" +
    "\u0448\nE\fE\x0EE\u044B\vE\x03E\x05E\u044E\nE\x03F\x03F\x03F\x03F\x03" +
    "G\x03G\x03G\x03G\x06G\u0458\nG\rG\x0EG\u0459\x03G\x03G\x05G\u045E\nG\x03" +
    "H\x03H\x03H\x03H\x06H\u0464\nH\rH\x0EH\u0465\x03H\x03H\x03I\x03I\x07I" +
    "\u046C\nI\fI\x0EI\u046F\vI\x03I\x05I\u0472\nI\x03I\x03I\x03I\x07I\u0477" +
    "\nI\fI\x0EI\u047A\vI\x07I\u047C\nI\fI\x0EI\u047F\vI\x03I\x07I\u0482\n" +
    "I\fI\x0EI\u0485\vI\x07I\u0487\nI\fI\x0EI\u048A\vI\x03I\x03I\x03I\x07I" +
    "\u048F\nI\fI\x0EI\u0492\vI\x03I\x05I\u0495\nI\x03I\x05I\u0498\nI\x03J" +
    "\x03J\x06J\u049C\nJ\rJ\x0EJ\u049D\x03J\x03J\x03K\x03K\x03K\x06K\u04A5" +
    "\nK\rK\x0EK\u04A6\x03K\x03K\x03K\x03K\x03K\x05K\u04AE\nK\x03L\x03L\x03" +
    "L\x03L\x03L\x03L\x03L\x03L\x05L\u04B8\nL\x03M\x03M\x03M\x03M\x03M\x03" +
    "M\x03M\x03M\x03M\x05M\u04C3\nM\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03" +
    "O\x03P\x03P\x07P\u04CF\nP\fP\x0EP\u04D2\vP\x03P\x07P\u04D5\nP\fP\x0EP" +
    "\u04D8\vP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u04E1\nQ\fQ\x0EQ\u04E4" +
    "\vQ\x03Q\x03Q\x03Q\x03Q\x07Q\u04EA\nQ\fQ\x0EQ\u04ED\vQ\x03Q\x05Q\u04F0" +
    "\nQ\x03R\x03R\x03R\x03R\x06R\u04F6\nR\rR\x0ER\u04F7\x03R\x03R\x03R\x03" +
    "R\x03R\x07R\u04FF\nR\fR\x0ER\u0502\vR\x03R\x05R\u0505\nR\x03S\x03S\x05" +
    "S\u0509\nS\x03S\x03S\x03T\x03T\x05T\u050F\nT\x06T\u0511\nT\rT\x0ET\u0512" +
    "\x03U\x03U\x06U\u0517\nU\rU\x0EU\u0518\x03U\x05U\u051C\nU\x03U\x03U\x06" +
    "U\u0520\nU\rU\x0EU\u0521\x03U\x05U\u0525\nU\x03U\x03U\x03U\x03U\x03U\x03" +
    "U\x07U\u052D\nU\fU\x0EU\u0530\vU\x03U\x03U\x07U\u0534\nU\fU\x0EU\u0537" +
    "\vU\x03U\x03U\x07U\u053B\nU\fU\x0EU\u053E\vU\x03U\x03U\x03U\x05U\u0543" +
    "\nU\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
    "X\x03X\x06X\u0554\nX\rX\x0EX\u0555\x03Y\x03Y\x03Y\x06\u0360\u0373\u03C2" +
    "\u04EB\x02\x02Z\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
    "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
    "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
    "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
    "\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
    "x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
    "\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
    "\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
    "\x02\x02\x16\x03\x02()\b\x02]^`aov\x80\x83\x89\x8A\x8C\x8E\x05\x02\\\\" +
    "qq\x80\x80\x04\x02]]rr\x05\x02^^ss\x82\x82\x04\x02__tt\x04\x02``uu\x05" +
    "\x02aavv\x83\x83\x04\x02hhzz\x05\x02jj{{\x87\x87\x04\x02kk||\x04\x02l" +
    "l}}\x05\x02mm~~\x88\x88\x03\x02<=\x04\x02LLOR\x03\x02\x1D\x1D\x04\x02" +
    "\x1E\x1E  \x03\x02*+\x03\x02##\x03\x02$$\x02\u060B\x02\xBF\x03\x02\x02" +
    "\x02\x04\xD3\x03\x02\x02\x02\x06\xD5\x03\x02\x02\x02\b\u0110\x03\x02\x02" +
    "\x02\n\u014B\x03\x02\x02\x02\f\u016C\x03\x02\x02\x02\x0E\u018D\x03\x02" +
    "\x02\x02\x10\u01AE\x03\x02\x02\x02\x12\u01CF\x03\x02\x02\x02\x14\u01F0" +
    "\x03\x02\x02\x02\x16\u0211\x03\x02\x02\x02\x18\u021E\x03\x02\x02\x02\x1A" +
    "\u022B\x03\x02\x02\x02\x1C\u0238\x03\x02\x02\x02\x1E\u023C\x03\x02\x02" +
    "\x02 \u0240\x03\x02\x02\x02\"\u0244\x03\x02\x02\x02$\u0246\x03\x02\x02" +
    "\x02&\u0248\x03\x02\x02\x02(\u0262\x03\x02\x02\x02*\u0264\x03\x02\x02" +
    "\x02,\u0266\x03\x02\x02\x02.\u0271\x03\x02\x02\x020\u027F\x03\x02\x02" +
    "\x022\u0281\x03\x02\x02\x024\u0288\x03\x02\x02\x026\u0293\x03\x02\x02" +
    "\x028\u029E\x03\x02\x02\x02:\u02A5\x03\x02\x02\x02<\u02B5\x03\x02\x02" +
    "\x02>\u02B7\x03\x02\x02\x02@\u02BC\x03\x02\x02\x02B\u02BE\x03\x02\x02" +
    "\x02D\u02C0\x03\x02\x02\x02F\u02C2\x03\x02\x02\x02H\u02C4\x03\x02\x02" +
    "\x02J\u02C6\x03\x02\x02\x02L\u02C8\x03\x02\x02\x02N\u02CA\x03\x02\x02" +
    "\x02P\u02CC\x03\x02\x02\x02R\u02DD\x03\x02\x02\x02T\u02DF\x03\x02\x02" +
    "\x02V\u02E7\x03\x02\x02\x02X\u02E9\x03\x02\x02\x02Z\u02F3\x03\x02\x02" +
    "\x02\\\u02FD\x03\x02\x02\x02^\u030A\x03\x02\x02\x02`\u0311\x03\x02\x02" +
    "\x02b\u031C\x03\x02\x02\x02d\u0323\x03\x02\x02\x02f\u032D\x03\x02\x02" +
    "\x02h\u0338\x03\x02\x02\x02j\u0351\x03\x02\x02\x02l\u0364\x03\x02\x02" +
    "\x02n\u0377\x03\x02\x02\x02p\u0379\x03\x02\x02\x02r\u0380\x03\x02\x02" +
    "\x02t\u0394\x03\x02\x02\x02v\u03A5\x03\x02\x02\x02x\u03C6\x03\x02\x02" +
    "\x02z\u03C8\x03\x02\x02\x02|\u03CC\x03\x02\x02\x02~\u03EC\x03\x02\x02" +
    "\x02\x80\u03EE\x03\x02\x02\x02\x82\u0403\x03\x02\x02\x02\x84\u040C\x03" +
    "\x02\x02\x02\x86\u0435\x03\x02\x02\x02\x88\u044D\x03\x02\x02\x02\x8A\u044F" +
    "\x03\x02\x02\x02\x8C\u0453\x03\x02\x02\x02\x8E\u045F\x03\x02\x02\x02\x90" +
    "\u0497\x03\x02\x02\x02\x92\u0499\x03\x02\x02\x02\x94\u04AD\x03\x02\x02" +
    "\x02\x96\u04B7\x03\x02\x02\x02\x98\u04C2\x03\x02\x02\x02\x9A\u04C4\x03" +
    "\x02\x02\x02\x9C\u04C8\x03\x02\x02\x02\x9E\u04CC\x03\x02\x02\x02\xA0\u04EF" +
    "\x03\x02\x02\x02\xA2\u0504\x03\x02\x02\x02\xA4\u0506\x03\x02\x02\x02\xA6" +
    "\u0510\x03\x02\x02\x02\xA8\u0542\x03\x02\x02\x02\xAA\u0544\x03\x02\x02" +
    "\x02\xAC\u0546\x03\x02\x02\x02\xAE\u0553\x03\x02\x02\x02\xB0\u0557\x03" +
    "\x02\x02\x02\xB2\xBC\x05\x04\x03\x02\xB3\xB5\x07\x04\x02\x02\xB4\xB3\x03" +
    "\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03" +
    "\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBB\x07" +
    "5\x02\x02\xBA\xB6\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03" +
    "\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03" +
    "\x02\x02\x02\xBF\xB2\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03" +
    "\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC6\x03\x02\x02\x02\xC3\xC5\x07" +
    "5\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03" +
    "\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6\x03" +
    "\x02\x02\x02\xC9\xCA\x07\x02\x02\x03\xCA\x03\x03\x02\x02\x02\xCB\xD4\x05" +
    "\x06\x04\x02\xCC\xD4\x05\b\x05\x02\xCD\xD4\x05\n\x06\x02\xCE\xD4\x05\f" +
    "\x07\x02\xCF\xD4\x05\x0E\b\x02\xD0\xD4\x05\x10\t\x02\xD1\xD4\x05\x12\n" +
    "\x02\xD2\xD4\x05\x14\v\x02\xD3\xCB\x03\x02\x02\x02\xD3\xCC\x03\x02\x02" +
    "\x02\xD3\xCD\x03\x02\x02\x02\xD3\xCE\x03\x02\x02\x02\xD3\xCF\x03\x02\x02" +
    "\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02" +
    "\x02\xD4\x05\x03\x02\x02\x02\xD5\xD6\x07\x05\x02\x02\xD6\xD7\x054\x1B" +
    "\x02\xD7\xDB\x07\x1D\x02\x02\xD8\xDA\x075\x02\x02\xD9\xD8\x03\x02\x02" +
    "\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02" +
    "\x02\xDC\xE7\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE2\x05(\x15" +
    "\x02\xDF\xE1\x075\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE4\x03\x02\x02" +
    "\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE6\x03\x02\x02" +
    "\x02\xE4\xE2\x03\x02\x02\x02\xE5\xDE\x03\x02\x02\x02\xE6\xE9\x03\x02\x02" +
    "\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02" +
    "\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\t\x02\x02\x02\xEB\xEC\x05\x16\f\x02" +
    "\xEC\xED\t\x02\x02\x02\xED\xF6\x05\x18\r\x02\xEE\xEF\t\x02\x02\x02\xEF" +
    "\xF3\x05\"\x12\x02\xF0\xF2\x05&\x14\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5" +
    "\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF7" +
    "\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xEE\x03\x02\x02\x02\xF7\xF8" +
    "\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA" +
    "\x03\x02\x02\x02\xFA\xFE\t\x02\x02\x02\xFB\xFD\x075\x02\x02\xFC\xFB\x03" +
    "\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF" +
    "\x03\x02\x02\x02\xFF\u010E\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101" +
    "\u010B\x05*\x16\x02\u0102\u0104\x075\x02\x02\u0103\u0102\x03\x02\x02\x02" +
    "\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03" +
    "\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108" +
    "\u010A\x05*\x16\x02\u0109\u0105\x03\x02\x02\x02\u010A\u010D\x03\x02\x02" +
    "\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010F" +
    "\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u0101\x03\x02\x02\x02" +
    "\u010E\u010F\x03\x02\x02\x02\u010F\x07\x03\x02\x02\x02\u0110\u0111\x07" +
    "\x06\x02\x02\u0111\u0112\x054\x1B\x02\u0112\u0116\x07\x1D\x02\x02\u0113" +
    "\u0115\x075\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02\x02" +
    "\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0122" +
    "\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011D\x05(\x15\x02" +
    "\u011A\u011C\x075\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C\u011F\x03" +
    "\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
    "\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0119\x03\x02" +
    "\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
    "\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0122\x03\x02" +
    "\x02\x02\u0125\u0126\t\x02\x02\x02\u0126\u0127\x05\x16\f\x02\u0127\u0128" +
    "\t\x02\x02\x02\u0128\u0131\x05\x18\r\x02\u0129\u012A\t\x02\x02\x02\u012A" +
    "\u012E\x05\"\x12\x02\u012B\u012D\x05&\x14\x02\u012C\u012B\x03\x02\x02" +
    "\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F" +
    "\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02" +
    "\u0131\u0129\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0131\x03" +
    "\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
    "\u0139\t\x02\x02\x02\u0136\u0138\x075\x02\x02\u0137\u0136\x03\x02\x02" +
    "\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A" +
    "\x03\x02\x02\x02\u013A\u0149\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02" +
    "\u013C\u0146\x05*\x16\x02\u013D\u013F\x075\x02\x02\u013E\u013D\x03\x02" +
    "\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
    "\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0140\x03\x02" +
    "\x02\x02\u0143\u0145\x05*\x16\x02\u0144\u0140\x03\x02\x02\x02\u0145\u0148" +
    "\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02" +
    "\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u013C\x03" +
    "\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\t\x03\x02\x02\x02\u014B" +
    "\u014C\x07\x07\x02\x02\u014C\u014D\x05:\x1E\x02\u014D\u0151\x07\x1D\x02" +
    "\x02\u014E\u0150\x075\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0153" +
    "\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152";
chatParser._serializedATNSegment1 = "\x03\x02\x02\x02\u0152\u015D\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02" +
    "\u0154\u0158\x05(\x15\x02\u0155\u0157\x075\x02\x02\u0156\u0155\x03\x02" +
    "\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158" +
    "\u0159\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02" +
    "\x02\x02\u015B\u0154\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D" +
    "\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02" +
    "\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0164\x05\x1A\x0E\x02\u0161" +
    "\u0163\x075\x02\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02" +
    "\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168" +
    "\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167\u0169\x05\xA8U\x02" +
    "\u0168\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u0168\x03" +
    "\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\v\x03\x02\x02\x02\u016C" +
    "\u016D\x07\b\x02\x02\u016D\u016E\x05:\x1E\x02\u016E\u0172\x07\x1D\x02" +
    "\x02\u016F\u0171\x075\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174" +
    "\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02" +
    "\u0173\u017E\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0179\x05" +
    "(\x15\x02\u0176\u0178\x075\x02\x02\u0177\u0176\x03\x02\x02\x02\u0178\u017B" +
    "\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
    "\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017C\u0175\x03" +
    "\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E" +
    "\u017F\x03\x02\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180\u017E\x03\x02" +
    "\x02\x02\u0181\u0185\x05\x1A\x0E\x02\u0182\u0184\x075\x02\x02\u0183\u0182" +
    "\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02" +
    "\u0185\u0186\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0185\x03" +
    "\x02\x02\x02\u0188\u018A\x05\xA8U\x02\u0189\u0188\x03\x02\x02\x02\u018A" +
    "\u018B\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02" +
    "\x02\x02\u018C\r\x03\x02\x02\x02\u018D\u018E\x07\t\x02\x02\u018E\u018F" +
    "\x05:\x1E\x02\u018F\u0193\x07\x1D\x02\x02\u0190\u0192\x075\x02\x02\u0191" +
    "\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02" +
    "\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u019F\x03\x02\x02\x02\u0195" +
    "\u0193\x03\x02\x02\x02\u0196\u019A\x05(\x15\x02\u0197\u0199\x075\x02\x02" +
    "\u0198\u0197\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03" +
    "\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C" +
    "\u019A\x03\x02\x02\x02\u019D\u0196\x03\x02\x02\x02\u019E\u01A1\x03\x02" +
    "\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0" +
    "\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A6\x05\x1A" +
    "\x0E\x02\u01A3\u01A5\x075\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A5\u01A8" +
    "\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02" +
    "\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AB\x05" +
    "\xA8U\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
    "\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\x0F\x03\x02\x02" +
    "\x02\u01AE\u01AF\x07\n\x02\x02\u01AF\u01B0\x05:\x1E\x02\u01B0\u01B4\x07" +
    "\x1D\x02\x02\u01B1\u01B3\x075\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3" +
    "\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02" +
    "\x02\x02\u01B5\u01C0\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7" +
    "\u01BB\x05(\x15\x02\u01B8\u01BA\x075\x02\x02\u01B9\u01B8\x03\x02\x02\x02" +
    "\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03" +
    "\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE" +
    "\u01B7\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
    "\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2" +
    "\u01C0\x03\x02\x02\x02\u01C3\u01C7\x05\x1A\x0E\x02\u01C4\u01C6\x075\x02" +
    "\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5" +
    "\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02" +
    "\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01CC\x05\xA8U\x02\u01CB\u01CA\x03" +
    "\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD" +
    "\u01CE\x03\x02\x02\x02\u01CE\x11\x03\x02\x02\x02\u01CF\u01D0\x07\v\x02" +
    "\x02\u01D0\u01D1\x05:\x1E\x02\u01D1\u01D5\x07\x1D\x02\x02\u01D2\u01D4" +
    "\x075\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02" +
    "\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01E1\x03" +
    "\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01DC\x05(\x15\x02\u01D9" +
    "\u01DB\x075\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02" +
    "\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01E0" +
    "\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01D8\x03\x02\x02\x02" +
    "\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03" +
    "\x02\x02\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4" +
    "\u01E8\x05\x1A\x0E\x02\u01E5\u01E7\x075\x02\x02\u01E6\u01E5\x03\x02\x02" +
    "\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9" +
    "\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02" +
    "\u01EB\u01ED\x05\xA8U\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03" +
    "\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF" +
    "\x13\x03\x02\x02\x02\u01F0\u01F1\x07\f\x02\x02\u01F1\u01F2\x05:\x1E\x02" +
    "\u01F2\u01F6\x07\x1D\x02\x02\u01F3\u01F5\x075\x02\x02\u01F4\u01F3\x03" +
    "\x02\x02\x02\u01F5\u01F8\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6" +
    "\u01F7\x03\x02\x02\x02\u01F7\u0202\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
    "\x02\x02\u01F9\u01FD\x05(\x15\x02\u01FA\u01FC\x075\x02\x02\u01FB\u01FA" +
    "\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02" +
    "\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0201\x03\x02\x02\x02\u01FF\u01FD\x03" +
    "\x02\x02\x02\u0200\u01F9\x03\x02\x02\x02\u0201\u0204\x03\x02\x02\x02\u0202" +
    "\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0205\x03\x02" +
    "\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u0209\x05\x1A\x0E\x02\u0206" +
    "\u0208\x075\x02\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B\x03\x02\x02" +
    "\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020D" +
    "\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u020E\x05\xA8U\x02" +
    "\u020D\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u020D\x03" +
    "\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\x15\x03\x02\x02\x02\u0211" +
    "\u0219\x05\x1E\x10\x02\u0212\u0214\x075\x02\x02\u0213\u0212\x03\x02\x02" +
    "\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216" +
    "\x03\x02\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02" +
    "\u0218\u021A\x05f4\x02\u0219\u0215\x03\x02\x02\x02\u0219\u021A\x03\x02" +
    "\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u021D\x05 \x11\x02\u021C\u021B" +
    "\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\x17\x03\x02\x02\x02" +
    "\u021E\u0226\x05\x1E\x10\x02\u021F\u0221\x075\x02\x02\u0220\u021F\x03" +
    "\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222" +
    "\u0223\x03\x02\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u0222\x03\x02" +
    "\x02\x02\u0225\u0227\x05f4\x02\u0226\u0222\x03\x02\x02\x02\u0226\u0227" +
    "\x03\x02\x02\x02\u0227\u0229\x03\x02\x02\x02\u0228\u022A\x05 \x11\x02" +
    "\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\x19\x03" +
    "\x02\x02\x02\u022B\u0233\x05\x1C\x0F\x02\u022C\u022E\x075\x02\x02\u022D" +
    "\u022C\x03\x02\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02" +
    "\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231" +
    "\u022F\x03\x02\x02\x02\u0232\u0234\x05f4\x02\u0233\u022F\x03\x02\x02\x02" +
    "\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u0237\x05" +
    " \x11\x02\u0236\u0235\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237" +
    "\x1B\x03\x02\x02\x02\u0238\u0239\x07K\x02\x02\u0239\u023A\x074\x02\x02" +
    "\u023A\u023B\x07\x1D\x02\x02\u023B\x1D\x03\x02\x02\x02\u023C\u023D\x07" +
    "\x1C\x02\x02\u023D\u023E\x05\xA8U\x02\u023E\u023F\x07\x1D\x02\x02\u023F" +
    "\x1F\x03\x02\x02\x02\u0240\u0241\x07L\x02\x02\u0241\u0242\x074\x02\x02" +
    "\u0242\u0243\x07\x1D\x02\x02\u0243!\x03\x02\x02\x02\u0244\u0245\x05\xA8" +
    "U\x02\u0245#\x03\x02\x02\x02\u0246\u0247\x05\xA8U\x02\u0247%\x03\x02\x02" +
    "\x02\u0248\u0249\x05\xACW\x02\u0249\u024A\x05$\x13\x02\u024A\'\x03\x02" +
    "\x02\x02\u024B\u0263\x07\x9F\x02\x02\u024C\u0263\x076\x02\x02\u024D\u0263" +
    "\x05,\x17\x02\u024E\u0263\x05\x9EP\x02\u024F\u0263\x05\x88E\x02\u0250" +
    "\u0263\x05~@\x02\u0251\u0263\x05\x94K\x02\u0252\u0263\x05\x90I\x02\u0253" +
    "\u0263\x05\x92J\x02\u0254\u0263\x05\xA8U\x02\u0255\u0263\x05\x84C\x02" +
    "\u0256\u0263\x05\x96L\x02\u0257\u0263\x05f4\x02\u0258\u0263\x05p9\x02" +
    "\u0259\u0263\x05b2\x02\u025A\u0263\x05V,\x02\u025B\u0263\x05X-\x02\u025C" +
    "\u0263\x05\\/\x02\u025D\u0263\x05Z.\x02\u025E\u0263\x05^0\x02\u025F\u0263" +
    "\x05\x82B\x02\u0260\u0263\x05\xA4S\x02\u0261\u0263\x05\xB0Y\x02\u0262" +
    "\u024B\x03\x02\x02\x02\u0262\u024C\x03\x02\x02\x02\u0262\u024D\x03\x02" +
    "\x02\x02\u0262\u024E\x03\x02\x02\x02\u0262\u024F\x03\x02\x02\x02\u0262" +
    "\u0250\x03\x02\x02\x02\u0262\u0251\x03\x02\x02\x02\u0262\u0252\x03\x02" +
    "\x02\x02\u0262\u0253\x03\x02\x02\x02\u0262\u0254\x03\x02\x02\x02\u0262" +
    "\u0255\x03\x02\x02\x02\u0262\u0256\x03\x02\x02\x02\u0262\u0257\x03\x02" +
    "\x02\x02\u0262\u0258\x03\x02\x02\x02\u0262\u0259\x03\x02\x02\x02\u0262" +
    "\u025A\x03\x02\x02\x02\u0262\u025B\x03\x02\x02\x02\u0262\u025C\x03\x02" +
    "\x02\x02\u0262\u025D\x03\x02\x02\x02\u0262\u025E\x03\x02\x02\x02\u0262" +
    "\u025F\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0261\x03\x02" +
    "\x02\x02\u0263)\x03\x02\x02\x02\u0264\u0265\x05(\x15\x02\u0265+\x03\x02" +
    "\x02\x02\u0266\u026E\x05.\x18\x02\u0267\u026D\x05.\x18\x02\u0268\u026D" +
    "\x05\x90I\x02\u0269\u026D\x05\x92J\x02\u026A\u026D\x05~@\x02\u026B\u026D" +
    "\x05\x84C\x02\u026C\u0267\x03\x02\x02\x02\u026C\u0268\x03\x02\x02\x02" +
    "\u026C\u0269\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03" +
    "\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E" +
    "\u026F\x03\x02\x02\x02\u026F-\x03\x02\x02\x02\u0270\u026E\x03\x02\x02" +
    "\x02\u0271\u0275\x07\x13\x02\x02\u0272\u0276\x073\x02\x02\u0273\u0276" +
    "\x074\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275\u0272\x03\x02\x02\x02" +
    "\u0275\u0273\x03\x02\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276\u027A\x03" +
    "\x02\x02\x02\u0277\u0279\x05\xA8U\x02\u0278\u0277\x03\x02\x02\x02\u0279" +
    "\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A\u027B\x03\x02" +
    "\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027D" +
    "\u027E\x05\xAAV\x02\u027E/\x03\x02\x02\x02\u027F\u0280\x07 \x02\x02\u0280" +
    "1\x03\x02\x02\x02\u0281\u0282\x07I\x02\x02\u0282\u0283\x073\x02\x02\u0283" +
    "\u0284\x07\x1D\x02\x02\u02843\x03\x02\x02\x02\u0285\u0287\x056\x1C\x02" +
    "\u0286\u0285\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03" +
    "\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u0290\x03\x02\x02\x02\u028A" +
    "\u0288\x03\x02\x02\x02\u028B\u028F\x07\x8B\x02\x02\u028C\u028F\x07\x8C" +
    "\x02\x02\u028D\u028F\x058\x1D\x02\u028E\u028B\x03\x02\x02\x02\u028E\u028C" +
    "\x03\x02\x02\x02\u028E\u028D\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02" +
    "\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u02915\x03\x02" +
    "\x02\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0294\t\x03\x02\x02\u02947" +
    "\x03\x02\x02\x02\u0295\u029F\x05<\x1F\x02\u0296\u029F\x05t;\x02\u0297" +
    "\u029F\x05> \x02\u0298\u029F\x05@!\x02\u0299\u029F\x05B\"\x02\u029A\u029F" +
    "\x05D#\x02\u029B\u029F\x05F$\x02\u029C\u029F\x05H%\x02\u029D\u029F\x07" +
    "b\x02\x02\u029E\u0295\x03\x02\x02\x02\u029E\u0296\x03\x02\x02\x02\u029E" +
    "\u0297\x03\x02\x02\x02\u029E\u0298\x03\x02\x02\x02\u029E\u0299\x03\x02" +
    "\x02\x02\u029E\u029A\x03\x02\x02\x02\u029E\u029B\x03\x02\x02\x02\u029E" +
    "\u029C\x03\x02\x02\x02\u029E\u029D\x03\x02\x02\x02\u029F9\x03\x02\x02" +
    "\x02\u02A0\u02A6\x07\x89\x02\x02\u02A1\u02A6\x07\x8A\x02\x02\u02A2\u02A6" +
    "\x07\x8B\x02\x02\u02A3\u02A6\x07\x8C\x02\x02\u02A4\u02A6\x03\x02\x02\x02" +
    "\u02A5\u02A0\x03\x02\x02\x02\u02A5\u02A1\x03\x02\x02\x02\u02A5\u02A2\x03" +
    "\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6" +
    ";\x03\x02\x02\x02\u02A7\u02AA\x07Y\x02\x02\u02A8\u02AB\x07.\x02\x02\u02A9" +
    "\u02AB\x07\x9C\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02A9\x03\x02" +
    "\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02B6\x03\x02\x02\x02\u02AC" +
    "\u02AE\x07p\x02\x02\u02AD\u02AF\x07.\x02\x02\u02AE\u02AD\x03\x02\x02\x02" +
    "\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B6\x03\x02\x02\x02\u02B0\u02B2\x07" +
    "Z\x02\x02\u02B1\u02B3\x07.\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2\u02B3" +
    "\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B6\x07[\x02\x02" +
    "\u02B5\u02A7\x03\x02\x02\x02\u02B5\u02AC\x03\x02\x02\x02\u02B5\u02B0\x03" +
    "\x02\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B6=\x03\x02\x02\x02\u02B7" +
    "\u02BA\t\x04\x02\x02\u02B8\u02B9\x07\x1E\x02\x02\u02B9\u02BB\x070\x02" +
    "\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB?\x03" +
    "\x02\x02\x02\u02BC\u02BD\t\x05\x02\x02\u02BDA\x03\x02\x02\x02\u02BE\u02BF" +
    "\t\x06\x02\x02\u02BFC\x03\x02\x02\x02\u02C0\u02C1\t\x07\x02\x02\u02C1" +
    "E\x03\x02\x02\x02\u02C2\u02C3\t\b\x02\x02\u02C3G\x03\x02\x02\x02\u02C4" +
    "\u02C5\t\t\x02\x02\u02C5I\x03\x02\x02\x02\u02C6\u02C7\t\n\x02\x02\u02C7" +
    "K\x03\x02\x02\x02\u02C8\u02C9\t\v\x02\x02\u02C9M\x03\x02\x02\x02\u02CA" +
    "\u02CB\t\f\x02\x02\u02CBO\x03\x02\x02\x02\u02CC\u02CD\t\r\x02\x02\u02CD" +
    "Q\x03\x02\x02\x02\u02CE\u02D1\x07g\x02\x02\u02CF\u02D0\x07\x1E\x02\x02" +
    "\u02D0\u02D2\x070\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03" +
    "\x02\x02\x02\u02D2\u02DE\x03\x02\x02\x02\u02D3\u02D6\x07y\x02\x02\u02D4" +
    "\u02D5\x07\x1E\x02\x02\u02D5\u02D7\x070\x02\x02\u02D6\u02D4\x03\x02\x02" +
    "\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02DE\x03\x02\x02\x02\u02D8\u02DB" +
    "\x07\x85\x02\x02\u02D9\u02DA\x07\x1E\x02\x02\u02DA\u02DC\x070\x02\x02" +
    "\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03" +
    "\x02\x02\x02\u02DD\u02CE\x03\x02\x02\x02\u02DD\u02D3\x03\x02\x02\x02\u02DD" +
    "\u02D8\x03\x02\x02\x02\u02DES\x03\x02\x02\x02\u02DF\u02E0\t\x0E\x02\x02" +
    "\u02E0U\x03\x02\x02\x02\u02E1\u02E2\x05J&\x02\u02E2\u02E3\x07\x1E\x02" +
    "\x02\u02E3\u02E4\x05|?\x02\u02E4\u02E5\x07\x1D\x02\x02\u02E5\u02E8\x03" +
    "\x02\x02\x02\u02E6\u02E8\x071\x02\x02\u02E7\u02E1\x03\x02\x02\x02\u02E7" +
    "\u02E6\x03\x02\x02\x02\u02E8W\x03\x02\x02\x02\u02E9\u02EA\x05L\'\x02\u02EA" +
    "\u02EB\x07\x1E\x02\x02\u02EB\u02EC\x05|?\x02\u02EC\u02F1\x07\x1D\x02\x02" +
    "\u02ED\u02EE\x07L\x02\x02\u02EE\u02EF\x05\xAEX\x02\u02EF\u02F0\x07\x1D" +
    "\x02\x02\u02F0\u02F2\x03\x02\x02\x02\u02F1\u02ED\x03\x02\x02\x02\u02F1" +
    "\u02F2\x03\x02\x02\x02\u02F2Y\x03\x02\x02\x02\u02F3\u02F4\x05P)\x02\u02F4" +
    "\u02F5\x07\x1E\x02\x02\u02F5\u02F6\x05|?\x02\u02F6\u02FB\x07\x1D\x02\x02" +
    "\u02F7\u02F8\x07L\x02\x02\u02F8\u02F9\x05\xAEX\x02\u02F9\u02FA\x07\x1D" +
    "\x02\x02\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02F7\x03\x02\x02\x02\u02FB" +
    "\u02FC\x03\x02\x02\x02\u02FC[\x03\x02\x02\x02\u02FD\u02FE\x05N(\x02\u02FE" +
    "\u0301\x07\x1E\x02\x02\u02FF\u0302\x05|?\x02\u0300\u0302\x05z>\x02\u0301" +
    "\u02FF\x03\x02\x02\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02" +
    "\x02\x02\u0303\u0308\x07\x1D\x02\x02\u0304\u0305\x07L\x02\x02\u0305\u0306" +
    "\x05\xAEX\x02\u0306\u0307\x07\x1D\x02\x02\u0307\u0309\x03\x02\x02\x02" +
    "\u0308\u0304\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309]\x03\x02" +
    "\x02\x02\u030A\u030E\x05`1\x02\u030B\u030D\x05x=\x02\u030C\u030B\x03\x02" +
    "\x02\x02\u030D\u0310\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E" +
    "\u030F\x03\x02\x02\x02\u030F_\x03\x02\x02\x02\u0310\u030E\x03\x02\x02" +
    "\x02\u0311\u0312\x05T+\x02\u0312\u0316\x07\x1E\x02\x02\u0313\u0315\x07" +
    "\x04\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316" +
    "\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0319\x03\x02" +
    "\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031A\x05|?\x02\u031A\u031B" +
    "\x07\x1D\x02\x02\u031Ba\x03\x02\x02\x02\u031C\u0320\x05d3\x02\u031D\u031F" +
    "\x05x=\x02\u031E\u031D\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320" +
    "\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321c\x03\x02\x02" +
    "\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0324\x05R*\x02\u0324\u0325\x07" +
    "\x1E\x02\x02\u0325\u0326\x05|?\x02\u0326\u032B\x07\x1D\x02\x02\u0327\u0328" +
    "\x07L\x02\x02\u0328\u0329\x05\xAEX\x02\u0329\u032A\x07\x1D\x02\x02\u032A" +
    "\u032C\x03\x02\x02\x02\u032B\u0327\x03\x02\x02\x02\u032B\u032C\x03\x02" +
    "\x02\x02\u032Ce\x03\x02\x02\x02\u032D\u0331\x05h5\x02\u032E\u0330\x05" +
    "l7\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331\u032F" +
    "\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0336\x03\x02\x02\x02" +
    "\u0333\u0331\x03\x02\x02\x02\u0334\u0335\x075\x02\x02\u0335\u0337\x07" +
    "N\x02\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337" +
    "g\x03\x02\x02\x02\u0338\u0339\x05j6\x02\u0339\u033D\x07\x1E\x02\x02\u033A" +
    "\u033C\x07\x04\x02\x02\u033B\u033A\x03\x02\x02\x02\u033C\u033F\x03\x02" +
    "\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E" +
    "\u0340\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0341\x05|?\x02" +
    "\u0341\u0342\x07\x1D\x02\x02\u0342i\x03\x02\x02\x02\u0343\u0346\x07d\x02" +
    "\x02\u0344\u0347\x07.\x02\x02\u0345\u0347\x07\x9C\x02\x02\u0346\u0344" +
    "\x03\x02\x02\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02" +
    "\u0347\u0352\x03\x02\x02\x02\u0348\u034A\x07x\x02\x02\u0349\u034B\x07" +
    ".\x02\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
    "\u0352\x03\x02\x02\x02\u034C\u034E\x07e\x02\x02\u034D\u034F\x07.\x02\x02" +
    "\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0352\x03" +
    "\x02\x02\x02\u0350\u0352\x07f\x02\x02\u0351\u0343\x03\x02\x02\x02\u0351" +
    "\u0348\x03\x02\x02\x02\u0351\u034C\x03\x02\x02\x02\u0351\u0350\x03\x02" +
    "\x02\x02\u0352k\x03\x02\x02\x02\u0353\u0354\x07J\x02\x02\u0354\u0355\x07" +
    "\x1E\x02\x02\u0355\u0356\x05|?\x02\u0356\u0357\x07\x1D\x02\x02\u0357\u0365" +
    "\x03\x02\x02\x02\u0358\u0359\t\x0F\x02\x02\u0359\u035A\x07\x1E\x02\x02" +
    "\u035A\u035B\x073\x02\x02\u035B\u0365\x07\x1D\x02\x02\u035C\u0360\t\x10" +
    "\x02\x02\u035D\u035F\v\x02\x02\x02\u035E\u035D\x03\x02\x02\x02\u035F\u0362" +
    "\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02" +
    "\u0361\u0363\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363\u0365\x07" +
    "\x1D\x02\x02\u0364\u0353\x03\x02\x02\x02\u0364\u0358\x03\x02\x02\x02\u0364" +
    "\u035C\x03\x02\x02\x02\u0365m\x03\x02\x02\x02\u0366\u0367\x07J\x02\x02" +
    "\u0367\u0368\x07\x1E\x02\x02\u0368\u0369\x05|?\x02\u0369\u036A\x07\x1D" +
    "\x02\x02\u036A\u0378\x03\x02\x02\x02\u036B\u036C\t\x0F\x02\x02\u036C\u036D" +
    "\x07\x1E\x02\x02\u036D\u036E\x073\x02\x02\u036E\u0378\x07\x1D\x02\x02" +
    "\u036F\u0373\t\x10\x02\x02\u0370\u0372\v\x02\x02\x02\u0371\u0370\x03\x02" +
    "\x02\x02\u0372\u0375\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0373" +
    "\u0371\x03\x02\x02\x02\u0374\u0376\x03\x02\x02\x02\u0375\u0373\x03\x02" +
    "\x02\x02\u0376\u0378\x07\x1D\x02\x02\u0377\u0366\x03\x02\x02\x02\u0377" +
    "\u036B\x03\x02\x02\x02\u0377\u036F\x03\x02\x02\x02\u0378o\x03\x02\x02" +
    "\x02\u0379\u037D\x05r:\x02\u037A\u037C\x05x=\x02\u037B\u037A\x03\x02\x02" +
    "\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037D\u037E" +
    "\x03\x02\x02\x02\u037Eq\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u0380" +
    "\u0381\x05v<\x02\u0381\u0382\x07\x1E\x02\x02\u0382\u0383\x05|?\x02\u0383" +
    "\u0388\x07\x1D\x02\x02\u0384\u0385\x07L\x02\x02\u0385\u0386\x05\xAEX\x02" +
    "\u0386\u0387\x07\x1D\x02\x02\u0387\u0389\x03\x02\x02\x02\u0388\u0384\x03" +
    "\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389s\x03\x02\x02\x02\u038A" +
    "\u038D\x07X\x02\x02\u038B\u038C\x07\x1E\x02\x02\u038C\u038E\x07/\x02\x02" +
    "\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u0395\x03" +
    "\x02\x02\x02\u038F\u0392\x07o\x02\x02\u0390\u0391\x07\x1E\x02\x02\u0391" +
    "\u0393\x07/\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02" +
    "\x02\u0393\u0395\x03\x02\x02\x02\u0394\u038A\x03\x02\x02\x02\u0394\u038F" +
    "\x03\x02\x02\x02\u0395u\x03\x02\x02\x02\u0396\u0399\x07c\x02\x02\u0397" +
    "\u0398\x07\x1E\x02\x02\u0398\u039A\x07/\x02\x02\u0399\u0397\x03\x02\x02" +
    "\x02\u0399\u039A\x03\x02\x02\x02\u039A\u03A6\x03\x02\x02\x02\u039B\u039E" +
    "\x07w\x02\x02\u039C\u039D\x07\x1E\x02\x02\u039D\u039F\x07/\x02\x02\u039E" +
    "\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A6\x03\x02" +
    "\x02\x02\u03A0\u03A3\x07\x86\x02\x02\u03A1\u03A2\x07\x1E\x02\x02\u03A2" +
    "\u03A4\x07/\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02" +
    "\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5\u0396\x03\x02\x02\x02\u03A5\u039B" +
    "\x03\x02\x02\x02\u03A5\u03A0\x03\x02\x02\x02\u03A6w\x03\x02\x02\x02\u03A7" +
    "\u03A8\x07\x16\x02\x02\u03A8\u03AB\x05\xA8U\x02\u03A9\u03AB\x07J\x02\x02" +
    "\u03AA\u03A7\x03\x02\x02\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03" +
    "\x02\x02\x02\u03AC\u03B0\x07\x1E\x02\x02\u03AD\u03AF\x07\x04\x02\x02\u03AE" +
    "\u03AD\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02" +
    "\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B5\x03\x02\x02\x02\u03B2" +
    "\u03B0\x03\x02\x02\x02\u03B3\u03B6\x05\xA8U\x02\u03B4\u03B6\x075\x02\x02" +
    "\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03" +
    "\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8" +
    "\u03B9\x03\x02\x02\x02\u03B9\u03C7\x07\x1D\x02\x02\u03BA\u03BB\t\x0F\x02" +
    "\x02\u03BB\u03BC\x07\x1E\x02\x02\u03BC\u03BD\x073\x02\x02\u03BD\u03C7" +
    "\x07\x1D\x02\x02\u03BE\u03C2\t\x10\x02\x02\u03BF\u03C1\v\x02\x02\x02\u03C0" +
    "\u03BF\x03\x02\x02\x02\u03C1\u03C4\x03\x02\x02\x02\u03C2\u03C3\x03\x02" +
    "\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4" +
    "\u03C2\x03\x02\x02\x02\u03C5\u03C7\x07\x1D\x02\x02\u03C6\u03AA\x03\x02" +
    "\x02\x02\u03C6\u03BA\x03\x02\x02\x02\u03C6\u03BE\x03\x02\x02\x02\u03C7" +
    "y\x03\x02\x02\x02\u03C8\u03C9\x07\x9B\x02\x02\u03C9\u03CA\x07!\x02\x02" +
    "\u03CA\u03CB\x073\x02\x02\u03CB{\x03\x02\x02\x02\u03CC\u03CD\x07\x9E\x02" +
    "\x02\u03CD}\x03\x02\x02\x02\u03CE\u03CF\x07\x1B\x02\x02\u03CF\u03D7\x07" +
    "\x1D\x02\x02\u03D0\u03D2\x07\x04\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2" +
    "\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02" +
    "\x02\x02\u03D4\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6" +
    "\u03D8\x05\x80A\x02\u03D7\u03D3\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02" +
    "\x02\u03D8\u03ED\x03\x02\x02\x02\u03D9\u03DA\x07\x1B\x02\x02\u03DA\u03DF" +
    "\x05\xA8U\x02\u03DB\u03DE\x07\x1E\x02\x02\u03DC\u03DE\x05\xAEX\x02\u03DD" +
    "\u03DB\x03\x02\x02\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE\u03E1\x03\x02" +
    "\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0" +
    "\u03E2\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03EA\x07\x1D" +
    "\x02\x02\u03E3\u03E5\x07\x04\x02\x02\u03E4\u03E3\x03\x02\x02\x02\u03E5" +
    "\u03E8\x03\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03\x02" +
    "\x02\x02\u03E7\u03E9\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E9" +
    "\u03EB\x05\x80A\x02\u03EA\u03E6\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02" +
    "\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03CE\x03\x02\x02\x02\u03EC\u03D9" +
    "\x03\x02\x02\x02\u03ED\x7F\x03\x02\x02\x02\u03EE\u03EF\x07\x1B\x02\x02" +
    "\u03EF\u03F4\x05\xA8U\x02\u03F0\u03F3\x07\x1E\x02\x02\u03F1\u03F3\x05" +
    "\xAEX\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F1\x03\x02\x02\x02\u03F3" +
    "\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F5\x03\x02" +
    "\x02\x02\u03F5\u03F7\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7" +
    "\u03F8\x07\x1D\x02\x02\u03F8\x81\x03\x02\x02\x02\u03F9\u03FB\x07\x10\x02" +
    "\x02\u03FA\u03FC\x05\xA8U\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC" +
    "\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u0404\x07\x1D";
chatParser._serializedATNSegment2 = "\x02\x02\u03FE\u0400\x07\x11\x02\x02\u03FF\u0401\x05\xA8U\x02\u0400\u03FF" +
    "\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02" +
    "\u0402\u0404\x07\x1D\x02\x02\u0403\u03F9\x03\x02\x02\x02\u0403\u03FE\x03" +
    "\x02\x02\x02\u0404\x83\x03\x02\x02\x02\u0405\u040D\x07C\x02\x02\u0406" +
    "\u040D\x07A\x02\x02\u0407\u0409\x07B\x02\x02\u0408\u040A\x077\x02\x02" +
    "\u0409\u0408\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040B\x03" +
    "\x02\x02\x02\u040B\u040D\x07\x02\x02\x03\u040C\u0405\x03\x02\x02\x02\u040C" +
    "\u0406\x03\x02\x02\x02\u040C\u0407\x03\x02\x02\x02\u040D\x85\x03\x02\x02" +
    "\x02\u040E\u0410\x07n\x02\x02\u040F\u0411\x05\xA8U\x02\u0410\u040F\x03" +
    "\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0427\x03\x02\x02\x02\u0412" +
    "\u041C\x05\xA8U\x02\u0413\u0417\x075\x02\x02\u0414\u0416\x07\x04\x02\x02" +
    "\u0415\u0414\x03\x02\x02\x02\u0416\u0419\x03\x02\x02\x02\u0417\u0415\x03" +
    "\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02\u0419" +
    "\u0417\x03\x02\x02\x02\u041A\u0413\x03\x02\x02\x02\u041B\u041E\x03\x02" +
    "\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D" +
    "\u0422\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0421\x075\x02" +
    "\x02\u0420\u041F\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422\u0420" +
    "\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0426\x03\x02\x02\x02" +
    "\u0424\u0422\x03\x02\x02\x02\u0425\u0412\x03\x02\x02\x02\u0426\u0429\x03" +
    "\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428" +
    "\u042A\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A\u0436\x07\x1D" +
    "\x02\x02\u042B\u0431\x07n\x02\x02\u042C\u0430\x05\xA8U\x02\u042D\u0430" +
    "\x075\x02\x02\u042E\u0430\x07\x04\x02\x02\u042F\u042C\x03\x02\x02\x02" +
    "\u042F\u042D\x03\x02\x02\x02\u042F\u042E\x03\x02\x02\x02\u0430\u0433\x03" +
    "\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432" +
    "\u0434\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0434\u0436\x07\x02" +
    "\x02\x03\u0435\u040E\x03\x02\x02\x02\u0435\u042B\x03\x02\x02\x02\u0436" +
    "\x87\x03\x02\x02\x02\u0437\u043C\x07;\x02\x02\u0438\u043D\x05\xA8U\x02" +
    "\u0439\u043D\x07\x1E\x02\x02\u043A\u043D\x07\x9E\x02\x02\u043B\u043D\x07" +
    "5\x02\x02\u043C\u0438\x03\x02\x02\x02\u043C\u0439\x03\x02\x02\x02\u043C" +
    "\u043A\x03\x02\x02\x02\u043C\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02" +
    "\x02\x02\u043E\u043C\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F" +
    "\u0440\x03\x02\x02\x02\u0440\u044E\x07\x1D\x02\x02\u0441\u0449\x07;\x02" +
    "\x02\u0442\u0448\x05\xA8U\x02\u0443\u0448\x07\x1E\x02\x02\u0444\u0448" +
    "\x07\x9E\x02\x02\u0445\u0448\x075\x02\x02\u0446\u0448\x07\x04\x02\x02" +
    "\u0447\u0442\x03\x02\x02\x02\u0447\u0443\x03\x02\x02\x02\u0447\u0444\x03" +
    "\x02\x02\x02\u0447\u0445\x03\x02\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448" +
    "\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02" +
    "\x02\x02\u044A\u044C\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044C" +
    "\u044E\x07\x02\x02\x03\u044D\u0437\x03\x02\x02\x02\u044D\u0441\x03\x02" +
    "\x02\x02\u044E\x89\x03\x02\x02\x02\u044F\u0450\x07:\x02\x02\u0450\u0451" +
    "\x05\xA8U\x02\u0451\u0452\x07\x1D\x02\x02\u0452\x8B\x03\x02\x02\x02\u0453" +
    "\u0457\x07U\x02\x02\u0454\u0458\x05\xA8U\x02\u0455\u0458\x07\x1E\x02\x02" +
    "\u0456\u0458\x075\x02\x02\u0457\u0454\x03\x02\x02\x02\u0457\u0455\x03" +
    "\x02\x02\x02\u0457\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459" +
    "\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045B\x03\x02" +
    "\x02\x02\u045B\u045D\x07\x1D\x02\x02\u045C\u045E\x05\x8EH\x02\u045D\u045C" +
    "\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\x8D\x03\x02\x02\x02" +
    "\u045F\u0463\x07U\x02\x02\u0460\u0464\x05\xA8U\x02\u0461\u0464\x07\x1E" +
    "\x02\x02\u0462\u0464\x075\x02\x02\u0463\u0460\x03\x02\x02\x02\u0463\u0461" +
    "\x03\x02\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02" +
    "\u0465\u0463\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0467\x03" +
    "\x02\x02\x02\u0467\u0468\x07\x1D\x02\x02\u0468\x8F\x03\x02\x02\x02\u0469" +
    "\u046D\x07\x14\x02\x02\u046A\u046C\x075\x02\x02\u046B\u046A\x03\x02\x02" +
    "\x02\u046C\u046F\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046D\u046E" +
    "\x03\x02\x02\x02\u046E\u0471\x03\x02\x02\x02\u046F\u046D\x03\x02\x02\x02" +
    "\u0470\u0472\x05\xA8U\x02\u0471\u0470\x03\x02\x02\x02\u0471\u0472\x03" +
    "\x02\x02\x02\u0472\u0488\x03\x02\x02\x02\u0473\u047D\x05\xA8U\x02\u0474" +
    "\u0478\x075\x02\x02\u0475\u0477\x07\x04\x02\x02\u0476\u0475\x03\x02\x02" +
    "\x02\u0477\u047A\x03\x02\x02\x02\u0478\u0476\x03\x02\x02\x02\u0478\u0479" +
    "\x03\x02\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02" +
    "\u047B\u0474\x03\x02\x02\x02\u047C\u047F\x03\x02\x02\x02\u047D\u047B\x03" +
    "\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E\u0483\x03\x02\x02\x02\u047F" +
    "\u047D\x03\x02\x02\x02\u0480\u0482\x075\x02\x02\u0481\u0480\x03\x02\x02" +
    "\x02\u0482\u0485\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484" +
    "\x03\x02\x02\x02\u0484\u0487\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02" +
    "\u0486\u0473\x03\x02\x02\x02\u0487\u048A\x03\x02\x02\x02\u0488\u0486\x03" +
    "\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u048B\x03\x02\x02\x02\u048A" +
    "\u0488\x03\x02\x02\x02\u048B\u0498\x07\x1D\x02\x02\u048C\u0490\x07\x14" +
    "\x02\x02\u048D\u048F\x075\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0492" +
    "\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02" +
    "\u0491\u0494\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0495\x05" +
    "\xA8U\x02\u0494\u0493\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495" +
    "\u0496\x03\x02\x02\x02\u0496\u0498\x07\x02\x02\x03\u0497\u0469\x03\x02" +
    "\x02\x02\u0497\u048C\x03\x02\x02\x02\u0498\x91\x03\x02\x02\x02\u0499\u049B" +
    "\x07\x15\x02\x02\u049A\u049C\n\x11\x02\x02\u049B\u049A\x03\x02\x02\x02" +
    "\u049C\u049D\x03\x02\x02\x02\u049D\u049B\x03\x02\x02\x02\u049D\u049E\x03" +
    "\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\u04A0\x07\x1D\x02\x02\u04A0" +
    "\x93\x03\x02\x02\x02\u04A1\u04A4\x07\x1C\x02\x02\u04A2\u04A5\x05\xA8U" +
    "\x02\u04A3\u04A5\x075\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A3" +
    "\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02" +
    "\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04AE\x07" +
    "\x1D\x02\x02\u04A9\u04AA\x07\x1C\x02\x02\u04AA\u04AB\x05\xA8U\x02\u04AB" +
    "\u04AC\x07\x02\x02\x03\u04AC\u04AE\x03\x02\x02\x02\u04AD\u04A1\x03\x02" +
    "\x02\x02\u04AD\u04A9\x03\x02\x02\x02\u04AE\x95\x03\x02\x02\x02\u04AF\u04B0" +
    "\x07G\x02\x02\u04B0\u04B1\x05\xA8U\x02\u04B1\u04B2\x07\x1D\x02\x02\u04B2" +
    "\u04B8\x03\x02\x02\x02\u04B3\u04B4\x07H\x02\x02\u04B4\u04B5\x05\xA8U\x02" +
    "\u04B5\u04B6\x07\x1D\x02\x02\u04B6\u04B8\x03\x02\x02\x02\u04B7\u04AF\x03" +
    "\x02\x02\x02\u04B7\u04B3\x03\x02\x02\x02\u04B8\x97\x03\x02\x02\x02\u04B9" +
    "\u04BA\x07>\x02\x02\u04BA\u04BB\x07\x1E\x02\x02\u04BB\u04BC\x073\x02\x02" +
    "\u04BC\u04C3\x07\x1D\x02\x02\u04BD\u04BE\x07>\x02\x02\u04BE\u04BF\x07" +
    "\x1E\x02\x02\u04BF\u04C0\x05\xA8U\x02\u04C0\u04C1\x07\x1D\x02\x02\u04C1" +
    "\u04C3\x03\x02\x02\x02\u04C2\u04B9\x03\x02\x02\x02\u04C2\u04BD\x03\x02" +
    "\x02\x02\u04C3\x99\x03\x02\x02\x02\u04C4\u04C5\x07S\x02\x02\u04C5\u04C6" +
    "\x05\xA8U\x02\u04C6\u04C7\x07\x1D\x02\x02\u04C7\x9B\x03\x02\x02\x02\u04C8" +
    "\u04C9\x07T\x02\x02\u04C9\u04CA\x05\xA8U\x02\u04CA\u04CB\x07\x1D\x02\x02" +
    "\u04CB\x9D\x03\x02\x02\x02\u04CC\u04D6\x05\xA0Q\x02\u04CD\u04CF\x075\x02" +
    "\x02\u04CE\u04CD\x03\x02\x02\x02\u04CF\u04D2\x03\x02\x02\x02\u04D0\u04CE" +
    "\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1\u04D3\x03\x02\x02\x02" +
    "\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04D5\x05\xA0Q\x02\u04D4\u04D0\x03" +
    "\x02\x02\x02\u04D5\u04D8\x03\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6" +
    "\u04D7\x03\x02\x02\x02\u04D7\x9F\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02" +
    "\x02\u04D9\u04DA\x07\x16\x02\x02\u04DA\u04DB\x05\xA8U\x02\u04DB\u04DC" +
    "\t\x12\x02\x02\u04DC\u04E2\x05\xA8U\x02\u04DD\u04E1\x075\x02\x02\u04DE" +
    "\u04E1\x07\x1E\x02\x02\u04DF\u04E1\x05\xA8U\x02\u04E0\u04DD\x03\x02\x02" +
    "\x02\u04E0\u04DE\x03\x02\x02\x02\u04E0\u04DF\x03\x02\x02\x02\u04E1\u04E4" +
    "\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02" +
    "\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5\u04E6\x07" +
    "\x1D\x02\x02\u04E6\u04F0\x03\x02\x02\x02\u04E7\u04EB\x07Q\x02\x02\u04E8" +
    "\u04EA\v\x02\x02\x02\u04E9\u04E8\x03\x02\x02\x02\u04EA\u04ED\x03\x02\x02" +
    "\x02\u04EB\u04EC\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC\u04EE" +
    "\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\u04F0\x07\x1D\x02\x02" +
    "\u04EF\u04D9\x03\x02\x02\x02\u04EF\u04E7\x03\x02\x02\x02\u04F0\xA1\x03" +
    "\x02\x02\x02\u04F1\u04F5\x07\r\x02\x02\u04F2\u04F6\x05\xA8U\x02\u04F3" +
    "\u04F6\x07\x1E\x02\x02\u04F4\u04F6\x075\x02\x02\u04F5\u04F2\x03\x02\x02" +
    "\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F7" +
    "\x03\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02" +
    "\u04F8\u04F9\x03\x02\x02\x02\u04F9\u0505\x07\x1D\x02\x02\u04FA\u0500\x07" +
    "\r\x02\x02\u04FB\u04FF\x05\xA8U\x02\u04FC\u04FF\x07\x1E\x02\x02\u04FD" +
    "\u04FF\x075\x02\x02\u04FE\u04FB\x03\x02\x02\x02\u04FE\u04FC\x03\x02\x02" +
    "\x02\u04FE\u04FD\x03\x02\x02\x02\u04FF\u0502\x03\x02\x02\x02\u0500\u04FE" +
    "\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0503\x03\x02\x02\x02" +
    "\u0502\u0500\x03\x02\x02\x02\u0503\u0505\x07\x02\x02\x03\u0504\u04F1\x03" +
    "\x02\x02\x02\u0504\u04FA\x03\x02\x02\x02\u0505\xA3\x03\x02\x02\x02\u0506" +
    "\u0508\x07\x12\x02\x02\u0507\u0509\x05\xA8U\x02\u0508\u0507\x03\x02\x02" +
    "\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050B" +
    "\x07\x1D\x02\x02\u050B\xA5\x03\x02\x02\x02\u050C\u050E\x05\xA8U\x02\u050D" +
    "\u050F\x075\x02\x02\u050E\u050D\x03\x02\x02\x02\u050E\u050F\x03\x02\x02" +
    "\x02\u050F\u0511\x03\x02\x02\x02\u0510\u050C\x03\x02\x02\x02\u0511\u0512" +
    "\x03\x02\x02\x02\u0512\u0510\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02" +
    "\u0513\xA7\x03\x02\x02\x02\u0514\u051B\x074\x02\x02\u0515\u0517\x07\x04" +
    "\x02\x02\u0516\u0515\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518" +
    "\u0516\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\u051A\x03\x02" +
    "\x02\x02\u051A\u051C\x073\x02\x02\u051B\u0516\x03\x02\x02\x02\u051B\u051C" +
    "\x03\x02\x02\x02\u051C\u0543\x03\x02\x02\x02\u051D\u0524\x05\xAEX\x02" +
    "\u051E\u0520\x07\x04\x02\x02\u051F\u051E\x03\x02\x02\x02\u0520\u0521\x03" +
    "\x02\x02\x02\u0521\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522" +
    "\u0523\x03\x02\x02\x02\u0523\u0525\x073\x02\x02\u0524\u051F\x03\x02\x02" +
    "\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0543\x03\x02\x02\x02\u0526\u0527" +
    "\x07\x19\x02\x02\u0527\u0528\x05\xA8U\x02\u0528\u0529\x07\x1D\x02\x02" +
    "\u0529\u0543\x03\x02\x02\x02\u052A\u0543\x073\x02\x02\u052B\u052D\x07" +
    "\x04\x02\x02\u052C\u052B\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E" +
    "\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0531\x03\x02" +
    "\x02\x02\u0530\u052E\x03\x02\x02\x02\u0531\u0535\x07\x1E\x02\x02\u0532" +
    "\u0534\x07\x04\x02\x02\u0533\u0532\x03\x02\x02\x02\u0534\u0537\x03\x02" +
    "\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536" +
    "\u0543\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u053C\x07\x1F" +
    "\x02\x02\u0539\u053B\x07\x04\x02\x02\u053A\u0539\x03\x02\x02\x02\u053B" +
    "\u053E\x03\x02\x02\x02\u053C\u053A\x03\x02\x02\x02\u053C\u053D\x03\x02" +
    "\x02\x02\u053D\u0543\x03\x02\x02\x02\u053E\u053C\x03\x02\x02\x02\u053F" +
    "\u0543\x07 \x02\x02\u0540\u0543\x07\'\x02\x02\u0541\u0543\x07\x9E\x02" +
    "\x02\u0542\u0514\x03\x02\x02\x02\u0542\u051D\x03\x02\x02\x02\u0542\u0526" +
    "\x03\x02\x02\x02\u0542\u052A\x03\x02\x02\x02\u0542\u052E\x03\x02\x02\x02" +
    "\u0542\u0538\x03\x02\x02\x02\u0542\u053F\x03\x02\x02\x02\u0542\u0540\x03" +
    "\x02\x02\x02\u0542\u0541\x03\x02\x02\x02\u0543\xA9\x03\x02\x02\x02\u0544" +
    "\u0545\x07\x1D\x02\x02\u0545\xAB\x03\x02\x02\x02\u0546\u0547\t\x13\x02" +
    "\x02\u0547\xAD\x03\x02\x02\x02\u0548\u0554\x077\x02\x02\u0549\u0554\x07" +
    "6\x02\x02\u054A\u0554\x078\x02\x02\u054B\u0554\x07\x1F\x02\x02\u054C\u054D" +
    "\x07#\x02\x02\u054D\u0554\n\x14\x02\x02\u054E\u054F\x07$\x02\x02\u054F" +
    "\u0554\n\x15\x02\x02\u0550\u0554\x07\'\x02\x02\u0551\u0554\x07&\x02\x02" +
    "\u0552\u0554\x07%\x02\x02\u0553\u0548\x03\x02\x02\x02\u0553\u0549\x03" +
    "\x02\x02\x02\u0553\u054A\x03\x02\x02\x02\u0553\u054B\x03\x02\x02\x02\u0553" +
    "\u054C\x03\x02\x02\x02\u0553\u054E\x03\x02\x02\x02\u0553\u0550\x03\x02" +
    "\x02\x02\u0553\u0551\x03\x02\x02\x02\u0553\u0552\x03\x02\x02\x02\u0554" +
    "\u0555\x03\x02\x02\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02" +
    "\x02\x02\u0556\xAF\x03\x02\x02\x02\u0557\u0558\x07\x04\x02\x02\u0558\xB1" +
    "\x03\x02\x02\x02\xBD\xB6\xBC\xC1\xC6\xD3\xDB\xE2\xE7\xF3\xF8\xFE\u0105" +
    "\u010B\u010E\u0116\u011D\u0122\u012E\u0133\u0139\u0140\u0146\u0149\u0151" +
    "\u0158\u015D\u0164\u016A\u0172\u0179\u017E\u0185\u018B\u0193\u019A\u019F" +
    "\u01A6\u01AC\u01B4\u01BB\u01C0\u01C7\u01CD\u01D5\u01DC\u01E1\u01E8\u01EE" +
    "\u01F6\u01FD\u0202\u0209\u020F\u0215\u0219\u021C\u0222\u0226\u0229\u022F" +
    "\u0233\u0236\u0262\u026C\u026E\u0275\u027A\u0288\u028E\u0290\u029E\u02A5" +
    "\u02AA\u02AE\u02B2\u02B5\u02BA\u02D1\u02D6\u02DB\u02DD\u02E7\u02F1\u02FB" +
    "\u0301\u0308\u030E\u0316\u0320\u032B\u0331\u0336\u033D\u0346\u034A\u034E" +
    "\u0351\u0360\u0364\u0373\u0377\u037D\u0388\u038D\u0392\u0394\u0399\u039E" +
    "\u03A3\u03A5\u03AA\u03B0\u03B5\u03B7\u03C2\u03C6\u03D3\u03D7\u03DD\u03DF" +
    "\u03E6\u03EA\u03EC\u03F2\u03F4\u03FB\u0400\u0403\u0409\u040C\u0410\u0417" +
    "\u041C\u0422\u0427\u042F\u0431\u0435\u043C\u043E\u0447\u0449\u044D\u0457" +
    "\u0459\u045D\u0463\u0465\u046D\u0471\u0478\u047D\u0483\u0488\u0490\u0494" +
    "\u0497\u049D\u04A4\u04A6\u04AD\u04B7\u04C2\u04D0\u04D6\u04E0\u04E2\u04EB" +
    "\u04EF\u04F5\u04F7\u04FE\u0500\u0504\u0508\u050E\u0512\u0518\u051B\u0521" +
    "\u0524\u052E\u0535\u053C\u0542\u0553\u0555";
chatParser._serializedATN = Utils.join([
    chatParser._serializedATNSegment0,
    chatParser._serializedATNSegment1,
    chatParser._serializedATNSegment2,
], "");
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
    conversation_left_1() {
        return this.tryGetRuleContext(0, Conversation_left_1Context);
    }
    conversation_right_1() {
        return this.tryGetRuleContext(0, Conversation_right_1Context);
    }
    conversation_right_1_thought() {
        return this.tryGetRuleContext(0, Conversation_right_1_thoughtContext);
    }
    conversation_right_1_scream() {
        return this.tryGetRuleContext(0, Conversation_right_1_screamContext);
    }
    conversation_left_1_thought() {
        return this.tryGetRuleContext(0, Conversation_left_1_thoughtContext);
    }
    conversation_left_1_scream() {
        return this.tryGetRuleContext(0, Conversation_left_1_screamContext);
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
class Conversation_left_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitConversationLeft1() { return this.getToken(chatParser.BitConversationLeft1, 0); }
    format2() {
        return this.getRuleContext(0, Format2Context);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    partner1() {
        return this.getRuleContext(0, Partner1Context);
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
    get ruleIndex() { return chatParser.RULE_conversation_left_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation_left_1) {
            listener.enterConversation_left_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation_left_1) {
            listener.exitConversation_left_1(this);
        }
    }
}
exports.Conversation_left_1Context = Conversation_left_1Context;
class Conversation_right_1Context extends ParserRuleContext_1.ParserRuleContext {
    BitConversationRight1() { return this.getToken(chatParser.BitConversationRight1, 0); }
    format2() {
        return this.getRuleContext(0, Format2Context);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    partner1() {
        return this.getRuleContext(0, Partner1Context);
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
    get ruleIndex() { return chatParser.RULE_conversation_right_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation_right_1) {
            listener.enterConversation_right_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation_right_1) {
            listener.exitConversation_right_1(this);
        }
    }
}
exports.Conversation_right_1Context = Conversation_right_1Context;
class Conversation_right_1_thoughtContext extends ParserRuleContext_1.ParserRuleContext {
    BitConversationRight1Thought() { return this.getToken(chatParser.BitConversationRight1Thought, 0); }
    format2() {
        return this.getRuleContext(0, Format2Context);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    partner1() {
        return this.getRuleContext(0, Partner1Context);
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
    get ruleIndex() { return chatParser.RULE_conversation_right_1_thought; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation_right_1_thought) {
            listener.enterConversation_right_1_thought(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation_right_1_thought) {
            listener.exitConversation_right_1_thought(this);
        }
    }
}
exports.Conversation_right_1_thoughtContext = Conversation_right_1_thoughtContext;
class Conversation_right_1_screamContext extends ParserRuleContext_1.ParserRuleContext {
    BitConversationRight1Scream() { return this.getToken(chatParser.BitConversationRight1Scream, 0); }
    format2() {
        return this.getRuleContext(0, Format2Context);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    partner1() {
        return this.getRuleContext(0, Partner1Context);
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
    get ruleIndex() { return chatParser.RULE_conversation_right_1_scream; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation_right_1_scream) {
            listener.enterConversation_right_1_scream(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation_right_1_scream) {
            listener.exitConversation_right_1_scream(this);
        }
    }
}
exports.Conversation_right_1_screamContext = Conversation_right_1_screamContext;
class Conversation_left_1_thoughtContext extends ParserRuleContext_1.ParserRuleContext {
    BitConversationLeft1Thought() { return this.getToken(chatParser.BitConversationLeft1Thought, 0); }
    format2() {
        return this.getRuleContext(0, Format2Context);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    partner1() {
        return this.getRuleContext(0, Partner1Context);
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
    get ruleIndex() { return chatParser.RULE_conversation_left_1_thought; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation_left_1_thought) {
            listener.enterConversation_left_1_thought(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation_left_1_thought) {
            listener.exitConversation_left_1_thought(this);
        }
    }
}
exports.Conversation_left_1_thoughtContext = Conversation_left_1_thoughtContext;
class Conversation_left_1_screamContext extends ParserRuleContext_1.ParserRuleContext {
    BitConversationLeft1Scream() { return this.getToken(chatParser.BitConversationLeft1Scream, 0); }
    format2() {
        return this.getRuleContext(0, Format2Context);
    }
    CL() { return this.getToken(chatParser.CL, 0); }
    partner1() {
        return this.getRuleContext(0, Partner1Context);
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
    get ruleIndex() { return chatParser.RULE_conversation_left_1_scream; }
    // @Override
    enterRule(listener) {
        if (listener.enterConversation_left_1_scream) {
            listener.enterConversation_left_1_scream(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConversation_left_1_scream) {
            listener.exitConversation_left_1_scream(this);
        }
    }
}
exports.Conversation_left_1_screamContext = Conversation_left_1_screamContext;
class InitiatorContext extends ParserRuleContext_1.ParserRuleContext {
    name_text() {
        return this.getRuleContext(0, Name_textContext);
    }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    name_alt() {
        return this.tryGetRuleContext(0, Name_altContext);
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
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    name_alt() {
        return this.tryGetRuleContext(0, Name_altContext);
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
class Partner1Context extends ParserRuleContext_1.ParserRuleContext {
    partner1_name() {
        return this.getRuleContext(0, Partner1_nameContext);
    }
    imagebit() {
        return this.tryGetRuleContext(0, ImagebitContext);
    }
    name_alt() {
        return this.tryGetRuleContext(0, Name_altContext);
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
    get ruleIndex() { return chatParser.RULE_partner1; }
    // @Override
    enterRule(listener) {
        if (listener.enterPartner1) {
            listener.enterPartner1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPartner1) {
            listener.exitPartner1(this);
        }
    }
}
exports.Partner1Context = Partner1Context;
class Partner1_nameContext extends ParserRuleContext_1.ParserRuleContext {
    AtPartner() { return this.getToken(chatParser.AtPartner, 0); }
    STRING() { return this.getToken(chatParser.STRING, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_partner1_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterPartner1_name) {
            listener.enterPartner1_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPartner1_name) {
            listener.exitPartner1_name(this);
        }
    }
}
exports.Partner1_nameContext = Partner1_nameContext;
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
class Name_altContext extends ParserRuleContext_1.ParserRuleContext {
    OPATALT() { return this.getToken(chatParser.OPATALT, 0); }
    STRING() { return this.getToken(chatParser.STRING, 0); }
    CL() { return this.getToken(chatParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return chatParser.RULE_name_alt; }
    // @Override
    enterRule(listener) {
        if (listener.enterName_alt) {
            listener.enterName_alt(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitName_alt) {
            listener.exitName_alt(this);
        }
    }
}
exports.Name_altContext = Name_altContext;
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
    NOTBITMARK() { return this.tryGetToken(chatParser.NOTBITMARK, 0); }
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
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(chatParser.NOTBITMARK);
        }
        else {
            return this.getToken(chatParser.NOTBITMARK, i);
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
