// 【暴力算法】
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-05-06 11:51:09
 */
var removeDuplicates = function (nums) {
    let curIndex = 0,
        startIndexOf = 0,
        endIndexOf = 1;
    while (curIndex < nums.length - 1) {
        startIndexOf = 0;
        endIndexOf = 1;
        while (startIndexOf !== endIndexOf) {
            startIndexOf = nums.indexOf(nums[curIndex]);
            endIndexOf = nums.lastIndexOf(nums[curIndex]);
            if (startIndexOf != endIndexOf) {
                nums.splice(endIndexOf, 1)
            } else {
                startIndexOf = 0;
                endIndexOf = 0;
            }
        }
        curIndex++;
    }
    return nums.length
};

// 执行用时 :444 ms, 在所有 JavaScript 提交中击败了5.09%的用户
// 内存消耗 :37.6 MB, 在所有 JavaScript 提交中击败了47.62%的用户