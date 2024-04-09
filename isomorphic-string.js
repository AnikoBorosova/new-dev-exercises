/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let myMap = new Map();
    let mySet = new Set();
    // take the letters one by one and apply these checks:
    for (let i = 0; i < s.length; i++) {
        // check that we have encountered the letter already
        // if we have not encountered the letter before
        if (!myMap.has(s[i])) {
            // - Check if the mapped letter is already mapped by another letter
            // - if that's true
                //    => it is not isomorphic
                //    => Stop the treatment
            if (mySet.has(t[i])) {
                return false;
            } else {
                // otherwise
                // keep in memory
                myMap.set(s[i], t[i]);
                mySet.add(t[i]);
            }
        } else { // myMap.has(s[i])
        // - if we have encountered g before
        // check if it maps to the same character as the existing mapping in memory
            // - if it is the same mapping
            // -  continue
            if (myMap.get(s[i]) === t[i]) {
                continue;
            } else {
                // - if it is a different mapping
                //    => it is not isomorphic
                //    => Stop the treatment
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'));  // true
console.log(isIsomorphic('foo', 'bar'));  // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('egg', 'dda'));  // false

console.log(isIsomorphic('ego', 'add'));  // false
console.log(isIsomorphic('ego', 'ade'));  // true