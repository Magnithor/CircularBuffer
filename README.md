# CircularBuffer

```
var circularBuffer = new CircularBuffer(10, true);
circularBuffer.push(1);
circularBuffer.push(4);
console.log(circularBuffer.pop()); // 1
console.log(circularBuffer.pop()); // 4
```

Function | Big O | Description
---------|-------|------------
push | O(1)| push item to circular buffer
pop | O(1) | pop item of circular buffer
size | O(1) | size of circular buffer
export | O(n) | pop all items of circular buffer
clear | O(n) | clear all items of circular buffer
