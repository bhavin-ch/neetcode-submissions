class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = s.split('')
        if (chars.length === 0) return 0
        let end = 1, start = 0, max = 1
        while (end < chars.length) {
            const idx = chars.slice(start, end).findIndex(x => x === chars[end])
            end++
            if (idx !== -1) {
                start = start + idx + 1
            } else {
                max = Math.max(end - start, max)
            }
        }
        return max
    }
}
