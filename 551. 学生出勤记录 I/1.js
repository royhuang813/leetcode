// 【indexOf+includes】
/**
 * @param {string} s
 * @return {boolean}
 * @date 2020-05-19 17:28:10
 */
var checkRecord = function (s) {
    if (s.indexOf('A') !== s.lastIndexOf('A')) {
        return !1
    } else if (s.includes('LLL')) {
        return !1
    } else {
        return !0
    }
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了34.18%的用户
// 内存消耗 :32.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户