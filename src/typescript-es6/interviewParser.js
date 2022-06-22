// Generated from ./Interview/interviewParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
let interviewParser = /** @class */ (() => {
    class interviewParser extends Parser {
        constructor(input) {
            super(input);
            this._interp = new ParserATNSimulator(interviewParser._ATN, this);
        }
        // @Override
        // @NotNull
        get vocabulary() {
            return interviewParser.VOCABULARY;
        }
        // tslint:enable:no-trailing-whitespace
        // @Override
        get grammarFileName() { return "interviewParser.g4"; }
        // @Override
        get ruleNames() { return interviewParser.ruleNames; }
        // @Override
        get serializedATN() { return interviewParser._serializedATN; }
        // @RuleVersion(0)
        bitmark() {
            let _localctx = new BitmarkContext(this._ctx, this.state);
            this.enterRule(_localctx, 0, interviewParser.RULE_bitmark);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 201;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 188;
                                this.bitmark_();
                                this.state = 198;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 192;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === interviewParser.S) {
                                                    {
                                                        {
                                                            this.state = 189;
                                                            this.match(interviewParser.S);
                                                        }
                                                    }
                                                    this.state = 194;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 195;
                                                this.match(interviewParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 200;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                                }
                            }
                        }
                        this.state = 203;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === interviewParser.BitInterview || _la === interviewParser.BitInterviewinstgrp);
                    this.state = 208;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === interviewParser.NL) {
                        {
                            {
                                this.state = 205;
                                this.match(interviewParser.NL);
                            }
                        }
                        this.state = 210;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 211;
                    this.match(interviewParser.EOF);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 2, interviewParser.RULE_bitmark_);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 213;
                    this.interviews();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        interviews() {
            let _localctx = new InterviewsContext(this._ctx, this.state);
            this.enterRule(_localctx, 4, interviewParser.RULE_interviews);
            try {
                this.state = 217;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.BitInterview:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 215;
                            this.interview();
                        }
                        break;
                    case interviewParser.BitInterviewinstgrp:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 216;
                            this.interview_instruction_grouped();
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
        interview() {
            let _localctx = new InterviewContext(this._ctx, this.state);
            this.enterRule(_localctx, 6, interviewParser.RULE_interview);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 219;
                    this.match(interviewParser.BitInterview);
                    this.state = 220;
                    this.format();
                    this.state = 221;
                    this.match(interviewParser.CL);
                    this.state = 225;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 222;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 227;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                    }
                    this.state = 237;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 228;
                                    this.bitElem();
                                    this.state = 232;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 229;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 234;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 239;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                    }
                    this.state = 256;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 240;
                                        this.mcrsep();
                                        this.state = 244;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 241;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 246;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                                        }
                                        this.state = 254;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 247;
                                                    this.interview_qanda();
                                                    this.state = 251;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                        if (_alt === 1) {
                                                            {
                                                                {
                                                                    this.state = 248;
                                                                    this.match(interviewParser.NL);
                                                                }
                                                            }
                                                        }
                                                        this.state = 253;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                                                    }
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 258;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 260;
                    this.mcrsep_end();
                    this.state = 264;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 261;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 266;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                    }
                    this.state = 268;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                        case 1:
                            {
                                this.state = 267;
                                this.interview_footer();
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
        interview_instruction_grouped() {
            let _localctx = new Interview_instruction_groupedContext(this._ctx, this.state);
            this.enterRule(_localctx, 8, interviewParser.RULE_interview_instruction_grouped);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 270;
                    this.match(interviewParser.BitInterviewinstgrp);
                    this.state = 271;
                    this.format();
                    this.state = 272;
                    this.match(interviewParser.CL);
                    this.state = 276;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 273;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 278;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                    }
                    this.state = 288;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 279;
                                    this.bitElem();
                                    this.state = 283;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 280;
                                                    this.match(interviewParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 285;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                                    }
                                }
                            }
                        }
                        this.state = 290;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                    }
                    this.state = 301;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 291;
                                    this.mcrsep();
                                    {
                                        this.state = 292;
                                        this.interview_qanda();
                                        this.state = 296;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 293;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 298;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                                        }
                                    }
                                }
                            }
                        }
                        this.state = 303;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                    }
                    this.state = 304;
                    this.mcrsep_end();
                    this.state = 308;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 305;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 310;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                    }
                    this.state = 312;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                        case 1:
                            {
                                this.state = 311;
                                this.interview_footer();
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
            this.enterRule(_localctx, 10, interviewParser.RULE_mcrsep);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 316;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case interviewParser.HSPL:
                        case interviewParser.HSPL2:
                            {
                                this.state = 314;
                                _la = this._input.LA(1);
                                if (!(_la === interviewParser.HSPL || _la === interviewParser.HSPL2)) {
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
                        case interviewParser.NL:
                            {
                                this.state = 315;
                                this.match(interviewParser.NL);
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
        mcrsep_end() {
            let _localctx = new Mcrsep_endContext(this._ctx, this.state);
            this.enterRule(_localctx, 12, interviewParser.RULE_mcrsep_end);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 318;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.HSPL || _la === interviewParser.HSPL2)) {
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
        mcrmisc() {
            let _localctx = new McrmiscContext(this._ctx, this.state);
            this.enterRule(_localctx, 14, interviewParser.RULE_mcrmisc);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 320;
                    this.interview_qanda();
                    this.state = 321;
                    this.match(interviewParser.NL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        interview_qanda() {
            let _localctx = new Interview_qandaContext(this._ctx, this.state);
            this.enterRule(_localctx, 16, interviewParser.RULE_interview_qanda);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 323;
                    this.interview_qanda__();
                    this.state = 332;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 325;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 324;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new NoViableAltException(this);
                                        }
                                        this.state = 327;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                                    this.state = 329;
                                    this.interview_qanda__();
                                }
                            }
                        }
                        this.state = 334;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
        interview_qanda__() {
            let _localctx = new Interview_qanda__Context(this._ctx, this.state);
            this.enterRule(_localctx, 18, interviewParser.RULE_interview_qanda__);
            let _la;
            try {
                let _alt;
                this.state = 418;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 336;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.OPC) {
                                {
                                    this.state = 335;
                                    this.item();
                                }
                            }
                            this.state = 338;
                            this.interview_text();
                            this.state = 342;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 339;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 344;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
                            }
                            this.state = 357;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        this.state = 355;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 345;
                                                    this.instruction();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 346;
                                                    this.example();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 347;
                                                    this.shortans();
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 348;
                                                    this.longans();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 349;
                                                    this.dollarans();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 350;
                                                    this.partans();
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 351;
                                                    this.single_gap();
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 352;
                                                    this.mark_text();
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 353;
                                                    this.hint();
                                                }
                                                break;
                                            case 10:
                                                {
                                                    this.state = 354;
                                                    this.interview_sometext();
                                                }
                                                break;
                                        }
                                    }
                                }
                                this.state = 359;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                            }
                            this.state = 380;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 360;
                                        this.match(interviewParser.NL);
                                        this.state = 362;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.SENTENCE - 27)))) !== 0)) {
                                            {
                                                this.state = 361;
                                                this.interview_answer();
                                            }
                                        }
                                        this.state = 367;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.S) {
                                            {
                                                {
                                                    this.state = 364;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 369;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 377;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.OPDOLL || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (interviewParser.AtShortanswer - 55)) | (1 << (interviewParser.AtLonganswer - 55)) | (1 << (interviewParser.AtExampleWithStr - 55)) | (1 << (interviewParser.AtExamplecol - 55)) | (1 << (interviewParser.AtExamplecl - 55)) | (1 << (interviewParser.AtPartialAnswerS - 55)) | (1 << (interviewParser.AtPartialAnswer - 55)))) !== 0)) {
                                            {
                                                this.state = 375;
                                                this._errHandler.sync(this);
                                                switch (this._input.LA(1)) {
                                                    case interviewParser.AtExampleWithStr:
                                                    case interviewParser.AtExamplecol:
                                                    case interviewParser.AtExamplecl:
                                                        {
                                                            this.state = 370;
                                                            this.example();
                                                        }
                                                        break;
                                                    case interviewParser.AtShortanswer:
                                                        {
                                                            this.state = 371;
                                                            this.shortans();
                                                        }
                                                        break;
                                                    case interviewParser.AtLonganswer:
                                                        {
                                                            this.state = 372;
                                                            this.longans();
                                                        }
                                                        break;
                                                    case interviewParser.OPDOLL:
                                                        {
                                                            this.state = 373;
                                                            this.dollarans();
                                                        }
                                                        break;
                                                    case interviewParser.AtPartialAnswerS:
                                                    case interviewParser.AtPartialAnswer:
                                                        {
                                                            this.state = 374;
                                                            this.partans();
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException(this);
                                                }
                                            }
                                            this.state = 379;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 392;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            this.state = 392;
                                            this._errHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                                                case 1:
                                                    {
                                                        this.state = 382;
                                                        this.instruction();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 383;
                                                        this.example();
                                                    }
                                                    break;
                                                case 3:
                                                    {
                                                        this.state = 384;
                                                        this.shortans();
                                                    }
                                                    break;
                                                case 4:
                                                    {
                                                        this.state = 385;
                                                        this.longans();
                                                    }
                                                    break;
                                                case 5:
                                                    {
                                                        this.state = 386;
                                                        this.dollarans();
                                                    }
                                                    break;
                                                case 6:
                                                    {
                                                        this.state = 387;
                                                        this.partans();
                                                    }
                                                    break;
                                                case 7:
                                                    {
                                                        this.state = 388;
                                                        this.single_gap();
                                                    }
                                                    break;
                                                case 8:
                                                    {
                                                        this.state = 389;
                                                        this.mark_text();
                                                    }
                                                    break;
                                                case 9:
                                                    {
                                                        this.state = 390;
                                                        this.hint();
                                                    }
                                                    break;
                                                case 10:
                                                    {
                                                        this.state = 391;
                                                        this.interview_sometext();
                                                    }
                                                    break;
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 394;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                            this.state = 416;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 396;
                                        this.match(interviewParser.NL);
                                        this.state = 398;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.SENTENCE - 27)))) !== 0)) {
                                            {
                                                this.state = 397;
                                                this.interview_answer();
                                            }
                                        }
                                        this.state = 403;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.S) {
                                            {
                                                {
                                                    this.state = 400;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 405;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 413;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.OPDOLL || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (interviewParser.AtShortanswer - 55)) | (1 << (interviewParser.AtLonganswer - 55)) | (1 << (interviewParser.AtExampleWithStr - 55)) | (1 << (interviewParser.AtExamplecol - 55)) | (1 << (interviewParser.AtExamplecl - 55)) | (1 << (interviewParser.AtPartialAnswerS - 55)) | (1 << (interviewParser.AtPartialAnswer - 55)))) !== 0)) {
                                            {
                                                this.state = 411;
                                                this._errHandler.sync(this);
                                                switch (this._input.LA(1)) {
                                                    case interviewParser.AtExampleWithStr:
                                                    case interviewParser.AtExamplecol:
                                                    case interviewParser.AtExamplecl:
                                                        {
                                                            this.state = 406;
                                                            this.example();
                                                        }
                                                        break;
                                                    case interviewParser.AtShortanswer:
                                                        {
                                                            this.state = 407;
                                                            this.shortans();
                                                        }
                                                        break;
                                                    case interviewParser.AtLonganswer:
                                                        {
                                                            this.state = 408;
                                                            this.longans();
                                                        }
                                                        break;
                                                    case interviewParser.OPDOLL:
                                                        {
                                                            this.state = 409;
                                                            this.dollarans();
                                                        }
                                                        break;
                                                    case interviewParser.AtPartialAnswerS:
                                                    case interviewParser.AtPartialAnswer:
                                                        {
                                                            this.state = 410;
                                                            this.partans();
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException(this);
                                                }
                                            }
                                            this.state = 415;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
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
        interview_sometext() {
            let _localctx = new Interview_sometextContext(this._ctx, this.state);
            this.enterRule(_localctx, 20, interviewParser.RULE_interview_sometext);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 421;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 420;
                                        this.s_and_w();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 423;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
        interview_text() {
            let _localctx = new Interview_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 22, interviewParser.RULE_interview_text);
            try {
                let _alt;
                this.state = 444;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AMP:
                    case interviewParser.Greater:
                    case interviewParser.Less:
                    case interviewParser.RightAngle:
                    case interviewParser.RightArrow:
                    case interviewParser.STRING:
                    case interviewParser.SENTENCE:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 427;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 425;
                                        this.match(interviewParser.STRING);
                                        this.state = 426;
                                        this.match(interviewParser.CL);
                                    }
                                    break;
                            }
                            this.state = 439;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 429;
                                                this.words();
                                                this.state = 431;
                                                this._errHandler.sync(this);
                                                switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                                                    case 1:
                                                        {
                                                            this.state = 430;
                                                            this.match(interviewParser.COLON);
                                                        }
                                                        break;
                                                }
                                                this.state = 436;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                    if (_alt === 1) {
                                                        {
                                                            {
                                                                this.state = 433;
                                                                this.match(interviewParser.NL);
                                                            }
                                                        }
                                                    }
                                                    this.state = 438;
                                                    this._errHandler.sync(this);
                                                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 441;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    case interviewParser.LIST_LINE:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 443;
                            this.match(interviewParser.LIST_LINE);
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
        interview_answer() {
            let _localctx = new Interview_answerContext(this._ctx, this.state);
            this.enterRule(_localctx, 24, interviewParser.RULE_interview_answer);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 450;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 446;
                                this.words();
                                this.state = 448;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === interviewParser.COLON) {
                                    {
                                        this.state = 447;
                                        this.match(interviewParser.COLON);
                                    }
                                }
                            }
                        }
                        this.state = 452;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (interviewParser.AMP - 27)) | (1 << (interviewParser.Greater - 27)) | (1 << (interviewParser.Less - 27)) | (1 << (interviewParser.RightAngle - 27)) | (1 << (interviewParser.RightArrow - 27)) | (1 << (interviewParser.STRING - 27)) | (1 << (interviewParser.SENTENCE - 27)))) !== 0));
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 26, interviewParser.RULE_longans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 454;
                    this.match(interviewParser.AtLonganswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 28, interviewParser.RULE_shortans);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 456;
                    this.match(interviewParser.AtShortanswer);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 30, interviewParser.RULE_partans);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 458;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AtPartialAnswerS || _la === interviewParser.AtPartialAnswer)) {
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
        mark_text() {
            let _localctx = new Mark_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 32, interviewParser.RULE_mark_text);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 460;
                    this.match(interviewParser.OPS);
                    this.state = 464;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1 + 1) {
                            {
                                {
                                    this.state = 461;
                                    this.matchWildcard();
                                }
                            }
                        }
                        this.state = 466;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                    }
                    this.state = 467;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
                    throw re;
                }
            }
            finally {
                this.exitRule();
            }
            return _localctx;
        }
        // @RuleVersion(0)
        query() {
            let _localctx = new QueryContext(this._ctx, this.state);
            this.enterRule(_localctx, 34, interviewParser.RULE_query);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 470;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 469;
                                this.s_and_w();
                            }
                        }
                        this.state = 472;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 475;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.AtExamplecl) {
                        {
                            this.state = 474;
                            this.match(interviewParser.AtExamplecl);
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
        answer() {
            let _localctx = new AnswerContext(this._ctx, this.state);
            this.enterRule(_localctx, 36, interviewParser.RULE_answer);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 478;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 477;
                                        this.s_and_w();
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 480;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                    } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                    this.state = 488;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OR) {
                        {
                            this.state = 482;
                            this.match(interviewParser.OR);
                            this.state = 484;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 483;
                                                this.s_and_w();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                                this.state = 486;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                        }
                    }
                    this.state = 497;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.S || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (interviewParser.AtExampleWithStr - 57)) | (1 << (interviewParser.AtExamplecol - 57)) | (1 << (interviewParser.AtExamplecl - 57)))) !== 0)) {
                        {
                            this.state = 493;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === interviewParser.S) {
                                {
                                    {
                                        this.state = 490;
                                        this.match(interviewParser.S);
                                    }
                                }
                                this.state = 495;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 496;
                            this.example();
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
        heading() {
            let _localctx = new HeadingContext(this._ctx, this.state);
            this.enterRule(_localctx, 38, interviewParser.RULE_heading);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 499;
                    this.key_title();
                    this.state = 501;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 500;
                                this.match(interviewParser.NL);
                            }
                        }
                        this.state = 503;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while (_la === interviewParser.NL);
                    this.state = 505;
                    this.value_title();
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 40, interviewParser.RULE_key_title);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 507;
                    this.match(interviewParser.OPHASH);
                    this.state = 509;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 508;
                                this.s_and_w();
                            }
                        }
                        this.state = 511;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 513;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 42, interviewParser.RULE_value_title);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 515;
                    this.match(interviewParser.OPHASH);
                    this.state = 517;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 516;
                                this.s_and_w();
                            }
                        }
                        this.state = 519;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 521;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 44, interviewParser.RULE_ml_example);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 523;
                    this.match(interviewParser.AtExamplecol);
                    this.state = 531;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                        {
                            this.state = 525;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 524;
                                        this.match(interviewParser.NL);
                                    }
                                    break;
                            }
                            this.state = 527;
                            this.lines();
                            this.state = 529;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.NL) {
                                {
                                    this.state = 528;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                    }
                    this.state = 533;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 46, interviewParser.RULE_bitElem);
            try {
                this.state = 556;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 535;
                            this.item();
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 536;
                            this.atdef();
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 537;
                            this.reference();
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 538;
                            this.title();
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 539;
                            this.instruction();
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 540;
                            this.hint();
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 541;
                            this.gap();
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 542;
                            this.s_and_w();
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 543;
                            this.example();
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 544;
                            this.bool_label();
                        }
                        break;
                    case 11:
                        this.enterOuterAlt(_localctx, 11);
                        {
                            this.state = 545;
                            this.imagebit();
                        }
                        break;
                    case 12:
                        this.enterOuterAlt(_localctx, 12);
                        {
                            this.state = 546;
                            this.audiobit();
                        }
                        break;
                    case 13:
                        this.enterOuterAlt(_localctx, 13);
                        {
                            this.state = 547;
                            this.videobit();
                        }
                        break;
                    case 14:
                        this.enterOuterAlt(_localctx, 14);
                        {
                            this.state = 548;
                            this.articlebit();
                        }
                        break;
                    case 15:
                        this.enterOuterAlt(_localctx, 15);
                        {
                            this.state = 549;
                            this.documentbit();
                        }
                        break;
                    case 16:
                        this.enterOuterAlt(_localctx, 16);
                        {
                            this.state = 550;
                            this.appbit();
                        }
                        break;
                    case 17:
                        this.enterOuterAlt(_localctx, 17);
                        {
                            this.state = 551;
                            this.websitebit();
                        }
                        break;
                    case 18:
                        this.enterOuterAlt(_localctx, 18);
                        {
                            this.state = 552;
                            this.stillimagefilmbit();
                        }
                        break;
                    case 19:
                        this.enterOuterAlt(_localctx, 19);
                        {
                            this.state = 553;
                            this.angleref();
                        }
                        break;
                    case 20:
                        this.enterOuterAlt(_localctx, 20);
                        {
                            this.state = 554;
                            this.anchor();
                        }
                        break;
                    case 21:
                        this.enterOuterAlt(_localctx, 21);
                        {
                            this.state = 555;
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
        interview_footer() {
            let _localctx = new Interview_footerContext(this._ctx, this.state);
            this.enterRule(_localctx, 48, interviewParser.RULE_interview_footer);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 561;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 558;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 563;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                    }
                    this.state = 564;
                    this.footer_resource();
                    this.state = 568;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 565;
                                    this.footer_resource();
                                }
                            }
                        }
                        this.state = 570;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                    }
                    this.state = 574;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 571;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 576;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
        footer_resource() {
            let _localctx = new Footer_resourceContext(this._ctx, this.state);
            this.enterRule(_localctx, 50, interviewParser.RULE_footer_resource);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 587;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case interviewParser.S:
                        case interviewParser.OPS:
                        case interviewParser.COLON:
                        case interviewParser.AMP:
                        case interviewParser.DBLCOLON:
                        case interviewParser.Greater:
                        case interviewParser.Less:
                        case interviewParser.RightAngle:
                        case interviewParser.RightArrow:
                        case interviewParser.DBLEQ:
                        case interviewParser.NUMERIC:
                        case interviewParser.STRING:
                        case interviewParser.NL:
                        case interviewParser.SENTENCE:
                        case interviewParser.URL:
                        case interviewParser.LIST_LINE:
                            {
                                this.state = 577;
                                this.footer_text();
                            }
                            break;
                        case interviewParser.OpAmpImage:
                        case interviewParser.OpAmpImageZoom:
                        case interviewParser.OpAmpImageWAudio:
                        case interviewParser.OpAmpImageLink:
                            {
                                this.state = 578;
                                this.imagebit();
                            }
                            break;
                        case interviewParser.OpAmpAudio:
                        case interviewParser.OpAmpAudioLink:
                            {
                                this.state = 579;
                                this.audiobit();
                            }
                            break;
                        case interviewParser.OpAmpVideo:
                        case interviewParser.OpAmpVideoLink:
                            {
                                this.state = 580;
                                this.videobit();
                            }
                            break;
                        case interviewParser.ArticleText:
                        case interviewParser.OpAmpArticle:
                        case interviewParser.OpAmpArticleLink:
                            {
                                this.state = 581;
                                this.articlebit();
                            }
                            break;
                        case interviewParser.OpAmpDocument:
                        case interviewParser.OpAmpDocumentLink:
                            {
                                this.state = 582;
                                this.documentbit();
                            }
                            break;
                        case interviewParser.OpAmpApp:
                        case interviewParser.OpAmpAppLink:
                            {
                                this.state = 583;
                                this.appbit();
                            }
                            break;
                        case interviewParser.OpAmpWebsite:
                        case interviewParser.OpAmpWebsiteLink:
                            {
                                this.state = 584;
                                this.websitebit();
                            }
                            break;
                        case interviewParser.AtReference:
                            {
                                this.state = 585;
                                this.reference();
                            }
                            break;
                        case interviewParser.OPQ:
                            {
                                this.state = 586;
                                this.hint();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 592;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 589;
                                    this.match(interviewParser.NL);
                                }
                            }
                        }
                        this.state = 594;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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
        footer_text() {
            let _localctx = new Footer_textContext(this._ctx, this.state);
            this.enterRule(_localctx, 52, interviewParser.RULE_footer_text);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 597;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 597;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case interviewParser.LIST_LINE:
                                            {
                                                this.state = 595;
                                                this.match(interviewParser.LIST_LINE);
                                            }
                                            break;
                                        case interviewParser.S:
                                        case interviewParser.OPS:
                                        case interviewParser.COLON:
                                        case interviewParser.AMP:
                                        case interviewParser.DBLCOLON:
                                        case interviewParser.Greater:
                                        case interviewParser.Less:
                                        case interviewParser.RightAngle:
                                        case interviewParser.RightArrow:
                                        case interviewParser.DBLEQ:
                                        case interviewParser.NUMERIC:
                                        case interviewParser.STRING:
                                        case interviewParser.NL:
                                        case interviewParser.SENTENCE:
                                        case interviewParser.URL:
                                            {
                                                this.state = 596;
                                                this.s_and_w();
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
                        this.state = 599;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
        gap() {
            let _localctx = new GapContext(this._ctx, this.state);
            this.enterRule(_localctx, 54, interviewParser.RULE_gap);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 601;
                    this.single_gap();
                    this.state = 609;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                this.state = 607;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case interviewParser.OPU:
                                        {
                                            this.state = 602;
                                            this.single_gap();
                                        }
                                        break;
                                    case interviewParser.OPB:
                                        {
                                            this.state = 603;
                                            this.instruction();
                                        }
                                        break;
                                    case interviewParser.OPQ:
                                        {
                                            this.state = 604;
                                            this.hint();
                                        }
                                        break;
                                    case interviewParser.OPC:
                                        {
                                            this.state = 605;
                                            this.item();
                                        }
                                        break;
                                    case interviewParser.AtExampleWithStr:
                                    case interviewParser.AtExamplecol:
                                    case interviewParser.AtExamplecl:
                                        {
                                            this.state = 606;
                                            this.example();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException(this);
                                }
                            }
                        }
                        this.state = 611;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
            this.enterRule(_localctx, 56, interviewParser.RULE_single_gap);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 612;
                    this.match(interviewParser.OPU);
                    this.state = 616;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                        case 1:
                            {
                                this.state = 613;
                                this.match(interviewParser.NUMERIC);
                            }
                            break;
                        case 2:
                            {
                                this.state = 614;
                                this.match(interviewParser.STRING);
                            }
                            break;
                        case 3:
                            // tslint:disable-next-line:no-empty
                            {
                            }
                            break;
                    }
                    this.state = 621;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                        {
                            {
                                this.state = 618;
                                this.s_and_w();
                            }
                        }
                        this.state = 623;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 624;
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
        atpoint() {
            let _localctx = new AtpointContext(this._ctx, this.state);
            this.enterRule(_localctx, 58, interviewParser.RULE_atpoint);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 626;
                    this.match(interviewParser.AtPoints);
                    this.state = 627;
                    this.match(interviewParser.NUMERIC);
                    this.state = 628;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 60, interviewParser.RULE_format);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 633;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 630;
                                    this.resource_format();
                                }
                            }
                        }
                        this.state = 635;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                    }
                    this.state = 640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (interviewParser.AmpAudio - 79)) | (1 << (interviewParser.AmpImage - 79)) | (1 << (interviewParser.AmpImageZoom - 79)) | (1 << (interviewParser.AmpImageWAudio - 79)) | (1 << (interviewParser.AmpVideo - 79)) | (1 << (interviewParser.AmpArticle - 79)) | (1 << (interviewParser.AmpDocument - 79)) | (1 << (interviewParser.AmpApp - 79)) | (1 << (interviewParser.AmpWebsite - 79)) | (1 << (interviewParser.AmpStillImageFilm - 79)) | (1 << (interviewParser.AmpAudioLink - 79)) | (1 << (interviewParser.AmpImageLink - 79)) | (1 << (interviewParser.AmpVideoLink - 79)) | (1 << (interviewParser.AmpArticleLink - 79)) | (1 << (interviewParser.AmpDocumentLink - 79)) | (1 << (interviewParser.AmpAppLink - 79)) | (1 << (interviewParser.AmpWebsiteLink - 79)) | (1 << (interviewParser.AmpStillImageFilmLink - 79)))) !== 0) || _la === interviewParser.ColonText) {
                        {
                            this.state = 638;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.ColonText:
                                    {
                                        this.state = 636;
                                        this.match(interviewParser.ColonText);
                                    }
                                    break;
                                case interviewParser.AmpAudio:
                                case interviewParser.AmpImage:
                                case interviewParser.AmpImageZoom:
                                case interviewParser.AmpImageWAudio:
                                case interviewParser.AmpVideo:
                                case interviewParser.AmpArticle:
                                case interviewParser.AmpDocument:
                                case interviewParser.AmpApp:
                                case interviewParser.AmpWebsite:
                                case interviewParser.AmpStillImageFilm:
                                case interviewParser.AmpAudioLink:
                                case interviewParser.AmpImageLink:
                                case interviewParser.AmpVideoLink:
                                case interviewParser.AmpArticleLink:
                                case interviewParser.AmpDocumentLink:
                                case interviewParser.AmpAppLink:
                                case interviewParser.AmpWebsiteLink:
                                case interviewParser.AmpStillImageFilmLink:
                                    {
                                        this.state = 637;
                                        this.resource_format_extra();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 642;
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
            this.enterRule(_localctx, 62, interviewParser.RULE_resource_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 643;
                    _la = this._input.LA(1);
                    if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (interviewParser.AmpArticle - 84)) | (1 << (interviewParser.AmpDocument - 84)) | (1 << (interviewParser.AmpWebsite - 84)) | (1 << (interviewParser.AmpStillImageFilm - 84)) | (1 << (interviewParser.AmpAudioLink - 84)) | (1 << (interviewParser.AmpImageLink - 84)) | (1 << (interviewParser.AmpVideoLink - 84)) | (1 << (interviewParser.AmpArticleLink - 84)) | (1 << (interviewParser.AmpDocumentLink - 84)) | (1 << (interviewParser.AmpAppLink - 84)) | (1 << (interviewParser.AmpWebsiteLink - 84)) | (1 << (interviewParser.AmpStillImageFilmLink - 84)))) !== 0) || _la === interviewParser.BitmarkMinus || _la === interviewParser.BitmarkPlus)) {
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
            this.enterRule(_localctx, 64, interviewParser.RULE_resource_format_extra);
            try {
                this.state = 653;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AmpImage:
                    case interviewParser.AmpImageZoom:
                    case interviewParser.AmpImageWAudio:
                    case interviewParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 645;
                            this.image_format();
                        }
                        break;
                    case interviewParser.AmpAudio:
                    case interviewParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 646;
                            this.audio_format();
                        }
                        break;
                    case interviewParser.AmpVideo:
                    case interviewParser.AmpVideoLink:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 647;
                            this.video_format();
                        }
                        break;
                    case interviewParser.AmpArticle:
                    case interviewParser.AmpArticleLink:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 648;
                            this.article_format();
                        }
                        break;
                    case interviewParser.AmpDocument:
                    case interviewParser.AmpDocumentLink:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 649;
                            this.document_format();
                        }
                        break;
                    case interviewParser.AmpApp:
                    case interviewParser.AmpAppLink:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 650;
                            this.app_format();
                        }
                        break;
                    case interviewParser.AmpWebsite:
                    case interviewParser.AmpWebsiteLink:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 651;
                            this.website_format();
                        }
                        break;
                    case interviewParser.AmpStillImageFilm:
                    case interviewParser.AmpStillImageFilmLink:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 652;
                            this.stillimagefilm_format();
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
            this.enterRule(_localctx, 66, interviewParser.RULE_image_format);
            let _la;
            try {
                this.state = 669;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 655;
                            this.match(interviewParser.AmpImage);
                            this.state = 658;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.Image_type:
                                    {
                                        {
                                            this.state = 656;
                                            this.match(interviewParser.Image_type);
                                        }
                                    }
                                    break;
                                case interviewParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 657;
                                            this.match(interviewParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case interviewParser.CL:
                                case interviewParser.AmpAudio:
                                case interviewParser.AmpImage:
                                case interviewParser.AmpImageZoom:
                                case interviewParser.AmpImageWAudio:
                                case interviewParser.AmpVideo:
                                case interviewParser.AmpArticle:
                                case interviewParser.AmpDocument:
                                case interviewParser.AmpApp:
                                case interviewParser.AmpWebsite:
                                case interviewParser.AmpStillImageFilm:
                                case interviewParser.AmpAudioLink:
                                case interviewParser.AmpImageLink:
                                case interviewParser.AmpVideoLink:
                                case interviewParser.AmpArticleLink:
                                case interviewParser.AmpDocumentLink:
                                case interviewParser.AmpAppLink:
                                case interviewParser.AmpWebsiteLink:
                                case interviewParser.AmpStillImageFilmLink:
                                case interviewParser.ColonText:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case interviewParser.AmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 660;
                            this.match(interviewParser.AmpImageLink);
                            this.state = 662;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 661;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.AmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 664;
                            this.match(interviewParser.AmpImageZoom);
                            this.state = 666;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 665;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.AmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 668;
                            this.match(interviewParser.AmpImageWAudio);
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
            this.enterRule(_localctx, 68, interviewParser.RULE_video_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 671;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpVideo || _la === interviewParser.AmpVideoLink)) {
                        this._errHandler.recoverInline(this);
                    }
                    else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 674;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.COLON) {
                        {
                            this.state = 672;
                            this.match(interviewParser.COLON);
                            this.state = 673;
                            this.match(interviewParser.Video_type);
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
            this.enterRule(_localctx, 70, interviewParser.RULE_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 676;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpArticle || _la === interviewParser.AmpArticleLink)) {
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
            this.enterRule(_localctx, 72, interviewParser.RULE_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 678;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpDocument || _la === interviewParser.AmpDocumentLink)) {
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
            this.enterRule(_localctx, 74, interviewParser.RULE_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 680;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpApp || _la === interviewParser.AmpAppLink)) {
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
            this.enterRule(_localctx, 76, interviewParser.RULE_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 682;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpWebsite || _la === interviewParser.AmpWebsiteLink)) {
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
            this.enterRule(_localctx, 78, interviewParser.RULE_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 684;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.AmpStillImageFilm || _la === interviewParser.AmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 80, interviewParser.RULE_op_article_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 686;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpArticle || _la === interviewParser.OpAmpArticleLink)) {
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
            this.enterRule(_localctx, 82, interviewParser.RULE_op_document_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 688;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpDocument || _la === interviewParser.OpAmpDocumentLink)) {
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
            this.enterRule(_localctx, 84, interviewParser.RULE_op_app_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 690;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpApp || _la === interviewParser.OpAmpAppLink)) {
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
            this.enterRule(_localctx, 86, interviewParser.RULE_op_website_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 692;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpWebsite || _la === interviewParser.OpAmpWebsiteLink)) {
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
            this.enterRule(_localctx, 88, interviewParser.RULE_op_video_format);
            try {
                this.state = 704;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpVideo:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 694;
                            this.match(interviewParser.OpAmpVideo);
                            this.state = 697;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 695;
                                        this.match(interviewParser.COLON);
                                        this.state = 696;
                                        this.match(interviewParser.Video_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case interviewParser.OpAmpVideoLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 699;
                            this.match(interviewParser.OpAmpVideoLink);
                            this.state = 702;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 700;
                                        this.match(interviewParser.COLON);
                                        this.state = 701;
                                        this.match(interviewParser.Video_type);
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
            this.enterRule(_localctx, 90, interviewParser.RULE_op_stillimagefilm_format);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 706;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.OpAmpStillImageFilm || _la === interviewParser.OpAmpStillImageFilmLink)) {
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
            this.enterRule(_localctx, 92, interviewParser.RULE_articlebit);
            try {
                this.state = 714;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpArticle:
                    case interviewParser.OpAmpArticleLink:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 708;
                            this.op_article_format();
                            this.state = 709;
                            this.match(interviewParser.COLON);
                            this.state = 710;
                            this.url();
                            this.state = 711;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.ArticleText:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 713;
                            this.match(interviewParser.ArticleText);
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
            this.enterRule(_localctx, 94, interviewParser.RULE_documentbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 716;
                    this.op_document_format();
                    this.state = 717;
                    this.match(interviewParser.COLON);
                    this.state = 718;
                    this.url();
                    this.state = 719;
                    this.match(interviewParser.CL);
                    this.state = 724;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OPATALT) {
                        {
                            this.state = 720;
                            this.match(interviewParser.OPATALT);
                            this.state = 721;
                            this.words();
                            this.state = 722;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 96, interviewParser.RULE_websitebit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 726;
                    this.op_website_format();
                    this.state = 727;
                    this.match(interviewParser.COLON);
                    this.state = 728;
                    this.url();
                    this.state = 729;
                    this.match(interviewParser.CL);
                    this.state = 734;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OPATALT) {
                        {
                            this.state = 730;
                            this.match(interviewParser.OPATALT);
                            this.state = 731;
                            this.words();
                            this.state = 732;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 98, interviewParser.RULE_appbit);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 736;
                    this.op_app_format();
                    this.state = 737;
                    this.match(interviewParser.COLON);
                    this.state = 740;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case interviewParser.URL:
                            {
                                this.state = 738;
                                this.url();
                            }
                            break;
                        case interviewParser.TEL:
                            {
                                this.state = 739;
                                this.telephone();
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 742;
                    this.match(interviewParser.CL);
                    this.state = 747;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.OPATALT) {
                        {
                            this.state = 743;
                            this.match(interviewParser.OPATALT);
                            this.state = 744;
                            this.words();
                            this.state = 745;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 100, interviewParser.RULE_stillimagefilmbit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 749;
                    this.stillimg_one();
                    this.state = 753;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 750;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 755;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
            this.enterRule(_localctx, 102, interviewParser.RULE_stillimg_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 756;
                    this.op_stillimagefilm_format();
                    this.state = 757;
                    this.match(interviewParser.COLON);
                    this.state = 761;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === interviewParser.S) {
                        {
                            {
                                this.state = 758;
                                this.match(interviewParser.S);
                            }
                        }
                        this.state = 763;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 764;
                    this.url();
                    this.state = 765;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 104, interviewParser.RULE_videobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 767;
                    this.video_one();
                    this.state = 771;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 768;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 773;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
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
            this.enterRule(_localctx, 106, interviewParser.RULE_video_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 774;
                    this.op_video_format();
                    this.state = 775;
                    this.match(interviewParser.COLON);
                    this.state = 776;
                    this.url();
                    this.state = 777;
                    this.match(interviewParser.CL);
                    this.state = 782;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
                        case 1:
                            {
                                this.state = 778;
                                this.match(interviewParser.OPATALT);
                                this.state = 779;
                                this.words();
                                this.state = 780;
                                this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 108, interviewParser.RULE_imagebit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 784;
                    this.image_one();
                    this.state = 788;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 785;
                                    this.image_chained();
                                }
                            }
                        }
                        this.state = 790;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
                    }
                    this.state = 793;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                        case 1:
                            {
                                this.state = 791;
                                this.match(interviewParser.NL);
                                this.state = 792;
                                this.match(interviewParser.ShowInIndex);
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
            this.enterRule(_localctx, 110, interviewParser.RULE_image_one);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 795;
                    this.op_image_format();
                    this.state = 796;
                    this.match(interviewParser.COLON);
                    this.state = 800;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === interviewParser.S) {
                        {
                            {
                                this.state = 797;
                                this.match(interviewParser.S);
                            }
                        }
                        this.state = 802;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 803;
                    this.url();
                    this.state = 804;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 112, interviewParser.RULE_op_image_format);
            let _la;
            try {
                this.state = 820;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpImage:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 806;
                            this.match(interviewParser.OpAmpImage);
                            this.state = 809;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.Image_type:
                                    {
                                        {
                                            this.state = 807;
                                            this.match(interviewParser.Image_type);
                                        }
                                    }
                                    break;
                                case interviewParser.DotArticleAtt:
                                    {
                                        {
                                            this.state = 808;
                                            this.match(interviewParser.DotArticleAtt);
                                        }
                                    }
                                    break;
                                case interviewParser.COLON:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                    case interviewParser.OpAmpImageLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 811;
                            this.match(interviewParser.OpAmpImageLink);
                            this.state = 813;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 812;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.OpAmpImageZoom:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 815;
                            this.match(interviewParser.OpAmpImageZoom);
                            this.state = 817;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.Image_type) {
                                {
                                    this.state = 816;
                                    this.match(interviewParser.Image_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.OpAmpImageWAudio:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 819;
                            this.match(interviewParser.OpAmpImageWAudio);
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
            this.enterRule(_localctx, 114, interviewParser.RULE_image_chained);
            let _la;
            try {
                let _alt;
                this.state = 839;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 822;
                            this.match(interviewParser.AtSrc);
                            this.state = 823;
                            this.match(interviewParser.COLON);
                            this.state = 824;
                            this.url();
                            this.state = 825;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtWidth:
                    case interviewParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 827;
                            _la = this._input.LA(1);
                            if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 828;
                            this.match(interviewParser.COLON);
                            this.state = 829;
                            this.match(interviewParser.NUMERIC);
                            this.state = 830;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPATALT:
                    case interviewParser.OpAtCaption:
                    case interviewParser.OpAtLicense:
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 831;
                            _la = this._input.LA(1);
                            if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (interviewParser.OPATALT - 66)) | (1 << (interviewParser.OpAtCaption - 66)) | (1 << (interviewParser.OpAtLicense - 66)) | (1 << (interviewParser.OpAtCopyright - 66)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 835;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 832;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 837;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                            }
                            this.state = 838;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 116, interviewParser.RULE_image_chained4match);
            let _la;
            try {
                let _alt;
                this.state = 858;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 841;
                            this.match(interviewParser.AtSrc);
                            this.state = 842;
                            this.match(interviewParser.COLON);
                            this.state = 843;
                            this.url();
                            this.state = 844;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtWidth:
                    case interviewParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 846;
                            _la = this._input.LA(1);
                            if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 847;
                            this.match(interviewParser.COLON);
                            this.state = 848;
                            this.match(interviewParser.NUMERIC);
                            this.state = 849;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPATALT:
                    case interviewParser.OpAtCaption:
                    case interviewParser.OpAtLicense:
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 850;
                            _la = this._input.LA(1);
                            if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (interviewParser.OPATALT - 66)) | (1 << (interviewParser.OpAtCaption - 66)) | (1 << (interviewParser.OpAtLicense - 66)) | (1 << (interviewParser.OpAtCopyright - 66)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 854;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 851;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 856;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
                            }
                            this.state = 857;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 118, interviewParser.RULE_audiobit);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 860;
                    this.audio_one();
                    this.state = 864;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 861;
                                    this.resource_chained();
                                }
                            }
                        }
                        this.state = 866;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
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
            this.enterRule(_localctx, 120, interviewParser.RULE_audio_one);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 867;
                    this.op_audio_format();
                    this.state = 868;
                    this.match(interviewParser.COLON);
                    this.state = 869;
                    this.url();
                    this.state = 870;
                    this.match(interviewParser.CL);
                    this.state = 875;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                        case 1:
                            {
                                this.state = 871;
                                this.match(interviewParser.OPATALT);
                                this.state = 872;
                                this.words();
                                this.state = 873;
                                this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 122, interviewParser.RULE_audio_format);
            let _la;
            try {
                this.state = 887;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 877;
                            this.match(interviewParser.AmpAudio);
                            this.state = 880;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.COLON) {
                                {
                                    this.state = 878;
                                    this.match(interviewParser.COLON);
                                    this.state = 879;
                                    this.match(interviewParser.Audio_type);
                                }
                            }
                        }
                        break;
                    case interviewParser.AmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 882;
                            this.match(interviewParser.AmpAudioLink);
                            this.state = 885;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.COLON) {
                                {
                                    this.state = 883;
                                    this.match(interviewParser.COLON);
                                    this.state = 884;
                                    this.match(interviewParser.Audio_type);
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
            this.enterRule(_localctx, 124, interviewParser.RULE_op_audio_format);
            try {
                this.state = 899;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OpAmpAudio:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 889;
                            this.match(interviewParser.OpAmpAudio);
                            this.state = 892;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 112, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 890;
                                        this.match(interviewParser.COLON);
                                        this.state = 891;
                                        this.match(interviewParser.Audio_type);
                                    }
                                    break;
                            }
                        }
                        break;
                    case interviewParser.OpAmpAudioLink:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 894;
                            this.match(interviewParser.OpAmpAudioLink);
                            this.state = 897;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 895;
                                        this.match(interviewParser.COLON);
                                        this.state = 896;
                                        this.match(interviewParser.Audio_type);
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
            this.enterRule(_localctx, 126, interviewParser.RULE_resource_chained);
            let _la;
            try {
                let _alt;
                this.state = 932;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OPA:
                    case interviewParser.AtSrc:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 904;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.OPA:
                                    {
                                        this.state = 901;
                                        this.match(interviewParser.OPA);
                                        this.state = 902;
                                        this.s_and_w();
                                    }
                                    break;
                                case interviewParser.AtSrc:
                                    {
                                        this.state = 903;
                                        this.match(interviewParser.AtSrc);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                            this.state = 906;
                            this.match(interviewParser.COLON);
                            this.state = 910;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 907;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 912;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            }
                            this.state = 915;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 915;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 913;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 914;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 917;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 919;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtWidth:
                    case interviewParser.AtHeight:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 920;
                            _la = this._input.LA(1);
                            if (!(_la === interviewParser.AtWidth || _la === interviewParser.AtHeight)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 921;
                            this.match(interviewParser.COLON);
                            this.state = 922;
                            this.match(interviewParser.NUMERIC);
                            this.state = 923;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPATALT:
                    case interviewParser.OpAtCaption:
                    case interviewParser.OpAtLicense:
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 924;
                            _la = this._input.LA(1);
                            if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (interviewParser.OPATALT - 66)) | (1 << (interviewParser.OpAtCaption - 66)) | (1 << (interviewParser.OpAtLicense - 66)) | (1 << (interviewParser.OpAtCopyright - 66)))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 928;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
                                _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                            }
                            this.state = 931;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 128, interviewParser.RULE_telephone);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 934;
                    this.match(interviewParser.TEL);
                    this.state = 935;
                    this.match(interviewParser.PLUS);
                    this.state = 936;
                    this.match(interviewParser.NUMERIC);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 130, interviewParser.RULE_url);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 938;
                    this.match(interviewParser.URL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 132, interviewParser.RULE_item);
            let _la;
            try {
                this.state = 970;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 940;
                            this.match(interviewParser.OPC);
                            this.state = 941;
                            this.match(interviewParser.CL);
                            this.state = 949;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 945;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.S) {
                                            {
                                                {
                                                    this.state = 942;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 947;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 948;
                                        this.lead();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 951;
                            this.match(interviewParser.OPC);
                            this.state = 952;
                            this.s_and_w();
                            this.state = 957;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (interviewParser.COLON - 26)) | (1 << (interviewParser.AMP - 26)) | (1 << (interviewParser.Greater - 26)) | (1 << (interviewParser.Less - 26)) | (1 << (interviewParser.RightAngle - 26)) | (1 << (interviewParser.RightArrow - 26)) | (1 << (interviewParser.STRING - 26)) | (1 << (interviewParser.SENTENCE - 26)))) !== 0)) {
                                {
                                    this.state = 955;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case interviewParser.COLON:
                                            {
                                                this.state = 953;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case interviewParser.AMP:
                                        case interviewParser.Greater:
                                        case interviewParser.Less:
                                        case interviewParser.RightAngle:
                                        case interviewParser.RightArrow:
                                        case interviewParser.STRING:
                                        case interviewParser.SENTENCE:
                                            {
                                                this.state = 954;
                                                this.words();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException(this);
                                    }
                                }
                                this.state = 959;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 960;
                            this.match(interviewParser.CL);
                            this.state = 968;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 964;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === interviewParser.S) {
                                            {
                                                {
                                                    this.state = 961;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 966;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 967;
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
            this.enterRule(_localctx, 134, interviewParser.RULE_lead);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 972;
                    this.match(interviewParser.OPC);
                    this.state = 973;
                    this.s_and_w();
                    this.state = 978;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (interviewParser.COLON - 26)) | (1 << (interviewParser.AMP - 26)) | (1 << (interviewParser.Greater - 26)) | (1 << (interviewParser.Less - 26)) | (1 << (interviewParser.RightAngle - 26)) | (1 << (interviewParser.RightArrow - 26)) | (1 << (interviewParser.STRING - 26)) | (1 << (interviewParser.SENTENCE - 26)))) !== 0)) {
                        {
                            this.state = 976;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case interviewParser.COLON:
                                    {
                                        this.state = 974;
                                        this.match(interviewParser.COLON);
                                    }
                                    break;
                                case interviewParser.AMP:
                                case interviewParser.Greater:
                                case interviewParser.Less:
                                case interviewParser.RightAngle:
                                case interviewParser.RightArrow:
                                case interviewParser.STRING:
                                case interviewParser.SENTENCE:
                                    {
                                        this.state = 975;
                                        this.words();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException(this);
                            }
                        }
                        this.state = 980;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 981;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 136, interviewParser.RULE_angleref);
            let _la;
            try {
                this.state = 993;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OPRANGLES:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 983;
                            this.match(interviewParser.OPRANGLES);
                            this.state = 985;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 984;
                                    this.s_and_w();
                                }
                            }
                            this.state = 987;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OPRANGLEL:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 988;
                            this.match(interviewParser.OPRANGLEL);
                            this.state = 990;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 989;
                                    this.s_and_w();
                                }
                            }
                            this.state = 992;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 138, interviewParser.RULE_example);
            let _la;
            try {
                this.state = 1002;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtExamplecl:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 995;
                            this.match(interviewParser.AtExamplecl);
                        }
                        break;
                    case interviewParser.AtExampleWithStr:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 996;
                            this.match(interviewParser.AtExampleWithStr);
                        }
                        break;
                    case interviewParser.AtExamplecol:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 997;
                            this.match(interviewParser.AtExamplecol);
                            this.state = 999;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === interviewParser.SENTENCE) {
                                {
                                    this.state = 998;
                                    this.match(interviewParser.SENTENCE);
                                }
                            }
                            this.state = 1001;
                            this.match(interviewParser.EOF);
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
            this.enterRule(_localctx, 140, interviewParser.RULE_bracketed_text);
            let _la;
            try {
                let _alt;
                this.state = 1043;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1004;
                            this.match(interviewParser.BracEnclose);
                            this.state = 1006;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1005;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1029;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    {
                                        this.state = 1008;
                                        this.s_and_w();
                                        this.state = 1018;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1009;
                                                        this.match(interviewParser.NL);
                                                        this.state = 1013;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1010;
                                                                        this.match(interviewParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1015;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1020;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                                        }
                                        this.state = 1024;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1021;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1026;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
                                        }
                                    }
                                }
                                this.state = 1031;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1032;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1033;
                            this.match(interviewParser.BracEnclose);
                            this.state = 1039;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1037;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1034;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1035;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1036;
                                                this.match(interviewParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1041;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1042;
                            this.match(interviewParser.EOF);
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
            this.enterRule(_localctx, 142, interviewParser.RULE_reference);
            let _la;
            try {
                this.state = 1067;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1045;
                            this.match(interviewParser.AtReference);
                            this.state = 1050;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1050;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1046;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1047;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1048;
                                                this.match(interviewParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1049;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1052;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 1054;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1055;
                            this.match(interviewParser.AtReference);
                            this.state = 1063;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1061;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1056;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1057;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1058;
                                                this.match(interviewParser.URL);
                                            }
                                            break;
                                        case 4:
                                            {
                                                this.state = 1059;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                        case 5:
                                            {
                                                this.state = 1060;
                                                this.match(interviewParser.S);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1065;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1066;
                            this.match(interviewParser.EOF);
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
            this.enterRule(_localctx, 144, interviewParser.RULE_progress);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1069;
                    this.match(interviewParser.AtProgress);
                    this.state = 1070;
                    this.s_and_w();
                    this.state = 1071;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 146, interviewParser.RULE_dateprop);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1073;
                    this.match(interviewParser.AtDate);
                    this.state = 1077;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1077;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1074;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1075;
                                        this.match(interviewParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1076;
                                        this.match(interviewParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 1079;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 1081;
                    this.match(interviewParser.CL);
                    this.state = 1083;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === interviewParser.AtDate) {
                        {
                            this.state = 1082;
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
            this.enterRule(_localctx, 148, interviewParser.RULE_dateprop_chained);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1085;
                    this.match(interviewParser.AtDate);
                    this.state = 1089;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            this.state = 1089;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1086;
                                        this.s_and_w();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1087;
                                        this.match(interviewParser.COLON);
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 1088;
                                        this.match(interviewParser.NL);
                                    }
                                    break;
                            }
                        }
                        this.state = 1091;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                    this.state = 1093;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 150, interviewParser.RULE_instruction);
            let _la;
            try {
                let _alt;
                this.state = 1129;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1095;
                            this.match(interviewParser.OPB);
                            this.state = 1097;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1096;
                                        this.s_and_w();
                                    }
                                    break;
                            }
                            this.state = 1120;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    {
                                        this.state = 1099;
                                        this.s_and_w();
                                        this.state = 1109;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1100;
                                                        this.match(interviewParser.NL);
                                                        this.state = 1104;
                                                        this._errHandler.sync(this);
                                                        _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                                            if (_alt === 1) {
                                                                {
                                                                    {
                                                                        this.state = 1101;
                                                                        this.match(interviewParser.S);
                                                                    }
                                                                }
                                                            }
                                                            this.state = 1106;
                                                            this._errHandler.sync(this);
                                                            _alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
                                                        }
                                                    }
                                                }
                                            }
                                            this.state = 1111;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
                                        }
                                        this.state = 1115;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1112;
                                                        this.match(interviewParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1117;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
                                        }
                                    }
                                }
                                this.state = 1122;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1123;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1124;
                            this.match(interviewParser.OPB);
                            this.state = 1126;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1125;
                                    this.s_and_w();
                                }
                            }
                            this.state = 1128;
                            this.match(interviewParser.EOF);
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
            this.enterRule(_localctx, 152, interviewParser.RULE_hint);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1131;
                    this.match(interviewParser.OPQ);
                    this.state = 1133;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                        {
                            {
                                this.state = 1132;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === interviewParser.CL)) {
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
                        this.state = 1135;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.OPDOT) | (1 << interviewParser.S) | (1 << interviewParser.BitInterview) | (1 << interviewParser.BitInterviewinstgrp) | (1 << interviewParser.COMMENT) | (1 << interviewParser.Image_type) | (1 << interviewParser.Audio_type) | (1 << interviewParser.Video_type) | (1 << interviewParser.OPDOLL) | (1 << interviewParser.OPBUL) | (1 << interviewParser.OPESC) | (1 << interviewParser.OPRANGLES) | (1 << interviewParser.OPRANGLEL) | (1 << interviewParser.OPDANGLE) | (1 << interviewParser.OPU) | (1 << interviewParser.OPB) | (1 << interviewParser.OPQ) | (1 << interviewParser.OPA) | (1 << interviewParser.OPP) | (1 << interviewParser.OPM) | (1 << interviewParser.OPS) | (1 << interviewParser.OPR) | (1 << interviewParser.OPC) | (1 << interviewParser.OPHASH) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.PLUS) | (1 << interviewParser.DotAt) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.OR - 32)) | (1 << (interviewParser.HSPL - 32)) | (1 << (interviewParser.HSPL2 - 32)) | (1 << (interviewParser.SSPL - 32)) | (1 << (interviewParser.SSPL2 - 32)) | (1 << (interviewParser.BULLET - 32)) | (1 << (interviewParser.DCANY - 32)) | (1 << (interviewParser.ArticleText - 32)) | (1 << (interviewParser.NOTCL - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)) | (1 << (interviewParser.OPAT - 32)) | (1 << (interviewParser.AtProgress - 32)) | (1 << (interviewParser.AtReference - 32)) | (1 << (interviewParser.AtWidth - 32)) | (1 << (interviewParser.AtHeight - 32)) | (1 << (interviewParser.AtProgressPoints - 32)) | (1 << (interviewParser.AtShortanswer - 32)) | (1 << (interviewParser.AtLonganswer - 32)) | (1 << (interviewParser.AtExampleWithStr - 32)) | (1 << (interviewParser.AtExamplecol - 32)) | (1 << (interviewParser.AtExamplecl - 32)) | (1 << (interviewParser.AtPartialAnswerS - 32)) | (1 << (interviewParser.AtPartialAnswer - 32)) | (1 << (interviewParser.AtLabeltrue - 32)) | (1 << (interviewParser.AtLabelfalse - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (interviewParser.AtPoints - 64)) | (1 << (interviewParser.AtSrc - 64)) | (1 << (interviewParser.OPATALT - 64)) | (1 << (interviewParser.OPAMARK - 64)) | (1 << (interviewParser.ShowInIndex - 64)) | (1 << (interviewParser.OpAtCaption - 64)) | (1 << (interviewParser.OpAtLicense - 64)) | (1 << (interviewParser.OpAtCopyright - 64)) | (1 << (interviewParser.OpAtIsTracked - 64)) | (1 << (interviewParser.OpAtIsInfoOnly - 64)) | (1 << (interviewParser.AtDate - 64)) | (1 << (interviewParser.Http - 64)) | (1 << (interviewParser.Https - 64)) | (1 << (interviewParser.ColonCollection - 64)) | (1 << (interviewParser.ColonBook - 64)) | (1 << (interviewParser.AmpAudio - 64)) | (1 << (interviewParser.AmpImage - 64)) | (1 << (interviewParser.AmpImageZoom - 64)) | (1 << (interviewParser.AmpImageWAudio - 64)) | (1 << (interviewParser.AmpVideo - 64)) | (1 << (interviewParser.AmpArticle - 64)) | (1 << (interviewParser.AmpDocument - 64)) | (1 << (interviewParser.AmpApp - 64)) | (1 << (interviewParser.AmpWebsite - 64)) | (1 << (interviewParser.AmpStillImageFilm - 64)) | (1 << (interviewParser.OpAmpAudio - 64)) | (1 << (interviewParser.OpAmpImage - 64)) | (1 << (interviewParser.OpAmpImageZoom - 64)) | (1 << (interviewParser.OpAmpImageWAudio - 64)) | (1 << (interviewParser.OpAmpVideo - 64)) | (1 << (interviewParser.OpAmpArticle - 64)) | (1 << (interviewParser.OpAmpArticleAtt - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (interviewParser.OpAmpDocument - 96)) | (1 << (interviewParser.OpAmpApp - 96)) | (1 << (interviewParser.OpAmpWebsite - 96)) | (1 << (interviewParser.OpAmpStillImageFilm - 96)) | (1 << (interviewParser.BracEnclose - 96)) | (1 << (interviewParser.AmpAudioLink - 96)) | (1 << (interviewParser.AmpImageLink - 96)) | (1 << (interviewParser.AmpVideoLink - 96)) | (1 << (interviewParser.AmpArticleLink - 96)) | (1 << (interviewParser.AmpDocumentLink - 96)) | (1 << (interviewParser.AmpAppLink - 96)) | (1 << (interviewParser.AmpWebsiteLink - 96)) | (1 << (interviewParser.AmpStillImageFilmLink - 96)) | (1 << (interviewParser.OpAmpAudioLink - 96)) | (1 << (interviewParser.OpAmpImageLink - 96)) | (1 << (interviewParser.OpAmpVideoLink - 96)) | (1 << (interviewParser.OpAmpArticleLink - 96)) | (1 << (interviewParser.OpAmpDocumentLink - 96)) | (1 << (interviewParser.OpAmpAppLink - 96)) | (1 << (interviewParser.OpAmpWebsiteLink - 96)) | (1 << (interviewParser.OpAmpStillImageFilmLink - 96)) | (1 << (interviewParser.BitmarkMinus - 96)) | (1 << (interviewParser.BitmarkPlus - 96)) | (1 << (interviewParser.ColonText - 96)) | (1 << (interviewParser.BASIC - 96)) | (1 << (interviewParser.JPG - 96)) | (1 << (interviewParser.PNG - 96)) | (1 << (interviewParser.GIF - 96)) | (1 << (interviewParser.SVG - 96)) | (1 << (interviewParser.MP2 - 96)) | (1 << (interviewParser.MP3 - 96)) | (1 << (interviewParser.MP4 - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (interviewParser.FLV - 128)) | (1 << (interviewParser.WMV - 128)) | (1 << (interviewParser.MPEG - 128)) | (1 << (interviewParser.MPG - 128)) | (1 << (interviewParser.TEL - 128)) | (1 << (interviewParser.DotArticleAtt - 128)) | (1 << (interviewParser.STAR - 128)) | (1 << (interviewParser.URL - 128)) | (1 << (interviewParser.LIST_LINE - 128)))) !== 0));
                    this.state = 1137;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 154, interviewParser.RULE_title);
            let _la;
            try {
                this.state = 1151;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1139;
                            this.match(interviewParser.OPHASH);
                            this.state = 1142;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1142;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1140;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1141;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1144;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 1146;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1147;
                            this.match(interviewParser.OPHASH);
                            this.state = 1148;
                            this.s_and_w();
                            this.state = 1149;
                            this.match(interviewParser.EOF);
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
            this.enterRule(_localctx, 156, interviewParser.RULE_bool_label);
            try {
                this.state = 1161;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.AtLabeltrue:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1153;
                            this.match(interviewParser.AtLabeltrue);
                            this.state = 1154;
                            this.s_and_w();
                            this.state = 1155;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.AtLabelfalse:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1157;
                            this.match(interviewParser.AtLabelfalse);
                            this.state = 1158;
                            this.s_and_w();
                            this.state = 1159;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 158, interviewParser.RULE_progress_points);
            try {
                this.state = 1172;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1163;
                            this.match(interviewParser.AtProgressPoints);
                            this.state = 1164;
                            this.match(interviewParser.COLON);
                            this.state = 1165;
                            this.match(interviewParser.NUMERIC);
                            this.state = 1166;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1167;
                            this.match(interviewParser.AtProgressPoints);
                            this.state = 1168;
                            this.match(interviewParser.COLON);
                            this.state = 1169;
                            this.s_and_w();
                            this.state = 1170;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 160, interviewParser.RULE_istracked);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1174;
                    this.match(interviewParser.OpAtIsTracked);
                    this.state = 1175;
                    this.s_and_w();
                    this.state = 1176;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 162, interviewParser.RULE_isinfoonly);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1178;
                    this.match(interviewParser.OpAtIsInfoOnly);
                    this.state = 1179;
                    this.s_and_w();
                    this.state = 1180;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 164, interviewParser.RULE_atdef);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1182;
                    this.atdef_();
                    this.state = 1192;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                    while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1186;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === interviewParser.NL) {
                                        {
                                            {
                                                this.state = 1183;
                                                this.match(interviewParser.NL);
                                            }
                                        }
                                        this.state = 1188;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1189;
                                    this.atdef_();
                                }
                            }
                        }
                        this.state = 1194;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
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
            this.enterRule(_localctx, 166, interviewParser.RULE_atdef_);
            let _la;
            try {
                let _alt;
                this.state = 1217;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case interviewParser.OPA:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1195;
                            this.match(interviewParser.OPA);
                            this.state = 1196;
                            this.s_and_w();
                            this.state = 1197;
                            _la = this._input.LA(1);
                            if (!(_la === interviewParser.COLON || _la === interviewParser.DBLCOLON)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1198;
                            this.s_and_w();
                            this.state = 1204;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1202;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1199;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1200;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1201;
                                                this.s_and_w();
                                            }
                                            break;
                                    }
                                }
                                this.state = 1206;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1207;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case interviewParser.OpAtCopyright:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1209;
                            this.match(interviewParser.OpAtCopyright);
                            this.state = 1213;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                            while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1 + 1) {
                                    {
                                        {
                                            this.state = 1210;
                                            this.matchWildcard();
                                        }
                                    }
                                }
                                this.state = 1215;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                            }
                            this.state = 1216;
                            this.match(interviewParser.CL);
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
            this.enterRule(_localctx, 168, interviewParser.RULE_dollarans);
            let _la;
            try {
                this.state = 1238;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1219;
                            this.match(interviewParser.OPDOLL);
                            this.state = 1223;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    this.state = 1223;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1220;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1221;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1222;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1225;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL);
                            this.state = 1227;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1228;
                            this.match(interviewParser.OPDOLL);
                            this.state = 1234;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                                {
                                    this.state = 1232;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 1229;
                                                this.s_and_w();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1230;
                                                this.match(interviewParser.COLON);
                                            }
                                            break;
                                        case 3:
                                            {
                                                this.state = 1231;
                                                this.match(interviewParser.NL);
                                            }
                                            break;
                                    }
                                }
                                this.state = 1236;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1237;
                            this.match(interviewParser.EOF);
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
            this.enterRule(_localctx, 170, interviewParser.RULE_anchor);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1240;
                    this.match(interviewParser.OPDANGLE);
                    this.state = 1242;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << interviewParser.S) | (1 << interviewParser.OPS) | (1 << interviewParser.COLON) | (1 << interviewParser.AMP) | (1 << interviewParser.DBLCOLON) | (1 << interviewParser.Greater))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (interviewParser.Less - 32)) | (1 << (interviewParser.RightAngle - 32)) | (1 << (interviewParser.RightArrow - 32)) | (1 << (interviewParser.DBLEQ - 32)) | (1 << (interviewParser.NUMERIC - 32)) | (1 << (interviewParser.STRING - 32)) | (1 << (interviewParser.NL - 32)) | (1 << (interviewParser.SENTENCE - 32)))) !== 0) || _la === interviewParser.URL) {
                        {
                            this.state = 1241;
                            this.s_and_w();
                        }
                    }
                    this.state = 1244;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 172, interviewParser.RULE_dcolon);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1246;
                    this.match(interviewParser.DBLCOLON);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 174, interviewParser.RULE_lines);
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1252;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    {
                                        this.state = 1248;
                                        this.s_and_w();
                                        this.state = 1250;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1249;
                                                    this.match(interviewParser.NL);
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new NoViableAltException(this);
                        }
                        this.state = 1254;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
        s_and_w() {
            let _localctx = new S_and_wContext(this._ctx, this.state);
            this.enterRule(_localctx, 176, interviewParser.RULE_s_and_w);
            let _la;
            try {
                let _alt;
                this.state = 1303;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 187, this._ctx)) {
                    case 1:
                        this.enterOuterAlt(_localctx, 1);
                        {
                            this.state = 1256;
                            this.match(interviewParser.STRING);
                            this.state = 1263;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1258;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1257;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 1260;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === interviewParser.S);
                                        this.state = 1262;
                                        this.match(interviewParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        this.enterOuterAlt(_localctx, 2);
                        {
                            this.state = 1265;
                            this.words();
                            this.state = 1272;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1267;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1266;
                                                    this.match(interviewParser.S);
                                                }
                                            }
                                            this.state = 1269;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === interviewParser.S);
                                        this.state = 1271;
                                        this.match(interviewParser.NUMERIC);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        this.enterOuterAlt(_localctx, 3);
                        {
                            this.state = 1274;
                            this.match(interviewParser.NUMERIC);
                        }
                        break;
                    case 4:
                        this.enterOuterAlt(_localctx, 4);
                        {
                            this.state = 1275;
                            this.match(interviewParser.OPS);
                            this.state = 1276;
                            this.s_and_w();
                            this.state = 1277;
                            this.match(interviewParser.CL);
                        }
                        break;
                    case 5:
                        this.enterOuterAlt(_localctx, 5);
                        {
                            this.state = 1279;
                            this.match(interviewParser.NL);
                        }
                        break;
                    case 6:
                        this.enterOuterAlt(_localctx, 6);
                        {
                            this.state = 1283;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === interviewParser.S) {
                                {
                                    {
                                        this.state = 1280;
                                        this.match(interviewParser.S);
                                    }
                                }
                                this.state = 1285;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1286;
                            this.match(interviewParser.COLON);
                            this.state = 1290;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1287;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 1292;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            }
                        }
                        break;
                    case 7:
                        this.enterOuterAlt(_localctx, 7);
                        {
                            this.state = 1293;
                            this.match(interviewParser.AMP);
                            this.state = 1297;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1294;
                                            this.match(interviewParser.S);
                                        }
                                    }
                                }
                                this.state = 1299;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            }
                        }
                        break;
                    case 8:
                        this.enterOuterAlt(_localctx, 8);
                        {
                            this.state = 1300;
                            this.match(interviewParser.DBLCOLON);
                        }
                        break;
                    case 9:
                        this.enterOuterAlt(_localctx, 9);
                        {
                            this.state = 1301;
                            this.match(interviewParser.DBLEQ);
                        }
                        break;
                    case 10:
                        this.enterOuterAlt(_localctx, 10);
                        {
                            this.state = 1302;
                            this.match(interviewParser.URL);
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
            this.enterRule(_localctx, 178, interviewParser.RULE_bracket_escaped);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1305;
                    this.match(interviewParser.OPESC);
                    this.state = 1306;
                    this.s_and_w();
                    this.state = 1307;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 180, interviewParser.RULE_clnsp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1309;
                    this.match(interviewParser.CL);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
                else {
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
            this.enterRule(_localctx, 182, interviewParser.RULE_sspl);
            let _la;
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1311;
                    _la = this._input.LA(1);
                    if (!(_la === interviewParser.SSPL || _la === interviewParser.SSPL2)) {
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
            this.enterRule(_localctx, 184, interviewParser.RULE_words);
            let _la;
            try {
                let _alt;
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1322;
                    this._errHandler.sync(this);
                    _alt = 1;
                    do {
                        switch (_alt) {
                            case 1:
                                {
                                    this.state = 1322;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case interviewParser.STRING:
                                            {
                                                this.state = 1313;
                                                this.match(interviewParser.STRING);
                                            }
                                            break;
                                        case interviewParser.SENTENCE:
                                            {
                                                this.state = 1314;
                                                this.match(interviewParser.SENTENCE);
                                            }
                                            break;
                                        case interviewParser.AMP:
                                            {
                                                this.state = 1315;
                                                this.match(interviewParser.AMP);
                                            }
                                            break;
                                        case interviewParser.Greater:
                                            {
                                                this.state = 1316;
                                                this.match(interviewParser.Greater);
                                                this.state = 1317;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === interviewParser.Greater)) {
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
                                        case interviewParser.Less:
                                            {
                                                this.state = 1318;
                                                this.match(interviewParser.Less);
                                                this.state = 1319;
                                                _la = this._input.LA(1);
                                                if (_la <= 0 || (_la === interviewParser.Less)) {
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
                                        case interviewParser.RightArrow:
                                            {
                                                this.state = 1320;
                                                this.match(interviewParser.RightArrow);
                                            }
                                            break;
                                        case interviewParser.RightAngle:
                                            {
                                                this.state = 1321;
                                                this.match(interviewParser.RightAngle);
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
                        this.state = 1324;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
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
            this.enterRule(_localctx, 186, interviewParser.RULE_sp);
            try {
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 1326;
                    this.match(interviewParser.S);
                }
            }
            catch (re) {
                if (re instanceof RecognitionException) {
                    _localctx.exception = re;
                    this._errHandler.reportError(this, re);
                    this._errHandler.recover(this, re);
                }
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
            if (!interviewParser.__ATN) {
                interviewParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(interviewParser._serializedATN));
            }
            return interviewParser.__ATN;
        }
    }
    interviewParser.OPDOT = 1;
    interviewParser.S = 2;
    interviewParser.BitInterview = 3;
    interviewParser.BitInterviewinstgrp = 4;
    interviewParser.COMMENT = 5;
    interviewParser.Image_type = 6;
    interviewParser.Audio_type = 7;
    interviewParser.Video_type = 8;
    interviewParser.OPDOLL = 9;
    interviewParser.OPBUL = 10;
    interviewParser.OPESC = 11;
    interviewParser.OPRANGLES = 12;
    interviewParser.OPRANGLEL = 13;
    interviewParser.OPDANGLE = 14;
    interviewParser.OPU = 15;
    interviewParser.OPB = 16;
    interviewParser.OPQ = 17;
    interviewParser.OPA = 18;
    interviewParser.OPP = 19;
    interviewParser.OPM = 20;
    interviewParser.OPS = 21;
    interviewParser.OPR = 22;
    interviewParser.OPC = 23;
    interviewParser.OPHASH = 24;
    interviewParser.CL = 25;
    interviewParser.COLON = 26;
    interviewParser.AMP = 27;
    interviewParser.DBLCOLON = 28;
    interviewParser.PLUS = 29;
    interviewParser.DotAt = 30;
    interviewParser.Greater = 31;
    interviewParser.Less = 32;
    interviewParser.RightAngle = 33;
    interviewParser.RightArrow = 34;
    interviewParser.DBLEQ = 35;
    interviewParser.OR = 36;
    interviewParser.HSPL = 37;
    interviewParser.HSPL2 = 38;
    interviewParser.SSPL = 39;
    interviewParser.SSPL2 = 40;
    interviewParser.BULLET = 41;
    interviewParser.DCANY = 42;
    interviewParser.ArticleText = 43;
    interviewParser.NOTCL = 44;
    interviewParser.NUMERIC = 45;
    interviewParser.STRING = 46;
    interviewParser.NL = 47;
    interviewParser.SENTENCE = 48;
    interviewParser.OPAT = 49;
    interviewParser.AtProgress = 50;
    interviewParser.AtReference = 51;
    interviewParser.AtWidth = 52;
    interviewParser.AtHeight = 53;
    interviewParser.AtProgressPoints = 54;
    interviewParser.AtShortanswer = 55;
    interviewParser.AtLonganswer = 56;
    interviewParser.AtExampleWithStr = 57;
    interviewParser.AtExamplecol = 58;
    interviewParser.AtExamplecl = 59;
    interviewParser.AtPartialAnswerS = 60;
    interviewParser.AtPartialAnswer = 61;
    interviewParser.AtLabeltrue = 62;
    interviewParser.AtLabelfalse = 63;
    interviewParser.AtPoints = 64;
    interviewParser.AtSrc = 65;
    interviewParser.OPATALT = 66;
    interviewParser.OPAMARK = 67;
    interviewParser.ShowInIndex = 68;
    interviewParser.OpAtCaption = 69;
    interviewParser.OpAtLicense = 70;
    interviewParser.OpAtCopyright = 71;
    interviewParser.OpAtIsTracked = 72;
    interviewParser.OpAtIsInfoOnly = 73;
    interviewParser.AtDate = 74;
    interviewParser.Http = 75;
    interviewParser.Https = 76;
    interviewParser.ColonCollection = 77;
    interviewParser.ColonBook = 78;
    interviewParser.AmpAudio = 79;
    interviewParser.AmpImage = 80;
    interviewParser.AmpImageZoom = 81;
    interviewParser.AmpImageWAudio = 82;
    interviewParser.AmpVideo = 83;
    interviewParser.AmpArticle = 84;
    interviewParser.AmpDocument = 85;
    interviewParser.AmpApp = 86;
    interviewParser.AmpWebsite = 87;
    interviewParser.AmpStillImageFilm = 88;
    interviewParser.OpAmpAudio = 89;
    interviewParser.OpAmpImage = 90;
    interviewParser.OpAmpImageZoom = 91;
    interviewParser.OpAmpImageWAudio = 92;
    interviewParser.OpAmpVideo = 93;
    interviewParser.OpAmpArticle = 94;
    interviewParser.OpAmpArticleAtt = 95;
    interviewParser.OpAmpDocument = 96;
    interviewParser.OpAmpApp = 97;
    interviewParser.OpAmpWebsite = 98;
    interviewParser.OpAmpStillImageFilm = 99;
    interviewParser.BracEnclose = 100;
    interviewParser.AmpAudioLink = 101;
    interviewParser.AmpImageLink = 102;
    interviewParser.AmpVideoLink = 103;
    interviewParser.AmpArticleLink = 104;
    interviewParser.AmpDocumentLink = 105;
    interviewParser.AmpAppLink = 106;
    interviewParser.AmpWebsiteLink = 107;
    interviewParser.AmpStillImageFilmLink = 108;
    interviewParser.OpAmpAudioLink = 109;
    interviewParser.OpAmpImageLink = 110;
    interviewParser.OpAmpVideoLink = 111;
    interviewParser.OpAmpArticleLink = 112;
    interviewParser.OpAmpDocumentLink = 113;
    interviewParser.OpAmpAppLink = 114;
    interviewParser.OpAmpWebsiteLink = 115;
    interviewParser.OpAmpStillImageFilmLink = 116;
    interviewParser.BitmarkMinus = 117;
    interviewParser.BitmarkPlus = 118;
    interviewParser.ColonText = 119;
    interviewParser.BASIC = 120;
    interviewParser.JPG = 121;
    interviewParser.PNG = 122;
    interviewParser.GIF = 123;
    interviewParser.SVG = 124;
    interviewParser.MP2 = 125;
    interviewParser.MP3 = 126;
    interviewParser.MP4 = 127;
    interviewParser.FLV = 128;
    interviewParser.WMV = 129;
    interviewParser.MPEG = 130;
    interviewParser.MPG = 131;
    interviewParser.TEL = 132;
    interviewParser.DotArticleAtt = 133;
    interviewParser.STAR = 134;
    interviewParser.URL = 135;
    interviewParser.LIST_LINE = 136;
    interviewParser.RULE_bitmark = 0;
    interviewParser.RULE_bitmark_ = 1;
    interviewParser.RULE_interviews = 2;
    interviewParser.RULE_interview = 3;
    interviewParser.RULE_interview_instruction_grouped = 4;
    interviewParser.RULE_mcrsep = 5;
    interviewParser.RULE_mcrsep_end = 6;
    interviewParser.RULE_mcrmisc = 7;
    interviewParser.RULE_interview_qanda = 8;
    interviewParser.RULE_interview_qanda__ = 9;
    interviewParser.RULE_interview_sometext = 10;
    interviewParser.RULE_interview_text = 11;
    interviewParser.RULE_interview_answer = 12;
    interviewParser.RULE_longans = 13;
    interviewParser.RULE_shortans = 14;
    interviewParser.RULE_partans = 15;
    interviewParser.RULE_mark_text = 16;
    interviewParser.RULE_query = 17;
    interviewParser.RULE_answer = 18;
    interviewParser.RULE_heading = 19;
    interviewParser.RULE_key_title = 20;
    interviewParser.RULE_value_title = 21;
    interviewParser.RULE_ml_example = 22;
    interviewParser.RULE_bitElem = 23;
    interviewParser.RULE_interview_footer = 24;
    interviewParser.RULE_footer_resource = 25;
    interviewParser.RULE_footer_text = 26;
    interviewParser.RULE_gap = 27;
    interviewParser.RULE_single_gap = 28;
    interviewParser.RULE_atpoint = 29;
    interviewParser.RULE_format = 30;
    interviewParser.RULE_resource_format = 31;
    interviewParser.RULE_resource_format_extra = 32;
    interviewParser.RULE_image_format = 33;
    interviewParser.RULE_video_format = 34;
    interviewParser.RULE_article_format = 35;
    interviewParser.RULE_document_format = 36;
    interviewParser.RULE_app_format = 37;
    interviewParser.RULE_website_format = 38;
    interviewParser.RULE_stillimagefilm_format = 39;
    interviewParser.RULE_op_article_format = 40;
    interviewParser.RULE_op_document_format = 41;
    interviewParser.RULE_op_app_format = 42;
    interviewParser.RULE_op_website_format = 43;
    interviewParser.RULE_op_video_format = 44;
    interviewParser.RULE_op_stillimagefilm_format = 45;
    interviewParser.RULE_articlebit = 46;
    interviewParser.RULE_documentbit = 47;
    interviewParser.RULE_websitebit = 48;
    interviewParser.RULE_appbit = 49;
    interviewParser.RULE_stillimagefilmbit = 50;
    interviewParser.RULE_stillimg_one = 51;
    interviewParser.RULE_videobit = 52;
    interviewParser.RULE_video_one = 53;
    interviewParser.RULE_imagebit = 54;
    interviewParser.RULE_image_one = 55;
    interviewParser.RULE_op_image_format = 56;
    interviewParser.RULE_image_chained = 57;
    interviewParser.RULE_image_chained4match = 58;
    interviewParser.RULE_audiobit = 59;
    interviewParser.RULE_audio_one = 60;
    interviewParser.RULE_audio_format = 61;
    interviewParser.RULE_op_audio_format = 62;
    interviewParser.RULE_resource_chained = 63;
    interviewParser.RULE_telephone = 64;
    interviewParser.RULE_url = 65;
    interviewParser.RULE_item = 66;
    interviewParser.RULE_lead = 67;
    interviewParser.RULE_angleref = 68;
    interviewParser.RULE_example = 69;
    interviewParser.RULE_bracketed_text = 70;
    interviewParser.RULE_reference = 71;
    interviewParser.RULE_progress = 72;
    interviewParser.RULE_dateprop = 73;
    interviewParser.RULE_dateprop_chained = 74;
    interviewParser.RULE_instruction = 75;
    interviewParser.RULE_hint = 76;
    interviewParser.RULE_title = 77;
    interviewParser.RULE_bool_label = 78;
    interviewParser.RULE_progress_points = 79;
    interviewParser.RULE_istracked = 80;
    interviewParser.RULE_isinfoonly = 81;
    interviewParser.RULE_atdef = 82;
    interviewParser.RULE_atdef_ = 83;
    interviewParser.RULE_dollarans = 84;
    interviewParser.RULE_anchor = 85;
    interviewParser.RULE_dcolon = 86;
    interviewParser.RULE_lines = 87;
    interviewParser.RULE_s_and_w = 88;
    interviewParser.RULE_bracket_escaped = 89;
    interviewParser.RULE_clnsp = 90;
    interviewParser.RULE_sspl = 91;
    interviewParser.RULE_words = 92;
    interviewParser.RULE_sp = 93;
    // tslint:disable:no-trailing-whitespace
    interviewParser.ruleNames = [
        "bitmark", "bitmark_", "interviews", "interview", "interview_instruction_grouped",
        "mcrsep", "mcrsep_end", "mcrmisc", "interview_qanda", "interview_qanda__",
        "interview_sometext", "interview_text", "interview_answer", "longans",
        "shortans", "partans", "mark_text", "query", "answer", "heading", "key_title",
        "value_title", "ml_example", "bitElem", "interview_footer", "footer_resource",
        "footer_text", "gap", "single_gap", "atpoint", "format", "resource_format",
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
        "isinfoonly", "atdef", "atdef_", "dollarans", "anchor", "dcolon", "lines",
        "s_and_w", "bracket_escaped", "clnsp", "sspl", "words", "sp",
    ];
    interviewParser._LITERAL_NAMES = [
        undefined, "'[.'", undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'[^'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'[#'", "']'", "':'", "'&'", "'::'",
        "'+'", "'.@'", "'>'", "'<'", "'\u25BA'", "'\u2192'", "'=='", undefined,
        undefined, undefined, undefined, undefined, "'\u2022'", undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'[@'", undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "'http://'", "'https://'", "':collection'",
        "':book'", "'&audio'", "'&image'", "'&image-zoom'", "'&imageWithAudio'",
        "'&video'", "'&article'", "'&document'", "'&app'", "'&website'", "'&stillImageFilm'",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "'&audioLink'",
        "'&imageLink'", "'&videoLink'", "'&articleLink'", "'&documentLink'", "'&appLink'",
        "'&websiteLink'", "'&stillImageFilmLink'", undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "':bitmark--'",
        "':bitmark++'", "':text'", "':basic'", "':jpg'", "':png'", "':gif'", "':svg'",
        "':mp2'", "':mp3'", "':mp4'", "':flv'", "':wmv'", "':mpeg'", "':mpg'",
        "'tel:'", "'.article-attachment'", "'*'",
    ];
    interviewParser._SYMBOLIC_NAMES = [
        undefined, "OPDOT", "S", "BitInterview", "BitInterviewinstgrp", "COMMENT",
        "Image_type", "Audio_type", "Video_type", "OPDOLL", "OPBUL", "OPESC",
        "OPRANGLES", "OPRANGLEL", "OPDANGLE", "OPU", "OPB", "OPQ", "OPA", "OPP",
        "OPM", "OPS", "OPR", "OPC", "OPHASH", "CL", "COLON", "AMP", "DBLCOLON",
        "PLUS", "DotAt", "Greater", "Less", "RightAngle", "RightArrow", "DBLEQ",
        "OR", "HSPL", "HSPL2", "SSPL", "SSPL2", "BULLET", "DCANY", "ArticleText",
        "NOTCL", "NUMERIC", "STRING", "NL", "SENTENCE", "OPAT", "AtProgress",
        "AtReference", "AtWidth", "AtHeight", "AtProgressPoints", "AtShortanswer",
        "AtLonganswer", "AtExampleWithStr", "AtExamplecol", "AtExamplecl", "AtPartialAnswerS",
        "AtPartialAnswer", "AtLabeltrue", "AtLabelfalse", "AtPoints", "AtSrc",
        "OPATALT", "OPAMARK", "ShowInIndex", "OpAtCaption", "OpAtLicense", "OpAtCopyright",
        "OpAtIsTracked", "OpAtIsInfoOnly", "AtDate", "Http", "Https", "ColonCollection",
        "ColonBook", "AmpAudio", "AmpImage", "AmpImageZoom", "AmpImageWAudio",
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
    interviewParser.VOCABULARY = new VocabularyImpl(interviewParser._LITERAL_NAMES, interviewParser._SYMBOLIC_NAMES, []);
    interviewParser._serializedATNSegments = 3;
    interviewParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8A\u0533\x04" +
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
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x03\x02" +
        "\x03\x02\x07\x02\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x07\x02\xC7" +
        "\n\x02\f\x02\x0E\x02\xCA\v\x02\x06\x02\xCC\n\x02\r\x02\x0E\x02\xCD\x03" +
        "\x02\x07\x02\xD1\n\x02\f\x02\x0E\x02\xD4\v\x02\x03\x02\x03\x02\x03\x03" +
        "\x03\x03\x03\x04\x03\x04\x05\x04\xDC\n\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x07\x05\xE2\n\x05\f\x05\x0E\x05\xE5\v\x05\x03\x05\x03\x05\x07\x05" +
        "\xE9\n\x05\f\x05\x0E\x05\xEC\v\x05\x07\x05\xEE\n\x05\f\x05\x0E\x05\xF1" +
        "\v\x05\x03\x05\x03\x05\x07\x05\xF5\n\x05\f\x05\x0E\x05\xF8\v\x05\x03\x05" +
        "\x03\x05\x07\x05\xFC\n\x05\f\x05\x0E\x05\xFF\v\x05\x05\x05\u0101\n\x05" +
        "\x06\x05\u0103\n\x05\r\x05\x0E\x05\u0104\x03\x05\x03\x05\x07\x05\u0109" +
        "\n\x05\f\x05\x0E\x05\u010C\v\x05\x03\x05\x05\x05\u010F\n\x05\x03\x06\x03" +
        "\x06\x03\x06\x03\x06\x07\x06\u0115\n\x06\f\x06\x0E\x06\u0118\v\x06\x03" +
        "\x06\x03\x06\x07\x06\u011C\n\x06\f\x06\x0E\x06\u011F\v\x06\x07\x06\u0121" +
        "\n\x06\f\x06\x0E\x06\u0124\v\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0129" +
        "\n\x06\f\x06\x0E\x06\u012C\v\x06\x07\x06\u012E\n\x06\f\x06\x0E\x06\u0131" +
        "\v\x06\x03\x06\x03\x06\x07\x06\u0135\n\x06\f\x06\x0E\x06\u0138\v\x06\x03" +
        "\x06\x05\x06\u013B\n\x06\x03\x07\x03\x07\x05\x07\u013F\n\x07\x03\b\x03" +
        "\b\x03\t\x03\t\x03\t\x03\n\x03\n\x06\n\u0148\n\n\r\n\x0E\n\u0149\x03\n" +
        "\x07\n\u014D\n\n\f\n\x0E\n\u0150\v\n\x03\v\x05\v\u0153\n\v\x03\v\x03\v" +
        "\x07\v\u0157\n\v\f\v\x0E\v\u015A\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0166\n\v\f\v\x0E\v\u0169\v\v\x03\v\x03" +
        "\v\x05\v\u016D\n\v\x03\v\x07\v\u0170\n\v\f\v\x0E\v\u0173\v\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\v\x07\v\u017A\n\v\f\v\x0E\v\u017D\v\v\x05\v\u017F\n" +
        "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x06\v\u018B" +
        "\n\v\r\v\x0E\v\u018C\x03\v\x03\v\x05\v\u0191\n\v\x03\v\x07\v\u0194\n\v" +
        "\f\v\x0E\v\u0197\v\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u019E\n\v\f\v" +
        "\x0E\v\u01A1\v\v\x05\v\u01A3\n\v\x05\v\u01A5\n\v\x03\f\x06\f\u01A8\n\f" +
        "\r\f\x0E\f\u01A9\x03\r\x03\r\x05\r\u01AE\n\r\x03\r\x03\r\x05\r\u01B2\n" +
        "\r\x03\r\x07\r\u01B5\n\r\f\r\x0E\r\u01B8\v\r\x06\r\u01BA\n\r\r\r\x0E\r" +
        "\u01BB\x03\r\x05\r\u01BF\n\r\x03\x0E\x03\x0E\x05\x0E\u01C3\n\x0E\x06\x0E" +
        "\u01C5\n\x0E\r\x0E\x0E\x0E\u01C6\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11" +
        "\x03\x11\x03\x12\x03\x12\x07\x12\u01D1\n\x12\f\x12\x0E\x12\u01D4\v\x12" +
        "\x03\x12\x03\x12\x03\x13\x06\x13\u01D9\n\x13\r\x13\x0E\x13\u01DA\x03\x13" +
        "\x05\x13\u01DE\n\x13\x03\x14\x06\x14\u01E1\n\x14\r\x14\x0E\x14\u01E2\x03" +
        "\x14\x03\x14\x06\x14\u01E7\n\x14\r\x14\x0E\x14\u01E8\x05\x14\u01EB\n\x14" +
        "\x03\x14\x07\x14\u01EE\n\x14\f\x14\x0E\x14\u01F1\v\x14\x03\x14\x05\x14" +
        "\u01F4\n\x14\x03\x15\x03\x15\x06\x15\u01F8\n\x15\r\x15\x0E\x15\u01F9\x03" +
        "\x15\x03\x15\x03\x16\x03\x16\x06\x16\u0200\n\x16\r\x16\x0E\x16\u0201\x03" +
        "\x16\x03\x16\x03\x17\x03\x17\x06\x17\u0208\n\x17\r\x17\x0E\x17\u0209\x03" +
        "\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0210\n\x18\x03\x18\x03\x18\x05\x18" +
        "\u0214\n\x18\x05\x18\u0216\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
        "\x05\x19\u022F\n\x19\x03\x1A\x07\x1A\u0232\n\x1A\f\x1A\x0E\x1A\u0235\v" +
        "\x1A\x03\x1A\x03\x1A\x07\x1A\u0239\n\x1A\f\x1A\x0E\x1A\u023C\v\x1A\x03" +
        "\x1A\x07\x1A\u023F\n\x1A\f\x1A\x0E\x1A\u0242\v\x1A\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u024E" +
        "\n\x1B\x03\x1B\x07\x1B\u0251\n\x1B\f\x1B\x0E\x1B\u0254\v\x1B\x03\x1C\x03" +
        "\x1C\x06\x1C\u0258\n\x1C\r\x1C\x0E\x1C\u0259\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1D\x07\x1D\u0262\n\x1D\f\x1D\x0E\x1D\u0265\v\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u026B\n\x1E\x03\x1E\x07\x1E\u026E" +
        "\n\x1E\f\x1E\x0E\x1E\u0271\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
        "\x03\x1F\x03 \x07 \u027A\n \f \x0E \u027D\v \x03 \x03 \x07 \u0281\n \f" +
        " \x0E \u0284\v \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
        "\"\x05\"\u0290\n\"\x03#\x03#\x03#\x05#\u0295\n#\x03#\x03#\x05#\u0299\n" +
        "#\x03#\x03#\x05#\u029D\n#\x03#\x05#\u02A0\n#\x03$\x03$\x03$\x05$\u02A5" +
        "\n$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03" +
        "+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x05.\u02BC\n.\x03.\x03.\x03" +
        ".\x05.\u02C1\n.\x05.\u02C3\n.\x03/\x03/\x030\x030\x030\x030\x030\x030" +
        "\x050\u02CD\n0\x031\x031\x031\x031\x031\x031\x031\x031\x051\u02D7\n1\x03" +
        "2\x032\x032\x032\x032\x032\x032\x032\x052\u02E1\n2\x033\x033\x033\x03" +
        "3\x053\u02E7\n3\x033\x033\x033\x033\x033\x053\u02EE\n3\x034\x034\x074" +
        "\u02F2\n4\f4\x0E4\u02F5\v4\x035\x035\x035\x075\u02FA\n5\f5\x0E5\u02FD" +
        "\v5\x035\x035\x035\x036\x036\x076\u0304\n6\f6\x0E6\u0307\v6\x037\x037" +
        "\x037\x037\x037\x037\x037\x037\x057\u0311\n7\x038\x038\x078\u0315\n8\f" +
        "8\x0E8\u0318\v8\x038\x038\x058\u031C\n8\x039\x039\x039\x079\u0321\n9\f" +
        "9\x0E9\u0324\v9\x039\x039\x039\x03:\x03:\x03:\x05:\u032C\n:\x03:\x03:" +
        "\x05:\u0330\n:\x03:\x03:\x05:\u0334\n:\x03:\x05:\u0337\n:\x03;\x03;\x03" +
        ";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u0344\n;\f;\x0E;\u0347" +
        "\v;\x03;\x05;\u034A\n;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
        "<\x03<\x07<\u0357\n<\f<\x0E<\u035A\v<\x03<\x05<\u035D\n<\x03=\x03=\x07" +
        "=\u0361\n=\f=\x0E=\u0364\v=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05" +
        ">\u036E\n>\x03?\x03?\x03?\x05?\u0373\n?\x03?\x03?\x03?\x05?\u0378\n?\x05" +
        "?\u037A\n?\x03@\x03@\x03@\x05@\u037F\n@\x03@\x03@\x03@\x05@\u0384\n@\x05" +
        "@\u0386\n@\x03A\x03A\x03A\x05A\u038B\nA\x03A\x03A\x07A\u038F\nA\fA\x0E" +
        "A\u0392\vA\x03A\x03A\x06A\u0396\nA\rA\x0EA\u0397\x03A\x03A\x03A\x03A\x03" +
        "A\x03A\x03A\x07A\u03A1\nA\fA\x0EA\u03A4\vA\x03A\x05A\u03A7\nA\x03B\x03" +
        "B\x03B\x03B\x03C\x03C\x03D\x03D\x03D\x07D\u03B2\nD\fD\x0ED\u03B5\vD\x03" +
        "D\x05D\u03B8\nD\x03D\x03D\x03D\x03D\x07D\u03BE\nD\fD\x0ED\u03C1\vD\x03" +
        "D\x03D\x07D\u03C5\nD\fD\x0ED\u03C8\vD\x03D\x05D\u03CB\nD\x05D\u03CD\n" +
        "D\x03E\x03E\x03E\x03E\x07E\u03D3\nE\fE\x0EE\u03D6\vE\x03E\x03E\x03F\x03" +
        "F\x05F\u03DC\nF\x03F\x03F\x03F\x05F\u03E1\nF\x03F\x05F\u03E4\nF\x03G\x03" +
        "G\x03G\x03G\x05G\u03EA\nG\x03G\x05G\u03ED\nG\x03H\x03H\x05H\u03F1\nH\x03" +
        "H\x03H\x03H\x07H\u03F6\nH\fH\x0EH\u03F9\vH\x07H\u03FB\nH\fH\x0EH\u03FE" +
        "\vH\x03H\x07H\u0401\nH\fH\x0EH\u0404\vH\x07H\u0406\nH\fH\x0EH\u0409\v" +
        "H\x03H\x03H\x03H\x03H\x03H\x07H\u0410\nH\fH\x0EH\u0413\vH\x03H\x05H\u0416" +
        "\nH\x03I\x03I\x03I\x03I\x03I\x06I\u041D\nI\rI\x0EI\u041E\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x07I\u0428\nI\fI\x0EI\u042B\vI\x03I\x05I\u042E\n" +
        "I\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x06K\u0438\nK\rK\x0EK\u0439" +
        "\x03K\x03K\x05K\u043E\nK\x03L\x03L\x03L\x03L\x06L\u0444\nL\rL\x0EL\u0445" +
        "\x03L\x03L\x03M\x03M\x05M\u044C\nM\x03M\x03M\x03M\x07M\u0451\nM\fM\x0E" +
        "M\u0454\vM\x07M\u0456\nM\fM\x0EM\u0459\vM\x03M\x07M\u045C\nM\fM\x0EM\u045F" +
        "\vM\x07M\u0461\nM\fM\x0EM\u0464\vM\x03M\x03M\x03M\x05M\u0469\nM\x03M\x05" +
        "M\u046C\nM\x03N\x03N\x06N\u0470\nN\rN\x0EN\u0471\x03N\x03N\x03O\x03O\x03" +
        "O\x06O\u0479\nO\rO\x0EO\u047A\x03O\x03O\x03O\x03O\x03O\x05O\u0482\nO\x03" +
        "P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u048C\nP\x03Q\x03Q\x03Q\x03" +
        "Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0497\nQ\x03R\x03R\x03R\x03R\x03S\x03" +
        "S\x03S\x03S\x03T\x03T\x07T\u04A3\nT\fT\x0ET\u04A6\vT\x03T\x07T\u04A9\n" +
        "T\fT\x0ET\u04AC\vT\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x07U\u04B5\nU\f" +
        "U\x0EU\u04B8\vU\x03U\x03U\x03U\x03U\x07U\u04BE\nU\fU\x0EU\u04C1\vU\x03" +
        "U\x05U\u04C4\nU\x03V\x03V\x03V\x03V\x06V\u04CA\nV\rV\x0EV\u04CB\x03V\x03" +
        "V\x03V\x03V\x03V\x07V\u04D3\nV\fV\x0EV\u04D6\vV\x03V\x05V\u04D9\nV\x03" +
        "W\x03W\x05W\u04DD\nW\x03W\x03W\x03X\x03X\x03Y\x03Y\x05Y\u04E5\nY\x06Y" +
        "\u04E7\nY\rY\x0EY\u04E8\x03Z\x03Z\x06Z\u04ED\nZ\rZ\x0EZ\u04EE\x03Z\x05" +
        "Z\u04F2\nZ\x03Z\x03Z\x06Z\u04F6\nZ\rZ\x0EZ\u04F7\x03Z\x05Z\u04FB\nZ\x03" +
        "Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x07Z\u0504\nZ\fZ\x0EZ\u0507\vZ\x03Z\x03" +
        "Z\x07Z\u050B\nZ\fZ\x0EZ\u050E\vZ\x03Z\x03Z\x07Z\u0512\nZ\fZ\x0EZ\u0515" +
        "\vZ\x03Z\x03Z\x03Z\x05Z\u051A\nZ\x03[\x03[\x03[\x03[\x03\\\x03\\\x03]" +
        "\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x06^\u052D\n^\r^\x0E" +
        "^\u052E\x03_\x03_\x03_\x07\u01D2\u0345\u0358\u03A2\u04BF\x02\x02`\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
        ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
        "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
        "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
        "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
        "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
        "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
        "\xB6\x02\xB8\x02\xBA\x02\xBC\x02\x02\x17\x03\x02\'(\x03\x02>?\x06\x02" +
        "VWYZgnwx\x04\x02UUii\x04\x02VVjj\x04\x02WWkk\x04\x02XXll\x04\x02YYmm\x04" +
        "\x02ZZnn\x04\x02``rr\x04\x02bbss\x04\x02cctt\x04\x02dduu\x04\x02eevv\x03" +
        "\x0267\x04\x02DDGI\x03\x02\x1B\x1B\x04\x02\x1C\x1C\x1E\x1E\x03\x02)*\x03" +
        "\x02!!\x03\x02\"\"\x02\u05EF\x02\xCB\x03\x02\x02\x02\x04\xD7\x03\x02\x02" +
        "\x02\x06\xDB\x03\x02\x02\x02\b\xDD\x03\x02\x02\x02\n\u0110\x03\x02\x02" +
        "\x02\f\u013E\x03\x02\x02\x02\x0E\u0140\x03\x02\x02\x02\x10\u0142\x03\x02" +
        "\x02\x02\x12\u0145\x03\x02\x02\x02\x14\u01A4\x03\x02\x02\x02\x16\u01A7" +
        "\x03\x02\x02\x02\x18\u01BE\x03\x02\x02\x02\x1A\u01C4\x03\x02\x02\x02\x1C" +
        "\u01C8\x03\x02\x02\x02\x1E\u01CA\x03\x02\x02\x02 \u01CC\x03\x02\x02\x02" +
        "\"\u01CE\x03\x02\x02\x02$\u01D8\x03\x02\x02\x02&\u01E0\x03\x02\x02\x02" +
        "(\u01F5\x03\x02\x02\x02*\u01FD\x03\x02\x02\x02,\u0205\x03\x02\x02\x02" +
        ".\u020D\x03\x02\x02\x020\u022E\x03\x02\x02\x022\u0233\x03\x02\x02\x02" +
        "4\u024D\x03\x02\x02\x026\u0257\x03\x02\x02\x028\u025B\x03\x02\x02\x02" +
        ":\u0266\x03\x02\x02\x02<\u0274\x03\x02\x02\x02>\u027B\x03\x02\x02\x02" +
        "@\u0285\x03\x02\x02\x02B\u028F\x03\x02\x02\x02D\u029F\x03\x02\x02\x02" +
        "F\u02A1\x03\x02\x02\x02H\u02A6\x03\x02\x02\x02J\u02A8\x03\x02\x02\x02" +
        "L\u02AA\x03\x02\x02\x02N\u02AC\x03\x02\x02\x02P\u02AE\x03\x02\x02\x02" +
        "R\u02B0\x03\x02\x02\x02T\u02B2\x03\x02\x02\x02V\u02B4\x03\x02\x02\x02" +
        "X\u02B6\x03\x02\x02\x02Z\u02C2\x03\x02\x02\x02\\\u02C4\x03\x02\x02\x02" +
        "^\u02CC\x03\x02\x02\x02`\u02CE\x03\x02\x02\x02b\u02D8\x03\x02\x02\x02" +
        "d\u02E2\x03\x02\x02\x02f\u02EF\x03\x02\x02\x02h\u02F6\x03\x02\x02\x02" +
        "j\u0301\x03\x02\x02\x02l\u0308\x03\x02\x02\x02n\u0312\x03\x02\x02\x02" +
        "p\u031D\x03\x02\x02\x02r\u0336\x03\x02\x02\x02t\u0349\x03\x02\x02\x02" +
        "v\u035C\x03\x02\x02\x02x\u035E\x03\x02\x02\x02z\u0365\x03\x02\x02\x02" +
        "|\u0379\x03\x02\x02\x02~\u0385\x03\x02\x02\x02\x80\u03A6\x03\x02\x02\x02" +
        "\x82\u03A8\x03\x02\x02\x02\x84\u03AC\x03\x02\x02\x02\x86\u03CC\x03\x02" +
        "\x02\x02\x88\u03CE\x03\x02\x02\x02\x8A\u03E3\x03\x02\x02\x02\x8C\u03EC" +
        "\x03\x02\x02\x02\x8E\u0415\x03\x02\x02\x02\x90\u042D\x03\x02\x02\x02\x92" +
        "\u042F\x03\x02\x02\x02\x94\u0433\x03\x02\x02\x02\x96\u043F\x03\x02\x02" +
        "\x02\x98\u046B\x03\x02\x02\x02\x9A\u046D\x03\x02\x02\x02\x9C\u0481\x03" +
        "\x02\x02\x02\x9E\u048B\x03\x02\x02\x02\xA0\u0496\x03\x02\x02\x02\xA2\u0498" +
        "\x03\x02\x02\x02\xA4\u049C\x03\x02\x02\x02\xA6\u04A0\x03\x02\x02\x02\xA8" +
        "\u04C3\x03\x02\x02\x02\xAA\u04D8\x03\x02\x02\x02\xAC\u04DA\x03\x02\x02" +
        "\x02\xAE\u04E0\x03\x02\x02\x02\xB0\u04E6\x03\x02\x02\x02\xB2\u0519\x03" +
        "\x02\x02\x02\xB4\u051B\x03\x02\x02\x02\xB6\u051F\x03\x02\x02\x02\xB8\u0521" +
        "\x03\x02\x02\x02\xBA\u052C\x03\x02\x02\x02\xBC\u0530\x03\x02\x02\x02\xBE" +
        "\xC8\x05\x04\x03\x02\xBF\xC1\x07\x04\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1" +
        "\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3" +
        "\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC7\x071\x02\x02\xC6" +
        "\xC2\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8" +
        "\xC9\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB" +
        "\xBE\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
        "\xCE\x03\x02\x02\x02\xCE\xD2\x03\x02\x02\x02\xCF\xD1\x071\x02\x02\xD0" +
        "\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2" +
        "\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5" +
        "\xD6\x07\x02\x02\x03\xD6\x03\x03\x02\x02\x02\xD7\xD8\x05\x06\x04\x02\xD8" +
        "\x05\x03\x02\x02\x02\xD9\xDC\x05\b\x05\x02\xDA\xDC\x05\n\x06\x02\xDB\xD9" +
        "\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x07\x03\x02\x02\x02\xDD\xDE" +
        "\x07\x05\x02\x02\xDE\xDF\x05> \x02\xDF\xE3\x07\x1B\x02\x02\xE0\xE2\x07" +
        "1\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03" +
        "\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xEF\x03\x02\x02\x02\xE5\xE3\x03" +
        "\x02\x02\x02\xE6\xEA\x050\x19\x02\xE7\xE9\x071\x02\x02\xE8\xE7\x03\x02" +
        "\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02" +
        "\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xE6\x03\x02" +
        "\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02" +
        "\x02\x02\xF0\u0102\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF6\x05" +
        "\f\x07\x02\xF3\xF5\x071\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02" +
        "\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\u0100\x03" +
        "\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFD\x05\x12\n\x02\xFA\xFC\x07" +
        "1\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03" +
        "\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD" +
        "\x03\x02\x02\x02\u0100\xF9\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02" +
        "\u0101\u0103\x03\x02\x02\x02\u0102\xF2\x03\x02\x02\x02\u0103\u0104\x03" +
        "\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
        "\u0106\x03\x02\x02\x02\u0106\u010A\x05\x0E\b\x02\u0107\u0109\x071\x02" +
        "\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108" +
        "\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02" +
        "\u010C\u010A\x03\x02\x02\x02\u010D\u010F\x052\x1A\x02\u010E\u010D\x03" +
        "\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\t\x03\x02\x02\x02\u0110" +
        "\u0111\x07\x06\x02\x02\u0111\u0112\x05> \x02\u0112\u0116\x07\x1B\x02\x02" +
        "\u0113\u0115\x071\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03" +
        "\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
        "\u0122\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011D\x050\x19" +
        "\x02\u011A\u011C\x071\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C\u011F" +
        "\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02" +
        "\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0119\x03" +
        "\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
        "\u0123\x03\x02\x02\x02\u0123\u012F\x03\x02\x02\x02\u0124\u0122\x03\x02" +
        "\x02\x02\u0125\u0126\x05\f\x07\x02\u0126\u012A\x05\x12\n\x02\u0127\u0129" +
        "\x071\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02" +
        "\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012E\x03" +
        "\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0125\x03\x02\x02\x02\u012E" +
        "\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02" +
        "\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132" +
        "\u0136\x05\x0E\b\x02\u0133\u0135\x071\x02\x02\u0134\u0133\x03\x02\x02" +
        "\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137" +
        "\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02" +
        "\u0139\u013B\x052\x1A\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03" +
        "\x02\x02\x02\u013B\v\x03\x02\x02\x02\u013C\u013F\t\x02\x02\x02\u013D\u013F" +
        "\x071\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013D\x03\x02\x02\x02" +
        "\u013F\r\x03\x02\x02\x02\u0140\u0141\t\x02\x02\x02\u0141\x0F\x03\x02\x02" +
        "\x02\u0142\u0143\x05\x12\n\x02\u0143\u0144\x071\x02\x02\u0144\x11\x03" +
        "\x02\x02\x02\u0145\u014E\x05\x14\v\x02\u0146\u0148\x071\x02\x02\u0147" +
        "\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u0147\x03\x02" +
        "\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
        "\u014D\x05\x14\v\x02\u014C\u0147\x03\x02\x02\x02\u014D\u0150\x03\x02\x02" +
        "\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\x13" +
        "\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0153\x05\x86D\x02" +
        "\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x03" +
        "\x02\x02\x02\u0154\u0158\x05\x18\r\x02\u0155\u0157\x07\x04\x02\x02\u0156" +
        "\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02" +
        "\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0167\x03\x02\x02\x02\u015A" +
        "\u0158\x03\x02\x02\x02\u015B\u0166\x05\x98M\x02\u015C\u0166\x05\x8CG\x02" +
        "\u015D\u0166\x05\x1E\x10\x02\u015E\u0166\x05\x1C\x0F\x02\u015F\u0166\x05" +
        "\xAAV\x02\u0160\u0166\x05 \x11\x02\u0161\u0166\x05:\x1E\x02\u0162\u0166" +
        "\x05\"\x12\x02\u0163\u0166\x05\x9AN\x02\u0164\u0166\x05\x16\f\x02\u0165" +
        "\u015B\x03\x02\x02\x02\u0165\u015C\x03\x02\x02\x02\u0165\u015D\x03\x02" +
        "\x02\x02\u0165\u015E\x03\x02\x02\x02\u0165\u015F\x03\x02\x02\x02\u0165";
    interviewParser._serializedATNSegment1 = "\u0160\x03\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0165\u0162\x03\x02" +
        "\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166" +
        "\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02" +
        "\x02\x02\u0168\u017E\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
        "\u016C\x071\x02\x02\u016B\u016D\x05\x1A\x0E\x02\u016C\u016B\x03\x02\x02" +
        "\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0171\x03\x02\x02\x02\u016E\u0170" +
        "\x07\x04\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02" +
        "\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u017B\x03" +
        "\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u017A\x05\x8CG\x02\u0175" +
        "\u017A\x05\x1E\x10\x02\u0176\u017A\x05\x1C\x0F\x02\u0177\u017A\x05\xAA" +
        "V\x02\u0178\u017A\x05 \x11\x02\u0179\u0174\x03\x02\x02\x02\u0179\u0175" +
        "\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02" +
        "\u0179\u0178\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03" +
        "\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D" +
        "\u017B\x03\x02\x02\x02\u017E\u016A\x03\x02\x02\x02\u017E\u017F\x03\x02" +
        "\x02\x02\u017F\u01A5\x03\x02\x02\x02\u0180\u018B\x05\x98M\x02\u0181\u018B" +
        "\x05\x8CG\x02\u0182\u018B\x05\x1E\x10\x02\u0183\u018B\x05\x1C\x0F\x02" +
        "\u0184\u018B\x05\xAAV\x02\u0185\u018B\x05 \x11\x02\u0186\u018B\x05:\x1E" +
        "\x02\u0187\u018B\x05\"\x12\x02\u0188\u018B\x05\x9AN\x02\u0189\u018B\x05" +
        "\x16\f\x02\u018A\u0180\x03\x02\x02\x02\u018A\u0181\x03\x02\x02\x02\u018A" +
        "\u0182\x03\x02\x02\x02\u018A\u0183\x03\x02\x02\x02\u018A\u0184\x03\x02" +
        "\x02\x02\u018A\u0185\x03\x02\x02\x02\u018A\u0186\x03\x02\x02\x02\u018A" +
        "\u0187\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02" +
        "\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C" +
        "\u018D\x03\x02\x02\x02\u018D\u01A2\x03\x02\x02\x02\u018E\u0190\x071\x02" +
        "\x02\u018F\u0191\x05\x1A\x0E\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191" +
        "\x03\x02\x02\x02\u0191\u0195\x03\x02\x02\x02\u0192\u0194\x07\x04\x02\x02" +
        "\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03" +
        "\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u019F\x03\x02\x02\x02\u0197" +
        "\u0195\x03\x02\x02\x02\u0198\u019E\x05\x8CG\x02\u0199\u019E\x05\x1E\x10" +
        "\x02\u019A\u019E\x05\x1C\x0F\x02\u019B\u019E\x05\xAAV\x02\u019C\u019E" +
        "\x05 \x11\x02\u019D\u0198\x03\x02\x02\x02\u019D\u0199\x03\x02\x02\x02" +
        "\u019D\u019A\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03" +
        "\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
        "\u01A0\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
        "\x02\x02\u01A2\u018E\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
        "\u01A5\x03\x02\x02\x02\u01A4\u0152\x03\x02\x02\x02\u01A4\u018A\x03\x02" +
        "\x02\x02\u01A5\x15\x03\x02\x02\x02\u01A6\u01A8\x05\xB2Z\x02\u01A7\u01A6" +
        "\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02" +
        "\u01A9\u01AA\x03\x02\x02\x02\u01AA\x17\x03\x02\x02\x02\u01AB\u01AC\x07" +
        "0\x02\x02\u01AC\u01AE\x07\x1B\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD" +
        "\u01AE\x03\x02\x02\x02\u01AE\u01B9\x03\x02\x02\x02\u01AF\u01B1\x05\xBA" +
        "^\x02\u01B0\u01B2\x07\x1C\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1\u01B2" +
        "\x03\x02\x02\x02\u01B2\u01B6\x03\x02\x02\x02\u01B3\u01B5\x071\x02\x02" +
        "\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03" +
        "\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8" +
        "\u01B6\x03\x02\x02\x02\u01B9\u01AF\x03\x02\x02\x02\u01BA\u01BB\x03\x02" +
        "\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC" +
        "\u01BF\x03\x02\x02\x02\u01BD\u01BF\x07\x8A\x02\x02\u01BE\u01AD\x03\x02" +
        "\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF\x19\x03\x02\x02\x02\u01C0\u01C2" +
        "\x05\xBA^\x02\u01C1\u01C3\x07\x1C\x02\x02\u01C2\u01C1\x03\x02\x02\x02" +
        "\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C0\x03" +
        "\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6" +
        "\u01C7\x03\x02\x02\x02\u01C7\x1B\x03\x02\x02\x02\u01C8\u01C9\x07:\x02" +
        "\x02\u01C9\x1D\x03\x02\x02\x02\u01CA\u01CB\x079\x02\x02\u01CB\x1F\x03" +
        "\x02\x02\x02\u01CC\u01CD\t\x03\x02\x02\u01CD!\x03\x02\x02\x02\u01CE\u01D2" +
        "\x07\x17\x02\x02\u01CF\u01D1\v\x02\x02\x02\u01D0\u01CF\x03\x02\x02\x02" +
        "\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D2\u01D0\x03" +
        "\x02\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5" +
        "\u01D6\x07\x1B\x02\x02\u01D6#\x03\x02\x02\x02\u01D7\u01D9\x05\xB2Z\x02" +
        "\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01D8\x03" +
        "\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC" +
        "\u01DE\x07=\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02" +
        "\x02\u01DE%\x03\x02\x02\x02\u01DF\u01E1\x05\xB2Z\x02\u01E0\u01DF\x03\x02" +
        "\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2" +
        "\u01E3\x03\x02\x02\x02\u01E3\u01EA\x03\x02\x02\x02\u01E4\u01E6\x07&\x02" +
        "\x02\u01E5\u01E7\x05\xB2Z\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01E8" +
        "\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02" +
        "\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E4\x03\x02\x02\x02\u01EA\u01EB\x03" +
        "\x02\x02\x02\u01EB\u01F3\x03\x02\x02\x02\u01EC\u01EE\x07\x04\x02\x02\u01ED" +
        "\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02" +
        "\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1" +
        "\u01EF\x03\x02\x02\x02\u01F2\u01F4\x05\x8CG\x02\u01F3\u01EF\x03\x02\x02" +
        "\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\'\x03\x02\x02\x02\u01F5\u01F7\x05" +
        "*\x16\x02\u01F6\u01F8\x071\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01F9" +
        "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
        "\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x05,\x17\x02\u01FC)\x03\x02\x02" +
        "\x02\u01FD\u01FF\x07\x1A\x02\x02\u01FE\u0200\x05\xB2Z\x02\u01FF\u01FE" +
        "\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02" +
        "\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x07" +
        "\x1B\x02\x02\u0204+\x03\x02\x02\x02\u0205\u0207\x07\x1A\x02\x02\u0206" +
        "\u0208\x05\xB2Z\x02\u0207\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02" +
        "\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B" +
        "\x03\x02\x02\x02\u020B\u020C\x07\x1B\x02\x02\u020C-\x03\x02\x02\x02\u020D" +
        "\u0215\x07<\x02\x02\u020E\u0210\x071\x02\x02\u020F\u020E\x03\x02\x02\x02" +
        "\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x05" +
        "\xB0Y\x02\u0212\u0214\x071\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214" +
        "\x03\x02\x02\x02\u0214\u0216\x03\x02\x02\x02\u0215\u020F\x03\x02\x02\x02" +
        "\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x07" +
        "\x1B\x02\x02\u0218/\x03\x02\x02\x02\u0219\u022F\x05\x86D\x02\u021A\u022F" +
        "\x05\xA6T\x02\u021B\u022F\x05\x90I\x02\u021C\u022F\x05\x9CO\x02\u021D" +
        "\u022F\x05\x98M\x02\u021E\u022F\x05\x9AN\x02\u021F\u022F\x058\x1D\x02" +
        "\u0220\u022F\x05\xB2Z\x02\u0221\u022F\x05\x8CG\x02\u0222\u022F\x05\x9E" +
        "P\x02\u0223\u022F\x05n8\x02\u0224\u022F\x05x=\x02\u0225\u022F\x05j6\x02" +
        "\u0226\u022F\x05^0\x02\u0227\u022F\x05`1\x02\u0228\u022F\x05d3\x02\u0229" +
        "\u022F\x05b2\x02\u022A\u022F\x05f4\x02\u022B\u022F\x05\x8AF\x02\u022C" +
        "\u022F\x05\xACW\x02\u022D\u022F\x05\xBC_\x02\u022E\u0219\x03\x02\x02\x02" +
        "\u022E\u021A\x03\x02\x02\x02\u022E\u021B\x03\x02\x02\x02\u022E\u021C\x03" +
        "\x02\x02\x02\u022E\u021D\x03\x02\x02\x02\u022E\u021E\x03\x02\x02\x02\u022E" +
        "\u021F\x03\x02\x02\x02\u022E\u0220\x03\x02\x02\x02\u022E\u0221\x03\x02" +
        "\x02\x02\u022E\u0222\x03\x02\x02\x02\u022E\u0223\x03\x02\x02\x02\u022E" +
        "\u0224\x03\x02\x02\x02\u022E\u0225\x03\x02\x02\x02\u022E\u0226\x03\x02" +
        "\x02\x02\u022E\u0227\x03\x02\x02\x02\u022E\u0228\x03\x02\x02\x02\u022E" +
        "\u0229\x03\x02\x02\x02\u022E\u022A\x03\x02\x02\x02\u022E\u022B\x03\x02" +
        "\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022F" +
        "1\x03\x02\x02\x02\u0230\u0232\x071\x02\x02\u0231\u0230\x03\x02\x02\x02" +
        "\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234\x03" +
        "\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0236" +
        "\u023A\x054\x1B\x02\u0237\u0239\x054\x1B\x02\u0238\u0237\x03\x02\x02\x02" +
        "\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03" +
        "\x02\x02\x02\u023B\u0240\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D" +
        "\u023F\x071\x02\x02\u023E\u023D\x03\x02\x02\x02\u023F\u0242\x03\x02\x02" +
        "\x02\u0240\u023E\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u02413\x03" +
        "\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0243\u024E\x056\x1C\x02\u0244" +
        "\u024E\x05n8\x02\u0245\u024E\x05x=\x02\u0246\u024E\x05j6\x02\u0247\u024E" +
        "\x05^0\x02\u0248\u024E\x05`1\x02\u0249\u024E\x05d3\x02\u024A\u024E\x05" +
        "b2\x02\u024B\u024E\x05\x90I\x02\u024C\u024E\x05\x9AN\x02\u024D\u0243\x03" +
        "\x02\x02\x02\u024D\u0244\x03\x02\x02\x02\u024D\u0245\x03\x02\x02\x02\u024D" +
        "\u0246\x03\x02\x02\x02\u024D\u0247\x03\x02\x02\x02\u024D\u0248\x03\x02" +
        "\x02\x02\u024D\u0249\x03\x02\x02\x02\u024D\u024A\x03\x02\x02\x02\u024D" +
        "\u024B\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E\u0252\x03\x02" +
        "\x02\x02\u024F\u0251\x071\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251\u0254" +
        "\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02" +
        "\u02535\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0258\x07\x8A" +
        "\x02\x02\u0256\u0258\x05\xB2Z\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0256" +
        "\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02" +
        "\u0259\u025A\x03\x02\x02\x02\u025A7\x03\x02\x02\x02\u025B\u0263\x05:\x1E" +
        "\x02\u025C\u0262\x05:\x1E\x02\u025D\u0262\x05\x98M\x02\u025E\u0262\x05" +
        "\x9AN\x02\u025F\u0262\x05\x86D\x02\u0260\u0262\x05\x8CG\x02\u0261\u025C" +
        "\x03\x02\x02\x02\u0261\u025D\x03\x02\x02\x02\u0261\u025E\x03\x02\x02\x02" +
        "\u0261\u025F\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262\u0265\x03" +
        "\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264" +
        "9\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u026A\x07\x11\x02" +
        "\x02\u0267\u026B\x07/\x02\x02\u0268\u026B\x070\x02\x02\u0269\u026B\x03" +
        "\x02\x02\x02\u026A\u0267\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A" +
        "\u0269\x03\x02\x02\x02\u026B\u026F\x03\x02\x02\x02\u026C\u026E\x05\xB2" +
        "Z\x02\u026D\u026C\x03\x02\x02\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D" +
        "\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0272\x03\x02\x02\x02" +
        "\u0271\u026F\x03\x02\x02\x02\u0272\u0273\x05\xB6\\\x02\u0273;\x03\x02" +
        "\x02\x02\u0274\u0275\x07B\x02\x02\u0275\u0276\x07/\x02\x02\u0276\u0277" +
        "\x07\x1B\x02\x02\u0277=\x03\x02\x02\x02\u0278\u027A\x05@!\x02\u0279\u0278" +
        "\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02" +
        "\u027B\u027C\x03\x02\x02\x02\u027C\u0282\x03\x02\x02\x02\u027D\u027B\x03" +
        "\x02\x02\x02\u027E\u0281\x07y\x02\x02\u027F\u0281\x05B\"\x02\u0280\u027E" +
        "\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02" +
        "\u0282\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283?\x03\x02" +
        "\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0286\t\x04\x02\x02\u0286A" +
        "\x03\x02\x02\x02\u0287\u0290\x05D#\x02\u0288\u0290\x05|?\x02\u0289\u0290" +
        "\x05F$\x02\u028A\u0290\x05H%\x02\u028B\u0290\x05J&\x02\u028C\u0290\x05" +
        "L\'\x02\u028D\u0290\x05N(\x02\u028E\u0290\x05P)\x02\u028F\u0287\x03\x02" +
        "\x02\x02\u028F\u0288\x03\x02\x02\x02\u028F\u0289\x03\x02\x02\x02\u028F" +
        "\u028A\x03\x02\x02\x02\u028F\u028B\x03\x02\x02\x02\u028F\u028C\x03\x02" +
        "\x02\x02\u028F\u028D\x03\x02\x02\x02\u028F\u028E\x03\x02\x02\x02\u0290" +
        "C\x03\x02\x02\x02\u0291\u0294\x07R\x02\x02\u0292\u0295\x07\b\x02\x02\u0293" +
        "\u0295\x07\x87\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0293\x03\x02" +
        "\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u02A0\x03\x02\x02\x02\u0296" +
        "\u0298\x07h\x02\x02\u0297\u0299\x07\b\x02\x02\u0298\u0297\x03\x02\x02" +
        "\x02\u0298\u0299\x03\x02\x02\x02\u0299\u02A0\x03\x02\x02\x02\u029A\u029C" +
        "\x07S\x02\x02\u029B\u029D\x07\b\x02\x02\u029C\u029B\x03\x02\x02\x02\u029C" +
        "\u029D\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u02A0\x07T\x02" +
        "\x02\u029F\u0291\x03\x02\x02\x02\u029F\u0296\x03\x02\x02\x02\u029F\u029A" +
        "\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0E\x03\x02\x02\x02\u02A1" +
        "\u02A4\t\x05\x02\x02\u02A2\u02A3\x07\x1C\x02\x02\u02A3\u02A5\x07\n\x02" +
        "\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5G\x03" +
        "\x02\x02\x02\u02A6\u02A7\t\x06\x02\x02\u02A7I\x03\x02\x02\x02\u02A8\u02A9" +
        "\t\x07\x02\x02\u02A9K\x03\x02\x02\x02\u02AA\u02AB\t\b\x02\x02\u02ABM\x03" +
        "\x02\x02\x02\u02AC\u02AD\t\t\x02\x02\u02ADO\x03\x02\x02\x02\u02AE\u02AF" +
        "\t\n\x02\x02\u02AFQ\x03\x02\x02\x02\u02B0\u02B1\t\v\x02\x02\u02B1S\x03" +
        "\x02\x02\x02\u02B2\u02B3\t\f\x02\x02\u02B3U\x03\x02\x02\x02\u02B4\u02B5" +
        "\t\r\x02\x02\u02B5W\x03\x02\x02\x02\u02B6\u02B7\t\x0E\x02\x02\u02B7Y\x03" +
        "\x02\x02\x02\u02B8\u02BB\x07_\x02\x02\u02B9\u02BA\x07\x1C\x02\x02\u02BA" +
        "\u02BC\x07\n\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02" +
        "\x02\u02BC\u02C3\x03\x02\x02\x02\u02BD\u02C0\x07q\x02\x02\u02BE\u02BF" +
        "\x07\x1C\x02\x02\u02BF\u02C1\x07\n\x02\x02\u02C0\u02BE\x03\x02\x02\x02" +
        "\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02B8\x03" +
        "\x02\x02\x02\u02C2\u02BD\x03\x02\x02\x02\u02C3[\x03\x02\x02\x02\u02C4" +
        "\u02C5\t\x0F\x02\x02\u02C5]\x03\x02\x02\x02\u02C6\u02C7\x05R*\x02\u02C7" +
        "\u02C8\x07\x1C\x02\x02\u02C8\u02C9\x05\x84C\x02\u02C9\u02CA\x07\x1B\x02" +
        "\x02\u02CA\u02CD\x03\x02\x02\x02\u02CB\u02CD\x07-\x02\x02\u02CC\u02C6" +
        "\x03\x02\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CD_\x03\x02\x02\x02\u02CE" +
        "\u02CF\x05T+\x02\u02CF\u02D0\x07\x1C\x02\x02\u02D0\u02D1\x05\x84C\x02" +
        "\u02D1\u02D6\x07\x1B\x02\x02\u02D2\u02D3\x07D\x02\x02\u02D3\u02D4\x05" +
        "\xBA^\x02\u02D4\u02D5\x07\x1B\x02\x02\u02D5\u02D7\x03\x02\x02\x02\u02D6" +
        "\u02D2\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7a\x03\x02\x02" +
        "\x02\u02D8\u02D9\x05X-\x02\u02D9\u02DA\x07\x1C\x02\x02\u02DA\u02DB\x05" +
        "\x84C\x02\u02DB\u02E0\x07\x1B\x02\x02\u02DC\u02DD\x07D\x02\x02\u02DD\u02DE" +
        "\x05\xBA^\x02\u02DE\u02DF\x07\x1B\x02\x02\u02DF\u02E1\x03\x02\x02\x02" +
        "\u02E0\u02DC\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1c\x03\x02" +
        "\x02\x02\u02E2\u02E3\x05V,\x02\u02E3\u02E6\x07\x1C\x02\x02\u02E4\u02E7" +
        "\x05\x84C\x02\u02E5\u02E7\x05\x82B\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6" +
        "\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02ED\x07\x1B" +
        "\x02\x02\u02E9\u02EA\x07D\x02\x02\u02EA\u02EB\x05\xBA^\x02\u02EB\u02EC" +
        "\x07\x1B\x02\x02\u02EC\u02EE\x03\x02\x02\x02\u02ED\u02E9\x03\x02\x02\x02" +
        "\u02ED\u02EE\x03\x02\x02\x02\u02EEe\x03\x02\x02\x02\u02EF\u02F3\x05h5" +
        "\x02\u02F0\u02F2\x05\x80A\x02\u02F1\u02F0\x03\x02\x02\x02\u02F2\u02F5" +
        "\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02" +
        "\u02F4g\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\u02F7\x05\\" +
        "/\x02\u02F7\u02FB\x07\x1C\x02\x02\u02F8\u02FA\x07\x04\x02\x02\u02F9\u02F8" +
        "\x03\x02\x02\x02\u02FA\u02FD\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02" +
        "\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02FB\x03" +
        "\x02\x02\x02\u02FE\u02FF\x05\x84C\x02\u02FF\u0300\x07\x1B\x02\x02\u0300" +
        "i\x03\x02\x02\x02\u0301\u0305\x05l7\x02\u0302\u0304\x05\x80A\x02\u0303" +
        "\u0302\x03\x02\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02" +
        "\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306k\x03\x02\x02\x02\u0307\u0305" +
        "\x03\x02\x02\x02\u0308\u0309\x05Z.\x02\u0309\u030A\x07\x1C\x02\x02\u030A" +
        "\u030B\x05\x84C\x02\u030B\u0310\x07\x1B\x02\x02\u030C\u030D\x07D\x02\x02" +
        "\u030D\u030E\x05\xBA^\x02\u030E\u030F\x07\x1B\x02\x02\u030F\u0311\x03" +
        "\x02\x02\x02\u0310\u030C\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311" +
        "m\x03\x02\x02\x02\u0312\u0316\x05p9\x02\u0313\u0315\x05t;\x02\u0314\u0313" +
        "\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02" +
        "\u0316\u0317\x03\x02\x02\x02\u0317\u031B\x03\x02\x02\x02\u0318\u0316\x03" +
        "\x02\x02\x02\u0319\u031A\x071\x02\x02\u031A\u031C\x07F\x02\x02\u031B\u0319" +
        "\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031Co\x03\x02\x02\x02\u031D" +
        "\u031E\x05r:\x02\u031E\u0322\x07\x1C\x02\x02\u031F\u0321\x07\x04\x02\x02" +
        "\u0320\u031F\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322\u0320\x03" +
        "\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0325\x03\x02\x02\x02\u0324" +
        "\u0322\x03\x02\x02\x02\u0325\u0326\x05\x84C\x02\u0326\u0327\x07\x1B\x02" +
        "\x02\u0327q\x03\x02\x02\x02\u0328\u032B\x07\\\x02\x02\u0329\u032C\x07" +
        "\b\x02\x02\u032A\u032C\x07\x87\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B" +
        "\u032A\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u0337\x03\x02" +
        "\x02\x02\u032D\u032F\x07p\x02\x02\u032E\u0330\x07\b\x02\x02\u032F\u032E" +
        "\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0337\x03\x02\x02\x02" +
        "\u0331\u0333\x07]\x02\x02\u0332\u0334\x07\b\x02\x02\u0333\u0332\x03\x02" +
        "\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335" +
        "\u0337\x07^\x02\x02\u0336\u0328\x03\x02\x02\x02\u0336\u032D\x03\x02\x02" +
        "\x02\u0336\u0331\x03\x02\x02\x02\u0336\u0335\x03\x02\x02\x02\u0337s\x03" +
        "\x02\x02\x02\u0338\u0339\x07C\x02\x02\u0339\u033A\x07\x1C\x02\x02\u033A" +
        "\u033B\x05\x84C\x02\u033B\u033C\x07\x1B\x02\x02\u033C\u034A\x03\x02\x02" +
        "\x02\u033D\u033E\t\x10\x02\x02\u033E\u033F\x07\x1C\x02\x02\u033F\u0340" +
        "\x07/\x02\x02\u0340\u034A\x07\x1B\x02\x02\u0341\u0345\t\x11\x02\x02\u0342" +
        "\u0344\v\x02\x02\x02\u0343\u0342\x03\x02\x02\x02\u0344\u0347\x03\x02\x02" +
        "\x02\u0345\u0346\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0348" +
        "\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348\u034A\x07\x1B\x02\x02" +
        "\u0349\u0338\x03\x02\x02\x02\u0349\u033D\x03\x02\x02\x02\u0349\u0341\x03" +
        "\x02\x02\x02\u034Au\x03\x02\x02\x02\u034B\u034C\x07C\x02\x02\u034C\u034D" +
        "\x07\x1C\x02\x02\u034D\u034E\x05\x84C\x02\u034E\u034F\x07\x1B\x02\x02" +
        "\u034F\u035D\x03\x02\x02\x02\u0350\u0351\t\x10\x02\x02\u0351\u0352\x07" +
        "\x1C\x02\x02\u0352\u0353\x07/\x02\x02\u0353\u035D\x07\x1B\x02\x02\u0354" +
        "\u0358\t\x11\x02\x02\u0355\u0357\v\x02\x02\x02\u0356\u0355\x03\x02\x02" +
        "\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0358\u0356" +
        "\x03\x02\x02\x02\u0359\u035B\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02" +
        "\u035B\u035D\x07\x1B\x02\x02\u035C\u034B\x03\x02\x02\x02\u035C\u0350\x03" +
        "\x02\x02\x02\u035C\u0354\x03\x02\x02\x02\u035Dw\x03\x02\x02\x02\u035E" +
        "\u0362\x05z>\x02\u035F\u0361\x05\x80A\x02\u0360\u035F\x03\x02\x02\x02" +
        "\u0361\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03" +
        "\x02\x02\x02\u0363y\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365" +
        "\u0366\x05~@\x02\u0366\u0367\x07\x1C\x02\x02\u0367\u0368\x05\x84C\x02" +
        "\u0368\u036D\x07\x1B\x02\x02\u0369\u036A\x07D\x02\x02\u036A\u036B\x05" +
        "\xBA^\x02\u036B\u036C\x07\x1B\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D" +
        "\u0369\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E{\x03\x02\x02" +
        "\x02\u036F\u0372\x07Q\x02\x02\u0370\u0371\x07\x1C\x02\x02\u0371\u0373" +
        "\x07\t\x02\x02\u0372\u0370\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02" +
        "\u0373\u037A\x03\x02\x02\x02\u0374\u0377\x07g\x02\x02\u0375\u0376\x07" +
        "\x1C\x02\x02\u0376\u0378\x07\t\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377" +
        "\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u036F\x03\x02" +
        "\x02\x02\u0379\u0374\x03\x02\x02\x02\u037A}\x03\x02\x02\x02\u037B\u037E" +
        "\x07[\x02\x02\u037C\u037D\x07\x1C\x02\x02\u037D\u037F\x07\t\x02\x02\u037E" +
        "\u037C\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0386\x03\x02" +
        "\x02\x02\u0380\u0383\x07o\x02\x02\u0381\u0382\x07\x1C\x02\x02\u0382\u0384" +
        "\x07\t\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02" +
        "\u0384\u0386\x03\x02\x02\x02\u0385\u037B\x03\x02\x02\x02\u0385\u0380\x03" +
        "\x02\x02\x02\u0386\x7F\x03\x02\x02\x02\u0387\u0388\x07\x14\x02\x02\u0388" +
        "\u038B\x05\xB2Z\x02\u0389\u038B\x07C\x02\x02\u038A\u0387\x03\x02\x02\x02" +
        "\u038A\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u0390\x07" +
        "\x1C\x02\x02\u038D\u038F\x07\x04\x02\x02\u038E\u038D\x03\x02\x02\x02\u038F" +
        "\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0390\u0391\x03\x02" +
        "\x02\x02\u0391\u0395\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0393" +
        "\u0396\x05\xB2Z\x02\u0394\u0396\x071\x02\x02\u0395\u0393\x03\x02\x02\x02" +
        "\u0395\u0394\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0395\x03" +
        "\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399" +
        "\u03A7\x07\x1B\x02\x02\u039A\u039B\t\x10\x02\x02\u039B\u039C\x07\x1C\x02" +
        "\x02\u039C\u039D\x07/\x02\x02\u039D\u03A7\x07\x1B\x02\x02\u039E\u03A2" +
        "\t\x11\x02\x02\u039F\u03A1\v\x02\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1" +
        "\u03A4\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A2\u03A0\x03\x02" +
        "\x02\x02\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5" +
        "\u03A7\x07\x1B\x02\x02\u03A6\u038A\x03\x02\x02\x02\u03A6\u039A\x03\x02" +
        "\x02\x02\u03A6\u039E\x03\x02\x02\x02\u03A7\x81\x03\x02\x02\x02\u03A8\u03A9" +
        "\x07\x86\x02\x02\u03A9\u03AA\x07\x1F\x02\x02\u03AA\u03AB\x07/\x02\x02" +
        "\u03AB\x83\x03\x02\x02\x02\u03AC\u03AD\x07\x89\x02\x02\u03AD\x85\x03\x02" +
        "\x02\x02\u03AE\u03AF\x07\x19\x02\x02\u03AF\u03B7\x07\x1B\x02\x02\u03B0" +
        "\u03B2\x07\x04\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B5\x03\x02" +
        "\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4" +
        "\u03B6\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B6\u03B8\x05\x88" +
        "E\x02\u03B7\u03B3\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03CD" +
        "\x03\x02\x02\x02\u03B9\u03BA\x07\x19\x02\x02\u03BA\u03BF\x05\xB2Z\x02" +
        "\u03BB\u03BE\x07\x1C\x02\x02\u03BC\u03BE\x05\xBA^\x02\u03BD\u03BB\x03" +
        "\x02\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF" +
        "\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C2\x03\x02" +
        "\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03CA\x07\x1B\x02\x02\u03C3" +
        "\u03C5\x07\x04\x02\x02\u03C4\u03C3\x03\x02\x02\x02\u03C5\u03C8\x03\x02" +
        "\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7" +
        "\u03C9\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CB\x05\x88" +
        "E\x02\u03CA\u03C6\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CD" +
        "\x03\x02\x02\x02\u03CC\u03AE\x03\x02\x02\x02\u03CC\u03B9\x03\x02\x02\x02" +
        "\u03CD\x87\x03\x02\x02\x02\u03CE\u03CF\x07\x19\x02\x02\u03CF\u03D4\x05" +
        "\xB2Z\x02\u03D0\u03D3\x07\x1C\x02\x02\u03D1\u03D3\x05\xBA^\x02\u03D2\u03D0" +
        "\x03\x02\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02" +
        "\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7\x03" +
        "\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03D8\x07\x1B\x02\x02\u03D8" +
        "\x89\x03\x02\x02\x02\u03D9\u03DB\x07\x0E\x02\x02\u03DA\u03DC\x05\xB2Z" +
        "\x02\u03DB\u03DA\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD" +
        "\x03\x02\x02\x02\u03DD\u03E4\x07\x1B\x02\x02\u03DE\u03E0\x07\x0F\x02\x02" +
        "\u03DF\u03E1\x05\xB2Z\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03" +
        "\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E4\x07\x1B\x02\x02\u03E3" +
        "\u03D9\x03\x02\x02\x02\u03E3\u03DE\x03\x02\x02\x02\u03E4\x8B\x03\x02\x02" +
        "\x02\u03E5\u03ED\x07=\x02\x02\u03E6\u03ED\x07;\x02\x02\u03E7\u03E9\x07" +
        "<\x02\x02\u03E8\u03EA\x072\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA" +
        "\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x07\x02\x02\x03" +
        "\u03EC\u03E5\x03\x02\x02\x02\u03EC\u03E6\x03\x02\x02\x02\u03EC\u03E7\x03" +
        "\x02\x02\x02\u03ED\x8D\x03\x02\x02\x02\u03EE\u03F0\x07f\x02\x02\u03EF" +
        "\u03F1\x05\xB2Z\x02\u03F0\u03EF\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02" +
        "\x02\u03F1\u0407\x03\x02\x02\x02\u03F2\u03FC\x05\xB2Z\x02\u03F3\u03F7" +
        "\x071\x02\x02\u03F4\u03F6\x07\x04\x02\x02\u03F5\u03F4\x03\x02\x02\x02" +
        "\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F8\x03";
    interviewParser._serializedATNSegment2 = "\x02\x02\x02\u03F8\u03FB\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03FA" +
        "\u03F3\x03\x02\x02\x02\u03FB\u03FE\x03\x02\x02\x02\u03FC\u03FA\x03\x02" +
        "\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u0402\x03\x02\x02\x02\u03FE" +
        "\u03FC\x03\x02\x02\x02\u03FF\u0401\x071\x02\x02\u0400\u03FF\x03\x02\x02" +
        "\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403" +
        "\x03\x02\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02" +
        "\u0405\u03F2\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0405\x03" +
        "\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A\x03\x02\x02\x02\u0409" +
        "\u0407\x03\x02\x02\x02\u040A\u0416\x07\x1B\x02\x02\u040B\u0411\x07f\x02" +
        "\x02\u040C\u0410\x05\xB2Z\x02\u040D\u0410\x071\x02\x02\u040E\u0410\x07" +
        "\x04\x02\x02\u040F\u040C\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02\u040F" +
        "\u040E\x03\x02\x02\x02\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02" +
        "\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412\u0414\x03\x02\x02\x02\u0413" +
        "\u0411\x03\x02\x02\x02\u0414\u0416\x07\x02\x02\x03\u0415\u03EE\x03\x02" +
        "\x02\x02\u0415\u040B\x03\x02\x02\x02\u0416\x8F\x03\x02\x02\x02\u0417\u041C" +
        "\x075\x02\x02\u0418\u041D\x05\xB2Z\x02\u0419\u041D\x07\x1C\x02\x02\u041A" +
        "\u041D\x07\x89\x02\x02\u041B\u041D\x071\x02\x02\u041C\u0418\x03\x02\x02" +
        "\x02\u041C\u0419\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041B" +
        "\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02" +
        "\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u042E\x07" +
        "\x1B\x02\x02\u0421\u0429\x075\x02\x02\u0422\u0428\x05\xB2Z\x02\u0423\u0428" +
        "\x07\x1C\x02\x02\u0424\u0428\x07\x89\x02\x02\u0425\u0428\x071\x02\x02" +
        "\u0426\u0428\x07\x04\x02\x02\u0427\u0422\x03\x02\x02\x02\u0427\u0423\x03" +
        "\x02\x02\x02\u0427\u0424\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427" +
        "\u0426\x03\x02\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02" +
        "\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042C\x03\x02\x02\x02\u042B" +
        "\u0429\x03\x02\x02\x02\u042C\u042E\x07\x02\x02\x03\u042D\u0417\x03\x02" +
        "\x02\x02\u042D\u0421\x03\x02\x02\x02\u042E\x91\x03\x02\x02\x02\u042F\u0430" +
        "\x074\x02\x02\u0430\u0431\x05\xB2Z\x02\u0431\u0432\x07\x1B\x02\x02\u0432" +
        "\x93\x03\x02\x02\x02\u0433\u0437\x07L\x02\x02\u0434\u0438\x05\xB2Z\x02" +
        "\u0435\u0438\x07\x1C\x02\x02\u0436\u0438\x071\x02\x02\u0437\u0434\x03" +
        "\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438" +
        "\u0439\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02" +
        "\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043D\x07\x1B\x02\x02\u043C" +
        "\u043E\x05\x96L\x02\u043D\u043C\x03\x02\x02\x02\u043D\u043E\x03\x02\x02" +
        "\x02\u043E\x95\x03\x02\x02\x02\u043F\u0443\x07L\x02\x02\u0440\u0444\x05" +
        "\xB2Z\x02\u0441\u0444\x07\x1C\x02\x02\u0442\u0444\x071\x02\x02\u0443\u0440" +
        "\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0442\x03\x02\x02\x02" +
        "\u0444\u0445\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0446\x03" +
        "\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u0448\x07\x1B\x02\x02\u0448" +
        "\x97\x03\x02\x02\x02\u0449\u044B\x07\x12\x02\x02\u044A\u044C\x05\xB2Z" +
        "\x02\u044B\u044A\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u0462" +
        "\x03\x02\x02\x02\u044D\u0457\x05\xB2Z\x02\u044E\u0452\x071\x02\x02\u044F" +
        "\u0451\x07\x04\x02\x02\u0450\u044F\x03\x02\x02\x02\u0451\u0454\x03\x02" +
        "\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453" +
        "\u0456\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0455\u044E\x03\x02" +
        "\x02\x02\u0456\u0459\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457" +
        "\u0458\x03\x02\x02\x02\u0458\u045D\x03\x02\x02\x02\u0459\u0457\x03\x02" +
        "\x02\x02\u045A\u045C\x071\x02\x02\u045B\u045A\x03\x02\x02\x02\u045C\u045F" +
        "\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02" +
        "\u045E\u0461\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u0460\u044D\x03" +
        "\x02\x02\x02\u0461\u0464\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0462" +
        "\u0463\x03\x02\x02\x02\u0463\u0465\x03\x02\x02\x02\u0464\u0462\x03\x02" +
        "\x02\x02\u0465\u046C\x07\x1B\x02\x02\u0466\u0468\x07\x12\x02\x02\u0467" +
        "\u0469\x05\xB2Z\x02\u0468\u0467\x03\x02\x02\x02\u0468\u0469\x03\x02\x02" +
        "\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046C\x07\x02\x02\x03\u046B\u0449" +
        "\x03\x02\x02\x02\u046B\u0466\x03\x02\x02\x02\u046C\x99\x03\x02\x02\x02" +
        "\u046D\u046F\x07\x13\x02\x02\u046E\u0470\n\x12\x02\x02\u046F\u046E\x03" +
        "\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0471" +
        "\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474\x07\x1B" +
        "\x02\x02\u0474\x9B\x03\x02\x02\x02\u0475\u0478\x07\x1A\x02\x02\u0476\u0479" +
        "\x05\xB2Z\x02\u0477\u0479\x071\x02\x02\u0478\u0476\x03\x02\x02\x02\u0478" +
        "\u0477\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u0478\x03\x02" +
        "\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C" +
        "\u0482\x07\x1B\x02\x02\u047D\u047E\x07\x1A\x02\x02\u047E\u047F\x05\xB2" +
        "Z\x02\u047F\u0480\x07\x02\x02\x03\u0480\u0482\x03\x02\x02\x02\u0481\u0475" +
        "\x03\x02\x02\x02\u0481\u047D\x03\x02\x02\x02\u0482\x9D\x03\x02\x02\x02" +
        "\u0483\u0484\x07@\x02\x02\u0484\u0485\x05\xB2Z\x02\u0485\u0486\x07\x1B" +
        "\x02\x02\u0486\u048C\x03\x02\x02\x02\u0487\u0488\x07A\x02\x02\u0488\u0489" +
        "\x05\xB2Z\x02\u0489\u048A\x07\x1B\x02\x02\u048A\u048C\x03\x02\x02\x02" +
        "\u048B\u0483\x03\x02\x02\x02\u048B\u0487\x03\x02\x02\x02\u048C\x9F\x03" +
        "\x02\x02\x02\u048D\u048E\x078\x02\x02\u048E\u048F\x07\x1C\x02\x02\u048F" +
        "\u0490\x07/\x02\x02\u0490\u0497\x07\x1B\x02\x02\u0491\u0492\x078\x02\x02" +
        "\u0492\u0493\x07\x1C\x02\x02\u0493\u0494\x05\xB2Z\x02\u0494\u0495\x07" +
        "\x1B\x02\x02\u0495\u0497\x03\x02\x02\x02\u0496\u048D\x03\x02\x02\x02\u0496" +
        "\u0491\x03\x02\x02\x02\u0497\xA1\x03\x02\x02\x02\u0498\u0499\x07J\x02" +
        "\x02\u0499\u049A\x05\xB2Z\x02\u049A\u049B\x07\x1B\x02\x02\u049B\xA3\x03" +
        "\x02\x02\x02\u049C\u049D\x07K\x02\x02\u049D\u049E\x05\xB2Z\x02\u049E\u049F" +
        "\x07\x1B\x02\x02\u049F\xA5\x03\x02\x02\x02\u04A0\u04AA\x05\xA8U\x02\u04A1" +
        "\u04A3\x071\x02\x02\u04A2\u04A1\x03\x02\x02\x02\u04A3\u04A6\x03\x02\x02" +
        "\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A7" +
        "\x03\x02\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A7\u04A9\x05\xA8U\x02" +
        "\u04A8\u04A4\x03\x02\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA\u04A8\x03" +
        "\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\xA7\x03\x02\x02\x02\u04AC" +
        "\u04AA\x03\x02\x02\x02\u04AD\u04AE\x07\x14\x02\x02\u04AE\u04AF\x05\xB2" +
        "Z\x02\u04AF\u04B0\t\x13\x02\x02\u04B0\u04B6\x05\xB2Z\x02\u04B1\u04B5\x07" +
        "1\x02\x02\u04B2\u04B5\x07\x1C\x02\x02\u04B3\u04B5\x05\xB2Z\x02\u04B4\u04B1" +
        "\x03\x02\x02\x02\u04B4\u04B2\x03\x02\x02\x02\u04B4\u04B3\x03\x02\x02\x02" +
        "\u04B5\u04B8\x03\x02\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03" +
        "\x02\x02\x02\u04B7\u04B9\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B9" +
        "\u04BA\x07\x1B\x02\x02\u04BA\u04C4\x03\x02\x02\x02\u04BB\u04BF\x07I\x02" +
        "\x02\u04BC\u04BE\v\x02\x02\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\u04C1" +
        "\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02" +
        "\u04C0\u04C2\x03\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04C4\x07" +
        "\x1B\x02\x02\u04C3\u04AD\x03\x02\x02\x02\u04C3\u04BB\x03\x02\x02\x02\u04C4" +
        "\xA9\x03\x02\x02\x02\u04C5\u04C9\x07\v\x02\x02\u04C6\u04CA\x05\xB2Z\x02" +
        "\u04C7\u04CA\x07\x1C\x02\x02\u04C8\u04CA\x071\x02\x02\u04C9\u04C6\x03" +
        "\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02\u04C9\u04C8\x03\x02\x02\x02\u04CA" +
        "\u04CB\x03\x02\x02\x02\u04CB\u04C9\x03\x02\x02\x02\u04CB\u04CC\x03\x02" +
        "\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04D9\x07\x1B\x02\x02\u04CE" +
        "\u04D4\x07\v\x02\x02\u04CF\u04D3\x05\xB2Z\x02\u04D0\u04D3\x07\x1C\x02" +
        "\x02\u04D1\u04D3\x071\x02\x02\u04D2\u04CF\x03\x02\x02\x02\u04D2\u04D0" +
        "\x03\x02\x02\x02\u04D2\u04D1\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02" +
        "\u04D4\u04D2\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D7\x03" +
        "\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04D9\x07\x02\x02\x03\u04D8" +
        "\u04C5\x03\x02\x02\x02\u04D8\u04CE\x03\x02\x02\x02\u04D9\xAB\x03\x02\x02" +
        "\x02\u04DA\u04DC\x07\x10\x02\x02\u04DB\u04DD\x05\xB2Z\x02\u04DC\u04DB" +
        "\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02" +
        "\u04DE\u04DF\x07\x1B\x02\x02\u04DF\xAD\x03\x02\x02\x02\u04E0\u04E1\x07" +
        "\x1E\x02\x02\u04E1\xAF\x03\x02\x02\x02\u04E2\u04E4\x05\xB2Z\x02\u04E3" +
        "\u04E5\x071\x02\x02\u04E4\u04E3\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02" +
        "\x02\u04E5\u04E7\x03\x02\x02\x02\u04E6\u04E2\x03\x02\x02\x02\u04E7\u04E8" +
        "\x03\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02" +
        "\u04E9\xB1\x03\x02\x02\x02\u04EA\u04F1\x070\x02\x02\u04EB\u04ED\x07\x04" +
        "\x02\x02\u04EC\u04EB\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE" +
        "\u04EC\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F0\x03\x02" +
        "\x02\x02\u04F0\u04F2\x07/\x02\x02\u04F1\u04EC\x03\x02\x02\x02\u04F1\u04F2" +
        "\x03\x02\x02\x02\u04F2\u051A\x03\x02\x02\x02\u04F3\u04FA\x05\xBA^\x02" +
        "\u04F4\u04F6\x07\x04\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03" +
        "\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8" +
        "\u04F9\x03\x02\x02\x02\u04F9\u04FB\x07/\x02\x02\u04FA\u04F5\x03\x02\x02" +
        "\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u051A\x03\x02\x02\x02\u04FC\u051A" +
        "\x07/\x02\x02\u04FD\u04FE\x07\x17\x02\x02\u04FE\u04FF\x05\xB2Z\x02\u04FF" +
        "\u0500\x07\x1B\x02\x02\u0500\u051A\x03\x02\x02\x02\u0501\u051A\x071\x02" +
        "\x02\u0502\u0504\x07\x04\x02\x02\u0503\u0502\x03\x02\x02\x02\u0504\u0507" +
        "\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02" +
        "\u0506\u0508\x03\x02\x02\x02\u0507\u0505\x03\x02\x02\x02\u0508\u050C\x07" +
        "\x1C\x02\x02\u0509\u050B\x07\x04\x02\x02\u050A\u0509\x03\x02\x02\x02\u050B" +
        "\u050E\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050D\x03\x02" +
        "\x02\x02\u050D\u051A\x03\x02\x02\x02\u050E\u050C\x03\x02\x02\x02\u050F" +
        "\u0513\x07\x1D\x02\x02\u0510\u0512\x07\x04\x02\x02\u0511\u0510\x03\x02" +
        "\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513" +
        "\u0514\x03\x02\x02\x02\u0514\u051A\x03\x02\x02\x02\u0515\u0513\x03\x02" +
        "\x02\x02\u0516\u051A\x07\x1E\x02\x02\u0517\u051A\x07%\x02\x02\u0518\u051A" +
        "\x07\x89\x02\x02\u0519\u04EA\x03\x02\x02\x02\u0519\u04F3\x03\x02\x02\x02" +
        "\u0519\u04FC\x03\x02\x02\x02\u0519\u04FD\x03\x02\x02\x02\u0519\u0501\x03" +
        "\x02\x02\x02\u0519\u0505\x03\x02\x02\x02\u0519\u050F\x03\x02\x02\x02\u0519" +
        "\u0516\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u0519\u0518\x03\x02" +
        "\x02\x02\u051A\xB3\x03\x02\x02\x02\u051B\u051C\x07\r\x02\x02\u051C\u051D" +
        "\x05\xB2Z\x02\u051D\u051E\x07\x1B\x02\x02\u051E\xB5\x03\x02\x02\x02\u051F" +
        "\u0520\x07\x1B\x02\x02\u0520\xB7\x03\x02\x02\x02\u0521\u0522\t\x14\x02" +
        "\x02\u0522\xB9\x03\x02\x02\x02\u0523\u052D\x070\x02\x02\u0524\u052D\x07" +
        "2\x02\x02\u0525\u052D\x07\x1D\x02\x02\u0526\u0527\x07!\x02\x02\u0527\u052D" +
        "\n\x15\x02\x02\u0528\u0529\x07\"\x02\x02\u0529\u052D\n\x16\x02\x02\u052A" +
        "\u052D\x07$\x02\x02\u052B\u052D\x07#\x02\x02\u052C\u0523\x03\x02\x02\x02" +
        "\u052C\u0524\x03\x02\x02\x02\u052C\u0525\x03\x02\x02\x02\u052C\u0526\x03" +
        "\x02\x02\x02\u052C\u0528\x03\x02\x02\x02\u052C\u052A\x03\x02\x02\x02\u052C" +
        "\u052B\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u052C\x03\x02" +
        "\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\xBB\x03\x02\x02\x02\u0530\u0531" +
        "\x07\x04\x02\x02\u0531\xBD\x03\x02\x02\x02\xC0\xC2\xC8\xCD\xD2\xDB\xE3" +
        "\xEA\xEF\xF6\xFD\u0100\u0104\u010A\u010E\u0116\u011D\u0122\u012A\u012F" +
        "\u0136\u013A\u013E\u0149\u014E\u0152\u0158\u0165\u0167\u016C\u0171\u0179" +
        "\u017B\u017E\u018A\u018C\u0190\u0195\u019D\u019F\u01A2\u01A4\u01A9\u01AD" +
        "\u01B1\u01B6\u01BB\u01BE\u01C2\u01C6\u01D2\u01DA\u01DD\u01E2\u01E8\u01EA" +
        "\u01EF\u01F3\u01F9\u0201\u0209\u020F\u0213\u0215\u022E\u0233\u023A\u0240" +
        "\u024D\u0252\u0257\u0259\u0261\u0263\u026A\u026F\u027B\u0280\u0282\u028F" +
        "\u0294\u0298\u029C\u029F\u02A4\u02BB\u02C0\u02C2\u02CC\u02D6\u02E0\u02E6" +
        "\u02ED\u02F3\u02FB\u0305\u0310\u0316\u031B\u0322\u032B\u032F\u0333\u0336" +
        "\u0345\u0349\u0358\u035C\u0362\u036D\u0372\u0377\u0379\u037E\u0383\u0385" +
        "\u038A\u0390\u0395\u0397\u03A2\u03A6\u03B3\u03B7\u03BD\u03BF\u03C6\u03CA" +
        "\u03CC\u03D2\u03D4\u03DB\u03E0\u03E3\u03E9\u03EC\u03F0\u03F7\u03FC\u0402" +
        "\u0407\u040F\u0411\u0415\u041C\u041E\u0427\u0429\u042D\u0437\u0439\u043D" +
        "\u0443\u0445\u044B\u0452\u0457\u045D\u0462\u0468\u046B\u0471\u0478\u047A" +
        "\u0481\u048B\u0496\u04A4\u04AA\u04B4\u04B6\u04BF\u04C3\u04C9\u04CB\u04D2" +
        "\u04D4\u04D8\u04DC\u04E4\u04E8\u04EE\u04F1\u04F7\u04FA\u0505\u050C\u0513" +
        "\u0519\u052C\u052E";
    interviewParser._serializedATN = Utils.join([
        interviewParser._serializedATNSegment0,
        interviewParser._serializedATNSegment1,
        interviewParser._serializedATNSegment2,
    ], "");
    return interviewParser;
})();
export { interviewParser };
export class BitmarkContext extends ParserRuleContext {
    EOF() { return this.getToken(interviewParser.EOF, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bitmark; }
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
    interviews() {
        return this.getRuleContext(0, InterviewsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bitmark_; }
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
export class InterviewsContext extends ParserRuleContext {
    interview() {
        return this.tryGetRuleContext(0, InterviewContext);
    }
    interview_instruction_grouped() {
        return this.tryGetRuleContext(0, Interview_instruction_groupedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interviews; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterviews) {
            listener.enterInterviews(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterviews) {
            listener.exitInterviews(this);
        }
    }
}
export class InterviewContext extends ParserRuleContext {
    BitInterview() { return this.getToken(interviewParser.BitInterview, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    mcrsep_end() {
        return this.getRuleContext(0, Mcrsep_endContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
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
    interview_footer() {
        return this.tryGetRuleContext(0, Interview_footerContext);
    }
    interview_qanda(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_qandaContext);
        }
        else {
            return this.getRuleContext(i, Interview_qandaContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview) {
            listener.enterInterview(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview) {
            listener.exitInterview(this);
        }
    }
}
export class Interview_instruction_groupedContext extends ParserRuleContext {
    BitInterviewinstgrp() { return this.getToken(interviewParser.BitInterviewinstgrp, 0); }
    format() {
        return this.getRuleContext(0, FormatContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    mcrsep_end() {
        return this.getRuleContext(0, Mcrsep_endContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
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
    interview_footer() {
        return this.tryGetRuleContext(0, Interview_footerContext);
    }
    interview_qanda(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_qandaContext);
        }
        else {
            return this.getRuleContext(i, Interview_qandaContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_instruction_grouped; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_instruction_grouped) {
            listener.enterInterview_instruction_grouped(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_instruction_grouped) {
            listener.exitInterview_instruction_grouped(this);
        }
    }
}
export class McrsepContext extends ParserRuleContext {
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    HSPL() { return this.tryGetToken(interviewParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(interviewParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mcrsep; }
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
    HSPL() { return this.tryGetToken(interviewParser.HSPL, 0); }
    HSPL2() { return this.tryGetToken(interviewParser.HSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mcrsep_end; }
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
export class McrmiscContext extends ParserRuleContext {
    interview_qanda() {
        return this.getRuleContext(0, Interview_qandaContext);
    }
    NL() { return this.getToken(interviewParser.NL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mcrmisc; }
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
export class Interview_qandaContext extends ParserRuleContext {
    interview_qanda__(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_qanda__Context);
        }
        else {
            return this.getRuleContext(i, Interview_qanda__Context);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_qanda; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_qanda) {
            listener.enterInterview_qanda(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_qanda) {
            listener.exitInterview_qanda(this);
        }
    }
}
export class Interview_qanda__Context extends ParserRuleContext {
    interview_text() {
        return this.tryGetRuleContext(0, Interview_textContext);
    }
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
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
    example(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExampleContext);
        }
        else {
            return this.getRuleContext(i, ExampleContext);
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
    longans(i) {
        if (i === undefined) {
            return this.getRuleContexts(LongansContext);
        }
        else {
            return this.getRuleContext(i, LongansContext);
        }
    }
    dollarans(i) {
        if (i === undefined) {
            return this.getRuleContexts(DollaransContext);
        }
        else {
            return this.getRuleContext(i, DollaransContext);
        }
    }
    partans(i) {
        if (i === undefined) {
            return this.getRuleContexts(PartansContext);
        }
        else {
            return this.getRuleContext(i, PartansContext);
        }
    }
    single_gap(i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_gapContext);
        }
        else {
            return this.getRuleContext(i, Single_gapContext);
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
    hint(i) {
        if (i === undefined) {
            return this.getRuleContexts(HintContext);
        }
        else {
            return this.getRuleContext(i, HintContext);
        }
    }
    interview_sometext(i) {
        if (i === undefined) {
            return this.getRuleContexts(Interview_sometextContext);
        }
        else {
            return this.getRuleContext(i, Interview_sometextContext);
        }
    }
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    interview_answer() {
        return this.tryGetRuleContext(0, Interview_answerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_qanda__; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_qanda__) {
            listener.enterInterview_qanda__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_qanda__) {
            listener.exitInterview_qanda__(this);
        }
    }
}
export class Interview_sometextContext extends ParserRuleContext {
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
    get ruleIndex() { return interviewParser.RULE_interview_sometext; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_sometext) {
            listener.enterInterview_sometext(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_sometext) {
            listener.exitInterview_sometext(this);
        }
    }
}
export class Interview_textContext extends ParserRuleContext {
    STRING() { return this.tryGetToken(interviewParser.STRING, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    LIST_LINE() { return this.tryGetToken(interviewParser.LIST_LINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_text) {
            listener.enterInterview_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_text) {
            listener.exitInterview_text(this);
        }
    }
}
export class Interview_answerContext extends ParserRuleContext {
    words(i) {
        if (i === undefined) {
            return this.getRuleContexts(WordsContext);
        }
        else {
            return this.getRuleContext(i, WordsContext);
        }
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_answer; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_answer) {
            listener.enterInterview_answer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_answer) {
            listener.exitInterview_answer(this);
        }
    }
}
export class LongansContext extends ParserRuleContext {
    AtLonganswer() { return this.getToken(interviewParser.AtLonganswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_longans; }
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
    AtShortanswer() { return this.getToken(interviewParser.AtShortanswer, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_shortans; }
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
export class PartansContext extends ParserRuleContext {
    AtPartialAnswer() { return this.tryGetToken(interviewParser.AtPartialAnswer, 0); }
    AtPartialAnswerS() { return this.tryGetToken(interviewParser.AtPartialAnswerS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_partans; }
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
export class Mark_textContext extends ParserRuleContext {
    OPS() { return this.getToken(interviewParser.OPS, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_mark_text; }
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
export class QueryContext extends ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtExamplecl() { return this.tryGetToken(interviewParser.AtExamplecl, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_query; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
}
export class AnswerContext extends ParserRuleContext {
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    OR() { return this.tryGetToken(interviewParser.OR, 0); }
    example() {
        return this.tryGetRuleContext(0, ExampleContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_answer; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnswer) {
            listener.enterAnswer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnswer) {
            listener.exitAnswer(this);
        }
    }
}
export class HeadingContext extends ParserRuleContext {
    key_title() {
        return this.getRuleContext(0, Key_titleContext);
    }
    value_title() {
        return this.getRuleContext(0, Value_titleContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_heading; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeading) {
            listener.enterHeading(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeading) {
            listener.exitHeading(this);
        }
    }
}
export class Key_titleContext extends ParserRuleContext {
    OPHASH() { return this.getToken(interviewParser.OPHASH, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
    get ruleIndex() { return interviewParser.RULE_key_title; }
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
export class Value_titleContext extends ParserRuleContext {
    OPHASH() { return this.getToken(interviewParser.OPHASH, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
    get ruleIndex() { return interviewParser.RULE_value_title; }
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
export class Ml_exampleContext extends ParserRuleContext {
    AtExamplecol() { return this.getToken(interviewParser.AtExamplecol, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    lines() {
        return this.tryGetRuleContext(0, LinesContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_ml_example; }
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
export class BitElemContext extends ParserRuleContext {
    item() {
        return this.tryGetRuleContext(0, ItemContext);
    }
    atdef() {
        return this.tryGetRuleContext(0, AtdefContext);
    }
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
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
    gap() {
        return this.tryGetRuleContext(0, GapContext);
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
    get ruleIndex() { return interviewParser.RULE_bitElem; }
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
export class Interview_footerContext extends ParserRuleContext {
    footer_resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(Footer_resourceContext);
        }
        else {
            return this.getRuleContext(i, Footer_resourceContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_interview_footer; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterview_footer) {
            listener.enterInterview_footer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterview_footer) {
            listener.exitInterview_footer(this);
        }
    }
}
export class Footer_resourceContext extends ParserRuleContext {
    footer_text() {
        return this.tryGetRuleContext(0, Footer_textContext);
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
    reference() {
        return this.tryGetRuleContext(0, ReferenceContext);
    }
    hint() {
        return this.tryGetRuleContext(0, HintContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_footer_resource; }
    // @Override
    enterRule(listener) {
        if (listener.enterFooter_resource) {
            listener.enterFooter_resource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFooter_resource) {
            listener.exitFooter_resource(this);
        }
    }
}
export class Footer_textContext extends ParserRuleContext {
    LIST_LINE(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.LIST_LINE);
        }
        else {
            return this.getToken(interviewParser.LIST_LINE, i);
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
    get ruleIndex() { return interviewParser.RULE_footer_text; }
    // @Override
    enterRule(listener) {
        if (listener.enterFooter_text) {
            listener.enterFooter_text(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFooter_text) {
            listener.exitFooter_text(this);
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
    get ruleIndex() { return interviewParser.RULE_gap; }
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
    OPU() { return this.getToken(interviewParser.OPU, 0); }
    clnsp() {
        return this.getRuleContext(0, ClnspContext);
    }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    STRING() { return this.tryGetToken(interviewParser.STRING, 0); }
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
    get ruleIndex() { return interviewParser.RULE_single_gap; }
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
export class AtpointContext extends ParserRuleContext {
    AtPoints() { return this.getToken(interviewParser.AtPoints, 0); }
    NUMERIC() { return this.getToken(interviewParser.NUMERIC, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_atpoint; }
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
            return this.getTokens(interviewParser.ColonText);
        }
        else {
            return this.getToken(interviewParser.ColonText, i);
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
    get ruleIndex() { return interviewParser.RULE_format; }
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
    BitmarkMinus() { return this.tryGetToken(interviewParser.BitmarkMinus, 0); }
    BitmarkPlus() { return this.tryGetToken(interviewParser.BitmarkPlus, 0); }
    AmpArticle() { return this.tryGetToken(interviewParser.AmpArticle, 0); }
    AmpDocument() { return this.tryGetToken(interviewParser.AmpDocument, 0); }
    AmpWebsite() { return this.tryGetToken(interviewParser.AmpWebsite, 0); }
    AmpStillImageFilm() { return this.tryGetToken(interviewParser.AmpStillImageFilm, 0); }
    AmpAudioLink() { return this.tryGetToken(interviewParser.AmpAudioLink, 0); }
    AmpImageLink() { return this.tryGetToken(interviewParser.AmpImageLink, 0); }
    AmpVideoLink() { return this.tryGetToken(interviewParser.AmpVideoLink, 0); }
    AmpArticleLink() { return this.tryGetToken(interviewParser.AmpArticleLink, 0); }
    AmpDocumentLink() { return this.tryGetToken(interviewParser.AmpDocumentLink, 0); }
    AmpAppLink() { return this.tryGetToken(interviewParser.AmpAppLink, 0); }
    AmpWebsiteLink() { return this.tryGetToken(interviewParser.AmpWebsiteLink, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(interviewParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_resource_format; }
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_resource_format_extra; }
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
    AmpImage() { return this.tryGetToken(interviewParser.AmpImage, 0); }
    Image_type() { return this.tryGetToken(interviewParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(interviewParser.DotArticleAtt, 0); }
    AmpImageLink() { return this.tryGetToken(interviewParser.AmpImageLink, 0); }
    AmpImageZoom() { return this.tryGetToken(interviewParser.AmpImageZoom, 0); }
    AmpImageWAudio() { return this.tryGetToken(interviewParser.AmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_format; }
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
    AmpVideo() { return this.tryGetToken(interviewParser.AmpVideo, 0); }
    AmpVideoLink() { return this.tryGetToken(interviewParser.AmpVideoLink, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Video_type() { return this.tryGetToken(interviewParser.Video_type, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_video_format; }
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
    AmpArticle() { return this.tryGetToken(interviewParser.AmpArticle, 0); }
    AmpArticleLink() { return this.tryGetToken(interviewParser.AmpArticleLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_article_format; }
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
    AmpDocument() { return this.tryGetToken(interviewParser.AmpDocument, 0); }
    AmpDocumentLink() { return this.tryGetToken(interviewParser.AmpDocumentLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_document_format; }
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
    AmpApp() { return this.tryGetToken(interviewParser.AmpApp, 0); }
    AmpAppLink() { return this.tryGetToken(interviewParser.AmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_app_format; }
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
    AmpWebsite() { return this.tryGetToken(interviewParser.AmpWebsite, 0); }
    AmpWebsiteLink() { return this.tryGetToken(interviewParser.AmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_website_format; }
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
    AmpStillImageFilm() { return this.tryGetToken(interviewParser.AmpStillImageFilm, 0); }
    AmpStillImageFilmLink() { return this.tryGetToken(interviewParser.AmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_stillimagefilm_format; }
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
    OpAmpArticleLink() { return this.tryGetToken(interviewParser.OpAmpArticleLink, 0); }
    OpAmpArticle() { return this.tryGetToken(interviewParser.OpAmpArticle, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_article_format; }
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
    OpAmpDocumentLink() { return this.tryGetToken(interviewParser.OpAmpDocumentLink, 0); }
    OpAmpDocument() { return this.tryGetToken(interviewParser.OpAmpDocument, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_document_format; }
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
    OpAmpApp() { return this.tryGetToken(interviewParser.OpAmpApp, 0); }
    OpAmpAppLink() { return this.tryGetToken(interviewParser.OpAmpAppLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_app_format; }
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
    OpAmpWebsite() { return this.tryGetToken(interviewParser.OpAmpWebsite, 0); }
    OpAmpWebsiteLink() { return this.tryGetToken(interviewParser.OpAmpWebsiteLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_website_format; }
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
    OpAmpVideo() { return this.tryGetToken(interviewParser.OpAmpVideo, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Video_type() { return this.tryGetToken(interviewParser.Video_type, 0); }
    OpAmpVideoLink() { return this.tryGetToken(interviewParser.OpAmpVideoLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_video_format; }
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
    OpAmpStillImageFilm() { return this.tryGetToken(interviewParser.OpAmpStillImageFilm, 0); }
    OpAmpStillImageFilmLink() { return this.tryGetToken(interviewParser.OpAmpStillImageFilmLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_stillimagefilm_format; }
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
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    ArticleText() { return this.tryGetToken(interviewParser.ArticleText, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_articlebit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_documentbit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_websitebit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    telephone() {
        return this.tryGetRuleContext(0, TelephoneContext);
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_appbit; }
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
    get ruleIndex() { return interviewParser.RULE_stillimagefilmbit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_stillimg_one; }
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
    get ruleIndex() { return interviewParser.RULE_videobit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_video_one; }
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
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    ShowInIndex() { return this.tryGetToken(interviewParser.ShowInIndex, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_imagebit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_one; }
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
    OpAmpImage() { return this.tryGetToken(interviewParser.OpAmpImage, 0); }
    Image_type() { return this.tryGetToken(interviewParser.Image_type, 0); }
    DotArticleAtt() { return this.tryGetToken(interviewParser.DotArticleAtt, 0); }
    OpAmpImageLink() { return this.tryGetToken(interviewParser.OpAmpImageLink, 0); }
    OpAmpImageZoom() { return this.tryGetToken(interviewParser.OpAmpImageZoom, 0); }
    OpAmpImageWAudio() { return this.tryGetToken(interviewParser.OpAmpImageWAudio, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_image_format; }
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
    AtSrc() { return this.tryGetToken(interviewParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(interviewParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(interviewParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_chained; }
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
    AtSrc() { return this.tryGetToken(interviewParser.AtSrc, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    url() {
        return this.tryGetRuleContext(0, UrlContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(interviewParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(interviewParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_image_chained4match; }
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
    get ruleIndex() { return interviewParser.RULE_audiobit; }
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
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    url() {
        return this.getRuleContext(0, UrlContext);
    }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_audio_one; }
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
    AmpAudio() { return this.tryGetToken(interviewParser.AmpAudio, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(interviewParser.Audio_type, 0); }
    AmpAudioLink() { return this.tryGetToken(interviewParser.AmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_audio_format; }
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
    OpAmpAudio() { return this.tryGetToken(interviewParser.OpAmpAudio, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    Audio_type() { return this.tryGetToken(interviewParser.Audio_type, 0); }
    OpAmpAudioLink() { return this.tryGetToken(interviewParser.OpAmpAudioLink, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_op_audio_format; }
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
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    OPA() { return this.tryGetToken(interviewParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    AtSrc() { return this.tryGetToken(interviewParser.AtSrc, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    AtWidth() { return this.tryGetToken(interviewParser.AtWidth, 0); }
    AtHeight() { return this.tryGetToken(interviewParser.AtHeight, 0); }
    OPATALT() { return this.tryGetToken(interviewParser.OPATALT, 0); }
    OpAtCaption() { return this.tryGetToken(interviewParser.OpAtCaption, 0); }
    OpAtLicense() { return this.tryGetToken(interviewParser.OpAtLicense, 0); }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_resource_chained; }
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
    TEL() { return this.getToken(interviewParser.TEL, 0); }
    PLUS() { return this.getToken(interviewParser.PLUS, 0); }
    NUMERIC() { return this.getToken(interviewParser.NUMERIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_telephone; }
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
    URL() { return this.getToken(interviewParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_url; }
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
    OPC() { return this.getToken(interviewParser.OPC, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    lead() {
        return this.tryGetRuleContext(0, LeadContext);
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
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
    get ruleIndex() { return interviewParser.RULE_item; }
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
    OPC() { return this.getToken(interviewParser.OPC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
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
    get ruleIndex() { return interviewParser.RULE_lead; }
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
    OPRANGLES() { return this.tryGetToken(interviewParser.OPRANGLES, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    OPRANGLEL() { return this.tryGetToken(interviewParser.OPRANGLEL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_angleref; }
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
    AtExamplecl() { return this.tryGetToken(interviewParser.AtExamplecl, 0); }
    AtExampleWithStr() { return this.tryGetToken(interviewParser.AtExampleWithStr, 0); }
    AtExamplecol() { return this.tryGetToken(interviewParser.AtExamplecol, 0); }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    SENTENCE() { return this.tryGetToken(interviewParser.SENTENCE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_example; }
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
    BracEnclose() { return this.getToken(interviewParser.BracEnclose, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bracketed_text; }
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
    AtReference() { return this.getToken(interviewParser.AtReference, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    URL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.URL);
        }
        else {
            return this.getToken(interviewParser.URL, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_reference; }
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
    AtProgress() { return this.getToken(interviewParser.AtProgress, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_progress; }
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
    AtDate() { return this.getToken(interviewParser.AtDate, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    dateprop_chained() {
        return this.tryGetRuleContext(0, Dateprop_chainedContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dateprop; }
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
    AtDate() { return this.getToken(interviewParser.AtDate, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dateprop_chained; }
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
    OPB() { return this.getToken(interviewParser.OPB, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_instruction; }
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
    OPQ() { return this.getToken(interviewParser.OPQ, 0); }
    CL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.CL);
        }
        else {
            return this.getToken(interviewParser.CL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_hint; }
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
    OPHASH() { return this.getToken(interviewParser.OPHASH, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_title; }
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
    AtLabeltrue() { return this.tryGetToken(interviewParser.AtLabeltrue, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    AtLabelfalse() { return this.tryGetToken(interviewParser.AtLabelfalse, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bool_label; }
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
    AtProgressPoints() { return this.getToken(interviewParser.AtProgressPoints, 0); }
    COLON() { return this.getToken(interviewParser.COLON, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_progress_points; }
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
    OpAtIsTracked() { return this.getToken(interviewParser.OpAtIsTracked, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_istracked; }
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
    OpAtIsInfoOnly() { return this.getToken(interviewParser.OpAtIsInfoOnly, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_isinfoonly; }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_atdef; }
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
    OPA() { return this.tryGetToken(interviewParser.OPA, 0); }
    s_and_w(i) {
        if (i === undefined) {
            return this.getRuleContexts(S_and_wContext);
        }
        else {
            return this.getRuleContext(i, S_and_wContext);
        }
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    DBLCOLON() { return this.tryGetToken(interviewParser.DBLCOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    OpAtCopyright() { return this.tryGetToken(interviewParser.OpAtCopyright, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_atdef_; }
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
    OPDOLL() { return this.getToken(interviewParser.OPDOLL, 0); }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
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
            return this.getTokens(interviewParser.COLON);
        }
        else {
            return this.getToken(interviewParser.COLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(interviewParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dollarans; }
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
    OPDANGLE() { return this.getToken(interviewParser.OPDANGLE, 0); }
    CL() { return this.getToken(interviewParser.CL, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_anchor; }
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
    DBLCOLON() { return this.getToken(interviewParser.DBLCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_dcolon; }
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
            return this.getTokens(interviewParser.NL);
        }
        else {
            return this.getToken(interviewParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_lines; }
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
    STRING() { return this.tryGetToken(interviewParser.STRING, 0); }
    NUMERIC() { return this.tryGetToken(interviewParser.NUMERIC, 0); }
    S(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.S);
        }
        else {
            return this.getToken(interviewParser.S, i);
        }
    }
    words() {
        return this.tryGetRuleContext(0, WordsContext);
    }
    OPS() { return this.tryGetToken(interviewParser.OPS, 0); }
    s_and_w() {
        return this.tryGetRuleContext(0, S_and_wContext);
    }
    CL() { return this.tryGetToken(interviewParser.CL, 0); }
    NL() { return this.tryGetToken(interviewParser.NL, 0); }
    COLON() { return this.tryGetToken(interviewParser.COLON, 0); }
    AMP() { return this.tryGetToken(interviewParser.AMP, 0); }
    DBLCOLON() { return this.tryGetToken(interviewParser.DBLCOLON, 0); }
    DBLEQ() { return this.tryGetToken(interviewParser.DBLEQ, 0); }
    URL() { return this.tryGetToken(interviewParser.URL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_s_and_w; }
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
    OPESC() { return this.getToken(interviewParser.OPESC, 0); }
    s_and_w() {
        return this.getRuleContext(0, S_and_wContext);
    }
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_bracket_escaped; }
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
    CL() { return this.getToken(interviewParser.CL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_clnsp; }
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
    SSPL() { return this.tryGetToken(interviewParser.SSPL, 0); }
    SSPL2() { return this.tryGetToken(interviewParser.SSPL2, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_sspl; }
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
    STRING(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.STRING);
        }
        else {
            return this.getToken(interviewParser.STRING, i);
        }
    }
    SENTENCE(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.SENTENCE);
        }
        else {
            return this.getToken(interviewParser.SENTENCE, i);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.AMP);
        }
        else {
            return this.getToken(interviewParser.AMP, i);
        }
    }
    Greater(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.Greater);
        }
        else {
            return this.getToken(interviewParser.Greater, i);
        }
    }
    Less(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.Less);
        }
        else {
            return this.getToken(interviewParser.Less, i);
        }
    }
    RightArrow(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.RightArrow);
        }
        else {
            return this.getToken(interviewParser.RightArrow, i);
        }
    }
    RightAngle(i) {
        if (i === undefined) {
            return this.getTokens(interviewParser.RightAngle);
        }
        else {
            return this.getToken(interviewParser.RightAngle, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_words; }
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
    S() { return this.getToken(interviewParser.S, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return interviewParser.RULE_sp; }
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
