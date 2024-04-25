const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 30, 39, 29, 10, 13, 50];
console.log(array1.every(isBelowThreshold)); // true
console.log(array2.every(isBelowThreshold)); // false