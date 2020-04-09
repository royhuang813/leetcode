// 【双指针】
/**
 * @param {string} s
 * @return {string}
 * @date 2020-04-09 14:27:44
 */
var reverseVowels = function (s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let strArr = s.split(""),
        start = 0,
        end = strArr.length - 1;
    while (start < end) {
        if (set.has(strArr[start]) && set.has(strArr[end])) {
            let tempChar = strArr[start];
            strArr[start] = strArr[end];
            strArr[end] = tempChar;
            start++;
            end--;
        } else if (set.has(strArr[start])) {
            end--;
        } else if (set.has(strArr[end])) {
            start++;
        } else {
            start++;
            end--;
        }
    }
    return strArr.join("")
}

// 执行用时 :96 ms, 在所有 JavaScript 提交中击败了50.72%的用户
// 内存消耗 :38.4 MB, 在所有 JavaScript 提交中击败了66.67%的用户