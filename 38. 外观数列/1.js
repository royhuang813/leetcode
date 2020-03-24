/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return n + ''
    } else {
        if (n instanceof Array) {
            let curValidStr = n[0],
                curNo = n[1],
                tempValue = '',
                tempChar = '',
                tempCount = 0;
            if (curNo === 1) {
                return curValidStr
            } else {
                for (let i = 0, l = curValidStr.length; i < l; i++) {
                    let curStr = curValidStr[i];
                    if (tempChar === '' || tempChar === curStr) {
                        tempChar = curStr;
                        tempCount++;
                        if (i + 2 > l) {
                            tempValue += tempCount + tempChar;
                            break;
                        }
                    } else {
                        tempValue += tempCount + tempChar;
                        tempChar = curStr;
                        tempCount = 1;

                        if (i + 2 > l) {
                            tempValue += 1 + curStr;
                            break;
                        }
                    }
                }
                curNo -= 1;
                return countAndSay([tempValue, curNo])
            }
        } else {
            return countAndSay(['11', n - 1])
        }
    }
}

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了49.40%的用户
// 内存消耗 :36 MB, 在所有 JavaScript 提交中击败了30.87%的用户