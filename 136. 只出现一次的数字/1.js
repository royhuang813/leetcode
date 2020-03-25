/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-03-26 00:31:46
 */
var singleNumber = function (nums) {
    for (let i in nums) {
        if (nums.lastIndexOf(nums[i]) == i && nums.indexOf(nums[i]) == i) {
            return nums[i]
        }
    }
};

// 执行用时 :280 ms, 在所有 JavaScript 提交中击败了16.44%的用户
// 内存消耗 :36.8 MB, 在所有 JavaScript 提交中击败了47.45%的用户