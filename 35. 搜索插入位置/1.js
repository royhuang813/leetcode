/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @date 2020-03-25 01:08:41
 */
var searchInsert = function (nums, target) {
    let idx;
    if (nums.indexOf(target) !== -1) {
        idx = nums.indexOf(target)
    } else {
        nums.push(target);
        nums.sort((a, b) => {
            return a - b
        });
        idx = nums.indexOf(target)
    }
    return idx;
};

// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了17.59%的用户
// 内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了7.45%的用户