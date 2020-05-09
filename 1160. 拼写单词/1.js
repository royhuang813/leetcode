// 【includes】
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * @date 2020-05-09 17:48:54
 */
var countCharacters = function (words, chars) {
    let curIndex = 0,
        countLength = 0,
        originalChars = chars;
    while (curIndex < words.length) {
        let isWord = true;
        for (let i = 0; i < words[curIndex].length; i++) {
            if (chars.includes(words[curIndex][i])) {
                chars = chars.replace(words[curIndex][i], '')
            } else {
                isWord = false;
                break;
            }
        }
        isWord ? countLength += words[curIndex].length : ''
        chars = originalChars
        curIndex++
    }
    return countLength
};

// 执行用时 :120 ms, 在所有 JavaScript 提交中击败了88.99%的用户
// 内存消耗 :42.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户