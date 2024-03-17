/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    let first = s[0];
    let last = s[s.length - 1];

    s[0] = last;
    s[s.length - 1] = first;

    let next = null;
    let nextToLast = null;

    for (let i = 1; i < s.length/2; i++) {
        next = s[i];
        nextToLast = s[s.length - (i + 1)];
        s[i] = s[s.length - (i + 1)];
        s[s.length - (i + 1)] = next;
    }
};

reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"]);
reverseString(["M","y","S","t","r","i","n","g"]);
