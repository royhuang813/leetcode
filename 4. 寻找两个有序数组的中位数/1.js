// 【暴力算法】
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @date 2020-03-28 23:39:05
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let newArr = nums1.concat(nums2).sort((a, b) => { return a - b }),
        l = newArr.length,
        result = 0;

    if (l % 2 !== 0) {
        result = newArr[Math.floor(l / 2)]
    } else {
        result = (newArr[l / 2] + newArr[l / 2 - 1]) / 2
    }
    return result
};

// 执行用时 :220 ms, 在所有 JavaScript 提交中击败了8.60%的用户
// 内存消耗 :39.7 MB, 在所有 JavaScript 提交中击败了65.75%的用户