/**
 * @param {number[]} nums
 * @return {number[][]}
 * @date 2020-03-29 12:43:56
 */
var threeSum = function (nums) {
    let result = [];
    for (let i = 0, l = nums.length; i < l; i++) {
        for (let j = i + 1; j < l - 1; j++) {
            let k = j + 1;
            while (k < nums.length) {
                // console.log('nums[i]', nums[i])
                // console.log('nums[j]', nums[j])
                // console.log('nums[k]', nums[k])
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let eachArr = [nums[i], nums[j], nums[k]].sort((a, b) => { return a - b }).toString();
                    if (result.indexOf(eachArr) === -1) {
                        result.push(eachArr);
                    }
                }
                k++
            }
        }
    }
    result = result.map(value => {
        return value.split(',')
    })
    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([3, -2, 1, 0]))