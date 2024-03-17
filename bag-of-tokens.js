/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */

/*
Face-up: If your current power is at least tokens[i], you may play tokeni, 
losing tokens[i] power and gaining 1 score.
Face-down: If your current score is at least 1, you may play tokeni, 
gaining tokens[i] power and losing 1 score.
*/
var bagOfTokensScore = function(tokens, power) {
    let score = 0;

    for (let i = 0; i < tokens.length; i++) {
        if (power >= tokens[i]) {
            power -= tokens[i];
            score += 1;
            console.log('POWER ', power);
            console.log('SCORE ', score);
        } else if (score >= 1) {
            power += tokens[i];
            score -= 1;
            console.log('POWER ', power);
            console.log('SCORE ', score);
        } else {
            score = 0;
        }
    }
    console.log('POWER ', power);
    console.log('SCORE ', score);
    return score;
};

// TODO: how to solve the max score problem

//console.log(bagOfTokensScore([100], 50));
//console.log(bagOfTokensScore([200, 100], 150));
console.log(bagOfTokensScore([100,200,300,400], 200));