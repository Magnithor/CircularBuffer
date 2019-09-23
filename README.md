# CircularBuffer

## Allow OverFlow = false
```javascript
var circularBuffer = new CircularBuffer(2 /*length*/, false /*allowOverFlow*/);
circularBuffer.push(1);
circularBuffer.push(2);
console.log(circularBuffer.pop()); // 1
console.log(circularBuffer.pop()); // 2
circularBuffer.push(3);
circularBuffer.push(4);
circularBuffer.push(5); // throw "overflow"
```

## Allow OverFlow = true
```javascript
var circularBuffer = new CircularBuffer(2 /*length*/, true /*allowOverFlow*/);
circularBuffer.push(1);
circularBuffer.push(2);
console.log(circularBuffer.size()); // 2
circularBuffer.push(3);
console.log(circularBuffer.size()); // 2
console.log(circularBuffer.pop());  // 2
console.log(circularBuffer.pop());  // 3
console.log(circularBuffer.size()); // 0
```

## Description and Big O 

Function | Big O | Description
---------|-------|------------
push | O(1)| push item to circular buffer
pop | O(1) | pop item of circular buffer
size | O(1) | size of circular buffer
export | O(n) | pop all items of circular buffer
clear | O(n) | clear all items of circular buffer
