export declare class CircularBuffer<T = any> {
    private pointerWrite;
    private pointerRead;
    private buffer;
    private length;
    private count;
    private allowOverFlow;
    /**
     * constructor of CircularBuffer
     * @param [length=50] Size of buffer
     * @param [allowOverFlow=true] allow to push when buffer is full, you will lose data
     */
    constructor(length?: number, allowOverFlow?: boolean);
    size(): number;
    pop(): T;
    push(item: T): void;
    clear(): void;
    export(): T[];
}
