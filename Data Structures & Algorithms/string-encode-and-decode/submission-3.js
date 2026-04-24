class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const lens = strs.map(s => s.length)
        return lens.join(':') + '::' + strs.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const matches = str.match(/([\d:]+):(.*)/i)
        if (!matches) return []
        // lengths are 1st capture group
        const lens = matches[1].split(':').filter(x => !!x).map((x) => parseInt(x))
        // string are 2nd capture group
        const strings = matches[2]
        let idx = 0
        const strs = []
        for (const len of lens) {
            strs.push(strings.slice(idx, idx + len))
            idx += len
        }
        return strs
    }
}
