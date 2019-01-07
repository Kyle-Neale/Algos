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
    } else if (index === 0) {
      this.head = this.head.next;
    }

    let counter = 0 - 1;
    let previous = this.head;
    let node = previous.next;
    let next = node.next;

    while (node) {
      if (counter === index) {
        previous.next = next
      }
      counter++
      previous = node;
      node = next;
      next = node.next;
    }
    return null;
  }
}
