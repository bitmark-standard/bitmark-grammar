"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.ConsoleErrorListener = void 0;
/**
 *
 * @author Sam Harwell
 */
var ConsoleErrorListener = /** @class */ (function () {
    function ConsoleErrorListener() {
    }
    /**
     * {@inheritDoc}
     *
     * This implementation prints messages to {@link System#err} containing the
     * values of `line`, `charPositionInLine`, and `msg` using
     * the following format.
     *
     * <pre>
     * line *line*:*charPositionInLine* *msg*
     * </pre>
     */
    ConsoleErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        console.error("line ".concat(line, ":").concat(charPositionInLine, " ").concat(msg));
    };
    /**
     * Provides a default instance of {@link ConsoleErrorListener}.
     */
    ConsoleErrorListener.INSTANCE = new ConsoleErrorListener();
    return ConsoleErrorListener;
}());
exports.ConsoleErrorListener = ConsoleErrorListener;
