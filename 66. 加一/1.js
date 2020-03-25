/**
 * @param {number[]} digits
 * @return {number[]}
 * @date 2020-03-25 20:14:21
 */
var plusOne = function (digits) {
    let num = BigInt(digits.join('')) + 1n;
    return String(num).split('')
};

// 执行用时 :56 ms, 在所有 JavaScript 提交中击败了95.29%的用户
// 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了67.45%的用户