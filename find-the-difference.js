/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

/*
we take the letters of the second string one by one
we check the current letter 
    - if the first string does NOT include it
        - we return the letter as the result
    (- if includes it) - this branch does not need to be implemented
    (    - we continue)
*/

var findTheDifference = function(s, t) {
    for (let i = 0; i < t.length; i++) {
        if (!s.includes(t[i])) {
            return t[i];
        } 
    }
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference(s ='', t =''));