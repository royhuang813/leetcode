/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let str1 = '', str2 = '';
    for (let i in s) {
        if (str1.indexOf(s[i]) === -1) {
            str1 += s[i]
            if (str1.length > str2.length) {
                str2 = str1
            }
        } else {
            str1 = s[s.indexOf(s[i])+1]
            // lengthOfLongestSubstring(s.substring(str1.indexOf(s[i])+1));
        }
    }
    return str2
};
// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring("dvdf"))