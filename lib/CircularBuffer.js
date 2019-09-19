"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CircularBuffer {
    /**
     * constructor of CircularBuffer
     * @param [length=50] Size of buffer
     * @param [allowOverFlow=true] allow to push when buffer is full, you will lose data
     */
    constructor(length = 50, allowOverFlow = true) {
        this.pointerWrite = 0;
        this.pointerRead = 0;
        this.count = 0;
        this.length = length;
        this.allowOverFlow = allowOverFlow;
        this.buffer = new Array(this.length);
    }
    size() {
        return this.count;
    }
    pop() {
        if (this.count === 0) {
            throw "empty";
        }
        const i = this.pointerRead;
        this.pointerRead = (this.length + this.pointerRead + 1) % this.length;
        this.count--;
        const temp = this.buffer[i];
        if (temp === undefined) {
            throw "undefined";
        }
        this.buffer[i] = undefined;
        return temp;
    }
    push(item) {
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
    }
    clear() {
        this.pointerRead = 0;
        this.pointerWrite = 0;
        this.count = 0;
        this.buffer = new Array(this.length);
    }
    export() {
        let result = [];
        while (this.size() > 0) {
            result[result.length] = this.pop();
        }
        return result;
    }
}
exports.CircularBuffer = CircularBuffer;
