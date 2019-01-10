/*******************************************************************************
Given a LinkedList find, return true if the list is circular, false if it is not.

Example:
  const l = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;
  circular(l) // => true;

*******************************************************************************/

const circular = (list) => {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next.next && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
