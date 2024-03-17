/*
I < 0 , I % 10 === 0, I != 0
// constraints included in description

Reverse on arrays
Comparing easier with string than arrays

Creating a new array - that uses more memory, we are storing a new object
Reverse - doesn’t create a new array

Memory allocation
It consumes more memory, because we doubling the size of the array 
If we temporarily store a first element and swap, we use a variable, but less memory than doubling the size
*/
// without loop - useing recursive

var isPalindrome = function(x) {
    var stringedNum = x.toString();
    var stringArr = stringedNum.split('');
    
    var checkPalindrome = function(stringArr) {
        
        if (stringArr.length <= 1) {
            console.log('Lenght smaller than 1');
            return true;  // otherwise infinite loop and call stack size exceed
        }
        
        var lastElem = stringArr.pop();
        var firstElem = stringArr.shift();
        
        if (firstElem !== lastElem) {
            return false;
        }
        return checkPalindrome(stringArr); // using the ever shortened array
    };
    return checkPalindrome(stringArr);
};

console.log(isPalindrome(12321));
console.log(isPalindrome(3443));
console.log(isPalindrome(678876));
console.log(isPalindrome(3456));


// fastest

var isPalindrome = function(x) {
    // Handle edge cases
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedSecondHalf = 0;
    while (x > reversedSecondHalf) {
        reversedSecondHalf = reversedSecondHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // When the length is an odd number, we can get rid of the middle digit by reversedSecondHalf/10
    return x === reversedSecondHalf || x === Math.floor(reversedSecondHalf / 10);
};
/*
1. Handle some edge cases: Negative numbers are not palindromes, and numbers ending with zero (except zero itself) are not palindromes because they can't be leading zeros.
2. Reverse the second half of the number.
3. Compare the reversed second half with the first half of the number.

This algorithm has a time complexity of O(log10(n)), where n is the input number, because we are 
reducing the input by a factor of 10 with each iteration. This makes it faster than the other approaches, 
especially for larger numbers.
*/


// fewest memory

/*
    We iterate through the digits of the number from both ends, comparing them.
    We extract the last digit of the number by using the modulo operator (%) and the first digit by dividing the number.
    We continue this process, adjusting the number each time by removing the last digit and dividing it by 10, and also dividing a divisor by 100.
    We stop when the number becomes 0 or when the first half becomes greater than the second half.

    This approach uses a constant amount of extra memory, primarily for storing the reversed number, so it's the most memory-efficient solution.
*/

var isPalindrome = function(x) {
    // Handle negative numbers and numbers ending with 0 (except for 0 itself)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverse = 0;
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // If the length of the number is odd, we can get rid of the middle digit
    return x === reverse || x === Math.floor(reverse / 10);
};