/**
 * @param {number} x
 * @return {boolean}
 */
    
const isPalindrome = x => x.toString().split('').reverse().join('') === x.toString();    

console.log(isPalindrome(12321));
console.log(isPalindrome(3443));
console.log(isPalindrome(678876));
console.log(isPalindrome(3456));