/**
 * @param {string} s
 * @return {boolean}
 */

let isPalindrome = function(s) {
   let cleanedArray = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');

   for (let i = 0; i < cleanedArray.length; i++) {
        let shortenedArray = cleanedArray;

        let lastElem = shortenedArray.pop();
        let firstElem = shortenedArray.shift();

        if (shortenedArray.length === 2) {
            lastElem = shortenedArray[1]
            firstElem = shortenedArray[0]
        }

        if (firstElem !== lastElem) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('&^*&^*&^sdjfaskjdfhdskjfh'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));