class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = s.split('')
        if (chars.length === 0) return 0
        let right = 1, left = 0, max = 1
        while (right < chars.length) {
            const idx = chars.slice(left, right).findIndex(x => x === chars[right])
            right++
            if (idx !== -1) {
                left = left + idx + 1
            } else {
                max = Math.max(right - left, max)
            }
        }
        return max
    }
}
