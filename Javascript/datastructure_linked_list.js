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
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    if (!this.head) {
      return 0;
    } else if (!this.head.next) {
      return 1;
    } else {
      let counter = 1;
      let node = this.head.next
      while (node) {
        node = node.next;
        counter++;
      }
      return counter;
    }
  }
}
