// 【从左到右直接判断拼接】
/**
 * @param {number} num
 * @return {string}
 * @date 2020-03-29 01:29:21
 */
var intToRoman = function (num) {
    let intToRomanObj = {
        1: "I",
        4: 'IV',
        5: "V",
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: "L",
        90: 'XC',
        100: "C",
        400: 'CD',
        500: "D",
        900: 'CM',
        1000: "M"
    },
        numStr = num + '',
        result = "";
    for (let i = 0, l = numStr.length; i < l; i++) {
        let curDigit = 10 ** (l - 1 - i),
            curValue = numStr[i] * curDigit;
        if (curValue > 1 * curDigit && curValue < 4 * curDigit) {
            let repeatAddCount = 0;
            while (repeatAddCount < numStr[i]) {
                result += intToRomanObj[1 * curDigit];
                repeatAddCount++;
            }
        } else if (curValue > 5 * curDigit && curValue < 9 * curDigit) {
            let repeatAddCount = 5,
                isNotAddFirstChar = true;
            while (repeatAddCount < numStr[i]) {
                result += isNotAddFirstChar ? intToRomanObj[5 * curDigit] : '';
                result += intToRomanObj[1 * curDigit];
                isNotAddFirstChar = false;
                repeatAddCount++;
            }
        } else if (curValue !== 0) {
            result += intToRomanObj[numStr[i] * curDigit];
        }
    }
    return result
};

// 执行用时 :152 ms, 在所有 JavaScript 提交中击败了85.78%的用户
// 内存消耗 :42.1 MB, 在所有 JavaScript 提交中击败了32.58%的用户