export class CircularBuffer<T = any> {
    private pointerWrite = 0;
    private pointerRead = 0;
    private buffer: (T | undefined)[]; 
    private length: number;
    private count = 0;
    private allowOverFlow: boolean;

    /**
     * constructor of CircularBuffer
     * @param [length=50] Size of buffer
     * @param [allowOverFlow=true] allow to push when buffer is full, you will lose data
     */
    public constructor(length: number = 50, allowOverFlow:boolean = true) {
        this.length = length;
        this.allowOverFlow = allowOverFlow;
        this.buffer = new Array(this.length);
    }

    public size() {
        return this.count;
    }

    public pop():T {
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

    public push(item: T) {
        if (!this.allowOverFlow && this.count === this.length) {
            throw "overFlow";
        }
        this.buffer[this.pointerWrite] = item;
        this.pointerWrite = (this.length + this.pointerWrite + 1) % this.length;
        if (this.count === this.length) {
            this.pointerRead = this.pointerWrite;
        } else {
            this.count++;
        }
    }

    public clear() {
        this.pointerRead = 0;
        this.pointerWrite = 0;
        this.count = 0;
        this.buffer = new Array(this.length);
    }

    public export(): T[] {
        let result: T[] = [];
        while (this.size() > 0) {
            result[result.length] = this.pop();
        }

        return result;
    }
}