// 【暴力算法】
/**
 * @param {number[]} height
 * @return {number}
 * @date 2020-03-28 21:08:09
 */
var maxArea = function (height) {
    let maxWater = 0;
    for (let i = 0; i < height.length - 1; i++) {
        let idx = 0
        for (let j = i + 1; j < height.length; j++) {
            idx++;
            if (height[i] <= height[j]) {
                let product = height[i] * idx;
                maxWater = product > maxWater ? product : maxWater;
            } else {
                let = product = height[j] * idx;
                maxWater = product > maxWater ? product : maxWater;
            }
        }
    }
    return maxWater
};

// 执行用时 :1308 ms, 在所有 JavaScript 提交中击败了7.84%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了70.48%的用户


// 【双指针】
/**
 * @param {number[]} height
 * @return {number}
 * @date 2020-03-28 23:10:09
 */
var maxArea = function (height) {
    let firstIdx = 0,
        lastIdx = height.length,
        maxWater = 0;
    while (firstIdx !== lastIdx) {
        let firstValue = height[firstIdx],
            lastValue = height[lastIdx];
        if (firstValue <= lastValue) {
            let curMax = firstValue * (lastIdx - firstIdx);
            maxWater = curMax > maxWater ? curMax : maxWater
            firstIdx++;
        } else {
            let curMax = lastValue * (lastIdx - firstIdx);
            maxWater = curMax > maxWater ? curMax : maxWater
            lastIdx--;
        }
    }
    return maxWater

};

// 执行用时 :64 ms, 在所有 JavaScript 提交中击败了91.93%的用户
// 内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了78.51%的用户