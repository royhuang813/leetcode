/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let str = x + '', r = str[0] == '-' ? '-' : '';
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i]
    }
    if (parseInt(r) < Math.pow(-2, 31) || parseInt(r) > Math.pow(2, 31) - 1) {
        r = 0
    }
    return parseInt(r)
};

// 执行用时 :88 ms, 在所有 JavaScript 提交中击败了63.16%的用户
// 内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了79.21%的用户