const digPow = function (n, p) {
    const splittedNumArr = n.toString().split('').map((n) => {
        return Number(n);
    });

    let sum = 0;
    for (let i = 0; i < splittedNumArr.length; i++) {
        sum += splittedNumArr[i] ** (p + i);
    }

    if (sum % n === 0) {
        return sum / n;
    }
    return -1;
}
console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));