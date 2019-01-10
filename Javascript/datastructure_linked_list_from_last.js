/*******************************************************************************
Given a Linked List and an integer n, return the element n spaces from the last
node in the list. Do not call the 'size' method of linked list. Assume that n
will always less than the length of the list.

Example:
  const l = new LinkedList();
      l.insertLast('a');
      l.insertLast('b');
      l.insertLast('c');
      l.insertLast('d');
      fromLast(l, 2); // => returns Node { data: 'b' };

*******************************************************************************/

const fromLast = (list, n) => {
  let slow = list.getFirst();
  let fast = list.getFirst();
  
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
