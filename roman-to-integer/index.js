const translateFunction = (string) => {
    let letterArray = [];
    let numberArray = [];

    for (let i = 0; i < string.length; i++) {
        letterArray.push(string[i]);

        switch (letterArray[i]) {
            case 'I':
                numberArray.push(1);
                break;
            case 'V':
                numberArray.push(5);
                break;
            case 'X':
                numberArray.push(10);
                break;
            case 'L':
                numberArray.push(50);
                break;
            case 'C':
                numberArray.push(100);
                break;
            case 'D':
                numberArray.push(500);
                break;
            default:
                numberArray.push(1000);
        }
    };

    console.log('LETTER ARRAY ', letterArray)
    console.log('NUMBER ARRAY ', numberArray)

    let finalNum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < numberArray[i + 1]) {
            finalNum += (numberArray[i + 1] - numberArray[i]);
            numberArray.shift();
            console.log('FINAL NUM inside IF' , finalNum);
        } else {
            finalNum += numberArray[i];
            console.log('FINAL NUM inside ELSE', finalNum);
        }
    }

    console.log('FINAL NUM ', finalNum);
    return finalNum;
}

translateFunction('III');     // 3
translateFunction('LVIII');   // 58
translateFunction('MCMXCIV'); // 1994
translateFunction('MXLIX');   // 1049
translateFunction('XLIX');    // 49
translateFunction('DXXXIV');  // 534
translateFunction('DCXCIV');  // 694