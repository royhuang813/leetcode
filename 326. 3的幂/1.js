/**
 * @param {number} n
 * @return {boolean}
 * @date 2020-04-08 09:27:45
 */
var isPowerOfThree = function (n) {
    let i = 0;
    while (true) {
        if (Math.pow(3, i) === n) {
            return true;
        }
        if (Math.pow(3, i) > n) {
            return false;
        }
        i++;
    }
};

// 执行用时 :384 ms, 在所有 JavaScript 提交中击败了5.02%的用户
// 内存消耗 :48.1 MB, 在所有 JavaScript 提交中击败了41.46%的用户