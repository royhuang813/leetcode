/**
 * @param {number} n
 * @return {number}
 * @date 2020-04-04 23:21:20
 */
var countPrimes = function (n) {
    let primeNumArr = [],
        newN = n - 1;
    while (newN > 1) {
        let isPrimeNum = true;
        for (let i = 2; i < newN; i++) {
            if (newN % i === 0) {
                isPrimeNum = false;
                break;
            }
        }
        if (isPrimeNum) {
            primeNumArr.push(newN);
        }
        newN--;
    }
    return primeNumArr.length
};

console.log(countPrimes(499979))