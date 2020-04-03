// 【递归】 没搞明白为什么7是快乐数
/**
 * @param {number} n
 * @return {boolean}
 * @date 2020-04-03 11:15:23
 */
var isHappy = function (n) {
    let strN = n + '',
        isHappyBool = true;
    if (strN.length === 1 && strN != 1 && strN != 7) {
        isHappyBool = false
    } else if (strN.length === 1 && strN == 1 || strN.length === 1 && strN == 7) {
        isHappyBool = true
    }
    else {
        let count = 0;
        for (let i of strN) {
            count += Math.pow(i, 2)
        }
        return isHappy(count)
    }
    return isHappyBool
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了79.69%的用户
// 内存消耗 :36 MB, 在所有 JavaScript 提交中击败了35.09%的用户