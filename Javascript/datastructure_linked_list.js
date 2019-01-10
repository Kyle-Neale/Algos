/*******************************************************************************
Implement classes Node and Linked List

*******************************************************************************/
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node
  }

  clear() {
    this.head = null;
    return this.head;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head
    while (node.next.next) {
      node = node.next
    }
    node.next = null;
  }

  insertLast(data){
    if (!this.head) {
      this.head = new Node(data);
    } else {
      this.getLast().next = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while (node) {
      node.data = fn(node.data, counter);
      node = node.next
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next
    }
  }
}
