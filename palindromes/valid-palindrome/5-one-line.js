/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = s => s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('') === s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

console.log(isPalindrome('&^*&^*&^sdjfaskjdfhdskjfh'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));