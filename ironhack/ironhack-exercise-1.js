const myFunc = function(int) {
    // find all of it's multiplies up to and including 100
    let multiplyArray = [];
    for (let i = 1; i * int <= 100; i++) {   // fixed after
        /*
        multiplyArray.push(int * multiplier);
        i = int * multiplier;
        multiplier++;
        */
       multiplyArray.push(i * int);
    }
    // multiplyArray [25, 50, 75, 100]
    console.log('Multiply Array ', multiplyArray);


    // take the digit sum of each multiple: 45 ..> 4 + 5 = 9
    // 7, 5, 12, 1
    const digitSumArr = multiplyArray.map((n) => {
        const stringified = n.toString();
        return Number(stringified[0]) + Number(stringified[1]);
    });
    console.log('digitalSumARR ', digitSumArr);


    // total sum of each new digit sum
    // 25
    let totalSum = 0;
    digitSumArr.forEach((n) => {
        totalSum += n;
    });
    console.log('total sum    ', totalSum)
}

myFunc(25);
myFunc(30);
myFunc(12);
