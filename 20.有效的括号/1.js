/**
 * @param {string} s
 * @return {boolean}
 * @date 2020-03-25 22:20:06
 */
var isValid = function (s) {
    let matchObj = {
        "(": ")",
        "[": "]",
        "{": "}",
        ")": "(",
        "]": "[",
        "}": "{"
    },
        firstChar = s[0],
        isPass = false,
        stackArr = [];
    if (firstChar !== ')' || firstChar !== ']' || firstChar !== '}') {
        for (let i = 0, l = s.length; i < l; i++) {
            if (stackArr.indexOf(matchObj[s[i]]) === -1) {
                stackArr.push(s[i])
            } else {
                stackArr.pop();
            }
        }
        isPass = stackArr.length > 0 ? false : true;
    };
    return isPass;
}

// 执行用时 :136 ms, 在所有 JavaScript 提交中击败了5.03%的用户
// 内存消耗 :34 MB, 在所有 JavaScript 提交中击败了81.95%的用户