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
    if (!this.head) {
      const node = new Node(data);
      this.head = node;

    } else {
      const node = new Node(data, this.head);
      this.head = node;
    }
    return;
  }
}
