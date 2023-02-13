//
//  stack.js
//

class Stack {

  constructor() {
    this.bucket = [];
  }

  get size() {
    return this.bucket.length;
  }
  // Supposing there will be no null entry.
  top() {
    if (0 < this.bucket.length) 
      return this.bucket[this.bucket.length-1] 
    return null;
  }
  second() {
    if (1 < this.bucket.length) 
      return this.bucket[this.bucket.length-2] 
    return null;
  }
  third() {
    if (2 < this.bucket.length) 
      return this.bucket[this.bucket.length-3] 
    return null;
  }
  bottom() {
    if (0 < this.bucket.length) 
      return this.bucket[0] 
    return null;
  }
  
  push(obj) {
    this.bucket.push(obj);
  }
  pop() {
    if (0 < this.bucket.length)
      return this.bucket.pop();
    return null;  // underflow
  }

}

export {Stack};
//export {Stack};  // node-es6.sh not accepts this
//exports.Stack = Stack;   // old school
