/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function(x) {
    let stringedNum = x.toString();
    let stringArr = stringedNum.split('');
    
    for (let i = 0; i < stringArr.length; i++) {
        let shortenedArray = stringArr;

        let lastElem = stringArr.pop();
        let firstElem = stringArr.shift();

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

console.log(isPalindrome(12321));
console.log(isPalindrome(3443));
console.log(isPalindrome(9467887649));
console.log(isPalindrome(3456));