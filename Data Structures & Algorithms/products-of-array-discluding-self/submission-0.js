class Solution {
    prod = (nums) => nums.reduce((p, n) => p*n,1)
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const n_prod = this.prod(nums)
        let prods = new Array(n).fill(n_prod)
        for (let i=0; i<n; i++) {
            if (nums[i] !== 0) {
                prods[i] = prods[i]/nums[i]
            } else {
                const others = nums.slice(0, i).concat(nums.slice(i+1,n))
                prods[i] = others.includes(0) ? 0 : this.prod(others)
            }
        }
        return prods
    }
}
