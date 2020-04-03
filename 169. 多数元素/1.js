// 【暴力算法】
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-04-03 09:27:53
 */
var majorityElement = function (nums) {
    let obj = {};
    for (let i of nums) {
        if (obj[i]) {
            obj[i]++;
        } else {
            obj[i] = 1
        }
    }
    let maxNum = [0, 0];
    for (let i of Object.entries(obj)) {
        if (i[1] > maxNum[1]) {
            maxNum = i
        }
    }
    return maxNum[0]
};

// 执行用时 :136 ms, 在所有 JavaScript 提交中击败了8.03%的用户
// 内存消耗 :39.2 MB, 在所有 JavaScript 提交中击败了5.09%的用户


// 【暴力算法】
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-04-03 09:45:29
 */
var majorityElement = function (nums) {
    let obj = {};
    for (let i of nums) {
        if (obj[i]) {
            obj[i]++;
        } else {
            obj[i] = 1
        }
    }
    let tempCount = 0,
        maxNum = 0;
    for (let i in obj) {
        if (obj[i] > tempCount) {
            tempCount = obj[i]
            maxNum = i
        }
    }
    return maxNum
};

// 执行用时 :84 ms, 在所有 JavaScript 提交中击败了47.99%的用户
// 内存消耗 :38.8 MB, 在所有 JavaScript 提交中击败了5.88%的用户


// 【不知道怎么想的算法】
/**
 * @param {number[]} nums
 * @return {number}
 * @date 2020-04-03 10:05:50
 */
var majorityElement = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    } else {
        let numsArr = nums.sort((a, b) => { return b - a }),
            obj = {};
        while (numsArr.length > 1) {
            let count = 1;
            for (let i = 0, l = numsArr.length; i < l; i++) {
                if (numsArr[i] === numsArr[i + 1]) {
                    count++;
                    obj[count] = numsArr[i]
                } else {
                    numsArr.splice(0, count)
                    break;
                }
            }
        }
        return obj[Object.keys(obj).sort((a, b) => { return b - a })[0]]
    }
};

// 执行用时 :144 ms, 在所有 JavaScript 提交中击败了6.78%的用户
// 内存消耗 :41.8 MB, 在所有 JavaScript 提交中击败了5.09%的用户