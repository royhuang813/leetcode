// 【暴力算法】
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @date 2020-04-13 10:05:32
 */
var moveZeroes = function (nums) {
    let zeroCount = 0,
        idx = 0,
        length = nums.length;
    while (idx < length) {
        if (nums[idx] === 0) {
            nums.splice(idx, 1);
            zeroCount++;
        } else {
            idx++;
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        nums.push(0)
    }
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了81.72%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了97.22%的用户