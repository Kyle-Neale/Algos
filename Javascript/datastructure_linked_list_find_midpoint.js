/*******************************************************************************
Given a LinkedList find the middle node of the list without referencing the
size of the list. If the list has an even number of elements, return the node
at the end of the first half of the list. *Do not* use counter variable, *do not*
retrieve the size of the list, and only iterate through the list one time.

Example:
  const l = new LinkedList();
      l.insertLast('a');
      l.insertLast('b');
      l.insertLast('c');
      midpoint(l); // returns Node { data: 'b' };

*******************************************************************************/

function midpoint(list) {
  let slow = this.getFirst();
  let fast = slow.next;

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next;
  }

  return slow;
}
