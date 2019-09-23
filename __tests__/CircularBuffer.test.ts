import { CircularBuffer } from "../src/CircularBuffer";

test("init", () => {
  const circularBuffer = new CircularBuffer<number>(10, true);
  expect(circularBuffer.size()).toBe(0);
});

test("Push and pop", () => {
  const circularBuffer = new CircularBuffer<number>(10, true);
  expect(circularBuffer.size()).toBe(0);
  circularBuffer.push(0);
  expect(circularBuffer.size()).toBe(1);
  circularBuffer.push(1);
  expect(circularBuffer.size()).toBe(2);
  circularBuffer.push(2);
  expect(circularBuffer.size()).toBe(3);
  circularBuffer.push(3);
  expect(circularBuffer.size()).toBe(4);
  expect(circularBuffer.pop()).toBe(0);
  expect(circularBuffer.size()).toBe(3);
  expect(circularBuffer.pop()).toBe(1);
  expect(circularBuffer.size()).toBe(2);
  expect(circularBuffer.pop()).toBe(2);
  expect(circularBuffer.size()).toBe(1);
  expect(circularBuffer.pop()).toBe(3);
  expect(circularBuffer.size()).toBe(0);
});

test("allowOverFlow false", () => {
  const circularBuffer = new CircularBuffer<number>(3, false);
  expect(circularBuffer.size()).toBe(0);
  circularBuffer.push(0);
  expect(circularBuffer.size()).toBe(1);
  circularBuffer.push(1);
  expect(circularBuffer.size()).toBe(2);
  circularBuffer.push(2);
  expect(circularBuffer.size()).toBe(3);
  expect(() => {
    circularBuffer.push(3);
  }).toThrow("overflow");
});

test("allowOverFlow true", () => {
  const circularBuffer = new CircularBuffer<number>(3, true);
  expect(circularBuffer.size()).toBe(0);
  circularBuffer.push(0);
  expect(circularBuffer.size()).toBe(1);
  circularBuffer.push(1);
  expect(circularBuffer.size()).toBe(2);
  circularBuffer.push(2);
  expect(circularBuffer.size()).toBe(3);
  circularBuffer.push(3);
  expect(circularBuffer.size()).toBe(3);

  expect(circularBuffer.pop()).toBe(1);
  expect(circularBuffer.size()).toBe(2);
  expect(circularBuffer.pop()).toBe(2);
  expect(circularBuffer.size()).toBe(1);
  expect(circularBuffer.pop()).toBe(3);
  expect(circularBuffer.size()).toBe(0);
});

test('try to pop empty when list is empty', () =>{
  const circularBuffer = new CircularBuffer();
  expect(() => {
    circularBuffer.pop();
  }).toThrow("empty");
  
});