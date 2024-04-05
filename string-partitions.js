// https://leetcode.com/problems/optimal-partition-of-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let stringArr = s.split('');
    let stack1 = [];
    let substringNum = 1;

    for (let i = 0; i < stringArr.length; i++) {
        if (!stack1.includes(stringArr[i])) {
            stack1.push(stringArr[i]);
        } else {
            stack1 = new Array();
            stack1.push(stringArr[i]);
            substringNum += 1;
        }
    }
    return substringNum;
};

console.log(partitionString('abacaba'));
console.log(partitionString('ssssss'));
