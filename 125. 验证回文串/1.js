// 【双指针】
/**
 * @param {string} s
 * @return {boolean}
 * @date 2020-04-26 00:24:07
 */
var isPalindrome = function (s) {
    let newStr = s.toLocaleLowerCase();
    let newArr = newStr.replace(/[^a-z0-9]/g, ''),
        start = 0,
        end = newArr.length - 1;
    while (start < end) {
        if (newArr[start] !== newArr[end]) {
            return false
        }
        start++;
        end--;
    }
    return true
};

// 执行用时 :76 ms, 在所有 JavaScript 提交中击败了90.85%的用户
// 内存消耗 :37 MB, 在所有 JavaScript 提交中击败了76.92%的用户


// 【数组reverse】
/**
 * @param {string} s
 * @return {boolean}
 * @date 2020-04-26 00:31:51
 */
var isPalindrome = function (s) {
    let newStr = s.toLocaleLowerCase(),
        newArr = newStr.match(/[a-z0-9]/g);
    if (!newArr && typeof newArr != undefined && newArr != 0) {
        return true
    }
    else {
        return newArr.join('') === newArr.reverse().join('');
    }
};

// 执行用时 :92 ms, 在所有 JavaScript 提交中击败了43.03%的用户
// 内存消耗 :40.2 MB, 在所有 JavaScript 提交中击败了7.69%的用户