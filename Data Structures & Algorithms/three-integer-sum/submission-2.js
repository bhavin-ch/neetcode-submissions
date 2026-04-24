class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSums(numbers, target) {
        const map = new Map()
        const pairs = []
        for(let i=0; i<numbers.length; i++) {
            const diff = target - numbers[i]
            if (map.has(diff)) pairs.push([diff, numbers[i]])
            else {
                map.set(numbers[i], i)
            }
        }
        return pairs
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length
        const snums = nums.sort((a,b)=>a-b)
        const triplets = []
        for (let i=0; i<n; i++) {
            const num = snums[i]
            const rem = snums.slice(0,i).concat(snums.slice(i+1,n))
            const two_sums = this.twoSums(rem, -1 * num)
            const hits = two_sums.map(sum => [num, ...sum].sort((a,b)=>a-b))
            for (const hit of hits) {
                const idx = triplets.findIndex(t => t[0] === hit[0] && t[1] === hit[1])
                if (idx === -1) triplets.push(hit)
            }
        }
        return triplets
    }
}
