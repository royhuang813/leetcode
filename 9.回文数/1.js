/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = x + '', r = '';
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i]
    }
    return str === r
};

// 执行用时 :228 ms, 在所有 JavaScript 提交中击败了60.55%的用户
// 内存消耗 :45.8 MB, 在所有 JavaScript 提交中击败了51.92%的用户