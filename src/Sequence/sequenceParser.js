"use strict";
// Generated from ./Sequence/sequenceParser.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpContext = exports.WordsContext = exports.SsplContext = exports.ClnspContext = exports.DclinesContext = exports.S_and_wContext = exports.DcolonContext = exports.AnchorContext = exports.DollaransContext = exports.Atdef_Context = exports.AtdefContext = exports.IsinfoonlyContext = exports.IstrackedContext = exports.Progress_pointsContext = exports.Bool_labelContext = exports.TitleContext = exports.HintContext = exports.InstructionContext = exports.Dateprop_chainedContext = exports.DatepropContext = exports.ProgressContext = exports.ReferenceContext = exports.Bracketed_textContext = exports.ExampleContext = exports.AnglerefContext = exports.LeadContext = exports.ItemContext = exports.UrlContext = exports.TelephoneContext = exports.Resource_chainedContext = exports.Op_audio_formatContext = exports.Audio_formatContext = exports.Audio_oneContext = exports.AudiobitContext = exports.Image_chained4matchContext = exports.Image_chainedContext = exports.Op_image_formatContext = exports.Image_oneContext = exports.ImagebitContext = exports.Video_oneContext = exports.VideobitContext = exports.Stillimg_oneContext = exports.StillimagefilmbitContext = exports.AppbitContext = exports.WebsitebitContext = exports.DocumentbitContext = exports.ArticlebitContext = exports.Op_stillimagefilm_formatContext = exports.Op_video_formatContext = exports.Op_website_formatContext = exports.Op_app_formatContext = exports.Op_document_formatContext = exports.Op_article_formatContext = exports.Stillimagefilm_formatContext = exports.Website_formatContext = exports.App_formatContext = exports.Document_formatContext = exports.Article_formatContext = exports.Video_formatContext = exports.Image_formatContext = exports.Format2Context = exports.Resource_format_extraContext = exports.Resource_formatContext = exports.FormatContext = exports.AtpointContext = exports.Bullet_itemContext = exports.ResourceContext = exports.Choice_starContext = exports.Choice_minusContext = exports.Choice_plusContext = exports.Single_gapContext = exports.GapContext = exports.BitElemContext = exports.FooterContext = exports.MtexContext = exports.MelemContext = exports.Menu_textContext = exports.Hspl_slotContext = exports.Menu_listContext = exports.Menu_3_courseContext = exports.MinusminusContext = exports.SeqstrContext = exports.SequenceContext = exports.BitContext = exports.Bitmark_Context = exports.BitmarkContext = exports.sequenceParser = void 0;
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
class sequenceParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(sequenceParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return sequenceParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "sequenceParser.g4"; }
    // @Override
    get ruleNames() { return sequenceParser.ruleNames; }
    // @Override
    get serializedATN() { return sequenceParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    bitmark() {
        let _localctx = new BitmarkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, sequenceParser.RULE_bitmark);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 172;
                            this.bitmark_();
                            this.state = 182;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 176;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === sequenceParser.S) {
                                                {
                                                    {
                                                        this.state = 173;
                                                        this.match(sequenceParser.S);
                                                    }
                                                }
                                                this.state = 178;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 179;
                                            this.match(sequenceParser.NL);
                                        }
                                    }
                                }
                                this.state = 184;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                            }
                        }
                    }
                    this.state = 187;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === sequenceParser.BitSequence || _la === sequenceParser.BitMenu3Course);
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sequenceParser.NL) {
                    {
                        {
                            this.state = 189;
                            this.match(sequenceParser.NL);
                        }
                    }
                    this.state = 194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 195;
                this.match(sequenceParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 2, sequenceParser.RULE_bitmark_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 197;
                this.bit();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 4, sequenceParser.RULE_bit);
        try {
            this.state = 201;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.BitSequence:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 199;
                        this.sequence();
                    }
                    break;
                case sequenceParser.BitMenu3Course:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 200;
                        this.menu_3_course();
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
    sequence() {
        let _localctx = new SequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, sequenceParser.RULE_sequence);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this.match(sequenceParser.BitSequence);
                this.state = 204;
                this.format();
                this.state = 205;
                this.match(sequenceParser.CL);
                this.state = 215;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 209;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === sequenceParser.NL) {
                                    {
                                        {
                                            this.state = 206;
                                            this.match(sequenceParser.NL);
                                        }
                                    }
                                    this.state = 211;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 212;
                                this.bitElem();
                            }
                        }
                    }
                    this.state = 217;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 221;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sequenceParser.NL) {
                    {
                        {
                            this.state = 218;
                            this.match(sequenceParser.NL);
                        }
                    }
                    this.state = 223;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 224;
                this.match(sequenceParser.HSPL);
                this.state = 230;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 225;
                                this.seqstr();
                                this.state = 226;
                                this.minusminus();
                            }
                        }
                    }
                    this.state = 232;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
                this.state = 233;
                this.seqstr();
                this.state = 234;
                this.match(sequenceParser.HSPL);
                this.state = 236;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 235;
                            this.footer();
                        }
                        break;
                }
                this.state = 251;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 238;
                            this.resource();
                            this.state = 248;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 242;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === sequenceParser.NL) {
                                                {
                                                    {
                                                        this.state = 239;
                                                        this.match(sequenceParser.NL);
                                                    }
                                                }
                                                this.state = 244;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 245;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 250;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
    seqstr() {
        let _localctx = new SeqstrContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, sequenceParser.RULE_seqstr);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 253;
                                this.bitElem();
                                this.state = 255;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === sequenceParser.NL) {
                                    {
                                        this.state = 254;
                                        this.match(sequenceParser.NL);
                                    }
                                }
                            }
                        }
                    }
                    this.state = 261;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 262;
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
    minusminus() {
        let _localctx = new MinusminusContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, sequenceParser.RULE_minusminus);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.match(sequenceParser.DMM);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    menu_3_course() {
        let _localctx = new Menu_3_courseContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, sequenceParser.RULE_menu_3_course);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(sequenceParser.BitMenu3Course);
                this.state = 267;
                this.format();
                this.state = 268;
                this.match(sequenceParser.CL);
                this.state = 278;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 272;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === sequenceParser.NL) {
                                    {
                                        {
                                            this.state = 269;
                                            this.match(sequenceParser.NL);
                                        }
                                    }
                                    this.state = 274;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 275;
                                this.bitElem();
                            }
                        }
                    }
                    this.state = 280;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                }
                this.state = 284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sequenceParser.NL) {
                    {
                        {
                            this.state = 281;
                            this.match(sequenceParser.NL);
                        }
                    }
                    this.state = 286;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 287;
                this.menu_list();
                this.state = 289;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 288;
                            this.footer();
                        }
                        break;
                }
                this.state = 304;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                    case 1:
                        {
                            this.state = 291;
                            this.resource();
                            this.state = 301;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 295;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === sequenceParser.NL) {
                                                {
                                                    {
                                                        this.state = 292;
                                                        this.match(sequenceParser.NL);
                                                    }
                                                }
                                                this.state = 297;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 298;
                                            this.resource();
                                        }
                                    }
                                }
                                this.state = 303;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
    menu_list() {
        let _localctx = new Menu_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, sequenceParser.RULE_menu_list);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 306;
                this.hspl_slot();
                this.state = 307;
                this.menu_text();
                this.state = 312;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 308;
                                this.match(sequenceParser.HSPL);
                                this.state = 309;
                                this.menu_text();
                            }
                        }
                    }
                    this.state = 314;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                }
                this.state = 315;
                this.match(sequenceParser.HSPL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    hspl_slot() {
        let _localctx = new Hspl_slotContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, sequenceParser.RULE_hspl_slot);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 317;
                this.match(sequenceParser.HSPL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    menu_text() {
        let _localctx = new Menu_textContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, sequenceParser.RULE_menu_text);
        try {
            this.state = 321;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.S:
                case sequenceParser.OPB:
                case sequenceParser.OPQ:
                case sequenceParser.OPA:
                case sequenceParser.OPS:
                case sequenceParser.COLON:
                case sequenceParser.AMP:
                case sequenceParser.Greater:
                case sequenceParser.Less:
                case sequenceParser.RightAngle:
                case sequenceParser.RightArrow:
                case sequenceParser.DBLEQ:
                case sequenceParser.NUMERIC:
                case sequenceParser.STRING:
                case sequenceParser.NOTBITMARK:
                case sequenceParser.SENTENCE:
                case sequenceParser.BARSTRING:
                case sequenceParser.AtExampleWithStr:
                case sequenceParser.AtExamplecol:
                case sequenceParser.AtExamplecl:
                case sequenceParser.OpAtCopyright:
                case sequenceParser.AmpAudio:
                case sequenceParser.AmpImage:
                case sequenceParser.AmpVideo:
                case sequenceParser.AmpArticle:
                case sequenceParser.AmpDocument:
                case sequenceParser.AmpApp:
                case sequenceParser.AmpWebsite:
                case sequenceParser.AmpAudioLink:
                case sequenceParser.AmpImageLink:
                case sequenceParser.AmpArticleLink:
                case sequenceParser.AmpDocumentLink:
                case sequenceParser.BitmarkMinus:
                case sequenceParser.BitmarkPlus:
                case sequenceParser.URL:
                case sequenceParser.LIST_LINE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 319;
                        this.melem();
                    }
                    break;
                case sequenceParser.HSPL:
                    this.enterOuterAlt(_localctx, 2);
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
    melem() {
        let _localctx = new MelemContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, sequenceParser.RULE_melem);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.mtex();
                this.state = 327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (sequenceParser.S - 2)) | (1 << (sequenceParser.OPB - 2)) | (1 << (sequenceParser.OPQ - 2)) | (1 << (sequenceParser.OPA - 2)) | (1 << (sequenceParser.OPS - 2)) | (1 << (sequenceParser.COLON - 2)) | (1 << (sequenceParser.AMP - 2)) | (1 << (sequenceParser.Greater - 2)) | (1 << (sequenceParser.Less - 2)) | (1 << (sequenceParser.RightAngle - 2)) | (1 << (sequenceParser.RightArrow - 2)) | (1 << (sequenceParser.DBLEQ - 2)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (sequenceParser.NUMERIC - 44)) | (1 << (sequenceParser.STRING - 44)) | (1 << (sequenceParser.NOTBITMARK - 44)) | (1 << (sequenceParser.SENTENCE - 44)) | (1 << (sequenceParser.BARSTRING - 44)) | (1 << (sequenceParser.AtExampleWithStr - 44)) | (1 << (sequenceParser.AtExamplecol - 44)) | (1 << (sequenceParser.AtExamplecl - 44)) | (1 << (sequenceParser.OpAtCopyright - 44)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                    {
                        {
                            this.state = 324;
                            this.mtex();
                        }
                    }
                    this.state = 329;
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
    mtex() {
        let _localctx = new MtexContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, sequenceParser.RULE_mtex);
        let _la;
        try {
            this.state = 349;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.S:
                case sequenceParser.OPS:
                case sequenceParser.COLON:
                case sequenceParser.AMP:
                case sequenceParser.Greater:
                case sequenceParser.Less:
                case sequenceParser.RightAngle:
                case sequenceParser.RightArrow:
                case sequenceParser.DBLEQ:
                case sequenceParser.NUMERIC:
                case sequenceParser.STRING:
                case sequenceParser.NOTBITMARK:
                case sequenceParser.SENTENCE:
                case sequenceParser.BARSTRING:
                case sequenceParser.AmpAudio:
                case sequenceParser.AmpImage:
                case sequenceParser.AmpVideo:
                case sequenceParser.AmpArticle:
                case sequenceParser.AmpDocument:
                case sequenceParser.AmpApp:
                case sequenceParser.AmpWebsite:
                case sequenceParser.AmpAudioLink:
                case sequenceParser.AmpImageLink:
                case sequenceParser.AmpArticleLink:
                case sequenceParser.AmpDocumentLink:
                case sequenceParser.BitmarkMinus:
                case sequenceParser.BitmarkPlus:
                case sequenceParser.URL:
                case sequenceParser.LIST_LINE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 330;
                        this.s_and_w();
                        this.state = 334;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === sequenceParser.NL) {
                            {
                                {
                                    this.state = 331;
                                    this.match(sequenceParser.NL);
                                }
                            }
                            this.state = 336;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case sequenceParser.OPB:
                case sequenceParser.OPQ:
                case sequenceParser.OPA:
                case sequenceParser.AtExampleWithStr:
                case sequenceParser.AtExamplecol:
                case sequenceParser.AtExamplecl:
                case sequenceParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 341;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sequenceParser.OPB:
                                {
                                    this.state = 337;
                                    this.instruction();
                                }
                                break;
                            case sequenceParser.OPA:
                            case sequenceParser.OpAtCopyright:
                                {
                                    this.state = 338;
                                    this.atdef();
                                }
                                break;
                            case sequenceParser.OPQ:
                                {
                                    this.state = 339;
                                    this.hint();
                                }
                                break;
                            case sequenceParser.AtExampleWithStr:
                            case sequenceParser.AtExamplecol:
                            case sequenceParser.AtExamplecl:
                                {
                                    this.state = 340;
                                    this.example();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === sequenceParser.NL) {
                            {
                                {
                                    this.state = 343;
                                    this.match(sequenceParser.NL);
                                }
                            }
                            this.state = 348;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
    footer() {
        let _localctx = new FooterContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, sequenceParser.RULE_footer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 354;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.NL) {
                                        {
                                            {
                                                this.state = 351;
                                                this.match(sequenceParser.NL);
                                            }
                                        }
                                        this.state = 356;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
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
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 363;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 362;
                                    this.match(sequenceParser.NL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 365;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
        this.enterRule(_localctx, 26, sequenceParser.RULE_bitElem);
        try {
            this.state = 393;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 367;
                        this.match(sequenceParser.LIST_LINE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 368;
                        this.match(sequenceParser.NOTBITMARK);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 369;
                        this.dclines();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 370;
                        this.gap();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 371;
                        this.atdef();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 372;
                        this.reference();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 373;
                        this.dollarans();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 374;
                        this.item();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 375;
                        this.title();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 376;
                        this.instruction();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 377;
                        this.hint();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 378;
                        this.s_and_w();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 379;
                        this.example();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 380;
                        this.bool_label();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 381;
                        this.imagebit();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 382;
                        this.audiobit();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 383;
                        this.videobit();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 384;
                        this.articlebit();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 385;
                        this.documentbit();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 386;
                        this.appbit();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 387;
                        this.websitebit();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 388;
                        this.stillimagefilmbit();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 389;
                        this.angleref();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 390;
                        this.anchor();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 391;
                        this.bracketed_text();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 392;
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
        this.enterRule(_localctx, 28, sequenceParser.RULE_gap);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.single_gap();
                this.state = 403;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 401;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sequenceParser.OPU:
                                    {
                                        this.state = 396;
                                        this.single_gap();
                                    }
                                    break;
                                case sequenceParser.OPB:
                                    {
                                        this.state = 397;
                                        this.instruction();
                                    }
                                    break;
                                case sequenceParser.OPQ:
                                    {
                                        this.state = 398;
                                        this.hint();
                                    }
                                    break;
                                case sequenceParser.OPC:
                                    {
                                        this.state = 399;
                                        this.item();
                                    }
                                    break;
                                case sequenceParser.AtExampleWithStr:
                                case sequenceParser.AtExamplecol:
                                case sequenceParser.AtExamplecl:
                                    {
                                        this.state = 400;
                                        this.example();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 405;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 30, sequenceParser.RULE_single_gap);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this.match(sequenceParser.OPU);
                this.state = 410;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 407;
                            this.match(sequenceParser.NUMERIC);
                        }
                        break;
                    case 2:
                        {
                            this.state = 408;
                            this.match(sequenceParser.STRING);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                }
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                    {
                        {
                            this.state = 412;
                            this.s_and_w();
                        }
                    }
                    this.state = 417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 418;
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
        this.enterRule(_localctx, 32, sequenceParser.RULE_choice_plus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 421;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.OPC) {
                    {
                        this.state = 420;
                        this.item();
                    }
                }
                this.state = 423;
                this.match(sequenceParser.OPP);
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 424;
                            this.s_and_w();
                        }
                    }
                    this.state = 427;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                this.state = 429;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 34, sequenceParser.RULE_choice_minus);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.OPC) {
                    {
                        this.state = 431;
                        this.item();
                    }
                }
                this.state = 434;
                this.match(sequenceParser.OPM);
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 435;
                            this.s_and_w();
                        }
                    }
                    this.state = 438;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                this.state = 440;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 36, sequenceParser.RULE_choice_star);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 443;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.OPC) {
                    {
                        this.state = 442;
                        this.item();
                    }
                }
                this.state = 445;
                this.match(sequenceParser.OPR);
                this.state = 447;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 446;
                            this.s_and_w();
                        }
                    }
                    this.state = 449;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                this.state = 451;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 38, sequenceParser.RULE_resource);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
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
        this.enterRule(_localctx, 40, sequenceParser.RULE_bullet_item);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.match(sequenceParser.OPBUL);
                this.state = 456;
                this.s_and_w();
                this.state = 457;
                this.match(sequenceParser.CL);
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.AtPoints) {
                    {
                        this.state = 458;
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
        this.enterRule(_localctx, 42, sequenceParser.RULE_atpoint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 461;
                this.match(sequenceParser.AtPoints);
                this.state = 462;
                this.match(sequenceParser.NUMERIC);
                this.state = 463;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 44, sequenceParser.RULE_format);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 468;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 465;
                                this.resource_format();
                            }
                        }
                    }
                    this.state = 470;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                }
                this.state = 476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpImageZoom - 81)) | (1 << (sequenceParser.AmpImageWAudio - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpStillImageFilm - 81)) | (1 << (sequenceParser.AmpPdf - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpVideoLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)) | (1 << (sequenceParser.AmpAppLink - 81)) | (1 << (sequenceParser.AmpWebsiteLink - 81)) | (1 << (sequenceParser.AmpStillImageFilmLink - 81)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (sequenceParser.AmpVideoEmbed - 121)) | (1 << (sequenceParser.AmpDocumentEmbed - 121)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 121)) | (1 << (sequenceParser.ColonText - 121)) | (1 << (sequenceParser.ColonJson - 121)))) !== 0)) {
                    {
                        this.state = 474;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sequenceParser.ColonText:
                                {
                                    this.state = 471;
                                    this.match(sequenceParser.ColonText);
                                }
                                break;
                            case sequenceParser.ColonJson:
                                {
                                    this.state = 472;
                                    this.match(sequenceParser.ColonJson);
                                }
                                break;
                            case sequenceParser.AmpAudio:
                            case sequenceParser.AmpImage:
                            case sequenceParser.AmpImageZoom:
                            case sequenceParser.AmpImageWAudio:
                            case sequenceParser.AmpVideo:
                            case sequenceParser.AmpArticle:
                            case sequenceParser.AmpDocument:
                            case sequenceParser.AmpApp:
                            case sequenceParser.AmpWebsite:
                            case sequenceParser.AmpStillImageFilm:
                            case sequenceParser.AmpPdf:
                            case sequenceParser.AmpAudioLink:
                            case sequenceParser.AmpImageLink:
                            case sequenceParser.AmpVideoLink:
                            case sequenceParser.AmpArticleLink:
                            case sequenceParser.AmpDocumentLink:
                            case sequenceParser.AmpAppLink:
                            case sequenceParser.AmpWebsiteLink:
                            case sequenceParser.AmpStillImageFilmLink:
                            case sequenceParser.AmpVideoEmbed:
                            case sequenceParser.AmpDocumentEmbed:
                            case sequenceParser.AmpStillImageFilmEmbed:
                                {
                                    this.state = 473;
                                    this.resource_format_extra();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 478;
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
        this.enterRule(_localctx, 46, sequenceParser.RULE_resource_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 479;
                _la = this._input.LA(1);
                if (!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (sequenceParser.AmpArticle - 86)) | (1 << (sequenceParser.AmpDocument - 86)) | (1 << (sequenceParser.AmpWebsite - 86)) | (1 << (sequenceParser.AmpStillImageFilm - 86)) | (1 << (sequenceParser.AmpAudioLink - 86)) | (1 << (sequenceParser.AmpImageLink - 86)) | (1 << (sequenceParser.AmpVideoLink - 86)) | (1 << (sequenceParser.AmpArticleLink - 86)) | (1 << (sequenceParser.AmpDocumentLink - 86)) | (1 << (sequenceParser.AmpAppLink - 86)) | (1 << (sequenceParser.AmpWebsiteLink - 86)) | (1 << (sequenceParser.AmpStillImageFilmLink - 86)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (sequenceParser.AmpVideoEmbed - 121)) | (1 << (sequenceParser.AmpAudioEmbed - 121)) | (1 << (sequenceParser.AmpDocumentEmbed - 121)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 121)) | (1 << (sequenceParser.BitmarkMinus - 121)) | (1 << (sequenceParser.BitmarkPlus - 121)) | (1 << (sequenceParser.ColonJson - 121)) | (1 << (sequenceParser.Prosemirror - 121)) | (1 << (sequenceParser.Placeholder - 121)))) !== 0))) {
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
        this.enterRule(_localctx, 48, sequenceParser.RULE_resource_format_extra);
        try {
            this.state = 490;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AmpImage:
                case sequenceParser.AmpImageZoom:
                case sequenceParser.AmpImageWAudio:
                case sequenceParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 481;
                        this.image_format();
                    }
                    break;
                case sequenceParser.AmpAudio:
                case sequenceParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 482;
                        this.audio_format();
                    }
                    break;
                case sequenceParser.AmpVideo:
                case sequenceParser.AmpVideoLink:
                case sequenceParser.AmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 483;
                        this.video_format();
                    }
                    break;
                case sequenceParser.AmpArticle:
                case sequenceParser.AmpArticleLink:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 484;
                        this.article_format();
                    }
                    break;
                case sequenceParser.AmpDocument:
                case sequenceParser.AmpDocumentLink:
                case sequenceParser.AmpDocumentEmbed:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 485;
                        this.document_format();
                    }
                    break;
                case sequenceParser.AmpApp:
                case sequenceParser.AmpAppLink:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 486;
                        this.app_format();
                    }
                    break;
                case sequenceParser.AmpWebsite:
                case sequenceParser.AmpWebsiteLink:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 487;
                        this.website_format();
                    }
                    break;
                case sequenceParser.AmpStillImageFilm:
                case sequenceParser.AmpStillImageFilmLink:
                case sequenceParser.AmpStillImageFilmEmbed:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 488;
                        this.stillimagefilm_format();
                    }
                    break;
                case sequenceParser.AmpPdf:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 489;
                        this.match(sequenceParser.AmpPdf);
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
        this.enterRule(_localctx, 50, sequenceParser.RULE_format2);
        try {
            this.state = 497;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.BitmarkMinus:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 492;
                        this.match(sequenceParser.BitmarkMinus);
                    }
                    break;
                case sequenceParser.BitmarkPlus:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 493;
                        this.match(sequenceParser.BitmarkPlus);
                    }
                    break;
                case sequenceParser.ColonText:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 494;
                        this.match(sequenceParser.ColonText);
                    }
                    break;
                case sequenceParser.ColonJson:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 495;
                        this.match(sequenceParser.ColonJson);
                    }
                    break;
                case sequenceParser.EOF:
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
        this.enterRule(_localctx, 52, sequenceParser.RULE_image_format);
        let _la;
        try {
            this.state = 513;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 499;
                        this.match(sequenceParser.AmpImage);
                        this.state = 502;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sequenceParser.Image_type:
                                {
                                    {
                                        this.state = 500;
                                        this.match(sequenceParser.Image_type);
                                    }
                                }
                                break;
                            case sequenceParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 501;
                                        this.match(sequenceParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case sequenceParser.CL:
                            case sequenceParser.AmpAudio:
                            case sequenceParser.AmpImage:
                            case sequenceParser.AmpImageZoom:
                            case sequenceParser.AmpImageWAudio:
                            case sequenceParser.AmpVideo:
                            case sequenceParser.AmpArticle:
                            case sequenceParser.AmpDocument:
                            case sequenceParser.AmpApp:
                            case sequenceParser.AmpWebsite:
                            case sequenceParser.AmpStillImageFilm:
                            case sequenceParser.AmpPdf:
                            case sequenceParser.AmpAudioLink:
                            case sequenceParser.AmpImageLink:
                            case sequenceParser.AmpVideoLink:
                            case sequenceParser.AmpArticleLink:
                            case sequenceParser.AmpDocumentLink:
                            case sequenceParser.AmpAppLink:
                            case sequenceParser.AmpWebsiteLink:
                            case sequenceParser.AmpStillImageFilmLink:
                            case sequenceParser.AmpVideoEmbed:
                            case sequenceParser.AmpDocumentEmbed:
                            case sequenceParser.AmpStillImageFilmEmbed:
                            case sequenceParser.ColonText:
                            case sequenceParser.ColonJson:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case sequenceParser.AmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 504;
                        this.match(sequenceParser.AmpImageLink);
                        this.state = 506;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.Image_type) {
                            {
                                this.state = 505;
                                this.match(sequenceParser.Image_type);
                            }
                        }
                    }
                    break;
                case sequenceParser.AmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 508;
                        this.match(sequenceParser.AmpImageZoom);
                        this.state = 510;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.Image_type) {
                            {
                                this.state = 509;
                                this.match(sequenceParser.Image_type);
                            }
                        }
                    }
                    break;
                case sequenceParser.AmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 512;
                        this.match(sequenceParser.AmpImageWAudio);
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
        this.enterRule(_localctx, 54, sequenceParser.RULE_video_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.AmpVideo || _la === sequenceParser.AmpVideoLink || _la === sequenceParser.AmpVideoEmbed)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.COLON) {
                    {
                        this.state = 516;
                        this.match(sequenceParser.COLON);
                        this.state = 517;
                        this.match(sequenceParser.Video_type);
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
        this.enterRule(_localctx, 56, sequenceParser.RULE_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 520;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.AmpArticle || _la === sequenceParser.AmpArticleLink)) {
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
        this.enterRule(_localctx, 58, sequenceParser.RULE_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 522;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.AmpDocument || _la === sequenceParser.AmpDocumentLink || _la === sequenceParser.AmpDocumentEmbed)) {
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
        this.enterRule(_localctx, 60, sequenceParser.RULE_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.AmpApp || _la === sequenceParser.AmpAppLink)) {
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
        this.enterRule(_localctx, 62, sequenceParser.RULE_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.AmpWebsite || _la === sequenceParser.AmpWebsiteLink)) {
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
        this.enterRule(_localctx, 64, sequenceParser.RULE_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 528;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.AmpStillImageFilm || _la === sequenceParser.AmpStillImageFilmLink || _la === sequenceParser.AmpStillImageFilmEmbed)) {
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
        this.enterRule(_localctx, 66, sequenceParser.RULE_op_article_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.OpAmpArticle || _la === sequenceParser.OpAmpArticleLink)) {
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
        this.enterRule(_localctx, 68, sequenceParser.RULE_op_document_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                _la = this._input.LA(1);
                if (!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (sequenceParser.OpAmpDocument - 99)) | (1 << (sequenceParser.OpAmpDocumentLink - 99)) | (1 << (sequenceParser.OpAmpDocumentEmbed - 99)))) !== 0))) {
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
        this.enterRule(_localctx, 70, sequenceParser.RULE_op_app_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 534;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.OpAmpApp || _la === sequenceParser.OpAmpAppLink)) {
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
        this.enterRule(_localctx, 72, sequenceParser.RULE_op_website_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 536;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.OpAmpWebsite || _la === sequenceParser.OpAmpWebsiteLink)) {
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
        this.enterRule(_localctx, 74, sequenceParser.RULE_op_video_format);
        try {
            this.state = 553;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OpAmpVideo:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 538;
                        this.match(sequenceParser.OpAmpVideo);
                        this.state = 541;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                            case 1:
                                {
                                    this.state = 539;
                                    this.match(sequenceParser.COLON);
                                    this.state = 540;
                                    this.match(sequenceParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case sequenceParser.OpAmpVideoLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 543;
                        this.match(sequenceParser.OpAmpVideoLink);
                        this.state = 546;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                            case 1:
                                {
                                    this.state = 544;
                                    this.match(sequenceParser.COLON);
                                    this.state = 545;
                                    this.match(sequenceParser.Video_type);
                                }
                                break;
                        }
                    }
                    break;
                case sequenceParser.OpAmpVideoEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 548;
                        this.match(sequenceParser.OpAmpVideoEmbed);
                        this.state = 551;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                            case 1:
                                {
                                    this.state = 549;
                                    this.match(sequenceParser.COLON);
                                    this.state = 550;
                                    this.match(sequenceParser.Video_type);
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
        this.enterRule(_localctx, 76, sequenceParser.RULE_op_stillimagefilm_format);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                _la = this._input.LA(1);
                if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (sequenceParser.OpAmpStillImageFilm - 102)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 102)) | (1 << (sequenceParser.OpAmpStillImageFilmEmbed - 102)))) !== 0))) {
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
        this.enterRule(_localctx, 78, sequenceParser.RULE_articlebit);
        try {
            this.state = 563;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OpAmpArticle:
                case sequenceParser.OpAmpArticleLink:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 557;
                        this.op_article_format();
                        this.state = 558;
                        this.match(sequenceParser.COLON);
                        this.state = 559;
                        this.url();
                        this.state = 560;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.ArticleText:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 562;
                        this.match(sequenceParser.ArticleText);
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
        this.enterRule(_localctx, 80, sequenceParser.RULE_documentbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 565;
                this.op_document_format();
                this.state = 566;
                this.match(sequenceParser.COLON);
                this.state = 567;
                this.url();
                this.state = 568;
                this.match(sequenceParser.CL);
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.OPATALT) {
                    {
                        this.state = 569;
                        this.match(sequenceParser.OPATALT);
                        this.state = 570;
                        this.words();
                        this.state = 571;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 82, sequenceParser.RULE_websitebit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this.op_website_format();
                this.state = 576;
                this.match(sequenceParser.COLON);
                this.state = 577;
                this.url();
                this.state = 578;
                this.match(sequenceParser.CL);
                this.state = 583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.OPATALT) {
                    {
                        this.state = 579;
                        this.match(sequenceParser.OPATALT);
                        this.state = 580;
                        this.words();
                        this.state = 581;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 84, sequenceParser.RULE_appbit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 585;
                this.op_app_format();
                this.state = 586;
                this.match(sequenceParser.COLON);
                this.state = 589;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.URL:
                        {
                            this.state = 587;
                            this.url();
                        }
                        break;
                    case sequenceParser.TEL:
                        {
                            this.state = 588;
                            this.telephone();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 591;
                this.match(sequenceParser.CL);
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.OPATALT) {
                    {
                        this.state = 592;
                        this.match(sequenceParser.OPATALT);
                        this.state = 593;
                        this.words();
                        this.state = 594;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 86, sequenceParser.RULE_stillimagefilmbit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 598;
                this.stillimg_one();
                this.state = 602;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 599;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 604;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 88, sequenceParser.RULE_stillimg_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 605;
                this.op_stillimagefilm_format();
                this.state = 606;
                this.match(sequenceParser.COLON);
                this.state = 610;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sequenceParser.S) {
                    {
                        {
                            this.state = 607;
                            this.match(sequenceParser.S);
                        }
                    }
                    this.state = 612;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 613;
                this.url();
                this.state = 614;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 90, sequenceParser.RULE_videobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this.video_one();
                this.state = 620;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 617;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 622;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 92, sequenceParser.RULE_video_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 623;
                this.op_video_format();
                this.state = 624;
                this.match(sequenceParser.COLON);
                this.state = 625;
                this.url();
                this.state = 626;
                this.match(sequenceParser.CL);
                this.state = 631;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                    case 1:
                        {
                            this.state = 627;
                            this.match(sequenceParser.OPATALT);
                            this.state = 628;
                            this.words();
                            this.state = 629;
                            this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 94, sequenceParser.RULE_imagebit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 633;
                this.image_one();
                this.state = 637;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 634;
                                this.image_chained();
                            }
                        }
                    }
                    this.state = 639;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
                }
                this.state = 642;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        {
                            this.state = 640;
                            this.match(sequenceParser.NL);
                            this.state = 641;
                            this.match(sequenceParser.ShowInIndex);
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
        this.enterRule(_localctx, 96, sequenceParser.RULE_image_one);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.op_image_format();
                this.state = 645;
                this.match(sequenceParser.COLON);
                this.state = 649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sequenceParser.S) {
                    {
                        {
                            this.state = 646;
                            this.match(sequenceParser.S);
                        }
                    }
                    this.state = 651;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 652;
                this.url();
                this.state = 653;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 98, sequenceParser.RULE_op_image_format);
        let _la;
        try {
            this.state = 669;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OpAmpImage:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 655;
                        this.match(sequenceParser.OpAmpImage);
                        this.state = 658;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sequenceParser.Image_type:
                                {
                                    {
                                        this.state = 656;
                                        this.match(sequenceParser.Image_type);
                                    }
                                }
                                break;
                            case sequenceParser.DotArticleAtt:
                                {
                                    {
                                        this.state = 657;
                                        this.match(sequenceParser.DotArticleAtt);
                                    }
                                }
                                break;
                            case sequenceParser.COLON:
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                case sequenceParser.OpAmpImageLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 660;
                        this.match(sequenceParser.OpAmpImageLink);
                        this.state = 662;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.Image_type) {
                            {
                                this.state = 661;
                                this.match(sequenceParser.Image_type);
                            }
                        }
                    }
                    break;
                case sequenceParser.OpAmpImageZoom:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 664;
                        this.match(sequenceParser.OpAmpImageZoom);
                        this.state = 666;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.Image_type) {
                            {
                                this.state = 665;
                                this.match(sequenceParser.Image_type);
                            }
                        }
                    }
                    break;
                case sequenceParser.OpAmpImageWAudio:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 668;
                        this.match(sequenceParser.OpAmpImageWAudio);
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
        this.enterRule(_localctx, 100, sequenceParser.RULE_image_chained);
        let _la;
        try {
            let _alt;
            this.state = 688;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 671;
                        this.match(sequenceParser.AtSrc);
                        this.state = 672;
                        this.match(sequenceParser.COLON);
                        this.state = 673;
                        this.url();
                        this.state = 674;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.AtWidth:
                case sequenceParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 676;
                        _la = this._input.LA(1);
                        if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 677;
                        this.match(sequenceParser.COLON);
                        this.state = 678;
                        this.match(sequenceParser.NUMERIC);
                        this.state = 679;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.OPATALT:
                case sequenceParser.OpAtCaption:
                case sequenceParser.OpAtLicense:
                case sequenceParser.OpAtCopyright:
                case sequenceParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 680;
                        _la = this._input.LA(1);
                        if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (sequenceParser.OPATALT - 69)) | (1 << (sequenceParser.OpAtCaption - 69)) | (1 << (sequenceParser.OpAtLicense - 69)) | (1 << (sequenceParser.OpAtCopyright - 69)) | (1 << (sequenceParser.OpAtSearch - 69)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 684;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 681;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 686;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        }
                        this.state = 687;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 102, sequenceParser.RULE_image_chained4match);
        let _la;
        try {
            let _alt;
            this.state = 707;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 690;
                        this.match(sequenceParser.AtSrc);
                        this.state = 691;
                        this.match(sequenceParser.COLON);
                        this.state = 692;
                        this.url();
                        this.state = 693;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.AtWidth:
                case sequenceParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 695;
                        _la = this._input.LA(1);
                        if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
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
                        this.match(sequenceParser.COLON);
                        this.state = 697;
                        this.match(sequenceParser.NUMERIC);
                        this.state = 698;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.OPATALT:
                case sequenceParser.OpAtCaption:
                case sequenceParser.OpAtLicense:
                case sequenceParser.OpAtCopyright:
                case sequenceParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 699;
                        _la = this._input.LA(1);
                        if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (sequenceParser.OPATALT - 69)) | (1 << (sequenceParser.OpAtCaption - 69)) | (1 << (sequenceParser.OpAtLicense - 69)) | (1 << (sequenceParser.OpAtCopyright - 69)) | (1 << (sequenceParser.OpAtSearch - 69)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 703;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 700;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 705;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                        }
                        this.state = 706;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 104, sequenceParser.RULE_audiobit);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.audio_one();
                this.state = 713;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 710;
                                this.resource_chained();
                            }
                        }
                    }
                    this.state = 715;
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
    audio_one() {
        let _localctx = new Audio_oneContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, sequenceParser.RULE_audio_one);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 716;
                this.op_audio_format();
                this.state = 717;
                this.match(sequenceParser.COLON);
                this.state = 718;
                this.url();
                this.state = 719;
                this.match(sequenceParser.CL);
                this.state = 724;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        {
                            this.state = 720;
                            this.match(sequenceParser.OPATALT);
                            this.state = 721;
                            this.words();
                            this.state = 722;
                            this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 108, sequenceParser.RULE_audio_format);
        let _la;
        try {
            this.state = 736;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 726;
                        this.match(sequenceParser.AmpAudio);
                        this.state = 729;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.COLON) {
                            {
                                this.state = 727;
                                this.match(sequenceParser.COLON);
                                this.state = 728;
                                this.match(sequenceParser.Audio_type);
                            }
                        }
                    }
                    break;
                case sequenceParser.AmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 731;
                        this.match(sequenceParser.AmpAudioLink);
                        this.state = 734;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.COLON) {
                            {
                                this.state = 732;
                                this.match(sequenceParser.COLON);
                                this.state = 733;
                                this.match(sequenceParser.Audio_type);
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
        this.enterRule(_localctx, 110, sequenceParser.RULE_op_audio_format);
        try {
            this.state = 753;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OpAmpAudio:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 738;
                        this.match(sequenceParser.OpAmpAudio);
                        this.state = 741;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                            case 1:
                                {
                                    this.state = 739;
                                    this.match(sequenceParser.COLON);
                                    this.state = 740;
                                    this.match(sequenceParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case sequenceParser.OpAmpAudioLink:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 743;
                        this.match(sequenceParser.OpAmpAudioLink);
                        this.state = 746;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                            case 1:
                                {
                                    this.state = 744;
                                    this.match(sequenceParser.COLON);
                                    this.state = 745;
                                    this.match(sequenceParser.Audio_type);
                                }
                                break;
                        }
                    }
                    break;
                case sequenceParser.OpAmpAudioEmbed:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 748;
                        this.match(sequenceParser.OpAmpAudioEmbed);
                        this.state = 751;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                            case 1:
                                {
                                    this.state = 749;
                                    this.match(sequenceParser.COLON);
                                    this.state = 750;
                                    this.match(sequenceParser.Audio_type);
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
        this.enterRule(_localctx, 112, sequenceParser.RULE_resource_chained);
        let _la;
        try {
            let _alt;
            this.state = 786;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OPA:
                case sequenceParser.AtSrc:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 758;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sequenceParser.OPA:
                                {
                                    this.state = 755;
                                    this.match(sequenceParser.OPA);
                                    this.state = 756;
                                    this.s_and_w();
                                }
                                break;
                            case sequenceParser.AtSrc:
                                {
                                    this.state = 757;
                                    this.match(sequenceParser.AtSrc);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 760;
                        this.match(sequenceParser.COLON);
                        this.state = 764;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 761;
                                        this.match(sequenceParser.S);
                                    }
                                }
                            }
                            this.state = 766;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                        }
                        this.state = 769;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 769;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case sequenceParser.S:
                                    case sequenceParser.OPS:
                                    case sequenceParser.COLON:
                                    case sequenceParser.AMP:
                                    case sequenceParser.Greater:
                                    case sequenceParser.Less:
                                    case sequenceParser.RightAngle:
                                    case sequenceParser.RightArrow:
                                    case sequenceParser.DBLEQ:
                                    case sequenceParser.NUMERIC:
                                    case sequenceParser.STRING:
                                    case sequenceParser.NOTBITMARK:
                                    case sequenceParser.SENTENCE:
                                    case sequenceParser.BARSTRING:
                                    case sequenceParser.AmpAudio:
                                    case sequenceParser.AmpImage:
                                    case sequenceParser.AmpVideo:
                                    case sequenceParser.AmpArticle:
                                    case sequenceParser.AmpDocument:
                                    case sequenceParser.AmpApp:
                                    case sequenceParser.AmpWebsite:
                                    case sequenceParser.AmpAudioLink:
                                    case sequenceParser.AmpImageLink:
                                    case sequenceParser.AmpArticleLink:
                                    case sequenceParser.AmpDocumentLink:
                                    case sequenceParser.BitmarkMinus:
                                    case sequenceParser.BitmarkPlus:
                                    case sequenceParser.URL:
                                    case sequenceParser.LIST_LINE:
                                        {
                                            this.state = 767;
                                            this.s_and_w();
                                        }
                                        break;
                                    case sequenceParser.NL:
                                        {
                                            this.state = 768;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 771;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                        this.state = 773;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.AtWidth:
                case sequenceParser.AtHeight:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 774;
                        _la = this._input.LA(1);
                        if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 775;
                        this.match(sequenceParser.COLON);
                        this.state = 776;
                        this.match(sequenceParser.NUMERIC);
                        this.state = 777;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.OPATALT:
                case sequenceParser.OpAtCaption:
                case sequenceParser.OpAtLicense:
                case sequenceParser.OpAtCopyright:
                case sequenceParser.OpAtSearch:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 778;
                        _la = this._input.LA(1);
                        if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (sequenceParser.OPATALT - 69)) | (1 << (sequenceParser.OpAtCaption - 69)) | (1 << (sequenceParser.OpAtLicense - 69)) | (1 << (sequenceParser.OpAtCopyright - 69)) | (1 << (sequenceParser.OpAtSearch - 69)))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 782;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 779;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 784;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        }
                        this.state = 785;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 114, sequenceParser.RULE_telephone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 788;
                this.match(sequenceParser.TEL);
                this.state = 789;
                this.match(sequenceParser.PLUS);
                this.state = 790;
                this.match(sequenceParser.NUMERIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 116, sequenceParser.RULE_url);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 792;
                this.match(sequenceParser.URL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 118, sequenceParser.RULE_item);
        let _la;
        try {
            this.state = 824;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 794;
                        this.match(sequenceParser.OPC);
                        this.state = 795;
                        this.match(sequenceParser.CL);
                        this.state = 803;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                            case 1:
                                {
                                    this.state = 799;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.S) {
                                        {
                                            {
                                                this.state = 796;
                                                this.match(sequenceParser.S);
                                            }
                                        }
                                        this.state = 801;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 802;
                                    this.lead();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 805;
                        this.match(sequenceParser.OPC);
                        this.state = 806;
                        this.s_and_w();
                        this.state = 811;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (sequenceParser.COLON - 22)) | (1 << (sequenceParser.AMP - 22)) | (1 << (sequenceParser.Greater - 22)) | (1 << (sequenceParser.Less - 22)) | (1 << (sequenceParser.RightAngle - 22)) | (1 << (sequenceParser.RightArrow - 22)) | (1 << (sequenceParser.NOTBITMARK - 22)) | (1 << (sequenceParser.SENTENCE - 22)) | (1 << (sequenceParser.BARSTRING - 22)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 809;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case sequenceParser.COLON:
                                        {
                                            this.state = 807;
                                            this.match(sequenceParser.COLON);
                                        }
                                        break;
                                    case sequenceParser.AMP:
                                    case sequenceParser.Greater:
                                    case sequenceParser.Less:
                                    case sequenceParser.RightAngle:
                                    case sequenceParser.RightArrow:
                                    case sequenceParser.NOTBITMARK:
                                    case sequenceParser.SENTENCE:
                                    case sequenceParser.BARSTRING:
                                    case sequenceParser.AmpAudio:
                                    case sequenceParser.AmpImage:
                                    case sequenceParser.AmpVideo:
                                    case sequenceParser.AmpArticle:
                                    case sequenceParser.AmpDocument:
                                    case sequenceParser.AmpApp:
                                    case sequenceParser.AmpWebsite:
                                    case sequenceParser.AmpAudioLink:
                                    case sequenceParser.AmpImageLink:
                                    case sequenceParser.AmpArticleLink:
                                    case sequenceParser.AmpDocumentLink:
                                    case sequenceParser.BitmarkMinus:
                                    case sequenceParser.BitmarkPlus:
                                    case sequenceParser.LIST_LINE:
                                        {
                                            this.state = 808;
                                            this.words();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 813;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 814;
                        this.match(sequenceParser.CL);
                        this.state = 822;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                            case 1:
                                {
                                    this.state = 818;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.S) {
                                        {
                                            {
                                                this.state = 815;
                                                this.match(sequenceParser.S);
                                            }
                                        }
                                        this.state = 820;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 821;
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
        this.enterRule(_localctx, 120, sequenceParser.RULE_lead);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 826;
                this.match(sequenceParser.OPC);
                this.state = 827;
                this.s_and_w();
                this.state = 832;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (sequenceParser.COLON - 22)) | (1 << (sequenceParser.AMP - 22)) | (1 << (sequenceParser.Greater - 22)) | (1 << (sequenceParser.Less - 22)) | (1 << (sequenceParser.RightAngle - 22)) | (1 << (sequenceParser.RightArrow - 22)) | (1 << (sequenceParser.NOTBITMARK - 22)) | (1 << (sequenceParser.SENTENCE - 22)) | (1 << (sequenceParser.BARSTRING - 22)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                    {
                        this.state = 830;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sequenceParser.COLON:
                                {
                                    this.state = 828;
                                    this.match(sequenceParser.COLON);
                                }
                                break;
                            case sequenceParser.AMP:
                            case sequenceParser.Greater:
                            case sequenceParser.Less:
                            case sequenceParser.RightAngle:
                            case sequenceParser.RightArrow:
                            case sequenceParser.NOTBITMARK:
                            case sequenceParser.SENTENCE:
                            case sequenceParser.BARSTRING:
                            case sequenceParser.AmpAudio:
                            case sequenceParser.AmpImage:
                            case sequenceParser.AmpVideo:
                            case sequenceParser.AmpArticle:
                            case sequenceParser.AmpDocument:
                            case sequenceParser.AmpApp:
                            case sequenceParser.AmpWebsite:
                            case sequenceParser.AmpAudioLink:
                            case sequenceParser.AmpImageLink:
                            case sequenceParser.AmpArticleLink:
                            case sequenceParser.AmpDocumentLink:
                            case sequenceParser.BitmarkMinus:
                            case sequenceParser.BitmarkPlus:
                            case sequenceParser.LIST_LINE:
                                {
                                    this.state = 829;
                                    this.words();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 834;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 835;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 122, sequenceParser.RULE_angleref);
        let _la;
        try {
            this.state = 847;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OPRANGLES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 837;
                        this.match(sequenceParser.OPRANGLES);
                        this.state = 839;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 838;
                                this.s_and_w();
                            }
                        }
                        this.state = 841;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.OPRANGLEL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 842;
                        this.match(sequenceParser.OPRANGLEL);
                        this.state = 844;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 843;
                                this.s_and_w();
                            }
                        }
                        this.state = 846;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 124, sequenceParser.RULE_example);
        let _la;
        try {
            this.state = 856;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AtExamplecl:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 849;
                        this.match(sequenceParser.AtExamplecl);
                    }
                    break;
                case sequenceParser.AtExampleWithStr:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 850;
                        this.match(sequenceParser.AtExampleWithStr);
                    }
                    break;
                case sequenceParser.AtExamplecol:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 851;
                        this.match(sequenceParser.AtExamplecol);
                        this.state = 853;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === sequenceParser.SENTENCE) {
                            {
                                this.state = 852;
                                this.match(sequenceParser.SENTENCE);
                            }
                        }
                        this.state = 855;
                        this.match(sequenceParser.EOF);
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
        this.enterRule(_localctx, 126, sequenceParser.RULE_bracketed_text);
        let _la;
        try {
            let _alt;
            this.state = 897;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 858;
                        this.match(sequenceParser.BracEnclose);
                        this.state = 860;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
                            case 1:
                                {
                                    this.state = 859;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 883;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                {
                                    this.state = 862;
                                    this.s_and_w();
                                    this.state = 872;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 863;
                                                    this.match(sequenceParser.NL);
                                                    this.state = 867;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 864;
                                                                    this.match(sequenceParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 869;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 874;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                                    }
                                    this.state = 878;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.NL) {
                                        {
                                            {
                                                this.state = 875;
                                                this.match(sequenceParser.NL);
                                            }
                                        }
                                        this.state = 880;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 885;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 886;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 887;
                        this.match(sequenceParser.BracEnclose);
                        this.state = 893;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 891;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 888;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 889;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 890;
                                            this.match(sequenceParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 895;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 896;
                        this.match(sequenceParser.EOF);
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
        this.enterRule(_localctx, 128, sequenceParser.RULE_reference);
        let _la;
        try {
            this.state = 921;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 899;
                        this.match(sequenceParser.AtReference);
                        this.state = 904;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 904;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 900;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 901;
                                            this.match(sequenceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 902;
                                            this.match(sequenceParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 903;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 906;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                        this.state = 908;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 909;
                        this.match(sequenceParser.AtReference);
                        this.state = 917;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 915;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 910;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 911;
                                            this.match(sequenceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 912;
                                            this.match(sequenceParser.URL);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 913;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 914;
                                            this.match(sequenceParser.S);
                                        }
                                        break;
                                }
                            }
                            this.state = 919;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 920;
                        this.match(sequenceParser.EOF);
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
        this.enterRule(_localctx, 130, sequenceParser.RULE_progress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 923;
                this.match(sequenceParser.AtProgress);
                this.state = 924;
                this.s_and_w();
                this.state = 925;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 132, sequenceParser.RULE_dateprop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 927;
                this.match(sequenceParser.AtDate);
                this.state = 931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 931;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                            case 1:
                                {
                                    this.state = 928;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 929;
                                    this.match(sequenceParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 930;
                                    this.match(sequenceParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 933;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                this.state = 935;
                this.match(sequenceParser.CL);
                this.state = 937;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sequenceParser.AtDate) {
                    {
                        this.state = 936;
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
        this.enterRule(_localctx, 134, sequenceParser.RULE_dateprop_chained);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 939;
                this.match(sequenceParser.AtDate);
                this.state = 943;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 943;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                            case 1:
                                {
                                    this.state = 940;
                                    this.s_and_w();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 941;
                                    this.match(sequenceParser.COLON);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 942;
                                    this.match(sequenceParser.NL);
                                }
                                break;
                        }
                    }
                    this.state = 945;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                this.state = 947;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 136, sequenceParser.RULE_instruction);
        let _la;
        try {
            let _alt;
            this.state = 995;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 949;
                        this.match(sequenceParser.OPB);
                        this.state = 953;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === sequenceParser.NL) {
                            {
                                {
                                    this.state = 950;
                                    this.match(sequenceParser.NL);
                                }
                            }
                            this.state = 955;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 957;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                            case 1:
                                {
                                    this.state = 956;
                                    this.s_and_w();
                                }
                                break;
                        }
                        this.state = 980;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                {
                                    this.state = 959;
                                    this.s_and_w();
                                    this.state = 969;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 960;
                                                    this.match(sequenceParser.NL);
                                                    this.state = 964;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 961;
                                                                    this.match(sequenceParser.S);
                                                                }
                                                            }
                                                        }
                                                        this.state = 966;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                                                    }
                                                }
                                            }
                                        }
                                        this.state = 971;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                                    }
                                    this.state = 975;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.NL) {
                                        {
                                            {
                                                this.state = 972;
                                                this.match(sequenceParser.NL);
                                            }
                                        }
                                        this.state = 977;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 982;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 983;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 984;
                        this.match(sequenceParser.OPB);
                        this.state = 988;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === sequenceParser.NL) {
                            {
                                {
                                    this.state = 985;
                                    this.match(sequenceParser.NL);
                                }
                            }
                            this.state = 990;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 992;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 991;
                                this.s_and_w();
                            }
                        }
                        this.state = 994;
                        this.match(sequenceParser.EOF);
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
        this.enterRule(_localctx, 138, sequenceParser.RULE_hint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 997;
                this.match(sequenceParser.OPQ);
                this.state = 999;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 998;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === sequenceParser.CL)) {
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
                    this.state = 1001;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.OPDOT) | (1 << sequenceParser.S) | (1 << sequenceParser.BitSequence) | (1 << sequenceParser.BitMenu3Course) | (1 << sequenceParser.OPDOLL) | (1 << sequenceParser.OPBUL) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPRANGLES) | (1 << sequenceParser.OPRANGLEL) | (1 << sequenceParser.OPDANGLE) | (1 << sequenceParser.OPU) | (1 << sequenceParser.OPB) | (1 << sequenceParser.OPQ) | (1 << sequenceParser.OPA) | (1 << sequenceParser.OPP) | (1 << sequenceParser.OPM) | (1 << sequenceParser.OPS) | (1 << sequenceParser.OPR) | (1 << sequenceParser.OPC) | (1 << sequenceParser.OPHASH) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.DBLCOLON) | (1 << sequenceParser.PLUS) | (1 << sequenceParser.DotAt) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow) | (1 << sequenceParser.Dot))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.DMM - 32)) | (1 << (sequenceParser.HSPL - 32)) | (1 << (sequenceParser.SSPL - 32)) | (1 << (sequenceParser.SSPL2 - 32)) | (1 << (sequenceParser.COMMENT - 32)) | (1 << (sequenceParser.DCANY - 32)) | (1 << (sequenceParser.Image_type - 32)) | (1 << (sequenceParser.Audio_type - 32)) | (1 << (sequenceParser.Video_type - 32)) | (1 << (sequenceParser.ArticleText - 32)) | (1 << (sequenceParser.NOTCL - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)) | (1 << (sequenceParser.OPAT - 32)) | (1 << (sequenceParser.AtProgress - 32)) | (1 << (sequenceParser.AtReference - 32)) | (1 << (sequenceParser.AtWidth - 32)) | (1 << (sequenceParser.AtHeight - 32)) | (1 << (sequenceParser.AtProgressPoints - 32)) | (1 << (sequenceParser.AtShortanswer - 32)) | (1 << (sequenceParser.AtLonganswer - 32)) | (1 << (sequenceParser.AtExampleWithStr - 32)) | (1 << (sequenceParser.AtExamplecol - 32)) | (1 << (sequenceParser.AtExamplecl - 32)) | (1 << (sequenceParser.AtSampleSolution - 32)) | (1 << (sequenceParser.AtPartialAnswerS - 32)) | (1 << (sequenceParser.AtPartialAnswer - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.AtLabeltrue - 64)) | (1 << (sequenceParser.AtLabelfalse - 64)) | (1 << (sequenceParser.AtPoints - 64)) | (1 << (sequenceParser.AtSrc - 64)) | (1 << (sequenceParser.AtPartner - 64)) | (1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OPAMARK - 64)) | (1 << (sequenceParser.ShowInIndex - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)) | (1 << (sequenceParser.OpAtSearch - 64)) | (1 << (sequenceParser.OpAtIsTracked - 64)) | (1 << (sequenceParser.OpAtIsInfoOnly - 64)) | (1 << (sequenceParser.AtDate - 64)) | (1 << (sequenceParser.Http - 64)) | (1 << (sequenceParser.Https - 64)) | (1 << (sequenceParser.AmpAudio - 64)) | (1 << (sequenceParser.AmpImage - 64)) | (1 << (sequenceParser.AmpImageZoom - 64)) | (1 << (sequenceParser.AmpImageWAudio - 64)) | (1 << (sequenceParser.AmpVideo - 64)) | (1 << (sequenceParser.AmpArticle - 64)) | (1 << (sequenceParser.AmpDocument - 64)) | (1 << (sequenceParser.AmpApp - 64)) | (1 << (sequenceParser.AmpWebsite - 64)) | (1 << (sequenceParser.AmpStillImageFilm - 64)) | (1 << (sequenceParser.AmpPdf - 64)) | (1 << (sequenceParser.OpAmpAudio - 64)) | (1 << (sequenceParser.OpAmpImage - 64)) | (1 << (sequenceParser.OpAmpImageZoom - 64)) | (1 << (sequenceParser.OpAmpImageWAudio - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sequenceParser.OpAmpVideo - 96)) | (1 << (sequenceParser.OpAmpArticle - 96)) | (1 << (sequenceParser.OpAmpArticleAtt - 96)) | (1 << (sequenceParser.OpAmpDocument - 96)) | (1 << (sequenceParser.OpAmpApp - 96)) | (1 << (sequenceParser.OpAmpWebsite - 96)) | (1 << (sequenceParser.OpAmpStillImageFilm - 96)) | (1 << (sequenceParser.BracEnclose - 96)) | (1 << (sequenceParser.AmpAudioLink - 96)) | (1 << (sequenceParser.AmpImageLink - 96)) | (1 << (sequenceParser.AmpVideoLink - 96)) | (1 << (sequenceParser.AmpArticleLink - 96)) | (1 << (sequenceParser.AmpDocumentLink - 96)) | (1 << (sequenceParser.AmpAppLink - 96)) | (1 << (sequenceParser.AmpWebsiteLink - 96)) | (1 << (sequenceParser.AmpStillImageFilmLink - 96)) | (1 << (sequenceParser.OpAmpAudioLink - 96)) | (1 << (sequenceParser.OpAmpImageLink - 96)) | (1 << (sequenceParser.OpAmpVideoLink - 96)) | (1 << (sequenceParser.OpAmpArticleLink - 96)) | (1 << (sequenceParser.OpAmpDocumentLink - 96)) | (1 << (sequenceParser.OpAmpAppLink - 96)) | (1 << (sequenceParser.OpAmpWebsiteLink - 96)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 96)) | (1 << (sequenceParser.AmpImageEmbed - 96)) | (1 << (sequenceParser.AmpVideoEmbed - 96)) | (1 << (sequenceParser.AmpAudioEmbed - 96)) | (1 << (sequenceParser.AmpDocumentEmbed - 96)) | (1 << (sequenceParser.AmpStillImageFilmEmbed - 96)) | (1 << (sequenceParser.OpAmpImageEmbed - 96)) | (1 << (sequenceParser.OpAmpVideoEmbed - 96)) | (1 << (sequenceParser.OpAmpAudioEmbed - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sequenceParser.OpAmpDocumentEmbed - 128)) | (1 << (sequenceParser.OpAmpStillImageFilmEmbed - 128)) | (1 << (sequenceParser.BitmarkMinus - 128)) | (1 << (sequenceParser.BitmarkPlus - 128)) | (1 << (sequenceParser.ColonText - 128)) | (1 << (sequenceParser.ColonJson - 128)) | (1 << (sequenceParser.Prosemirror - 128)) | (1 << (sequenceParser.Placeholder - 128)) | (1 << (sequenceParser.BASIC - 128)) | (1 << (sequenceParser.JPG - 128)) | (1 << (sequenceParser.PNG - 128)) | (1 << (sequenceParser.GIF - 128)) | (1 << (sequenceParser.SVG - 128)) | (1 << (sequenceParser.MP2 - 128)) | (1 << (sequenceParser.MP3 - 128)) | (1 << (sequenceParser.MP4 - 128)) | (1 << (sequenceParser.FLV - 128)) | (1 << (sequenceParser.WMV - 128)) | (1 << (sequenceParser.MPEG - 128)) | (1 << (sequenceParser.MPG - 128)) | (1 << (sequenceParser.TEL - 128)) | (1 << (sequenceParser.DotArticleAtt - 128)) | (1 << (sequenceParser.STAR - 128)) | (1 << (sequenceParser.URL - 128)) | (1 << (sequenceParser.LIST_LINE - 128)) | (1 << (sequenceParser.ENCLBARS - 128)))) !== 0));
                this.state = 1003;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 140, sequenceParser.RULE_title);
        let _la;
        try {
            this.state = 1017;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1005;
                        this.match(sequenceParser.OPHASH);
                        this.state = 1008;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1008;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case sequenceParser.S:
                                    case sequenceParser.OPS:
                                    case sequenceParser.COLON:
                                    case sequenceParser.AMP:
                                    case sequenceParser.Greater:
                                    case sequenceParser.Less:
                                    case sequenceParser.RightAngle:
                                    case sequenceParser.RightArrow:
                                    case sequenceParser.DBLEQ:
                                    case sequenceParser.NUMERIC:
                                    case sequenceParser.STRING:
                                    case sequenceParser.NOTBITMARK:
                                    case sequenceParser.SENTENCE:
                                    case sequenceParser.BARSTRING:
                                    case sequenceParser.AmpAudio:
                                    case sequenceParser.AmpImage:
                                    case sequenceParser.AmpVideo:
                                    case sequenceParser.AmpArticle:
                                    case sequenceParser.AmpDocument:
                                    case sequenceParser.AmpApp:
                                    case sequenceParser.AmpWebsite:
                                    case sequenceParser.AmpAudioLink:
                                    case sequenceParser.AmpImageLink:
                                    case sequenceParser.AmpArticleLink:
                                    case sequenceParser.AmpDocumentLink:
                                    case sequenceParser.BitmarkMinus:
                                    case sequenceParser.BitmarkPlus:
                                    case sequenceParser.URL:
                                    case sequenceParser.LIST_LINE:
                                        {
                                            this.state = 1006;
                                            this.s_and_w();
                                        }
                                        break;
                                    case sequenceParser.NL:
                                        {
                                            this.state = 1007;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            this.state = 1010;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                        this.state = 1012;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1013;
                        this.match(sequenceParser.OPHASH);
                        this.state = 1014;
                        this.s_and_w();
                        this.state = 1015;
                        this.match(sequenceParser.EOF);
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
        this.enterRule(_localctx, 142, sequenceParser.RULE_bool_label);
        try {
            this.state = 1027;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.AtLabeltrue:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1019;
                        this.match(sequenceParser.AtLabeltrue);
                        this.state = 1020;
                        this.s_and_w();
                        this.state = 1021;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.AtLabelfalse:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1023;
                        this.match(sequenceParser.AtLabelfalse);
                        this.state = 1024;
                        this.s_and_w();
                        this.state = 1025;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 144, sequenceParser.RULE_progress_points);
        try {
            this.state = 1038;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1029;
                        this.match(sequenceParser.AtProgressPoints);
                        this.state = 1030;
                        this.match(sequenceParser.COLON);
                        this.state = 1031;
                        this.match(sequenceParser.NUMERIC);
                        this.state = 1032;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1033;
                        this.match(sequenceParser.AtProgressPoints);
                        this.state = 1034;
                        this.match(sequenceParser.COLON);
                        this.state = 1035;
                        this.s_and_w();
                        this.state = 1036;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 146, sequenceParser.RULE_istracked);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1040;
                this.match(sequenceParser.OpAtIsTracked);
                this.state = 1041;
                this.s_and_w();
                this.state = 1042;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 148, sequenceParser.RULE_isinfoonly);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1044;
                this.match(sequenceParser.OpAtIsInfoOnly);
                this.state = 1045;
                this.s_and_w();
                this.state = 1046;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 150, sequenceParser.RULE_atdef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1048;
                this.atdef_();
                this.state = 1058;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1052;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === sequenceParser.NL) {
                                    {
                                        {
                                            this.state = 1049;
                                            this.match(sequenceParser.NL);
                                        }
                                    }
                                    this.state = 1054;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1055;
                                this.atdef_();
                            }
                        }
                    }
                    this.state = 1060;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 152, sequenceParser.RULE_atdef_);
        let _la;
        try {
            let _alt;
            this.state = 1083;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sequenceParser.OPA:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1061;
                        this.match(sequenceParser.OPA);
                        this.state = 1062;
                        this.s_and_w();
                        this.state = 1063;
                        _la = this._input.LA(1);
                        if (!(_la === sequenceParser.COLON || _la === sequenceParser.DBLCOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1064;
                        this.s_and_w();
                        this.state = 1070;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 1068;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1065;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1066;
                                            this.match(sequenceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1067;
                                            this.s_and_w();
                                        }
                                        break;
                                }
                            }
                            this.state = 1072;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1073;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case sequenceParser.OpAtCopyright:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1075;
                        this.match(sequenceParser.OpAtCopyright);
                        this.state = 1079;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                        while (_alt !== 1 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1 + 1) {
                                {
                                    {
                                        this.state = 1076;
                                        this.matchWildcard();
                                    }
                                }
                            }
                            this.state = 1081;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
                        }
                        this.state = 1082;
                        this.match(sequenceParser.CL);
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
        this.enterRule(_localctx, 154, sequenceParser.RULE_dollarans);
        let _la;
        try {
            this.state = 1104;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1085;
                        this.match(sequenceParser.OPDOLL);
                        this.state = 1089;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                this.state = 1089;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1086;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1087;
                                            this.match(sequenceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1088;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1091;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0));
                        this.state = 1093;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1094;
                        this.match(sequenceParser.OPDOLL);
                        this.state = 1100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                            {
                                this.state = 1098;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1095;
                                            this.s_and_w();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1096;
                                            this.match(sequenceParser.COLON);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1097;
                                            this.match(sequenceParser.NL);
                                        }
                                        break;
                                }
                            }
                            this.state = 1102;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1103;
                        this.match(sequenceParser.EOF);
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
        this.enterRule(_localctx, 156, sequenceParser.RULE_anchor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1106;
                this.match(sequenceParser.OPDANGLE);
                this.state = 1108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less) | (1 << sequenceParser.RightAngle) | (1 << sequenceParser.RightArrow))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NOTBITMARK - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.BARSTRING - 32)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (sequenceParser.AmpAudio - 81)) | (1 << (sequenceParser.AmpImage - 81)) | (1 << (sequenceParser.AmpVideo - 81)) | (1 << (sequenceParser.AmpArticle - 81)) | (1 << (sequenceParser.AmpDocument - 81)) | (1 << (sequenceParser.AmpApp - 81)) | (1 << (sequenceParser.AmpWebsite - 81)) | (1 << (sequenceParser.AmpAudioLink - 81)) | (1 << (sequenceParser.AmpImageLink - 81)) | (1 << (sequenceParser.AmpArticleLink - 81)) | (1 << (sequenceParser.AmpDocumentLink - 81)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (sequenceParser.BitmarkMinus - 130)) | (1 << (sequenceParser.BitmarkPlus - 130)) | (1 << (sequenceParser.URL - 130)) | (1 << (sequenceParser.LIST_LINE - 130)))) !== 0)) {
                    {
                        this.state = 1107;
                        this.s_and_w();
                    }
                }
                this.state = 1110;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 158, sequenceParser.RULE_dcolon);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1112;
                this.match(sequenceParser.DBLCOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 160, sequenceParser.RULE_s_and_w);
        let _la;
        try {
            let _alt;
            this.state = 1159;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1114;
                        this.match(sequenceParser.STRING);
                        this.state = 1121;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1116;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1115;
                                                this.match(sequenceParser.S);
                                            }
                                        }
                                        this.state = 1118;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === sequenceParser.S);
                                    this.state = 1120;
                                    this.match(sequenceParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1123;
                        this.words();
                        this.state = 1130;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1125;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1124;
                                                this.match(sequenceParser.S);
                                            }
                                        }
                                        this.state = 1127;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === sequenceParser.S);
                                    this.state = 1129;
                                    this.match(sequenceParser.NUMERIC);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1132;
                        this.match(sequenceParser.OPS);
                        this.state = 1133;
                        this.s_and_w();
                        this.state = 1134;
                        this.match(sequenceParser.CL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1136;
                        this.match(sequenceParser.NUMERIC);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1140;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === sequenceParser.S) {
                            {
                                {
                                    this.state = 1137;
                                    this.match(sequenceParser.S);
                                }
                            }
                            this.state = 1142;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1143;
                        this.match(sequenceParser.COLON);
                        this.state = 1147;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1144;
                                        this.match(sequenceParser.S);
                                    }
                                }
                            }
                            this.state = 1149;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1150;
                        this.match(sequenceParser.AMP);
                        this.state = 1154;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1151;
                                        this.match(sequenceParser.S);
                                    }
                                }
                            }
                            this.state = 1156;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1157;
                        this.match(sequenceParser.DBLEQ);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1158;
                        this.match(sequenceParser.URL);
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
        this.enterRule(_localctx, 162, sequenceParser.RULE_dclines);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1161;
                this.match(sequenceParser.DCANY);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 164, sequenceParser.RULE_clnsp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1163;
                this.match(sequenceParser.CL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
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
        this.enterRule(_localctx, 166, sequenceParser.RULE_sspl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1165;
                _la = this._input.LA(1);
                if (!(_la === sequenceParser.SSPL || _la === sequenceParser.SSPL2)) {
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
        this.enterRule(_localctx, 168, sequenceParser.RULE_words);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1192;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 1192;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1167;
                                            this.match(sequenceParser.SENTENCE);
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1168;
                                            this.match(sequenceParser.NOTBITMARK);
                                        }
                                        break;
                                    case 3:
                                        {
                                            this.state = 1169;
                                            this.match(sequenceParser.BARSTRING);
                                        }
                                        break;
                                    case 4:
                                        {
                                            this.state = 1170;
                                            this.match(sequenceParser.LIST_LINE);
                                        }
                                        break;
                                    case 5:
                                        {
                                            this.state = 1171;
                                            this.match(sequenceParser.AMP);
                                        }
                                        break;
                                    case 6:
                                        {
                                            this.state = 1172;
                                            this.match(sequenceParser.Greater);
                                            this.state = 1173;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === sequenceParser.Greater)) {
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
                                    case 7:
                                        {
                                            this.state = 1174;
                                            this.match(sequenceParser.Less);
                                            this.state = 1175;
                                            _la = this._input.LA(1);
                                            if (_la <= 0 || (_la === sequenceParser.Less)) {
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
                                    case 8:
                                        {
                                            this.state = 1176;
                                            this.match(sequenceParser.RightArrow);
                                        }
                                        break;
                                    case 9:
                                        {
                                            this.state = 1177;
                                            this.match(sequenceParser.RightAngle);
                                        }
                                        break;
                                    case 10:
                                        {
                                            this.state = 1178;
                                            this.match(sequenceParser.AmpArticle);
                                        }
                                        break;
                                    case 11:
                                        {
                                            this.state = 1179;
                                            this.match(sequenceParser.AmpDocument);
                                        }
                                        break;
                                    case 12:
                                        {
                                            this.state = 1180;
                                            this.match(sequenceParser.AmpDocumentLink);
                                        }
                                        break;
                                    case 13:
                                        {
                                            this.state = 1181;
                                            this.match(sequenceParser.AmpWebsite);
                                        }
                                        break;
                                    case 14:
                                        {
                                            this.state = 1182;
                                            this.match(sequenceParser.AmpImage);
                                        }
                                        break;
                                    case 15:
                                        {
                                            this.state = 1183;
                                            this.match(sequenceParser.AmpAudio);
                                        }
                                        break;
                                    case 16:
                                        {
                                            this.state = 1184;
                                            this.match(sequenceParser.AmpVideo);
                                        }
                                        break;
                                    case 17:
                                        {
                                            this.state = 1185;
                                            this.match(sequenceParser.AmpApp);
                                        }
                                        break;
                                    case 18:
                                        {
                                            this.state = 1186;
                                            this.match(sequenceParser.AmpArticleLink);
                                        }
                                        break;
                                    case 19:
                                        {
                                            this.state = 1187;
                                            this.match(sequenceParser.AmpAudioLink);
                                        }
                                        break;
                                    case 20:
                                        {
                                            this.state = 1188;
                                            this.match(sequenceParser.AmpImageLink);
                                        }
                                        break;
                                    case 21:
                                        {
                                            this.state = 1189;
                                            this.match(sequenceParser.AmpDocumentLink);
                                        }
                                        break;
                                    case 22:
                                        {
                                            this.state = 1190;
                                            this.match(sequenceParser.BitmarkMinus);
                                        }
                                        break;
                                    case 23:
                                        {
                                            this.state = 1191;
                                            this.match(sequenceParser.BitmarkPlus);
                                        }
                                        break;
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1194;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
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
        this.enterRule(_localctx, 170, sequenceParser.RULE_sp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1196;
                this.match(sequenceParser.S);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
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
        if (!sequenceParser.__ATN) {
            sequenceParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sequenceParser._serializedATN));
        }
        return sequenceParser.__ATN;
    }
}
exports.sequenceParser = sequenceParser;
sequenceParser.OPDOT = 1;
sequenceParser.S = 2;
sequenceParser.BitSequence = 3;
sequenceParser.BitMenu3Course = 4;
sequenceParser.OPDOLL = 5;
sequenceParser.OPBUL = 6;
sequenceParser.OPESC = 7;
sequenceParser.OPRANGLES = 8;
sequenceParser.OPRANGLEL = 9;
sequenceParser.OPDANGLE = 10;
sequenceParser.OPU = 11;
sequenceParser.OPB = 12;
sequenceParser.OPQ = 13;
sequenceParser.OPA = 14;
sequenceParser.OPP = 15;
sequenceParser.OPM = 16;
sequenceParser.OPS = 17;
sequenceParser.OPR = 18;
sequenceParser.OPC = 19;
sequenceParser.OPHASH = 20;
sequenceParser.CL = 21;
sequenceParser.COLON = 22;
sequenceParser.AMP = 23;
sequenceParser.DBLCOLON = 24;
sequenceParser.PLUS = 25;
sequenceParser.DotAt = 26;
sequenceParser.Greater = 27;
sequenceParser.Less = 28;
sequenceParser.RightAngle = 29;
sequenceParser.RightArrow = 30;
sequenceParser.Dot = 31;
sequenceParser.DBLEQ = 32;
sequenceParser.DMM = 33;
sequenceParser.HSPL = 34;
sequenceParser.SSPL = 35;
sequenceParser.SSPL2 = 36;
sequenceParser.COMMENT = 37;
sequenceParser.DCANY = 38;
sequenceParser.Image_type = 39;
sequenceParser.Audio_type = 40;
sequenceParser.Video_type = 41;
sequenceParser.ArticleText = 42;
sequenceParser.NOTCL = 43;
sequenceParser.NUMERIC = 44;
sequenceParser.STRING = 45;
sequenceParser.NL = 46;
sequenceParser.NOTBITMARK = 47;
sequenceParser.SENTENCE = 48;
sequenceParser.BARSTRING = 49;
sequenceParser.OPAT = 50;
sequenceParser.AtProgress = 51;
sequenceParser.AtReference = 52;
sequenceParser.AtWidth = 53;
sequenceParser.AtHeight = 54;
sequenceParser.AtProgressPoints = 55;
sequenceParser.AtShortanswer = 56;
sequenceParser.AtLonganswer = 57;
sequenceParser.AtExampleWithStr = 58;
sequenceParser.AtExamplecol = 59;
sequenceParser.AtExamplecl = 60;
sequenceParser.AtSampleSolution = 61;
sequenceParser.AtPartialAnswerS = 62;
sequenceParser.AtPartialAnswer = 63;
sequenceParser.AtLabeltrue = 64;
sequenceParser.AtLabelfalse = 65;
sequenceParser.AtPoints = 66;
sequenceParser.AtSrc = 67;
sequenceParser.AtPartner = 68;
sequenceParser.OPATALT = 69;
sequenceParser.OPAMARK = 70;
sequenceParser.ShowInIndex = 71;
sequenceParser.OpAtCaption = 72;
sequenceParser.OpAtLicense = 73;
sequenceParser.OpAtCopyright = 74;
sequenceParser.OpAtSearch = 75;
sequenceParser.OpAtIsTracked = 76;
sequenceParser.OpAtIsInfoOnly = 77;
sequenceParser.AtDate = 78;
sequenceParser.Http = 79;
sequenceParser.Https = 80;
sequenceParser.AmpAudio = 81;
sequenceParser.AmpImage = 82;
sequenceParser.AmpImageZoom = 83;
sequenceParser.AmpImageWAudio = 84;
sequenceParser.AmpVideo = 85;
sequenceParser.AmpArticle = 86;
sequenceParser.AmpDocument = 87;
sequenceParser.AmpApp = 88;
sequenceParser.AmpWebsite = 89;
sequenceParser.AmpStillImageFilm = 90;
sequenceParser.AmpPdf = 91;
sequenceParser.OpAmpAudio = 92;
sequenceParser.OpAmpImage = 93;
sequenceParser.OpAmpImageZoom = 94;
sequenceParser.OpAmpImageWAudio = 95;
sequenceParser.OpAmpVideo = 96;
sequenceParser.OpAmpArticle = 97;
sequenceParser.OpAmpArticleAtt = 98;
sequenceParser.OpAmpDocument = 99;
sequenceParser.OpAmpApp = 100;
sequenceParser.OpAmpWebsite = 101;
sequenceParser.OpAmpStillImageFilm = 102;
sequenceParser.BracEnclose = 103;
sequenceParser.AmpAudioLink = 104;
sequenceParser.AmpImageLink = 105;
sequenceParser.AmpVideoLink = 106;
sequenceParser.AmpArticleLink = 107;
sequenceParser.AmpDocumentLink = 108;
sequenceParser.AmpAppLink = 109;
sequenceParser.AmpWebsiteLink = 110;
sequenceParser.AmpStillImageFilmLink = 111;
sequenceParser.OpAmpAudioLink = 112;
sequenceParser.OpAmpImageLink = 113;
sequenceParser.OpAmpVideoLink = 114;
sequenceParser.OpAmpArticleLink = 115;
sequenceParser.OpAmpDocumentLink = 116;
sequenceParser.OpAmpAppLink = 117;
sequenceParser.OpAmpWebsiteLink = 118;
sequenceParser.OpAmpStillImageFilmLink = 119;
sequenceParser.AmpImageEmbed = 120;
sequenceParser.AmpVideoEmbed = 121;
sequenceParser.AmpAudioEmbed = 122;
sequenceParser.AmpDocumentEmbed = 123;
sequenceParser.AmpStillImageFilmEmbed = 124;
sequenceParser.OpAmpImageEmbed = 125;
sequenceParser.OpAmpVideoEmbed = 126;
sequenceParser.OpAmpAudioEmbed = 127;
sequenceParser.OpAmpDocumentEmbed = 128;
sequenceParser.OpAmpStillImageFilmEmbed = 129;
sequenceParser.BitmarkMinus = 130;
sequenceParser.BitmarkPlus = 131;
sequenceParser.ColonText = 132;
sequenceParser.ColonJson = 133;
sequenceParser.Prosemirror = 134;
sequenceParser.Placeholder = 135;
sequenceParser.BASIC = 136;
sequenceParser.JPG = 137;
sequenceParser.PNG = 138;
sequenceParser.GIF = 139;
sequenceParser.SVG = 140;
sequenceParser.MP2 = 141;
sequenceParser.MP3 = 142;
sequenceParser.MP4 = 143;
sequenceParser.FLV = 144;
sequenceParser.WMV = 145;
sequenceParser.MPEG = 146;
sequenceParser.MPG = 147;
sequenceParser.TEL = 148;
sequenceParser.DotArticleAtt = 149;
sequenceParser.STAR = 150;
sequenceParser.URL = 151;
sequenceParser.LIST_LINE = 152;
sequenceParser.ENCLBARS = 153;
sequenceParser.RULE_bitmark = 0;
sequenceParser.RULE_bitmark_ = 1;
sequenceParser.RULE_bit = 2;
sequenceParser.RULE_sequence = 3;
sequenceParser.RULE_seqstr = 4;
sequenceParser.RULE_minusminus = 5;
sequenceParser.RULE_menu_3_course = 6;
sequenceParser.RULE_menu_list = 7;
sequenceParser.RULE_hspl_slot = 8;
sequenceParser.RULE_menu_text = 9;
sequenceParser.RULE_melem = 10;
sequenceParser.RULE_mtex = 11;
sequenceParser.RULE_footer = 12;
sequenceParser.RULE_bitElem = 13;
sequenceParser.RULE_gap = 14;
sequenceParser.RULE_single_gap = 15;
sequenceParser.RULE_choice_plus = 16;
sequenceParser.RULE_choice_minus = 17;
sequenceParser.RULE_choice_star = 18;
sequenceParser.RULE_resource = 19;
sequenceParser.RULE_bullet_item = 20;
sequenceParser.RULE_atpoint = 21;
sequenceParser.RULE_format = 22;
sequenceParser.RULE_resource_format = 23;
sequenceParser.RULE_resource_format_extra = 24;
sequenceParser.RULE_format2 = 25;
sequenceParser.RULE_image_format = 26;
sequenceParser.RULE_video_format = 27;
sequenceParser.RULE_article_format = 28;
sequenceParser.RULE_document_format = 29;
sequenceParser.RULE_app_format = 30;
sequenceParser.RULE_website_format = 31;
sequenceParser.RULE_stillimagefilm_format = 32;
sequenceParser.RULE_op_article_format = 33;
sequenceParser.RULE_op_document_format = 34;
sequenceParser.RULE_op_app_format = 35;
sequenceParser.RULE_op_website_format = 36;
sequenceParser.RULE_op_video_format = 37;
sequenceParser.RULE_op_stillimagefilm_format = 38;
sequenceParser.RULE_articlebit = 39;
sequenceParser.RULE_documentbit = 40;
sequenceParser.RULE_websitebit = 41;
sequenceParser.RULE_appbit = 42;
sequenceParser.RULE_stillimagefilmbit = 43;
sequenceParser.RULE_stillimg_one = 44;
sequenceParser.RULE_videobit = 45;
sequenceParser.RULE_video_one = 46;
sequenceParser.RULE_imagebit = 47;
sequenceParser.RULE_image_one = 48;
sequenceParser.RULE_op_image_format = 49;
sequenceParser.RULE_image_chained = 50;
sequenceParser.RULE_image_chained4match = 51;
sequenceParser.RULE_audiobit = 52;
sequenceParser.RULE_audio_one = 53;
sequenceParser.RULE_audio_format = 54;
sequenceParser.RULE_op_audio_format = 55;
sequenceParser.RULE_resource_chained = 56;
sequenceParser.RULE_telephone = 57;
sequenceParser.RULE_url = 58;
sequenceParser.RULE_item = 59;
sequenceParser.RULE_lead = 60;
sequenceParser.RULE_angleref = 61;
sequenceParser.RULE_example = 62;
sequenceParser.RULE_bracketed_text = 63;
sequenceParser.RULE_reference = 64;
sequenceParser.RULE_progress = 65;
sequenceParser.RULE_dateprop = 66;
sequenceParser.RULE_dateprop_chained = 67;
sequenceParser.RULE_instruction = 68;
sequenceParser.RULE_hint = 69;
sequenceParser.RULE_title = 70;
sequenceParser.RULE_bool_label = 71;
sequenceParser.RULE_progress_points = 72;
sequenceParser.RULE_istracked = 73;
sequenceParser.RULE_isinfoonly = 74;
sequenceParser.RULE_atdef = 75;
sequenceParser.RULE_atdef_ = 76;
sequenceParser.RULE_dollarans = 77;
sequenceParser.RULE_anchor = 78;
sequenceParser.RULE_dcolon = 79;
sequenceParser.RULE_s_and_w = 80;
sequenceParser.RULE_dclines = 81;
sequenceParser.RULE_clnsp = 82;
sequenceParser.RULE_sspl = 83;
sequenceParser.RULE_words = 84;
sequenceParser.RULE_sp = 85;
// tslint:disable:no-trailing-whitespace
sequenceParser.ruleNames = [
    "bitmark", "bitmark_", "bit", "sequence", "seqstr", "minusminus", "menu_3_course",
    "menu_list", "hspl_slot", "menu_text", "melem", "mtex", "footer", "bitElem",
    "gap", "single_gap", "choice_plus", "choice_minus", "choice_star", "resource",
    "bullet_item", "atpoint", "format", "resource_format", "resource_format_extra",
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
    "atdef", "atdef_", "dollarans", "anchor", "dcolon", "s_and_w", "dclines",
    "clnsp", "sspl", "words", "sp",
];
sequenceParser._LITERAL_NAMES = [
    undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'[#'",
    "']'", "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'", "'\u25BA'",
    "'\u2192'", "'.'", "'=='", undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'[@'",
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&image-with-audio'",
    "'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&still-image-film'",
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
sequenceParser._SYMBOLIC_NAMES = [
    undefined, "OPDOT", "S", "BitSequence", "BitMenu3Course", "OPDOLL", "OPBUL",
    "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA",
    "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON",
    "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow", "Dot",
    "DBLEQ", "DMM", "HSPL", "SSPL", "SSPL2", "COMMENT", "DCANY", "Image_type",
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
sequenceParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sequenceParser._LITERAL_NAMES, sequenceParser._SYMBOLIC_NAMES, []);
sequenceParser._serializedATNSegments = 3;
sequenceParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9B\u04B1\x04" +
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
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x03" +
    "\x02\x03\x02\x07\x02\xB1\n\x02\f\x02\x0E\x02\xB4\v\x02\x03\x02\x07\x02" +
    "\xB7\n\x02\f\x02\x0E\x02\xBA\v\x02\x06\x02\xBC\n\x02\r\x02\x0E\x02\xBD" +
    "\x03\x02\x07\x02\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x03\x02\x03" +
    "\x03\x03\x03\x03\x04\x03\x04\x05\x04\xCC\n\x04\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x07\x05\xD2\n\x05\f\x05\x0E\x05\xD5\v\x05\x03\x05\x07\x05\xD8" +
    "\n\x05\f\x05\x0E\x05\xDB\v\x05\x03\x05\x07\x05\xDE\n\x05\f\x05\x0E\x05" +
    "\xE1\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xE7\n\x05\f\x05\x0E" +
    "\x05\xEA\v\x05\x03\x05\x03\x05\x03\x05\x05\x05\xEF\n\x05\x03\x05\x03\x05" +
    "\x07\x05\xF3\n\x05\f\x05\x0E\x05\xF6\v\x05\x03\x05\x07\x05\xF9\n\x05\f" +
    "\x05\x0E\x05\xFC\v\x05\x05\x05\xFE\n\x05\x03\x06\x03\x06\x05\x06\u0102" +
    "\n\x06\x07\x06\u0104\n\x06\f\x06\x0E\x06\u0107\v\x06\x03\x06\x03\x06\x03" +
    "\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\u0111\n\b\f\b\x0E\b\u0114\v" +
    "\b\x03\b\x07\b\u0117\n\b\f\b\x0E\b\u011A\v\b\x03\b\x07\b\u011D\n\b\f\b" +
    "\x0E\b\u0120\v\b\x03\b\x03\b\x05\b\u0124\n\b\x03\b\x03\b\x07\b\u0128\n" +
    "\b\f\b\x0E\b\u012B\v\b\x03\b\x07\b\u012E\n\b\f\b\x0E\b\u0131\v\b\x05\b" +
    "\u0133\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\u0139\n\t\f\t\x0E\t\u013C\v\t" +
    "\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\v\u0144\n\v\x03\f\x03\f\x07\f" +
    "\u0148\n\f\f\f\x0E\f\u014B\v\f\x03\r\x03\r\x07\r\u014F\n\r\f\r\x0E\r\u0152" +
    "\v\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0158\n\r\x03\r\x07\r\u015B\n\r\f\r" +
    "\x0E\r\u015E\v\r\x05\r\u0160\n\r\x03\x0E\x07\x0E\u0163\n\x0E\f\x0E\x0E" +
    "\x0E\u0166\v\x0E\x03\x0E\x06\x0E\u0169\n\x0E\r\x0E\x0E\x0E\u016A\x03\x0E" +
    "\x06\x0E\u016E\n\x0E\r\x0E\x0E\x0E\u016F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u018C\n\x0F\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0194\n\x10\f\x10\x0E\x10\u0197\v" +
    "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u019D\n\x11\x03\x11\x07\x11" +
    "\u01A0\n\x11\f\x11\x0E\x11\u01A3\v\x11\x03\x11\x03\x11\x03\x12\x05\x12" +
    "\u01A8\n\x12\x03\x12\x03\x12\x06\x12\u01AC\n\x12\r\x12\x0E\x12\u01AD\x03" +
    "\x12\x03\x12\x03\x13\x05\x13\u01B3\n\x13\x03\x13\x03\x13\x06\x13\u01B7" +
    "\n\x13\r\x13\x0E\x13\u01B8\x03\x13\x03\x13\x03\x14\x05\x14\u01BE\n\x14" +
    "\x03\x14\x03\x14\x06\x14\u01C2\n\x14\r\x14\x0E\x14\u01C3\x03\x14\x03\x14" +
    "\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01CE\n\x16\x03" +
    "\x17\x03\x17\x03\x17\x03\x17\x03\x18\x07\x18\u01D5\n\x18\f\x18\x0E\x18" +
    "\u01D8\v\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01DD\n\x18\f\x18\x0E\x18" +
    "\u01E0\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01ED\n\x1A\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x05\x1B\u01F4\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01F9" +
    "\n\x1C\x03\x1C\x03\x1C\x05\x1C\u01FD\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0201" +
    "\n\x1C\x03\x1C\x05\x1C\u0204\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0209" +
    "\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"" +
    "\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u0220" +
    "\n\'\x03\'\x03\'\x03\'\x05\'\u0225\n\'\x03\'\x03\'\x03\'\x05\'\u022A\n" +
    "\'\x05\'\u022C\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0236" +
    "\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0240\n*\x03+\x03+\x03" +
    "+\x03+\x03+\x03+\x03+\x03+\x05+\u024A\n+\x03,\x03,\x03,\x03,\x05,\u0250" +
    "\n,\x03,\x03,\x03,\x03,\x03,\x05,\u0257\n,\x03-\x03-\x07-\u025B\n-\f-" +
    "\x0E-\u025E\v-\x03.\x03.\x03.\x07.\u0263\n.\f.\x0E.\u0266\v.\x03.\x03" +
    ".\x03.\x03/\x03/\x07/\u026D\n/\f/\x0E/\u0270\v/\x030\x030\x030\x030\x03" +
    "0\x030\x030\x030\x050\u027A\n0\x031\x031\x071\u027E\n1\f1\x0E1\u0281\v" +
    "1\x031\x031\x051\u0285\n1\x032\x032\x032\x072\u028A\n2\f2\x0E2\u028D\v" +
    "2\x032\x032\x032\x033\x033\x033\x053\u0295\n3\x033\x033\x053\u0299\n3" +
    "\x033\x033\x053\u029D\n3\x033\x053\u02A0\n3\x034\x034\x034\x034\x034\x03" +
    "4\x034\x034\x034\x034\x034\x074\u02AD\n4\f4\x0E4\u02B0\v4\x034\x054\u02B3" +
    "\n4\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u02C0" +
    "\n5\f5\x0E5\u02C3\v5\x035\x055\u02C6\n5\x036\x036\x076\u02CA\n6\f6\x0E" +
    "6\u02CD\v6\x037\x037\x037\x037\x037\x037\x037\x037\x057\u02D7\n7\x038" +
    "\x038\x038\x058\u02DC\n8\x038\x038\x038\x058\u02E1\n8\x058\u02E3\n8\x03" +
    "9\x039\x039\x059\u02E8\n9\x039\x039\x039\x059\u02ED\n9\x039\x039\x039" +
    "\x059\u02F2\n9\x059\u02F4\n9\x03:\x03:\x03:\x05:\u02F9\n:\x03:\x03:\x07" +
    ":\u02FD\n:\f:\x0E:\u0300\v:\x03:\x03:\x06:\u0304\n:\r:\x0E:\u0305\x03" +
    ":\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u030F\n:\f:\x0E:\u0312\v:\x03:\x05" +
    ":\u0315\n:\x03;\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x07=\u0320\n=" +
    "\f=\x0E=\u0323\v=\x03=\x05=\u0326\n=\x03=\x03=\x03=\x03=\x07=\u032C\n" +
    "=\f=\x0E=\u032F\v=\x03=\x03=\x07=\u0333\n=\f=\x0E=\u0336\v=\x03=\x05=" +
    "\u0339\n=\x05=\u033B\n=\x03>\x03>\x03>\x03>\x07>\u0341\n>\f>\x0E>\u0344" +
    "\v>\x03>\x03>\x03?\x03?\x05?\u034A\n?\x03?\x03?\x03?\x05?\u034F\n?\x03" +
    "?\x05?\u0352\n?\x03@\x03@\x03@\x03@\x05@\u0358\n@\x03@\x05@\u035B\n@\x03" +
    "A\x03A\x05A\u035F\nA\x03A\x03A\x03A\x07A\u0364\nA\fA\x0EA\u0367\vA\x07" +
    "A\u0369\nA\fA\x0EA\u036C\vA\x03A\x07A\u036F\nA\fA\x0EA\u0372\vA\x07A\u0374" +
    "\nA\fA\x0EA\u0377\vA\x03A\x03A\x03A\x03A\x03A\x07A\u037E\nA\fA\x0EA\u0381" +
    "\vA\x03A\x05A\u0384\nA\x03B\x03B\x03B\x03B\x03B\x06B\u038B\nB\rB\x0EB" +
    "\u038C\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u0396\nB\fB\x0EB\u0399" +
    "\vB\x03B\x05B\u039C\nB\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x06D\u03A6" +
    "\nD\rD\x0ED\u03A7\x03D\x03D\x05D\u03AC\nD\x03E\x03E\x03E\x03E\x06E\u03B2" +
    "\nE\rE\x0EE\u03B3\x03E\x03E\x03F\x03F\x07F\u03BA\nF\fF\x0EF\u03BD\vF\x03" +
    "F\x05F\u03C0\nF\x03F\x03F\x03F\x07F\u03C5\nF\fF\x0EF\u03C8\vF\x07F\u03CA" +
    "\nF\fF\x0EF\u03CD\vF\x03F\x07F\u03D0\nF\fF\x0EF\u03D3\vF\x07F\u03D5\n" +
    "F\fF\x0EF\u03D8\vF\x03F\x03F\x03F\x07F\u03DD\nF\fF\x0EF\u03E0\vF\x03F" +
    "\x05F\u03E3\nF\x03F\x05F\u03E6\nF\x03G\x03G\x06G\u03EA\nG\rG\x0EG\u03EB" +
    "\x03G\x03G\x03H\x03H\x03H\x06H\u03F3\nH\rH\x0EH\u03F4\x03H\x03H\x03H\x03" +
    "H\x03H\x05H\u03FC\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0406" +
    "\nI\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0411\nJ\x03K\x03" +
    "K\x03K\x03K\x03L\x03L\x03L\x03L\x03M\x03M\x07M\u041D\nM\fM\x0EM\u0420" +
    "\vM\x03M\x07M\u0423\nM\fM\x0EM\u0426\vM\x03N\x03N\x03N\x03N\x03N\x03N" +
    "\x03N\x07N\u042F\nN\fN\x0EN\u0432\vN\x03N\x03N\x03N\x03N\x07N\u0438\n" +
    "N\fN\x0EN\u043B\vN\x03N\x05N\u043E\nN\x03O\x03O\x03O\x03O\x06O\u0444\n" +
    "O\rO\x0EO\u0445\x03O\x03O\x03O\x03O\x03O\x07O\u044D\nO\fO\x0EO\u0450\v" +
    "O\x03O\x05O\u0453\nO\x03P\x03P\x05P\u0457\nP\x03P\x03P\x03Q\x03Q\x03R" +
    "\x03R\x06R\u045F\nR\rR\x0ER\u0460\x03R\x05R\u0464\nR\x03R\x03R\x06R\u0468" +
    "\nR\rR\x0ER\u0469\x03R\x05R\u046D\nR\x03R\x03R\x03R\x03R\x03R\x03R\x07" +
    "R\u0475\nR\fR\x0ER\u0478\vR\x03R\x03R\x07R\u047C\nR\fR\x0ER\u047F\vR\x03" +
    "R\x03R\x07R\u0483\nR\fR\x0ER\u0486\vR\x03R\x03R\x05R\u048A\nR\x03S\x03" +
    "S\x03T\x03T\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
    "V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
    "V\x03V\x06V\u04AB\nV\rV\x0EV\u04AC\x03W\x03W\x03W\x06\u02AE\u02C1\u0310" +
    "\u0439\x02\x02X\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
    "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
    "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
    "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
    "\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
    "x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
    "\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
    "\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\x02\x15\b" +
    "\x02XY[\\jq{~\x84\x85\x87\x89\x05\x02WWll{{\x04\x02XXmm\x05\x02YYnn}}" +
    "\x04\x02ZZoo\x04\x02[[pp\x05\x02\\\\qq~~\x04\x02ccuu\x05\x02eevv\x82\x82" +
    "\x04\x02ffww\x04\x02ggxx\x05\x02hhyy\x83\x83\x03\x0278\x04\x02GGJM\x03" +
    "\x02\x17\x17\x04\x02\x18\x18\x1A\x1A\x03\x02%&\x03\x02\x1D\x1D\x03\x02" +
    "\x1E\x1E\x02\u0557\x02\xBB\x03\x02\x02\x02\x04\xC7\x03\x02\x02\x02\x06" +
    "\xCB\x03\x02\x02\x02\b\xCD\x03\x02\x02\x02\n\u0105\x03\x02\x02\x02\f\u010A" +
    "\x03\x02\x02\x02\x0E\u010C\x03\x02\x02\x02\x10\u0134\x03\x02\x02\x02\x12" +
    "\u013F\x03\x02\x02\x02\x14\u0143\x03\x02\x02\x02\x16\u0145\x03\x02\x02" +
    "\x02\x18\u015F\x03\x02\x02\x02\x1A\u0168\x03\x02\x02\x02\x1C\u018B\x03" +
    "\x02\x02\x02\x1E\u018D\x03\x02\x02\x02 \u0198\x03\x02\x02\x02\"\u01A7" +
    "\x03\x02\x02\x02$\u01B2\x03\x02\x02\x02&\u01BD\x03\x02\x02\x02(\u01C7" +
    "\x03\x02\x02\x02*\u01C9\x03\x02\x02\x02,\u01CF\x03\x02\x02\x02.\u01D6" +
    "\x03\x02\x02\x020\u01E1\x03\x02\x02\x022\u01EC\x03\x02\x02\x024\u01F3" +
    "\x03\x02\x02\x026\u0203\x03\x02\x02\x028\u0205\x03\x02\x02\x02:\u020A" +
    "\x03\x02\x02\x02<\u020C\x03\x02\x02\x02>\u020E\x03\x02\x02\x02@\u0210" +
    "\x03\x02\x02\x02B\u0212\x03\x02\x02\x02D\u0214\x03\x02\x02\x02F\u0216" +
    "\x03\x02\x02\x02H\u0218\x03\x02\x02\x02J\u021A\x03\x02\x02\x02L\u022B" +
    "\x03\x02\x02\x02N\u022D\x03\x02\x02\x02P\u0235\x03\x02\x02\x02R\u0237" +
    "\x03\x02\x02\x02T\u0241\x03\x02\x02\x02V\u024B\x03\x02\x02\x02X\u0258" +
    "\x03\x02\x02\x02Z\u025F\x03\x02\x02\x02\\\u026A\x03\x02\x02\x02^\u0271" +
    "\x03\x02\x02\x02`\u027B\x03\x02\x02\x02b\u0286\x03\x02\x02\x02d\u029F" +
    "\x03\x02\x02\x02f\u02B2\x03\x02\x02\x02h\u02C5\x03\x02\x02\x02j\u02C7" +
    "\x03\x02\x02\x02l\u02CE\x03\x02\x02\x02n\u02E2\x03\x02\x02\x02p\u02F3" +
    "\x03\x02\x02\x02r\u0314\x03\x02\x02\x02t\u0316\x03\x02\x02\x02v\u031A" +
    "\x03\x02\x02\x02x\u033A\x03\x02\x02\x02z\u033C\x03\x02\x02\x02|\u0351" +
    "\x03\x02\x02\x02~\u035A\x03\x02\x02\x02\x80\u0383\x03\x02\x02\x02\x82" +
    "\u039B\x03\x02\x02\x02\x84\u039D\x03\x02\x02\x02\x86\u03A1\x03\x02\x02" +
    "\x02\x88\u03AD\x03\x02\x02\x02\x8A\u03E5\x03\x02\x02\x02\x8C\u03E7\x03" +
    "\x02\x02\x02\x8E\u03FB\x03\x02\x02\x02\x90\u0405\x03\x02\x02\x02\x92\u0410" +
    "\x03\x02\x02\x02\x94\u0412\x03\x02\x02\x02\x96\u0416\x03\x02\x02\x02\x98" +
    "\u041A\x03\x02\x02\x02\x9A\u043D\x03\x02\x02\x02\x9C\u0452\x03\x02\x02" +
    "\x02\x9E\u0454\x03\x02\x02\x02\xA0\u045A\x03\x02\x02\x02\xA2\u0489\x03" +
    "\x02\x02\x02\xA4\u048B\x03\x02\x02\x02\xA6\u048D\x03\x02\x02\x02\xA8\u048F" +
    "\x03\x02\x02\x02\xAA\u04AA\x03\x02\x02\x02\xAC\u04AE\x03\x02\x02\x02\xAE" +
    "\xB8\x05\x04\x03\x02\xAF\xB1\x07\x04\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1" +
    "\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3" +
    "\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB7\x070\x02\x02\xB6" +
    "\xB2\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8" +
    "\xB9\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB" +
    "\xAE\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD" +
    "\xBE\x03\x02\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF\xC1\x070\x02\x02\xC0" +
    "\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2" +
    "\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5" +
    "\xC6\x07\x02\x02\x03\xC6\x03\x03\x02\x02\x02\xC7\xC8\x05\x06\x04\x02\xC8" +
    "\x05\x03\x02\x02\x02\xC9\xCC\x05\b\x05\x02\xCA\xCC\x05\x0E\b\x02\xCB\xC9" +
    "\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\x07\x03\x02\x02\x02\xCD\xCE" +
    "\x07\x05\x02\x02\xCE\xCF\x05.\x18\x02\xCF\xD9\x07\x17\x02\x02\xD0\xD2" +
    "\x070\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1" +
    "\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3" +
    "\x03\x02\x02\x02\xD6\xD8\x05\x1C\x0F\x02\xD7\xD3\x03\x02\x02\x02\xD8\xDB" +
    "\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDF" +
    "\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDE\x070\x02\x02\xDD\xDC" +
    "\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0" +
    "\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE8" +
    "\x07$\x02\x02\xE3\xE4\x05\n\x06\x02\xE4\xE5\x05\f\x07\x02\xE5\xE7\x03" +
    "\x02\x02\x02\xE6\xE3\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
    "\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE8\x03" +
    "\x02\x02\x02\xEB\xEC\x05\n\x06\x02\xEC\xEE\x07$\x02\x02\xED\xEF\x05\x1A" +
    "\x0E\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xFD\x03\x02" +
    "\x02\x02\xF0\xFA\x05(\x15\x02\xF1\xF3\x070\x02\x02\xF2\xF1\x03\x02\x02" +
    "\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02" +
    "\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x05(\x15" +
    "\x02\xF8\xF4\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02" +
    "\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02" +
    "\x02\xFD\xF0\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\t\x03\x02\x02" +
    "\x02\xFF\u0101\x05\x1C\x0F\x02\u0100\u0102\x070\x02\x02\u0101\u0100\x03" +
    "\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02\x02\u0103" +
    "\xFF\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02" +
    "\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0105" +
    "\x03\x02\x02\x02\u0108\u0109\x05\xA2R\x02\u0109\v\x03\x02\x02\x02\u010A" +
    "\u010B\x07#\x02\x02\u010B\r\x03\x02\x02\x02\u010C\u010D\x07\x06\x02\x02" +
    "\u010D\u010E\x05.\x18\x02\u010E\u0118\x07\x17\x02\x02\u010F\u0111\x07" +
    "0\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112" +
    "\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02" +
    "\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0117\x05\x1C\x0F\x02\u0116" +
    "\u0112\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02" +
    "\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011E\x03\x02\x02\x02\u011A" +
    "\u0118\x03\x02\x02\x02\u011B\u011D\x070\x02\x02\u011C\u011B\x03\x02\x02" +
    "\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F" +
    "\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02" +
    "\u0121\u0123\x05\x10\t\x02\u0122\u0124\x05\x1A\x0E\x02\u0123\u0122\x03" +
    "\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0132\x03\x02\x02\x02\u0125" +
    "\u012F\x05(\x15\x02\u0126\u0128\x070\x02\x02\u0127\u0126\x03\x02\x02\x02" +
    "\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03" +
    "\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C" +
    "\u012E\x05(\x15\x02\u012D\u0129\x03\x02\x02\x02\u012E\u0131\x03\x02\x02" +
    "\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0133" +
    "\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0125\x03\x02\x02\x02" +
    "\u0132\u0133\x03\x02\x02\x02\u0133\x0F\x03\x02\x02\x02\u0134\u0135\x05" +
    "\x12\n\x02\u0135\u013A\x05\x14\v\x02\u0136\u0137\x07$\x02\x02\u0137\u0139" +
    "\x05\x14\v\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02" +
    "\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03" +
    "\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u013E\x07$\x02\x02\u013E" +
    "\x11\x03\x02\x02\x02\u013F\u0140\x07$\x02\x02\u0140\x13\x03\x02\x02\x02" +
    "\u0141\u0144\x05\x16\f\x02\u0142\u0144\x03\x02\x02\x02\u0143\u0141\x03" +
    "\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144\x15\x03\x02\x02\x02\u0145" +
    "\u0149\x05\x18\r\x02\u0146\u0148\x05\x18\r\x02\u0147\u0146\x03\x02\x02" +
    "\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A" +
    "\x03\x02\x02\x02\u014A\x17\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02" +
    "\u014C\u0150\x05\xA2R\x02\u014D\u014F\x070\x02\x02\u014E\u014D\x03\x02" +
    "\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150" +
    "\u0151\x03\x02\x02\x02\u0151\u0160\x03\x02\x02\x02\u0152\u0150\x03\x02" +
    "\x02\x02\u0153\u0158\x05\x8AF\x02\u0154\u0158\x05\x98M\x02\u0155\u0158" +
    "\x05\x8CG\x02\u0156\u0158\x05~@\x02\u0157\u0153\x03\x02\x02\x02\u0157" +
    "\u0154\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0156\x03\x02" +
    "\x02\x02\u0158\u015C\x03\x02\x02\x02\u0159\u015B\x070\x02\x02\u015A\u0159" +
    "\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02" +
    "\u015C\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03" +
    "\x02\x02\x02\u015F\u014C\x03\x02\x02\x02\u015F\u0157\x03\x02\x02\x02\u0160" +
    "\x19\x03\x02\x02\x02\u0161\u0163\x070\x02\x02\u0162\u0161\x03\x02\x02" +
    "\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0165" +
    "\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02" +
    "\u0167\u0169\x05\xA2R\x02\u0168\u0164\x03\x02\x02\x02\u0169\u016A\x03" +
    "\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
    "\u016D\x03\x02\x02\x02\u016C\u016E\x070\x02\x02\u016D\u016C\x03\x02\x02" +
    "\x02\u016E\u016F\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170" +
    "\x03\x02\x02\x02\u0170\x1B\x03\x02\x02\x02\u0171\u018C\x07\x9A\x02\x02" +
    "\u0172\u018C\x071\x02\x02\u0173\u018C\x05\xA4S\x02\u0174\u018C\x05\x1E" +
    "\x10\x02\u0175\u018C\x05\x98M\x02\u0176\u018C\x05\x82B\x02\u0177\u018C" +
    "\x05\x9CO\x02\u0178\u018C\x05x=\x02\u0179\u018C\x05\x8EH\x02\u017A\u018C" +
    "\x05\x8AF\x02\u017B\u018C\x05\x8CG\x02\u017C\u018C\x05\xA2R\x02\u017D" +
    "\u018C\x05~@\x02\u017E\u018C\x05\x90I\x02\u017F\u018C\x05`1\x02\u0180" +
    "\u018C\x05j6\x02\u0181\u018C\x05\\/\x02\u0182\u018C\x05P)\x02\u0183\u018C" +
    "\x05R*\x02\u0184\u018C\x05V,\x02\u0185\u018C\x05T+\x02\u0186\u018C\x05" +
    "X-\x02\u0187\u018C\x05|?\x02\u0188\u018C\x05\x9EP\x02\u0189\u018C\x05" +
    "\x80A\x02\u018A\u018C\x05\xACW\x02\u018B\u0171\x03\x02\x02\x02\u018B\u0172" +
    "\x03\x02\x02\x02\u018B\u0173\x03\x02\x02";
sequenceParser._serializedATNSegment1 = "\x02\u018B\u0174\x03\x02\x02\x02\u018B\u0175\x03\x02\x02\x02\u018B\u0176" +
    "\x03\x02\x02\x02\u018B\u0177\x03\x02\x02\x02\u018B\u0178\x03\x02\x02\x02" +
    "\u018B\u0179\x03\x02\x02\x02\u018B\u017A\x03\x02\x02\x02\u018B\u017B\x03" +
    "\x02\x02\x02\u018B\u017C\x03\x02\x02\x02\u018B\u017D\x03\x02\x02\x02\u018B" +
    "\u017E\x03\x02\x02\x02\u018B\u017F\x03\x02\x02\x02\u018B\u0180\x03\x02" +
    "\x02\x02\u018B\u0181\x03\x02\x02\x02\u018B\u0182\x03\x02\x02\x02\u018B" +
    "\u0183\x03\x02\x02\x02\u018B\u0184\x03\x02\x02\x02\u018B\u0185\x03\x02" +
    "\x02\x02\u018B\u0186\x03\x02\x02\x02\u018B\u0187\x03\x02\x02\x02\u018B" +
    "\u0188\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018A\x03\x02" +
    "\x02\x02\u018C\x1D\x03\x02\x02\x02\u018D\u0195\x05 \x11\x02\u018E\u0194" +
    "\x05 \x11\x02\u018F\u0194\x05\x8AF\x02\u0190\u0194\x05\x8CG\x02\u0191" +
    "\u0194\x05x=\x02\u0192\u0194\x05~@\x02\u0193\u018E\x03\x02\x02\x02\u0193" +
    "\u018F\x03\x02\x02\x02\u0193\u0190\x03\x02\x02\x02\u0193\u0191\x03\x02" +
    "\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195" +
    "\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\x1F\x03\x02\x02" +
    "\x02\u0197\u0195\x03\x02\x02\x02\u0198\u019C\x07\r\x02\x02\u0199\u019D" +
    "\x07.\x02\x02\u019A\u019D\x07/\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C" +
    "\u0199\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019B\x03\x02" +
    "\x02\x02\u019D\u01A1\x03\x02\x02\x02\u019E\u01A0\x05\xA2R\x02\u019F\u019E" +
    "\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02" +
    "\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3\u01A1\x03" +
    "\x02\x02\x02\u01A4\u01A5\x05\xA6T\x02\u01A5!\x03\x02\x02\x02\u01A6\u01A8" +
    "\x05x=\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
    "\u01A9\x03\x02\x02\x02\u01A9\u01AB\x07\x11\x02\x02\u01AA\u01AC\x05\xA2" +
    "R\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AB" +
    "\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02" +
    "\u01AF\u01B0\x07\x17\x02\x02\u01B0#\x03\x02\x02\x02\u01B1\u01B3\x05x=" +
    "\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4" +
    "\x03\x02\x02\x02\u01B4\u01B6\x07\x12\x02\x02\u01B5\u01B7\x05\xA2R\x02" +
    "\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6\x03" +
    "\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
    "\u01BB\x07\x17\x02\x02\u01BB%\x03\x02\x02\x02\u01BC\u01BE\x05x=\x02\u01BD" +
    "\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
    "\x02\x02\u01BF\u01C1\x07\x14\x02\x02\u01C0\u01C2\x05\xA2R\x02\u01C1\u01C0" +
    "\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02" +
    "\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x07" +
    "\x17\x02\x02\u01C6\'\x03\x02\x02\x02\u01C7\u01C8\x05\x1C\x0F\x02\u01C8" +
    ")\x03\x02\x02\x02\u01C9\u01CA\x07\b\x02\x02\u01CA\u01CB\x05\xA2R\x02\u01CB" +
    "\u01CD\x07\x17\x02\x02\u01CC\u01CE\x05,\x17\x02\u01CD\u01CC\x03\x02\x02" +
    "\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE+\x03\x02\x02\x02\u01CF\u01D0\x07" +
    "D\x02\x02\u01D0\u01D1\x07.\x02\x02\u01D1\u01D2\x07\x17\x02\x02\u01D2-" +
    "\x03\x02\x02\x02\u01D3\u01D5\x050\x19\x02\u01D4\u01D3\x03\x02\x02\x02" +
    "\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03" +
    "\x02\x02\x02\u01D7\u01DE\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9" +
    "\u01DD\x07\x86\x02\x02\u01DA\u01DD\x07\x87\x02\x02\u01DB\u01DD\x052\x1A" +
    "\x02\u01DC\u01D9\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DB" +
    "\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02" +
    "\u01DE\u01DF\x03\x02\x02\x02\u01DF/\x03\x02\x02\x02\u01E0\u01DE\x03\x02" +
    "\x02\x02\u01E1\u01E2\t\x02\x02\x02\u01E21\x03\x02\x02\x02\u01E3\u01ED" +
    "\x056\x1C\x02\u01E4\u01ED\x05n8\x02\u01E5\u01ED\x058\x1D\x02\u01E6\u01ED" +
    "\x05:\x1E\x02\u01E7\u01ED\x05<\x1F\x02\u01E8\u01ED\x05> \x02\u01E9\u01ED" +
    "\x05@!\x02\u01EA\u01ED\x05B\"\x02\u01EB\u01ED\x07]\x02\x02\u01EC\u01E3" +
    "\x03\x02\x02\x02\u01EC\u01E4\x03\x02\x02\x02\u01EC\u01E5\x03\x02\x02\x02" +
    "\u01EC\u01E6\x03\x02\x02\x02\u01EC\u01E7\x03\x02\x02\x02\u01EC\u01E8\x03" +
    "\x02\x02\x02\u01EC\u01E9\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC" +
    "\u01EB\x03\x02\x02\x02\u01ED3\x03\x02\x02\x02\u01EE\u01F4\x07\x84\x02" +
    "\x02\u01EF\u01F4\x07\x85\x02\x02\u01F0\u01F4\x07\x86\x02\x02\u01F1\u01F4" +
    "\x07\x87\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01EE\x03\x02\x02\x02" +
    "\u01F3\u01EF\x03\x02\x02\x02\u01F3\u01F0\x03\x02\x02\x02\u01F3\u01F1\x03" +
    "\x02\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F45\x03\x02\x02\x02\u01F5" +
    "\u01F8\x07T\x02\x02\u01F6\u01F9\x07)\x02\x02\u01F7\u01F9\x07\x97\x02\x02" +
    "\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03" +
    "\x02\x02\x02\u01F9\u0204\x03\x02\x02\x02\u01FA\u01FC\x07k\x02\x02\u01FB" +
    "\u01FD\x07)\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02" +
    "\x02\u01FD\u0204\x03\x02\x02\x02\u01FE\u0200\x07U\x02\x02\u01FF\u0201" +
    "\x07)\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02" +
    "\u0201\u0204\x03\x02\x02\x02\u0202\u0204\x07V\x02\x02\u0203\u01F5\x03" +
    "\x02\x02\x02\u0203\u01FA\x03\x02\x02\x02\u0203\u01FE\x03\x02\x02\x02\u0203" +
    "\u0202\x03\x02\x02\x02\u02047\x03\x02\x02\x02\u0205\u0208\t\x03\x02\x02" +
    "\u0206\u0207\x07\x18\x02\x02\u0207\u0209\x07+\x02\x02\u0208\u0206\x03" +
    "\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u02099\x03\x02\x02\x02\u020A" +
    "\u020B\t\x04\x02\x02\u020B;\x03\x02\x02\x02\u020C\u020D\t\x05\x02\x02" +
    "\u020D=\x03\x02\x02\x02\u020E\u020F\t\x06\x02\x02\u020F?\x03\x02\x02\x02" +
    "\u0210\u0211\t\x07\x02\x02\u0211A\x03\x02\x02\x02\u0212\u0213\t\b\x02" +
    "\x02\u0213C\x03\x02\x02\x02\u0214\u0215\t\t\x02\x02\u0215E\x03\x02\x02" +
    "\x02\u0216\u0217\t\n\x02\x02\u0217G\x03\x02\x02\x02\u0218\u0219\t\v\x02" +
    "\x02\u0219I\x03\x02\x02\x02\u021A\u021B\t\f\x02\x02\u021BK\x03\x02\x02" +
    "\x02\u021C\u021F\x07b\x02\x02\u021D\u021E\x07\x18\x02\x02\u021E\u0220" +
    "\x07+\x02\x02\u021F\u021D\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02" +
    "\u0220\u022C\x03\x02\x02\x02\u0221\u0224\x07t\x02\x02\u0222\u0223\x07" +
    "\x18\x02\x02\u0223\u0225\x07+\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224" +
    "\u0225\x03\x02\x02\x02\u0225\u022C\x03\x02\x02\x02\u0226\u0229\x07\x80" +
    "\x02\x02\u0227\u0228\x07\x18\x02\x02\u0228\u022A\x07+\x02\x02\u0229\u0227" +
    "\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022C\x03\x02\x02\x02" +
    "\u022B\u021C\x03\x02\x02\x02\u022B\u0221\x03\x02\x02\x02\u022B\u0226\x03" +
    "\x02\x02\x02\u022CM\x03\x02\x02\x02\u022D\u022E\t\r\x02\x02\u022EO\x03" +
    "\x02\x02\x02\u022F\u0230\x05D#\x02\u0230\u0231\x07\x18\x02\x02\u0231\u0232" +
    "\x05v<\x02\u0232\u0233\x07\x17\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234" +
    "\u0236\x07,\x02\x02\u0235\u022F\x03\x02\x02\x02\u0235\u0234\x03\x02\x02" +
    "\x02\u0236Q\x03\x02\x02\x02\u0237\u0238\x05F$\x02\u0238\u0239\x07\x18" +
    "\x02\x02\u0239\u023A\x05v<\x02\u023A\u023F\x07\x17\x02\x02\u023B\u023C" +
    "\x07G\x02\x02\u023C\u023D\x05\xAAV\x02\u023D\u023E\x07\x17\x02\x02\u023E" +
    "\u0240\x03\x02\x02\x02\u023F\u023B\x03\x02\x02\x02\u023F\u0240\x03\x02" +
    "\x02\x02\u0240S\x03\x02\x02\x02\u0241\u0242\x05J&\x02\u0242\u0243\x07" +
    "\x18\x02\x02\u0243\u0244\x05v<\x02\u0244\u0249\x07\x17\x02\x02\u0245\u0246" +
    "\x07G\x02\x02\u0246\u0247\x05\xAAV\x02\u0247\u0248\x07\x17\x02\x02\u0248" +
    "\u024A\x03\x02\x02\x02\u0249\u0245\x03\x02\x02\x02\u0249\u024A\x03\x02" +
    "\x02\x02\u024AU\x03\x02\x02\x02\u024B\u024C\x05H%\x02\u024C\u024F\x07" +
    "\x18\x02\x02\u024D\u0250\x05v<\x02\u024E\u0250\x05t;\x02\u024F\u024D\x03" +
    "\x02\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
    "\u0256\x07\x17\x02\x02\u0252\u0253\x07G\x02\x02\u0253\u0254\x05\xAAV\x02" +
    "\u0254\u0255\x07\x17\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0252\x03" +
    "\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257W\x03\x02\x02\x02\u0258" +
    "\u025C\x05Z.\x02\u0259\u025B\x05r:\x02\u025A\u0259\x03\x02\x02\x02\u025B" +
    "\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02" +
    "\x02\x02\u025DY\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0260" +
    "\x05N(\x02\u0260\u0264\x07\x18\x02\x02\u0261\u0263\x07\x04\x02\x02\u0262" +
    "\u0261\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02" +
    "\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266" +
    "\u0264\x03\x02\x02\x02\u0267\u0268\x05v<\x02\u0268\u0269\x07\x17\x02\x02" +
    "\u0269[\x03\x02\x02\x02\u026A\u026E\x05^0\x02\u026B\u026D\x05r:\x02\u026C" +
    "\u026B\x03\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02" +
    "\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F]\x03\x02\x02\x02\u0270\u026E" +
    "\x03\x02\x02\x02\u0271\u0272\x05L\'\x02\u0272\u0273\x07\x18\x02\x02\u0273" +
    "\u0274\x05v<\x02\u0274\u0279\x07\x17\x02\x02\u0275\u0276\x07G\x02\x02" +
    "\u0276\u0277\x05\xAAV\x02\u0277\u0278\x07\x17\x02\x02\u0278\u027A\x03" +
    "\x02\x02\x02\u0279\u0275\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
    "_\x03\x02\x02\x02\u027B\u027F\x05b2\x02\u027C\u027E\x05f4\x02\u027D\u027C" +
    "\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02" +
    "\u027F\u0280\x03\x02\x02\x02\u0280\u0284\x03\x02\x02\x02\u0281\u027F\x03" +
    "\x02\x02\x02\u0282\u0283\x070\x02\x02\u0283\u0285\x07I\x02\x02\u0284\u0282" +
    "\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285a\x03\x02\x02\x02\u0286" +
    "\u0287\x05d3\x02\u0287\u028B\x07\x18\x02\x02\u0288\u028A\x07\x04\x02\x02" +
    "\u0289\u0288\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03" +
    "\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D" +
    "\u028B\x03\x02\x02\x02\u028E\u028F\x05v<\x02\u028F\u0290\x07\x17\x02\x02" +
    "\u0290c\x03\x02\x02\x02\u0291\u0294\x07_\x02\x02\u0292\u0295\x07)\x02" +
    "\x02\u0293\u0295\x07\x97\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0293" +
    "\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u02A0\x03\x02\x02\x02" +
    "\u0296\u0298\x07s\x02\x02\u0297\u0299\x07)\x02\x02\u0298\u0297\x03\x02" +
    "\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u02A0\x03\x02\x02\x02\u029A" +
    "\u029C\x07`\x02\x02\u029B\u029D\x07)\x02\x02\u029C\u029B\x03\x02\x02\x02" +
    "\u029C\u029D\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u02A0\x07" +
    "a\x02\x02\u029F\u0291\x03\x02\x02\x02\u029F\u0296\x03\x02\x02\x02\u029F" +
    "\u029A\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0e\x03\x02\x02" +
    "\x02\u02A1\u02A2\x07E\x02\x02\u02A2\u02A3\x07\x18\x02\x02\u02A3\u02A4" +
    "\x05v<\x02\u02A4\u02A5\x07\x17\x02\x02\u02A5\u02B3\x03\x02\x02\x02\u02A6" +
    "\u02A7\t\x0E\x02\x02\u02A7\u02A8\x07\x18\x02\x02\u02A8\u02A9\x07.\x02" +
    "\x02\u02A9\u02B3\x07\x17\x02\x02\u02AA\u02AE\t\x0F\x02\x02\u02AB\u02AD" +
    "\v\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02" +
    "\u02AE\u02AF\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AF\u02B1\x03" +
    "\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B1\u02B3\x07\x17\x02\x02\u02B2" +
    "\u02A1\x03\x02\x02\x02\u02B2\u02A6\x03\x02\x02\x02\u02B2\u02AA\x03\x02" +
    "\x02\x02\u02B3g\x03\x02\x02\x02\u02B4\u02B5\x07E\x02\x02\u02B5\u02B6\x07" +
    "\x18\x02\x02\u02B6\u02B7\x05v<\x02\u02B7\u02B8\x07\x17\x02\x02\u02B8\u02C6" +
    "\x03\x02\x02\x02\u02B9\u02BA\t\x0E\x02\x02\u02BA\u02BB\x07\x18\x02\x02" +
    "\u02BB\u02BC\x07.\x02\x02\u02BC\u02C6\x07\x17\x02\x02\u02BD\u02C1\t\x0F" +
    "\x02\x02\u02BE\u02C0\v\x02\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02C0\u02C3" +
    "\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02" +
    "\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C6\x07" +
    "\x17\x02\x02\u02C5\u02B4\x03\x02\x02\x02\u02C5\u02B9\x03\x02\x02\x02\u02C5" +
    "\u02BD\x03\x02\x02\x02\u02C6i\x03\x02\x02\x02\u02C7\u02CB\x05l7\x02\u02C8" +
    "\u02CA\x05r:\x02\u02C9\u02C8\x03\x02\x02\x02\u02CA\u02CD\x03\x02\x02\x02" +
    "\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CCk\x03\x02" +
    "\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02CF\x05p9\x02\u02CF\u02D0" +
    "\x07\x18\x02\x02\u02D0\u02D1\x05v<\x02\u02D1\u02D6\x07\x17\x02\x02\u02D2" +
    "\u02D3\x07G\x02\x02\u02D3\u02D4\x05\xAAV\x02\u02D4\u02D5\x07\x17\x02\x02" +
    "\u02D5\u02D7\x03\x02\x02\x02\u02D6\u02D2\x03\x02\x02\x02\u02D6\u02D7\x03" +
    "\x02\x02\x02\u02D7m\x03\x02\x02\x02\u02D8\u02DB\x07S\x02\x02\u02D9\u02DA" +
    "\x07\x18\x02\x02\u02DA\u02DC\x07*\x02\x02\u02DB\u02D9\x03\x02\x02\x02" +
    "\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E3\x03\x02\x02\x02\u02DD\u02E0\x07" +
    "j\x02\x02\u02DE\u02DF\x07\x18\x02\x02\u02DF\u02E1\x07*\x02\x02\u02E0\u02DE" +
    "\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E3\x03\x02\x02\x02" +
    "\u02E2\u02D8\x03\x02\x02\x02\u02E2\u02DD\x03\x02\x02\x02\u02E3o\x03\x02" +
    "\x02\x02\u02E4\u02E7\x07^\x02\x02\u02E5\u02E6\x07\x18\x02\x02\u02E6\u02E8" +
    "\x07*\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02" +
    "\u02E8\u02F4\x03\x02\x02\x02\u02E9\u02EC\x07r\x02\x02\u02EA\u02EB\x07" +
    "\x18\x02\x02\u02EB\u02ED\x07*\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02EC" +
    "\u02ED\x03\x02\x02\x02\u02ED\u02F4\x03\x02\x02\x02\u02EE\u02F1\x07\x81" +
    "\x02\x02\u02EF\u02F0\x07\x18\x02\x02\u02F0\u02F2\x07*\x02\x02\u02F1\u02EF" +
    "\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F4\x03\x02\x02\x02" +
    "\u02F3\u02E4\x03\x02\x02\x02\u02F3\u02E9\x03\x02\x02\x02\u02F3\u02EE\x03" +
    "\x02\x02\x02\u02F4q\x03\x02\x02\x02\u02F5\u02F6\x07\x10\x02\x02\u02F6" +
    "\u02F9\x05\xA2R\x02\u02F7\u02F9\x07E\x02\x02\u02F8\u02F5\x03\x02\x02\x02" +
    "\u02F8\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FE\x07" +
    "\x18\x02\x02\u02FB\u02FD\x07\x04\x02\x02\u02FC\u02FB\x03\x02\x02\x02\u02FD" +
    "\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02" +
    "\x02\x02\u02FF\u0303\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301" +
    "\u0304\x05\xA2R\x02\u0302\u0304\x070\x02\x02\u0303\u0301\x03\x02\x02\x02" +
    "\u0303\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0303\x03" +
    "\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307" +
    "\u0315\x07\x17\x02\x02\u0308\u0309\t\x0E\x02\x02\u0309\u030A\x07\x18\x02" +
    "\x02\u030A\u030B\x07.\x02\x02\u030B\u0315\x07\x17\x02\x02\u030C\u0310" +
    "\t\x0F\x02\x02\u030D\u030F\v\x02\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F" +
    "\u0312\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0310\u030E\x03\x02" +
    "\x02\x02\u0311\u0313\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313" +
    "\u0315\x07\x17\x02\x02\u0314\u02F8\x03\x02\x02\x02\u0314\u0308\x03\x02" +
    "\x02\x02\u0314\u030C\x03\x02\x02\x02\u0315s\x03\x02\x02\x02\u0316\u0317" +
    "\x07\x96\x02\x02\u0317\u0318\x07\x1B\x02\x02\u0318\u0319\x07.\x02\x02" +
    "\u0319u\x03\x02\x02\x02\u031A\u031B\x07\x99\x02\x02\u031Bw\x03\x02\x02" +
    "\x02\u031C\u031D\x07\x15\x02\x02\u031D\u0325\x07\x17\x02\x02\u031E\u0320" +
    "\x07\x04\x02\x02\u031F\u031E\x03\x02\x02\x02\u0320\u0323\x03\x02\x02\x02" +
    "\u0321\u031F\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0324\x03" +
    "\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0324\u0326\x05z>\x02\u0325\u0321" +
    "\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u033B\x03\x02\x02\x02" +
    "\u0327\u0328\x07\x15\x02\x02\u0328\u032D\x05\xA2R\x02\u0329\u032C\x07" +
    "\x18\x02\x02\u032A\u032C\x05\xAAV\x02\u032B\u0329\x03\x02\x02\x02\u032B" +
    "\u032A\x03\x02\x02\x02\u032C\u032F\x03\x02\x02\x02\u032D\u032B\x03\x02" +
    "\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E\u0330\x03\x02\x02\x02\u032F" +
    "\u032D\x03\x02\x02\x02\u0330\u0338\x07\x17\x02\x02\u0331\u0333\x07\x04" +
    "\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334" +
    "\u0332\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0337\x03\x02" +
    "\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337\u0339\x05z>\x02\u0338\u0334" +
    "\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02" +
    "\u033A\u031C\x03\x02\x02\x02\u033A\u0327\x03\x02\x02\x02\u033By\x03\x02" +
    "\x02\x02\u033C\u033D\x07\x15\x02\x02\u033D\u0342\x05\xA2R\x02\u033E\u0341" +
    "\x07\x18\x02\x02\u033F\u0341\x05\xAAV\x02\u0340\u033E\x03\x02\x02\x02" +
    "\u0340\u033F\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340\x03" +
    "\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0345\x03\x02\x02\x02\u0344" +
    "\u0342\x03\x02\x02\x02\u0345\u0346\x07\x17\x02\x02\u0346{\x03\x02\x02" +
    "\x02\u0347\u0349\x07\n\x02\x02\u0348\u034A\x05\xA2R\x02\u0349\u0348\x03" +
    "\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
    "\u0352\x07\x17\x02\x02\u034C\u034E\x07\v\x02\x02\u034D\u034F\x05\xA2R" +
    "\x02\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0350" +
    "\x03\x02\x02\x02\u0350\u0352\x07\x17\x02\x02\u0351\u0347\x03\x02\x02\x02" +
    "\u0351\u034C\x03\x02\x02\x02\u0352}\x03\x02\x02\x02\u0353\u035B\x07>\x02" +
    "\x02\u0354\u035B\x07<\x02\x02\u0355\u0357\x07=\x02\x02\u0356\u0358\x07" +
    "2\x02\x02\u0357\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358" +
    "\u0359\x03\x02\x02\x02\u0359\u035B\x07\x02\x02\x03\u035A\u0353\x03\x02" +
    "\x02\x02\u035A\u0354\x03\x02\x02\x02\u035A\u0355\x03\x02\x02\x02\u035B" +
    "\x7F\x03\x02\x02\x02\u035C\u035E\x07i\x02\x02\u035D\u035F\x05\xA2R\x02" +
    "\u035E\u035D\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0375\x03" +
    "\x02\x02\x02\u0360\u036A\x05\xA2R\x02\u0361\u0365\x070\x02\x02\u0362\u0364" +
    "\x07\x04\x02\x02\u0363\u0362\x03\x02\x02\x02\u0364\u0367\x03\x02\x02\x02" +
    "\u0365\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0369\x03" +
    "\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u0361\x03\x02\x02\x02\u0369" +
    "\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02" +
    "\x02\x02\u036B\u0370\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D" +
    "\u036F\x070\x02\x02\u036E\u036D\x03\x02\x02\x02\u036F\u0372\x03\x02\x02" +
    "\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0374" +
    "\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373\u0360\x03\x02\x02\x02" +
    "\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0375\u0376\x03" +
    "\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0378" +
    "\u0384\x07\x17\x02\x02\u0379\u037F\x07i\x02\x02\u037A\u037E\x05\xA2R\x02" +
    "\u037B\u037E\x070\x02\x02\u037C\u037E\x07\x04\x02\x02\u037D\u037A\x03" +
    "\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037D\u037C\x03\x02\x02\x02\u037E" +
    "\u0381\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02" +
    "\x02\x02\u0380\u0382\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382" +
    "\u0384\x07\x02\x02\x03\u0383\u035C\x03\x02\x02\x02\u0383\u0379\x03\x02" +
    "\x02\x02\u0384\x81\x03\x02\x02\x02\u0385\u038A\x076\x02\x02\u0386\u038B" +
    "\x05\xA2R\x02\u0387\u038B\x07\x18\x02\x02\u0388\u038B\x07\x99\x02\x02" +
    "\u0389\u038B\x070\x02\x02\u038A\u0386\x03\x02\x02\x02\u038A\u0387\x03" +
    "\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u0389\x03\x02\x02\x02\u038B" +
    "\u038C\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D\x03\x02" +
    "\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u039C\x07\x17\x02\x02\u038F" +
    "\u0397\x076\x02\x02\u0390\u0396\x05\xA2R\x02\u0391\u0396\x07\x18\x02\x02" +
    "\u0392\u0396\x07\x99\x02\x02\u0393\u0396\x070\x02\x02\u0394\u0396\x07" +
    "\x04\x02\x02\u0395\u0390\x03\x02\x02\x02\u0395\u0391\x03\x02\x02\x02\u0395" +
    "\u0392\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0395\u0394\x03\x02" +
    "\x02\x02\u0396\u0399\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397" +
    "\u0398\x03\x02\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399\u0397\x03\x02" +
    "\x02\x02\u039A\u039C\x07\x02\x02\x03\u039B\u0385\x03\x02\x02\x02\u039B" +
    "\u038F\x03\x02\x02\x02\u039C\x83\x03\x02\x02\x02\u039D\u039E\x075\x02" +
    "\x02\u039E\u039F\x05\xA2R\x02\u039F\u03A0\x07\x17\x02\x02\u03A0\x85\x03" +
    "\x02\x02\x02\u03A1\u03A5\x07P\x02\x02\u03A2\u03A6\x05\xA2R\x02\u03A3\u03A6" +
    "\x07\x18\x02\x02\u03A4\u03A6\x070\x02\x02\u03A5\u03A2\x03\x02\x02\x02" +
    "\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A7\x03" +
    "\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8" +
    "\u03A9\x03\x02\x02\x02\u03A9\u03AB\x07\x17\x02\x02\u03AA\u03AC\x05\x88" +
    "E\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\x87" +
    "\x03\x02\x02\x02\u03AD\u03B1\x07P\x02\x02\u03AE\u03B2\x05\xA2R\x02\u03AF" +
    "\u03B2\x07\x18\x02\x02\u03B0\u03B2\x070\x02\x02\u03B1\u03AE\x03\x02\x02" +
    "\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B3" +
    "\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02" +
    "\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B6\x07\x17\x02\x02\u03B6\x89\x03" +
    "\x02\x02\x02\u03B7\u03BB\x07\x0E\x02\x02\u03B8\u03BA\x070\x02\x02\u03B9" +
    "\u03B8\x03\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02" +
    "\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD" +
    "\u03BB\x03\x02\x02\x02\u03BE\u03C0\x05\xA2R\x02\u03BF\u03BE\x03\x02\x02" +
    "\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03D6\x03\x02\x02\x02\u03C1\u03CB" +
    "\x05\xA2R\x02\u03C2\u03C6\x070\x02\x02\u03C3\u03C5\x07\x04\x02\x02\u03C4" +
    "\u03C3\x03\x02\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02" +
    "\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03CA\x03\x02\x02\x02\u03C8" +
    "\u03C6\x03\x02\x02\x02\u03C9\u03C2\x03\x02\x02\x02\u03CA\u03CD\x03\x02" +
    "\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC" +
    "\u03D1\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03D0\x070\x02" +
    "\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF" +
    "\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02" +
    "\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03C1\x03\x02\x02\x02\u03D5\u03D8\x03" +
    "\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7" +
    "\u03D9\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9\u03E6\x07\x17" +
    "\x02\x02\u03DA\u03DE\x07\x0E\x02\x02\u03DB\u03DD\x070\x02\x02\u03DC\u03DB" +
    "\x03\x02\x02\x02\u03DD\u03E0\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02" +
    "\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03" +
    "\x02\x02\x02\u03E1\u03E3\x05\xA2R\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2" +
    "\u03E3\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6\x07\x02" +
    "\x02\x03\u03E5\u03B7\x03\x02\x02\x02\u03E5\u03DA\x03\x02\x02\x02\u03E6" +
    "\x8B\x03\x02\x02\x02\u03E7\u03E9\x07\x0F\x02\x02\u03E8\u03EA\n\x10\x02" +
    "\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03E9" +
    "\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02" +
    "\u03ED\u03EE\x07\x17\x02\x02\u03EE\x8D\x03\x02\x02\x02\u03EF\u03F2\x07" +
    "\x16\x02\x02\u03F0\u03F3\x05\xA2R\x02\u03F1\u03F3\x070\x02\x02\u03F2\u03F0" +
    "\x03\x02\x02\x02\u03F2\u03F1\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02" +
    "\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F6\x03" +
    "\x02\x02\x02\u03F6\u03FC\x07\x17\x02\x02\u03F7\u03F8\x07\x16\x02\x02\u03F8" +
    "\u03F9\x05\xA2R\x02\u03F9\u03FA\x07\x02\x02\x03\u03FA\u03FC\x03\x02\x02" +
    "\x02\u03FB\u03EF\x03\x02\x02\x02\u03FB\u03F7\x03\x02\x02\x02\u03FC\x8F" +
    "\x03\x02\x02\x02\u03FD\u03FE\x07B\x02\x02\u03FE\u03FF\x05\xA2R\x02\u03FF" +
    "\u0400\x07\x17\x02\x02\u0400\u0406\x03\x02\x02\x02\u0401\u0402\x07C\x02" +
    "\x02\u0402\u0403\x05\xA2R\x02\u0403\u0404\x07\x17\x02\x02\u0404\u0406" +
    "\x03\x02\x02\x02\u0405\u03FD\x03\x02\x02\x02\u0405\u0401\x03\x02\x02\x02" +
    "\u0406\x91\x03\x02\x02\x02\u0407\u0408\x079\x02\x02\u0408\u0409\x07\x18" +
    "\x02\x02\u0409\u040A\x07.\x02\x02\u040A\u0411\x07\x17\x02\x02\u040B\u040C" +
    "\x079\x02\x02\u040C\u040D\x07\x18\x02\x02\u040D\u040E\x05\xA2R\x02\u040E" +
    "\u040F\x07\x17\x02\x02\u040F\u0411\x03\x02\x02\x02\u0410\u0407\x03\x02" +
    "\x02\x02\u0410\u040B\x03\x02\x02\x02\u0411\x93\x03\x02\x02\x02\u0412\u0413" +
    "\x07N\x02\x02\u0413\u0414\x05\xA2R\x02\u0414\u0415\x07\x17\x02\x02\u0415" +
    "\x95\x03\x02\x02\x02\u0416\u0417\x07O\x02\x02\u0417\u0418\x05\xA2R\x02" +
    "\u0418\u0419\x07\x17\x02\x02\u0419\x97\x03\x02\x02\x02\u041A\u0424\x05" +
    "\x9AN\x02\u041B\u041D\x070\x02\x02\u041C\u041B\x03\x02\x02\x02\u041D\u0420" +
    "\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02" +
    "\u041F\u0421\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0423\x05" +
    "\x9AN\x02\u0422\u041E\x03\x02\x02\x02\u0423\u0426\x03\x02\x02\x02\u0424" +
    "\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\x99\x03\x02\x02" +
    "\x02\u0426";
sequenceParser._serializedATNSegment2 = "\u0424\x03\x02\x02\x02\u0427\u0428\x07\x10\x02\x02\u0428\u0429\x05\xA2" +
    "R\x02\u0429\u042A\t\x11\x02\x02\u042A\u0430\x05\xA2R\x02\u042B\u042F\x07" +
    "0\x02\x02\u042C\u042F\x07\x18\x02\x02\u042D\u042F\x05\xA2R\x02\u042E\u042B" +
    "\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042D\x03\x02\x02\x02" +
    "\u042F\u0432\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03" +
    "\x02\x02\x02\u0431\u0433\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433" +
    "\u0434\x07\x17\x02\x02\u0434\u043E\x03\x02\x02\x02\u0435\u0439\x07L\x02" +
    "\x02\u0436\u0438\v\x02\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438\u043B" +
    "\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02" +
    "\u043A\u043C\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043E\x07" +
    "\x17\x02\x02\u043D\u0427\x03\x02\x02\x02\u043D\u0435\x03\x02\x02\x02\u043E" +
    "\x9B\x03\x02\x02\x02\u043F\u0443\x07\x07\x02\x02\u0440\u0444\x05\xA2R" +
    "\x02\u0441\u0444\x07\x18\x02\x02\u0442\u0444\x070\x02\x02\u0443\u0440" +
    "\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0442\x03\x02\x02\x02" +
    "\u0444\u0445\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0446\x03" +
    "\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u0453\x07\x17\x02\x02\u0448" +
    "\u044E\x07\x07\x02\x02\u0449\u044D\x05\xA2R\x02\u044A\u044D\x07\x18\x02" +
    "\x02\u044B\u044D\x070\x02\x02\u044C\u0449\x03\x02\x02\x02\u044C\u044A" +
    "\x03\x02\x02\x02\u044C\u044B\x03\x02\x02\x02\u044D\u0450\x03\x02\x02\x02" +
    "\u044E\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0451\x03" +
    "\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0453\x07\x02\x02\x03\u0452" +
    "\u043F\x03\x02\x02\x02\u0452\u0448\x03\x02\x02\x02\u0453\x9D\x03\x02\x02" +
    "\x02\u0454\u0456\x07\f\x02\x02\u0455\u0457\x05\xA2R\x02\u0456\u0455\x03" +
    "\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458" +
    "\u0459\x07\x17\x02\x02\u0459\x9F\x03\x02\x02\x02\u045A\u045B\x07\x1A\x02" +
    "\x02\u045B\xA1\x03\x02\x02\x02\u045C\u0463\x07/\x02\x02\u045D\u045F\x07" +
    "\x04\x02\x02\u045E\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460" +
    "\u045E\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0462\x03\x02" +
    "\x02\x02\u0462\u0464\x07.\x02\x02\u0463\u045E\x03\x02\x02\x02\u0463\u0464" +
    "\x03\x02\x02\x02\u0464\u048A\x03\x02\x02\x02\u0465\u046C\x05\xAAV\x02" +
    "\u0466\u0468\x07\x04\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\u0469\x03" +
    "\x02\x02\x02\u0469\u0467\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A" +
    "\u046B\x03\x02\x02\x02\u046B\u046D\x07.\x02\x02\u046C\u0467\x03\x02\x02" +
    "\x02\u046C\u046D\x03\x02\x02\x02\u046D\u048A\x03\x02\x02\x02\u046E\u046F" +
    "\x07\x13\x02\x02\u046F\u0470\x05\xA2R\x02\u0470\u0471\x07\x17\x02\x02" +
    "\u0471\u048A\x03\x02\x02\x02\u0472\u048A\x07.\x02\x02\u0473\u0475\x07" +
    "\x04\x02\x02\u0474\u0473\x03\x02\x02\x02\u0475\u0478\x03\x02\x02\x02\u0476" +
    "\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0479\x03\x02" +
    "\x02\x02\u0478\u0476\x03\x02\x02\x02\u0479\u047D\x07\x18\x02\x02\u047A" +
    "\u047C\x07\x04\x02\x02\u047B\u047A\x03\x02\x02\x02\u047C\u047F\x03\x02" +
    "\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E" +
    "\u048A\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0484\x07\x19" +
    "\x02\x02\u0481\u0483\x07\x04\x02\x02\u0482\u0481\x03\x02\x02\x02\u0483" +
    "\u0486\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0485\x03\x02" +
    "\x02\x02\u0485\u048A\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02\u0487" +
    "\u048A\x07\"\x02\x02\u0488\u048A\x07\x99\x02\x02\u0489\u045C\x03\x02\x02" +
    "\x02\u0489\u0465\x03\x02\x02\x02\u0489\u046E\x03\x02\x02\x02\u0489\u0472" +
    "\x03\x02\x02\x02\u0489\u0476\x03\x02\x02\x02\u0489\u0480\x03\x02\x02\x02" +
    "\u0489\u0487\x03\x02\x02\x02\u0489\u0488\x03\x02\x02\x02\u048A\xA3\x03" +
    "\x02\x02\x02\u048B\u048C\x07(\x02\x02\u048C\xA5\x03\x02\x02\x02\u048D" +
    "\u048E\x07\x17\x02\x02\u048E\xA7\x03\x02\x02\x02\u048F\u0490\t\x12\x02" +
    "\x02\u0490\xA9\x03\x02\x02\x02\u0491\u04AB\x072\x02\x02\u0492\u04AB\x07" +
    "1\x02\x02\u0493\u04AB\x073\x02\x02\u0494\u04AB\x07\x9A\x02\x02\u0495\u04AB" +
    "\x07\x19\x02\x02\u0496\u0497\x07\x1D\x02\x02\u0497\u04AB\n\x13\x02\x02" +
    "\u0498\u0499\x07\x1E\x02\x02\u0499\u04AB\n\x14\x02\x02\u049A\u04AB\x07" +
    " \x02\x02\u049B\u04AB\x07\x1F\x02\x02\u049C\u04AB\x07X\x02\x02\u049D\u04AB" +
    "\x07Y\x02\x02\u049E\u04AB\x07n\x02\x02\u049F\u04AB\x07[\x02\x02\u04A0" +
    "\u04AB\x07T\x02\x02\u04A1\u04AB\x07S\x02\x02\u04A2\u04AB\x07W\x02\x02" +
    "\u04A3\u04AB\x07Z\x02\x02\u04A4\u04AB\x07m\x02\x02\u04A5\u04AB\x07j\x02" +
    "\x02\u04A6\u04AB\x07k\x02\x02\u04A7\u04AB\x07n\x02\x02\u04A8\u04AB\x07" +
    "\x84\x02\x02\u04A9\u04AB\x07\x85\x02\x02\u04AA\u0491\x03\x02\x02\x02\u04AA" +
    "\u0492\x03\x02\x02\x02\u04AA\u0493\x03\x02\x02\x02\u04AA\u0494\x03\x02" +
    "\x02\x02\u04AA\u0495\x03\x02\x02\x02\u04AA\u0496\x03\x02\x02\x02\u04AA" +
    "\u0498\x03\x02\x02\x02\u04AA\u049A\x03\x02\x02\x02\u04AA\u049B\x03\x02" +
    "\x02\x02\u04AA\u049C\x03\x02\x02\x02\u04AA\u049D\x03\x02\x02\x02\u04AA" +
    "\u049E\x03\x02\x02\x02\u04AA\u049F\x03\x02\x02\x02\u04AA\u04A0\x03\x02" +
    "\x02\x02\u04AA\u04A1\x03\x02\x02\x02\u04AA\u04A2\x03\x02\x02\x02\u04AA" +
    "\u04A3\x03\x02\x02\x02\u04AA\u04A4\x03\x02\x02\x02\u04AA\u04A5\x03\x02" +
    "\x02\x02\u04AA\u04A6\x03\x02\x02\x02\u04AA\u04A7\x03\x02\x02\x02\u04AA" +
    "\u04A8\x03\x02\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AB\u04AC\x03\x02" +
    "\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD" +
    "\xAB\x03\x02\x02\x02\u04AE\u04AF\x07\x04\x02\x02\u04AF\xAD\x03\x02\x02" +
    "\x02\xA4\xB2\xB8\xBD\xC2\xCB\xD3\xD9\xDF\xE8\xEE\xF4\xFA\xFD\u0101\u0105" +
    "\u0112\u0118\u011E\u0123\u0129\u012F\u0132\u013A\u0143\u0149\u0150\u0157" +
    "\u015C\u015F\u0164\u016A\u016F\u018B\u0193\u0195\u019C\u01A1\u01A7\u01AD" +
    "\u01B2\u01B8\u01BD\u01C3\u01CD\u01D6\u01DC\u01DE\u01EC\u01F3\u01F8\u01FC" +
    "\u0200\u0203\u0208\u021F\u0224\u0229\u022B\u0235\u023F\u0249\u024F\u0256" +
    "\u025C\u0264\u026E\u0279\u027F\u0284\u028B\u0294\u0298\u029C\u029F\u02AE" +
    "\u02B2\u02C1\u02C5\u02CB\u02D6\u02DB\u02E0\u02E2\u02E7\u02EC\u02F1\u02F3" +
    "\u02F8\u02FE\u0303\u0305\u0310\u0314\u0321\u0325\u032B\u032D\u0334\u0338" +
    "\u033A\u0340\u0342\u0349\u034E\u0351\u0357\u035A\u035E\u0365\u036A\u0370" +
    "\u0375\u037D\u037F\u0383\u038A\u038C\u0395\u0397\u039B\u03A5\u03A7\u03AB" +
    "\u03B1\u03B3\u03BB\u03BF\u03C6\u03CB\u03D1\u03D6\u03DE\u03E2\u03E5\u03EB" +
    "\u03F2\u03F4\u03FB\u0405\u0410\u041E\u0424\u042E\u0430\u0439\u043D\u0443" +
    "\u0445\u044C\u044E\u0452\u0456\u0460\u0463\u0469\u046C\u0476\u047D\u0484" +
    "\u0489\u04AA\u04AC";
sequenceParser._serializedATN = Utils.join([
    sequenceParser._serializedATNSegment0,
    sequenceParser._serializedATNSegment1,
    sequenceParser._serializedATNSegment2,
], "");
class BitmarkContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(sequenceParser.EOF, 0); }
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bitmark; }
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
        return this.getRuleContext(0, BitContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bitmark_; }
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
    sequence() {
        return this.tryGetRuleContext(0, SequenceContext);
    }
    menu_3_course() {
        return this.tryGetRuleContext(0, Menu_3_courseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bit; }
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
class SequenceContext extends ParserRuleContext_1.ParserRuleContext {
    BitSequence() { return this.getToken(sequenceParser.BitSequence, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.HSPL);
        }
        else {
            return this.getToken(sequenceParser.HSPL, i);
        }
    }
    seqstr(i) {
        if (i === undefined) {
            return this.getRuleContexts(SeqstrContext);
        }
        else {
            return this.getRuleContext(i, SeqstrContext);
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
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    minusminus(i) {
        if (i === undefined) {
            return this.getRuleContexts(MinusminusContext);
        }
        else {
            return this.getRuleContext(i, MinusminusContext);
        }
    }
    footer() {
        return this.tryGetRuleContext(0, FooterContext);
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
    get ruleIndex() { return sequenceParser.RULE_sequence; }
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
exports.SequenceContext = SequenceContext;
class SeqstrContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_seqstr; }
    // @Override
    enterRule(listener) {
        if (listener.enterSeqstr) {
            listener.enterSeqstr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSeqstr) {
            listener.exitSeqstr(this);
        }
    }
}
exports.SeqstrContext = SeqstrContext;
class MinusminusContext extends ParserRuleContext_1.ParserRuleContext {
    DMM() { return this.getToken(sequenceParser.DMM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_minusminus; }
    // @Override
    enterRule(listener) {
        if (listener.enterMinusminus) {
            listener.enterMinusminus(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMinusminus) {
            listener.exitMinusminus(this);
        }
    }
}
exports.MinusminusContext = MinusminusContext;
class Menu_3_courseContext extends ParserRuleContext_1.ParserRuleContext {
    BitMenu3Course() { return this.getToken(sequenceParser.BitMenu3Course, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    menu_list() {
        return this.getRuleContext(0, Menu_listContext);
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    footer() {
        return this.tryGetRuleContext(0, FooterContext);
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
    get ruleIndex() { return sequenceParser.RULE_menu_3_course; }
    // @Override
    enterRule(listener) {
        if (listener.enterMenu_3_course) {
            listener.enterMenu_3_course(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMenu_3_course) {
            listener.exitMenu_3_course(this);
        }
    }
}
exports.Menu_3_courseContext = Menu_3_courseContext;
class Menu_listContext extends ParserRuleContext_1.ParserRuleContext {
    hspl_slot() {
        return this.getRuleContext(0, Hspl_slotContext);
    }
    menu_text(i) {
        if (i === undefined) {
            return this.getRuleContexts(Menu_textContext);
        }
        else {
            return this.getRuleContext(i, Menu_textContext);
        }
    }
    HSPL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.HSPL);
        }
        else {
            return this.getToken(sequenceParser.HSPL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_menu_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterMenu_list) {
            listener.enterMenu_list(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMenu_list) {
            listener.exitMenu_list(this);
        }
    }
}
exports.Menu_listContext = Menu_listContext;
class Hspl_slotContext extends ParserRuleContext_1.ParserRuleContext {
    HSPL() { return this.getToken(sequenceParser.HSPL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_hspl_slot; }
    // @Override
    enterRule(listener) {
        if (listener.enterHspl_slot) {
            listener.enterHspl_slot(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHspl_slot) {
            listener.exitHspl_slot(this);
        }
    }
}
exports.Hspl_slotContext = Hspl_slotContext;
class Menu_textContext extends ParserRuleContext_1.ParserRuleContext {
    melem() {
        return this.tryGetRuleContext(0, MelemContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_menu_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterMenu_text) {
            listener.enterMenu_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMenu_text) {
            listener.exitMenu_text(this);
        }
    }
}
exports.Menu_textContext = Menu_textContext;
class MelemContext extends ParserRuleContext_1.ParserRuleContext {
    mtex(i) {
        if (i === undefined) {
            return this.getRuleContexts(MtexContext);
        }
        else {
            return this.getRuleContext(i, MtexContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_melem; }
    // @Override
    enterRule(listener) {
        if (listener.enterMelem) {
            listener.enterMelem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMelem) {
            listener.exitMelem(this);
        }
    }
}
exports.MelemContext = MelemContext;
class MtexContext extends ParserRuleContext_1.ParserRuleContext {
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    instruction() {
        return this.tryGetRuleContext(0, InstructionContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    hint() {
        return this.tryGetRuleContext(0, HintContext);
    }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_mtex; }
    // @Override
    enterRule(listener) {
        if (listener.enterMtex) {
            listener.enterMtex(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMtex) {
            listener.exitMtex(this);
        }
    }
}
exports.MtexContext = MtexContext;
class FooterContext extends ParserRuleContext_1.ParserRuleContext {
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_footer; }
    // @Override
    enterRule(listener) {
        if (listener.enterFooter) {
            listener.enterFooter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFooter) {
            listener.exitFooter(this);
        }
    }
}
exports.FooterContext = FooterContext;
class BitElemContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(sequenceParser.LIST_LINE, 0); }
    NOTBITMARK() { return this.tryGetToken(sequenceParser.NOTBITMARK, 0); }
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
    dollarans() {
        return this.tryGetRuleContext(0, DollaransContext);
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
    get ruleIndex() { return sequenceParser.RULE_bitElem; }
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
    get ruleIndex() { return sequenceParser.RULE_gap; }
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
    OPU() { return this.getToken(sequenceParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(sequenceParser.STRING, 0); }
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
    get ruleIndex() { return sequenceParser.RULE_single_gap; }
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
    OPP() { return this.getToken(sequenceParser.OPP, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
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
    get ruleIndex() { return sequenceParser.RULE_choice_plus; }
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
    OPM() { return this.getToken(sequenceParser.OPM, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
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
    get ruleIndex() { return sequenceParser.RULE_choice_minus; }
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
    OPR() { return this.getToken(sequenceParser.OPR, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
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
    get ruleIndex() { return sequenceParser.RULE_choice_star; }
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
class ResourceContext extends ParserRuleContext_1.ParserRuleContext {
    bitElem() {
        return this.getRuleContext(0, BitElemContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_resource; }
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
    OPBUL() { return this.getToken(sequenceParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bullet_item; }
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
    AtPoints() { return this.getToken(sequenceParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(sequenceParser.NUMERIC, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_atpoint; }
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
            return this.getTokens(sequenceParser.ColonText);
        }
        else {
            return this.getToken(sequenceParser.ColonText, i);
        }
    }
    ColonJson(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.ColonJson);
        }
        else {
            return this.getToken(sequenceParser.ColonJson, i);
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
    get ruleIndex() { return sequenceParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(sequenceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(sequenceParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(sequenceParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(sequenceParser.Placeholder, 0); }
    ColonJson() { return this.tryGetToken(sequenceParser.ColonJson, 0); }
    AmpArticle() { return this.tryGetToken(sequenceParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(sequenceParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(sequenceParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(sequenceParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(sequenceParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(sequenceParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(sequenceParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(sequenceParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(sequenceParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(sequenceParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(sequenceParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(sequenceParser.AmpStillImageFilmLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(sequenceParser.AmpVideoEmbed, 0); }
    AmpAudioEmbed() { return this.tryGetToken(sequenceParser.AmpAudioEmbed, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(sequenceParser.AmpDocumentEmbed, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(sequenceParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(sequenceParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_resource_format_extra; }
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
    BitmarkMinus() { return this.tryGetToken(sequenceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(sequenceParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(sequenceParser.ColonText, 0); }
    ColonJson() { return this.tryGetToken(sequenceParser.ColonJson, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_format2; }
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
    AmpImage() { return this.tryGetToken(sequenceParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(sequenceParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(sequenceParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(sequenceParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(sequenceParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(sequenceParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(sequenceParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(sequenceParser.AmpVideoLink, 0); }
    AmpVideoEmbed() { return this.tryGetToken(sequenceParser.AmpVideoEmbed, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    Video_type() { return this.tryGetToken(sequenceParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(sequenceParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(sequenceParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(sequenceParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(sequenceParser.AmpDocumentLink, 0); }
    AmpDocumentEmbed() { return this.tryGetToken(sequenceParser.AmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(sequenceParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(sequenceParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(sequenceParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(sequenceParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(sequenceParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(sequenceParser.AmpStillImageFilmLink, 0); }
    AmpStillImageFilmEmbed() { return this.tryGetToken(sequenceParser.AmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(sequenceParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(sequenceParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(sequenceParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(sequenceParser.OpAmpDocument, 0); }
    OpAmpDocumentEmbed() { return this.tryGetToken(sequenceParser.OpAmpDocumentEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(sequenceParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(sequenceParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(sequenceParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(sequenceParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(sequenceParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    Video_type() { return this.tryGetToken(sequenceParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(sequenceParser.OpAmpVideoLink, 0); }
    OpAmpVideoEmbed() { return this.tryGetToken(sequenceParser.OpAmpVideoEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(sequenceParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(sequenceParser.OpAmpStillImageFilmLink, 0); }
    OpAmpStillImageFilmEmbed() { return this.tryGetToken(sequenceParser.OpAmpStillImageFilmEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
    ArticleText() { return this.tryGetToken(sequenceParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_articlebit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.CL);
        }
        else {
            return this.getToken(sequenceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_documentbit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.CL);
        }
        else {
            return this.getToken(sequenceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_websitebit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.CL);
        }
        else {
            return this.getToken(sequenceParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_appbit; }
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
    get ruleIndex() { return sequenceParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_stillimg_one; }
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
    get ruleIndex() { return sequenceParser.RULE_videobit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.CL);
        }
        else {
            return this.getToken(sequenceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(sequenceParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(sequenceParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_imagebit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(sequenceParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(sequenceParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(sequenceParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(sequenceParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(sequenceParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(sequenceParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(sequenceParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(sequenceParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(sequenceParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(sequenceParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(sequenceParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(sequenceParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(sequenceParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(sequenceParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(sequenceParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(sequenceParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(sequenceParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(sequenceParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_image_chained4match; }
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
    get ruleIndex() { return sequenceParser.RULE_audiobit; }
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
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.CL);
        }
        else {
            return this.getToken(sequenceParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(sequenceParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(sequenceParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(sequenceParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(sequenceParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(sequenceParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(sequenceParser.OpAmpAudioLink, 0); }
    OpAmpAudioEmbed() { return this.tryGetToken(sequenceParser.OpAmpAudioEmbed, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    OPA() { return this.tryGetToken(sequenceParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(sequenceParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(sequenceParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(sequenceParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(sequenceParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(sequenceParser.OpAtCaption, 0); }
    OpAtSearch() { return this.tryGetToken(sequenceParser.OpAtSearch, 0); }
    OpAtLicense() { return this.tryGetToken(sequenceParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(sequenceParser.TEL, 0); }
    PLUS() { return this.getToken(sequenceParser.PLUS, 0); }
    NUMERIC() { return this.getToken(sequenceParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_telephone; }
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
    URL() { return this.getToken(sequenceParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_url; }
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
    OPC() { return this.getToken(sequenceParser.OPC, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
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
    get ruleIndex() { return sequenceParser.RULE_item; }
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
    OPC() { return this.getToken(sequenceParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
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
    get ruleIndex() { return sequenceParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(sequenceParser.OPRANGLES, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(sequenceParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(sequenceParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(sequenceParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(sequenceParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(sequenceParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(sequenceParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_example; }
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
    BracEnclose() { return this.getToken(sequenceParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(sequenceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(sequenceParser.AtReference, 0); }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
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
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.URL);
        }
        else {
            return this.getToken(sequenceParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(sequenceParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_reference; }
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
    AtProgress() { return this.getToken(sequenceParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_progress; }
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
    AtDate() { return this.getToken(sequenceParser.AtDate, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
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
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(sequenceParser.AtDate, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
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
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(sequenceParser.OPB, 0); }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
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
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(sequenceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_instruction; }
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
    OPQ() { return this.getToken(sequenceParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.CL);
        }
        else {
            return this.getToken(sequenceParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_hint; }
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
    OPHASH() { return this.getToken(sequenceParser.OPHASH, 0); }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(sequenceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(sequenceParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(sequenceParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(sequenceParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(sequenceParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(sequenceParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(sequenceParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_isinfoonly; }
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
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(sequenceParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(sequenceParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(sequenceParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(sequenceParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
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
            return this.getTokens(sequenceParser.COLON);
        }
        else {
            return this.getToken(sequenceParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NL);
        }
        else {
            return this.getToken(sequenceParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(sequenceParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(sequenceParser.OPDANGLE, 0); }
    CL() { return this.getToken(sequenceParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_anchor; }
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
    DBLCOLON() { return this.getToken(sequenceParser.DBLCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_dcolon; }
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
class S_and_wContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.tryGetToken(sequenceParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(sequenceParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.S);
        }
        else {
            return this.getToken(sequenceParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(sequenceParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    AMP() { return this.tryGetToken(sequenceParser.AMP, 0); }
    DBLEQ() { return this.tryGetToken(sequenceParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(sequenceParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_s_and_w; }
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
    DCANY() { return this.getToken(sequenceParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_dclines; }
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
class ClnspContext extends ParserRuleContext_1.ParserRuleContext {
    CL() { return this.getToken(sequenceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(sequenceParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(sequenceParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_sspl; }
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
            return this.getTokens(sequenceParser.SENTENCE);
        }
        else {
            return this.getToken(sequenceParser.SENTENCE, i);
        }
    }
    NOTBITMARK(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.NOTBITMARK);
        }
        else {
            return this.getToken(sequenceParser.NOTBITMARK, i);
        }
    }
    BARSTRING(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.BARSTRING);
        }
        else {
            return this.getToken(sequenceParser.BARSTRING, i);
        }
    }
    LIST_LINE(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.LIST_LINE);
        }
        else {
            return this.getToken(sequenceParser.LIST_LINE, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AMP);
        }
        else {
            return this.getToken(sequenceParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.Greater);
        }
        else {
            return this.getToken(sequenceParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.Less);
        }
        else {
            return this.getToken(sequenceParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.RightArrow);
        }
        else {
            return this.getToken(sequenceParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.RightAngle);
        }
        else {
            return this.getToken(sequenceParser.RightAngle, i);
        }
    }
    AmpArticle(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpArticle);
        }
        else {
            return this.getToken(sequenceParser.AmpArticle, i);
        }
    }
    AmpDocument(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpDocument);
        }
        else {
            return this.getToken(sequenceParser.AmpDocument, i);
        }
    }
    AmpDocumentLink(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpDocumentLink);
        }
        else {
            return this.getToken(sequenceParser.AmpDocumentLink, i);
        }
    }
    AmpWebsite(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpWebsite);
        }
        else {
            return this.getToken(sequenceParser.AmpWebsite, i);
        }
    }
    AmpImage(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpImage);
        }
        else {
            return this.getToken(sequenceParser.AmpImage, i);
        }
    }
    AmpAudio(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpAudio);
        }
        else {
            return this.getToken(sequenceParser.AmpAudio, i);
        }
    }
    AmpVideo(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpVideo);
        }
        else {
            return this.getToken(sequenceParser.AmpVideo, i);
        }
    }
    AmpApp(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpApp);
        }
        else {
            return this.getToken(sequenceParser.AmpApp, i);
        }
    }
    AmpArticleLink(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpArticleLink);
        }
        else {
            return this.getToken(sequenceParser.AmpArticleLink, i);
        }
    }
    AmpAudioLink(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpAudioLink);
        }
        else {
            return this.getToken(sequenceParser.AmpAudioLink, i);
        }
    }
    AmpImageLink(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.AmpImageLink);
        }
        else {
            return this.getToken(sequenceParser.AmpImageLink, i);
        }
    }
    BitmarkMinus(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.BitmarkMinus);
        }
        else {
            return this.getToken(sequenceParser.BitmarkMinus, i);
        }
    }
    BitmarkPlus(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.BitmarkPlus);
        }
        else {
            return this.getToken(sequenceParser.BitmarkPlus, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_words; }
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
    S() { return this.getToken(sequenceParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_sp; }
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
