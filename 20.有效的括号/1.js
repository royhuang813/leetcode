/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s, isClearEmptyChar = false) {
    let str = s,
        strArr = str;
    if (isClearEmptyChar === false) {
        str = str.replace(' ', '')
        strArr = str.split('')
    }
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    },
        isPass = true;
    if (strArr.length === 0) {
        return isPass;
    } else {
        for (let i = 0; i < strArr.length; i++) {
            let findAnothIdx = strArr.indexOf(obj[strArr[i]])
            if (findAnothIdx % 2 !== 0 && findAnothIdx !== -1) {
                strArr.splice(i, 1);
                strArr.splice(findAnothIdx - 1, 1)
                return isValid(strArr, true)
            }
            else {
                isPass = false;
                return isPass;
            }
        }
    }
};
console.log(isValid("(([]){})"))    //此例未通过