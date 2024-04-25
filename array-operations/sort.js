const months = ['March', 'Jan', 'Feb', 'Dec'];
const array1 = [1, 30, 4, 21, 100000];

// already strings, sorting them in alphabetical order
console.log(months.sort());

// converts to strings, then sorts according to each character's Unicode code point value
console.log(array1.sort());

// sorts the integers themselves, "real" sort
console.log(array1.sort((a, b) => a - b));

// [ 9, 5, 4, 3, 1, 1 ]
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
console.log(arr.sort(compareFn));