"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.InputMismatchException = void 0;
// ConvertTo-TS run at 2016-10-04T11:26:51.5187682-07:00
var RecognitionException_1 = require("./RecognitionException");
var Decorators_1 = require("./Decorators");
/** This signifies any kind of mismatched input exceptions such as
 *  when the current input does not match the expected token.
 */
var InputMismatchException = /** @class */ (function (_super) {
    __extends(InputMismatchException, _super);
    function InputMismatchException(recognizer, state, context) {
        var _this = this;
        if (context === undefined) {
            context = recognizer.context;
        }
        _this = _super.call(this, recognizer, recognizer.inputStream, context) || this;
        if (state !== undefined) {
            _this.setOffendingState(state);
        }
        _this.setOffendingToken(recognizer, recognizer.currentToken);
        return _this;
    }
    InputMismatchException = __decorate([
        __param(0, Decorators_1.NotNull)
    ], InputMismatchException);
    return InputMismatchException;
}(RecognitionException_1.RecognitionException));
exports.InputMismatchException = InputMismatchException;
