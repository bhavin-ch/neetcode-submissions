from math import inf
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValid(self, node: TreeNode, lower: float, upper: float) -> bool:
        if node.val <= lower or node.val >= upper:
            return False
        valid = True
        if node.left:
            if node.left.val >= node.val:
                return False
            valid = valid and self.isValid(node.left, lower, node.val)
            if not valid:
                return False
        if node.right:
            if node.right.val <= node.val:
                return False
            valid = valid and self.isValid(node.right, node.val, upper)
            if not valid:
                return False
        return True
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.isValid(root, -inf, inf) if root else True