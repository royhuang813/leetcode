// 【set】不过时间复杂度是 O(nlogn)，不满足要求的 O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let numsArr = [...new Set(nums.sort((a, b) => { return b - a }))];
    return numsArr.length < 3 ? numsArr[0] : numsArr[2];
};

// 执行用时 :88 ms, 在所有 JavaScript 提交中击败了34.20%的用户
// 内存消耗 :38.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户