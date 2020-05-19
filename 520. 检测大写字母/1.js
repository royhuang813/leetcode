// 【正则匹配判断】
/**
 * @param {string} word
 * @return {boolean}
 * @date 2020-05-19 17:18:06
 */
var detectCapitalUse = function (word) {
    switch (true) {
        case /^[A-Z]+$/.test(word): {
            return !0
        }
        case /^[a-z]+$/.test(word): {
            return !0
        }
        case /^[a-z]+$/.test(word.substring(1)): {
            return !0
        }
        default: {
            return !1
        }
    }
};

// 执行用时 :84 ms, 在所有 JavaScript 提交中击败了31.56%的用户
// 内存消耗 :34 MB, 在所有 JavaScript 提交中击败了100.00%的用户