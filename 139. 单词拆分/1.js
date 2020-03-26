/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * @date 2020-03-26 23:41:33
 */
var wordBreak = function (s, wordDict) {
    // String.prototype.replaceAll = function (s1, s2) {
    //     return this.replace(new RegExp(s1, "g"), s2);
    // }
    if (wordDict.length === 0) {
        return false;
    }
    let str = s,
        result = true;
    while (str.length > 0) {
        if (wordDict.length == 0) {
            result = false;
            break;
        }
        for (i of wordDict) {
            if (str.indexOf(i) === 0) {
                str = str.replace(i, '')
            }
            if (str.lastIndexOf(i) + i.length === str.length) {
                str = str.replace(i, '')
            }
        }
        if (str.length !== 0) {
            str = s;
            wordDict.shift();
        } else {
            result = true;
            break;
        }
    }
    return result
}

console.log(wordBreak("leetcode", ["leet", "code"]))    //true
console.log(wordBreak("applepenapple", ["apple", "pen"]))   //true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))  //false
console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"])) //true
console.log(wordBreak("cars", ["car", "ca", "rs"])) //true
console.log(wordBreak("cbca", ["bc", "ca"]))    //false
console.log(wordBreak("ccaccc", ["cc", "ac"]))  //true
console.log(wordBreak("bccdbacdbdacddabbaaaadababadad", ["cbc", "bcda", "adb", "ddca", "bad", "bbb", "dad", "dac", "ba", "aa", "bd", "abab", "bb", "dbda", "cb", "caccc", "d", "dd", "aadb", "cc", "b", "bcc", "bcd", "cd", "cbca", "bbd", "ddd", "dabb", "ab", "acd", "a", "bbcc", "cdcbd", "cada", "dbca", "ac", "abacd", "cba", "cdb", "dbac", "aada", "cdcda", "cdc", "dbc", "dbcb", "bdb", "ddbdd", "cadaa", "ddbc", "babb"]))
//false，应该返回true，此例未通过，进度32/36