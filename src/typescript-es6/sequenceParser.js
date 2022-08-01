// Generated from ./Sequence/sequenceParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
let sequenceParser = /** @class */ (() => {
    class sequenceParser extends Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator(sequenceParser._ATN, this);
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
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, sequenceParser.RULE_bitmark);
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
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 162;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === sequenceParser.S) {
                                                    {
                                                        {
                                                            this.state = 159;
                                                            this.match(sequenceParser.S);
                                                        }
                                                    }
                                                    this.state = 164;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 165;
                                                this.match(sequenceParser.NL);
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
                    } while (_la === sequenceParser.BitSequence);
                    this.state = 178;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === sequenceParser.NL) {
                        {
                            {
                                this.state = 175;
                                this.match(sequenceParser.NL);
                            }
                        }
                        this.state = 180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 181;
                    this.match(sequenceParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 183;
                    this.bit();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 185;
                    this.sequence();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
                    this.state = 187;
                    this.match(sequenceParser.BitSequence);
                    this.state = 188;
                    this.format();
                    this.state = 189;
                    this.match(sequenceParser.CL);
                    this.state = 199;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 193;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.NL) {
                                        {
                                            {
                                                this.state = 190;
                                                this.match(sequenceParser.NL);
                                            }
                                        }
                                        this.state = 195;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 196;
                                    this.bitElem();
                                }
                            }
                        }
                        this.state = 201;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === sequenceParser.NL) {
                        {
                            {
                                this.state = 202;
                                this.match(sequenceParser.NL);
                            }
                        }
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 208;
                    this.match(sequenceParser.HSPL);
                    this.state = 214;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 209;
                                    this.seqstr();
                                    this.state = 210;
                                    this.mmm();
                                }
                            }
                        }
                        this.state = 216;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    }
                    this.state = 217;
                    this.seqstr();
                    this.state = 218;
                    this.match(sequenceParser.HSPL);
                    this.state = 232;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                        case 1:
                            {
                                this.state = 219;
                                this.resource();
                                this.state = 229;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 223;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === sequenceParser.NL) {
                                                    {
                                                        {
                                                            this.state = 220;
                                                            this.match(sequenceParser.NL);
                                                        }
                                                    }
                                                    this.state = 225;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 226;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 231;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
        seqstr() {
            let _localctx = new SeqstrContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, sequenceParser.RULE_seqstr);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 240;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 234;
                                    this.bitElem();
                                    this.state = 236;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === sequenceParser.NL) {
                                        {
                                            this.state = 235;
                                            this.match(sequenceParser.NL);
                                        }
                                    }
                                }
                            }
                        }
                        this.state = 242;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                    }
                    this.state = 243;
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
        mmm() {
            let _localctx = new MmmContext(this._ctx, this.state);
            this.enterRule(_localctx, 10, sequenceParser.RULE_mmm);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 245;
                    this.match(sequenceParser.DBLMI);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 12, sequenceParser.RULE_bitElem);
            try {
                this.state = 272;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 247;
                            this.match(sequenceParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 248;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 249;
                            this.gap();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 250;
                            this.atdef();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 251;
                            this.reference();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 252;
                            this.dollarans();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 253;
                            this.item();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 254;
                            this.title();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 255;
                            this.instruction();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 256;
                            this.hint();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 257;
                            this.s_and_w();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 258;
                            this.example();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 259;
                            this.bool_label();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 260;
                            this.imagebit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 261;
                            this.audiobit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 262;
                            this.videobit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 263;
                            this.articlebit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 264;
                            this.documentbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 265;
                            this.appbit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 266;
                            this.websitebit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 267;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 268;
                            this.angleref();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 269;
                            this.anchor();
                        }
                        break;
                    case 24:
                        this.enterOuterAlt(_localctx, 24);
                        {
                            this.state = 270;
                            this.bracketed_text();
                        }
                        break;
                    case 25:
                        this.enterOuterAlt(_localctx, 25);
                        {
                            this.state = 271;
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
            this.enterRule(_localctx, 14, sequenceParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 274;
                    this.single_gap();
                    this.state = 282;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 280;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case sequenceParser.OPU:
                                        {
                                            this.state = 275;
                                            this.single_gap();
                                        }
                                        break;
                                    case sequenceParser.OPB:
                                        {
                                            this.state = 276;
                                            this.instruction();
                                        }
                                        break;
                                    case sequenceParser.OPQ:
                                        {
                                            this.state = 277;
                                            this.hint();
                                        }
                                        break;
                                    case sequenceParser.OPC:
                                        {
                                            this.state = 278;
                                            this.item();
                                        }
                                        break;
                                    case sequenceParser.AtExampleWithStr:
                                    case sequenceParser.AtExamplecol:
                                    case sequenceParser.AtExamplecl:
                                        {
                                            this.state = 279;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 284;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
            this.enterRule(_localctx, 16, sequenceParser.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 285;
                    this.match(sequenceParser.OPU);
                    this.state = 289;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                        case 1:
                            {
                                this.state = 286;
                                this.match(sequenceParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 287;
                                this.match(sequenceParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 294;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                        {
                            {
                                this.state = 291;
                                this.s_and_w();
                            }
                        }
                        this.state = 296;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 297;
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
            this.enterRule(_localctx, 18, sequenceParser.RULE_choice_plus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 300;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.OPC) {
                        {
                            this.state = 299;
                            this.item();
                        }
                    }
                    this.state = 302;
                    this.match(sequenceParser.OPP);
                    this.state = 304;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 303;
                                this.s_and_w();
                            }
                        }
                        this.state = 306;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                    this.state = 308;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 20, sequenceParser.RULE_choice_minus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 311;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.OPC) {
                        {
                            this.state = 310;
                            this.item();
                        }
                    }
                    this.state = 313;
                    this.match(sequenceParser.OPM);
                    this.state = 315;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 314;
                                this.s_and_w();
                            }
                        }
                        this.state = 317;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                    this.state = 319;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 22, sequenceParser.RULE_choice_star);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 322;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.OPC) {
                        {
                            this.state = 321;
                            this.item();
                        }
                    }
                    this.state = 324;
                    this.match(sequenceParser.OPR);
                    this.state = 326;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 325;
                                this.s_and_w();
                            }
                        }
                        this.state = 328;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                    this.state = 330;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 24, sequenceParser.RULE_resource);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 332;
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
            this.enterRule(_localctx, 26, sequenceParser.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 334;
                    this.match(sequenceParser.OPBUL);
                    this.state = 335;
                    this.s_and_w();
                    this.state = 336;
                    this.match(sequenceParser.CL);
                    this.state = 338;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.AtPoints) {
                        {
                            this.state = 337;
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
            this.enterRule(_localctx, 28, sequenceParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 340;
                    this.match(sequenceParser.AtPoints);
                    this.state = 341;
                    this.match(sequenceParser.NUMERIC);
                    this.state = 342;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 30, sequenceParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 347;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 344;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 349;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                    }
                    this.state = 354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpImageZoom - 75)) | (1 << (sequenceParser.AmpImageWAudio - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpStillImageFilm - 75)) | (1 << (sequenceParser.AmpPdf - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpVideoLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)) | (1 << (sequenceParser.AmpAppLink - 75)) | (1 << (sequenceParser.AmpWebsiteLink - 75)) | (1 << (sequenceParser.AmpStillImageFilmLink - 75)))) !== 0) || _la === sequenceParser.ColonText) {
                        {
                            this.state = 352;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sequenceParser.ColonText:
                                    {
                                        this.state = 350;
                                        this.match(sequenceParser.ColonText);
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
                                    {
                                        this.state = 351;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 356;
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
            this.enterRule(_localctx, 32, sequenceParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 357;
                    _la = this._input.LA(1);
                    if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (sequenceParser.AmpArticle - 80)) | (1 << (sequenceParser.AmpDocument - 80)) | (1 << (sequenceParser.AmpWebsite - 80)) | (1 << (sequenceParser.AmpStillImageFilm - 80)) | (1 << (sequenceParser.AmpAudioLink - 80)) | (1 << (sequenceParser.AmpImageLink - 80)) | (1 << (sequenceParser.AmpVideoLink - 80)) | (1 << (sequenceParser.AmpArticleLink - 80)) | (1 << (sequenceParser.AmpDocumentLink - 80)) | (1 << (sequenceParser.AmpAppLink - 80)) | (1 << (sequenceParser.AmpWebsiteLink - 80)) | (1 << (sequenceParser.AmpStillImageFilmLink - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.Prosemirror - 114)) | (1 << (sequenceParser.Placeholder - 114)))) !== 0))) {
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
            this.enterRule(_localctx, 34, sequenceParser.RULE_resource_format_extra);
            try {
                this.state = 368;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AmpImage:
                    case sequenceParser.AmpImageZoom:
                    case sequenceParser.AmpImageWAudio:
                    case sequenceParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 359;
                            this.image_format();
                        }
                        break;
                    case sequenceParser.AmpAudio:
                    case sequenceParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 360;
                            this.audio_format();
                        }
                        break;
                    case sequenceParser.AmpVideo:
                    case sequenceParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 361;
                            this.video_format();
                        }
                        break;
                    case sequenceParser.AmpArticle:
                    case sequenceParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 362;
                            this.article_format();
                        }
                        break;
                    case sequenceParser.AmpDocument:
                    case sequenceParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 363;
                            this.document_format();
                        }
                        break;
                    case sequenceParser.AmpApp:
                    case sequenceParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 364;
                            this.app_format();
                        }
                        break;
                    case sequenceParser.AmpWebsite:
                    case sequenceParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 365;
                            this.website_format();
                        }
                        break;
                    case sequenceParser.AmpStillImageFilm:
                    case sequenceParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 366;
                            this.stillimagefilm_format();
                        }
                        break;
                    case sequenceParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 367;
                            this.match(sequenceParser.AmpPdf);
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
            this.enterRule(_localctx, 36, sequenceParser.RULE_image_format);
            let _la;
            try {
                this.state = 384;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 370;
                            this.match(sequenceParser.AmpImage);
                            this.state = 373;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sequenceParser.Image_type:
                                    {
                                        {
                                            this.state = 371;
                                            this.match(sequenceParser.Image_type);
                                        }
                                    }
                                    break;
                                case sequenceParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 372;
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
                                case sequenceParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case sequenceParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 375;
                            this.match(sequenceParser.AmpImageLink);
                            this.state = 377;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.Image_type) {
                                {
                                    this.state = 376;
                                    this.match(sequenceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case sequenceParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 379;
                            this.match(sequenceParser.AmpImageZoom);
                            this.state = 381;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.Image_type) {
                                {
                                    this.state = 380;
                                    this.match(sequenceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case sequenceParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 383;
                            this.match(sequenceParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 38, sequenceParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 386;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.AmpVideo || _la === sequenceParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 389;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.COLON) {
                        {
                            this.state = 387;
                            this.match(sequenceParser.COLON);
                            this.state = 388;
                            this.match(sequenceParser.Video_type);
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
            this.enterRule(_localctx, 40, sequenceParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 391;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.AmpArticle || _la === sequenceParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 42, sequenceParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 393;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.AmpDocument || _la === sequenceParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 44, sequenceParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 395;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.AmpApp || _la === sequenceParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 46, sequenceParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 397;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.AmpWebsite || _la === sequenceParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 48, sequenceParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 399;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.AmpStillImageFilm || _la === sequenceParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 50, sequenceParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 401;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.OpAmpArticle || _la === sequenceParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 52, sequenceParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 403;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.OpAmpDocument || _la === sequenceParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 54, sequenceParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 405;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.OpAmpApp || _la === sequenceParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 56, sequenceParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 407;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.OpAmpWebsite || _la === sequenceParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 58, sequenceParser.RULE_op_video_format);
            try {
                this.state = 419;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 409;
                            this.match(sequenceParser.OpAmpVideo);
                            this.state = 412;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 410;
                                        this.match(sequenceParser.COLON);
                                        this.state = 411;
                                        this.match(sequenceParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case sequenceParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 414;
                            this.match(sequenceParser.OpAmpVideoLink);
                            this.state = 417;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 415;
                                        this.match(sequenceParser.COLON);
                                        this.state = 416;
                                        this.match(sequenceParser.Video_type);
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
            this.enterRule(_localctx, 60, sequenceParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 421;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.OpAmpStillImageFilm || _la === sequenceParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 62, sequenceParser.RULE_articlebit);
            try {
                this.state = 429;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OpAmpArticle:
                    case sequenceParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 423;
                            this.op_article_format();
                            this.state = 424;
                            this.match(sequenceParser.COLON);
                            this.state = 425;
                            this.url();
                            this.state = 426;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 428;
                            this.match(sequenceParser.ArticleText);
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
            this.enterRule(_localctx, 64, sequenceParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 431;
                    this.op_document_format();
                    this.state = 432;
                    this.match(sequenceParser.COLON);
                    this.state = 433;
                    this.url();
                    this.state = 434;
                    this.match(sequenceParser.CL);
                    this.state = 439;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.OPATALT) {
                        {
                            this.state = 435;
                            this.match(sequenceParser.OPATALT);
                            this.state = 436;
                            this.words();
                            this.state = 437;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 66, sequenceParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 441;
                    this.op_website_format();
                    this.state = 442;
                    this.match(sequenceParser.COLON);
                    this.state = 443;
                    this.url();
                    this.state = 444;
                    this.match(sequenceParser.CL);
                    this.state = 449;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.OPATALT) {
                        {
                            this.state = 445;
                            this.match(sequenceParser.OPATALT);
                            this.state = 446;
                            this.words();
                            this.state = 447;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 68, sequenceParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 451;
                    this.op_app_format();
                    this.state = 452;
                    this.match(sequenceParser.COLON);
                    this.state = 455;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case sequenceParser.URL:
                            {
                                this.state = 453;
                                this.url();
                            }
                            break;
                        case sequenceParser.TEL:
                            {
                                this.state = 454;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 457;
                    this.match(sequenceParser.CL);
                    this.state = 462;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.OPATALT) {
                        {
                            this.state = 458;
                            this.match(sequenceParser.OPATALT);
                            this.state = 459;
                            this.words();
                            this.state = 460;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 70, sequenceParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 464;
                    this.stillimg_one();
                    this.state = 468;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 465;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 470;
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
        stillimg_one() {
            let _localctx = new Stillimg_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 72, sequenceParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 471;
                    this.op_stillimagefilm_format();
                    this.state = 472;
                    this.match(sequenceParser.COLON);
                    this.state = 476;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === sequenceParser.S) {
                        {
                            {
                                this.state = 473;
                                this.match(sequenceParser.S);
                            }
                        }
                        this.state = 478;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 479;
                    this.url();
                    this.state = 480;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 74, sequenceParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 482;
                    this.video_one();
                    this.state = 486;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 483;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 488;
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
        video_one() {
            let _localctx = new Video_oneContext(this._ctx, this.state);
            this.enterRule(_localctx, 76, sequenceParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 489;
                    this.op_video_format();
                    this.state = 490;
                    this.match(sequenceParser.COLON);
                    this.state = 491;
                    this.url();
                    this.state = 492;
                    this.match(sequenceParser.CL);
                    this.state = 497;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                        case 1:
                            {
                                this.state = 493;
                                this.match(sequenceParser.OPATALT);
                                this.state = 494;
                                this.words();
                                this.state = 495;
                                this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 78, sequenceParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 499;
                    this.image_one();
                    this.state = 503;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 500;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 505;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
                    }
                    this.state = 508;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                        case 1:
                            {
                                this.state = 506;
                                this.match(sequenceParser.NL);
                                this.state = 507;
                                this.match(sequenceParser.ShowInIndex);
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
            this.enterRule(_localctx, 80, sequenceParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 510;
                    this.op_image_format();
                    this.state = 511;
                    this.match(sequenceParser.COLON);
                    this.state = 515;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === sequenceParser.S) {
                        {
                            {
                                this.state = 512;
                                this.match(sequenceParser.S);
                            }
                        }
                        this.state = 517;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 518;
                    this.url();
                    this.state = 519;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 82, sequenceParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 535;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 521;
                            this.match(sequenceParser.OpAmpImage);
                            this.state = 524;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sequenceParser.Image_type:
                                    {
                                        {
                                            this.state = 522;
                                            this.match(sequenceParser.Image_type);
                                        }
                                    }
                                    break;
                                case sequenceParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 523;
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
                            this.state = 526;
                            this.match(sequenceParser.OpAmpImageLink);
                            this.state = 528;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.Image_type) {
                                {
                                    this.state = 527;
                                    this.match(sequenceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case sequenceParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 530;
                            this.match(sequenceParser.OpAmpImageZoom);
                            this.state = 532;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.Image_type) {
                                {
                                    this.state = 531;
                                    this.match(sequenceParser.Image_type);
                                }
                            }
                        }
                        break;
                    case sequenceParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 534;
                            this.match(sequenceParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 84, sequenceParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 554;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 537;
                            this.match(sequenceParser.AtSrc);
                            this.state = 538;
                            this.match(sequenceParser.COLON);
                            this.state = 539;
                            this.url();
                            this.state = 540;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.AtWidth:
                    case sequenceParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 542;
                            _la = this._input.LA(1);
                            if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 543;
                            this.match(sequenceParser.COLON);
                            this.state = 544;
                            this.match(sequenceParser.NUMERIC);
                            this.state = 545;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.OPATALT:
                    case sequenceParser.OpAtCaption:
                    case sequenceParser.OpAtLicense:
                    case sequenceParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 546;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 550;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 547;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 552;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                            }
                            this.state = 553;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 86, sequenceParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 573;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 556;
                            this.match(sequenceParser.AtSrc);
                            this.state = 557;
                            this.match(sequenceParser.COLON);
                            this.state = 558;
                            this.url();
                            this.state = 559;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.AtWidth:
                    case sequenceParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 561;
                            _la = this._input.LA(1);
                            if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 562;
                            this.match(sequenceParser.COLON);
                            this.state = 563;
                            this.match(sequenceParser.NUMERIC);
                            this.state = 564;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.OPATALT:
                    case sequenceParser.OpAtCaption:
                    case sequenceParser.OpAtLicense:
                    case sequenceParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 565;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 569;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 566;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 571;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                            }
                            this.state = 572;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 88, sequenceParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 575;
                    this.audio_one();
                    this.state = 579;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 576;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 581;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
            this.enterRule(_localctx, 90, sequenceParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 582;
                    this.op_audio_format();
                    this.state = 583;
                    this.match(sequenceParser.COLON);
                    this.state = 584;
                    this.url();
                    this.state = 585;
                    this.match(sequenceParser.CL);
                    this.state = 590;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                        case 1:
                            {
                                this.state = 586;
                                this.match(sequenceParser.OPATALT);
                                this.state = 587;
                                this.words();
                                this.state = 588;
                                this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 92, sequenceParser.RULE_audio_format);
            let _la;
            try {
                this.state = 602;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 592;
                            this.match(sequenceParser.AmpAudio);
                            this.state = 595;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.COLON) {
                                {
                                    this.state = 593;
                                    this.match(sequenceParser.COLON);
                                    this.state = 594;
                                    this.match(sequenceParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case sequenceParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 597;
                            this.match(sequenceParser.AmpAudioLink);
                            this.state = 600;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.COLON) {
                                {
                                    this.state = 598;
                                    this.match(sequenceParser.COLON);
                                    this.state = 599;
                                    this.match(sequenceParser.Audio_type);
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
            this.enterRule(_localctx, 94, sequenceParser.RULE_op_audio_format);
            try {
                this.state = 614;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 604;
                            this.match(sequenceParser.OpAmpAudio);
                            this.state = 607;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 605;
                                        this.match(sequenceParser.COLON);
                                        this.state = 606;
                                        this.match(sequenceParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case sequenceParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 609;
                            this.match(sequenceParser.OpAmpAudioLink);
                            this.state = 612;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 610;
                                        this.match(sequenceParser.COLON);
                                        this.state = 611;
                                        this.match(sequenceParser.Audio_type);
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
            this.enterRule(_localctx, 96, sequenceParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 647;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OPA:
                    case sequenceParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 619;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sequenceParser.OPA:
                                    {
                                        this.state = 616;
                                        this.match(sequenceParser.OPA);
                                        this.state = 617;
                                        this.s_and_w();
                                    }
                                    break;
                                case sequenceParser.AtSrc:
                                    {
                                        this.state = 618;
                                        this.match(sequenceParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 621;
                            this.match(sequenceParser.COLON);
                            this.state = 625;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 622;
                                            this.match(sequenceParser.S);
                                        }
                                    }
                                }
                                this.state = 627;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                            }
                            this.state = 630;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 630;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case sequenceParser.S:
                                        case sequenceParser.OPESC:
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
                                        case sequenceParser.SENTENCE:
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
                                                this.state = 628;
                                                this.s_and_w();
                                            }
                                            break;
                                        case sequenceParser.NL:
                                            {
                                                this.state = 629;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 632;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                            this.state = 634;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.AtWidth:
                    case sequenceParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 635;
                            _la = this._input.LA(1);
                            if (!(_la === sequenceParser.AtWidth || _la === sequenceParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 636;
                            this.match(sequenceParser.COLON);
                            this.state = 637;
                            this.match(sequenceParser.NUMERIC);
                            this.state = 638;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.OPATALT:
                    case sequenceParser.OpAtCaption:
                    case sequenceParser.OpAtLicense:
                    case sequenceParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 639;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 643;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 640;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 645;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                            }
                            this.state = 646;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 98, sequenceParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 649;
                    this.match(sequenceParser.TEL);
                    this.state = 650;
                    this.match(sequenceParser.PLUS);
                    this.state = 651;
                    this.match(sequenceParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 100, sequenceParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 653;
                    this.match(sequenceParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 102, sequenceParser.RULE_item);
            let _la;
            try {
                this.state = 685;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 655;
                            this.match(sequenceParser.OPC);
                            this.state = 656;
                            this.match(sequenceParser.CL);
                            this.state = 664;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 660;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === sequenceParser.S) {
                                            {
                                                {
                                                    this.state = 657;
                                                    this.match(sequenceParser.S);
                                                }
                                            }
                                            this.state = 662;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 663;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 666;
                            this.match(sequenceParser.OPC);
                            this.state = 667;
                            this.s_and_w();
                            this.state = 672;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (sequenceParser.COLON - 25)) | (1 << (sequenceParser.AMP - 25)) | (1 << (sequenceParser.Greater - 25)) | (1 << (sequenceParser.Less - 25)) | (1 << (sequenceParser.RightAngle - 25)) | (1 << (sequenceParser.RightArrow - 25)) | (1 << (sequenceParser.SENTENCE - 25)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 670;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case sequenceParser.COLON:
                                            {
                                                this.state = 668;
                                                this.match(sequenceParser.COLON);
                                            }
                                            break;
                                        case sequenceParser.AMP:
                                        case sequenceParser.Greater:
                                        case sequenceParser.Less:
                                        case sequenceParser.RightAngle:
                                        case sequenceParser.RightArrow:
                                        case sequenceParser.SENTENCE:
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
                                                this.state = 669;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 674;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 675;
                            this.match(sequenceParser.CL);
                            this.state = 683;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 679;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === sequenceParser.S) {
                                            {
                                                {
                                                    this.state = 676;
                                                    this.match(sequenceParser.S);
                                                }
                                            }
                                            this.state = 681;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 682;
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
            this.enterRule(_localctx, 104, sequenceParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 687;
                    this.match(sequenceParser.OPC);
                    this.state = 688;
                    this.s_and_w();
                    this.state = 693;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (sequenceParser.COLON - 25)) | (1 << (sequenceParser.AMP - 25)) | (1 << (sequenceParser.Greater - 25)) | (1 << (sequenceParser.Less - 25)) | (1 << (sequenceParser.RightAngle - 25)) | (1 << (sequenceParser.RightArrow - 25)) | (1 << (sequenceParser.SENTENCE - 25)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                        {
                            this.state = 691;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case sequenceParser.COLON:
                                    {
                                        this.state = 689;
                                        this.match(sequenceParser.COLON);
                                    }
                                    break;
                                case sequenceParser.AMP:
                                case sequenceParser.Greater:
                                case sequenceParser.Less:
                                case sequenceParser.RightAngle:
                                case sequenceParser.RightArrow:
                                case sequenceParser.SENTENCE:
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
                                        this.state = 690;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 695;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 696;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 106, sequenceParser.RULE_angleref);
            let _la;
            try {
                this.state = 708;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 698;
                            this.match(sequenceParser.OPRANGLES);
                            this.state = 700;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 699;
                                    this.s_and_w();
                                }
                            }
                            this.state = 702;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 703;
                            this.match(sequenceParser.OPRANGLEL);
                            this.state = 705;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 704;
                                    this.s_and_w();
                                }
                            }
                            this.state = 707;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 108, sequenceParser.RULE_example);
            let _la;
            try {
                this.state = 717;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 710;
                            this.match(sequenceParser.AtExamplecl);
                        }
                        break;
                    case sequenceParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 711;
                            this.match(sequenceParser.AtExampleWithStr);
                        }
                        break;
                    case sequenceParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 712;
                            this.match(sequenceParser.AtExamplecol);
                            this.state = 714;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === sequenceParser.SENTENCE) {
                                {
                                    this.state = 713;
                                    this.match(sequenceParser.SENTENCE);
                                }
                            }
                            this.state = 716;
                            this.match(sequenceParser.EOF);
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
            this.enterRule(_localctx, 110, sequenceParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 758;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 719;
                            this.match(sequenceParser.BracEnclose);
                            this.state = 721;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 720;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 744;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    {
                                        this.state = 723;
                                        this.s_and_w();
                                        this.state = 733;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 724;
                                                        this.match(sequenceParser.NL);
                                                        this.state = 728;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 725;
                                                                        this.match(sequenceParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 730;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 735;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
                                        }
                                        this.state = 739;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === sequenceParser.NL) {
                                            {
                                                {
                                                    this.state = 736;
                                                    this.match(sequenceParser.NL);
                                                }
                                            }
                                            this.state = 741;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 746;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 747;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 748;
                            this.match(sequenceParser.BracEnclose);
                            this.state = 754;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 752;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 749;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 750;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 751;
                                                this.match(sequenceParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 756;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 757;
                            this.match(sequenceParser.EOF);
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
            this.enterRule(_localctx, 112, sequenceParser.RULE_reference);
            let _la;
            try {
                this.state = 782;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 760;
                            this.match(sequenceParser.AtReference);
                            this.state = 765;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 765;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 761;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 762;
                                                this.match(sequenceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 763;
                                                this.match(sequenceParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 764;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 767;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                            this.state = 769;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 770;
                            this.match(sequenceParser.AtReference);
                            this.state = 778;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 776;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 771;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 772;
                                                this.match(sequenceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 773;
                                                this.match(sequenceParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 774;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 775;
                                                this.match(sequenceParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 780;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 781;
                            this.match(sequenceParser.EOF);
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
            this.enterRule(_localctx, 114, sequenceParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 784;
                    this.match(sequenceParser.AtProgress);
                    this.state = 785;
                    this.s_and_w();
                    this.state = 786;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 116, sequenceParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 788;
                    this.match(sequenceParser.AtDate);
                    this.state = 792;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 792;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 789;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 790;
                                        this.match(sequenceParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 791;
                                        this.match(sequenceParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 794;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                    this.state = 796;
                    this.match(sequenceParser.CL);
                    this.state = 798;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === sequenceParser.AtDate) {
                        {
                            this.state = 797;
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
            this.enterRule(_localctx, 118, sequenceParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 800;
                    this.match(sequenceParser.AtDate);
                    this.state = 804;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 804;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 801;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 802;
                                        this.match(sequenceParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 803;
                                        this.match(sequenceParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 806;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                    this.state = 808;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 120, sequenceParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 844;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 810;
                            this.match(sequenceParser.OPB);
                            this.state = 812;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 811;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 835;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    {
                                        this.state = 814;
                                        this.s_and_w();
                                        this.state = 824;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 815;
                                                        this.match(sequenceParser.NL);
                                                        this.state = 819;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 816;
                                                                        this.match(sequenceParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 821;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 826;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                                        }
                                        this.state = 830;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === sequenceParser.NL) {
                                            {
                                                {
                                                    this.state = 827;
                                                    this.match(sequenceParser.NL);
                                                }
                                            }
                                            this.state = 832;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 837;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 838;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 839;
                            this.match(sequenceParser.OPB);
                            this.state = 841;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 840;
                                    this.s_and_w();
                                }
                            }
                            this.state = 843;
                            this.match(sequenceParser.EOF);
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
            this.enterRule(_localctx, 122, sequenceParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 846;
                    this.match(sequenceParser.OPQ);
                    this.state = 848;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 847;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === sequenceParser.CL)) {
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
                        this.state = 850;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.OPDOT) | (1 << sequenceParser.S) | (1 << sequenceParser.BitSequence) | (1 << sequenceParser.COMMENT) | (1 << sequenceParser.Image_type) | (1 << sequenceParser.Audio_type) | (1 << sequenceParser.Video_type) | (1 << sequenceParser.OPDOLL) | (1 << sequenceParser.OPBUL) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPRANGLES) | (1 << sequenceParser.OPRANGLEL) | (1 << sequenceParser.OPDANGLE) | (1 << sequenceParser.OPU) | (1 << sequenceParser.OPB) | (1 << sequenceParser.OPQ) | (1 << sequenceParser.OPA) | (1 << sequenceParser.OPP) | (1 << sequenceParser.OPM) | (1 << sequenceParser.OPS) | (1 << sequenceParser.OPR) | (1 << sequenceParser.OPC) | (1 << sequenceParser.OPHASH) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.DBLCOLON) | (1 << sequenceParser.PLUS) | (1 << sequenceParser.DotAt) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.Dot - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.DBLMI - 32)) | (1 << (sequenceParser.HSPL - 32)) | (1 << (sequenceParser.SSPL - 32)) | (1 << (sequenceParser.SSPL2 - 32)) | (1 << (sequenceParser.DCANY - 32)) | (1 << (sequenceParser.ArticleText - 32)) | (1 << (sequenceParser.NOTCL - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)) | (1 << (sequenceParser.OPAT - 32)) | (1 << (sequenceParser.AtProgress - 32)) | (1 << (sequenceParser.AtReference - 32)) | (1 << (sequenceParser.AtWidth - 32)) | (1 << (sequenceParser.AtHeight - 32)) | (1 << (sequenceParser.AtProgressPoints - 32)) | (1 << (sequenceParser.AtShortanswer - 32)) | (1 << (sequenceParser.AtLonganswer - 32)) | (1 << (sequenceParser.AtExampleWithStr - 32)) | (1 << (sequenceParser.AtExamplecol - 32)) | (1 << (sequenceParser.AtExamplecl - 32)) | (1 << (sequenceParser.AtPartialAnswerS - 32)) | (1 << (sequenceParser.AtPartialAnswer - 32)) | (1 << (sequenceParser.AtLabeltrue - 32)) | (1 << (sequenceParser.AtLabelfalse - 32)) | (1 << (sequenceParser.AtPoints - 32)) | (1 << (sequenceParser.AtSrc - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sequenceParser.OPATALT - 64)) | (1 << (sequenceParser.OPAMARK - 64)) | (1 << (sequenceParser.ShowInIndex - 64)) | (1 << (sequenceParser.OpAtCaption - 64)) | (1 << (sequenceParser.OpAtLicense - 64)) | (1 << (sequenceParser.OpAtCopyright - 64)) | (1 << (sequenceParser.OpAtIsTracked - 64)) | (1 << (sequenceParser.OpAtIsInfoOnly - 64)) | (1 << (sequenceParser.AtDate - 64)) | (1 << (sequenceParser.Http - 64)) | (1 << (sequenceParser.Https - 64)) | (1 << (sequenceParser.AmpAudio - 64)) | (1 << (sequenceParser.AmpImage - 64)) | (1 << (sequenceParser.AmpImageZoom - 64)) | (1 << (sequenceParser.AmpImageWAudio - 64)) | (1 << (sequenceParser.AmpVideo - 64)) | (1 << (sequenceParser.AmpArticle - 64)) | (1 << (sequenceParser.AmpDocument - 64)) | (1 << (sequenceParser.AmpApp - 64)) | (1 << (sequenceParser.AmpWebsite - 64)) | (1 << (sequenceParser.AmpStillImageFilm - 64)) | (1 << (sequenceParser.AmpPdf - 64)) | (1 << (sequenceParser.OpAmpAudio - 64)) | (1 << (sequenceParser.OpAmpImage - 64)) | (1 << (sequenceParser.OpAmpImageZoom - 64)) | (1 << (sequenceParser.OpAmpImageWAudio - 64)) | (1 << (sequenceParser.OpAmpVideo - 64)) | (1 << (sequenceParser.OpAmpArticle - 64)) | (1 << (sequenceParser.OpAmpArticleAtt - 64)) | (1 << (sequenceParser.OpAmpDocument - 64)) | (1 << (sequenceParser.OpAmpApp - 64)) | (1 << (sequenceParser.OpAmpWebsite - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (sequenceParser.OpAmpStillImageFilm - 96)) | (1 << (sequenceParser.BracEnclose - 96)) | (1 << (sequenceParser.AmpAudioLink - 96)) | (1 << (sequenceParser.AmpImageLink - 96)) | (1 << (sequenceParser.AmpVideoLink - 96)) | (1 << (sequenceParser.AmpArticleLink - 96)) | (1 << (sequenceParser.AmpDocumentLink - 96)) | (1 << (sequenceParser.AmpAppLink - 96)) | (1 << (sequenceParser.AmpWebsiteLink - 96)) | (1 << (sequenceParser.AmpStillImageFilmLink - 96)) | (1 << (sequenceParser.OpAmpAudioLink - 96)) | (1 << (sequenceParser.OpAmpImageLink - 96)) | (1 << (sequenceParser.OpAmpVideoLink - 96)) | (1 << (sequenceParser.OpAmpArticleLink - 96)) | (1 << (sequenceParser.OpAmpDocumentLink - 96)) | (1 << (sequenceParser.OpAmpAppLink - 96)) | (1 << (sequenceParser.OpAmpWebsiteLink - 96)) | (1 << (sequenceParser.OpAmpStillImageFilmLink - 96)) | (1 << (sequenceParser.BitmarkMinus - 96)) | (1 << (sequenceParser.BitmarkPlus - 96)) | (1 << (sequenceParser.ColonText - 96)) | (1 << (sequenceParser.Prosemirror - 96)) | (1 << (sequenceParser.Placeholder - 96)) | (1 << (sequenceParser.BASIC - 96)) | (1 << (sequenceParser.JPG - 96)) | (1 << (sequenceParser.PNG - 96)) | (1 << (sequenceParser.GIF - 96)) | (1 << (sequenceParser.SVG - 96)) | (1 << (sequenceParser.MP2 - 96)) | (1 << (sequenceParser.MP3 - 96)) | (1 << (sequenceParser.MP4 - 96)) | (1 << (sequenceParser.FLV - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (sequenceParser.WMV - 128)) | (1 << (sequenceParser.MPEG - 128)) | (1 << (sequenceParser.MPG - 128)) | (1 << (sequenceParser.TEL - 128)) | (1 << (sequenceParser.DotArticleAtt - 128)) | (1 << (sequenceParser.STAR - 128)) | (1 << (sequenceParser.URL - 128)) | (1 << (sequenceParser.LIST_LINE - 128)))) !== 0));
                    this.state = 852;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 124, sequenceParser.RULE_title);
            let _la;
            try {
                this.state = 866;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 854;
                            this.match(sequenceParser.OPHASH);
                            this.state = 857;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 857;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case sequenceParser.S:
                                        case sequenceParser.OPESC:
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
                                        case sequenceParser.SENTENCE:
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
                                                this.state = 855;
                                                this.s_and_w();
                                            }
                                            break;
                                        case sequenceParser.NL:
                                            {
                                                this.state = 856;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 859;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                            this.state = 861;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 862;
                            this.match(sequenceParser.OPHASH);
                            this.state = 863;
                            this.s_and_w();
                            this.state = 864;
                            this.match(sequenceParser.EOF);
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
            this.enterRule(_localctx, 126, sequenceParser.RULE_bool_label);
            try {
                this.state = 876;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 868;
                            this.match(sequenceParser.AtLabeltrue);
                            this.state = 869;
                            this.s_and_w();
                            this.state = 870;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 872;
                            this.match(sequenceParser.AtLabelfalse);
                            this.state = 873;
                            this.s_and_w();
                            this.state = 874;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 128, sequenceParser.RULE_progress_points);
            try {
                this.state = 887;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 878;
                            this.match(sequenceParser.AtProgressPoints);
                            this.state = 879;
                            this.match(sequenceParser.COLON);
                            this.state = 880;
                            this.match(sequenceParser.NUMERIC);
                            this.state = 881;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 882;
                            this.match(sequenceParser.AtProgressPoints);
                            this.state = 883;
                            this.match(sequenceParser.COLON);
                            this.state = 884;
                            this.s_and_w();
                            this.state = 885;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 130, sequenceParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 889;
                    this.match(sequenceParser.OpAtIsTracked);
                    this.state = 890;
                    this.s_and_w();
                    this.state = 891;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 132, sequenceParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 893;
                    this.match(sequenceParser.OpAtIsInfoOnly);
                    this.state = 894;
                    this.s_and_w();
                    this.state = 895;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 134, sequenceParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 897;
                    this.atdef_();
                    this.state = 907;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 901;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === sequenceParser.NL) {
                                        {
                                            {
                                                this.state = 898;
                                                this.match(sequenceParser.NL);
                                            }
                                        }
                                        this.state = 903;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 904;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 909;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
            this.enterRule(_localctx, 136, sequenceParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 932;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sequenceParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 910;
                            this.match(sequenceParser.OPA);
                            this.state = 911;
                            this.s_and_w();
                            this.state = 912;
                            _la = this._input.LA(1);
                            if (!(_la === sequenceParser.COLON || _la === sequenceParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 913;
                            this.s_and_w();
                            this.state = 919;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 917;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 914;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 915;
                                                this.match(sequenceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 916;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 921;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 922;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case sequenceParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 924;
                            this.match(sequenceParser.OpAtCopyright);
                            this.state = 928;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 925;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 930;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                            }
                            this.state = 931;
                            this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 138, sequenceParser.RULE_dollarans);
            let _la;
            try {
                this.state = 953;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 934;
                            this.match(sequenceParser.OPDOLL);
                            this.state = 938;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 938;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 935;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 936;
                                                this.match(sequenceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 937;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 940;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0));
                            this.state = 942;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 943;
                            this.match(sequenceParser.OPDOLL);
                            this.state = 949;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.NL - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                                {
                                    this.state = 947;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 944;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 945;
                                                this.match(sequenceParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 946;
                                                this.match(sequenceParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 951;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 952;
                            this.match(sequenceParser.EOF);
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
            this.enterRule(_localctx, 140, sequenceParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 955;
                    this.match(sequenceParser.OPDANGLE);
                    this.state = 957;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sequenceParser.S) | (1 << sequenceParser.OPESC) | (1 << sequenceParser.OPS) | (1 << sequenceParser.COLON) | (1 << sequenceParser.AMP) | (1 << sequenceParser.Greater) | (1 << sequenceParser.Less))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sequenceParser.RightAngle - 32)) | (1 << (sequenceParser.RightArrow - 32)) | (1 << (sequenceParser.DBLEQ - 32)) | (1 << (sequenceParser.NUMERIC - 32)) | (1 << (sequenceParser.STRING - 32)) | (1 << (sequenceParser.SENTENCE - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (sequenceParser.AmpAudio - 75)) | (1 << (sequenceParser.AmpImage - 75)) | (1 << (sequenceParser.AmpVideo - 75)) | (1 << (sequenceParser.AmpArticle - 75)) | (1 << (sequenceParser.AmpDocument - 75)) | (1 << (sequenceParser.AmpApp - 75)) | (1 << (sequenceParser.AmpWebsite - 75)) | (1 << (sequenceParser.AmpAudioLink - 75)) | (1 << (sequenceParser.AmpImageLink - 75)) | (1 << (sequenceParser.AmpArticleLink - 75)) | (1 << (sequenceParser.AmpDocumentLink - 75)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (sequenceParser.BitmarkMinus - 114)) | (1 << (sequenceParser.BitmarkPlus - 114)) | (1 << (sequenceParser.URL - 114)) | (1 << (sequenceParser.LIST_LINE - 114)))) !== 0)) {
                        {
                            this.state = 956;
                            this.s_and_w();
                        }
                    }
                    this.state = 959;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 142, sequenceParser.RULE_dcolon);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 961;
                    this.match(sequenceParser.DBLCOLON);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 144, sequenceParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1009;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 963;
                            this.match(sequenceParser.STRING);
                            this.state = 970;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 965;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 964;
                                                    this.match(sequenceParser.S);
                                                }
                                            }
                                            this.state = 967;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === sequenceParser.S);
                                        this.state = 969;
                                        this.match(sequenceParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 972;
                            this.words();
                            this.state = 979;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 974;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 973;
                                                    this.match(sequenceParser.S);
                                                }
                                            }
                                            this.state = 976;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === sequenceParser.S);
                                        this.state = 978;
                                        this.match(sequenceParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 981;
                            this.match(sequenceParser.OPS);
                            this.state = 982;
                            this.s_and_w();
                            this.state = 983;
                            this.match(sequenceParser.CL);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 985;
                            this.match(sequenceParser.NUMERIC);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 989;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === sequenceParser.S) {
                                {
                                    {
                                        this.state = 986;
                                        this.match(sequenceParser.S);
                                    }
                                }
                                this.state = 991;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 992;
                            this.match(sequenceParser.COLON);
                            this.state = 996;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 993;
                                            this.match(sequenceParser.S);
                                        }
                                    }
                                }
                                this.state = 998;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 999;
                            this.match(sequenceParser.AMP);
                            this.state = 1003;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1000;
                                            this.match(sequenceParser.S);
                                        }
                                    }
                                }
                                this.state = 1005;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1006;
                            this.match(sequenceParser.DBLEQ);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1007;
                            this.match(sequenceParser.URL);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1008;
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
            this.enterRule(_localctx, 146, sequenceParser.RULE_dclines);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1011;
                    this.match(sequenceParser.DCANY);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 148, sequenceParser.RULE_bracket_escaped);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1013;
                    this.match(sequenceParser.OPESC);
                    this.state = 1015;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1014;
                                        this.s_and_w();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 1020;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                        case 1:
                            {
                                this.state = 1019;
                                this.match(sequenceParser.CL);
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
            this.enterRule(_localctx, 150, sequenceParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1022;
                    this.match(sequenceParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 152, sequenceParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1024;
                    _la = this._input.LA(1);
                    if (!(_la === sequenceParser.SSPL || _la === sequenceParser.SSPL2)) {
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
            this.enterRule(_localctx, 154, sequenceParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1049;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1049;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1026;
                                                this.match(sequenceParser.SENTENCE);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1027;
                                                this.match(sequenceParser.LIST_LINE);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1028;
                                                this.match(sequenceParser.AMP);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1029;
                                                this.match(sequenceParser.Greater);
                                                this.state = 1030;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === sequenceParser.Greater)) {
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
                                        case 5:
                                            {
                                                this.state = 1031;
                                                this.match(sequenceParser.Less);
                                                this.state = 1032;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === sequenceParser.Less)) {
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
                                        case 6:
                                            {
                                                this.state = 1033;
                                                this.match(sequenceParser.RightArrow);
                                            }
                                            break;
                                        case 7:
                                            {
                                                this.state = 1034;
                                                this.match(sequenceParser.RightAngle);
                                            }
                                            break;
                                        case 8:
                                            {
                                                this.state = 1035;
                                                this.match(sequenceParser.AmpArticle);
                                            }
                                            break;
                                        case 9:
                                            {
                                                this.state = 1036;
                                                this.match(sequenceParser.AmpDocument);
                                            }
                                            break;
                                        case 10:
                                            {
                                                this.state = 1037;
                                                this.match(sequenceParser.AmpDocumentLink);
                                            }
                                            break;
                                        case 11:
                                            {
                                                this.state = 1038;
                                                this.match(sequenceParser.AmpWebsite);
                                            }
                                            break;
                                        case 12:
                                            {
                                                this.state = 1039;
                                                this.match(sequenceParser.AmpImage);
                                            }
                                            break;
                                        case 13:
                                            {
                                                this.state = 1040;
                                                this.match(sequenceParser.AmpAudio);
                                            }
                                            break;
                                        case 14:
                                            {
                                                this.state = 1041;
                                                this.match(sequenceParser.AmpVideo);
                                            }
                                            break;
                                        case 15:
                                            {
                                                this.state = 1042;
                                                this.match(sequenceParser.AmpApp);
                                            }
                                            break;
                                        case 16:
                                            {
                                                this.state = 1043;
                                                this.match(sequenceParser.AmpArticleLink);
                                            }
                                            break;
                                        case 17:
                                            {
                                                this.state = 1044;
                                                this.match(sequenceParser.AmpAudioLink);
                                            }
                                            break;
                                        case 18:
                                            {
                                                this.state = 1045;
                                                this.match(sequenceParser.AmpImageLink);
                                            }
                                            break;
                                        case 19:
                                            {
                                                this.state = 1046;
                                                this.match(sequenceParser.AmpDocumentLink);
                                            }
                                            break;
                                        case 20:
                                            {
                                                this.state = 1047;
                                                this.match(sequenceParser.BitmarkMinus);
                                            }
                                            break;
                                        case 21:
                                            {
                                                this.state = 1048;
                                                this.match(sequenceParser.BitmarkPlus);
                                            }
                                            break;
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1051;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
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
            this.enterRule(_localctx, 156, sequenceParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1053;
                    this.match(sequenceParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
                sequenceParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sequenceParser._serializedATN));
            }
            return sequenceParser.__ATN;
        }
    }
    sequenceParser.OPDOT = 1;
    sequenceParser.S = 2;
    sequenceParser.BitSequence = 3;
    sequenceParser.COMMENT = 4;
    sequenceParser.Image_type = 5;
    sequenceParser.Audio_type = 6;
    sequenceParser.Video_type = 7;
    sequenceParser.OPDOLL = 8;
    sequenceParser.OPBUL = 9;
    sequenceParser.OPESC = 10;
    sequenceParser.OPRANGLES = 11;
    sequenceParser.OPRANGLEL = 12;
    sequenceParser.OPDANGLE = 13;
    sequenceParser.OPU = 14;
    sequenceParser.OPB = 15;
    sequenceParser.OPQ = 16;
    sequenceParser.OPA = 17;
    sequenceParser.OPP = 18;
    sequenceParser.OPM = 19;
    sequenceParser.OPS = 20;
    sequenceParser.OPR = 21;
    sequenceParser.OPC = 22;
    sequenceParser.OPHASH = 23;
    sequenceParser.CL = 24;
    sequenceParser.COLON = 25;
    sequenceParser.AMP = 26;
    sequenceParser.DBLCOLON = 27;
    sequenceParser.PLUS = 28;
    sequenceParser.DotAt = 29;
    sequenceParser.Greater = 30;
    sequenceParser.Less = 31;
    sequenceParser.RightAngle = 32;
    sequenceParser.RightArrow = 33;
    sequenceParser.Dot = 34;
    sequenceParser.DBLEQ = 35;
    sequenceParser.DBLMI = 36;
    sequenceParser.HSPL = 37;
    sequenceParser.SSPL = 38;
    sequenceParser.SSPL2 = 39;
    sequenceParser.DCANY = 40;
    sequenceParser.ArticleText = 41;
    sequenceParser.NOTCL = 42;
    sequenceParser.NUMERIC = 43;
    sequenceParser.STRING = 44;
    sequenceParser.NL = 45;
    sequenceParser.SENTENCE = 46;
    sequenceParser.OPAT = 47;
    sequenceParser.AtProgress = 48;
    sequenceParser.AtReference = 49;
    sequenceParser.AtWidth = 50;
    sequenceParser.AtHeight = 51;
    sequenceParser.AtProgressPoints = 52;
    sequenceParser.AtShortanswer = 53;
    sequenceParser.AtLonganswer = 54;
    sequenceParser.AtExampleWithStr = 55;
    sequenceParser.AtExamplecol = 56;
    sequenceParser.AtExamplecl = 57;
    sequenceParser.AtPartialAnswerS = 58;
    sequenceParser.AtPartialAnswer = 59;
    sequenceParser.AtLabeltrue = 60;
    sequenceParser.AtLabelfalse = 61;
    sequenceParser.AtPoints = 62;
    sequenceParser.AtSrc = 63;
    sequenceParser.OPATALT = 64;
    sequenceParser.OPAMARK = 65;
    sequenceParser.ShowInIndex = 66;
    sequenceParser.OpAtCaption = 67;
    sequenceParser.OpAtLicense = 68;
    sequenceParser.OpAtCopyright = 69;
    sequenceParser.OpAtIsTracked = 70;
    sequenceParser.OpAtIsInfoOnly = 71;
    sequenceParser.AtDate = 72;
    sequenceParser.Http = 73;
    sequenceParser.Https = 74;
    sequenceParser.AmpAudio = 75;
    sequenceParser.AmpImage = 76;
    sequenceParser.AmpImageZoom = 77;
    sequenceParser.AmpImageWAudio = 78;
    sequenceParser.AmpVideo = 79;
    sequenceParser.AmpArticle = 80;
    sequenceParser.AmpDocument = 81;
    sequenceParser.AmpApp = 82;
    sequenceParser.AmpWebsite = 83;
    sequenceParser.AmpStillImageFilm = 84;
    sequenceParser.AmpPdf = 85;
    sequenceParser.OpAmpAudio = 86;
    sequenceParser.OpAmpImage = 87;
    sequenceParser.OpAmpImageZoom = 88;
    sequenceParser.OpAmpImageWAudio = 89;
    sequenceParser.OpAmpVideo = 90;
    sequenceParser.OpAmpArticle = 91;
    sequenceParser.OpAmpArticleAtt = 92;
    sequenceParser.OpAmpDocument = 93;
    sequenceParser.OpAmpApp = 94;
    sequenceParser.OpAmpWebsite = 95;
    sequenceParser.OpAmpStillImageFilm = 96;
    sequenceParser.BracEnclose = 97;
    sequenceParser.AmpAudioLink = 98;
    sequenceParser.AmpImageLink = 99;
    sequenceParser.AmpVideoLink = 100;
    sequenceParser.AmpArticleLink = 101;
    sequenceParser.AmpDocumentLink = 102;
    sequenceParser.AmpAppLink = 103;
    sequenceParser.AmpWebsiteLink = 104;
    sequenceParser.AmpStillImageFilmLink = 105;
    sequenceParser.OpAmpAudioLink = 106;
    sequenceParser.OpAmpImageLink = 107;
    sequenceParser.OpAmpVideoLink = 108;
    sequenceParser.OpAmpArticleLink = 109;
    sequenceParser.OpAmpDocumentLink = 110;
    sequenceParser.OpAmpAppLink = 111;
    sequenceParser.OpAmpWebsiteLink = 112;
    sequenceParser.OpAmpStillImageFilmLink = 113;
    sequenceParser.BitmarkMinus = 114;
    sequenceParser.BitmarkPlus = 115;
    sequenceParser.ColonText = 116;
    sequenceParser.Prosemirror = 117;
    sequenceParser.Placeholder = 118;
    sequenceParser.BASIC = 119;
    sequenceParser.JPG = 120;
    sequenceParser.PNG = 121;
    sequenceParser.GIF = 122;
    sequenceParser.SVG = 123;
    sequenceParser.MP2 = 124;
    sequenceParser.MP3 = 125;
    sequenceParser.MP4 = 126;
    sequenceParser.FLV = 127;
    sequenceParser.WMV = 128;
    sequenceParser.MPEG = 129;
    sequenceParser.MPG = 130;
    sequenceParser.TEL = 131;
    sequenceParser.DotArticleAtt = 132;
    sequenceParser.STAR = 133;
    sequenceParser.URL = 134;
    sequenceParser.LIST_LINE = 135;
    sequenceParser.RULE_bitmark = 0;
    sequenceParser.RULE_bitmark_ = 1;
    sequenceParser.RULE_bit = 2;
    sequenceParser.RULE_sequence = 3;
    sequenceParser.RULE_seqstr = 4;
    sequenceParser.RULE_mmm = 5;
    sequenceParser.RULE_bitElem = 6;
    sequenceParser.RULE_gap = 7;
    sequenceParser.RULE_single_gap = 8;
    sequenceParser.RULE_choice_plus = 9;
    sequenceParser.RULE_choice_minus = 10;
    sequenceParser.RULE_choice_star = 11;
    sequenceParser.RULE_resource = 12;
    sequenceParser.RULE_bullet_item = 13;
    sequenceParser.RULE_atpoint = 14;
    sequenceParser.RULE_format = 15;
    sequenceParser.RULE_resource_format = 16;
    sequenceParser.RULE_resource_format_extra = 17;
    sequenceParser.RULE_image_format = 18;
    sequenceParser.RULE_video_format = 19;
    sequenceParser.RULE_article_format = 20;
    sequenceParser.RULE_document_format = 21;
    sequenceParser.RULE_app_format = 22;
    sequenceParser.RULE_website_format = 23;
    sequenceParser.RULE_stillimagefilm_format = 24;
    sequenceParser.RULE_op_article_format = 25;
    sequenceParser.RULE_op_document_format = 26;
    sequenceParser.RULE_op_app_format = 27;
    sequenceParser.RULE_op_website_format = 28;
    sequenceParser.RULE_op_video_format = 29;
    sequenceParser.RULE_op_stillimagefilm_format = 30;
    sequenceParser.RULE_articlebit = 31;
    sequenceParser.RULE_documentbit = 32;
    sequenceParser.RULE_websitebit = 33;
    sequenceParser.RULE_appbit = 34;
    sequenceParser.RULE_stillimagefilmbit = 35;
    sequenceParser.RULE_stillimg_one = 36;
    sequenceParser.RULE_videobit = 37;
    sequenceParser.RULE_video_one = 38;
    sequenceParser.RULE_imagebit = 39;
    sequenceParser.RULE_image_one = 40;
    sequenceParser.RULE_op_image_format = 41;
    sequenceParser.RULE_image_chained = 42;
    sequenceParser.RULE_image_chained4match = 43;
    sequenceParser.RULE_audiobit = 44;
    sequenceParser.RULE_audio_one = 45;
    sequenceParser.RULE_audio_format = 46;
    sequenceParser.RULE_op_audio_format = 47;
    sequenceParser.RULE_resource_chained = 48;
    sequenceParser.RULE_telephone = 49;
    sequenceParser.RULE_url = 50;
    sequenceParser.RULE_item = 51;
    sequenceParser.RULE_lead = 52;
    sequenceParser.RULE_angleref = 53;
    sequenceParser.RULE_example = 54;
    sequenceParser.RULE_bracketed_text = 55;
    sequenceParser.RULE_reference = 56;
    sequenceParser.RULE_progress = 57;
    sequenceParser.RULE_dateprop = 58;
    sequenceParser.RULE_dateprop_chained = 59;
    sequenceParser.RULE_instruction = 60;
    sequenceParser.RULE_hint = 61;
    sequenceParser.RULE_title = 62;
    sequenceParser.RULE_bool_label = 63;
    sequenceParser.RULE_progress_points = 64;
    sequenceParser.RULE_istracked = 65;
    sequenceParser.RULE_isinfoonly = 66;
    sequenceParser.RULE_atdef = 67;
    sequenceParser.RULE_atdef_ = 68;
    sequenceParser.RULE_dollarans = 69;
    sequenceParser.RULE_anchor = 70;
    sequenceParser.RULE_dcolon = 71;
    sequenceParser.RULE_s_and_w = 72;
    sequenceParser.RULE_dclines = 73;
    sequenceParser.RULE_bracket_escaped = 74;
    sequenceParser.RULE_clnsp = 75;
    sequenceParser.RULE_sspl = 76;
    sequenceParser.RULE_words = 77;
    sequenceParser.RULE_sp = 78;
    // tslint:disable:no-trailing-whitespace
    sequenceParser.ruleNames = [
        "bitmark", "bitmark_", "bit", "sequence", "seqstr", "mmm", "bitElem",
        "gap", "single_gap", "choice_plus", "choice_minus", "choice_star", "resource",
        "bullet_item", "atpoint", "format", "resource_format", "resource_format_extra",
        "image_format", "video_format", "article_format", "document_format", "app_format",
        "website_format", "stillimagefilm_format", "op_article_format", "op_document_format",
        "op_app_format", "op_website_format", "op_video_format", "op_stillimagefilm_format",
        "articlebit", "documentbit", "websitebit", "appbit", "stillimagefilmbit",
        "stillimg_one", "videobit", "video_one", "imagebit", "image_one", "op_image_format",
        "image_chained", "image_chained4match", "audiobit", "audio_one", "audio_format",
        "op_audio_format", "resource_chained", "telephone", "url", "item", "lead",
        "angleref", "example", "bracketed_text", "reference", "progress", "dateprop",
        "dateprop_chained", "instruction", "hint", "title", "bool_label", "progress_points",
        "istracked", "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon",
        "s_and_w", "dclines", "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    sequenceParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'", "'+'", "'.@'",
        "'>'", "'<'", "'\u25BA'", "'\u2192'", "'.'", "'=='", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "'[@'", undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "'http://'", "'https://'", "'&audio'", "'&image'", "'&image-zoom'", "'&imageWithAudio'",
        "'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&stillImageFilm'",
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
    sequenceParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitSequence", "COMMENT", "Image_type", "Audio_type",
        "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL", "OPDANGLE",
        "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC", "OPHASH",
        "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater", "Less",
        "RightAngle", "RightArrow", "Dot", "DBLEQ", "DBLMI", "HSPL", "SSPL", "SSPL2",
        "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE",
        "OPAT", "AtProgress", "AtReference", "AtWidth", "AtHeight", "AtProgressPoints",
        "AtShortanswer", "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl",
        "AtPartialAnswerS", "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse",
        "AtPoints", "AtSrc", "OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption",
        "OpAtLicense", "OpAtCopyright", "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate",
        "Http", "Https", "AmpAudio", "AmpImage", "AmpImageZoom", "AmpImageWAudio",
        "AmpVideo", "AmpArticle", "AmpDocument", "AmpApp", "AmpWebsite", "AmpStillImageFilm",
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
    sequenceParser.VOCABULARY = new VocabularyImpl(sequenceParser._LITERAL_NAMES, sequenceParser._SYMBOLIC_NAMES, []);
    sequenceParser._serializedATNSegments = 2;
    sequenceParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x89\u0422\x04" +
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
        "\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x07\x05\xC2\n\x05\f\x05\x0E\x05\xC5\v\x05\x03\x05\x07\x05\xC8\n\x05" +
        "\f\x05\x0E\x05\xCB\v\x05\x03\x05\x07\x05\xCE\n\x05\f\x05\x0E\x05\xD1\v" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xD7\n\x05\f\x05\x0E\x05\xDA" +
        "\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xE0\n\x05\f\x05\x0E\x05" +
        "\xE3\v\x05\x03\x05\x07\x05\xE6\n\x05\f\x05\x0E\x05\xE9\v\x05\x05\x05\xEB" +
        "\n\x05\x03\x06\x03\x06\x05\x06\xEF\n\x06\x07\x06\xF1\n\x06\f\x06\x0E\x06" +
        "\xF4\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0113\n\b\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u011B\n\t\f\t\x0E\t\u011E\v\t\x03" +
        "\n\x03\n\x03\n\x03\n\x05\n\u0124\n\n\x03\n\x07\n\u0127\n\n\f\n\x0E\n\u012A" +
        "\v\n\x03\n\x03\n\x03\v\x05\v\u012F\n\v\x03\v\x03\v\x06\v\u0133\n\v\r\v" +
        "\x0E\v\u0134\x03\v\x03\v\x03\f\x05\f\u013A\n\f\x03\f\x03\f\x06\f\u013E" +
        "\n\f\r\f\x0E\f\u013F\x03\f\x03\f\x03\r\x05\r\u0145\n\r\x03\r\x03\r\x06" +
        "\r\u0149\n\r\r\r\x0E\r\u014A\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x0F\x03\x0F\x05\x0F\u0155\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
        "\x11\x07\x11\u015C\n\x11\f\x11\x0E\x11\u015F\v\x11\x03\x11\x03\x11\x07" +
        "\x11\u0163\n\x11\f\x11\x0E\x11\u0166\v\x11\x03\x12\x03\x12\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0173" +
        "\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0178\n\x14\x03\x14\x03\x14\x05" +
        "\x14\u017C\n\x14\x03\x14\x03\x14\x05\x14\u0180\n\x14\x03\x14\x05\x14\u0183" +
        "\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0188\n\x15\x03\x16\x03\x16\x03" +
        "\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
        "\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x05\x1F\u019F\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01A4\n\x1F\x05" +
        "\x1F\u01A6\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u01B0\n" +
        "!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01BA\n\"\x03" +
        "#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01C4\n#\x03$\x03$\x03$\x03" +
        "$\x05$\u01CA\n$\x03$\x03$\x03$\x03$\x03$\x05$\u01D1\n$\x03%\x03%\x07%" +
        "\u01D5\n%\f%\x0E%\u01D8\v%\x03&\x03&\x03&\x07&\u01DD\n&\f&\x0E&\u01E0" +
        "\v&\x03&\x03&\x03&\x03\'\x03\'\x07\'\u01E7\n\'\f\'\x0E\'\u01EA\v\'\x03" +
        "(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u01F4\n(\x03)\x03)\x07)\u01F8" +
        "\n)\f)\x0E)\u01FB\v)\x03)\x03)\x05)\u01FF\n)\x03*\x03*\x03*\x07*\u0204" +
        "\n*\f*\x0E*\u0207\v*\x03*\x03*\x03*\x03+\x03+\x03+\x05+\u020F\n+\x03+" +
        "\x03+\x05+\u0213\n+\x03+\x03+\x05+\u0217\n+\x03+\x05+\u021A\n+\x03,\x03" +
        ",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u0227\n,\f,\x0E,\u022A" +
        "\v,\x03,\x05,\u022D\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x07-\u023A\n-\f-\x0E-\u023D\v-\x03-\x05-\u0240\n-\x03.\x03.\x07" +
        ".\u0244\n.\f.\x0E.\u0247\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
        "/\u0251\n/\x030\x030\x030\x050\u0256\n0\x030\x030\x030\x050\u025B\n0\x05" +
        "0\u025D\n0\x031\x031\x031\x051\u0262\n1\x031\x031\x031\x051\u0267\n1\x05" +
        "1\u0269\n1\x032\x032\x032\x052\u026E\n2\x032\x032\x072\u0272\n2\f2\x0E" +
        "2\u0275\v2\x032\x032\x062\u0279\n2\r2\x0E2\u027A\x032\x032\x032\x032\x03" +
        "2\x032\x032\x072\u0284\n2\f2\x0E2\u0287\v2\x032\x052\u028A\n2\x033\x03" +
        "3\x033\x033\x034\x034\x035\x035\x035\x075\u0295\n5\f5\x0E5\u0298\v5\x03" +
        "5\x055\u029B\n5\x035\x035\x035\x035\x075\u02A1\n5\f5\x0E5\u02A4\v5\x03" +
        "5\x035\x075\u02A8\n5\f5\x0E5\u02AB\v5\x035\x055\u02AE\n5\x055\u02B0\n" +
        "5\x036\x036\x036\x036\x076\u02B6\n6\f6\x0E6\u02B9\v6\x036\x036\x037\x03" +
        "7\x057\u02BF\n7\x037\x037\x037\x057\u02C4\n7\x037\x057\u02C7\n7\x038\x03" +
        "8\x038\x038\x058\u02CD\n8\x038\x058\u02D0\n8\x039\x039\x059\u02D4\n9\x03" +
        "9\x039\x039\x079\u02D9\n9\f9\x0E9\u02DC\v9\x079\u02DE\n9\f9\x0E9\u02E1" +
        "\v9\x039\x079\u02E4\n9\f9\x0E9\u02E7\v9\x079\u02E9\n9\f9\x0E9\u02EC\v" +
        "9\x039\x039\x039\x039\x039\x079\u02F3\n9\f9\x0E9\u02F6\v9\x039\x059\u02F9" +
        "\n9\x03:\x03:\x03:\x03:\x03:\x06:\u0300\n:\r:\x0E:\u0301\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x03:\x07:\u030B\n:\f:\x0E:\u030E\v:\x03:\x05:\u0311\n" +
        ":\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x06<\u031B\n<\r<\x0E<\u031C" +
        "\x03<\x03<\x05<\u0321\n<\x03=\x03=\x03=\x03=\x06=\u0327\n=\r=\x0E=\u0328" +
        "\x03=\x03=\x03>\x03>\x05>\u032F\n>\x03>\x03>\x03>\x07>\u0334\n>\f>\x0E" +
        ">\u0337\v>\x07>\u0339\n>\f>\x0E>\u033C\v>\x03>\x07>\u033F\n>\f>\x0E>\u0342" +
        "\v>\x07>\u0344\n>\f>\x0E>\u0347\v>\x03>\x03>\x03>\x05>\u034C\n>\x03>\x05" +
        ">\u034F\n>\x03?\x03?\x06?\u0353\n?\r?\x0E?\u0354\x03?\x03?\x03@\x03@\x03" +
        "@\x06@\u035C\n@\r@\x0E@\u035D\x03@\x03@\x03@\x03@\x03@\x05@\u0365\n@\x03" +
        "A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u036F\nA\x03B\x03B\x03B\x03" +
        "B\x03B\x03B\x03B\x03B\x03B\x05B\u037A\nB\x03C\x03C\x03C\x03C\x03D\x03" +
        "D\x03D\x03D\x03E\x03E\x07E\u0386\nE\fE\x0EE\u0389\vE\x03E\x07E\u038C\n" +
        "E\fE\x0EE\u038F\vE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u0398\nF\f" +
        "F\x0EF\u039B\vF\x03F\x03F\x03F\x03F\x07F\u03A1\nF\fF\x0EF\u03A4\vF\x03" +
        "F\x05F\u03A7\nF\x03G\x03G\x03G\x03G\x06G\u03AD\nG\rG\x0EG\u03AE\x03G\x03" +
        "G\x03G\x03G\x03G\x07G\u03B6\nG\fG\x0EG\u03B9\vG\x03G\x05G\u03BC\nG\x03" +
        "H\x03H\x05H\u03C0\nH\x03H\x03H\x03I\x03I\x03J\x03J\x06J\u03C8\nJ\rJ\x0E" +
        "J\u03C9\x03J\x05J\u03CD\nJ\x03J\x03J\x06J\u03D1\nJ\rJ\x0EJ\u03D2\x03J" +
        "\x05J\u03D6\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u03DE\nJ\fJ\x0EJ\u03E1" +
        "\vJ\x03J\x03J\x07J\u03E5\nJ\fJ\x0EJ\u03E8\vJ\x03J\x03J\x07J\u03EC\nJ\f" +
        "J\x0EJ\u03EF\vJ\x03J\x03J\x03J\x05J\u03F4\nJ\x03K\x03K\x03L\x03L\x06L" +
        "\u03FA\nL\rL\x0EL\u03FB\x03L\x05L\u03FF\nL\x03M\x03M\x03N\x03N\x03O\x03" +
        "O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
        "O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x06O\u041C\nO\rO\x0EO\u041D\x03P" +
        "\x03P\x03P\x06\u0228\u023B\u0285\u03A2\x02\x02Q\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
        "\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
        "4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
        "P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
        "l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84" +
        "\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96" +
        "\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\x02\x15\x07\x02RSUVdktuwx\x04\x02" +
        "QQff\x04\x02RRgg\x04\x02SShh\x04\x02TTii\x04\x02UUjj\x04\x02VVkk\x04\x02" +
        "]]oo\x04\x02__pp\x04\x02``qq\x04\x02aarr\x04\x02bbss\x03\x0245\x04\x02" +
        "BBEG\x03\x02\x1A\x1A\x04\x02\x1B\x1B\x1D\x1D\x03\x02()\x03\x02  \x03\x02" +
        "!!\x02\u04AF\x02\xAD\x03\x02\x02\x02\x04\xB9\x03\x02\x02\x02\x06\xBB\x03" +
        "\x02\x02\x02\b\xBD\x03\x02\x02\x02\n\xF2\x03\x02\x02\x02\f\xF7\x03\x02" +
        "\x02\x02\x0E\u0112\x03\x02\x02\x02\x10\u0114\x03\x02\x02\x02\x12\u011F" +
        "\x03\x02\x02\x02\x14\u012E\x03\x02\x02\x02\x16\u0139\x03\x02\x02\x02\x18" +
        "\u0144\x03\x02\x02\x02\x1A\u014E\x03\x02\x02\x02\x1C\u0150\x03\x02\x02" +
        "\x02\x1E\u0156\x03\x02\x02\x02 \u015D\x03\x02\x02\x02\"\u0167\x03\x02" +
        "\x02\x02$\u0172\x03\x02\x02\x02&\u0182\x03\x02\x02\x02(\u0184\x03\x02" +
        "\x02\x02*\u0189\x03\x02\x02\x02,\u018B\x03\x02\x02\x02.\u018D\x03\x02" +
        "\x02\x020\u018F\x03\x02\x02\x022\u0191\x03\x02\x02\x024\u0193\x03\x02" +
        "\x02\x026\u0195\x03\x02\x02\x028\u0197\x03\x02\x02\x02:\u0199\x03\x02" +
        "\x02\x02<\u01A5\x03\x02\x02\x02>\u01A7\x03\x02\x02\x02@\u01AF\x03\x02" +
        "\x02\x02B\u01B1\x03\x02\x02\x02D\u01BB\x03\x02\x02\x02F\u01C5\x03\x02" +
        "\x02\x02H\u01D2\x03\x02\x02\x02J\u01D9\x03\x02\x02\x02L\u01E4\x03\x02" +
        "\x02\x02N\u01EB\x03\x02\x02\x02P\u01F5\x03\x02\x02\x02R\u0200\x03\x02" +
        "\x02\x02T\u0219\x03\x02\x02\x02V\u022C\x03\x02\x02\x02X\u023F\x03\x02" +
        "\x02\x02Z\u0241\x03\x02\x02\x02\\\u0248\x03\x02\x02\x02^\u025C\x03\x02" +
        "\x02\x02`\u0268\x03\x02\x02\x02b\u0289\x03\x02\x02\x02d\u028B\x03\x02" +
        "\x02\x02f\u028F\x03\x02\x02\x02h\u02AF\x03\x02\x02\x02j\u02B1\x03\x02" +
        "\x02\x02l\u02C6\x03\x02\x02\x02n\u02CF\x03\x02\x02\x02p\u02F8\x03\x02" +
        "\x02\x02r\u0310\x03\x02\x02\x02t\u0312\x03\x02\x02\x02v\u0316\x03\x02" +
        "\x02\x02x\u0322\x03\x02\x02\x02z\u034E\x03\x02\x02\x02|\u0350\x03\x02" +
        "\x02\x02~\u0364\x03\x02\x02\x02\x80\u036E\x03\x02\x02\x02\x82\u0379\x03" +
        "\x02\x02\x02\x84\u037B\x03\x02\x02\x02\x86\u037F\x03\x02\x02\x02\x88\u0383" +
        "\x03\x02\x02\x02\x8A\u03A6\x03\x02\x02\x02\x8C\u03BB\x03\x02\x02\x02\x8E" +
        "\u03BD\x03\x02\x02\x02\x90\u03C3\x03\x02\x02\x02\x92\u03F3\x03\x02\x02" +
        "\x02\x94\u03F5\x03\x02\x02\x02\x96\u03F7\x03\x02\x02\x02\x98\u0400\x03" +
        "\x02\x02\x02\x9A\u0402\x03\x02\x02\x02\x9C\u041B\x03\x02\x02\x02\x9E\u041F" +
        "\x03\x02\x02\x02\xA0\xAA\x05\x04\x03\x02\xA1\xA3\x07\x04\x02\x02\xA2\xA1" +
        "\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5" +
        "\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xA9" +
        "\x07/\x02\x02\xA8\xA4\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8" +
        "\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA" +
        "\x03\x02\x02\x02\xAD\xA0\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xAD" +
        "\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB4\x03\x02\x02\x02\xB1\xB3" +
        "\x07/\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2" +
        "\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4" +
        "\x03\x02\x02\x02\xB7\xB8\x07\x02\x02\x03\xB8\x03\x03\x02\x02\x02\xB9\xBA" +
        "\x05\x06\x04\x02\xBA\x05\x03\x02\x02\x02\xBB\xBC\x05\b\x05\x02\xBC\x07" +
        "\x03\x02\x02\x02\xBD\xBE\x07\x05\x02\x02\xBE\xBF\x05 \x11\x02\xBF\xC9" +
        "\x07\x1A\x02\x02\xC0\xC2\x07/\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC5" +
        "\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6" +
        "\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC8\x05\x0E\b\x02\xC7\xC3" +
        "\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA" +
        "\x03\x02\x02\x02\xCA\xCF\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCE" +
        "\x07/\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD" +
        "\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF" +
        "\x03\x02\x02\x02\xD2\xD8\x07\'\x02\x02\xD3\xD4\x05\n\x06\x02\xD4\xD5\x05" +
        "\f\x07\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD3\x03\x02\x02\x02\xD7\xDA\x03" +
        "\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
        "\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC\x05\n\x06\x02\xDC\xEA\x07" +
        "\'\x02\x02\xDD\xE7\x05\x1A\x0E\x02\xDE\xE0\x07/\x02\x02\xDF\xDE\x03\x02" +
        "\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02" +
        "\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE6\x05\x1A" +
        "\x0E\x02\xE5\xE1\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02" +
        "\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02" +
        "\x02\x02\xEA\xDD\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\t\x03\x02" +
        "\x02\x02\xEC\xEE\x05\x0E\b\x02\xED\xEF\x07/\x02\x02\xEE\xED\x03\x02\x02" +
        "\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEC\x03\x02\x02" +
        "\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02" +
        "\x02\xF3\xF5\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF6\x05\x92J" +
        "\x02\xF6\v\x03\x02\x02\x02\xF7\xF8\x07&\x02\x02\xF8\r\x03\x02\x02\x02" +
        "\xF9\u0113\x07\x89\x02\x02\xFA\u0113\x05\x94K\x02\xFB\u0113\x05\x10\t" +
        "\x02\xFC\u0113\x05\x88E\x02\xFD\u0113\x05r:\x02\xFE\u0113\x05\x8CG\x02" +
        "\xFF\u0113\x05h5\x02\u0100\u0113\x05~@\x02\u0101\u0113\x05z>\x02\u0102" +
        "\u0113\x05|?\x02\u0103\u0113\x05\x92J\x02\u0104\u0113\x05n8\x02\u0105" +
        "\u0113\x05\x80A\x02\u0106\u0113\x05P)\x02\u0107\u0113\x05Z.\x02\u0108" +
        "\u0113\x05L\'\x02\u0109\u0113\x05@!\x02\u010A\u0113\x05B\"\x02\u010B\u0113" +
        "\x05F$\x02\u010C\u0113\x05D#\x02\u010D\u0113\x05H%\x02\u010E\u0113\x05" +
        "l7\x02\u010F\u0113\x05\x8EH\x02\u0110\u0113\x05p9\x02\u0111\u0113\x05" +
        "\x9EP\x02\u0112\xF9\x03\x02\x02\x02\u0112\xFA\x03\x02\x02\x02\u0112\xFB" +
        "\x03\x02\x02\x02\u0112\xFC\x03\x02\x02\x02\u0112\xFD\x03\x02\x02\x02\u0112" +
        "\xFE\x03\x02\x02\x02\u0112\xFF\x03\x02\x02\x02\u0112\u0100\x03\x02\x02" +
        "\x02\u0112\u0101\x03\x02\x02\x02\u0112\u0102\x03\x02\x02\x02\u0112\u0103" +
        "\x03\x02\x02\x02\u0112\u0104\x03\x02\x02\x02\u0112\u0105\x03\x02\x02\x02" +
        "\u0112\u0106\x03\x02\x02\x02\u0112\u0107\x03\x02\x02\x02\u0112\u0108\x03" +
        "\x02\x02\x02\u0112\u0109\x03\x02\x02\x02\u0112\u010A\x03\x02\x02\x02\u0112" +
        "\u010B\x03\x02\x02\x02\u0112\u010C\x03\x02\x02\x02\u0112\u010D\x03\x02" +
        "\x02\x02\u0112\u010E\x03\x02\x02\x02\u0112\u010F\x03\x02\x02\x02\u0112" +
        "\u0110\x03\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\x0F\x03\x02\x02" +
        "\x02\u0114\u011C\x05\x12\n\x02\u0115\u011B\x05\x12\n\x02\u0116\u011B\x05" +
        "z>\x02\u0117\u011B\x05|?\x02\u0118\u011B\x05h5\x02\u0119\u011B\x05n8\x02" +
        "\u011A\u0115\x03\x02\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03" +
        "\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B" +
        "\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02" +
        "\x02\x02\u011D\x11\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0123" +
        "\x07\x10\x02\x02\u0120\u0124\x07-\x02\x02\u0121\u0124\x07.\x02\x02\u0122" +
        "\u0124\x03\x02\x02\x02\u0123\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02" +
        "\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0128\x03\x02\x02\x02\u0125" +
        "\u0127\x05\x92J\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02" +
        "\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B" +
        "\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012C\x05\x98M\x02" +
        "\u012C\x13\x03\x02\x02\x02\u012D\u012F\x05h5\x02\u012E\u012D\x03\x02\x02" +
        "\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132" +
        "\x07\x14\x02\x02\u0131\u0133\x05\x92J\x02\u0132\u0131\x03\x02\x02\x02" +
        "\u0133\u0134\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03" +
        "\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x07\x1A\x02\x02\u0137" +
        "\x15\x03\x02\x02\x02\u0138\u013A\x05h5\x02\u0139\u0138\x03\x02\x02\x02" +
        "\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x07" +
        "\x15\x02\x02\u013C\u013E\x05\x92J\x02\u013D\u013C\x03\x02\x02\x02\u013E" +
        "\u013F\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02" +
        "\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x07\x1A\x02\x02\u0142" +
        "\x17\x03\x02\x02\x02\u0143\u0145\x05h5\x02\u0144\u0143\x03\x02\x02\x02" +
        "\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0148\x07" +
        "\x17\x02\x02\u0147\u0149\x05\x92J\x02\u0148\u0147\x03\x02\x02\x02\u0149" +
        "\u014A\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02" +
        "\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x07\x1A\x02\x02\u014D" +
        "\x19\x03\x02\x02\x02\u014E\u014F\x05\x0E\b\x02\u014F\x1B\x03\x02\x02\x02" +
        "\u0150\u0151\x07\v\x02\x02\u0151\u0152\x05\x92J\x02\u0152\u0154\x07\x1A" +
        "\x02\x02\u0153\u0155\x05\x1E\x10\x02\u0154\u0153\x03\x02\x02\x02\u0154" +
        "\u0155\x03\x02\x02\x02\u0155\x1D\x03\x02\x02\x02\u0156\u0157\x07@\x02" +
        "\x02\u0157\u0158\x07-\x02\x02\u0158\u0159\x07\x1A\x02\x02\u0159\x1F\x03" +
        "\x02\x02\x02\u015A\u015C\x05\"\x12\x02\u015B\u015A\x03\x02\x02\x02\u015C" +
        "\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02" +
        "\x02\x02\u015E\u0164\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160" +
        "\u0163\x07v\x02\x02\u0161\u0163\x05$\x13\x02\u0162\u0160\x03\x02\x02\x02" +
        "\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03" +
        "\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165!\x03\x02\x02\x02\u0166" +
        "\u0164\x03\x02\x02\x02\u0167\u0168\t\x02\x02\x02\u0168#\x03\x02\x02\x02" +
        "\u0169\u0173\x05&\x14\x02\u016A\u0173\x05^0\x02\u016B\u0173\x05(\x15\x02" +
        "\u016C\u0173\x05*\x16\x02\u016D\u0173\x05,\x17\x02\u016E\u0173\x05.\x18" +
        "\x02\u016F\u0173\x050\x19\x02\u0170\u0173\x052\x1A\x02\u0171\u0173\x07" +
        "W\x02\x02\u0172\u0169\x03\x02\x02\x02\u0172\u016A\x03\x02\x02\x02\u0172" +
        "\u016B\x03\x02\x02\x02\u0172\u016C\x03\x02\x02\x02\u0172\u016D\x03\x02" +
        "\x02\x02\u0172\u016E\x03\x02\x02\x02\u0172\u016F\x03\x02\x02\x02\u0172" +
        "\u0170\x03\x02\x02\x02\u0172\u0171\x03\x02\x02\x02\u0173%\x03\x02\x02" +
        "\x02\u0174\u0177\x07N\x02\x02\u0175\u0178\x07\x07\x02\x02\u0176\u0178" +
        "\x07\x86\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0176\x03\x02\x02\x02" +
        "\u0177\u0178\x03\x02\x02\x02\u0178\u0183\x03\x02\x02\x02\u0179\u017B\x07" +
        "e\x02\x02\u017A\u017C\x07\x07\x02\x02\u017B\u017A\x03\x02\x02\x02\u017B" +
        "\u017C\x03\x02\x02\x02\u017C\u0183\x03\x02\x02\x02\u017D\u017F\x07O\x02" +
        "\x02\u017E\u0180\x07\x07\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180" +
        "\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u0183\x07P\x02\x02" +
        "\u0182\u0174\x03\x02\x02\x02\u0182\u0179\x03\x02\x02\x02\u0182\u017D\x03" +
        "\x02\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183\'\x03\x02\x02\x02\u0184" +
        "\u0187\t\x03\x02\x02\u0185\u0186\x07\x1B\x02\x02\u0186\u0188\x07\t\x02" +
        "\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188)\x03" +
        "\x02\x02\x02\u0189\u018A\t\x04\x02\x02\u018A+\x03\x02\x02\x02\u018B\u018C" +
        "\t\x05\x02\x02\u018C-\x03\x02\x02\x02\u018D\u018E\t\x06\x02\x02\u018E" +
        "/\x03\x02\x02\x02\u018F\u0190\t\x07\x02\x02\u01901\x03\x02\x02\x02\u0191" +
        "\u0192\t\b\x02\x02\u01923\x03\x02\x02\x02\u0193\u0194\t\t\x02\x02\u0194" +
        "5\x03\x02\x02\x02\u0195\u0196\t\n\x02\x02\u01967\x03\x02\x02\x02\u0197" +
        "\u0198\t\v\x02\x02\u01989\x03\x02\x02\x02\u0199\u019A\t\f\x02\x02\u019A" +
        ";\x03\x02\x02\x02\u019B\u019E\x07\\";
    sequenceParser._serializedATNSegment1 = "\x02\x02\u019C\u019D\x07\x1B\x02\x02\u019D\u019F\x07\t\x02\x02\u019E\u019C" +
        "\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A6\x03\x02\x02\x02" +
        "\u01A0\u01A3\x07n\x02\x02\u01A1\u01A2\x07\x1B\x02\x02\u01A2\u01A4\x07" +
        "\t\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
        "\u01A6\x03\x02\x02\x02\u01A5\u019B\x03\x02\x02\x02\u01A5\u01A0\x03\x02" +
        "\x02\x02\u01A6=\x03\x02\x02\x02\u01A7\u01A8\t\r\x02\x02\u01A8?\x03\x02" +
        "\x02\x02\u01A9\u01AA\x054\x1B\x02\u01AA\u01AB\x07\x1B\x02\x02\u01AB\u01AC" +
        "\x05f4\x02\u01AC\u01AD\x07\x1A\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE" +
        "\u01B0\x07+\x02\x02\u01AF\u01A9\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02" +
        "\x02\u01B0A\x03\x02\x02\x02\u01B1\u01B2\x056\x1C\x02\u01B2\u01B3\x07\x1B" +
        "\x02\x02\u01B3\u01B4\x05f4\x02\u01B4\u01B9\x07\x1A\x02\x02\u01B5\u01B6" +
        "\x07B\x02\x02\u01B6\u01B7\x05\x9CO\x02\u01B7\u01B8\x07\x1A\x02\x02\u01B8" +
        "\u01BA\x03\x02\x02\x02\u01B9\u01B5\x03\x02\x02\x02\u01B9\u01BA\x03\x02" +
        "\x02\x02\u01BAC\x03\x02\x02\x02\u01BB\u01BC\x05:\x1E\x02\u01BC\u01BD\x07" +
        "\x1B\x02\x02\u01BD\u01BE\x05f4\x02\u01BE\u01C3\x07\x1A\x02\x02\u01BF\u01C0" +
        "\x07B\x02\x02\u01C0\u01C1\x05\x9CO\x02\u01C1\u01C2\x07\x1A\x02\x02\u01C2" +
        "\u01C4\x03\x02\x02\x02\u01C3\u01BF\x03\x02\x02\x02\u01C3\u01C4\x03\x02" +
        "\x02\x02\u01C4E\x03\x02\x02\x02\u01C5\u01C6\x058\x1D\x02\u01C6\u01C9\x07" +
        "\x1B\x02\x02\u01C7\u01CA\x05f4\x02\u01C8\u01CA\x05d3\x02\u01C9\u01C7\x03" +
        "\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
        "\u01D0\x07\x1A\x02\x02\u01CC\u01CD\x07B\x02\x02\u01CD\u01CE\x05\x9CO\x02" +
        "\u01CE\u01CF\x07\x1A\x02\x02\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01CC\x03" +
        "\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1G\x03\x02\x02\x02\u01D2" +
        "\u01D6\x05J&\x02\u01D3\u01D5\x05b2\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5" +
        "\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02" +
        "\x02\x02\u01D7I\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DA" +
        "\x05> \x02\u01DA\u01DE\x07\x1B\x02\x02\u01DB\u01DD\x07\x04\x02\x02\u01DC" +
        "\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02" +
        "\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x03\x02\x02\x02\u01E0" +
        "\u01DE\x03\x02\x02\x02\u01E1\u01E2\x05f4\x02\u01E2\u01E3\x07\x1A\x02\x02" +
        "\u01E3K\x03\x02\x02\x02\u01E4\u01E8\x05N(\x02\u01E5\u01E7\x05b2\x02\u01E6" +
        "\u01E5\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02" +
        "\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9M\x03\x02\x02\x02\u01EA\u01E8" +
        "\x03\x02\x02\x02\u01EB\u01EC\x05<\x1F\x02\u01EC\u01ED\x07\x1B\x02\x02" +
        "\u01ED\u01EE\x05f4\x02\u01EE\u01F3\x07\x1A\x02\x02\u01EF\u01F0\x07B\x02" +
        "\x02\u01F0\u01F1\x05\x9CO\x02\u01F1\u01F2\x07\x1A\x02\x02\u01F2\u01F4" +
        "\x03\x02\x02\x02\u01F3\u01EF\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02" +
        "\u01F4O\x03\x02\x02\x02\u01F5\u01F9\x05R*\x02\u01F6\u01F8\x05V,\x02\u01F7" +
        "\u01F6\x03\x02\x02\x02\u01F8\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02" +
        "\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FE\x03\x02\x02\x02\u01FB" +
        "\u01F9\x03\x02\x02\x02\u01FC\u01FD\x07/\x02\x02\u01FD\u01FF\x07D\x02\x02" +
        "\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FFQ\x03\x02" +
        "\x02\x02\u0200\u0201\x05T+\x02\u0201\u0205\x07\x1B\x02\x02\u0202\u0204" +
        "\x07\x04\x02\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02" +
        "\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x03" +
        "\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u0209\x05f4\x02\u0209\u020A" +
        "\x07\x1A\x02\x02\u020AS\x03\x02\x02\x02\u020B\u020E\x07Y\x02\x02\u020C" +
        "\u020F\x07\x07\x02\x02\u020D\u020F\x07\x86\x02\x02\u020E\u020C\x03\x02" +
        "\x02\x02\u020E\u020D\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
        "\u021A\x03\x02\x02\x02\u0210\u0212\x07m\x02\x02\u0211\u0213\x07\x07\x02" +
        "\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u021A" +
        "\x03\x02\x02\x02\u0214\u0216\x07Z\x02\x02\u0215\u0217\x07\x07\x02\x02" +
        "\u0216\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021A\x03" +
        "\x02\x02\x02\u0218\u021A\x07[\x02\x02\u0219\u020B\x03\x02\x02\x02\u0219" +
        "\u0210\x03\x02\x02\x02\u0219\u0214\x03\x02\x02\x02\u0219\u0218\x03\x02" +
        "\x02\x02\u021AU\x03\x02\x02\x02\u021B\u021C\x07A\x02\x02\u021C\u021D\x07" +
        "\x1B\x02\x02\u021D\u021E\x05f4\x02\u021E\u021F\x07\x1A\x02\x02\u021F\u022D" +
        "\x03\x02\x02\x02\u0220\u0221\t\x0E\x02\x02\u0221\u0222\x07\x1B\x02\x02" +
        "\u0222\u0223\x07-\x02\x02\u0223\u022D\x07\x1A\x02\x02\u0224\u0228\t\x0F" +
        "\x02\x02\u0225\u0227\v\x02\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227\u022A" +
        "\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02" +
        "\u0229\u022B\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022D\x07" +
        "\x1A\x02\x02\u022C\u021B\x03\x02\x02\x02\u022C\u0220\x03\x02\x02\x02\u022C" +
        "\u0224\x03\x02\x02\x02\u022DW\x03\x02\x02\x02\u022E\u022F\x07A\x02\x02" +
        "\u022F\u0230\x07\x1B\x02\x02\u0230\u0231\x05f4\x02\u0231\u0232\x07\x1A" +
        "\x02\x02\u0232\u0240\x03\x02\x02\x02\u0233\u0234\t\x0E\x02\x02\u0234\u0235" +
        "\x07\x1B\x02\x02\u0235\u0236\x07-\x02\x02\u0236\u0240\x07\x1A\x02\x02" +
        "\u0237\u023B\t\x0F\x02\x02\u0238\u023A\v\x02\x02\x02\u0239\u0238\x03\x02" +
        "\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023B" +
        "\u0239\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02\u023D\u023B\x03\x02" +
        "\x02\x02\u023E\u0240\x07\x1A\x02\x02\u023F\u022E\x03\x02\x02\x02\u023F" +
        "\u0233\x03\x02\x02\x02\u023F\u0237\x03\x02\x02\x02\u0240Y\x03\x02\x02" +
        "\x02\u0241\u0245\x05\\/\x02\u0242\u0244\x05b2\x02\u0243\u0242\x03\x02" +
        "\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245" +
        "\u0246\x03\x02\x02\x02\u0246[\x03\x02\x02\x02\u0247\u0245\x03\x02\x02" +
        "\x02\u0248\u0249\x05`1\x02\u0249\u024A\x07\x1B\x02\x02\u024A\u024B\x05" +
        "f4\x02\u024B\u0250\x07\x1A\x02\x02\u024C\u024D\x07B\x02\x02\u024D\u024E" +
        "\x05\x9CO\x02\u024E\u024F\x07\x1A\x02\x02\u024F\u0251\x03\x02\x02\x02" +
        "\u0250\u024C\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251]\x03\x02" +
        "\x02\x02\u0252\u0255\x07M\x02\x02\u0253\u0254\x07\x1B\x02\x02\u0254\u0256" +
        "\x07\b\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02" +
        "\u0256\u025D\x03\x02\x02\x02\u0257\u025A\x07d\x02\x02\u0258\u0259\x07" +
        "\x1B\x02\x02\u0259\u025B\x07\b\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A" +
        "\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u0252\x03\x02" +
        "\x02\x02\u025C\u0257\x03\x02\x02\x02\u025D_\x03\x02\x02\x02\u025E\u0261" +
        "\x07X\x02\x02\u025F\u0260\x07\x1B\x02\x02\u0260\u0262\x07\b\x02\x02\u0261" +
        "\u025F\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0269\x03\x02" +
        "\x02\x02\u0263\u0266\x07l\x02\x02\u0264\u0265\x07\x1B\x02\x02\u0265\u0267" +
        "\x07\b\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02" +
        "\u0267\u0269\x03\x02\x02\x02\u0268\u025E\x03\x02\x02\x02\u0268\u0263\x03" +
        "\x02\x02\x02\u0269a\x03\x02\x02\x02\u026A\u026B\x07\x13\x02\x02\u026B" +
        "\u026E\x05\x92J\x02\u026C\u026E\x07A\x02\x02\u026D\u026A\x03\x02\x02\x02" +
        "\u026D\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0273\x07" +
        "\x1B\x02\x02\u0270\u0272\x07\x04\x02\x02\u0271\u0270\x03\x02\x02\x02\u0272" +
        "\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02" +
        "\x02\x02\u0274\u0278\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276" +
        "\u0279\x05\x92J\x02\u0277\u0279\x07/\x02\x02\u0278\u0276\x03\x02\x02\x02" +
        "\u0278\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u0278\x03" +
        "\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C" +
        "\u028A\x07\x1A\x02\x02\u027D\u027E\t\x0E\x02\x02\u027E\u027F\x07\x1B\x02" +
        "\x02\u027F\u0280\x07-\x02\x02\u0280\u028A\x07\x1A\x02\x02\u0281\u0285" +
        "\t\x0F\x02\x02\u0282\u0284\v\x02\x02\x02\u0283\u0282\x03\x02\x02\x02\u0284" +
        "\u0287\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0285\u0283\x03\x02" +
        "\x02\x02\u0286\u0288\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288" +
        "\u028A\x07\x1A\x02\x02\u0289\u026D\x03\x02\x02\x02\u0289\u027D\x03\x02" +
        "\x02\x02\u0289\u0281\x03\x02\x02\x02\u028Ac\x03\x02\x02\x02\u028B\u028C" +
        "\x07\x85\x02\x02\u028C\u028D\x07\x1E\x02\x02\u028D\u028E\x07-\x02\x02" +
        "\u028Ee\x03\x02\x02\x02\u028F\u0290\x07\x88\x02\x02\u0290g\x03\x02\x02" +
        "\x02\u0291\u0292\x07\x18\x02\x02\u0292\u029A\x07\x1A\x02\x02\u0293\u0295" +
        "\x07\x04\x02\x02\u0294\u0293\x03\x02\x02\x02\u0295\u0298\x03\x02\x02\x02" +
        "\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0299\x03" +
        "\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029B\x05j6\x02\u029A\u0296" +
        "\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u02B0\x03\x02\x02\x02" +
        "\u029C\u029D\x07\x18\x02\x02\u029D\u02A2\x05\x92J\x02\u029E\u02A1\x07" +
        "\x1B\x02\x02\u029F\u02A1\x05\x9CO\x02\u02A0\u029E\x03\x02\x02\x02\u02A0" +
        "\u029F\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02" +
        "\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4" +
        "\u02A2\x03\x02\x02\x02\u02A5\u02AD\x07\x1A\x02\x02\u02A6\u02A8\x07\x04" +
        "\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9" +
        "\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AC\x03\x02" +
        "\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC\u02AE\x05j6\x02\u02AD\u02A9" +
        "\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02B0\x03\x02\x02\x02" +
        "\u02AF\u0291\x03\x02\x02\x02\u02AF\u029C\x03\x02\x02\x02\u02B0i\x03\x02" +
        "\x02\x02\u02B1\u02B2\x07\x18\x02\x02\u02B2\u02B7\x05\x92J\x02\u02B3\u02B6" +
        "\x07\x1B\x02\x02\u02B4\u02B6\x05\x9CO\x02\u02B5\u02B3\x03\x02\x02\x02" +
        "\u02B5\u02B4\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5\x03" +
        "\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9" +
        "\u02B7\x03\x02\x02\x02\u02BA\u02BB\x07\x1A\x02\x02\u02BBk\x03\x02\x02" +
        "\x02\u02BC\u02BE\x07\r\x02\x02\u02BD\u02BF\x05\x92J\x02\u02BE\u02BD\x03" +
        "\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
        "\u02C7\x07\x1A\x02\x02\u02C1\u02C3\x07\x0E\x02\x02\u02C2\u02C4\x05\x92" +
        "J\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C5" +
        "\x03\x02\x02\x02\u02C5\u02C7\x07\x1A\x02\x02\u02C6\u02BC\x03\x02\x02\x02" +
        "\u02C6\u02C1\x03\x02\x02\x02\u02C7m\x03\x02\x02\x02\u02C8\u02D0\x07;\x02" +
        "\x02\u02C9\u02D0\x079\x02\x02\u02CA\u02CC\x07:\x02\x02\u02CB\u02CD\x07" +
        "0\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD" +
        "\u02CE\x03\x02\x02\x02\u02CE\u02D0\x07\x02\x02\x03\u02CF\u02C8\x03\x02" +
        "\x02\x02\u02CF\u02C9\x03\x02\x02\x02\u02CF\u02CA\x03\x02\x02\x02\u02D0" +
        "o\x03\x02\x02\x02\u02D1\u02D3\x07c\x02\x02\u02D2\u02D4\x05\x92J\x02\u02D3" +
        "\u02D2\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02EA\x03\x02" +
        "\x02\x02\u02D5\u02DF\x05\x92J\x02\u02D6\u02DA\x07/\x02\x02\u02D7\u02D9" +
        "\x07\x04\x02\x02\u02D8\u02D7\x03\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02" +
        "\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DE\x03" +
        "\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02D6\x03\x02\x02\x02\u02DE" +
        "\u02E1\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02E0\x03\x02" +
        "\x02\x02\u02E0\u02E5\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E2" +
        "\u02E4\x07/\x02\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02" +
        "\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E9" +
        "\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02D5\x03\x02\x02\x02" +
        "\u02E9\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03" +
        "\x02\x02\x02\u02EB\u02ED\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED" +
        "\u02F9\x07\x1A\x02\x02\u02EE\u02F4\x07c\x02\x02\u02EF\u02F3\x05\x92J\x02" +
        "\u02F0\u02F3\x07/\x02\x02\u02F1\u02F3\x07\x04\x02\x02\u02F2\u02EF\x03" +
        "\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F3" +
        "\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02" +
        "\x02\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7" +
        "\u02F9\x07\x02\x02\x03\u02F8\u02D1\x03\x02\x02\x02\u02F8\u02EE\x03\x02" +
        "\x02\x02\u02F9q\x03\x02\x02\x02\u02FA\u02FF\x073\x02\x02\u02FB\u0300\x05" +
        "\x92J\x02\u02FC\u0300\x07\x1B\x02\x02\u02FD\u0300\x07\x88\x02\x02\u02FE" +
        "\u0300\x07/\x02\x02\u02FF\u02FB\x03\x02\x02\x02\u02FF\u02FC\x03\x02\x02" +
        "\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u02FE\x03\x02\x02\x02\u0300\u0301" +
        "\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02" +
        "\u0302\u0303\x03\x02\x02\x02\u0303\u0311\x07\x1A\x02\x02\u0304\u030C\x07" +
        "3\x02\x02\u0305\u030B\x05\x92J\x02\u0306\u030B\x07\x1B\x02\x02\u0307\u030B" +
        "\x07\x88\x02\x02\u0308\u030B\x07/\x02\x02\u0309\u030B\x07\x04\x02\x02" +
        "\u030A\u0305\x03\x02\x02\x02\u030A\u0306\x03\x02\x02\x02\u030A\u0307\x03" +
        "\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B" +
        "\u030E\x03\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02" +
        "\x02\x02\u030D\u030F\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F" +
        "\u0311\x07\x02\x02\x03\u0310\u02FA\x03\x02\x02\x02\u0310\u0304\x03\x02" +
        "\x02\x02\u0311s\x03\x02\x02\x02\u0312\u0313\x072\x02\x02\u0313\u0314\x05" +
        "\x92J\x02\u0314\u0315\x07\x1A\x02\x02\u0315u\x03\x02\x02\x02\u0316\u031A" +
        "\x07J\x02\x02\u0317\u031B\x05\x92J\x02\u0318\u031B\x07\x1B\x02\x02\u0319" +
        "\u031B\x07/\x02\x02\u031A\u0317\x03\x02\x02\x02\u031A\u0318\x03\x02\x02" +
        "\x02\u031A\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031A" +
        "\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02" +
        "\u031E\u0320\x07\x1A\x02\x02\u031F\u0321\x05x=\x02\u0320\u031F\x03\x02" +
        "\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321w\x03\x02\x02\x02\u0322\u0326" +
        "\x07J\x02\x02\u0323\u0327\x05\x92J\x02\u0324\u0327\x07\x1B\x02\x02\u0325" +
        "\u0327\x07/\x02\x02\u0326\u0323\x03\x02\x02\x02\u0326\u0324\x03\x02\x02" +
        "\x02\u0326\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u0326" +
        "\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02" +
        "\u032A\u032B\x07\x1A\x02\x02\u032By\x03\x02\x02\x02\u032C\u032E\x07\x11" +
        "\x02\x02\u032D\u032F\x05\x92J\x02\u032E\u032D\x03\x02\x02\x02\u032E\u032F" +
        "\x03\x02\x02\x02\u032F\u0345\x03\x02\x02\x02\u0330\u033A\x05\x92J\x02" +
        "\u0331\u0335\x07/\x02\x02\u0332\u0334\x07\x04\x02\x02\u0333\u0332\x03" +
        "\x02\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335" +
        "\u0336\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0335\x03\x02" +
        "\x02\x02\u0338\u0331\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A" +
        "\u0338\x03\x02\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u0340\x03\x02" +
        "\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D\u033F\x07/\x02\x02\u033E\u033D" +
        "\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02" +
        "\u0340\u0341\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340\x03" +
        "\x02\x02\x02\u0343\u0330\x03\x02\x02\x02\u0344\u0347\x03\x02\x02\x02\u0345" +
        "\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0348\x03\x02" +
        "\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348\u034F\x07\x1A\x02\x02\u0349" +
        "\u034B\x07\x11\x02\x02\u034A\u034C\x05\x92J\x02\u034B\u034A\x03\x02\x02" +
        "\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F" +
        "\x07\x02\x02\x03\u034E\u032C\x03\x02\x02\x02\u034E\u0349\x03\x02\x02\x02" +
        "\u034F{\x03\x02\x02\x02\u0350\u0352\x07\x12\x02\x02\u0351\u0353\n\x10" +
        "\x02\x02\u0352\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354" +
        "\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02" +
        "\x02\x02\u0356\u0357\x07\x1A\x02\x02\u0357}\x03\x02\x02\x02\u0358\u035B" +
        "\x07\x19\x02\x02\u0359\u035C\x05\x92J\x02\u035A\u035C\x07/\x02\x02\u035B" +
        "\u0359\x03\x02\x02\x02\u035B\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02" +
        "\x02\x02\u035D\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E" +
        "\u035F\x03\x02\x02\x02\u035F\u0365\x07\x1A\x02\x02\u0360\u0361\x07\x19" +
        "\x02\x02\u0361\u0362\x05\x92J\x02\u0362\u0363\x07\x02\x02\x03\u0363\u0365" +
        "\x03\x02\x02\x02\u0364\u0358\x03\x02\x02\x02\u0364\u0360\x03\x02\x02\x02" +
        "\u0365\x7F\x03\x02\x02\x02\u0366\u0367\x07>\x02\x02\u0367\u0368\x05\x92" +
        "J\x02\u0368\u0369\x07\x1A\x02\x02\u0369\u036F\x03\x02\x02\x02\u036A\u036B" +
        "\x07?\x02\x02\u036B\u036C\x05\x92J\x02\u036C\u036D\x07\x1A\x02\x02\u036D" +
        "\u036F\x03\x02\x02\x02\u036E\u0366\x03\x02\x02\x02\u036E\u036A\x03\x02" +
        "\x02\x02\u036F\x81\x03\x02\x02\x02\u0370\u0371\x076\x02\x02\u0371\u0372" +
        "\x07\x1B\x02\x02\u0372\u0373\x07-\x02\x02\u0373\u037A\x07\x1A\x02\x02" +
        "\u0374\u0375\x076\x02\x02\u0375\u0376\x07\x1B\x02\x02\u0376\u0377\x05" +
        "\x92J\x02\u0377\u0378\x07\x1A\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379" +
        "\u0370\x03\x02\x02\x02\u0379\u0374\x03\x02\x02\x02\u037A\x83\x03\x02\x02" +
        "\x02\u037B\u037C\x07H\x02\x02\u037C\u037D\x05\x92J\x02\u037D\u037E\x07" +
        "\x1A\x02\x02\u037E\x85\x03\x02\x02\x02\u037F\u0380\x07I\x02\x02\u0380" +
        "\u0381\x05\x92J\x02\u0381\u0382\x07\x1A\x02\x02\u0382\x87\x03\x02\x02" +
        "\x02\u0383\u038D\x05\x8AF\x02\u0384\u0386\x07/\x02\x02\u0385\u0384\x03" +
        "\x02\x02\x02\u0386\u0389\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0387" +
        "\u0388\x03\x02\x02\x02\u0388\u038A\x03\x02\x02\x02\u0389\u0387\x03\x02" +
        "\x02\x02\u038A\u038C\x05\x8AF\x02\u038B\u0387\x03\x02\x02\x02\u038C\u038F" +
        "\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02" +
        "\u038E\x89\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0391\x07" +
        "\x13\x02\x02\u0391\u0392\x05\x92J\x02\u0392\u0393\t\x11\x02\x02\u0393" +
        "\u0399\x05\x92J\x02\u0394\u0398\x07/\x02\x02\u0395\u0398\x07\x1B\x02\x02" +
        "\u0396\u0398\x05\x92J\x02\u0397\u0394\x03\x02\x02\x02\u0397\u0395\x03" +
        "\x02\x02\x02\u0397\u0396\x03\x02\x02\x02\u0398\u039B\x03\x02\x02\x02\u0399" +
        "\u0397\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039C\x03\x02" +
        "\x02\x02\u039B\u0399\x03\x02\x02\x02\u039C\u039D\x07\x1A\x02\x02\u039D" +
        "\u03A7\x03\x02\x02\x02\u039E\u03A2\x07G\x02\x02\u039F\u03A1\v\x02\x02" +
        "\x02\u03A0\u039F\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2\u03A3" +
        "\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A3\u03A5\x03\x02\x02\x02" +
        "\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A7\x07\x1A\x02\x02\u03A6\u0390\x03" +
        "\x02\x02\x02\u03A6\u039E\x03\x02\x02\x02\u03A7\x8B\x03\x02\x02\x02\u03A8" +
        "\u03AC\x07\n\x02\x02\u03A9\u03AD\x05\x92J\x02\u03AA\u03AD\x07\x1B\x02" +
        "\x02\u03AB\u03AD\x07/\x02\x02\u03AC\u03A9\x03\x02\x02\x02\u03AC\u03AA" +
        "\x03\x02\x02\x02\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02" +
        "\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B0\x03" +
        "\x02\x02\x02\u03B0\u03BC\x07\x1A\x02\x02\u03B1\u03B7\x07\n\x02\x02\u03B2" +
        "\u03B6\x05\x92J\x02\u03B3\u03B6\x07\x1B\x02\x02\u03B4\u03B6\x07/\x02\x02" +
        "\u03B5\u03B2\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B4\x03" +
        "\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7" +
        "\u03B8\x03\x02\x02\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03B7\x03\x02" +
        "\x02\x02\u03BA\u03BC\x07\x02\x02\x03\u03BB\u03A8\x03\x02\x02\x02\u03BB" +
        "\u03B1\x03\x02\x02\x02\u03BC\x8D\x03\x02\x02\x02\u03BD\u03BF\x07\x0F\x02" +
        "\x02\u03BE\u03C0\x05\x92J\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0" +
        "\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x07\x1A\x02\x02" +
        "\u03C2\x8F\x03\x02\x02\x02\u03C3\u03C4\x07\x1D\x02\x02\u03C4\x91\x03\x02" +
        "\x02\x02\u03C5\u03CC\x07.\x02\x02\u03C6\u03C8\x07\x04\x02\x02\u03C7\u03C6" +
        "\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02" +
        "\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CD\x07" +
        "-\x02\x02\u03CC\u03C7\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD" +
        "\u03F4\x03\x02\x02\x02\u03CE\u03D5\x05\x9CO\x02\u03CF\u03D1\x07\x04\x02" +
        "\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D0" +
        "\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02" +
        "\u03D4\u03D6\x07-\x02\x02\u03D5\u03D0\x03\x02\x02\x02\u03D5\u03D6\x03" +
        "\x02\x02\x02\u03D6\u03F4\x03\x02\x02\x02\u03D7\u03D8\x07\x16\x02\x02\u03D8" +
        "\u03D9\x05\x92J\x02\u03D9\u03DA\x07\x1A\x02\x02\u03DA\u03F4\x03\x02\x02" +
        "\x02\u03DB\u03F4\x07-\x02\x02\u03DC\u03DE\x07\x04\x02\x02\u03DD\u03DC" +
        "\x03\x02\x02\x02\u03DE\u03E1\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02" +
        "\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E2\x03\x02\x02\x02\u03E1\u03DF\x03" +
        "\x02\x02\x02\u03E2\u03E6\x07\x1B\x02\x02\u03E3\u03E5\x07\x04\x02\x02\u03E4" +
        "\u03E3\x03\x02\x02\x02\u03E5\u03E8\x03\x02\x02\x02\u03E6\u03E4\x03\x02" +
        "\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03F4\x03\x02\x02\x02\u03E8" +
        "\u03E6\x03\x02\x02\x02\u03E9\u03ED\x07\x1C\x02\x02\u03EA\u03EC\x07\x04" +
        "\x02\x02\u03EB\u03EA\x03\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED" +
        "\u03EB\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F4\x03\x02" +
        "\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03F4\x07%\x02\x02\u03F1\u03F4" +
        "\x07\x88\x02\x02\u03F2\u03F4\x05\x96L\x02\u03F3\u03C5\x03\x02\x02\x02" +
        "\u03F3\u03CE\x03\x02\x02\x02\u03F3\u03D7\x03\x02\x02\x02\u03F3\u03DB\x03" +
        "\x02\x02\x02\u03F3\u03DF\x03\x02\x02\x02\u03F3\u03E9\x03\x02\x02\x02\u03F3" +
        "\u03F0\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02" +
        "\x02\x02\u03F4\x93\x03\x02\x02\x02\u03F5\u03F6\x07*\x02\x02\u03F6\x95" +
        "\x03\x02\x02\x02\u03F7\u03F9\x07\f\x02\x02\u03F8\u03FA\x05\x92J\x02\u03F9" +
        "\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03F9\x03\x02" +
        "\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD" +
        "\u03FF\x07\x1A\x02\x02\u03FE\u03FD\x03\x02\x02\x02\u03FE\u03FF\x03\x02" +
        "\x02\x02\u03FF\x97\x03\x02\x02\x02\u0400\u0401\x07\x1A\x02\x02\u0401\x99" +
        "\x03\x02\x02\x02\u0402\u0403\t\x12\x02\x02\u0403\x9B\x03\x02\x02\x02\u0404" +
        "\u041C\x070\x02\x02\u0405\u041C\x07\x89\x02\x02\u0406\u041C\x07\x1C\x02" +
        "\x02\u0407\u0408\x07 \x02\x02\u0408\u041C\n\x13\x02\x02\u0409\u040A\x07" +
        "!\x02\x02\u040A\u041C\n\x14\x02\x02\u040B\u041C\x07#\x02\x02\u040C\u041C" +
        "\x07\"\x02\x02\u040D\u041C\x07R\x02\x02\u040E\u041C\x07S\x02\x02\u040F" +
        "\u041C\x07h\x02\x02\u0410\u041C\x07U\x02\x02\u0411\u041C\x07N\x02\x02" +
        "\u0412\u041C\x07M\x02\x02\u0413\u041C\x07Q\x02\x02\u0414\u041C\x07T\x02" +
        "\x02\u0415\u041C\x07g\x02\x02\u0416\u041C\x07d\x02\x02\u0417\u041C\x07" +
        "e\x02\x02\u0418\u041C\x07h\x02\x02\u0419\u041C\x07t\x02\x02\u041A\u041C" +
        "\x07u\x02\x02\u041B\u0404\x03\x02\x02\x02\u041B\u0405\x03\x02\x02\x02" +
        "\u041B\u0406\x03\x02\x02\x02\u041B\u0407\x03\x02\x02\x02\u041B\u0409\x03" +
        "\x02\x02\x02\u041B\u040B\x03\x02\x02\x02\u041B\u040C\x03\x02\x02\x02\u041B" +
        "\u040D\x03\x02\x02\x02\u041B\u040E\x03\x02\x02\x02\u041B\u040F\x03\x02" +
        "\x02\x02\u041B\u0410\x03\x02\x02\x02\u041B\u0411\x03\x02\x02\x02\u041B" +
        "\u0412\x03\x02\x02\x02\u041B\u0413\x03\x02\x02\x02\u041B\u0414\x03\x02" +
        "\x02\x02\u041B\u0415\x03\x02\x02\x02\u041B\u0416\x03\x02\x02\x02\u041B" +
        "\u0417\x03\x02\x02\x02\u041B\u0418\x03\x02\x02\x02\u041B\u0419\x03\x02" +
        "\x02\x02\u041B\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D" +
        "\u041B\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\x9D\x03\x02\x02" +
        "\x02\u041F\u0420\x07\x04\x02\x02\u0420\x9F\x03\x02\x02\x02\x8E\xA4\xAA" +
        "\xAF\xB4\xC3\xC9\xCF\xD8\xE1\xE7\xEA\xEE\xF2\u0112\u011A\u011C\u0123\u0128" +
        "\u012E\u0134\u0139\u013F\u0144\u014A\u0154\u015D\u0162\u0164\u0172\u0177" +
        "\u017B\u017F\u0182\u0187\u019E\u01A3\u01A5\u01AF\u01B9\u01C3\u01C9\u01D0" +
        "\u01D6\u01DE\u01E8\u01F3\u01F9\u01FE\u0205\u020E\u0212\u0216\u0219\u0228" +
        "\u022C\u023B\u023F\u0245\u0250\u0255\u025A\u025C\u0261\u0266\u0268\u026D" +
        "\u0273\u0278\u027A\u0285\u0289\u0296\u029A\u02A0\u02A2\u02A9\u02AD\u02AF" +
        "\u02B5\u02B7\u02BE\u02C3\u02C6\u02CC\u02CF\u02D3\u02DA\u02DF\u02E5\u02EA" +
        "\u02F2\u02F4\u02F8\u02FF\u0301\u030A\u030C\u0310\u031A\u031C\u0320\u0326" +
        "\u0328\u032E\u0335\u033A\u0340\u0345\u034B\u034E\u0354\u035B\u035D\u0364" +
        "\u036E\u0379\u0387\u038D\u0397\u0399\u03A2\u03A6\u03AC\u03AE\u03B5\u03B7" +
        "\u03BB\u03BF\u03C9\u03CC\u03D2\u03D5\u03DF\u03E6\u03ED\u03F3\u03FB\u03FE" +
        "\u041B\u041D";
    sequenceParser._serializedATN = Utils.join([
        sequenceParser._serializedATNSegment0,
        sequenceParser._serializedATNSegment1,
    ], "");
    return sequenceParser;
})();
export { sequenceParser };
export class BitmarkContext extends ParserRuleContext {
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
export class Bitmark_Context extends ParserRuleContext {
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
export class BitContext extends ParserRuleContext {
    sequence() {
        return this.getRuleContext(0, SequenceContext);
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
export class SequenceContext extends ParserRuleContext {
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
    mmm(i) {
        if (i === undefined) {
            return this.getRuleContexts(MmmContext);
        }
        else {
            return this.getRuleContext(i, MmmContext);
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
export class SeqstrContext extends ParserRuleContext {
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
export class MmmContext extends ParserRuleContext {
    DBLMI() { return this.getToken(sequenceParser.DBLMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_mmm; }
    // @Override
    enterRule(listener) {
        if (listener.enterMmm) {
            listener.enterMmm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMmm) {
            listener.exitMmm(this);
        }
    }
}
export class BitElemContext extends ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(sequenceParser.LIST_LINE, 0); }
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
export class Single_gapContext extends ParserRuleContext {
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
export class Choice_plusContext extends ParserRuleContext {
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
export class Choice_minusContext extends ParserRuleContext {
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
export class Choice_starContext extends ParserRuleContext {
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
export class ResourceContext extends ParserRuleContext {
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
export class Bullet_itemContext extends ParserRuleContext {
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
export class AtpointContext extends ParserRuleContext {
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
            return this.getTokens(sequenceParser.ColonText);
        }
        else {
            return this.getToken(sequenceParser.ColonText, i);
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
export class Resource_formatContext extends ParserRuleContext {
    BitmarkMinus() { return this.tryGetToken(sequenceParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(sequenceParser.BitmarkPlus, 0); }
    Prosemirror() { return this.tryGetToken(sequenceParser.Prosemirror, 0); }
    Placeholder() { return this.tryGetToken(sequenceParser.Placeholder, 0); }
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
export class Image_formatContext extends ParserRuleContext {
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
export class Video_formatContext extends ParserRuleContext {
    AmpVideo() { return this.tryGetToken(sequenceParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(sequenceParser.AmpVideoLink, 0); }
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
export class Article_formatContext extends ParserRuleContext {
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
export class Document_formatContext extends ParserRuleContext {
    AmpDocument() { return this.tryGetToken(sequenceParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(sequenceParser.AmpDocumentLink, 0); }
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
export class App_formatContext extends ParserRuleContext {
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
export class Website_formatContext extends ParserRuleContext {
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
export class Stillimagefilm_formatContext extends ParserRuleContext {
    AmpStillImageFilm() { return this.tryGetToken(sequenceParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(sequenceParser.AmpStillImageFilmLink, 0); }
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
export class Op_article_formatContext extends ParserRuleContext {
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
export class Op_document_formatContext extends ParserRuleContext {
    OpAmpDocumentLink() { return this.tryGetToken(sequenceParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(sequenceParser.OpAmpDocument, 0); }
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
export class Op_app_formatContext extends ParserRuleContext {
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
export class Op_website_formatContext extends ParserRuleContext {
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
export class Op_video_formatContext extends ParserRuleContext {
    OpAmpVideo() { return this.tryGetToken(sequenceParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    Video_type() { return this.tryGetToken(sequenceParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(sequenceParser.OpAmpVideoLink, 0); }
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
export class Op_stillimagefilm_formatContext extends ParserRuleContext {
    OpAmpStillImageFilm() { return this.tryGetToken(sequenceParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(sequenceParser.OpAmpStillImageFilmLink, 0); }
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
export class ArticlebitContext extends ParserRuleContext {
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
export class DocumentbitContext extends ParserRuleContext {
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
export class WebsitebitContext extends ParserRuleContext {
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
export class AppbitContext extends ParserRuleContext {
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
export class Stillimg_oneContext extends ParserRuleContext {
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
export class Video_oneContext extends ParserRuleContext {
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
export class Image_oneContext extends ParserRuleContext {
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
export class Op_image_formatContext extends ParserRuleContext {
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
export class Image_chainedContext extends ParserRuleContext {
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
export class Image_chained4matchContext extends ParserRuleContext {
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
export class Audio_oneContext extends ParserRuleContext {
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
export class Audio_formatContext extends ParserRuleContext {
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
export class Op_audio_formatContext extends ParserRuleContext {
    OpAmpAudio() { return this.tryGetToken(sequenceParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(sequenceParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(sequenceParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(sequenceParser.OpAmpAudioLink, 0); }
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
export class Resource_chainedContext extends ParserRuleContext {
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
export class TelephoneContext extends ParserRuleContext {
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
export class UrlContext extends ParserRuleContext {
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
export class ItemContext extends ParserRuleContext {
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
export class LeadContext extends ParserRuleContext {
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
export class AnglerefContext extends ParserRuleContext {
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
export class ExampleContext extends ParserRuleContext {
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
export class Bracketed_textContext extends ParserRuleContext {
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
export class ReferenceContext extends ParserRuleContext {
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
export class ProgressContext extends ParserRuleContext {
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
export class DatepropContext extends ParserRuleContext {
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
export class Dateprop_chainedContext extends ParserRuleContext {
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
export class InstructionContext extends ParserRuleContext {
    OPB() { return this.getToken(sequenceParser.OPB, 0); }
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
export class HintContext extends ParserRuleContext {
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
export class TitleContext extends ParserRuleContext {
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
export class Bool_labelContext extends ParserRuleContext {
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
export class Progress_pointsContext extends ParserRuleContext {
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
export class IstrackedContext extends ParserRuleContext {
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
export class IsinfoonlyContext extends ParserRuleContext {
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
export class Atdef_Context extends ParserRuleContext {
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
export class DollaransContext extends ParserRuleContext {
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
export class AnchorContext extends ParserRuleContext {
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
export class DcolonContext extends ParserRuleContext {
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
export class S_and_wContext extends ParserRuleContext {
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
    bracket_escaped() {
        return this.tryGetRuleContext(0, Bracket_escapedContext);
    }
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
export class DclinesContext extends ParserRuleContext {
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
export class Bracket_escapedContext extends ParserRuleContext {
    OPESC() { return this.getToken(sequenceParser.OPESC, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.tryGetToken(sequenceParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sequenceParser.RULE_bracket_escaped; }
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
export class SsplContext extends ParserRuleContext {
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
export class WordsContext extends ParserRuleContext {
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(sequenceParser.SENTENCE);
        }
        else {
            return this.getToken(sequenceParser.SENTENCE, i);
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
export class SpContext extends ParserRuleContext {
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
