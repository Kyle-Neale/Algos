/******************************************************************************
Given a linked list, remove the n-th node from the end of list and return its
head.

******************************************************************************/

const removeNthFromEnd = (list, n) => {
    if  (!list.getFirst().next && n > 0) {
        return null;
    }

    let slow = list.getFirst();
    let fast = list.getFirst();

    while (n > 0) {
        fast = fast.next;
        n--;
    }

    if (!fast) {
        return slow.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return list;
};
