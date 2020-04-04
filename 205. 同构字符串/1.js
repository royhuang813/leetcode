// 【indexof()】
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @date 2020-04-04 21:57:59
 */
var isIsomorphic = function (s, t) {
    let isomorphism = true;
    for (let i in s) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            isomorphism = false;
            break;
        }
    }
    return isomorphism;
}

// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了49.21%的用户
// 内存消耗 :40.1 MB, 在所有 JavaScript 提交中击败了20.00%的用户