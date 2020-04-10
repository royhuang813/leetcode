// 【硬解，无法通过测试用例99999】
/**
 * @param {number} n
 * @return {number}
 * @date 2020-04-10 12:09:31
 */
var bulbSwitch = function (n) {
    let arr = Array(n).fill(0),
        count = 0,
        startNum = 1;
    while (startNum <= n) {
        if (startNum === 1) {
            arr = Array(n).fill(1)
            startNum++;
        } else {
            for (let key in arr) {
                if ((+key + 1) % startNum === 0) {
                    arr.splice(key, 1, arr[key] === 0 ? 1 : 0)
                }
            }
            startNum++;
        }
    }
    arr.map(value => {
        count += value === 1 ? 1 : 0;
    })
    return count;
};

for (let i = 1; i < 30; i++) {
    console.log(i, bulbSwitch(i))
}


// 【查看评论，恍然大悟，将上面的结果输出，找到规律了】
/**
 * @param {number} n
 * @return {number}
 * @date 2020-04-10 12:26:23
 */
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n))
};

// 执行用时 :56 ms, 在所有 JavaScript 提交中击败了88.24%的用户
// 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户