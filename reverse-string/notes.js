// in-place: the keyword is proportional space
// Run- start debugging, add breakpoint
// Right click on breakpoint - edit - add a condition
// Memory-allocation, how it works on different data - next time
// Valid parenthesis next time, efficiency
// Find a second exercise ourselves
// In parallel do the courses

/**
 * @param {character[]} s
 * @return {void}
 */

// on-liner
const reverseInOneLine = s => s.reverse();

console.log(reverseInOneLine(["h","e","l","l","o"]));
console.log(reverseInOneLine(["H","a","n","n","a","h"]));

console.log("--------------------------------")

// if getting a string as param
var reverseJoinedString = function(s) {
    const reversedString = s.split("").reverse().join("");
    console.log(reversedString);  
};

reverseJoinedString("hello");
reverseJoinedString("Hannah");

console.log("--------------------------------")

// not in-place
var reverseStringWithLoop = function(s) {
    const reversedArr = [];
    for (let i = 0; i < s.length; i++) {
       reversedArr.unshift(s[i]);        
    }
    console.log(reversedArr);
};

reverseStringWithLoop(["h","e","l","l","o"]);
reverseStringWithLoop(["H","a","n","n","a","h"]);


var reverseString = function(s) {
    const reversedString = s.reverse();
    // console.log(reversedString);  
};

reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"]);


/*
Function reverse(arr) {
    Let start = o
    Let end = arr.length - 1
    
    While (sort < end) {
    
    Let temp = arr[start]
    arr[start] = arr[end]
    arr[end] =  temp
    
    start++
    End—
    }
    Return arr
    }
*/