/**
 * @param {string} s
 * @return {number}
 * @date 2020-03-28 14:16:55
 */
var longestPalindrome = function (s) {
    let set = new Set(),
        maxLength = 0;
    for (let i of s) {
        if (set.has(i)) {
            maxLength += 2;
            set.delete(i)
        } else {
            set.add(i)
        }
    }
    return set.size > 0 ? maxLength + 1 : maxLength
};

// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了94.27%的用户
// 内存消耗 :36 MB, 在所有 JavaScript 提交中击败了67.65%的用户