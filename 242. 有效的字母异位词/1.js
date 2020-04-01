// 【判断ASCII码之和是否相等】（此方法不严谨，边缘情况会出错）
/**
 * @param {string} s
 * @param {string} t
 * @date 2020-04-02 00:02:08
 */
var isAnagram = function (s, t) {
    let totalS = s !== '' ? [...s].map(value => { return value.charCodeAt() }).reduce((total, curValue) => { return total + curValue }) : '',
        totalT = t !== '' ? [...t].map(value => { return value.charCodeAt() }).reduce((total, curValue) => { return total + curValue }) : ''
    return totalS === totalT
};

// 【未通过，未考虑到字符出现次数】
/**
 * @param {string} s
 * @param {string} t
 * @date 2020-04-02 00:19:42
 */
var isAnagram = function (s, t) {
    let setS = new Set([...s]),
        setT = new Set([...t]),
        sLength = s.length,
        tLength = t.length;
    isPass = true;
    for (let i of setS) {
        if (!setT.has(i)) {
            isPass = false;
            break;
        }
    }
    return isPass && (sLength === tLength)
};