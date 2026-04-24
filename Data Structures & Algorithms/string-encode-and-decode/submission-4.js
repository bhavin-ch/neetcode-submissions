class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode = (strs) => JSON.stringify(strs)

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode = (str) => JSON.parse(str)
}
