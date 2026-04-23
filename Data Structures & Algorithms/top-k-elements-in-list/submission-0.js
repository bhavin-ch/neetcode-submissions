class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hist = nums.reduce((acc, n) => {
            if(acc.has(n)) acc.set(n, acc.get(n) + 1)
            else acc.set(n, 1)
            return acc
        }, new Map())
        const sorted_freq_pairs = [...hist.entries()].sort((e1, e2) => e2[1] - e1[1])
        return sorted_freq_pairs.slice(0, k).map((e) => e[0])
    }
}
