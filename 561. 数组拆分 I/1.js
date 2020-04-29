// 【找规律】
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-04-29 11:13:37
 */
var arrayPairSum = function (nums) {
    let sortNums = nums.sort((a, b) => { return a - b }),
        count = 0,
        result = 0;
    while (count < sortNums.length) {
        result += sortNums[count];
        count += 2
    }
    return result
};

// 执行用时 :136 ms, 在所有 JavaScript 提交中击败了79.16%的用户
// 内存消耗 :39 MB, 在所有 JavaScript 提交中击败了100.00%的用户