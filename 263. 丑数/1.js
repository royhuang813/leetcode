// 【递归】
/**
 * @param {number} num
 * @return {boolean}
 * @date 2020-04-01 23:19:07
 */
var isUgly = function (num) {
    if (num === 0) {
        return false;
    } else if (num === 1) {
        return true;
    } else if (num % 2 === 0) {
        return true && isUgly(num / 2)
    } else if (num % 3 === 0) {
        return true && isUgly(num / 3)
    } else if (num % 5 === 0) {
        return true && isUgly(num / 5)
    } else {
        return false
    }
};

// 执行用时 :116 ms, 在所有 JavaScript 提交中击败了7.69%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了81.63%的用户


// 【while直接判断】
/**
 * @param {number} num
 * @return {boolean}
 * @date 2020-04-01 23:26:08
 */
var isUgly = function (num) {
    let result = num === 0 ? false : true;
    while (result && num !== 1) {
        if (num % 2 === 0) {
            num /= 2
        } else if (num % 3 === 0) {
            num /= 3
        } else if (num % 5 === 0) {
            num /= 5
        } else {
            result = false
        }
    }
    return result
}

// 执行用时 :76 ms, 在所有 JavaScript 提交中击败了88.06%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了81.63%的用户