/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanedArray = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    let cleanedString = cleanedArray.join('');

    let reversedArr = cleanedArray.reverse();
    let reversedString = reversedArr.join('');

    if (reversedString == cleanedString) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome('&^*&^*&^sdjfaskjdfhdskjfh'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
