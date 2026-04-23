class Solution {
    reshuffle = (x) => {
    return x
        .split('')
        .sort((a, b) => {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
        .join('')
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        return this.reshuffle(s) === this.reshuffle(t)
    }
}
