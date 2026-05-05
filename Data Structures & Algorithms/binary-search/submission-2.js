class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length
        let left = 0
        let right = n-1
        if (nums[left] === target) return left
        if (nums[right] === target) return right
        while (right - left > 1) {
            console.log(left, right)
            const mid = Math.floor((left + right)/2)
            if (target > nums[mid]) left = mid
            else if (target < nums[mid]) right = mid
            else return mid
        }
        return -1
    }
}
