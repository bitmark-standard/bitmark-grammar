"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
exports.__esModule = true;
exports.UUID = void 0;
var MurmurHash_1 = require("./MurmurHash");
var UUID = /** @class */ (function () {
    function UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits) {
        this.data = new Uint32Array(4);
        this.data[0] = mostSigBits;
        this.data[1] = moreSigBits;
        this.data[2] = lessSigBits;
        this.data[3] = leastSigBits;
    }
    UUID.fromString = function (data) {
        if (!/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(data)) {
            throw new Error("Incorrectly formatted UUID");
        }
        var segments = data.split("-");
        var mostSigBits = parseInt(segments[0], 16);
        var moreSigBits = ((parseInt(segments[1], 16) << 16) >>> 0) + parseInt(segments[2], 16);
        var lessSigBits = ((parseInt(segments[3], 16) << 16) >>> 0) + parseInt(segments[4].substr(0, 4), 16);
        var leastSigBits = parseInt(segments[4].substr(-8), 16);
        return new UUID(mostSigBits, moreSigBits, lessSigBits, leastSigBits);
    };
    UUID.prototype.hashCode = function () {
        return MurmurHash_1.MurmurHash.hashCode([this.data[0], this.data[1], this.data[2], this.data[3]]);
    };
    UUID.prototype.equals = function (obj) {
        if (obj === this) {
            return true;
        }
        else if (!(obj instanceof UUID)) {
            return false;
        }
        return this.data[0] === obj.data[0]
            && this.data[1] === obj.data[1]
            && this.data[2] === obj.data[2]
            && this.data[3] === obj.data[3];
    };
    UUID.prototype.toString = function () {
        return ("00000000" + this.data[0].toString(16)).substr(-8)
            + "-" + ("0000" + (this.data[1] >>> 16).toString(16)).substr(-4)
            + "-" + ("0000" + this.data[1].toString(16)).substr(-4)
            + "-" + ("0000" + (this.data[2] >>> 16).toString(16)).substr(-4)
            + "-" + ("0000" + this.data[2].toString(16)).substr(-4)
            + ("00000000" + this.data[3].toString(16)).substr(-8);
    };
    return UUID;
}());
exports.UUID = UUID;
