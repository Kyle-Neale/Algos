/*******************************************************************************

Create a stack data structure.  The stack should be a class with methods 'push',
'pop', and 'peek'.  Adding an element to the stack should store it until it is
removed.

Examples:

  const stack = new Stack();
    stack.push(1);
    stack.push(2);

    stack.pop(); // => returns 2
    stack.pop(); // => returns 1

*******************************************************************************/
class Stack {
  constructor() {
    this.data = [];
  }
  push(arg) {
    this.data.push(arg);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
