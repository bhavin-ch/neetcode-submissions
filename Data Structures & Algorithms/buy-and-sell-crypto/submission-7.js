class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0
        let min_price = prices[0]
        for (let i=1; i < prices.length; i++) {
            let profit = prices[i] - min_price
            max_profit = Math.max(profit, max_profit)
            min_price = Math.min(min_price, prices[i])
        }
        return max_profit
    }
}
