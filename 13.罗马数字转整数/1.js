/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    },
        arr = [],
        r = 0;
    for (let i of s) {
        if (i in obj) {
            arr.push(obj[i])
        }
    }
    for (let j = 0, l = arr.length; j < l; j++) {
        switch (arr[j + 1] - arr[j]) {
            case 4: {
                r += 4;
                j++;
                break;
            }
            case 9: {
                r += 9;
                j++;
                break;
            }
            case 40: {
                r += 40;
                j++;
                break;
            }
            case 90: {
                r += 90;
                j++;
                break;
            }
            case 400: {
                r += 400;
                j++;
                break;
            }
            case 900: {
                r += 900;
                j++;
                break;
            } default: {
                r += arr[j]
                break;
            }
        }
    }
    return r
};

// 执行用时 :152 ms, 在所有 JavaScript 提交中击败了92.27%的用户
// 内存消耗 :40.1 MB, 在所有 JavaScript 提交中击败了67.80%的用户