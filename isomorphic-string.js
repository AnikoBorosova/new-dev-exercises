/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
var isIsomorphic = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }
    const set1 = new Set(s.split(''));
    const set2 = new Set(t.split(''));

    if (set1.size !== set2.size) {
        return false;
    }

    // explanation needed about the map result - why are characters missing if I looped through the string?
    //const myMap = new Map();
    let stringArray = [];
    for (let i = 0; i < s.length; i++) {
        //myMap.set(s[i], t[i]);
        //console.log('11111111', myMap.values().next().value)
        //newstring.concat('', t[i]);
        
        stringArray.push(t[i]);
    }
    replacedString = stringArray.join('');
    return true;
};

console.log(isIsomorphic('egg', 'add'));  // true
console.log(isIsomorphic('egg', 'dda'));  // false
console.log(isIsomorphic('foo', 'bar'));  // false
console.log(isIsomorphic('paper', 'title')); // true
// what if console.log(isIsomorphic('ego', 'add'));  // false 
// what if console.log(isIsomorphic('ego', 'ade'));  // false 


  
