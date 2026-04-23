class Solution {
    /**
     * @param {string} x
     * @return {string}
     */
    reshuffle(x) {
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
     * @param {string} a
     * @param {string} b
     * @return {boolean}
     */
    areAnagrams(a, b) {
        if (a.length != b.length) return false
        return this.reshuffle(a) === this.reshuffle(b)
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        strs.sort((a, b) => (a.length - b.length))
        const groups = [[strs[0]]]
        outerloop: for (let i=1; i <strs.length; i++) {
            const str = strs[i]
            for (let j=groups.length-1; j >= 0; j--) {
                const comp = groups[j][0]
                if (str.length > comp.length) {
                    groups.push([str])
                    continue outerloop
                } else if (this.areAnagrams(str, comp)) {
                    groups[j].push(str)
                    continue outerloop
                }
            }
            groups.push([str])
        }
        return groups
    }
}
