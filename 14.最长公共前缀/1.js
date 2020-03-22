// 【for循环】
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let arrEachLength = strs.map(value => {
        return value.length
    }),
        minLength = 0,
        tempChar = "",
        result = "";
    for (let i of arrEachLength) {
        minLength = minLength === 0 ? i : minLength > i ? i : minLength;
    }
    out: for (let i = 0; i < minLength; i++) {
        let isNewLoop = true;
        for (let j = 0; j < strs.length; j++) {
            if (isNewLoop) {
                tempChar += strs[j][i]
                isNewLoop = false
            } else {
                if (tempChar !== strs[j].substring(0, i + 1)) {
                    break out;
                }
            }
        }
        result = tempChar
    }
    return result
};

// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了85.13%的用户
// 内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了14.29%的用户


// 【递归】
/**
 * @param {string[], number, boolean, string} strs, numOfLoop, isGetMinLength, curChar
 * @return {string}
 */
var longestCommonPrefix = function (strs, numOfLoop = 0, isGetMinLength = false, curChar = '') {
    if (isGetMinLength) {
    } else {
        let arrEachLength = strs.map(value => {
            return value.length
        }), minLength = 0;
        for (let i of arrEachLength) {
            minLength = minLength === 0 ? i : minLength > i ? i : minLength;
        }
    }
    if (curChar === '') {
        if (strs.length === 0 || strs[0].length === 0) {
            return ''
        } else {
            curChar = strs[0][0]
        }
    }
    let isSame = true;
    for (let i in strs) {
        if (strs[i].substring(0, numOfLoop + 1) === curChar) {
        } else {
            isSame = false
        }
    }
    if (isSame) {
        numOfLoop++;
        curChar += strs[0][numOfLoop]
        return longestCommonPrefix(strs, numOfLoop, true, curChar);
    } else {
        return numOfLoop === 0 ? '' : curChar.substring(0, numOfLoop)
    }
};

// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了85.13%的用户
// 内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了10.72%的用户