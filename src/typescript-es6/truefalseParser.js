// Generated from ./Truefalse/truefalseParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
let truefalseParser = /** @class */ (() => {
    class truefalseParser extends Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator(truefalseParser._ATN, this);
        }
        // @Override
        // @NotNull
        get vocabulary() {
            return truefalseParser.VOCABULARY;
        }
        // tslint:enable:no-trailing-whitespace
        // @Override
        get grammarFileName() { return "truefalseParser.g4"; }
        // @Override
        get ruleNames() { return truefalseParser.ruleNames; }
        // @Override
        get serializedATN() { return truefalseParser._serializedATN; }
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, truefalseParser.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 168;
                                this.bitmark_();
                                this.state = 178;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 172;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === truefalseParser.S) {
                                                    {
                                                        {
                                                            this.state = 169;
                                                            this.match(truefalseParser.S);
                                                        }
                                                    }
                                                    this.state = 174;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 175;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 180;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 183;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === truefalseParser.BitTruefalse1 || _la === truefalseParser.BitTruefalse);
                    this.state = 188;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.NL) {
                        {
                            {
                                this.state = 185;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 190;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 191;
                    this.match(truefalseParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 2, truefalseParser.RULE_bitmark_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 193;
                    this.truefalses();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        truefalses() {
            let _localctx = new TruefalsesContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, truefalseParser.RULE_truefalses);
            try {
                this.state = 197;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.BitTruefalse1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 195;
                            this.true_false_1();
                        }
                        break;
                    case truefalseParser.BitTruefalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 196;
                            this.true_false();
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
        true_false_1() {
            let _localctx = new True_false_1Context(this._ctx, this.state);
            this.enterRule(_localctx, 6, truefalseParser.RULE_true_false_1);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 199;
                    this.match(truefalseParser.BitTruefalse1);
                    this.state = 200;
                    this.format();
                    this.state = 201;
                    this.match(truefalseParser.CL);
                    this.state = 203;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 202;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 205;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === truefalseParser.NL);
                    this.state = 216;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 207;
                                    this.bitElem();
                                    this.state = 211;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 208;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 213;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 218;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    }
                    this.state = 219;
                    this.choices();
                    this.state = 223;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 220;
                                    this.match(truefalseParser.NL);
                                }
                            }
                        }
                        this.state = 225;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                        case 1:
                            {
                                this.state = 226;
                                this.resource();
                                this.state = 236;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 230;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === truefalseParser.NL) {
                                                    {
                                                        {
                                                            this.state = 227;
                                                            this.match(truefalseParser.NL);
                                                        }
                                                    }
                                                    this.state = 232;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 233;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 238;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
        true_false() {
            let _localctx = new True_falseContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, truefalseParser.RULE_true_false);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 241;
                    this.match(truefalseParser.BitTruefalse);
                    this.state = 242;
                    this.format();
                    this.state = 243;
                    this.match(truefalseParser.CL);
                    this.state = 247;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.NL) {
                        {
                            {
                                this.state = 244;
                                this.match(truefalseParser.NL);
                            }
                        }
                        this.state = 249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 259;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 250;
                                    this.bitElem();
                                    this.state = 254;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 251;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 256;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                        }
                        this.state = 261;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                    }
                    this.state = 272;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 263;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2) {
                                            {
                                                this.state = 262;
                                                this.mcrsep();
                                            }
                                        }
                                        this.state = 268;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 265;
                                                        this.tfmisc();
                                                    }
                                                }
                                            }
                                            this.state = 270;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                                        }
                                        this.state = 271;
                                        this.choices();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 274;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 276;
                    this.mcrsep_end();
                    this.state = 280;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 277;
                                    this.match(truefalseParser.NL);
                                }
                            }
                        }
                        this.state = 282;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    }
                    this.state = 296;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                        case 1:
                            {
                                this.state = 283;
                                this.resource();
                                this.state = 293;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 287;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === truefalseParser.NL) {
                                                    {
                                                        {
                                                            this.state = 284;
                                                            this.match(truefalseParser.NL);
                                                        }
                                                    }
                                                    this.state = 289;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 290;
                                                this.resource();
                                            }
                                        }
                                    }
                                    this.state = 295;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
            this.enterRule(_localctx, 10, truefalseParser.RULE_mcrsep);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 298;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2)) {
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
        mcrsep_end() {
            let _localctx = new Mcrsep_endContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, truefalseParser.RULE_mcrsep_end);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 300;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.HSPL || _la === truefalseParser.HSPL2)) {
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
        tfmisc() {
            let _localctx = new TfmiscContext(this._ctx, this.state);
            this.enterRule(_localctx, 14, truefalseParser.RULE_tfmisc);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    {
                        this.state = 302;
                        this.bitElem();
                        this.state = 306;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === truefalseParser.NL) {
                            {
                                {
                                    this.state = 303;
                                    this.match(truefalseParser.NL);
                                }
                            }
                            this.state = 308;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
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
        choices() {
            let _localctx = new ChoicesContext(this._ctx, this.state);
            this.enterRule(_localctx, 16, truefalseParser.RULE_choices);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 311;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                        case 1:
                            {
                                this.state = 309;
                                this.cplus();
                            }
                            break;
                        case 2:
                            {
                                this.state = 310;
                                this.cminus();
                            }
                            break;
                    }
                    this.state = 328;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 314;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === truefalseParser.NL) {
                                        {
                                            this.state = 313;
                                            this.match(truefalseParser.NL);
                                        }
                                    }
                                    this.state = 319;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.S) {
                                        {
                                            {
                                                this.state = 316;
                                                this.match(truefalseParser.S);
                                            }
                                        }
                                        this.state = 321;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 324;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 322;
                                                this.cplus();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 323;
                                                this.cminus();
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        this.state = 330;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
            this.enterRule(_localctx, 18, truefalseParser.RULE_cplus);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 331;
                    this.choice_plus();
                    this.state = 333;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                        case 1:
                            {
                                this.state = 332;
                                this.example();
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
        cminus() {
            let _localctx = new CminusContext(this._ctx, this.state);
            this.enterRule(_localctx, 20, truefalseParser.RULE_cminus);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 335;
                    this.choice_minus();
                    this.state = 337;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                        case 1:
                            {
                                this.state = 336;
                                this.example();
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
        choice_plus() {
            let _localctx = new Choice_plusContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, truefalseParser.RULE_choice_plus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 340;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPC) {
                        {
                            this.state = 339;
                            this.item();
                        }
                    }
                    this.state = 342;
                    this.match(truefalseParser.OPP);
                    this.state = 345;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 345;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.S:
                                case truefalseParser.OPS:
                                case truefalseParser.COLON:
                                case truefalseParser.AMP:
                                case truefalseParser.DBLCOLON:
                                case truefalseParser.Greater:
                                case truefalseParser.Less:
                                case truefalseParser.DBLEQ:
                                case truefalseParser.RightAngle:
                                case truefalseParser.RightArrow:
                                case truefalseParser.NUMERIC:
                                case truefalseParser.STRING:
                                case truefalseParser.SENTENCE:
                                case truefalseParser.URL:
                                    {
                                        this.state = 343;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.NL:
                                    {
                                        this.state = 344;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 347;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 349;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 24, truefalseParser.RULE_choice_minus);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 352;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPC) {
                        {
                            this.state = 351;
                            this.item();
                        }
                    }
                    this.state = 354;
                    this.match(truefalseParser.OPM);
                    this.state = 357;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 357;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.S:
                                case truefalseParser.OPS:
                                case truefalseParser.COLON:
                                case truefalseParser.AMP:
                                case truefalseParser.DBLCOLON:
                                case truefalseParser.Greater:
                                case truefalseParser.Less:
                                case truefalseParser.DBLEQ:
                                case truefalseParser.RightAngle:
                                case truefalseParser.RightArrow:
                                case truefalseParser.NUMERIC:
                                case truefalseParser.STRING:
                                case truefalseParser.SENTENCE:
                                case truefalseParser.URL:
                                    {
                                        this.state = 355;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.NL:
                                    {
                                        this.state = 356;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 359;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 361;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 26, truefalseParser.RULE_choice_star);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 364;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPC) {
                        {
                            this.state = 363;
                            this.item();
                        }
                    }
                    this.state = 366;
                    this.match(truefalseParser.OPR);
                    this.state = 369;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 369;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.S:
                                case truefalseParser.OPS:
                                case truefalseParser.COLON:
                                case truefalseParser.AMP:
                                case truefalseParser.DBLCOLON:
                                case truefalseParser.Greater:
                                case truefalseParser.Less:
                                case truefalseParser.DBLEQ:
                                case truefalseParser.RightAngle:
                                case truefalseParser.RightArrow:
                                case truefalseParser.NUMERIC:
                                case truefalseParser.STRING:
                                case truefalseParser.SENTENCE:
                                case truefalseParser.URL:
                                    {
                                        this.state = 367;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.NL:
                                    {
                                        this.state = 368;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 373;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 28, truefalseParser.RULE_bitElem);
            try {
                this.state = 398;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 375;
                            this.match(truefalseParser.LIST_LINE);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 376;
                            this.dclines();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 377;
                            this.gap();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 378;
                            this.atdef();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 379;
                            this.reference();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 380;
                            this.item();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 381;
                            this.title();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 382;
                            this.instruction();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 383;
                            this.hint();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 384;
                            this.s_and_w();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 385;
                            this.example();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 386;
                            this.bool_label();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 387;
                            this.imagebit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 388;
                            this.audiobit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 389;
                            this.videobit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 390;
                            this.articlebit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 391;
                            this.documentbit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 392;
                            this.appbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 393;
                            this.websitebit();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 394;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 395;
                            this.angleref();
                        }
                        break;
                    case 22:
                        this.enterOuterAlt(_localctx, 22);
                        {
                            this.state = 396;
                            this.anchor();
                        }
                        break;
                    case 23:
                        this.enterOuterAlt(_localctx, 23);
                        {
                            this.state = 397;
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
        resource() {
            let _localctx = new ResourceContext(this._ctx, this.state);
            this.enterRule(_localctx, 30, truefalseParser.RULE_resource);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 400;
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
        gap() {
            let _localctx = new GapContext(this._ctx, this.state);
            this.enterRule(_localctx, 32, truefalseParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 402;
                    this.single_gap();
                    this.state = 410;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 408;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case truefalseParser.OPU:
                                        {
                                            this.state = 403;
                                            this.single_gap();
                                        }
                                        break;
                                    case truefalseParser.OPB:
                                        {
                                            this.state = 404;
                                            this.instruction();
                                        }
                                        break;
                                    case truefalseParser.OPQ:
                                        {
                                            this.state = 405;
                                            this.hint();
                                        }
                                        break;
                                    case truefalseParser.OPC:
                                        {
                                            this.state = 406;
                                            this.item();
                                        }
                                        break;
                                    case truefalseParser.AtExampleWithStr:
                                    case truefalseParser.AtExamplecol:
                                    case truefalseParser.AtExamplecl:
                                        {
                                            this.state = 407;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 412;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
            this.enterRule(_localctx, 34, truefalseParser.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 413;
                    this.match(truefalseParser.OPU);
                    this.state = 417;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                        case 1:
                            {
                                this.state = 414;
                                this.match(truefalseParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 415;
                                this.match(truefalseParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 422;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                        {
                            {
                                this.state = 419;
                                this.s_and_w();
                            }
                        }
                        this.state = 424;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 425;
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
        bullet_item() {
            let _localctx = new Bullet_itemContext(this._ctx, this.state);
            this.enterRule(_localctx, 36, truefalseParser.RULE_bullet_item);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 427;
                    this.match(truefalseParser.OPBUL);
                    this.state = 428;
                    this.s_and_w();
                    this.state = 429;
                    this.match(truefalseParser.CL);
                    this.state = 431;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.AtPoints) {
                        {
                            this.state = 430;
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
            this.enterRule(_localctx, 38, truefalseParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 433;
                    this.match(truefalseParser.AtPoints);
                    this.state = 434;
                    this.match(truefalseParser.NUMERIC);
                    this.state = 435;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 40, truefalseParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 440;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 437;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 442;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                    }
                    this.state = 447;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (truefalseParser.AmpAudio - 75)) | (1 << (truefalseParser.AmpImage - 75)) | (1 << (truefalseParser.AmpImageZoom - 75)) | (1 << (truefalseParser.AmpImageWAudio - 75)) | (1 << (truefalseParser.AmpVideo - 75)) | (1 << (truefalseParser.AmpArticle - 75)) | (1 << (truefalseParser.AmpDocument - 75)) | (1 << (truefalseParser.AmpApp - 75)) | (1 << (truefalseParser.AmpWebsite - 75)) | (1 << (truefalseParser.AmpStillImageFilm - 75)) | (1 << (truefalseParser.AmpPdf - 75)) | (1 << (truefalseParser.AmpAudioLink - 75)) | (1 << (truefalseParser.AmpImageLink - 75)) | (1 << (truefalseParser.AmpVideoLink - 75)) | (1 << (truefalseParser.AmpArticleLink - 75)) | (1 << (truefalseParser.AmpDocumentLink - 75)) | (1 << (truefalseParser.AmpAppLink - 75)) | (1 << (truefalseParser.AmpWebsiteLink - 75)) | (1 << (truefalseParser.AmpStillImageFilmLink - 75)))) !== 0) || _la === truefalseParser.ColonText) {
                        {
                            this.state = 445;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.ColonText:
                                    {
                                        this.state = 443;
                                        this.match(truefalseParser.ColonText);
                                    }
                                    break;
                                case truefalseParser.AmpAudio:
                                case truefalseParser.AmpImage:
                                case truefalseParser.AmpImageZoom:
                                case truefalseParser.AmpImageWAudio:
                                case truefalseParser.AmpVideo:
                                case truefalseParser.AmpArticle:
                                case truefalseParser.AmpDocument:
                                case truefalseParser.AmpApp:
                                case truefalseParser.AmpWebsite:
                                case truefalseParser.AmpStillImageFilm:
                                case truefalseParser.AmpPdf:
                                case truefalseParser.AmpAudioLink:
                                case truefalseParser.AmpImageLink:
                                case truefalseParser.AmpVideoLink:
                                case truefalseParser.AmpArticleLink:
                                case truefalseParser.AmpDocumentLink:
                                case truefalseParser.AmpAppLink:
                                case truefalseParser.AmpWebsiteLink:
                                case truefalseParser.AmpStillImageFilmLink:
                                    {
                                        this.state = 444;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 449;
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
            this.enterRule(_localctx, 42, truefalseParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 450;
                    _la = this._input.LA(1);
                    if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (truefalseParser.AmpArticle - 80)) | (1 << (truefalseParser.AmpDocument - 80)) | (1 << (truefalseParser.AmpWebsite - 80)) | (1 << (truefalseParser.AmpStillImageFilm - 80)) | (1 << (truefalseParser.AmpAudioLink - 80)) | (1 << (truefalseParser.AmpImageLink - 80)) | (1 << (truefalseParser.AmpVideoLink - 80)) | (1 << (truefalseParser.AmpArticleLink - 80)) | (1 << (truefalseParser.AmpDocumentLink - 80)) | (1 << (truefalseParser.AmpAppLink - 80)) | (1 << (truefalseParser.AmpWebsiteLink - 80)) | (1 << (truefalseParser.AmpStillImageFilmLink - 80)))) !== 0) || _la === truefalseParser.BitmarkMinus || _la === truefalseParser.BitmarkPlus)) {
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
            this.enterRule(_localctx, 44, truefalseParser.RULE_resource_format_extra);
            try {
                this.state = 461;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AmpImage:
                    case truefalseParser.AmpImageZoom:
                    case truefalseParser.AmpImageWAudio:
                    case truefalseParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 452;
                            this.image_format();
                        }
                        break;
                    case truefalseParser.AmpAudio:
                    case truefalseParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 453;
                            this.audio_format();
                        }
                        break;
                    case truefalseParser.AmpVideo:
                    case truefalseParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 454;
                            this.video_format();
                        }
                        break;
                    case truefalseParser.AmpArticle:
                    case truefalseParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 455;
                            this.article_format();
                        }
                        break;
                    case truefalseParser.AmpDocument:
                    case truefalseParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 456;
                            this.document_format();
                        }
                        break;
                    case truefalseParser.AmpApp:
                    case truefalseParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 457;
                            this.app_format();
                        }
                        break;
                    case truefalseParser.AmpWebsite:
                    case truefalseParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 458;
                            this.website_format();
                        }
                        break;
                    case truefalseParser.AmpStillImageFilm:
                    case truefalseParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 459;
                            this.stillimagefilm_format();
                        }
                        break;
                    case truefalseParser.AmpPdf:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 460;
                            this.match(truefalseParser.AmpPdf);
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
            this.enterRule(_localctx, 46, truefalseParser.RULE_image_format);
            let _la;
            try {
                this.state = 477;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 463;
                            this.match(truefalseParser.AmpImage);
                            this.state = 466;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.Image_type:
                                    {
                                        {
                                            this.state = 464;
                                            this.match(truefalseParser.Image_type);
                                        }
                                    }
                                    break;
                                case truefalseParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 465;
                                            this.match(truefalseParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case truefalseParser.CL:
                                case truefalseParser.AmpAudio:
                                case truefalseParser.AmpImage:
                                case truefalseParser.AmpImageZoom:
                                case truefalseParser.AmpImageWAudio:
                                case truefalseParser.AmpVideo:
                                case truefalseParser.AmpArticle:
                                case truefalseParser.AmpDocument:
                                case truefalseParser.AmpApp:
                                case truefalseParser.AmpWebsite:
                                case truefalseParser.AmpStillImageFilm:
                                case truefalseParser.AmpPdf:
                                case truefalseParser.AmpAudioLink:
                                case truefalseParser.AmpImageLink:
                                case truefalseParser.AmpVideoLink:
                                case truefalseParser.AmpArticleLink:
                                case truefalseParser.AmpDocumentLink:
                                case truefalseParser.AmpAppLink:
                                case truefalseParser.AmpWebsiteLink:
                                case truefalseParser.AmpStillImageFilmLink:
                                case truefalseParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 468;
                            this.match(truefalseParser.AmpImageLink);
                            this.state = 470;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 469;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 472;
                            this.match(truefalseParser.AmpImageZoom);
                            this.state = 474;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 473;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 476;
                            this.match(truefalseParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 48, truefalseParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 479;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpVideo || _la === truefalseParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 482;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.COLON) {
                        {
                            this.state = 480;
                            this.match(truefalseParser.COLON);
                            this.state = 481;
                            this.match(truefalseParser.Video_type);
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
            this.enterRule(_localctx, 50, truefalseParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 484;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpArticle || _la === truefalseParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 52, truefalseParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 486;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpDocument || _la === truefalseParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 54, truefalseParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 488;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpApp || _la === truefalseParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 56, truefalseParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 490;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpWebsite || _la === truefalseParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 58, truefalseParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 492;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.AmpStillImageFilm || _la === truefalseParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 60, truefalseParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 494;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpArticle || _la === truefalseParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 62, truefalseParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 496;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpDocument || _la === truefalseParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 64, truefalseParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 498;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpApp || _la === truefalseParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 66, truefalseParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 500;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpWebsite || _la === truefalseParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 68, truefalseParser.RULE_op_video_format);
            try {
                this.state = 512;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 502;
                            this.match(truefalseParser.OpAmpVideo);
                            this.state = 505;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 503;
                                        this.match(truefalseParser.COLON);
                                        this.state = 504;
                                        this.match(truefalseParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 507;
                            this.match(truefalseParser.OpAmpVideoLink);
                            this.state = 510;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 508;
                                        this.match(truefalseParser.COLON);
                                        this.state = 509;
                                        this.match(truefalseParser.Video_type);
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
            this.enterRule(_localctx, 70, truefalseParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 514;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.OpAmpStillImageFilm || _la === truefalseParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 72, truefalseParser.RULE_articlebit);
            try {
                this.state = 522;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpArticle:
                    case truefalseParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 516;
                            this.op_article_format();
                            this.state = 517;
                            this.match(truefalseParser.COLON);
                            this.state = 518;
                            this.url();
                            this.state = 519;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 521;
                            this.match(truefalseParser.ArticleText);
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
            this.enterRule(_localctx, 74, truefalseParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 524;
                    this.op_document_format();
                    this.state = 525;
                    this.match(truefalseParser.COLON);
                    this.state = 526;
                    this.url();
                    this.state = 527;
                    this.match(truefalseParser.CL);
                    this.state = 532;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPATALT) {
                        {
                            this.state = 528;
                            this.match(truefalseParser.OPATALT);
                            this.state = 529;
                            this.words();
                            this.state = 530;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 76, truefalseParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 534;
                    this.op_website_format();
                    this.state = 535;
                    this.match(truefalseParser.COLON);
                    this.state = 536;
                    this.url();
                    this.state = 537;
                    this.match(truefalseParser.CL);
                    this.state = 542;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPATALT) {
                        {
                            this.state = 538;
                            this.match(truefalseParser.OPATALT);
                            this.state = 539;
                            this.words();
                            this.state = 540;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 78, truefalseParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 544;
                    this.op_app_format();
                    this.state = 545;
                    this.match(truefalseParser.COLON);
                    this.state = 548;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case truefalseParser.URL:
                            {
                                this.state = 546;
                                this.url();
                            }
                            break;
                        case truefalseParser.TEL:
                            {
                                this.state = 547;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 550;
                    this.match(truefalseParser.CL);
                    this.state = 555;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.OPATALT) {
                        {
                            this.state = 551;
                            this.match(truefalseParser.OPATALT);
                            this.state = 552;
                            this.words();
                            this.state = 553;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 80, truefalseParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 557;
                    this.stillimg_one();
                    this.state = 561;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 558;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 563;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
            this.enterRule(_localctx, 82, truefalseParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 564;
                    this.op_stillimagefilm_format();
                    this.state = 565;
                    this.match(truefalseParser.COLON);
                    this.state = 569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.S) {
                        {
                            {
                                this.state = 566;
                                this.match(truefalseParser.S);
                            }
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 572;
                    this.url();
                    this.state = 573;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 84, truefalseParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 575;
                    this.video_one();
                    this.state = 579;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
                        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
            this.enterRule(_localctx, 86, truefalseParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 582;
                    this.op_video_format();
                    this.state = 583;
                    this.match(truefalseParser.COLON);
                    this.state = 584;
                    this.url();
                    this.state = 585;
                    this.match(truefalseParser.CL);
                    this.state = 590;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                        case 1:
                            {
                                this.state = 586;
                                this.match(truefalseParser.OPATALT);
                                this.state = 587;
                                this.words();
                                this.state = 588;
                                this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 88, truefalseParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 592;
                    this.image_one();
                    this.state = 596;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 593;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 598;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                    }
                    this.state = 601;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                        case 1:
                            {
                                this.state = 599;
                                this.match(truefalseParser.NL);
                                this.state = 600;
                                this.match(truefalseParser.ShowInIndex);
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
            this.enterRule(_localctx, 90, truefalseParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 603;
                    this.op_image_format();
                    this.state = 604;
                    this.match(truefalseParser.COLON);
                    this.state = 608;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === truefalseParser.S) {
                        {
                            {
                                this.state = 605;
                                this.match(truefalseParser.S);
                            }
                        }
                        this.state = 610;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 611;
                    this.url();
                    this.state = 612;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 92, truefalseParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 628;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 614;
                            this.match(truefalseParser.OpAmpImage);
                            this.state = 617;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.Image_type:
                                    {
                                        {
                                            this.state = 615;
                                            this.match(truefalseParser.Image_type);
                                        }
                                    }
                                    break;
                                case truefalseParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 616;
                                            this.match(truefalseParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case truefalseParser.COLON:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.OpAmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 619;
                            this.match(truefalseParser.OpAmpImageLink);
                            this.state = 621;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 620;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 623;
                            this.match(truefalseParser.OpAmpImageZoom);
                            this.state = 625;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.Image_type) {
                                {
                                    this.state = 624;
                                    this.match(truefalseParser.Image_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 627;
                            this.match(truefalseParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 94, truefalseParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 647;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 630;
                            this.match(truefalseParser.AtSrc);
                            this.state = 631;
                            this.match(truefalseParser.COLON);
                            this.state = 632;
                            this.url();
                            this.state = 633;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtWidth:
                    case truefalseParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 635;
                            _la = this._input.LA(1);
                            if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
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
                            this.match(truefalseParser.COLON);
                            this.state = 637;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 638;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OPATALT:
                    case truefalseParser.OpAtCaption:
                    case truefalseParser.OpAtLicense:
                    case truefalseParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 639;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)))) !== 0))) {
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
                            _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
                                _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                            }
                            this.state = 646;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 96, truefalseParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 666;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 649;
                            this.match(truefalseParser.AtSrc);
                            this.state = 650;
                            this.match(truefalseParser.COLON);
                            this.state = 651;
                            this.url();
                            this.state = 652;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtWidth:
                    case truefalseParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 654;
                            _la = this._input.LA(1);
                            if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 655;
                            this.match(truefalseParser.COLON);
                            this.state = 656;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 657;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OPATALT:
                    case truefalseParser.OpAtCaption:
                    case truefalseParser.OpAtLicense:
                    case truefalseParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 658;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 662;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 659;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 664;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                            }
                            this.state = 665;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 98, truefalseParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 668;
                    this.audio_one();
                    this.state = 672;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 669;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 674;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
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
            this.enterRule(_localctx, 100, truefalseParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 675;
                    this.op_audio_format();
                    this.state = 676;
                    this.match(truefalseParser.COLON);
                    this.state = 677;
                    this.url();
                    this.state = 678;
                    this.match(truefalseParser.CL);
                    this.state = 683;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                        case 1:
                            {
                                this.state = 679;
                                this.match(truefalseParser.OPATALT);
                                this.state = 680;
                                this.words();
                                this.state = 681;
                                this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 102, truefalseParser.RULE_audio_format);
            let _la;
            try {
                this.state = 695;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 685;
                            this.match(truefalseParser.AmpAudio);
                            this.state = 688;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.COLON) {
                                {
                                    this.state = 686;
                                    this.match(truefalseParser.COLON);
                                    this.state = 687;
                                    this.match(truefalseParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case truefalseParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 690;
                            this.match(truefalseParser.AmpAudioLink);
                            this.state = 693;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.COLON) {
                                {
                                    this.state = 691;
                                    this.match(truefalseParser.COLON);
                                    this.state = 692;
                                    this.match(truefalseParser.Audio_type);
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
            this.enterRule(_localctx, 104, truefalseParser.RULE_op_audio_format);
            try {
                this.state = 707;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 697;
                            this.match(truefalseParser.OpAmpAudio);
                            this.state = 700;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 698;
                                        this.match(truefalseParser.COLON);
                                        this.state = 699;
                                        this.match(truefalseParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case truefalseParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 702;
                            this.match(truefalseParser.OpAmpAudioLink);
                            this.state = 705;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 703;
                                        this.match(truefalseParser.COLON);
                                        this.state = 704;
                                        this.match(truefalseParser.Audio_type);
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
            this.enterRule(_localctx, 106, truefalseParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 740;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OPA:
                    case truefalseParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 712;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.OPA:
                                    {
                                        this.state = 709;
                                        this.match(truefalseParser.OPA);
                                        this.state = 710;
                                        this.s_and_w();
                                    }
                                    break;
                                case truefalseParser.AtSrc:
                                    {
                                        this.state = 711;
                                        this.match(truefalseParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 714;
                            this.match(truefalseParser.COLON);
                            this.state = 718;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 715;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                }
                                this.state = 720;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
                            }
                            this.state = 723;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 723;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case truefalseParser.S:
                                        case truefalseParser.OPS:
                                        case truefalseParser.COLON:
                                        case truefalseParser.AMP:
                                        case truefalseParser.DBLCOLON:
                                        case truefalseParser.Greater:
                                        case truefalseParser.Less:
                                        case truefalseParser.DBLEQ:
                                        case truefalseParser.RightAngle:
                                        case truefalseParser.RightArrow:
                                        case truefalseParser.NUMERIC:
                                        case truefalseParser.STRING:
                                        case truefalseParser.SENTENCE:
                                        case truefalseParser.URL:
                                            {
                                                this.state = 721;
                                                this.s_and_w();
                                            }
                                            break;
                                        case truefalseParser.NL:
                                            {
                                                this.state = 722;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 725;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 727;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtWidth:
                    case truefalseParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 728;
                            _la = this._input.LA(1);
                            if (!(_la === truefalseParser.AtWidth || _la === truefalseParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 729;
                            this.match(truefalseParser.COLON);
                            this.state = 730;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 731;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OPATALT:
                    case truefalseParser.OpAtCaption:
                    case truefalseParser.OpAtLicense:
                    case truefalseParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 732;
                            _la = this._input.LA(1);
                            if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 736;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 733;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 738;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                            }
                            this.state = 739;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 108, truefalseParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 742;
                    this.match(truefalseParser.TEL);
                    this.state = 743;
                    this.match(truefalseParser.PLUS);
                    this.state = 744;
                    this.match(truefalseParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 110, truefalseParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 746;
                    this.match(truefalseParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 112, truefalseParser.RULE_item);
            let _la;
            try {
                this.state = 778;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 748;
                            this.match(truefalseParser.OPC);
                            this.state = 749;
                            this.match(truefalseParser.CL);
                            this.state = 757;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 753;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.S) {
                                            {
                                                {
                                                    this.state = 750;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 755;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 756;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 759;
                            this.match(truefalseParser.OPC);
                            this.state = 760;
                            this.s_and_w();
                            this.state = 765;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (truefalseParser.COLON - 26)) | (1 << (truefalseParser.AMP - 26)) | (1 << (truefalseParser.Greater - 26)) | (1 << (truefalseParser.Less - 26)) | (1 << (truefalseParser.RightAngle - 26)) | (1 << (truefalseParser.RightArrow - 26)) | (1 << (truefalseParser.SENTENCE - 26)))) !== 0)) {
                                {
                                    this.state = 763;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case truefalseParser.COLON:
                                            {
                                                this.state = 761;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case truefalseParser.AMP:
                                        case truefalseParser.Greater:
                                        case truefalseParser.Less:
                                        case truefalseParser.RightAngle:
                                        case truefalseParser.RightArrow:
                                        case truefalseParser.SENTENCE:
                                            {
                                                this.state = 762;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 767;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 768;
                            this.match(truefalseParser.CL);
                            this.state = 776;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 772;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.S) {
                                            {
                                                {
                                                    this.state = 769;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 774;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 775;
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
            this.enterRule(_localctx, 114, truefalseParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 780;
                    this.match(truefalseParser.OPC);
                    this.state = 781;
                    this.s_and_w();
                    this.state = 786;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (truefalseParser.COLON - 26)) | (1 << (truefalseParser.AMP - 26)) | (1 << (truefalseParser.Greater - 26)) | (1 << (truefalseParser.Less - 26)) | (1 << (truefalseParser.RightAngle - 26)) | (1 << (truefalseParser.RightArrow - 26)) | (1 << (truefalseParser.SENTENCE - 26)))) !== 0)) {
                        {
                            this.state = 784;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case truefalseParser.COLON:
                                    {
                                        this.state = 782;
                                        this.match(truefalseParser.COLON);
                                    }
                                    break;
                                case truefalseParser.AMP:
                                case truefalseParser.Greater:
                                case truefalseParser.Less:
                                case truefalseParser.RightAngle:
                                case truefalseParser.RightArrow:
                                case truefalseParser.SENTENCE:
                                    {
                                        this.state = 783;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 788;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 789;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 116, truefalseParser.RULE_angleref);
            let _la;
            try {
                this.state = 801;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 791;
                            this.match(truefalseParser.OPRANGLES);
                            this.state = 793;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 792;
                                    this.s_and_w();
                                }
                            }
                            this.state = 795;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 796;
                            this.match(truefalseParser.OPRANGLEL);
                            this.state = 798;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 797;
                                    this.s_and_w();
                                }
                            }
                            this.state = 800;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 118, truefalseParser.RULE_example);
            let _la;
            try {
                this.state = 810;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 803;
                            this.match(truefalseParser.AtExamplecl);
                        }
                        break;
                    case truefalseParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 804;
                            this.match(truefalseParser.AtExampleWithStr);
                        }
                        break;
                    case truefalseParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 805;
                            this.match(truefalseParser.AtExamplecol);
                            this.state = 807;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === truefalseParser.SENTENCE) {
                                {
                                    this.state = 806;
                                    this.match(truefalseParser.SENTENCE);
                                }
                            }
                            this.state = 809;
                            this.match(truefalseParser.EOF);
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
            this.enterRule(_localctx, 120, truefalseParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 851;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 812;
                            this.match(truefalseParser.BracEnclose);
                            this.state = 814;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 813;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 837;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    {
                                        this.state = 816;
                                        this.s_and_w();
                                        this.state = 826;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 817;
                                                        this.match(truefalseParser.NL);
                                                        this.state = 821;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 818;
                                                                        this.match(truefalseParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 823;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 828;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                                        }
                                        this.state = 832;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 829;
                                                    this.match(truefalseParser.NL);
                                                }
                                            }
                                            this.state = 834;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 839;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 840;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 841;
                            this.match(truefalseParser.BracEnclose);
                            this.state = 847;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 845;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 842;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 843;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 844;
                                                this.match(truefalseParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 849;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 850;
                            this.match(truefalseParser.EOF);
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
            this.enterRule(_localctx, 122, truefalseParser.RULE_reference);
            let _la;
            try {
                this.state = 875;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 853;
                            this.match(truefalseParser.AtReference);
                            this.state = 858;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 858;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 854;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 855;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 856;
                                                this.match(truefalseParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 857;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 860;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 862;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 863;
                            this.match(truefalseParser.AtReference);
                            this.state = 871;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 869;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 864;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 865;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 866;
                                                this.match(truefalseParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 867;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 868;
                                                this.match(truefalseParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 873;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 874;
                            this.match(truefalseParser.EOF);
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
            this.enterRule(_localctx, 124, truefalseParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 877;
                    this.match(truefalseParser.AtProgress);
                    this.state = 878;
                    this.s_and_w();
                    this.state = 879;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 126, truefalseParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 881;
                    this.match(truefalseParser.AtDate);
                    this.state = 885;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 885;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 882;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 883;
                                        this.match(truefalseParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 884;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 887;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 889;
                    this.match(truefalseParser.CL);
                    this.state = 891;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === truefalseParser.AtDate) {
                        {
                            this.state = 890;
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
            this.enterRule(_localctx, 128, truefalseParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 893;
                    this.match(truefalseParser.AtDate);
                    this.state = 897;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 897;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 121, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 894;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 895;
                                        this.match(truefalseParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 896;
                                        this.match(truefalseParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 899;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                    this.state = 901;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 130, truefalseParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 937;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 903;
                            this.match(truefalseParser.OPB);
                            this.state = 905;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 904;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 928;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    {
                                        this.state = 907;
                                        this.s_and_w();
                                        this.state = 917;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 908;
                                                        this.match(truefalseParser.NL);
                                                        this.state = 912;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 909;
                                                                        this.match(truefalseParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 914;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 919;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                                        }
                                        this.state = 923;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === truefalseParser.NL) {
                                            {
                                                {
                                                    this.state = 920;
                                                    this.match(truefalseParser.NL);
                                                }
                                            }
                                            this.state = 925;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                }
                                this.state = 930;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 931;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 932;
                            this.match(truefalseParser.OPB);
                            this.state = 934;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 933;
                                    this.s_and_w();
                                }
                            }
                            this.state = 936;
                            this.match(truefalseParser.EOF);
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
            this.enterRule(_localctx, 132, truefalseParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 939;
                    this.match(truefalseParser.OPQ);
                    this.state = 941;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 940;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === truefalseParser.CL)) {
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
                        this.state = 943;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.OPDOT) | (1 << truefalseParser.S) | (1 << truefalseParser.BitTruefalse1) | (1 << truefalseParser.BitTruefalse) | (1 << truefalseParser.COMMENT) | (1 << truefalseParser.Image_type) | (1 << truefalseParser.Audio_type) | (1 << truefalseParser.Video_type) | (1 << truefalseParser.OPDOLL) | (1 << truefalseParser.OPBUL) | (1 << truefalseParser.OPESC) | (1 << truefalseParser.OPRANGLES) | (1 << truefalseParser.OPRANGLEL) | (1 << truefalseParser.OPDANGLE) | (1 << truefalseParser.OPU) | (1 << truefalseParser.OPB) | (1 << truefalseParser.OPQ) | (1 << truefalseParser.OPA) | (1 << truefalseParser.OPP) | (1 << truefalseParser.OPM) | (1 << truefalseParser.OPS) | (1 << truefalseParser.OPR) | (1 << truefalseParser.OPC) | (1 << truefalseParser.OPHASH) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.PLUS) | (1 << truefalseParser.DotAt) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.HSPL - 32)) | (1 << (truefalseParser.HSPL2 - 32)) | (1 << (truefalseParser.SSPL - 32)) | (1 << (truefalseParser.SSPL2 - 32)) | (1 << (truefalseParser.DCANY - 32)) | (1 << (truefalseParser.ArticleText - 32)) | (1 << (truefalseParser.NOTCL - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)) | (1 << (truefalseParser.OPAT - 32)) | (1 << (truefalseParser.AtProgress - 32)) | (1 << (truefalseParser.AtReference - 32)) | (1 << (truefalseParser.AtWidth - 32)) | (1 << (truefalseParser.AtHeight - 32)) | (1 << (truefalseParser.AtProgressPoints - 32)) | (1 << (truefalseParser.AtShortanswer - 32)) | (1 << (truefalseParser.AtLonganswer - 32)) | (1 << (truefalseParser.AtExampleWithStr - 32)) | (1 << (truefalseParser.AtExamplecol - 32)) | (1 << (truefalseParser.AtExamplecl - 32)) | (1 << (truefalseParser.AtPartialAnswerS - 32)) | (1 << (truefalseParser.AtPartialAnswer - 32)) | (1 << (truefalseParser.AtLabeltrue - 32)) | (1 << (truefalseParser.AtLabelfalse - 32)) | (1 << (truefalseParser.AtPoints - 32)) | (1 << (truefalseParser.AtSrc - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (truefalseParser.OPATALT - 64)) | (1 << (truefalseParser.OPAMARK - 64)) | (1 << (truefalseParser.ShowInIndex - 64)) | (1 << (truefalseParser.OpAtCaption - 64)) | (1 << (truefalseParser.OpAtLicense - 64)) | (1 << (truefalseParser.OpAtCopyright - 64)) | (1 << (truefalseParser.OpAtIsTracked - 64)) | (1 << (truefalseParser.OpAtIsInfoOnly - 64)) | (1 << (truefalseParser.AtDate - 64)) | (1 << (truefalseParser.Http - 64)) | (1 << (truefalseParser.Https - 64)) | (1 << (truefalseParser.AmpAudio - 64)) | (1 << (truefalseParser.AmpImage - 64)) | (1 << (truefalseParser.AmpImageZoom - 64)) | (1 << (truefalseParser.AmpImageWAudio - 64)) | (1 << (truefalseParser.AmpVideo - 64)) | (1 << (truefalseParser.AmpArticle - 64)) | (1 << (truefalseParser.AmpDocument - 64)) | (1 << (truefalseParser.AmpApp - 64)) | (1 << (truefalseParser.AmpWebsite - 64)) | (1 << (truefalseParser.AmpStillImageFilm - 64)) | (1 << (truefalseParser.AmpPdf - 64)) | (1 << (truefalseParser.OpAmpAudio - 64)) | (1 << (truefalseParser.OpAmpImage - 64)) | (1 << (truefalseParser.OpAmpImageZoom - 64)) | (1 << (truefalseParser.OpAmpImageWAudio - 64)) | (1 << (truefalseParser.OpAmpVideo - 64)) | (1 << (truefalseParser.OpAmpArticle - 64)) | (1 << (truefalseParser.OpAmpArticleAtt - 64)) | (1 << (truefalseParser.OpAmpDocument - 64)) | (1 << (truefalseParser.OpAmpApp - 64)) | (1 << (truefalseParser.OpAmpWebsite - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (truefalseParser.OpAmpStillImageFilm - 96)) | (1 << (truefalseParser.BracEnclose - 96)) | (1 << (truefalseParser.AmpAudioLink - 96)) | (1 << (truefalseParser.AmpImageLink - 96)) | (1 << (truefalseParser.AmpVideoLink - 96)) | (1 << (truefalseParser.AmpArticleLink - 96)) | (1 << (truefalseParser.AmpDocumentLink - 96)) | (1 << (truefalseParser.AmpAppLink - 96)) | (1 << (truefalseParser.AmpWebsiteLink - 96)) | (1 << (truefalseParser.AmpStillImageFilmLink - 96)) | (1 << (truefalseParser.OpAmpAudioLink - 96)) | (1 << (truefalseParser.OpAmpImageLink - 96)) | (1 << (truefalseParser.OpAmpVideoLink - 96)) | (1 << (truefalseParser.OpAmpArticleLink - 96)) | (1 << (truefalseParser.OpAmpDocumentLink - 96)) | (1 << (truefalseParser.OpAmpAppLink - 96)) | (1 << (truefalseParser.OpAmpWebsiteLink - 96)) | (1 << (truefalseParser.OpAmpStillImageFilmLink - 96)) | (1 << (truefalseParser.BitmarkMinus - 96)) | (1 << (truefalseParser.BitmarkPlus - 96)) | (1 << (truefalseParser.ColonText - 96)) | (1 << (truefalseParser.BASIC - 96)) | (1 << (truefalseParser.JPG - 96)) | (1 << (truefalseParser.PNG - 96)) | (1 << (truefalseParser.GIF - 96)) | (1 << (truefalseParser.SVG - 96)) | (1 << (truefalseParser.MP2 - 96)) | (1 << (truefalseParser.MP3 - 96)) | (1 << (truefalseParser.MP4 - 96)) | (1 << (truefalseParser.FLV - 96)) | (1 << (truefalseParser.WMV - 96)) | (1 << (truefalseParser.MPEG - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (truefalseParser.MPG - 128)) | (1 << (truefalseParser.TEL - 128)) | (1 << (truefalseParser.DotArticleAtt - 128)) | (1 << (truefalseParser.STAR - 128)) | (1 << (truefalseParser.URL - 128)) | (1 << (truefalseParser.LIST_LINE - 128)))) !== 0));
                    this.state = 945;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 134, truefalseParser.RULE_title);
            let _la;
            try {
                this.state = 959;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 947;
                            this.match(truefalseParser.OPHASH);
                            this.state = 950;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 950;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case truefalseParser.S:
                                        case truefalseParser.OPS:
                                        case truefalseParser.COLON:
                                        case truefalseParser.AMP:
                                        case truefalseParser.DBLCOLON:
                                        case truefalseParser.Greater:
                                        case truefalseParser.Less:
                                        case truefalseParser.DBLEQ:
                                        case truefalseParser.RightAngle:
                                        case truefalseParser.RightArrow:
                                        case truefalseParser.NUMERIC:
                                        case truefalseParser.STRING:
                                        case truefalseParser.SENTENCE:
                                        case truefalseParser.URL:
                                            {
                                                this.state = 948;
                                                this.s_and_w();
                                            }
                                            break;
                                        case truefalseParser.NL:
                                            {
                                                this.state = 949;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 952;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 954;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 955;
                            this.match(truefalseParser.OPHASH);
                            this.state = 956;
                            this.s_and_w();
                            this.state = 957;
                            this.match(truefalseParser.EOF);
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
            this.enterRule(_localctx, 136, truefalseParser.RULE_bool_label);
            try {
                this.state = 969;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 961;
                            this.match(truefalseParser.AtLabeltrue);
                            this.state = 962;
                            this.s_and_w();
                            this.state = 963;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 965;
                            this.match(truefalseParser.AtLabelfalse);
                            this.state = 966;
                            this.s_and_w();
                            this.state = 967;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 138, truefalseParser.RULE_progress_points);
            try {
                this.state = 980;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 971;
                            this.match(truefalseParser.AtProgressPoints);
                            this.state = 972;
                            this.match(truefalseParser.COLON);
                            this.state = 973;
                            this.match(truefalseParser.NUMERIC);
                            this.state = 974;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 975;
                            this.match(truefalseParser.AtProgressPoints);
                            this.state = 976;
                            this.match(truefalseParser.COLON);
                            this.state = 977;
                            this.s_and_w();
                            this.state = 978;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 140, truefalseParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 982;
                    this.match(truefalseParser.OpAtIsTracked);
                    this.state = 983;
                    this.s_and_w();
                    this.state = 984;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 142, truefalseParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 986;
                    this.match(truefalseParser.OpAtIsInfoOnly);
                    this.state = 987;
                    this.s_and_w();
                    this.state = 988;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 144, truefalseParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 990;
                    this.atdef_();
                    this.state = 1000;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 994;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === truefalseParser.NL) {
                                        {
                                            {
                                                this.state = 991;
                                                this.match(truefalseParser.NL);
                                            }
                                        }
                                        this.state = 996;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 997;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 1002;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
            this.enterRule(_localctx, 146, truefalseParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 1025;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case truefalseParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1003;
                            this.match(truefalseParser.OPA);
                            this.state = 1004;
                            this.s_and_w();
                            this.state = 1005;
                            _la = this._input.LA(1);
                            if (!(_la === truefalseParser.COLON || _la === truefalseParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1006;
                            this.s_and_w();
                            this.state = 1012;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 1010;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1007;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1008;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1009;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 1014;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1015;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case truefalseParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1017;
                            this.match(truefalseParser.OpAtCopyright);
                            this.state = 1021;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1018;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1023;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                            }
                            this.state = 1024;
                            this.match(truefalseParser.CL);
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
            this.enterRule(_localctx, 148, truefalseParser.RULE_dollarans);
            let _la;
            try {
                this.state = 1046;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1027;
                            this.match(truefalseParser.OPDOLL);
                            this.state = 1031;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1031;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1028;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1029;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1030;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1033;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                            this.state = 1035;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1036;
                            this.match(truefalseParser.OPDOLL);
                            this.state = 1042;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.NL - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                                {
                                    this.state = 1040;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1037;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1038;
                                                this.match(truefalseParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1039;
                                                this.match(truefalseParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1044;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1045;
                            this.match(truefalseParser.EOF);
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
            this.enterRule(_localctx, 150, truefalseParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1048;
                    this.match(truefalseParser.OPDANGLE);
                    this.state = 1050;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL) {
                        {
                            this.state = 1049;
                            this.s_and_w();
                        }
                    }
                    this.state = 1052;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 152, truefalseParser.RULE_lines);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1058;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1054;
                                this.s_and_w();
                                this.state = 1056;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === truefalseParser.NL) {
                                    {
                                        this.state = 1055;
                                        this.match(truefalseParser.NL);
                                    }
                                }
                            }
                        }
                        this.state = 1060;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << truefalseParser.S) | (1 << truefalseParser.OPS) | (1 << truefalseParser.COLON) | (1 << truefalseParser.AMP) | (1 << truefalseParser.DBLCOLON) | (1 << truefalseParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (truefalseParser.Less - 32)) | (1 << (truefalseParser.DBLEQ - 32)) | (1 << (truefalseParser.RightAngle - 32)) | (1 << (truefalseParser.RightArrow - 32)) | (1 << (truefalseParser.NUMERIC - 32)) | (1 << (truefalseParser.STRING - 32)) | (1 << (truefalseParser.SENTENCE - 32)))) !== 0) || _la === truefalseParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 154, truefalseParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1108;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1062;
                            this.match(truefalseParser.STRING);
                            this.state = 1069;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1064;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1063;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 1066;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === truefalseParser.S);
                                        this.state = 1068;
                                        this.match(truefalseParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1071;
                            this.words();
                            this.state = 1078;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1073;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1072;
                                                    this.match(truefalseParser.S);
                                                }
                                            }
                                            this.state = 1075;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === truefalseParser.S);
                                        this.state = 1077;
                                        this.match(truefalseParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1080;
                            this.match(truefalseParser.OPS);
                            this.state = 1081;
                            this.s_and_w();
                            this.state = 1082;
                            this.match(truefalseParser.CL);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1084;
                            this.match(truefalseParser.NUMERIC);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1088;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === truefalseParser.S) {
                                {
                                    {
                                        this.state = 1085;
                                        this.match(truefalseParser.S);
                                    }
                                }
                                this.state = 1090;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1091;
                            this.match(truefalseParser.COLON);
                            this.state = 1095;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1092;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                }
                                this.state = 1097;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                            }
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1098;
                            this.match(truefalseParser.AMP);
                            this.state = 1102;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1099;
                                            this.match(truefalseParser.S);
                                        }
                                    }
                                }
                                this.state = 1104;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1105;
                            this.match(truefalseParser.DBLCOLON);
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1106;
                            this.match(truefalseParser.DBLEQ);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1107;
                            this.match(truefalseParser.URL);
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
            this.enterRule(_localctx, 156, truefalseParser.RULE_dclines);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1110;
                    this.match(truefalseParser.DCANY);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 158, truefalseParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1112;
                    this.match(truefalseParser.OPESC);
                    this.state = 1113;
                    this.s_and_w();
                    this.state = 1114;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 160, truefalseParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1116;
                    this.match(truefalseParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 162, truefalseParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1118;
                    _la = this._input.LA(1);
                    if (!(_la === truefalseParser.SSPL || _la === truefalseParser.SSPL2)) {
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
            this.enterRule(_localctx, 164, truefalseParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1128;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1128;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case truefalseParser.SENTENCE:
                                            {
                                                this.state = 1120;
                                                this.match(truefalseParser.SENTENCE);
                                            }
                                            break;
                                        case truefalseParser.AMP:
                                            {
                                                this.state = 1121;
                                                this.match(truefalseParser.AMP);
                                            }
                                            break;
                                        case truefalseParser.Greater:
                                            {
                                                this.state = 1122;
                                                this.match(truefalseParser.Greater);
                                                this.state = 1123;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === truefalseParser.Greater)) {
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
                                        case truefalseParser.Less:
                                            {
                                                this.state = 1124;
                                                this.match(truefalseParser.Less);
                                                this.state = 1125;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === truefalseParser.Less)) {
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
                                        case truefalseParser.RightArrow:
                                            {
                                                this.state = 1126;
                                                this.match(truefalseParser.RightArrow);
                                            }
                                            break;
                                        case truefalseParser.RightAngle:
                                            {
                                                this.state = 1127;
                                                this.match(truefalseParser.RightAngle);
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
                        this.state = 1130;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
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
            this.enterRule(_localctx, 166, truefalseParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1132;
                    this.match(truefalseParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
            if (!truefalseParser.__ATN) {
                truefalseParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(truefalseParser._serializedATN));
            }
            return truefalseParser.__ATN;
        }
    }
    truefalseParser.OPDOT = 1;
    truefalseParser.S = 2;
    truefalseParser.BitTruefalse1 = 3;
    truefalseParser.BitTruefalse = 4;
    truefalseParser.COMMENT = 5;
    truefalseParser.Image_type = 6;
    truefalseParser.Audio_type = 7;
    truefalseParser.Video_type = 8;
    truefalseParser.OPDOLL = 9;
    truefalseParser.OPBUL = 10;
    truefalseParser.OPESC = 11;
    truefalseParser.OPRANGLES = 12;
    truefalseParser.OPRANGLEL = 13;
    truefalseParser.OPDANGLE = 14;
    truefalseParser.OPU = 15;
    truefalseParser.OPB = 16;
    truefalseParser.OPQ = 17;
    truefalseParser.OPA = 18;
    truefalseParser.OPP = 19;
    truefalseParser.OPM = 20;
    truefalseParser.OPS = 21;
    truefalseParser.OPR = 22;
    truefalseParser.OPC = 23;
    truefalseParser.OPHASH = 24;
    truefalseParser.CL = 25;
    truefalseParser.COLON = 26;
    truefalseParser.AMP = 27;
    truefalseParser.DBLCOLON = 28;
    truefalseParser.PLUS = 29;
    truefalseParser.DotAt = 30;
    truefalseParser.Greater = 31;
    truefalseParser.Less = 32;
    truefalseParser.DBLEQ = 33;
    truefalseParser.RightAngle = 34;
    truefalseParser.RightArrow = 35;
    truefalseParser.HSPL = 36;
    truefalseParser.HSPL2 = 37;
    truefalseParser.SSPL = 38;
    truefalseParser.SSPL2 = 39;
    truefalseParser.DCANY = 40;
    truefalseParser.ArticleText = 41;
    truefalseParser.NOTCL = 42;
    truefalseParser.NUMERIC = 43;
    truefalseParser.STRING = 44;
    truefalseParser.NL = 45;
    truefalseParser.SENTENCE = 46;
    truefalseParser.OPAT = 47;
    truefalseParser.AtProgress = 48;
    truefalseParser.AtReference = 49;
    truefalseParser.AtWidth = 50;
    truefalseParser.AtHeight = 51;
    truefalseParser.AtProgressPoints = 52;
    truefalseParser.AtShortanswer = 53;
    truefalseParser.AtLonganswer = 54;
    truefalseParser.AtExampleWithStr = 55;
    truefalseParser.AtExamplecol = 56;
    truefalseParser.AtExamplecl = 57;
    truefalseParser.AtPartialAnswerS = 58;
    truefalseParser.AtPartialAnswer = 59;
    truefalseParser.AtLabeltrue = 60;
    truefalseParser.AtLabelfalse = 61;
    truefalseParser.AtPoints = 62;
    truefalseParser.AtSrc = 63;
    truefalseParser.OPATALT = 64;
    truefalseParser.OPAMARK = 65;
    truefalseParser.ShowInIndex = 66;
    truefalseParser.OpAtCaption = 67;
    truefalseParser.OpAtLicense = 68;
    truefalseParser.OpAtCopyright = 69;
    truefalseParser.OpAtIsTracked = 70;
    truefalseParser.OpAtIsInfoOnly = 71;
    truefalseParser.AtDate = 72;
    truefalseParser.Http = 73;
    truefalseParser.Https = 74;
    truefalseParser.AmpAudio = 75;
    truefalseParser.AmpImage = 76;
    truefalseParser.AmpImageZoom = 77;
    truefalseParser.AmpImageWAudio = 78;
    truefalseParser.AmpVideo = 79;
    truefalseParser.AmpArticle = 80;
    truefalseParser.AmpDocument = 81;
    truefalseParser.AmpApp = 82;
    truefalseParser.AmpWebsite = 83;
    truefalseParser.AmpStillImageFilm = 84;
    truefalseParser.AmpPdf = 85;
    truefalseParser.OpAmpAudio = 86;
    truefalseParser.OpAmpImage = 87;
    truefalseParser.OpAmpImageZoom = 88;
    truefalseParser.OpAmpImageWAudio = 89;
    truefalseParser.OpAmpVideo = 90;
    truefalseParser.OpAmpArticle = 91;
    truefalseParser.OpAmpArticleAtt = 92;
    truefalseParser.OpAmpDocument = 93;
    truefalseParser.OpAmpApp = 94;
    truefalseParser.OpAmpWebsite = 95;
    truefalseParser.OpAmpStillImageFilm = 96;
    truefalseParser.BracEnclose = 97;
    truefalseParser.AmpAudioLink = 98;
    truefalseParser.AmpImageLink = 99;
    truefalseParser.AmpVideoLink = 100;
    truefalseParser.AmpArticleLink = 101;
    truefalseParser.AmpDocumentLink = 102;
    truefalseParser.AmpAppLink = 103;
    truefalseParser.AmpWebsiteLink = 104;
    truefalseParser.AmpStillImageFilmLink = 105;
    truefalseParser.OpAmpAudioLink = 106;
    truefalseParser.OpAmpImageLink = 107;
    truefalseParser.OpAmpVideoLink = 108;
    truefalseParser.OpAmpArticleLink = 109;
    truefalseParser.OpAmpDocumentLink = 110;
    truefalseParser.OpAmpAppLink = 111;
    truefalseParser.OpAmpWebsiteLink = 112;
    truefalseParser.OpAmpStillImageFilmLink = 113;
    truefalseParser.BitmarkMinus = 114;
    truefalseParser.BitmarkPlus = 115;
    truefalseParser.ColonText = 116;
    truefalseParser.BASIC = 117;
    truefalseParser.JPG = 118;
    truefalseParser.PNG = 119;
    truefalseParser.GIF = 120;
    truefalseParser.SVG = 121;
    truefalseParser.MP2 = 122;
    truefalseParser.MP3 = 123;
    truefalseParser.MP4 = 124;
    truefalseParser.FLV = 125;
    truefalseParser.WMV = 126;
    truefalseParser.MPEG = 127;
    truefalseParser.MPG = 128;
    truefalseParser.TEL = 129;
    truefalseParser.DotArticleAtt = 130;
    truefalseParser.STAR = 131;
    truefalseParser.URL = 132;
    truefalseParser.LIST_LINE = 133;
    truefalseParser.RULE_bitmark = 0;
    truefalseParser.RULE_bitmark_ = 1;
    truefalseParser.RULE_truefalses = 2;
    truefalseParser.RULE_true_false_1 = 3;
    truefalseParser.RULE_true_false = 4;
    truefalseParser.RULE_mcrsep = 5;
    truefalseParser.RULE_mcrsep_end = 6;
    truefalseParser.RULE_tfmisc = 7;
    truefalseParser.RULE_choices = 8;
    truefalseParser.RULE_cplus = 9;
    truefalseParser.RULE_cminus = 10;
    truefalseParser.RULE_choice_plus = 11;
    truefalseParser.RULE_choice_minus = 12;
    truefalseParser.RULE_choice_star = 13;
    truefalseParser.RULE_bitElem = 14;
    truefalseParser.RULE_resource = 15;
    truefalseParser.RULE_gap = 16;
    truefalseParser.RULE_single_gap = 17;
    truefalseParser.RULE_bullet_item = 18;
    truefalseParser.RULE_atpoint = 19;
    truefalseParser.RULE_format = 20;
    truefalseParser.RULE_resource_format = 21;
    truefalseParser.RULE_resource_format_extra = 22;
    truefalseParser.RULE_image_format = 23;
    truefalseParser.RULE_video_format = 24;
    truefalseParser.RULE_article_format = 25;
    truefalseParser.RULE_document_format = 26;
    truefalseParser.RULE_app_format = 27;
    truefalseParser.RULE_website_format = 28;
    truefalseParser.RULE_stillimagefilm_format = 29;
    truefalseParser.RULE_op_article_format = 30;
    truefalseParser.RULE_op_document_format = 31;
    truefalseParser.RULE_op_app_format = 32;
    truefalseParser.RULE_op_website_format = 33;
    truefalseParser.RULE_op_video_format = 34;
    truefalseParser.RULE_op_stillimagefilm_format = 35;
    truefalseParser.RULE_articlebit = 36;
    truefalseParser.RULE_documentbit = 37;
    truefalseParser.RULE_websitebit = 38;
    truefalseParser.RULE_appbit = 39;
    truefalseParser.RULE_stillimagefilmbit = 40;
    truefalseParser.RULE_stillimg_one = 41;
    truefalseParser.RULE_videobit = 42;
    truefalseParser.RULE_video_one = 43;
    truefalseParser.RULE_imagebit = 44;
    truefalseParser.RULE_image_one = 45;
    truefalseParser.RULE_op_image_format = 46;
    truefalseParser.RULE_image_chained = 47;
    truefalseParser.RULE_image_chained4match = 48;
    truefalseParser.RULE_audiobit = 49;
    truefalseParser.RULE_audio_one = 50;
    truefalseParser.RULE_audio_format = 51;
    truefalseParser.RULE_op_audio_format = 52;
    truefalseParser.RULE_resource_chained = 53;
    truefalseParser.RULE_telephone = 54;
    truefalseParser.RULE_url = 55;
    truefalseParser.RULE_item = 56;
    truefalseParser.RULE_lead = 57;
    truefalseParser.RULE_angleref = 58;
    truefalseParser.RULE_example = 59;
    truefalseParser.RULE_bracketed_text = 60;
    truefalseParser.RULE_reference = 61;
    truefalseParser.RULE_progress = 62;
    truefalseParser.RULE_dateprop = 63;
    truefalseParser.RULE_dateprop_chained = 64;
    truefalseParser.RULE_instruction = 65;
    truefalseParser.RULE_hint = 66;
    truefalseParser.RULE_title = 67;
    truefalseParser.RULE_bool_label = 68;
    truefalseParser.RULE_progress_points = 69;
    truefalseParser.RULE_istracked = 70;
    truefalseParser.RULE_isinfoonly = 71;
    truefalseParser.RULE_atdef = 72;
    truefalseParser.RULE_atdef_ = 73;
    truefalseParser.RULE_dollarans = 74;
    truefalseParser.RULE_anchor = 75;
    truefalseParser.RULE_lines = 76;
    truefalseParser.RULE_s_and_w = 77;
    truefalseParser.RULE_dclines = 78;
    truefalseParser.RULE_bracket_escaped = 79;
    truefalseParser.RULE_clnsp = 80;
    truefalseParser.RULE_sspl = 81;
    truefalseParser.RULE_words = 82;
    truefalseParser.RULE_sp = 83;
    // tslint:disable:no-trailing-whitespace
    truefalseParser.ruleNames = [
        "bitmark", "bitmark_", "truefalses", "true_false_1", "true_false", "mcrsep",
        "mcrsep_end", "tfmisc", "choices", "cplus", "cminus", "choice_plus", "choice_minus",
        "choice_star", "bitElem", "resource", "gap", "single_gap", "bullet_item",
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
        "dclines", "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    truefalseParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[^'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'",
        "'+'", "'.@'", "'>'", "'<'", "'=='", "'\u25BA'", "'\u2192'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'[@'", undefined, undefined, undefined,
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
        undefined, "':bitmark--'", "':bitmark++'", "':text'", "':basic'", "':jpg'",
        "':png'", "':gif'", "':svg'", "':mp2'", "':mp3'", "':mp4'", "':flv'",
        "':wmv'", "':mpeg'", "':mpg'", "'tel:'", "'.article-attachment'", "'*'",
    ];
    truefalseParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitTruefalse1", "BitTruefalse", "COMMENT", "Image_type",
        "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC", "OPRANGLES", "OPRANGLEL",
        "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP", "OPM", "OPS", "OPR", "OPC",
        "OPHASH", "CL", "COLON", "AMP", "DBLCOLON", "PLUS", "DotAt", "Greater",
        "Less", "DBLEQ", "RightAngle", "RightArrow", "HSPL", "HSPL2", "SSPL",
        "SSPL2", "DCANY", "ArticleText", "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE",
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
        "ColonText", "BASIC", "JPG", "PNG", "GIF", "SVG", "MP2", "MP3", "MP4",
        "FLV", "WMV", "MPEG", "MPG", "TEL", "DotArticleAtt", "STAR", "URL", "LIST_LINE",
    ];
    truefalseParser.VOCABULARY = new VocabularyImpl(truefalseParser._LITERAL_NAMES, truefalseParser._SYMBOLIC_NAMES, []);
    truefalseParser._serializedATNSegments = 3;
    truefalseParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x87\u0471\x04" +
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
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x03\x02\x03\x02\x07" +
        "\x02\xAD\n\x02\f\x02\x0E\x02\xB0\v\x02\x03\x02\x07\x02\xB3\n\x02\f\x02" +
        "\x0E\x02\xB6\v\x02\x06\x02\xB8\n\x02\r\x02\x0E\x02\xB9\x03\x02\x07\x02" +
        "\xBD\n\x02\f\x02\x0E\x02\xC0\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
        "\x04\x03\x04\x05\x04\xC8\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05" +
        "\xCE\n\x05\r\x05\x0E\x05\xCF\x03\x05\x03\x05\x07\x05\xD4\n\x05\f\x05\x0E" +
        "\x05\xD7\v\x05\x07\x05\xD9\n\x05\f\x05\x0E\x05\xDC\v\x05\x03\x05\x03\x05" +
        "\x07\x05\xE0\n\x05\f\x05\x0E\x05\xE3\v\x05\x03\x05\x03\x05\x07\x05\xE7" +
        "\n\x05\f\x05\x0E\x05\xEA\v\x05\x03\x05\x07\x05\xED\n\x05\f\x05\x0E\x05" +
        "\xF0\v\x05\x05\x05\xF2\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xF8" +
        "\n\x06\f\x06\x0E\x06\xFB\v\x06\x03\x06\x03\x06\x07\x06\xFF\n\x06\f\x06" +
        "\x0E\x06\u0102\v\x06\x07\x06\u0104\n\x06\f\x06\x0E\x06\u0107\v\x06\x03" +
        "\x06\x05\x06\u010A\n\x06\x03\x06\x07\x06\u010D\n\x06\f\x06\x0E\x06\u0110" +
        "\v\x06\x03\x06\x06\x06\u0113\n\x06\r\x06\x0E\x06\u0114\x03\x06\x03\x06" +
        "\x07\x06\u0119\n\x06\f\x06\x0E\x06\u011C\v\x06\x03\x06\x03\x06\x07\x06" +
        "\u0120\n\x06\f\x06\x0E\x06\u0123\v\x06\x03\x06\x07\x06\u0126\n\x06\f\x06" +
        "\x0E\x06\u0129\v\x06\x05\x06\u012B\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
        "\t\x03\t\x07\t\u0133\n\t\f\t\x0E\t\u0136\v\t\x03\n\x03\n\x05\n\u013A\n" +
        "\n\x03\n\x05\n\u013D\n\n\x03\n\x07\n\u0140\n\n\f\n\x0E\n\u0143\v\n\x03" +
        "\n\x03\n\x05\n\u0147\n\n\x07\n\u0149\n\n\f\n\x0E\n\u014C\v\n\x03\v\x03" +
        "\v\x05\v\u0150\n\v\x03\f\x03\f\x05\f\u0154\n\f\x03\r\x05\r\u0157\n\r\x03" +
        "\r\x03\r\x03\r\x06\r\u015C\n\r\r\r\x0E\r\u015D\x03\r\x03\r\x03\x0E\x05" +
        "\x0E\u0163\n\x0E\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u0168\n\x0E\r\x0E\x0E" +
        "\x0E\u0169\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u016F\n\x0F\x03\x0F\x03\x0F" +
        "\x03\x0F\x06\x0F\u0174\n\x0F\r\x0F\x0E\x0F\u0175\x03\x0F\x03\x0F\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0191\n\x10\x03\x11\x03\x11\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u019B\n\x12\f\x12" +
        "\x0E\x12\u019E\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01A4\n\x13" +
        "\x03\x13\x07\x13\u01A7\n\x13\f\x13\x0E\x13\u01AA\v\x13\x03\x13\x03\x13" +
        "\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01B2\n\x14\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x16\x07\x16\u01B9\n\x16\f\x16\x0E\x16\u01BC\v\x16\x03" +
        "\x16\x03\x16\x07\x16\u01C0\n\x16\f\x16\x0E\x16\u01C3\v\x16\x03\x17\x03" +
        "\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x05\x18\u01D0\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u01D5\n\x19\x03" +
        "\x19\x03\x19\x05\x19\u01D9\n\x19\x03\x19\x03\x19\x05\x19\u01DD\n\x19\x03" +
        "\x19\x05\x19\u01E0\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01E5\n\x1A\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03" +
        "\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x05$\u01FC" +
        "\n$\x03$\x03$\x03$\x05$\u0201\n$\x05$\u0203\n$\x03%\x03%\x03&\x03&\x03" +
        "&\x03&\x03&\x03&\x05&\u020D\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x05\'\u0217\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(" +
        "\u0221\n(\x03)\x03)\x03)\x03)\x05)\u0227\n)\x03)\x03)\x03)\x03)\x03)\x05" +
        ")\u022E\n)\x03*\x03*\x07*\u0232\n*\f*\x0E*\u0235\v*\x03+\x03+\x03+\x07" +
        "+\u023A\n+\f+\x0E+\u023D\v+\x03+\x03+\x03+\x03,\x03,\x07,\u0244\n,\f," +
        "\x0E,\u0247\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0251\n-\x03" +
        ".\x03.\x07.\u0255\n.\f.\x0E.\u0258\v.\x03.\x03.\x05.\u025C\n.\x03/\x03" +
        "/\x03/\x07/\u0261\n/\f/\x0E/\u0264\v/\x03/\x03/\x03/\x030\x030\x030\x05" +
        "0\u026C\n0\x030\x030\x050\u0270\n0\x030\x030\x050\u0274\n0\x030\x050\u0277" +
        "\n0\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x071\u0284" +
        "\n1\f1\x0E1\u0287\v1\x031\x051\u028A\n1\x032\x032\x032\x032\x032\x032" +
        "\x032\x032\x032\x032\x032\x072\u0297\n2\f2\x0E2\u029A\v2\x032\x052\u029D" +
        "\n2\x033\x033\x073\u02A1\n3\f3\x0E3\u02A4\v3\x034\x034\x034\x034\x034" +
        "\x034\x034\x034\x054\u02AE\n4\x035\x035\x035\x055\u02B3\n5\x035\x035\x03" +
        "5\x055\u02B8\n5\x055\u02BA\n5\x036\x036\x036\x056\u02BF\n6\x036\x036\x03" +
        "6\x056\u02C4\n6\x056\u02C6\n6\x037\x037\x037\x057\u02CB\n7\x037\x037\x07" +
        "7\u02CF\n7\f7\x0E7\u02D2\v7\x037\x037\x067\u02D6\n7\r7\x0E7\u02D7\x03" +
        "7\x037\x037\x037\x037\x037\x037\x077\u02E1\n7\f7\x0E7\u02E4\v7\x037\x05" +
        "7\u02E7\n7\x038\x038\x038\x038\x039\x039\x03:\x03:\x03:\x07:\u02F2\n:" +
        "\f:\x0E:\u02F5\v:\x03:\x05:\u02F8\n:\x03:\x03:\x03:\x03:\x07:\u02FE\n" +
        ":\f:\x0E:\u0301\v:\x03:\x03:\x07:\u0305\n:\f:\x0E:\u0308\v:\x03:\x05:" +
        "\u030B\n:\x05:\u030D\n:\x03;\x03;\x03;\x03;\x07;\u0313\n;\f;\x0E;\u0316" +
        "\v;\x03;\x03;\x03<\x03<\x05<\u031C\n<\x03<\x03<\x03<\x05<\u0321\n<\x03" +
        "<\x05<\u0324\n<\x03=\x03=\x03=\x03=\x05=\u032A\n=\x03=\x05=\u032D\n=\x03" +
        ">\x03>\x05>\u0331\n>\x03>\x03>\x03>\x07>\u0336\n>\f>\x0E>\u0339\v>\x07" +
        ">\u033B\n>\f>\x0E>\u033E\v>\x03>\x07>\u0341\n>\f>\x0E>\u0344\v>\x07>\u0346" +
        "\n>\f>\x0E>\u0349\v>\x03>\x03>\x03>\x03>\x03>\x07>\u0350\n>\f>\x0E>\u0353" +
        "\v>\x03>\x05>\u0356\n>\x03?\x03?\x03?\x03?\x03?\x06?\u035D\n?\r?\x0E?" +
        "\u035E\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u0368\n?\f?\x0E?\u036B" +
        "\v?\x03?\x05?\u036E\n?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x06A\u0378" +
        "\nA\rA\x0EA\u0379\x03A\x03A\x05A\u037E\nA\x03B\x03B\x03B\x03B\x06B\u0384" +
        "\nB\rB\x0EB\u0385\x03B\x03B\x03C\x03C\x05C\u038C\nC\x03C\x03C\x03C\x07" +
        "C\u0391\nC\fC\x0EC\u0394\vC\x07C\u0396\nC\fC\x0EC\u0399\vC\x03C\x07C\u039C" +
        "\nC\fC\x0EC\u039F\vC\x07C\u03A1\nC\fC\x0EC\u03A4\vC\x03C\x03C\x03C\x05" +
        "C\u03A9\nC\x03C\x05C\u03AC\nC\x03D\x03D\x06D\u03B0\nD\rD\x0ED\u03B1\x03" +
        "D\x03D\x03E\x03E\x03E\x06E\u03B9\nE\rE\x0EE\u03BA\x03E\x03E\x03E\x03E" +
        "\x03E\x05E\u03C2\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u03CC" +
        "\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03D7\nG\x03H\x03" +
        "H\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x07J\u03E3\nJ\fJ\x0EJ\u03E6" +
        "\vJ\x03J\x07J\u03E9\nJ\fJ\x0EJ\u03EC\vJ\x03K\x03K\x03K\x03K\x03K\x03K" +
        "\x03K\x07K\u03F5\nK\fK\x0EK\u03F8\vK\x03K\x03K\x03K\x03K\x07K\u03FE\n" +
        "K\fK\x0EK\u0401\vK\x03K\x05K\u0404\nK\x03L\x03L\x03L\x03L\x06L\u040A\n" +
        "L\rL\x0EL\u040B\x03L\x03L\x03L\x03L\x03L\x07L\u0413\nL\fL\x0EL\u0416\v" +
        "L\x03L\x05L\u0419\nL\x03M\x03M\x05M\u041D\nM\x03M\x03M\x03N\x03N\x05N" +
        "\u0423\nN\x06N\u0425\nN\rN\x0EN\u0426\x03O\x03O\x06O\u042B\nO\rO\x0EO" +
        "\u042C\x03O\x05O\u0430\nO\x03O\x03O\x06O\u0434\nO\rO\x0EO\u0435\x03O\x05" +
        "O\u0439\nO\x03O\x03O\x03O\x03O\x03O\x03O\x07O\u0441\nO\fO\x0EO\u0444\v" +
        "O\x03O\x03O\x07O\u0448\nO\fO\x0EO\u044B\vO\x03O\x03O\x07O\u044F\nO\fO" +
        "\x0EO\u0452\vO\x03O\x03O\x03O\x05O\u0457\nO\x03P\x03P\x03Q\x03Q\x03Q\x03" +
        "Q\x03R\x03R\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x06T\u046B" +
        "\nT\rT\x0ET\u046C\x03U\x03U\x03U\x06\u0285\u0298\u02E2\u03FF\x02\x02V" +
        "\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
        "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
        "F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
        "b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
        "~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
        "\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
        "\xA2\x02\xA4\x02\xA6\x02\xA8\x02\x02\x16\x03\x02&\'\x06\x02RSUVdktu\x04" +
        "\x02QQff\x04\x02RRgg\x04\x02SShh\x04\x02TTii\x04\x02UUjj\x04\x02VVkk\x04" +
        "\x02]]oo\x04\x02__pp\x04\x02``qq\x04\x02aarr\x04\x02bbss\x03\x0245\x04" +
        "\x02BBEG\x03\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02()\x03\x02!!\x03" +
        "\x02\"\"\x02\u04FC\x02\xB7\x03\x02\x02\x02\x04\xC3\x03\x02\x02\x02\x06" +
        "\xC7\x03\x02\x02\x02\b\xC9\x03\x02\x02\x02\n\xF3\x03\x02\x02\x02\f\u012C" +
        "\x03\x02\x02\x02\x0E\u012E\x03\x02\x02\x02\x10\u0130\x03\x02\x02\x02\x12" +
        "\u0139\x03\x02\x02\x02\x14\u014D\x03\x02\x02\x02\x16\u0151\x03\x02\x02" +
        "\x02\x18\u0156\x03\x02\x02\x02\x1A\u0162\x03\x02\x02\x02\x1C\u016E\x03" +
        "\x02\x02\x02\x1E\u0190\x03\x02\x02\x02 \u0192\x03\x02\x02\x02\"\u0194" +
        "\x03\x02\x02\x02$\u019F\x03\x02\x02\x02&\u01AD\x03\x02\x02\x02(\u01B3" +
        "\x03\x02\x02\x02*\u01BA\x03\x02\x02\x02,\u01C4\x03\x02\x02\x02.\u01CF" +
        "\x03\x02\x02\x020\u01DF\x03\x02\x02\x022\u01E1\x03\x02\x02\x024\u01E6" +
        "\x03\x02\x02\x026\u01E8\x03\x02\x02\x028\u01EA\x03\x02\x02\x02:\u01EC" +
        "\x03\x02\x02\x02<\u01EE\x03\x02\x02\x02>\u01F0\x03\x02\x02\x02@\u01F2" +
        "\x03\x02\x02\x02B\u01F4\x03\x02\x02\x02D\u01F6\x03\x02\x02\x02F\u0202" +
        "\x03\x02\x02\x02H\u0204\x03\x02\x02\x02J\u020C\x03\x02\x02\x02L\u020E" +
        "\x03\x02\x02\x02N\u0218\x03\x02\x02\x02P\u0222\x03\x02\x02\x02R\u022F" +
        "\x03\x02\x02\x02T\u0236\x03\x02\x02\x02V\u0241\x03\x02\x02\x02X\u0248" +
        "\x03\x02\x02\x02Z\u0252\x03\x02\x02\x02\\\u025D\x03\x02\x02\x02^\u0276" +
        "\x03\x02\x02\x02`\u0289\x03\x02\x02\x02b\u029C\x03\x02\x02\x02d\u029E" +
        "\x03\x02\x02\x02f\u02A5\x03\x02\x02\x02h\u02B9\x03\x02\x02\x02j\u02C5" +
        "\x03\x02\x02\x02l\u02E6\x03\x02\x02\x02n\u02E8\x03\x02\x02\x02p\u02EC" +
        "\x03\x02\x02\x02r\u030C\x03\x02\x02\x02t\u030E\x03\x02\x02\x02v\u0323" +
        "\x03\x02\x02\x02x\u032C\x03\x02\x02\x02z\u0355\x03\x02\x02\x02|\u036D" +
        "\x03\x02\x02\x02~\u036F\x03\x02\x02\x02\x80\u0373\x03\x02\x02\x02\x82" +
        "\u037F\x03\x02\x02\x02\x84\u03AB\x03\x02\x02\x02\x86\u03AD\x03\x02\x02" +
        "\x02\x88\u03C1\x03\x02\x02\x02\x8A\u03CB\x03\x02\x02\x02\x8C\u03D6\x03" +
        "\x02\x02\x02\x8E\u03D8\x03\x02\x02\x02\x90\u03DC\x03\x02\x02\x02\x92\u03E0" +
        "\x03\x02\x02\x02\x94\u0403\x03\x02\x02\x02\x96\u0418\x03\x02\x02\x02\x98" +
        "\u041A\x03\x02\x02\x02\x9A\u0424\x03\x02\x02\x02\x9C\u0456\x03\x02\x02" +
        "\x02\x9E\u0458\x03\x02\x02\x02\xA0\u045A\x03\x02\x02\x02\xA2\u045E\x03" +
        "\x02\x02\x02\xA4\u0460\x03\x02\x02\x02\xA6\u046A\x03\x02\x02\x02\xA8\u046E" +
        "\x03\x02\x02\x02\xAA\xB4\x05\x04\x03\x02\xAB\xAD\x07\x04\x02\x02\xAC\xAB" +
        "\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF" +
        "\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB3" +
        "\x07/\x02\x02\xB2\xAE\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2" +
        "\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4" +
        "\x03\x02\x02\x02\xB7\xAA\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xB7" +
        "\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBE\x03\x02\x02\x02\xBB\xBD" +
        "\x07/\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC" +
        "\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE" +
        "\x03\x02\x02\x02\xC1\xC2\x07\x02\x02\x03\xC2\x03\x03\x02\x02\x02\xC3\xC4" +
        "\x05\x06\x04\x02\xC4\x05\x03\x02\x02\x02\xC5\xC8\x05\b\x05\x02\xC6\xC8" +
        "\x05\n\x06\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x07" +
        "\x03\x02\x02\x02\xC9\xCA\x07\x05\x02\x02\xCA\xCB\x05*\x16\x02\xCB\xCD" +
        "\x07\x1B\x02\x02\xCC\xCE\x07/\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF" +
        "\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xDA" +
        "\x03\x02\x02\x02\xD1\xD5\x05\x1E\x10\x02\xD2\xD4\x07/\x02\x02\xD3\xD2" +
        "\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6" +
        "\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD1" +
        "\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB" +
        "\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE1" +
        "\x05\x12\n\x02\xDE\xE0\x07/\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\xE3\x03" +
        "\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xF1\x03" +
        "\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xEE\x05 \x11\x02\xE5\xE7\x07" +
        "/\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
        "\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE8\x03" +
        "\x02\x02\x02\xEB\xED\x05 \x11\x02\xEC\xE8\x03\x02\x02\x02\xED\xF0\x03" +
        "\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF2\x03" +
        "\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xE4\x03\x02\x02\x02\xF1\xF2\x03" +
        "\x02\x02\x02\xF2\t\x03\x02\x02\x02\xF3\xF4\x07\x06\x02\x02\xF4\xF5\x05" +
        "*\x16\x02\xF5\xF9\x07\x1B\x02\x02\xF6\xF8\x07/\x02\x02\xF7\xF6\x03\x02" +
        "\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02" +
        "\x02\x02\xFA\u0105\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\u0100\x05" +
        "\x1E\x10\x02\xFD\xFF\x07/\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03" +
        "\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
        "\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\xFC\x03\x02\x02" +
        "\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106" +
        "\x03\x02\x02\x02\u0106\u0112\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02" +
        "\u0108\u010A\x05\f\x07\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03" +
        "\x02\x02\x02\u010A\u010E\x03\x02\x02\x02\u010B\u010D\x05\x10\t\x02\u010C" +
        "\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02" +
        "\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110" +
        "\u010E\x03\x02\x02\x02\u0111\u0113\x05\x12\n\x02\u0112\u0109\x03\x02\x02" +
        "\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115" +
        "\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u011A\x05\x0E\b\x02" +
        "\u0117\u0119\x07/\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C\x03" +
        "\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
        "\u012A\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0127\x05 \x11" +
        "\x02\u011E\u0120\x07/\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123" +
        "\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02" +
        "\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0126\x05" +
        " \x11\x02\u0125\u0121\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127" +
        "\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012B\x03\x02" +
        "\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u011D\x03\x02\x02\x02\u012A" +
        "\u012B\x03\x02\x02\x02\u012B\v\x03\x02\x02\x02\u012C\u012D\t\x02\x02\x02" +
        "\u012D\r\x03\x02\x02\x02\u012E\u012F\t\x02\x02\x02\u012F\x0F\x03\x02\x02" +
        "\x02\u0130\u0134\x05\x1E\x10\x02\u0131\u0133\x07/\x02\x02\u0132\u0131" +
        "\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02" +
        "\u0134\u0135\x03\x02\x02\x02\u0135\x11\x03\x02\x02\x02\u0136\u0134\x03" +
        "\x02\x02\x02\u0137\u013A\x05\x14\v\x02\u0138\u013A\x05\x16\f\x02\u0139" +
        "\u0137\x03\x02\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\u014A\x03\x02" +
        "\x02\x02\u013B\u013D\x07/\x02\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D" +
        "\x03\x02\x02\x02\u013D\u0141\x03\x02\x02\x02\u013E\u0140\x07\x04\x02\x02" +
        "\u013F\u013E\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03" +
        "\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0146\x03\x02\x02\x02\u0143" +
        "\u0141\x03\x02\x02\x02\u0144\u0147\x05\x14\v\x02\u0145\u0147\x05\x16\f" +
        "\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u0149" +
        "\x03\x02\x02\x02\u0148\u013C\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02" +
        "\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\x13\x03" +
        "\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u014F\x05\x18\r\x02\u014E" +
        "\u0150\x05x=\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02" +
        "\u0150\x15\x03\x02\x02\x02\u0151\u0153\x05\x1A\x0E\x02\u0152\u0154\x05" +
        "x=\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\x17" +
        "\x03\x02\x02\x02\u0155\u0157\x05r:\x02\u0156\u0155\x03\x02\x02\x02\u0156" +
        "\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015B\x07\x15" +
        "\x02\x02\u0159\u015C\x05\x9CO\x02\u015A\u015C\x07/\x02\x02\u015B\u0159" +
        "\x03\x02\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
        "\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x03" +
        "\x02\x02\x02\u015F\u0160\x07\x1B\x02\x02\u0160\x19\x03\x02\x02\x02\u0161" +
        "\u0163\x05r:\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
        "\u0163\u0164\x03\x02\x02\x02\u0164\u0167\x07\x16\x02\x02\u0165\u0168\x05" +
        "\x9CO\x02\u0166\u0168\x07/\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166" +
        "\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02" +
        "\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x07" +
        "\x1B\x02\x02\u016C\x1B\x03\x02\x02\x02\u016D\u016F\x05r:\x02\u016E\u016D" +
        "\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
        "\u0170\u0173\x07\x18\x02\x02\u0171\u0174\x05\x9CO\x02\u0172\u0174\x07" +
        "/\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174" +
        "\u0175\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02" +
        "\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x07\x1B\x02\x02\u0178" +
        "\x1D\x03\x02\x02\x02\u0179\u0191\x07\x87\x02\x02\u017A\u0191\x05\x9EP" +
        "\x02\u017B\u0191\x05\"\x12\x02\u017C\u0191\x05\x92J\x02\u017D\u0191\x05" +
        "|?\x02\u017E\u0191\x05r:\x02\u017F\u0191\x05\x88E\x02\u0180\u0191\x05" +
        "\x84C\x02\u0181\u0191\x05\x86D\x02\u0182\u0191\x05\x9CO\x02\u0183\u0191" +
        "\x05x=\x02\u0184\u0191\x05\x8AF\x02\u0185\u0191\x05Z.\x02\u0186\u0191" +
        "\x05d3\x02\u0187\u0191\x05V,\x02\u0188\u0191\x05J&\x02\u0189\u0191\x05" +
        "L\'\x02\u018A\u0191\x05P)\x02\u018B\u0191\x05N(\x02\u018C\u0191\x05R*" +
        "\x02\u018D\u0191\x05v<\x02\u018E\u0191\x05\x98M\x02\u018F\u0191\x05\xA8" +
        "U\x02\u0190\u0179\x03\x02\x02\x02\u0190\u017A\x03\x02\x02\x02\u0190\u017B" +
        "\x03\x02\x02\x02\u0190\u017C\x03\x02\x02\x02\u0190\u017D\x03\x02\x02\x02" +
        "\u0190\u017E\x03\x02\x02\x02\u0190\u017F\x03\x02\x02\x02\u0190\u0180\x03" +
        "\x02\x02\x02\u0190\u0181\x03\x02\x02\x02\u0190\u0182\x03\x02\x02\x02\u0190" +
        "\u0183\x03\x02\x02\x02\u0190\u0184\x03\x02\x02\x02\u0190\u0185\x03\x02" +
        "\x02\x02\u0190\u0186\x03\x02\x02\x02\u0190\u0187\x03\x02\x02\x02\u0190" +
        "\u0188\x03\x02\x02";
    truefalseParser._serializedATNSegment1 = "\x02\u0190\u0189\x03\x02\x02\x02\u0190\u018A\x03\x02\x02\x02\u0190\u018B" +
        "\x03\x02\x02\x02\u0190\u018C\x03\x02\x02\x02\u0190\u018D\x03\x02\x02\x02" +
        "\u0190\u018E\x03\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\x1F\x03" +
        "\x02\x02\x02\u0192\u0193\x05\x1E\x10\x02\u0193!\x03\x02\x02\x02\u0194" +
        "\u019C\x05$\x13\x02\u0195\u019B\x05$\x13\x02\u0196\u019B\x05\x84C\x02" +
        "\u0197\u019B\x05\x86D\x02\u0198\u019B\x05r:\x02\u0199\u019B\x05x=\x02" +
        "\u019A\u0195\x03\x02\x02\x02\u019A\u0196\x03\x02\x02\x02\u019A\u0197\x03" +
        "\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019B" +
        "\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02" +
        "\x02\x02\u019D#\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A3" +
        "\x07\x11\x02\x02\u01A0\u01A4\x07-\x02\x02\u01A1\u01A4\x07.\x02\x02\u01A2" +
        "\u01A4\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A1\x03\x02" +
        "\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4\u01A8\x03\x02\x02\x02\u01A5" +
        "\u01A7\x05\x9CO\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02" +
        "\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB" +
        "\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AC\x05\xA2R\x02" +
        "\u01AC%\x03\x02\x02\x02\u01AD\u01AE\x07\f\x02\x02\u01AE\u01AF\x05\x9C" +
        "O\x02\u01AF\u01B1\x07\x1B\x02\x02\u01B0\u01B2\x05(\x15\x02\u01B1\u01B0" +
        "\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\'\x03\x02\x02\x02\u01B3" +
        "\u01B4\x07@\x02\x02\u01B4\u01B5\x07-\x02\x02\u01B5\u01B6\x07\x1B\x02\x02" +
        "\u01B6)\x03\x02\x02\x02\u01B7\u01B9\x05,\x17\x02\u01B8\u01B7\x03\x02\x02" +
        "\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB" +
        "\x03\x02\x02\x02\u01BB\u01C1\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02" +
        "\u01BD\u01C0\x07v\x02\x02\u01BE\u01C0\x05.\x18\x02\u01BF\u01BD\x03\x02" +
        "\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1" +
        "\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2+\x03\x02\x02" +
        "\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C5\t\x03\x02\x02\u01C5-\x03" +
        "\x02\x02\x02\u01C6\u01D0\x050\x19\x02\u01C7\u01D0\x05h5\x02\u01C8\u01D0" +
        "\x052\x1A\x02\u01C9\u01D0\x054\x1B\x02\u01CA\u01D0\x056\x1C\x02\u01CB" +
        "\u01D0\x058\x1D\x02\u01CC\u01D0\x05:\x1E\x02\u01CD\u01D0\x05<\x1F\x02" +
        "\u01CE\u01D0\x07W\x02\x02\u01CF\u01C6\x03\x02\x02\x02\u01CF\u01C7\x03" +
        "\x02\x02\x02\u01CF\u01C8\x03\x02\x02\x02\u01CF\u01C9\x03\x02\x02\x02\u01CF" +
        "\u01CA\x03\x02\x02\x02\u01CF\u01CB\x03\x02\x02\x02\u01CF\u01CC\x03\x02" +
        "\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0" +
        "/\x03\x02\x02\x02\u01D1\u01D4\x07N\x02\x02\u01D2\u01D5\x07\b\x02\x02\u01D3" +
        "\u01D5\x07\x84\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D3\x03\x02" +
        "\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01E0\x03\x02\x02\x02\u01D6" +
        "\u01D8\x07e\x02\x02\u01D7\u01D9\x07\b\x02\x02\u01D8\u01D7\x03\x02\x02" +
        "\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01E0\x03\x02\x02\x02\u01DA\u01DC" +
        "\x07O\x02\x02\u01DB\u01DD\x07\b\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC" +
        "\u01DD\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01E0\x07P\x02" +
        "\x02\u01DF\u01D1\x03\x02\x02\x02\u01DF\u01D6\x03\x02\x02\x02\u01DF\u01DA" +
        "\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E01\x03\x02\x02\x02\u01E1" +
        "\u01E4\t\x04\x02\x02\u01E2\u01E3\x07\x1C\x02\x02\u01E3\u01E5\x07\n\x02" +
        "\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E53\x03" +
        "\x02\x02\x02\u01E6\u01E7\t\x05\x02\x02\u01E75\x03\x02\x02\x02\u01E8\u01E9" +
        "\t\x06\x02\x02\u01E97\x03\x02\x02\x02\u01EA\u01EB\t\x07\x02\x02\u01EB" +
        "9\x03\x02\x02\x02\u01EC\u01ED\t\b\x02\x02\u01ED;\x03\x02\x02\x02\u01EE" +
        "\u01EF\t\t\x02\x02\u01EF=\x03\x02\x02\x02\u01F0\u01F1\t\n\x02\x02\u01F1" +
        "?\x03\x02\x02\x02\u01F2\u01F3\t\v\x02\x02\u01F3A\x03\x02\x02\x02\u01F4" +
        "\u01F5\t\f\x02\x02\u01F5C\x03\x02\x02\x02\u01F6\u01F7\t\r\x02\x02\u01F7" +
        "E\x03\x02\x02\x02\u01F8\u01FB\x07\\\x02\x02\u01F9\u01FA\x07\x1C\x02\x02" +
        "\u01FA\u01FC\x07\n\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03" +
        "\x02\x02\x02\u01FC\u0203\x03\x02\x02\x02\u01FD\u0200\x07n\x02\x02\u01FE" +
        "\u01FF\x07\x1C\x02\x02\u01FF\u0201\x07\n\x02\x02\u0200\u01FE\x03\x02\x02" +
        "\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203\x03\x02\x02\x02\u0202\u01F8" +
        "\x03\x02\x02\x02\u0202\u01FD\x03\x02\x02\x02\u0203G\x03\x02\x02\x02\u0204" +
        "\u0205\t\x0E\x02\x02\u0205I\x03\x02\x02\x02\u0206\u0207\x05> \x02\u0207" +
        "\u0208\x07\x1C\x02\x02\u0208\u0209\x05p9\x02\u0209\u020A\x07\x1B\x02\x02" +
        "\u020A\u020D\x03\x02\x02\x02\u020B\u020D\x07+\x02\x02\u020C\u0206\x03" +
        "\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020DK\x03\x02\x02\x02\u020E" +
        "\u020F\x05@!\x02\u020F\u0210\x07\x1C\x02\x02\u0210\u0211\x05p9\x02\u0211" +
        "\u0216\x07\x1B\x02\x02\u0212\u0213\x07B\x02\x02\u0213\u0214\x05\xA6T\x02" +
        "\u0214\u0215\x07\x1B\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216\u0212\x03" +
        "\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217M\x03\x02\x02\x02\u0218" +
        "\u0219\x05D#\x02\u0219\u021A\x07\x1C\x02\x02\u021A\u021B\x05p9\x02\u021B" +
        "\u0220\x07\x1B\x02\x02\u021C\u021D\x07B\x02\x02\u021D\u021E\x05\xA6T\x02" +
        "\u021E\u021F\x07\x1B\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u021C\x03" +
        "\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221O\x03\x02\x02\x02\u0222" +
        "\u0223\x05B\"\x02\u0223\u0226\x07\x1C\x02\x02\u0224\u0227\x05p9\x02\u0225" +
        "\u0227\x05n8\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02" +
        "\u0227\u0228\x03\x02\x02\x02\u0228\u022D\x07\x1B\x02\x02\u0229\u022A\x07" +
        "B\x02\x02\u022A\u022B\x05\xA6T\x02\u022B\u022C\x07\x1B\x02\x02\u022C\u022E" +
        "\x03\x02\x02\x02\u022D\u0229\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02" +
        "\u022EQ\x03\x02\x02\x02\u022F\u0233\x05T+\x02\u0230\u0232\x05l7\x02\u0231" +
        "\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02" +
        "\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234S\x03\x02\x02\x02\u0235\u0233" +
        "\x03\x02\x02\x02\u0236\u0237\x05H%\x02\u0237\u023B\x07\x1C\x02\x02\u0238" +
        "\u023A\x07\x04\x02\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02" +
        "\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C" +
        "\u023E\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u023F\x05p9\x02" +
        "\u023F\u0240\x07\x1B\x02\x02\u0240U\x03\x02\x02\x02\u0241\u0245\x05X-" +
        "\x02\u0242\u0244\x05l7\x02\u0243\u0242\x03\x02\x02\x02\u0244\u0247\x03" +
        "\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246" +
        "W\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u0249\x05F$\x02\u0249" +
        "\u024A\x07\x1C\x02\x02\u024A\u024B\x05p9\x02\u024B\u0250\x07\x1B\x02\x02" +
        "\u024C\u024D\x07B\x02\x02\u024D\u024E\x05\xA6T\x02\u024E\u024F\x07\x1B" +
        "\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u024C\x03\x02\x02\x02\u0250" +
        "\u0251\x03\x02\x02\x02\u0251Y\x03\x02\x02\x02\u0252\u0256\x05\\/\x02\u0253" +
        "\u0255\x05`1\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02" +
        "\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u025B\x03" +
        "\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u025A\x07/\x02\x02\u025A" +
        "\u025C\x07D\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02" +
        "\x02\u025C[\x03\x02\x02\x02\u025D\u025E\x05^0\x02\u025E\u0262\x07\x1C" +
        "\x02\x02\u025F\u0261\x07\x04\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261" +
        "\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02" +
        "\x02\x02\u0263\u0265\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265" +
        "\u0266\x05p9\x02\u0266\u0267\x07\x1B\x02\x02\u0267]\x03\x02\x02\x02\u0268" +
        "\u026B\x07Y\x02\x02\u0269\u026C\x07\b\x02\x02\u026A\u026C\x07\x84\x02" +
        "\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C" +
        "\x03\x02\x02\x02\u026C\u0277\x03\x02\x02\x02\u026D\u026F\x07m\x02\x02" +
        "\u026E\u0270\x07\b\x02\x02\u026F\u026E\x03\x02\x02\x02\u026F\u0270\x03" +
        "\x02\x02\x02\u0270\u0277\x03\x02\x02\x02\u0271\u0273\x07Z\x02\x02\u0272" +
        "\u0274\x07\b\x02\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02" +
        "\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0277\x07[\x02\x02\u0276\u0268" +
        "\x03\x02\x02\x02\u0276\u026D\x03\x02\x02\x02\u0276\u0271\x03\x02\x02\x02" +
        "\u0276\u0275\x03\x02\x02\x02\u0277_\x03\x02\x02\x02\u0278\u0279\x07A\x02" +
        "\x02\u0279\u027A\x07\x1C\x02\x02\u027A\u027B\x05p9\x02\u027B\u027C\x07" +
        "\x1B\x02\x02\u027C\u028A\x03\x02\x02\x02\u027D\u027E\t\x0F\x02\x02\u027E" +
        "\u027F\x07\x1C\x02\x02\u027F\u0280\x07-\x02\x02\u0280\u028A\x07\x1B\x02" +
        "\x02\u0281\u0285\t\x10\x02\x02\u0282\u0284\v\x02\x02\x02\u0283\u0282\x03" +
        "\x02\x02\x02\u0284\u0287\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0285" +
        "\u0283\x03\x02\x02\x02\u0286\u0288\x03\x02\x02\x02\u0287\u0285\x03\x02" +
        "\x02\x02\u0288\u028A\x07\x1B\x02\x02\u0289\u0278\x03\x02\x02\x02\u0289" +
        "\u027D\x03\x02\x02\x02\u0289\u0281\x03\x02\x02\x02\u028Aa\x03\x02\x02" +
        "\x02\u028B\u028C\x07A\x02\x02\u028C\u028D\x07\x1C\x02\x02\u028D\u028E" +
        "\x05p9\x02\u028E\u028F\x07\x1B\x02\x02\u028F\u029D\x03\x02\x02\x02\u0290" +
        "\u0291\t\x0F\x02\x02\u0291\u0292\x07\x1C\x02\x02\u0292\u0293\x07-\x02" +
        "\x02\u0293\u029D\x07\x1B\x02\x02\u0294\u0298\t\x10\x02\x02\u0295\u0297" +
        "\v\x02\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297\u029A\x03\x02\x02\x02" +
        "\u0298\u0299\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029B\x03" +
        "\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029D\x07\x1B\x02\x02\u029C" +
        "\u028B\x03\x02\x02\x02\u029C\u0290\x03\x02\x02\x02\u029C\u0294\x03\x02" +
        "\x02\x02\u029Dc\x03\x02\x02\x02\u029E\u02A2\x05f4\x02\u029F\u02A1\x05" +
        "l7\x02\u02A0\u029F\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0" +
        "\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3e\x03\x02\x02\x02\u02A4" +
        "\u02A2\x03\x02\x02\x02\u02A5\u02A6\x05j6\x02\u02A6\u02A7\x07\x1C\x02\x02" +
        "\u02A7\u02A8\x05p9\x02\u02A8\u02AD\x07\x1B\x02\x02\u02A9\u02AA\x07B\x02" +
        "\x02\u02AA\u02AB\x05\xA6T\x02\u02AB\u02AC\x07\x1B\x02\x02\u02AC\u02AE" +
        "\x03\x02\x02\x02\u02AD\u02A9\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02" +
        "\u02AEg\x03\x02\x02\x02\u02AF\u02B2\x07M\x02\x02\u02B0\u02B1\x07\x1C\x02" +
        "\x02\u02B1\u02B3\x07\t\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3" +
        "\x03\x02\x02\x02\u02B3\u02BA\x03\x02\x02\x02\u02B4\u02B7\x07d\x02\x02" +
        "\u02B5\u02B6\x07\x1C\x02\x02\u02B6\u02B8\x07\t\x02\x02\u02B7\u02B5\x03" +
        "\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9" +
        "\u02AF\x03\x02\x02\x02\u02B9\u02B4\x03\x02\x02\x02\u02BAi\x03\x02\x02" +
        "\x02\u02BB\u02BE\x07X\x02\x02\u02BC\u02BD\x07\x1C\x02\x02\u02BD\u02BF" +
        "\x07\t\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02" +
        "\u02BF\u02C6\x03\x02\x02\x02\u02C0\u02C3\x07l\x02\x02\u02C1\u02C2\x07" +
        "\x1C\x02\x02\u02C2\u02C4\x07\t\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3" +
        "\u02C4\x03\x02\x02\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5\u02BB\x03\x02" +
        "\x02\x02\u02C5\u02C0\x03\x02\x02\x02\u02C6k\x03\x02\x02\x02\u02C7\u02C8" +
        "\x07\x14\x02\x02\u02C8\u02CB\x05\x9CO\x02\u02C9\u02CB\x07A\x02\x02\u02CA" +
        "\u02C7\x03\x02\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02" +
        "\x02\x02\u02CC\u02D0\x07\x1C\x02\x02\u02CD\u02CF\x07\x04\x02\x02\u02CE" +
        "\u02CD\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02" +
        "\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D5\x03\x02\x02\x02\u02D2" +
        "\u02D0\x03\x02\x02\x02\u02D3\u02D6\x05\x9CO\x02\u02D4\u02D6\x07/\x02\x02" +
        "\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03" +
        "\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8" +
        "\u02D9\x03\x02\x02\x02\u02D9\u02E7\x07\x1B\x02\x02\u02DA\u02DB\t\x0F\x02" +
        "\x02\u02DB\u02DC\x07\x1C\x02\x02\u02DC\u02DD\x07-\x02\x02\u02DD\u02E7" +
        "\x07\x1B\x02\x02\u02DE\u02E2\t\x10\x02\x02\u02DF\u02E1\v\x02\x02\x02\u02E0" +
        "\u02DF\x03\x02\x02\x02\u02E1\u02E4\x03\x02\x02\x02\u02E2\u02E3\x03\x02" +
        "\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4" +
        "\u02E2\x03\x02\x02\x02\u02E5\u02E7\x07\x1B\x02\x02\u02E6\u02CA\x03\x02" +
        "\x02\x02\u02E6\u02DA\x03\x02\x02\x02\u02E6\u02DE\x03\x02\x02\x02\u02E7" +
        "m\x03\x02\x02\x02\u02E8\u02E9\x07\x83\x02\x02\u02E9\u02EA\x07\x1F\x02" +
        "\x02\u02EA\u02EB\x07-\x02\x02\u02EBo\x03\x02\x02\x02\u02EC\u02ED\x07\x86" +
        "\x02\x02\u02EDq\x03\x02\x02\x02\u02EE\u02EF\x07\x19\x02\x02\u02EF\u02F7" +
        "\x07\x1B\x02\x02\u02F0\u02F2\x07\x04\x02\x02\u02F1\u02F0\x03\x02\x02\x02" +
        "\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03" +
        "\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6" +
        "\u02F8\x05t;\x02\u02F7\u02F3\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02" +
        "\u02F8\u030D\x03\x02\x02\x02\u02F9\u02FA\x07\x19\x02\x02\u02FA\u02FF\x05" +
        "\x9CO\x02\u02FB\u02FE\x07\x1C\x02\x02\u02FC\u02FE\x05\xA6T\x02\u02FD\u02FB" +
        "\x03\x02\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02" +
        "\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0302\x03" +
        "\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u030A\x07\x1B\x02\x02\u0303" +
        "\u0305\x07\x04\x02\x02\u0304\u0303\x03\x02\x02\x02\u0305\u0308\x03\x02" +
        "\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307" +
        "\u0309\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309\u030B\x05t;\x02" +
        "\u030A\u0306\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030D\x03" +
        "\x02\x02\x02\u030C\u02EE\x03\x02\x02\x02\u030C\u02F9\x03\x02\x02\x02\u030D" +
        "s\x03\x02\x02\x02\u030E\u030F\x07\x19\x02\x02\u030F\u0314\x05\x9CO\x02" +
        "\u0310\u0313\x07\x1C\x02\x02\u0311\u0313\x05\xA6T\x02\u0312\u0310\x03" +
        "\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314" +
        "\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0317\x03\x02" +
        "\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0318\x07\x1B\x02\x02\u0318" +
        "u\x03\x02\x02\x02\u0319\u031B\x07\x0E\x02\x02\u031A\u031C\x05\x9CO\x02" +
        "\u031B\u031A\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u031D\x03" +
        "\x02\x02\x02\u031D\u0324\x07\x1B\x02\x02\u031E\u0320\x07\x0F\x02\x02\u031F" +
        "\u0321\x05\x9CO\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02" +
        "\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0324\x07\x1B\x02\x02\u0323\u0319" +
        "\x03\x02\x02\x02\u0323\u031E\x03\x02\x02\x02\u0324w\x03\x02\x02\x02\u0325" +
        "\u032D\x07;\x02\x02\u0326\u032D\x079\x02\x02\u0327\u0329\x07:\x02\x02" +
        "\u0328\u032A\x070\x02\x02\u0329\u0328\x03\x02\x02\x02\u0329\u032A\x03" +
        "\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032D\x07\x02\x02\x03\u032C" +
        "\u0325\x03\x02\x02\x02\u032C\u0326\x03\x02\x02\x02\u032C\u0327\x03\x02" +
        "\x02\x02\u032Dy\x03\x02\x02\x02\u032E\u0330\x07c\x02\x02\u032F\u0331\x05" +
        "\x9CO\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331" +
        "\u0347\x03\x02\x02\x02\u0332\u033C\x05\x9CO\x02\u0333\u0337\x07/\x02\x02" +
        "\u0334\u0336\x07\x04\x02\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339\x03" +
        "\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338" +
        "\u033B\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A\u0333\x03\x02" +
        "\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
        "\u033D\x03\x02\x02\x02\u033D\u0342\x03\x02\x02\x02\u033E\u033C\x03\x02" +
        "\x02\x02\u033F\u0341\x07/\x02\x02\u0340\u033F\x03\x02\x02\x02\u0341\u0344" +
        "\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02" +
        "\u0343\u0346\x03\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0345\u0332\x03" +
        "\x02\x02\x02\u0346\u0349\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347" +
        "\u0348\x03\x02\x02\x02\u0348\u034A\x03\x02\x02\x02\u0349\u0347\x03\x02" +
        "\x02\x02\u034A\u0356\x07\x1B\x02\x02\u034B\u0351\x07c\x02\x02\u034C\u0350" +
        "\x05\x9CO\x02\u034D\u0350\x07/\x02\x02\u034E\u0350\x07\x04\x02\x02\u034F" +
        "\u034C\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u034F\u034E\x03\x02" +
        "\x02\x02\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351" +
        "\u0352\x03\x02\x02\x02\u0352\u0354\x03\x02\x02\x02\u0353\u0351\x03\x02" +
        "\x02\x02\u0354\u0356\x07\x02\x02\x03\u0355\u032E\x03\x02\x02\x02\u0355" +
        "\u034B\x03\x02\x02\x02\u0356{\x03\x02\x02\x02\u0357\u035C\x073\x02\x02" +
        "\u0358\u035D\x05\x9CO\x02\u0359\u035D\x07\x1C\x02\x02\u035A\u035D\x07" +
        "\x86\x02\x02\u035B\u035D\x07/\x02\x02\u035C\u0358\x03\x02\x02\x02\u035C" +
        "\u0359\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035C\u035B\x03\x02" +
        "\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E" +
        "\u035F\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u036E\x07\x1B" +
        "\x02\x02\u0361\u0369\x073\x02\x02\u0362\u0368\x05\x9CO\x02\u0363\u0368" +
        "\x07\x1C\x02\x02\u0364\u0368\x07\x86\x02\x02\u0365\u0368\x07/\x02\x02" +
        "\u0366\u0368\x07\x04\x02\x02\u0367\u0362\x03\x02\x02\x02\u0367\u0363\x03" +
        "\x02\x02\x02\u0367\u0364\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367" +
        "\u0366\x03\x02\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02" +
        "\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B" +
        "\u0369\x03\x02\x02\x02\u036C\u036E\x07\x02\x02\x03\u036D\u0357\x03\x02" +
        "\x02\x02\u036D\u0361\x03\x02\x02\x02\u036E}\x03\x02\x02\x02\u036F\u0370" +
        "\x072\x02\x02\u0370\u0371\x05\x9CO\x02\u0371\u0372\x07\x1B\x02\x02\u0372" +
        "\x7F\x03\x02\x02\x02\u0373\u0377\x07J\x02\x02\u0374\u0378\x05\x9CO\x02" +
        "\u0375\u0378\x07\x1C\x02\x02\u0376\u0378\x07/\x02\x02\u0377\u0374\x03" +
        "\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378" +
        "\u0379\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02" +
        "\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037D\x07\x1B\x02\x02\u037C" +
        "\u037E\x05\x82B\x02\u037D\u037C\x03\x02\x02\x02\u037D\u037E\x03\x02\x02" +
        "\x02\u037E\x81\x03\x02\x02\x02\u037F\u0383\x07J\x02\x02\u0380\u0384\x05" +
        "\x9CO\x02\u0381\u0384\x07\x1C\x02\x02\u0382\u0384\x07/\x02\x02\u0383\u0380" +
        "\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0382\x03\x02\x02\x02" +
        "\u0384\u0385\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0386\x03" +
        "\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x07\x1B\x02\x02\u0388" +
        "\x83\x03\x02\x02\x02\u0389\u038B\x07\x12\x02\x02\u038A\u038C\x05\x9CO" +
        "\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u03A2" +
        "\x03\x02\x02\x02\u038D\u0397\x05\x9CO\x02\u038E\u0392\x07/\x02\x02\u038F" +
        "\u0391\x07\x04\x02\x02\u0390\u038F\x03\x02\x02\x02\u0391\u0394\x03\x02" +
        "\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
        "\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0395\u038E\x03\x02" +
        "\x02\x02\u0396\u0399\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397" +
        "\u0398\x03\x02\x02\x02\u0398\u039D\x03\x02\x02\x02\u0399\u0397\x03\x02" +
        "\x02\x02\u039A\u039C\x07/\x02\x02\u039B\u039A\x03\x02\x02\x02\u039C\u039F" +
        "\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02" +
        "\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u038D\x03" +
        "\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2" +
        "\u03A3\x03\x02\x02\x02\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A2\x03\x02" +
        "\x02\x02\u03A5\u03AC\x07\x1B\x02\x02\u03A6\u03A8\x07\x12\x02\x02\u03A7" +
        "\u03A9\x05\x9CO\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02" +
        "\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x07\x02\x02\x03\u03AB\u0389" +
        "\x03\x02\x02\x02\u03AB\u03A6\x03\x02\x02\x02\u03AC\x85\x03\x02\x02\x02" +
        "\u03AD\u03AF\x07\x13\x02\x02\u03AE\u03B0\n\x11\x02\x02\u03AF\u03AE\x03" +
        "\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1" +
        "\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B4\x07\x1B" +
        "\x02\x02\u03B4\x87\x03\x02\x02\x02\u03B5\u03B8\x07\x1A\x02\x02\u03B6\u03B9" +
        "\x05\x9CO\x02\u03B7\u03B9\x07/\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8" +
        "\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03B8\x03\x02" +
        "\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC" +
        "\u03C2\x07\x1B\x02\x02\u03BD\u03BE\x07\x1A\x02\x02\u03BE\u03BF\x05\x9C" +
        "O\x02\u03BF\u03C0\x07\x02\x02\x03\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03B5" +
        "\x03\x02\x02\x02\u03C1\u03BD\x03\x02\x02\x02\u03C2\x89\x03\x02\x02\x02" +
        "\u03C3\u03C4\x07>\x02\x02\u03C4\u03C5\x05\x9CO\x02\u03C5\u03C6\x07\x1B" +
        "\x02\x02\u03C6\u03CC\x03\x02\x02\x02\u03C7\u03C8\x07?\x02\x02\u03C8\u03C9" +
        "\x05\x9CO\x02\u03C9\u03CA\x07\x1B\x02\x02\u03CA\u03CC\x03\x02\x02\x02" +
        "\u03CB\u03C3\x03\x02\x02\x02\u03CB\u03C7\x03\x02\x02\x02\u03CC\x8B\x03" +
        "\x02\x02\x02\u03CD\u03CE\x076\x02\x02\u03CE\u03CF\x07\x1C\x02\x02\u03CF" +
        "\u03D0\x07-\x02\x02\u03D0\u03D7\x07\x1B\x02\x02\u03D1\u03D2\x076\x02\x02" +
        "\u03D2\u03D3\x07\x1C\x02\x02\u03D3\u03D4\x05\x9CO\x02\u03D4\u03D5\x07" +
        "\x1B\x02\x02\u03D5\u03D7\x03\x02\x02\x02\u03D6\u03CD\x03\x02\x02\x02\u03D6" +
        "\u03D1\x03\x02\x02\x02\u03D7\x8D\x03\x02\x02\x02\u03D8\u03D9\x07H\x02" +
        "\x02\u03D9\u03DA\x05\x9CO\x02\u03DA\u03DB\x07\x1B\x02\x02\u03DB\x8F\x03" +
        "\x02\x02\x02\u03DC\u03DD\x07I\x02\x02\u03DD\u03DE\x05\x9CO\x02\u03DE\u03DF" +
        "\x07\x1B\x02\x02\u03DF\x91\x03\x02\x02\x02\u03E0\u03EA\x05\x94K\x02\u03E1" +
        "\u03E3\x07/\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02" +
        "\x02\u03E4\u03E2\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7" +
        "\x03\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E7\u03E9\x05\x94K\x02" +
        "\u03E8\u03E4\x03\x02\x02\x02\u03E9\u03EC\x03\x02\x02\x02\u03EA\u03E8\x03" +
        "\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\x93\x03\x02\x02\x02\u03EC" +
        "\u03EA\x03\x02\x02\x02\u03ED\u03EE\x07\x14\x02\x02\u03EE\u03EF\x05\x9C" +
        "O\x02\u03EF\u03F0\t\x12\x02\x02\u03F0\u03F6\x05\x9CO\x02\u03F1\u03F5\x07" +
        "/\x02\x02\u03F2\u03F5\x07\x1C\x02\x02\u03F3\u03F5\x05\x9CO\x02\u03F4\u03F1" +
        "\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F3\x03\x02\x02\x02" +
        "\u03F5\u03F8\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6\u03F7\x03" +
        "\x02\x02\x02\u03F7\u03F9\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F9" +
        "\u03FA\x07\x1B\x02\x02\u03FA\u0404\x03\x02\x02\x02\u03FB\u03FF\x07G\x02" +
        "\x02\u03FC\u03FE\v\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401" +
        "\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02" +
        "\u0400\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0404\x07" +
        "\x1B\x02\x02\u0403\u03ED\x03\x02\x02\x02\u0403\u03FB\x03\x02\x02\x02\u0404" +
        "\x95\x03\x02\x02\x02\u0405\u0409\x07\v\x02\x02\u0406\u040A\x05\x9CO\x02" +
        "\u0407\u040A\x07\x1C\x02\x02\u0408\u040A\x07/\x02\x02\u0409\u0406\x03" +
        "\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u0408\x03\x02\x02\x02\u040A" +
        "\u040B\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B\u040C\x03\x02" +
        "\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u0419\x07\x1B\x02\x02\u040E" +
        "\u0414\x07\v\x02\x02\u040F\u0413\x05\x9CO\x02\u0410\u0413\x07\x1C\x02" +
        "\x02\u0411\u0413\x07/\x02\x02\u0412\u040F\x03\x02\x02\x02\u0412\u0410" +
        "\x03\x02\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02" +
        "\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x03" +
        "\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0419\x07\x02\x02\x03\u0418" +
        "\u0405\x03\x02\x02\x02\u0418\u040E\x03\x02\x02\x02\u0419\x97\x03\x02\x02" +
        "\x02\u041A\u041C\x07\x10\x02\x02\u041B\u041D\x05\x9CO\x02\u041C\u041B" +
        "\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02" +
        "\u041E\u041F\x07\x1B\x02\x02\u041F\x99\x03\x02\x02\x02\u0420\u0422\x05" +
        "\x9CO\x02\u0421\u0423\x07/\x02\x02\u0422\u0421\x03\x02\x02\x02\u0422\u0423" +
        "\x03\x02\x02\x02\u0423\u0425\x03\x02\x02\x02\u0424\u0420\x03\x02\x02\x02" +
        "\u0425\u0426\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03" +
        "\x02\x02\x02\u0427\x9B\x03\x02\x02\x02\u0428\u042F\x07.\x02\x02\u0429" +
        "\u042B\x07\x04\x02\x02\u042A\u0429\x03\x02\x02\x02\u042B\u042C\x03\x02" +
        "\x02\x02\u042C\u042A\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D" +
        "\u042E\x03\x02\x02\x02\u042E\u0430\x07-\x02\x02\u042F\u042A\x03\x02\x02" +
        "\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0457\x03\x02\x02\x02\u0431\u0438" +
        "\x05\xA6T\x02\u0432\u0434\x07\x04\x02\x02\u0433\u0432\x03\x02\x02\x02" +
        "\u0434\u0435\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0435\u0436\x03" +
        "\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0439\x07-\x02\x02\u0438" +
        "\u0433\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439";
    truefalseParser._serializedATNSegment2 = "\u0457\x03\x02\x02\x02\u043A\u043B\x07\x17\x02\x02\u043B\u043C\x05\x9C" +
        "O\x02\u043C\u043D\x07\x1B\x02\x02\u043D\u0457\x03\x02\x02\x02\u043E\u0457" +
        "\x07-\x02\x02\u043F\u0441\x07\x04\x02\x02\u0440\u043F\x03\x02\x02\x02" +
        "\u0441\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0443\x03" +
        "\x02\x02\x02\u0443\u0445\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0445" +
        "\u0449\x07\x1C\x02\x02\u0446\u0448\x07\x04\x02\x02\u0447\u0446\x03\x02" +
        "\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449" +
        "\u044A\x03\x02\x02\x02\u044A\u0457\x03\x02\x02\x02\u044B\u0449\x03\x02" +
        "\x02\x02\u044C\u0450\x07\x1D\x02\x02\u044D\u044F\x07\x04\x02\x02\u044E" +
        "\u044D\x03\x02\x02\x02\u044F\u0452\x03\x02\x02\x02\u0450\u044E\x03\x02" +
        "\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0457\x03\x02\x02\x02\u0452" +
        "\u0450\x03\x02\x02\x02\u0453\u0457\x07\x1E\x02\x02\u0454\u0457\x07#\x02" +
        "\x02\u0455\u0457\x07\x86\x02\x02\u0456\u0428\x03\x02\x02\x02\u0456\u0431" +
        "\x03\x02\x02\x02\u0456\u043A\x03\x02\x02\x02\u0456\u043E\x03\x02\x02\x02" +
        "\u0456\u0442\x03\x02\x02\x02\u0456\u044C\x03\x02\x02\x02\u0456\u0453\x03" +
        "\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0455\x03\x02\x02\x02\u0457" +
        "\x9D\x03\x02\x02\x02\u0458\u0459\x07*\x02\x02\u0459\x9F\x03\x02\x02\x02" +
        "\u045A\u045B\x07\r\x02\x02\u045B\u045C\x05\x9CO\x02\u045C\u045D\x07\x1B" +
        "\x02\x02\u045D\xA1\x03\x02\x02\x02\u045E\u045F\x07\x1B\x02\x02\u045F\xA3" +
        "\x03\x02\x02\x02\u0460\u0461\t\x13\x02\x02\u0461\xA5\x03\x02\x02\x02\u0462" +
        "\u046B\x070\x02\x02\u0463\u046B\x07\x1D\x02\x02\u0464\u0465\x07!\x02\x02" +
        "\u0465\u046B\n\x14\x02\x02\u0466\u0467\x07\"\x02\x02\u0467\u046B\n\x15" +
        "\x02\x02\u0468\u046B\x07%\x02\x02\u0469\u046B\x07$\x02\x02\u046A\u0462" +
        "\x03\x02\x02\x02\u046A\u0463\x03\x02\x02\x02\u046A\u0464\x03\x02\x02\x02" +
        "\u046A\u0466\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A\u0469\x03" +
        "\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C" +
        "\u046D\x03\x02\x02\x02\u046D\xA7\x03\x02\x02\x02\u046E\u046F\x07\x04\x02" +
        "\x02\u046F\xA9\x03\x02\x02\x02\xA2\xAE\xB4\xB9\xBE\xC7\xCF\xD5\xDA\xE1" +
        "\xE8\xEE\xF1\xF9\u0100\u0105\u0109\u010E\u0114\u011A\u0121\u0127\u012A" +
        "\u0134\u0139\u013C\u0141\u0146\u014A\u014F\u0153\u0156\u015B\u015D\u0162" +
        "\u0167\u0169\u016E\u0173\u0175\u0190\u019A\u019C\u01A3\u01A8\u01B1\u01BA" +
        "\u01BF\u01C1\u01CF\u01D4\u01D8\u01DC\u01DF\u01E4\u01FB\u0200\u0202\u020C" +
        "\u0216\u0220\u0226\u022D\u0233\u023B\u0245\u0250\u0256\u025B\u0262\u026B" +
        "\u026F\u0273\u0276\u0285\u0289\u0298\u029C\u02A2\u02AD\u02B2\u02B7\u02B9" +
        "\u02BE\u02C3\u02C5\u02CA\u02D0\u02D5\u02D7\u02E2\u02E6\u02F3\u02F7\u02FD" +
        "\u02FF\u0306\u030A\u030C\u0312\u0314\u031B\u0320\u0323\u0329\u032C\u0330" +
        "\u0337\u033C\u0342\u0347\u034F\u0351\u0355\u035C\u035E\u0367\u0369\u036D" +
        "\u0377\u0379\u037D\u0383\u0385\u038B\u0392\u0397\u039D\u03A2\u03A8\u03AB" +
        "\u03B1\u03B8\u03BA\u03C1\u03CB\u03D6\u03E4\u03EA\u03F4\u03F6\u03FF\u0403" +
        "\u0409\u040B\u0412\u0414\u0418\u041C\u0422\u0426\u042C\u042F\u0435\u0438" +
        "\u0442\u0449\u0450\u0456\u046A\u046C";
    truefalseParser._serializedATN = Utils.join([
        truefalseParser._serializedATNSegment0,
        truefalseParser._serializedATNSegment1,
        truefalseParser._serializedATNSegment2,
    ], "");
    return truefalseParser;
})();
export { truefalseParser };
export class BitmarkContext extends ParserRuleContext {
    EOF() { return this.getToken(truefalseParser.EOF, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bitmark; }
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
    truefalses() {
        return this.getRuleContext(0, TruefalsesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bitmark_; }
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
export class TruefalsesContext extends ParserRuleContext {
    true_false_1() {
        return this.tryGetRuleContext(0, True_false_1Context);
    }
    true_false() {
        return this.tryGetRuleContext(0, True_falseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_truefalses; }
    // @Override
    enterRule(listener) {
        if (listener.enterTruefalses) {
            listener.enterTruefalses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTruefalses) {
            listener.exitTruefalses(this);
        }
    }
}
export class True_false_1Context extends ParserRuleContext {
    BitTruefalse1() { return this.getToken(truefalseParser.BitTruefalse1, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    choices() {
        return this.getRuleContext(0, ChoicesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
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
    get ruleIndex() { return truefalseParser.RULE_true_false_1; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrue_false_1) {
            listener.enterTrue_false_1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrue_false_1) {
            listener.exitTrue_false_1(this);
        }
    }
}
export class True_falseContext extends ParserRuleContext {
    BitTruefalse() { return this.getToken(truefalseParser.BitTruefalse, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    mcrsep_end() {
        return this.getRuleContext(0, Mcrsep_endContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
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
    mcrsep(i) {
        if (i === undefined) {
            return this.getRuleContexts(McrsepContext);
        }
        else {
            return this.getRuleContext(i, McrsepContext);
        }
    }
    tfmisc(i) {
        if (i === undefined) {
            return this.getRuleContexts(TfmiscContext);
        }
        else {
            return this.getRuleContext(i, TfmiscContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_true_false; }
    // @Override
    enterRule(listener) {
        if (listener.enterTrue_false) {
            listener.enterTrue_false(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTrue_false) {
            listener.exitTrue_false(this);
        }
    }
}
export class McrsepContext extends ParserRuleContext {
    HSPL() { return this.tryGetToken(truefalseParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(truefalseParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_mcrsep; }
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
export class Mcrsep_endContext extends ParserRuleContext {
    HSPL() { return this.tryGetToken(truefalseParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(truefalseParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_mcrsep_end; }
    // @Override
    enterRule(listener) {
        if (listener.enterMcrsep_end) {
            listener.enterMcrsep_end(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMcrsep_end) {
            listener.exitMcrsep_end(this);
        }
    }
}
export class TfmiscContext extends ParserRuleContext {
    bitElem() {
        return this.tryGetRuleContext(0, BitElemContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_tfmisc; }
    // @Override
    enterRule(listener) {
        if (listener.enterTfmisc) {
            listener.enterTfmisc(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTfmisc) {
            listener.exitTfmisc(this);
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choices; }
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
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_cplus; }
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
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_cminus; }
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
    OPP() { return this.getToken(truefalseParser.OPP, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choice_plus; }
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
    OPM() { return this.getToken(truefalseParser.OPM, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choice_minus; }
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
    OPR() { return this.getToken(truefalseParser.OPR, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_choice_star; }
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
export class BitElemContext extends ParserRuleContext {
    LIST_LINE() { return this.tryGetToken(truefalseParser.LIST_LINE, 0); }
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
    get ruleIndex() { return truefalseParser.RULE_bitElem; }
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
export class ResourceContext extends ParserRuleContext {
    bitElem() {
        return this.getRuleContext(0, BitElemContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource; }
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
    get ruleIndex() { return truefalseParser.RULE_gap; }
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
    OPU() { return this.getToken(truefalseParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(truefalseParser.STRING, 0); }
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
    get ruleIndex() { return truefalseParser.RULE_single_gap; }
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
export class Bullet_itemContext extends ParserRuleContext {
    OPBUL() { return this.getToken(truefalseParser.OPBUL, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    atpoint() {
        return this.tryGetRuleContext(0, AtpointContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bullet_item; }
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
    AtPoints() { return this.getToken(truefalseParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(truefalseParser.NUMERIC, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_atpoint; }
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
            return this.getTokens(truefalseParser.ColonText);
        }
        else {
            return this.getToken(truefalseParser.ColonText, i);
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
    get ruleIndex() { return truefalseParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(truefalseParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(truefalseParser.BitmarkPlus, 0); }
    AmpArticle() { return this.tryGetToken(truefalseParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(truefalseParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(truefalseParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(truefalseParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(truefalseParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(truefalseParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(truefalseParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(truefalseParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(truefalseParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(truefalseParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(truefalseParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(truefalseParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource_format; }
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
    AmpPdf() { return this.tryGetToken(truefalseParser.AmpPdf, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource_format_extra; }
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
    AmpImage() { return this.tryGetToken(truefalseParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(truefalseParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(truefalseParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(truefalseParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(truefalseParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(truefalseParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(truefalseParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(truefalseParser.AmpVideoLink, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Video_type() { return this.tryGetToken(truefalseParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(truefalseParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(truefalseParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(truefalseParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(truefalseParser.AmpDocumentLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(truefalseParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(truefalseParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(truefalseParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(truefalseParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(truefalseParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(truefalseParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(truefalseParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(truefalseParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(truefalseParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(truefalseParser.OpAmpDocument, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(truefalseParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(truefalseParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(truefalseParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(truefalseParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(truefalseParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Video_type() { return this.tryGetToken(truefalseParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(truefalseParser.OpAmpVideoLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(truefalseParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(truefalseParser.OpAmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
    ArticleText() { return this.tryGetToken(truefalseParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_articlebit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_documentbit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_websitebit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_appbit; }
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
    get ruleIndex() { return truefalseParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_stillimg_one; }
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
    get ruleIndex() { return truefalseParser.RULE_videobit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(truefalseParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(truefalseParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_imagebit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(truefalseParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(truefalseParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(truefalseParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(truefalseParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(truefalseParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(truefalseParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(truefalseParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(truefalseParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(truefalseParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(truefalseParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(truefalseParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(truefalseParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_image_chained4match; }
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
    get ruleIndex() { return truefalseParser.RULE_audiobit; }
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
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(truefalseParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(truefalseParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(truefalseParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(truefalseParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(truefalseParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(truefalseParser.OpAmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    OPA() { return this.tryGetToken(truefalseParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(truefalseParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(truefalseParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(truefalseParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(truefalseParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(truefalseParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(truefalseParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(truefalseParser.TEL, 0); }
    PLUS() { return this.getToken(truefalseParser.PLUS, 0); }
    NUMERIC() { return this.getToken(truefalseParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_telephone; }
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
    URL() { return this.getToken(truefalseParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_url; }
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
    OPC() { return this.getToken(truefalseParser.OPC, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
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
    get ruleIndex() { return truefalseParser.RULE_item; }
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
    OPC() { return this.getToken(truefalseParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
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
    get ruleIndex() { return truefalseParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(truefalseParser.OPRANGLES, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(truefalseParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(truefalseParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(truefalseParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(truefalseParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(truefalseParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_example; }
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
    BracEnclose() { return this.getToken(truefalseParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(truefalseParser.AtReference, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.URL);
        }
        else {
            return this.getToken(truefalseParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_reference; }
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
    AtProgress() { return this.getToken(truefalseParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_progress; }
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
    AtDate() { return this.getToken(truefalseParser.AtDate, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(truefalseParser.AtDate, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(truefalseParser.OPB, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_instruction; }
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
    OPQ() { return this.getToken(truefalseParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.CL);
        }
        else {
            return this.getToken(truefalseParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_hint; }
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
    OPHASH() { return this.getToken(truefalseParser.OPHASH, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(truefalseParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(truefalseParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(truefalseParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(truefalseParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(truefalseParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(truefalseParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_isinfoonly; }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(truefalseParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(truefalseParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(truefalseParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(truefalseParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
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
            return this.getTokens(truefalseParser.COLON);
        }
        else {
            return this.getToken(truefalseParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(truefalseParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(truefalseParser.OPDANGLE, 0); }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_anchor; }
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
            return this.getTokens(truefalseParser.NL);
        }
        else {
            return this.getToken(truefalseParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(truefalseParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(truefalseParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.S);
        }
        else {
            return this.getToken(truefalseParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(truefalseParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(truefalseParser.CL, 0); }
    COLON() { return this.tryGetToken(truefalseParser.COLON, 0); }
    AMP() { return this.tryGetToken(truefalseParser.AMP, 0); }
    DBLCOLON() { return this.tryGetToken(truefalseParser.DBLCOLON, 0); }
    DBLEQ() { return this.tryGetToken(truefalseParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(truefalseParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_s_and_w; }
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
    DCANY() { return this.getToken(truefalseParser.DCANY, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_dclines; }
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
    OPESC() { return this.getToken(truefalseParser.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_bracket_escaped; }
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
    CL() { return this.getToken(truefalseParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(truefalseParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(truefalseParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_sspl; }
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
            return this.getTokens(truefalseParser.SENTENCE);
        }
        else {
            return this.getToken(truefalseParser.SENTENCE, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.AMP);
        }
        else {
            return this.getToken(truefalseParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.Greater);
        }
        else {
            return this.getToken(truefalseParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.Less);
        }
        else {
            return this.getToken(truefalseParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.RightArrow);
        }
        else {
            return this.getToken(truefalseParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(truefalseParser.RightAngle);
        }
        else {
            return this.getToken(truefalseParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_words; }
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
    S() { return this.getToken(truefalseParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return truefalseParser.RULE_sp; }
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
