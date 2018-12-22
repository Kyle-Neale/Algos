/******************************************************
Create a queue data structure. The queue should be a
class with methods 'add' and 'remove'. Adding to the
queue should store an element until that element is
removed.

Example
  const q = new Queue();
  
    q.add(1) // => [1];
    q.add(2) // => [2, 1];

    q.remove() // => 1;
    q.remove() // => 2;
******************************************************/
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record)
    return this.data;
  }

  remove() {
    return this.data.pop();
  }
}
