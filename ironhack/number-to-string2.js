const s1 = "is2 Thi1s T4est 3a";

const sortingFunction = function(s) {
    const splittedStrArr = s.split(' ');
    const resultArr = new Array(splittedStrArr.length);

    splittedStrArr.forEach(word => {
        const rankIndex = word.search(/[0-9]/g);
        const rank = word[rankIndex];
        console.log('1', rank)
        console.log('2', rankIndex);

        resultArr[rank - 1] = word;
    });

    console.log(resultArr.join(' '));
}

sortingFunction(s1)