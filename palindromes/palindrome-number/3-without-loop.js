/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function(x) {
    let stringedNum = x.toString();
    let stringArr = stringedNum.split('');

    let reversedArr = stringArr.reverse();
    let reversedString = reversedArr.join('');

    if (reversedString === stringedNum) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(12321));
console.log(isPalindrome(3443));
console.log(isPalindrome(678876));
console.log(isPalindrome(3456));
