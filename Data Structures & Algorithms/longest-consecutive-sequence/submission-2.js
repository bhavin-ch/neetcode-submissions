class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    first = (arr) => arr[0]
    last = (arr) => arr[arr.length - 1]
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        const cons_nums = [...new Set(nums)].sort((a, b) => a-b)
        let longest = 0
        let counter = 1
        for (let i=0; i<cons_nums.length-1; i++) {
            if (cons_nums[i+1] - cons_nums[i] === 1) {
                counter++
            } else {
                if (counter > longest) {
                    longest = counter
                }
                counter = 1
            }
        }
        return Math.max(longest, counter)
    }
}
