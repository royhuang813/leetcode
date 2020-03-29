// 【indexOf()】
/**
 * @param {number[]} nums
 * @return {number[]}
 * @date 2020-03-29 20:13:47
 */
var singleNumber = function (nums) {
    let result = [];
    for (let i of nums) {
        if (result.indexOf(i) === -1) {
            result.push(i)
        } else {
            result.splice(result.indexOf(i), 1)
        }
    }
    return result
};

// 执行用时 :264 ms, 在所有 JavaScript 提交中击败了15.96%的用户
// 内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了30.77%的用户


// 【原数组splice()】
/**
 * @param {number[]} nums
 * @return {number[]}
 * @date 2020-03-29 21:09:29
 */
var singleNumber = function (nums) {
    let i = 0;
    while (nums.length !== 2) {
        let isNotFind = true;
        for (let j = i + 1, l = nums.length; j < l; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(i, 1);
                nums.splice(j - 1, 1);
                isNotFind = false;
                break;
            }
        }
        if (isNotFind) {
            i++
        }
    }
    return nums
};

// 执行用时 :108 ms, 在所有 JavaScript 提交中击败了25.00%的用户
// 内存消耗 :36.6 MB, 在所有 JavaScript 提交中击败了46.15%的用户