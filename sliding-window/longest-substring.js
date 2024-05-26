// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    // we initialize a variable for the length, with 0
    // start loop 1: go through each character
        // we start a new substring
        // we check if we encountered it before
        // start loop 2: i+j
            // - if not
                // we store it in substring
            // if yes
        // is the current length bigger than the value in variable
            // if yes
                // we store the length in the variable
            // otherwise keep it as is
        
    let longest = 0;
    let strArr = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (!strArr.includes(s[i+j])) {
                strArr.push(s[i+j]);
            } else {
                if (strArr.length > longest) {
                    longest = strArr.length; 
                }
                //strArr = [];
                //strArr.push(s[i+j]);
            }   
        }
    }        
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));




/*
var lengthOfLongestSubstring = function(s) {
let longest = 0;
    let strArr = [];
    

    for (let i = 0; i < s.length; i++) {
        if (!strArr.includes(s[i])) {
            strArr.push(s[i]);
            
            console.log(strArr)
        } else {
            longest = strArr.length > longest ? strArr.length : longest;
            strArr = [];
            strArr.push(s[i]);
        }
    }
    
    if (longest < strArr.length) {
        longest = strArr.length;
    }
    return longest;
};
*/


/*
    let longest = 0;
    let strArr = [];
    for (let i = 0; i < s.length; i++) {
        if (!strArr.includes(s[i])) {
            strArr.push(s[i]);
        } else {
            longest = strArr.length > longest ? strArr.length : longest;
            strArr = [];
            strArr.push(s[i]);
        }
    }
    return longest;
    */

    // we initialize a variable for the length, with 0
    // go through each character
    // we check if we encountered it before
        // - if not
            // we store it in substring
        // if yes
            // is the current length bigger than the value in variable
                // if yes
                    // we store the length in the variable
                // otherwise keep it as is
            // we start a new substring
    // after the loop is over, return the value of the biggest length