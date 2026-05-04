class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        const n = heights.length
        const maxLeft = new Array({length: n})
        const maxRight = new Array({length: n})
        const minMax = new Array({length: n})
        maxLeft[0] = 0
        for (let i=1; i < n; i++) {
            maxLeft[i] = Math.max(heights[i-1], maxLeft[i-1])
        }
        maxRight[n-1] = 0
        for (let i=n-2; i >= 0; i--) {
            maxRight[i] = Math.max(heights[i+1], maxRight[i+1])
        }
        let area = 0
        for (let i=0; i<n; i++) {
            area += Math.max(Math.min(maxRight[i], maxLeft[i]) - heights[i], 0)
        }
        return area
    }
}
