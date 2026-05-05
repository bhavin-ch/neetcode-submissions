/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head || !head.next) {
            return head
        }
        let parent = head
        let child = head.next
        head.next = null
        while(child.next) {
            const grandchild = child.next
            child.next = parent
            parent = child
            child = grandchild
        }
        child.next = parent
        return child
    }
}
