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
        return chars.join() === chars.reverse().join()
    }
}
