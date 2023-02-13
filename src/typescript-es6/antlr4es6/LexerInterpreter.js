/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Lexer } from "./Lexer";
import { LexerATNSimulator } from "./atn/LexerATNSimulator";
import { NotNull } from "./Decorators";
import { Override } from "./Decorators";
let LexerInterpreter = class LexerInterpreter extends Lexer {
    constructor(grammarFileName, vocabulary, ruleNames, channelNames, modeNames, atn, input) {
        super(input);
        if (atn.grammarType !== 0 /* LEXER */) {
            throw new Error("IllegalArgumentException: The ATN must be a lexer ATN.");
        }
        this._grammarFileName = grammarFileName;
        this._atn = atn;
        this._ruleNames = ruleNames.slice(0);
        this._channelNames = channelNames.slice(0);
        this._modeNames = modeNames.slice(0);
        this._vocabulary = vocabulary;
        this._interp = new LexerATNSimulator(atn, this);
    }
    get atn() {
        return this._atn;
    }
    get grammarFileName() {
        return this._grammarFileName;
    }
    get ruleNames() {
        return this._ruleNames;
    }
    get channelNames() {
        return this._channelNames;
    }
    get modeNames() {
        return this._modeNames;
    }
    get vocabulary() {
        return this._vocabulary;
    }
};
__decorate([
    NotNull
], LexerInterpreter.prototype, "_vocabulary", void 0);
__decorate([
    Override
], LexerInterpreter.prototype, "atn", null);
__decorate([
    Override
], LexerInterpreter.prototype, "grammarFileName", null);
__decorate([
    Override
], LexerInterpreter.prototype, "ruleNames", null);
__decorate([
    Override
], LexerInterpreter.prototype, "channelNames", null);
__decorate([
    Override
], LexerInterpreter.prototype, "modeNames", null);
__decorate([
    Override
], LexerInterpreter.prototype, "vocabulary", null);
LexerInterpreter = __decorate([
    __param(1, NotNull)
], LexerInterpreter);
export { LexerInterpreter };
