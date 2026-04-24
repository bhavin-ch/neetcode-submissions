class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const sorted_map = heights
            .map((h, i) => [h, i])
            .sort((a,b) => b[0]-a[0])
        let max = 0
        for (let i=0; i<sorted_map.length-1; i++) {
            for (let j=i; j<sorted_map.length; j++) {
                const [h1, i1] = sorted_map[i]
                const [h2, i2] = sorted_map[j]
                const area = Math.abs(i1-i2)*Math.min(h1,h2)
                if (area > max) max = area
            }
        }
        return max
    }
}
