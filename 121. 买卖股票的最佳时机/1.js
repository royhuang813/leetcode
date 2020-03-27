// 【不知道怎么想的算法……】
/**
 * @param {number[]} prices
 * @return {number}
 * @date 2020-03-27 11:04:50
 */
var maxProfit = function (prices) {
    let maxIncome = 0,
        maxIncomeIdx = 0,   //应该在哪一天卖出
        stackArr = []
    loopCount = 1;
    while (prices.length > 1) {
        stackArr.pop();
        for (let l = prices.length - 1, i = l; i >= 0; i--) {
            if (stackArr.indexOf(prices[0]) === -1) {
                stackArr.push(prices[0])
            }
            if (stackArr[0] < prices[i]) {
                if (prices[i] - stackArr[0] > maxIncome) {
                    maxIncome = prices[i] - stackArr[0]
                    maxIncomeIdx = loopCount + i
                }
            }
        }
        prices = prices.slice(1)
        loopCount++;
    }
    return maxIncome
};

// 执行用时 :3900 ms, 在所有 JavaScript 提交中击败了5.05%的用户
// 内存消耗 :66.3 MB, 在所有 JavaScript 提交中击败了5.04%的用户

// 【硬解】
/**
 * @param {number[]} prices
 * @return {number}
 * @date 2020-03-27 11:16:21
 */
var maxProfit = function (prices) {
    let maxIncome = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = prices.length - 1; j >= 0; j--) {
            if (j > i && prices[j] > prices[i] && prices[j] - prices[i] > maxIncome) {
                maxIncome = prices[j] - prices[i]
            }
        }
    }
    return maxIncome;
}

// 执行用时 :656 ms, 在所有 JavaScript 提交中击败了7.72%的用户
// 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了81.54%的用户