class KthLargest {
    // nums = []
    // k = 0
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums.sort()
        this.k = k
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val)
        this.nums.sort((a, b) => a-b)
        const n = this.nums.length
        return (n >= this.k) ? this.nums[n-this.k] : this.nums[n-1]
    }
}
