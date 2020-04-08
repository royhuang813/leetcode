// 【循环】
/**
 * @param {number} num
 * @return {boolean}
 * @date 2020-04-08 09:51:34
 */
var isPowerOfFour = function (num) {
    while (true) {
        if (num === 1) {
            return true;
        }
        if (num % 4 !== 0 || num === 0) {
            return false;
        }
        num /= 4;
    }
};

// 执行用时 :104 ms, 在所有 JavaScript 提交中击败了14.52%的用户
// 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了80.00%的用户