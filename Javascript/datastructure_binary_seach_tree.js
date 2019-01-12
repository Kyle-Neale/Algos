/********************************************************************************
Create a Node class with a constructor that should accept an argument that gets
assigned to the data property and initialize values 'left' and 'right'.

Implement the 'insert' method for the Node class that should accept an argument
'data', then create and insert a new node at the appropriate location in the
tree.

Implement a 'contains' method for the Node class that should accept a 'data' argument and return the Node in the tree with the same value. If the value isn't in the true,
return null.

********************************************************************************/

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.data > data && this.left) {
      this.left.insert(data);

    } else if (this.data > data) {
      this.left = new Node(data);

    } else if (this.data < data && this.right) {
      this.right.insert(data);

    } else if (this.data < data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return data;
    }
    if (this.data < data && this.right) {
      return this.right.contains(data);

    } else if (this.data > data && this.left) {
      return this.left.contains(data);

    } else {
      return null;

    }
  }
}
