// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
/*
Starting state:
- starting with an empty record
- starting with a sum that equals 0

- if the operation is an integer 
    --> translate the integer (that is given in string format) to a number
    --> add that integer to the list of records
    --> add the integer to sum

- if the operation is a '+' 
    --> get the last 2 scores from the list of records
    --> add these 2 scores and add the result to the list of records (while keeping the previous scores in the list too)
    --> add the result to sum

- if the operation is a 'D' 
    --> get the last score from the list of records
    --> double that score and add the result to the list of records (while keeping the previous scores in the list too)
    --> add the result to sum

- if the operation is a 'C' 
    --> remove the last score from the record
    --> subtract this score from the sum

After all the calculations return the final sum
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

// optional to use it with a switch statement
// optional using objects, with functions as values paired with the operations
// TODO add object solution

console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1","C"]));

// NOTES
//console.log('TEST ', Number("+")) // NaN
//console.log('TEST ', typeof NaN)  // number
//console.log('TEST ', typeof Number("+")) // number