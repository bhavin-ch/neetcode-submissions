class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        for (let i=0; i <strs.length; i++) {
            const str = strs[i]
            const key = str.split('').sort().join('')
            if (key in map) map[key].push(str)
            else map[key] = [str]
        }
        return Object.values(map)
    }
}
