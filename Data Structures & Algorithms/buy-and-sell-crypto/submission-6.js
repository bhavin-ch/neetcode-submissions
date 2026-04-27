class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // maxProfit(prices) {
    //     let max_profit = 0
    //     const n = prices.length
    //     for (let i=0; i < n-1; i++) {
    //         const max_price = Math.max(...prices.slice(i, n))
    //         if (max_price > prices[i]) {
    //             const profit = max_price - prices[i]
    //             max_profit = (profit > max_profit) ? profit : max_profit
    //         }
    //     }
    //     return max_profit
    // }
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
