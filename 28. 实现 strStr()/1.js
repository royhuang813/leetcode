// 【原生indexOf()】
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};

// 执行用时 :92 ms, 在所有 JavaScript 提交中击败了20.25%的用户
// 内存消耗 :34.4 MB, 在所有 JavaScript 提交中击败了50.90%的用户


// 【for】 根据需匹配的needle长度，将haystack拆开判断
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let sliceArr = [],
        needleLength = needle.length,
        result;
    if (needleLength > 0) {
        for (let i = 0, l = haystack.length; i < l; i++) {
            if (l - i >= needleLength) {
                sliceArr.push(haystack.substring(i, i + needleLength))
            }
        }
    } else {
        result = 0;
    }
    for (let i in sliceArr) {
        if (needle === sliceArr[i]) {
            result = i;
            break;
        }
    }
    return result === void 0 ? -1 : result;
};

// 执行用时 :56 ms, 在所有 JavaScript 提交中击败了95.97%的用户
// 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了30.96%的用户