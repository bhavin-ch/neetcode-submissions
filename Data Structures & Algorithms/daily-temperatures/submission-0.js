//       [30,38,30,36,35,40,28]
// 0-30  [0]
// 1-38  [1,0]
// 2-30  [1,1,0]
// 3-36  [1,2,1,0]
// 4-35  [1,3,1,1,0]
// 5-40  [1,4,1,2,1,0]
// 6-28  [1,4,1,2,1,0,0]
class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [0]
        const top = () => stack.length ? stack[stack.length - 1] : null
        const diffs = [0]
        for (let i=1; i<temperatures.length; i++) {
            diffs.push(0)
            if (temperatures[i] > temperatures[i-1]) {
                while (temperatures[top()] < temperatures[i]) {
                    const idx = stack.pop()
                    diffs[idx] = i - idx
                }
            }
            stack.push(i)
            console.log(stack)
        }
        return diffs
    }
}
