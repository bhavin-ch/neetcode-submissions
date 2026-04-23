class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sorted = nums.sort((a, b) => a - b)
        console.log(sorted)
        for (let i=0; i < nums.length - 1; i++) {
            if (sorted[i] === sorted[i+1]) return true
        }
        return false
    }
}
