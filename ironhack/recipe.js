/*
Write a function cakes() which takes the recipe (object) and the available ingredients (also an object)
and returns the maximum number of cakes that we can bake (integer).
There are no units for the amounts.
Ingredients that are not present in the objects, can be considered as 0
*/

// need to check if the recipes properties are all present in the ingredients object
// if not - return 0
// if yes - and one of the ingredients is less then the counterpart in recipe - return 0
// if yes - check all pairs and the remainders/modulo - return the smallest of modulos

const cakes = function(recipeObj, ingredientsObj) {
    let recipeIngArr = Object.keys(recipeObj);
    let availableAmountArr = Object.values(ingredientsObj);

    const haveSameProps = Object.keys(recipeObj).every((prop) => {
        return ingredientsObj.hasOwnProperty(prop);
    });

    const enoughIng = Object.values(recipeObj).every((val, idx) => {
        if (val > availableAmountArr[idx]) {
            return false
        }
        return true;
    });

    if (!haveSameProps || !enoughIng) {
        return 0;
    } else {
        const amountsModuloArr = recipeIngArr.map((ingr) => {
            return ingredientsObj[ingr] / recipeObj[ingr];
        });
        return Math.floor(Math.min(...amountsModuloArr));
    }
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2
console.log(cakes({flour: 1200, sugar: 1200, eggs: 5}, {flour: 500, sugar: 200, eggs: 1}));  // 0