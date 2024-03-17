// data structure not important, functions here as note only
const data1 = [["Dolphins", 44, 23, 71], ["Koalas", 65, 54, 49]];
const data2 = [["Dolphins", 85, 54, 41], ["Koalas", 23, 34, 27]];

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
    console.log('DOLPHIN AVERAGE ', avgDolphins);
    console.log('KOALA AVERAGE ', avgKoalas);
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${2 * avgKoalas} vs ${avgDolphins})`;
    } else {
        return "No team wins";
    }
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log('FIRST RUN', checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log('SECOND RUN', checkWinner(scoreDolphins, scoreKoalas));