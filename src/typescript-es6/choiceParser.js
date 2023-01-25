// Generated from ./Choice/choiceParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
let choiceParser = /** @class */ (() => {
    class choiceParser extends Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator(choiceParser._ATN, this);
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
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, choiceParser.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 213;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 200;
                                this.bitmark_();
                                this.state = 210;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 204;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === choiceParser.S) {
                                                    {
                                                        {
                                                            this.state = 201;
                                                            this.match(choiceParser.S);
                                                        }
                                                    }
                                                    this.state = 206;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 207;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 212;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 215;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.BitMultichoice1) | (1 << choiceParser.BitMultichoice) | (1 << choiceParser.BitMultiresp1) | (1 << choiceParser.BitMultiresp) | (1 << choiceParser.BitMultichoicetext) | (1 << choiceParser.BitHighlighttext))) !== 0));
                    this.state = 220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === choiceParser.NL) {
                        {
                            {
                                this.state = 217;
                                this.match(choiceParser.NL);
                            }
                        }
                        this.state = 222;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 223;
                    this.match(choiceParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 225;
                    this.multi_choices();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 233;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.BitMultichoice:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 227;
                            this.multiple_choice();
                        }
                        break;
                    case choiceParser.BitMultichoice1:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 228;
                            this.multiple_choice_1();
                        }
                        break;
                    case choiceParser.BitMultiresp:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 229;
                            this.multiple_response();
                        }
                        break;
                    case choiceParser.BitMultiresp1:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 230;
                            this.multiple_response_1();
                        }
                        break;
                    case choiceParser.BitMultichoicetext:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 231;
                            this.multiple_choice_text();
                        }
                        break;
                    case choiceParser.BitHighlighttext:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 232;
                            this.highlight_text();
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
        multiple_choice() {
            let _localctx = new Multiple_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 6, choiceParser.RULE_multiple_choice);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 235;
                    this.match(choiceParser.BitMultichoice);
                    this.state = 236;
                    this.format();
                    this.state = 237;
                    this.match(choiceParser.CL);
                    this.state = 239;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 238;
                                        this.match(choiceParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 241;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.DCANY - 35)) | (1 << (choiceParser.ArticleText - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.AtReference - 35)) | (1 << (choiceParser.AtExampleWithStr - 35)) | (1 << (choiceParser.AtExamplecol - 35)) | (1 << (choiceParser.AtExamplecl - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (choiceParser.AtLabeltrue - 67)) | (1 << (choiceParser.AtLabelfalse - 67)) | (1 << (choiceParser.OpAtCopyright - 67)) | (1 << (choiceParser.OpAmpAudio - 67)) | (1 << (choiceParser.OpAmpImage - 67)) | (1 << (choiceParser.OpAmpImageZoom - 67)) | (1 << (choiceParser.OpAmpImageWAudio - 67)) | (1 << (choiceParser.OpAmpVideo - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (choiceParser.OpAmpArticle - 99)) | (1 << (choiceParser.OpAmpDocument - 99)) | (1 << (choiceParser.OpAmpApp - 99)) | (1 << (choiceParser.OpAmpWebsite - 99)) | (1 << (choiceParser.OpAmpStillImageFilm - 99)) | (1 << (choiceParser.OpAmpAudioLink - 99)) | (1 << (choiceParser.OpAmpImageLink - 99)) | (1 << (choiceParser.OpAmpVideoLink - 99)) | (1 << (choiceParser.OpAmpArticleLink - 99)) | (1 << (choiceParser.OpAmpDocumentLink - 99)) | (1 << (choiceParser.OpAmpAppLink - 99)) | (1 << (choiceParser.OpAmpWebsiteLink - 99)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 99)))) !== 0) || _la === choiceParser.URL || _la === choiceParser.LIST_LINE) {
                        {
                            {
                                this.state = 243;
                                this.bitElem();
                                this.state = 247;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 244;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 249;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                }
                            }
                        }
                        this.state = 254;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 276;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 258;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 255;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 260;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                        }
                                        this.state = 261;
                                        this.mcrsep();
                                        this.state = 269;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 265;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 262;
                                                                    this.match(choiceParser.NL);
                                                                }
                                                            }
                                                        }
                                                        this.state = 267;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                    }
                                                    this.state = 268;
                                                    this.mcrmisc();
                                                }
                                                break;
                                        }
                                        this.state = 272;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                            {
                                                this.state = 271;
                                                this.s_and_w();
                                            }
                                        }
                                        this.state = 274;
                                        this.choices();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 278;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 282;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case choiceParser.HSPL:
                        case choiceParser.HSPL2:
                            {
                                this.state = 280;
                                _la = this._input.LA(1);
                                if (!(_la === choiceParser.HSPL || _la === choiceParser.HSPL2)) {
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
                        case choiceParser.NL:
                            {
                                this.state = 281;
                                this.match(choiceParser.NL);
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 287;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                        case 1:
                            {
                                this.state = 284;
                                this.bitElem();
                                this.state = 285;
                                this.match(choiceParser.NL);
                            }
                            break;
                    }
                    this.state = 292;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 289;
                                    this.match(choiceParser.NL);
                                }
                            }
                        }
                        this.state = 294;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                    }
                    this.state = 308;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                        case 1:
                            {
                                this.state = 295;
                                this.resource();
                                this.state = 305;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 299;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === choiceParser.NL) {
                                                    {
                                                        {
                                                            this.state = 296;
                                                            this.match(choiceParser.NL);
                                                        }
                                                    }
                                                    this.state = 301;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 302;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 307;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
        mcrsep() {
            let _localctx = new McrsepContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, choiceParser.RULE_mcrsep);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 312;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case choiceParser.HSPL:
                        case choiceParser.HSPL2:
                            {
                                this.state = 310;
                                _la = this._input.LA(1);
                                if (!(_la === choiceParser.HSPL || _la === choiceParser.HSPL2)) {
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
                        case choiceParser.NL:
                            {
                                this.state = 311;
                                this.match(choiceParser.NL);
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
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
        mcrmisc() {
            let _localctx = new McrmiscContext(this._ctx, this.state);
            this.enterRule(_localctx, 10, choiceParser.RULE_mcrmisc);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 317;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.DCANY - 35)) | (1 << (choiceParser.ArticleText - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.AtReference - 35)) | (1 << (choiceParser.AtExampleWithStr - 35)) | (1 << (choiceParser.AtExamplecol - 35)) | (1 << (choiceParser.AtExamplecl - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (choiceParser.AtLabeltrue - 67)) | (1 << (choiceParser.AtLabelfalse - 67)) | (1 << (choiceParser.OpAtCopyright - 67)) | (1 << (choiceParser.OpAmpAudio - 67)) | (1 << (choiceParser.OpAmpImage - 67)) | (1 << (choiceParser.OpAmpImageZoom - 67)) | (1 << (choiceParser.OpAmpImageWAudio - 67)) | (1 << (choiceParser.OpAmpVideo - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (choiceParser.OpAmpArticle - 99)) | (1 << (choiceParser.OpAmpDocument - 99)) | (1 << (choiceParser.OpAmpApp - 99)) | (1 << (choiceParser.OpAmpWebsite - 99)) | (1 << (choiceParser.OpAmpStillImageFilm - 99)) | (1 << (choiceParser.OpAmpAudioLink - 99)) | (1 << (choiceParser.OpAmpImageLink - 99)) | (1 << (choiceParser.OpAmpVideoLink - 99)) | (1 << (choiceParser.OpAmpArticleLink - 99)) | (1 << (choiceParser.OpAmpDocumentLink - 99)) | (1 << (choiceParser.OpAmpAppLink - 99)) | (1 << (choiceParser.OpAmpWebsiteLink - 99)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 99)))) !== 0) || _la === choiceParser.URL || _la === choiceParser.LIST_LINE) {
                        {
                            {
                                this.state = 314;
                                this.bitElem();
                            }
                        }
                        this.state = 319;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 320;
                    this.match(choiceParser.NL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 322;
                    this.match(choiceParser.BitMultichoice1);
                    this.state = 323;
                    this.format();
                    this.state = 324;
                    this.match(choiceParser.CL);
                    this.state = 326;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 325;
                                this.match(choiceParser.NL);
                            }
                        }
                        this.state = 328;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === choiceParser.NL);
                    this.state = 339;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 330;
                                    this.bitElem();
                                    this.state = 334;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.NL) {
                                        {
                                            {
                                                this.state = 331;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                        this.state = 336;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 341;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                    }
                    this.state = 342;
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
            this.enterRule(_localctx, 14, choiceParser.RULE_multiple_response);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 344;
                    this.match(choiceParser.BitMultiresp);
                    this.state = 345;
                    this.format();
                    this.state = 346;
                    this.match(choiceParser.CL);
                    this.state = 348;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 347;
                                        this.match(choiceParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 350;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 361;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.DCANY - 35)) | (1 << (choiceParser.ArticleText - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)) | (1 << (choiceParser.AtReference - 35)) | (1 << (choiceParser.AtExampleWithStr - 35)) | (1 << (choiceParser.AtExamplecol - 35)) | (1 << (choiceParser.AtExamplecl - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (choiceParser.AtLabeltrue - 67)) | (1 << (choiceParser.AtLabelfalse - 67)) | (1 << (choiceParser.OpAtCopyright - 67)) | (1 << (choiceParser.OpAmpAudio - 67)) | (1 << (choiceParser.OpAmpImage - 67)) | (1 << (choiceParser.OpAmpImageZoom - 67)) | (1 << (choiceParser.OpAmpImageWAudio - 67)) | (1 << (choiceParser.OpAmpVideo - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (choiceParser.OpAmpArticle - 99)) | (1 << (choiceParser.OpAmpDocument - 99)) | (1 << (choiceParser.OpAmpApp - 99)) | (1 << (choiceParser.OpAmpWebsite - 99)) | (1 << (choiceParser.OpAmpStillImageFilm - 99)) | (1 << (choiceParser.OpAmpAudioLink - 99)) | (1 << (choiceParser.OpAmpImageLink - 99)) | (1 << (choiceParser.OpAmpVideoLink - 99)) | (1 << (choiceParser.OpAmpArticleLink - 99)) | (1 << (choiceParser.OpAmpDocumentLink - 99)) | (1 << (choiceParser.OpAmpAppLink - 99)) | (1 << (choiceParser.OpAmpWebsiteLink - 99)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 99)))) !== 0) || _la === choiceParser.URL || _la === choiceParser.LIST_LINE) {
                        {
                            {
                                this.state = 352;
                                this.bitElem();
                                this.state = 356;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 353;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 358;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                                }
                            }
                        }
                        this.state = 363;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 382;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 367;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 364;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 369;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                                        }
                                        this.state = 370;
                                        this.mcrsep();
                                        this.state = 378;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 374;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 371;
                                                                    this.match(choiceParser.NL);
                                                                }
                                                            }
                                                        }
                                                        this.state = 376;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                                                    }
                                                    this.state = 377;
                                                    this.mcrmisc();
                                                }
                                                break;
                                        }
                                        this.state = 380;
                                        this.choices();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 384;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 388;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                        case 1:
                            {
                                this.state = 386;
                                _la = this._input.LA(1);
                                if (!(_la === choiceParser.HSPL || _la === choiceParser.HSPL2)) {
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
                        case 2:
                            {
                                this.state = 387;
                                this.match(choiceParser.NL);
                            }
                            break;
                    }
                    this.state = 397;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                        case 1:
                            {
                                this.state = 390;
                                this.bitElem();
                                this.state = 394;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 391;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 396;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                                }
                            }
                            break;
                    }
                    this.state = 402;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 399;
                                    this.match(choiceParser.NL);
                                }
                            }
                        }
                        this.state = 404;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                    }
                    this.state = 418;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                        case 1:
                            {
                                this.state = 405;
                                this.resource();
                                this.state = 415;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 409;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === choiceParser.NL) {
                                                    {
                                                        {
                                                            this.state = 406;
                                                            this.match(choiceParser.NL);
                                                        }
                                                    }
                                                    this.state = 411;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 412;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 417;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
        multiple_response_1() {
            let _localctx = new Multiple_response_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 16, choiceParser.RULE_multiple_response_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 420;
                    this.match(choiceParser.BitMultiresp1);
                    this.state = 421;
                    this.format();
                    this.state = 422;
                    this.match(choiceParser.CL);
                    this.state = 424;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 423;
                                this.match(choiceParser.NL);
                            }
                        }
                        this.state = 426;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === choiceParser.NL);
                    this.state = 435;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 428;
                                        this.bitElem();
                                        this.state = 432;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === choiceParser.NL) {
                                            {
                                                {
                                                    this.state = 429;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                            this.state = 434;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 437;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 439;
                    this.choices();
                    this.state = 443;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 440;
                                    this.match(choiceParser.NL);
                                }
                            }
                        }
                        this.state = 445;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                        case 1:
                            {
                                this.state = 446;
                                this.resource();
                                this.state = 456;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 450;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === choiceParser.NL) {
                                                    {
                                                        {
                                                            this.state = 447;
                                                            this.match(choiceParser.NL);
                                                        }
                                                    }
                                                    this.state = 452;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 453;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 458;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
        multiple_choice_text() {
            let _localctx = new Multiple_choice_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 18, choiceParser.RULE_multiple_choice_text);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 461;
                    this.match(choiceParser.BitMultichoicetext);
                    this.state = 462;
                    this.format();
                    this.state = 463;
                    this.match(choiceParser.CL);
                    this.state = 465;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 464;
                                        this.match(choiceParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 467;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 469;
                                    this.bitElem();
                                    this.state = 473;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 470;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 475;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 480;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
                    }
                    this.state = 484;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 481;
                                    this.multitxt_il_choice();
                                }
                            }
                        }
                        this.state = 486;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                    }
                    this.state = 490;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 487;
                                    this.match(choiceParser.NL);
                                }
                            }
                        }
                        this.state = 492;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    }
                    this.state = 506;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                        case 1:
                            {
                                this.state = 493;
                                this.resource();
                                this.state = 503;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 497;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === choiceParser.NL) {
                                                    {
                                                        {
                                                            this.state = 494;
                                                            this.match(choiceParser.NL);
                                                        }
                                                    }
                                                    this.state = 499;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 500;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 505;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
        multitxt_il_choice() {
            let _localctx = new Multitxt_il_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 20, choiceParser.RULE_multitxt_il_choice);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    {
                        this.state = 522;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 522;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 508;
                                                    this.headed_inline_choices();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    {
                                                        this.state = 512;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        while (_la === choiceParser.S) {
                                                            {
                                                                {
                                                                    this.state = 509;
                                                                    this.match(choiceParser.S);
                                                                }
                                                            }
                                                            this.state = 514;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                        }
                                                        this.state = 515;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 516;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 518;
                                                    this._errHandler.sync(this);
                                                    _alt = 1;
                                                    do {
                                                        switch (_alt) {
                                                            case 1:
                                                                {
                                                                    {
                                                                        this.state = 517;
                                                                        this.match(choiceParser.S);
                                                                    }
                                                                }
                                                                break;
                                                            default:
                                                                throw new NoViableAltException(this);
                                                        }
                                                        this.state = 520;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                                                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 524;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
        highlight_text() {
            let _localctx = new Highlight_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, choiceParser.RULE_highlight_text);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 526;
                    this.match(choiceParser.BitHighlighttext);
                    this.state = 527;
                    this.format();
                    this.state = 528;
                    this.match(choiceParser.CL);
                    this.state = 530;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 529;
                                        this.match(choiceParser.NL);
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 532;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 543;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 534;
                                    this.bitElem();
                                    this.state = 538;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 535;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 540;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 545;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                    }
                    this.state = 549;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 546;
                                    this.highlight_il_choice();
                                }
                            }
                        }
                        this.state = 551;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                    }
                    this.state = 555;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 552;
                                    this.match(choiceParser.NL);
                                }
                            }
                        }
                        this.state = 557;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                    }
                    this.state = 571;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                        case 1:
                            {
                                this.state = 558;
                                this.resource();
                                this.state = 568;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 562;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === choiceParser.NL) {
                                                    {
                                                        {
                                                            this.state = 559;
                                                            this.match(choiceParser.NL);
                                                        }
                                                    }
                                                    this.state = 564;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 565;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 570;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
        highlight_il_choice() {
            let _localctx = new Highlight_il_choiceContext(this._ctx, this.state);
            this.enterRule(_localctx, 24, choiceParser.RULE_highlight_il_choice);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    {
                        this.state = 587;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        this.state = 587;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 573;
                                                    this.highlight_inline_choices();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    {
                                                        this.state = 577;
                                                        this._errHandler.sync(this);
                                                        _la = this._input.LA(1);
                                                        while (_la === choiceParser.S) {
                                                            {
                                                                {
                                                                    this.state = 574;
                                                                    this.match(choiceParser.S);
                                                                }
                                                            }
                                                            this.state = 579;
                                                            this._errHandler.sync(this);
                                                            _la = this._input.LA(1);
                                                        }
                                                        this.state = 580;
                                                        this.match(choiceParser.NL);
                                                    }
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 581;
                                                    this.s_and_w();
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 583;
                                                    this._errHandler.sync(this);
                                                    _alt = 1;
                                                    do {
                                                        switch (_alt) {
                                                            case 1:
                                                                {
                                                                    {
                                                                        this.state = 582;
                                                                        this.match(choiceParser.S);
                                                                    }
                                                                }
                                                                break;
                                                            default:
                                                                throw new NoViableAltException(this);
                                                        }
                                                        this.state = 585;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                                                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 589;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
        bitElem() {
            let _localctx = new BitElemContext(this._ctx, this.state);
            this.enterRule(_localctx, 26, choiceParser.RULE_bitElem);
            try {
                this.state = 614;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 591;
                            this.match(choiceParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 592;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 593;
                            this.gap();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 594;
                            this.atdef();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 595;
                            this.reference();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 596;
                            this.item();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 597;
                            this.title();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 598;
                            this.instruction();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 599;
                            this.hint();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 600;
                            this.s_and_w();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 601;
                            this.example();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 602;
                            this.bool_label();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 603;
                            this.imagebit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 604;
                            this.audiobit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 605;
                            this.videobit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 606;
                            this.articlebit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 607;
                            this.documentbit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 608;
                            this.appbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 609;
                            this.websitebit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 610;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 611;
                            this.angleref();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 612;
                            this.anchor();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 613;
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
            this.enterRule(_localctx, 28, choiceParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 616;
                    this.single_gap();
                    this.state = 624;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 622;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.OPU:
                                        {
                                            this.state = 617;
                                            this.single_gap();
                                        }
                                        break;
                                    case choiceParser.OPB:
                                        {
                                            this.state = 618;
                                            this.instruction();
                                        }
                                        break;
                                    case choiceParser.OPQ:
                                        {
                                            this.state = 619;
                                            this.hint();
                                        }
                                        break;
                                    case choiceParser.OPC:
                                        {
                                            this.state = 620;
                                            this.item();
                                        }
                                        break;
                                    case choiceParser.AtExampleWithStr:
                                    case choiceParser.AtExamplecol:
                                    case choiceParser.AtExamplecl:
                                        {
                                            this.state = 621;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 626;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
            this.enterRule(_localctx, 30, choiceParser.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 627;
                    this.match(choiceParser.OPU);
                    this.state = 631;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                        case 1:
                            {
                                this.state = 628;
                                this.match(choiceParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 629;
                                this.match(choiceParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 636;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                        {
                            {
                                this.state = 633;
                                this.s_and_w();
                            }
                        }
                        this.state = 638;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 639;
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
        choices() {
            let _localctx = new ChoicesContext(this._ctx, this.state);
            this.enterRule(_localctx, 32, choiceParser.RULE_choices);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 643;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                        case 1:
                            {
                                this.state = 641;
                                this.cplus();
                            }
                            break;
                        case 2:
                            {
                                this.state = 642;
                                this.cminus();
                            }
                            break;
                    }
                    this.state = 660;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 646;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === choiceParser.NL) {
                                        {
                                            this.state = 645;
                                            this.match(choiceParser.NL);
                                        }
                                    }
                                    this.state = 651;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.S) {
                                        {
                                            {
                                                this.state = 648;
                                                this.match(choiceParser.S);
                                            }
                                        }
                                        this.state = 653;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 656;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 654;
                                                this.cplus();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 655;
                                                this.cminus();
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        this.state = 662;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
        cplus() {
            let _localctx = new CplusContext(this._ctx, this.state);
            this.enterRule(_localctx, 34, choiceParser.RULE_cplus);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 663;
                    this.choice_plus();
                    this.state = 670;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 668;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.OPC:
                                        {
                                            this.state = 664;
                                            this.item();
                                        }
                                        break;
                                    case choiceParser.AtExampleWithStr:
                                    case choiceParser.AtExamplecol:
                                    case choiceParser.AtExamplecl:
                                        {
                                            this.state = 665;
                                            this.example();
                                        }
                                        break;
                                    case choiceParser.OPB:
                                        {
                                            this.state = 666;
                                            this.instruction();
                                        }
                                        break;
                                    case choiceParser.OPQ:
                                        {
                                            this.state = 667;
                                            this.hint();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 672;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
        cminus() {
            let _localctx = new CminusContext(this._ctx, this.state);
            this.enterRule(_localctx, 36, choiceParser.RULE_cminus);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 673;
                    this.choice_minus();
                    this.state = 680;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 678;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case choiceParser.OPC:
                                        {
                                            this.state = 674;
                                            this.item();
                                        }
                                        break;
                                    case choiceParser.AtExampleWithStr:
                                    case choiceParser.AtExamplecol:
                                    case choiceParser.AtExamplecl:
                                        {
                                            this.state = 675;
                                            this.example();
                                        }
                                        break;
                                    case choiceParser.OPB:
                                        {
                                            this.state = 676;
                                            this.instruction();
                                        }
                                        break;
                                    case choiceParser.OPQ:
                                        {
                                            this.state = 677;
                                            this.hint();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 682;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
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
            this.enterRule(_localctx, 38, choiceParser.RULE_choice_plus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 684;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPC) {
                        {
                            this.state = 683;
                            this.item();
                        }
                    }
                    this.state = 686;
                    this.match(choiceParser.OPP);
                    this.state = 688;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.StrParen) {
                        {
                            this.state = 687;
                            this.match(choiceParser.StrParen);
                        }
                    }
                    this.state = 692;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 692;
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
                                case choiceParser.SENTENCE:
                                case choiceParser.URL:
                                    {
                                        this.state = 690;
                                        this.s_and_w();
                                    }
                                    break;
                                case choiceParser.NL:
                                    {
                                        this.state = 691;
                                        this.match(choiceParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 694;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                    this.state = 696;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 699;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPC) {
                        {
                            this.state = 698;
                            this.item();
                        }
                    }
                    this.state = 701;
                    this.match(choiceParser.OPM);
                    this.state = 703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.StrParen) {
                        {
                            this.state = 702;
                            this.match(choiceParser.StrParen);
                        }
                    }
                    this.state = 707;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 707;
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
                                case choiceParser.SENTENCE:
                                case choiceParser.URL:
                                    {
                                        this.state = 705;
                                        this.s_and_w();
                                    }
                                    break;
                                case choiceParser.NL:
                                    {
                                        this.state = 706;
                                        this.match(choiceParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 709;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                    this.state = 711;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 714;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPC) {
                        {
                            this.state = 713;
                            this.item();
                        }
                    }
                    this.state = 716;
                    this.match(choiceParser.OPP);
                    this.state = 718;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.StrParen) {
                        {
                            this.state = 717;
                            this.match(choiceParser.StrParen);
                        }
                    }
                    this.state = 720;
                    this.s_and_w();
                    this.state = 721;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 724;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPC) {
                        {
                            this.state = 723;
                            this.item();
                        }
                    }
                    this.state = 726;
                    this.match(choiceParser.OPM);
                    this.state = 728;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.StrParen) {
                        {
                            this.state = 727;
                            this.match(choiceParser.StrParen);
                        }
                    }
                    this.state = 730;
                    this.s_and_w();
                    this.state = 731;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 734;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPS) {
                        {
                            this.state = 733;
                            this.choice_head();
                        }
                    }
                    this.state = 736;
                    this.inline_choices();
                    this.state = 740;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 737;
                                    this.il_follow();
                                }
                            }
                        }
                        this.state = 742;
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
        highlight_inline_choices() {
            let _localctx = new Highlight_inline_choicesContext(this._ctx, this.state);
            this.enterRule(_localctx, 48, choiceParser.RULE_highlight_inline_choices);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 744;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPS) {
                        {
                            this.state = 743;
                            this.choice_head();
                        }
                    }
                    this.state = 746;
                    this.inline_choices();
                    this.state = 750;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 747;
                                    this.il_follow();
                                }
                            }
                        }
                        this.state = 752;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
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
        headed_choices() {
            let _localctx = new Headed_choicesContext(this._ctx, this.state);
            this.enterRule(_localctx, 50, choiceParser.RULE_headed_choices);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 754;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPS) {
                        {
                            this.state = 753;
                            this.choice_head();
                        }
                    }
                    this.state = 756;
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
            this.enterRule(_localctx, 52, choiceParser.RULE_choice_head);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 758;
                    this.match(choiceParser.OPS);
                    this.state = 759;
                    this.s_and_w();
                    this.state = 760;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 764;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                        case 1:
                            {
                                this.state = 762;
                                this.il_choice_plus();
                            }
                            break;
                        case 2:
                            {
                                this.state = 763;
                                this.il_choice_minus();
                            }
                            break;
                    }
                    this.state = 770;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 768;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 766;
                                            this.il_choice_plus();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 767;
                                            this.il_choice_minus();
                                        }
                                        break;
                                }
                            }
                        }
                        this.state = 772;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
            this.enterRule(_localctx, 56, choiceParser.RULE_ml_example);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 773;
                    this.match(choiceParser.AtExamplecol);
                    this.state = 781;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                        {
                            this.state = 775;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.NL) {
                                {
                                    this.state = 774;
                                    this.match(choiceParser.NL);
                                }
                            }
                            this.state = 777;
                            this.lines();
                            this.state = 779;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.NL) {
                                {
                                    this.state = 778;
                                    this.match(choiceParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 783;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 793;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AtExampleWithStr:
                    case choiceParser.AtExamplecol:
                    case choiceParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 785;
                            this.example();
                        }
                        break;
                    case choiceParser.OPQ:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 786;
                            this.match(choiceParser.OPQ);
                            this.state = 788;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 787;
                                        _la = this._input.LA(1);
                                        if (_la <= 0 || (_la === choiceParser.CL)) {
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
                                this.state = 790;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.OPDOT) | (1 << choiceParser.S) | (1 << choiceParser.BitMultichoice1) | (1 << choiceParser.BitMultichoice) | (1 << choiceParser.BitMultiresp1) | (1 << choiceParser.BitMultiresp) | (1 << choiceParser.BitMultichoicetext) | (1 << choiceParser.BitHighlighttext) | (1 << choiceParser.COMMENT) | (1 << choiceParser.Image_type) | (1 << choiceParser.Audio_type) | (1 << choiceParser.Video_type) | (1 << choiceParser.OPDOLL) | (1 << choiceParser.OPBUL) | (1 << choiceParser.OPESC) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPP) | (1 << choiceParser.OPM) | (1 << choiceParser.OPS) | (1 << choiceParser.OPR) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (choiceParser.DBLCOLON - 32)) | (1 << (choiceParser.PLUS - 32)) | (1 << (choiceParser.DotAt - 32)) | (1 << (choiceParser.Greater - 32)) | (1 << (choiceParser.Less - 32)) | (1 << (choiceParser.Lparen - 32)) | (1 << (choiceParser.Rparen - 32)) | (1 << (choiceParser.RightAngle - 32)) | (1 << (choiceParser.RightArrow - 32)) | (1 << (choiceParser.DBLEQ - 32)) | (1 << (choiceParser.HSPL - 32)) | (1 << (choiceParser.HSPL2 - 32)) | (1 << (choiceParser.SSPL - 32)) | (1 << (choiceParser.SSPL2 - 32)) | (1 << (choiceParser.StrParen - 32)) | (1 << (choiceParser.DCANY - 32)) | (1 << (choiceParser.ArticleText - 32)) | (1 << (choiceParser.NOTCL - 32)) | (1 << (choiceParser.NUMERIC - 32)) | (1 << (choiceParser.STRING - 32)) | (1 << (choiceParser.NL - 32)) | (1 << (choiceParser.SENTENCE - 32)) | (1 << (choiceParser.OPAT - 32)) | (1 << (choiceParser.AtProgress - 32)) | (1 << (choiceParser.AtReference - 32)) | (1 << (choiceParser.AtWidth - 32)) | (1 << (choiceParser.AtHeight - 32)) | (1 << (choiceParser.AtProgressPoints - 32)) | (1 << (choiceParser.AtShortanswer - 32)) | (1 << (choiceParser.AtLonganswer - 32)) | (1 << (choiceParser.AtExampleWithStr - 32)) | (1 << (choiceParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (choiceParser.AtExamplecl - 64)) | (1 << (choiceParser.AtPartialAnswerS - 64)) | (1 << (choiceParser.AtPartialAnswer - 64)) | (1 << (choiceParser.AtLabeltrue - 64)) | (1 << (choiceParser.AtLabelfalse - 64)) | (1 << (choiceParser.AtPoints - 64)) | (1 << (choiceParser.AtSrc - 64)) | (1 << (choiceParser.OPATALT - 64)) | (1 << (choiceParser.OPAMARK - 64)) | (1 << (choiceParser.ShowInIndex - 64)) | (1 << (choiceParser.OpAtCaption - 64)) | (1 << (choiceParser.OpAtLicense - 64)) | (1 << (choiceParser.OpAtCopyright - 64)) | (1 << (choiceParser.OpAtSearch - 64)) | (1 << (choiceParser.OpAtIsTracked - 64)) | (1 << (choiceParser.OpAtIsInfoOnly - 64)) | (1 << (choiceParser.AtDate - 64)) | (1 << (choiceParser.Http - 64)) | (1 << (choiceParser.Https - 64)) | (1 << (choiceParser.AmpAudio - 64)) | (1 << (choiceParser.AmpImage - 64)) | (1 << (choiceParser.AmpImageZoom - 64)) | (1 << (choiceParser.AmpImageWAudio - 64)) | (1 << (choiceParser.AmpVideo - 64)) | (1 << (choiceParser.AmpArticle - 64)) | (1 << (choiceParser.AmpDocument - 64)) | (1 << (choiceParser.AmpApp - 64)) | (1 << (choiceParser.AmpWebsite - 64)) | (1 << (choiceParser.AmpStillImageFilm - 64)) | (1 << (choiceParser.AmpPdf - 64)) | (1 << (choiceParser.OpAmpAudio - 64)) | (1 << (choiceParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (choiceParser.OpAmpImageZoom - 96)) | (1 << (choiceParser.OpAmpImageWAudio - 96)) | (1 << (choiceParser.OpAmpVideo - 96)) | (1 << (choiceParser.OpAmpArticle - 96)) | (1 << (choiceParser.OpAmpArticleAtt - 96)) | (1 << (choiceParser.OpAmpDocument - 96)) | (1 << (choiceParser.OpAmpApp - 96)) | (1 << (choiceParser.OpAmpWebsite - 96)) | (1 << (choiceParser.OpAmpStillImageFilm - 96)) | (1 << (choiceParser.BracEnclose - 96)) | (1 << (choiceParser.AmpAudioLink - 96)) | (1 << (choiceParser.AmpImageLink - 96)) | (1 << (choiceParser.AmpVideoLink - 96)) | (1 << (choiceParser.AmpArticleLink - 96)) | (1 << (choiceParser.AmpDocumentLink - 96)) | (1 << (choiceParser.AmpAppLink - 96)) | (1 << (choiceParser.AmpWebsiteLink - 96)) | (1 << (choiceParser.AmpStillImageFilmLink - 96)) | (1 << (choiceParser.OpAmpAudioLink - 96)) | (1 << (choiceParser.OpAmpImageLink - 96)) | (1 << (choiceParser.OpAmpVideoLink - 96)) | (1 << (choiceParser.OpAmpArticleLink - 96)) | (1 << (choiceParser.OpAmpDocumentLink - 96)) | (1 << (choiceParser.OpAmpAppLink - 96)) | (1 << (choiceParser.OpAmpWebsiteLink - 96)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 96)) | (1 << (choiceParser.BitmarkMinus - 96)) | (1 << (choiceParser.BitmarkPlus - 96)) | (1 << (choiceParser.ColonText - 96)) | (1 << (choiceParser.Prosemirror - 96)) | (1 << (choiceParser.Placeholder - 96)) | (1 << (choiceParser.BASIC - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (choiceParser.JPG - 128)) | (1 << (choiceParser.PNG - 128)) | (1 << (choiceParser.GIF - 128)) | (1 << (choiceParser.SVG - 128)) | (1 << (choiceParser.MP2 - 128)) | (1 << (choiceParser.MP3 - 128)) | (1 << (choiceParser.MP4 - 128)) | (1 << (choiceParser.FLV - 128)) | (1 << (choiceParser.WMV - 128)) | (1 << (choiceParser.MPEG - 128)) | (1 << (choiceParser.MPG - 128)) | (1 << (choiceParser.TEL - 128)) | (1 << (choiceParser.DotArticleAtt - 128)) | (1 << (choiceParser.STAR - 128)) | (1 << (choiceParser.URL - 128)) | (1 << (choiceParser.LIST_LINE - 128)))) !== 0));
                            this.state = 792;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 60, choiceParser.RULE_longans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 795;
                    this.match(choiceParser.AtLonganswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 797;
                    this.match(choiceParser.AtShortanswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 799;
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
        bullet_item() {
            let _localctx = new Bullet_itemContext(this._ctx, this.state);
            this.enterRule(_localctx, 66, choiceParser.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 801;
                    this.match(choiceParser.OPBUL);
                    this.state = 802;
                    this.s_and_w();
                    this.state = 803;
                    this.match(choiceParser.CL);
                    this.state = 805;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.AtPoints) {
                        {
                            this.state = 804;
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
        atpoint() {
            let _localctx = new AtpointContext(this._ctx, this.state);
            this.enterRule(_localctx, 68, choiceParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 807;
                    this.match(choiceParser.AtPoints);
                    this.state = 808;
                    this.match(choiceParser.NUMERIC);
                    this.state = 809;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 814;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 811;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 816;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
                    }
                    this.state = 821;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (choiceParser.AmpAudio - 83)) | (1 << (choiceParser.AmpImage - 83)) | (1 << (choiceParser.AmpImageZoom - 83)) | (1 << (choiceParser.AmpImageWAudio - 83)) | (1 << (choiceParser.AmpVideo - 83)) | (1 << (choiceParser.AmpArticle - 83)) | (1 << (choiceParser.AmpDocument - 83)) | (1 << (choiceParser.AmpApp - 83)) | (1 << (choiceParser.AmpWebsite - 83)) | (1 << (choiceParser.AmpStillImageFilm - 83)) | (1 << (choiceParser.AmpPdf - 83)) | (1 << (choiceParser.AmpAudioLink - 83)) | (1 << (choiceParser.AmpImageLink - 83)) | (1 << (choiceParser.AmpVideoLink - 83)) | (1 << (choiceParser.AmpArticleLink - 83)) | (1 << (choiceParser.AmpDocumentLink - 83)) | (1 << (choiceParser.AmpAppLink - 83)) | (1 << (choiceParser.AmpWebsiteLink - 83)) | (1 << (choiceParser.AmpStillImageFilmLink - 83)))) !== 0) || _la === choiceParser.ColonText) {
                        {
                            this.state = 819;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.ColonText:
                                    {
                                        this.state = 817;
                                        this.match(choiceParser.ColonText);
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
                                    {
                                        this.state = 818;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 823;
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
            this.enterRule(_localctx, 72, choiceParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 824;
                    _la = this._input.LA(1);
                    if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (choiceParser.AmpArticle - 88)) | (1 << (choiceParser.AmpDocument - 88)) | (1 << (choiceParser.AmpWebsite - 88)) | (1 << (choiceParser.AmpStillImageFilm - 88)) | (1 << (choiceParser.AmpAudioLink - 88)) | (1 << (choiceParser.AmpImageLink - 88)) | (1 << (choiceParser.AmpVideoLink - 88)) | (1 << (choiceParser.AmpArticleLink - 88)) | (1 << (choiceParser.AmpDocumentLink - 88)) | (1 << (choiceParser.AmpAppLink - 88)) | (1 << (choiceParser.AmpWebsiteLink - 88)) | (1 << (choiceParser.AmpStillImageFilmLink - 88)))) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & ((1 << (choiceParser.BitmarkMinus - 122)) | (1 << (choiceParser.BitmarkPlus - 122)) | (1 << (choiceParser.Prosemirror - 122)) | (1 << (choiceParser.Placeholder - 122)))) !== 0))) {
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
        format2() {
            let _localctx = new Format2Context(this._ctx, this.state);
            this.enterRule(_localctx, 76, choiceParser.RULE_format2);
            try {
                this.state = 841;
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
                    case choiceParser.EOF:
                        this.enterOuterAlt(_localctx, 4);
                        // tslint:disable-next-line:no-empty
                        {
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
            this.enterRule(_localctx, 78, choiceParser.RULE_image_format);
            let _la;
            try {
                this.state = 857;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 843;
                            this.match(choiceParser.AmpImage);
                            this.state = 846;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.Image_type:
                                    {
                                        {
                                            this.state = 844;
                                            this.match(choiceParser.Image_type);
                                        }
                                    }
                                    break;
                                case choiceParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 845;
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
                                case choiceParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case choiceParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 848;
                            this.match(choiceParser.AmpImageLink);
                            this.state = 850;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.Image_type) {
                                {
                                    this.state = 849;
                                    this.match(choiceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case choiceParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 852;
                            this.match(choiceParser.AmpImageZoom);
                            this.state = 854;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.Image_type) {
                                {
                                    this.state = 853;
                                    this.match(choiceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case choiceParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 856;
                            this.match(choiceParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 80, choiceParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 859;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.AmpVideo || _la === choiceParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 862;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.COLON) {
                        {
                            this.state = 860;
                            this.match(choiceParser.COLON);
                            this.state = 861;
                            this.match(choiceParser.Video_type);
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
            this.enterRule(_localctx, 82, choiceParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 864;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.AmpArticle || _la === choiceParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 84, choiceParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 866;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.AmpDocument || _la === choiceParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 86, choiceParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 868;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.AmpApp || _la === choiceParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 88, choiceParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 870;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.AmpWebsite || _la === choiceParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 90, choiceParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 872;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.AmpStillImageFilm || _la === choiceParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 92, choiceParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 874;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.OpAmpArticle || _la === choiceParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 94, choiceParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 876;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.OpAmpDocument || _la === choiceParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 96, choiceParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 878;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.OpAmpApp || _la === choiceParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 98, choiceParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 880;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.OpAmpWebsite || _la === choiceParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 100, choiceParser.RULE_op_video_format);
            try {
                this.state = 892;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 882;
                            this.match(choiceParser.OpAmpVideo);
                            this.state = 885;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 883;
                                        this.match(choiceParser.COLON);
                                        this.state = 884;
                                        this.match(choiceParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case choiceParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 887;
                            this.match(choiceParser.OpAmpVideoLink);
                            this.state = 890;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 888;
                                        this.match(choiceParser.COLON);
                                        this.state = 889;
                                        this.match(choiceParser.Video_type);
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
            this.enterRule(_localctx, 102, choiceParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 894;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.OpAmpStillImageFilm || _la === choiceParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 104, choiceParser.RULE_articlebit);
            try {
                this.state = 902;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OpAmpArticle:
                    case choiceParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 896;
                            this.op_article_format();
                            this.state = 897;
                            this.match(choiceParser.COLON);
                            this.state = 898;
                            this.url();
                            this.state = 899;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 901;
                            this.match(choiceParser.ArticleText);
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
            this.enterRule(_localctx, 106, choiceParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 904;
                    this.op_document_format();
                    this.state = 905;
                    this.match(choiceParser.COLON);
                    this.state = 906;
                    this.url();
                    this.state = 907;
                    this.match(choiceParser.CL);
                    this.state = 912;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPATALT) {
                        {
                            this.state = 908;
                            this.match(choiceParser.OPATALT);
                            this.state = 909;
                            this.words();
                            this.state = 910;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 108, choiceParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 914;
                    this.op_website_format();
                    this.state = 915;
                    this.match(choiceParser.COLON);
                    this.state = 916;
                    this.url();
                    this.state = 917;
                    this.match(choiceParser.CL);
                    this.state = 922;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPATALT) {
                        {
                            this.state = 918;
                            this.match(choiceParser.OPATALT);
                            this.state = 919;
                            this.words();
                            this.state = 920;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 110, choiceParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 924;
                    this.op_app_format();
                    this.state = 925;
                    this.match(choiceParser.COLON);
                    this.state = 928;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case choiceParser.URL:
                            {
                                this.state = 926;
                                this.url();
                            }
                            break;
                        case choiceParser.TEL:
                            {
                                this.state = 927;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 930;
                    this.match(choiceParser.CL);
                    this.state = 935;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.OPATALT) {
                        {
                            this.state = 931;
                            this.match(choiceParser.OPATALT);
                            this.state = 932;
                            this.words();
                            this.state = 933;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 112, choiceParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 937;
                    this.stillimg_one();
                    this.state = 941;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 938;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 943;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
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
            this.enterRule(_localctx, 114, choiceParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 944;
                    this.op_stillimagefilm_format();
                    this.state = 945;
                    this.match(choiceParser.COLON);
                    this.state = 949;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === choiceParser.S) {
                        {
                            {
                                this.state = 946;
                                this.match(choiceParser.S);
                            }
                        }
                        this.state = 951;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 952;
                    this.url();
                    this.state = 953;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 955;
                    this.video_one();
                    this.state = 959;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 956;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 961;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
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
            this.enterRule(_localctx, 118, choiceParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 962;
                    this.op_video_format();
                    this.state = 963;
                    this.match(choiceParser.COLON);
                    this.state = 964;
                    this.url();
                    this.state = 965;
                    this.match(choiceParser.CL);
                    this.state = 970;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
                        case 1:
                            {
                                this.state = 966;
                                this.match(choiceParser.OPATALT);
                                this.state = 967;
                                this.words();
                                this.state = 968;
                                this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 120, choiceParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 972;
                    this.image_one();
                    this.state = 976;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 973;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 978;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
                    }
                    this.state = 981;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
                        case 1:
                            {
                                this.state = 979;
                                this.match(choiceParser.NL);
                                this.state = 980;
                                this.match(choiceParser.ShowInIndex);
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
            this.enterRule(_localctx, 122, choiceParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 983;
                    this.op_image_format();
                    this.state = 984;
                    this.match(choiceParser.COLON);
                    this.state = 988;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === choiceParser.S) {
                        {
                            {
                                this.state = 985;
                                this.match(choiceParser.S);
                            }
                        }
                        this.state = 990;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 991;
                    this.url();
                    this.state = 992;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 1008;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 994;
                            this.match(choiceParser.OpAmpImage);
                            this.state = 997;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.Image_type:
                                    {
                                        {
                                            this.state = 995;
                                            this.match(choiceParser.Image_type);
                                        }
                                    }
                                    break;
                                case choiceParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 996;
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
                            this.state = 999;
                            this.match(choiceParser.OpAmpImageLink);
                            this.state = 1001;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.Image_type) {
                                {
                                    this.state = 1000;
                                    this.match(choiceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case choiceParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1003;
                            this.match(choiceParser.OpAmpImageZoom);
                            this.state = 1005;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.Image_type) {
                                {
                                    this.state = 1004;
                                    this.match(choiceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case choiceParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1007;
                            this.match(choiceParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 126, choiceParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 1027;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1010;
                            this.match(choiceParser.AtSrc);
                            this.state = 1011;
                            this.match(choiceParser.COLON);
                            this.state = 1012;
                            this.url();
                            this.state = 1013;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.AtWidth:
                    case choiceParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1015;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.AtWidth || _la === choiceParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1016;
                            this.match(choiceParser.COLON);
                            this.state = 1017;
                            this.match(choiceParser.NUMERIC);
                            this.state = 1018;
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
                            this.state = 1019;
                            _la = this._input.LA(1);
                            if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (choiceParser.OPATALT - 71)) | (1 << (choiceParser.OpAtCaption - 71)) | (1 << (choiceParser.OpAtLicense - 71)) | (1 << (choiceParser.OpAtCopyright - 71)) | (1 << (choiceParser.OpAtSearch - 71)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1023;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1020;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1025;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                            }
                            this.state = 1026;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 128, choiceParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 1046;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1029;
                            this.match(choiceParser.AtSrc);
                            this.state = 1030;
                            this.match(choiceParser.COLON);
                            this.state = 1031;
                            this.url();
                            this.state = 1032;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.AtWidth:
                    case choiceParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1034;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.AtWidth || _la === choiceParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1035;
                            this.match(choiceParser.COLON);
                            this.state = 1036;
                            this.match(choiceParser.NUMERIC);
                            this.state = 1037;
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
                            this.state = 1038;
                            _la = this._input.LA(1);
                            if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (choiceParser.OPATALT - 71)) | (1 << (choiceParser.OpAtCaption - 71)) | (1 << (choiceParser.OpAtLicense - 71)) | (1 << (choiceParser.OpAtCopyright - 71)) | (1 << (choiceParser.OpAtSearch - 71)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1042;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1039;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1044;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            }
                            this.state = 1045;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 130, choiceParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1048;
                    this.audio_one();
                    this.state = 1052;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1049;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 1054;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
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
            this.enterRule(_localctx, 132, choiceParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1055;
                    this.op_audio_format();
                    this.state = 1056;
                    this.match(choiceParser.COLON);
                    this.state = 1057;
                    this.url();
                    this.state = 1058;
                    this.match(choiceParser.CL);
                    this.state = 1063;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                        case 1:
                            {
                                this.state = 1059;
                                this.match(choiceParser.OPATALT);
                                this.state = 1060;
                                this.words();
                                this.state = 1061;
                                this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 134, choiceParser.RULE_audio_format);
            let _la;
            try {
                this.state = 1075;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1065;
                            this.match(choiceParser.AmpAudio);
                            this.state = 1068;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.COLON) {
                                {
                                    this.state = 1066;
                                    this.match(choiceParser.COLON);
                                    this.state = 1067;
                                    this.match(choiceParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case choiceParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1070;
                            this.match(choiceParser.AmpAudioLink);
                            this.state = 1073;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.COLON) {
                                {
                                    this.state = 1071;
                                    this.match(choiceParser.COLON);
                                    this.state = 1072;
                                    this.match(choiceParser.Audio_type);
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
            this.enterRule(_localctx, 136, choiceParser.RULE_op_audio_format);
            try {
                this.state = 1087;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1077;
                            this.match(choiceParser.OpAmpAudio);
                            this.state = 1080;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1078;
                                        this.match(choiceParser.COLON);
                                        this.state = 1079;
                                        this.match(choiceParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case choiceParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1082;
                            this.match(choiceParser.OpAmpAudioLink);
                            this.state = 1085;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1083;
                                        this.match(choiceParser.COLON);
                                        this.state = 1084;
                                        this.match(choiceParser.Audio_type);
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
            this.enterRule(_localctx, 138, choiceParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 1120;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OPA:
                    case choiceParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1092;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.OPA:
                                    {
                                        this.state = 1089;
                                        this.match(choiceParser.OPA);
                                        this.state = 1090;
                                        this.s_and_w();
                                    }
                                    break;
                                case choiceParser.AtSrc:
                                    {
                                        this.state = 1091;
                                        this.match(choiceParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 1094;
                            this.match(choiceParser.COLON);
                            this.state = 1098;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1095;
                                            this.match(choiceParser.S);
                                        }
                                    }
                                }
                                this.state = 1100;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
                            }
                            this.state = 1103;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1103;
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
                                        case choiceParser.SENTENCE:
                                        case choiceParser.URL:
                                            {
                                                this.state = 1101;
                                                this.s_and_w();
                                            }
                                            break;
                                        case choiceParser.NL:
                                            {
                                                this.state = 1102;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 1105;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                            this.state = 1107;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.AtWidth:
                    case choiceParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1108;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.AtWidth || _la === choiceParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1109;
                            this.match(choiceParser.COLON);
                            this.state = 1110;
                            this.match(choiceParser.NUMERIC);
                            this.state = 1111;
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
                            this.state = 1112;
                            _la = this._input.LA(1);
                            if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (choiceParser.OPATALT - 71)) | (1 << (choiceParser.OpAtCaption - 71)) | (1 << (choiceParser.OpAtLicense - 71)) | (1 << (choiceParser.OpAtCopyright - 71)) | (1 << (choiceParser.OpAtSearch - 71)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1116;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1113;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1118;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                            }
                            this.state = 1119;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 140, choiceParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1122;
                    this.match(choiceParser.TEL);
                    this.state = 1123;
                    this.match(choiceParser.PLUS);
                    this.state = 1124;
                    this.match(choiceParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1126;
                    this.match(choiceParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 1158;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1128;
                            this.match(choiceParser.OPC);
                            this.state = 1129;
                            this.match(choiceParser.CL);
                            this.state = 1137;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1133;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === choiceParser.S) {
                                            {
                                                {
                                                    this.state = 1130;
                                                    this.match(choiceParser.S);
                                                }
                                            }
                                            this.state = 1135;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1136;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1139;
                            this.match(choiceParser.OPC);
                            this.state = 1140;
                            this.s_and_w();
                            this.state = 1145;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (choiceParser.COLON - 30)) | (1 << (choiceParser.AMP - 30)) | (1 << (choiceParser.Greater - 30)) | (1 << (choiceParser.Less - 30)) | (1 << (choiceParser.RightAngle - 30)) | (1 << (choiceParser.RightArrow - 30)) | (1 << (choiceParser.SENTENCE - 30)))) !== 0)) {
                                {
                                    this.state = 1143;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case choiceParser.COLON:
                                            {
                                                this.state = 1141;
                                                this.match(choiceParser.COLON);
                                            }
                                            break;
                                        case choiceParser.AMP:
                                        case choiceParser.Greater:
                                        case choiceParser.Less:
                                        case choiceParser.RightAngle:
                                        case choiceParser.RightArrow:
                                        case choiceParser.SENTENCE:
                                            {
                                                this.state = 1142;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 1147;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1148;
                            this.match(choiceParser.CL);
                            this.state = 1156;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1152;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === choiceParser.S) {
                                            {
                                                {
                                                    this.state = 1149;
                                                    this.match(choiceParser.S);
                                                }
                                            }
                                            this.state = 1154;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1155;
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
            this.enterRule(_localctx, 146, choiceParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1160;
                    this.match(choiceParser.OPC);
                    this.state = 1161;
                    this.s_and_w();
                    this.state = 1166;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (choiceParser.COLON - 30)) | (1 << (choiceParser.AMP - 30)) | (1 << (choiceParser.Greater - 30)) | (1 << (choiceParser.Less - 30)) | (1 << (choiceParser.RightAngle - 30)) | (1 << (choiceParser.RightArrow - 30)) | (1 << (choiceParser.SENTENCE - 30)))) !== 0)) {
                        {
                            this.state = 1164;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case choiceParser.COLON:
                                    {
                                        this.state = 1162;
                                        this.match(choiceParser.COLON);
                                    }
                                    break;
                                case choiceParser.AMP:
                                case choiceParser.Greater:
                                case choiceParser.Less:
                                case choiceParser.RightAngle:
                                case choiceParser.RightArrow:
                                case choiceParser.SENTENCE:
                                    {
                                        this.state = 1163;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 1168;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1169;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 1181;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1171;
                            this.match(choiceParser.OPRANGLES);
                            this.state = 1173;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1172;
                                    this.s_and_w();
                                }
                            }
                            this.state = 1175;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1176;
                            this.match(choiceParser.OPRANGLEL);
                            this.state = 1178;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1177;
                                    this.s_and_w();
                                }
                            }
                            this.state = 1180;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 150, choiceParser.RULE_example);
            let _la;
            try {
                this.state = 1190;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1183;
                            this.match(choiceParser.AtExamplecl);
                        }
                        break;
                    case choiceParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1184;
                            this.match(choiceParser.AtExampleWithStr);
                        }
                        break;
                    case choiceParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1185;
                            this.match(choiceParser.AtExamplecol);
                            this.state = 1187;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === choiceParser.SENTENCE) {
                                {
                                    this.state = 1186;
                                    this.match(choiceParser.SENTENCE);
                                }
                            }
                            this.state = 1189;
                            this.match(choiceParser.EOF);
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
            this.enterRule(_localctx, 152, choiceParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 1231;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1192;
                            this.match(choiceParser.BracEnclose);
                            this.state = 1194;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1193;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1217;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    {
                                        this.state = 1196;
                                        this.s_and_w();
                                        this.state = 1206;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1197;
                                                        this.match(choiceParser.NL);
                                                        this.state = 1201;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1198;
                                                                        this.match(choiceParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1203;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1208;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                                        }
                                        this.state = 1212;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === choiceParser.NL) {
                                            {
                                                {
                                                    this.state = 1209;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                            this.state = 1214;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 1219;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1220;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1221;
                            this.match(choiceParser.BracEnclose);
                            this.state = 1227;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1225;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1222;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1223;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1224;
                                                this.match(choiceParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1229;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1230;
                            this.match(choiceParser.EOF);
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
            this.enterRule(_localctx, 154, choiceParser.RULE_reference);
            let _la;
            try {
                this.state = 1255;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1233;
                            this.match(choiceParser.AtReference);
                            this.state = 1238;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1238;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1234;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1235;
                                                this.match(choiceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1236;
                                                this.match(choiceParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1237;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1240;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                            this.state = 1242;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1243;
                            this.match(choiceParser.AtReference);
                            this.state = 1251;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1249;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1244;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1245;
                                                this.match(choiceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1246;
                                                this.match(choiceParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1247;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 1248;
                                                this.match(choiceParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1253;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1254;
                            this.match(choiceParser.EOF);
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
            this.enterRule(_localctx, 156, choiceParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1257;
                    this.match(choiceParser.AtProgress);
                    this.state = 1258;
                    this.s_and_w();
                    this.state = 1259;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1261;
                    this.match(choiceParser.AtDate);
                    this.state = 1265;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1265;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1262;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1263;
                                        this.match(choiceParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1264;
                                        this.match(choiceParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 1267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                    this.state = 1269;
                    this.match(choiceParser.CL);
                    this.state = 1271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === choiceParser.AtDate) {
                        {
                            this.state = 1270;
                            this.dateprop_chained();
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
        dateprop_chained() {
            let _localctx = new Dateprop_chainedContext(this._ctx, this.state);
            this.enterRule(_localctx, 160, choiceParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1273;
                    this.match(choiceParser.AtDate);
                    this.state = 1277;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1277;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1274;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1275;
                                        this.match(choiceParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1276;
                                        this.match(choiceParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 1279;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                    this.state = 1281;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 1317;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1283;
                            this.match(choiceParser.OPB);
                            this.state = 1285;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 188, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1284;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1308;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    {
                                        this.state = 1287;
                                        this.s_and_w();
                                        this.state = 1297;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1288;
                                                        this.match(choiceParser.NL);
                                                        this.state = 1292;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1289;
                                                                        this.match(choiceParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1294;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1299;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
                                        }
                                        this.state = 1303;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === choiceParser.NL) {
                                            {
                                                {
                                                    this.state = 1300;
                                                    this.match(choiceParser.NL);
                                                }
                                            }
                                            this.state = 1305;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 1310;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1311;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1312;
                            this.match(choiceParser.OPB);
                            this.state = 1314;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1313;
                                    this.s_and_w();
                                }
                            }
                            this.state = 1316;
                            this.match(choiceParser.EOF);
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
            this.enterRule(_localctx, 164, choiceParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1319;
                    this.match(choiceParser.OPQ);
                    this.state = 1321;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1320;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === choiceParser.CL)) {
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
                        this.state = 1323;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.OPDOT) | (1 << choiceParser.S) | (1 << choiceParser.BitMultichoice1) | (1 << choiceParser.BitMultichoice) | (1 << choiceParser.BitMultiresp1) | (1 << choiceParser.BitMultiresp) | (1 << choiceParser.BitMultichoicetext) | (1 << choiceParser.BitHighlighttext) | (1 << choiceParser.COMMENT) | (1 << choiceParser.Image_type) | (1 << choiceParser.Audio_type) | (1 << choiceParser.Video_type) | (1 << choiceParser.OPDOLL) | (1 << choiceParser.OPBUL) | (1 << choiceParser.OPESC) | (1 << choiceParser.OPRANGLES) | (1 << choiceParser.OPRANGLEL) | (1 << choiceParser.OPDANGLE) | (1 << choiceParser.OPU) | (1 << choiceParser.OPB) | (1 << choiceParser.OPQ) | (1 << choiceParser.OPA) | (1 << choiceParser.OPP) | (1 << choiceParser.OPM) | (1 << choiceParser.OPS) | (1 << choiceParser.OPR) | (1 << choiceParser.OPC) | (1 << choiceParser.OPHASH) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (choiceParser.DBLCOLON - 32)) | (1 << (choiceParser.PLUS - 32)) | (1 << (choiceParser.DotAt - 32)) | (1 << (choiceParser.Greater - 32)) | (1 << (choiceParser.Less - 32)) | (1 << (choiceParser.Lparen - 32)) | (1 << (choiceParser.Rparen - 32)) | (1 << (choiceParser.RightAngle - 32)) | (1 << (choiceParser.RightArrow - 32)) | (1 << (choiceParser.DBLEQ - 32)) | (1 << (choiceParser.HSPL - 32)) | (1 << (choiceParser.HSPL2 - 32)) | (1 << (choiceParser.SSPL - 32)) | (1 << (choiceParser.SSPL2 - 32)) | (1 << (choiceParser.StrParen - 32)) | (1 << (choiceParser.DCANY - 32)) | (1 << (choiceParser.ArticleText - 32)) | (1 << (choiceParser.NOTCL - 32)) | (1 << (choiceParser.NUMERIC - 32)) | (1 << (choiceParser.STRING - 32)) | (1 << (choiceParser.NL - 32)) | (1 << (choiceParser.SENTENCE - 32)) | (1 << (choiceParser.OPAT - 32)) | (1 << (choiceParser.AtProgress - 32)) | (1 << (choiceParser.AtReference - 32)) | (1 << (choiceParser.AtWidth - 32)) | (1 << (choiceParser.AtHeight - 32)) | (1 << (choiceParser.AtProgressPoints - 32)) | (1 << (choiceParser.AtShortanswer - 32)) | (1 << (choiceParser.AtLonganswer - 32)) | (1 << (choiceParser.AtExampleWithStr - 32)) | (1 << (choiceParser.AtExamplecol - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (choiceParser.AtExamplecl - 64)) | (1 << (choiceParser.AtPartialAnswerS - 64)) | (1 << (choiceParser.AtPartialAnswer - 64)) | (1 << (choiceParser.AtLabeltrue - 64)) | (1 << (choiceParser.AtLabelfalse - 64)) | (1 << (choiceParser.AtPoints - 64)) | (1 << (choiceParser.AtSrc - 64)) | (1 << (choiceParser.OPATALT - 64)) | (1 << (choiceParser.OPAMARK - 64)) | (1 << (choiceParser.ShowInIndex - 64)) | (1 << (choiceParser.OpAtCaption - 64)) | (1 << (choiceParser.OpAtLicense - 64)) | (1 << (choiceParser.OpAtCopyright - 64)) | (1 << (choiceParser.OpAtSearch - 64)) | (1 << (choiceParser.OpAtIsTracked - 64)) | (1 << (choiceParser.OpAtIsInfoOnly - 64)) | (1 << (choiceParser.AtDate - 64)) | (1 << (choiceParser.Http - 64)) | (1 << (choiceParser.Https - 64)) | (1 << (choiceParser.AmpAudio - 64)) | (1 << (choiceParser.AmpImage - 64)) | (1 << (choiceParser.AmpImageZoom - 64)) | (1 << (choiceParser.AmpImageWAudio - 64)) | (1 << (choiceParser.AmpVideo - 64)) | (1 << (choiceParser.AmpArticle - 64)) | (1 << (choiceParser.AmpDocument - 64)) | (1 << (choiceParser.AmpApp - 64)) | (1 << (choiceParser.AmpWebsite - 64)) | (1 << (choiceParser.AmpStillImageFilm - 64)) | (1 << (choiceParser.AmpPdf - 64)) | (1 << (choiceParser.OpAmpAudio - 64)) | (1 << (choiceParser.OpAmpImage - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (choiceParser.OpAmpImageZoom - 96)) | (1 << (choiceParser.OpAmpImageWAudio - 96)) | (1 << (choiceParser.OpAmpVideo - 96)) | (1 << (choiceParser.OpAmpArticle - 96)) | (1 << (choiceParser.OpAmpArticleAtt - 96)) | (1 << (choiceParser.OpAmpDocument - 96)) | (1 << (choiceParser.OpAmpApp - 96)) | (1 << (choiceParser.OpAmpWebsite - 96)) | (1 << (choiceParser.OpAmpStillImageFilm - 96)) | (1 << (choiceParser.BracEnclose - 96)) | (1 << (choiceParser.AmpAudioLink - 96)) | (1 << (choiceParser.AmpImageLink - 96)) | (1 << (choiceParser.AmpVideoLink - 96)) | (1 << (choiceParser.AmpArticleLink - 96)) | (1 << (choiceParser.AmpDocumentLink - 96)) | (1 << (choiceParser.AmpAppLink - 96)) | (1 << (choiceParser.AmpWebsiteLink - 96)) | (1 << (choiceParser.AmpStillImageFilmLink - 96)) | (1 << (choiceParser.OpAmpAudioLink - 96)) | (1 << (choiceParser.OpAmpImageLink - 96)) | (1 << (choiceParser.OpAmpVideoLink - 96)) | (1 << (choiceParser.OpAmpArticleLink - 96)) | (1 << (choiceParser.OpAmpDocumentLink - 96)) | (1 << (choiceParser.OpAmpAppLink - 96)) | (1 << (choiceParser.OpAmpWebsiteLink - 96)) | (1 << (choiceParser.OpAmpStillImageFilmLink - 96)) | (1 << (choiceParser.BitmarkMinus - 96)) | (1 << (choiceParser.BitmarkPlus - 96)) | (1 << (choiceParser.ColonText - 96)) | (1 << (choiceParser.Prosemirror - 96)) | (1 << (choiceParser.Placeholder - 96)) | (1 << (choiceParser.BASIC - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (choiceParser.JPG - 128)) | (1 << (choiceParser.PNG - 128)) | (1 << (choiceParser.GIF - 128)) | (1 << (choiceParser.SVG - 128)) | (1 << (choiceParser.MP2 - 128)) | (1 << (choiceParser.MP3 - 128)) | (1 << (choiceParser.MP4 - 128)) | (1 << (choiceParser.FLV - 128)) | (1 << (choiceParser.WMV - 128)) | (1 << (choiceParser.MPEG - 128)) | (1 << (choiceParser.MPG - 128)) | (1 << (choiceParser.TEL - 128)) | (1 << (choiceParser.DotArticleAtt - 128)) | (1 << (choiceParser.STAR - 128)) | (1 << (choiceParser.URL - 128)) | (1 << (choiceParser.LIST_LINE - 128)))) !== 0));
                    this.state = 1325;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 1339;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 198, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1327;
                            this.match(choiceParser.OPHASH);
                            this.state = 1330;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1330;
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
                                        case choiceParser.SENTENCE:
                                        case choiceParser.URL:
                                            {
                                                this.state = 1328;
                                                this.s_and_w();
                                            }
                                            break;
                                        case choiceParser.NL:
                                            {
                                                this.state = 1329;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 1332;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                            this.state = 1334;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1335;
                            this.match(choiceParser.OPHASH);
                            this.state = 1336;
                            this.s_and_w();
                            this.state = 1337;
                            this.match(choiceParser.EOF);
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
            this.enterRule(_localctx, 168, choiceParser.RULE_bool_label);
            try {
                this.state = 1349;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1341;
                            this.match(choiceParser.AtLabeltrue);
                            this.state = 1342;
                            this.s_and_w();
                            this.state = 1343;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1345;
                            this.match(choiceParser.AtLabelfalse);
                            this.state = 1346;
                            this.s_and_w();
                            this.state = 1347;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 170, choiceParser.RULE_progress_points);
            try {
                this.state = 1360;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 200, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1351;
                            this.match(choiceParser.AtProgressPoints);
                            this.state = 1352;
                            this.match(choiceParser.COLON);
                            this.state = 1353;
                            this.match(choiceParser.NUMERIC);
                            this.state = 1354;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1355;
                            this.match(choiceParser.AtProgressPoints);
                            this.state = 1356;
                            this.match(choiceParser.COLON);
                            this.state = 1357;
                            this.s_and_w();
                            this.state = 1358;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 172, choiceParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1362;
                    this.match(choiceParser.OpAtIsTracked);
                    this.state = 1363;
                    this.s_and_w();
                    this.state = 1364;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1366;
                    this.match(choiceParser.OpAtIsInfoOnly);
                    this.state = 1367;
                    this.s_and_w();
                    this.state = 1368;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1370;
                    this.atdef_();
                    this.state = 1380;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1374;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === choiceParser.NL) {
                                        {
                                            {
                                                this.state = 1371;
                                                this.match(choiceParser.NL);
                                            }
                                        }
                                        this.state = 1376;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1377;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 1382;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
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
            this.enterRule(_localctx, 178, choiceParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 1405;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case choiceParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1383;
                            this.match(choiceParser.OPA);
                            this.state = 1384;
                            this.s_and_w();
                            this.state = 1385;
                            _la = this._input.LA(1);
                            if (!(_la === choiceParser.COLON || _la === choiceParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1386;
                            this.s_and_w();
                            this.state = 1392;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1390;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 203, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1387;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1388;
                                                this.match(choiceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1389;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 1394;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1395;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case choiceParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1397;
                            this.match(choiceParser.OpAtCopyright);
                            this.state = 1401;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1398;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1403;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
                            }
                            this.state = 1404;
                            this.match(choiceParser.CL);
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
            this.enterRule(_localctx, 180, choiceParser.RULE_dollarans);
            let _la;
            try {
                this.state = 1426;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 211, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1407;
                            this.match(choiceParser.OPDOLL);
                            this.state = 1411;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1411;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1408;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1409;
                                                this.match(choiceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1410;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1413;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                            this.state = 1415;
                            this.match(choiceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1416;
                            this.match(choiceParser.OPDOLL);
                            this.state = 1422;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.NL - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                                {
                                    this.state = 1420;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 209, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1417;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1418;
                                                this.match(choiceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1419;
                                                this.match(choiceParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1424;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1425;
                            this.match(choiceParser.EOF);
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
            this.enterRule(_localctx, 182, choiceParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1428;
                    this.match(choiceParser.OPDANGLE);
                    this.state = 1430;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL) {
                        {
                            this.state = 1429;
                            this.s_and_w();
                        }
                    }
                    this.state = 1432;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1434;
                    this.match(choiceParser.DCANY);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 1440;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1436;
                                this.s_and_w();
                                this.state = 1438;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1437;
                                            this.match(choiceParser.NL);
                                        }
                                        break;
                                }
                            }
                        }
                        this.state = 1442;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << choiceParser.S) | (1 << choiceParser.COLON) | (1 << choiceParser.AMP))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (choiceParser.Greater - 35)) | (1 << (choiceParser.Less - 35)) | (1 << (choiceParser.RightAngle - 35)) | (1 << (choiceParser.RightArrow - 35)) | (1 << (choiceParser.DBLEQ - 35)) | (1 << (choiceParser.NUMERIC - 35)) | (1 << (choiceParser.STRING - 35)) | (1 << (choiceParser.SENTENCE - 35)))) !== 0) || _la === choiceParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.state = 1485;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 222, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1444;
                            this.match(choiceParser.STRING);
                            this.state = 1451;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1446;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1445;
                                                    this.match(choiceParser.S);
                                                }
                                            }
                                            this.state = 1448;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === choiceParser.S);
                                        this.state = 1450;
                                        this.match(choiceParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1453;
                            this.words();
                            this.state = 1460;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 218, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1455;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1454;
                                                    this.match(choiceParser.S);
                                                }
                                            }
                                            this.state = 1457;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === choiceParser.S);
                                        this.state = 1459;
                                        this.match(choiceParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1462;
                            this.match(choiceParser.NUMERIC);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1466;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === choiceParser.S) {
                                {
                                    {
                                        this.state = 1463;
                                        this.match(choiceParser.S);
                                    }
                                }
                                this.state = 1468;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1469;
                            this.match(choiceParser.COLON);
                            this.state = 1473;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1470;
                                            this.match(choiceParser.S);
                                        }
                                    }
                                }
                                this.state = 1475;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
                            }
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1476;
                            this.match(choiceParser.AMP);
                            this.state = 1480;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1477;
                                            this.match(choiceParser.S);
                                        }
                                    }
                                }
                                this.state = 1482;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1483;
                            this.match(choiceParser.DBLEQ);
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1484;
                            this.match(choiceParser.URL);
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
        bracket_escaped() {
            let _localctx = new Bracket_escapedContext(this._ctx, this.state);
            this.enterRule(_localctx, 190, choiceParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1487;
                    this.match(choiceParser.OPESC);
                    this.state = 1488;
                    this.s_and_w();
                    this.state = 1489;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 192, choiceParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1491;
                    this.match(choiceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 194, choiceParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1493;
                    _la = this._input.LA(1);
                    if (!(_la === choiceParser.SSPL || _la === choiceParser.SSPL2)) {
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
            this.enterRule(_localctx, 196, choiceParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1503;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1503;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case choiceParser.SENTENCE:
                                            {
                                                this.state = 1495;
                                                this.match(choiceParser.SENTENCE);
                                            }
                                            break;
                                        case choiceParser.AMP:
                                            {
                                                this.state = 1496;
                                                this.match(choiceParser.AMP);
                                            }
                                            break;
                                        case choiceParser.Greater:
                                            {
                                                this.state = 1497;
                                                this.match(choiceParser.Greater);
                                                this.state = 1498;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === choiceParser.Greater)) {
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
                                        case choiceParser.Less:
                                            {
                                                this.state = 1499;
                                                this.match(choiceParser.Less);
                                                this.state = 1500;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === choiceParser.Less)) {
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
                                        case choiceParser.RightArrow:
                                            {
                                                this.state = 1501;
                                                this.match(choiceParser.RightArrow);
                                            }
                                            break;
                                        case choiceParser.RightAngle:
                                            {
                                                this.state = 1502;
                                                this.match(choiceParser.RightAngle);
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
                        this.state = 1505;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
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
            this.enterRule(_localctx, 198, choiceParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1507;
                    this.match(choiceParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
                choiceParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(choiceParser._serializedATN));
            }
            return choiceParser.__ATN;
        }
    }
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
    choiceParser.SENTENCE = 53;
    choiceParser.OPAT = 54;
    choiceParser.AtProgress = 55;
    choiceParser.AtReference = 56;
    choiceParser.AtWidth = 57;
    choiceParser.AtHeight = 58;
    choiceParser.AtProgressPoints = 59;
    choiceParser.AtShortanswer = 60;
    choiceParser.AtLonganswer = 61;
    choiceParser.AtExampleWithStr = 62;
    choiceParser.AtExamplecol = 63;
    choiceParser.AtExamplecl = 64;
    choiceParser.AtPartialAnswerS = 65;
    choiceParser.AtPartialAnswer = 66;
    choiceParser.AtLabeltrue = 67;
    choiceParser.AtLabelfalse = 68;
    choiceParser.AtPoints = 69;
    choiceParser.AtSrc = 70;
    choiceParser.OPATALT = 71;
    choiceParser.OPAMARK = 72;
    choiceParser.ShowInIndex = 73;
    choiceParser.OpAtCaption = 74;
    choiceParser.OpAtLicense = 75;
    choiceParser.OpAtCopyright = 76;
    choiceParser.OpAtSearch = 77;
    choiceParser.OpAtIsTracked = 78;
    choiceParser.OpAtIsInfoOnly = 79;
    choiceParser.AtDate = 80;
    choiceParser.Http = 81;
    choiceParser.Https = 82;
    choiceParser.AmpAudio = 83;
    choiceParser.AmpImage = 84;
    choiceParser.AmpImageZoom = 85;
    choiceParser.AmpImageWAudio = 86;
    choiceParser.AmpVideo = 87;
    choiceParser.AmpArticle = 88;
    choiceParser.AmpDocument = 89;
    choiceParser.AmpApp = 90;
    choiceParser.AmpWebsite = 91;
    choiceParser.AmpStillImageFilm = 92;
    choiceParser.AmpPdf = 93;
    choiceParser.OpAmpAudio = 94;
    choiceParser.OpAmpImage = 95;
    choiceParser.OpAmpImageZoom = 96;
    choiceParser.OpAmpImageWAudio = 97;
    choiceParser.OpAmpVideo = 98;
    choiceParser.OpAmpArticle = 99;
    choiceParser.OpAmpArticleAtt = 100;
    choiceParser.OpAmpDocument = 101;
    choiceParser.OpAmpApp = 102;
    choiceParser.OpAmpWebsite = 103;
    choiceParser.OpAmpStillImageFilm = 104;
    choiceParser.BracEnclose = 105;
    choiceParser.AmpAudioLink = 106;
    choiceParser.AmpImageLink = 107;
    choiceParser.AmpVideoLink = 108;
    choiceParser.AmpArticleLink = 109;
    choiceParser.AmpDocumentLink = 110;
    choiceParser.AmpAppLink = 111;
    choiceParser.AmpWebsiteLink = 112;
    choiceParser.AmpStillImageFilmLink = 113;
    choiceParser.OpAmpAudioLink = 114;
    choiceParser.OpAmpImageLink = 115;
    choiceParser.OpAmpVideoLink = 116;
    choiceParser.OpAmpArticleLink = 117;
    choiceParser.OpAmpDocumentLink = 118;
    choiceParser.OpAmpAppLink = 119;
    choiceParser.OpAmpWebsiteLink = 120;
    choiceParser.OpAmpStillImageFilmLink = 121;
    choiceParser.BitmarkMinus = 122;
    choiceParser.BitmarkPlus = 123;
    choiceParser.ColonText = 124;
    choiceParser.Prosemirror = 125;
    choiceParser.Placeholder = 126;
    choiceParser.BASIC = 127;
    choiceParser.JPG = 128;
    choiceParser.PNG = 129;
    choiceParser.GIF = 130;
    choiceParser.SVG = 131;
    choiceParser.MP2 = 132;
    choiceParser.MP3 = 133;
    choiceParser.MP4 = 134;
    choiceParser.FLV = 135;
    choiceParser.WMV = 136;
    choiceParser.MPEG = 137;
    choiceParser.MPG = 138;
    choiceParser.TEL = 139;
    choiceParser.DotArticleAtt = 140;
    choiceParser.STAR = 141;
    choiceParser.URL = 142;
    choiceParser.LIST_LINE = 143;
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
    choiceParser.RULE_bracket_escaped = 95;
    choiceParser.RULE_clnsp = 96;
    choiceParser.RULE_sspl = 97;
    choiceParser.RULE_words = 98;
    choiceParser.RULE_sp = 99;
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
        "s_and_w", "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    choiceParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "'[^'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "':'", "'&'", "'::'", "'+'", "'.@'", "'>'", "'<'",
        "'('", "')'", "'\u25BA'", "'\u2192'", "'=='", undefined, undefined, undefined,
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
    choiceParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitMultichoice1", "BitMultichoice", "BitMultiresp1",
        "BitMultiresp", "BitMultichoicetext", "BitHighlighttext", "COMMENT", "Image_type",
        "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
        "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
        "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
        "Less", "Lparen", "Rparen", "RightAngle", "RightArrow", "DBLEQ", "HSPL",
        "HSPL2", "SSPL", "SSPL2", "StrParen", "DCANY", "ArticleText", "NOTCL",
        "NUMERIC", "STRING", "NL", "SENTENCE", "OPAT", "AtProgress", "AtReference",
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
        "ColonText", "Prosemirror", "Placeholder", "BASIC", "JPG", "PNG", "GIF",
        "SVG", "MP2", "MP3", "MP4", "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt",
        "STAR", "URL", "LIST_LINE",
    ];
    choiceParser.VOCABULARY = new VocabularyImpl(choiceParser._LITERAL_NAMES, choiceParser._SYMBOLIC_NAMES, []);
    choiceParser._serializedATNSegments = 3;
    choiceParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x91\u05E8\x04" +
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
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x03\x02\x03\x02\x07\x02\xCD" +
        "\n\x02\f\x02\x0E\x02\xD0\v\x02\x03\x02\x07\x02\xD3\n\x02\f\x02\x0E\x02" +
        "\xD6\v\x02\x06\x02\xD8\n\x02\r\x02\x0E\x02\xD9\x03\x02\x07\x02\xDD\n\x02" +
        "\f\x02\x0E\x02\xE0\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xEC\n\x04\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x06\x05\xF2\n\x05\r\x05\x0E\x05\xF3\x03\x05\x03\x05\x07\x05" +
        "\xF8\n\x05\f\x05\x0E\x05\xFB\v\x05\x07\x05\xFD\n\x05\f\x05\x0E\x05\u0100" +
        "\v\x05\x03\x05\x07\x05\u0103\n\x05\f\x05\x0E\x05\u0106\v\x05\x03\x05\x03" +
        "\x05\x07\x05\u010A\n\x05\f\x05\x0E\x05\u010D\v\x05\x03\x05\x05\x05\u0110" +
        "\n\x05\x03\x05\x05\x05\u0113\n\x05\x03\x05\x03\x05\x06\x05\u0117\n\x05" +
        "\r\x05\x0E\x05\u0118\x03\x05\x03\x05\x05\x05\u011D\n\x05\x03\x05\x03\x05" +
        "\x03\x05\x05\x05\u0122\n\x05\x03\x05\x07\x05\u0125\n\x05\f\x05\x0E\x05" +
        "\u0128\v\x05\x03\x05\x03\x05\x07\x05\u012C\n\x05\f\x05\x0E\x05\u012F\v" +
        "\x05\x03\x05\x07\x05\u0132\n\x05\f\x05\x0E\x05\u0135\v\x05\x05\x05\u0137" +
        "\n\x05\x03\x06\x03\x06\x05\x06\u013B\n\x06\x03\x07\x07\x07\u013E\n\x07" +
        "\f\x07\x0E\x07\u0141\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x06" +
        "\b\u0149\n\b\r\b\x0E\b\u014A\x03\b\x03\b\x07\b\u014F\n\b\f\b\x0E\b\u0152" +
        "\v\b\x07\b\u0154\n\b\f\b\x0E\b\u0157\v\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
        "\x03\t\x06\t\u015F\n\t\r\t\x0E\t\u0160\x03\t\x03\t\x07\t\u0165\n\t\f\t" +
        "\x0E\t\u0168\v\t\x07\t\u016A\n\t\f\t\x0E\t\u016D\v\t\x03\t\x07\t\u0170" +
        "\n\t\f\t\x0E\t\u0173\v\t\x03\t\x03\t\x07\t\u0177\n\t\f\t\x0E\t\u017A\v" +
        "\t\x03\t\x05\t\u017D\n\t\x03\t\x03\t\x06\t\u0181\n\t\r\t\x0E\t\u0182\x03" +
        "\t\x03\t\x05\t\u0187\n\t\x03\t\x03\t\x07\t\u018B\n\t\f\t\x0E\t\u018E\v" +
        "\t\x05\t\u0190\n\t\x03\t\x07\t\u0193\n\t\f\t\x0E\t\u0196\v\t\x03\t\x03" +
        "\t\x07\t\u019A\n\t\f\t\x0E\t\u019D\v\t\x03\t\x07\t\u01A0\n\t\f\t\x0E\t" +
        "\u01A3\v\t\x05\t\u01A5\n\t\x03\n\x03\n\x03\n\x03\n\x06\n\u01AB\n\n\r\n" +
        "\x0E\n\u01AC\x03\n\x03\n\x07\n\u01B1\n\n\f\n\x0E\n\u01B4\v\n\x06\n\u01B6" +
        "\n\n\r\n\x0E\n\u01B7\x03\n\x03\n\x07\n\u01BC\n\n\f\n\x0E\n\u01BF\v\n\x03" +
        "\n\x03\n\x07\n\u01C3\n\n\f\n\x0E\n\u01C6\v\n\x03\n\x07\n\u01C9\n\n\f\n" +
        "\x0E\n\u01CC\v\n\x05\n\u01CE\n\n\x03\v\x03\v\x03\v\x03\v\x06\v\u01D4\n" +
        "\v\r\v\x0E\v\u01D5\x03\v\x03\v\x07\v\u01DA\n\v\f\v\x0E\v\u01DD\v\v\x07" +
        "\v\u01DF\n\v\f\v\x0E\v\u01E2\v\v\x03\v\x07\v\u01E5\n\v\f\v\x0E\v\u01E8" +
        "\v\v\x03\v\x07\v\u01EB\n\v\f\v\x0E\v\u01EE\v\v\x03\v\x03\v\x07\v\u01F2" +
        "\n\v\f\v\x0E\v\u01F5\v\v\x03\v\x07\v\u01F8\n\v\f\v\x0E\v\u01FB\v\v\x05" +
        "\v\u01FD\n\v\x03\f\x03\f\x07\f\u0201\n\f\f\f\x0E\f\u0204\v\f\x03\f\x03" +
        "\f\x03\f\x06\f\u0209\n\f\r\f\x0E\f\u020A\x06\f\u020D\n\f\r\f\x0E\f\u020E" +
        "\x03\r\x03\r\x03\r\x03\r\x06\r\u0215\n\r\r\r\x0E\r\u0216\x03\r\x03\r\x07" +
        "\r\u021B\n\r\f\r\x0E\r\u021E\v\r\x07\r\u0220\n\r\f\r\x0E\r\u0223\v\r\x03" +
        "\r\x07\r\u0226\n\r\f\r\x0E\r\u0229\v\r\x03\r\x07\r\u022C\n\r\f\r\x0E\r" +
        "\u022F\v\r\x03\r\x03\r\x07\r\u0233\n\r\f\r\x0E\r\u0236\v\r\x03\r\x07\r" +
        "\u0239\n\r\f\r\x0E\r\u023C\v\r\x05\r\u023E\n\r\x03\x0E\x03\x0E\x07\x0E" +
        "\u0242\n\x0E\f\x0E\x0E\x0E\u0245\v\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E" +
        "\u024A\n\x0E\r\x0E\x0E\x0E\u024B\x06\x0E\u024E\n\x0E\r\x0E\x0E\x0E\u024F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0269\n\x0F\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\u0271\n\x10\f\x10\x0E\x10" +
        "\u0274\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u027A\n\x11\x03\x11" +
        "\x07\x11\u027D\n\x11\f\x11\x0E\x11\u0280\v\x11\x03\x11\x03\x11\x03\x12" +
        "\x03\x12\x05\x12\u0286\n\x12\x03\x12\x05\x12\u0289\n\x12\x03\x12\x07\x12" +
        "\u028C\n\x12\f\x12\x0E\x12\u028F\v\x12\x03\x12\x03\x12\x05\x12\u0293\n" +
        "\x12\x07\x12\u0295\n\x12\f\x12\x0E\x12\u0298\v\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x07\x13\u029F\n\x13\f\x13\x0E\x13\u02A2\v\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u02A9\n\x14\f\x14\x0E\x14" +
        "\u02AC\v\x14\x03\x15\x05\x15\u02AF\n\x15\x03\x15\x03\x15\x05\x15\u02B3" +
        "\n\x15\x03\x15\x03\x15\x06\x15\u02B7\n\x15\r\x15\x0E\x15\u02B8\x03\x15" +
        "\x03\x15\x03\x16\x05\x16\u02BE\n\x16\x03\x16\x03\x16\x05\x16\u02C2\n\x16" +
        "\x03\x16\x03\x16\x06\x16\u02C6\n\x16\r\x16\x0E\x16\u02C7\x03\x16\x03\x16" +
        "\x03\x17\x05\x17\u02CD\n\x17\x03\x17\x03\x17\x05\x17\u02D1\n\x17\x03\x17" +
        "\x03\x17\x03\x17\x03\x18\x05\x18\u02D7\n\x18\x03\x18\x03\x18\x05\x18\u02DB" +
        "\n\x18\x03\x18\x03\x18\x03\x18\x03\x19\x05\x19\u02E1\n\x19\x03\x19\x03" +
        "\x19\x07\x19\u02E5\n\x19\f\x19\x0E\x19\u02E8\v\x19\x03\x1A\x05\x1A\u02EB" +
        "\n\x1A\x03\x1A\x03\x1A\x07\x1A\u02EF\n\x1A\f\x1A\x0E\x1A\u02F2\v\x1A\x03" +
        "\x1B\x05\x1B\u02F5\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1D\x03\x1D\x05\x1D\u02FF\n\x1D\x03\x1D\x03\x1D\x07\x1D\u0303\n\x1D" +
        "\f\x1D\x0E\x1D\u0306\v\x1D\x03\x1E\x03\x1E\x05\x1E\u030A\n\x1E\x03\x1E" +
        "\x03\x1E\x05\x1E\u030E\n\x1E\x05\x1E\u0310\n\x1E\x03\x1E\x03\x1E\x03\x1F" +
        "\x03\x1F\x03\x1F\x06\x1F\u0317\n\x1F\r\x1F\x0E\x1F\u0318\x03\x1F\x05\x1F" +
        "\u031C\n\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03#\x05#" +
        "\u0328\n#\x03$\x03$\x03$\x03$\x03%\x07%\u032F\n%\f%\x0E%\u0332\v%\x03" +
        "%\x03%\x07%\u0336\n%\f%\x0E%\u0339\v%\x03&\x03&\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0346\n\'\x03(\x03(\x03(\x03(\x05" +
        "(\u034C\n(\x03)\x03)\x03)\x05)\u0351\n)\x03)\x03)\x05)\u0355\n)\x03)\x03" +
        ")\x05)\u0359\n)\x03)\x05)\u035C\n)\x03*\x03*\x03*\x05*\u0361\n*\x03+\x03" +
        "+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x032\x03" +
        "2\x033\x033\x034\x034\x034\x054\u0378\n4\x034\x034\x034\x054\u037D\n4" +
        "\x054\u037F\n4\x035\x035\x036\x036\x036\x036\x036\x036\x056\u0389\n6\x03" +
        "7\x037\x037\x037\x037\x037\x037\x037\x057\u0393\n7\x038\x038\x038\x03" +
        "8\x038\x038\x038\x038\x058\u039D\n8\x039\x039\x039\x039\x059\u03A3\n9" +
        "\x039\x039\x039\x039\x039\x059\u03AA\n9\x03:\x03:\x07:\u03AE\n:\f:\x0E" +
        ":\u03B1\v:\x03;\x03;\x03;\x07;\u03B6\n;\f;\x0E;\u03B9\v;\x03;\x03;\x03" +
        ";\x03<\x03<\x07<\u03C0\n<\f<\x0E<\u03C3\v<\x03=\x03=\x03=\x03=\x03=\x03" +
        "=\x03=\x03=\x05=\u03CD\n=\x03>\x03>\x07>\u03D1\n>\f>\x0E>\u03D4\v>\x03" +
        ">\x03>\x05>\u03D8\n>\x03?\x03?\x03?\x07?\u03DD\n?\f?\x0E?\u03E0\v?\x03" +
        "?\x03?\x03?\x03@\x03@\x03@\x05@\u03E8\n@\x03@\x03@\x05@\u03EC\n@\x03@" +
        "\x03@\x05@\u03F0\n@\x03@\x05@\u03F3\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x03A\x03A\x03A\x07A\u0400\nA\fA\x0EA\u0403\vA\x03A\x05A\u0406\n" +
        "A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x07B\u0413\n" +
        "B\fB\x0EB\u0416\vB\x03B\x05B\u0419\nB\x03C\x03C\x07C\u041D\nC\fC\x0EC" +
        "\u0420\vC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u042A\nD\x03E\x03" +
        "E\x03E\x05E\u042F\nE\x03E\x03E\x03E\x05E\u0434\nE\x05E\u0436\nE\x03F\x03" +
        "F\x03F\x05F\u043B\nF\x03F\x03F\x03F\x05F\u0440\nF\x05F\u0442\nF\x03G\x03" +
        "G\x03G\x05G\u0447\nG\x03G\x03G\x07G\u044B\nG\fG\x0EG\u044E\vG\x03G\x03" +
        "G\x06G\u0452\nG\rG\x0EG\u0453\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x07G" +
        "\u045D\nG\fG\x0EG\u0460\vG\x03G\x05G\u0463\nG\x03H\x03H\x03H\x03H\x03" +
        "I\x03I\x03J\x03J\x03J\x07J\u046E\nJ\fJ\x0EJ\u0471\vJ\x03J\x05J\u0474\n" +
        "J\x03J\x03J\x03J\x03J\x07J\u047A\nJ\fJ\x0EJ\u047D\vJ\x03J\x03J\x07J\u0481" +
        "\nJ\fJ\x0EJ\u0484\vJ\x03J\x05J\u0487\nJ\x05J\u0489\nJ\x03K\x03K\x03K\x03" +
        "K\x07K\u048F\nK\fK\x0EK\u0492\vK\x03K\x03K\x03L\x03L\x05L\u0498\nL\x03" +
        "L\x03L\x03L\x05L\u049D\nL\x03L\x05L\u04A0\nL\x03M\x03M\x03M\x03M\x05M" +
        "\u04A6\nM\x03M\x05M\u04A9\nM\x03N\x03N\x05N\u04AD\nN\x03N\x03N\x03N\x07" +
        "N\u04B2\nN\fN\x0EN\u04B5\vN\x07N\u04B7\nN\fN\x0EN\u04BA\vN\x03N\x07N\u04BD" +
        "\nN\fN\x0EN\u04C0\vN\x07N\u04C2\nN\fN\x0EN\u04C5\vN\x03N\x03N\x03N\x03" +
        "N\x03N\x07N\u04CC\nN\fN\x0EN\u04CF\vN\x03N\x05N\u04D2\nN\x03O\x03O\x03" +
        "O\x03O\x03O\x06O\u04D9\nO\rO\x0EO\u04DA\x03O\x03O\x03O\x03O\x03O\x03O" +
        "\x03O\x07O\u04E4\nO\fO\x0EO\u04E7\vO\x03O\x05O\u04EA\nO\x03P\x03P\x03" +
        "P\x03P\x03Q\x03Q\x03Q\x03Q\x06Q\u04F4\nQ\rQ\x0EQ\u04F5\x03Q\x03Q\x05Q" +
        "\u04FA\nQ\x03R\x03R\x03R\x03R\x06R\u0500\nR\rR\x0ER\u0501\x03R\x03R\x03" +
        "S\x03S\x05S\u0508\nS\x03S\x03S\x03S\x07S\u050D\nS\fS\x0ES\u0510\vS\x07" +
        "S\u0512\nS\fS\x0ES\u0515\vS\x03S\x07S\u0518\nS\fS\x0ES\u051B\vS\x07S\u051D" +
        "\nS\fS\x0ES\u0520\vS\x03S\x03S\x03S\x05S\u0525\nS\x03S\x05S\u0528\nS\x03" +
        "T\x03T\x06T\u052C\nT\rT\x0ET\u052D\x03T\x03T\x03U\x03U\x03U\x06U\u0535" +
        "\nU\rU\x0EU\u0536\x03U\x03U\x03U\x03U\x03U\x05U\u053E\nU\x03V\x03V\x03" +
        "V\x03V\x03V\x03V\x03V\x03V\x05V\u0548\nV\x03W\x03W\x03W\x03W\x03W\x03" +
        "W\x03W\x03W\x03W\x05W\u0553\nW\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03" +
        "Y\x03Z\x03Z\x07Z\u055F\nZ\fZ\x0EZ\u0562\vZ\x03Z\x07Z\u0565\nZ\fZ\x0EZ" +
        "\u0568\vZ\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x07[\u0571\n[\f[\x0E[\u0574" +
        "\v[\x03[\x03[\x03[\x03[\x07[\u057A\n[\f[\x0E[\u057D\v[\x03[\x05[\u0580" +
        "\n[\x03\\\x03\\\x03\\\x03\\\x06\\\u0586\n\\\r\\\x0E\\\u0587\x03\\\x03" +
        "\\\x03\\\x03\\\x03\\\x07\\\u058F\n\\\f\\\x0E\\\u0592\v\\\x03\\\x05\\\u0595" +
        "\n\\\x03]\x03]\x05]\u0599\n]\x03]\x03]\x03^\x03^\x03_\x03_\x05_\u05A1" +
        "\n_\x06_\u05A3\n_\r_\x0E_\u05A4\x03`\x03`\x06`\u05A9\n`\r`\x0E`\u05AA" +
        "\x03`\x05`\u05AE\n`\x03`\x03`\x06`\u05B2\n`\r`\x0E`\u05B3\x03`\x05`\u05B7" +
        "\n`\x03`\x03`\x07`\u05BB\n`\f`\x0E`\u05BE\v`\x03`\x03`\x07`\u05C2\n`\f" +
        "`\x0E`\u05C5\v`\x03`\x03`\x07`\u05C9\n`\f`\x0E`\u05CC\v`\x03`\x03`\x05" +
        "`\u05D0\n`\x03a\x03a\x03a\x03a\x03b\x03b\x03c\x03c\x03d\x03d\x03d\x03" +
        "d\x03d\x03d\x03d\x03d\x06d\u05E2\nd\rd\x0Ed\u05E3\x03e\x03e\x03e\x06\u0401" +
        "\u0414\u045E\u057B\x02\x02f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
        "\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
        "\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\x02\x16\x03\x02,-\x03\x02\x1F" +
        "\x1F\x07\x02Z[]^ls|}\x7F\x80\x04\x02YYnn\x04\x02ZZoo\x04\x02[[pp\x04\x02" +
        "\\\\qq\x04\x02]]rr\x04\x02^^ss\x04\x02eeww\x04\x02ggxx\x04\x02hhyy\x04" +
        "\x02iizz\x04\x02jj{{\x03\x02;<\x04\x02IILO\x04\x02  \"\"\x03\x02./\x03" +
        "\x02%%\x03\x02&&\x02\u06B1\x02\xD7\x03\x02\x02\x02\x04\xE3\x03\x02\x02" +
        "\x02\x06\xEB\x03\x02\x02\x02\b\xED\x03\x02\x02\x02\n\u013A\x03\x02\x02" +
        "\x02\f\u013F\x03\x02\x02\x02\x0E\u0144\x03\x02\x02\x02\x10\u015A\x03\x02" +
        "\x02\x02\x12\u01A6\x03\x02\x02\x02\x14\u01CF\x03\x02\x02\x02\x16\u020C" +
        "\x03\x02\x02\x02\x18\u0210\x03\x02\x02\x02\x1A\u024D\x03\x02\x02\x02\x1C" +
        "\u0268\x03\x02\x02\x02\x1E\u026A\x03\x02\x02\x02 \u0275\x03\x02\x02\x02" +
        "\"\u0285\x03\x02\x02\x02$\u0299\x03\x02\x02\x02&\u02A3\x03\x02\x02\x02" +
        "(\u02AE\x03\x02\x02\x02*\u02BD\x03\x02\x02\x02,\u02CC\x03\x02\x02\x02" +
        ".\u02D6\x03\x02\x02\x020\u02E0\x03\x02\x02\x022\u02EA\x03\x02\x02\x02" +
        "4\u02F4\x03\x02\x02\x026\u02F8\x03\x02\x02\x028\u02FE\x03\x02\x02\x02" +
        ":\u0307\x03\x02\x02\x02<\u031B\x03\x02\x02\x02>\u031D\x03\x02\x02\x02" +
        "@\u031F\x03\x02\x02\x02B\u0321\x03\x02\x02\x02D\u0323\x03\x02\x02\x02" +
        "F\u0329\x03\x02\x02\x02H\u0330\x03\x02\x02\x02J\u033A\x03\x02\x02\x02" +
        "L\u0345\x03\x02\x02\x02N\u034B\x03\x02\x02\x02P\u035B\x03\x02\x02\x02" +
        "R\u035D\x03\x02\x02\x02T\u0362\x03\x02\x02\x02V\u0364\x03\x02\x02\x02" +
        "X\u0366\x03\x02\x02\x02Z\u0368\x03\x02\x02\x02\\\u036A\x03\x02\x02\x02" +
        "^\u036C\x03\x02\x02\x02`\u036E\x03\x02\x02\x02b\u0370\x03\x02\x02\x02" +
        "d\u0372\x03\x02\x02\x02f\u037E\x03\x02\x02\x02h\u0380\x03\x02\x02\x02" +
        "j\u0388\x03\x02\x02\x02l\u038A\x03\x02\x02\x02n\u0394\x03\x02\x02\x02" +
        "p\u039E\x03\x02\x02\x02r\u03AB\x03\x02\x02\x02t\u03B2\x03\x02\x02\x02" +
        "v\u03BD\x03\x02\x02\x02x\u03C4\x03\x02\x02\x02z\u03CE\x03\x02\x02\x02" +
        "|\u03D9\x03\x02\x02\x02~\u03F2\x03\x02\x02\x02\x80\u0405\x03\x02\x02\x02" +
        "\x82\u0418\x03\x02\x02\x02\x84\u041A\x03\x02\x02\x02\x86\u0421\x03\x02" +
        "\x02\x02\x88\u0435\x03\x02\x02\x02\x8A\u0441\x03\x02\x02\x02\x8C\u0462" +
        "\x03\x02\x02\x02\x8E\u0464\x03\x02\x02\x02\x90\u0468\x03\x02\x02\x02\x92" +
        "\u0488\x03\x02\x02\x02\x94\u048A\x03\x02\x02\x02\x96\u049F\x03\x02\x02" +
        "\x02\x98\u04A8\x03\x02\x02\x02\x9A\u04D1\x03\x02\x02\x02\x9C\u04E9\x03" +
        "\x02\x02\x02\x9E\u04EB\x03\x02\x02\x02\xA0\u04EF\x03\x02\x02\x02\xA2\u04FB" +
        "\x03\x02\x02\x02\xA4\u0527\x03\x02\x02\x02\xA6\u0529\x03\x02\x02\x02\xA8" +
        "\u053D\x03\x02\x02\x02\xAA\u0547\x03\x02\x02\x02\xAC\u0552\x03\x02\x02" +
        "\x02\xAE\u0554\x03\x02\x02\x02\xB0\u0558\x03\x02\x02\x02\xB2\u055C\x03" +
        "\x02\x02\x02\xB4\u057F\x03\x02\x02\x02\xB6\u0594\x03\x02\x02\x02\xB8\u0596" +
        "\x03\x02\x02\x02\xBA\u059C\x03\x02\x02\x02\xBC\u05A2\x03\x02\x02\x02\xBE" +
        "\u05CF\x03\x02\x02\x02\xC0\u05D1\x03\x02\x02\x02\xC2\u05D5\x03\x02\x02" +
        "\x02\xC4\u05D7\x03\x02\x02\x02\xC6\u05E1\x03\x02\x02\x02\xC8\u05E5\x03" +
        "\x02\x02\x02\xCA\xD4\x05\x04\x03\x02\xCB\xCD\x07\x04\x02\x02\xCC\xCB\x03" +
        "\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03" +
        "\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD3\x07" +
        "6\x02\x02\xD2\xCE\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03" +
        "\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03" +
        "\x02\x02\x02\xD7\xCA\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xD7\x03" +
        "\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDE\x03\x02\x02\x02\xDB\xDD\x07" +
        "6\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03" +
        "\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDE\x03" +
        "\x02\x02\x02\xE1\xE2\x07\x02\x02\x03\xE2\x03\x03\x02\x02\x02\xE3\xE4\x05" +
        "\x06\x04\x02\xE4\x05\x03\x02\x02\x02\xE5\xEC\x05\b\x05\x02\xE6\xEC\x05" +
        "\x0E\b\x02\xE7\xEC\x05\x10\t\x02\xE8\xEC\x05\x12\n\x02\xE9\xEC\x05\x14" +
        "\v\x02\xEA\xEC\x05\x18\r\x02\xEB\xE5\x03\x02\x02\x02\xEB\xE6\x03\x02\x02" +
        "\x02\xEB\xE7\x03\x02\x02\x02\xEB\xE8\x03\x02\x02\x02\xEB\xE9\x03\x02\x02" +
        "\x02\xEB\xEA\x03\x02\x02\x02\xEC\x07\x03\x02\x02\x02\xED\xEE\x07\x06\x02" +
        "\x02\xEE\xEF\x05H%\x02\xEF\xF1\x07\x1F\x02\x02\xF0\xF2\x076\x02\x02\xF1" +
        "\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3" +
        "\xF4\x03\x02\x02\x02\xF4\xFE\x03\x02\x02\x02\xF5\xF9\x05\x1C\x0F\x02\xF6" +
        "\xF8\x076\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9" +
        "\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB" +
        "\xF9\x03\x02\x02\x02\xFC\xF5\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
        "\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0116\x03\x02\x02" +
        "\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x076\x02\x02\u0102\u0101\x03" +
        "\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104" +
        "\u0105\x03\x02\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\u0104\x03\x02" +
        "\x02\x02\u0107\u010F\x05\n\x06\x02\u0108\u010A\x076\x02\x02\u0109\u0108" +
        "\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02" +
        "\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D\u010B\x03" +
        "\x02\x02\x02\u010E\u0110\x05\f\x07\x02\u010F\u010B\x03\x02\x02\x02\u010F" +
        "\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u0113\x05\xBE" +
        "`\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114" +
        "\x03\x02\x02\x02\u0114\u0115\x05\"\x12\x02\u0115\u0117\x03\x02\x02\x02" +
        "\u0116\u0104\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0116\x03" +
        "\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A" +
        "\u011D\t\x02\x02\x02\u011B\u011D\x076\x02\x02\u011C\u011A\x03\x02\x02" +
        "\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0121\x03\x02\x02\x02\u011E\u011F" +
        "\x05\x1C\x0F\x02\u011F\u0120\x076\x02\x02\u0120\u0122\x03\x02\x02\x02" +
        "\u0121\u011E\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0126\x03" +
        "\x02\x02\x02\u0123\u0125\x076\x02\x02\u0124\u0123\x03\x02\x02\x02\u0125" +
        "\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02" +
        "\x02\x02\u0127\u0136\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129" +
        "\u0133\x05B\"\x02\u012A\u012C\x076\x02\x02\u012B\u012A\x03\x02\x02\x02" +
        "\u012C\u012F\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03" +
        "\x02\x02\x02\u012E\u0130\x03";
    choiceParser._serializedATNSegment1 = "\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0132\x05B\"\x02\u0131" +
        "\u012D\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02" +
        "\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0137\x03\x02\x02\x02\u0135" +
        "\u0133\x03\x02\x02\x02\u0136\u0129\x03\x02\x02\x02\u0136\u0137\x03\x02" +
        "\x02\x02\u0137\t\x03\x02\x02\x02\u0138\u013B\t\x02\x02\x02\u0139\u013B" +
        "\x076\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u0139\x03\x02\x02\x02" +
        "\u013B\v\x03\x02\x02\x02\u013C\u013E\x05\x1C\x0F\x02\u013D\u013C\x03\x02" +
        "\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
        "\u0140\x03\x02\x02\x02\u0140\u0142\x03\x02\x02\x02\u0141\u013F\x03\x02" +
        "\x02\x02\u0142\u0143\x076\x02\x02\u0143\r\x03\x02\x02\x02\u0144\u0145" +
        "\x07\x05\x02\x02\u0145\u0146\x05H%\x02\u0146\u0148\x07\x1F\x02\x02\u0147" +
        "\u0149\x076\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02" +
        "\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u0155" +
        "\x03\x02\x02\x02\u014C\u0150\x05\x1C\x0F\x02\u014D\u014F\x076\x02\x02" +
        "\u014E\u014D\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03" +
        "\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152" +
        "\u0150\x03\x02\x02\x02\u0153\u014C\x03\x02\x02\x02\u0154\u0157\x03\x02" +
        "\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
        "\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u0159\x05\"\x12" +
        "\x02\u0159\x0F\x03\x02\x02\x02\u015A\u015B\x07\b\x02\x02\u015B\u015C\x05" +
        "H%\x02\u015C\u015E\x07\x1F\x02\x02\u015D\u015F\x076\x02\x02\u015E\u015D" +
        "\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02" +
        "\u0160\u0161\x03\x02\x02\x02\u0161\u016B\x03\x02\x02\x02\u0162\u0166\x05" +
        "\x1C\x0F\x02\u0163\u0165\x076\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165" +
        "\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02" +
        "\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169" +
        "\u0162\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02" +
        "\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u0180\x03\x02\x02\x02\u016D" +
        "\u016B\x03\x02\x02\x02\u016E\u0170\x076\x02\x02\u016F\u016E\x03\x02\x02" +
        "\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172" +
        "\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02" +
        "\u0174\u017C\x05\n\x06\x02\u0175\u0177\x076\x02\x02\u0176\u0175\x03\x02" +
        "\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178" +
        "\u0179\x03\x02\x02\x02\u0179\u017B\x03\x02\x02\x02\u017A\u0178\x03\x02" +
        "\x02\x02\u017B\u017D\x05\f\x07\x02\u017C\u0178\x03\x02\x02\x02\u017C\u017D" +
        "\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x05\"\x12\x02" +
        "\u017F\u0181\x03\x02\x02\x02\u0180\u0171\x03\x02\x02\x02\u0181\u0182\x03" +
        "\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
        "\u0186\x03\x02\x02\x02\u0184\u0187\t\x02\x02\x02\u0185\u0187\x076\x02" +
        "\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0185\x03\x02\x02\x02\u0186\u0187" +
        "\x03\x02\x02\x02\u0187\u018F\x03\x02\x02\x02\u0188\u018C\x05\x1C\x0F\x02" +
        "\u0189\u018B\x076\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018E\x03" +
        "\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
        "\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0188\x03\x02" +
        "\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0194\x03\x02\x02\x02\u0191" +
        "\u0193\x076\x02\x02\u0192\u0191\x03\x02\x02\x02\u0193\u0196\x03\x02\x02" +
        "\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u01A4" +
        "\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u01A1\x05B\"\x02\u0198" +
        "\u019A\x076\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019D\x03\x02\x02" +
        "\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E" +
        "\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E\u01A0\x05B\"\x02\u019F" +
        "\u019B\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
        "\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3" +
        "\u01A1\x03\x02\x02\x02\u01A4\u0197\x03\x02\x02\x02\u01A4\u01A5\x03\x02" +
        "\x02\x02\u01A5\x11\x03\x02\x02\x02\u01A6\u01A7\x07\x07\x02\x02\u01A7\u01A8" +
        "\x05H%\x02\u01A8\u01AA\x07\x1F\x02\x02\u01A9\u01AB\x076\x02\x02\u01AA" +
        "\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
        "\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B5\x03\x02\x02\x02\u01AE" +
        "\u01B2\x05\x1C\x0F\x02\u01AF\u01B1\x076\x02\x02\u01B0\u01AF\x03\x02\x02" +
        "\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3" +
        "\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02" +
        "\u01B5\u01AE\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B5\x03" +
        "\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9" +
        "\u01BD\x05\"\x12\x02\u01BA\u01BC\x076\x02\x02\u01BB\u01BA\x03\x02\x02" +
        "\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE" +
        "\x03\x02\x02\x02\u01BE\u01CD\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02" +
        "\u01C0\u01CA\x05B\"\x02\u01C1\u01C3\x076\x02\x02\u01C2\u01C1\x03\x02\x02" +
        "\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5" +
        "\x03\x02\x02\x02\u01C5\u01C7\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02" +
        "\u01C7\u01C9\x05B\"\x02\u01C8\u01C4\x03\x02\x02\x02\u01C9\u01CC\x03\x02" +
        "\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
        "\u01CE\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01C0\x03\x02" +
        "\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\x13\x03\x02\x02\x02\u01CF\u01D0" +
        "\x07\t\x02\x02\u01D0\u01D1\x05H%\x02\u01D1\u01D3\x07\x1F\x02\x02\u01D2" +
        "\u01D4\x076\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02" +
        "\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01E0" +
        "\x03\x02\x02\x02\u01D7\u01DB\x05\x1C\x0F\x02\u01D8\u01DA\x076\x02\x02" +
        "\u01D9\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03" +
        "\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD" +
        "\u01DB\x03\x02\x02\x02\u01DE\u01D7\x03\x02\x02\x02\u01DF\u01E2\x03\x02" +
        "\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
        "\u01E6\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E5\x05\x16" +
        "\f\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4" +
        "\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01EC\x03\x02\x02\x02" +
        "\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EB\x076\x02\x02\u01EA\u01E9\x03" +
        "\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC" +
        "\u01ED\x03\x02\x02\x02\u01ED\u01FC\x03\x02\x02\x02\u01EE\u01EC\x03\x02" +
        "\x02\x02\u01EF\u01F9\x05B\"\x02\u01F0\u01F2\x076\x02\x02\u01F1\u01F0\x03" +
        "\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3" +
        "\u01F4\x03\x02\x02\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01F3\x03\x02" +
        "\x02\x02\u01F6\u01F8\x05B\"\x02\u01F7\u01F3\x03\x02\x02\x02\u01F8\u01FB" +
        "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
        "\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01EF\x03" +
        "\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\x15\x03\x02\x02\x02\u01FE" +
        "\u020D\x050\x19\x02\u01FF\u0201\x07\x04\x02\x02\u0200\u01FF\x03\x02\x02" +
        "\x02\u0201\u0204\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203" +
        "\x03\x02\x02\x02\u0203\u0205\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02" +
        "\u0205\u020D\x076\x02\x02\u0206\u020D\x05\xBE`\x02\u0207\u0209\x07\x04" +
        "\x02\x02\u0208\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
        "\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020D\x03\x02" +
        "\x02\x02\u020C\u01FE\x03\x02\x02\x02\u020C\u0202\x03\x02\x02\x02\u020C" +
        "\u0206\x03\x02\x02\x02\u020C\u0208\x03\x02\x02\x02\u020D\u020E\x03\x02" +
        "\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
        "\x17\x03\x02\x02\x02\u0210\u0211\x07\n\x02\x02\u0211\u0212\x05H%\x02\u0212" +
        "\u0214\x07\x1F\x02\x02\u0213\u0215\x076\x02\x02\u0214\u0213\x03\x02\x02" +
        "\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217" +
        "\x03\x02\x02\x02\u0217\u0221\x03\x02\x02\x02\u0218\u021C\x05\x1C\x0F\x02" +
        "\u0219\u021B\x076\x02\x02\u021A\u0219\x03\x02\x02\x02\u021B\u021E\x03" +
        "\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
        "\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0218\x03\x02" +
        "\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221" +
        "\u0222\x03\x02\x02\x02\u0222\u0227\x03\x02\x02\x02\u0223\u0221\x03\x02" +
        "\x02\x02\u0224\u0226\x05\x1A\x0E\x02\u0225\u0224\x03\x02\x02\x02\u0226" +
        "\u0229\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02" +
        "\x02\x02\u0228\u022D\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A" +
        "\u022C\x076\x02\x02\u022B\u022A\x03\x02\x02\x02\u022C\u022F\x03\x02\x02" +
        "\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u023D" +
        "\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u0230\u023A\x05B\"\x02\u0231" +
        "\u0233\x076\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u0236\x03\x02\x02" +
        "\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237" +
        "\x03\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237\u0239\x05B\"\x02\u0238" +
        "\u0234\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02" +
        "\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C" +
        "\u023A\x03\x02\x02\x02\u023D\u0230\x03\x02\x02\x02\u023D\u023E\x03\x02" +
        "\x02\x02\u023E\x19\x03\x02\x02\x02\u023F\u024E\x052\x1A\x02\u0240\u0242" +
        "\x07\x04\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02" +
        "\u0243\u0241\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0246\x03" +
        "\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0246\u024E\x076\x02\x02\u0247" +
        "\u024E\x05\xBE`\x02\u0248\u024A\x07\x04\x02\x02\u0249\u0248\x03\x02\x02" +
        "\x02\u024A\u024B\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C" +
        "\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u023F\x03\x02\x02\x02" +
        "\u024D\u0243\x03\x02\x02\x02\u024D\u0247\x03\x02\x02\x02\u024D\u0249\x03" +
        "\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F" +
        "\u0250\x03\x02\x02\x02\u0250\x1B\x03\x02\x02\x02\u0251\u0269\x07\x91\x02" +
        "\x02\u0252\u0269\x05\xBA^\x02\u0253\u0269\x05\x1E\x10\x02\u0254\u0269" +
        "\x05\xB2Z\x02\u0255\u0269\x05\x9CO\x02\u0256\u0269\x05\x92J\x02\u0257" +
        "\u0269\x05\xA8U\x02\u0258\u0269\x05\xA4S\x02\u0259\u0269\x05\xA6T\x02" +
        "\u025A\u0269\x05\xBE`\x02\u025B\u0269\x05\x98M\x02\u025C\u0269\x05\xAA" +
        "V\x02\u025D\u0269\x05z>\x02\u025E\u0269\x05\x84C\x02\u025F\u0269\x05v" +
        "<\x02\u0260\u0269\x05j6\x02\u0261\u0269\x05l7\x02\u0262\u0269\x05p9\x02" +
        "\u0263\u0269\x05n8\x02\u0264\u0269\x05r:\x02\u0265\u0269\x05\x96L\x02" +
        "\u0266\u0269\x05\xB8]\x02\u0267\u0269\x05\xC8e\x02\u0268\u0251\x03\x02" +
        "\x02\x02\u0268\u0252\x03\x02\x02\x02\u0268\u0253\x03\x02\x02\x02\u0268" +
        "\u0254\x03\x02\x02\x02\u0268\u0255\x03\x02\x02\x02\u0268\u0256\x03\x02" +
        "\x02\x02\u0268\u0257\x03\x02\x02\x02\u0268\u0258\x03\x02\x02\x02\u0268" +
        "\u0259\x03\x02\x02\x02\u0268\u025A\x03\x02\x02\x02\u0268\u025B\x03\x02" +
        "\x02\x02\u0268\u025C\x03\x02\x02\x02\u0268\u025D\x03\x02\x02\x02\u0268" +
        "\u025E\x03\x02\x02\x02\u0268\u025F\x03\x02\x02\x02\u0268\u0260\x03\x02" +
        "\x02\x02\u0268\u0261\x03\x02\x02\x02\u0268\u0262\x03\x02\x02\x02\u0268" +
        "\u0263\x03\x02\x02\x02\u0268\u0264\x03\x02\x02\x02\u0268\u0265\x03\x02" +
        "\x02\x02\u0268\u0266\x03\x02\x02\x02\u0268\u0267\x03\x02\x02\x02\u0269" +
        "\x1D\x03\x02\x02\x02\u026A\u0272\x05 \x11\x02\u026B\u0271\x05 \x11\x02" +
        "\u026C\u0271\x05\xA4S\x02\u026D\u0271\x05\xA6T\x02\u026E\u0271\x05\x92" +
        "J\x02\u026F\u0271\x05\x98M\x02\u0270\u026B\x03\x02\x02\x02\u0270\u026C" +
        "\x03\x02\x02\x02\u0270\u026D\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02" +
        "\u0270\u026F\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03" +
        "\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\x1F\x03\x02\x02\x02\u0274" +
        "\u0272\x03\x02\x02\x02\u0275\u0279\x07\x15\x02\x02\u0276\u027A\x074\x02" +
        "\x02\u0277\u027A\x075\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279\u0276" +
        "\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u0278\x03\x02\x02\x02" +
        "\u027A\u027E\x03\x02\x02\x02\u027B\u027D\x05\xBE`\x02\u027C\u027B\x03" +
        "\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E" +
        "\u027F\x03\x02\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280\u027E\x03\x02" +
        "\x02\x02\u0281\u0282\x05\xC2b\x02\u0282!\x03\x02\x02\x02\u0283\u0286\x05" +
        "$\x13\x02\u0284\u0286\x05&\x14\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0284" +
        "\x03\x02\x02\x02\u0286\u0296\x03\x02\x02\x02\u0287\u0289\x076\x02\x02" +
        "\u0288\u0287\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028D\x03" +
        "\x02\x02\x02\u028A\u028C\x07\x04\x02\x02\u028B\u028A\x03\x02\x02\x02\u028C" +
        "\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02" +
        "\x02\x02\u028E\u0292\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290" +
        "\u0293\x05$\x13\x02\u0291\u0293\x05&\x14\x02\u0292\u0290\x03\x02\x02\x02" +
        "\u0292\u0291\x03\x02\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294\u0288\x03" +
        "\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296" +
        "\u0297\x03\x02\x02\x02\u0297#\x03\x02\x02\x02\u0298\u0296\x03\x02\x02" +
        "\x02\u0299\u02A0\x05(\x15\x02\u029A\u029F\x05\x92J\x02\u029B\u029F\x05" +
        "\x98M\x02\u029C\u029F\x05\xA4S\x02\u029D\u029F\x05\xA6T\x02\u029E\u029A" +
        "\x03\x02\x02\x02\u029E\u029B\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02" +
        "\u029E\u029D\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03" +
        "\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1%\x03\x02\x02\x02\u02A2" +
        "\u02A0\x03\x02\x02\x02\u02A3\u02AA\x05*\x16\x02\u02A4\u02A9\x05\x92J\x02" +
        "\u02A5\u02A9\x05\x98M\x02\u02A6\u02A9\x05\xA4S\x02\u02A7\u02A9\x05\xA6" +
        "T\x02\u02A8\u02A4\x03\x02\x02\x02\u02A8\u02A5\x03\x02\x02\x02\u02A8\u02A6" +
        "\x03\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02" +
        "\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\'\x03\x02" +
        "\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AF\x05\x92J\x02\u02AE\u02AD" +
        "\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02" +
        "\u02B0\u02B2\x07\x19\x02\x02\u02B1\u02B3\x070\x02\x02\u02B2\u02B1\x03" +
        "\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4" +
        "\u02B7\x05\xBE`\x02\u02B5\u02B7\x076\x02\x02\u02B6\u02B4\x03\x02\x02\x02" +
        "\u02B6\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B6\x03" +
        "\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
        "\u02BB\x07\x1F\x02\x02\u02BB)\x03\x02\x02\x02\u02BC\u02BE\x05\x92J\x02" +
        "\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF\x03" +
        "\x02\x02\x02\u02BF\u02C1\x07\x1A\x02\x02\u02C0\u02C2\x070\x02\x02\u02C1" +
        "\u02C0\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C5\x03\x02" +
        "\x02\x02\u02C3\u02C6\x05\xBE`\x02\u02C4\u02C6\x076\x02\x02\u02C5\u02C3" +
        "\x03\x02\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02" +
        "\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03" +
        "\x02\x02\x02\u02C9\u02CA\x07\x1F\x02\x02\u02CA+\x03\x02\x02\x02\u02CB" +
        "\u02CD\x05\x92J\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02" +
        "\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x07\x19\x02\x02\u02CF\u02D1" +
        "\x070\x02\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02" +
        "\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x05\xBE`\x02\u02D3\u02D4\x07" +
        "\x1F\x02\x02\u02D4-\x03\x02\x02\x02\u02D5\u02D7\x05\x92J\x02\u02D6\u02D5" +
        "\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02" +
        "\u02D8\u02DA\x07\x1A\x02\x02\u02D9\u02DB\x070\x02\x02\u02DA\u02D9\x03" +
        "\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC" +
        "\u02DD\x05\xBE`\x02\u02DD\u02DE\x07\x1F\x02\x02\u02DE/\x03\x02\x02\x02" +
        "\u02DF\u02E1\x056\x1C\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03" +
        "\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E6\x058\x1D\x02\u02E3" +
        "\u02E5\x05<\x1F\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5\u02E8\x03\x02\x02" +
        "\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E71\x03" +
        "\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EB\x056\x1C\x02\u02EA" +
        "\u02E9\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03\x02" +
        "\x02\x02\u02EC\u02F0\x058\x1D\x02\u02ED\u02EF\x05<\x1F\x02\u02EE\u02ED" +
        "\x03\x02\x02\x02\u02EF\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02" +
        "\u02F0\u02F1\x03\x02\x02\x02\u02F13\x03\x02\x02\x02\u02F2\u02F0\x03\x02" +
        "\x02\x02\u02F3\u02F5\x056\x1C\x02\u02F4\u02F3\x03\x02\x02\x02\u02F4\u02F5" +
        "\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x05\"\x12\x02" +
        "\u02F75\x03\x02\x02\x02\u02F8\u02F9\x07\x1B\x02\x02\u02F9\u02FA\x05\xBE" +
        "`\x02\u02FA\u02FB\x07\x1F\x02\x02\u02FB7\x03\x02\x02\x02\u02FC\u02FF\x05" +
        ",\x17\x02\u02FD\u02FF\x05.\x18\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FD" +
        "\x03\x02\x02\x02\u02FF\u0304\x03\x02\x02\x02\u0300\u0303\x05,\x17\x02" +
        "\u0301\u0303\x05.\x18\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0301\x03" +
        "\x02\x02\x02\u0303\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0304" +
        "\u0305\x03\x02\x02\x02\u03059\x03\x02\x02\x02\u0306\u0304\x03\x02\x02" +
        "\x02\u0307\u030F\x07A\x02\x02\u0308\u030A\x076\x02\x02\u0309\u0308\x03" +
        "\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B" +
        "\u030D\x05\xBC_\x02\u030C\u030E\x076\x02\x02\u030D\u030C\x03\x02\x02\x02" +
        "\u030D\u030E\x03\x02\x02\x02\u030E\u0310\x03\x02\x02\x02\u030F\u0309\x03" +
        "\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311" +
        "\u0312\x07\x1F\x02\x02\u0312;\x03\x02\x02\x02\u0313\u031C\x05\x98M\x02" +
        "\u0314\u0316\x07\x17\x02\x02\u0315\u0317\n\x03\x02\x02\u0316\u0315\x03" +
        "\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318" +
        "\u0319\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031C\x07\x1F" +
        "\x02\x02\u031B\u0313\x03\x02\x02\x02\u031B\u0314\x03\x02\x02\x02\u031C" +
        "=\x03\x02\x02\x02\u031D\u031E\x07?\x02\x02\u031E?\x03\x02\x02\x02\u031F" +
        "\u0320\x07>\x02\x02\u0320A\x03\x02\x02\x02\u0321\u0322\x05\x1C\x0F\x02" +
        "\u0322C\x03\x02\x02\x02\u0323\u0324\x07\x10\x02\x02\u0324\u0325\x05\xBE" +
        "`\x02\u0325\u0327\x07\x1F\x02\x02\u0326\u0328\x05F$\x02\u0327\u0326\x03" +
        "\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328E\x03\x02\x02\x02\u0329" +
        "\u032A\x07G\x02\x02\u032A\u032B\x074\x02\x02\u032B\u032C\x07\x1F\x02\x02" +
        "\u032CG\x03\x02\x02\x02\u032D\u032F\x05J&\x02\u032E\u032D\x03\x02\x02" +
        "\x02\u032F\u0332\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331" +
        "\x03\x02\x02\x02\u0331\u0337\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02" +
        "\u0333\u0336\x07~\x02\x02\u0334\u0336\x05L\'\x02\u0335\u0333\x03\x02\x02" +
        "\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0335" +
        "\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338I\x03\x02\x02\x02\u0339" +
        "\u0337\x03\x02\x02\x02\u033A\u033B\t\x04\x02\x02\u033BK\x03\x02\x02\x02" +
        "\u033C\u0346\x05P)\x02\u033D\u0346\x05\x88E\x02\u033E\u0346\x05R*\x02" +
        "\u033F\u0346\x05T+\x02\u0340\u0346\x05V,\x02\u0341\u0346\x05X-\x02\u0342" +
        "\u0346\x05Z.\x02\u0343\u0346\x05\\/\x02\u0344\u0346\x07_\x02\x02\u0345" +
        "\u033C\x03\x02\x02\x02\u0345\u033D\x03\x02\x02\x02\u0345\u033E\x03\x02" +
        "\x02\x02\u0345\u033F\x03\x02\x02\x02\u0345\u0340\x03\x02\x02\x02\u0345" +
        "\u0341\x03\x02\x02\x02\u0345\u0342\x03\x02\x02\x02\u0345\u0343\x03\x02" +
        "\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346M\x03\x02\x02\x02\u0347\u034C" +
        "\x07|\x02\x02\u0348\u034C\x07}\x02\x02\u0349\u034C\x07~\x02\x02\u034A" +
        "\u034C\x03\x02\x02\x02\u034B\u0347\x03\x02\x02\x02\u034B\u0348\x03\x02" +
        "\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034A\x03\x02\x02\x02\u034C" +
        "O\x03\x02\x02\x02\u034D\u0350\x07V\x02\x02\u034E\u0351\x07\f\x02\x02\u034F" +
        "\u0351\x07\x8E\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u034F\x03\x02" +
        "\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u035C\x03\x02\x02\x02\u0352" +
        "\u0354\x07m\x02\x02\u0353\u0355\x07\f\x02\x02\u0354\u0353\x03\x02\x02" +
        "\x02\u0354\u0355\x03\x02\x02\x02\u0355\u035C\x03\x02\x02\x02\u0356\u0358" +
        "\x07W\x02\x02\u0357\u0359\x07\f\x02\x02\u0358\u0357\x03\x02\x02\x02\u0358" +
        "\u0359\x03\x02\x02\x02\u0359\u035C\x03\x02\x02\x02\u035A\u035C\x07X\x02" +
        "\x02\u035B\u034D\x03\x02\x02\x02\u035B\u0352\x03\x02\x02\x02\u035B\u0356" +
        "\x03\x02\x02\x02\u035B\u035A\x03\x02\x02\x02\u035CQ\x03\x02\x02\x02\u035D" +
        "\u0360\t\x05\x02\x02\u035E\u035F\x07 \x02\x02\u035F\u0361\x07\x0E\x02" +
        "\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361S\x03" +
        "\x02\x02\x02\u0362\u0363\t\x06\x02\x02\u0363U\x03\x02\x02\x02\u0364\u0365" +
        "\t\x07\x02\x02\u0365W\x03\x02\x02\x02\u0366\u0367\t\b\x02\x02\u0367Y\x03" +
        "\x02\x02\x02\u0368\u0369\t\t\x02\x02\u0369[\x03\x02\x02\x02\u036A\u036B" +
        "\t\n\x02\x02\u036B]\x03\x02\x02\x02\u036C\u036D\t\v\x02\x02\u036D_\x03" +
        "\x02\x02\x02\u036E\u036F\t\f\x02\x02\u036Fa\x03\x02\x02\x02\u0370\u0371" +
        "\t\r\x02\x02\u0371c\x03\x02\x02\x02\u0372\u0373\t\x0E\x02\x02\u0373e\x03" +
        "\x02\x02\x02\u0374\u0377\x07d\x02\x02\u0375\u0376\x07 \x02\x02\u0376\u0378" +
        "\x07\x0E\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02" +
        "\u0378\u037F\x03\x02\x02\x02\u0379\u037C\x07v\x02\x02\u037A\u037B\x07" +
        " \x02\x02\u037B\u037D\x07\x0E\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C" +
        "\u037D\x03\x02\x02\x02\u037D\u037F\x03\x02\x02\x02\u037E\u0374\x03\x02" +
        "\x02\x02\u037E\u0379\x03\x02\x02\x02\u037Fg\x03\x02\x02\x02\u0380\u0381" +
        "\t\x0F\x02\x02\u0381i\x03\x02\x02\x02\u0382\u0383\x05^0\x02\u0383\u0384" +
        "\x07 \x02\x02\u0384\u0385\x05\x90I\x02\u0385\u0386\x07\x1F\x02\x02\u0386" +
        "\u0389\x03\x02\x02\x02\u0387\u0389\x072\x02\x02\u0388\u0382\x03\x02\x02" +
        "\x02\u0388\u0387\x03\x02\x02\x02\u0389k\x03\x02\x02\x02\u038A\u038B\x05" +
        "`1\x02\u038B\u038C\x07 \x02\x02\u038C\u038D\x05\x90I\x02\u038D\u0392\x07" +
        "\x1F\x02\x02\u038E\u038F\x07I\x02\x02\u038F\u0390\x05\xC6d\x02\u0390\u0391" +
        "\x07\x1F\x02\x02\u0391\u0393\x03\x02\x02\x02\u0392\u038E\x03\x02\x02\x02" +
        "\u0392\u0393\x03\x02\x02\x02\u0393m\x03\x02\x02\x02\u0394\u0395\x05d3" +
        "\x02\u0395\u0396\x07 \x02\x02\u0396\u0397\x05\x90I\x02\u0397\u039C\x07" +
        "\x1F\x02\x02\u0398\u0399\x07I\x02\x02\u0399\u039A\x05\xC6d\x02\u039A\u039B" +
        "\x07\x1F\x02\x02\u039B\u039D\x03\x02\x02\x02\u039C\u0398\x03\x02\x02\x02" +
        "\u039C\u039D\x03\x02\x02\x02\u039Do\x03\x02\x02\x02\u039E\u039F\x05b2" +
        "\x02\u039F\u03A2\x07 \x02\x02\u03A0\u03A3\x05\x90I\x02\u03A1\u03A3\x05" +
        "\x8EH\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A1\x03\x02\x02\x02\u03A3" +
        "\u03A4\x03\x02\x02\x02\u03A4\u03A9\x07\x1F\x02\x02\u03A5\u03A6\x07I\x02" +
        "\x02\u03A6\u03A7\x05\xC6d\x02\u03A7\u03A8\x07\x1F\x02\x02\u03A8\u03AA" +
        "\x03\x02\x02\x02\u03A9\u03A5\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02" +
        "\u03AAq\x03\x02\x02\x02\u03AB\u03AF\x05t;\x02\u03AC\u03AE\x05\x8CG\x02" +
        "\u03AD\u03AC\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF\u03AD\x03" +
        "\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0s\x03\x02\x02\x02\u03B1" +
        "\u03AF\x03\x02\x02\x02\u03B2\u03B3\x05h5\x02\u03B3\u03B7\x07 \x02\x02" +
        "\u03B4\u03B6\x07\x04\x02\x02\u03B5\u03B4\x03\x02\x02\x02\u03B6\u03B9\x03" +
        "\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8" +
        "\u03BA\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BB\x05\x90" +
        "I\x02\u03BB\u03BC\x07\x1F\x02\x02\u03BCu\x03\x02\x02\x02\u03BD\u03C1\x05" +
        "x=\x02\u03BE\u03C0\x05\x8CG\x02\u03BF\u03BE\x03\x02\x02\x02\u03C0\u03C3" +
        "\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02" +
        "\u03C2w\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03C5\x05f4" +
        "\x02\u03C5\u03C6\x07 \x02\x02\u03C6\u03C7\x05\x90I\x02\u03C7\u03CC\x07" +
        "\x1F\x02\x02\u03C8\u03C9\x07I\x02\x02\u03C9\u03CA\x05\xC6d\x02\u03CA\u03CB" +
        "\x07\x1F\x02\x02\u03CB\u03CD\x03\x02\x02\x02\u03CC\u03C8\x03\x02\x02\x02" +
        "\u03CC\u03CD\x03\x02\x02\x02\u03CDy\x03\x02\x02\x02\u03CE\u03D2\x05|?" +
        "\x02\u03CF\u03D1\x05\x80A";
    choiceParser._serializedATNSegment2 = "\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\u03D4\x03\x02\x02\x02\u03D2\u03D0" +
        "\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D7\x03\x02\x02\x02" +
        "\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D6\x076\x02\x02\u03D6\u03D8\x07" +
        "K\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8" +
        "{\x03\x02\x02\x02\u03D9\u03DA\x05~@\x02\u03DA\u03DE\x07 \x02\x02\u03DB" +
        "\u03DD\x07\x04\x02\x02\u03DC\u03DB\x03\x02\x02\x02\u03DD\u03E0\x03\x02" +
        "\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF" +
        "\u03E1\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1\u03E2\x05\x90" +
        "I\x02\u03E2\u03E3\x07\x1F\x02\x02\u03E3}\x03\x02\x02\x02\u03E4\u03E7\x07" +
        "a\x02\x02\u03E5\u03E8\x07\f\x02\x02\u03E6\u03E8\x07\x8E\x02\x02\u03E7" +
        "\u03E5\x03\x02\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E7\u03E8\x03\x02" +
        "\x02\x02\u03E8\u03F3\x03\x02\x02\x02\u03E9\u03EB\x07u\x02\x02\u03EA\u03EC" +
        "\x07\f\x02\x02\u03EB\u03EA\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02" +
        "\u03EC\u03F3\x03\x02\x02\x02\u03ED\u03EF\x07b\x02\x02\u03EE\u03F0\x07" +
        "\f\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0" +
        "\u03F3\x03\x02\x02\x02\u03F1\u03F3\x07c\x02\x02\u03F2\u03E4\x03\x02\x02" +
        "\x02\u03F2\u03E9\x03\x02\x02\x02\u03F2\u03ED\x03\x02\x02\x02\u03F2\u03F1" +
        "\x03\x02\x02\x02\u03F3\x7F\x03\x02\x02\x02\u03F4\u03F5\x07H\x02\x02\u03F5" +
        "\u03F6\x07 \x02\x02\u03F6\u03F7\x05\x90I\x02\u03F7\u03F8\x07\x1F\x02\x02" +
        "\u03F8\u0406\x03\x02\x02\x02\u03F9\u03FA\t\x10\x02\x02\u03FA\u03FB\x07" +
        " \x02\x02\u03FB\u03FC\x074\x02\x02\u03FC\u0406\x07\x1F\x02\x02\u03FD\u0401" +
        "\t\x11\x02\x02\u03FE\u0400\v\x02\x02\x02\u03FF\u03FE\x03\x02\x02\x02\u0400" +
        "\u0403\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02" +
        "\x02\x02\u0402\u0404\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0404" +
        "\u0406\x07\x1F\x02\x02\u0405\u03F4\x03\x02\x02\x02\u0405\u03F9\x03\x02" +
        "\x02\x02\u0405\u03FD\x03\x02\x02\x02\u0406\x81\x03\x02\x02\x02\u0407\u0408" +
        "\x07H\x02\x02\u0408\u0409\x07 \x02\x02\u0409\u040A\x05\x90I\x02\u040A" +
        "\u040B\x07\x1F\x02\x02\u040B\u0419\x03\x02\x02\x02\u040C\u040D\t\x10\x02" +
        "\x02\u040D\u040E\x07 \x02\x02\u040E\u040F\x074\x02\x02\u040F\u0419\x07" +
        "\x1F\x02\x02\u0410\u0414\t\x11\x02\x02\u0411\u0413\v\x02\x02\x02\u0412" +
        "\u0411\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02\u0414\u0415\x03\x02" +
        "\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415\u0417\x03\x02\x02\x02\u0416" +
        "\u0414\x03\x02\x02\x02\u0417\u0419\x07\x1F\x02\x02\u0418\u0407\x03\x02" +
        "\x02\x02\u0418\u040C\x03\x02\x02\x02\u0418\u0410\x03\x02\x02\x02\u0419" +
        "\x83\x03\x02\x02\x02\u041A\u041E\x05\x86D\x02\u041B\u041D\x05\x8CG\x02" +
        "\u041C\u041B\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E\u041C\x03" +
        "\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\x85\x03\x02\x02\x02\u0420" +
        "\u041E\x03\x02\x02\x02\u0421\u0422\x05\x8AF\x02\u0422\u0423\x07 \x02\x02" +
        "\u0423\u0424\x05\x90I\x02\u0424\u0429\x07\x1F\x02\x02\u0425\u0426\x07" +
        "I\x02\x02\u0426\u0427\x05\xC6d\x02\u0427\u0428\x07\x1F\x02\x02\u0428\u042A" +
        "\x03\x02\x02\x02\u0429\u0425\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02" +
        "\u042A\x87\x03\x02\x02\x02\u042B\u042E\x07U\x02\x02\u042C\u042D\x07 \x02" +
        "\x02\u042D\u042F\x07\r\x02\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042F" +
        "\x03\x02\x02\x02\u042F\u0436\x03\x02\x02\x02\u0430\u0433\x07l\x02\x02" +
        "\u0431\u0432\x07 \x02\x02\u0432\u0434\x07\r\x02\x02\u0433\u0431\x03\x02" +
        "\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0436\x03\x02\x02\x02\u0435" +
        "\u042B\x03\x02\x02\x02\u0435\u0430\x03\x02\x02\x02\u0436\x89\x03\x02\x02" +
        "\x02\u0437\u043A\x07`\x02\x02\u0438\u0439\x07 \x02\x02\u0439\u043B\x07" +
        "\r\x02\x02\u043A\u0438\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B" +
        "\u0442\x03\x02\x02\x02\u043C\u043F\x07t\x02\x02\u043D\u043E\x07 \x02\x02" +
        "\u043E\u0440\x07\r\x02\x02\u043F\u043D\x03\x02\x02\x02\u043F\u0440\x03" +
        "\x02\x02\x02\u0440\u0442\x03\x02\x02\x02\u0441\u0437\x03\x02\x02\x02\u0441" +
        "\u043C\x03\x02\x02\x02\u0442\x8B\x03\x02\x02\x02\u0443\u0444\x07\x18\x02" +
        "\x02\u0444\u0447\x05\xBE`\x02\u0445\u0447\x07H\x02\x02\u0446\u0443\x03" +
        "\x02\x02\x02\u0446\u0445\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448" +
        "\u044C\x07 \x02\x02\u0449\u044B\x07\x04\x02\x02\u044A\u0449\x03\x02\x02" +
        "\x02\u044B\u044E\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044C\u044D" +
        "\x03\x02\x02\x02\u044D\u0451\x03\x02\x02\x02\u044E\u044C\x03\x02\x02\x02" +
        "\u044F\u0452\x05\xBE`\x02\u0450\u0452\x076\x02\x02\u0451\u044F\x03\x02" +
        "\x02\x02\u0451\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453" +
        "\u0451\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0455\x03\x02" +
        "\x02\x02\u0455\u0463\x07\x1F\x02\x02\u0456\u0457\t\x10\x02\x02\u0457\u0458" +
        "\x07 \x02\x02\u0458\u0459\x074\x02\x02\u0459\u0463\x07\x1F\x02\x02\u045A" +
        "\u045E\t\x11\x02\x02\u045B\u045D\v\x02\x02\x02\u045C\u045B\x03\x02\x02" +
        "\x02\u045D\u0460\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045E\u045C" +
        "\x03\x02\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02" +
        "\u0461\u0463\x07\x1F\x02\x02\u0462\u0446\x03\x02\x02\x02\u0462\u0456\x03" +
        "\x02\x02\x02\u0462\u045A\x03\x02\x02\x02\u0463\x8D\x03\x02\x02\x02\u0464" +
        "\u0465\x07\x8D\x02\x02\u0465\u0466\x07#\x02\x02\u0466\u0467\x074\x02\x02" +
        "\u0467\x8F\x03\x02\x02\x02\u0468\u0469\x07\x90\x02\x02\u0469\x91\x03\x02" +
        "\x02\x02\u046A\u046B\x07\x1D\x02\x02\u046B\u0473\x07\x1F\x02\x02\u046C" +
        "\u046E\x07\x04\x02\x02\u046D\u046C\x03\x02\x02\x02\u046E\u0471\x03\x02" +
        "\x02\x02\u046F\u046D\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470" +
        "\u0472\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0472\u0474\x05\x94" +
        "K\x02\u0473\u046F\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0489" +
        "\x03\x02\x02\x02\u0475\u0476\x07\x1D\x02\x02\u0476\u047B\x05\xBE`\x02" +
        "\u0477\u047A\x07 \x02\x02\u0478\u047A\x05\xC6d\x02\u0479\u0477\x03\x02" +
        "\x02\x02\u0479\u0478\x03\x02\x02\x02\u047A\u047D\x03\x02\x02\x02\u047B" +
        "\u0479\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047E\x03\x02" +
        "\x02\x02\u047D\u047B\x03\x02\x02\x02\u047E\u0486\x07\x1F\x02\x02\u047F" +
        "\u0481\x07\x04\x02\x02\u0480\u047F\x03\x02\x02\x02\u0481\u0484\x03\x02" +
        "\x02\x02\u0482\u0480\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483" +
        "\u0485\x03\x02\x02\x02\u0484\u0482\x03\x02\x02\x02\u0485\u0487\x05\x94" +
        "K\x02\u0486\u0482\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489" +
        "\x03\x02\x02\x02\u0488\u046A\x03\x02\x02\x02\u0488\u0475\x03\x02\x02\x02" +
        "\u0489\x93\x03\x02\x02\x02\u048A\u048B\x07\x1D\x02\x02\u048B\u0490\x05" +
        "\xBE`\x02\u048C\u048F\x07 \x02\x02\u048D\u048F\x05\xC6d\x02\u048E\u048C" +
        "\x03\x02\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0492\x03\x02\x02\x02" +
        "\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0493\x03" +
        "\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0494\x07\x1F\x02\x02\u0494" +
        "\x95\x03\x02\x02\x02\u0495\u0497\x07\x12\x02\x02\u0496\u0498\x05\xBE`" +
        "\x02\u0497\u0496\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498\u0499" +
        "\x03\x02\x02\x02\u0499\u04A0\x07\x1F\x02\x02\u049A\u049C\x07\x13\x02\x02" +
        "\u049B\u049D\x05\xBE`\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03" +
        "\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u04A0\x07\x1F\x02\x02\u049F" +
        "\u0495\x03\x02\x02\x02\u049F\u049A\x03\x02\x02\x02\u04A0\x97\x03\x02\x02" +
        "\x02\u04A1\u04A9\x07B\x02\x02\u04A2\u04A9\x07@\x02\x02\u04A3\u04A5\x07" +
        "A\x02\x02\u04A4\u04A6\x077\x02\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6" +
        "\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A9\x07\x02\x02\x03" +
        "\u04A8\u04A1\x03\x02\x02\x02\u04A8\u04A2\x03\x02\x02\x02\u04A8\u04A3\x03" +
        "\x02\x02\x02\u04A9\x99\x03\x02\x02\x02\u04AA\u04AC\x07k\x02\x02\u04AB" +
        "\u04AD\x05\xBE`\x02\u04AC\u04AB\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02" +
        "\x02\u04AD\u04C3\x03\x02\x02\x02\u04AE\u04B8\x05\xBE`\x02\u04AF\u04B3" +
        "\x076\x02\x02\u04B0\u04B2\x07\x04\x02\x02\u04B1\u04B0\x03\x02\x02\x02" +
        "\u04B2\u04B5\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B3\u04B4\x03" +
        "\x02\x02\x02\u04B4\u04B7\x03\x02\x02\x02\u04B5\u04B3\x03\x02\x02\x02\u04B6" +
        "\u04AF\x03\x02\x02\x02\u04B7\u04BA\x03\x02\x02\x02\u04B8\u04B6\x03\x02" +
        "\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BE\x03\x02\x02\x02\u04BA" +
        "\u04B8\x03\x02\x02\x02\u04BB\u04BD\x076\x02\x02\u04BC\u04BB\x03\x02\x02" +
        "\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02\x02\x02\u04BE\u04BF" +
        "\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02" +
        "\u04C1\u04AE\x03\x02\x02\x02\u04C2\u04C5\x03\x02\x02\x02\u04C3\u04C1\x03" +
        "\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C6\x03\x02\x02\x02\u04C5" +
        "\u04C3\x03\x02\x02\x02\u04C6\u04D2\x07\x1F\x02\x02\u04C7\u04CD\x07k\x02" +
        "\x02\u04C8\u04CC\x05\xBE`\x02\u04C9\u04CC\x076\x02\x02\u04CA\u04CC\x07" +
        "\x04\x02\x02\u04CB\u04C8\x03\x02\x02\x02\u04CB\u04C9\x03\x02\x02\x02\u04CB" +
        "\u04CA\x03\x02\x02\x02\u04CC\u04CF\x03\x02\x02\x02\u04CD\u04CB\x03\x02" +
        "\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF" +
        "\u04CD\x03\x02\x02\x02\u04D0\u04D2\x07\x02\x02\x03\u04D1\u04AA\x03\x02" +
        "\x02\x02\u04D1\u04C7\x03\x02\x02\x02\u04D2\x9B\x03\x02\x02\x02\u04D3\u04D8" +
        "\x07:\x02\x02\u04D4\u04D9\x05\xBE`\x02\u04D5\u04D9\x07 \x02\x02\u04D6" +
        "\u04D9\x07\x90\x02\x02\u04D7\u04D9\x076\x02\x02\u04D8\u04D4\x03\x02\x02" +
        "\x02\u04D8\u04D5\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D7" +
        "\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02" +
        "\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04EA\x07" +
        "\x1F\x02\x02\u04DD\u04E5\x07:\x02\x02\u04DE\u04E4\x05\xBE`\x02\u04DF\u04E4" +
        "\x07 \x02\x02\u04E0\u04E4\x07\x90\x02\x02\u04E1\u04E4\x076\x02\x02\u04E2" +
        "\u04E4\x07\x04\x02\x02\u04E3\u04DE\x03\x02\x02\x02\u04E3\u04DF\x03\x02" +
        "\x02\x02\u04E3\u04E0\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3" +
        "\u04E2\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E3\x03\x02" +
        "\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E8\x03\x02\x02\x02\u04E7" +
        "\u04E5\x03\x02\x02\x02\u04E8\u04EA\x07\x02\x02\x03\u04E9\u04D3\x03\x02" +
        "\x02\x02\u04E9\u04DD\x03\x02\x02\x02\u04EA\x9D\x03\x02\x02\x02\u04EB\u04EC" +
        "\x079\x02\x02\u04EC\u04ED\x05\xBE`\x02\u04ED\u04EE\x07\x1F\x02\x02\u04EE" +
        "\x9F\x03\x02\x02\x02\u04EF\u04F3\x07R\x02\x02\u04F0\u04F4\x05\xBE`\x02" +
        "\u04F1\u04F4\x07 \x02\x02\u04F2\u04F4\x076\x02\x02\u04F3\u04F0\x03\x02" +
        "\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F3\u04F2\x03\x02\x02\x02\u04F4" +
        "\u04F5\x03\x02\x02\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5\u04F6\x03\x02" +
        "\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04F9\x07\x1F\x02\x02\u04F8" +
        "\u04FA\x05\xA2R\x02\u04F9\u04F8\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02" +
        "\x02\u04FA\xA1\x03\x02\x02\x02\u04FB\u04FF\x07R\x02\x02\u04FC\u0500\x05" +
        "\xBE`\x02\u04FD\u0500\x07 \x02\x02\u04FE\u0500\x076\x02\x02\u04FF\u04FC" +
        "\x03\x02\x02\x02\u04FF\u04FD\x03\x02\x02\x02\u04FF\u04FE\x03\x02\x02\x02" +
        "\u0500\u0501\x03\x02\x02\x02\u0501\u04FF\x03\x02\x02\x02\u0501\u0502\x03" +
        "\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0504\x07\x1F\x02\x02\u0504" +
        "\xA3\x03\x02\x02\x02\u0505\u0507\x07\x16\x02\x02\u0506\u0508\x05\xBE`" +
        "\x02\u0507\u0506\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508\u051E" +
        "\x03\x02\x02\x02\u0509\u0513\x05\xBE`\x02\u050A\u050E\x076\x02\x02\u050B" +
        "\u050D\x07\x04\x02\x02\u050C\u050B\x03\x02\x02\x02\u050D\u0510\x03\x02" +
        "\x02\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F" +
        "\u0512\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02\u0511\u050A\x03\x02" +
        "\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513" +
        "\u0514\x03\x02\x02\x02\u0514\u0519\x03\x02\x02\x02\u0515\u0513\x03\x02" +
        "\x02\x02\u0516\u0518\x076\x02\x02\u0517\u0516\x03\x02\x02\x02\u0518\u051B" +
        "\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02" +
        "\u051A\u051D\x03\x02\x02\x02\u051B\u0519\x03\x02\x02\x02\u051C\u0509\x03" +
        "\x02\x02\x02\u051D\u0520\x03\x02\x02\x02\u051E\u051C\x03\x02\x02\x02\u051E" +
        "\u051F\x03\x02\x02\x02\u051F\u0521\x03\x02\x02\x02\u0520\u051E\x03\x02" +
        "\x02\x02\u0521\u0528\x07\x1F\x02\x02\u0522\u0524\x07\x16\x02\x02\u0523" +
        "\u0525\x05\xBE`\x02\u0524\u0523\x03\x02\x02\x02\u0524\u0525\x03\x02\x02" +
        "\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0528\x07\x02\x02\x03\u0527\u0505" +
        "\x03\x02\x02\x02\u0527\u0522\x03\x02\x02\x02\u0528\xA5\x03\x02\x02\x02" +
        "\u0529\u052B\x07\x17\x02\x02\u052A\u052C\n\x03\x02\x02\u052B\u052A\x03" +
        "\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052D" +
        "\u052E\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0530\x07\x1F" +
        "\x02\x02\u0530\xA7\x03\x02\x02\x02\u0531\u0534\x07\x1E\x02\x02\u0532\u0535" +
        "\x05\xBE`\x02\u0533\u0535\x076\x02\x02\u0534\u0532\x03\x02\x02\x02\u0534" +
        "\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u0534\x03\x02" +
        "\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538" +
        "\u053E\x07\x1F\x02\x02\u0539\u053A\x07\x1E\x02\x02\u053A\u053B\x05\xBE" +
        "`\x02\u053B\u053C\x07\x02\x02\x03\u053C\u053E\x03\x02\x02\x02\u053D\u0531" +
        "\x03\x02\x02\x02\u053D\u0539\x03\x02\x02\x02\u053E\xA9\x03\x02\x02\x02" +
        "\u053F\u0540\x07E\x02\x02\u0540\u0541\x05\xBE`\x02\u0541\u0542\x07\x1F" +
        "\x02\x02\u0542\u0548\x03\x02\x02\x02\u0543\u0544\x07F\x02\x02\u0544\u0545" +
        "\x05\xBE`\x02\u0545\u0546\x07\x1F\x02\x02\u0546\u0548\x03\x02\x02\x02" +
        "\u0547\u053F\x03\x02\x02\x02\u0547\u0543\x03\x02\x02\x02\u0548\xAB\x03" +
        "\x02\x02\x02\u0549\u054A\x07=\x02\x02\u054A\u054B\x07 \x02\x02\u054B\u054C" +
        "\x074\x02\x02\u054C\u0553\x07\x1F\x02\x02\u054D\u054E\x07=\x02\x02\u054E" +
        "\u054F\x07 \x02\x02\u054F\u0550\x05\xBE`\x02\u0550\u0551\x07\x1F\x02\x02" +
        "\u0551\u0553\x03\x02\x02\x02\u0552\u0549\x03\x02\x02\x02\u0552\u054D\x03" +
        "\x02\x02\x02\u0553\xAD\x03\x02\x02\x02\u0554\u0555\x07P\x02\x02\u0555" +
        "\u0556\x05\xBE`\x02\u0556\u0557\x07\x1F\x02\x02\u0557\xAF\x03\x02\x02" +
        "\x02\u0558\u0559\x07Q\x02\x02\u0559\u055A\x05\xBE`\x02\u055A\u055B\x07" +
        "\x1F\x02\x02\u055B\xB1\x03\x02\x02\x02\u055C\u0566\x05\xB4[\x02\u055D" +
        "\u055F\x076\x02\x02\u055E\u055D\x03\x02\x02\x02\u055F\u0562\x03\x02\x02" +
        "\x02\u0560\u055E\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0563" +
        "\x03\x02\x02\x02\u0562\u0560\x03\x02\x02\x02\u0563\u0565\x05\xB4[\x02" +
        "\u0564\u0560\x03\x02\x02\x02\u0565\u0568\x03\x02\x02\x02\u0566\u0564\x03" +
        "\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\xB3\x03\x02\x02\x02\u0568" +
        "\u0566\x03\x02\x02\x02\u0569\u056A\x07\x18\x02\x02\u056A\u056B\x05\xBE" +
        "`\x02\u056B\u056C\t\x12\x02\x02\u056C\u0572\x05\xBE`\x02\u056D\u0571\x07" +
        "6\x02\x02\u056E\u0571\x07 \x02\x02\u056F\u0571\x05\xBE`\x02\u0570\u056D" +
        "\x03\x02\x02\x02\u0570\u056E\x03\x02\x02\x02\u0570\u056F\x03\x02\x02\x02" +
        "\u0571\u0574\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0573\x03" +
        "\x02\x02\x02\u0573\u0575\x03\x02\x02\x02\u0574\u0572\x03\x02\x02\x02\u0575" +
        "\u0576\x07\x1F\x02\x02\u0576\u0580\x03\x02\x02\x02\u0577\u057B\x07N\x02" +
        "\x02\u0578\u057A\v\x02\x02\x02\u0579\u0578\x03\x02\x02\x02\u057A\u057D" +
        "\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057B\u0579\x03\x02\x02\x02" +
        "\u057C\u057E\x03\x02\x02\x02\u057D\u057B\x03\x02\x02\x02\u057E\u0580\x07" +
        "\x1F\x02\x02\u057F\u0569\x03\x02\x02\x02\u057F\u0577\x03\x02\x02\x02\u0580" +
        "\xB5\x03\x02\x02\x02\u0581\u0585\x07\x0F\x02\x02\u0582\u0586\x05\xBE`" +
        "\x02\u0583\u0586\x07 \x02\x02\u0584\u0586\x076\x02\x02\u0585\u0582\x03" +
        "\x02\x02\x02\u0585\u0583\x03\x02\x02\x02\u0585\u0584\x03\x02\x02\x02\u0586" +
        "\u0587\x03\x02\x02\x02\u0587\u0585\x03\x02\x02\x02\u0587\u0588\x03\x02" +
        "\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u0595\x07\x1F\x02\x02\u058A" +
        "\u0590\x07\x0F\x02\x02\u058B\u058F\x05\xBE`\x02\u058C\u058F\x07 \x02\x02" +
        "\u058D\u058F\x076\x02\x02\u058E\u058B\x03\x02\x02\x02\u058E\u058C\x03" +
        "\x02\x02\x02\u058E\u058D\x03\x02\x02\x02\u058F\u0592\x03\x02\x02\x02\u0590" +
        "\u058E\x03\x02\x02\x02\u0590\u0591\x03\x02\x02\x02\u0591\u0593\x03\x02" +
        "\x02\x02\u0592\u0590\x03\x02\x02\x02\u0593\u0595\x07\x02\x02\x03\u0594" +
        "\u0581\x03\x02\x02\x02\u0594\u058A\x03\x02\x02\x02\u0595\xB7\x03\x02\x02" +
        "\x02\u0596\u0598\x07\x14\x02\x02\u0597\u0599\x05\xBE`\x02\u0598\u0597" +
        "\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02" +
        "\u059A\u059B\x07\x1F\x02\x02\u059B\xB9\x03\x02\x02\x02\u059C\u059D\x07" +
        "1\x02\x02\u059D\xBB\x03\x02\x02\x02\u059E\u05A0\x05\xBE`\x02\u059F\u05A1" +
        "\x076\x02\x02\u05A0\u059F\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02" +
        "\u05A1\u05A3\x03\x02\x02\x02\u05A2\u059E\x03\x02\x02\x02\u05A3\u05A4\x03" +
        "\x02\x02\x02\u05A4\u05A2\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5" +
        "\xBD\x03\x02\x02\x02\u05A6\u05AD\x075\x02\x02\u05A7\u05A9\x07\x04\x02" +
        "\x02\u05A8\u05A7\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA\u05A8" +
        "\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02" +
        "\u05AC\u05AE\x074\x02\x02\u05AD\u05A8\x03\x02\x02\x02\u05AD\u05AE\x03" +
        "\x02\x02\x02\u05AE\u05D0\x03\x02\x02\x02\u05AF\u05B6\x05\xC6d\x02\u05B0" +
        "\u05B2\x07\x04\x02\x02\u05B1\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02" +
        "\x02\x02\u05B3\u05B1\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4" +
        "\u05B5\x03\x02\x02\x02\u05B5\u05B7\x074\x02\x02\u05B6\u05B1\x03\x02\x02" +
        "\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7\u05D0\x03\x02\x02\x02\u05B8\u05D0" +
        "\x074\x02\x02\u05B9\u05BB\x07\x04\x02\x02\u05BA\u05B9\x03\x02\x02\x02" +
        "\u05BB\u05BE\x03\x02\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03" +
        "\x02\x02\x02\u05BD\u05BF\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BF" +
        "\u05C3\x07 \x02\x02\u05C0\u05C2\x07\x04\x02\x02\u05C1\u05C0\x03\x02\x02" +
        "\x02\u05C2\u05C5\x03\x02\x02\x02\u05C3\u05C1\x03\x02\x02\x02\u05C3\u05C4" +
        "\x03\x02\x02\x02\u05C4\u05D0\x03\x02\x02\x02\u05C5\u05C3\x03\x02\x02\x02" +
        "\u05C6\u05CA\x07!\x02\x02\u05C7\u05C9\x07\x04\x02\x02\u05C8\u05C7\x03" +
        "\x02\x02\x02\u05C9\u05CC\x03\x02\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CA" +
        "\u05CB\x03\x02\x02\x02\u05CB\u05D0\x03\x02\x02\x02\u05CC\u05CA\x03\x02" +
        "\x02\x02\u05CD\u05D0\x07+\x02\x02\u05CE\u05D0\x07\x90\x02\x02\u05CF\u05A6" +
        "\x03\x02\x02\x02\u05CF\u05AF\x03\x02\x02\x02\u05CF\u05B8\x03\x02\x02\x02" +
        "\u05CF\u05BC\x03\x02\x02\x02\u05CF\u05C6\x03\x02\x02\x02\u05CF\u05CD\x03" +
        "\x02\x02\x02\u05CF\u05CE\x03\x02\x02\x02\u05D0\xBF\x03\x02\x02\x02\u05D1" +
        "\u05D2\x07\x11\x02\x02\u05D2\u05D3\x05\xBE`\x02\u05D3\u05D4\x07\x1F\x02" +
        "\x02\u05D4\xC1\x03\x02\x02\x02\u05D5\u05D6\x07\x1F\x02\x02\u05D6\xC3\x03" +
        "\x02\x02\x02\u05D7\u05D8\t\x13\x02\x02\u05D8\xC5\x03\x02\x02\x02\u05D9" +
        "\u05E2\x077\x02\x02\u05DA\u05E2\x07!\x02\x02\u05DB\u05DC\x07%\x02\x02" +
        "\u05DC\u05E2\n\x14\x02\x02\u05DD\u05DE\x07&\x02\x02\u05DE\u05E2\n\x15" +
        "\x02\x02\u05DF\u05E2\x07*\x02\x02\u05E0\u05E2\x07)\x02\x02\u05E1\u05D9" +
        "\x03\x02\x02\x02\u05E1\u05DA\x03\x02\x02\x02\u05E1\u05DB\x03\x02\x02\x02" +
        "\u05E1\u05DD\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1\u05E0\x03" +
        "\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E1\x03\x02\x02\x02\u05E3" +
        "\u05E4\x03\x02\x02\x02\u05E4\xC7\x03\x02\x02\x02\u05E5\u05E6\x07\x04\x02" +
        "\x02\u05E6\xC9\x03\x02\x02\x02\xE3\xCE\xD4\xD9\xDE\xEB\xF3\xF9\xFE\u0104" +
        "\u010B\u010F\u0112\u0118\u011C\u0121\u0126\u012D\u0133\u0136\u013A\u013F" +
        "\u014A\u0150\u0155\u0160\u0166\u016B\u0171\u0178\u017C\u0182\u0186\u018C" +
        "\u018F\u0194\u019B\u01A1\u01A4\u01AC\u01B2\u01B7\u01BD\u01C4\u01CA\u01CD" +
        "\u01D5\u01DB\u01E0\u01E6\u01EC\u01F3\u01F9\u01FC\u0202\u020A\u020C\u020E" +
        "\u0216\u021C\u0221\u0227\u022D\u0234\u023A\u023D\u0243\u024B\u024D\u024F" +
        "\u0268\u0270\u0272\u0279\u027E\u0285\u0288\u028D\u0292\u0296\u029E\u02A0" +
        "\u02A8\u02AA\u02AE\u02B2\u02B6\u02B8\u02BD\u02C1\u02C5\u02C7\u02CC\u02D0" +
        "\u02D6\u02DA\u02E0\u02E6\u02EA\u02F0\u02F4\u02FE\u0302\u0304\u0309\u030D" +
        "\u030F\u0318\u031B\u0327\u0330\u0335\u0337\u0345\u034B\u0350\u0354\u0358" +
        "\u035B\u0360\u0377\u037C\u037E\u0388\u0392\u039C\u03A2\u03A9\u03AF\u03B7" +
        "\u03C1\u03CC\u03D2\u03D7\u03DE\u03E7\u03EB\u03EF\u03F2\u0401\u0405\u0414" +
        "\u0418\u041E\u0429\u042E\u0433\u0435\u043A\u043F\u0441\u0446\u044C\u0451" +
        "\u0453\u045E\u0462\u046F\u0473\u0479\u047B\u0482\u0486\u0488\u048E\u0490" +
        "\u0497\u049C\u049F\u04A5\u04A8\u04AC\u04B3\u04B8\u04BE\u04C3\u04CB\u04CD" +
        "\u04D1\u04D8\u04DA\u04E3\u04E5\u04E9\u04F3\u04F5\u04F9\u04FF\u0501\u0507" +
        "\u050E\u0513\u0519\u051E\u0524\u0527\u052D\u0534\u0536\u053D\u0547\u0552" +
        "\u0560\u0566\u0570\u0572\u057B\u057F\u0585\u0587\u058E\u0590\u0594\u0598" +
        "\u05A0\u05A4\u05AA\u05AD\u05B3\u05B6\u05BC\u05C3\u05CA\u05CF\u05E1\u05E3";
    choiceParser._serializedATN = Utils.join([
        choiceParser._serializedATNSegment0,
        choiceParser._serializedATNSegment1,
        choiceParser._serializedATNSegment2,
    ], "");
    return choiceParser;
})();
export { choiceParser };
export class BitmarkContext extends ParserRuleContext {
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
export class Bitmark_Context extends ParserRuleContext {
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
export class Multi_choicesContext extends ParserRuleContext {
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
export class Multiple_choiceContext extends ParserRuleContext {
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
export class McrsepContext extends ParserRuleContext {
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
export class McrmiscContext extends ParserRuleContext {
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
export class Multiple_choice_1Context extends ParserRuleContext {
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
export class Multiple_responseContext extends ParserRuleContext {
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
export class Multiple_response_1Context extends ParserRuleContext {
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
export class Multiple_choice_textContext extends ParserRuleContext {
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
export class Multitxt_il_choiceContext extends ParserRuleContext {
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
export class Highlight_textContext extends ParserRuleContext {
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
export class Highlight_il_choiceContext extends ParserRuleContext {
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
export class BitElemContext extends ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(choiceParser.LIST_LINE, 0); }
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
export class Single_gapContext extends ParserRuleContext {
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
export class ChoicesContext extends ParserRuleContext {
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
export class CplusContext extends ParserRuleContext {
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
export class CminusContext extends ParserRuleContext {
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
export class Choice_plusContext extends ParserRuleContext {
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
export class Choice_minusContext extends ParserRuleContext {
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
export class Il_choice_plusContext extends ParserRuleContext {
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
export class Il_choice_minusContext extends ParserRuleContext {
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
export class Headed_inline_choicesContext extends ParserRuleContext {
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
export class Highlight_inline_choicesContext extends ParserRuleContext {
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
export class Choice_headContext extends ParserRuleContext {
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
export class Inline_choicesContext extends ParserRuleContext {
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
export class Ml_exampleContext extends ParserRuleContext {
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
export class Il_followContext extends ParserRuleContext {
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
export class LongansContext extends ParserRuleContext {
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
export class ShortansContext extends ParserRuleContext {
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
export class ResourceContext extends ParserRuleContext {
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
export class Bullet_itemContext extends ParserRuleContext {
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
export class AtpointContext extends ParserRuleContext {
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
            return this.getTokens(choiceParser.ColonText);
        }
        else {
            return this.getToken(choiceParser.ColonText, i);
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
export class Resource_formatContext extends ParserRuleContext {
    BitmarkMinus() { return this.tryGetToken(choiceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(choiceParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(choiceParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(choiceParser.Placeholder, 0); }
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
export class Format2Context extends ParserRuleContext {
    BitmarkMinus() { return this.tryGetToken(choiceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(choiceParser.BitmarkPlus, 0); }
    ColonText() { return this.tryGetToken(choiceParser.ColonText, 0); }
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
export class Image_formatContext extends ParserRuleContext {
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
export class Video_formatContext extends ParserRuleContext {
    AmpVideo() { return this.tryGetToken(choiceParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(choiceParser.AmpVideoLink, 0); }
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
export class Article_formatContext extends ParserRuleContext {
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
export class Document_formatContext extends ParserRuleContext {
    AmpDocument() { return this.tryGetToken(choiceParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(choiceParser.AmpDocumentLink, 0); }
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
export class App_formatContext extends ParserRuleContext {
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
export class Website_formatContext extends ParserRuleContext {
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
export class Stillimagefilm_formatContext extends ParserRuleContext {
    AmpStillImageFilm() { return this.tryGetToken(choiceParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(choiceParser.AmpStillImageFilmLink, 0); }
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
export class Op_article_formatContext extends ParserRuleContext {
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
export class Op_document_formatContext extends ParserRuleContext {
    OpAmpDocumentLink() { return this.tryGetToken(choiceParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(choiceParser.OpAmpDocument, 0); }
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
export class Op_app_formatContext extends ParserRuleContext {
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
export class Op_website_formatContext extends ParserRuleContext {
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
export class Op_video_formatContext extends ParserRuleContext {
    OpAmpVideo() { return this.tryGetToken(choiceParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    Video_type() { return this.tryGetToken(choiceParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(choiceParser.OpAmpVideoLink, 0); }
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
export class Op_stillimagefilm_formatContext extends ParserRuleContext {
    OpAmpStillImageFilm() { return this.tryGetToken(choiceParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(choiceParser.OpAmpStillImageFilmLink, 0); }
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
export class ArticlebitContext extends ParserRuleContext {
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
export class DocumentbitContext extends ParserRuleContext {
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
export class WebsitebitContext extends ParserRuleContext {
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
export class AppbitContext extends ParserRuleContext {
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
export class Stillimg_oneContext extends ParserRuleContext {
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
export class Video_oneContext extends ParserRuleContext {
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
export class Image_oneContext extends ParserRuleContext {
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
export class Op_image_formatContext extends ParserRuleContext {
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
export class Image_chainedContext extends ParserRuleContext {
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
export class Image_chained4matchContext extends ParserRuleContext {
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
export class Audio_oneContext extends ParserRuleContext {
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
export class Audio_formatContext extends ParserRuleContext {
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
export class Op_audio_formatContext extends ParserRuleContext {
    OpAmpAudio() { return this.tryGetToken(choiceParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(choiceParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(choiceParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(choiceParser.OpAmpAudioLink, 0); }
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
export class Resource_chainedContext extends ParserRuleContext {
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
export class TelephoneContext extends ParserRuleContext {
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
export class UrlContext extends ParserRuleContext {
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
export class ItemContext extends ParserRuleContext {
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
export class LeadContext extends ParserRuleContext {
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
export class AnglerefContext extends ParserRuleContext {
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
export class ExampleContext extends ParserRuleContext {
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
export class Bracketed_textContext extends ParserRuleContext {
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
export class ReferenceContext extends ParserRuleContext {
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
export class ProgressContext extends ParserRuleContext {
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
export class DatepropContext extends ParserRuleContext {
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
export class Dateprop_chainedContext extends ParserRuleContext {
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
export class InstructionContext extends ParserRuleContext {
    OPB() { return this.getToken(choiceParser.OPB, 0); }
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
export class HintContext extends ParserRuleContext {
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
export class TitleContext extends ParserRuleContext {
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
export class Bool_labelContext extends ParserRuleContext {
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
export class Progress_pointsContext extends ParserRuleContext {
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
export class IstrackedContext extends ParserRuleContext {
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
export class IsinfoonlyContext extends ParserRuleContext {
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
export class Atdef_Context extends ParserRuleContext {
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
export class DollaransContext extends ParserRuleContext {
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
export class AnchorContext extends ParserRuleContext {
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
export class DclinesContext extends ParserRuleContext {
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
export class S_and_wContext extends ParserRuleContext {
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
export class Bracket_escapedContext extends ParserRuleContext {
    OPESC() { return this.getToken(choiceParser.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(choiceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return choiceParser.RULE_bracket_escaped; }
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
export class SsplContext extends ParserRuleContext {
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
export class WordsContext extends ParserRuleContext {
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(choiceParser.SENTENCE);
        }
        else {
            return this.getToken(choiceParser.SENTENCE, i);
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
export class SpContext extends ParserRuleContext {
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
