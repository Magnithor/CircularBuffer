# CircularBuffer

[![GitHub issues](https://img.shields.io/github/issues/Magnithor/CircularBuffer)](https://github.com/Magnithor/CircularBuffer/issues)
![github languages](https://img.shields.io/github/languages/top/grant-zietsman/validate-typescript.png)


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
