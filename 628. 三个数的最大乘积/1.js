// 【排序并比较前后乘积】
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-04-21 23:28:22
 */
var maximumProduct = function (nums) {
    let newNums = nums.sort((a, b) => { return b - a }),
        positiveNums = newNums.slice(0, 3),
        negativeNums = newNums.slice(nums.length - 2),
        positiveResult = positiveNums[0] * positiveNums[1] * positiveNums[2],
        negativeResult = positiveNums[0] * negativeNums[0] * negativeNums[1];
    return positiveResult >= negativeResult ? positiveResult : negativeResult;
};

// 执行用时 :192 ms, 在所有 JavaScript 提交中击败了6.46%的用户
// 内存消耗 :38.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户