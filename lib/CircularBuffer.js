"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircularBuffer = /** @class */ (function () {
    /**
     * constructor of CircularBuffer
     * @param [length=50] Size of buffer
     * @param [allowOverFlow=true] allow to push when buffer is full, you will lose data
     */
    function CircularBuffer(length, allowOverFlow) {
        if (length === void 0) { length = 50; }
        if (allowOverFlow === void 0) { allowOverFlow = true; }
        this.pointerWrite = 0;
        this.pointerRead = 0;
        this.count = 0;
        this.length = length;
        this.allowOverFlow = allowOverFlow;
        this.buffer = new Array(this.length);
    }
    CircularBuffer.prototype.size = function () {
        return this.count;
    };
    CircularBuffer.prototype.pop = function () {
        if (this.count === 0) {
            throw "empty";
        }
        var i = this.pointerRead;
        this.pointerRead = (this.length + this.pointerRead + 1) % this.length;
        this.count--;
        var temp = this.buffer[i];
        if (temp === undefined) {
            throw "undefined";
        }
        this.buffer[i] = undefined;
        return temp;
    };
    CircularBuffer.prototype.push = function (item) {
        if (!this.allowOverFlow && this.count === this.length) {
            throw "overFlow";
        }
        this.buffer[this.pointerWrite] = item;
        this.pointerWrite = (this.length + this.pointerWrite + 1) % this.length;
        if (this.count === this.length) {
            this.pointerRead = this.pointerWrite;
        }
        else {
            this.count++;
        }
    };
    CircularBuffer.prototype.clear = function () {
        this.pointerRead = 0;
        this.pointerWrite = 0;
        this.count = 0;
        this.buffer = new Array(this.length);
    };
    CircularBuffer.prototype.export = function () {
        var result = [];
        while (this.size() > 0) {
            result[result.length] = this.pop();
        }
        return result;
    };
    return CircularBuffer;
}());
exports.CircularBuffer = CircularBuffer;
