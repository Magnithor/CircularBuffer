import { CircularBuffer } from '../src/CircularBuffer';
test('init', () => {
    const circluarBuffer = new CircularBuffer<number>(10,true);    
  expect(circluarBuffer.size()).toBe(0);
});