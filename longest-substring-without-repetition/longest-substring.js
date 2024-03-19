// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let myArr = [];
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        myArr.push(s[i]);
        let currentChar = s[i + 1];

        for (let j = 0; j < s.length; j++) {
            if (currentChar === myArr[j]) {
                // return myArr.length;
                // rewrite array from latest character
                // myArr[j] = currentChar;
                // maxLength = 1;
            } else {
                maxLength++;
            }
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
