const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

const filtered = [12, 5, 8, 130, 44].filter((value) => value > 100);
console.log(filtered);

function isBigEnough(value) {
    return value >= 10;
}

const filtered2 = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered2);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));


const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
