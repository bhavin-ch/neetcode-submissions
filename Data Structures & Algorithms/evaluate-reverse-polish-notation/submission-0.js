class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b),

        }
        for (const token of tokens) {
            if (token in operations) {
                const n2 = stack.pop()
                const n1 = stack.pop()
                stack.push(operations[token](n1, n2))
            } else {
                stack.push(parseInt(token))
            }
        }
        return stack.pop()
    }
}
