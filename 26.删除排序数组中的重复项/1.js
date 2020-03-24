/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // return [...new Set(nums)]
    // let arr = []
    // for (let i of nums) {
    //     if (arr.indexOf(i)) {
    //         arr.push(i)
    //     }
    // }
    // return arr.length
    for (let i in nums) {
        for (let j in nums) {
            j *= 1;
            if (nums[i] === nums[j + 1]) {
                nums.splice(i + 1, 1)
                return removeDuplicates(nums)
            }
        }
    }
    return nums
};
console.log(removeDuplicates(
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))