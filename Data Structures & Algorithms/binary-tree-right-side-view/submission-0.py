# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def __init__(self):
        self.view: List[int] = []
    def traverse(self, node: TreeNode, level: int):
        if level == len(self.view):
            self.view.append(node.val)
        elif self.view[level] < node.val:
            self.view[level] = node.val
        if node.left:
            self.traverse(node.left, level+1)
        if node.right:
            self.traverse(node.right, level+1)
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root:
            self.traverse(root, 0)
        return self.view