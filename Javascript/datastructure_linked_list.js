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
    let node = this.head;
    if (!node) {
      return null;
    }

    while (node.next) {
      node = node.next
    }
    return node
  }

  clear() {
    this.head = null;
    return this.head;
  }
}
