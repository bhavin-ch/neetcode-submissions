/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null
        const list = [root]
        while (list.length) {
            const node = list.pop()
            ;[node.left, node.right] = [node.right, node.left]
            if (node.left) list.push(node.left)
            if (node.right) list.push(node.right)
        }
        return root
    }
}
