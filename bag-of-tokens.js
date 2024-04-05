// https://leetcode.com/problems/bag-of-tokens/description/

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
    let biggestTokenPower = 0;
    let notPlayableTokensCount = 0; 

    while (tokens.length > 0) {
        let currentTokenPower = tokens.shift();
        if (power >= currentTokenPower) {
            // play the token face-up
            score += 1;
            notPlayableTokensCount = 0;
        } else if (score >= 1 && notPlayableTokensCount < tokens.length ) {
            // only look at the token power to find the bigegst remaining token
            if (currentTokenPower > biggestTokenPower) {
                tokens.push(biggestTokenPower);
                biggestTokenPower = currentTokenPower;
            } else {
                tokens.push(currentTokenPower);
            }
            notPlayableTokensCount++;
        } else if (score >= 1) {
            // looked at all tokens, playing the biggest one face-down
            score -= 1;
            power += biggestTokenPower;
            notPlayableTokensCount = 0;
        }
    }
    return score;
};

// Remy's solution - simpler + sort method
const bagOfTokensScore = (tokens, power) => {
    const sortedTokens = tokens.sort((a,b) => a-b);
    let score = 0;

    while (sortedTokens.length > 0) {
        if (power >= sortedTokens[0]) {
            // If we have enough power, we play the smallest token face-up
            power -= sortedTokens.shift();
            score++;
        } else if (score > 0 && sortedTokens.length > 1){
            // Otherwise and if it's not the last token in the bag, we play the biggest token face-down
            power += sortedTokens.pop();
            score--;
        } else {
            // If we can't play the last token face-up, we just don't play it to keep the highest score
            break;
        }
    }
    return score;
};

//console.log(bagOfTokensScore([100], 50));
//console.log(bagOfTokensScore([200, 100], 150));
console.log(bagOfTokensScore([100,200,300,400], 200));