/********************************************************************************
Create a Node class with a constructor that should accept an argument that gets
assigned to the data property and initialize an empty array for storing children.
The class should additionally have the methods 'add' and 'remove'.

Create a Tree class with a constructor that has a 'root' property set to null.

********************************************************************************/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(element => element.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  breadthSearch(fn) {
    if (!this.root) {
      return;
    }

    const array = [this.root];
    while (array.length) {
      const node = array.shift();
      if (node.children) {
        array.push(...node.children)
      }

      fn(node);
    }
  }

  depthSearch(fn) {
    if (!this.root) {
      return;
    }

    const array = [this.root];
    while (array.length) {
      const node = array.shift();
      if (node.children) {
        array.unshift(...node.children);
      }

      fn(node)
    }
  }
}
