// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function(operations) {
    let recordStack = [];
    let sum = 0;

    for (let i = 0; i < operations.length; i++) {

        if (operations[i] === "+") {
            let lastItem = recordStack.pop();
            let nextToLastItem = recordStack.pop();
            sum += lastItem + nextToLastItem;
            recordStack.push(nextToLastItem, lastItem, lastItem + nextToLastItem);
        } else if (operations[i] === "D") {
            let lastItem = recordStack.pop();
            sum +=  lastItem * 2;
            recordStack.push(lastItem);
            recordStack.push(lastItem * 2);
        } else if (operations[i] === "C") {
            let lastItem = recordStack.pop();
            sum -= lastItem;
        } else {
            const toInt = Number(operations[i]);
            recordStack.push(toInt);
            sum += toInt;
        }
    }
    return sum;
};

console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1","C"]));

// NOTES
//console.log('TEST ', Number("+")) // NaN
//console.log('TEST ', typeof NaN)  // number
//console.log('TEST ', typeof Number("+")) // number