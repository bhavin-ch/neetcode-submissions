class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const chars = s
            .toLowerCase()
            .split('')
            .filter(c => c.match(/[a-z0-9]/i))
        const n = chars.length
        for (let i=0; i<=Math.floor(n/2); i++) {
            if (chars[i] !== chars[n - 1 - i]) return false
        }
        return true
    }
}
