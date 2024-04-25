const array1 = ['a', 'b', 'c'];
//array1.forEach((element) => console.log(element));

// ------------------------------

const array2 = [1, 2, 3];
const array3 = array2.forEach((element) => element * 3);
//console.log(array2);
//console.log(array3);

// ------------------------------

let res = 0;
const multiply = function(elem) {
    res = elem * 3;
}

const array4 = [1, 2, 3];
const array5 = array4.forEach(multiply);

console.log(array4);
console.log(array5);
console.log(res);

// ------------------------------

let result = [];
const multiply2 = function(elem) {
    result.push(elem * 3);
}

const array6 = [1, 2, 3];
const array7 = array4.forEach(multiply2);

console.log(array6);
console.log(array7);
console.log(result);

// ------------------------------

const items = ["item1", "item2", "item3"];
const copyItems = [];

/*
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}
*/
items.forEach((item) => {
  copyItems.push(item);
});
console.log(copyItems);

// ------------------------------
