// https://leetcode.com/problems/optimal-partition-of-string/description/

/**
 * @param {string} s
 * @return {number}
 */

/*
we take the letters of the string one by one
we keep track of the number of substrings we have so far, starting with 1

    - if we encountered the letter before
        we create a new substring
        we keep this letter in memory within this new substring
        we increase the number of substring by 1
    - if we haven't encountered the letter before
        we keep it in memory in current substring
        (we keep the number of substring as is)
*/
var partitionString = function(s) {
    let stack1 = [];
    let substringNum = 1;

    for (let i = 0; i < s.length; i++) {
        if (stack1.includes(s[i])) {
            stack1 = new Array();
            substringNum++;
        }
        stack1.push(s[i]);
    }
    return substringNum;
};

console.log(partitionString('abacaba'));
console.log(partitionString('ssssss'));