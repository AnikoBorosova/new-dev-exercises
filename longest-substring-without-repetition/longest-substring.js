// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    // nested for loop needed i + j
    let stringArr = s.split('');
    let myStack = [];

    for (let index = 0; index < stringArr.length; index++) {
        let currentChar = stringArr.shift();
        if (!myStack.includes(currentChar)) {
            myStack.push(currentChar);
        }    
    }
    return myStack.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));