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
// ConvertTo-TS run at 2016-10-04T11:26:46.2521448-07:00
import { Chunk } from "./Chunk";
import { NotNull, Override } from "../../Decorators";
/**
 * Represents a span of raw text (concrete syntax) between tags in a tree
 * pattern string.
 */
let TextChunk = class TextChunk extends Chunk {
    /**
     * Constructs a new instance of {@link TextChunk} with the specified text.
     *
     * @param text The text of this chunk.
     * @exception IllegalArgumentException if `text` is not defined.
     */
    constructor(text) {
        super();
        if (text == null) {
            throw new Error("text cannot be null");
        }
        this._text = text;
    }
    /**
     * Gets the raw text of this chunk.
     *
     * @returns The text of the chunk.
     */
    get text() {
        return this._text;
    }
    /**
     * {@inheritDoc}
     *
     * The implementation for {@link TextChunk} returns the result of
     * `text` in single quotes.
     */
    toString() {
        return "'" + this._text + "'";
    }
};
__decorate([
    NotNull
], TextChunk.prototype, "_text", void 0);
__decorate([
    NotNull
], TextChunk.prototype, "text", null);
__decorate([
    Override
], TextChunk.prototype, "toString", null);
TextChunk = __decorate([
    __param(0, NotNull)
], TextChunk);
export { TextChunk };
