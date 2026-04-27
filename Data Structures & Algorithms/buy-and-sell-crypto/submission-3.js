class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0
        const n = prices.length
        for (let i=0; i < n-1; i++) {
            const max_price = Math.max(...prices.slice(i, n))
            if (max_price > prices[i]) {
                const profit = max_price - prices[i]
                max_profit = (profit > max_profit) ? profit : max_profit
            }
        }
        return max_profit
    }
}
