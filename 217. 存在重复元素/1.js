// 【set】
/**
 * @param {number[]} nums
 * @return {boolean}
 * @date 2020-04-05 14:16:19
 */
var containsDuplicate = function (nums) {
    let setLength = new Set(nums).size,
        arrLength = nums.length
    return setLength !== arrLength
};

// 执行用时 :68 ms, 在所有 JavaScript 提交中击败了93.98%的用户
// 内存消耗 :40.1 MB, 在所有 JavaScript 提交中击败了71.34%的用户


// 【暴力算法】
/**
 * @param {number[]} nums
 * @return {boolean}
 * @date 2020-04-05 14:27:41
 */
var containsDuplicate = function (nums) {
    let i = 0;
    while (i < nums.length - 1) {
        for (let j = i + 1, l = nums.length; j < l; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
        i++;
    }
    return false
};

// 执行用时 :1036 ms, 在所有 JavaScript 提交中击败了19.66%的用户
// 内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了97.08%的用户