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
import { MurmurHash } from "../misc/MurmurHash";
import { NotNull, Override } from "../Decorators";
/**
 * Implements the `popMode` lexer action by calling {@link Lexer#popMode}.
 *
 * The `popMode` command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link #INSTANCE}.
 *
 * @author Sam Harwell
 * @since 4.2
 */
export class LexerPopModeAction {
    /**
     * Constructs the singleton instance of the lexer `popMode` command.
     */
    constructor() {
        // intentionally empty
    }
    /**
     * {@inheritDoc}
     * @returns This method returns {@link LexerActionType#POP_MODE}.
     */
    get actionType() {
        return 4 /* POP_MODE */;
    }
    /**
     * {@inheritDoc}
     * @returns This method returns `false`.
     */
    get isPositionDependent() {
        return false;
    }
    /**
     * {@inheritDoc}
     *
     * This action is implemented by calling {@link Lexer#popMode}.
     */
    execute(lexer) {
        lexer.popMode();
    }
    hashCode() {
        let hash = MurmurHash.initialize();
        hash = MurmurHash.update(hash, this.actionType);
        return MurmurHash.finish(hash, 1);
    }
    equals(obj) {
        return obj === this;
    }
    toString() {
        return "popMode";
    }
}
__decorate([
    Override
], LexerPopModeAction.prototype, "actionType", null);
__decorate([
    Override
], LexerPopModeAction.prototype, "isPositionDependent", null);
__decorate([
    Override,
    __param(0, NotNull)
], LexerPopModeAction.prototype, "execute", null);
__decorate([
    Override
], LexerPopModeAction.prototype, "hashCode", null);
__decorate([
    Override
], LexerPopModeAction.prototype, "equals", null);
__decorate([
    Override
], LexerPopModeAction.prototype, "toString", null);
(function (LexerPopModeAction) {
    /**
     * Provides a singleton instance of this parameterless lexer action.
     */
    LexerPopModeAction.INSTANCE = new LexerPopModeAction();
})(LexerPopModeAction || (LexerPopModeAction = {}));
