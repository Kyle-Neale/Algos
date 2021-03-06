/******************************************************************************
Implement a 'weave' function. The weave function should receive two queues as arguments and combine the contents of each into a new, third queue. The third
queue should contain the contents of the two other queues, alternating. The
function should be able to handle queues of different lengths without inserting
'undefined'.

Example
  const queueOne = new Queue();
    queueOne.add(1) // => [1];
    queueOne.add(2) // => [2, 1];
  const queueTwo = new Queue();
    queueTwo.add('Hi') // => ['Hi'];
    queueTwo.add('there') // => ['there', 'Hi'];
  const q = new Queue()
    q.remove() // => 'there'
    q.remove() // => 'Hi'
    q.remove() // => '2'
    q.remove() // => '1'
******************************************************************************/
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

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const queue = new Queue()
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      queue.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      queue.add(sourceTwo.remove());
    }
  }
  return queue;
}
