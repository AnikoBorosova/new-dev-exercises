const s1 = "is2 Thi1s T4est 3a";
const s2 = "4of Fo1r pe6ople g3ood th5e the2";

const sortingFunction = function(s) {
    const splittedStrArr = s.split(' ');
    let map1 = new Map();
    const sortedStrArr = [];

    for (let i = 0; i < splittedStrArr.length; i++) {    
        for (let j = 0; j < splittedStrArr[i].length; j++) {
            if (Number.isInteger(Number(splittedStrArr[i][j]))) {
                map1.set(splittedStrArr[i][j], splittedStrArr[i]);
            }
        }
    }
    map1 = new Map([...map1.entries()].sort());

    map1.forEach((values) => {
        sortedStrArr.push(values)
    });

    const result = sortedStrArr.join(' ');
    console.log(result);
}

sortingFunction(s1);
sortingFunction(s2);