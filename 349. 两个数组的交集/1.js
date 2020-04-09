// 【set】
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @date 2020-04-09 14:54:06
 */

var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1),
        set2 = new Set(nums2),
        minSet = set1.size > set2.size ? set2 : set1,
        maxSet = set1.size > set2.size ? set1 : set2,
        result = [];
    for (let i of minSet) {
        if (maxSet.has(i)) {
            result.push(i)
        }
    }
    return result
}

// 执行用时 :76 ms, 在所有 JavaScript 提交中击败了36.93%的用户
// 内存消耗 :35 MB, 在所有 JavaScript 提交中击败了32.76%的用户


// 【indexOf】
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @date 2020-04-09 15:26:21
 */

var intersection = function (nums1, nums2) {
    let newArr = [...new Set(nums1), ...new Set(nums2)],
        set = new Set();
    for (let i of newArr) {
        if (newArr.indexOf(i) !== newArr.lastIndexOf(i)) {
            set.add(i)
        }
    }
    return [...set];
}

// 执行用时 :80 ms, 在所有 JavaScript 提交中击败了28.25%的用户
// 内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了5.17%的用户