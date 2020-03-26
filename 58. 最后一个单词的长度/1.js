/**
 * @param {string} s
 * @return {number}
 * @date 2020-03-26 10:30:52
 */
var lengthOfLastWord = function (s) {
    let result = 0,
        newStr = s.trim();
    if (newStr != '') {
        let lastSpaceIdx = newStr.lastIndexOf(" ");
        if (lastSpaceIdx != -1) {
            let word = newStr.substring(lastSpaceIdx + 1);
            result = word.length;
        } else {
            result = newStr.length;
        }
    }
    return result;
};

// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了64.14%的用户
// 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了72.54%的用户