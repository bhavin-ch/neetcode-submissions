class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')': '(',
            ']': '[',
            '}': '{',
        }
        const stack = []
        for (const c of s) {
            if (c in map) {
                if (stack.pop() !== map[c]) return false
            } else {
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}
