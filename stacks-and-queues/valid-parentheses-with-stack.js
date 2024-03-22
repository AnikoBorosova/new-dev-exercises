// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let myStack = [];
    const splittedArr = s.split('');

    // if any bracket is missing it's pair and the number of items is an odd number
    if (splittedArr.length % 2 !== 0) {
        return false;
    }

    // in case of even number of items
    for (let i = 0; i < splittedArr.length; i++) {
        // in case of openers, add item to stack
        if (splittedArr[i] === '(' || splittedArr[i] === '[' || splittedArr[i] === '{') {
            myStack.push(splittedArr[i]);
        } else {
            let top = myStack.pop();

            // in case of closers, check if top is a matching pair
            if (splittedArr[i] === ')' && top !== '(') { 
                return false;
            }
    
            if (splittedArr[i] === ']' && top !== '[' ) { 
                return false;
            }
    
            if (splittedArr[i] === '}' && top !== '{') { 
                return false;
            }
        }
    }
    return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([}]'));
console.log(isValid('([{([{}])}])'));   // valid
console.log(isValid('([{([{[]])}])'));  // odd number of items
console.log(isValid('([{([{]])}])'));   // even number of items, but missing pair
console.log(isValid('([{}[)'));