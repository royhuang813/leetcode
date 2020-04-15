// 【超时】
/**
 * @param {number[]} nums
 * @return {number[]}
 * @date 2020-04-15 23:55:40
 */
var findDisappearedNumbers = function (nums) {
    let result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            result.push(i)
        }
    }
    return result
};